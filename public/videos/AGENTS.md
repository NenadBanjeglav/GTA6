# DOX for public/videos

## Purpose

- Own MP4 video assets used by animated page sections.

## Ownership

- This doc owns `public/videos/**`.
- React components and CSS own playback behavior, sizing, and references.

## Local Contracts

- Keep video filenames stable unless all references are updated in the same change.
- Current video files are `output1.mp4`, `output2.mp4`, `output3.mp4`, and `postcard-vd.mp4`.
- `/videos/output1.mp4` is consumed by `src/sections/FirstVideo.jsx` for scroll-scrub playback.
- Use browser-compatible MP4 encoding for new or replacement video files.
- Avoid adding oversized videos without a clear visible use.

## Work Guidance

- Preserve aspect ratio and visual crop expectations when replacing existing files.
- For new videos, document the consuming section in the nearest source DOX doc if it becomes durable app behavior.

## Verification

- Run `npm run build` after video filename or reference changes.
- Browser-check playback and crop behavior when videos are visible in the app.

## Child DOX Index

- No child DOX files are needed.
