# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 (hot reload)
npm run build    # Compile TypeScript and optimize for production
npm start        # Serve the production build from .next/
npm run lint     # Run ESLint (Next.js + Core Web Vitals + TypeScript rules)
```

No test runner is configured yet.

## Architecture

Next.js 16 App Router project using React 19 and TypeScript with Tailwind CSS v4.

**Entry points:**
- `src/app/layout.tsx` — Root layout: loads Geist fonts, sets `<html>/<body>`, wraps all pages
- `src/app/page.tsx` — Home route (`/`)
- `src/app/globals.css` — Tailwind import + CSS variables for light/dark theme

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`).

**Styling:** Tailwind CSS v4 via PostCSS (`postcss.config.mjs`). Theme colors are CSS variables defined in `globals.css` with automatic dark mode via `prefers-color-scheme`.

**Config files:**
- `next.config.ts` — Next.js config (currently empty/default)
- `tsconfig.json` — `strict: true`, `moduleResolution: "bundler"`, `target: ES2017`
- `eslint.config.mjs` — ESLint v9 flat config, extends `next/core-web-vitals` and `next/typescript`
