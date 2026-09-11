import InfrastructurePage from "~/pages/infrastructure";

export function meta() {
  return [
    { title: "Physical Infrastructure & Broadband Evolution | Rwanda Digital Evolution" },
    {
      name: "description",
      content:
        "The physical grid, domestic peering (RINEX & RICTA), and 5G spectrum evolution in Rwanda.",
    },
  ];
}

export default function InfrastructureRoute() {
  return <InfrastructurePage />;
}
