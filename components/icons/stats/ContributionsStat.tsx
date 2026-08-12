import { IconShell } from "@/components/icons/tech/IconShell";

// Original glyph: a 3x3 contribution-graph grid, echoing GitHub's
// contribution heatmap without reusing any brand mark.
export function ContributionsStatIcon({ className }: { className?: string }) {
  return (
    <IconShell color="#0d9488" label="GitHub Contributions" className={className}>
      <g transform="translate(13 13)">
        {[0, 9, 18].map((y) =>
          [0, 9, 18].map((x) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="7"
              height="7"
              rx="1.5"
              fill="#ffffff"
              opacity={x === 9 && y === 9 ? 1 : x === 0 && y === 18 ? 1 : 0.45}
            />
          ))
        )}
      </g>
    </IconShell>
  );
}
