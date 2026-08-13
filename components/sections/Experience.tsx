import { experience } from "@/content/experience";
import { Section } from "@/components/Section";
import { OrgMark } from "@/components/icons";
import { orgIconMap } from "@/components/icons/tech";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="relative flex flex-col gap-5">
        {experience.map((entry) => {
          const OrgLogo = orgIconMap[entry.org];
          return (
            <div
              key={entry.org}
              className="group rounded-2xl border border-line bg-bg-raised p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-ink/15 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.18)] sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {OrgLogo ? (
                    <OrgLogo className="mt-1 h-9 w-9 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-1" />
                  ) : (
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-ink-muted transition-transform duration-300 ease-out group-hover:-translate-y-1">
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
          );
        })}
      </div>
    </Section>
  );
}
