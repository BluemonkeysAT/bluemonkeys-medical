# Blue Monkeys Medical — Architecture

## Page Structure

### V2 Landing Page (`src/app/v2/page.tsx`)
Section order is intentional — follows the AIDA + PAS conversion framework:

| # | Section | Component | Purpose |
|---|---------|-----------|---------|
| 1 | Header | `Header` | Navigation + primary CTA |
| 2 | Hero | `Hero` | Hook + headline + urgency + social proof |
| 3 | Problems | `Problems` | Agitate the pain (PAS framework) |
| 4 | Services | `Services` | Bento grid of offerings |
| 5 | Process | `Process` | Reduce friction — show how it works |
| 6 | Case Studies | `CaseStudies` | Proof — real numbers from real practices |
| 7 | Testimonials | `Testimonials` | Social proof — doctor quotes |
| 8 | Why Us | `WhyUs` | Differentiation vs generic agencies |
| 9 | FAQ | `FAQ` | Objection handling |
| 10 | Contact | `Contact` | Multi-step lead form (THE conversion goal) |
| 11 | CTA Banner | `CTABanner` | Final urgency push |
| 12 | Footer | `Footer` | Legal links, contact info |

---

## Component Map

### Layout (`src/components/layout/`)
- `Header.tsx` — Fixed nav, scroll-aware bg, mobile hamburger menu
- `Footer.tsx` — Links, legal, address

### Sections (`src/components/sections/`)
- `Hero.tsx` — Full-screen hero with headline, social proof, CTA
- `Problems.tsx` — Pain point amplification (what they're losing)
- `Services.tsx` — 6 service cards in bento grid layout
- `Process.tsx` — 3-4 step how-it-works
- `CaseStudies.tsx` — Carousel of 3 case studies with metrics
- `Testimonials.tsx` — Testimonial grid/carousel
- `WhyUs.tsx` — Differentiators with icons
- `FAQ.tsx` — Accordion FAQ
- `Contact.tsx` — Multi-step contact form
- `CTABanner.tsx` — Urgency CTA before footer

### UI Primitives (`src/components/ui/`)
- `Button.tsx` — variants: primary | secondary | ghost; NO border-radius
- `Card.tsx` — white bg, bm-shadow, hover lift
- `Badge.tsx` — small labels/tags

### Library (`src/lib/`)
- `utils.ts` — `cn()` = clsx + twMerge
- `animations.ts` — Framer Motion variant presets (fadeUp, fadeIn, stagger)

---

## Design Token Reference

### Colors
```css
--color-primary:    #6798df;  /* Blue Monkeys Blue */
--color-black:      #1c1d1f;  /* Deep Black */
--color-white:      #FFFFFF;
--color-bg:         #F8FAFB;  /* Off-white background */
--color-border:     #dee2e8;  /* Card borders */
--color-border-lt:  #eeeff3;  /* Light dividers */
--color-muted:      #6c757d;  /* Secondary text */
--color-success:    #2D9C6B;  /* Trust green */
```

### Typography
```css
/* Headlines — all uppercase in JSX */
font-family: "Rift-Bold", Impact, "Arial Narrow Bold", sans-serif;

/* Body */
font-family: "hk_groteskregular", system-ui, sans-serif;
font-family: "hk_groteskbold", system-ui, sans-serif;  /* bold variant */
```

### Font Size Scale (Tailwind)
| Class | Size | Use |
|-------|------|-----|
| `text-[56px]` | 56px | H1 Hero |
| `text-[40px]` | 40px | H2 Section |
| `text-[36px]` | 36px | H3 |
| `text-xl` | 20px | Lead text |
| `text-base` | 16px | Body |
| `text-sm` | 14px | Captions, labels |

### Spacing & Layout
- Max container: `1104px` (3 service cards × 368px grid)
- Section padding: `py-20 lg:py-32`
- Grid gap: `gap-4` (4px between bento tiles)
- Section `id` anchors: `#services`, `#cases`, `#about`, `#contact`

---

## Animation Patterns (Framer Motion)

Use presets from `src/lib/animations.ts`. Prefer simple, tasteful animations:

```tsx
// Standard fade-up for section entries
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Stagger children
const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
}
```

- Always use `useInView` with `once: true` — animate on scroll, don't repeat
- No parallax effects on mobile (performance)
- No infinite auto-play animations unless subtle (trust logos scroll is ok)

---

## Form Architecture (`Contact.tsx`)

Multi-step form with 3 steps:
1. **Service selection** — which service(s) are they interested in?
2. **Practice details** — name, specialty, location, biggest challenge
3. **Contact info** — name, phone, email + submit

On submit:
- Client-side validation
- POST to `/api/contact` (Next.js Route Handler)
- Send email via Resend API
- Show success state with next steps

---

## Key IDs (for CTA scroll targets)
```
#services   — Services section
#cases      — Case Studies section
#about      — Why Us section (note: nav says "Über uns")
#contact    — Contact form
#process    — Process section
```

---

## What NOT to Do
- Never use `border-radius` on buttons (brand rule)
- Never use cyan `#5fdafb` or purple gradients (legacy v1, not brand)
- Never hardcode color hex values in components — use Tailwind tokens
- Never put business logic in page files — only in sections/components
- Never skip `useInView` on animated sections (performance)
