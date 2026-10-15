export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  highlight?: string;
};

export const experience: ExperienceEntry[] = [
  {
    org: "LifeHerba × Global Pact",
    role: "Lead Full-Stack Developer (Freelance)",
    period: "May 2026 – Present",
    current: true,
    description:
      "Lead developer of a production telehealth platform: NestJS API, React admin console, and mobile app for video consultations, pharmacy e-commerce, and wellness booking. Built Razorpay payments with verified webhooks, self-hosted WebRTC calls over Socket.IO and Redis, and Docker deployments on AWS EC2 and RDS.",
    highlight: "93% of 1,165 commits · 288 REST endpoints",
  },
  {
    org: "Paytm",
    role: "TechOps Intern",
    period: "20 August – 30 September 2026",
    description:
      "Completed TechOps training at One97 Communications (Paytm) in the Tech-Non Dev TechOps team, working on technical operations, system monitoring, and cross-functional technology support.",
  },
  {
    org: "SkyCodeHub",
    role: "Associate Web Developer Trainee",
    period: "21 May – 21 July 2026",
    description:
      "Rebuilt skycodehub.com end to end: information architecture, visual design, and a responsive React front end. Also worked through code reviews, debugging, and production releases.",
  },
  {
    org: "Unessa Foundation",
    role: "Full Stack Development Intern",
    period: "March 2026",
    description:
      "Built MERN modules and REST APIs, focusing on query optimization, input validation, error handling, and API integration.",
    highlight: "25% response-time improvement",
  },
];
