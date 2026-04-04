# 📄 Product Requirements Document (PRD)
## Web Development Agency Website — v1.0

---

## 1. Document Info

| Field | Detail |
|---|---|
| **Project Name** | Web Development Agency Website |
| **Version** | v1.0 |
| **Status** | Draft |
| **Tech Stack** | Next.js 14 + Tailwind CSS + TypeScript |
| **Pricing Model** | Fixed Packages (Starter / Pro / Premium) |
| **Target Launch** | 4 weeks from project kickoff |
| **Last Updated** | March 2026 |

---

## 2. Product Overview

The agency website is the **primary digital storefront** for client acquisition. It clearly communicates what the agency does, shows proof of work, and converts visitors into booked consultations — all within a fast, mobile-first experience.

### 2.1 Core Objectives

| # | Objective | How |
|---|---|---|
| 1 | Generate leads | Contact form, WhatsApp button, booking system |
| 2 | Build credibility | Portfolio, testimonials, about section |
| 3 | Communicate value | Service cards, pricing packages |
| 4 | Convert visitors | Strong CTAs at every scroll depth |

---

## 3. Target Audience

### Primary Users
- Small and local business owners
- Startups and entrepreneurs
- Companies wanting a website redesign
- Non-technical founders needing a digital presence

### Example Industries
Restaurants · Gyms · Schools · Hotels · Real Estate · Salons · Clinics · Coaching

---

## 4. Success Metrics

| Metric | Monthly Target |
|---|---|
| Contact form submissions | ≥ 20 |
| Consultation bookings | ≥ 10 |
| WhatsApp click-throughs | ≥ 15 |
| Portfolio page views | ≥ 200 |
| Bounce rate | < 55% |
| Page load time | < 2 seconds |
| Lighthouse Performance score | ≥ 90 |

---

## 5. Feature Scope — V1

### 5.1 Feature Table

| Feature | Priority | In V1 |
|---|---|---|
| Service showcase (cards) | Must Have | ✅ |
| Portfolio display (grid) | Must Have | ✅ |
| **Pricing / Packages Section** | Must Have | ✅ |
| **Consultation Booking System** | Must Have | ✅ |
| **WhatsApp Chat Button** | Must Have | ✅ |
| Contact form | Must Have | ✅ |
| Testimonials section | Must Have | ✅ |
| About / Agency story | Must Have | ✅ |
| Mobile responsive design | Must Have | ✅ |
| SEO fundamentals | Must Have | ✅ |
| Blog / CMS | Nice to Have | ❌ V2 |
| Client dashboard | Future | ❌ V2 |
| Chatbot integration | Future | ❌ V2 |

---

### 5.2 Feature Descriptions

#### 🔷 Pricing / Packages *(V1 Must-Have)*

Three fixed-price cards displayed side by side:

| | Starter | Pro | Premium |
|---|---|---|---|
| **Best for** | Small business / local | Growing business | E-commerce / custom |
| **Pages** | Up to 5 | Up to 10 | Unlimited |
| **CMS** | ❌ | ✅ | ✅ |
| **SEO Setup** | Basic | Full | Full + ongoing |
| **E-commerce** | ❌ | ❌ | ✅ |
| **Revisions** | 2 | 4 | Unlimited |
| **Support** | 1 month | 3 months | 6 months |
| **CTA** | Get Started | Most Popular ⭐ | Let's Talk |

> Prices to be filled in by agency. "Most Popular" badge shown on Pro card.

#### 🔷 Consultation Booking *(V1 Must-Have)*
- Embedded Calendly widget on `/contact` page
- Visitor picks date, time, fills name + email
- Auto confirmation email to visitor
- Admin calendar notification
- Zero backend needed

#### 🔷 WhatsApp Chat Button *(V1 Must-Have)*
- Floating button fixed to bottom-right on all pages
- Pre-filled message: *"Hi, I'm interested in your web development services"*
- Subtle pulse animation to attract attention
- Works on mobile and desktop

#### 🔷 Contact Form
- Fields: Name, Email, Phone, Project Type, Budget Range, Message
- Client-side + schema validation
- Email delivered via EmailJS (no backend)
- Success and error states shown to user

#### 🔷 Portfolio Display
- Responsive grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- Each card: project image, title, industry tag, tech stack badges, description
- Optional: live site link per project

#### 🔷 Service Showcase
- Icon + title + short description per service
- Services: Web Development, E-commerce, Landing Pages, Website Redesign, SEO Optimization

#### 🔷 Testimonials
- Client name, company, star rating, review text
- Carousel on mobile, grid on desktop

---

## 6. Website Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, services, portfolio preview, pricing, testimonials, CTA |
| `/services` | Services | Detailed service descriptions |
| `/portfolio` | Portfolio | All projects |
| `/about` | About | Agency story, mission, team |
| `/pricing` | Pricing | Package comparison table |
| `/contact` | Contact | Form + Calendly booking |

---

## 7. Homepage Sections (Scroll Order)

