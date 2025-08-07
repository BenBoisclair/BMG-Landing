# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro add` - Add new integrations to the project
- `npm run astro check` - Run TypeScript checking

## Architecture Overview

This is an Astro-based multilingual landing page for BMG (a marble/granite business) with a modern island architecture combining static generation with interactive React components.

### Tech Stack
- **Astro 5.12.8** - Static site generator with islands architecture for optimal performance
- **React 19** - Interactive UI components with selective hydration
- **Tailwind CSS v4** - Utility-first CSS framework configured via @tailwindcss/vite
- **TypeScript** - Strict type safety extending Astro's defaults
- **i18next** - Full internationalization support with React integration
- **React Google reCAPTCHA** - Form protection on contact forms

### Internationalization (i18n)
- **Default locale**: Thai (th)
- **Supported locales**: Thai (th), English (en), Italian (it), Chinese (zh)
- **Routing Strategy**: 
  - Default locale (Thai) uses root path: `/`
  - Other locales use prefixed paths: `/en/`, `/it/`, `/zh/`
  - Locale detected from URL path in Layout component
- **Implementation Details**:
  - i18next configuration in `src/i18n/i18n.ts` with localStorage persistence
  - Translation files in `src/i18n/locales/*.json`
  - React components use `useTranslation` hook
  - Language switcher in Nav component handles URL redirection

### Component Architecture
1. **Astro Components (.astro)**:
   - Static layouts and page structures
   - Server-side rendered content
   - Minimal JavaScript footprint
   
2. **React Components (.tsx)**:
   - Interactive UI elements with `client:load` directive
   - Form handling (ContactForm with reCAPTCHA)
   - Dynamic navigation with mobile menu
   - Image carousels and galleries
   
3. **Key Components**:
   - `Nav` - Responsive navigation with language switcher and mobile menu
   - `Hero` - Landing page hero section with rotating banners
   - `About` - Company information section
   - `Showcase` - Portfolio/project showcase
   - `Materials` - Product catalog display
   - `ContactForm` - Contact form with validation and reCAPTCHA
   - `NewsListing` & `NewsArticle` - News/blog functionality
   - `Footer` - Site footer with links and information
   - `ScrollToTop` - Scroll-to-top button functionality

### Page Structure
- `/` - Homepage with Hero, About, Showcase, and Materials sections
- `/story` - Company story/history page
- `/news` - News listing page
- `/news/[id]` - Dynamic news article pages
- `/contact` - Contact page with form and company information

### Styling System
- **Tailwind CSS v4** with custom theme:
  ```css
  --color-primary: #292567
  --color-secondary: #85152d
  --font-family-sans: "Kanit", sans-serif
  ```
- Global styles in `src/styles/global.css` using CSS theme variables
- Responsive container utilities with breakpoint-specific padding
- Mobile-first responsive design approach

### Asset Organization
```
src/assets/
├── Hero/          # Hero carousel images
├── Materials/     # Product images
│   ├── Granite/   # Granite varieties
│   └── Marble/    # Marble varieties
├── Portfolio/     # Project galleries (numbered categories)
├── News/          # News article images
├── Contact/       # Contact page backgrounds
├── Story/         # Company story assets
└── [logos]        # Company logos and branding
```

### Data Management
- `src/data/showcaseData.ts` - Portfolio/showcase content
- `src/data/newsData.ts` - News articles and metadata

### TypeScript Configuration
- Extends `astro/tsconfigs/strict` for maximum type safety
- React JSX configured with `"jsx": "react-jsx"`
- All source files included except `dist/` directory