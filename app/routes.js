import { route, layout, index } from "@react-router/dev/routes";

export default [
  layout("./components/layout/layout.jsx", [
    index("./routes/index.jsx"),
    route("infrastructure", "./routes/infrastructure.jsx"),
    route("metrics", "./routes/metrics.jsx"),
  ]),
];
