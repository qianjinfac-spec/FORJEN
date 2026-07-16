"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  function handleClick() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      data-cursor="link"
      aria-label="Back to top"
      className="flex size-12 items-center justify-center rounded-full border border-line-dark text-ink-foreground transition-colors hover:border-accent hover:text-accent"
    >
      <ArrowUp className="size-4" aria-hidden />
    </button>
  );
}
