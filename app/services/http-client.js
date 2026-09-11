import { ApiError } from "./api-error.js";

const DEFAULT_TIMEOUT_MS = 10_000;
const JSON_CONTENT_TYPE = /^application\/(?:[\w.+-]+\+)?json\b/i;

export class HttpClient {
  /** @param {{ source: string, baseUrl: string, timeoutMs?: number }} options */
  constructor({ source, baseUrl, timeoutMs = DEFAULT_TIMEOUT_MS }) {
    this.source = source;
    this.baseUrl = baseUrl;
    this.timeoutMs = timeoutMs;
  }

  /**
   * @param {string} path
   * @param {{ searchParams?: Record<string, string | number> }} [options]
   * @returns {Promise<unknown>}
   */
  async getJson(path, { searchParams } = {}) {
    const url = new URL(path, this.baseUrl);
    for (const [key, value] of Object.entries(searchParams ?? {})) {
      url.searchParams.set(key, String(value));
    }

    let response;
    try {
      response = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(this.timeoutMs),
      });
    } catch (cause) {
      const timedOut = cause?.name === "TimeoutError" || cause?.name === "AbortError";
      throw new ApiError(
        timedOut
          ? `${this.source} did not respond within ${Math.round(this.timeoutMs / 1000)}s.`
          : `${this.source} could not be reached.`,
        { source: this.source, code: timedOut ? "TIMEOUT" : "UPSTREAM_ERROR" },
      );
    }

    if (!response.ok) {
      throw new ApiError(`${this.source} returned HTTP ${response.status}.`, {
        source: this.source,
        status: response.status,
      });
    }

    if (!JSON_CONTENT_TYPE.test(response.headers.get("content-type") ?? "")) {
      throw new ApiError(
        `${this.source} returned a non-JSON response for ${url.pathname}.`,
        { source: this.source, status: response.status, code: "NON_JSON_RESPONSE" },
      );
    }

    try {
      return await response.json();
    } catch {
      throw new ApiError(`${this.source} returned a malformed JSON body.`, {
        source: this.source,
        status: response.status,
        code: "NON_JSON_RESPONSE",
      });
    }
  }
}
