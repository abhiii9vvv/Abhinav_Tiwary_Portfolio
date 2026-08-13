# Left Sidebar Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the sticky top `Nav` with a fixed left-side vertical sidebar (icon+label links, scale-on-active) across all 9 routes, widen content to use the freed-up space, and re-tune the three GSAP pin offsets that were calibrated around the old top nav's height.

**Architecture:** A new `components/Sidebar.tsx` renders a fixed `88px` left rail on desktop (`lg:` and up) and a slim top bar + full-screen overlay on mobile. A new `hooks/useActiveNavLink.ts` hook determines the active link — via `usePathname()` on standalone routes, via `IntersectionObserver` on the homepage's in-page sections. Nine new stroke-icon components back the rail's icon+label links. `Sidebar` replaces `Nav` in all 9 page files. A shared `CONTENT_MAX_WIDTH` constant replaces `max-w-7xl` in 6 files, and `app/layout.tsx` gets `lg:pl-[88px]` to offset content past the fixed rail.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, native `IntersectionObserver` (no new dependency).

Not decomposed further — single implementation plan.

---

## File Structure

- **Create:** `components/icons/nav/HomeIcon.tsx`, `AboutIcon.tsx`, `SkillsIcon.tsx`, `ExperienceIcon.tsx`, `WorkIcon.tsx`, `AchievementsIcon.tsx`, `CertificationsIcon.tsx`, `EducationIcon.tsx`, `ContactIcon.tsx`, `index.ts` (barrel export).
- **Create:** `hooks/useActiveNavLink.ts`
- **Create:** `components/Sidebar.tsx`
- **Create:** `lib/layout.ts` (exports `CONTENT_MAX_WIDTH` constant)
- **Delete:** `components/Nav.tsx` (replaced by `Sidebar.tsx`)
- **Modify:** `app/layout.tsx` — add `lg:pl-[88px]` wrapper
- **Modify:** all 9 page files (`app/page.tsx`, `app/about/page.tsx`, `app/skills/page.tsx`, `app/experience/page.tsx`, `app/work/page.tsx`, `app/achievements/page.tsx`, `app/certifications/page.tsx`, `app/education/page.tsx`, `app/contact/page.tsx`) — swap `Nav` import/usage for `Sidebar`
- **Modify:** `components/Section.tsx`, `components/sections/Hero.tsx`, `components/sections/Skills.tsx`, `components/sections/Stats.tsx`, `components/sections/StrongProjects.tsx`, `components/Footer.tsx` — swap `max-w-7xl` for `CONTENT_MAX_WIDTH`
- **Modify:** `components/sections/Skills.tsx`, `components/sections/Experience.tsx`, `components/sections/StrongProjects.tsx` — GSAP pin `start` offset

---

### Task 1: Nav icon set

**Files:**
- Create: `components/icons/nav/HomeIcon.tsx`
- Create: `components/icons/nav/AboutIcon.tsx`
- Create: `components/icons/nav/SkillsIcon.tsx`
- Create: `components/icons/nav/ExperienceIcon.tsx`
- Create: `components/icons/nav/WorkIcon.tsx`
- Create: `components/icons/nav/AchievementsIcon.tsx`
- Create: `components/icons/nav/CertificationsIcon.tsx`
- Create: `components/icons/nav/EducationIcon.tsx`
- Create: `components/icons/nav/ContactIcon.tsx`
- Create: `components/icons/nav/index.ts`

- [ ] **Step 1: Create the nine icon components**

