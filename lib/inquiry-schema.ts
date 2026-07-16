import { z } from "zod";

export const businessTypes = [
  "Engineering Company",
  "Government or Public Project",
  "Distributor or Agent",
  "Contractor",
  "Manufacturer",
  "End User",
  "Other",
] as const;

export const businessDivisionOptions = [
  "Roll Forming Equipment",
  "Heavy-duty Aerial Work Platforms",
  "Both Divisions",
] as const;

export const cooperationTypes = [
  "Equipment Purchase",
  "Project Cooperation",
  "Distributor Cooperation",
  "Factory Inspection",
  "Video Inspection",
  "Company Documents",
  "Other",
] as const;

export const purposeToCooperationType: Record<string, (typeof cooperationTypes)[number]> = {
  "factory-visit": "Factory Inspection",
  "video-inspection": "Video Inspection",
  documents: "Company Documents",
  distributor: "Distributor Cooperation",
};

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Please enter your company name."),
  country: z.string().min(2, "Please enter your country."),
  businessType: z.enum(businessTypes, { message: "Please select a business type." }),
  division: z.enum(businessDivisionOptions, { message: "Please select a division." }),
  cooperationType: z.enum(cooperationTypes, { message: "Please select a cooperation type." }),
  email: z.string().email("Please enter a valid email address."),
  whatsapp: z.string().optional(),
  message: z.string().min(10, "Please tell us a little more (at least 10 characters)."),
  privacy: z.boolean().refine((v) => v === true, {
    message: "Please agree to the privacy policy to continue.",
  }),
  // Honeypot field — kept blank by real users, bots tend to fill every field.
  companyWebsite: z.string().max(0).optional(),
});

export type InquiryValues = z.infer<typeof inquirySchema>;
