"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "motion/react";
import { X, FileText, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company name."),
  email: z.string().email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof schema>;

export function DocumentRequestModal({ documentTitle }: { documentTitle: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

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

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      // TODO: replace with the real document-request endpoint / CRM integration
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "document-request", document: documentTitle, ...values }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        data-cursor="link"
        onClick={() => {
          setOpen(true);
          setStatus("idle");
        }}
        className="inline-flex items-center gap-2 rounded-full border border-line-light px-5 py-2.5 text-sm font-medium text-paper-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Request Access
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Request access to ${documentTitle}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-line-dark bg-ink-soft p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="size-5 text-accent" aria-hidden />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/50">
                    {documentTitle}
                  </p>
                </div>
                <button
                  type="button"
                  data-cursor="link"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex size-8 items-center justify-center rounded-full border border-line-dark text-ink-foreground"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>

              {status === "success" ? (
                <div className="mt-8 flex flex-col items-center gap-3 py-6 text-center">
                  <CheckCircle2 className="size-8 text-accent" aria-hidden />
                  <p className="font-display text-lg font-semibold text-ink-foreground">Request received</p>
                  <p className="text-sm text-ink-foreground/60">
                    Our team will send this document to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
                  <div>
                    <label htmlFor="doc-name" className="mb-1.5 block text-xs text-ink-foreground/60">
                      Name
                    </label>
                    <input
                      id="doc-name"
                      {...register("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "doc-name-error" : undefined}
                      className={cn(
                        "w-full rounded-md border bg-transparent px-3.5 py-2.5 text-sm text-ink-foreground outline-none",
                        errors.name ? "border-safety" : "border-line-dark focus:border-accent",
                      )}
                    />
                    {errors.name && (
                      <p id="doc-name-error" className="mt-1 text-xs text-safety">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="doc-company" className="mb-1.5 block text-xs text-ink-foreground/60">
                      Company
                    </label>
                    <input
                      id="doc-company"
                      {...register("company")}
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? "doc-company-error" : undefined}
                      className={cn(
                        "w-full rounded-md border bg-transparent px-3.5 py-2.5 text-sm text-ink-foreground outline-none",
                        errors.company ? "border-safety" : "border-line-dark focus:border-accent",
                      )}
                    />
                    {errors.company && (
                      <p id="doc-company-error" className="mt-1 text-xs text-safety">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="doc-email" className="mb-1.5 block text-xs text-ink-foreground/60">
                      Email
                    </label>
                    <input
                      id="doc-email"
                      type="email"
                      {...register("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "doc-email-error" : undefined}
                      className={cn(
                        "w-full rounded-md border bg-transparent px-3.5 py-2.5 text-sm text-ink-foreground outline-none",
                        errors.email ? "border-safety" : "border-line-dark focus:border-accent",
                      )}
                    />
                    {errors.email && (
                      <p id="doc-email-error" className="mt-1 text-xs text-safety">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-safety">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    data-cursor="link"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-opacity disabled:opacity-60"
                  >
                    {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
