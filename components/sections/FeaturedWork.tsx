import { featuredProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function FeaturedWork() {
  return (
    <Section id="work" eyebrow="Featured Work" title="Products I've shipped.">
      <div className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} large={project.slug === "campussetu"} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
