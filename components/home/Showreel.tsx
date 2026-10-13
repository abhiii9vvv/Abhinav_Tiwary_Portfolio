"use client";

import { useEffect, useRef, useState } from "react";
import { Container, SectionHead } from "@/components/ui";
import { profile } from "@/content/profile";

/**
 * A 15-second showreel, "a commit becomes a container becomes a cloud".
 * Six tiles carry the whole piece: they are the letters of DEPLOY, then
 * containers, a 3D stack, a traffic chart, a server rack, and finally the
 * underline beneath the end title, which collapses into the caret the reel
 * opens on, so it loops.
 *
 * Every style is computed from time in `seek(t)` (no CSS animations, no
 * state between frames). 120 BPM: one beat every 0.5s. Easing is exponential,
 * never bouncy.
 */

const W = 1600;
const H = 900;
const LENGTH = 15;
const BEAT = 0.5;

const PAPER = [243, 241, 238];
const ACCENT = [233, 84, 32];
const ROW = [44, 41, 38];

const LETTERS = ["D", "E", "P", "L", "O", "Y"];
const BOXES = ["web", "api", "worker", "db", "cache", "queue"];
const HOSTS = ["web-01", "web-02", "api-01", "worker-01", "db-01", "cache-01"];
const BARS = [220, 300, 260, 380, 330, 430];

type Rgba = number[];
type Tile = { x: number; y: number; w: number; h: number; r: number; c: Rgba; letter: number; box: number; host: number };

const base = { r: 0, letter: 0, box: 0, host: 0 };

/** The six layouts the tiles move between, in order. Coordinates are centers. */
const layouts: ((i: number) => Tile)[] = [
  // caret: all six stacked into one bar
  () => ({ ...base, x: 800, y: 450, w: 12, h: 150, r: 3, c: [...ACCENT, 1] }),
  // letters
  (i) => ({ ...base, x: 250 + i * 186 + 85, y: 440, w: 170, h: 210, c: [...PAPER, 0], letter: 1 }),
  // squares
  (i) => ({ ...base, x: 250 + i * 186 + 85, y: 440, w: 150, h: 150, r: 22, c: [...PAPER, 1] }),
  // container grid, 3 x 2
  (i) => ({ ...base, x: 516 + (i % 3) * 284, y: i < 3 ? 363 : 537, w: 260, h: 150, r: 18, c: [...PAPER, 1], box: 1 }),
  // bar chart
  (i) => ({
    ...base,
    x: 350 + i * 180,
    y: 660 - BARS[i] / 2,
    w: 120,
    h: BARS[i],
    r: 12,
    c: i === 5 ? [...ACCENT, 1] : [...PAPER, 1],
  }),
  // server rack rows
  (i) => ({ ...base, x: 800, y: 250 + i * 80, w: 900, h: 64, r: 14, c: [...ROW, 1], host: 1 }),
  // underline under the end title
  () => ({ ...base, x: 800, y: 580, w: 880, h: 12, r: 6, c: [...ACCENT, 1] }),
  // back to the caret, to loop
  () => ({ ...base, x: 800, y: 450, w: 12, h: 150, r: 3, c: [...ACCENT, 1] }),
];

/** Transition into layout k+1: [start(i), duration]. */
const transitions: [(i: number) => number, number][] = [
  [(i) => 0.5 + i * 0.25, 0.45], // caret -> letters, one per half beat
  [(i) => 3.0 + i * 0.04, 0.45], // letters -> squares
  [(i) => 3.5 + i * 0.05, 0.6], // squares -> containers
  [(i) => 6.0 + i * 0.06, 0.7], // containers -> bars
  [(i) => 9.0 + i * 0.06, 0.6], // bars -> rack
  [(i) => 12.0 + i * 0.04, 0.6], // rack -> underline
  [() => 14.4, 0.5], // underline -> caret
];

const scenes = [
  [0, "01 — commit"],
  [3, "02 — package"],
  [4.5, "03 — stack"],
  [6, "04 — measure"],
  [9, "05 — operate"],
  [12, "06 — ship"],
] as const;

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const expoOut = (p: number) => (p >= 1 ? 1 : 1 - Math.pow(2, -10 * p));
const expoInOut = (p: number) =>
  p <= 0 ? 0 : p >= 1 ? 1 : p < 0.5 ? Math.pow(2, 20 * p - 10) / 2 : (2 - Math.pow(2, -20 * p + 10)) / 2;
