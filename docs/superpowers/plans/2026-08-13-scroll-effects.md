# Scroll-Driven Interactive Effects Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add GSAP ScrollTrigger-powered scroll effects (parallax, pin, sticky-stack, horizontal scroll, zoom scale-in, text reveal) to six sections of the portfolio's single-page layout, gated behind mobile-breakpoint and `prefers-reduced-motion` checks, without breaking the existing sticky `Nav` or `ScrollProgress` bar.

**Architecture:** A shared `lib/gsap.ts` registers `ScrollTrigger` once. A `hooks/useScrollFx.ts` hook wraps `@gsap/react`'s `useGSAP` to provide consistent ref-scoped animation creation with automatic cleanup and the two guard conditions (reduced-motion, mobile breakpoint). Each of the six target section components gets its GSAP animation wired up directly inside the component (no shared "effect" abstraction beyond the hook and a new `TextReveal` component), following the existing pattern where each section file owns its own presentation.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, framer-motion (existing, untouched), gsap + @gsap/react (new).

This project is not being decomposed further — spec scope is a single implementation plan.

---

## File Structure

- **Create:** `lib/gsap.ts` — registers `ScrollTrigger` plugin once, client-only.
- **Create:** `hooks/useScrollFx.ts` — `useGSAP`-based hook exposing `{ enabled, isDesktop }` guard state and a scoped GSAP context.
- **Create:** `components/TextReveal.tsx` — line-by-line scroll-triggered text reveal, API-compatible with `Reveal.tsx` (`children`, `delay`, `className`).
- **Modify:** `components/sections/Hero.tsx` — add slower parallax on the background pattern layer.
- **Modify:** `components/sections/Skills.tsx` — pin heading while cards scroll past.
- **Modify:** `components/sections/Experience.tsx` — pin section, stack entry cards.
- **Modify:** `components/sections/StrongProjects.tsx` — convert to horizontal scroll.
- **Modify:** `components/sections/FeaturedWork.tsx` — zoom scale-in per card, remove redundant `Reveal` wrapper.
- **Modify:** `components/sections/About.tsx` — swap `Reveal` for new `TextReveal` on paragraphs.
- **Modify:** `package.json` — add `gsap`, `@gsap/react`.

---

### Task 1: Install dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install gsap and @gsap/react**

Run: `npm install gsap @gsap/react`

Expected: `package.json` "dependencies" gains `"gsap"` and `"@gsap/react"` entries; `package-lock.json` updates.

- [ ] **Step 2: Verify install**

Run: `npm ls gsap @gsap/react`
Expected: both listed with resolved versions, no `UNMET DEPENDENCY` errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add gsap and @gsap/react dependencies"
```

---

### Task 2: GSAP registration module and scroll-fx hook

**Files:**
- Create: `lib/gsap.ts`
- Create: `hooks/useScrollFx.ts`

- [ ] **Step 1: Create `lib/gsap.ts`**

```typescript
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsapRegistered() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
```

- [ ] **Step 2: Create `hooks/useScrollFx.ts`**

```typescript
"use client";

import { useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 768px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Guard state for GSAP ScrollTrigger effects: whether layout-affecting
 * effects (pin/stack/horizontal) should run (desktop + motion allowed),
 * and whether any GSAP animation should run at all (motion allowed).
 */
export function useScrollFx() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const desktopMq = window.matchMedia(DESKTOP_QUERY);
    const motionMq = window.matchMedia(REDUCED_MOTION_QUERY);

    setIsDesktop(desktopMq.matches);
    setReducedMotion(motionMq.matches);

    const onDesktopChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);

    desktopMq.addEventListener("change", onDesktopChange);
    motionMq.addEventListener("change", onMotionChange);

    return () => {
      desktopMq.removeEventListener("change", onDesktopChange);
      motionMq.removeEventListener("change", onMotionChange);
    };
  }, []);

  return {
    /** Motion is allowed at all (parallax, text reveal, zoom). */
    motionEnabled: !reducedMotion,
    /** Layout-affecting effects allowed (pin, stack, horizontal scroll). */
    layoutFxEnabled: !reducedMotion && isDesktop,
  };
}
```

- [ ] **Step 2b: No test suite exists in this project (no test runner configured) — verify via TypeScript compilation instead**

Run: `npx tsc --noEmit`
Expected: no errors referencing `lib/gsap.ts` or `hooks/useScrollFx.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/gsap.ts hooks/useScrollFx.ts
git commit -m "feat: add gsap registration module and scroll-fx guard hook"
```

---

### Task 3: `TextReveal` component

**Files:**
- Create: `components/TextReveal.tsx`

- [ ] **Step 1: Create the component**

```typescript
"use client";

