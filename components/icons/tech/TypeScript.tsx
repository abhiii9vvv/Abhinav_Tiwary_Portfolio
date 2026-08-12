import { siTypescript } from "simple-icons";
import { IconShell } from "./IconShell";

export function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siTypescript.path} color={siTypescript.hex} label="TypeScript" className={className} />
  );
}
