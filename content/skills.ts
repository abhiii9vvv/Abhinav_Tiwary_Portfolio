export type StackLayer = {
  id: string;
  label: string;
  role: string;
  items: string[];
  /** Projects where this layer was actually shipped (names from content/projects.ts). */
  shippedIn: string[];
};

// Item names match keys in lib/brands.ts so each one renders its real logo.
// Ordered as a request travels: the screen, the API, the data, the box it runs on.
export const stackLayers: StackLayer[] = [
  {
    id: "interface",
    label: "Interface",
    role: "What the user touches",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS"],
    shippedIn: ["CampusSetu", "MentionWave", "Artha Social", "The ARambha"],
  },
  {
    id: "api",
    label: "API",
    role: "Auth, business logic, real time",
    items: ["Node.js", "Express", "Prisma", "JWT", "WebSockets", "Postman"],
    shippedIn: ["CampusSetu", "Bot Detection System", "Unessa Foundation"],
  },
  {
    id: "data",
    label: "Data",
    role: "Where state lives",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Cloudinary"],
    shippedIn: ["CampusSetu", "Artha Social"],
  },
  {
    id: "infra",
    label: "Infra",
    role: "Where it runs and ships from",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Linux", "Vercel", "GitHub"],
    shippedIn: ["CampusSetu", "MentionWave", "DevOps-Practice"],
  },
  {
    id: "ai",
    label: "AI",
    role: "The intelligence inside",
    items: ["OpenAI API", "Claude", "Gemini", "Python", "OpenCV"],
    shippedIn: ["MentionWave", "SecureExamBrowser", "av9Assist"],
  },
];

export const foundations = [
  "Data structures",
  "Algorithms",
  "System design",
  "OOP",
  "DBMS",
  "Operating systems",
  "Computer networks",
  "Java",
];
