import { NextResponse } from "next/server";
import { z } from "zod";
import { inquirySchema } from "@/lib/inquiry-schema";
import { supabase } from "@/lib/supabase";

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
    const { error } = await supabase.from("form_submissions").insert({
      type: "document-request",
      name: documentResult.data.name,
      company: documentResult.data.company,
      email: documentResult.data.email,
      document: documentResult.data.document,
    });
    if (error) {
      console.error("Failed to store document request:", error);
      return NextResponse.json({ error: "Could not save submission." }, { status: 500 });
    }
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

  const { error } = await supabase.from("form_submissions").insert({
    type: "inquiry",
    name: result.data.name,
    company: result.data.company,
    country: result.data.country,
    email: result.data.email,
    whatsapp: result.data.whatsapp || null,
    business_type: result.data.businessType,
    division: result.data.division,
    cooperation_type: result.data.cooperationType,
    message: result.data.message,
  });
  if (error) {
    console.error("Failed to store inquiry:", error);
    return NextResponse.json({ error: "Could not save submission." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
