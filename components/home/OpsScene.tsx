/**
 * Animated ops scene: a Linux terminal running health checks, a server rack
 * with live status lights, and a monitoring panel (CPU graph drawing itself,
 * a scrolling request log). Pure SVG + CSS keyframes (see globals.css,
 * `.ops-*`), so it ships zero JavaScript and freezes cleanly under
 * prefers-reduced-motion.
 */

const terminal: { text: string; tone: "cmd" | "ok" | "out" }[] = [
  { text: "$ systemctl status nginx", tone: "cmd" },
  { text: "● nginx.service - active (running)", tone: "ok" },
  { text: "$ uptime", tone: "cmd" },
  { text: "up 42 days,  load average: 0.21 0.18", tone: "out" },
  { text: "$ df -h /", tone: "cmd" },
  { text: "/dev/nvme0n1p1   40G   18G   45%  /", tone: "out" },
  { text: "$ journalctl -u app -f", tone: "cmd" },
  { text: "-- following logs --", tone: "out" },
];

const racks = [
  { name: "web-01", blink: "0s" },
  { name: "web-02", blink: "0.6s" },
  { name: "db-01", blink: "1.1s" },
  { name: "cache-01", blink: "0.3s" },
];

const logs = [
  { code: "200", text: "/health   11ms" },
  { code: "200", text: "/api/users 48ms" },
  { code: "304", text: "/static    3ms" },
  { code: "200", text: "/login    96ms" },
  { code: "WARN", text: "db retry 1/3" },
  { code: "200", text: "/orders   52ms" },
  { code: "200", text: "/health   12ms" },
  { code: "201", text: "/tickets  74ms" },
];

const LOG_LINE = 20;
const cpu =
  "M44 402 L74 396 L104 399 L134 380 L164 386 L194 360 L224 371 L254 352 L284 366 L314 344 L344 356 L374 338 L400 348";

