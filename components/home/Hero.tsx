"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ChevronDown, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { VideoModal } from "@/components/ui/VideoModal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[680px] w-full flex-col justify-end overflow-hidden bg-[#202526]">
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <Image src="/images/aerial-work-platforms/banner3.jpg" alt="FORJEN production equipment" fill priority className="object-cover object-center" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/30 to-black/5" aria-hidden />

      <motion.div style={{ opacity, y: textY }} className="relative z-10 w-full pb-16 pt-40 md:pb-24">
        <Container className="flex items-end">
          <div className="max-w-xl border-l-2 border-accent bg-white/95 p-7 text-paper-foreground shadow-2xl md:p-10">
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
            FORJEN · INDUSTRIAL SYSTEMS
          </p>
          <RevealText as="h1" lines={["Precision equipment.", "Production without limits."]} className="font-display text-[clamp(2.35rem,5vw,4.65rem)] font-semibold leading-[.98] tracking-[-0.045em] text-[#272b2d]" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-[#536064] md:text-base"
          >
            Advanced roll forming equipment and heavy-duty aerial work platforms, engineered
            through precision manufacturing and rigorous quality control.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <Button href="/manufacturing" variant="primary">
              Explore Our Capabilities
            </Button>
            <VideoModal
              media={{ id: "corporate-film", alt: "FORJEN corporate film" }}
              trigger={
                <span className="group inline-flex items-center gap-3 text-sm font-medium text-[#30383a]">
                  <span className="flex size-10 items-center justify-center rounded-full border border-[#9aa5a6] transition-colors group-hover:border-accent group-hover:text-accent">
                    <Play className="size-4" aria-hidden />
                  </span>
                  Watch Corporate Film
                </span>
              }
            />
          </motion.div>
          </div>
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
