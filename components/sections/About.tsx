import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { TextReveal } from "@/components/TextReveal";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="What I do">
      <TextReveal className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-muted">
        {profile.aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TextReveal>
    </Section>
  );
}
