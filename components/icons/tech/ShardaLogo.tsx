import { BrandLogoShell } from "./BrandLogoShell";

// Real Sharda University crest, sourced from Wikipedia
// (File:Sharda_University_logo_no_wordmark.png).
export function ShardaLogoIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/sharda.png" label="Sharda University" color="#1e3a8a" className={className} fill />
  );
}
