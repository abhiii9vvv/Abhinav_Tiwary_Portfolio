import { siNextdotjs } from "simple-icons";
import { IconShell } from "./IconShell";

export function NextJsIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siNextdotjs.path} color="#1a1a1a" label="Next.js" className={className} />
  );
}
