# Blue Monkeys Medical — CLAUDE.md

## Project
High-conversion landing page for **Blue Monkeys Medical**, a premium digital marketing agency for doctors and dentists in the **DACH region** (DE/AT/CH). The single goal: maximize **contact form submissions** ("Kostenlose Analyse").

- Language: **German (DE)** — all copy, labels, and UI text in German
- Market: Niedergelassene Ärzte & Zahnärzte, age 35–60, high income, low digital affinity
- Tone: Self-confident, direct, premium — no corporate jargon, results-focused

## Tech Stack
- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** (no config file — uses CSS-first config in globals.css)
- **Framer Motion** for animations
- **Lucide React** for icons
- `clsx` + `tailwind-merge` via `cn()` utility in `src/lib/utils.ts`

## Commands
```bash
npm run dev     # Dev server → localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

## File Structure
```
src/
  app/
    page.tsx          # LEGACY — do not touch, preserved as-is
    v2/page.tsx       # NEW high-performance landing page
    globals.css       # Tailwind + custom font vars
  components/
    layout/           # Header, Footer
    sections/         # Page sections (Hero, Services, CaseStudies, etc.)
    ui/               # Primitive components (Button, Card, Badge)
  lib/
    utils.ts          # cn() classname utility
    animations.ts     # Framer Motion presets
docs/                 # REQUIREMENTS.md, STYLEGUIDE.md, COPY.md, SITEMAP.md
.claude/
  ARCHITECTURE.md     # Component map + design system reference
  skills/             # Custom Claude skills for this project
TASKS.md              # Current task list and progress
```

## Design System (STRICT — never deviate)
| Token | Value |
|-------|-------|
| Primary Blue | `#6798df` |
| Black | `#1c1d1f` |
| White | `#FFFFFF` |
| Background | `#F8FAFB` |
| Success | `#2D9C6B` |
| Border | `#dee2e8` |

- **NO** cyan/teal/purple gradients (those are legacy — use brand blue only)
- **NO** border-radius on buttons (sharp edges = Blue Monkeys brand identity)
- **Headlines:** `font-family: "Rift-Bold"` — all uppercase
- **Body:** `font-family: "hk_grotesk"` (regular + bold variants)
- Buttons invert on hover: primary goes white→blue fill on hover, not glow effects
- Glassmorphism is NOT the brand style — use clean flat whites and blacks

## Key Conventions
- Mobile-first always. Test every section on 375px and 1440px.
- Lighthouse > 90 in all categories (Performance, Accessibility, SEO, Best Practices)
- DSGVO compliant — no tracking pixels without cookie consent
- Sections are in `src/components/sections/`. Each is a named export.
- `page.tsx` assembles sections — no logic in page files
- Use `cn()` for conditional classnames, never string concatenation

## Workflow
- Build full sections or the full page in one pass, then present for review
- Always use the **`frontend-design`** skill when making UI/design decisions
- Always use the **`medical-cro`** skill (`.claude/skills/medical-cro.md`) for copy and conversion decisions
- See `docs/` for full copy, requirements, and style guide
- See `.claude/ARCHITECTURE.md` for component map and section breakdown
- See `TASKS.md` for current task status before starting any work
