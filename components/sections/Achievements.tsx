import { achievements } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Achievements() {
  const [headline, ...rest] = achievements;

  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way.">
      <div className="flex flex-col gap-6">
        <Reveal>
          <div className="rounded-2xl border border-line bg-bg-raised p-8 sm:p-10">
            <h3 className="font-display text-3xl text-ink sm:text-4xl">{headline.title}</h3>
            <p className="mt-3 max-w-2xl text-lg text-ink-muted">{headline.detail}</p>
          </div>
        </Reveal>
        <div className="grid items-stretch gap-6 sm:grid-cols-3">
          {rest.map((item, i) => (
            <Reveal key={item.title} delay={(i + 1) * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
