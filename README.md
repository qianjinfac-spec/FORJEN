# FORJEN — Corporate Brand Website

Next.js (App Router) marketing site for FORJEN — an industrial group manufacturing Roll
Forming Equipment and Heavy-duty Aerial Work Platforms. The site is a brand/trust site (factory
proof, quality process, global projects, documents) rather than a product catalogue — it feeds
credibility and leads to two separate product lead-gen sites (linked from `data/site.ts`).

## Stack

- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4
- `motion` (Framer Motion) for scroll reveals / page transitions, `lenis` for smooth scroll
- `react-hook-form` + `zod` for form validation
- `lucide-react` for icons

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Project Structure

```
app/                     Routes (App Router). Each folder is a page; app/api/inquiry is the
                          mock form-submission endpoint.
components/
  layout/                Navbar, Footer, SmoothScrollProvider (Lenis),
                          MotionProvider (reduced-motion aware), PageHero
  ui/                     Design-system primitives: Button, Container, SectionLabel,
                          RevealText, RevealOnScroll, Counter, PlaceholderMedia, VideoModal
  home/                   Homepage sections (Hero, BrandStatement, BusinessDivisionsSection, …)
  business/, careers/, manufacturing/, news/, projects/, forms/
                          Page-specific building blocks
data/                     All editable content — see "Editing content" below
lib/                      fonts.ts, motion.ts (shared variants), inquiry-schema.ts (zod), utils.ts
```

## Editing Content

Almost nothing is hardcoded in page components — copy, links, contact details and lists all
live under `/data`:

| File | Controls |
| --- | --- |
| `data/site.ts` | Company info, nav, footer nav, contact/plant details, social links, business division copy + external lead-gen site URLs, homepage stat counters |
| `data/manufacturing.ts` | The 8-step production process + 2 plants |
| `data/quality.ts` | Quality control timeline + statement |
| `data/projects.ts` | Global projects (map markers, filters, detail panel content) |
| `data/news.ts` | News articles (structured data, not MDX — see note below) |
| `data/downloads.ts` | Company Documents list (title/description/type/whether it needs a lead form) |
| `data/certifications.ts` | Patents & certifications grid |
| `data/careers.ts` | Job openings (empty array shows the "no open positions" fallback) |

Every placeholder value is marked `TODO` and most are grep-able with `TODO` across `/data`.

## Replacing Placeholder Images

No real photography was supplied, so every image slot renders `components/ui/PlaceholderMedia.tsx`
— a generated industrial-style placeholder (grid pattern, accent gradient, "Image Pending" tag)
instead of a broken image. Every call site passes a `media: { id, alt }` object (see `data/types.ts`
→ `MediaSlot`), so once real photography exists:

1. Drop files into `public/images/...`
2. Add the path to the relevant `MediaSlot.path` in `/data`
3. Swap `<PlaceholderMedia media={...} />` for `<Image src={media.path!} alt={media.alt} fill />` at
   that call site (or extend `PlaceholderMedia` to render `next/image` when `path` is set — this
   is the single place to make that change once assets start arriving).

The same pattern applies to the corporate film (`components/ui/VideoModal.tsx`) and the hero
background (`components/home/Hero.tsx`) — both currently show a placeholder in place of real
video.

## Forms & Backend Integration

- `components/forms/InquiryForm.tsx` — the main enquiry form (used on `/contact`), fields per the
  brief (business type, division, cooperation type, etc.), validated with `lib/inquiry-schema.ts`.
- `components/forms/DocumentRequestModal.tsx` — compact lead form used for gated documents
  (Certificate Package).
- `components/careers/CareersApplicationForm.tsx` — careers application (no file upload; asks
  applicants to email their resume, since there's no storage backend yet).
- All three currently `POST` to `app/api/inquiry/route.ts`, which validates with zod and returns
  `{ ok: true }` — **it does not send email or persist anything yet.**

To go live, replace the body of `app/api/inquiry/route.ts` with a real integration, e.g.:

```ts
// after zod validation succeeds:
await resend.emails.send({ to: "sales@forjen.com", ... });
// or forward result.data to a CRM (HubSpot/Salesforce) via their REST API / webhook
```

The honeypot field (`companyWebsite`) and zod validation should stay regardless of backend.

## SEO

- Per-page `metadata` exports (Open Graph + Twitter Card) on every route
- `app/sitemap.ts`, `app/robots.ts`
- JSON-LD: `Organization` + `WebSite` in `app/layout.tsx`, `Article` schema on
  `app/news/[slug]/page.tsx`
- **Multi-language**: not implemented. The site is structured so a future locale rollout would
  wrap routes in `app/[locale]/...` (next-intl or similar) and move the `/data` copy into
  per-locale dictionaries — no other structural changes needed.

## Known Simplifications

Given the scope of the brief, a few things were intentionally simplified rather than left half-built:

- **Global Projects map** is a stylised grid/graticule with percentage-positioned markers, not a
  real coastline SVG (avoids pulling in a third-party map asset). Region filtering, hover
  tooltips, click-through detail panel and a mobile list fallback all work.
- **News content** is structured data in `data/news.ts` rather than MDX, so there's no MDX
  toolchain to configure — moving to a CMS later just means swapping the data source, not the
  page code.
- Modals (video, document request, project detail) close on `Escape`/backdrop click and are
  labelled for screen readers, but don't implement full focus-trapping/focus-return — worth
  revisiting with a dialog primitive (e.g. Radix) if accessibility auditing flags it.

## Verified

`npm run build` and `npm run lint` both pass clean (0 errors/warnings). Manually exercised in a
browser: navigation (desktop + mobile full-screen menu), the `/contact` form end-to-end (submits
to the mock API and shows the success state), the Global Projects map/filter/detail flow, and the
375px mobile breakpoint.
