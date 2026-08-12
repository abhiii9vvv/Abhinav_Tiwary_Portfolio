import { IconShell } from "./IconShell";

// Original glyph: a small three-node network (a language-model call graph),
// visually distinct from the sparkle (Generative AI) and pulse (AI Agents)
// glyphs used for the neighboring AI concepts.
export function LlmApisIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#5c4a7a" label="LLM APIs" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round">
        <path d="M -8 7 L 0 -7 L 8 7" />
        <circle cx="-8" cy="7" r="2.2" fill="#ffffff" stroke="none" />
        <circle cx="0" cy="-7" r="2.2" fill="#ffffff" stroke="none" />
        <circle cx="8" cy="7" r="2.2" fill="#ffffff" stroke="none" />
      </g>
    </IconShell>
  );
}
