import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building, not just learning.">
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          {profile.about}
        </p>
      </Reveal>
    </Section>
  );
}
