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
      icon: "◈",
      kicker: "Terrestrial Fiber Infrastructure",
      title: "3,000+ km National Backbone",
      body: "A ring of glass cables running through all 30 administrative districts, piping high-speed bandwidth directly to regional hospitals, schools, and government offices.",
      stat: { value: "30", label: "Districts Covered" },
    },
    {
      icon: "⬡",
      kicker: "Global Connectivity Gateways",
      title: "Undersea Cable Gateways",
      body: "Because Rwanda has no coastline, terrestrial cables run across Tanzania and Kenya to plug directly into deep-sea fiber systems: SEACOM, TEAMS, and EASSy along the Indian Ocean floor.",
      stat: { value: "3", label: "Subsea Cable Systems" },
    },
    {
      icon: "◎",
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
