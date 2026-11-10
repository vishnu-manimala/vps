# Personal Portfolio

An Angular portfolio for presenting experience, skills, selected projects, and a personal story to recruiters, hiring managers, and prospective clients. The application is intended to grow into a content-driven site with a public blog and a separately secured admin area.

## Project status

The Angular home page is implemented and builds with SSR/prerendering. It includes the hero and portrait slot, experience and skills, projects, About story, contact, light/dark theme, responsive navigation, and local typed placeholder content. The API, blog routes, admin, and deployment to a public host are not implemented yet. The earlier static prototype remains at the repository root (`index.html`, `styles.css`, and `script.js`) as a reference; Angular source is under `src/`.

## Prerequisites

- Node.js version supported by the installed Angular release
- npm

The scaffold was created with Angular CLI 22.2.2. Check the [Angular compatibility table](https://angular.dev/reference/versions) before changing Node.js or Angular versions.

## Start locally

```powershell
npm install
npm start
```

Open `http://localhost:4200/`. The development server recompiles when source files change.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm start` | Run the Angular development server |
| `npm run build` | Create the configured production build |
| `npm run watch` | Rebuild continuously in development mode |
| `npm run serve:ssr:portfolio` | Run the built server-rendered app after a production build |

The default `npm run build` keeps Angular's server output and prerendering enabled, which is useful for learning and running the SSR server locally. For Cloudflare Pages, use the separate static build configuration below; the Pages deployment serves the generated browser files without a continuously running Node.js server.

For a static Cloudflare Pages deployment, use `npm run build:pages`. The deployment settings, custom-domain steps, and future subdomain plan are in [the Cloudflare Pages deployment guide](docs/deployment-cloudflare-pages.md). This static build does not replace the default SSR build or the local `serve:ssr:portfolio` workflow.

## Where to work

- `src/app/app.ts` — root standalone component class
- `src/app/app.html` — root component template
- `src/app/app.css` — root component styles
- `src/app/app.routes.ts` — client routes
- `src/app/app.routes.server.ts` — server rendering policy for routes
- `src/app/app.config.ts` — browser application providers
- `src/app/app.config.server.ts` — server application providers
- `src/app/core/theme/theme.service.ts` — SSR-safe theme preference and toggle
- `src/app/features/home/components/` — standalone sections used by the home page
- `src/app/features/home/models/` — typed portfolio content shapes
- `src/app/features/home/data/portfolio-content.ts` — editable local sample content
- `src/app/features/home/data-access/portfolio-content.service.ts` — content source boundary for future API integration
- `src/styles.css` — global styles
- `public/` — files copied as public assets

To add a real portrait, place it under `public/assets/` and update `photoUrl` and `photoAlt` in `src/app/features/home/data/portfolio-content.ts`.

See [the architecture guide](docs/architecture.md), [development workflow](docs/development-workflow.md), and [roadmap](docs/roadmap.md) before adding the next feature.

## Product decisions

- Use Angular standalone APIs and the Angular Router.
- Keep public portfolio content separate from presentation components so local sample data can later be replaced by an API.
- Keep public and admin routes separate. Admin authorization must be enforced by the backend, not only by hiding Angular routes.
- Render public content in a way that supports search indexing. The current home route is prerendered; route rendering will need review when API-backed blog routes are added.
- Do not put credentials, private tokens, or secrets in browser code or public assets.

## Documentation

- [Architecture](docs/architecture.md)
- [Content model and proposed API](docs/content-and-api.md)
- [Content authoring checklist](docs/content-authoring.md)
- [Development workflow](docs/development-workflow.md)
- [Production readiness](docs/production-readiness.md)
- [Cloudflare Pages deployment](docs/deployment-cloudflare-pages.md)
- [Roadmap](docs/roadmap.md)
- [ADR 0001: Angular and rendering](docs/decisions/0001-angular-and-rendering.md)

## Legacy static prototype

The root `index.html`, `styles.css`, and `script.js` are the earlier standalone prototype. They are kept for reference. Do not treat them as Angular source files. `README-portfolio-notes.md` contains the prototype-specific editing checklist.
