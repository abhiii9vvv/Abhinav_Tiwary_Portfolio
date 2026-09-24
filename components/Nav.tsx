"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MoonIcon, SearchIcon, SunIcon } from "@/components/icons/ui";
import { navLinks } from "@/lib/nav";
import { LogoMark } from "@/components/Logo";
import { currentTheme, openPalette, openRecruiter, toggleTheme, type Theme } from "@/lib/theme";

export function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme | null>(null);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onChange = (e: Event) => setTheme((e as CustomEvent<Theme>).detail);
    window.addEventListener("themechange", onChange);
    return () => window.removeEventListener("themechange", onChange);
  }, []);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/65">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-page items-center gap-4 px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Abhinav Tiwary, home">
          <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-6" />
          <span className="hidden font-medium tracking-tight sm:block">Abhinav Tiwary</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-ink/5 hover:text-ink ${
                  pathname === l.href ? "bg-ink/5 font-medium text-ink" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <button
            type="button"
            onClick={openPalette}
            className="flex h-9 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 text-sm text-muted transition-colors hover:text-ink"
            aria-label="Open command menu"
          >
            <SearchIcon className="h-4 w-4" />
            <kbd className="hidden font-mono text-xs lg:inline">{isMac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
          <button
            type="button"
            onClick={() => setTheme(toggleTheme())}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-ink"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={openRecruiter}
            className="flex h-9 items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-3.5 text-sm font-medium text-on-accent transition-transform hover:-translate-y-px active:translate-y-0"
          >
            <span className="hidden sm:inline">Recruiter view</span>
            <span className="sm:hidden">Hiring?</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