const lerp = (a: number, b: number, p: number) => a + (b - a) * p;
const span = (t: number, a: number, b: number) => clamp((t - a) / (b - a));

function tileAt(i: number, t: number): { s: Tile; blur: number } {
  let s = layouts[0](i);
  let blur = 0;
  for (let k = 0; k < transitions.length; k++) {
    const [start, dur] = transitions[k];
    const t0 = start(i);
    if (t < t0) break;
    const raw = clamp((t - t0) / dur);
    const p = expoInOut(raw);
    const a = layouts[k](i);
    const b = layouts[k + 1](i);
    s = {
      x: lerp(a.x, b.x, p),
      y: lerp(a.y, b.y, p),
      w: lerp(a.w, b.w, p),
      h: lerp(a.h, b.h, p),
      r: lerp(a.r, b.r, p),
      c: a.c.map((v, j) => lerp(v, b.c[j], p)),
      letter: lerp(a.letter, b.letter, p),
      box: lerp(a.box, b.box, p),
      host: lerp(a.host, b.host, p),
    };
    // Blur follows speed: strongest mid-move, gone at rest.
    blur = raw > 0 && raw < 1 ? Math.sin(raw * Math.PI) * 3 : 0;
  }
  return { s, blur };
}

export function Showreel() {
  const frame = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const world = useRef<HTMLDivElement>(null);
  const tiles = useRef<(HTMLDivElement | null)[]>([]);
  const parts = useRef<Record<string, HTMLElement | null>>({});
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const clock = useRef({ t: 0, last: 0 });

  const part = (key: string) => (el: HTMLElement | null) => {
    parts.current[key] = el;
  };

  function seek(t: number) {
    const q = parts.current;
    const set = (key: string, css: Partial<CSSStyleDeclaration>) => {
      const el = q[key];
      if (el) Object.assign(el.style, css);
    };

    // Tiles
    tiles.current.forEach((el, i) => {
      if (!el) return;
      const { s, blur } = tileAt(i, t);
      // 2D -> 3D: the container grid tips into an isometric stack.
      const lift = span(t, 4.5, 5.2) - span(t, 5.6, 6.3);
      const depth = expoInOut(clamp(lift)) * (30 + ((i * 37) % 3) * 34);
      el.style.width = `${s.w}px`;
      el.style.height = `${s.h}px`;
      el.style.transform = `translate3d(${s.x - s.w / 2}px, ${s.y - s.h / 2}px, ${depth}px)`;
      el.style.borderRadius = `${s.r}px`;
      el.style.background = `rgba(${s.c.join(",")})`;
      el.style.boxShadow = depth > 0 ? `0 ${depth * 0.6}px 0 rgb(${ACCENT.join(",")})` : "none";
      el.style.filter = blur > 0.2 ? `blur(${blur.toFixed(2)}px)` : "none";
      const [letter, box, host] = el.children as unknown as HTMLElement[];
      letter.style.opacity = String(s.letter);
      box.style.opacity = String(s.box);
      host.style.opacity = String(s.host);
      // Rack status lights come on one per half beat.
      const led = host.firstElementChild as HTMLElement;
      led.style.opacity = String(span(t, 9.7 + i * 0.25, 9.8 + i * 0.25));
      // Letters arrive from below, out of the caret.
      const rise = 1 - expoOut(span(t, 0.5 + i * 0.25, 0.95 + i * 0.25));
      letter.style.transform = `translateY(${rise * 60}px)`;
    });

    const lift = expoInOut(clamp(span(t, 4.5, 5.2) - span(t, 5.6, 6.3)));
    if (world.current) world.current.style.transform = `rotateX(${lift * 52}deg) rotateZ(${lift * -32}deg) scale(${1 - lift * 0.12})`;

    // Caret blinks only while the reel rests on it.
    const caretRest = t < 0.5 || t > 14.9;
    tiles.current.forEach((el) => {
      if (el && caretRest) el.style.opacity = Math.floor(t * 4) % 2 ? "0.35" : "1";
      else if (el) el.style.opacity = "1";
    });

    // Scene 1 caption
    const cap = span(t, 2.1, 2.5) * (1 - span(t, 2.9, 3.2));
    set("push", { opacity: String(cap), transform: `translateY(${(1 - expoOut(span(t, 2.1, 2.5))) * 20}px)` });

    // Scene 4: axis, line, uptime counter
    const chart = span(t, 6.4, 6.8) * (1 - span(t, 8.8, 9.1));
    set("axis", { opacity: String(chart) });
    const draw = expoInOut(span(t, 6.8, 7.9));
    set("line", { strokeDashoffset: String(1 - draw), opacity: String(1 - span(t, 8.8, 9.1)) });
    const up = expoOut(span(t, 6.6, 8.4));
    set("uptime", { opacity: String(chart) });
    const uptime = q.uptimeValue;
    if (uptime) uptime.textContent = `${(lerp(90, 99.98, up)).toFixed(2)}%`;

    // Scene 5 heading
    const ops = span(t, 9.4, 9.8) * (1 - span(t, 11.7, 12.0));
    set("ops", { opacity: String(ops), transform: `translateY(${(1 - expoOut(span(t, 9.4, 9.8))) * 24}px)` });

    // Scene 6: end title rises word by word, exits up through the mask.
    const outT = expoInOut(span(t, 14.1, 14.5));
    ["first", "last"].forEach((k, j) => {
      const inT = expoOut(span(t, 12.3 + j * 0.25, 12.9 + j * 0.25));
      set(k, { transform: `translateY(${(1 - inT) * 110 - outT * 110}%)` });
    });
    const sub = expoOut(span(t, 12.9, 13.4));
    set("sub", { opacity: String(sub * (1 - outT)), transform: `translateY(${(1 - sub) * 20}px)` });

    // Chrome: scene label, timecode, playhead
    const scene = [...scenes].reverse().find(([s]) => t >= s) ?? scenes[0];
    if (q.scene) q.scene.textContent = scene[1];
    const frames = Math.floor((t % 1) * 60);
    if (q.time) q.time.textContent = `00:00:${String(Math.floor(t)).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
    set("head", { transform: `scaleX(${t / LENGTH})` });
    const beat = Math.floor(t / BEAT);
    q.ticks?.querySelectorAll("span").forEach((el, i) => {
      (el as HTMLElement).style.opacity = i <= beat ? "0.9" : "0.25";
    });
  }

  // Scale the 1600x900 stage to the frame.
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      if (stage.current) stage.current.style.transform = `scale(${e.contentRect.width / W})`;
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const el = frame.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Reduced motion: hold on the end title.
    if (reduced) {
      seek(13.8);
      return;
    }
    seek(clock.current.t);
    if (!playing || !visible) return;
    let id = 0;
    clock.current.last = performance.now();
    const tick = (now: number) => {
      const c = clock.current;
      c.t = (c.t + (now - c.last) / 1000) % LENGTH;
      c.last = now;
      seek(c.t);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, visible, reduced]);

  const mono = "font-mono";
  const first = profile.firstName;
  const last = profile.name.replace(`${first} `, "");

  return (
    <section id="showreel" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            title="Fifteen seconds of the *job*"
            intro="A commit becomes a container, the containers become a stack, the stack becomes traffic, and the traffic gets watched. Built in code, frame by frame."
          />
          {!reduced && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-ink/30"
              aria-pressed={!playing}
            >
              {playing ? (
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <rect x="3" y="2" width="3.5" height="12" rx="1" />
                  <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M4 2.5v11a.5.5 0 0 0 .77.42l8.5-5.5a.5.5 0 0 0 0-.84l-8.5-5.5A.5.5 0 0 0 4 2.5Z" />
                </svg>
              )}
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>

        <div
          ref={frame}
          data-reveal
          role="img"
          aria-label={`Animated showreel: the word DEPLOY turns into six containers, which tip into a 3D stack, become a traffic chart reaching 99.98% uptime, then a rack of six healthy servers, and end on the title ${profile.name}, ${profile.role}.`}
          className="relative mt-12 aspect-video w-full overflow-hidden rounded-[1.5rem] bg-[#181614] shadow-lift sm:rounded-[2rem]"
        >
          <div ref={stage} className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H }} aria-hidden="true">
            {/* Chrome */}
            <p ref={part("scene")} className={`${mono} absolute left-14 top-12 text-[26px] text-[#8f8a84]`}>
              01 — commit
            </p>
            <p ref={part("time")} className={`${mono} tabular absolute right-14 top-12 text-[26px] text-[#8f8a84]`}>
              00:00:00:00
            </p>
            <div className="absolute bottom-12 left-14 right-14">
              <div ref={part("ticks")} className="flex justify-between">
                {Array.from({ length: LENGTH / BEAT }, (_, i) => (
                  <span key={i} className={`block w-[3px] rounded-full bg-[#f3f1ee] ${i % 4 === 0 ? "h-5" : "h-3"}`} />
                ))}
              </div>
              <div className="mt-3 h-[3px] bg-[#f3f1ee]/15">
                <div ref={part("head")} className="h-full origin-left bg-[#E95420]" />
              </div>
            </div>

            {/* Scene 1 caption */}
            <p ref={part("push")} className={`${mono} absolute inset-x-0 top-[190px] text-center text-[34px] text-[#a49f98] opacity-0`}>
              <span className="text-[#ff8a5c]">$</span> git push origin main
            </p>

            {/* Scene 4: chart furniture */}
            <div ref={part("axis")} className="absolute inset-0 opacity-0">
              <div className="absolute left-[260px] right-[260px] top-[664px] h-[3px] bg-[#f3f1ee]/30" />
              <p className={`${mono} absolute left-[260px] top-[690px] text-[26px] text-[#8f8a84]`}>requests / min</p>
              <div ref={part("uptime")} className="absolute left-[260px] top-[150px] opacity-0">
                <p ref={part("uptimeValue")} className="tabular text-[96px] font-bold leading-none tracking-tight text-[#f3f1ee]">
                  99.98%
                </p>
                <p className={`${mono} mt-3 text-[28px] text-[#8f8a84]`}>uptime, last 30 days</p>
              </div>
            </div>
            <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
              <path
                ref={part("line") as unknown as React.Ref<SVGPathElement>}
                d={BARS.map((h, i) => `${i ? "L" : "M"}${350 + i * 180} ${660 - h - 40}`).join(" ")}
                fill="none"
                stroke="#E95420"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset="1"
                opacity="0"
              />
            </svg>

            {/* Scene 5 heading */}
            <p ref={part("ops")} className="absolute inset-x-0 top-[110px] text-center text-[44px] font-bold tracking-tight text-[#f3f1ee] opacity-0">
              All systems operational
            </p>

            {/* Tiles: the 3D world tips around the stage center. */}
            <div className="absolute inset-0" style={{ perspective: "2200px" }}>
              <div ref={world} className="absolute inset-0" style={{ transformStyle: "preserve-3d", transformOrigin: "800px 450px" }}>
                {LETTERS.map((letter, i) => (
                  <div
                    key={letter + i}
                    ref={(el) => {
                      tiles.current[i] = el;
                    }}
                    className="absolute left-0 top-0 overflow-hidden"
                    style={{ width: 12, height: 150, background: "#E95420", transform: "translate3d(794px, 375px, 0)" }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-[200px] font-bold leading-none tracking-tight text-[#f3f1ee] opacity-0">
                      {letter}
                    </span>
                    <span className={`${mono} absolute inset-0 flex flex-col justify-between p-5 text-[26px] text-[#181614] opacity-0`}>
                      <span className="block h-2 w-16 rounded-full bg-[#E95420]" />
                      <span>
                        {BOXES[i]}
                        <span className="text-[#8f8a84]">:142</span>
                      </span>
                    </span>
                    <span className={`${mono} absolute inset-0 flex items-center gap-5 px-7 text-[28px] text-[#f3f1ee] opacity-0`}>
                      <span className="h-4 w-4 shrink-0 rounded-full bg-[#4ade80] opacity-0" />
                      <span className="flex-1">{HOSTS[i]}</span>
                      <span className="text-[#8f8a84]">running · {12 + i * 7}ms</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scene 6: end title */}
            <div className="absolute inset-x-0 top-[330px] flex justify-center gap-[0.25em] text-[150px] font-bold leading-[1.05] tracking-[-0.035em] text-[#f3f1ee]">
              <span className="inline-block overflow-hidden pb-2">
                <span ref={part("first")} className="inline-block" style={{ transform: "translateY(110%)" }}>
                  {first}
                </span>
              </span>
              <span className="inline-block overflow-hidden pb-2">
                <span ref={part("last")} className="inline-block" style={{ transform: "translateY(110%)" }}>
                  {last}
                </span>
              </span>
            </div>
            <p ref={part("sub")} className={`${mono} absolute inset-x-0 top-[620px] text-center text-[34px] text-[#a49f98] opacity-0`}>
              {profile.role}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
