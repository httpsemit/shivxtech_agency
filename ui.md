# UI Design Document
## Web Development Agency Website — v1.0
### Style: Dark & Bold

---

## 1. Document Info

| Field | Detail |
|---|---|
| **Version** | v1.0 |
| **Visual Style** | Dark & Bold |
| **Framework** | Next.js 14 + Tailwind CSS |
| **Font** | Inter (Google Fonts) |
| **Last Updated** | March 2026 |

---

## 2. Design Principles

| # | Principle | Description |
|---|---|---|
| 1 | **Dark-first** | Dark backgrounds with bright blue accents, not the reverse |
| 2 | **Bold typography** | Large, high-contrast headings that command attention |
| 3 | **Minimal noise** | No gradients, no decorative textures — flat and purposeful |
| 4 | **Conversion-focused** | Every section ends with a visible CTA |
| 5 | **Mobile-first** | All layouts designed for mobile and scaled up |

---

## 3. Color Tokens

### 3.1 Primary Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `primary` | `#0F172A` | `slate-900` | Page background, nav bar |
| `surface` | `#1E293B` | `slate-800` | Cards, sections, panels |
| `surface-raised` | `#2D3E55` | `slate-700` | Hover states, elevated cards |
| `border` | `#334155` | `slate-700` | Card borders, dividers |
| `border-subtle` | `#1E293B` | `slate-800` | Section dividers |

### 3.2 Accent Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `accent` | `#3B82F6` | `blue-500` | Primary CTA, links, highlights |
| `accent-hover` | `#2563EB` | `blue-600` | Button hover state |
| `accent-subtle` | `rgba(59,130,246,0.15)` | — | Icon backgrounds, badges |
| `accent-border` | `rgba(59,130,246,0.4)` | — | Accent card borders |

### 3.3 Text Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `text-primary` | `#FFFFFF` | `white` | Headings, key labels |
| `text-secondary` | `#CBD5E1` | `slate-300` | Body text, feature lists |
| `text-muted` | `#94A3B8` | `slate-400` | Nav links, subtitles |
| `text-faint` | `#64748B` | `slate-500` | Card descriptions, captions |
| `text-disabled` | `#475569` | `slate-600` | Unavailable features |

### 3.4 Semantic Colors

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `success` | `#22C55E` | `green-500` | Checkmarks, success state |
| `error` | `#EF4444` | `red-500` | Form errors |
| `warning` | `#FBBF24` | `amber-400` | Star ratings |
| `info` | `#0EA5E9` | `sky-500` | Info badges |

---

## 4. Typography

### 4.1 Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 4.2 Type Scale

| Element | Size | Weight | Line Height | Color |
|---|---|---|---|---|
| H1 — Hero | 56px / 3.5rem | 700 | 1.15 | `#FFFFFF` |
| H2 — Section | 40px / 2.5rem | 700 | 1.2 | `#FFFFFF` |
| H3 — Subsection | 28px / 1.75rem | 600 | 1.3 | `#FFFFFF` |
| H4 — Card title | 16px / 1rem | 500 | 1.4 | `#FFFFFF` |
| Body | 15px / 0.9375rem | 400 | 1.7 | `#94A3B8` |
| Small / caption | 13px / 0.8125rem | 400 | 1.6 | `#64748B` |
| Label / badge | 12px / 0.75rem | 500 | 1 | varies |

### 4.3 Special Text Styles

```css
/* Section eyebrow label */
.eyebrow {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #3B82F6;
}

/* Hero headline */
.hero-title {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.15;
  color: white;
}

/* Accent span (inside headings) */
.accent-text {
  color: #3B82F6;
}
```

---

## 5. Spacing System

Based on a 4px base unit.

| Token | Value | Usage |
|---|---|---|
| `xs` | 4px | Icon gaps, tight padding |
| `sm` | 8px | Inline gaps, badge padding |
| `md` | 16px | Card padding (compact), stack gaps |
| `lg` | 24px | Card padding (standard) |
| `xl` | 32px | Section inner padding |
| `2xl` | 48px | Section vertical padding |
| `3xl` | 64px | Hero vertical padding |

---

## 6. Border & Radius

