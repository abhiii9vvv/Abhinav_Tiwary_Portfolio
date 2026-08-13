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
              // card 0 is the base card, already fully visible when pinning
              // engages; only later cards fade in as they slide up over it
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
