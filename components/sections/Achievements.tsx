import Image from "next/image";
import { achievements } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { achievementIconMap } from "@/components/icons/tech";

const artForTitle: Record<string, string> = {
  "AWS Agentic AI Workshop": "/generated/achievement-certificate.jpeg",
  LeetCode: "/generated/achievement-target.jpeg",
};

export function Achievements() {
  const [headline, ...rest] = achievements;

  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way.">
      <div className="flex flex-col gap-6">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-bg-raised p-8 sm:flex-row sm:items-center sm:p-10">
            <Image src="/generated/achievement-medal.jpeg" alt="" width={96} height={96} className="shrink-0 rounded-xl object-cover" />
            <div>
              <h3 className="font-display text-3xl text-ink sm:text-4xl">{headline.title}</h3>
              <p className="mt-3 max-w-2xl text-lg text-ink-muted">{headline.detail}</p>
            </div>
          </div>
        </Reveal>
        <div className="grid items-stretch gap-6 sm:grid-cols-3">
          {rest.map((item, i) => {
            const art = artForTitle[item.title];
            const Icon = achievementIconMap[item.title];
            return (
              <Reveal key={item.title} delay={(i + 1) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
                  {art ? (
                    <Image src={art} alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-cover" />
                  ) : (
                    Icon && <Icon className="h-10 w-10" />
                  )}
                  <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-ink-muted">{item.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
