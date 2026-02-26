# Blue Monkeys Medical — Tasks

## Current Sprint: V2 Landing Page (Full Build)

### Phase 1 — Foundation
- [ ] Create `src/app/v2/page.tsx` — new page route
- [ ] Verify brand fonts (Rift-Bold, hk_grotesk) are loaded in `globals.css`
- [ ] Confirm Tailwind v4 tokens match brand colors in `globals.css`

### Phase 2 — Core Sections (Build Order = Scroll Order)
- [ ] **Header v2** — sticky nav, brand blue CTA button, mobile hamburger
- [ ] **Hero** — pain-focused headline, social proof mini-bar, single CTA to form
- [ ] **Problems** — agitate the pain: what doctors are losing without good marketing
- [ ] **Services** — bento grid of 6 services, each with result metric
- [ ] **Process** — 3–4 step "how it works" to reduce friction
- [ ] **Case Studies** — 3 real results (Dr. Weber, Dr. Berger, Dr. Steiner)
- [ ] **Testimonials** — 3–5 quotes from real clients
- [ ] **Why Us** — differentiators vs generic agencies
- [ ] **FAQ** — 5–7 objection-handling questions
- [ ] **Contact Form** — multi-step: service → practice details → contact info
- [ ] **CTA Banner** — urgency section before footer
- [ ] **Footer v2** — links, legal, contact

### Phase 3 — Polish & Conversion
- [ ] Add scroll-triggered animations (Framer Motion) — tasteful, not overdone
- [ ] Sticky CTA bar on mobile (appears after hero scrolls past)
- [ ] Form validation (client-side) + success/error states
- [ ] Meta tags + OG image for SEO
- [ ] Cookie consent banner (DSGVO)
- [ ] Legal pages: Impressum + Datenschutz (placeholder content)

### Phase 4 — Tech & Launch
- [ ] `npm run build` passes with no errors
- [ ] Lighthouse audit > 90 all categories
- [ ] Test on iPhone 14 (375px) and desktop (1440px)
- [ ] Vercel deployment configured
- [ ] Analytics: Vercel Analytics + Google Tag Manager setup
- [ ] Form backend: Resend email integration

---

## Backlog (V1.1)
- [ ] Calendly embed in contact section
- [ ] Separate case study detail pages
- [ ] Blog / SEO articles section
- [ ] A/B test Hero headlines
- [ ] Live chat widget

## Completed
- [x] Repo setup (Next.js 16, Tailwind v4, Framer Motion)
- [x] CLAUDE.md, TASKS.md, ARCHITECTURE.md created
- [x] Legacy page preserved at `src/app/page.tsx`
- [x] Component foundations: Button, Card, Badge in `src/components/ui/`

---

## Notes
- **Primary CTA everywhere:** "Kostenlose Analyse starten" → scrolls to contact form
- **Secondary CTA:** "Erfolgsgeschichten ansehen" → scrolls to #cases
- All urgency language: "3 Plätze frei für Q1 2025" (update each quarter)
- Prices are intentionally hidden — "auf Anfrage" / "individuell"
