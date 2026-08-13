import Image from "next/image";
import { Project } from "@/content/projects";
import { ArrowUpRight, GithubMark } from "@/components/icons";
import { techIconMap, projectIconMap } from "@/components/icons/tech";
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
  let dividerBleed = "-mx-6 px-6";
  if (large) {
    bodyPadding = "p-8";
    dividerBleed = "-mx-8 px-8";
  } else if (compact) {
    bodyPadding = "p-5";
    dividerBleed = "-mx-5 px-5";
  }

  const ProjectLogo = projectIconMap[project.slug];

  return (
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}: ${project.tagline}${linkLabel ? ` (opens ${linkLabel})` : ""}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg-raised transition-[box-shadow,scale] duration-300 active:scale-[0.98] ${
        compact
          ? "shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_24px_-16px_rgba(0,0,0,0.14)]"
          : "shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.18)]"
      } ${large ? "sm:col-span-2" : ""}`}
    >
      {project.screenshot && (
        <div
          className={`relative w-full overflow-hidden border-b border-line ${
            compact ? "aspect-[16/10]" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={project.screenshot}
            alt=""
            fill
            sizes={large ? "(min-width: 640px) 800px, 100vw" : "(min-width: 640px) 400px, 100vw"}
            className="object-cover object-top outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col gap-4 ${bodyPadding}`}>
        <div className={`border-b border-line pb-4 ${dividerBleed}`}>
          {project.status && !compact && (
            <span className="mb-3 inline-block rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.1em] text-bg">
              {project.status}
            </span>
          )}
          <div className="flex items-center gap-2.5">
            {ProjectLogo && <ProjectLogo className={`shrink-0 ${large ? "h-9 w-9" : "h-8 w-8"}`} />}
            <h3 className={`font-display text-ink ${large ? "text-3xl" : "text-2xl"}`}>{project.name}</h3>
          </div>
          <p className={`mt-1 text-ink-muted ${large ? "text-base" : "text-sm"}`}>{project.tagline}</p>
        </div>

        <div className={`border-b border-line pb-4 ${dividerBleed}`}>
          <p
            className={`line-clamp-3 leading-relaxed text-ink-muted ${
              large ? "text-base" : "text-sm"
            }`}
          >
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => {
              const TagIcon = techIconMap[t];
              const color = colorForTag(t);
              return (
                <li
                  key={t}
                  className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${
                    large ? "px-3 py-1 text-xs" : "px-2.5 py-1 text-[11px]"
                  }`}
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
        </div>

        <div className="mt-auto flex items-end justify-between gap-4">
          {linkLabel && (
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-ink">
              {linkLabel}
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-muted transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          )}
          {project.note && (
            <p className="flex items-center gap-1.5 text-right text-xs text-ink-muted">
              {!project.live && <GithubMark className="h-3.5 w-3.5 shrink-0" />}
              {project.note}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
