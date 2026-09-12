import {
  faCarSide,
  faCircleCheck,
  faCity,
  faClockRotateLeft,
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

import olpcKagugu from "~/assets/images/olpc-kagugu-2008.webp";
import policyReturnAerial from "~/assets/images/policy-return-aerial.webp";

const METRICS_ID = "socio-economic-metrics";

export const HERO = {
  eyebrow: "Digital Public Services · Educational Initiatives · Inclusion",
  title: "Empowering Rwanda",
  lead: "From classrooms and clinics to pocket governance: how broadband infrastructure sparked economic modernization, and the ongoing challenge of turning 98.5% network coverage into everyday adoption.",
};

export const STATS = {
  id: METRICS_ID,
  items: [
    { value: "10.1M", label: "Mobile Subscriptions" },
    { value: "115,000+", label: "Laptops Deployed" },
    { value: "100+", label: "Digitised Services" },
  ],
};

export const CLASSROOM = {
  eyebrow: "HUMAN CAPITAL & DIGITAL SKILLS",
  title: "Classroom Digitization: Building a Tech-Literate Generation",
  lead: "Rather than waiting for adult workforces to adapt, Rwanda introduced personal computing directly into primary classrooms to build digital skills from childhood.",
  photo: {
    image: olpcKagugu,
    imageAlt:
      "Pupils at Kagugu Primary School in Kigali using OLPC XO laptops during a digital literacy lesson in 2008",
    kicker: "NATIONWIDE PROGRAM • 2008",
    title: "One Laptop per Child (OLPC)",
    body: "Pupils at Kagugu Primary School in Kigali receiving early digital literacy training.",
    credit: { label: "Photo: MINEDUC / OLPC Rwanda Archive" },
  },
  stats: [
    { value: "2008 Launch", label: "Primary School Focus" },
    { value: "115,000+", label: "Laptops Distributed by 2012" },
  ],
  body: "Distributed rugged XO laptops to primary pupils nationwide with zero prior digital exposure, establishing foundational computing skills before scaling into secondary-level Smart Classrooms across all 30 districts.",
  chart: {
    title: "YEAR-BY-YEAR DEPLOYMENT PROGRESSION",
    label:
      "Bar chart of OLPC laptop deployment in Rwanda: 8,000 in 2008, 25,000 in 2009, 55,000 in 2010, 85,000 in 2011, and over 115,000 by 2012.",
    points: [
      { year: "2008", value: 8000, display: "8,000" },
      { year: "2009", value: 25000, display: "25,000" },
      { year: "2010", value: 55000, display: "55,000" },
      { year: "2011", value: 85000, display: "85,000" },
      { year: "2012", value: 115000, display: "115,000+" },
    ],
  },
};

export const HEALTHCARE = {
  eyebrow: "PUBLIC HEALTH INFRASTRUCTURE",
  title: "Connected Healthcare: Linking Regional Clinics to the National Grid",
  lead: "How running 3,000+ km of fiber cables into rural districts replaced paper patient records and connected remote health clinics to national referral specialists.",
  sectors: [
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
  ],
};

export const IREMBO = {
  eyebrow: "PUBLIC SECTOR AUTOMATION",
  title: "IremboGov: The Citizen's Digital Counter",
  lead: "Consolidating manual government bureaucracy into a unified, paperless service window.",
  narrative: {
    eyebrow: "CIVIC TRANSFORMATION",
    title: "From Paper Queues to Instant Approvals",
    paragraphs: [
      "Before 2015, routine civil documents — like birth certificates or land titles — required exhausting multi-hour bus journeys to district offices, manual queues, and processes that could drag on for weeks.",
      "Launched in July 2015, IremboGov eliminated this friction. Starting with just 5 essential services, the platform scaled to over 100 digitized public workflows by 2020. By making public administration accessible via web browser, basic feature phone, or village agent, Irembo collapsed weeks of bureaucracy into minutes.",
    ],
    callout: {
      value: "100+ Services Digitized",
      label: "Launched July 2015 • Unified National Gateway",
    },
    servicesLabel: "CORE DIGITIZED SERVICES",
    services: [
      { icon: faFileLines, label: "Birth Records" },
      { icon: faMapLocationDot, label: "Land Titles" },
      { icon: faCarSide, label: "Driving Exams" },
      { icon: faPassport, label: "Passports" },
    ],
  },
  channels: [
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
  ],
};

export const PARADOX = {
  eyebrow: "THE LAST MILE",
  title: "The Coverage vs. Adoption Paradox",
  lead: "Infrastructure reach vs. daily citizen usage: why near-universal 4G signal does not immediately equal active adoption.",
  coverage: {
    title: "COVERAGE VS ADOPTION",
    donuts: [
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
    ],
    footnote: "~5.5M active internet users despite near-universal signal reach.",
  },
  inequity: {
    title: "URBAN–RURAL INEQUITY",
    label:
      "Bar chart comparing active internet access: 33.5% in urban Rwanda against 4.4% in rural Rwanda.",
    bars: [
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
    ],
    footnote:
      "72.1% of Rwanda's population lives rurally — yet only 4.4% have active internet access.",
    emphasis: [{ text: "Gap: 29.1 percentage points." }],
  },
  barriers: {
    title: "3 STRUCTURAL ADOPTION BARRIERS",
    items: [
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
    ],
  },
};

export const FORWARD = {
  eyebrow: "STRATEGIC CONTINUITY",
  title: "Looking Forward",
  lead: "How two decades of foundational telecommunications and civic infrastructure are paving the way for Rwanda's high-income digital economy.",
  articles: [
    {
      accent: "highlight",
      eyebrow: "2000–2020 • THE CONNECTIVITY BASE",
      title: "Laying the Physical & Digital Rails",
      body: "Over two decades, Rwanda transitioned from post-conflict isolation to one of Africa's most densely connected nations. Focus remained on building the physical grid, liberalizing spectrum, digitizing paper governance, and seeding early computing in primary schools.",
      items: [
        {
          icon: faCircleCheck,
          text: [
            { text: "3,000+ km Fiber Grid:", className: "font-semibold text-white" },
            { text: " Linking all 30 districts and public hospitals to high-speed broadband." },
          ],
        },
        {
          icon: faCircleCheck,
          text: [
            { text: "98.5% 4G Coverage:", className: "font-semibold text-white" },
            { text: " Near-universal wireless population footprint achieved by 2018." },
          ],
        },
        {
          icon: faCircleCheck,
          text: [
            { text: "IremboGov Gateway:", className: "font-semibold text-white" },
            { text: " Over 100 public sector workflows transitioned to paperless digital delivery." },
          ],
        },
        {
          icon: faCircleCheck,
          text: [
            { text: "Foundational Education:", className: "font-semibold text-white" },
            { text: " 115,000+ primary laptops distributed alongside secondary school smart labs." },
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
            { text: "Kigali Innovation City:", className: "font-semibold text-white" },
            { text: " Pan-African tech cluster for engineering talent and venture R&D" },
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
            { text: "AI & 4th Industrial Revolution:", className: "font-semibold text-white" },
            { text: " National AI policy and localized language models" },
          ],
        },
        {
          icon: faSatellite,
          text: [
            { text: "Rwanda Space Agency:", className: "font-semibold text-white" },
            { text: " Satellite imagery for precision agriculture and urban planning" },
          ],
        },
      ],
    },
  ],
};

export const NEXT_CHAPTER = {
  eyebrow: "REVIEW THE FOUNDATION",
  eyebrowIcon: faClockRotateLeft,
  title: [
    { text: "See the roadmap that" },
    { break: true },
    { text: "made this possible." },
  ],
  lead: "Review Policy History — Vision 2020 foundations and NICI strategic phases.",
  cta: {
    label: "Back to Policy History",
    to: "/",
  },
  image: policyReturnAerial,
};
