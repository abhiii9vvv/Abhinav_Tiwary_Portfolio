"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { strongProjects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ensureGsapRegistered, gsap, ScrollTrigger } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function StrongProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { layoutFxEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!layoutFxEnabled || !sectionRef.current || !trackRef.current) return;
      ensureGsapRegistered();

      const track = trackRef.current;
      const scrollDistance = track.scrollWidth - track.clientWidth;
      if (scrollDistance <= 0) return;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const currentScrollDistance = track.scrollWidth - track.clientWidth;
          gsap.set(track, { x: -currentScrollDistance * self.progress });
        },
      });

      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [layoutFxEnabled] }
  );

  return (
    <section id="strong-projects" ref={sectionRef} className="relative scroll-mt-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">More Work</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Other things I&apos;ve built.
          </h2>
        </div>
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={
              layoutFxEnabled
                ? "flex w-max gap-6"
                : "grid grid-cols-1 gap-6 sm:grid-cols-2"
            }
          >
            {strongProjects.map((project) => (
              <div
                key={project.slug}
                className={layoutFxEnabled ? "w-[280px] shrink-0 sm:w-[320px]" : ""}
              >
                <ProjectCard project={project} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