| # | Section | Goal |
|---|---|---|
| 1 | **Hero** | Grab attention — headline, subheadline, dual CTA |
| 2 | **Services Overview** | Show what's offered in 6 cards |
| 3 | **Portfolio Preview** | 3 featured projects — build trust |
| 4 | **How It Works** | 3-step process — reduce friction |
| 5 | **Pricing Packages** | Starter / Pro / Premium cards |
| 6 | **Testimonials** | Social proof carousel |
| 7 | **About Snapshot** | 2-line agency intro + link |
| 8 | **Final CTA Banner** | "Book a free consultation today" |

---

## 8. User Journey

```
Land on Homepage
      ↓
Hero → understand agency value
      ↓
Services → understand what's available
      ↓
Portfolio → trust is built
      ↓
Pricing → understand investment
      ↓
Testimonials → social proof confirmed
      ↓
CTA → Book Consultation or WhatsApp
      ↓
Lead captured ✅
```

---

## 9. CTAs

| CTA Label | Placement | Action |
|---|---|---|
| Book a Free Consultation | Hero, Navbar, Final Banner | Opens /contact with Calendly |
| View Our Work | Hero, Services | Navigates to /portfolio |
| Get Started / Let's Talk | Pricing cards | Opens contact form |
| Chat on WhatsApp | Floating button (all pages) | Opens WhatsApp |
| Contact Us | Navbar, Footer | Opens /contact |

---

---

# ⚙️ Technical Requirements Document (TRD)
## Web Development Agency Website — v1.0

---

## 1. System Architecture

```
Visitor's Browser
       ↓
  Next.js Frontend (Vercel — SSG/ISR)
       ↓           ↓            ↓
  EmailJS      Calendly      WhatsApp
 (Contact)    (Booking)      (Chat btn)
       ↓
 Email → Admin inbox
```

No dedicated backend server required for V1. All dynamic functionality handled via third-party APIs embedded in the frontend.

---

## 2. Technology Stack

| Layer | Choice | Reason |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | SSG for speed, SEO-friendly, Vercel-native |
| **Language** | TypeScript | Type safety, fewer runtime bugs |
| **Styling** | Tailwind CSS v3 | Responsive utilities, no CSS files needed |
| **Forms** | React Hook Form + Zod | Clean validation + type-safe schemas |
| **Email** | EmailJS | No backend, free tier, easy setup |
| **Booking** | Calendly Embed | Free, handles reminders + confirmations |
| **Animations** | Framer Motion | Smooth scroll + entrance animations |
| **Icons** | Lucide React | Lightweight, consistent icon set |
| **Hosting** | Vercel | Auto-deploy from GitHub, free SSL, CDN |
| **Analytics** | Google Analytics 4 | Track traffic, conversions, user behavior |
| **Images** | `next/image` + WebP | Lazy loading, auto optimization |

---

## 3. Recommended Integrations (V1)

| Integration | Purpose | Cost | Setup Time |
|---|---|---|---|
| **EmailJS** | Contact form emails | Free (200/mo) | ~30 mins |
| **Calendly** | Consultation booking | Free tier | ~20 mins |
| **WhatsApp Business** | Floating chat button | Free | ~10 mins |
| **Google Analytics 4** | Traffic & conversion tracking | Free | ~20 mins |
| **Vercel Analytics** | Core Web Vitals monitoring | Free | ~5 mins |

> Total integration cost for V1: **$0/month**

---

## 4. Project File Structure

```
/agency-website
├── /app
│   ├── layout.tsx              # Root layout, Navbar, Footer
│   ├── page.tsx                # Homepage
│   ├── /services/page.tsx
│   ├── /portfolio/page.tsx
│   ├── /about/page.tsx
│   ├── /pricing/page.tsx
│   └── /contact/page.tsx
├── /components
│   ├── /ui                     # Button, Card, Badge, Input
│   ├── /sections               # Hero, Services, Portfolio...
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx      # Floating button component
├── /data
│   ├── services.ts             # Service card content
│   ├── portfolio.ts            # Project data
│   ├── testimonials.ts         # Client reviews
│   └── pricing.ts              # Package details
├── /public
│   ├── /images
│   └── /icons
├── /lib
│   └── emailjs.ts              # EmailJS helper
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 5. Functional Requirements

### 5.1 WhatsApp Floating Button

```tsx
// Fixed bottom-right, visible on all pages
// Link format:
// https://wa.me/{PHONE_NUMBER}?text=Hi%2C%20I'm%20interested%20in%20your%20services

// Tailwind classes:
// "fixed bottom-6 right-6 z-50 bg-green-500
//  rounded-full p-3 shadow-lg animate-pulse"
```

### 5.2 Contact Form Schema

```typescript
const contactSchema = z.object({
  name:        z.string().min(2),
  email:       z.string().email(),
  phone:       z.string().optional(),
  projectType: z.enum(["website", "ecommerce", "landing", "redesign", "seo"]),
  budget:      z.enum(["under500", "500to1k", "1kto3k", "3kplus"]),
  message:     z.string().min(20),
});
```

### 5.3 Calendly Booking Embed

```tsx
// Install: npm install react-calendly
import { InlineWidget } from "react-calendly";

<InlineWidget
  url="https://calendly.com/YOUR_AGENCY"
  styles={{ height: "700px" }}
