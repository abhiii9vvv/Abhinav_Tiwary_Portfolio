import { siGnubash } from "simple-icons";
import { IconShell } from "./IconShell";

export function BashIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siGnubash.path} color={siGnubash.hex} label="Bash" className={className} />
  );
}
