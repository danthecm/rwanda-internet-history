import { ApiError } from "./api-error.js";

/**
 * @param {unknown} data
 * @param {{ source: string, sourceUrl: string, maxAge?: number }} meta
 */
export function ok(data, { source, sourceUrl, maxAge = 300 }) {
  return Response.json(
    { data, source, sourceUrl, fetchedAt: new Date().toISOString() },
    {
      headers: {
        "Cache-Control": maxAge > 0 ? `public, max-age=${maxAge}` : "no-store",
      },
    },
  );
}

/** @param {unknown} error */
export function failed(error) {
  const known = error instanceof ApiError;

  if (!known) {
    console.error(error);
  }

  return Response.json(
    {
      error: {
        message: known ? error.message : "An unexpected error occurred.",
        source: known ? error.source : "Unknown",
        code: known ? error.code : "UPSTREAM_ERROR",
      },
    },
    { status: 502, headers: { "Cache-Control": "no-store" } },
  );
}
