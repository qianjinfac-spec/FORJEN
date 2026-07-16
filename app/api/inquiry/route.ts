import { NextResponse } from "next/server";
import { z } from "zod";
import { inquirySchema } from "@/lib/inquiry-schema";

// TODO: replace this mock handler with a real integration — forward to a CRM
// (e.g. HubSpot, Salesforce) or send transactional email via a provider such
// as Resend / SendGrid. Keep the honeypot + validation checks below either way.
const documentRequestSchema = z.object({
  type: z.literal("document-request"),
  document: z.string().min(1),
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const documentResult = documentRequestSchema.safeParse(body);
  if (documentResult.success) {
    // TODO: forward document request to CRM / fulfillment email.
    return NextResponse.json({ ok: true });
  }

  const result = inquirySchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid submission.", issues: result.error.issues }, { status: 422 });
  }

  if (result.data.companyWebsite) {
    // Honeypot triggered — silently accept without processing.
    return NextResponse.json({ ok: true });
  }

  // TODO: persist / forward result.data to CRM or notification email here.

  return NextResponse.json({ ok: true });
}
