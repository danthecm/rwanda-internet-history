import MetricsPage from "~/pages/metrics";

export function meta() {
  return [
    {
      title:
        "Digital Public Services & Socio-Economic Metrics | Rwanda Digital Evolution",
    },
    {
      name: "description",
      content:
        "Socio-economic inclusion, public service modernization (IremboGov), and Vision 2050 targets.",
    },
  ];
}

export default function MetricsRoute() {
  return <MetricsPage />;
}
