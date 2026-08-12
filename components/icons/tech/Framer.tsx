import { siFramer } from "simple-icons";
import { IconShell } from "./IconShell";

export function FramerIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siFramer.path} color={siFramer.hex} label="Framer Motion" className={className} />
  );
}
