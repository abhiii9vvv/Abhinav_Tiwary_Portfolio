import { skillGroups } from "@/content/skills";
import { techIconMap } from "@/components/icons/tech";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I reach for.">
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.label} delay={groupIndex * 0.05} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
              <h3 className="mb-5 font-display text-xl text-ink">
                {group.label}
              </h3>
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
    </Section>
  );
}
