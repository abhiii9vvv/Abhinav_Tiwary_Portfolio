import { IconShell } from "@/components/icons/tech/IconShell";

// Original glyph: a trophy silhouette, for the hackathon achievement stat.
export function TrophyStatIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#b45309" label="Smart India Hackathon 2025, 2nd Runner-Up" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -6 -10 L 6 -10 L 6 -4 A 6 6 0 0 1 -6 -4 Z" />
        <path d="M -6 -9 L -10 -9 L -10 -8 A 4 4 0 0 0 -6 -4" />
        <path d="M 6 -9 L 10 -9 L 10 -8 A 4 4 0 0 1 6 -4" />
        <path d="M 0 2 L 0 5" />
        <path d="M -3.5 9 L 3.5 9 M -2.5 6 L 2.5 6 L 3.5 9 L -3.5 9 Z" />
      </g>
    </IconShell>
  );
}
