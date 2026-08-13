import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { AmbientVideo } from "@/components/AmbientVideo";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="What I do">
      <div className="grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-muted">
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_18%,black_100%)]">
          <AmbientVideo
            src="/videos/hero-typing.webm"
            className="h-full w-full"
            objectPosition="right"
          />
        </div>
      </div>
    </Section>
  );
}
