"use client";

import { motion, type TargetAndTransition, type Variants } from "motion/react";
import { fadeUp } from "@/lib/motion";

function withDelay(variants: Variants, delay: number): Variants {
  if (!delay) return variants;
  const visible = variants.visible as TargetAndTransition | undefined;
  if (!visible || typeof visible !== "object") return variants;
  return {
    ...variants,
    visible: {
      ...visible,
      transition: { ...visible.transition, delay },
    },
  };
}

export function RevealOnScroll({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.3,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "li" | "span";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={withDelay(variants, delay)}
    >
      {children}
    </MotionTag>
  );
}
