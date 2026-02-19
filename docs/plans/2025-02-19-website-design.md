# AR Company Website Design Document

**Date:** 2025-02-19
**Type:** Software Company Marketing Website
**Status:** Approved

## Overview

A modern, responsive corporate website for a software development studio that builds web and mobile applications. The site features a clean, professional aesthetic inspired by Jasper with approachable, warm design elements.

## Technology Stack

### Core Framework
- **Next.js 15** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Node.js 20+**

### Styling & UI
- **Tailwind CSS v4** for utility-first styling
- **Framer Motion** for animations and micro-interactions
- **Design tokens** for consistent theming

### Content Management
- **Phase 1 (Current):** MDX files with frontmatter
- **Phase 2 (Future):** Strapi CMS headless integration

### Deployment & Hosting
- **Vercel** for production hosting
- **GitHub Actions** for CI/CD
- **Preview deployments** for pull requests

### Analytics & Monitoring
- **Vercel Analytics**
- **Google Analytics 4**
- **Core Web Vitals tracking**

## Architecture

### Monolithic Next.js Application

Single Next.js application with integrated content fetching, optimized builds, and unified deployment.

**Benefits:**
- Simpler deployment and CI/CD
- Better SEO with unified SSG configuration
- Faster development with shared components
- Lower hosting costs
- Easier to maintain

## Project Structure

```
ar-company-site/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Homepage
│   │   ├── solutions/
│   │   │   └── page.tsx          # Solutions/Services
│   │   ├── products/
│   │   │   └── page.tsx          # Products
│   │   ├── case-studies/
│   │   │   ├── page.tsx          # Case studies listing
│   │   │   └── [slug]/page.tsx   # Individual case study
│   │   ├── pricing/
│   │   │   └── page.tsx          # Pricing
│   │   ├── about/
│   │   │   └── page.tsx          # About
│   │   ├── careers/
│   │   │   └── page.tsx          # Careers
│   │   └── contact/
│   │       └── page.tsx          # Contact
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Blog post
│   ├── layout.tsx                # Root layout
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Modal.tsx
├── content/
│   ├── homepage/
│   ├── solutions/
│   ├── case-studies/
│   └── blog/
├── lib/
│   ├── mdx.ts                   # MDX utilities
│   └── utils.ts
├── public/
│   └── images/
├── styles/
│   └── tokens.css                # Design tokens
├── types/
│   └── mdx.ts
├── tailwind.config.ts
└── package.json
```

## Design System

### Color Palette

Warm, professional colors inspired by Jasper with a friendly touch.

```css
/* Primary - Warm Blue-Indigo */
--primary-50: #eef2ff
--primary-100: #e0e7ff
--primary-500: #6366f1  /* Primary CTA */
--primary-600: #4f46e5
--primary-700: #4338ca

/* Secondary - Warm Amber */
--secondary-50: #fffbeb
--secondary-100: #fef3c7
--secondary-500: #f59e0b  /* Accents, highlights */
--secondary-600: #d97706

/* Neutrals - Warm Gray */
--neutral-50: #fafafa
--neutral-100: #f5f5f4
--neutral-200: #e7e5e4
--neutral-800: #292524
--neutral-900: #1c1917

/* Semantic */
--success: #10b981
--warning: #f59e0b
--error: #ef4444
```

### Typography

**Font Stack:** Inter / Geist (system fallback)

```css
/* Headings */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 600-700;
line-height: 1.2;

/* Body */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 400-500;
line-height: 1.6;

/* UI Elements */
font-size: 0.875rem;
```

### Spacing Scale

Base unit: 4px
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Component Styles

- **Buttons:** Rounded (8px), subtle shadows, hover lift effect
- **Cards:** White background, subtle border, hover glow
- **Inputs:** 1px border, focus ring with primary color
- **Badges:** Pill-shaped, color-coded by category

## Page Structure

### Homepage (`/`)
- Hero section with headline, subheadline, dual CTAs
- Social proof logos bar ("Trusted by")
- Value propositions grid (3-6 benefits)
- Featured services overview
- Portfolio preview (3-6 featured projects)
- Testimonials carousel
- Final CTA section
- Footer

### Solutions (`/solutions`)
- Hero: "How We Build Apps"
- Service 1: Discovery & Strategy
- Service 2: Design & UX
- Service 3: Development & QA
- Service 4: App Store Launch
- Process timeline visualization
- Team expertise section
- CTA

### Products (`/products`)
- Hero: "Our Products"
- Product cards (2-3 products)
- Features grid per product
- Pricing/integration information
- Related case study links
- CTA

### Case Studies (`/case-studies`)
- Listing: Grid of case study cards
- Filters: Industry, platform, project type
- Individual pages: Problem, solution, results, metrics

### Pricing (`/pricing`)
- Hero: "Transparent Pricing"
- 3-tier pricing cards
- Feature comparison table
- FAQ accordion
- CTA

### About (`/about`)
- Hero: Company story
- Values section
- Team grid with photos
- Company timeline/history
- CTA

### Contact (`/contact`)
- Hero: "Let's Talk"
- Contact form (name, email, company, message)
- Contact information (email, locations)
- Social media links

### Careers (`/careers`)
- Open positions listing
- Culture and benefits section
- Application form

### Blog (`/blog`)
- Article grid with categories
- Individual post pages
- Related articles section

