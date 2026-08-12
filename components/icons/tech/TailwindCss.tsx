import { siTailwindcss } from "simple-icons";
import { IconShell } from "./IconShell";

export function TailwindCssIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siTailwindcss.path} color={siTailwindcss.hex} label="Tailwind CSS" className={className} />
  );
}
