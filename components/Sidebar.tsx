"use client";

import { useEffect, useRef, useState } from "react";
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
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [barPosition, setBarPosition] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const activeEl = linkRefs.current[activeIndex];
    if (!activeEl) {
      setBarPosition(null);
      return;
    }
    // Defer DOM measurement to avoid forced synchronous layout reflow
    const raf = requestAnimationFrame(() => {
      setBarPosition({ top: activeEl.offsetTop, height: activeEl.offsetHeight });
    });
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[70] focus-visible:rounded-md focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Skip to content
      </a>

      {/* Desktop rail */}
      <header className="fixed inset-y-0 left-0 z-50 hidden w-[120px] flex-col items-center border-r border-line bg-bg py-6 lg:flex">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <Image
            src="/images/logo-mark.png"
            alt="Abhinav Tiwary"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="relative mt-10 flex flex-1 flex-col justify-center gap-6">
          {barPosition && (
            <span
              aria-hidden="true"
              className="absolute -left-6 w-[3px] rounded-r-full bg-ink transition-[top,height] duration-300 ease-out"
              style={{ top: `${barPosition.top}px`, height: `${barPosition.height}px` }}
            />
          )}
          {links.map((link, i) => {
            const isActive = link.href === activeHref;
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                aria-current={isActive ? "location" : undefined}
                className={`flex flex-col items-center gap-1.5 rounded-sm px-2 py-1 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95 ${
                  isActive ? "scale-[1.15] text-ink opacity-100" : "text-ink-muted opacity-50 hover:scale-105 hover:opacity-80"
                }`}
              >
                <link.Icon className="h-5 w-5 shrink-0" />
                <span className="text-center text-[10px] uppercase tracking-[0.12em]">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-bg px-6 lg:hidden">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <Image src="/images/logo-mark.png" alt="Abhinav Tiwary" width={36} height={36} className="h-9 w-9 rounded-full" priority />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-overlay"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-[background-color,transform] duration-150 hover:bg-bg-raised active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[55] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel */}
      <div
        id="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={`fixed inset-y-0 right-0 z-[60] flex w-[78%] max-w-sm flex-col gap-1 bg-bg px-6 py-8 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image src="/images/logo-mark.png" alt="Abhinav Tiwary" width={36} height={36} className="h-9 w-9 rounded-full" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-[background-color,scale] duration-150 hover:bg-bg-raised active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {links.map((link) => {
          const isActive = link.href === activeHref;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              aria-current={isActive ? "location" : undefined}
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
    </>
  );
}
