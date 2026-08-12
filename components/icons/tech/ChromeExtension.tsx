import { siGooglechrome } from "simple-icons";
import { IconShell } from "./IconShell";

export function ChromeExtensionIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siGooglechrome.path} color={siGooglechrome.hex} label="Chrome Extension" className={className} />
  );
}
