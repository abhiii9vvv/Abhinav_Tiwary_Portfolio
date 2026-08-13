"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, LocationMark } from "@/components/icons";
import { techIconMap } from "@/components/icons/tech";

const heroStack = ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript", "AWS"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 40]);
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ y: bgParallaxY }}
        className="pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,black,transparent)]"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/patterns/topography.svg')" }}
        />
      </motion.div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 sm:grid-cols-[1.2fr_0.8fr] sm:px-10 sm:pt-24">
        <Reveal>
          <div>
            <p className="mb-6 flex items-center gap-1.5 text-sm uppercase tracking-[0.2em] text-ink-muted">
              <LocationMark className="h-4 w-4 shrink-0" />
              {profile.location}
            </p>
            <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {profile.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-bg transition-all duration-200 hover:opacity-85 active:scale-[0.96]"
              >
                Let&apos;s Connect
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors duration-200 hover:border-ink active:scale-[0.96]"
              >
                See My Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {heroStack.map((tech) => {
                const Icon = techIconMap[tech];
                return (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-raised px-3 py-1.5 text-xs text-ink-muted"
                  >
                    {Icon && <Icon className="h-4 w-4 shrink-0" />}
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <motion.div style={{ y: parallaxY }} className="relative mx-auto w-full max-w-md sm:max-w-none">
            <div className="relative aspect-square w-full">
              <Image
                src={profile.headshotTransparent}
                alt={profile.name}
                fill
                sizes="(min-width: 640px) 480px, 400px"
                quality={100}
                className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.16)] [image-rendering:high-quality]"
                style={{ filter: "contrast(1.05) saturate(1.05)" }}
                priority
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
