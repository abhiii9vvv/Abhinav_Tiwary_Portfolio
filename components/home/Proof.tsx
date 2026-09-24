import { stats } from "@/content/profile";
import { BrandIcon } from "@/components/BrandIcon";
import { CountUp } from "@/components/CountUp";
import { Container } from "@/components/ui";

const marquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Google Cloud",
  "OpenAI API",
  "Claude",
  "Gemini",
  "Python",
  "Tailwind CSS",
  "Prisma",
  "Linux",
  "Git",
];

export function Proof() {
  return (
    <section aria-label="Tools and numbers" className="border-y border-line bg-surface">
      <div className="mask-fade-x group relative overflow-hidden py-5" aria-hidden="true">
        <ul className="flex w-max animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((name, i) => (
            <li key={`${name}-${i}`} className="flex items-center gap-2.5 whitespace-nowrap text-muted">
              <BrandIcon name={name} className="h-5 w-5" />
              <span className="text-sm">{name.replace(" API", "")}</span>
            </li>
          ))}
        </ul>
      </div>

      <Container>
        <dl className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className={`flex flex-col-reverse justify-end px-2 py-8 sm:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
              <dd className="text-4xl font-bold tracking-tight sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
