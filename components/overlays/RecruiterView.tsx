"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Dialog } from "./Dialog";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { ArrowRightIcon, CheckIcon, CloseIcon, CopyIcon, FileIcon, PinIcon } from "@/components/icons/ui";
import { OrgLogo } from "@/components/OrgLogo";
import { OPEN_RECRUITER } from "@/lib/theme";

const coreStack = ["Linux", "Bash", "AWS", "Google Cloud", "Docker", "Kubernetes", "Git", "Networking", "Node.js", "React", "PostgreSQL", "Redis"];

const proof = [
  { value: "2nd Runner-Up", label: "Smart India Hackathon 2025 (internal)" },
  { value: "First to finish", label: "AWS Agentic AI workshop, Community Day Delhi NCR" },
  { value: "1,000+", label: "GitHub contributions across 50+ repos" },
  { value: "25%", label: "API response time cut at Unessa Foundation" },
];

const topSlugs = ["lifeherba", "skycodehub", "campussetu"];

const MONTHS = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g;

/** "20 August – 30 September 2026" -> "Aug – Sep 2026"; "May 2026 – Present" -> "May 2026 – now". */
function shortPeriod(period: string) {
  return period
    .replace(/\b\d{1,2}\s+(?=[A-Z])/g, "")
    .replace(MONTHS, (m) => m.slice(0, 3))
    .replace("Present", "now");
}

type Step = { org: string; role: string; when: string; current?: boolean };

/** Oldest first: where it started, then every role up to the current one. */
const journey: Step[] = [
  { org: "Sharda University", role: "B.Tech CSE begins", when: "Aug 2023" },
  ...[...experience].reverse().map((e) => ({ org: e.org, role: e.role, when: shortPeriod(e.period), current: e.current })),
];

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
          <header className="relative border-b border-line bg-dots px-6 pb-6 pt-6 sm:px-8">
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-accent ring-2 ring-accent ring-offset-2 ring-offset-surface">
                <Image src={profile.photo} alt={profile.name} fill sizes="96px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1 pr-10">
                <p className="text-xs text-accent-ink">Recruiter view · 30-second read</p>
                <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h2>
                <p className="mt-1 text-muted">
                  {profile.role}. {profile.availability.graduating}.
                </p>
                <p className="mt-2 font-medium text-ok">{profile.availability.summary}.</p>
              </div>
            </div>
          </header>

          {/* Journey */}
          <section className="border-b border-line px-6 py-6 sm:px-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-sm font-medium text-muted">Journey</h3>
              <p className="text-xs text-muted">2023 → now</p>
            </div>
            <ol className="relative mt-5 grid gap-5 sm:grid-cols-5 sm:gap-3">
              {/* Rail through the logo centres: vertical on phones, horizontal from sm up. */}
              <span
                aria-hidden="true"
                className="absolute bottom-8 left-[22px] top-[22px] w-px bg-line sm:bottom-auto sm:right-[calc((100%_-_3rem)/5_-_22px)] sm:h-px sm:w-auto"
              />
              {journey.map((step) => (
                <li key={step.org} className="relative flex gap-3 sm:flex-col sm:gap-3">
                  <OrgLogo
                    org={step.org}
                    className={`h-11 w-11 ${step.current ? "ring-2 ring-accent ring-offset-2 ring-offset-surface" : ""}`}
                  />
                  <div className="min-w-0">
                    <p className={`text-xs ${step.current ? "font-medium text-accent-ink" : "text-muted"}`}>
                      {step.when}
                    </p>
                    <p className="mt-0.5 text-sm font-medium leading-snug">{step.role}</p>
                    <p className="text-xs leading-snug text-muted">{step.org}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="grid gap-px bg-line sm:grid-cols-5">
            {/* Left column */}
            <div className="space-y-6 bg-surface p-6 sm:col-span-3 sm:px-8 sm:py-7">
              <section>
                <h3 className="text-sm font-medium text-muted">Proof points</h3>
                <dl className="mt-3 grid grid-cols-2 gap-x-6">
                  {proof.map((p) => (
                    <div key={p.label} className="border-t border-line py-3">
                      <dt className="text-xl font-bold leading-tight tracking-tight">{p.value}</dt>
                      <dd className="mt-1 text-sm leading-snug text-muted">{p.label}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <h3 className="text-sm font-medium text-muted">Best work to look at</h3>
                <ol className="mt-3 grid grid-cols-3 gap-3">
                  {top.map((p) => (
                    <li key={p.slug}>
                      <a
                        href={p.app ?? p.live ?? p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden rounded-xl border border-line bg-bg transition-[transform,border-color] hover:-translate-y-0.5 hover:border-ink/25"
                      >
                        <span className="relative block aspect-[16/10] overflow-hidden bg-sunken">
                          {p.screenshot && (
                            <Image
                              src={p.screenshot}
                              alt=""
                              fill
                              sizes="180px"
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </span>
                        <span className="flex items-center justify-between gap-1 px-2.5 py-2 text-sm font-medium">
                          <span className="truncate">{p.name}</span>
                          <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 -rotate-45 text-muted transition-transform group-hover:rotate-0" />
                        </span>
                      </a>
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
