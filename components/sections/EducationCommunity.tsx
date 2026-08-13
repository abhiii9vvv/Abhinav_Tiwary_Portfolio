import { education, community } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { AWSRealIcon, ShardaLogoIcon } from "@/components/icons/tech";

export function EducationCommunity() {
  return (
    <Section id="education" eyebrow="Education & Community" title="Sharda University.">
      <div className="flex flex-col gap-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-raised">
            <div
              aria-hidden="true"
              className="h-36 w-full bg-cover bg-center sm:h-44"
              style={{ backgroundImage: "url('/generated/education-campus.jpeg')" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-44"
              style={{ backgroundImage: "linear-gradient(to top, var(--color-bg-raised) 0%, transparent 60%)" }}
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <ShardaLogoIcon className="h-10 w-10 shrink-0" />
                <div>
                  <h3 className="font-display text-2xl text-ink">{education.degree}</h3>
                  <p className="text-ink-muted">
                    <strong className="font-semibold text-ink">{education.institution}</strong>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                <strong className="font-semibold text-ink">{education.period}</strong> · {education.location}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-bg-raised p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <AWSRealIcon className="h-10 w-10 shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-ink-muted">Community</p>
                <h3 className="font-display text-xl text-ink">{community.event}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm text-ink-muted">{community.location}</p>
            <p className="mt-3 max-w-2xl text-ink-muted">{community.description}</p>
            <p className="mt-3 text-sm text-accent">
              AWS Solutions Architect <strong className="font-semibold">Vishnu Vashist</strong> publicly
              recognized Abhinav as <strong className="font-semibold">one of the first students</strong> to
              complete the hands-on Agentic AI workshop.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
