import { siNodedotjs } from "simple-icons";
import { IconShell } from "./IconShell";

export function NodeJsIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siNodedotjs.path} color={siNodedotjs.hex} label="Node.js" className={className} />
  );
}
