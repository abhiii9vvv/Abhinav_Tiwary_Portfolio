import { siPython } from "simple-icons";
import { IconShell } from "./IconShell";

export function PythonIcon({ className }: { className?: string }) {
  return <IconShell path={siPython.path} color={siPython.hex} label="Python" className={className} />;
}
