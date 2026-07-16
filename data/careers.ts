import type { JobOpening } from "./types";

/** TODO: replace with live openings from the HR/ATS system. Empty by default — page shows a fallback message. */
export const jobOpenings: JobOpening[] = [];

export const careersFallbackMessage =
  "No open positions at the moment, but we are always interested in meeting talented people.";

export const departments = [
  "All Departments",
  "Engineering",
  "Manufacturing",
  "Quality",
  "Sales & Business Development",
  "Operations",
] as const;
