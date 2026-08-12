# Scroll-Driven Interactive Effects

## Goal

Add GSAP ScrollTrigger-powered scroll effects to key sections of the single-page portfolio (`app/page.tsx`) for a more interactive, 3D-feeling scroll experience, without breaking the existing sticky `Nav`, `ScrollProgress` bar, or `Reveal`-based entrance animations already in place.

## Scope

Effects apply to these sections only:

| Section | File | Effect |
|---|---|---|
| Hero | `components/sections/Hero.tsx` | Parallax (enhance existing framer-motion parallax, or migrate to GSAP — see Architecture) |
| Skills | `components/sections/Skills.tsx` | Sticky/pin — heading pins while skill category cards scroll past |
| Experience | `components/sections/Experience.tsx` | Pin + sticky-stack — section pins in viewport while entry cards stack on top of each other |
| StrongProjects | `components/sections/StrongProjects.tsx` | Horizontal scroll — vertical scroll drives horizontal panel movement through project cards |
| FeaturedWork | `components/sections/FeaturedWork.tsx` | Zoom scale-in — each card scales ~0.85→1 and fades in as it enters viewport |
| About / section intros | via new `TextReveal` component | Progressive line-by-line text reveal, applied to `About.tsx` heading/paragraph and reused as needed |

All other sections (Stats, MoreProjects, Achievements, Certifications, EducationCommunity, Contact) are unchanged in this pass.

## Library

Add `gsap` and `@gsap/react` as dependencies. GSAP ScrollTrigger owns all new scroll-driven effects. Framer-motion (`motion`, `useScroll`, `useTransform`) remains for existing entrance animations (`Reveal.tsx`) and Hero's current parallax stays as-is unless testing shows GSAP integrates more cleanly — decided during implementation, not a design blocker.

## Architecture

- `lib/gsap.ts` — client-only module that imports `gsap` and `ScrollTrigger`, calls `gsap.registerPlugin(ScrollTrigger)` once. Guarded so it's a no-op during SSR (Next.js app router renders sections as Client Components already, per existing `"use client"` markers).
- `hooks/useScrollFx.ts` — thin wrapper around `@gsap/react`'s `useGSAP` hook, providing a consistent pattern for creating a `ScrollTrigger` scoped to a ref, with automatic cleanup (`ctx.revert()`) on unmount.
- `components/TextReveal.tsx` — new reusable component. Splits children text into lines (or accepts pre-split children), animates each line's opacity/translateY via ScrollTrigger as it enters the viewport. Mirrors the API shape of the existing `Reveal.tsx` (`children`, `delay`, `className`) for consistency.

### Guard conditions (apply to every new effect)

1. **`prefers-reduced-motion`**: checked via `window.matchMedia('(prefers-reduced-motion: reduce)')` (same pattern as framer-motion's `useReducedMotion`, but read directly since these are GSAP-driven). When true, no ScrollTrigger instances are created — elements render at their final visual state (opacity 1, no transform, no pin, no horizontal scroll).
2. **Mobile breakpoint (`<768px`)**: pinning, sticky-stacking, and horizontal-scroll ScrollTriggers are not created below this width — those sections render in normal static document flow (cards in a simple vertical/grid layout, no pin). Parallax and text-reveal (lighter-weight, non-layout-breaking effects) still run on mobile. Breakpoint checked via `window.matchMedia('(min-width: 768px)')`, matching Tailwind's `sm`/existing responsive usage in the codebase.
3. **Cleanup**: every `ScrollTrigger` created is tied to `useGSAP`'s automatic revert-on-unmount so no leaked instances accumulate across client-side navigation.

### Interaction with existing sticky Nav / ScrollProgress

The `Nav` header is `sticky top-0 z-50`. Pinned sections (Skills, Experience) must pin to a position that doesn't visually collide with or get obscured by the nav — pin start/end configured with an offset accounting for the nav's height, and `ScrollTrigger`'s pinned element gets `z-40` or lower so the nav stays on top. `ScrollProgress` (`z-[60]`, `fixed`) is unaffected since it reads global `scrollYProgress` independent of any pin/scrub happening in a section — verified manually during implementation by scrolling through pinned/horizontal sections and confirming the progress bar still advances smoothly and the nav stays clickable throughout.

## Effect details

**Hero — Parallax**: Background pattern layer (`topography.svg`, already `absolute inset-0`) moves slower than the foreground text/image on scroll, extending the existing `parallaxY` transform on the headshot image with a second, slower-moving transform on the background pattern layer.

**Skills — Sticky/Pin**: The section heading (`eyebrow` + `title`, currently rendered by the shared `Section` component) pins near the top of the viewport (below the nav) while the grid of skill-group cards scrolls past underneath. Pin releases once the last card clears the viewport.

**Experience — Pin + Stack**: The section container pins in the viewport. Each experience entry card animates from off-screen (or a small initial offset) into a stacked position, layering on top of the previous card as the user continues scrolling, using `scale`/`y` offsets per card keyed to scroll progress so earlier cards recede slightly behind later ones (subtle depth, not full overlap-hiding — org name/role of prior cards should stay legible enough to convey the stack, not disappear completely).

**StrongProjects — Horizontal Scroll**: Section pins vertically while the `strongProjects` grid (`ProjectCard compact` items) translates horizontally in response to vertical scroll delta, until all cards have passed, then unpins and normal vertical scroll resumes. Section total scroll height calculated from card count × card width so scroll distance feels proportional (not too fast/slow).

**FeaturedWork — Zoom scale-in**: Each `ProjectCard` in the grid scales from `0.85` to `1` and fades from `0` to `1` opacity as it crosses into the viewport (per-card trigger, not a single section-wide scrub) — replaces or layers on top of the existing `Reveal` wrapper currently used here (implementation decides whether `Reveal`'s fade-up is redundant with the new zoom and should be removed for this section specifically).

**Text Reveal**: New `TextReveal` component used on `About.tsx`'s heading and intro paragraph — text lines fade/slide up progressively as the block scrolls into view. Not applied site-wide; scope limited to About per the section list above.

## Testing

- Manual verification in-browser (dev server) scrolling through the full page top-to-bottom at desktop width, confirming: nav stays sticky and usable, progress bar advances correctly, no layout jump/flash on section entry/exit, pinned sections release cleanly, horizontal section returns to normal vertical scroll afterward.
- Resize to mobile width (`<768px`) and confirm pin/stack/horizontal sections fall back to static layout with no console errors from ScrollTrigger trying to pin non-existent trigger dimensions.
- Toggle OS/browser `prefers-reduced-motion` and confirm all new effects are inert (final visual state, no motion).
- `npm run build` to confirm no SSR errors from GSAP/ScrollTrigger being imported in a server context.

## Out of scope

- Video scrubbing (no video assets currently in the project).
- Effects on Stats, MoreProjects, Achievements, Certifications, EducationCommunity, Contact sections.
- Migrating existing `Reveal.tsx` (framer-motion) entrance animations to GSAP — they stay as-is except where explicitly noted (FeaturedWork).