import { useRef, Children, isValidElement, cloneElement } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function TextReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!motionEnabled || !containerRef.current) return;
      ensureGsapRegistered();

      const lines = containerRef.current.querySelectorAll("[data-reveal-line]");
      if (lines.length === 0) return;

      gsap.set(lines, { opacity: 0, y: 24 });
      gsap.to(lines, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef, dependencies: [motionEnabled, delay] }
  );

  const lineChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const existingClassName =
        typeof child.props === "object" && child.props && "className" in child.props
          ? (child.props.className as string | undefined)
          : undefined;
      return cloneElement(child as React.ReactElement<{ className?: string }>, {
        "data-reveal-line": "",
        className: [existingClassName, "will-change-transform"].filter(Boolean).join(" "),
      } as never);
    }
    return child;
  });

  return (
    <div ref={containerRef} className={className}>
      {lineChildren}
    </div>
  );
}
```

- [ ] **Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: no errors referencing `components/TextReveal.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/TextReveal.tsx
git commit -m "feat: add TextReveal scroll-triggered text component"
```

---

### Task 4: Hero parallax enhancement

**Files:**
- Modify: `components/sections/Hero.tsx:24-29` (background pattern layer)

- [ ] **Step 1: Add a second, slower parallax transform for the background pattern**

In `components/sections/Hero.tsx`, the background pattern `div` (lines 25-29) is currently static. Add a `bgY` transform derived from the same `scrollYProgress` already computed at line 17-20, moving at roughly half the speed of the existing `parallaxY` (which goes 0→40px), so the background appears to lag behind the foreground image for a depth effect.

Modify the transform declarations (after line 21):

```typescript
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 40]);
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90]);
```

Then wrap the background pattern div in a `motion.div` using `bgParallaxY` (replacing lines 25-29):

```tsx
      <motion.div
        aria-hidden="true"
        style={{ y: bgParallaxY }}
        className="pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,black,transparent)]"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/patterns/topography.svg')" }}
        />
      </motion.div>
```

This keeps the effect on framer-motion (already used in this file for `parallaxY`), consistent with the spec's note that Hero's parallax may stay on framer-motion rather than migrating to GSAP.

- [ ] **Step 2: Manually verify in dev server**

Run: `npm run dev`, open `http://localhost:3000`, scroll through the Hero section.
Expected: background topography pattern visibly lags behind the foreground headshot image while scrolling, no layout shift, pattern stays behind text (still `absolute inset-0`, no z-index change).

