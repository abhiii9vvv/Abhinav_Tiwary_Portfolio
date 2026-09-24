import { brandFor, isInkBrand } from "@/lib/brands";

/**
 * Flat brand mark in its official color. Near-black brands (Next.js, GitHub,
 * Vercel, ...) get the `brand-ink` class, which swaps them to the text color
 * in dark mode so they never disappear against the background.
 */
export function BrandIcon({
  name,
  className = "h-5 w-5",
  onLight = false,
}: {
  name: string;
  className?: string;
  /** Set when the icon always sits on a white tile, so it keeps brand color in dark mode. */
  onLight?: boolean;
}) {
  const brand = brandFor(name);
  if (!brand) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} shrink-0 ${!onLight && isInkBrand(brand.hex) ? "brand-ink" : ""}`}
      style={{ color: `#${brand.hex}` }}
      fill="currentColor"
      role="img"
      aria-label={brand.title}
    >
      <path d={brand.path} />
    </svg>
  );
}

export function hasBrand(name: string) {
  return Boolean(brandFor(name));
}
