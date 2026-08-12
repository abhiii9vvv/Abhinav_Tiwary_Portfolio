import { BrandLogoShell } from "./BrandLogoShell";

// Real AWS "Smile" logo, sourced from Wikimedia Commons
// (File:Amazon_Web_Services_2025.svg, PD-textlogo). Rendered as a static
// image asset via BrandLogoShell rather than inline path data, since this
// is a trademarked multi-path logo, not simple-icons monochrome data.
export function AWSRealIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/aws-wiki.svg" label="AWS" color="#232f3e" className={className} />
  );
}
