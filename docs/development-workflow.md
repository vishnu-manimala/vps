# Development workflow

The portfolio shell is now implemented in Angular. Continue evolving it one feature at a time and review the code to build Angular familiarity before adding the blog, backend, or admin.

## Initial local setup

```powershell
npm install
npm start
```

The app should be available at `http://localhost:4200/`. The production build can be served locally with `npm run build` followed by `npm run serve:ssr:portfolio`; the generated Node server listens on port 4000 by default.

## Working loop

1. Choose one user-visible slice, such as the header, hero, experience, or a project card.
2. Decide which data that slice needs and define a small type if appropriate.
3. Build the component/template and its responsive styles.
4. Run the app locally and inspect desktop and mobile widths.
5. Check keyboard access, visible focus, reduced-motion behavior, and text contrast.
6. Build before committing a coherent milestone.

Keep changes small enough that you can explain the purpose of each file. Blog, backend, and admin code should be added when those features begin, not prebuilt as empty placeholders.

## Angular conventions

- Prefer standalone components and explicit imports.
- Use Angular Router for page routes; do not hand-roll route switching.
- Use typed inputs and services. Keep template logic readable and move nontrivial transformations into TypeScript.
- Use the data-access boundary for HTTP and response mapping.
- Keep DOM access and browser-only APIs out of server-rendered execution paths unless properly guarded.
- Use semantic HTML first; add ARIA only where native semantics do not cover the interaction.
- Keep secrets out of client code and public assets.

## Environment and configuration

Use local configuration for development and deployment configuration for production. Angular browser bundles are public: anything compiled into them can be inspected. SSR environment variables may be used by the server, but only server-side secrets belong there. Document required variable names and safe example values in a future `.env.example`; never commit real credentials.

## Dependency discipline

Prefer Angular platform capabilities before adding a package. Before introducing a dependency, record what problem it solves, its maintenance status, license, bundle impact, and whether the same feature can be implemented simply with the existing stack.
