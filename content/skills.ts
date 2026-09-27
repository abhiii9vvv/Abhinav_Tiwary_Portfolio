export type StackLayer = {
  id: string;
  label: string;
  role: string;
  items: string[];
  /** Projects where this layer was actually shipped (names from content/projects.ts). */
  shippedIn: string[];
};

// Items that match keys in lib/brands.ts render with their real logo; the rest
// (practices like monitoring or triage) render as plain chips.
// Ordered from the server up: keep it running, host it, store it, serve it, show it.
export const stackLayers: StackLayer[] = [
  {
    id: "ops",
    label: "Ops & support",
    role: "Keeping production healthy",
    items: ["Linux", "Bash", "Git", "Postman", "System monitoring", "Troubleshooting", "Incident triage", "DNS, HTTP, TCP/IP"],
    shippedIn: ["Paytm (TechOps)", "devops_learn"],
  },
  {
    id: "cloud",
    label: "Cloud & infra",
    role: "Where it runs and ships from",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Vercel", "GitHub"],
    shippedIn: ["CampusSetu", "DevOps-Practice", "devops_learn"],
  },
  {
    id: "data",
    label: "Data",
    role: "Where state lives",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    shippedIn: ["CampusSetu", "Artha Social"],
  },
  {
    id: "api",
    label: "Backend",
    role: "APIs, auth, real time",
    items: ["Node.js", "Express", "Prisma", "JWT", "WebSockets", "Python"],
    shippedIn: ["CampusSetu", "Unessa Foundation", "Bot Detection System"],
  },
  {
    id: "interface",
    label: "Frontend",
    role: "What the user touches",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS"],
    shippedIn: ["LifeHerba", "SkyCodeHub", "CampusSetu", "Artha Social"],
  },
  {
    id: "ai",
    label: "AI",
    role: "LLMs and computer vision",
    items: ["OpenAI API", "Claude", "Gemini", "OpenCV"],
    shippedIn: ["av9Assist"],
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
