import { LANDING_POINT_IDS, NODE_COPY } from "~/data/fiber-network.js";

export function formatCoordinates([lon, lat]) {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lon >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}°${ns}, ${Math.abs(lon).toFixed(4)}°${ew}`;
}

function formatCapacity(mbps) {
  return mbps >= 1000
    ? `${(mbps / 1000).toFixed(1)} Gbps`
    : `${mbps.toLocaleString("en-GB")} Mbps`;
}

export function resourceKeyFor(id) {
  return id === "rinex" ? "peering" : "subsea";
}

function buildRinex(peering) {
  const { exchange, peerCount, routeServerPeers, capacityMbps, facility } =
    peering;

  return {
    fields: [
      { label: "Exchange", value: exchange.longName },
      {
        label: "Technology",
        value: `${exchange.media} · ${exchange.ipv6 ? "IPv4 + IPv6" : "IPv4"}`,
      },
      { label: "Capacity", value: `${formatCapacity(capacityMbps)} aggregate` },
      {
        label: "Coordinates",
        value: formatCoordinates([facility.longitude, facility.latitude]),
      },
      { label: "PeeringDB ID", value: String(exchange.id) },
    ],
    status:
      facility.status === "Active" ? "Active · Operational" : facility.status,
    telemetry: [
      {
        label: "Connected peers",
        value: `${peerCount} (${routeServerPeers} via RS)`,
      },
      { label: "Connected ports", value: String(facility.ports) },
      {
        label: "Peak traffic",
        value: `${facility.trafficPeakMbps.toFixed(1)} Mbps`,
      },
    ],
  };
}

function buildStation(id, subsea) {
  const station = subsea.stations.find((entry) => entry.id === id);
  if (!station) return null;

  return {
    fields: [
      { label: "Landing station", value: station.name },
      { label: "Systems landing", value: String(station.cables.length) },
      { label: "Cables", value: station.cables.join(" · ") },
      {
        label: "Coordinates",
        value: station.coordinates
          ? formatCoordinates(station.coordinates)
          : "—",
      },
    ],
    status: station.cables.length > 0 ? "Active · Landing station" : null,
    telemetry: [],
  };
}

function buildCable(id, subsea) {
  const cable = subsea.cables.find((entry) => entry.id === id);
  if (!cable) return null;

  const eastAfrican = cable.landingPoints
    .filter((point) => LANDING_POINT_IDS.includes(point.id))
    .map((point) => point.name.split(",")[0]);

  return {
    fields: [
      { label: "Length", value: cable.length },
      { label: "Owners", value: cable.owners },
      { label: "Suppliers", value: cable.suppliers },
      { label: "Ready for service", value: cable.readyForService },
      { label: "Landing points", value: String(cable.landingPoints.length) },
    ],
    status: "Active · Subsea backbone",
    telemetry: eastAfrican.length
      ? [{ label: "Serves", value: eastAfrican.join(" · ") }]
      : [],
  };
}

export function buildInspectorNode(id, { peering, subsea }) {
  const copy = id ? NODE_COPY[id] : null;
  if (!copy) return null;

  let detail = null;

  if (id === "rinex") {
    detail = peering ? buildRinex(peering) : null;
  } else if (LANDING_POINT_IDS.includes(id)) {
    detail = subsea ? buildStation(id, subsea) : null;
  } else {
    detail = subsea ? buildCable(id, subsea) : null;
  }

  if (!detail) return null;

  return {
    name: copy.name,
    accent: copy.accent,
    description: copy.description,
    ...detail,
  };
}
