# DOX for .agents

## Purpose

- Own local agent-facing material installed under `.agents/`.
- Keep skill packages and their instructions discoverable for future agents.

## Ownership

- This doc owns `.agents/**` except where a deeper `AGENTS.md` exists.
- Root `AGENTS.md` still owns project-wide behavior and the top-level DOX rules.

## Local Contracts

- Treat skill packages as workflow/reference assets, not application runtime code.
- Do not edit installed skill content unless the user asks to create, update, or repair a skill.
- Before modifying a skill package, read that package's `SKILL.md` and any local `AGENTS.md` in its path.
- Keep skill metadata, rule files, and referenced assets inside the owning skill package unless the skill explicitly documents another location.

## Work Guidance

- Prefer adding or updating a clearly scoped skill package over scattering agent instructions across unrelated files.
- When a skill references relative files, resolve them relative to that skill's directory.

## Verification

- No repository-level automated verification is defined for `.agents/` changes yet.

## Child DOX Index

- `skills/AGENTS.md`: installed local skill packages and package-level skill contracts.
