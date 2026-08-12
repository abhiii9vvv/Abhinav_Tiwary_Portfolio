export function ContributionsMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="17" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="17" width="4" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}
