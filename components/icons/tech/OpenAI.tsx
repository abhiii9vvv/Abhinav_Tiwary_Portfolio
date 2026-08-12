import { BrandLogoShell } from "./BrandLogoShell";

export function OpenAIIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell
      src="/brand-icons/openai.svg"
      label="OpenAI"
      color="#0a0a0a"
      className={className}
      invert
    />
  );
}
