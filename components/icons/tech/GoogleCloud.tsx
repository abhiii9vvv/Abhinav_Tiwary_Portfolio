import { siGooglecloud } from "simple-icons";
import { IconShell } from "./IconShell";

export function GoogleCloudIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siGooglecloud.path} color={siGooglecloud.hex} label="Google Cloud" className={className} />
  );
}
