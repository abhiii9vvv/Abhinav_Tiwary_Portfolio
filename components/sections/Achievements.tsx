import { achievements } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way.">
      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="rounded-2xl border border-line bg-bg-raised p-6">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-muted">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