## Component Architecture

### Layout Components
- **Header:** Sticky navigation with logo, nav links, CTA button
- **Footer:** Multi-column navigation, social links, copyright

### Section Components (Reusable)
- **Hero:** Headline, subheadline, CTAs, optional image
- **Features Grid:** Feature cards with icons
- **Testimonials:** Client quote carousel
- **Portfolio Gallery:** Project cards with thumbnails
- **Pricing Cards:** Tier comparison
- **Contact Form:** Validated form with success states

### UI Components (Atoms)
- **Button:** Primary, secondary, outline, ghost variants
- **Card:** Default, elevated, bordered variants
- **Badge:** For tags and categories
- **Input:** Text, email, textarea
- **Modal:** For previews and dialogs

## Accessibility & Performance

### WCAG 2.1 AA Compliance

**Color Contrast:**
- All text meets 4.5:1 ratio minimum
- Interactive elements meet 3:1 ratio
- Tested with axe DevTools

**Keyboard Navigation:**
- Logical tab order
- Visible focus indicators (2px solid primary)
- Skip to content link
- Escape key closes modals

**Semantic HTML:**
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Alt text for all images
- Form labels properly associated

### Performance Targets

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimization Strategies:**
- `next/image` for automatic optimization
- Lazy loading below-fold images
- Font optimization with `next/font`
- Code splitting per route
- Tailwind CSS purging
- Minified JavaScript bundles

## SEO Strategy

### Target Keywords
- **Primary:** "web app development", "mobile app development", "app store launch"
- **Secondary:** "custom software development", "iOS development", "Android development"
- **Long-tail:** "how to launch an app", "app development process", "turnkey app development"

### Structured Data
- Organization schema
- Service pages schema
- Case studies as CreativeWork
- Blog posts as Article

### Meta Tags
- Title: 50-60 characters
- Description: 150-160 characters
- OG tags for social sharing
- Twitter card markup

### Internal Linking
- Homepage → Solutions → Case Studies (conversion flow)
- Blog posts → relevant service pages
- Case studies → related services

## Content Management

### Phase 1: MDX-Based (Current)

Content stored in markdown files with frontmatter:

```
content/
├── homepage/
│   └── hero.mdx
├── solutions/
│   └── services.mdx
├── case-studies/
│   ├── project-alpha.mdx
│   ├── project-beta.mdx
│   └── project-gamma.mdx
└── blog/
    ├── post-1.mdx
    └── post-2.mdx
```

**Frontmatter Example:**
```yaml
---
title: "Project Alpha - E-commerce Transformation"
client: "TechCorp Inc."
category: "E-commerce"
platform: "iOS & Android"
date: "2025-01-15"
featured: true
thumbnail: "/images/cases/alpha-thumb.jpg"
---
```

### Phase 2: Strapi Migration

**Content Types:**
- Homepage (hero, features, testimonials)
- Services (title, description, icon, details)
- Case Studies (client, project, results, metrics)
- Blog Posts (title, content, author, date)
- Pricing Tiers (name, price, features)

**Migration Approach:**
1. Parse MDX files
2. Transform to Strapi format
3. Bulk import via API
4. Update Next.js to use Strapi client

## Development Workflow

### Local Setup
```bash
npm create next-app@latest
npm install -D tailwindcss @tailwindcss/typography
npm install framer-motion next-mdx-remote

npm run dev
```

### Git Workflow
- `main` - production
- `develop` - staging
- `feature/*` - feature branches
- Commit convention: `feat:`, `fix:`, `docs:`

### CI/CD (GitHub Actions)
- Lint (ESLint + Prettier)
- Type check (TypeScript)
- Build (Next.js)
- Test (Jest + React Testing Library)
- Deploy to Vercel preview

### Pre-commit Hooks
- Prettier formatting
- ESLint checks
- Type checking

## Deployment

### Vercel Configuration
- Automatic deployments from git
- Preview URLs for PRs
- Edge functions support
- Built-in analytics

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://yourcompany.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Timeline

### Phase 1: Foundation (Week 1-2)
- Project setup and configuration
- Design system implementation
- Core components development
- Layout components (Header, Footer)

### Phase 2: Core Pages (Week 3-4)
- Homepage
- Solutions/Services
- Products
- About

### Phase 3: Advanced Features (Week 5-6)
- Case studies with dynamic routing
- Pricing page
- Contact form with validation
- Blog implementation

### Phase 4: Polish & Launch (Week 7-8)
- SEO optimization
- Performance tuning
- Accessibility audit
- Content population
- Testing and QA
- Launch

## Success Criteria

- [ ] All core pages implemented and functional
- [ ] Mobile-responsive design (320px - 1920px)
- [ ] WCAG 2.1 AA compliant
- [ ] Core Web Vitals passing
- [ ] SEO meta tags and structured data
- [ ] Contact form with validation
- [ ] Fast page loads (< 3s on 3G)
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] CI/CD pipeline automated
- [ ] Deployed to production with custom domain

## Next Steps

1. Create implementation plan with writing-plans skill
2. Set up Next.js project with all dependencies
3. Configure Tailwind CSS with design tokens
4. Build core component library
5. Implement layout components
6. Develop pages systematically
7. Populate content in MDX files
8. Test, optimize, and deploy
