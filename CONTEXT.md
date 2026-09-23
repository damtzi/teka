# Teka context

Teka is planned as a private, local-first library for captured links, notes, files, and fragments.

The repository currently contains structure only. Product behavior, contracts, storage, and user interfaces have not been implemented.

## Planned boundaries

- `apps/desktop` owns Electron lifecycle and native integration.
- `apps/extension` owns browser capture and delivery.
- `apps/site` owns the public site.
- `packages/app` owns shared Svelte screens.
- `packages/contracts` owns shared schemas.
- `packages/core` owns use cases and domain rules.
- `packages/storage` owns persistence.
