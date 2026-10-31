# Architecture

## Current state

The app is an Angular CLI standalone application with SSR enabled. At the time these notes were written, `src/app/app.routes.ts` has no routes and the root component is still the CLI starter. There is no portfolio feature code or API integration yet.

## Target structure

Build in small slices as the portfolio is implemented. A reasonable target is:

```text
src/
  app/
    core/                 # singleton services, runtime config, shared shell
    layout/               # header, footer, theme control
    features/
      home/               # hero, experience, skills, selected work, about, contact
      blog/               # article list and article detail routes
      admin/              # later; authenticated content management UI
    data-access/          # API clients and mapping from API DTOs to view models
    models/               # frontend domain types
    app.config.ts
    app.routes.ts
  environments/           # only non-secret, build-time config if needed
  styles.css
public/
  assets/
```

This is a destination, not a requirement to create all folders immediately. Add a component or service when a concrete feature needs it. Keep components focused on display and user interaction; keep HTTP, caching, and data-shape handling in data-access services.

## Data flow

The first implementation can use typed local sample data. Components should depend on a content-facing service or facade rather than importing sample constants directly. Later, replace the service implementation with HTTP calls while keeping the view models stable:

```text
Page component → content service → local data now / HTTP API later
```

Keep API response DTOs separate from display models if the backend representation may evolve. Validate and map API data at the data-access boundary. A page should have explicit loading, empty, and error states once it depends on a network request.

## Routes and rendering

Suggested public routes:

| Route | Purpose | Rendering intent |
| --- | --- | --- |
| `/` | Portfolio home | Prerender or server render |
| `/blog` | Published article list | Server render or prerender with revalidation strategy |
| `/blog/:slug` | Public article | Server render or prerender |
| `/admin/**` | Future admin UI | Client-side application shell; backend protected |

The current server route configuration prerenders every route. Review it before adding API-dependent blog pages: build-time prerendering cannot assume a future backend is reachable. Choose per-route rendering based on content freshness, backend availability, SEO needs, and hosting support.

## Theme behavior

The current prototype has a light/dark theme concept. In Angular, keep theme state in a small service or a focused shell component. Apply the theme at the document root, persist only the preference (not user data), and respect `prefers-color-scheme` on a first visit if that is the chosen product behavior. Avoid direct browser globals during SSR; use Angular's browser/platform APIs or guard browser-only work.

## Admin boundary

The admin area is a later feature and a separate security boundary. Angular route guards improve navigation but are not authorization. The backend must authenticate the user and authorize every protected operation. Prefer a backend-managed secure, HttpOnly, SameSite cookie session or another reviewed auth design; never ship an admin secret in the Angular bundle.
