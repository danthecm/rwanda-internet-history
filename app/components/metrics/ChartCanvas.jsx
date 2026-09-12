import { useECharts } from "~/hooks/use-echarts";

const ChartCanvas = ({ buildOption, label, className = "" }) => {
  const hostRef = useECharts(
    ({ chart, reduceMotion }) => {
      chart.setOption(buildOption({ reduceMotion }));
    },
    [buildOption],
  );

  return (
    <div ref={hostRef} role="img" aria-label={label} className={className} />
  );
};

export default ChartCanvas;
