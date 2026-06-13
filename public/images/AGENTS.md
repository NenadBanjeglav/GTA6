# DOX for public/images

## Purpose

- Own image, logo, icon, and SVG mask assets used by the landing page.

## Ownership

- This doc owns `public/images/**`.
- React components and `src/index.css` own layout, animation, and reference usage.

## Local Contracts

- Hero animation depends on `hero-bg.webp`, `hero-text.webp`, `big-hero-text.svg`, and `logo.webp`.
- Navigation and platform marks depend on `nav-logo.svg`, `menu.svg`, `ps-logo.svg`, and `x-logo.svg`.
- Keep SVG `viewBox` and image aspect ratios stable unless animation math and CSS masks are updated.
- Preserve transparent backgrounds for logos, icons, and overlays.

## Work Guidance

- Prefer replacing assets in place when the visual role is unchanged.
- If adding new images, use descriptive lowercase names and update every root-relative `/images/...` reference.

## Verification

- Run `npm run build` after image filename or reference changes.
- Browser-check desktop and mobile hero framing after replacing hero or mask assets.

## Child DOX Index

- No child DOX files are needed.
