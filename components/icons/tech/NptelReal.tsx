import { BrandLogoShell } from "./BrandLogoShell";

// Real NPTEL emblem, sourced via Brandfetch (brandfetch.com/nptel.ac.in),
// cropped to the circular mark and background-removed with rembg. Rendered
// as a static image asset via BrandLogoShell since this is a multi-color
// trademarked logo, not simple-icons monochrome path data.
export function NptelRealIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/nptel.png" label="NPTEL, IIT Kharagpur" color="#8a1c1c" className={className} fill />
  );
}
