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
}: {
  src: string;
  label: string;
  color: string;
  className?: string;
  invert?: boolean;
}) {
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
        className="relative flex h-[62%] w-[62%] items-center justify-center rounded-full bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.18)]"
      >
        <Image
          src={src}
          alt=""
          width={28}
          height={28}
          className="h-[68%] w-[68%] object-contain"
          style={invert ? { filter: "brightness(0)" } : undefined}
        />
      </span>
    </span>
  );
}
