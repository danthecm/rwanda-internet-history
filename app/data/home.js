import agriculture from "~/assets/images/agriculture.png";
import heroBg from "~/assets/images/hero-bg.jpg";

export const HERO = {
  image: heroBg,
  eyebrow: "Policy Foundations · 1994–2010",
  title: [
    { text: "Rwanda's Digital " },
    { break: true },
    { text: "Evolution", className: "text-primary" },
  ],
  lead: "From Post-Conflict to Tech Hub — starting from ground zero after 1994, Rwanda chose telecommunications and digital infrastructure as the foundation to rebuild its national economy.",
  ctaLabel: "Explore Policy History",
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
