import { IconShell } from "./IconShell";

// Original glyph: a chat/command prompt caret inside a speech-bubble
// outline, distinct from the AI sparkle and the RAG document-to-spark
// glyph — represents crafting the input rather than the model or output.
export function PromptEngineeringIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#4a6070" label="Prompt Engineering" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -11 -8 C -11 -10 -9.5 -11.5 -7.5 -11.5 L 7.5 -11.5 C 9.5 -11.5 11 -10 11 -8 L 11 1 C 11 3 9.5 4.5 7.5 4.5 L -3 4.5 L -8 9 L -7 4.5 L -7.5 4.5 C -9.5 4.5 -11 3 -11 1 Z" />
        <path d="M -4.5 -3.5 L -1 -7" />
        <path d="M -5 -3.5 L 2.5 -3.5" />
      </g>
    </IconShell>
  );
}
