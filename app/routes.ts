import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout/layout.tsx", [
    index("./routes/index.tsx"),
    route("infrastructure", "./routes/infrastructure.tsx"),
    route("metrics", "./routes/metrics.tsx"),
  ]),
] satisfies RouteConfig;
