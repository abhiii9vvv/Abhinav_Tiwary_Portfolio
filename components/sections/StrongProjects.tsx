import { strongProjects, totalRepoCount } from "@/content/projects";
import { profile } from "@/content/profile";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowUpRight } from "@/components/icons";

export function StrongProjects() {
  return (
    <section id="strong-projects" className="relative scroll-mt-20">
      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">More Work</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Other things I&apos;ve built.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {strongProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors duration-200 hover:border-ink active:scale-[0.96]"
          >
            View all {totalRepoCount} repositories
            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
