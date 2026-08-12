import { BrandLogoShell } from "./BrandLogoShell";

// Real Unessa Foundation site favicon, fetched directly from
// unessafoundation.org.
export function UnessaLogoIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/unessa.png" label="Unessa Foundation" color="#0f766e" className={className} fill />
  );
}
