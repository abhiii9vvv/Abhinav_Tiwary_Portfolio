"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Dialog } from "./Dialog";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { CheckIcon, CloseIcon, CopyIcon, FileIcon, PinIcon } from "@/components/icons/ui";
import { OPEN_RECRUITER } from "@/lib/theme";

const coreStack = ["TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "LLM APIs"];

const proof = [
  { value: "2nd Runner-Up", label: "Smart India Hackathon 2025 (internal)" },
  { value: "First to finish", label: "AWS Agentic AI workshop, Community Day Delhi NCR" },
  { value: "1,000+", label: "GitHub contributions across 50+ repos" },
  { value: "25%", label: "API response time cut at Unessa Foundation" },
];

const topSlugs = ["campussetu", "mentionwave", "secure-exam-browser"];

export function RecruiterView() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_RECRUITER, onOpen);
    return () => window.removeEventListener(OPEN_RECRUITER, onOpen);
  }, []);

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const current = experience.filter((e) => e.current);
  const top = topSlugs
    .map((s) => featuredProjects.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      label="Recruiter view: 30-second summary"
      className="fixed inset-0 h-[100dvh] max-h-[100dvh] w-screen overflow-y-auto"
    >
      <div className="flex min-h-full items-start justify-center p-3 sm:items-center sm:p-6">
        <article className="relative w-full max-w-4xl animate-pop-in overflow-hidden rounded-3xl border border-line bg-surface shadow-lift">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-ink"
            aria-label="Close recruiter view"
          >
            <CloseIcon className="h-4 w-4" />
          </button>

          {/* Header */}
          <header className="relative flex flex-col gap-5 border-b border-line bg-dots px-6 pb-5 pt-6 sm:flex-row sm:items-end sm:px-8">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-accent ring-offset-2 ring-offset-surface">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs text-accent-ink">Recruiter view · 30-second read</p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight">{profile.name}</h2>
              <p className="mt-1 text-muted">
                {profile.role}. {profile.availability.graduating}.
              </p>
              <p className="mt-2 font-medium text-ok">{profile.availability.summary}.</p>
            </div>
          </header>

          <div className="grid gap-px bg-line sm:grid-cols-5">
            {/* Left column */}
            <div className="space-y-6 bg-surface p-6 sm:col-span-3 sm:px-8 sm:py-7">
              <section>
                <h3 className="text-sm font-medium text-muted">Right now</h3>
                <ul className="mt-3 space-y-2">
                  {current.map((e) => (
                    <li key={e.org} className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-medium">{e.role}</span>
                      <span className="text-muted">at {e.org}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-medium text-muted">Proof points</h3>
                <dl className="mt-3 grid grid-cols-2 gap-3">
                  {proof.map((p) => (
                    <div key={p.label} className="rounded-2xl bg-sunken/60 px-4 py-3">
                      <dt className="text-lg font-bold leading-tight tracking-tight text-accent-ink">{p.value}</dt>
                      <dd className="mt-1 text-sm leading-snug text-muted">{p.label}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <h3 className="text-sm font-medium text-muted">Best work to look at</h3>
                <ol className="mt-3 space-y-2.5">
                  {top.map((p, i) => (
                    <li key={p.slug} className="flex gap-3">
                      <span className="mt-0.5 font-mono text-sm text-accent-ink">{i + 1}.</span>
                      <div className="min-w-0">
                        <a
                          href={p.live ?? p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {p.name}
                        </a>
                        <p className="line-clamp-1 text-sm leading-snug text-muted">{p.tagline}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-6 bg-surface p-6 sm:col-span-2 sm:px-8 sm:py-7">
              <section>
                <h3 className="text-sm font-medium text-muted">Core stack</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {coreStack.map((t) => (
                    <li key={t} className="rounded-lg border border-line px-2.5 py-1 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-medium text-muted">Logistics</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    <span>
                      Based in {profile.location}. {profile.availability.preferredLocation}.
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-1.5 pl-6">
                    {profile.availability.workModes.map((m) => (
                      <span key={m} className="rounded-md bg-sunken px-2 py-0.5 text-xs">
                        {m}
                      </span>
                    ))}
                  </li>
                  <li className="pl-6 text-muted">{profile.phone}</li>
                </ul>
              </section>

              <section className="space-y-2">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-medium text-on-accent transition-transform hover:-translate-y-px"
                >
                  <FileIcon className="h-4 w-4" />
                  Download resume
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-line px-4 py-3 text-sm transition-colors hover:bg-ink/5"
                >
                  {copied ? <CheckIcon className="h-4 w-4 text-accent-ink" /> : <CopyIcon className="h-4 w-4" />}
                  {copied ? "Copied to clipboard" : profile.email}
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm transition-colors hover:bg-ink/5"
                  >
                    <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm transition-colors hover:bg-ink/5"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </Dialog>
  );
}
