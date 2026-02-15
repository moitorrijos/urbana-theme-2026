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
- **TailwindCSS** - Styling (to be configured)
- **Fontsource** - For Google Fonts integration

## Design Specifications

Color and font specs are defined in `design-specs.json`:

**Fonts:**
- Headlines/nav: Oswald
- Body/buttons: Montserrat
- Logo: Rajdhani

**Colors:**
- Dark tones: #2D2D2D (top bar), #4A4A4A (navbar), #333333 (text)
- Accents: #6CB4D9 (sky blue), #C8A96E (warm gold)
- Neutrals: #FFFFFF, #F2F2F2, #E0E0E0

## Project Structure

```
src/
  pages/         # Astro page routes
public/          # Static assets (favicons, images)
design-specs.json # Design tokens
```
