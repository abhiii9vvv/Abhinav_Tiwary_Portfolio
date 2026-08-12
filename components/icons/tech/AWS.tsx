"use client";

import { useId } from "react";

// simple-icons v16 no longer ships a generic "Amazon Web Services" brand
// mark (Amazon's icon usage terms restrict the combined AWS logo; the
// package only carries specific product icons, none of which represent
// "AWS" as a whole). Per the task's own fallback rule ("if a technology
// has no good simple-icons match ... use whichever accurately represents
// each technology"), this renders a plain monogram inside the exact same
// IconShell plate/shadow/highlight system so it stays visually consistent
// with every other tech icon, without freehand-inventing the AWS logotype.
export function AWSIcon({ className }: { className?: string }) {
  const reactId = useId();
  const uid = reactId.replace(/:/g, "");
  const plateGradientId = `icon-plate-${uid}`;
  const shineId = `icon-shine-${uid}`;
  const shadowId = `icon-shadow-${uid}`;
  const base = "#232f3e";

  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="AWS">
      <defs>
        <linearGradient id={plateGradientId} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={base} stopOpacity="1" />
          <stop offset="55%" stopColor={base} stopOpacity="0.94" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.24" />
        </linearGradient>
        <linearGradient id={shineId} x1="24" y1="4" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={shadowId} x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.2" floodColor="#000000" floodOpacity="0.26" />
        </filter>
      </defs>

      <g filter={`url(#${shadowId})`}>
        <rect x="4" y="4" width="40" height="40" rx="11" fill={`url(#${plateGradientId})`} />
      </g>
      <rect x="4" y="4" width="40" height="18" rx="11" fill={`url(#${shineId})`} />
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

      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        letterSpacing="0.5"
        fill="#ff9900"
      >
        AWS
      </text>
    </svg>
  );
}
