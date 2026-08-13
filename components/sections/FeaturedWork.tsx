import { featuredProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export function FeaturedWork() {
  return (
    <Section id="work" eyebrow="Featured Work" title="Products I've shipped.">
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <div key={project.slug} className="h-full">
            <ProjectCard
              project={project}
              large={i === 0 || project.slug === "campussetu" || i === featuredProjects.length - 1}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
