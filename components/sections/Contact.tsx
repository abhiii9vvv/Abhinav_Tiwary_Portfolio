import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MailMark, LinkedinMark, GithubMark, ArrowUpRight } from "@/components/icons";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something useful." pattern="/patterns/plus.svg">
      <Reveal>
        <p className="max-w-xl text-lg text-ink-muted">
          I&apos;m open to full-time opportunities, internships, and interesting engineering projects.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-bg transition-opacity hover:opacity-85"
          >
            <MailMark className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
          >
            <LinkedinMark className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
          >
            <GithubMark className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
