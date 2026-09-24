import { profile } from "@/content/profile";
import { CopyEmail } from "@/components/CopyEmail";
import { Container } from "@/components/ui";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { ArrowRightIcon, FileIcon } from "@/components/icons/ui";

export function Contact() {
  return (
    <section id="contact" className="pb-10 pt-4">
      <Container>
        <div data-reveal className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-bg sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent opacity-90 blur-[2px]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-40"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at center, rgb(255 255 255 / 0.35) 0 1px, transparent 1px 22px)",
            }}
          />

          <div className="relative max-w-3xl">
            <h2 className="text-balance text-5xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-7xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-bg/70">
              Hiring for a full-stack, frontend, or Gen AI role, or have a product that needs building? Email is the
              fastest way to reach me.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-bg px-5 py-4 text-ink transition-transform hover:-translate-y-0.5 sm:justify-start"
              >
                <span className="text-base font-medium sm:text-lg">{profile.email}</span>
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <CopyEmail
                email={profile.email}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-bg/20 px-5 py-4 text-bg/80 transition-colors hover:border-bg/50 hover:text-bg"
              />
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-bg/70">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-bg">
                  <LinkedinIcon className="h-5 w-5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-bg">
                  <GithubIcon className="h-5 w-5" /> GitHub
                </a>
              </li>
              <li>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-bg">
                  <FileIcon className="h-5 w-5" /> Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
