"use client";

import { useRef, Children, isValidElement, cloneElement } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import { useScrollFx } from "@/hooks/useScrollFx";

export function TextReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useScrollFx();

  useGSAP(
    () => {
      if (!motionEnabled || !containerRef.current) return;
      ensureGsapRegistered();

      const lines = containerRef.current.querySelectorAll("[data-reveal-line]");
      if (lines.length === 0) return;

      gsap.set(lines, { opacity: 0, y: 24 });
      gsap.to(lines, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef, dependencies: [motionEnabled, delay] }
  );

  const lineChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const existingClassName =
        typeof child.props === "object" && child.props && "className" in child.props
          ? (child.props.className as string | undefined)
          : undefined;
      return cloneElement(child as React.ReactElement<{ className?: string }>, {
        "data-reveal-line": "",
        className: [existingClassName, "will-change-transform"].filter(Boolean).join(" "),
      } as never);
    }
    return child;
  });

  return (
    <div ref={containerRef} className={className}>
      {lineChildren}
    </div>
  );
}
