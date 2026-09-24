import Image from "next/image";
import { profile } from "@/content/profile";
import { community, education } from "@/content/achievements";
import { Container } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div data-reveal className="relative mx-auto w-full max-w-sm lg:mr-4 lg:max-w-none lg:self-start">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-accent" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line bg-sunken">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 data-reveal className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            I learn by shipping.
          </h2>
          <div data-reveal className="mt-6 max-w-2xl space-y-4 text-pretty text-lg leading-relaxed text-muted">
            {profile.aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-2">
            <div data-reveal className="rounded-2xl border border-line bg-surface p-6">
              <dt className="flex items-center gap-3">
                <span className="relative h-10 w-10 overflow-hidden rounded-xl border border-line bg-white">
                  <Image src="/brand-icons/sharda.png" alt="" fill sizes="40px" className="object-contain p-1" />
                </span>
                <span className="font-mono text-xs text-muted">Education</span>
              </dt>
              <dd className="mt-4">
                <p className="font-bold tracking-tight">{education.institution}</p>
                <p className="mt-1 text-sm text-muted">{education.degree}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {education.period.replace(/–/g, "-")}, {education.location}
                </p>
              </dd>
            </div>
            <div
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <dt className="font-mono text-xs text-muted">Community</dt>
              <dd className="mt-4">
                <p className="font-bold tracking-tight">{community.event}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{community.description}</p>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
