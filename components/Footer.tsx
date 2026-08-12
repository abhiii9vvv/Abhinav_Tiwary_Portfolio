import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 text-sm text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.phone}</p>
      </div>
    </footer>
  );
}
