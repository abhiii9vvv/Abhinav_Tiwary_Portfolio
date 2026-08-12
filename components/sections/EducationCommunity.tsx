import { education, community } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function EducationCommunity() {
  return (
    <Section id="education" eyebrow="Education & Community" title="Sharda University.">
      <div className="flex flex-col gap-6">
        <Reveal>
          <div className="rounded-2xl border border-line bg-bg-raised p-6 sm:p-8">
            <h3 className="font-display text-2xl text-ink">{education.degree}</h3>
            <p className="mt-1 text-ink-muted">{education.institution}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {education.period} · {education.location}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-bg-raised p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-ink-muted">Community</p>
            <h3 className="mt-2 font-display text-xl text-ink">{community.event}</h3>
            <p className="mt-1 text-sm text-ink-muted">{community.location}</p>
            <p className="mt-3 max-w-2xl text-ink-muted">{community.description}</p>
            <p className="mt-3 text-sm text-accent">{community.recognition}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
