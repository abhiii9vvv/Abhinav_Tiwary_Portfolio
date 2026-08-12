import { experience } from "@/content/experience";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="divide-y divide-line border-t border-line">
        {experience.map((entry, i) => (
          <Reveal key={entry.org} delay={i * 0.05}>
            <li className="grid gap-x-8 gap-y-2 py-8 sm:grid-cols-[180px_1fr] sm:py-10">
              <div>
                <p
                  className={`text-sm ${
                    entry.current ? "font-medium text-accent" : "text-ink-muted"
                  }`}
                >
                  {entry.period}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{entry.org}</h3>
                <p className="mt-1 text-ink">{entry.role}</p>
                <p className="mt-3 max-w-xl text-ink-muted">{entry.description}</p>
                {entry.highlight && (
                  <p className="mt-3 text-sm font-medium text-accent">
                    {entry.highlight}
                  </p>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
