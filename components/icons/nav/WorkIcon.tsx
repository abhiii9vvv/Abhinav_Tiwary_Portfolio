export function WorkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="4.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="14.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="14.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
