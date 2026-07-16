"use client";

import { motion } from "motion/react";
import { easeForjen, staggerContainer } from "@/lib/motion";

const line = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: easeForjen },
  },
};

/** Splits text into lines (by \n) and reveals each line with a masked upward slide. */
export function RevealText({
  lines,
  as: Tag = "h1",
  className,
  lineClassName,
  delay = 0,
  once = true,
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <Tag className={className}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        variants={staggerContainer(0.1, delay)}
      >
        {lines.map((text, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span variants={line} className={`block ${lineClassName ?? ""}`}>
              {text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
