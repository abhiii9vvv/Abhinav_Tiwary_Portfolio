export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  screenshot?: string;
  tier: "featured" | "strong" | "more";
  note?: string;
  highlights?: string[];
  status?: "Building" | "Internship" | "Current" | "Client" | "Professional" | "Flagship" | "Engineering";
};

export const featuredProjects: Project[] = [
  {
    slug: "lifeherba",
    name: "LifeHerba",
    tagline: "Wellness platform for consultations across nine systems of holistic medicine, verified wellness centres, therapies, and a pharmacy",
    description:
      "One app to consult verified practitioners, book wellness centres and therapies, order genuine medicines, and shop supplements. I design and build it end to end.",
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    live: "https://lifeherbagroup.com/",
    screenshot: "/screenshots/lifeherba.png",
    highlights: [
      "One promise up top, with the real app shown in a phone frame instead of described in paragraphs",
      "Care organised by system of medicine, so people browse the way they already think about treatment",
      "Trust shown early: verified practitioners and centres, secure payments, a trust and safety section",
      "Light, dark, and system themes plus a language switcher, built into the header from day one",
    ],
    tier: "featured",
    status: "Building",
  },
  {
    slug: "skycodehub",
    name: "SkyCodeHub",
    tagline: "Coding practice and placement platform for colleges, with the marketing site rebuilt end to end during my internship",
    description:
      "Rebuilt skycodehub.com end to end: information architecture, visual design, and the responsive front end.",
    tech: ["React", "Vite", "Tailwind CSS"],
    live: "https://skycodehub.com/",
    screenshot: "/screenshots/skycodehub.png",
    highlights: [
      "Hero pairs a three-beat value prop with a product preview, so colleges see the dashboard before they book a demo",
      "Page runs audience, proof, then one sales call to action, instead of a feature dump",
    ],
    tier: "featured",
    status: "Internship",
  },
  {
    slug: "artha-social",
    name: "Artha Social",
    tagline: "Production marketing platform built for an Indian digital marketing agency",
    description:
      "Client project including a custom CMS, lead capture, authentication, media management, and SEO infrastructure, in production.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Framer Motion"],
    live: "https://www.arthasocial.in/",
    screenshot: "/screenshots/arthasocial.png",
    highlights: ["Custom CMS the agency edits without a developer", "Lead capture, auth, and media management", "SEO infrastructure, live in production"],
    tier: "featured",
    status: "Client",
  },
  {
    slug: "the-arambha",
    name: "The ARambha",
    tagline: "Technology and digital platform contribution supporting data-driven campaign operations and workflows",
    description:
      "Technology and digital platform contribution supporting data-driven campaign operations and workflows.",
    tech: ["JavaScript", "Next.js", "Tailwind CSS"],
    live: "https://www.thearambha.in/",
    screenshot: "/screenshots/thearambha.png",
    highlights: ["Digital platform for campaign operations", "Data-driven workflows for the team on the ground"],
    tier: "featured",
    note: "Technology contribution, not campaign strategy",
    status: "Professional",
  },
  {
    slug: "campussetu",
    name: "CampusSetu",
    tagline: "Multi-tenant SaaS campus platform combining academics, attendance, exams, analytics, AI workflows, and real-time collaboration",
    description:
      "Campus management platform covering academics, notices, attendance, exams, and analytics, with role-based access for students, faculty, and admins, multi-tenant architecture, and AI-powered workflows.",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "Docker", "AWS"],
    live: "https://campussetu.in/",
    screenshot: "/screenshots/campussetu.png",
    highlights: ["Multi-tenant architecture with tenant isolation", "Role-based access for students, faculty, and admins", "Real-time collaboration over WebSockets"],
    tier: "featured",
    note: "Flagship project",
    status: "Flagship",
  },
];

