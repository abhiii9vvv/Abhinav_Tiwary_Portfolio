import { siFirebase } from "simple-icons";
import { IconShell } from "./IconShell";

export function FirebaseIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siFirebase.path} color={siFirebase.hex} label="Firebase" className={className} />
  );
}
