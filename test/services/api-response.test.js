import { afterEach, describe, expect, it, vi } from "vitest";
import { failed, ok } from "~/services/api-response.js";
import { publicError } from "~/services/http.js";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("api-response service", () => {
  describe("ok()", () => {
    it("returns a 200 response with formatted JSON and metadata", async () => {
      const response = ok(
        { items: [1, 2, 3] },
        {
          source: "PeeringDB",
          sourceUrl: "https://example.com",
          maxAge: 300,
        },
      );

      expect(response.status).toBe(200);
      expect(response.headers.get("Cache-Control")).toBe("public, max-age=300");

      const data = await response.json();
      expect(data.data).toEqual({ items: [1, 2, 3] });
      expect(data.source).toBe("PeeringDB");
      expect(data.sourceUrl).toBe("https://example.com");
      expect(typeof data.fetchedAt).toBe("string");
    });

    it("sets Cache-Control to no-store when maxAge is 0", () => {
      const response = ok(
        {},
        {
          source: "Test",
          sourceUrl: "https://example.com",
          maxAge: 0,
        },
      );

      expect(response.headers.get("Cache-Control")).toBe("no-store");
    });
  });

  describe("failed()", () => {
    it("forwards the message of an error flagged as public", async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});

      const response = failed(
        publicError("PeeringDB has no exchange record for RINEX in Rwanda."),
      );

      expect(response.status).toBe(502);
      expect(response.headers.get("Cache-Control")).toBe("no-store");

      const body = await response.json();
      expect(body.error.message).toBe(
        "PeeringDB has no exchange record for RINEX in Rwanda.",
      );
    });

    it("hides the message of an unflagged error", async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});

      const response = failed(
        new Error("connect ECONNREFUSED 10.0.0.4:5432 while querying secrets"),
      );

      const body = await response.json();
      expect(body.error.message).toBe("An unexpected error occurred.");
      expect(body.error.message).not.toContain("ECONNREFUSED");
    });

    it("falls back to the generic message for a non-Error value", async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});

      const response = failed({});

      const body = await response.json();
      expect(body.error.message).toBe("An unexpected error occurred.");
    });

    it("logs every failure, including ones it forwards", () => {
      const consoleSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const exposed = publicError("Upstream timed out.");
      const internal = new Error("internal");

      failed(exposed);
      failed(internal);

      expect(consoleSpy).toHaveBeenCalledTimes(2);
      expect(consoleSpy).toHaveBeenCalledWith(exposed);
      expect(consoleSpy).toHaveBeenCalledWith(internal);
    });
  });
});
