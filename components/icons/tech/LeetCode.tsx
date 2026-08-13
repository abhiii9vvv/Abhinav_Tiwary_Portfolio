import { BrandLogoShell } from "./BrandLogoShell";

export function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <BrandLogoShell
      src="/brand-icons/leetcode.svg"
      label="LeetCode"
      color="#ffa116"
      className={className}
    />
  );
}
