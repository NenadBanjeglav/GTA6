# DOX for public

## Purpose

- Own static assets served directly by Vite.

## Ownership

- This doc owns `public/**` except where a deeper `AGENTS.md` exists.
- `src/index.css` and React components own references to these assets.

## Local Contracts

- Vite serves files in `public/` from the web root, so `public/images/logo.webp` is referenced as `/images/logo.webp`.
- Keep asset filenames stable unless every JSX and CSS reference is updated in the same change.
- Do not edit binary assets through text patches.
- Avoid adding large unreferenced assets.

## Work Guidance

- Prefer web-optimized image and video formats already used here: `.webp`, `.svg`, `.png`, `.mp4`, and `.woff`.
- When replacing visual assets, preserve dimensions, transparency, and aspect ratio if CSS or animation math depends on them.

## Verification

- Run `npm run build` after asset path or filename changes.
- Use a browser check for changes that affect visible images, fonts, or videos.

## Child DOX Index

- `fonts/AGENTS.md`: custom font files loaded by `src/index.css`.
- `images/AGENTS.md`: logos, hero artwork, icons, masks, and character images.
- `videos/AGENTS.md`: MP4 video assets for animated sections.
