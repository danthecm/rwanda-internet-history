import { afterEach, describe, expect, it, vi } from "vitest";
import { createCache, fetchJson, publicError } from "~/services/http.js";

const SOURCE = { source: "PeeringDB" };
const SECRET_URL = "https://internal.example.com/api/keys?token=abc123";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe("publicError()", () => {
  it("flags the error as safe to show and keeps the cause", () => {
    const cause = new Error("ECONNREFUSED 10.0.0.1:443");
    const error = publicError("Source unreachable.", { cause });

    expect(error.expose).toBe(true);
    expect(error.message).toBe("Source unreachable.");
    expect(error.cause).toBe(cause);
  });
});

describe("fetchJson()", () => {
  it("returns parsed JSON on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, json: async () => ({ id: 1032 }) }),
    );

    await expect(fetchJson(SECRET_URL, SOURCE)).resolves.toEqual({ id: 1032 });
  });

  it("names the source, not the URL, on a non-2xx response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 429 }),
    );

    await expect(fetchJson(SECRET_URL, SOURCE)).rejects.toMatchObject({
      expose: true,
      message: "PeeringDB returned HTTP 429.",
    });
  });

  it("never leaks the request URL in a transport failure", async () => {
    const cause = new TypeError("fetch failed: getaddrinfo ENOTFOUND");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(cause));

    const error = await fetchJson(SECRET_URL, SOURCE).catch((e) => e);

    expect(error.expose).toBe(true);
    expect(error.message).not.toContain("internal.example.com");
    expect(error.message).not.toContain("abc123");
    expect(error.cause).toBe(cause);
  });

  it("aborts and reports a timeout once the budget elapses", async () => {
    vi.useFakeTimers();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        (_url, { signal }) =>
          new Promise((_resolve, reject) => {
            signal.addEventListener("abort", () => {
              reject(
                Object.assign(new Error("aborted"), { name: "AbortError" }),
              );
            });
          }),
      ),
    );

    const pending = fetchJson(SECRET_URL, { ...SOURCE, timeoutMs: 5_000 });
    const assertion = expect(pending).rejects.toMatchObject({
      expose: true,
      message: "PeeringDB did not respond within 5s.",
    });

    await vi.advanceTimersByTimeAsync(5_000);
    await assertion;
  });

  it("passes an abort signal so a hung request cannot stall the render", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({}) });
    vi.stubGlobal("fetch", fetchMock);

    await fetchJson(SECRET_URL, SOURCE);

    expect(fetchMock.mock.calls[0][1].signal).toBeInstanceOf(AbortSignal);
  });
});

describe("createCache()", () => {
  it("shares one in-flight promise between concurrent callers", async () => {
    const cache = createCache(60_000);
    const factory = vi.fn().mockResolvedValue("value");

    const [a, b] = await Promise.all([
      cache("key", factory),
      cache("key", factory),
    ]);

    expect(a).toBe("value");
    expect(b).toBe("value");
    expect(factory).toHaveBeenCalledTimes(1);
  });

  it("keys entries independently", async () => {
    const cache = createCache(60_000);
    const factory = vi.fn((value) => Promise.resolve(value));

    await cache("a", () => factory("a"));
    await cache("b", () => factory("b"));

    expect(factory).toHaveBeenCalledTimes(2);
  });

  it("evicts rejections so one blip is not served for the whole window", async () => {
    const cache = createCache(60_000);
    const factory = vi
      .fn()
      .mockRejectedValueOnce(new Error("upstream down"))
      .mockResolvedValueOnce("recovered");

    await expect(cache("key", factory)).rejects.toThrow("upstream down");
    await expect(cache("key", factory)).resolves.toBe("recovered");
    expect(factory).toHaveBeenCalledTimes(2);
  });

  it("refetches once the TTL has expired", async () => {
    vi.useFakeTimers();
    const cache = createCache(60_000);
    const factory = vi.fn().mockResolvedValue("value");

    await cache("key", factory);
    vi.advanceTimersByTime(60_001);
    await cache("key", factory);

    expect(factory).toHaveBeenCalledTimes(2);
  });
});
