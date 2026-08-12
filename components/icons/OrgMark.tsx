// Original glyph: a simple building/organization silhouette, used as a
// consistent placeholder mark for employers with no discoverable brand
// logo, rather than mixing inconsistent monograms across entries.
export function OrgMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="3" width="10" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="9" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 12h1M17 15h1M17 18h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
