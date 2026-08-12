import { IconShell } from "./IconShell";

// No simple-icons entry exists for NPTEL/IIT Kharagpur. Renders a plain
// monogram through the shared IconShell, the same fallback pattern
// already used for AWS.
export function NptelIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#8a1c1c" label="NPTEL, IIT Kharagpur" className={className}>
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="12"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        NPTEL
      </text>
    </IconShell>
  );
}