| Context | Value |
|---|---|
| Cards | `border-radius: 12px` |
| Buttons | `border-radius: 8px` |
| Badges / pills | `border-radius: 20px` |
| Icon containers | `border-radius: 10px` |
| Inputs | `border-radius: 8px` |
| Default border | `0.5px solid #334155` |
| Featured border | `1.5px solid #3B82F6` |

---

## 7. Component Specs

---

### 7.1 Navigation Bar

| Property | Value |
|---|---|
| Background | `#0F172A` |
| Height | `64px` |
| Position | `sticky top-0 z-50` |
| Border bottom | `0.5px solid #1E293B` |
| Logo | Icon (32×32) + Agency name |
| Nav links | 5 items: Services, Portfolio, Pricing, About, Contact |
| Nav link color | `#94A3B8` — hover: `#FFFFFF` |
| CTA button | "Book a Call" — `bg-blue-500`, `px-4 py-2`, `rounded-lg` |
| Mobile | Hamburger menu at `md` breakpoint |

**Tailwind classes — Nav link:**
```
text-slate-400 hover:text-white text-sm transition-colors duration-150
```

**Tailwind classes — CTA button:**
```
bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors
```

---

### 7.2 Hero Section

| Property | Value |
|---|---|
| Background | `#0F172A` |
| Padding | `64px 48px` |
| Max width | `560px` (content area) |
| Eyebrow badge | Blue pill — icon dot + text |
| Headline | 44px, `font-weight: 700`, accent on key phrase |
| Subheadline | 15px, `color: #94A3B8`, max-width 440px |
| Primary CTA | "Book a Free Consultation" — filled blue |
| Secondary CTA | "View Our Work" — text with arrow icon |
| Stats bar | 3 stats separated by vertical dividers (50+ Projects / 4.9★ / 2 wks) |
| Decorative | Soft radial circle `rgba(59,130,246,0.12)` top-right |

**Eyebrow badge:**
```css
background: rgba(59,130,246,0.15);
border: 0.5px solid rgba(59,130,246,0.4);
border-radius: 20px;
padding: 4px 12px;
color: #93C5FD;
font-size: 12px;
font-weight: 500;
```

---

### 7.3 Service Cards

| Property | Value |
|---|---|
| Grid | 3 columns desktop, 2 tablet, 1 mobile |
| Card background | `#1E293B` |
| Card border | `0.5px solid #334155` — hover: `#3B82F6` |
| Card radius | `12px` |
| Card padding | `24px` |
| Icon container | `40×40px`, `rgba(59,130,246,0.15)` bg, `border-radius: 10px` |
| Icon color | `#3B82F6` |
| Title | `14px`, `font-weight: 500`, white |
| Description | `12px`, `color: #64748B`, `line-height: 1.6` |
| Last card | "Have something in mind?" CTA card with accent border |
| Hover effect | Border color transitions to `#3B82F6` |

**Services list:**
1. Web Development — Monitor icon
2. E-commerce — Shopping bag icon
3. Landing Pages — Layers icon
4. Website Redesign — Layout icon
5. SEO Optimization — Search icon
6. Custom project CTA card

---

### 7.4 Portfolio Grid

| Property | Value |
|---|---|
| Grid | 3 columns desktop, 2 tablet, 1 mobile |
| Card background | `#1E293B` |
| Image area | `140px` height, dark themed illustration |
| Hover overlay | `rgba(59,130,246,0.2)` + "View project ↗" pill |
| Industry badge | Color-coded by industry (blue/green/purple) |
| Description | `11px`, muted, max 2 lines |
| Tech stack tags | Small dark pills `#0F172A` bg |
| Footer link | "View all projects →" centered, blue |

**Industry badge color mapping:**
| Industry | Background | Text |
|---|---|---|
| Restaurant | `rgba(59,130,246,0.15)` | `#93C5FD` |
| Gym / Health | `rgba(34,197,94,0.15)` | `#86EFAC` |
| Real Estate | `rgba(167,139,250,0.15)` | `#C4B5FD` |
| Hotel | `rgba(251,191,36,0.15)` | `#FDE68A` |
| School | `rgba(249,115,22,0.15)` | `#FDBA74` |

---

### 7.5 Pricing Cards

