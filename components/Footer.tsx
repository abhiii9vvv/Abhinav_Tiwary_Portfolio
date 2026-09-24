import Link from "next/link";
import { profile } from "@/content/profile";
import { navLinks } from "@/lib/nav";
import { Container } from "@/components/ui";
import { PaletteHint } from "@/components/PaletteHint";

export function Footer() {
  return (
    <footer className="py-10">
      <Container className="flex flex-col gap-6 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-ink">{profile.name}</p>
          <p className="mt-1">
            {profile.role}. Based in {profile.location}.
          </p>
          <p className="mt-1 text-xs">Also spelled Abhinav Tiwari.</p>
          <p className="mt-3 flex gap-4">
            <a href={profile.github} rel="me noopener noreferrer" target="_blank" className="hover:text-ink">
              GitHub
            </a>
            <a href={profile.linkedin} rel="me noopener noreferrer" target="_blank" className="hover:text-ink">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} rel="me" className="hover:text-ink">
              Email
            </a>
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
        <PaletteHint />
      </Container>
    </footer>
  );
}
