# Left Sidebar Navigation

## Goal

Replace the sticky top horizontal `Nav` with a fixed left-side vertical sidebar, site-wide (all 9 routes), with icon+label links that scale up and highlight when their section/page is active. Content expands to fill the width freed up by removing the horizontal nav bar.

## Scope

- Replace `components/Nav.tsx` with a new `components/Sidebar.tsx`, mounted in `app/layout.tsx` in place of the old `Nav`.
- Applies everywhere: `/`, `/about`, `/skills`, `/experience`, `/work`, `/achievements`, `/certifications`, `/education`, `/contact`.
- On the homepage (`/`), the sidebar tracks which in-page section (`#top`, `#about`, `#skills`, `#experience`, `#work`/`#strong-projects`, `#achievements`, `#certifications`, `#education-community`, `#contact`) is currently in view and highlights the matching link.
- On the 8 standalone pages, the sidebar highlights the link matching the current route (same logic as today's `usePathname()` check).
- Widens the site's content max-width to use the space freed by the horizontal nav's removal.
- Does **not** change the GSAP scroll-effects (pin/stack/horizontal-scroll) behavior itself, only the scroll-trigger start offsets that were tuned around the old sticky nav's height (Skills, Experience, StrongProjects — see below).

## Visual Design

**Desktop (≥1024px, Tailwind `lg:`):**
- Fixed, full-height left rail, `88px` wide, `bg-bg`, `border-r border-line`, `z-50` (matching the nav's current stacking level).
- Top of rail: site mark/logo (small, e.g. initials mark or existing logo cropped to a square/compact form — reuse `/images/logo.png` at reduced size, or a simpler wordmark-free mark if the full logo doesn't read well at 88px; implementation decides based on how the existing asset looks cropped).
- Below the logo, the 9 nav links stacked vertically, evenly spaced down the rail (`flex flex-col items-center justify-center gap-8` inside a full-height flex container, or similar — implementation tunes spacing to fit all 9 without the rail requiring its own scroll on common laptop screen heights, e.g. 800px+).
- Each link: icon (20×20px) above a short label (label may be an abbreviated form if 9 full words don't fit legibly at 88px width — e.g. "Certs" for Certifications — implementation's call, optimize for legibility over completeness).
- **Inactive state:** icon+label at `opacity-50`, normal scale, `text-ink-muted`.
- **Active state:** icon+label scale to `~1.15`, `opacity-100`, `text-ink`, plus a `3px`-wide accent bar on the rail's left edge aligned to that link's vertical position (`absolute left-0 w-[3px] bg-ink rounded-r-full`, height matching the active link's box, animated position via a `layoutId`-style transition or a simple `top`/`transform` transition keyed to the active index).
- Transition: `transition-all duration-300 ease-out` on the scale/opacity; the accent bar's position transitions the same duration so it "slides" between links as active section changes, reinforcing the sense of a single moving indicator (not just each link independently toggling).
- Resume link and any secondary CTA (currently in `Nav.tsx`'s desktop-only slot) moves to the bottom of the rail, icon-only or small icon+label consistent with the rest.

**Mobile (<1024px):**
- Sidebar collapses entirely; replaced by a slim `sticky top-0 z-50 h-14` bar: logo (small) on the left, hamburger button on the right — visually similar to today's mobile nav bar, just without the desktop link row (which never showed below `xl:` anyway in the old nav).
- Hamburger opens a full-screen overlay (`fixed inset-0 z-[60] bg-bg`) listing all 9 links as a simple vertical list, closing on link click — same interaction pattern as today's mobile dropdown, just full-screen instead of a dropdown panel, since the sidebar's rail concept doesn't translate to a narrow screen.
- No IntersectionObserver-driven active-scaling on mobile (not worth the complexity for a menu that's closed most of the time) — active state on mobile is a simple checkmark/bold treatment on the current link, matching today's mobile nav behavior.

## Active-Section Detection

New hook: `hooks/useActiveNavLink.ts`.

- Accepts the same `links` array structure as today (`{ href, label }[]`, extended with an `id` field for in-page sections and an `Icon` component reference).
- On non-homepage routes: returns the link whose `href` matches `usePathname()` (unchanged logic from today's `Nav.tsx`).
- On the homepage route (`pathname === "/"`): uses an `IntersectionObserver` (one observer, watching all section elements by `id`, threshold tuned so a section is considered "active" once it occupies a meaningful portion of the viewport — implementation tunes `rootMargin`/`threshold`, a common starting point is `rootMargin: "-40% 0px -40% 0px"` so the "active" section is whichever crosses the vertical center band of the viewport) and returns whichever observed section is currently intersecting, defaulting to the first link (`Home`/`#top`) when none are intersecting (e.g. at the very top before any section threshold is crossed).
- Cleans up the observer on unmount.

## Layout Width

- Add a shared width constant (e.g. exported from `components/Section.tsx` or a small `lib/layout.ts`) replacing the current `max-w-7xl` (1280px) with a new wider value — `max-w-[1600px]` — used in:
  - `components/Section.tsx`
  - `components/sections/Hero.tsx`
  - `components/sections/Skills.tsx`
  - `components/sections/Stats.tsx`
  - `components/sections/StrongProjects.tsx`
  - `components/Footer.tsx`
- `app/layout.tsx`'s `<body>` (or a new wrapper `<div>` around `{children}`) gets `lg:pl-[88px]` to offset content past the fixed sidebar on desktop; no left padding below `lg:` since the sidebar collapses to a normal top bar there (document flow handles it, no fixed-position offset needed).
- `ScrollProgress` (fixed, full-width top bar) stays as-is — it's a thin 3px bar at `top-0`; on desktop it will now visually run behind/under the sidebar's left 88px since the sidebar has a higher effective stacking concern only if z-index conflicts — implementation confirms `ScrollProgress`'s `z-[60]` still renders above the sidebar's `z-50` correctly (already true today, no change needed) and that the progress bar's `left-0 w-full` doesn't need adjustment (it's fine for it to run the full viewport width including under the sidebar, consistent with how it worked with the old top nav — the old nav was `z-50` and the progress bar already rendered above it).

## GSAP Pin Offset Adjustment

Three existing ScrollTrigger `start` values were tuned around the old sticky top nav's ~70-80px height, which no longer exists on desktop (the sidebar has no height — it's a left rail, not a top bar):

- `components/sections/Skills.tsx:26` — `start: "top top+=80"` → `start: "top top"` (or a small residual offset like `top+=16` for breathing room, implementation's call — the `+=80` was specifically compensating for nav height that's now gone).
- `components/sections/Experience.tsx:26` — same change.
- `components/sections/StrongProjects.tsx:30` — same change.

These three files' pin/stack/horizontal-scroll *mechanics* are unchanged — only the numeric offset constant.

## Icons

Nine new small line-icon components in `components/icons/nav/`, following the existing stroke-icon pattern (`viewBox="0 0 24 24"`, `stroke="currentColor"`, `strokeWidth="1.5"`, `strokeLinecap="round"`, `strokeLinejoin="round"`, no fill) established in `components/icons/GithubMark.tsx` and siblings:

- `HomeIcon`, `AboutIcon`, `SkillsIcon`, `ExperienceIcon`, `WorkIcon`, `AchievementsIcon`, `CertificationsIcon`, `EducationIcon`, `ContactIcon`.

Each is a simple, recognizable pictogram (house, person/profile, wrench/tool, briefcase, folder/grid, trophy, badge/ribbon, graduation cap, mail/message) — implementation picks reasonable standard iconography for each, consistent stroke weight across all nine so the rail reads as one cohesive set.

## Testing

- Manual verification in dev server: scroll the homepage top to bottom, confirm each sidebar link activates (scales, accent bar moves) at the right scroll position, confirm no double-highlight or flicker between adjacent sections.
- Click through all 9 standalone routes, confirm the correct link is active/highlighted on load for each.
- Resize across the `lg:` breakpoint, confirm sidebar collapses to mobile top bar cleanly with no layout jump, hamburger overlay opens/closes correctly.
- Confirm the three adjusted GSAP pin sections (Skills, Experience, StrongProjects) still pin/stack/scroll correctly with the new offset, no clipping under content, no gap before pin engages.
- `npm run build` and `npx next lint` clean.
- Confirm `Section.tsx`'s wider max-width doesn't cause excessively long line-lengths in text-heavy sections (About, Experience descriptions) on very large monitors — spot-check at 1920px+ width.

## Out of Scope

- No changes to the GSAP scroll effects' animation logic itself (parallax, stack math, horizontal-scroll drag) — only the three `start` offset constants noted above.
- No new dependency — icons are hand-authored inline SVG, active-section detection uses the native `IntersectionObserver` API (no new library).
- Mobile sidebar/rail concept is explicitly not attempted — mobile gets the simpler top-bar-plus-overlay pattern described above, not a scaled-down version of the desktop rail.
