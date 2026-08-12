import { IconShell } from "./IconShell";

// Original glyph: a small binary-tree of nodes and connectors, the
// clearest geometric shorthand for "data structures" without copying any
// specific library's tree icon.
export function DataStructuresIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#3f5c3a" label="Data Structures" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round">
        <path d="M 0 -8 L -7 3" />
        <path d="M 0 -8 L 7 3" />
        <path d="M -7 3 L -7 3" />
        <circle cx="0" cy="-8" r="2.6" fill="#ffffff" stroke="none" />
        <circle cx="-7" cy="7" r="2.6" fill="#ffffff" stroke="none" />
        <circle cx="7" cy="7" r="2.6" fill="#ffffff" stroke="none" />
        <path d="M -7 3 L -7 7" />
        <path d="M 7 3 L 7 7" />
      </g>
    </IconShell>
  );
}
