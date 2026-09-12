import InfrastructurePage from "~/pages/infrastructure";
import { loader as topologyLoader } from "./api.network-topology.js";
import { loader as peeringLoader } from "./api.peering-peers.js";
import { loader as subseaLoader } from "./api.subsea-gateways.js";
import { loader as statusLoader } from "./api.network-status.js";

export function meta() {
  return [
    {
      title:
        "Physical Infrastructure & Broadband Evolution | Rwanda Digital Evolution",
    },
    {
      name: "description",
      content:
        "The physical grid, domestic peering (RINEX & RICTA), and 5G spectrum evolution in Rwanda.",
    },
  ];
}

function resource(envelope) {
  return {
    status: envelope.data ? "ready" : "error",
    data: envelope.data ?? null,
    error: envelope.error?.message ?? null,
    meta: envelope.source
      ? {
          source: envelope.source,
          sourceUrl: envelope.sourceUrl,
          fetchedAt: envelope.fetchedAt,
        }
      : null,
  };
}

export async function loader() {
  const responses = await Promise.all([
    topologyLoader(),
    peeringLoader(),
    subseaLoader(),
    statusLoader(),
  ]);

  const [topology, peering, subsea, status] = (
    await Promise.all(responses.map((response) => response.json()))
  ).map(resource);

  return {
    topology,
    peering,
    subsea,
    status: {
      ...status,
      checkedAt: status.meta?.fetchedAt ?? new Date().toISOString(),
    },
  };
}

export default function InfrastructureRoute() {
  return <InfrastructurePage />;
}
