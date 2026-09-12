import {
  faBullseye,
  faDiamond,
  faHexagon,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const NETWORK_DATA_ID = "network-data";

export const HERO = {
  eyebrow: "Physical Infrastructure · National Grid",
  title: "The Backbone of a Nation",
  lead: "Rwanda is landlocked and hundreds of miles from the ocean. To get high-speed internet, it had to run thousands of kilometers of physical glass cables across borders and over mountains.",
  cta: {
    label: "View Network Data",
    href: `#${NETWORK_DATA_ID}`,
  },
};

export const NETWORK = {
  eyebrow: "NETWORK TOPOLOGY",
  title: "Network Components",
  components: [
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
  ],
};

const RURA_REPORT = {
  source: "RURA ICT Sector Statistics Report",
  sourceUrl: "https://www.rura.rw/sectors/ict/statistics/quarterly-publication",
  asOf: "Q1 2026",
};

export const MOBILE_EVOLUTION = {
  eyebrow: "MOBILE EVOLUTION",
  title: "5G Deployment Timeline",
  phases: [
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
  ],
};

export const PEER_COUNT_STAT_ID = "rinex-peers";

export const STATS = {
  id: NETWORK_DATA_ID,
  items: [
    {
      value: "74.5%",
      label: "Internet Subscriptions per 100 Inhabitants",
      ...RURA_REPORT,
    },
    { value: "5.98M", label: "4G Mobile Subscriptions", ...RURA_REPORT },
    {
      id: PEER_COUNT_STAT_ID,
      value: "—",
      label: "RINEX Connected Peers",
      source: "PeeringDB",
      sourceUrl: "https://www.peeringdb.com/ix/1032",
    },
  ],
};

export const NEXT_CHAPTER = {
  eyebrow: "NEXT CHAPTER",
  eyebrowIcon: faRocket,
  title: [
    { text: "See the human impact" },
    { break: true },
    { text: "of this infrastructure." },
  ],
  lead: "Explore digital public services, educational technology, and socio-economic inclusion.",
  cta: {
    label: "Next: Socio-Economic Metrics",
    to: "/metrics",
  },
};
