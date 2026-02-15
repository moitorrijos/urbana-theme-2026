# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Urbana Theme is an Astro-based website template for a boutique urban hotel. It features a landing page with hero image, booking CTA, room cards grid, and a booking form page that will integrate with a backend for email/database handling.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
```

## Tech Stack

- **Astro 5.x** - Static site generator
- **TypeScript** - Strict tsconfig extends astro/tsconfigs/strict
- **Tailwind CSS v4** - Via @tailwindcss/vite plugin
- **Fontsource** - Self-hosted fonts (Oswald, Montserrat, Rajdhani)

## Styling

Global styles and Tailwind theme are in `src/styles/global.css`. Custom theme tokens from design-specs.json are configured as Tailwind theme variables:

**Fonts** (use with `font-*` utility):
- `font-headline` - Oswald (headlines, nav, section headers)
- `font-body` - Montserrat (body text, buttons)
- `font-logo` - Rajdhani (logo)

**Colors** (use with `text-*`, `bg-*`, `border-*` utilities):
- `top-bar`, `navbar`, `text-primary` - Dark tones
- `sky-blue`, `sky-blue-light`, `gold-warm` - Accents
- `light-gray`, `border-gray`, `medium-gray` - Neutrals

## Project Structure

```
src/
  pages/         # Astro page routes
  styles/        # Global CSS and Tailwind theme
public/          # Static assets (favicons, images)
design-specs.json # Design tokens reference
```
