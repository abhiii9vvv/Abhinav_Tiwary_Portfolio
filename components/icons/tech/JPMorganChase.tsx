import { IconShell } from "./IconShell";

// No simple-icons entry exists for JPMorgan Chase (financial institution
// logos are generally excluded from the icon-pack ecosystem for trademark
// reasons). Renders a plain monogram through the shared IconShell, the
// same fallback pattern already used for AWS.
export function JPMorganChaseIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#0f2a5c" label="JPMorgan Chase" className={className}>
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="0.3"
        fill="#ffffff"
      >
        JPM
      </text>
    </IconShell>
  );
}
