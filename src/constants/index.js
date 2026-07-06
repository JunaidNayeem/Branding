import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  chromecast,
  disc02,
  discord,
  email,
  facebook,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  vercel,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  ve3,
  shipthis,
  osl,
  postman,
  Linkedin,
  yourlogo,
  github,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Projects",
    url: "https://projects.junaidnayeem.in",
    external: true,
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// Served from public/ — opens in a new tab
export const resumeUrl = "/Junaid_Nayeem_Resume.pdf";

export const caseStudy = {
  tag: "Featured Work",
  title: "Fuel Finder",
  subtitle: "UK Government Digital Service · DESNZ / GOV.UK",
  description:
    "A GOV.UK fuel-price transparency service helping millions of UK motorists find the cheapest fuel near them. I led end-to-end frontend development — from architecture and security design to accessibility and DevOps.",
  metrics: [
    { value: "Millions", label: "of UK users served" },
    { value: "50+", label: "routes shipped" },
    { value: "40+", label: "API endpoints integrated" },
    { value: "6", label: "RBAC roles enforced" },
  ],
  highlights: [
    "Complete RBAC system designed from scratch — granular permission matrix enforced by Next.js middleware on every request",
    "GOV.UK One Login (OAuth 2.0) with cross-tab session sync and automatic expiry handling",
    "Centralised API layer with AES payload encryption and retry logic with exponential backoff",
    "13-step public complaint journey and 8+ step forecourt registration flow built on Jotai atomic state",
    "Fully bilingual English/Welsh service meeting WCAG 2.1 AA and GDS accessibility standards",
    "Owned DevOps: multi-stage Docker builds, AWS CodeBuild pipelines and Kubernetes manifests",
  ],
  stack: [
    "Next.js (App Router)",
    "TypeScript",
    "GOV.UK Frontend v5",
    "Jotai",
    "i18next",
    "Docker",
    "Kubernetes",
  ],
};

export const timeline = [
  {
    id: "0",
    period: "2018 – 2022",
    title: "Sri Krishna Institute of Technology",
    subtitle: "B.E. in Computer Science & Engineering · Bangalore, India",
    text: "Built my foundation in CS — and won 1st place at the Srishti Technical Fest website development competition along the way.",
  },
  {
    id: "1",
    period: "Jul 2021 – Sep 2023",
    title: "OpenSense Labs",
    subtitle: "Associate Software Developer · New Delhi, India",
    text: "Started as an intern, promoted to associate within a year. React web apps, RESTful APIs and end-to-end ownership of Drupal websites.",
  },
  {
    id: "2",
    period: "Oct 2023 – Nov 2023",
    title: "Shipthis",
    subtitle: "Software Engineer · Bengaluru, India",
    text: "Client-driven ERP features with Angular and TypeScript — pixel-perfect UIs and API optimisation for global customers.",
  },
  {
    id: "3",
    period: "Dec 2023 – Present",
    title: "VE3 Global",
    subtitle: "Senior Full Stack Engineer · London, UK",
    text: "Leading frontend development of GOV.UK digital services, building multi-tenant SaaS solo and shipping AI/LLM products.",
    current: true,
  },
];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const heroTypewriterStrings = [
  "Production-Grade Web Apps",
  "GOV.UK Digital Services",
  "AI-Powered Products",
  "Seamless User Experiences",
];

export const generatingStrings = [
  "Leading GOV.UK frontend development",
  "Next.js · React 19 · TypeScript",
  "RBAC & security architecture",
  "Multi-tenant SaaS platforms",
  "AI & LLM product integration",
  "WCAG 2.1 AA accessible design systems",
];

export const stats = [
  {
    id: "0",
    value: 4,
    suffix: "+",
    label: "Years of experience",
  },
  {
    id: "1",
    value: 50,
    suffix: "+",
    label: "Routes shipped",
  },
  {
    id: "2",
    value: 40,
    suffix: "+",
    label: "API endpoints integrated",
  },
  {
    id: "3",
    value: 250,
    suffix: "+",
    label: "DSA problems solved",
  },
];

