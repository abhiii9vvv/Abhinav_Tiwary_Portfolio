import Image from "next/image";

/**
 * Shell for real third-party brand logos that ship as standalone static
 * SVG files (from @lobehub/icons-static-svg) rather than inline path data.
 * Mirrors IconShell's plate/shadow/highlight treatment in plain CSS so the
 * logo renders as an opaque image asset, never re-derived or inlined by
 * hand, while still fitting the same visual "sticker" system as the rest
 * of the tech icon set.
 */
export function BrandLogoShell({
  src,
  label,
  color,
  className,
  invert = false,
  fill = false,
}: {
  src: string;
  label: string;
  color: string;
  className?: string;
  invert?: boolean;
  /** When true, the logo image fills the whole plate directly instead of
   * sitting on a small inner white circle. Use for real site favicons/logos
   * that already read clearly at full size and don't need the extra
   * contrast backing (e.g. fetched site logos, as opposed to small
   * monochrome brand marks like OpenAI/Claude/Gemini). */
  fill?: boolean;
}) {
  if (fill) {
    return (
      <span
        className={`relative flex items-center justify-center overflow-hidden rounded-[11px] bg-white shadow-[0_2.5px_2.2px_rgba(0,0,0,0.26)] ${className ?? ""}`}
        role="img"
        aria-label={label}
      >
        <Image src={src} alt="" width={48} height={48} className="h-full w-full object-cover" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[11px] ring-1 ring-inset ring-black/10"
        />
      </span>
    );
  }

  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden rounded-[11px] shadow-[0_2.5px_2.2px_rgba(0,0,0,0.26)] ${className ?? ""}`}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color} 55%, rgba(0,0,0,0.24) 100%)`,
      }}
      role="img"
      aria-label={label}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[11px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.32), rgba(255,255,255,0))",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[10.5px] ring-1 ring-inset ring-white/10"
      />
      <span
        aria-hidden="true"
        className="relative flex h-[78%] w-[78%] items-center justify-center rounded-full bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.18)]"
      >
        <Image
          src={src}
          alt=""
          width={36}
          height={36}
          className="h-[82%] w-[82%] object-contain"
          style={invert ? { filter: "brightness(0)" } : undefined}
        />
      </span>
    </span>
  );
}
