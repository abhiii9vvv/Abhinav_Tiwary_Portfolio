import { siPaytm } from "simple-icons";
import { IconShell } from "./IconShell";

export function PaytmIcon({ className }: { className?: string }) {
  return <IconShell path={siPaytm.path} color={siPaytm.hex} label="Paytm" className={className} />;
}
