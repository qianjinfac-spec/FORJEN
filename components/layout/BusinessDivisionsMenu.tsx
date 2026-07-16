"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Factory, TowerControl } from "lucide-react";
import { businessDivisions } from "@/data/site";
import { cn } from "@/lib/utils";

const items = [
  { ...businessDivisions.rollForming, icon: Factory },
  { ...businessDivisions.aerialWorkPlatforms, icon: TowerControl },
];

export function BusinessDivisionsMenu({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        data-cursor="link"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-accent/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:border-accent",
          tone === "dark" ? "text-ink-foreground" : "text-paper-foreground",
        )}
      >
        Business Divisions
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} aria-hidden />
      </button>

      {open && (
        <div
          className="absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,640px)] -translate-x-1/2 rounded-2xl border border-line-dark bg-ink-soft p-2 shadow-2xl shadow-black/40"
          role="menu"
        >
          <div className="grid gap-1 sm:grid-cols-2">
            {items.map(({ icon: Icon, ...item }) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="link"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="group flex flex-col gap-3 rounded-xl p-4 transition-colors hover:bg-white/5"
              >
                <Icon className="size-5 text-accent" aria-hidden strokeWidth={1.5} />
                <span className="font-display text-lg font-semibold leading-tight text-ink-foreground">
                  {item.shortName}
                </span>
                <span className="text-sm leading-snug text-ink-foreground/60">{item.description}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Explore Division →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
