/** @typedef {"TIMEOUT" | "NON_JSON_RESPONSE" | "NOT_FOUND" | "UPSTREAM_ERROR"} ApiErrorCode */

export class ApiError extends Error {
  /**
   * @param {string} message
   * @param {{ source: string, status?: number | null, code?: ApiErrorCode }} details
   */
  constructor(message, { source, status = null, code = "UPSTREAM_ERROR" }) {
    super(message);
    this.name = "ApiError";
    this.source = source;
    this.status = status;
    this.code = code;
  }
}
