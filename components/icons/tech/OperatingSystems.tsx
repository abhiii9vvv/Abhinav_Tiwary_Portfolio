import { IconShell } from "./IconShell";

// Original glyph: a monitor/window frame with a title bar, the clearest
// geometric shorthand for "operating systems" without copying any
// specific OS's literal logo.
export function OperatingSystemsIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#4a5670" label="Operating Systems" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-11" y="-9" width="22" height="16" rx="1.8" />
        <path d="M -11 -3.5 L 11 -3.5" />
        <circle cx="-7.5" cy="-6.2" r="0.9" fill="#ffffff" stroke="none" />
        <circle cx="-4.8" cy="-6.2" r="0.9" fill="#ffffff" stroke="none" />
        <path d="M -4 10.5 L 4 10.5" />
        <path d="M 0 7 L 0 10.5" />
      </g>
    </IconShell>
  );
}
