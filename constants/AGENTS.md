# DOX for constants

## Purpose

- Own shared constants and hooks consumed by the React app.

## Ownership

- This doc owns `constants/**`.
- `src/` owns component usage of these exports.

## Local Contracts

- `useMaskSettings` is a React hook and must only be called from React components or other hooks.
- Keep returned mask values compatible with the parsing logic in `src/sections/Hero.jsx`.
- Supported mask units are percentages, `vh`, `vw`, and numeric pixel-like values.
- Avoid importing UI components into `constants/` to prevent source cycles.

## Work Guidance

- Preserve stable export names unless all imports are updated in the same change.
- Keep responsive breakpoints aligned with Tailwind breakpoints in `src/index.css` when behavior depends on viewport width.

## Verification

- Run `npm run lint` after JavaScript changes.
- Run `npm run build` when exports, responsive behavior, or app wiring changes.

## Child DOX Index

- No child DOX files are needed yet.
