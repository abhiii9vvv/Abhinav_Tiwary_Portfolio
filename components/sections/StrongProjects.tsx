import { strongProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function StrongProjects() {
  return (
    <Section id="strong-projects" eyebrow="More Work" title="Other things I&apos;ve built.">
      <div className="grid items-stretch gap-6 sm:grid-cols-2">
        {strongProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
