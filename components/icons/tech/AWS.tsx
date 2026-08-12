import { IconShell } from "./IconShell";

// simple-icons v16 no longer ships a generic "Amazon Web Services" brand
// mark (Amazon's icon usage terms restrict the combined AWS logo; the
// package only carries specific product icons, none of which represent
// "AWS" as a whole). Per the task's own fallback rule ("if a technology
// has no good simple-icons match ... use whichever accurately represents
// each technology"), this renders a plain monogram through the same
// IconShell plate/shadow/highlight system every other tech icon uses, so
// it stays visually consistent without freehand-inventing the AWS logotype.
export function AWSIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#232f3e" label="AWS" className={className}>
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        letterSpacing="0.5"
        fill="#ff9900"
      >
        AWS
      </text>
    </IconShell>
  );
}
