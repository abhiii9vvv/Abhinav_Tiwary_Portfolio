# Portfolio Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the editorial-minimal single-scroll Next.js portfolio site described in `docs/superpowers/specs/2026-08-12-portfolio-design.md`.

**Architecture:** Next.js 14 App Router, single route (`/`), composed of section components rendered in order inside `app/page.tsx`. Shared design tokens (colors, type scale) live in `tailwind.config.ts` and `app/globals.css`. All icons are hand-authored inline SVG components in `components/icons/` — no icon package dependency. Content (experience, projects, skills, achievements) lives in typed data files under `content/`, imported by the section components that render them, so copy edits never touch component logic.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, deployed to Vercel.

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `.gitignore`

- [ ] **Step 1: Scaffold Next.js app**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --eslint
```
When prompted about existing files (`assets/`, `docs/`, `.agents/`, `details abt me.txt`, `skills-lock.json`), keep them — do not overwrite.

- [ ] **Step 2: Verify dev server boots**

Run: `npm run dev`
Expected: server starts on `http://localhost:3000`, default Next.js starter page loads with no errors. Stop the server after confirming (Ctrl+C).

- [ ] **Step 3: Install Framer Motion**

Run: `npm install framer-motion`

- [ ] **Step 4: Move existing assets into `public/`**

```bash
mkdir -p public/images public/screenshots
cp assets/images/headshot.png public/images/headshot.png
cp assets/screenshots/mentionwave.png public/screenshots/mentionwave.png
cp assets/screenshots/arthasocial.png public/screenshots/arthasocial.png
cp assets/screenshots/thearambha.png public/screenshots/thearambha.png
cp assets/screenshots/campussetu.png public/screenshots/campussetu.png
```

- [ ] **Step 5: Commit**

```bash
git init
git add -A
git commit -m "chore: scaffold Next.js portfolio project"
```

---

## Task 2: Design Tokens — Colors & Typography

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Font choice:** Use `next/font/google` to load a serif display face and a sans body face. Use **Fraunces** (serif, has an editorial/wonky optical-size axis that avoids the "default serif" look) for display headings, and **Inter** for body/UI text. Both are variable fonts served locally by Next.js (no external request at runtime).

- [ ] **Step 1: Configure fonts in `app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinav Tiwary — Full-Stack Developer & Gen AI Builder",
  description:
    "Full-Stack Developer building scalable web platforms and AI-powered applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Set color tokens and base styles in `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #faf8f3;
  --color-bg-raised: #f2efe6;
  --color-ink: #16140f;
  --color-ink-muted: #57534a;
  --color-accent: #a8481e;
  --color-line: #e4ded0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-body), ui-sans-serif, system-ui, sans-serif;
}

.font-display {
  font-family: var(--font-display), ui-serif, Georgia, serif;
}
```

- [ ] **Step 3: Wire tokens into Tailwind in `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-raised": "var(--color-bg-raised)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        accent: "var(--color-accent)",
        line: "var(--color-line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Verify visually**

Run: `npm run dev`, open `http://localhost:3000`.
Expected: page background is cream (`#faf8f3`), no console errors about missing fonts.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/globals.css tailwind.config.ts
git commit -m "feat: set up design tokens and editorial typography"
```

---

## Task 3: Content Data Files

**Files:**
- Create: `content/profile.ts`
- Create: `content/experience.ts`
- Create: `content/projects.ts`
- Create: `content/achievements.ts`
- Create: `content/skills.ts`

All copy comes verbatim from `details abt me.txt` and the in-conversation project list — no invented data, no invented URLs.

- [ ] **Step 1: Create `content/profile.ts`**

```typescript
export const profile = {
  name: "Abhinav Tiwary",
  pronouns: "He/Him",
  location: "Greater Noida, India",
  email: "abhinavv8975@gmail.com",
  phone: "+91 6207363626",
  linkedin: "https://linkedin.com/in/abhinavtiwary",
  github: "https://github.com/abhiii9vvv",
  headline: "Full-Stack Developer building scalable web platforms and AI-powered applications.",
  subheadline:
    "I build real-world products across full-stack engineering, backend systems, cloud infrastructure, and Generative AI.",
  about:
    "I work at the intersection of full-stack engineering and Generative AI — learning by shipping real products across SaaS platforms, backend systems, cloud infrastructure, real-time applications, and developer tooling.",
  availability: "Open to Frontend / Full-Stack / Gen AI internships",
  headshot: "/images/headshot.png",
};

