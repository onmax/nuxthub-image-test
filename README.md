# NuxtHub Image Test

Demo project for testing [@nuxt/image integration with NuxtHub](https://github.com/nuxt-hub/core/pull/698).

## Branches & Deployments

| Branch | Driver | Production |
|--------|--------|------------|
| [cloudflare](https://github.com/onmax/nuxthub-image-test/tree/cloudflare) | `cloudflare-r2` | [cloudflare-nuxthub-image-test.maximogarciamtnez.workers.dev](https://cloudflare-nuxthub-image-test.maximogarciamtnez.workers.dev) |
| [vercel](https://github.com/onmax/nuxthub-image-test/tree/vercel) | `vercel-blob` | [nuxthub-image-test.vercel.app](https://nuxthub-image-test.vercel.app) |
| [fs](https://github.com/onmax/nuxthub-image-test/tree/fs) | `fs` | [fs-nuxthub-image-test.maximogarciamtnez.workers.dev](https://fs-nuxthub-image-test.maximogarciamtnez.workers.dev) |

Each branch uses a pnpm patch to test the PR changes before they're merged.
