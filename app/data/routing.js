import legendNationalRing from "~/assets/icons/legend-national-ring.svg";
import legendRinex from "~/assets/icons/legend-rinex.svg";
import legendSubsea from "~/assets/icons/legend-subsea.svg";
import legendTransit from "~/assets/icons/legend-transit.svg";

/** @typedef {"amber" | "ember" | "subsea"} Accent */

export const ROUTING_ID = "optical-routing";

export const HEADER = {
  kicker: "East Africa Optical Routing & Domestic Peering",
  title: "Terrestrial Fiber Grid & International Subsea Gateways",
};

export const GEO_NODES = {
  kigali: [30.0619, -1.9441],
  musanze: [29.635, -1.4998],
  rubavu: [29.2564, -1.6761],
  huye: [29.7394, -2.5967],
  rwamagana: [30.4347, -1.9487],
  kampala: [32.5825, 0.3476],
  nairobi: [36.8219, -1.2921],
  dodoma: [35.7516, -6.163],
  mombasa: [39.6682, -4.0435],
  darEsSalaam: [39.2083, -6.7924],
};

export const NATIONAL_RING = [
  ["kigali", "rwamagana"],
  ["rwamagana", "huye"],
  ["huye", "rubavu"],
  ["rubavu", "musanze"],
  ["musanze", "kigali"],
];

export const TRANSIT_CORRIDORS = [
  ["kigali", "kampala"],
  ["kampala", "nairobi"],
  ["nairobi", "mombasa"],
  ["kigali", "dodoma"],
  ["dodoma", "darEsSalaam"],
];

export const WAYPOINTS = [
  { id: "kampala", label: "Kampala" },
  { id: "nairobi", label: "Nairobi" },
  { id: "dodoma", label: "Dodoma" },
];

export const HUBS = [
  { id: "rinex", node: "kigali", mapLabel: "Kigali RINEX Hub", accent: "ember" },
  {
    id: "mombasa-kenya",
    node: "mombasa",
    mapLabel: "Mombasa Cable Landing Station",
    accent: "subsea",
  },
  {
    id: "dar-es-salaam-tanzania",
    node: "darEsSalaam",
    mapLabel: "Dar es Salaam Landing Station",
    accent: "subsea",
  },
];

export const LANDING_POINT_IDS = HUBS.filter((hub) => hub.id !== "rinex").map(
  (hub) => hub.id,
);

export const DEFAULT_NODE_ID = "rinex";

/** @type {Record<string, { name: string, accent: Accent, description: string }>} */
export const NODE_COPY = {
  rinex: {
    name: "RINEX Peering Hub",
    accent: "amber",
    description:
      "Inner-city bypass keeping domestic traffic local — eliminating satellite round-trips and cutting inter-ISP latency.",
  },
  "mombasa-kenya": {
    name: "Mombasa Cable Landing Station",
    accent: "subsea",
    description:
      "The primary East African landing facility, where Rwanda's overland transit through Kampala and Nairobi reaches deep-sea fiber.",
  },
  "dar-es-salaam-tanzania": {
    name: "Dar es Salaam Landing Station",
    accent: "subsea",
    description:
      "The Central Corridor's ocean gateway, routing Rwandan fiber south through Dodoma and onto the Indian Ocean trunk systems.",
  },
  "seacomtata-tgn-eurasia": {
    name: "SEACOM / Tata TGN-Eurasia",
    accent: "subsea",
    description:
      "The first privately financed subsea system along the East African coast, linking the region to Europe and Asia.",
  },
  "the-east-african-marine-system-teams": {
    name: "The East African Marine System",
    accent: "subsea",
    description:
      "A public-private system built to secure redundant high-speed bandwidth between East Africa and the Middle East.",
  },
  "eastern-africa-submarine-system-eassy": {
    name: "Eastern Africa Submarine System",
    accent: "subsea",
    description:
      "A consortium cable running the length of the East African coastline, delivering high-density regional bandwidth.",
  },
};

export const INSPECTOR = {
  eyebrow: "Node Inspector",
  closeLabel: "Hide node inspector",
  telemetryTitle: "Live Telemetry",
};

export const LEGEND = [
  {
    icon: legendNationalRing,
    title: "National Ring",
    detail: "3,000+ km · 30 Districts",
  },
  {
    icon: legendTransit,
    title: "Cross-Border Transit",
    detail: "Kenya & Tanzania corridors",
  },
  {
    icon: legendSubsea,
    title: "3 Subsea Gateways",
    detail: "SEACOM · TEAMS · EASSy",
  },
  {
    icon: legendRinex,
    title: "RINEX Domestic IXP",
    detail: "Local peering · NDC",
  },
];

export const MAP_OVERLAYS = {
  compassLabel: "N",
  scaleLabel: "~600 km",
};

export const FOOTER = {
  version: "v1.0.0",
  sources: [
    { label: "PeeringDB", href: "https://www.peeringdb.com/ix/1032" },
    {
      label: "Submarine Cable Map",
      href: "https://www.submarinecablemap.com/",
    },
    { label: "Packet Clearing House", href: "https://www.pch.net/ixp/dir" },
  ],
  curatedNote:
    "Ring and corridor paths are illustrative: no public dataset publishes Rwanda's district fiber route.",
};
