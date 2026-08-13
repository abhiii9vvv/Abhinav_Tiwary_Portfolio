import { BrandLogoShell } from "./BrandLogoShell";

// Real JPMorgan Chase logo, sourced from Wikimedia Commons
// (File:Logo_of_JPMorganChase_2024.svg). Rendered as a static image asset
// via BrandLogoShell since this is a trademarked wordmark, not
// simple-icons monochrome path data. The source SVG has no explicit
// fill, so it renders black by default; invert is not needed since it
// already reads on the shell's white backing circle.
export function JPMorganChaseRealIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/jpmorganchase.svg" label="JPMorgan Chase" color="#0f2a5c" className={className} fill contain />
  );
}
