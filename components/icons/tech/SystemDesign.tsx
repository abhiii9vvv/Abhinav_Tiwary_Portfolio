import { IconShell } from "./IconShell";

// Original glyph: three connected boxes forming a small architecture
// diagram, a blueprint-style shorthand for system design.
export function SystemDesignIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#3d4a5c" label="System Design" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-11" y="-10" width="8" height="6.5" rx="1.4" />
        <rect x="3" y="-10" width="8" height="6.5" rx="1.4" />
        <rect x="-4" y="4.5" width="8" height="6.5" rx="1.4" />
        <path d="M -7 -3.5 L -7 0 L 0 0 L 0 4.5" />
        <path d="M 7 -3.5 L 7 0 L 0 0" />
      </g>
    </IconShell>
  );
}
