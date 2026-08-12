import { siGithub } from "simple-icons";
import { IconShell } from "@/components/icons/tech/IconShell";

export function GitHubStatIcon({ className }: { className?: string }) {
  return (
    <IconShell path={siGithub.path} color={siGithub.hex} label="GitHub" className={className} />
  );
}
