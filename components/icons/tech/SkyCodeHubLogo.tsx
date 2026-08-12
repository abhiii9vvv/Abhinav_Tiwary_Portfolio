import { BrandLogoShell } from "./BrandLogoShell";

// Real SkyCodeHub site favicon, fetched directly from
// app.skycodehub.com/favicon.svg.
export function SkyCodeHubLogoIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/skycodehub.svg" label="SkyCodeHub" color="#3b82f6" className={className} fill />
  );
}
