"use client";

import { openPalette } from "@/lib/theme";

export function PaletteHint() {
  return (
    <button type="button" onClick={openPalette} className="no-print text-left hover:text-ink">
      Press <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-xs">/</kbd> to open the command
      menu
    </button>
  );
}
