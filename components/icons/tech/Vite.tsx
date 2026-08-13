import { siVite } from "simple-icons";
import { IconShell } from "./IconShell";

export function ViteIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siVite.path} color={siVite.hex} label="Vite" className={className} />
  );
}
