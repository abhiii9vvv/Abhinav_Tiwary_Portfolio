import { siRedis } from "simple-icons";
import { IconShell } from "./IconShell";

export function RedisIcon({ className }: { className?: string }) {
  return <IconShell path={siRedis.path} color={siRedis.hex} label="Redis" className={className} />;
}
