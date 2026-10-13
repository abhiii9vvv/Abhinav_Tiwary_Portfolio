/**
 * Kinetic type: each word slides up out of its own mask, staggered. With
 * `onView`, the words wait until an ancestor `[data-reveal]` scrolls into view
 * (styles in globals.css, `.kt-*`). Wrap a word in asterisks (`*word*`) to set
 * it in the italic serif accent.
 */
export function Words({ text, from = 0, onView = false }: { text: string; from?: number; onView?: boolean }) {
  return (
    <>
      {text.split(" ").map((raw, i) => {
        const accent = raw.startsWith("*") && raw.replace(/[.,!?]$/, "").endsWith("*");
        const word = accent ? raw.replace(/\*/g, "") : raw;
        return (
        <span key={i}>
          {i > 0 && " "}
          <span className="kt-mask">
            <span
              className={`kt-word ${onView ? "kt-on-view" : ""} ${accent ? "kt-accent" : ""}`}
              style={{ "--i": from + i } as React.CSSProperties}
            >
              {word}
            </span>
          </span>
        </span>
        );
      })}
    </>
  );
}
