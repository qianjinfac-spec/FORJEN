"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Factory, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { VideoModal } from "@/components/ui/VideoModal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-end overflow-hidden bg-ink">
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <PlaceholderMedia
          media={{ id: "hero-factory", alt: "FORJEN manufacturing floor with active production lines" }}
          icon={Factory}
          tone="accent"
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" aria-hidden />

      <motion.div style={{ opacity, y: textY }} className="relative z-10 w-full pb-16 pt-40 md:pb-24">
        <Container className="flex flex-col items-center text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Industrial Strength — Precision Manufacturing
          </p>
          <RevealText
            as="h1"
            lines={["Engineered to Shape.", "Built to Endure."]}
            className="font-display text-[clamp(2.5rem,7vw,5.75rem)] font-black leading-[1.1] tracking-normal text-ink-foreground"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-lg text-balance text-base leading-relaxed text-ink-foreground/70 md:text-lg"
          >
            Advanced roll forming equipment and heavy-duty aerial work platforms, engineered
            through precision manufacturing and rigorous quality control.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/manufacturing" variant="primary">
              Explore Our Capabilities
            </Button>
            <VideoModal
              media={{ id: "corporate-film", alt: "FORJEN corporate film" }}
              trigger={
                <span className="group inline-flex items-center gap-3 text-sm font-medium text-ink-foreground">
                  <span className="flex size-11 items-center justify-center rounded-full border border-ink-foreground/30 transition-colors group-hover:border-accent group-hover:text-accent">
                    <Play className="size-4" aria-hidden />
                  </span>
                  Watch Corporate Film
                </span>
              }
            />
          </motion.div>
        </Container>
      </motion.div>

      <div className="relative z-10 w-full border-t border-line-dark">
        <Container className="flex items-center justify-between py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/50">
          <span className="hidden items-center gap-2 sm:flex">
            <ChevronDown className="size-3.5 animate-bounce" aria-hidden />
            Scroll to Explore
          </span>
          <span className="sm:hidden">Scroll</span>
          <span>Roll Forming Equipment · Aerial Work Platforms</span>
          <span>01 / 10</span>
        </Container>
      </div>
    </section>
  );
}
