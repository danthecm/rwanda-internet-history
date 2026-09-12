import {
  faBullseye,
  faDiamond,
  faHexagon,
} from "@fortawesome/free-solid-svg-icons";

export const NETWORK_DATA_ID = "network-data";

export const NETWORK_COMPONENTS = [
  {
    icon: faDiamond,
    kicker: "Terrestrial Fiber Infrastructure",
    title: "3,000+ km National Backbone",
    body: "A ring of glass cables running through all 30 administrative districts, piping high-speed bandwidth directly to regional hospitals, schools, and government offices.",
    stat: { value: "30", label: "Districts Covered" },
  },
  {
    icon: faHexagon,
    kicker: "Global Connectivity Gateways",
    title: "Undersea Cable Gateways",
    body: "Because Rwanda has no coastline, terrestrial cables run across Tanzania and Kenya to plug directly into deep-sea fiber systems: SEACOM, TEAMS, and EASSy along the Indian Ocean floor.",
    stat: { value: "3", label: "Subsea Cable Systems" },
  },
  {
    icon: faBullseye,
    kicker: "Domestic Peering",
    title: "RINEX & RICTA",
    body: "RINEX keeps local internet traffic routing domestically — like an inner-city bypass — avoiding expensive overseas satellite routing. RICTA manages .rw web domains with 50+ registrars.",
    stat: { value: "50+", label: "Accredited Registrars" },
  },
];

export const MOBILE_PHASES = [
  {
    phase: "Phase 1",
    period: "2013–2022",
    title: "The Shared Utility Model (WOAN / KTRN)",
    description:
      "Wholesale Open Access Network — shared infrastructure leased to retail providers",
    points: [
      "Government partnered with Korea Telecom to build a single wholesale network",
      "Like a shared municipal power grid — KTRN supplied 4G wholesale to MTN & Airtel",
      "Coverage expanded rapidly from 5% (2014) to 98.5% (2018)",
    ],
    accent: "solid",
  },
  {
    phase: "Phase 2",
    period: "2023",
    title: "Market Reform",
    description:
      "Licensed invisible airwave frequencies that mobile towers use to broadcast wireless signals",
    points: [
      "Wholesale monopoly formally ended",
      "MTN & Airtel granted direct radio spectrum licenses",
      "Retail operators build and optimize their own cell towers",
    ],
    accent: "gradient",
  },
  {
    phase: "Phase 3",
    period: "June 2025",
    title: "Commercial 5G Deployment",
    description:
      "Fifth-generation wireless — ultra-fast, low-latency connectivity for enterprise and consumers",
    points: [
      "MTN Rwanda & Airtel Rwanda launched 5G services",
      "Commercial coverage across major urban hubs",
      "Operator duopoly driving next-gen speed and latency",
    ],
    accent: "solid",
  },
];

export const INFRASTRUCTURE_STATS = [
  { value: "3,000+ km", label: "National Fiber Ring" },
  { value: "3", label: "International Subsea Gateways" },
  { value: "98.5%", label: "Population 4G Network Reach" },
];
