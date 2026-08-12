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
  status?: "Current" | "Client" | "Professional" | "Flagship" | "Engineering";
};

export const featuredProjects: Project[] = [
  {
    slug: "mentionwave",
    name: "MentionWave",
    tagline: "Real-time social intelligence platform for monitoring mentions, sentiment, engagement, and conversations across multiple platforms",
    description:
      "Tracks configurable keyword mentions across X/Twitter, Instagram, Facebook, YouTube, and news sources, with sentiment analysis, engagement tracking, alert rules, and a real-time dashboard.",
    tech: ["TypeScript", "Next.js", "AI Sentiment", "Vercel Blob"],
    live: "https://mentionwave.vercel.app/",
    github: "https://github.com/abhiii9vvv/mentionwave",
    screenshot: "/screenshots/mentionwave.png",
    tier: "featured",
    status: "Current",
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
    tier: "featured",
    note: "Flagship project",
    status: "Flagship",
  },
  {
    slug: "secure-exam-browser",
    name: "SecureExamBrowser",
    tagline: "Secure kiosk-mode examination browser with AI face proctoring, OS-level restrictions, real-time monitoring, and suspicious-activity detection",
    description:
      "Kiosk-mode exam browser with alt-tab and screen-capture restrictions, AI face proctoring, real-time monitoring, and violation detection with suspicious-activity logging.",
    tech: ["Electron", "Python", "OpenCV"],
    github: "https://github.com/abhiii9vvv/SecureExamBrowser",
    tier: "featured",
    note: "No public live deployment",
    status: "Engineering",
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
