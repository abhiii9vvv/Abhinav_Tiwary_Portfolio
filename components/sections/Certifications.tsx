import { certifications } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continued learning.">
      <ul className="flex flex-col gap-1">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.03}>
            <li className="flex flex-col justify-between gap-1 rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-bg-raised sm:flex-row sm:items-center">
              <div>
                <p className="text-ink">{cert.name}</p>
                <p className="text-sm text-ink-muted">{cert.issuer}</p>
              </div>
              {cert.date && <p className="text-sm text-ink-muted">{cert.date}</p>}
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
