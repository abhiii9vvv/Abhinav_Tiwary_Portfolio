"use client";

import { skillGroups } from "@/content/skills";
import { techIconMap } from "@/components/icons/tech";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20">
      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">Skills</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Tools I reach for.
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
