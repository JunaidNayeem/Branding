import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  email,
  facebook,
  figma,
  file02,
  framer,
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
  techsynergia,
  osl,
  iternity,
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
    title: "Work Experince",
    url: "#experience",
  },
  {
    id: "2",
    title: "Projects",
    url: "https://projects.junaid.tech",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

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
  "Some top projects which includes personal as well as professional Web Applications.";
export const brandText = "The website which you are currently looking at.😄";

export const collabContent = [
  {
    id: "0",
    title: "Personal branding",
    text: brandText,
  },
  {
    id: "1",
    title: "TypeBook App",
  },
  {
    id: "2",
    title: "Emedicos App",
  },
  {
    id: "3",
    title: "Taiyang Website",
  },
  {
    id: "4",
    title: "Ettiquate",
  },
  {
    id: "5",
    title: "KiranaOP",
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
    title: "VE3",
    text: "Full Stack Engineer proficient in the MERN stack and Python development, with strong problem-solving skills for efficient technical solutions. Expertise in front-end (React.js), back-end (Node.js, Express.js), developing chat AI models with Python, and contributing designing and development of Internal Data Analyst tool with integration of LLM",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: ve3,
    imageUrl: ve3,
  },
  {
    id: "1",
    title: "Shipthis",
    text: "Collaborate with global clients to tailor ERP systems to their specific needs and continuously enhance software to elevate industry standards and efficiency, utilizing Angular for frontend development and Python with Node.js for backend processes.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: shipthis,
    imageUrl: shipthis,
    light: true,
  },
  {
    id: "2",
    title: "Tech Synergia",
    text: "As the CTO, I led a team of over 20 members, including developers, designers, and project managers. Together, we successfully delivered more than 10 client projects, all of which are currently being used by enterprises and businesses.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: techsynergia,
    imageUrl: techsynergia,
  },
  {
    id: "3",
    title: "Opensense Labs",
    text: "Worked as an Associate Developer on React-based projects and Drupal-based websites, contributing to the Drupal community. Skills include Figma, SCSS, LESS, HTML, Git, JavaScript, Communication, GitHub, React.js, Responsive Web Design, and Web Applications.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: osl,
    imageUrl: osl,
    light: true,
  },
  {
    id: "4",
    title: "KiranaOnPhone",
    text: "Worked and served as co-founder and CTO of Kirana On Phone.A realtime application which helped people at the time of Covid-19 Pandemic to get their groceriesat their doorstep and have recorded 1000+ successful & safty deliveries. ",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Iternity foundation",
    text: "3 Months Internship which helped me kickstart my career by developing algorithemic mindset of problem solving. Learned and solved 100+ DSA questions during the internship and worked on a realtime banking application, which also helped me understanding the large organization Infra Desgining and working.",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: iternity,
    imageUrl: iternity,
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
