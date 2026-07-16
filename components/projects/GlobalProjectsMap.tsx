"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { WorldMap } from "@/components/projects/WorldMap";
import { globalProjects, projectRegions } from "@/data/projects";
import type { GlobalProject } from "@/data/types";
import { cn } from "@/lib/utils";

export function GlobalProjectsMap({ limit }: { limit?: number }) {
  const [region, setRegion] = useState<(typeof projectRegions)[number]>("All Regions");
  const [active, setActive] = useState<GlobalProject | null>(null);

  const filtered = useMemo(() => {
    const list =
      region === "All Regions" ? globalProjects : globalProjects.filter((p) => p.region === region);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [region, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectRegions.map((r) => (
          <button
            key={r}
            type="button"
            data-cursor="link"
            onClick={() => setRegion(r)}
            aria-pressed={region === r}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors",
              region === r
                ? "border-accent bg-accent text-white"
                : "border-line-dark text-ink-foreground/60 hover:border-ink-foreground/40 hover:text-ink-foreground",
            )}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Real world map — desktop / tablet. Blue-filled countries are FORJEN's export footprint.
          Width is "whichever is smaller: the full column, or what the height cap allows at the
          map's true aspect ratio" — true aspect-ratio "contain" sizing with no distortion. On
          short/wide viewports the height cap wins (map fits one screen); on tall/narrow ones the
          column width wins (no oversized side gaps). Height is then derived from that width via
          aspect-ratio, so it's never set directly. */}
      <div className="mt-8 hidden md:flex md:justify-center">
        <div
          className="relative overflow-hidden rounded-sm border border-line-dark bg-ink-soft"
          style={{ aspectRatio: "1010/666", width: "min(100%, calc((100vh - 220px) * 1010 / 666))" }}
        >
          <WorldMap region={region} className="absolute inset-0" />
          {filtered.map((project) => (
            <button
              key={project.id}
              type="button"
              data-cursor="link"
              onClick={() => setActive(project)}
              aria-label={`View project in ${project.country}`}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${project.x}%`, top: `${project.y}%` }}
            >
              <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-accent/40 group-hover:bg-accent/60" aria-hidden />
              <span className="relative block size-2.5 rounded-full bg-accent ring-4 ring-ink-soft transition-transform group-hover:scale-125" />
              <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line-dark bg-ink px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {project.country} — {project.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* List — always available, primary view on mobile */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:hidden">
        {filtered.map((project) => (
          <button
            key={project.id}
            type="button"
            data-cursor="link"
            onClick={() => setActive(project)}
            className="flex items-start gap-3 rounded-sm border border-line-dark p-4 text-left"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <span>
              <span className="block font-display text-sm font-semibold text-ink-foreground">{project.country}</span>
              <span className="mt-1 block text-xs text-ink-foreground/60">{project.category}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/80 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Project details for ${active.country}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line-dark bg-ink-soft sm:rounded-2xl"
            >
              <div className="aspect-[16/9]">
                <PlaceholderMedia media={active.media} icon={MapPin} tone="accent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {active.country} · {active.region}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-ink-foreground">{active.title}</h3>
                  </div>
                  <button
                    type="button"
                    data-cursor="link"
                    onClick={() => setActive(null)}
                    aria-label="Close project details"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-dark text-ink-foreground"
                  >
                    <X className="size-4" aria-hidden />
                  </button>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-foreground/70">{active.summary}</p>
                <div className="mt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/40">
                    Equipment Delivered
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.deliverables.map((item) => (
                      <li key={item} className="rounded-full border border-line-dark px-3 py-1 text-xs text-ink-foreground/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {active.testimonial && (
                  <blockquote className="mt-6 border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-ink-foreground/60">
                    &ldquo;{active.testimonial.quote}&rdquo;
                    <footer className="mt-2 font-mono text-[11px] not-italic uppercase tracking-[0.15em] text-ink-foreground/40">
                      {active.testimonial.attribution}
                    </footer>
                  </blockquote>
                )}
                <a
                  href="/global-projects"
                  data-cursor="link"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent"
                >
                  View all global projects
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
