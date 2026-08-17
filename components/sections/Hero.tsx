import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { AmbientVideo } from "@/components/AmbientVideo";
import { ArrowUpRight, LocationMark } from "@/components/icons";
import { techIconMap } from "@/components/icons/tech";

const heroStack = ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript", "AWS"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,black,transparent)]"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/patterns/topography.svg')" }}
        />
        <AmbientVideo
          src="/videos/hero-topography.webm"
          className="absolute inset-0 h-full w-full"
          lazy={false}
        />
      </div>
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-14 px-6 pb-20 pt-16 sm:grid-cols-[1.2fr_0.8fr] sm:px-10 sm:pt-24">
        <Reveal>
          <div>
            <p className="mb-6 flex items-center gap-1.5 text-sm uppercase tracking-[0.2em] text-ink-muted">
              <LocationMark className="h-4 w-4 shrink-0" />
              {profile.location}
            </p>
            <p className="mb-3 font-display text-lg text-ink-muted sm:text-xl">{profile.name}</p>
            <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              <strong className="font-display font-semibold text-ink">Full-Stack Developer</strong> building{" "}
              <strong className="font-display font-semibold text-ink">scalable web platforms</strong> and{" "}
              <strong className="font-display font-semibold text-ink">AI-powered applications</strong>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              I build and ship real-world products across <strong className="font-semibold text-ink">full-stack engineering</strong>,{" "}
              <strong className="font-semibold text-ink">backend systems</strong>, <strong className="font-semibold text-ink">cloud infrastructure</strong>, and{" "}
              <strong className="font-semibold text-ink">AI</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-bg transition-all duration-200 hover:opacity-85 active:scale-[0.96]"
              >
                Let&apos;s Connect
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors duration-200 hover:border-ink active:scale-[0.96]"
              >
                See My Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {heroStack.map((tech) => {
                const Icon = techIconMap[tech];
                return (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-raised px-3 py-1.5 text-xs text-ink-muted"
                  >
                    {Icon && <Icon className="h-4 w-4 shrink-0" />}
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-sm sm:max-w-[85%]">
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={profile.heroStanding}
                alt={profile.name}
                fill
                sizes="250px"
                quality={85}
                className="relative z-10 object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.16)]"
                style={{ filter: "contrast(1.05) saturate(1.05)" }}
                priority
              />
              <div
                aria-hidden="true"
                className="absolute bottom-2 left-1/2 h-3 w-1/2 -translate-x-1/2 rounded-[50%] blur-sm"
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
