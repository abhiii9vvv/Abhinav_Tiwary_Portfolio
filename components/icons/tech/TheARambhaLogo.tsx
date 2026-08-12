import { BrandLogoShell } from "./BrandLogoShell";

// Real The ARambha site favicon, fetched directly from
// thearambha.in/ArambhaFavicon/apple-touch-icon.png.
export function TheARambhaLogoIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/thearambha.png" label="The ARambha" color="#c9962c" className={className} fill />
  );
}
