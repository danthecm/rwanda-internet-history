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

export function failed(error) {
  console.error(error);

  return Response.json(
    {
      error: {
        message: error?.expose
          ? error.message
          : "An unexpected error occurred.",
      },
    },
    { status: 502, headers: { "Cache-Control": "no-store" } },
  );
}