| Property | Starter | Pro | Premium |
|---|---|---|---|
| Background | `#1E293B` | `#1E2D4A` | `#1E293B` |
| Border | `0.5px solid #334155` | `1.5px solid #3B82F6` | `0.5px solid #334155` |
| Badge | none | "MOST POPULAR ⭐" — blue pill | none |
| Tier label | `12px`, `#94A3B8`, uppercase | `12px`, `#93C5FD`, uppercase | `12px`, `#94A3B8`, uppercase |
| Price | `34px`, `font-weight: 700`, white | same | same |
| Feature list | `12px`, muted text | `12px`, `#CBD5E1` | `12px`, muted |
| Check icon | `#22C55E` | `#22C55E` | `#22C55E` |
| Cross icon | `#334155` | `#334155` | `#334155` |
| CTA | Outline button | Filled blue button | Outline button |

**Featured card badge:**
```css
position: absolute;
top: -12px;
left: 50%;
transform: translateX(-50%);
background: #3B82F6;
color: white;
font-size: 10px;
font-weight: 600;
padding: 4px 14px;
border-radius: 20px;
letter-spacing: 0.5px;
white-space: nowrap;
```

---

### 7.6 Testimonial Cards

| Property | Value |
|---|---|
| Grid | 3 columns desktop, 1 mobile |
| Background | `#1E293B` |
| Border | `0.5px solid #334155` |
| Stars | `#FBBF24` (amber-400), 5 stars |
| Quote text | `12px`, `#94A3B8`, `line-height: 1.7` |
| Avatar | 32×32 initials circle, color-coded per client |
| Name | `12px`, white, `font-weight: 500` |
| Role | `11px`, `#64748B` |

---

### 7.7 Contact Form

| Field | Type | Placeholder |
|---|---|---|
| Name | Text input | "Your full name" |
| Email | Email input | "you@company.com" |
| Phone | Tel input | "+91 98765 43210" (optional) |
| Project type | Select | "Select a service" |
| Budget | Select | "Select a budget range" |
| Message | Textarea (4 rows) | "Tell us about your project..." |
| Submit | Button | "Send Message" (filled blue) |

**Input style:**
```css
background: #1E293B;
border: 0.5px solid #334155;
border-radius: 8px;
color: white;
font-size: 14px;
padding: 10px 14px;
width: 100%;
```
**Focus state:** `border-color: #3B82F6; outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.15)`

**Error state:** `border-color: #EF4444`

**Success state:** `border-color: #22C55E`

---

### 7.8 WhatsApp Floating Button

| Property | Value |
|---|---|
| Position | `fixed bottom-6 right-6 z-50` |
| Background | `#25D366` (WhatsApp green) |
| Size | `48×48px` (icon only) or pill with label |
| Border radius | `24px` (circular) |
| Icon | WhatsApp SVG, white, 20×20px |
| Animation | `animate-pulse` — subtle attention ring |
| Mobile | Always visible |
| Desktop | Visible, can hide on scroll up |

**Tooltip on hover:** "Chat with us on WhatsApp"

---

### 7.9 Footer

| Property | Value |
|---|---|
| Background | `#0F172A` |
| Border top | `0.5px solid #1E293B` |
| Padding | `48px 32px 24px` |
| Grid | 4 columns: Brand (2fr) + 3 × link columns |
| Logo + description | Left column |
| Columns | Services / Company / Contact |
| Link color | `#64748B` — hover: `#94A3B8` |
| Copyright | `11px`, `#475569` |
| Bottom bar | Copyright left, Privacy + Terms right |

---

## 8. Responsive Breakpoints

| Breakpoint | Tailwind | Width | Layout changes |
|---|---|---|---|
| Mobile | `base` | < 640px | 1-col grid, stacked nav, hidden desktop menu |
| Tablet | `md` | 768px | 2-col cards, hamburger → full nav |
| Desktop | `lg` | 1024px | 3-col cards, full layout |
| Wide | `xl` | 1280px | Max container `max-w-7xl` centered |

### Grid behavior per section

