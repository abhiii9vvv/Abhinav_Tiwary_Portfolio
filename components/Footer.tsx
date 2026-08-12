import { profile } from "@/content/profile";
import { GithubMark, LinkedinMark, MailMark } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-lg text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-muted">Full-Stack Developer · Backend · AI</p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <GithubMark className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <LinkedinMark className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <MailMark className="h-[18px] w-[18px]" />
            </a>
          </div>
          <p className="text-sm text-ink-muted">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
