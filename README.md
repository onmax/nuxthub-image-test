# nuxthub-image-test

Demo app for [nuxthub-image](https://github.com/onmax/nuxthub-image) module.

## Features

- Upload images to Cloudflare R2
- Serve via `/images/**` route (auto-generated)
- Optimized with Cloudflare Image Resizing

## Setup

```bash
pnpm install
pnpm dev
```

## Deploy

```bash
pnpm deploy
```

Or push to `main` branch - CI will deploy automatically.
