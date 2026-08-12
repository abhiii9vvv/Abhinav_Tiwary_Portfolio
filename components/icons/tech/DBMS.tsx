import { IconShell } from "./IconShell";

// Original glyph: a generic stacked-cylinder database mark, kept simpler
// and flatter than the real MongoDB/PostgreSQL/MySQL/Redis logos already
// in the map, since this represents the general DBMS concept only.
export function DBMSIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#555555" label="DBMS" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round">
        <ellipse cx="0" cy="-7" rx="9" ry="3.2" />
        <path d="M -9 -7 L -9 7 C -9 8.8, -5 10.2, 0 10.2 C 5 10.2, 9 8.8, 9 7 L 9 -7" />
        <path d="M -9 0 C -9 1.8, -5 3.2, 0 3.2 C 5 3.2, 9 1.8, 9 0" opacity="0.7" />
      </g>
    </IconShell>
  );
}
