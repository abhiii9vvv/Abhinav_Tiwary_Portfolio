import { IconShell } from "./IconShell";

// Original glyph: an abstract key/token shape, a ring with two prongs,
// representing a signed access token rather than any literal lock icon.
export function JwtAuthIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#4a4470" label="JWT Authentication" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="-7" cy="0" r="5.5" />
        <path d="M -1.8 0 L 11 0" />
        <path d="M 5 0 L 5 4" />
        <path d="M 9 0 L 9 5.5" />
      </g>
    </IconShell>
  );
}
