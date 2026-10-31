# ADR 0001: Angular application and rendering strategy

- Status: Accepted for the initial implementation; revisit when backend and hosting are selected.
- Date: 2026-10-31

## Context

The owner is familiar with Angular and wants to build the portfolio themselves. The public site needs to present professional content, may later include frequently updated blog posts, and will eventually have a protected admin workflow. Public pages benefit from server rendering or prerendering for sharing and search visibility. Hosting and backend choices are not yet known.

## Decision

- Use the current Angular CLI standalone application scaffold.
- Keep Angular Router as the public/admin route boundary.
- Begin with the generated SSR-enabled configuration.
- Keep portfolio data behind typed models and a content service so sample data can later be replaced by an API.
- Treat rendering mode as a route-level decision; reassess blog rendering when the backend and publishing cadence are known.

## Consequences

- The owner can learn and implement features using Angular's current standalone patterns.
- SSR introduces server compatibility requirements: components must avoid unguarded browser-only APIs during server rendering.
- Public pages can be rendered for crawlers and link previews, but API-dependent routes need a deliberate prerender/SSR/cache strategy.
- The current project should deploy to a Node-capable host unless rendering is intentionally changed to static output.
- Authentication and authorization remain backend responsibilities; route guards alone cannot secure an admin API.

## Revisit when

- The backend framework, hosting platform, or content update requirements are selected.
- Blog pages need frequent publication without rebuilds.
- Admin access or media uploads are implemented.
