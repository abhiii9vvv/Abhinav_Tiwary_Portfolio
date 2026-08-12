import { skillGroups } from "@/content/skills";
import { techIconMap } from "@/components/icons/tech";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I reach for.">
      <div className="flex flex-wrap gap-x-14 gap-y-14">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.label} delay={groupIndex * 0.05}>
            <div className="w-full sm:w-auto">
              <h3 className="mb-5 font-display text-xl text-ink">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-6">
                {group.items.map((item) => {
                  const Icon = techIconMap[item];

                  return (
                    <li key={item} className="group flex flex-col items-center gap-2 w-16">
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
