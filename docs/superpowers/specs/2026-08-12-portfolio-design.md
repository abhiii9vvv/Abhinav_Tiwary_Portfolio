# Portfolio Design Spec — Abhinav Tiwary

Date: 2026-08-12

## Purpose

A personal portfolio site presenting Abhinav Tiwary as a Full-Stack Developer & Gen AI Builder, built to support internship/job applications (Frontend / Full-Stack / Gen AI). Content source: `details abt me.txt` (identity, experience, achievements, certifications) plus the expanded project list supplied in-conversation (real GitHub/live-site project data).

## Visual Direction — Editorial Minimal

Approved via visual companion mockup comparison (4 styles shown: Editorial Minimal, Dark Technical, Bento/Product Grid, Brutalist).

- Cream/off-white background (not pure white), near-black text
- Large serif display type for headlines (e.g. a well-chosen editorial serif — final typeface picked during implementation using `better-typography` skill guidance, not a default system serif)
- Clean sans-serif for body/UI text
- One restrained accent color, used sparingly (links, tags, key numbers)
- Generous whitespace, wide margins, oversized type — no cramped sections
- Subtle scroll-triggered reveals (fade/slide-up), no gimmicky motion
- **No generic icon packs** (no default Heroicons/Feather/FontAwesome look). Every icon is either hand-crafted inline SVG matching the editorial line weight, or omitted in favor of typographic/numeric treatment. Flag before using any icon in implementation if a suitable custom SVG isn't obvious.

## Tech Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion for entrance/scroll animation
- Deployed to Vercel
- Rationale: matches Abhinav's own listed stack (credibility), gives fine typographic control needed for editorial design, and team already has Vercel deployment experience (Artha Social, CampusSetu, MentionWave all on Vercel).

## Information Architecture

Single-scroll homepage with in-page anchor navigation:

```
Home (Hero) → About → Skills → Experience → Featured Work → 
Strong Projects → Achievements → Certifications → Education → 
Community → Contact
```

## Section Details

### Hero
- Headshot (`assets/images/headshot.png`, GitHub avatar, already good quality)
- Name, serif headline: "Full-Stack Developer building scalable web platforms & AI-powered applications."
- Supporting line (from source doc)
- CTA: Contact + Resume/Download

### About
- "Building rather than just learning" positioning per source doc
- Full-stack + Gen AI intersection framing

### Skills
- Grouped: Frontend / Backend / Databases / Cloud & Infra / AI / Programming / CS Fundamentals / Tools
- No generic tech-logo icon soup — text-forward grouped list or minimal custom marks only if they read as intentional, not stock

### Experience (reverse chronological)
1. The ARambha — Technology & Operations Associate (current)
2. SkyCodeHub — Associate Web Developer Trainee
3. Unessa Foundation — Full Stack Development Intern (25% response-time improvement)
4. ShadowFox — Web Development Intern

### Featured Work (5 flagship projects, real screenshots)
1. **MentionWave** — real-time mention/sentiment platform (screenshot captured)
2. **Artha Social** — agency site + custom CMS (screenshot captured)
3. **The ARambha** — campaign tech platform (screenshot captured; describe as technology contribution, not campaign strategy ownership)
4. **CampusSetu** — multi-tenant SaaS EdTech (screenshot captured; flagship, largest card)
5. **SecureExamBrowser** — AI-proctoring exam browser (no live URL — use styled abstract/graphic treatment referencing its actual feature set: kiosk mode, face detection, violation logging — not a generic placeholder image)

Screenshots already saved to `assets/screenshots/{mentionwave,arthasocial,thearambha,campussetu}.png`.

### Strong Projects (secondary grid, smaller cards)
InternSetu-SIH (with SIH 2nd Runner-Up badge), av9Assist, Bot Detection System, ShardaEzone Attendance Calculator

### More on GitHub (compact linked list, not full cards)
experiences-marketplace-backend, NodeJS, Assesment, DevOps-Practice, devops_learn, Event Attendance System, HackingTerminal, Spotify Clone, X-Twitter, SignSecure, DSA_WITH_JAVA, JavaScript-Fundamentals, mongodb-fundamentals, Mern-PlayGround

### Achievements
SIH 2025 2nd Runner-Up, GitHub (45+ repos, 1,000+ contributions), LeetCode 250+, AWS Agentic AI Workshop recognition (first to complete, mentioned by Vishnu Vashist)

### Certifications
Google Cloud Career Launchpad (Generative AI Leader), NPTEL Elite 99% (IIT Kharagpur), JPMorgan Chase Software Engineering Simulation, MERN Stack Bootcamp

### Education
Sharda University, B.Tech CSE, 2023–2027

### Community
AWS Student Community Day Delhi NCR 2026 (Sharda University) — small Recognition card for the AWS mention

### Contact
Email, phone, LinkedIn, GitHub, "Let's build something" CTA. Availability note: open to Frontend/Full-Stack/Gen AI internships.

### Stats bar (hero or near-top, 3–4 numbers only)
45+ repos · 1K+ contributions · 250+ DSA solved · SIH 2nd Runner-Up
(Remaining numbers — 25% backend improvement, 99% NPTEL, 1K+ LinkedIn — distributed into Experience/Certifications sections rather than stacked in hero.)

## Assets on hand
- `assets/images/headshot.png` — profile photo
- `assets/screenshots/mentionwave.png`
- `assets/screenshots/arthasocial.png`
- `assets/screenshots/thearambha.png`
- `assets/screenshots/campussetu.png`
- SecureExamBrowser: no screenshot available (no live deploy) — needs custom treatment, not a generic placeholder

## Explicit constraints
- No generic/stock icon sets anywhere in the UI. Custom SVGs or typographic treatment only.
- No invented data: locations, links, or numbers not present in the source content must not be fabricated (e.g. do not invent an InternSetu-SIH live URL).
- The ARambha section must describe Abhinav's technology contribution, not claim ownership of campaign strategy.

## Out of scope for this spec
- Blog/CMS functionality
- Multi-page routing (single-scroll only for v1)
- Dark mode toggle (may be considered later, not required now)
