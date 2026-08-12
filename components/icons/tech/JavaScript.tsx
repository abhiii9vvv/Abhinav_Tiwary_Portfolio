import { siJavascript } from "simple-icons";
import { IconShell } from "./IconShell";

export function JavaScriptIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siJavascript.path} color={siJavascript.hex} label="JavaScript" className={className} />
  );
}
