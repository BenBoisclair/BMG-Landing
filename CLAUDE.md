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

This is an Astro-based multilingual landing page for BMG (likely a marble/granite business) with the following architecture:

### Tech Stack
- **Astro 5.12.8** - Static site generator with islands architecture
- **React 19** - Component framework for interactive UI elements
- **Tailwind CSS v4** - Utility-first CSS framework (configured via @tailwindcss/vite)
- **TypeScript** - Type safety with strict configuration extending Astro's defaults
- **i18next** - Internationalization framework with React integration

### Internationalization (i18n)
- **Default locale**: Thai (th)
- **Supported locales**: Thai (th), English (en), Italian (it), Chinese (zh)
- **Routing**: No prefix for default locale, other locales use path prefixes
- **Implementation**: 
  - i18next configured in `src/i18n/i18n.ts`
  - Translations stored in `src/i18n/locales/*.json`
  - Language detection via localStorage and browser settings
  - React components use `useTranslation` hook

### Component Architecture
1. **Mixed Components**: 
   - Astro components (.astro) for static content and layouts
   - React components (.tsx) for interactive elements with client-side hydration
2. **Hydration Strategy**: React components use `client:load` directive for immediate hydration
3. **Image Assets**: Organized by category in `src/assets/`:
   - `/Hero/` - Hero section images
   - `/Materials/Granite/` - Granite product images
   - `/Materials/Marble/` - Marble product images
   - `/Portfolio/` - Project portfolio images organized by categories

### Styling System
- **Tailwind CSS v4** with custom theme configuration:
  - Primary color: `#292567`
  - Secondary color: `#85152d`
  - Custom font: Kanit (Google Fonts)
- **Global styles** in `src/styles/global.css` using CSS layers and theme variables
- **Container utilities** with responsive padding

### TypeScript Configuration
- Extends Astro's strict TypeScript configuration
- Configured for React JSX with `"jsx": "react-jsx"`
- Includes all source files except `dist/` directory

### Current Implementation
- **Nav Component** (React): Responsive navigation with language switcher, mobile menu, and i18n support
- **Layout Component** (Astro): Base HTML structure with language detection based on URL path
- **Hero Component** (React): Landing page hero section (exists but not analyzed)
- **About Component** (React): About section component (exists but not analyzed)

### Asset Organization
Static assets follow a clear structure for a marble/granite business:
- Logo files in multiple formats (SVG)
- Hero images for rotating banners
- Product catalogs for Granite and Marble materials
- Portfolio organized by project categories with multiple views per project