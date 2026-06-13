# DOX for src/sections

## Purpose

- Own page-level React sections and their section-specific animation behavior.

## Ownership

- This doc owns `src/sections/**`.
- `src/index.css` owns the class definitions used by these sections.
- `constants/` owns shared responsive mask settings consumed by `Hero.jsx`.

## Local Contracts

- `Hero.jsx` owns the scroll-pinned hero timeline, mask calculations, and transition into the coming-soon message.
- `CommingSoon.jsx` renders the entrance message nested inside the hero section.
- `FirstVideo.jsx` owns the first scroll-pinned video transition after the hero and scrubs `/videos/output1.mp4`.
- `Jason.jsx` owns the Jason character biography section and the scroll transition out of the first video.
- `SecondVideo.jsx` owns the Lucia intro scroll-pinned video transition and scrubs `/videos/output2.mp4`.
- `Lucia.jsx` owns the Lucia character biography section and the scroll transition out of the second video.
- `PostCard.jsx` owns the Leonida Keys postcard section and scrubs `/videos/postcard-vd.mp4`.
- `Nav.jsx` renders the fixed page navigation.
- GSAP selectors in `Hero.jsx` must stay scoped through `useGSAP` and `heroRef`.
- Hero mask math depends on DOM measurements and asset aspect ratios from `public/images/`.

## Work Guidance

- Keep animation setup inside `useGSAP` with `revertOnUpdate` when dependencies can change.
- Use local refs or scope-limited selectors for new animation targets.
- Preserve `h-dvh`, pinning, object-fit, and object-position choices unless intentionally changing the hero framing.
- Keep video section asset references root-relative and aligned with `public/videos/AGENTS.md`.
- Keep accessibility attributes on decorative images explicit with empty `alt` plus `aria-hidden` when appropriate.

## Verification

- Run `npm run lint` after component changes.
- Run `npm run build` after component, animation, or asset-reference changes.
- Browser-check desktop and mobile scroll behavior after hero timeline changes.

## Child DOX Index

- No child DOX files are needed.
