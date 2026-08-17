import { certifications } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { issuerIconMap } from "@/components/icons/tech";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continued learning.">
      <ul className="flex flex-col gap-1">
        {certifications.map((cert, i) => {
          const IssuerIcon = issuerIconMap[cert.issuer];
          return (
            <Reveal key={cert.name} delay={i * 0.03} as="li" className="flex flex-col justify-between gap-3 rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-bg-raised sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  {IssuerIcon && <IssuerIcon className="h-10 w-10 shrink-0" />}
                  <div>
                    <p className="text-ink">{cert.name}</p>
                    <p className="text-sm text-ink-muted">{cert.issuer}</p>
                  </div>
                </div>
                {cert.date && <p className="text-sm text-ink-muted">{cert.date}</p>}
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
