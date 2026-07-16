"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  inquirySchema,
  type InquiryValues,
  businessTypes,
  businessDivisionOptions,
  cooperationTypes,
} from "@/lib/inquiry-schema";
import { cn } from "@/lib/utils";

const inputClass = (hasError: boolean) =>
  cn(
    "w-full rounded-md border bg-transparent px-4 py-3 text-sm text-ink-foreground outline-none transition-colors placeholder:text-ink-foreground/30",
    hasError ? "border-safety" : "border-line-dark focus:border-accent",
  );

const labelClass = "mb-1.5 block text-xs uppercase tracking-[0.1em] text-ink-foreground/50";

export function InquiryForm({ defaultCooperationType }: { defaultCooperationType?: (typeof cooperationTypes)[number] }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      cooperationType: defaultCooperationType,
      privacy: false,
    },
  });

  async function onSubmit(values: InquiryValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset({ ...values, name: "", company: "", country: "", email: "", whatsapp: "", message: "", privacy: false });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-sm border border-line-dark bg-ink-soft px-8 py-16 text-center">
        <CheckCircle2 className="size-10 text-accent" aria-hidden />
        <h3 className="font-display text-2xl font-semibold text-ink-foreground">Thank you.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/60">
          Your enquiry has been received. A member of the FORJEN team will respond within one to
          two business days.
        </p>
        <button
          type="button"
          data-cursor="link"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-accent"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6 sm:grid-cols-2">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("companyWebsite")} />

      <div>
        <label htmlFor="name" className={labelClass}>
          Name *
        </label>
        <input id="name" {...register("name")} aria-invalid={Boolean(errors.name)} className={inputClass(Boolean(errors.name))} />
        {errors.name && <p className="mt-1.5 text-xs text-safety">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company *
        </label>
        <input id="company" {...register("company")} aria-invalid={Boolean(errors.company)} className={inputClass(Boolean(errors.company))} />
        {errors.company && <p className="mt-1.5 text-xs text-safety">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="country" className={labelClass}>
          Country *
        </label>
        <input id="country" {...register("country")} aria-invalid={Boolean(errors.country)} className={inputClass(Boolean(errors.country))} />
        {errors.country && <p className="mt-1.5 text-xs text-safety">{errors.country.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input id="email" type="email" {...register("email")} aria-invalid={Boolean(errors.email)} className={inputClass(Boolean(errors.email))} />
        {errors.email && <p className="mt-1.5 text-xs text-safety">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClass}>
          WhatsApp
        </label>
        <input id="whatsapp" {...register("whatsapp")} className={inputClass(false)} />
      </div>

      <div>
        <label htmlFor="businessType" className={labelClass}>
          Business Type *
        </label>
        <select
          id="businessType"
          {...register("businessType")}
          defaultValue=""
          aria-invalid={Boolean(errors.businessType)}
          className={inputClass(Boolean(errors.businessType))}
        >
          <option value="" disabled>
            Select business type
          </option>
          {businessTypes.map((option) => (
            <option key={option} value={option} className="bg-ink-soft">
              {option}
            </option>
          ))}
        </select>
        {errors.businessType && <p className="mt-1.5 text-xs text-safety">{errors.businessType.message}</p>}
      </div>

      <div>
        <label htmlFor="division" className={labelClass}>
          Interested Business Division *
        </label>
        <select
          id="division"
          {...register("division")}
          defaultValue=""
          aria-invalid={Boolean(errors.division)}
          className={inputClass(Boolean(errors.division))}
        >
          <option value="" disabled>
            Select division
          </option>
          {businessDivisionOptions.map((option) => (
            <option key={option} value={option} className="bg-ink-soft">
              {option}
            </option>
          ))}
        </select>
        {errors.division && <p className="mt-1.5 text-xs text-safety">{errors.division.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="cooperationType" className={labelClass}>
          Cooperation Type *
        </label>
        <select
          id="cooperationType"
          {...register("cooperationType")}
          defaultValue={defaultCooperationType ?? ""}
          aria-invalid={Boolean(errors.cooperationType)}
          className={inputClass(Boolean(errors.cooperationType))}
        >
          <option value="" disabled>
            Select cooperation type
          </option>
          {cooperationTypes.map((option) => (
            <option key={option} value={option} className="bg-ink-soft">
              {option}
            </option>
          ))}
        </select>
        {errors.cooperationType && <p className="mt-1.5 text-xs text-safety">{errors.cooperationType.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={Boolean(errors.message)}
          className={inputClass(Boolean(errors.message))}
        />
        {errors.message && <p className="mt-1.5 text-xs text-safety">{errors.message.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-ink-foreground/70">
          <input
            type="checkbox"
            {...register("privacy")}
            aria-invalid={Boolean(errors.privacy)}
            className="mt-0.5 size-4 shrink-0 accent-accent"
          />
          I agree to the processing of my data in accordance with the{" "}
          <a href="/privacy-policy" className="underline hover:text-accent">
            Privacy Policy
          </a>
          . *
        </label>
        {errors.privacy && <p className="mt-1.5 text-xs text-safety">{errors.privacy.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-safety sm:col-span-2">
          Something went wrong sending your enquiry. Please try again, or email us directly.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          data-cursor="link"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-white transition-opacity disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </button>
      </div>
    </form>
  );
}
