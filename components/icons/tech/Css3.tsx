import { siCss } from "simple-icons";
import { IconShell } from "./IconShell";

export function Css3Icon({ className }: { className?: string }) {
  return (
    <IconShell path={siCss.path} color={siCss.hex} label="CSS3" className={className} />
  );
}
