# DOX for .agents/skills

## Purpose

- Own installed local skill packages that provide reusable agent instructions for this project.

## Ownership

- This doc owns `.agents/skills/**` except where a deeper `AGENTS.md` exists.
- Each top-level directory is a skill package whose entrypoint is usually `SKILL.md`.

## Local Contracts

- Read a relevant skill's `SKILL.md` before applying or modifying that skill.
- Preserve package-local references, rules, metadata, and README files when moving or editing skill material.
- Existing package docs under `vercel-composition-patterns/` and `vercel-react-best-practices/` are imported skill guidance; do not rewrite them casually.
- GSAP packages (`gsap-*`) and Vercel packages (`vercel-*`) are reference skills for frontend animation and React work.

## Work Guidance

- Add a new child `AGENTS.md` only when a skill package needs local rules beyond its `SKILL.md`.
- Keep skill instructions operational and scoped to agent behavior.

## Verification

- No automated skill verification is configured in this repository.

## Child DOX Index

- `vercel-composition-patterns/AGENTS.md`: installed React composition pattern guidance.
- `vercel-react-best-practices/AGENTS.md`: installed React performance and best-practice guidance.
