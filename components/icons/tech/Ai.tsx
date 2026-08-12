import { IconShell } from "./IconShell";

// Original glyph: a four-point sparkle, the generic "AI" shorthand mark
// distinct from the concentric-ring glyph used for AI Agents.
export function AiIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#5b21b6" label="AI" className={className}>
      <g transform="translate(24 24)" fill="#ffffff">
        <path d="M 0 -11 L 2.6 -2.6 L 11 0 L 2.6 2.6 L 0 11 L -2.6 2.6 L -11 0 L -2.6 -2.6 Z" />
      </g>
    </IconShell>
  );
}
