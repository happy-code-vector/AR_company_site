# AR Company Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a modern, responsive marketing website for a software development studio using Next.js, Tailwind CSS, and MDX for content management.

**Architecture:** Monolithic Next.js 15 application with App Router, static site generation for SEO, Tailwind CSS for styling, and MDX files for content (with future migration path to Strapi).

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, next-mdx-remote, Vercel deployment

---

## Phase 1: Project Foundation

### Task 1: Initialize Next.js Project

**Files:**
- Create: Project structure via Next.js CLI

**Step 1: Create Next.js app**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --yes
```

**Step 2: Verify installation**

```bash
npm run dev
```
Expected: Dev server starts at http://localhost:3000, shows Next.js welcome page

**Step 3: Clean default files**

```bash
rm app/page.tsx app/layout.tsx app/globals.css
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind"
```

---

### Task 2: Install Additional Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install dependencies**

```bash
npm install framer-motion next-mdx-remote @mdx-js/loader @mdx-js/react gray-matter
npm install -D @tailwindcss/typography @types/node
```

**Step 2: Verify installation**

```bash
npm list framer-motion next-mdx-remote
```
Expected: Shows installed versions

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "deps: install framer-motion, MDX utilities, and Tailwind plugins"
```

---

### Task 3: Configure Tailwind CSS with Design Tokens

**Files:**
- Create: `tailwind.config.ts`
- Create: `styles/tokens.css`
- Create: `app/globals.css`

**Step 1: Create Tailwind config**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f4',
          200: '#e7e5e4',
          800: '#292524',
          900: '#1c1917',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
```

**Step 2: Create design tokens CSS**

```css
/* styles/tokens.css */
@theme {
  --font-inter: 'Inter', system-ui, sans-serif;

  --color-primary-50: #eef2ff;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;

  --color-secondary-500: #f59e0b;
  --color-secondary-600: #d97706;

  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f4;
  --color-neutral-900: #1c1917;

  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}
```

**Step 3: Create global styles**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-neutral-50 text-neutral-900 font-sans antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-semibold tracking-tight;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}
```

**Step 4: Commit**

```bash
git add tailwind.config.ts styles/ app/globals.css
git commit -m "feat: configure Tailwind CSS with design tokens and color system"
```

---

### Task 4: Setup Root Layout and Fonts

**Files:**
- Create: `app/layout.tsx`
- Create: `lib/utils.ts`

**Step 1: Create utility functions**

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Step 2: Install clsx and tailwind-merge**

```bash
npm install clsx tailwind-merge
```

