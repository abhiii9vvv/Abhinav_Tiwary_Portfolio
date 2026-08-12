import { BrandLogoShell } from "./BrandLogoShell";

export function ClaudeIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell
      src="/brand-icons/claude.svg"
      label="Claude"
      color="#da7756"
      className={className}
    />
  );
}
