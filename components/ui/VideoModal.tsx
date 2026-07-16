"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Play, Film } from "lucide-react";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import type { MediaSlot } from "@/data/types";

export function VideoModal({
  trigger,
  media,
}: {
  trigger: React.ReactNode;
  media: MediaSlot;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" data-cursor="link" onClick={() => setOpen(true)}>
        {trigger}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Corporate film"
          >
            <motion.div
              className="relative aspect-video w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <PlaceholderMedia media={media} icon={Film} tone="accent" className="rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <span className="flex size-16 items-center justify-center rounded-full border border-ink-foreground/30 bg-ink/40">
                  <Play className="size-6 text-ink-foreground" aria-hidden />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/60">
                  Corporate film — TODO: embed final video
                </p>
              </div>
              <button
                type="button"
                data-cursor="link"
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground"
              >
                <X className="size-4" aria-hidden />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
