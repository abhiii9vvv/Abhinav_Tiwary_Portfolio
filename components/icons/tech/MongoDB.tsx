import { siMongodb } from "simple-icons";
import { IconShell } from "./IconShell";

export function MongoDBIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siMongodb.path} color={siMongodb.hex} label="MongoDB" className={className} />
  );
}
