import { IconShell } from "./IconShell";

// Original glyph: a hashed shield, a padlock body with a slashed
// fingerprint-like squiggle representing one-way hashing, not any literal
// bcrypt logo (bcrypt has no official brand mark).
export function BcryptIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#3a5a40" label="bcrypt" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-7" y="-2" width="14" height="10.5" rx="2.4" />
        <path d="M -4 -2 L -4 -6 A 4 4 0 0 1 4 -6 L 4 -2" />
        <path d="M -3.6 2.8 Q -1.5 0.5 0 2.8 Q 1.5 5 3.6 2.8" strokeWidth="1.6" />
      </g>
    </IconShell>
  );
}
