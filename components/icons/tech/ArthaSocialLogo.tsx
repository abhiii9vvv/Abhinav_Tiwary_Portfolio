import { BrandLogoShell } from "./BrandLogoShell";

// Real Artha Social site favicon, fetched directly from
// arthasocial.in/arthasocial_logo.svg.
export function ArthaSocialLogoIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/arthasocial.svg" label="Artha Social" color="#0a0a0a" className={className} fill />
  );
}
