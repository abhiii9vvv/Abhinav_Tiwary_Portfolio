import { experience } from "@/content/experience";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { OrgMark } from "@/components/icons";
import { orgIconMap } from "@/components/icons/tech";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="flex flex-col gap-5">
        {experience.map((entry, i) => {
          const OrgLogo = orgIconMap[entry.org];
          return (
            <Reveal key={entry.org} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-bg-raised p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {OrgLogo ? (
                      <OrgLogo className="mt-1 h-9 w-9 shrink-0" />
                    ) : (
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-ink-muted">
                        <OrgMark className="h-5 w-5" />
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-2xl text-ink">{entry.org}</h3>
                      <p className="mt-1 text-ink">{entry.role}</p>
                    </div>
                  </div>
                  <p
                    className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                      entry.current
                        ? "border-accent/30 bg-accent/10 text-accent"
                        : "border-line text-ink-muted"
                    }`}
                  >
                    {entry.period}
                  </p>
                </div>
                <p className="mt-4 max-w-2xl text-ink-muted">{entry.description}</p>
                {entry.highlight && (
                  <p className="mt-4 text-sm font-medium text-accent">{entry.highlight}</p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
