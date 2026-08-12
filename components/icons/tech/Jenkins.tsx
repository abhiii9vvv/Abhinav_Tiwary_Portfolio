import { siJenkins } from "simple-icons";
import { IconShell } from "./IconShell";

export function JenkinsIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siJenkins.path} color={siJenkins.hex} label="Jenkins" className={className} />
  );
}
