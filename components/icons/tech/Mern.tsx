import { IconShell } from "./IconShell";

// Original glyph: four connected nodes representing the MERN stack layers
// (MongoDB, Express, React, Node) as a single linked chain, since MERN is a
// stack acronym with no official brand mark of its own.
export function MernIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#2d6a4f" label="MERN" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round">
        <path d="M -8 6 L -2.6 -1 L 2.6 4 L 8 -6" />
        <circle cx="-8" cy="6" r="2.1" fill="#ffffff" stroke="none" />
        <circle cx="-2.6" cy="-1" r="2.1" fill="#ffffff" stroke="none" />
        <circle cx="2.6" cy="4" r="2.1" fill="#ffffff" stroke="none" />
        <circle cx="8" cy="-6" r="2.1" fill="#ffffff" stroke="none" />
      </g>
    </IconShell>
  );
}
