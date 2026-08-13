export function BackendMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="0.9" fill="currentColor" />
      <circle cx="7" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}
