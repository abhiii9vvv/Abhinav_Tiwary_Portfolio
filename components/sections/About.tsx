import { profile } from "@/content/profile";
import { education } from "@/content/achievements";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="I build products, not just projects.">
      <div className="grid gap-10 sm:grid-cols-[1fr_320px]">
        <Reveal>
          <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-muted">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-bg-raised p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-ink-muted">Currently</p>
            <dl className="mt-4 flex flex-col gap-3 text-sm">
              <div className="grid grid-cols-[72px_1fr] gap-4">
                <dt className="text-ink-muted">Studying</dt>
                <dd className="text-right text-ink">{education.degree.replace("Bachelor of Technology, ", "B.Tech, ")}</dd>
              </div>
              <div className="grid grid-cols-[72px_1fr] gap-4">
                <dt className="text-ink-muted">Based in</dt>
                <dd className="text-right text-ink">{profile.location}</dd>
              </div>
              <div className="grid grid-cols-[72px_1fr] gap-4">
                <dt className="text-ink-muted">Status</dt>
                <dd className="text-right text-accent">Open to opportunities</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