- [ ] **Step 3: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: add layered parallax to Hero background pattern"
```

---

### Task 5: Skills sticky/pin

**Files:**
- Modify: `components/sections/Skills.tsx`

Skills currently uses the shared `Section` component for its heading (`eyebrow`/`title`), which is not directly accessible for pinning independent of the cards. This task bypasses `Section` for this one component and reimplements the heading + wrapper inline so the heading can be pinned separately from the scrolling card grid.

- [ ] **Step 1: Rewrite `Skills.tsx` to separate a pinnable heading from the scrolling grid**

```typescript
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { skillGroups } from "@/content/skills";
import { techIconMap } from "@/components/icons/tech";
import { Reveal } from "@/components/Reveal";
import { ensureGsapRegistered, ScrollTrigger } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { layoutFxEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!layoutFxEnabled || !sectionRef.current || !headingRef.current || !gridRef.current) {
        return;
      }
      ensureGsapRegistered();

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80",
        end: () => `+=${gridRef.current!.offsetHeight - headingRef.current!.offsetHeight}`,
        pin: headingRef.current,
        pinSpacing: false,
      });

      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [layoutFxEnabled] }
  );

  return (
    <section id="skills" ref={sectionRef} className="relative scroll-mt-20">
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div ref={headingRef} className="relative z-30 mb-12 bg-bg pb-2">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">Skills</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Tools I reach for.
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
                <h3 className="mb-5 font-display text-xl text-ink">{group.label}</h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-6">
                  {group.items.map((item) => {
                    const Icon = techIconMap[item];
                    return (
                      <li key={item} className="group flex w-16 flex-col items-center gap-2">
                        <Icon className="h-12 w-12 shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-1" />
                        <span className="text-center text-xs leading-tight text-ink-muted">
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Note: `z-30` on the pinned heading keeps it below `Nav`'s `z-50` and `ScrollProgress`'s `z-[60]`. `start: "top top+=80"` offsets the pin start by roughly the nav's height (`py-4` + logo ~36px + border ≈ 64-72px; 80px gives clearance) so the heading doesn't pin underneath the nav.

- [ ] **Step 2: Manually verify in dev server**

Run: `npm run dev`, navigate to the Skills section at desktop width (≥768px).
Expected: heading pins below the nav while skill cards scroll past beneath it; pin releases once the last card row clears; nav remains visible and clickable throughout.

- [ ] **Step 3: Verify mobile fallback**

Resize browser to <768px width (or use dev tools device toolbar).
Expected: no pin occurs; heading and grid scroll normally together; no console errors.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Skills.tsx
git commit -m "feat: pin Skills heading while cards scroll past"
```

---

### Task 6: Experience pin + sticky-stack

**Files:**
- Modify: `components/sections/Experience.tsx`

- [ ] **Step 1: Rewrite `Experience.tsx` with pinned container and stacking cards**

```typescript
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { experience } from "@/content/experience";
import { Section } from "@/components/Section";
import { OrgMark } from "@/components/icons";
import { orgIconMap } from "@/components/icons/tech";
import { ensureGsapRegistered, gsap, ScrollTrigger } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function Experience() {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { layoutFxEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!layoutFxEnabled || !stackRef.current) return;
      const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
      if (cards.length < 2) return;
      ensureGsapRegistered();

      const trigger = ScrollTrigger.create({
        trigger: stackRef.current,
        start: "top top+=80",
        end: () => `+=${cards.length * 320}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress * cards.length;
          cards.forEach((card, i) => {
            const cardProgress = gsap.utils.clamp(0, 1, progress - i);
            gsap.set(card, {
              y: (1 - cardProgress) * 60 + i * 14,
              scale: 1 - (cards.length - 1 - i) * 0.03 * cardProgress,
              opacity: i === 0 ? 1 : gsap.utils.mapRange(0, 1, 0.4, 1, cardProgress),
              zIndex: i,
            });
          });
        },
      });

      return () => trigger.kill();
    },
    { scope: stackRef, dependencies: [layoutFxEnabled] }
  );

  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div ref={stackRef} className="relative flex flex-col gap-5">
        {experience.map((entry, i) => {
          const OrgLogo = orgIconMap[entry.org];
          return (
            <div
              key={entry.org}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="rounded-2xl border border-line bg-bg-raised p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {OrgLogo ? (
                    <OrgLogo className="mt-1 h-9 w-9 shrink-0" />
                  ) : (
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-ink-muted">
                      <OrgMark className="h-5 w-5" />
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-2xl text-ink">{entry.org}</h3>
                    <p className="mt-1 text-ink">{entry.role}</p>
                  </div>
                </div>
                <p
                  className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                    entry.current
                      ? "border-accent/30 bg-accent/10 text-accent"
                      : "border-line text-ink-muted"
                  }`}
                >
                  {entry.period}
                </p>
              </div>
              <p className="mt-4 max-w-2xl text-ink-muted">{entry.description}</p>
              {entry.highlight && (
                <p className="mt-4 text-sm font-medium text-accent">{entry.highlight}</p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
```

Note: `end: () => `+=${cards.length * 320}`` gives ~320px of scroll distance per card for the stack transition — tunable but a reasonable starting point for cards of this height. `gsap.utils.mapRange` and `gsap.utils.clamp` are built-in GSAP utility functions, no extra import needed beyond `gsap` itself.

- [ ] **Step 2: Manually verify in dev server**

Run: `npm run dev`, scroll to Experience section at desktop width.
Expected: section pins in viewport; cards stack progressively (each new card slides up and settles on top, prior cards visible but slightly receded/scaled down); after the last card settles, continued scrolling unpins the section and moves to the next section (FeaturedWork).

- [ ] **Step 3: Verify mobile fallback**

Resize to <768px.
Expected: no pin; cards render as a normal static vertical list at full opacity/scale (since `gsap.set` in `onUpdate` never runs when `layoutFxEnabled` is false — inline styles are never touched, so Tailwind defaults apply).

- [ ] **Step 4: Commit**

```bash
git add components/sections/Experience.tsx
git commit -m "feat: pin Experience section with sticky-stacking cards"
```

---

### Task 7: StrongProjects horizontal scroll

**Files:**
- Modify: `components/sections/StrongProjects.tsx`

- [ ] **Step 1: Rewrite `StrongProjects.tsx` with horizontal-scroll track**

```typescript
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { strongProjects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ensureGsapRegistered, gsap, ScrollTrigger } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function StrongProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { layoutFxEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!layoutFxEnabled || !sectionRef.current || !trackRef.current) return;
      ensureGsapRegistered();

      const track = trackRef.current;
      const scrollDistance = track.scrollWidth - track.clientWidth;
      if (scrollDistance <= 0) return;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(track, { x: -scrollDistance * self.progress });
        },
      });

      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [layoutFxEnabled] }
  );

  return (
    <section id="strong-projects" ref={sectionRef} className="relative scroll-mt-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">More Work</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Other things I&apos;ve built.
          </h2>
        </div>
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 sm:w-max sm:flex-nowrap"
          >
            {strongProjects.map((project) => (
              <div key={project.slug} className="w-[280px] shrink-0 sm:w-[320px]">
                <ProjectCard project={project} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

Note: on mobile (`layoutFxEnabled` false), the track keeps its default flex-wrap behavior absent — but since cards are `shrink-0` with fixed width, mobile would horizontally overflow with native touch scroll rather than the grid layout it had before. To preserve the original mobile grid behavior, add a mobile-specific class switch:

Replace the track className with a conditional based on `layoutFxEnabled`:

```typescript
          <div
            ref={trackRef}
            className={
              layoutFxEnabled
                ? "flex w-max gap-6"
                : "grid grid-cols-1 gap-6 sm:grid-cols-2"
            }
          >
            {strongProjects.map((project) => (
              <div
                key={project.slug}
                className={layoutFxEnabled ? "w-[280px] shrink-0 sm:w-[320px]" : ""}
              >
                <ProjectCard project={project} compact />
              </div>
            ))}
          </div>
```

- [ ] **Step 2: Manually verify in dev server**

Run: `npm run dev`, scroll to StrongProjects section at desktop width (≥1024px, matching original `lg:grid-cols-4`).
Expected: section pins; vertical scroll drives the card track moving horizontally until all cards have passed; then unpins and normal vertical scroll resumes to the next section.

- [ ] **Step 3: Verify mobile fallback**

Resize to <768px.
Expected: cards render in the original single/2-column grid, no horizontal scroll, no pin.

- [ ] **Step 4: Commit**

```bash
git add components/sections/StrongProjects.tsx
git commit -m "feat: convert StrongProjects to horizontal scroll on desktop"
```

---

### Task 8: FeaturedWork zoom scale-in

**Files:**
- Modify: `components/sections/FeaturedWork.tsx`

- [ ] **Step 1: Replace `Reveal` wrapper with GSAP per-card zoom scale-in**

```typescript
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { featuredProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ensureGsapRegistered, gsap, ScrollTrigger } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function FeaturedWork() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!motionEnabled || !gridRef.current) return;
      ensureGsapRegistered();

      const cards = gridRef.current.querySelectorAll("[data-zoom-card]");
      if (cards.length === 0) return;

      gsap.set(cards, { opacity: 0, scale: 0.85 });
      cards.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });
    },
    { scope: gridRef, dependencies: [motionEnabled] }
  );

  return (
    <Section id="work" eyebrow="Featured Work" title="Products I've shipped.">
      <div ref={gridRef} className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <div key={project.slug} data-zoom-card className="h-full">
            <ProjectCard
              project={project}
              large={i === 0 || project.slug === "campussetu" || i === featuredProjects.length - 1}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
```

This drops the `Reveal` import/usage entirely for this section since the zoom scale-in replaces it (per the spec's note that `Reveal`'s fade-up would be redundant here).

- [ ] **Step 2: Manually verify in dev server**

Run: `npm run dev`, scroll to FeaturedWork section.
Expected: each project card scales up from ~85% and fades in individually as it enters the viewport (not all at once); works identically on mobile and desktop (this effect is not gated by `layoutFxEnabled`, only `motionEnabled`).

- [ ] **Step 3: Verify reduced-motion fallback**

Enable `prefers-reduced-motion: reduce` in browser dev tools.
Expected: cards render immediately at full opacity/scale (no `gsap.set` ever runs since the effect bails out when `motionEnabled` is false).

- [ ] **Step 4: Commit**

```bash
git add components/sections/FeaturedWork.tsx
git commit -m "feat: replace FeaturedWork card reveal with GSAP zoom scale-in"
```

---

### Task 9: About text reveal

**Files:**
- Modify: `components/sections/About.tsx`

- [ ] **Step 1: Swap `Reveal` for `TextReveal`, splitting paragraphs into individual reveal lines**

```typescript
import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { TextReveal } from "@/components/TextReveal";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="What I do">
      <TextReveal className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-muted">
        {profile.aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TextReveal>
    </Section>
  );
}
```

`TextReveal` (Task 3) applies `data-reveal-line` to each direct child via `Children.map`/`cloneElement`, so each `<p>` becomes its own staggered reveal line — matching the container/className API `Reveal` had, so no other part of `About.tsx` changes.

- [ ] **Step 2: Manually verify in dev server**

Run: `npm run dev`, scroll to About section.
Expected: each paragraph fades/slides up in sequence (staggered ~80ms apart) as the section enters the viewport, once only (doesn't replay on scroll back up).

- [ ] **Step 3: Verify reduced-motion fallback**

Enable `prefers-reduced-motion: reduce`.
Expected: paragraphs render at full opacity immediately, no animation.

- [ ] **Step 4: Commit**

```bash
git add components/sections/About.tsx
git commit -m "feat: use TextReveal for About section paragraphs"
```

---

### Task 10: Full-page integration check

**Files:** none (verification only)

- [ ] **Step 1: Production build check**

Run: `npm run build`
Expected: build completes with no errors. This confirms GSAP/ScrollTrigger imports (all guarded by `"use client"` and browser-only hooks) don't break server-side rendering.

- [ ] **Step 2: Full manual scroll-through at desktop width**

Run: `npm run dev`, open `http://localhost:3000` at ≥1024px width, scroll from top to bottom of the page.

Checklist while scrolling:
- Nav stays visible/sticky and all nav links remain clickable at every scroll position, including while a section is pinned.
- `ScrollProgress` bar at the very top advances smoothly and continuously, including through pinned/horizontal sections (no stall, no jump).
- Hero background pattern lags visibly behind the foreground image.
- Skills heading pins below the nav, cards scroll underneath, pin releases cleanly into Experience.
- Experience section pins, cards stack visibly, releases cleanly into FeaturedWork.
- FeaturedWork cards zoom/fade in individually as each scrolls into view.
- StrongProjects pins and scrolls horizontally through all cards, then releases into MoreProjects.
- About paragraphs stagger-reveal on first entry into view.
- No section overlaps another, no unexpected blank/dead scroll space, no horizontal page scrollbar introduced site-wide (only within the StrongProjects track).

- [ ] **Step 3: Mobile-width check**

Resize to <768px (or use device toolbar at e.g. 390px width).
Expected: Skills/Experience/StrongProjects show no pinning or horizontal scroll — static stacked/grid layouts as before this change. Hero parallax and About text reveal and FeaturedWork zoom still play (lighter-weight, non-layout effects).

- [ ] **Step 4: Reduced-motion check**

Enable OS or browser `prefers-reduced-motion: reduce`, reload at desktop width.
Expected: no GSAP animation runs anywhere on the page — all sections render at final static state immediately. (Existing framer-motion `Reveal` usages elsewhere already independently respect reduced-motion via `useReducedMotion`, unaffected by this change.)

- [ ] **Step 5: Fix any issues found, then final commit if changes were made**

If Steps 2-4 surface issues (z-index collision, incorrect pin offset, wrong scroll distance, etc.), fix them in the relevant section file from Tasks 4-9, re-verify, and commit:

```bash
git add -A
git commit -m "fix: address scroll-effects integration issues"
```

If no issues found, no commit needed for this task.

---

## Self-Review Notes

- **Spec coverage:** Hero parallax (Task 4), Skills pin (Task 5), Experience pin+stack (Task 6), StrongProjects horizontal (Task 7), FeaturedWork zoom (Task 8), About text reveal (Task 9), shared guard/cleanup infra (Task 2), library install (Task 1), full integration/Nav/ScrollProgress verification (Task 10) — all spec sections covered.
- **Guard conditions:** every layout-affecting task (5, 6, 7) gates on `layoutFxEnabled` (desktop + motion allowed); every visual-only task (4, 8, 9) gates on `motionEnabled` alone, per spec's distinction that parallax/text-reveal can run on mobile.
- **Cleanup:** all `ScrollTrigger.create()` calls return their `trigger` for `.kill()` in the `useGSAP` cleanup path (via the returned function, which `useGSAP`/`gsap.context` invokes on unmount or dependency change).
- **Type consistency:** `useScrollFx()` returns `{ motionEnabled, layoutFxEnabled }` consistently across Tasks 3, 5, 6, 7, 8, 9 — no naming drift.
