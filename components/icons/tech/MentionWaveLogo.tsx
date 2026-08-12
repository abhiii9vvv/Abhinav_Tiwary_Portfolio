import { BrandLogoShell } from "./BrandLogoShell";

// Real MentionWave site favicon, fetched directly from
// mentionwave.vercel.app/favicon.ico.
export function MentionWaveLogoIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell src="/brand-icons/mentionwave.png" label="MentionWave" color="#1e3a8a" className={className} fill />
  );
}
