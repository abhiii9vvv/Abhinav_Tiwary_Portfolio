import { siHtml5 } from "simple-icons";
import { IconShell } from "./IconShell";

export function Html5Icon({ className }: { className?: string }) {
  return (
    <IconShell path={siHtml5.path} color={siHtml5.hex} label="HTML5" className={className} />
  );
}
