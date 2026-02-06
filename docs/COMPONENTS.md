# Blue Monkeys Medical — Component Architektur

---

## 🧱 UI Components (Atoms)

### Button
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string  // Wenn gesetzt, als Link rendern
}
```

**Styling:**
- Keine border-radius (eckig!)
- Hover: Farbinversion
- Transition: cubic-bezier(0.4, 0, 0.2, 1)

### Card
```tsx
interface CardProps {
  children: React.ReactNode
  hover?: boolean  // Hover-Effekt
  className?: string
}
```

### Heading
```tsx
interface HeadingProps {
  level: 1 | 2 | 3 | 4
  children: React.ReactNode
  className?: string
}
```
**Styling:** Rift-Bold, uppercase, keine margin by default

### Text
```tsx
interface TextProps {
  size: 'sm' | 'md' | 'lg'
  color?: 'default' | 'muted' | 'primary'
  children: React.ReactNode
}
```

### Input
```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}
```

### Dots (Dekorativ)
```tsx
interface DotsProps {
  count?: number  // Default: 3
  color?: string  // Default: #6798df
}
```

---

## 📐 Layout Components

### Container
```tsx
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'full'
  children: React.ReactNode
}
```
Max-widths: sm=744px, md=960px, lg=1134px

### Section
```tsx
interface SectionProps {
  id?: string
  padding?: 'sm' | 'md' | 'lg'  // Vertical padding
  background?: 'white' | 'gray' | 'dark'
  children: React.ReactNode
}
```

### Grid
```tsx
interface GridProps {
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
```

---

## 🎨 Section Components

### Hero
```tsx
interface HeroProps {
  headline: string
  subline: string
  cta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}
```

### ServiceGrid
```tsx
interface Service {
  icon: string  // Icon name oder Component
  title: string
  description: string
  href: string
}

interface ServiceGridProps {
  services: Service[]
}
```

### Testimonial
```tsx
interface TestimonialProps {
  quote: string
  author: string
  role: string
  company?: string
  image?: string
}
```

### ProcessSteps
```tsx
interface Step {
  number: number
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
}
```

### CTASection
```tsx
interface CTASectionProps {
  headline: string
  text?: string
  cta: {
    text: string
    href: string
  }
  variant?: 'default' | 'dark'
}
```

### ContactForm
```tsx
interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>
}

interface FormData {
  name: string
  email: string
  phone?: string
  message: string
  praxisType?: 'arzt' | 'zahnarzt' | 'other'
}
```

---

## 🧭 Navigation Components

### Header
```tsx
interface HeaderProps {
  logo: string
  links: NavLink[]
  cta?: {
    text: string
    href: string
  }
}

interface NavLink {
  label: string
  href: string
}
```

### Footer
```tsx
interface FooterProps {
  logo: string
  contact: {
    email: string
    phone: string
    address: string
  }
  links: {
    label: string
    href: string
  }[]
  social?: {
    platform: 'linkedin' | 'instagram' | 'facebook'
    href: string
  }[]
}
```

### MobileMenu
- Slide-in von rechts
- Full-screen overlay
- Animation wie bluemonkeys.at

---

## 🎬 Animations (Framer Motion)

### fadeInUp
```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}
```

### staggerChildren
```tsx
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### hoverScale
```tsx
const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
}
```

---

## 📁 File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Heading.tsx
│   │   ├── Text.tsx
│   │   ├── Input.tsx
│   │   ├── Dots.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Grid.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactForm.tsx
│   │   └── index.ts
│   └── icons/
│       └── index.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── animations.ts
└── styles/
    └── globals.css
```

---

## 🔧 Utility Functions

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

```typescript
// lib/animations.ts
export const transitions = {
  default: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  slow: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  spring: { type: 'spring', stiffness: 300, damping: 30 }
}

export const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 }
  },
  // ...
}
```
