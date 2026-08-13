import { IconShell } from "./IconShell";

// Original glyph: a document feeding into a spark, the retrieval source
// document flowing into the generative output — distinct from the AI
// Agents concentric-rings glyph and OpenAI/Claude/Gemini brand marks.
export function RAGIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#5c4a70" label="RAG" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -10 -11 L -10 11 L 1 11 L 1 -11 Z" />
        <path d="M -6.5 -6 L -3.5 -6" />
        <path d="M -6.5 -1.5 L -3.5 -1.5" />
        <path d="M -6.5 3 L -5 3" />
        <path d="M 3 0 L 10.5 0" />
        <path d="M 7 -3.5 L 10.5 0 L 7 3.5" />
      </g>
    </IconShell>
  );
}
