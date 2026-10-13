"use client";

import { useEffect, useRef, useState } from "react";
import { BrandIcon } from "@/components/BrandIcon";
import { Container, SectionHead } from "@/components/ui";
import { CheckIcon } from "@/components/icons/ui";

/**
 * A deploy pipeline that runs itself: each stage lights up in turn while a
 * terminal below types the matching command and its output. Starts when the
 * section scrolls into view, pauses when it leaves, and shows the finished
 * run under prefers-reduced-motion.
 */

const stages = [
  { name: "Commit", brand: "Git", cmd: "git push origin main", out: "main → a3f9c1e", time: "1s" },
  { name: "Build", brand: "Node.js", cmd: "npm run build", out: "compiled in 14.2s", time: "14s" },
  { name: "Test", brand: "Jenkins", cmd: "jenkins run tests", out: "48 passed, 0 failed", time: "9s" },
  { name: "Image", brand: "Docker", cmd: "docker build -t app:142 .", out: "pushed app:142 (61 MB)", time: "6s" },
  { name: "Deploy", brand: "Kubernetes", cmd: "kubectl rollout status deploy/app", out: "3/3 replicas ready", time: "7s" },
  { name: "Live", brand: "AWS", cmd: "curl -s prod/health", out: "200 OK · 11ms", time: "1s" },
];

const STEP_MS = 1100;
const HOLD_MS = 3200;
const DONE = stages.length;

export function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  // step = index of the running stage; DONE means every stage passed.
  const [step, setStep] = useState(DONE);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setStep(0);
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const id = window.setTimeout(
      () => setStep((s) => (s >= DONE ? 0 : s + 1)),
      step >= DONE ? HOLD_MS : STEP_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, step]);

  const done = step >= DONE;
  const progress = Math.min(step, DONE - 1) / (DONE - 1);

  return (
    <section id="pipeline" className="py-24 sm:py-32">
      <Container>
        <SectionHead
          title="Commit to *production*"
          intro="The path every project of mine takes: pushed, built, tested, containerized, rolled out, and checked live. Same steps whether it's a side project or a team service."
        />

        <div
          ref={ref}
          data-reveal
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-line bg-surface p-5 shadow-lift sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-sm text-muted">
              deploy <span className="text-ink">#142</span> · main
            </p>
            <p
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-500 ${
                done ? "border-ok/30 bg-ok/10 text-ok" : "border-accent/30 bg-accent/10 text-accent-ink"
              }`}
              aria-live="polite"
            >
              <span className="relative flex h-2 w-2">
                {!done && <span className="absolute inset-0 animate-ping rounded-full bg-accent" />}
                <span className={`relative h-2 w-2 rounded-full ${done ? "bg-ok" : "bg-accent"}`} />
              </span>
              {done ? "Deployed" : `Running: ${stages[step].name}`}
            </p>
          </div>

          {/* Stage rail */}
          <ol className="relative mt-8 grid grid-cols-3 gap-y-8 md:grid-cols-6">
            <div aria-hidden="true" className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-0.5 bg-line md:block">
              <div
                className="h-full origin-left bg-accent transition-transform duration-[1100ms] ease-linear"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            {stages.map((s, i) => {
              const state = i < step || done ? "done" : i === step ? "run" : "wait";
              return (
                <li key={s.name} className="relative flex flex-col items-center text-center">
                  <span
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 bg-surface transition-all duration-500 ${
                      state === "done"
                        ? "border-accent"
                        : state === "run"
                          ? "scale-110 border-accent shadow-[0_0_0_6px_rgb(var(--accent)/0.15)]"
                          : "border-dashed border-line"
                    }`}
                  >
                    <BrandIcon
                      name={s.brand}
                      className={`h-6 w-6 transition-[opacity,filter] duration-500 ${state === "wait" ? "opacity-40 grayscale" : ""}`}
                    />
                    {state === "done" && (
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 animate-pop-in items-center justify-center rounded-full bg-accent text-on-accent">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                    )}
                  </span>
                  <span className="mt-3 font-bold tracking-tight">{s.name}</span>
                  <span className="tabular font-mono text-xs text-muted">{state === "wait" ? "queued" : s.time}</span>
                </li>
              );
            })}
          </ol>

          {/* Build log */}
          <div className="mt-8 rounded-2xl bg-[#181614] p-4 font-mono text-[13px] leading-relaxed sm:p-5 sm:text-sm">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-[#8f8a84]">abhinav@ci-runner: ~/app</span>
            </div>
            <div className="min-h-[13.5rem] sm:min-h-[12.5rem]" aria-hidden="true">
              {stages.map((s, i) =>
                i <= step ? (
                  <div key={s.name} className="animate-fade">
                    <p className="truncate text-[#f3f1ee]">
                      <span className="text-[#ff8a5c]">$ </span>
                      <span
                        className={i === step && !done ? "pipe-type inline-block overflow-hidden whitespace-nowrap align-bottom" : ""}
                        style={{ "--chars": s.cmd.length } as React.CSSProperties}
                      >
                        {s.cmd}
                      </span>
                    </p>
                    {(i < step || done) && <p className="truncate pl-4 text-[#4ade80]">✓ {s.out}</p>}
                  </div>
                ) : null,
              )}
            </div>
            <p className="sr-only">
              Pipeline stages: {stages.map((s) => `${s.name}: ${s.cmd}, ${s.out}`).join(". ")}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
