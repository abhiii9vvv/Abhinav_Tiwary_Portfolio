import { IconShell } from "./IconShell";

// Original glyph: a branching flowchart path (one input splitting into a
// decision fork), representing algorithmic logic, distinct from the tree
// glyph used for Data Structures.
export function AlgorithmsIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#5c5230" label="Algorithms" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -9 -8 L -2 -8 L 6 3" />
        <path d="M -9 8 L -2 8 L 6 -3" />
        <circle cx="-9" cy="-8" r="2" fill="#ffffff" stroke="none" />
        <circle cx="-9" cy="8" r="2" fill="#ffffff" stroke="none" />
        <circle cx="9" cy="0" r="2.4" fill="#ffffff" stroke="none" />
        <path d="M 6 3 L 9 0 L 6 -3" />
      </g>
    </IconShell>
  );
}
