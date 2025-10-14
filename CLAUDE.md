# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a wedding website for Laurence and Margarette built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. The site features a video background hero section with wedding details and RSVP link.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Run production server
npm start

# Run ESLint
npm run lint
```

Development server runs on http://localhost:3000

## Architecture

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Home page (renders HeroSection)
  - `globals.css` - Global styles and Tailwind directives
  - `opengraph-image.jpg`, `twitter-image.jpg`, `favicon.ico` - SEO assets
- `src/components/` - React components
- `src/common/` - Shared utilities and configurations
  - `fonts.ts` - Next.js font definitions (Dancing Script, Montserrat)
- `public/` - Static assets including video files
  - `wedding-video.mp4` - Desktop background video
  - `wedding-video-mobile.mp4` - Mobile background video

### Key Patterns

- **Import Alias**: Use `@/*` to import from `src/` directory (configured in tsconfig.json)
- **Fonts**: Custom Google Fonts are configured in `src/common/fonts.ts` and imported as needed. Apply fonts using the `className` property (e.g., `${dancingScript.className}`)
- **Responsive Design**: The site uses Tailwind's responsive breakpoints with mobile-first approach. Video backgrounds switch between mobile and desktop versions using `md:` breakpoint
- **Styling**: Tailwind CSS v4 with PostCSS, utility-first approach

### Technology Stack

- **Framework**: Next.js 15.5.4 with App Router and Turbopack
- **React**: Version 19.1.0
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Fonts**: Next.js font optimization with Google Fonts
