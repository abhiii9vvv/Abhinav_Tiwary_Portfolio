"use client";

import { useId, type ReactNode } from "react";

/**
 * Shared 3D "sticker" shell for real tech-brand icons.
 *
 * The brand glyph (path data sourced from the `simple-icons` package) is
 * rendered on top of a custom-built backing plate: a soft directional
 * gradient, a drop shadow, and a top-edge highlight to imply a single
 * light source from the top-left. Every technology icon reuses this exact
 * shell so the whole set reads as one deliberate, consistent system, one
 * canvas, one light source, one corner-radius language, one shadow
 * treatment, only the plate color and the glyph inside change per brand.
 *
 * Gradient and filter ids are derived from React's useId() so multiple
 * instances rendered on the same page never collide.
 */
type IconShellProps =
  | {
      /** SVG path `d` string for the brand glyph, sourced from simple-icons. */
      path: string;
      /** Brand hex color (with or without leading #). */
      color: string;
      /** Accessible label for the icon. */
      label: string;
      className?: string;
      children?: undefined;
    }
  | {
      path?: undefined;
      /** Brand hex color (with or without leading #). */
      color: string;
      /** Accessible label for the icon. */
      label: string;
      className?: string;
      /** Fallback glyph content (e.g. a monogram) when no simple-icons path exists. */
      children: ReactNode;
    };

export function IconShell({ path, color, label, className, children }: IconShellProps) {
  const reactId = useId();
  const uid = reactId.replace(/:/g, "");
  const plateGradientId = `icon-plate-${uid}`;
  const shineId = `icon-shine-${uid}`;
  const shadowId = `icon-shadow-${uid}`;
  const base = color.startsWith("#") ? color : `#${color}`;

  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label={label}>
      <defs>
        {/* Plate gradient: light hits top-left, deepens toward bottom-right */}
        <linearGradient id={plateGradientId} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={base} stopOpacity="1" />
          <stop offset="55%" stopColor={base} stopOpacity="0.94" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.24" />
        </linearGradient>
        {/* Soft top-edge highlight for a beveled, dimensional top */}
        <linearGradient id={shineId} x1="24" y1="4" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={shadowId} x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.2" floodColor="#000000" floodOpacity="0.26" />
        </filter>
      </defs>

      {/* Backing plate */}
      <g filter={`url(#${shadowId})`}>
        <rect x="4" y="4" width="40" height="40" rx="11" fill={`url(#${plateGradientId})`} />
      </g>

      {/* Top-edge highlight */}
      <rect x="4" y="4" width="40" height="18" rx="11" fill={`url(#${shineId})`} />

      {/* Inner hairline bevel for a crisp, machined edge */}
      <rect
        x="4.5"
        y="4.5"
        width="39"
        height="39"
        rx="10.5"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.12"
        strokeWidth="1"
      />

      {/* Real brand glyph (simple-icons path data), centered and scaled onto the plate.
          simple-icons paths are drawn on a 24x24 grid; we place them in a 26x26
          box centered on the 48x48 canvas, in white for strong contrast against
          the brand-colored plate. When no path is supplied (no accurate
          simple-icons match exists), the caller's children render instead
          (e.g. a plain monogram), still on top of the same shell. */}
      {path ? (
        <g transform="translate(11 11) scale(1.0833)">
          <path d={path} fill="#ffffff" />
        </g>
      ) : (
        children
      )}
    </svg>
  );
}
