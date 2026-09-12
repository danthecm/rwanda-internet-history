import {
  faGraduationCap,
  faLandmark,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";

export const VISION_ID = "vision-2020";

export const POLICY_STATS = [
  { value: "4", label: "NICI Phases" },
  { value: "2000", label: "Vision 2020 Launch" },
  { value: "20+", label: "Years of ICT Governance" },
];

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
    icon: faRoad,
    title: "Physical Highway",
    accent: "highlight",
    body: "Laying fiber-optic cables so every town and district has direct access to high-speed broadband — the digital roads of the knowledge economy.",
  },
  {
    icon: faGraduationCap,
    title: "Human Skills",
    accent: "secondary",
    body: "Training students, teachers, and civil servants on computers and digital tools, building the human capital to operate and grow the new digital infrastructure.",
  },
  {
    icon: faLandmark,
    title: "Online Governance",
    accent: "green",
    body: "Replacing paper office queues with digital services — government transactions, licenses, and registrations moved onto secure online portals accessible from any device.",
  },
];
