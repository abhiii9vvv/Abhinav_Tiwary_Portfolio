import { siPostgresql } from "simple-icons";
import { IconShell } from "./IconShell";

export function PostgreSQLIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siPostgresql.path} color={siPostgresql.hex} label="PostgreSQL" className={className} />
  );
}
