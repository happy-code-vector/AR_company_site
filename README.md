# AR Company Website

Modern marketing website built with Next.js 15, Tailwind CSS v4, and MDX.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Content:** MDX with gray-matter
- **Linting:** ESLint + Prettier

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
```

## Project Structure

```
ar-company-site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── solutions/          # Solutions page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Features, ContactForm
│   └── ui/                 # Button, Card, Badge
├── content/                # MDX content files
│   ├── homepage/           # Homepage content
│   └── solutions/          # Solutions page content
├── lib/                    # Utilities
│   ├── mdx.ts              # MDX parsing utilities
│   └── utils.ts            # Helper functions
├── styles/                 # Design tokens
│   └── tokens.css          # CSS custom properties
└── public/                 # Static assets
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Framer Motion animations
- ✅ MDX-based content management
- ✅ SEO-optimized with meta tags
- ✅ TypeScript for type safety
- ✅ ESLint + Prettier for code quality

## Design System

### Colors

| Color | Usage |
|-------|-------|
| Primary (Indigo) | CTAs, links, highlights |
| Secondary (Amber) | Accents, warnings |
| Neutral (Warm Gray) | Text, backgrounds |

### Components

- **Button:** Primary, Secondary, Outline, Ghost variants
- **Card:** Default, Elevated, Bordered variants
- **Badge:** Primary, Secondary, Success, Warning colors

## Content Management

Content is stored in MDX files in the `content/` directory:

```yaml
---
title: "Page Title"
description: "Page description"
features:
  - title: "Feature 1"
    description: "Description"
    icon: "🚀"
---
```

## Future Enhancements

- [ ] Migrate to Strapi CMS
- [ ] Add blog functionality
- [ ] Implement case studies with dynamic routing
- [ ] Add pricing page
- [ ] Implement analytics tracking
- [ ] Add careers page

## License

MIT
