import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL_STATE = {
  status: "loading",
  data: null,
  meta: null,
  error: null,
  checkedAt: null,
};

/**
 * @param {string} url
 * @param {{ intervalMs?: number }} [options]
 * @returns {{
 *   status: "loading" | "ready" | "error",
 *   data: unknown,
 *   error: string | null,
 *   checkedAt: Date | null,
 *   reload: () => void,
 * }}
 */
export default function useApiResource(url, { intervalMs = 0 } = {}) {
  const [state, setState] = useState(INITIAL_STATE);
  const controllerRef = useRef(null);
  const checkedAtRef = useRef(0);

  const load = useCallback(async () => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    /** @param {Partial<typeof INITIAL_STATE>} next */
    const settle = (next) => {
      if (controller.signal.aborted) return;
      checkedAtRef.current = Date.now();
      setState({ ...INITIAL_STATE, ...next, checkedAt: new Date() });
    };

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: "application/json" },
      });
      const body = await response.json();

      if (!response.ok || body?.error) {
        settle({
          status: "error",
          error: body?.error?.message ?? `Request failed with HTTP ${response.status}.`,
        });
        return;
      }

      settle({
        status: "ready",
        data: body.data,
        meta: {
          source: body.source,
          sourceUrl: body.sourceUrl,
          fetchedAt: body.fetchedAt,
        },
      });
    } catch (error) {
      if (error?.name === "AbortError") return;
      settle({ status: "error", error: "Could not reach the server." });
    }
  }, [url]);

  useEffect(() => {
    const timeout = setTimeout(load, 0);

    if (intervalMs <= 0) {
      return () => {
        clearTimeout(timeout);
        controllerRef.current?.abort();
      };
    }

    const refreshIfVisible = () => {
      if (document.visibilityState === "visible") load();
    };

    const interval = setInterval(refreshIfVisible, intervalMs);
    const onVisibilityChange = () => {
      if (Date.now() - checkedAtRef.current >= intervalMs) refreshIfVisible();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      controllerRef.current?.abort();
    };
  }, [load, intervalMs]);

  return { ...state, reload: load };
}
