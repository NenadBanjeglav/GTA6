# DOX for public/fonts

## Purpose

- Own custom font assets served to the app.

## Ownership

- This doc owns `public/fonts/**`.
- `src/index.css` owns `@font-face` declarations and Tailwind font tokens that reference these files.

## Local Contracts

- Current font files are `long.woff`, `round.woff`, and `round-bold.woff`.
- Any filename, font-family, or weight change must be reflected in `src/index.css`.

## Work Guidance

- Keep font files in web-ready formats.
- Preserve the existing font family intent: display text uses `Long`; body and UI text use `Round`; bold display utility uses `Round Bold`.

## Verification

- Run `npm run build` after font file or CSS reference changes.
- Browser-check visible typography after replacing fonts.

## Child DOX Index

- No child DOX files are needed.
