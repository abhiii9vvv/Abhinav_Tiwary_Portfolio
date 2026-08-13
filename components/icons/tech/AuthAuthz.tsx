import { IconShell } from "./IconShell";

// Original glyph: a shield with a checkmark, distinct from JwtAuthIcon's
// key/token ring — this represents the broader access-control concept
// (who you are + what you're allowed to do) rather than a specific token.
export function AuthAuthzIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#3f5566" label="Authentication & Authorization" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 0 -11 L 9 -7 L 9 1 C 9 7 4.5 10.5 0 12 C -4.5 10.5 -9 7 -9 1 L -9 -7 Z" />
        <path d="M -4 0 L -1 3 L 4.5 -3" />
      </g>
    </IconShell>
  );
}
