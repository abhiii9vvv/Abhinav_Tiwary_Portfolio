"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type NavLink = {
  href: string;
  label: string;
  /** DOM id of the matching in-page section, used only on the homepage. */
  sectionId: string;
};

/**
 * Returns the href of the currently "active" nav link.
 * On the homepage ("/"), tracks in-page sections via IntersectionObserver.
 * On any other route, matches the current pathname.
 */
export function useActiveNavLink(links: NavLink[]): string {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [activeSectionHref, setActiveSectionHref] = useState(links[0]?.href ?? "/");

  useEffect(() => {
    if (!isHomepage) return;

    const sectionToHref = new Map(links.map((link) => [link.sectionId, link.href]));
    const elements = links
      .map((link) => document.getElementById(link.sectionId))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        }

        for (const link of links) {
          if (visibleIds.has(link.sectionId)) {
            setActiveSectionHref(link.href);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHomepage, links]);

  if (!isHomepage) {
    return pathname;
  }

  return activeSectionHref;
}
