"use client";

import Image from "next/image";
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

// Radial slot per category: fixed pixel placement around the character in a
// 940px-tall stage, keyed by content/skills.ts label so reordering content
// can't desync layout. Values are hand-tuned against the character's actual
// bounding box (roughly y:120-820, x:600-800 in the 1400px-wide stage) so
// cards never overlap the figure or each other.
const radialSlot: Record<string, string> = {
  Frontend: "left-1/2 top-0 -translate-x-1/2",
  Backend: "left-0 top-[90px]",
  Databases: "right-0 top-[90px]",
  "Cloud & DevOps": "left-0 bottom-[90px]",
  Programming: "right-0 bottom-[90px]",
  "AI & Tools": "left-1/2 bottom-0 -translate-x-1/2",
};

const radialWidth: Record<string, string> = {
  Frontend: "w-80",
  "AI & Tools": "w-80",
};

function SkillCard({
  group,
  delay,
  width = "w-56",
}: {
  group: (typeof skillGroups)[number];
  delay: number;
  width?: string;
}) {
  const CategoryIcon = categoryIconMap[group.icon];
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group/card flex flex-col rounded-2xl border border-line bg-bg-raised p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_32px_-8px_rgba(139,92,246,0.25)] ${width}`}
      >
        <div className="mb-4 flex items-center gap-2">
          <CategoryIcon className="h-5 w-5 shrink-0 text-accent" />
          <h3 className="font-display text-base text-ink">{group.label}</h3>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-4">
          {group.items.map((item) => {
            const Icon = techIconMap[item];
            return (
              <li key={item} className="group flex w-14 flex-col items-center gap-1.5">
                <Icon className="h-9 w-9 shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-1" />
                <span className="text-center text-[11px] leading-tight text-ink-muted">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}

export function Skills() {
  const radialGroups = skillGroups.filter((g) => g.label in radialSlot);
  const csFundamentals = skillGroups.find((g) => g.label === "CS Fundamentals")!;

  return (
    <section id="skills" className="relative scroll-mt-20">
      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">Skills</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Tools I reach for.
          </h2>
        </div>

        {/* Radial layout — desktop/tablet only */}
        <div className="relative mx-auto hidden max-w-[1240px] lg:block" style={{ height: 820 }}>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <g fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="1 6" strokeLinecap="round" opacity={0.45}>
              <line x1="50%" y1="11%" x2="50%" y2="22%" />
              <line x1="19%" y1="20%" x2="41%" y2="34%" />
              <line x1="81%" y1="20%" x2="59%" y2="34%" />
              <line x1="19%" y1="80%" x2="41%" y2="66%" />
              <line x1="81%" y1="80%" x2="59%" y2="66%" />
              <line x1="50%" y1="89%" x2="50%" y2="78%" />
            </g>
            <g fill="var(--color-accent)" opacity={0.55}>
              <circle cx="50%" cy="22%" r="2.5" />
              <circle cx="41%" cy="34%" r="2.5" />
              <circle cx="59%" cy="34%" r="2.5" />
              <circle cx="41%" cy="66%" r="2.5" />
              <circle cx="59%" cy="66%" r="2.5" />
              <circle cx="50%" cy="78%" r="2.5" />
            </g>
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 h-[52%] -translate-x-1/2 -translate-y-1/2">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(139,92,246,0.16)" }}
            />
            <Image
              src="/images/skills-character.png"
              alt="Abhinav Tiwary, 3D illustrated character presenting skill categories"
              width={520}
              height={900}
              className="h-full w-auto object-contain"
              priority={false}
            />
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-1/2 h-3 w-2/5 -translate-x-1/2 rounded-[50%] blur-sm"
              style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
            />
          </div>

          {radialGroups.map((group, i) => (
            <div key={group.label} className={`absolute ${radialSlot[group.label]}`}>
              <SkillCard group={group} delay={i * 0.05} width={radialWidth[group.label] ?? "w-56"} />
            </div>
          ))}
        </div>

        {/* Stacked fallback — mobile/tablet */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:hidden">
          {radialGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} delay={i * 0.05} width="w-full" />
          ))}
        </div>

        <div className="mt-6">
          <Reveal delay={radialGroups.length * 0.05}>
            <div className="rounded-2xl border border-line bg-bg-raised p-6 transition-all duration-300 ease-out hover:border-accent/40 hover:shadow-[0_12px_32px_-8px_rgba(139,92,246,0.2)]">
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
