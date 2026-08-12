import { siLinux } from "simple-icons";
import { IconShell } from "./IconShell";

export function LinuxIcon({ className }: { className?: string }) {
  return <IconShell path={siLinux.path} color="#1a1a1a" label="Linux" className={className} />;
}
