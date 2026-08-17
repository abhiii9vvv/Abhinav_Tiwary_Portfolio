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
    org: "Paytm",
    role: "TechOps Intern",
    period: "August 2026 – Present",
    current: true,
    description:
      "Working as a TechOps Intern, focusing on technical operations, system monitoring, and cross-functional technology support.",
  },
  {
    org: "The ARambha",
    role: "Technology & Operations Associate",
    period: "Client",
    current: true,
    description:
      "Working across technology, digital platforms, and operational initiatives, contributing to technology-driven solutions and digital systems supporting the Punjab Assembly Election Campaign 2027.",
  },
  {
    org: "SkyCodeHub",
    role: "Associate Web Developer Trainee",
    period: "21 May – 21 July 2026",
    description:
      "Frontend development on responsive interfaces for real-world projects, with code reviews, debugging, and production-oriented development.",
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
