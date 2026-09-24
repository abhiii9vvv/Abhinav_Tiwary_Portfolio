/**
 * AT monogram: the T's crossbar caps the A's apex, so the two letters share
 * one stroke. Same geometry as app/icon.svg.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="rgb(var(--accent))" />
      <g fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 30 20 11l9 19" />
        <path d="M14.6 23h10.8" />
        <path d="M9.5 11h21" />
      </g>
    </svg>
  );
}
