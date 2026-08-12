import Image from "next/image";
import { profile, stats } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <Reveal>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-ink-muted">
              {profile.location} · {profile.availability}
            </p>
            <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {profile.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-bg transition-all duration-200 hover:opacity-85 active:scale-[0.96]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors duration-200 hover:border-ink active:scale-[0.96]"
              >
                See featured work
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Image
            src={profile.headshot}
            alt={profile.name}
            width={180}
            height={180}
            className="rounded-full border border-black/10 object-cover"
            priority
          />
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl tabular-nums text-ink">{stat.value}</dt>
              <dd className="mt-1 text-sm text-ink-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