| Section | Mobile | Tablet | Desktop |
|---|---|---|---|
| Services | 1 col | 2 col | 3 col |
| Portfolio | 1 col | 2 col | 3 col |
| Pricing | 1 col (stacked) | 1 col | 3 col |
| Testimonials | 1 col | 1 col | 3 col |
| Footer | 2 col | 2 col | 4 col |

---

## 9. Animation & Interaction

| Element | Animation | Duration | Notes |
|---|---|---|---|
| Page load | Fade in + slide up | 400ms | `opacity-0 → opacity-100`, `translate-y-4 → translate-y-0` |
| Service cards | Border color transition | 200ms | On hover |
| Portfolio cards | Overlay fade | 200ms | On hover |
| CTA buttons | Scale + bg | 150ms | `scale-[0.98]` on click |
| WhatsApp button | Pulse ring | Continuous | `animate-pulse` |
| Nav links | Color transition | 150ms | `text-slate-400 → white` |
| Section entrance | Scroll-triggered fade | 500ms | Using `IntersectionObserver` |

**Scroll animation Tailwind config:**
```js
// tailwind.config.ts
animation: {
  'fade-up': 'fadeUp 0.5s ease-out forwards',
},
keyframes: {
  fadeUp: {
    from: { opacity: '0', transform: 'translateY(16px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  }
}
```

---

## 10. Icon System

**Library:** Lucide React

| Section | Icons used |
|---|---|
| Services | `Monitor`, `ShoppingBag`, `Layers`, `Layout`, `Search` |
| Portfolio | `ExternalLink`, `Tag` |
| Navigation | `Menu`, `X` (close), `ChevronRight` |
| Contact | `Mail`, `Phone`, `MapPin`, `Send` |
| Pricing | `Check`, `X` |
| Footer | `Twitter`, `Instagram`, `Linkedin` |

**Icon sizing:**
```tsx
// Nav icons
<Icon size={16} />

// Card icons (in 40×40 container)
<Icon size={20} strokeWidth={1.5} />

// Inline icons
<Icon size={14} />
```

---

## 11. Page-by-Page Layout Summary

### `/` — Homepage

```
Navbar (sticky)
├── Hero Section
│   ├── Eyebrow badge
│   ├── H1 headline + accent
│   ├── Subheadline
│   ├── Dual CTA
│   └── Stats bar (3 metrics)
├── Services Overview (6 cards)
├── Portfolio Preview (3 featured cards)
├── How It Works (3-step row)
├── Pricing Packages (3 cards)
├── Testimonials (3 cards)
├── About Snapshot (2-col: text + image)
└── Final CTA Banner
Footer
WhatsApp floating button (all pages)
```

### `/services`
```
Hero sub-banner (page title)
Services grid (6 cards, expanded descriptions)
Process section
CTA
```

### `/portfolio`
```
Hero sub-banner
Filter bar (All / Restaurant / Gym / Hotel etc.)
Portfolio grid (all projects, 3-col)
CTA
```

### `/pricing`
```
Hero sub-banner
Pricing cards (3 tiers)
Feature comparison table
FAQ accordion
CTA
```

### `/about`
```
Hero sub-banner
Agency story (2-col text + image)
Mission / Values (3 cards)
Team section
Stats row
CTA
```

### `/contact`
```
Hero sub-banner
2-col layout:
├── Left: Contact form
└── Right: Calendly embed
Contact details (email, phone, WhatsApp)
```

---

## 12. Tailwind Config

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{tsx,ts}', './components/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        surface: '#1E293B',
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
} satisfies Config
```

---

## 13. Accessibility Checklist

| Rule | Implementation |
|---|---|
| Color contrast | All text meets WCAG AA 4.5:1 minimum |
| Focus rings | `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2` on all interactive elements |
| Alt text | All `<Image>` components have descriptive `alt` attributes |
| ARIA labels | Icon-only buttons use `aria-label` |
| Keyboard nav | Tab order follows visual reading order |
| Skip link | `<a href="#main">Skip to main content</a>` at top of body |
| Reduced motion | All animations wrapped in `@media (prefers-reduced-motion: no-preference)` |
| Min font size | 12px minimum — body text 15px+ |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer>` used correctly |

---

*UI Document — Web Development Agency Website v1.0*
*Style: Dark & Bold | Stack: Next.js 14 + Tailwind CSS*