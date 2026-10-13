import Image from "next/image";
import { certifications, community } from "@/content/achievements";
import { BrandIcon } from "@/components/BrandIcon";
import { Container, SectionHead } from "@/components/ui";
import { CountUp } from "@/components/CountUp";

const certLogo: Record<string, React.ReactNode> = {
  "Google Cloud Career Launchpad": <BrandIcon name="Google Cloud" className="h-6 w-6" />,
  "NPTEL, IIT Kharagpur (SWAYAM)": (
    <span className="relative block h-6 w-6">
      <Image src="/brand-icons/nptel.png" alt="" fill sizes="24px" className="object-contain" />
    </span>
  ),
  "JPMorgan Chase": <BrandIcon name="JPMorgan Chase" className="h-6 w-6" />,
  "MERN Stack Bootcamp": <BrandIcon name="MongoDB" className="h-6 w-6" />,
};

export function Recognition() {
  return (
    <section id="recognition" className="border-t border-line bg-surface py-24 sm:py-32">
      <Container>
        <SectionHead title="Recognition, *earned*" intro="Hackathons, workshops, and a lot of practice problems." />

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {/* SIH: the headline achievement */}
          <article
            data-reveal
            className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[2rem] bg-accent p-7 text-white sm:p-9 md:col-span-2 md:row-span-2"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "repeating-radial-gradient(circle at 85% 15%, rgb(255 255 255 / 0.22) 0 1px, transparent 1px 26px)",
              }}
            />
            <Image
              src="/3d-icons/trophy.png"
              alt=""
              width={220}
              height={220}
              className="trophy absolute -right-4 -top-2 w-40 rotate-6 drop-shadow-2xl sm:w-52"
            />
            <p className="relative font-mono text-sm text-white/80">Smart India Hackathon 2025</p>
            <p className="relative mt-2 font-display text-7xl uppercase leading-[0.9] sm:text-8xl">
              <span className="slam">
                <span style={{ "--i": 0 } as React.CSSProperties}>2nd</span>
              </span>
              <span className="slam">
                <span style={{ "--i": 1 } as React.CSSProperties}>Runner-up.</span>
              </span>
            </p>
            <p className="relative mt-4 max-w-sm text-pretty leading-relaxed text-white/85">
              Internal round at Sharda University, with InternSetu, an internship discovery platform for Indian students.
            </p>
          </article>

          {/* AWS */}
          <article
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="flex flex-col rounded-[2rem] bg-ink p-7 text-bg md:col-span-2"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-sm text-bg/60">AWS Student Community Day, Delhi NCR 2026</p>
              <BrandIcon name="AWS" className="h-8 w-8" />
            </div>
            <p className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              <span className="font-serif text-[1.15em] font-normal italic text-accent">First</span> to finish the
              hands-on Agentic AI workshop.
            </p>
            <span aria-hidden="true" className="stamp mt-5 self-start text-sm text-accent" style={{ "--stamp-delay": "1s" } as React.CSSProperties}>
              Finished first
            </span>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-bg/70">{community.recognition}</p>
          </article>

          {/* LeetCode */}
          <article
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            className="flex flex-col justify-between gap-6 rounded-[2rem] border border-line bg-bg p-7"
          >
            <BrandIcon name="LeetCode" className="h-8 w-8" />
            <div>
              <p className="text-5xl font-bold tracking-tight">
                <CountUp value={250} suffix="+" />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">DSA problems: arrays, trees, graphs, and DP.</p>
            </div>
          </article>

          {/* NPTEL */}
          <article
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="bg-dots flex flex-col justify-between gap-6 rounded-[2rem] border border-line bg-bg p-7"
          >
            <span className="relative block h-8 w-8">
              <Image src="/brand-icons/nptel.png" alt="NPTEL" fill sizes="32px" className="object-contain" />
            </span>
            <div>
              <p className="text-5xl font-bold tracking-tight">
                <CountUp value={99} suffix="%" />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">Elite certificate, NPTEL (IIT Kharagpur), 12-week course.</p>
            </div>
          </article>
        </div>

        {/* Certifications */}
        <div data-reveal className="mt-4 rounded-[2rem] border border-line bg-bg p-7 sm:p-9">
          <h3 className="text-lg font-bold tracking-tight">Certifications</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <li key={c.name} className="stg flex gap-4" style={{ "--i": i + 2 } as React.CSSProperties}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-surface">
                  {certLogo[c.issuer]}
                </span>
                <div className="min-w-0">
                  <p className="font-medium leading-snug">{c.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
                  {c.date && <p className="mt-0.5 font-mono text-xs text-muted">{c.date}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
