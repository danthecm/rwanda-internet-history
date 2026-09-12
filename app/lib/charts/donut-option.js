const COLORS = {
  highlight: "#20beff",
  secondary: "#FAD201",
  track: "#262626",
  value: "#ffffff",
};

export default function buildDonutOption({
  value,
  display,
  tone,
  reduceMotion,
}) {
  return {
    animation: !reduceMotion,
    backgroundColor: "transparent",
    title: {
      text: display,
      left: "center",
      top: "center",
      textStyle: {
        color: COLORS.value,
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: 700,
      },
    },
    series: [
      {
        type: "pie",
        radius: ["78%", "100%"],
        center: ["50%", "50%"],
        silent: true,
        startAngle: 90,
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value, itemStyle: { color: COLORS[tone] } },
          { value: 100 - value, itemStyle: { color: COLORS.track } },
        ],
      },
    ],
  };
}
