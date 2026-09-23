# Teka

Monorepo scaffold for Teka.

## Apps

- `apps/desktop` — Electron desktop application.
- `apps/extension` — WXT browser extension.
- `apps/site` — public SvelteKit site.

## Packages

- `packages/app` — shared Svelte application.
- `packages/contracts` — shared commands, results, and schemas.
- `packages/core` — use cases, domain rules, and service interfaces.
- `packages/storage` — SQLite, migrations, assets, and durable jobs.
- `packages/eslint-config` and `packages/typescript-config` — shared tooling.

These are placeholders only. Product implementation will be added incrementally.

## Commands

```sh
pnpm install
pnpm lint
pnpm check-types
pnpm build
```
