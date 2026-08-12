// Deterministic rainbow palette: every tech-tag string maps to a fixed,
// distinct bright color regardless of where it appears, based on a simple
// string hash into a fixed hue wheel. No grouping logic, every tag gets its
// own point on the wheel.
const PALETTE = [
  "#e11d48", "#ea580c", "#d97706", "#ca8a04", "#65a30d",
  "#16a34a", "#059669", "#0d9488", "#0891b2", "#0284c7",
  "#2563eb", "#4f46e5", "#7c3aed", "#9333ea", "#c026d3",
  "#db2777",
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function colorForTag(tag: string): string {
  return PALETTE[hashString(tag) % PALETTE.length];
}