export const stats = [
  { value: "45+", label: "GitHub Repositories" },
  { value: "1,000+", label: "GitHub Contributions" },
  { value: "250+", label: "DSA Problems Solved" },
  { value: "2nd Runner-Up", label: "Smart India Hackathon 2025" },
];
```

- [ ] **Step 2: Create `content/experience.ts`**

```typescript
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
    org: "The ARambha",
    role: "Technology & Operations Associate",
    period: "Current",
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
  {
    org: "ShadowFox",
    role: "Web Development Intern",
    period: "April 2026",
    description:
      "Full-stack features with React components and Express APIs following MVC architecture, focused on UI optimization and maintainable, scalable development.",
  },
];
```

- [ ] **Step 3: Create `content/projects.ts`**

```typescript
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
      "Technology and digital platform contributions supporting data-driven campaign operations and digital workflows — \"Campaign strategy from booth to ballot, data-driven, digitally delivered.\"",
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
      "Aggregates verified internship opportunities and connects students with them. Built for Smart India Hackathon 2025 — 2nd Runner-Up (Internal).",
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
```

- [ ] **Step 4: Create `content/achievements.ts`**

```typescript
export const achievements = [
  {
    title: "Smart India Hackathon 2025",
    detail: "2nd Runner-Up — Internal",
  },
  {
    title: "AWS Agentic AI Workshop",
    detail:
      "First to complete the workshop tasks at AWS Student Community Day Delhi NCR 2026, publicly recognized by AWS Solutions Architect Vishnu Vashist.",
  },
  {
    title: "LeetCode",
    detail: "250+ DSA problems solved across arrays, trees, graphs, and dynamic programming.",
  },
  {
    title: "GitHub",
    detail: "45+ repositories, 1,000+ contributions.",
  },
];

export const certifications = [
  {
    name: "Generative AI Leader",
    issuer: "Google Cloud Career Launchpad",
    date: "March 2026",
  },
  {
    name: "Education for Sustainable Development",
    issuer: "NPTEL, IIT Kharagpur (SWAYAM)",
    date: "12-week course — 99% — Elite Certification",
  },
  {
    name: "Software Engineering Simulation",
    issuer: "JPMorgan Chase",
  },
  {
    name: "MERN Stack Development",
    issuer: "MERN Stack Bootcamp",
  },
];

export const education = {
  institution: "Sharda University",
  degree: "Bachelor of Technology — Computer Science Engineering",
  period: "2023–2027",
  location: "Greater Noida, India",
};

