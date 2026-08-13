import { siGit } from "simple-icons";
import { IconShell } from "./IconShell";

export function GitIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siGit.path} color={siGit.hex} label="Git" className={className} />
  );
}
