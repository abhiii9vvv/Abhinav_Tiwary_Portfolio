import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="I build products, not just projects.">
      <Reveal>
        <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-muted">
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
