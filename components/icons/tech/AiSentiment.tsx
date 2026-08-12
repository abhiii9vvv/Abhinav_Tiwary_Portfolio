import { IconShell } from "./IconShell";

// Original glyph: a speech bubble with a face-curve inside expressing
// sentiment (smile/neutral/frown arc), representing sentiment analysis
// rather than any specific product mark.
export function AiSentimentIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#7c3aed" label="AI Sentiment" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -9 -6 Q -9 -9 -6 -9 L 6 -9 Q 9 -9 9 -6 L 9 1 Q 9 4 6 4 L -1 4 L -5 8 L -5 4 L -6 4 Q -9 4 -9 1 Z" />
        <path d="M -4.5 -1.5 Q 0 2 4.5 -1.5" strokeWidth="1.8" />
      </g>
    </IconShell>
  );
}
