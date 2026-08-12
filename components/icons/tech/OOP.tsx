import { IconShell } from "./IconShell";

// Original glyph: nested squares representing inheritance/encapsulation
// layers in object-oriented design.
export function OOPIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#463f63" label="OOP" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
        <rect x="-10" y="-10" width="20" height="20" rx="3" opacity="0.5" />
        <rect x="-6" y="-6" width="12" height="12" rx="2.4" opacity="0.75" />
        <rect x="-2.5" y="-2.5" width="5" height="5" rx="1.2" fill="#ffffff" stroke="none" />
      </g>
    </IconShell>
  );
}
