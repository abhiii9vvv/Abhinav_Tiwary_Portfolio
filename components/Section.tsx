
type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  /** Optional subtle background pattern SVG, from public/patterns/. */
  pattern?: string;
};

export function Section({ id, eyebrow, title, children, className, pattern }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-20 ${pattern ? "overflow-hidden" : ""}`}>
      {pattern && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]"
          style={{ backgroundImage: `url('${pattern}')` }}
        />
      )}
      <div className={`relative mx-auto max-w-[1600px] px-6 py-24 sm:px-10 ${className ?? ""}`}>
        <div className="mb-12">
          {eyebrow && (
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-ink-muted">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
