import { skillGroups } from "@/content/skills";
import { techIconMap } from "@/components/icons/tech";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I reach for.">
      <div className="space-y-14">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.label} delay={groupIndex * 0.05}>
            <div>
              <h3 className="mb-5 font-display text-xl text-ink">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const Icon = techIconMap[item];

                  if (Icon) {
                    return (
                      <li key={item} className="group flex flex-col items-center gap-2 w-16">
                        <Icon className="h-12 w-12 shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-1" />
                        <span className="text-center text-xs leading-tight text-ink-muted">
                          {item}
                        </span>
                      </li>
                    );
                  }

                  return (
                    <li key={item} className="flex items-center">
                      <span className="rounded-full border border-line bg-bg-raised px-4 py-2 text-sm text-ink-muted transition-colors duration-200 ease-out hover:border-accent/40 hover:text-ink">
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
