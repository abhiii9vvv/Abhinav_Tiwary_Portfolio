"use client";

import { skillGroups } from "@/content/skills";
import { techIconMap } from "@/components/icons/tech";
import {
  FrontendMark,
  BackendMark,
  DatabaseMark,
  CloudMark,
  AiMark,
  ProgrammingMark,
  CSFundamentalsMark,
} from "@/components/icons/categories";
import { Reveal } from "@/components/Reveal";

const categoryIconMap = {
  frontend: FrontendMark,
  backend: BackendMark,
  database: DatabaseMark,
  cloud: CloudMark,
  ai: AiMark,
  programming: ProgrammingMark,
  "cs-fundamentals": CSFundamentalsMark,
} as const;

function SkillCard({ group, delay }: { group: (typeof skillGroups)[number]; delay: number }) {
  const CategoryIcon = categoryIconMap[group.icon];
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
        <div className="mb-5 flex items-center gap-2">
          <CategoryIcon className="h-5 w-5 shrink-0 text-accent" />
          <h3 className="font-display text-xl text-ink">{group.label}</h3>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-6">
          {group.items.map((item) => {
            const Icon = techIconMap[item];
            return (
              <li key={item} className="group flex w-16 flex-col items-center gap-2">
                <Icon className="h-12 w-12 shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-1" />
                <span className="text-center text-xs leading-tight text-ink-muted">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}

export function Skills() {
  const orderedGridGroups = skillGroups.slice(0, -1);
  const csFundamentals = skillGroups.at(-1)!;

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
          {orderedGridGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} delay={i * 0.05} />
          ))}
        </div>

        <div className="mt-6">
          <Reveal delay={orderedGridGroups.length * 0.05}>
            <div className="rounded-2xl border border-line bg-bg-raised p-6">
              <div className="mb-5 flex items-center gap-2">
                <CSFundamentalsMark className="h-5 w-5 shrink-0 text-accent" />
                <h3 className="font-display text-xl text-ink">{csFundamentals.label}</h3>
              </div>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:justify-between">
                {csFundamentals.items.map((item) => {
                  const Icon = techIconMap[item];
                  return (
                    <li key={item} className="group flex w-20 flex-col items-center gap-2">
                      <Icon className="h-12 w-12 shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-1" />
                      <span className="text-center text-xs leading-tight text-ink-muted">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
