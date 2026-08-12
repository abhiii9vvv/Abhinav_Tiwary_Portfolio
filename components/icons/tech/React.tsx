import { siReact } from "simple-icons";
import { IconShell } from "./IconShell";

export function ReactIcon({ className }: { className?: string }) {
  return <IconShell path={siReact.path} color={siReact.hex} label="React" className={className} />;
}
