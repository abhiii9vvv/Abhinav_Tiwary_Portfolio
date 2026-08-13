import { experience } from "@/content/experience";
import { Section } from "@/components/Section";
import { OrgMark } from "@/components/icons";
import { orgIconMap } from "@/components/icons/tech";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="relative flex flex-col">
        {experience.map((entry, i) => {
          const OrgLogo = orgIconMap[entry.org];
          const isLast = i === experience.length - 1;
          return (
            <div key={entry.org} className="group relative flex gap-4 sm:gap-5">
              <div className="relative flex w-10 shrink-0 flex-col items-center">
                {!isLast && <span aria-hidden="true" className="absolute top-5 h-full w-px bg-line" />}
                <span
                  className={`relative z-10 mt-[15px] h-2.5 w-2.5 shrink-0 rounded-full border-2 bg-bg transition-colors duration-300 ${
                    entry.current ? "border-accent" : "border-line group-hover:border-ink/30"
                  }`}
                />
              </div>

              <div className={`min-w-0 flex-1 ${isLast ? "" : "border-b border-line/60 pb-10 sm:pb-12"}`}>
                <div className="flex flex-wrap items-start gap-3 sm:gap-4">
                  {OrgLogo ? (
                    <OrgLogo className="h-10 w-10 shrink-0 rounded-xl border border-line bg-bg-raised p-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-raised text-ink-muted transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                      <OrgMark className="h-5 w-5" />
                    </span>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl text-ink sm:text-2xl">{entry.org}</h3>
                      <p
                        className={`whitespace-nowrap rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.1em] ${
                          entry.current
                            ? "border-accent/30 bg-accent/10 text-accent"
                            : "border-line text-ink-muted"
                        }`}
                      >
                        {entry.period}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-accent">{entry.role}</p>
                  </div>
                </div>

                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:pl-14">
                  {entry.description}
                </p>
                {entry.highlight && (
                  <p className="mt-3 text-sm font-medium text-accent sm:pl-14">{entry.highlight}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