/>
```

### 5.4 Portfolio Data Shape

```typescript
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;           // /images/portfolio/project-name.webp
  industry: string;        // "Restaurant" | "Gym" | "Hotel" ...
  techStack: string[];     // ["Next.js", "Tailwind", "Stripe"]
  liveUrl?: string;
  featured: boolean;       // Show on homepage preview
};
```

### 5.5 Pricing Package Data Shape

```typescript
type PricingPackage = {
  name: "Starter" | "Pro" | "Premium";
  price: string;           // e.g. "$499" or "From $999"
  description: string;
  features: string[];
  isMostPopular: boolean;
  ctaLabel: string;
  ctaLink: string;
};
```

---

## 6. Non-Functional Requirements

### 6.1 Performance Targets

| Metric | Target |
|---|---|
| Page load (4G) | < 2 seconds |
| Lighthouse Performance | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| Lighthouse Accessibility | ≥ 85 |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

### 6.2 SEO Setup
- Meta title + description on every page (Next.js Metadata API)
- Open Graph tags (title, description, image) for social sharing
- `sitemap.xml` auto-generated via `next-sitemap`
- `robots.txt` configured to allow crawling
- `alt` text on every image
- JSON-LD structured data for local business schema

### 6.3 Security
- HTTPS enforced by Vercel automatically
- Honeypot field on contact form (anti-spam)
- All API keys in `.env.local` — never exposed to client
- Security headers via `next.config.ts`:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin`

### 6.4 Accessibility
- WCAG 2.1 AA target
- All interactive elements keyboard-navigable
- Focus rings visible on tab
- ARIA labels on icon buttons and form fields
- Minimum font size: 16px body
- Color contrast ratio: ≥ 4.5:1

---

## 7. UI Design System

### 7.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0F172A` | Dark backgrounds, headings |
| Accent | `#3B82F6` | Buttons, links, highlights |
| Accent Hover | `#2563EB` | Button hover state |
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, modals |
| Text Primary | `#1E293B` | Body text |
| Text Muted | `#64748B` | Captions, subtitles |
| Border | `#E2E8F0` | Card borders, dividers |
| Success | `#22C55E` | Form success state |
| Error | `#EF4444` | Form error state |

### 7.2 Typography

| Element | Font | Size | Weight |
|---|---|---|---|
| H1 | Inter | 56px / 3.5rem | 700 |
| H2 | Inter | 40px / 2.5rem | 600 |
| H3 | Inter | 28px / 1.75rem | 600 |
| H4 | Inter | 20px / 1.25rem | 600 |
| Body | Inter | 16px / 1rem | 400 |
| Small | Inter | 14px / 0.875rem | 400 |

### 7.3 Responsive Breakpoints

| Breakpoint | Width | Grid |
|---|---|---|
| Mobile | < 640px | 1 column |
| Tablet `md` | 768px | 2 columns |
| Desktop `lg` | 1024px | 3 columns |
| Wide `xl` | 1280px | Max container = 1280px |

---

## 8. Environment Variables

```bash
# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-agency

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 9. Deployment Pipeline

```
Local dev  →  next dev (localhost:3000)
     ↓
git push to GitHub (main branch)
     ↓
Vercel auto-detects push → builds project
     ↓
Vercel runs: next build
     ↓
Deploy to Vercel CDN (global edge network)
     ↓
Connect custom domain → Vercel DNS
     ↓
SSL certificate auto-provisioned ✅
```

---

## 10. 4-Week Launch Plan

| Week | Focus | Deliverables |
|---|---|---|
| **Week 1** | Setup + Structure | Repo, Next.js init, Tailwind config, routing, Navbar, Footer, design tokens |
| **Week 2** | Core Pages | Homepage sections, Services page, About page, Portfolio page |
| **Week 3** | Features + Integrations | Contact form + EmailJS, Calendly embed, WhatsApp button, Pricing page |
| **Week 4** | Polish + Launch | SEO setup, accessibility audit, performance optimization, domain connect, go live |

---

## 11. V1 → V2 Roadmap

| Feature | V1 | V2 |
|---|---|---|
| Portfolio grid | ✅ | + category filter |
| Pricing section | ✅ | + custom quote calculator |
| Contact form | ✅ | + CRM sync (HubSpot) |
| Booking | ✅ Calendly | + custom admin dashboard |
| Blog | ❌ | ✅ Sanity CMS |
| Testimonials | ✅ static | + video testimonials |
| Analytics | ✅ GA4 basic | + conversion funnel tracking |
| Chatbot | ❌ | ✅ |
| Client portal | ❌ | ✅ |

---

## 12. Maintenance Schedule

| Task | Frequency |
|---|---|
| Add new portfolio projects | After each delivery |
| Check form submissions + bookings | Daily |
| Review GA4 traffic + conversions | Weekly |
| Update npm dependencies | Monthly |
| Audit SEO rankings | Monthly |
| Performance check (Lighthouse) | Monthly |
| GitHub backup | Continuous (auto via git) |

---

*Document prepared for: Web Development Agency Website v1.0*
*Stack: Next.js 14 + Tailwind CSS + TypeScript | Launch: 4 weeks*