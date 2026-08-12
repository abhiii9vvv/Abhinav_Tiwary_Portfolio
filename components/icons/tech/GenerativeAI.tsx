import { IconShell } from "./IconShell";

// Original glyph: a four-point sparkle/star burst, the simplest
// "generation" mark, kept distinct from the node-network (LLM APIs) and
// radiating-dot (AI Agents) glyphs used for the neighboring AI concepts.
export function GenerativeAIIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#8a4a5e" label="Generative AI" className={className}>
      <g transform="translate(24 24)" fill="#ffffff">
        <path d="M 0 -11 C 0.8 -4.5 3.5 -1.8 10 -1 C 3.5 -0.2 0.8 2.5 0 9 C -0.8 2.5 -3.5 -0.2 -10 -1 C -3.5 -1.8 -0.8 -4.5 0 -11 Z" />
        <circle cx="8" cy="-8" r="1.6" opacity="0.85" />
      </g>
    </IconShell>
  );
}
