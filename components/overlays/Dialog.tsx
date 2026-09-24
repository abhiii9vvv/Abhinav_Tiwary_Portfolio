"use client";

import { useEffect, useRef } from "react";

/**
 * Minimal modal built on the native <dialog>: the browser handles the focus
 * trap, Escape, and inert background. We add a backdrop click-to-close and
 * scroll locking.
 */
export function Dialog({
  open,
  onClose,
  label,
  className = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
      el.scrollTop = 0;
      document.body.style.overflow = "hidden";
    } else if (!open && el.open) {
      el.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className={`no-print m-0 max-h-none max-w-none bg-transparent p-0 text-ink backdrop:bg-sunken/70 backdrop:backdrop-blur-sm open:animate-fade ${className}`}
    >
      {open && children}
    </dialog>
  );
}
