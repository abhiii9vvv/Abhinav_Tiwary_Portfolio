import { siVercel } from "simple-icons";
import { IconShell } from "./IconShell";

export function VercelIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siVercel.path} color={siVercel.hex} label="Vercel Blob" className={className} />
  );
}
