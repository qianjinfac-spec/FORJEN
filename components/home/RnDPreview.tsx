"use client";

import { Users, FlaskConical, Ruler, GitBranch, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { motion } from "motion/react";

const capabilities = [
  { icon: Users, title: "Engineering Team", description: "In-house mechanical, structural and electrical engineers." },
  { icon: FlaskConical, title: "Product Development", description: "New equipment platforms developed and validated in-house." },
  { icon: Ruler, title: "Structural Design", description: "Precision structural modelling for load and durability." },
  { icon: GitBranch, title: "Process Optimization", description: "Continuous refinement of manufacturing workflows." },
  { icon: ShieldCheck, title: "Patents & Certifications", description: "A growing portfolio protecting our engineering work." },
  { icon: Wrench, title: "Customized Engineering", description: "Configured equipment built around project requirements." },
];

export function RnDPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel index="05" label="R&D and Engineering" className="mb-6" />
          <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-foreground md:text-5xl">
            Standard equipment, or built to your specification.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/60">
            FORJEN doesn&apos;t only manufacture to standard designs — our engineering team develops,
            tests and customizes equipment to meet the specific demands of each project.
          </p>
          <div className="mt-8">
            <Button href="/rd-patents" variant="outline-dark">
              Discover Our R&D
            </Button>
          </div>
          <div className="mt-10 hidden overflow-hidden rounded-sm md:block">
            <PlaceholderMedia
              media={{ id: "rd-engineering-team", alt: "FORJEN engineering team reviewing structural design drawings" }}
              icon={Ruler}
              className="aspect-[4/3]"
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-line-dark sm:grid-cols-2 md:col-span-7"
        >
          {capabilities.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp} className="bg-ink-soft p-7">
              <Icon className="size-6 text-accent" aria-hidden strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
