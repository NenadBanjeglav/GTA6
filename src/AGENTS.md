# DOX for src

## Purpose

- Own React application source, global styles, and frontend behavior.

## Ownership

- This doc owns `src/**` except where a deeper `AGENTS.md` exists.
- `constants/` owns shared responsive hooks imported by source.
- `public/` owns static asset files referenced from JSX and CSS.

## Local Contracts

- `main.jsx` bootstraps React with `StrictMode` and imports `index.css`.
- `App.jsx` composes top-level sections and registers app-wide GSAP plugins.
- `index.css` contains Tailwind v4 imports, `@font-face`, `@theme` tokens, utilities, component classes, masks, and gradient backgrounds.
- Public assets must be referenced with root-relative paths such as `/images/hero-bg.webp` and `/fonts/round.woff`.
- Keep mobile, tablet, desktop, and wide-desktop behavior in sync with the breakpoints and classes already defined in `index.css`.

## Work Guidance

- Use function components and default exports to match the existing source style.
- Keep GSAP plugin registration at module scope, not inside render paths.
- Prefer Tailwind utility classes and existing component classes over one-off inline styles.
- When changing animation geometry, check both initial load and scroll-pinned states.
- Do not rename `CommingSoon.jsx` unless every import and reference is updated in the same change.

## Verification

- Run `npm run lint` after source changes.
- Run `npm run build` before handing off structural, styling, asset-reference, or animation changes.
- Use a browser check for visible layout or animation changes.

## Child DOX Index

- `sections/AGENTS.md`: page section components, hero timeline, navigation, and coming-soon overlay.
