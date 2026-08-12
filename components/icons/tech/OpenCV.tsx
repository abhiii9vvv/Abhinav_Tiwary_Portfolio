import { IconShell } from "./IconShell";

// Original glyph: an abstract lens/eye, an outer almond outline with an
// inner aperture ring, representing computer vision scanning.
export function OpenCVIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#2e5c73" label="OpenCV" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -11 0 C -6 -7, 6 -7, 11 0 C 6 7, -6 7, -11 0 Z" />
        <circle cx="0" cy="0" r="3.2" fill="#ffffff" stroke="none" />
      </g>
    </IconShell>
  );
}
