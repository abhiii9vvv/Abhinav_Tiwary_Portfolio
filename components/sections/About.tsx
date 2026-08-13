import { Section } from "@/components/Section";
import { AmbientVideo } from "@/components/AmbientVideo";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="What I do">
      <div className="grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-muted">
          <p>
            I&apos;m a <strong className="font-semibold text-ink">full-stack developer</strong> who learns by shipping:{" "}
            <strong className="font-semibold text-ink">SaaS platforms</strong>, <strong className="font-semibold text-ink">backend systems</strong>,{" "}
            <strong className="font-semibold text-ink">real-time apps</strong>, <strong className="font-semibold text-ink">cloud infra</strong>.
          </p>
          <p>
            Most days that&apos;s <strong className="font-semibold text-ink">React</strong> and <strong className="font-semibold text-ink">Next.js</strong> on the
            frontend, <strong className="font-semibold text-ink">Node.js</strong> and <strong className="font-semibold text-ink">REST APIs</strong> on the backend,
            and lately <strong className="font-semibold text-ink">LLM APIs</strong> and <strong className="font-semibold text-ink">agentic workflows</strong>.
          </p>
          <p>I&apos;d rather have something working in production than a perfect plan for it.</p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_18%,black_100%)]">
          <AmbientVideo
            src="/videos/hero-typing.webm"
            className="h-full w-full"
            objectPosition="right"
          />
        </div>
      </div>
    </Section>
  );
}
