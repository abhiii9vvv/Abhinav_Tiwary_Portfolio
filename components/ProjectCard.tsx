import Image from "next/image";
import { Project } from "@/content/projects";
import { ArrowUpRight, GithubMark } from "@/components/icons";

export function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  const primaryLink = project.live ?? project.github;

  return (
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-2xl border border-line bg-bg-raised shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.18)] ${
        large ? "sm:col-span-2" : ""
      }`}
    >
      {project.screenshot ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line">
          <Image
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            fill
            sizes={large ? "(min-width: 640px) 800px, 100vw" : "(min-width: 640px) 400px, 100vw"}
            className="object-cover object-top outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden border-b border-line bg-ink">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />
          <span className="relative font-display text-2xl text-bg">{project.name}</span>
        </div>
      )}
      <div className={large ? "p-8" : "p-6"}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-ink">{project.name}</h3>
            <p className="mt-1 text-ink-muted">{project.tagline}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        {project.note && (
          <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-muted">
            {!project.live && <GithubMark className="h-3.5 w-3.5 shrink-0" />}
            {project.note}
          </p>
        )}
      </div>
    </a>
  );
}
