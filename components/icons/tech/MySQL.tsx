import { siMysql } from "simple-icons";
import { IconShell } from "./IconShell";

export function MySQLIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siMysql.path} color={siMysql.hex} label="MySQL" className={className} />
  );
}
