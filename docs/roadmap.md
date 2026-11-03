# Development roadmap

The owner is building the Angular implementation as a learning project. Move one milestone at a time; do not implement future backend/admin items prematurely.

## Milestone 1 — Understand and run the scaffold (complete)

- Install dependencies and run the generated app.
- Understand the root component, template, router, and global styles.
- Keep the previous static prototype for visual reference while building Angular under `src/`.

## Milestone 2 — Static portfolio shell (complete)

- Create the shared header/footer and theme switch.
- Build the hero with a configurable portrait asset.
- Add experience, skills, project previews, About story, and contact sections.
- Use honest placeholder data until the owner's details are ready.
- Make the existing one-page navigation work accessibly on mobile.

## Milestone 3 — Typed local content (complete)

- Define profile, experience, skill group, and project models.
- Put sample content behind a content service/facade.
- Add loading/empty/error states only when asynchronous content is introduced.

The home page is currently prerendered and the production build succeeds. Replace the content placeholders and portrait before public launch.

## Milestone 4 — Public blog

- Add `/blog` and `/blog/:slug` routes.
- Implement list/detail views, metadata, pagination, 404 behavior, and sitemap strategy.
- Select rendering/caching mode based on the backend and publishing cadence.

## Milestone 5 — Backend integration

- Select backend, database, media storage, and deployment after requirements are understood.
- Agree the API contract in `content-and-api.md` with the backend implementation.
- Replace local data behind services, keeping view models stable.
- Add robust loading, empty, error, retry, and not-found states.

## Milestone 6 — Admin and publishing

- Design the admin workflow and roles.
- Use Angular Material for the admin UI as a deliberate learning objective; keep the public portfolio's custom visual design independent of it.
- Implement server-side authentication, authorization, validation, auditability, and secure media handling first.
- Build Angular admin routes as a client interface to the protected API.
- Add draft/preview/publish, backups, and restore before relying on the CMS.

## Milestone 7 — Launch

- Complete the [production readiness checklist](production-readiness.md).
- Choose hosting compatible with the final SSR/prerender strategy.
- Configure domain, HTTPS, analytics/privacy choices, monitoring, and rollback.
