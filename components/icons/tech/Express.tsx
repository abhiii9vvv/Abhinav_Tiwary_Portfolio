import { siExpress } from "simple-icons";
import { IconShell } from "./IconShell";

export function ExpressIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siExpress.path} color="#2d2d2d" label="Express.js" className={className} />
  );
}
