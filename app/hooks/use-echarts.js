import { useEffect, useRef } from "react";

export function useECharts(onInit, deps = []) {
  const hostRef = useRef(null);

  useEffect(() => {
    let active = true;
    let chart = null;
    let observer = null;

    const initChart = async () => {
      const { default: echarts } = await import("~/lib/charts/echarts.js");
      if (!active || !hostRef.current) return;

      chart = echarts.init(hostRef.current, null, { renderer: "canvas" });
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      await onInit({ echarts, chart, reduceMotion });

      observer = new ResizeObserver(() => chart?.resize());
      observer.observe(hostRef.current);
    };

    initChart();

    return () => {
      active = false;
      observer?.disconnect();
      chart?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return hostRef;
}
