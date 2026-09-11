import { route, layout, index } from "@react-router/dev/routes";

import { NAV_ITEMS } from "./data/navigation.js";

export default [
  layout(
    "./components/layout/layout.jsx",
    NAV_ITEMS.map((item) =>
      item.to === "/" ? index(item.file) : route(item.to.slice(1), item.file),
    ),
  ),
];
