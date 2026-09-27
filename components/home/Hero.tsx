import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui";
import { ArrowRightIcon, FileIcon } from "@/components/icons/ui";

export function Hero() {
  return (
    <section id="top" className="relative flex overflow-hidden lg:flex-1">
      <div aria-hidden="true" className="bg-dots mask-fade-b pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-10 pb-14 pt-10 sm:gap-12 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-0 lg:pt-6">
        <div className="lg:pb-10">
          <h1 className="animate-rise" style={{ animationDelay: "80ms" }}>
            <span className="block text-base font-medium tracking-tight text-muted sm:text-xl">
              {profile.name}, {profile.role}
            </span>
            <span className="mt-4 block text-balance text-[2.6rem] font-bold leading-[1.02] tracking-[-0.035em] sm:mt-5 sm:text-6xl lg:mt-4 lg:text-[clamp(3.25rem,8.6dvh,5.5rem)]">
              I build it, ship it, and{" "}
              <span className="relative whitespace-nowrap text-accent-ink">
                keep it running
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent/50"
                >
                  <path d="M2 11C60 4 140 2 298 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
              .
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-rise text-pretty text-lg leading-relaxed text-muted sm:mt-7 sm:text-xl lg:mt-6"
            style={{ animationDelay: "160ms" }}
          >
            Final-year CS student at Sharda University, now a {profile.now.role} at {profile.now.org}. Open to cloud,
            Linux, support, and full-stack roles in Delhi NCR.
          </p>

          <div
            className="mt-8 grid animate-rise grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center lg:mt-9"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 font-medium text-bg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              See my work
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3.5 font-medium transition-colors hover:border-ink/30"
            >
              <FileIcon className="h-4 w-4 text-muted" />
              Resume
            </a>
          </div>
        </div>

        {/* Portrait: the cutout rises out of the top of an orange panel. */}
        <div
          className="relative mx-auto w-full max-w-[300px] animate-rise sm:max-w-[380px] lg:flex lg:h-full lg:max-w-none lg:items-end lg:justify-center lg:self-stretch"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full lg:mx-0 lg:h-[min(calc(100dvh-15rem),680px)] lg:w-auto">
            <div className="absolute inset-x-0 bottom-0 top-[18%] overflow-hidden rounded-[2rem] bg-accent lg:rounded-b-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgb(255 255 255 / 0.18) 0 2px, transparent 2px 18px)",
                }}
              />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-b-[2rem] lg:rounded-b-none">
              <Image
                src={profile.heroPortrait}
                alt={`${profile.name}, ${profile.role}`}
                fill
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 380px, 300px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