export function OpsScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 460"
      className={className}
      role="img"
      aria-label="Illustration: a Linux terminal running health checks, a server rack with status lights, and a monitoring dashboard showing all systems operational"
    >
      <defs>
        <linearGradient id="ops-cpu-fill" x1="0" y1="330" x2="0" y2="410" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E95420" stopOpacity="0.28" />
          <stop offset="1" stopColor="#E95420" stopOpacity="0" />
        </linearGradient>
        <clipPath id="ops-log-clip">
          <rect x="424" y="324" width="180" height="98" />
        </clipPath>
        {/* Log lines fade in at the bottom and out at the top instead of being cut. */}
        <linearGradient id="ops-log-fade" x1="0" y1="324" x2="0" y2="422" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.25" stopColor="#fff" />
          <stop offset="0.75" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="ops-log-mask">
          <rect x="424" y="324" width="180" height="98" fill="url(#ops-log-fade)" />
        </mask>
      </defs>

      {/* ── Connectors: data flows terminal → rack → monitor ── */}
      <g className="ops-line-stroke" fill="none" strokeWidth="2">
        <path d="M364 132 C388 132 388 92 412 92" />
        <path d="M514 260 L514 284" />
        <path d="M194 260 L194 284" />
      </g>
      <circle r="4" fill="#E95420" className="ops-packet">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M364 132 C388 132 388 92 412 92" />
      </circle>

      {/* ── Terminal ── */}
      <g>
        <rect x="24" y="24" width="340" height="236" rx="14" fill="#181614" />
        <rect x="24.5" y="24.5" width="339" height="235" rx="13.5" fill="none" stroke="#ffffff" strokeOpacity="0.08" />
        <circle cx="44" cy="42" r="4.5" fill="#ff5f57" />
        <circle cx="60" cy="42" r="4.5" fill="#febc2e" />
        <circle cx="76" cy="42" r="4.5" fill="#28c840" />
        <text x="194" y="46" textAnchor="middle" className="ops-mono" fontSize="11" fill="#8f8a84">
          abhinav@prod-01: ~
        </text>
        <line x1="24" y1="58" x2="364" y2="58" stroke="#ffffff" strokeOpacity="0.07" />
        {terminal.map((l, i) => (
          <text
            key={l.text}
            x="40"
            y={82 + i * 21}
            fontSize="13"
            className="ops-mono ops-type"
            style={{ animationDelay: `${i * 0.75}s` }}
            fill={l.tone === "ok" ? "#4ade80" : l.tone === "cmd" ? "#f3f1ee" : "#a49f98"}
          >
            {l.tone === "cmd" ? (
              <>
                <tspan fill="#ff8a5c">$</tspan>
                {l.text.slice(1)}
              </>
            ) : (
              l.text
            )}
          </text>
        ))}
        <rect x="40" y={82 + terminal.length * 21 - 11} width="8" height="14" fill="#ff8a5c" className="ops-cursor" />
      </g>

      {/* ── Server rack ── */}
      <g>
        <rect x="412" y="24" width="204" height="236" rx="14" className="ops-surface ops-line-stroke" strokeWidth="1" />
        {racks.map((r, i) => {
          const y = 42 + i * 52;
          return (
            <g key={r.name}>
              <rect x="428" y={y} width="172" height="42" rx="7" className="ops-sunken" />
              <circle cx="448" cy={y + 21} r="5" fill="#22c55e" className="ops-led" style={{ animationDelay: r.blink }} />
              <text x="464" y={y + 25.5} fontSize="13" className="ops-mono ops-ink-fill">
                {r.name}
              </text>
              <text x="588" y={y + 25.5} textAnchor="end" fontSize="12" className="ops-mono ops-ok-fill">
                healthy
              </text>
            </g>
          );
        })}
      </g>

      {/* ── Monitoring panel ── */}
      <g>
        <rect x="24" y="284" width="592" height="152" rx="14" className="ops-surface ops-line-stroke" strokeWidth="1" />
        <text x="44" y="310" fontSize="12.5" className="ops-mono ops-muted-fill">
          cpu · web-01
        </text>
        <text x="428" y="310" fontSize="12.5" className="ops-mono ops-muted-fill">
          requests
        </text>
        <circle cx="586" cy="306" r="4" fill="#22c55e" />
        <circle cx="586" cy="306" r="4" fill="#22c55e" className="ops-ping" />
        <text x="576" y="310" textAnchor="end" fontSize="12" className="ops-ok-fill">
          all ok
        </text>

        {/* grid + threshold */}
        {[340, 370, 400].map((y) => (
          <line key={y} x1="44" y1={y} x2="400" y2={y} className="ops-line-stroke" strokeDasharray="2 5" />
        ))}
        <line x1="44" y1="330" x2="400" y2="330" stroke="#E95420" strokeOpacity="0.5" strokeDasharray="6 5" />
        <text x="400" y="325" textAnchor="end" fontSize="10" className="ops-mono" fill="#E95420">
          alert 80%
        </text>

        {/* cpu line: area + stroke that draws itself */}
        <path d={`${cpu} L400 412 L44 412 Z`} fill="url(#ops-cpu-fill)" className="ops-area" />
        <path
          d={cpu}
          fill="none"
          stroke="#E95420"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength={1}
          className="ops-draw"
        />
        <circle cx="400" cy="348" r="4.5" fill="#E95420" className="ops-head" />

        {/* request log */}
        <line x1="416" y1="318" x2="416" y2="422" className="ops-line-stroke" />
        <g clipPath="url(#ops-log-clip)" mask="url(#ops-log-mask)">
          <g className="ops-scroll" style={{ ["--ops-log-h" as string]: `${logs.length * LOG_LINE}px` }}>
            {[...logs, ...logs].map((l, i) => (
              <text key={i} x="428" y={344 + i * LOG_LINE} fontSize="12" className="ops-mono">
                <tspan fill={l.code === "WARN" ? "#f59e0b" : l.code.startsWith("2") ? "rgb(var(--ok))" : "#8f8a84"}>
                  {l.code.padEnd(5, " ")}
                </tspan>
                <tspan className="ops-muted-fill">{l.text}</tspan>
              </text>
            ))}
          </g>
        </g>
      </g>
    </svg>
  );
}
