import {
  BarChart,
  EffectScatterChart,
  LinesChart,
  PieChart,
  ScatterChart,
} from "echarts/charts";
import {
  GeoComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  BarChart,
  EffectScatterChart,
  LinesChart,
  PieChart,
  ScatterChart,
  GeoComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
]);

export default echarts;
