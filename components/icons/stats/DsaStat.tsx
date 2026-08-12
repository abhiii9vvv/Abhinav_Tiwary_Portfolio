import { IconShell } from "@/components/icons/tech/IconShell";

// Original glyph: code angle-brackets, representing DSA/algorithm problem
// solving without reusing any brand mark.
export function DsaStatIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#2563eb" label="DSA Problems Solved" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -3.5 -8 L -10 0 L -3.5 8" />
        <path d="M 3.5 -8 L 10 0 L 3.5 8" />
      </g>
    </IconShell>
  );
}
