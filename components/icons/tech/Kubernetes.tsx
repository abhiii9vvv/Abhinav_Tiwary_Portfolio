import { siKubernetes } from "simple-icons";
import { IconShell } from "./IconShell";

export function KubernetesIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siKubernetes.path} color={siKubernetes.hex} label="Kubernetes" className={className} />
  );
}
