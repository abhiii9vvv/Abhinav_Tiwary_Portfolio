import { IconShell } from "./IconShell";

// Original glyph (not sourced from any icon library): two opposing arrows
// forming a request/response exchange loop, drawn as simple rounded strokes.
export function RestApisIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#3d5a6c" label="REST APIs" className={className}>
      <g
        transform="translate(24 24)"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M -9 -6 A 9 9 0 0 1 8 -9" />
        <path d="M 8 -9 L 3 -11.5" />
        <path d="M 8 -9 L 6.5 -4" />
        <path d="M 9 6 A 9 9 0 0 1 -8 9" />
        <path d="M -8 9 L -3 11.5" />
        <path d="M -8 9 L -6.5 4" />
      </g>
    </IconShell>
  );
}
