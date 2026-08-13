"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { skillGroups } from "@/content/skills";
import { techIconMap } from "@/components/icons/tech";
import { Reveal } from "@/components/Reveal";
import { ensureGsapRegistered, ScrollTrigger } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { layoutFxEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!layoutFxEnabled || !sectionRef.current || !headingRef.current || !gridRef.current) {
        return;
      }
      ensureGsapRegistered();

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=16",
        end: () => `+=${gridRef.current!.offsetHeight - headingRef.current!.offsetHeight}`,
        pin: headingRef.current,
        pinSpacing: false,
      });

      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [layoutFxEnabled] }
  );

  return (
    <section id="skills" ref={sectionRef} className="relative scroll-mt-20">
      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <div ref={headingRef} className="relative z-30 mb-12 bg-bg pb-2">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">Skills</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Tools I reach for.
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
                <h3 className="mb-5 font-display text-xl text-ink">{group.label}</h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-6">
                  {group.items.map((item) => {
                    const Icon = techIconMap[item];
                    return (
                      <li key={item} className="group flex w-16 flex-col items-center gap-2">
                        <Icon className="h-12 w-12 shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-1" />
                        <span className="text-center text-xs leading-tight text-ink-muted">
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
