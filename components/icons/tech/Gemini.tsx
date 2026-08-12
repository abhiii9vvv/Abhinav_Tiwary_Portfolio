import { BrandLogoShell } from "./BrandLogoShell";

export function GeminiIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell
      src="/brand-icons/gemini.svg"
      label="Gemini"
      color="#1c69ff"
      className={className}
    />
  );
}
