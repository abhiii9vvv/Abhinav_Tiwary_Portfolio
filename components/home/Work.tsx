import Image from "next/image";
import { featuredProjects, moreProjects, strongProjects, totalRepoCount, type Project } from "@/content/projects";
import { profile } from "@/content/profile";
import { BrandIcon, hasBrand } from "@/components/BrandIcon";
import { BrowserFrame, Container, SectionHead } from "@/components/ui";
import { GithubIcon } from "@/components/icons/social";
import { ArrowRightIcon, CheckIcon, PlusIcon } from "@/components/icons/ui";

const projectLogos: Record<string, string> = {
  campussetu: "/brand-icons/campussetu.png",
  mentionwave: "/brand-icons/mentionwave.png",
  "artha-social": "/brand-icons/arthasocial.svg",
  "the-arambha": "/brand-icons/thearambha.png",
};

const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  Flagship: "Flagship, in active development",
  Current: "Live product",
  Client: "Client work, in production",
  Professional: "Professional work",
  Engineering: "Desktop app",
};

function TechList({ tech, className = "" }: { tech: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {tech.map((t) => (
        <li key={t} className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-bg px-2.5 py-1 text-xs">
          {hasBrand(t) && <BrandIcon name={t} className="h-3.5 w-3.5" />}
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-sm font-medium text-bg transition-transform hover:-translate-y-px"
        >
          Visit site
          <ArrowRightIcon className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:rotate-0" />
          <span className="sr-only">for {project.name}</span>
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm transition-colors hover:border-ink/30"
        >
          <GithubIcon className="h-4 w-4" />
          Code
          <span className="sr-only">for {project.name}</span>
        </a>
      )}
    </div>
  );
}

function Logo({ slug, name }: { slug: string; name: string }) {
  const src = projectLogos[slug];
  if (!src) {
    return (
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-sm font-bold text-bg">
        {name.slice(0, 2)}
      </span>
    );
  }
  return (
    <span className="relative h-10 w-10 overflow-hidden rounded-xl border border-line bg-white">
      <Image src={src} alt="" fill sizes="40px" className="object-contain p-1.5" />
    </span>
  );
}

export function Work() {
  const flagship = featuredProjects.find((p) => p.slug === "campussetu")!;
  const rest = featuredProjects.filter((p) => p.slug !== "campussetu");

  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHead
          title="Selected work"
          intro="Products with real users, a client site in production, and one desktop app that needed OS-level engineering."
        />

        {/* Flagship case study */}
        <article
          data-reveal
          className="group relative mt-14 overflow-hidden rounded-[2rem] border border-line bg-surface lg:grid lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative z-10 flex flex-col p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <Logo slug={flagship.slug} name={flagship.name} />
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{flagship.name}</h3>
                <p className="text-sm text-accent-ink">{statusLabel.Flagship}</p>
              </div>
            </div>
            <p className="mt-6 text-pretty text-lg leading-relaxed">{flagship.tagline}.</p>
            <ul className="mt-6 space-y-2.5">
              {flagship.highlights?.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] leading-snug text-muted">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                  {h}
                </li>
              ))}
            </ul>
            <TechList tech={flagship.tech} className="mt-7" />
            <div className="mt-8 lg:mt-auto lg:pt-8">
              <ProjectLinks project={flagship} />
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden bg-accent/90 p-6 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: "radial-gradient(rgb(255 255 255 / 0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <BrowserFrame
              src={flagship.screenshot!}
              alt={`${flagship.name} landing page`}
              url={flagship.live}
              className="relative transition-transform duration-700 ease-out lg:absolute lg:left-12 lg:top-16 lg:w-[140%] lg:group-hover:-translate-x-6 lg:group-hover:-translate-y-2"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </article>

        {/* Other featured work: 2-col grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <article
              key={p.slug}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-line bg-surface"
            >
              <div className="relative overflow-hidden bg-sunken px-6 pt-6 sm:px-8 sm:pt-8">
                <BrowserFrame
                  src={p.screenshot!}
                  alt={`${p.name} screenshot`}
                  url={p.live ?? p.github}
                  className="translate-y-3 rounded-b-none border-b-0 transition-transform duration-500 ease-out group-hover:translate-y-0"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Logo slug={p.slug} name={p.name} />
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                    {p.status && <p className="text-sm text-muted">{statusLabel[p.status]}</p>}
                  </div>
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-muted">{p.tagline}.</p>
                <TechList tech={p.tech} className="mt-5" />
                <div className="mt-6 pt-1 md:mt-auto md:pt-6">
                  <ProjectLinks project={p} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Smaller builds */}
        <div className="mt-20">
          <h3 data-reveal className="text-2xl font-bold tracking-tight">More things I&apos;ve built</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strongProjects.map((p, i) => (
              <a
                key={p.slug}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-bold leading-snug tracking-tight">{p.name}</h4>
                  <GithubIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-ink" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <p className="mt-auto pt-4 font-mono text-xs text-muted">{p.tech.join(" / ")}</p>
              </a>
            ))}
          </div>

          <details className="group/archive mt-4 rounded-2xl border border-line bg-surface">
            <summary className="flex cursor-pointer list-none items-center gap-3 p-5 [&::-webkit-details-marker]:hidden">
              <PlusIcon className="h-4 w-4 text-muted transition-transform group-open/archive:rotate-45" />
              <span className="font-medium">Open the archive</span>
              <span className="text-sm text-muted">
                {moreProjects.length} smaller projects, picked from {totalRepoCount} public repos
              </span>
            </summary>
            <ul className="grid gap-x-8 border-t border-line p-5 sm:grid-cols-2 lg:grid-cols-3">
              {moreProjects.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl px-3 py-3 transition-colors hover:bg-ink/[0.04]"
                  >
                    <span className="flex items-center justify-between gap-2 font-medium">
                      {p.name}
                      <ArrowRightIcon className="h-3.5 w-3.5 -rotate-45 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="text-sm text-muted">{p.tagline}</span>
                  </a>
                </li>
              ))}
              <li className="sm:col-span-2 lg:col-span-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-accent-ink hover:underline"
                >
                  Everything else on GitHub
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </details>
        </div>
      </Container>
    </section>
  );
}
