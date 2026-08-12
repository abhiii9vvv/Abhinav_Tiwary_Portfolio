import { siOpenjdk } from "simple-icons";
import { IconShell } from "./IconShell";

// simple-icons has no separate "Java" brand mark (Oracle's Java coffee-cup
// logo is not distributed in the library); siOpenjdk (the OpenJDK duke/flame
// mark) is the closest accurately-licensed logo representing the Java
// platform and is used here as the visual stand-in.
export function JavaIcon({ className }: { className?: string }) {
  return <IconShell path={siOpenjdk.path} color="#2d2320" label="Java" className={className} />;
}
