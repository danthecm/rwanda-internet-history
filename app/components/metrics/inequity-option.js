const COLORS = {
  highlight: "#20beff",
  muted: "#64748b",
  track: "#262626",
};

/**
 * @param {{
 *   value: number,
 *   tone: keyof typeof COLORS,
 *   reduceMotion: boolean,
 * }} context
 */
export default function buildInequityOption({ value, tone, reduceMotion }) {
  return {
    animation: !reduceMotion,
    backgroundColor: "transparent",
    grid: { top: 0, right: 0, bottom: 0, left: 0 },
    xAxis: { type: "value", max: 100, show: false },
    yAxis: { type: "category", data: [""], show: false },
    series: [
      {
        type: "bar",
        silent: true,
        barWidth: 8,
        showBackground: true,
        backgroundStyle: { color: COLORS.track, borderRadius: 4 },
        itemStyle: { color: COLORS[tone], borderRadius: 4 },
        data: [value],
      },
    ],
  };
}
