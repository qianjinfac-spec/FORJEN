"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactInfo } from "@/data/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  position: z.string().min(2, "Please enter a role, or \"General Application\"."),
  message: z.string().min(10, "Please tell us a little about yourself (at least 10 characters)."),
});

type FormValues = z.infer<typeof schema>;

export function CareersApplicationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "document-request", document: `Careers: ${values.position}`, name: values.name, company: "N/A", email: values.email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full rounded-md border bg-transparent px-4 py-3 text-sm text-ink-foreground outline-none transition-colors",
      hasError ? "border-safety" : "border-line-dark focus:border-accent",
    );

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-sm border border-line-dark bg-ink-soft px-8 py-14 text-center">
        <CheckCircle2 className="size-9 text-accent" aria-hidden />
        <h3 className="font-display text-xl font-semibold text-ink-foreground">Application received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/60">
          Thank you for your interest in FORJEN. Our team will review your details and reach out
          if there is a match.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-xs uppercase tracking-[0.1em] text-ink-foreground/50">
          Name *
        </label>
        <input id="c-name" {...register("name")} className={inputClass(Boolean(errors.name))} />
        {errors.name && <p className="mt-1.5 text-xs text-safety">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-xs uppercase tracking-[0.1em] text-ink-foreground/50">
          Email *
        </label>
        <input id="c-email" type="email" {...register("email")} className={inputClass(Boolean(errors.email))} />
        {errors.email && <p className="mt-1.5 text-xs text-safety">{errors.email.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-position" className="mb-1.5 block text-xs uppercase tracking-[0.1em] text-ink-foreground/50">
          Position of Interest *
        </label>
        <input
          id="c-position"
          placeholder="e.g. General Application"
          {...register("position")}
          className={inputClass(Boolean(errors.position))}
        />
        {errors.position && <p className="mt-1.5 text-xs text-safety">{errors.position.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-message" className="mb-1.5 block text-xs uppercase tracking-[0.1em] text-ink-foreground/50">
          Tell us about yourself *
        </label>
        <textarea id="c-message" rows={4} {...register("message")} className={inputClass(Boolean(errors.message))} />
        {errors.message && <p className="mt-1.5 text-xs text-safety">{errors.message.message}</p>}
        <p className="mt-2 text-xs text-ink-foreground/40">
          Please email your resume directly to {contactInfo.generalEmail} referencing this application.
        </p>
      </div>

      {status === "error" && <p className="text-sm text-safety sm:col-span-2">Something went wrong. Please try again.</p>}

      <div className="sm:col-span-2">
        <button
          type="submit"
          data-cursor="link"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-white transition-opacity disabled:opacity-60"
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
          {isSubmitting ? "Sending..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
