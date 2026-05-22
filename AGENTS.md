# AGENTS.md — Saint Johns Premier Management, LLC

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A professional property management marketing website for Saint Johns Premier Management, LLC, serving Saint Johns County, Florida. Features a landing page and contact form.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5 |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── contact-form.html  # Static Netlify Forms skeleton (build-time detection)
│   └── favicon.ico
├── src/
│   ├── routes/
│   │   ├── __root.tsx     # Root HTML shell, global meta tags
│   │   ├── index.tsx      # Home / landing page
│   │   └── contact.tsx    # Contact Us page with form
│   ├── router.tsx
│   └── styles.css         # Tailwind CSS import + base styles
├── netlify.toml
├── package.json
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)
Routes are defined by files in `src/routes/`. `__root.tsx` wraps all pages with the HTML shell.

### Netlify Forms
Netlify's build crawler cannot detect forms in React/SSR output.
- `public/contact-form.html` — static skeleton Netlify reads at build time
- `src/routes/contact.tsx` — React form that submits via `fetch('/contact-form.html', POST)`
- Form name `"contact"` must match in both files
- Body must be `application/x-www-form-urlencoded`

### Brand Colors (Tailwind inline values)
- Navy `#1a3a5c` — primary brand color
- Gold `#c9a84c` — accent / CTA color
- Dark navy `#0f2338` — footer background

## Conventions

- No inline comments except for non-obvious behavior
- Icons from `lucide-react`
- All routes export a `Route` constant via `createFileRoute`
- Tailwind CSS v4: utility classes only, no `@apply`