export const strongProjects: Project[] = [
  {
    slug: "internsetu-sih",
    name: "InternSetu-SIH",
    tagline: "Internship discovery for Indian students",
    description:
      "Aggregates verified internship opportunities and connects students with them. Built for Smart India Hackathon 2025, 2nd Runner-Up (Internal).",
    tech: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/abhiii9vvv/InternSetu-SIH",
    tier: "strong",
  },
  {
    slug: "av9assist",
    name: "av9Assist",
    tagline: "AI-powered personal chat assistant",
    description:
      "Next.js AI chat interface with API integration, local-storage persistence, and modular architecture.",
    tech: ["Next.js", "JavaScript", "AI"],
    github: "https://github.com/abhiii9vvv/av9assist",
    tier: "strong",
  },
  {
    slug: "bot-detection-system",
    name: "Bot Detection System",
    tagline: "MERN-based bot traffic detection",
    description:
      "Behavioral analysis and real-time traffic monitoring with anomaly scoring and API-driven bot detection.",
    tech: ["React", "Node.js", "MERN"],
    github: "https://github.com/abhiii9vvv/Bot_Detection_System",
    tier: "strong",
  },
  {
    slug: "sharda-ezone-attendance",
    name: "ShardaEzone Attendance Calculator",
    tagline: "Browser extension for Sharda University's Ezone portal",
    description:
      "Injects attendance analytics into the Ezone portal via DOM manipulation, helping students evaluate skip/attend decisions.",
    tech: ["JavaScript", "Chrome Extension"],
    github: "https://github.com/abhiii9vvv/ShardaEzone-Attendance-Calculator",
    tier: "strong",
  },
];

export const moreProjects: Project[] = [
  { slug: "nodejs", name: "NodeJS", tagline: "Modular Node.js backend architecture", description: "REST APIs, JWT auth, middleware pipelines, MongoDB integration.", tech: ["Node.js", "MongoDB", "JWT"], github: "https://github.com/abhiii9vvv/NodeJS", tier: "more" },
  { slug: "assesment", name: "Assesment", tagline: "Secure backend/API assignment", description: "REST API with JWT, bcrypt, RBAC, and CRUD task management.", tech: ["Node.js", "JWT", "bcrypt"], github: "https://github.com/abhiii9vvv/Assesment", tier: "more" },
  { slug: "devops-practice", name: "DevOps-Practice", tagline: "Hands-on DevOps engineering practice", description: "Docker, Kubernetes, Jenkins, CI/CD, and Linux automation workflows.", tech: ["Docker", "Kubernetes", "Jenkins"], github: "https://github.com/abhiii9vvv/DevOps-Practice", tier: "more" },
  { slug: "devops-learn", name: "devops_learn", tagline: "DevOps and cloud infrastructure learning", description: "Bash, Linux administration, Python automation, and AWS server configuration.", tech: ["Bash", "AWS", "Python"], github: "https://github.com/abhiii9vvv/devops_learn", tier: "more" },
  { slug: "event-attendance-system", name: "Event Attendance System", tagline: "Full-stack attendance tracking", description: "Student form with Google Sheets storage and a password-protected admin dashboard.", tech: ["JavaScript", "Google Sheets API"], github: "https://github.com/abhiii9vvv/Event-Attendance-System", tier: "more" },
  { slug: "hacking-terminal", name: "HackingTerminal", tagline: "Interactive CLI-style portfolio experience", description: "Terminal UI with matrix animations, a command parser, and a retro interface.", tech: ["JavaScript"], github: "https://github.com/abhiii9vvv/HackingTerminal", tier: "more" },
  { slug: "spotify-clone", name: "Spotify Clone", tagline: "High-fidelity Spotify-style web player", description: "Playlist management and audio controls with a responsive music-player UI.", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/abhiii9vvv/Spotify_Clone", tier: "more" },
  { slug: "x-twitter", name: "X-Twitter", tagline: "Responsive social-media UI clone", description: "Static responsive clone of the X/Twitter interface.", tech: ["HTML", "CSS"], github: "https://github.com/abhiii9vvv/X-Twitter", tier: "more" },
  { slug: "signsecure", name: "SignSecure", tagline: "Responsive signup interface", description: "Dual-panel signup UI with form validation and smooth animations.", tech: ["HTML5", "CSS3", "JavaScript"], github: "https://github.com/abhiii9vvv/SignSecure", tier: "more" },
];

export const totalRepoCount = 53;
