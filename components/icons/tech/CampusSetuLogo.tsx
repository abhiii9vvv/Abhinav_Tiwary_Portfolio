import { BrandLogoShell } from "./BrandLogoShell";

// Real CampusSetu site favicon, fetched directly from
// campussetu.in/apple-touch-icon.png.
export function CampusSetuLogoIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/campussetu.png" label="CampusSetu" color="#111827" className={className} fill />
  );
}
