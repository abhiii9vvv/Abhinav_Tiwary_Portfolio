"use client";

import { useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 768px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Guard state for GSAP ScrollTrigger effects: whether layout-affecting
 * effects (pin/stack/horizontal) should run (desktop + motion allowed),
 * and whether any GSAP animation should run at all (motion allowed).
 */
export function useScrollFx() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const desktopMq = window.matchMedia(DESKTOP_QUERY);
    const motionMq = window.matchMedia(REDUCED_MOTION_QUERY);

    setIsDesktop(desktopMq.matches);
    setReducedMotion(motionMq.matches);

    const onDesktopChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);

    desktopMq.addEventListener("change", onDesktopChange);
    motionMq.addEventListener("change", onMotionChange);

    return () => {
      desktopMq.removeEventListener("change", onDesktopChange);
      motionMq.removeEventListener("change", onMotionChange);
    };
  }, []);

  return {
    /** Motion is allowed at all (parallax, text reveal, zoom). */
    motionEnabled: !reducedMotion,
    /** Layout-affecting effects allowed (pin, stack, horizontal scroll). */
    layoutFxEnabled: !reducedMotion && isDesktop,
  };
}
