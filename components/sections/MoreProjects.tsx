import { moreProjects, totalRepoCount } from "@/content/projects";
import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, GithubMark } from "@/components/icons";

export function MoreProjects() {
  return (
    <Section id="more-projects" eyebrow="Repositories" title="More on GitHub.">
      <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        {moreProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.03}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-bg-raised"
            >
              <GithubMark className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate text-sm text-ink">{project.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-muted transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-0.5 text-xs text-ink-muted">{project.tagline}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={moreProjects.length * 0.03}>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
        >
          View all {totalRepoCount} repositories
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}
