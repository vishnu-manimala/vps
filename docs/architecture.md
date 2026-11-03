# Architecture

## Current state

The app is an Angular CLI standalone application with SSR/hydration enabled. The root route renders the HomePage feature. The page is composed from standalone section components and receives typed local placeholder content through `PortfolioContentService`. The light/dark preference is managed by an SSR-safe `ThemeService`. There is no backend API, blog, admin area, or public deployment yet.

## Target structure

Build in small slices as the portfolio is implemented. A reasonable target is:

```text
src/
  app/
    core/                 # cross-feature services such as theme state
    features/
      home/
        components/       # page sections: header, hero, career, work, About, contact
        data/             # editable local placeholder content
        data-access/      # content service boundary; API implementation later
        models/           # typed portfolio content models
      blog/               # article list and article detail routes
      admin/              # later; authenticated content management UI
    app.config.ts
    app.routes.ts
  environments/           # only non-secret, build-time config if needed
  styles.css
public/
  assets/
```

The `home/` structure above exists now; blog and admin are future feature areas. Add components or services when a concrete feature needs them. Keep components focused on display and interaction; keep HTTP, caching, and API-shape handling in data-access services.

## Data flow

The current implementation uses typed local sample data. The HomePage reads it through a content-facing service rather than importing sample constants directly. Later, replace or extend the service implementation with HTTP calls while keeping the view models stable:

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

The Angular page has a light/dark theme switch. `ThemeService` applies the theme to the document root and stores only the preference in local storage. It reads browser state after rendering, so local storage and `matchMedia` are not accessed during SSR. It uses the operating-system preference when no saved choice exists.

## Admin boundary

The admin area is a later feature and a separate security boundary. Angular route guards improve navigation but are not authorization. The backend must authenticate the user and authorize every protected operation. Prefer a backend-managed secure, HttpOnly, SameSite cookie session or another reviewed auth design; never ship an admin secret in the Angular bundle.
