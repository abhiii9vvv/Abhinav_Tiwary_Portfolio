"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { featuredProjects } from "@/content/projects";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ensureGsapRegistered, gsap, ScrollTrigger } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function FeaturedWork() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!motionEnabled || !gridRef.current) return;
      ensureGsapRegistered();

      const cards = gridRef.current.querySelectorAll("[data-zoom-card]");
      if (cards.length === 0) return;

      gsap.set(cards, { opacity: 0, scale: 0.85 });
      cards.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });
    },
    { scope: gridRef, dependencies: [motionEnabled] }
  );

  return (
    <Section id="work" eyebrow="Featured Work" title="Products I've shipped.">
      <div ref={gridRef} className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <div key={project.slug} data-zoom-card className="h-full">
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
