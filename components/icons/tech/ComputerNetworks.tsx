import { IconShell } from "./IconShell";

// Original glyph: three nodes connected in a small mesh, distinct from
// SystemDesignIcon's directed architecture boxes — an undirected network
// topology rather than a data-flow diagram.
export function ComputerNetworksIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#3f6058" label="Computer Networks" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 0 -9 L -9 6" />
        <path d="M 0 -9 L 9 6" />
        <path d="M -9 6 L 9 6" />
        <circle cx="0" cy="-9" r="2.6" fill="#ffffff" stroke="none" />
        <circle cx="-9" cy="6" r="2.6" fill="#ffffff" stroke="none" />
        <circle cx="9" cy="6" r="2.6" fill="#ffffff" stroke="none" />
      </g>
    </IconShell>
  );
}
