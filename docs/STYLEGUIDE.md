# Blue Monkeys Medical — Style Guide

Extrahiert aus bluemonkeys.at, adaptiert für die Medical-Vertical.

---

## 🎨 Farben

### Primärfarben

| Name | Hex | Verwendung |
|------|-----|------------|
| **Blue Monkey Blue** | `#6798df` | CTAs, Links, Akzente, Hover-States |
| **Deep Black** | `#1c1d1f` | Headlines, Body Text |
| **Pure White** | `#FFFFFF` | Backgrounds, Cards |

### Sekundärfarben

| Name | Hex | Verwendung |
|------|-----|------------|
| **Light Gray** | `#eeeff3` | Borders, Dividers |
| **Medium Gray** | `#dee2e8` | Card Borders, Subtle Lines |
| **Dark Gray** | `#6c757d` | Secondary Text, Captions |

### Medical-Erweiterung (NEU)

| Name | Hex | Verwendung |
|------|-----|------------|
| **Trust Green** | `#2D9C6B` | Success States, Vertrauen |
| **Medical White** | `#F8FAFB` | Softer Background Alternative |
| **Alert Red** | `#E53E3E` | Errors, Wichtige Hinweise |

---

## 📝 Typografie

### Font Families

```css
/* Headlines */
font-family: "Rift-Bold", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

/* Body Regular */
font-family: "hk_groteskregular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Body Bold */
font-family: "hk_groteskbold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Tailwind Config

```typescript
fontFamily: {
  headline: ['Rift-Bold', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
  sans: ['hk_grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
}
```

### Font Sizing

| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| H1 (Hero) | 56px / 3.5rem | 60px / 3.75rem | 700 |
| H2 | 40px / 2.5rem | 48px / 3rem | 700 |
| H3 | 36px / 2.25rem | 38px / 2.375rem | 700 |
| H4 | 20px / 1.25rem | 24px / 1.5rem | 700 |
| Body | 16px / 1rem | 24px / 1.5rem | 400 |
| Small | 14px / 0.875rem | 20px / 1.25rem | 400 |
| Caption | 13px / 0.8125rem | 20px / 1.25rem | 400 |

---

## 🔲 Komponenten

### Buttons

```css
/* Primary Button */
.btn-primary {
  height: 32px;
  line-height: 28px;
  border-radius: 0;  /* WICHTIG: Keine Rundungen! */
  background: #6798df;
  color: #fff;
  border: 1px solid #6798df;
  padding: 3px 14px 7px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: #fff;
  color: #6798df;
}
```

### Cards

```css
.card {
  background: #fff;
  box-shadow: 0 0 6px -1px rgba(0, 0, 0, 0.2);
  padding: 15px 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Grid

- Basis: 368px × 368px Kacheln
- Halbierte Kacheln: 184px × 184px
- Padding zwischen Items: 4px
- Max Container Width: 1104px (3 große Kacheln)

---

## 🖼️ Design Prinzipien

### 1. Kantig, nicht rund
- **Keine Border-Radius** auf Buttons
- Klare, harte Kanten
- Rasterbasiertes Layout

### 2. Schwarz + Blau + Weiß
- Minimalistisch
- Viel Whitespace
- Blau nur für Interaktion

### 3. Typografie als Design-Element
- Headlines in CAPS (uppercase)
- Bold, impactful Fonts
- Klare Hierarchie

### 4. Hover = Leben
- Alle interaktiven Elemente reagieren
- Scale-Transform auf Bildern (1.05)
- Farbwechsel auf Links

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 576px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 992px) { /* lg */ }
@media (min-width: 1200px) { /* xl */ }
```

### Container Max-Widths

| Breakpoint | Max-Width |
|------------|-----------|
| sm (576px) | 540px |
| md (768px) | 744px |
| lg (992px) | 960px |
| xl (1200px) | 1134px |

---

## 🎭 Tone of Voice

Basierend auf bluemonkeys.at:

- **Selbstbewusst** — "Wir lieben Webdesign mehr als Kanye sich selbst liebt."
- **Witzig** — Interne Jokes, Wortspiele
- **Direkt** — Keine Corporate-Sprache
- **Premium** — "Teuer aber die Besten"

### Medical-Adaption

Für Ärzte/Zahnärzte etwas angepasst:
- Weniger Kanye-Witze, mehr Expertise
- Selbstbewusst bleibt
- Klare Ergebnisse kommunizieren
- Respekt vor der Zielgruppe (sind selbst Experten)

---

## 🔗 Assets

### Logo
- Datei: `blue-monkeys-logo.svg`
- Breite Header: 185px
- Farbe: Schwarz oder Weiß (invertiert)

### Icons
- Style: Outline, 2px stroke
- Größe: 16px-24px
- Farbe: #6798df (aktiv) / #1c1d1f (inaktiv)

---

## 📦 Tailwind Tokens

```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        'bm-blue': '#6798df',
        'bm-black': '#1c1d1f',
        'bm-gray': {
          100: '#f8fafb',
          200: '#eeeff3',
          300: '#dee2e8',
          400: '#6c757d',
        },
        'bm-success': '#2D9C6B',
        'bm-error': '#E53E3E',
      },
      fontFamily: {
        headline: ['Rift-Bold', 'Impact', 'sans-serif'],
        sans: ['hk_grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'bm': '0 0 6px -1px rgba(0, 0, 0, 0.2)',
      },
      transitionTimingFunction: {
        'bm': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
}
```
