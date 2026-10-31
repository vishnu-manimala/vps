# Production readiness

This is a checklist for the release phase, not a claim that the current CLI scaffold is production-ready as a finished portfolio. Complete it as features are implemented.

## Search and sharing

- Give each public route a unique title and meta description.
- Set canonical URLs and Open Graph/Twitter preview metadata.
- Ensure public article content is server-rendered or prerendered appropriately.
- Generate a sitemap and robots policy that excludes admin and draft content.
- Use descriptive headings and semantic landmarks.
- Provide a useful 404 page and stable slug redirects when URLs change.

## Accessibility

- Keyboard-operable navigation, theme switch, and controls with visible focus.
- Correct heading order, landmarks, labels, and link purpose.
- Sufficient text and UI contrast in both themes.
- Useful alt text for informative images; empty alt for decorative images.
- Respect `prefers-reduced-motion` and avoid motion that blocks reading.
- Verify layouts at zoom and narrow viewport widths.

## Performance

- Use responsive, compressed images and reserve intrinsic dimensions to prevent layout shifts.
- Lazy-load below-the-fold imagery; prioritize the home-page portrait appropriately.
- Avoid large animation or UI dependencies for effects that CSS can handle.
- Inspect production build budgets and resolve regressions.
- Cache public content and immutable assets deliberately; ensure draft/admin content is never cached publicly.

## Security and privacy

- Enforce authorization in the backend for every admin operation; Angular route guards are not security controls.
- Use secure session/token handling; never store long-lived admin credentials in local storage.
- Validate and sanitize authored content on the server before rendering.
- Validate upload type, size, and content; store uploads safely and serve them with appropriate headers.
- Apply rate limits and CSRF protection appropriate to the authentication model.
- Use HTTPS, restrictive security headers, and a production error handler without stack traces.
- Collect only necessary personal information and document contact-form retention if a form is added.

## Operations

- Choose a host that supports the configured Angular SSR output, or deliberately switch to a static render strategy.
- Keep secrets in the host's secret manager, not repository files.
- Configure API origin, CORS, cache rules, and health monitoring.
- Test clean install, production build, SSR output, direct navigation to nested routes, and rollback steps before launch.
- Back up content/media and decide how restore and migration are handled before the admin CMS is used.