export const skillGroups = [
  {
    id: "0",
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "SQL", "HTML5", "CSS3/SCSS"],
  },
  {
    id: "1",
    title: "Frontend",
    skills: [
      "React 19",
      "Next.js (App Router)",
      "Angular",
      "Redux",
      "Jotai",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "i18next",
    ],
  },
  {
    id: "2",
    title: "UI & Design Systems",
    skills: [
      "Tailwind CSS v4",
      "Radix UI",
      "shadcn/ui",
      "GOV.UK Design System",
      "Ant Design",
      "Material UI",
      "Storybook",
      "WCAG 2.1 AA",
    ],
  },
  {
    id: "3",
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Next.js Server Actions",
      "RESTful APIs",
      "NextAuth.js",
      "OAuth 2.0",
      "JWT",
    ],
  },
  {
    id: "4",
    title: "Databases",
    skills: ["PostgreSQL", "Supabase (RLS)", "MongoDB", "MySQL", "Prisma"],
  },
  {
    id: "5",
    title: "Testing",
    skills: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Cypress (E2E)",
      "Storybook Interaction Tests",
    ],
  },
  {
    id: "6",
    title: "DevOps & Tooling",
    skills: [
      "Nx Monorepo",
      "Docker",
      "Kubernetes",
      "AWS CodeBuild",
      "Vercel",
      "GitHub Actions",
      "GitLab",
      "ESLint",
      "Husky",
    ],
  },
  {
    id: "7",
    title: "AI & LLM",
    skills: [
      "Claude",
      "GPT",
      "Gemini",
      "Perplexity",
      "LLM API integration",
      "AI product development",
    ],
  },
];

export const marqueeKeywords = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Node.js",
  "GOV.UK",
  "RBAC",
  "OAuth 2.0",
  "Supabase",
  "PostgreSQL",
  "Nx Monorepo",
  "Docker",
  "Kubernetes",
  "Tailwind CSS",
  "Radix UI",
  "Storybook",
  "Cypress",
  "AI / LLM",
  "WCAG 2.1 AA",
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",

    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "A mix of production platforms, open-source packages and personal products — designed, built and shipped end-to-end.";
export const brandText = "The website you are currently looking at. 😄";

export const collabContent = [
  {
    id: "0",
    title: "TrackerX — AI-Assisted Spend Tracker",
    text: "AI-assisted expense tracking with automatic transaction categorisation, budgets and visual dashboards. Currently in development.",
  },
  {
    id: "1",
    title: "Workforce Management SaaS",
    text: "Multi-tenant platform built solo — Next.js 16, Supabase Row-Level Security, SSO, RBAC and capacity analytics.",
  },
  {
    id: "2",
    title: "KiranaOP — E-Commerce Startup",
    text: "Online grocery platform launched during the pandemic with contactless delivery and secure payments.",
  },
  {
    id: "3",
    title: "Advance-Dynamic-Table (npm)",
  },
  {
    id: "4",
    title: "TypeWriter Effect (npm)",
  },
  {
    id: "5",
    title: "Personal branding",
    text: brandText,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Postman",
    icon: postman,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Vercel",
    icon: vercel,
    width: 24,
    height: 24,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "VE3 Global",
    role: "Senior Full Stack Engineer",
    period: "Dec 2023 – Present · London, UK",
    text: "Leading frontend development of GOV.UK digital services serving millions of users, building a multi-tenant SaaS platform solo, and shipping AI/LLM products and an Nx design-system monorepo.",
    stack: ["Next.js", "React 19", "TypeScript", "Node.js", "Supabase", "AI/LLM"],
    backgroundUrl: benefitCard1,
    iconUrl: ve3,
  },
  {
    id: "1",
    title: "Shipthis",
    role: "Software Engineer",
    period: "Oct 2023 – Nov 2023 · Bengaluru, India",
    text: "Delivered client-driven ERP features with pixel-perfect UIs from Figma designs, optimised API operations and supported global client onboarding.",
    stack: ["Angular", "TypeScript", "Tailwind CSS"],
    backgroundUrl: benefitCard2,
    iconUrl: shipthis,
    light: true,
  },
  {
    id: "2",
    title: "OpenSense Labs",
    role: "Associate Software Developer",
    period: "Jul 2021 – Sep 2023 · New Delhi, India",
    text: "Built responsive React web applications and owned Drupal websites end-to-end — custom modules and Twig theming. Promoted from intern to associate within the first year.",
    stack: ["React", "JavaScript", "Drupal", "SCSS"],
    backgroundUrl: benefitCard3,
    iconUrl: osl,
  },
];

export const socials = [
  {
    id: "0",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/JunaidNayeem",
  },
  {
    id: "1",
    title: "Linkedin",
    iconUrl: Linkedin,
    url: "https://www.linkedin.com/in/junaid-nayeem-51041a16a/",
  },
  {
    id: "2",
    title: "Email",
    iconUrl: email,
    url: "mailto:junaid85210@gmail.com",
  },
  {
    id: "3",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://instagram.com/dark_night_dev",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=100012677851314",
  },
];
