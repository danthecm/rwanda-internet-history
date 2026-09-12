import { route, layout, index } from "@react-router/dev/routes";

import { NAV_ITEMS } from "./data/navigation.js";

const API_ROUTES = [
  ["api/network-topology", "./routes/api.network-topology.js"],
  ["api/peering-peers", "./routes/api.peering-peers.js"],
  ["api/subsea-gateways", "./routes/api.subsea-gateways.js"],
  ["api/network-status", "./routes/api.network-status.js"],
];

export default [
  layout(
    "./components/layout/AppLayout.jsx",
    NAV_ITEMS.map((item) =>
      item.to === "/" ? index(item.file) : route(item.to.slice(1), item.file),
    ),
  ),
  ...API_ROUTES.map(([path, file]) => route(path, file)),
];
