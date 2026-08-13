"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Looping decorative video that:
 * - never renders for users who have asked for reduced motion
 * - by default (`lazy`) doesn't even start downloading until it scrolls
 *   near the viewport, so below-the-fold clips never compete with
 *   initial page load
 * - uses `preload="none"` so the browser fetches nothing until playback
 *   is actually requested, keeping the video off the critical path
 */
export function AmbientVideo({
  src,
  className,
  objectPosition = "center",
  lazy = true,
}: {
  src: string;
  className?: string;
  objectPosition?: string;
  lazy?: boolean;
}) {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(!lazy);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMotionAllowed(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!lazy || shouldLoad || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [lazy, shouldLoad]);

  if (!motionAllowed) return <div ref={containerRef} className={className} />;

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        >
          <source src={src} type="video/webm" />
        </video>
      )}
    </div>
  );
}
