"use client";

import { Cog } from "lucide-react";
import { motion } from "motion/react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { manufacturingProcess } from "@/data/manufacturing";

export function ProcessNarrative() {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:sticky lg:top-28 lg:col-span-4 lg:h-fit">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">From Raw Steel to Final Product</p>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-ink-foreground md:text-4xl">
          Eight controlled stages, on every unit we build.
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
          Each stage is documented and inspected before the next begins — the same discipline
          applies whether the unit is a standard model or a custom configuration.
        </p>
      </div>

      <div className="space-y-6 lg:col-span-8">
        {manufacturingProcess.map((step) => (
          <RevealOnScroll key={step.index} amount={0.3}>
            <motion.div className="grid gap-6 border-t border-line-dark py-8 sm:grid-cols-12 sm:items-center">
              <div className="sm:col-span-4">
                <span className="font-mono text-sm text-accent">{step.index}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink-foreground">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-foreground/60">{step.description}</p>
              </div>
              <div className="aspect-[16/10] overflow-hidden sm:col-span-8">
                <PlaceholderMedia media={step.media} icon={Cog} index={step.index} />
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
