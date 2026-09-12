import {
  faCarSide,
  faCircleCheck,
  faCity,
  faFileLines,
  faGlobe,
  faLandmark,
  faMapLocationDot,
  faMicrochip,
  faMobileScreenButton,
  faMountainSun,
  faPassport,
  faRocket,
  faSatellite,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const METRICS_STATS = [
  { value: "10.1M", label: "Mobile Subscriptions" },
  { value: "98.5%", label: "4G Population Coverage" },
  { value: "4.4%", label: "Rural Internet Penetration" },
];

export const CLASSROOM_STATS = [
  { value: "2008 Launch", label: "Primary School Focus" },
  { value: "115,000+", label: "Laptops Distributed by 2012" },
];

export const CLASSROOM_CHART_POINTS = [
  { year: "2008", value: 8000, display: "8,000" },
  { year: "2009", value: 25000, display: "25,000" },
  { year: "2010", value: 55000, display: "55,000" },
  { year: "2011", value: 85000, display: "85,000" },
  { year: "2012", value: 115000, display: "115,000+" },
];

export const HEALTHCARE_SECTORS = [
  {
    kicker: "DISTRICT ACCESS",
    title: "All 30 Districts Linked",
    body: "Extended broadband connectivity to every local hospital, ensuring reliable, real-time access to the national health information exchange across all administrative districts.",
    stat: { value: "30 / 30", label: "Districts Connected" },
  },
  {
    kicker: "TELE-MEDICINE",
    title: "Kigali Tele-Referral Network",
    body: "Enabled remote specialist consultations so rural patients can receive accurate diagnoses from Kigali-based doctors without costly, time-consuming travel to central hospitals.",
    stat: { value: "100%", label: "Referral Hospitals Linked" },
  },
  {
    kicker: "DATA DIGITIZATION",
    title: "Centralized Digital Records",
    body: "Replaced physical patient files with a unified electronic medical record system — improving continuity of care, reducing errors, and enabling national health analytics.",
    stat: { value: "0", label: "Paper-Only Systems by 2020" },
  },
];

export const IREMBO_SERVICES = [
  { icon: faFileLines, label: "Birth Records" },
  { icon: faMapLocationDot, label: "Land Titles" },
  { icon: faCarSide, label: "Driving Exams" },
  { icon: faPassport, label: "Passports" },
];

export const IREMBO_CHANNELS = [
  {
    icon: faGlobe,
    title: "Online Web Portal",
    badge: { label: "Smartphones & Laptops" },
    body: "Centralized browser platform for complex filings including land registration, business licensing, and civil status documentation. Citizens with internet access can submit, track, and receive approvals entirely online.",
  },
  {
    icon: faMobileScreenButton,
    title: "Offline Mobile Menus (USSD *…#)",
    badge: { label: "No Internet Required", tone: "accent" },
    body: "Interactive dial menus running on basic feature phones, allowing citizens without data bundles or smartphones to complete civic requests. A simple dial sequence navigates structured menus to submit requests and receive SMS confirmations.",
  },
  {
    icon: faUsers,
    title: "Community Telecentres & Village Agents",
    badge: { label: "Assisted Access" },
    body: "Local accredited representatives stationed across rural trading centers who guide and submit digital filings for citizens with limited digital literacy. Agents are trained and registered by the government, bridging the last mile of digital inclusion.",
  },
];

export const ADOPTION_DONUTS = [
  {
    value: 98.5,
    display: "98.5%",
    label: "4G Population Coverage",
    tone: "highlight",
  },
  {
    value: 38,
    display: "38%",
    label: "Individual Adoption",
    tone: "secondary",
  },
];

export const ADOPTION_BARS = [
  {
    icon: faCity,
    label: "Urban",
    value: 33.5,
    display: "33.5%",
    tone: "highlight",
  },
  {
    icon: faMountainSun,
    label: "Rural",
    value: 4.4,
    display: "4.4%",
    tone: "muted",
  },
];

export const ADOPTION_BARRIERS = [
  {
    title: "Device Affordability",
    body: "Upfront retail cost of 4G/5G smartphones remains high relative to rural household incomes.",
  },
  {
    title: "Last-Mile Energy & Recurring Costs",
    body: "Sparse off-grid rural power makes regular charging difficult, while daily data bundles remain expensive relative to agricultural cash flow.",
  },
  {
    title: "Linguistic & Content Relevance",
    body: "Most global internet content is in English or French — Kinyarwanda platforms and digital literacy training are critical.",
  },
];

export const FORWARD_ARTICLES = [
  {
    accent: "highlight",
    eyebrow: "2000–2020 • THE CONNECTIVITY BASE",
    title: "Laying the Physical & Digital Rails",
    body: "Over two decades, Rwanda transitioned from post-conflict isolation to one of Africa's most densely connected nations. Focus remained on building the physical grid, liberalizing spectrum, digitizing paper governance, and seeding early computing in primary schools.",
    items: [
      {
        icon: faCircleCheck,
        text: [
          {
            text: "3,000+ km Fiber Grid:",
            className: "font-semibold text-white",
          },
          {
            text: " Linking all 30 districts and public hospitals to high-speed broadband.",
          },
        ],
      },
      {
        icon: faCircleCheck,
        text: [
          { text: "98.5% 4G Coverage:", className: "font-semibold text-white" },
          {
            text: " Near-universal wireless population footprint achieved by 2018.",
          },
        ],
      },
      {
        icon: faCircleCheck,
        text: [
          { text: "IremboGov Gateway:", className: "font-semibold text-white" },
          {
            text: " Over 100 public sector workflows transitioned to paperless digital delivery.",
          },
        ],
      },
      {
        icon: faCircleCheck,
        text: [
          {
            text: "Foundational Education:",
            className: "font-semibold text-white",
          },
          {
            text: " 115,000+ primary laptops distributed alongside secondary school smart labs.",
          },
        ],
      },
    ],
  },
  {
    accent: "secondary",
    eyebrow: "2020–2050 • THE KNOWLEDGE ECONOMY",
    title: "Exporting High-Value Innovation",
    body: "Vision 2050 builds on this infrastructure to transition Rwanda from a consumer of technology into an exporter of high-tech services, targeting upper-middle-income status by 2035 and high-income status by 2050.",
    items: [
      {
        icon: faRocket,
        text: [
          {
            text: "Kigali Innovation City:",
            className: "font-semibold text-white",
          },
          {
            text: " Pan-African tech cluster for engineering talent and venture R&D",
          },
        ],
      },
      {
        icon: faLandmark,
        text: [
          {
            text: "Kigali Int'l Financial Centre (KIFC):",
            className: "font-semibold text-white",
          },
          { text: " Cross-border fintech and digital asset regulation" },
        ],
      },
      {
        icon: faMicrochip,
        text: [
          {
            text: "AI & 4th Industrial Revolution:",
            className: "font-semibold text-white",
          },
          { text: " National AI policy and localized language models" },
        ],
      },
      {
        icon: faSatellite,
        text: [
          {
            text: "Rwanda Space Agency:",
            className: "font-semibold text-white",
          },
          {
            text: " Satellite imagery for precision agriculture and urban planning",
          },
        ],
      },
    ],
  },
];
