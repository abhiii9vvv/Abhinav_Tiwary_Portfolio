"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page. Any element carrying
 * `data-reveal` fades up the first time it enters the viewport. Styles live
 * in globals.css and only apply once `html.js` is set, so content is never
 * hidden when JavaScript is off.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const watch = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    };
    watch();

    // Pick up elements rendered later (route changes, expanded archives).
    const mutations = new MutationObserver(watch);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
