import { IconShell } from "./IconShell";

// Original glyph: a central node with concentric action rings, suggesting
// an autonomous agent acting outward, distinct from the sparkle and the
// three-node graph used for the neighboring AI concepts.
export function AIAgentsIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#734a3f" label="AI Agents" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round">
        <circle cx="0" cy="0" r="3" fill="#ffffff" stroke="none" />
        <circle cx="0" cy="0" r="7.5" opacity="0.85" />
        <circle cx="0" cy="0" r="11.5" opacity="0.45" />
      </g>
    </IconShell>
  );
}
