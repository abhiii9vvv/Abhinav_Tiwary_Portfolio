export type Theme = "light" | "dark";

const KEY = "theme";

export function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function toggleTheme(): Theme {
  const next: Theme = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(KEY, next);
  } catch {
    // storage blocked: the choice still applies for this visit
  }
  window.dispatchEvent(new CustomEvent("themechange", { detail: next }));
  return next;
}

// Inlined in <head> so a saved theme applies before first paint.
export const themeBootScript = `try{var t=localStorage.getItem("${KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

// Overlays open through window events so any button, server-rendered or not,
// can trigger them without a shared React context.
export const OPEN_PALETTE = "open-palette";
export const OPEN_RECRUITER = "open-recruiter";

export function openPalette() {
  window.dispatchEvent(new Event(OPEN_PALETTE));
}

export function openRecruiter() {
  window.dispatchEvent(new Event(OPEN_RECRUITER));
}
