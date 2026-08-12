import Image from "next/image";
import { Project } from "@/content/projects";
import { ArrowUpRight, GithubMark } from "@/components/icons";
import { techIconMap } from "@/components/icons/tech";
import { colorForTag } from "@/content/tagColors";

export function ProjectCard({
  project,
  large,
  compact,
}: {
  project: Project;
  large?: boolean;
  compact?: boolean;
}) {
  const primaryLink = project.live ?? project.github;

  let linkLabel: string | undefined;
  if (project.live) {
    linkLabel = "Live site";
  } else if (project.github) {
    linkLabel = "GitHub";
  }

  let bodyPadding = "p-6";
  if (large) {
    bodyPadding = "p-8";
  } else if (compact) {
    bodyPadding = "p-5";
  }

  return (
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line border-t-4 bg-bg-raised transition-shadow duration-300 ${
        compact
          ? "shadow-none hover:shadow-[0_10px_24px_-16px_rgba(0,0,0,0.14)]"
          : "shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.18)]"
      } ${large ? "sm:col-span-2" : ""}`}
      style={{ borderTopColor: colorForTag(project.name) }}
    >
      {project.screenshot && (
        <div
          className={`relative w-full overflow-hidden border-b border-line ${
            compact ? "aspect-[16/10]" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            fill
            sizes={large ? "(min-width: 640px) 800px, 100vw" : "(min-width: 640px) 400px, 100vw"}
            className="object-cover object-top outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${bodyPadding}`}>
        <div>
          {project.status && !compact && (
            <span className="mb-3 inline-block rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.1em] text-bg">
              {project.status}
            </span>
          )}
          <h3 className="font-display text-2xl text-ink">{project.name}</h3>
          <p className="mt-1 text-ink-muted">{project.tagline}</p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => {
            const TagIcon = techIconMap[t];
            const color = colorForTag(t);
            return (
              <li
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: `${color}55`,
                  backgroundColor: `${color}14`,
                  color,
                }}
              >
                {TagIcon && <TagIcon className="h-3.5 w-3.5 shrink-0 rounded-[3px]" />}
                {t}
              </li>
            );
          })}
        </ul>
        <div className="mt-4 flex flex-1 items-end justify-between gap-4">
          {linkLabel && (
            <span className="inline-flex items-center gap-1.5 text-sm text-ink">
              {linkLabel}
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-muted transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          )}
          {project.note && (
            <p className="flex items-center gap-1.5 text-xs text-ink-muted">
              {!project.live && <GithubMark className="h-3.5 w-3.5 shrink-0" />}
              {project.note}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
