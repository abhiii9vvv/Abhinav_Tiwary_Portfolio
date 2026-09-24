import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { BrandIcon } from "@/components/BrandIcon";
import { Container } from "@/components/ui";
import { ArrowRightIcon, FileIcon } from "@/components/icons/ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-dots mask-fade-b pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-12 lg:pt-8">
        <div>
          <h1 className="animate-rise" style={{ animationDelay: "80ms" }}>
            <span className="block text-lg font-medium tracking-tight text-muted sm:text-xl">
              {profile.name}, {profile.role}
            </span>
            <span className="mt-5 block text-balance text-[2.75rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.6rem]">
            I build web platforms{" "}
            <span className="relative whitespace-nowrap text-accent-ink">
              and the AI
              <svg
                aria-hidden="true"
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent/50"
              >
                <path d="M2 11C60 4 140 2 298 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            inside them.
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-rise text-pretty text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Final-year CS student at Sharda University, now a {profile.now.role} at {profile.now.org}. Open to full-stack and
            Gen AI roles in Delhi NCR.
          </p>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3.5 font-medium text-bg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              See my work
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3.5 font-medium transition-colors hover:border-ink/30"
            >
              <FileIcon className="h-4 w-4 text-muted" />
              Resume
            </a>
          </div>
        </div>

        {/* Portrait: the cutout rises out of the top of an orange panel. */}
        <div className="relative mx-auto w-full max-w-[420px] animate-rise lg:max-w-none" style={{ animationDelay: "200ms" }}>
          <div className="relative mx-auto aspect-[4/5] w-[88%]">
            <div className="absolute inset-x-0 bottom-0 top-[18%] overflow-hidden rounded-[2rem] bg-accent">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgb(255 255 255 / 0.18) 0 2px, transparent 2px 18px)",
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-b-[2rem]">
              <Image
                src={profile.heroPortrait}
                alt={`${profile.name}, full-stack developer and Gen AI builder`}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 80vw"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute -left-6 bottom-[6%] animate-float sm:bottom-[16%] rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-lift backdrop-blur sm:-left-10">
              <p className="font-mono text-[11px] text-muted">Now</p>
              <p className="mt-0.5 flex items-center gap-2 text-sm font-medium">
                <BrandIcon name="Paytm" className="h-4 w-4" />
                {profile.now.role}, {profile.now.org}
              </p>
            </div>

            <div
              className="absolute -right-3 top-[26%] animate-float sm:top-[30%] rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-lift backdrop-blur sm:-right-8"
              style={{ animationDelay: "-3s" }}
            >
              <p className="text-2xl font-bold leading-none tracking-tight">2nd</p>
              <p className="mt-1 text-xs leading-snug text-muted">
                Runner-up, Smart India
                <br />
                Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
