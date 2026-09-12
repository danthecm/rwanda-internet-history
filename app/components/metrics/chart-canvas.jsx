import { useEffect, useRef } from "react";

/**
 * @param {{
 *   buildOption: (context: { reduceMotion: boolean }) => object,
 *   label: string,
 *   className?: string,
 * }} props
 */
export default function ChartCanvas({ buildOption, label, className = "" }) {
  const hostRef = useRef(null);
  const buildOptionRef = useRef(buildOption);

  useEffect(() => {
    buildOptionRef.current = buildOption;
  }, [buildOption]);

  useEffect(() => {
    const host = hostRef.current;
    let chart = null;
    let observer = null;
    let disposed = false;

    const timeout = setTimeout(async () => {
      const echarts = await import("echarts");
      if (disposed) return;

      chart = echarts.init(host, null, { renderer: "canvas" });

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      chart.setOption(buildOptionRef.current({ reduceMotion }));

      observer = new ResizeObserver(() => {
        window.requestAnimationFrame(() => {
          if (!disposed) chart.resize();
        });
      });
      observer.observe(host);
    }, 0);

    return () => {
      disposed = true;
      clearTimeout(timeout);
      observer?.disconnect();
      chart?.dispose();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      role="img"
      aria-label={label}
      className={className}
    />
  );
}
