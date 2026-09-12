const COLORS = {
  bar: "#20beff",
  label: "#e5e7eb",
  axis: "#9ca3af",
};

/**
 * @param {{
 *   points: { year: string, value: number, display: string }[],
 *   reduceMotion: boolean,
 * }} context
 */
export default function buildDeploymentOption({ points, reduceMotion }) {
  return {
    animation: !reduceMotion,
    backgroundColor: "transparent",
    grid: { top: 28, right: 0, bottom: 24, left: 0, containLabel: true },
    xAxis: {
      type: "category",
      data: points.map((point) => point.year),
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        color: COLORS.axis,
        fontFamily: "Poppins",
        fontSize: 12,
      },
    },
    yAxis: {
      type: "value",
      max: Math.max(...points.map((point) => point.value)),
      show: false,
    },
    series: [
      {
        type: "bar",
        data: points.map((point) => point.value),
        barWidth: "62%",
        silent: true,
        itemStyle: {
          color: COLORS.bar,
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
          position: "top",
          distance: 8,
          color: COLORS.label,
          fontFamily: "Poppins",
          fontSize: 12,
          formatter: (params) => points[params.dataIndex].display,
        },
      },
    ],
  };
}
