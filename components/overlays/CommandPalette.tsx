"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Dialog } from "./Dialog";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CopyIcon,
  FileIcon,
  HashIcon,
  MoonIcon,
  SearchIcon,
} from "@/components/icons/ui";
import { OPEN_PALETTE, openRecruiter, toggleTheme } from "@/lib/theme";

type Command = {
  id: string;
  group: "Go to" | "Projects" | "Actions" | "Elsewhere";
  label: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "/" && !open) {
        const t = e.target as HTMLElement;
        if (t.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(t.tagName)) return;
        e.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE, onOpen);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  const commands = useMemo<Command[]>(() => {
    const go = (href: string) => () => router.push(href);
    const external = (href: string) => () => window.open(href, "_blank", "noopener,noreferrer");
    return [
      { id: "home", group: "Go to", label: "Home", icon: HashIcon, run: go("/") },
      { id: "work", group: "Go to", label: "Selected work", icon: HashIcon, run: go("/work") },
      { id: "experience", group: "Go to", label: "Experience", icon: HashIcon, run: go("/experience") },
      { id: "stack", group: "Go to", label: "Tech stack", icon: HashIcon, run: go("/skills") },
      { id: "recognition", group: "Go to", label: "Recognition and certifications", icon: HashIcon, run: go("/achievements") },
      { id: "about", group: "Go to", label: "About and education", icon: HashIcon, run: go("/about") },
      { id: "contact", group: "Go to", label: "Contact", icon: HashIcon, run: go("/contact") },
      ...featuredProjects.map<Command>((p) => ({
        id: `p-${p.slug}`,
        group: "Projects",
        label: p.name,
        hint: p.live ? "Open live site" : "Open repository",
        icon: ArrowRightIcon,
        run: external(p.live ?? p.github ?? profile.github),
      })),
      {
        id: "recruiter",
        group: "Actions",
        label: "Open recruiter view",
        hint: "30-second summary",
        icon: BriefcaseIcon,
        run: () => openRecruiter(),
      },
      {
        id: "copy",
        group: "Actions",
        label: "Copy email address",
        hint: profile.email,
        icon: CopyIcon,
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(
            () => setToast("Email copied"),
            () => setToast(profile.email),
          );
        },
      },
      { id: "resume", group: "Actions", label: "Open resume (PDF)", icon: FileIcon, run: external(profile.resume) },
      { id: "theme", group: "Actions", label: "Toggle light / dark theme", icon: MoonIcon, run: () => toggleTheme() },
      { id: "github", group: "Elsewhere", label: "GitHub", hint: "@abhiii9vvv", icon: GithubIcon, run: external(profile.github) },
      { id: "linkedin", group: "Elsewhere", label: "LinkedIn", hint: "in/abhinavtiwary", icon: LinkedinIcon, run: external(profile.linkedin) },
    ];
  }, [router]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.hint ?? ""} ${c.group}`.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const run = (c: Command | undefined) => {
    if (!c) return;
    setOpen(false);
    // Let the dialog close before navigating so scroll restoration works.
    requestAnimationFrame(() => c.run());
  };

  let lastGroup = "";

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        label="Command menu"
        className="fixed inset-x-0 top-[12vh] mx-auto w-[min(640px,calc(100vw-2rem))]"
      >
        <div className="animate-pop-in overflow-hidden rounded-2xl border border-line bg-surface shadow-lift">
          <div className="flex items-center gap-3 border-b border-line px-4">
            <SearchIcon className="h-5 w-5 shrink-0 text-muted" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((i) => Math.min(i + 1, results.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActive((i) => Math.max(i - 1, 0));
                } else if (e.key === "Enter") {
                  e.preventDefault();
                  run(results[active]);
                }
              }}
              placeholder="Search sections, projects, actions…"
              aria-label="Search commands"
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-list"
              aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
              className="h-14 w-full bg-transparent text-base text-ink outline-none placeholder:text-muted focus-visible:outline-none"
            />
            <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-xs text-muted">esc</kbd>
          </div>

          <ul ref={listRef} id="palette-list" role="listbox" className="max-h-[min(420px,60vh)] overflow-y-auto p-2">
            {results.length === 0 && (
              <li className="px-3 py-10 text-center text-sm text-muted">
                Nothing matches &ldquo;{query}&rdquo;. Try &ldquo;resume&rdquo; or &ldquo;CampusSetu&rdquo;.
              </li>
            )}
            {results.map((c, i) => {
              const header = c.group !== lastGroup ? c.group : null;
              lastGroup = c.group;
              const Icon = c.icon;
              return (
                <li key={c.id} role="presentation">
                  {header && <p className="px-3 pb-1 pt-3 font-mono text-xs text-muted">{header}</p>}
                  <button
                    type="button"
                    id={`cmd-${c.id}`}
                    role="option"
                    aria-selected={i === active}
                    data-index={i}
                    onMouseMove={() => setActive(i)}
                    onClick={() => run(c)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      i === active ? "bg-accent/10 text-ink" : "text-ink/85"
                    }`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${i === active ? "text-accent-ink" : "text-muted"}`} />
                    <span className="flex-1 truncate">{c.label}</span>
                    {c.hint && <span className="hidden truncate text-xs text-muted sm:block">{c.hint}</span>}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-xs text-muted">
            <span>
              <kbd>↑↓</kbd> move
            </span>
            <span>
              <kbd>↵</kbd> open
            </span>
            <span className="ml-auto">
              <kbd>/</kbd> opens this anywhere
            </span>
          </div>
        </div>
      </Dialog>

      <div
        role="status"
        aria-live="polite"
        className={`no-print fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm text-bg shadow-lift transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {toast}
      </div>
    </>
  );
}