Each follows the existing stroke-icon pattern from `components/icons/GithubMark.tsx` (`viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `strokeWidth="1.5"`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `aria-hidden="true"`, accepts `className`).

`components/icons/nav/HomeIcon.tsx`:
```typescript
export function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 01-1 1h-4.5v-6h-5v6H5a1 1 0 01-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/AboutIcon.tsx`:
```typescript
export function AboutIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/SkillsIcon.tsx`:
```typescript
export function SkillsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.7 6.3a3 3 0 014.2 4.2l-1 1-4.2-4.2 1-1zM4 20l1.2-4.3 8.4-8.4 4.2 4.2-8.4 8.4L4 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/ExperienceIcon.tsx`:
```typescript
export function ExperienceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5M3.5 12.5h17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/WorkIcon.tsx`:
```typescript
export function WorkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="4.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="14.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="14.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
```

`components/icons/nav/AchievementsIcon.tsx`:
```typescript
export function AchievementsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 4h10v4a5 5 0 01-5 5 5 5 0 01-5-5V4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5H3.5a1 1 0 00-1 1.3l.6 1.8A3 3 0 006 10h1M19 5h1.5a1 1 0 011 1.3l-.6 1.8A3 3 0 0118 10h-1M12 13v3m-3 4h6l-1-2.5h-4L9 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/CertificationsIcon.tsx`:
```typescript
export function CertificationsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 13.5 8 21l4-2 4 2-1-7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/EducationIcon.tsx`:
```typescript
export function EducationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 8l10-4.5L22 8l-10 4.5L2 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5M22 8v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/ContactIcon.tsx`:
```typescript
export function ContactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 7l8 5.5L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

`components/icons/nav/index.ts`:
```typescript
export { HomeIcon } from "./HomeIcon";
export { AboutIcon } from "./AboutIcon";
export { SkillsIcon } from "./SkillsIcon";
export { ExperienceIcon } from "./ExperienceIcon";
export { WorkIcon } from "./WorkIcon";
export { AchievementsIcon } from "./AchievementsIcon";
export { CertificationsIcon } from "./CertificationsIcon";
export { EducationIcon } from "./EducationIcon";
export { ContactIcon } from "./ContactIcon";
```

- [ ] **Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/icons/nav/
git commit -m "feat: add sidebar nav icon set"
```

---

### Task 2: Content width constant

**Files:**
- Create: `lib/layout.ts`
- Modify: `components/Section.tsx`
- Modify: `components/sections/Hero.tsx`
- Modify: `components/sections/Skills.tsx`
- Modify: `components/sections/Stats.tsx`
- Modify: `components/sections/StrongProjects.tsx`
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Create the shared constant**

`lib/layout.ts`:
```typescript
export const CONTENT_MAX_WIDTH = "max-w-[1600px]";
```

- [ ] **Step 2: Replace `max-w-7xl` with the constant in each file**

`components/Section.tsx` — read current file, replace the literal `max-w-7xl` class in the wrapper div's className with `${CONTENT_MAX_WIDTH}` via template literal, importing `CONTENT_MAX_WIDTH` from `@/lib/layout`:

```typescript
import { CONTENT_MAX_WIDTH } from "@/lib/layout";

// ...inside the component, the wrapper div becomes:
<div className={`relative mx-auto ${CONTENT_MAX_WIDTH} px-6 py-24 sm:px-10 ${className ?? ""}`}>
```

Apply the identical pattern (import `CONTENT_MAX_WIDTH` from `@/lib/layout`, replace the literal `max-w-7xl` string with `${CONTENT_MAX_WIDTH}` inside the existing template literal className) to:
- `components/sections/Hero.tsx` (the grid wrapper div, currently `className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 sm:grid-cols-[1.2fr_0.8fr] sm:px-10 sm:pt-24"`)
- `components/sections/Skills.tsx` (the wrapper div, currently `className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10"`)
- `components/sections/Stats.tsx` (the section element itself, currently `className="mx-auto max-w-7xl px-6 py-16 sm:px-10"`)
- `components/sections/StrongProjects.tsx` (the wrapper div, currently `className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10"`)
- `components/Footer.tsx` (the wrapper div, currently `className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end"`)

In each case, only the `max-w-7xl` substring is replaced with `${CONTENT_MAX_WIDTH}` (turning the surrounding string into a template literal if it wasn't already) — no other classes change.

- [ ] **Step 3: Verify no `max-w-7xl` remains**

Run: `grep -rn "max-w-7xl" components/` (or equivalent search)
Expected: no matches (all six occurrences replaced).

- [ ] **Step 4: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add lib/layout.ts components/Section.tsx components/sections/Hero.tsx components/sections/Skills.tsx components/sections/Stats.tsx components/sections/StrongProjects.tsx components/Footer.tsx
git commit -m "feat: widen content max-width to 1600px via shared constant"
```

---

### Task 3: Active nav link hook

**Files:**
- Create: `hooks/useActiveNavLink.ts`

- [ ] **Step 1: Create the hook**

```typescript
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type NavLink = {
  href: string;
  label: string;
  /** DOM id of the matching in-page section, used only on the homepage. */
  sectionId: string;
};

/**
 * Returns the href of the currently "active" nav link.
 * On the homepage ("/"), tracks in-page sections via IntersectionObserver.
 * On any other route, matches the current pathname.
 */
export function useActiveNavLink(links: NavLink[]): string {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [activeSectionHref, setActiveSectionHref] = useState(links[0]?.href ?? "/");

  useEffect(() => {
    if (!isHomepage) return;

    const sectionToHref = new Map(links.map((link) => [link.sectionId, link.href]));
    const elements = links
      .map((link) => document.getElementById(link.sectionId))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        }

        for (const link of links) {
          if (visibleIds.has(link.sectionId)) {
            setActiveSectionHref(link.href);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHomepage, links]);

  if (!isHomepage) {
    return pathname;
  }

  return activeSectionHref;
}
```

- [ ] **Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add hooks/useActiveNavLink.ts
git commit -m "feat: add active nav link hook (route match + scroll-spy)"
```

---

### Task 4: Sidebar component

**Files:**
- Create: `components/Sidebar.tsx`

- [ ] **Step 1: Create the component**

```typescript
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  ExperienceIcon,
  WorkIcon,
  AchievementsIcon,
  CertificationsIcon,
  EducationIcon,
  ContactIcon,
} from "@/components/icons/nav";
import { ArrowUpRight } from "@/components/icons";
import { useActiveNavLink, type NavLink } from "@/hooks/useActiveNavLink";

type SidebarLink = NavLink & { Icon: React.ComponentType<{ className?: string }> };

const links: SidebarLink[] = [
  { href: "/", label: "Home", sectionId: "top", Icon: HomeIcon },
  { href: "/about", label: "About", sectionId: "about", Icon: AboutIcon },
  { href: "/skills", label: "Skills", sectionId: "skills", Icon: SkillsIcon },
  { href: "/experience", label: "Experience", sectionId: "experience", Icon: ExperienceIcon },
  { href: "/work", label: "Work", sectionId: "work", Icon: WorkIcon },
  { href: "/achievements", label: "Achievements", sectionId: "achievements", Icon: AchievementsIcon },
  { href: "/certifications", label: "Certs", sectionId: "certifications", Icon: CertificationsIcon },
  { href: "/education", label: "Education", sectionId: "education", Icon: EducationIcon },
  { href: "/contact", label: "Contact", sectionId: "contact", Icon: ContactIcon },
];

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeHref = useActiveNavLink(links);
  const activeIndex = links.findIndex((link) => link.href === activeHref);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[70] focus-visible:rounded-md focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Skip to content
      </a>

      {/* Desktop rail */}
      <header className="fixed inset-y-0 left-0 z-50 hidden w-[88px] flex-col items-center border-r border-line bg-bg py-6 lg:flex">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <Image
            src="/images/logo.png"
            alt="Abhinav Tiwary"
            width={555}
            height={88}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="relative mt-10 flex flex-1 flex-col justify-center gap-6">
          {activeIndex >= 0 && (
            <span
              aria-hidden="true"
              className="absolute -left-6 w-[3px] rounded-r-full bg-ink transition-[top] duration-300 ease-out"
              style={{ top: `${(activeIndex / links.length) * 100}%`, height: `${100 / links.length}%` }}
            />
          )}
          {links.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center gap-1.5 rounded-sm px-2 py-1 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  isActive ? "scale-[1.15] text-ink opacity-100" : "text-ink-muted opacity-50 hover:opacity-80"
                }`}
              >
                <link.Icon className="h-5 w-5 shrink-0" />
                <span className="text-center text-[10px] uppercase tracking-[0.12em]">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <a
          href="https://lifeherbagroup.com/resume/Abhinav_Tiwary_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="mt-6 flex shrink-0 flex-col items-center gap-1.5 text-ink-muted opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <ArrowUpRight className="h-5 w-5" />
          <span className="text-[10px] uppercase tracking-[0.12em]">Resume</span>
        </a>
      </header>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-bg px-6 lg:hidden">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <Image src="/images/logo.png" alt="Abhinav Tiwary" width={555} height={88} className="h-7 w-auto" priority />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-overlay"
          className="shrink-0 rounded-sm text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-[60] flex flex-col gap-1 bg-bg px-6 py-8 lg:hidden"
        >
          {links.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 rounded-sm py-3 text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  isActive ? "font-medium text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                <link.Icon className="h-5 w-5 shrink-0" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
```

Note: the accent bar's `top`/`height` are computed as simple even fractions of the rail (`activeIndex / links.length`), which is an approximation — it assumes links are evenly spaced within the `flex flex-col justify-center gap-6` nav area rather than measuring exact pixel positions. This is a deliberate simplification; the bar's imprecision is visually minor at 9 evenly-gapped links and avoids adding a `ResizeObserver`/ref-measurement layer.

- [ ] **Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Sidebar.tsx
git commit -m "feat: add left sidebar navigation component"
```

---

### Task 5: Swap Sidebar into all 9 pages, delete Nav

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/skills/page.tsx`
- Modify: `app/experience/page.tsx`
- Modify: `app/work/page.tsx`
- Modify: `app/achievements/page.tsx`
- Modify: `app/certifications/page.tsx`
- Modify: `app/education/page.tsx`
- Modify: `app/contact/page.tsx`
- Delete: `components/Nav.tsx`

- [ ] **Step 1: In each of the 9 page files, replace the `Nav` import and usage with `Sidebar`**

Read each file first to confirm its exact current content (they may have unrelated section imports), then apply this transform: replace `import { Nav } from "@/components/Nav";` with `import { Sidebar } from "@/components/Sidebar";`, and replace the `<Nav />` JSX usage with `<Sidebar />`. No other lines in these files change.

Example for `app/about/page.tsx` (confirmed current content):
```typescript
import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <About />
      </main>
      <Footer />
    </>
  );
}
```

Apply the identical `Nav`→`Sidebar` substitution to `app/page.tsx`, `app/skills/page.tsx`, `app/experience/page.tsx`, `app/work/page.tsx`, `app/achievements/page.tsx`, `app/certifications/page.tsx`, `app/education/page.tsx`, `app/contact/page.tsx` — read each file's current content first, only touch the import line and the `<Nav />`/`<Sidebar />` JSX tag.

- [ ] **Step 2: Delete the old Nav component**

```bash
git rm components/Nav.tsx
```

- [ ] **Step 3: Verify no remaining references to Nav**

Run: `grep -rn "components/Nav\"" app/ components/` (or equivalent search for the old import path)
Expected: no matches.

- [ ] **Step 4: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add app/ components/Sidebar.tsx
git commit -m "feat: replace top nav with sidebar across all routes"
```

(Note: `git rm` from Step 2 already stages the deletion; `git add app/` picks up the 9 modified page files.)

---

### Task 6: Content offset for fixed sidebar

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add left padding to body content on desktop**

Read current `app/layout.tsx`. Wrap `{children}` in a div with `lg:pl-[88px]` so page content clears the fixed 88px-wide desktop rail (no padding needed below `lg:` since the sidebar becomes a normal-flow top bar there).

Modify the `<body>` block from:
```tsx
      <body>
        <ScrollProgress />
        {children}
      </body>
```
to:
```tsx
      <body>
        <ScrollProgress />
        <div className="lg:pl-[88px]">{children}</div>
      </body>
```

- [ ] **Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Manually verify in dev server**

Run: `npm run dev`, open the homepage at desktop width (≥1024px).
Expected: content starts right after the 88px sidebar with no overlap, no double-gap; `ScrollProgress` bar still spans the full viewport width at the very top (unaffected by the padding, since it's `fixed` and outside the padded div... note: verify this — `ScrollProgress` is rendered as a sibling BEFORE the padded div in the body, so it is NOT inside `lg:pl-[88px]` and should render full-width correctly).

- [ ] **Step 4: Verify mobile fallback**

Resize to <1024px.
Expected: no left padding, content flows normally below the mobile top bar.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: offset page content for fixed sidebar on desktop"
```

---

### Task 7: Re-tune GSAP pin offsets

**Files:**
- Modify: `components/sections/Skills.tsx:26`
- Modify: `components/sections/Experience.tsx:26`
- Modify: `components/sections/StrongProjects.tsx:30`

- [ ] **Step 1: Update the three `start` values**

The old sticky top `Nav` was ~70-80px tall, and each of these three `ScrollTrigger.create()` calls used `start: "top top+=80"` to keep the pinned element clear of the nav. The nav is gone on desktop (replaced by a left rail with no height), so this offset is no longer needed.

In `components/sections/Skills.tsx`, change:
```typescript
        start: "top top+=80",
```
to:
```typescript
        start: "top top+=16",
```

Apply the identical change (`"top top+=80"` → `"top top+=16"`) to `components/sections/Experience.tsx:26` and `components/sections/StrongProjects.tsx:30`. The small residual `+=16` offset is kept as breathing room (not zero) so pinned content doesn't sit flush against the very top edge of the viewport — this is a deliberate small gap, not a leftover nav-height compensation.

- [ ] **Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Manually verify in dev server**

Scroll through Skills, Experience, and StrongProjects sections at desktop width.
Expected: pin/stack/horizontal-scroll effects engage close to the top of the viewport (no large dead gap where the old nav used to be), no clipping under the (now nonexistent) top nav.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Skills.tsx components/sections/Experience.tsx components/sections/StrongProjects.tsx
git commit -m "fix: re-tune GSAP pin start offsets for removed top nav"
```

---

### Task 8: Full-site integration check

**Files:** none (verification only)

- [ ] **Step 1: Production build check**

Run: `npm run build`
Expected: clean build, no errors.

- [ ] **Step 2: Lint check**

Run: `npx next lint`
Expected: no warnings or errors.

- [ ] **Step 3: Full manual walkthrough at desktop width (≥1024px)**

Run `npm run dev`, open `http://localhost:3000`.

Checklist:
- Sidebar rail renders full-height on the left, logo at top, 9 links spaced down the middle, resume link at bottom.
- Scroll the homepage top to bottom: each link activates (scales to ~1.15x, opacity 100%, accent bar moves to that link's position) as its matching section crosses the viewport center band; no flicker/double-highlight between adjacent sections.
- Click each of the 9 links from a non-homepage page (e.g. visit `/skills` directly): confirm the correct link shows as active on load.
- Navigate to each of the 8 standalone routes directly via URL; confirm Sidebar renders identically on each and highlights the correct link.
- Confirm page content starts immediately right of the 88px rail with no gap/overlap, and `ScrollProgress` bar still renders full-width at the very top.
- Confirm Skills pin, Experience pin+stack, and StrongProjects horizontal-scroll all still engage and release correctly with the retuned offsets.

- [ ] **Step 4: Full manual walkthrough at mobile width (<1024px)**

Resize to e.g. 390px width.

Checklist:
- Sidebar rail is hidden; slim top bar (logo + Menu button) shows instead, `sticky top-0`.
- Tapping "Menu" opens a full-screen overlay listing all 9 links with icons; tapping a link navigates and closes the overlay.
- No layout jump when crossing the 1024px breakpoint while resizing.
- Content has no left padding/offset (flows full-width under the top bar).

- [ ] **Step 5: Spot-check wide-monitor line lengths**

Resize to ≥1920px width, check About and Experience sections' text blocks don't stretch to uncomfortably long line lengths (their `max-w-2xl` inner text constraints are untouched by this change, so this should already be fine — confirm, don't fix unless something's actually broken).

- [ ] **Step 6: Fix any issues found, then final commit if changes were made**

If Steps 3-5 surface issues, fix them in the relevant file(s), re-verify, and commit:

```bash
git add -A
git commit -m "fix: address sidebar nav integration issues"
```

If no issues found, no commit needed for this task.

---

## Self-Review Notes

- **Spec coverage:** icon set (Task 1), content width (Task 2), active-link detection (Task 3), sidebar component desktop+mobile (Task 4), site-wide swap into all 9 pages (Task 5), content offset (Task 6), GSAP pin re-tune (Task 7), full integration verification (Task 8) — all spec sections covered.
- **z-index consistency:** Sidebar's desktop rail and mobile bar both use `z-50` (matching the old `Nav`'s level), mobile overlay uses `z-[60]` (matching the old mobile dropdown's implicit stacking above the bar), skip-link uses `z-[70]` (bumped one level above the mobile overlay's `z-[60]`, since it must remain reachable via keyboard focus even when the overlay is open) — `ScrollProgress`'s existing `z-[60]` is unchanged and still renders above the sidebar.
- **Type consistency:** `NavLink` type (from `hooks/useActiveNavLink.ts`) is extended by `SidebarLink` in `Sidebar.tsx` with an `Icon` field — consistent naming (`href`, `label`, `sectionId`) used identically in both files.
- **No orphaned imports:** Task 5's Step 3 explicitly greps for leftover `Nav` references before considering the task done.
