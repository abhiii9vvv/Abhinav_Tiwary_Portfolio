import { siDocker } from "simple-icons";
import { IconShell } from "./IconShell";

export function DockerIcon({ className }: { className?: string }) {
  return <IconShell path={siDocker.path} color={siDocker.hex} label="Docker" className={className} />;
}
