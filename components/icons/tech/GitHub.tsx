import { BrandLogoShell } from "./BrandLogoShell";

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell
      src="/brand-icons/github.svg"
      label="GitHub"
      color="#181717"
      className={className}
      invert
    />
  );
}