**Step 3: Create root layout**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AR Company - Web & Mobile App Development',
  description: 'We build and ship web and mobile applications to app stores. From concept to launch, we handle everything.',
  keywords: ['web app development', 'mobile app development', 'app store launch'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

**Step 4: Commit**

```bash
git add lib/utils.ts app/layout.tsx package.json package-lock.json
git commit -m "feat: setup root layout with Inter font and metadata"
```

---

## Phase 2: UI Component Library

### Task 5: Create Button Component

**Files:**
- Create: `components/ui/Button.tsx`

**Step 1: Create Button component**

```typescript
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600': variant === 'primary',
            'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500': variant === 'secondary',
            'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-600': variant === 'outline',
            'text-neutral-700 hover:bg-neutral-100': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
```

**Step 2: Commit**

```bash
git add components/ui/Button.tsx
git commit -m "feat: add Button component with variants and sizes"
```

---

### Task 6: Create Card Component

**Files:**
- Create: `components/ui/Card.tsx`

**Step 1: Create Card component**

```typescript
// components/ui/Card.tsx
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg bg-white p-6',
          {
            'shadow-sm': variant === 'default',
            'shadow-lg hover:shadow-xl transition-shadow': variant === 'elevated',
            'border border-neutral-200': variant === 'bordered',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
```

**Step 2: Commit**

```bash
git add components/ui/Card.tsx
git commit -m "feat: add Card component with variants"
```

---

### Task 7: Create Badge Component

**Files:**
- Create: `components/ui/Badge.tsx`

**Step 1: Create Badge component**

```typescript
// components/ui/Badge.tsx
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: 'primary' | 'secondary' | 'success' | 'warning'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color = 'primary', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          {
            'bg-primary-100 text-primary-800': color === 'primary',
            'bg-secondary-100 text-secondary-800': color === 'secondary',
            'bg-success/10 text-success': color === 'success',
            'bg-warning/10 text-warning': color === 'warning',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
```

**Step 2: Commit**

```bash
git add components/ui/Badge.tsx
git commit -m "feat: add Badge component for tags and categories"
```

---

## Phase 3: Layout Components

### Task 8: Create Header Component

**Files:**
- Create: `components/layout/Header.tsx`

**Step 1: Create Header component**

```typescript
// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            AR Company
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/solutions" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Solutions
            </Link>
            <Link href="/products" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Products
            </Link>
            <Link href="/case-studies" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-primary-600 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
```

**Step 2: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat: add Header component with sticky navigation"
```

---

### Task 9: Create Footer Component

**Files:**
- Create: `components/layout/Footer.tsx`

**Step 1: Create Footer component**

```typescript
// components/layout/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AR Company</h3>
            <p className="text-neutral-400">
              Building web and mobile applications that ship to app stores.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions" className="text-neutral-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/solutions" className="text-neutral-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/solutions" className="text-neutral-400 hover:text-white transition-colors">App Store Launch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-neutral-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 AR Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add Footer component with navigation links"
```

---

### Task 10: Update Root Layout with Header and Footer

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update layout**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AR Company - Web & Mobile App Development',
  description: 'We build and ship web and mobile applications to app stores. From concept to launch, we handle everything.',
  keywords: ['web app development', 'mobile app development', 'app store launch'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: integrate Header and Footer into root layout"
```

---

## Phase 4: Section Components

### Task 11: Create Hero Section Component

**Files:**
- Create: `components/sections/Hero.tsx`

**Step 1: Create Hero component**

```typescript
// components/sections/Hero.tsx
import Button from '@/components/ui/Button'

export interface HeroProps {
  headline: string
  subheadline: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export default function Hero({ headline, subheadline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button size="lg" asChild>
                <a href={primaryCta.href}>{primaryCta.text}</a>
              </Button>
            )}
            {secondaryCta && (
              <Button size="lg" variant="outline" asChild>
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: add Hero section component"
```

---

### Task 12: Create Features Grid Component

**Files:**
- Create: `components/sections/Features.tsx`

**Step 1: Create Features component**

```typescript
// components/sections/Features.tsx
import Card from '@/components/ui/Card'

export interface Feature {
  title: string
  description: string
  icon?: string
}

export interface FeaturesProps {
  title?: string
  features: Feature[]
}

export default function Features({ title, features }: FeaturesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated">
              {feature.icon && (
                <div className="text-4xl mb-4">{feature.icon}</div>
              )}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/Features.tsx
git commit -m "feat: add Features grid section component"
```

---

## Phase 5: Homepage

### Task 13: Create Homepage Content

**Files:**
- Create: `content/homepage/hero.mdx`
- Create: `content/homepage/features.mdx`

**Step 1: Create hero content**

```yaml
---
title: "Build Apps That Ship"
subheadline: "From concept to App Store, we handle everything. Web and mobile applications delivered with quality and speed."
primaryCta:
  text: "Start Your Project"
  href: "/contact"
secondaryCta:
  text: "View Our Work"
  href: "/case-studies"
---
```

**Step 2: Create features content**

```yaml
---
title: "Why Choose Us"
features:
  - title: "Full-Stack Development"
    description: "We handle everything from frontend to backend, databases to APIs. No coordination headaches."
    icon: "🚀"
  - title: "App Store Ready"
    description: "We don't just build apps—we get them approved and launched on iOS and Android stores."
    icon: "📱"
  - title: "Post-Launch Support"
    description: "Our relationship doesn't end at launch. We provide ongoing maintenance and updates."
    icon: "🛟"
  - title: "Speed to Market"
    description: "Rapid development without sacrificing quality. Get your MVP in weeks, not months."
    icon: "⚡"
  - title: "User-Centric Design"
    description: "Beautiful, intuitive interfaces that users love. Accessibility and performance built in."
    icon: "🎨"
  - title: "Transparent Process"
    description: "Regular updates, clear communication, and no surprises. You always know where we stand."
    icon: "💬"
---
```

**Step 3: Commit**

```bash
git add content/homepage/
git commit -m "feat: add homepage content in MDX format"
```

---

### Task 14: Create MDX Utilities

**Files:**
- Create: `lib/mdx.ts`

**Step 1: Create MDX utilities**

```typescript
// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface MDXPost {
  frontmatter: any
  content: string
  slug: string
}

export async function getMDXBySlug(dir: string, slug: string): Promise<MDXPost | null> {
  try {
    const fullPath = path.join(contentDirectory, dir, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      frontmatter: data,
      content,
      slug,
    }
  } catch {
    return null
  }
}

export async function getAllMDX(dir: string): Promise<MDXPost[]> {
  const fullPath = path.join(contentDirectory, dir)
  const files = fs.readdirSync(fullPath)
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, dir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        frontmatter: data,
        content,
        slug,
      }
    })

  return posts
}
```

**Step 2: Commit**

```bash
git add lib/mdx.ts
git commit -m "feat: add MDX utilities for content loading"
```

---

### Task 15: Create Homepage

**Files:**
- Create: `app/page.tsx`

**Step 1: Create homepage**

```typescript
// app/page.tsx
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import { getMDXBySlug } from '@/lib/mdx'

export default async function HomePage() {
  const heroData = await getMDXBySlug('homepage', 'hero')
  const featuresData = await getMDXBySlug('homepage', 'features')

  return (
    <>
      {heroData && (
        <Hero
          headline={heroData.frontmatter.title}
          subheadline={heroData.frontmatter.subheadline}
          primaryCta={heroData.frontmatter.primaryCta}
          secondaryCta={heroData.frontmatter.secondaryCta}
        />
      )}

      {featuresData && (
        <Features
          title={featuresData.frontmatter.title}
          features={featuresData.frontmatter.features}
        />
      )}
    </>
  )
}
```

**Step 2: Test the page**

```bash
npm run dev
```
Expected: Visit http://localhost:3000, see hero with headline and features grid

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: implement homepage with Hero and Features sections"
```

---

## Phase 6: Additional Pages

### Task 16: Create Solutions Page

**Files:**
- Create: `content/solutions/services.mdx`
- Create: `app/solutions/page.tsx`

**Step 1: Create solutions content**

```yaml
---
title: "How We Build Apps"
services:
  - title: "Discovery & Strategy"
    description: "We start by understanding your business, users, and goals. Clear roadmaps, defined requirements."
    icon: "🔍"
  - title: "Design & UX"
    description: "Wireframes, prototypes, and stunning designs. User-tested and approved before development."
    icon: "✏️"
  - title: "Development & QA"
    description: "Clean code, automated testing, continuous integration. Quality at every step."
    icon: "💻"
  - title: "App Store Launch"
    description: "We handle submissions, approvals, and launches. Your app in stores, ready for users."
    icon: "🚀"
---
```

**Step 2: Create solutions page**

```typescript
// app/solutions/page.tsx
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Card from '@/components/ui/Card'

export default async function SolutionsPage() {
  const data = await getMDXBySlug('solutions', 'services')

  return (
    <>
      {data && (
        <Hero
          headline={data.frontmatter.title}
          subheadline="End-to-end app development services"
        />
      )}

      {data && (
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.frontmatter.services.map((service: any, index: number) => (
                <Card key={index} variant="elevated">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
```

**Step 3: Commit**

```bash
git add content/solutions/ app/solutions/
git commit -m "feat: add Solutions page with service offerings"
```

---

### Task 17: Create Contact Page with Form

**Files:**
- Create: `components/sections/ContactForm.tsx`
- Create: `app/contact/page.tsx`

**Step 1: Create ContactForm component**

```typescript
// components/sections/ContactForm.tsx
'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
        <p className="text-neutral-600">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Send Message
        </Button>
      </div>
    </form>
  )
}
```

**Step 2: Create contact page**

```typescript
// app/contact/page.tsx
import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Let's Build Something Great"
        subheadline="Tell us about your project and we'll get back to you within 24 hours."
      />
      <section className="py-16">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
```

**Step 3: Commit**

```bash
git add components/sections/ContactForm.tsx app/contact/
git commit -m "feat: add Contact page with form"
```

---

## Phase 7: Styling & Polish

### Task 18: Add Animations with Framer Motion

**Files:**
- Modify: `components/sections/Hero.tsx`

**Step 1: Add animation to Hero**

```typescript
// components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export interface HeroProps {
  headline: string
  subheadline: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export default function Hero({ headline, subheadline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8">
            {subheadline}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCta && (
              <Button size="lg" asChild>
                <a href={primaryCta.href}>{primaryCta.text}</a>
              </Button>
            )}
            {secondaryCta && (
              <Button size="lg" variant="outline" asChild>
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: add Framer Motion animations to Hero section"
```

---

### Task 19: Add Metadata for All Pages

**Files:**
- Modify: `app/solutions/page.tsx`
- Modify: `app/contact/page.tsx`

**Step 1: Add metadata to solutions page**

```typescript
// app/solutions/page.tsx
import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Solutions - AR Company',
  description: 'Our end-to-end app development services from discovery to app store launch.',
}

export default async function SolutionsPage() {
  // ... rest of the component
}
```

**Step 2: Add metadata to contact page**

```typescript
// app/contact/page.tsx
import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - AR Company',
  description: 'Get in touch to discuss your project. We respond within 24 hours.',
}

export default function ContactPage() {
  // ... rest of the component
}
```

**Step 3: Commit**

```bash
git add app/solutions/page.tsx app/contact/page.tsx
git commit -m "feat: add SEO metadata to solutions and contact pages"
```

---

## Phase 8: Testing & Deployment

### Task 20: Setup ESLint and Prettier

**Files:**
- Create: `.prettierrc`
- Create: `.eslintrc.json`

**Step 1: Create Prettier config**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2
}
```

**Step 2: Install Prettier**

```bash
npm install -D prettier eslint-config-prettier
```

**Step 3: Update ESLint config**

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

**Step 4: Add lint script**

```bash
npm pkg set scripts.lint="next lint"
npm pkg set scripts.format="prettier --write ."
```

**Step 5: Commit**

```bash
git add .prettierrc .eslintrc.json package.json
git commit -m "feat: configure Prettier and ESLint"
```

---

### Task 21: Build and Test Production Build

**Step 1: Run production build**

```bash
npm run build
```
Expected: Build completes successfully with no errors

**Step 2: Test production build locally**

```bash
npm start
```
Expected: Site runs at http://localhost:3000

**Step 3: Run linter**

```bash
npm run lint
```
Expected: No linting errors

**Step 4: Commit**

```bash
git add -A
git commit -m "test: verify production build and linting"
```

---

### Task 22: Deploy to Vercel

**Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

**Step 2: Login to Vercel**

```bash
vercel login
```

**Step 3: Deploy**

```bash
vercel
```
Expected: Deployment succeeds, provides preview URL

**Step 4: Test deployed site**

Visit the preview URL and verify:
- Homepage loads correctly
- Navigation works
- Contact form displays
- Mobile responsive

**Step 5: Set up custom domain (optional)**

```bash
vercel domains add yourdomain.com
```

**Step 6: Commit deployment info**

```bash
echo "# Deployment

Deployed to Vercel: [URL](https://your-url.vercel.app)

## Environment Variables Needed
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_GA_ID (optional)
" > docs/deployment.md

git add docs/deployment.md
git commit -m "docs: add deployment information"
```

---

## Final Steps

### Task 23: Final Review and Documentation

**Step 1: Create README**

```markdown
# AR Company Website

Modern marketing website built with Next.js, Tailwind CSS, and MDX.

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX for content

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

Deployed on Vercel: [URL](https://your-url.vercel.app)

## Content

Content is managed via MDX files in the \`content/\` directory.

## Future Enhancements

- [ ] Migrate to Strapi CMS
- [ ] Add blog functionality
- [ ] Implement case studies with dynamic routing
- [ ] Add pricing page
- [ ] Implement analytics tracking
```

**Step 2: Run final checks**

```bash
npm run lint
npm run build
```

**Step 3: Final commit**

```bash
git add README.md
git commit -m "docs: add comprehensive README"
```

**Step 4: Tag release**

```bash
git tag -a v1.0.0 -m "Initial release of AR Company website"
git push origin main --tags
```

---

## Success Criteria

- [ ] Next.js project initialized with TypeScript
- [ ] Tailwind CSS configured with design tokens
- [ ] UI component library (Button, Card, Badge)
- [ ] Layout components (Header, Footer)
- [ ] Section components (Hero, Features, ContactForm)
- [ ] Homepage with Hero and Features
- [ ] Solutions page
- [ ] Contact page with form
- [ ] MDX content management
- [ ] Animations with Framer Motion
- [ ] SEO metadata
- [ ] Production build successful
- [ ] Deployed to Vercel
- [ ] Mobile responsive
- [ ] Linting configured

---

## Next Steps After MVP

1. **Case Studies** - Add dynamic routing for individual case studies
2. **Blog** - Implement blog listing and post pages with full MDX support
3. **Pricing Page** - Add pricing tiers with feature comparison
4. **Careers Page** - Add job listings and application form
5. **Strapi Migration** - Plan and execute migration from MDX to Strapi CMS
6. **Analytics** - Integrate Google Analytics and Vercel Analytics
7. **Performance Optimization** - Run Lighthouse audits and optimize
8. **Accessibility Audit** - Full WCAG 2.1 AA compliance check

---

This implementation plan provides a complete roadmap to build the AR Company website from scratch. Each task is broken down into small, actionable steps that can be completed and committed individually.
