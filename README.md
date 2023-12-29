# UnJS Docs Template

[![Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt.js&labelColor=020420)](https://ui.nuxt.com/pro)

- [Live demo](https://unjs-docs-template.barbapapazes.dev/)
- [Play on Stackblitz](https://stackblitz.com/github/barbapapazes/unjs-docs-template)
- [Documentation](https://ui.nuxt.com/pro/guide)
- Ready to use on Nuxt Studio
- Branded for [UnJS](https://unjs.io)

## Quick Start

```bash [Terminal]
npx nuxi init -t github:barbapapazes/unjs-docs-template docs
```

Then, you will need to update some config values to match your project.

In `nuxt.config.ts`:

- Update `site.url` to match your production URL

In `app.config.ts`:

- Update `ui.primary` to match the project's primary color
- Update `seo.siteName` to match your project's name
- Update `github.name` to match the GitHub repository's name
- Update `header` and `footer` to match your project's requirements
- Update `toc` GitHub links with your own repository

Do not forget to update the favicon in `public/favicon.svg`. You can find your icon in the [design kit of UnJS](https://unjs.io/design-kit).

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server at `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Generate the documentation for production:

```bash
pnpm run documentation
```

Locally preview the production build:

```bash
pnpm run preview
```

Do not forget to add `NUXT_PUBLIC_STUDIO_TOKENS` and `NUXT_UI_PRO_LICENSE` to your environment variables.
