type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl scroll-mt-20 px-6 py-24 sm:px-10 ${className ?? ""}`}
    >
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
    </section>
  );
}
