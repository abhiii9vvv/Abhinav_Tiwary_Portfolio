"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certifications", label: "Certifications" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:rounded-md focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10"
        >
          <Link
            href="/"
            className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Image
              src="/images/logo.png"
              alt="Abhinav Tiwary"
              width={555}
              height={88}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>
          <ul className="hidden gap-5 text-sm text-ink-muted xl:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-sm pb-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      isActive ? "text-ink" : "hover:text-ink"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-ink" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="hidden shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 xl:inline-flex"
          >
            Let&apos;s Connect
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="shrink-0 rounded-sm text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
        {open && (
          <ul
            id="mobile-nav"
            className="flex flex-col gap-1 border-t border-line px-6 py-4 xl:hidden"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-sm py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      isActive ? "font-medium text-ink" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </header>
    </>
  );
}
