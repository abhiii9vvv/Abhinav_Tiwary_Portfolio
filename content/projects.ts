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
};

export const featuredProjects: Project[] = [
  {
    slug: "mentionwave",
    name: "MentionWave",
    tagline: "Real-time mention monitoring and AI sentiment tracking",
    description:
      "Tracks configurable keyword mentions across X/Twitter, Instagram, Facebook, YouTube, and news sources, with sentiment analysis, engagement tracking, alert rules, and a real-time dashboard.",
    tech: ["TypeScript", "Next.js", "AI Sentiment", "Vercel Blob"],
    live: "https://mentionwave.vercel.app/",
    github: "https://github.com/abhiii9vvv/mentionwave",
    screenshot: "/screenshots/mentionwave.png",
    tier: "featured",
  },
  {
    slug: "artha-social",
    name: "Artha Social",
    tagline: "Digital marketing agency platform with custom CMS",
    description:
      "Agency website with service pages, lead capture, authentication, a custom admin CMS, media management, and SEO infrastructure, in production.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Framer Motion"],
    live: "https://www.arthasocial.in/",
    screenshot: "/screenshots/arthasocial.png",
    tier: "featured",
  },
  {
    slug: "the-arambha",
    name: "The ARambha",
    tagline: "Technology for data-driven campaign operations",
    description:
      "Technology and digital platform contributions supporting data-driven campaign operations and digital workflows: \"Campaign strategy from booth to ballot, data-driven, digitally delivered.\"",
    tech: ["JavaScript"],
    live: "https://www.thearambha.in/",
    screenshot: "/screenshots/thearambha.png",
    tier: "featured",
    note: "Technology contribution, not campaign strategy",
  },
  {
    slug: "campussetu",
    name: "CampusSetu",
    tagline: "Multi-tenant SaaS platform for Indian educational institutions",
    description:
      "Campus management platform covering academics, notices, attendance, exams, and analytics, with role-based access for students, faculty, and admins, multi-tenant architecture, and AI-powered workflows.",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "Docker", "AWS"],
    live: "https://campussetu.in/",
    screenshot: "/screenshots/campussetu.png",
    tier: "featured",
    note: "Flagship project",
  },
  {
    slug: "secure-exam-browser",
    name: "SecureExamBrowser",
    tagline: "AI-powered secure examination platform",
    description:
      "Kiosk-mode exam browser with alt-tab and screen-capture restrictions, AI face proctoring, real-time monitoring, and violation detection with suspicious-activity logging.",
    tech: ["Electron", "Python", "OpenCV"],
    github: "https://github.com/abhiii9vvv/SecureExamBrowser",
    tier: "featured",
    note: "No public live deployment",
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
  { slug: "experiences-marketplace-backend", name: "experiences-marketplace-backend", tagline: "Two-sided experiences marketplace backend", description: "RBAC auth, booking and vendor management, modular REST APIs.", tech: ["TypeScript", "Node.js", "Express", "Prisma"], github: "https://github.com/abhiii9vvv/experiences-marketplace-backend", tier: "more" },
  { slug: "nodejs", name: "NodeJS", tagline: "Modular Node.js backend architecture", description: "REST APIs, JWT auth, middleware pipelines, MongoDB integration.", tech: ["Node.js", "MongoDB", "JWT"], github: "https://github.com/abhiii9vvv/NodeJS", tier: "more" },
  { slug: "assesment", name: "Assesment", tagline: "Secure backend/API assignment", description: "REST API with JWT, bcrypt, RBAC, and CRUD task management.", tech: ["Node.js", "JWT", "bcrypt"], github: "https://github.com/abhiii9vvv/Assesment", tier: "more" },
  { slug: "devops-practice", name: "DevOps-Practice", tagline: "Hands-on DevOps engineering practice", description: "Docker, Kubernetes, Jenkins, CI/CD, and Linux automation workflows.", tech: ["Docker", "Kubernetes", "Jenkins"], github: "https://github.com/abhiii9vvv/DevOps-Practice", tier: "more" },
  { slug: "devops-learn", name: "devops_learn", tagline: "DevOps and cloud infrastructure learning", description: "Bash, Linux administration, Python automation, and AWS server configuration.", tech: ["Bash", "AWS", "Python"], github: "https://github.com/abhiii9vvv/devops_learn", tier: "more" },
  { slug: "event-attendance-system", name: "Event Attendance System", tagline: "Full-stack attendance tracking", description: "Student form with Google Sheets storage and a password-protected admin dashboard.", tech: ["JavaScript", "Google Sheets API"], github: "https://github.com/abhiii9vvv/Event-Attendance-System", tier: "more" },
  { slug: "hacking-terminal", name: "HackingTerminal", tagline: "Interactive CLI-style portfolio experience", description: "Terminal UI with matrix animations, a command parser, and a retro interface.", tech: ["JavaScript"], github: "https://github.com/abhiii9vvv/HackingTerminal", tier: "more" },
  { slug: "spotify-clone", name: "Spotify Clone", tagline: "High-fidelity Spotify-style web player", description: "Playlist management and audio controls with a responsive music-player UI.", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/abhiii9vvv/Spotify_Clone", tier: "more" },
  { slug: "x-twitter", name: "X-Twitter", tagline: "Responsive social-media UI clone", description: "Static responsive clone of the X/Twitter interface.", tech: ["HTML", "CSS"], github: "https://github.com/abhiii9vvv/X-Twitter", tier: "more" },
  { slug: "signsecure", name: "SignSecure", tagline: "Responsive signup interface", description: "Dual-panel signup UI with form validation and smooth animations.", tech: ["HTML5", "CSS3", "JavaScript"], github: "https://github.com/abhiii9vvv/SignSecure", tier: "more" },
  { slug: "dsa-with-java", name: "DSA_WITH_JAVA", tagline: "DSA implementations in Java", description: "Trees, graphs, dynamic programming, and LeetCode-style problems.", tech: ["Java"], github: "https://github.com/abhiii9vvv/DSA_WITH_JAVA", tier: "more" },
  { slug: "javascript-fundamentals", name: "JavaScript-Fundamentals", tagline: "Advanced JavaScript reference", description: "Async/await, closures, OOP, DOM, and event handling practice.", tech: ["JavaScript"], github: "https://github.com/abhiii9vvv/JavaScript-Fundamentals", tier: "more" },
  { slug: "mongodb-fundamentals", name: "mongodb-fundamentals", tagline: "MongoDB practice", description: "CRUD, indexing, aggregation, and schema-design practice.", tech: ["MongoDB"], github: "https://github.com/abhiii9vvv/mongodb-fundamentals", tier: "more" },
  { slug: "mern-playground", name: "Mern-PlayGround", tagline: "MERN interview preparation", description: "Mini-projects and machine-coding exercises for MERN interviews.", tech: ["MongoDB", "Express", "React", "Node.js"], github: "https://github.com/abhiii9vvv/Mern-PlayGround", tier: "more" },
];
