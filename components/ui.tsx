import Image from "next/image";

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHead({
  title,
  intro,
  className = "",
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <div data-reveal className={`max-w-2xl ${className}`}>
      <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/** Page-level H1 for the standalone routes (/about, /work, ...). */
export function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <header className="border-b border-line">
      <Container className="py-14 sm:py-20">
        <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">{intro}</p>
      </Container>
    </header>
  );
}

/** Real screenshot inside a light browser chrome. */
export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : undefined;
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface shadow-lift ${className}`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-sunken/60 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        {host && (
          <span className="mx-auto max-w-[60%] truncate rounded-md bg-surface px-3 py-0.5 font-mono text-[11px] text-muted">
            {host}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-sunken">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}
