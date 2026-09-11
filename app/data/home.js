import agriculture from "~/assets/images/agriculture.webp";
import heroBg from "~/assets/images/hero-bg.webp";

const VISION_ID = "vision-2020";

export const HERO = {
  image: heroBg,
  eyebrow: "Policy Foundations · 1994–2010",
  title: [
    { text: "Rwanda's Digital " },
    { break: true },
    { text: "Evolution", className: "text-primary" },
  ],
  lead: "Starting from ground zero after 1994, Rwanda chose telecommunications and digital infrastructure as the foundation to rebuild its national economy.",
  cta: {
    label: "Explore Policy History",
    href: `#${VISION_ID}`,
  },
};

export const STATS = [
  { value: "4", label: "NICI Phases" },
  { value: "2000", label: "Vision 2020 Launch" },
  { value: "20+", label: "Years of ICT Governance" },
];

export const LEAPFROG = {
  image: agriculture,
  imageAlt:
    "A tea picker carrying a basket of freshly picked leaves in a Rwandan plantation",
  imageCredit: {
    label: "Photo: FAO Rwanda",
    href: "https://www.fao.org/rwanda/",
  },
  note: [
    { text: "In 1994, ", className: "font-bold text-secondary" },
    {
      text: "Rwanda was an agrarian economy with almost no working telephone lines or internet connectivity. Rather than waiting decades to build heavy industrial factories, the nation decided to ",
    },
    {
      text: "leapfrog directly into digital services.",
      className: "font-semibold text-secondary",
    },
  ],
};

export const VISION = {
  id: VISION_ID,
  eyebrow: "THE 20-YEAR DESTINATION",
  title: "Vision 2020",
  body: [
    {
      text: "Vision 2020 was the master ambition launched in 2000 to transform Rwanda from subsistence farming into a modern, thriving ",
    },
    {
      text: '"knowledge-based" economy',
      className: "font-semibold text-white",
    },
    {
      text: " — where people use technology, skills, and innovation to create wealth and improve daily life.",
    },
  ],
};

export const NICI = {
  eyebrow: "THE 5-YEAR IMPLEMENTATION ENGINES",
  title: "NICI Phases",
  body: "Vision 2020 set the 20-year goal; the National Information and Communications Infrastructure (NICI) plans were the four 5-year roadmaps built to execute it step by step.",
};

export const MILESTONES_HEADING = {
  eyebrow: "INSTITUTIONAL MILESTONES",
  title: "The Rules & Gateways",
};

export const MILESTONES = [
  {
    year: "2000",
    title: "Vision 2020 Adoption",
    body: "Established the long-term national strategic framework to transition the economy from agrarian foundations to an information-rich, knowledge-based service hub.",
  },
  {
    year: "2001",
    title: "Market Liberalization",
    body: "Enacted the formal deregulation of the telecommunications industry, dismantling legacy state monopolies to encourage private investment and competition.",
  },
  {
    year: "2002",
    title: "Regulatory Establishment (RURA)",
    body: "Launched the Rwanda Utilities Regulatory Authority as an autonomous body to govern frequency spectrum, licensing, and consumer-provider relations.",
  },
  {
    year: "2004",
    title: "Foundation of RINEX",
    body: "Created the Rwanda Internet Exchange Point to localize domestic traffic routing, reducing reliance on expensive and high-latency overseas satellite gateways.",
  },
  {
    year: "2005",
    title: "Formation of RICTA",
    body: "Established the Rwanda Internet Community and Technology Alliance to provide governance and administrative oversight for the .rw country-code top-level domain (ccTLD).",
  },
];

export const NEXT_CHAPTER = {
  eyebrow: "NEXT CHAPTER",
  title: [
    { text: "See how policy paved the way" },
    { break: true },
    { text: "for infrastructure." },
  ],
  cta: {
    label: "Next: Infrastructure Details",
    to: "/infrastructure",
  },
};

export const NICI_PHASES = [
  {
    phase: "Phase 1",
    period: "2000–2005",
    title: "Legal Foundations & Ending Monopolies",
    body: "Ended state telecommunication monopolies to let private providers compete, and created the independent Rwanda Utilities Regulatory Authority (RURA) to oversee fair pricing and radio frequencies.",
  },
  {
    phase: "Phase 2",
    period: "2005–2010",
    title: "Laying the Physical Grid",
    body: "Built the physical backbone of the country — constructing a 3,000+ km nationwide fiber-optic ring across all 30 districts and establishing the National Data Centre.",
  },
  {
    phase: "Phase 3",
    period: "2011–2015",
    title: "Digital Inclusion & Education",
    body: "Distributed over 115,000 laptops to primary school pupils (One Laptop per Child) and brought network connections into rural district headquarters to close the access gap.",
  },
  {
    phase: "Phase 4",
    period: "2016–2020",
    title: "Full System Digitization",
    body: "Moved public services online through the Irembo government portal, shifting daily paperwork from physical desks to digital portals and basic mobile phones.",
  },
];

export const PILLARS = [
  {
    icon: "🛣",
    title: "Physical Highway",
    accentClassName: "bg-highlight",
    body: "Laying fiber-optic cables so every town and district has direct access to high-speed broadband — the digital roads of the knowledge economy.",
  },
  {
    icon: "🎓",
    title: "Human Skills",
    accentClassName: "bg-secondary",
    body: "Training students, teachers, and civil servants on computers and digital tools, building the human capital to operate and grow the new digital infrastructure.",
  },
  {
    icon: "🏛",
    title: "Online Governance",
    accentClassName: "bg-pillar-green",
    body: "Replacing paper office queues with digital services — government transactions, licenses, and registrations moved onto secure online portals accessible from any device.",
  },
];
