const DEFAULT_TIMEOUT_MS = 10_000;

export function publicError(message, options) {
  return Object.assign(new Error(message, options), { expose: true });
}

export async function fetchJson(
  url,
  { source, timeoutMs = DEFAULT_TIMEOUT_MS },
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw publicError(`${source} returned HTTP ${response.status}.`);
    }

    return await response.json();
  } catch (error) {
    if (error.expose) throw error;

    if (error.name === "AbortError") {
      throw publicError(
        `${source} did not respond within ${timeoutMs / 1000}s.`,
        { cause: error },
      );
    }

    throw publicError(
      `${source} could not be reached or sent an unreadable response.`,
      { cause: error },
    );
  } finally {
    clearTimeout(timeoutId);
  }
}

export function createCache(ttlMs) {
  const entries = new Map();

  return (key, factory) => {
    const hit = entries.get(key);
    if (hit && Date.now() - hit.at < ttlMs) {
      return hit.promise;
    }

    const promise = factory();
    entries.set(key, { at: Date.now(), promise });
    promise.catch(() => {
      if (entries.get(key)?.promise === promise) entries.delete(key);
    });

    return promise;
  };
}
