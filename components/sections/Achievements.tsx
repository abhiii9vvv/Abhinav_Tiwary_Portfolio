import { achievements } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { colorForTag } from "@/content/tagColors";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way.">
      <div className="grid items-stretch gap-6 sm:grid-cols-2">
        {achievements.map((item, i) => {
          const color = colorForTag(item.title);
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className="flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6 border-l-4"
                style={{ borderLeftColor: color }}
              >
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-muted">{item.detail}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
