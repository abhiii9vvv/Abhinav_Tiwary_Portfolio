"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { ArrowUpRight } from "@/components/icons";

export function ResumeFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={profile.resume}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-bg shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:opacity-85 active:scale-[0.96] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      Resume
      <ArrowUpRight className="h-4 w-4 shrink-0" />
    </a>
  );
}
