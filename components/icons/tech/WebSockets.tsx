import { IconShell } from "./IconShell";

// Original glyph: two stacked opposing sine-wave pulses to suggest a
// persistent bidirectional signal, distinct from the REST exchange glyph.
export function WebSocketsIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#2f6b5e" label="WebSockets" className={className}>
      <g transform="translate(24 24)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -10 -4 C -7 -9, -3 -9, 0 -4 C 3 1, 7 1, 10 -4" />
        <path d="M -10 4 C -7 9, -3 9, 0 4 C 3 -1, 7 -1, 10 4" opacity="0.65" />
      </g>
    </IconShell>
  );
}