export const community = {
  event: "AWS Student Community Day Delhi NCR 2026",
  location: "Hosted at Sharda University",
  description:
    "Attended sessions on AWS, cloud computing, AI, agentic AI, DevOps, and industry practices.",
  recognition:
    "AWS Solutions Architect Vishnu Vashist publicly recognized Abhinav as one of the first students to complete the hands-on Agentic AI workshop.",
};
```

- [ ] **Step 5: Create `content/skills.ts`**

```typescript
export const skillGroups = [
  { label: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "WebSockets"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { label: "Cloud & Infrastructure", items: ["AWS", "Google Cloud", "Docker", "Linux"] },
  { label: "AI", items: ["Generative AI", "LLM APIs", "AI Agents", "OpenCV"] },
  { label: "Programming", items: ["Java", "Python", "JavaScript", "TypeScript"] },
  { label: "CS Fundamentals", items: ["Data Structures", "Algorithms", "OOP", "DBMS", "System Design"] },
];
```

- [ ] **Step 6: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add content/
git commit -m "feat: add typed content data for profile, experience, projects, achievements"
```

---

## Task 4: Custom SVG Icon Set

**Files:**
- Create: `components/icons/ArrowUpRight.tsx`
- Create: `components/icons/GithubMark.tsx`
- Create: `components/icons/LinkedinMark.tsx`
- Create: `components/icons/MailMark.tsx`
- Create: `components/icons/index.ts`

These are hand-authored, matched to a single consistent stroke weight (1.5px) so the whole set reads as one system — not mixed stock icons. Used for external links, socials, and contact — nowhere else (avoid icon soup per spec constraint).

- [ ] **Step 1: Create `components/icons/ArrowUpRight.tsx`**

```tsx
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

- [ ] **Step 2: Create `components/icons/GithubMark.tsx`**

```tsx
export function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

- [ ] **Step 3: Create `components/icons/LinkedinMark.tsx`**

```tsx
export function LinkedinMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 10.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7.5" cy="7.5" r="0.75" fill="currentColor" />
      <path
        d="M11 16.5V13a2 2 0 014 0v3.5M11 10.5V16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

- [ ] **Step 4: Create `components/icons/MailMark.tsx`**

```tsx
export function MailMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 7L12 13L19.5 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

- [ ] **Step 5: Create `components/icons/index.ts`**

```typescript
export { ArrowUpRight } from "./ArrowUpRight";
export { GithubMark } from "./GithubMark";
export { LinkedinMark } from "./LinkedinMark";
export { MailMark } from "./MailMark";
```

- [ ] **Step 6: Verify compile**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add components/icons/
git commit -m "feat: add hand-authored icon set (no generic icon library)"
```

---

## Task 5: Shared Layout Primitives

**Files:**
- Create: `components/Section.tsx`
- Create: `components/Reveal.tsx`
- Create: `components/Nav.tsx`

- [ ] **Step 1: Create `components/Section.tsx`**

```tsx
type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-6 py-24 sm:px-10 ${className ?? ""}`}>
      <div className="mb-12">
        {eyebrow && (
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Create `components/Reveal.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create `components/Nav.tsx`**

```tsx
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-lg text-ink">
          Abhinav Tiwary
        </a>
        <ul className="hidden gap-8 text-sm text-ink-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
```

- [ ] **Step 4: Verify compile**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add components/Section.tsx components/Reveal.tsx components/Nav.tsx
git commit -m "feat: add shared section, reveal-animation, and nav primitives"
```

---

## Task 6: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Create `components/sections/Hero.tsx`**

```tsx
import Image from "next/image";
import { profile, stats } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <Reveal>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-ink-muted">
              {profile.location} — {profile.availability}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted">
              {profile.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-bg transition-opacity hover:opacity-85"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
              >
                See featured work
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Image
            src={profile.headshot}
            alt={profile.name}
            width={180}
            height={180}
            className="rounded-full border border-line object-cover"
            priority
          />
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl text-ink">{stat.value}</dt>
              <dd className="mt-1 text-sm text-ink-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 2: Verify compile**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: add hero section with headshot and stats bar"
```

---

## Task 7: About Section

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Create `components/sections/About.tsx`**

```tsx
import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building, not just learning.">
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          {profile.about}
        </p>
      </Reveal>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/About.tsx
git commit -m "feat: add about section"
```

---

## Task 8: Skills Section

**Files:**
- Create: `components/sections/Skills.tsx`

- [ ] **Step 1: Create `components/sections/Skills.tsx`**

```tsx
import { skillGroups } from "@/content/skills";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with.">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="border-t border-line pt-4">
              <h3 className="font-display text-xl text-ink">{group.label}</h3>
              <p className="mt-2 text-ink-muted">{group.items.join(" · ")}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Skills.tsx
git commit -m "feat: add skills section"
```

---

## Task 9: Experience Section

**Files:**
- Create: `components/sections/Experience.tsx`

- [ ] **Step 1: Create `components/sections/Experience.tsx`**

```tsx
import { experience } from "@/content/experience";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="space-y-10">
        {experience.map((entry, i) => (
          <Reveal key={entry.org} delay={i * 0.05}>
            <li className="grid gap-2 border-t border-line pt-6 sm:grid-cols-[200px_1fr]">
              <div>
                <p className="text-sm text-ink-muted">{entry.period}</p>
                {entry.current && (
                  <span className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                    Current
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{entry.org}</h3>
                <p className="mt-1 text-ink">{entry.role}</p>
                <p className="mt-2 max-w-xl text-ink-muted">{entry.description}</p>
                {entry.highlight && (
                  <p className="mt-2 text-sm font-medium text-accent">{entry.highlight}</p>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Experience.tsx
git commit -m "feat: add experience section"
```

---

## Task 10: Featured Work Section

**Files:**
- Create: `components/sections/FeaturedWork.tsx`
- Create: `components/ProjectCard.tsx`

- [ ] **Step 1: Create `components/ProjectCard.tsx`**

```tsx
import Image from "next/image";
import { Project } from "@/content/projects";
import { ArrowUpRight, GithubMark } from "@/components/icons";

export function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  const primaryLink = project.live ?? project.github;

  return (
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-2xl border border-line bg-bg-raised transition-shadow hover:shadow-lg ${
        large ? "sm:col-span-2" : ""
      }`}
    >
      {project.screenshot ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line">
          <Image
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center border-b border-line bg-ink text-bg">
          <span className="font-display text-2xl">{project.name}</span>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-ink">{project.name}</h3>
            <p className="mt-1 text-ink-muted">{project.tagline}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="mt-4 text-sm text-ink-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted">
              {t}
            </li>
          ))}
        </ul>
        {project.note && (
          <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-muted">
            {!project.live && <GithubMark className="h-3.5 w-3.5" />}
            {project.note}
          </p>
        )}
      </div>
    </a>
  );
}
```

- [ ] **Step 2: Create `components/sections/FeaturedWork.tsx`**

```tsx
import { featuredProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function FeaturedWork() {
  return (
    <Section id="work" eyebrow="Featured Work" title="Products I've shipped.">
      <div className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} large={project.slug === "campussetu"} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Verify compile**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/ProjectCard.tsx components/sections/FeaturedWork.tsx
git commit -m "feat: add featured work section with real project screenshots"
```

---

## Task 11: Strong Projects + More on GitHub Sections

**Files:**
- Create: `components/sections/StrongProjects.tsx`
- Create: `components/sections/MoreProjects.tsx`

- [ ] **Step 1: Create `components/sections/StrongProjects.tsx`**

```tsx
import { strongProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function StrongProjects() {
  return (
    <Section id="strong-projects" eyebrow="More Work" title="Strong projects.">
      <div className="grid gap-6 sm:grid-cols-2">
        {strongProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Create `components/sections/MoreProjects.tsx`**

```tsx
import { moreProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

export function MoreProjects() {
  return (
    <Section id="more-projects" eyebrow="Repositories" title="More on GitHub.">
      <Reveal>
        <ul className="divide-y divide-line border-t border-line">
          {moreProjects.map((project) => (
            <li key={project.slug}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-4"
              >
                <div>
                  <span className="text-ink">{project.name}</span>
                  <span className="ml-3 text-sm text-ink-muted">{project.tagline}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
```

- [ ] **Step 3: Verify compile**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/sections/StrongProjects.tsx components/sections/MoreProjects.tsx
git commit -m "feat: add strong projects grid and more-on-github list"
```

---

## Task 12: Achievements, Certifications, Education, Community Sections

**Files:**
- Create: `components/sections/Achievements.tsx`
- Create: `components/sections/Certifications.tsx`
- Create: `components/sections/EducationCommunity.tsx`

- [ ] **Step 1: Create `components/sections/Achievements.tsx`**

```tsx
import { achievements } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way.">
      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="rounded-2xl border border-line bg-bg-raised p-6">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-muted">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Create `components/sections/Certifications.tsx`**

```tsx
import { certifications } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continued learning.">
      <ul className="divide-y divide-line border-t border-line">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.03}>
            <li className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-ink">{cert.name}</p>
                <p className="text-sm text-ink-muted">{cert.issuer}</p>
              </div>
              {cert.date && <p className="text-sm text-ink-muted">{cert.date}</p>}
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
```

- [ ] **Step 3: Create `components/sections/EducationCommunity.tsx`**

```tsx
import { education, community } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function EducationCommunity() {
  return (
    <Section id="education" eyebrow="Education & Community" title="Sharda University.">
      <div className="grid gap-10 sm:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="font-display text-xl text-ink">{education.degree}</h3>
            <p className="mt-1 text-ink-muted">{education.institution}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {education.period} — {education.location}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-bg-raised p-6">
            <h3 className="font-display text-lg text-ink">{community.event}</h3>
            <p className="mt-1 text-sm text-ink-muted">{community.location}</p>
            <p className="mt-3 text-ink-muted">{community.description}</p>
            <p className="mt-3 text-sm text-accent">{community.recognition}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Verify compile**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add components/sections/Achievements.tsx components/sections/Certifications.tsx components/sections/EducationCommunity.tsx
git commit -m "feat: add achievements, certifications, education and community sections"
```

---

## Task 13: Contact Section + Footer

**Files:**
- Create: `components/sections/Contact.tsx`
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create `components/sections/Contact.tsx`**

```tsx
import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MailMark, LinkedinMark, GithubMark, ArrowUpRight } from "@/components/icons";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something.">
      <Reveal>
        <p className="max-w-xl text-lg text-ink-muted">
          {profile.availability}. Reach out directly — I read every message.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-bg transition-opacity hover:opacity-85"
          >
            <MailMark className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
          >
            <LinkedinMark className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
          >
            <GithubMark className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
```

- [ ] **Step 2: Create `components/Footer.tsx`**

```tsx
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 text-sm text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.phone}</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Verify compile**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Contact.tsx components/Footer.tsx
git commit -m "feat: add contact section and footer"
```

---

## Task 14: Assemble the Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StrongProjects } from "@/components/sections/StrongProjects";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { EducationCommunity } from "@/components/sections/EducationCommunity";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedWork />
        <StrongProjects />
        <MoreProjects />
        <Achievements />
        <Certifications />
        <EducationCommunity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Delete default Next.js starter styles/content that conflict**

Check `app/page.tsx` was fully replaced (not appended) and that `app/globals.css` has no leftover default `create-next-app` boilerplate below the token block from Task 2.

- [ ] **Step 3: Run full dev server check**

Run: `npm run dev`, open `http://localhost:3000`.
Expected: full single-scroll page renders top to bottom with no console errors — Hero, About, Skills, Experience, Featured Work (4 real screenshots + 1 dark placeholder for SecureExamBrowser), Strong Projects, More on GitHub list, Achievements, Certifications, Education & Community, Contact, Footer.

- [ ] **Step 4: Run production build**

Run: `npm run build`
Expected: build succeeds with no type errors and no failed image optimization (screenshots resolve from `public/screenshots/`).

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble full single-scroll homepage"
```

---

## Task 15: Responsive & Accessibility Pass

**Files:**
- Modify: `components/Nav.tsx` (mobile menu)
- Modify: `app/globals.css` (focus states, reduced motion)

- [ ] **Step 1: Add reduced-motion support to `app/globals.css`**

Append:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Add visible focus states to `app/globals.css`**

Append:

```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
```

- [ ] **Step 3: Add a mobile nav toggle to `components/Nav.tsx`**

Replace the whole file:

```tsx
"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-lg text-ink">
          Abhinav Tiwary
        </a>
        <ul className="hidden gap-8 text-sm text-ink-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-sm text-ink sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul id="mobile-nav" className="flex flex-col gap-1 border-t border-line px-6 py-4 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
```

- [ ] **Step 4: Manual check at 375px width**

Run: `npm run dev`. Resize browser (or devtools device toolbar) to 375px width.
Expected: nav collapses to "Menu" button that toggles a stacked link list; hero, stats grid, and project cards stack to one column with no horizontal scroll.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css components/Nav.tsx
git commit -m "feat: add mobile nav, focus states, and reduced-motion support"
```

---

## Task 16: Deploy Prep

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `README.md`**

```markdown
# Abhinav Tiwary — Portfolio

Personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
npm run start
\`\`\`
```

- [ ] **Step 2: Final production build check**

Run: `npm run build`
Expected: succeeds with zero errors, zero type errors.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add project README"
```

- [ ] **Step 4: Deploy to Vercel (manual, requires user's Vercel account)**

This step requires the user to run `vercel` (or connect the GitHub repo in the Vercel dashboard) themselves, since it touches an external account. Do not run deployment commands without explicit confirmation.

---

## Plan Self-Review Notes

- **Spec coverage:** Hero/stats, About, Skills, Experience (all 4 roles), Featured Work (all 5 flagships with real screenshots + non-generic SecureExamBrowser treatment), Strong Projects (4), More on GitHub (14), Achievements, Certifications, Education, Community/Recognition, Contact, no-fabrication constraint (no invented InternSetu live URL — omitted), The ARambha framed as tech contribution not campaign ownership, no generic icons (custom hand-authored set, used sparingly) — all covered by tasks above.
- **Type consistency:** `Project` type defined once in `content/projects.ts` and reused by `ProjectCard`, `FeaturedWork`, `StrongProjects`, `MoreProjects`. `ExperienceEntry` defined once and reused. No duplicate/conflicting shapes.
- **Out of scope confirmed excluded:** no blog/CMS, no multi-page routing, no dark-mode toggle — none of the tasks above introduce them.
