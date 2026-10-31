# Development workflow

This project is intentionally being built incrementally by the portfolio owner. Use the Angular CLI and learn each feature as it is added; do not create the entire target architecture before it is needed.

## Initial local setup

```powershell
npm install
npm start
```

The app should be available at `http://localhost:4200/`. The first development milestone is to understand the generated root component and replace the CLI starter view with one small portfolio section.

## Working loop

1. Choose one user-visible slice, such as the header or hero.
2. Decide which data that slice needs and define a small type if appropriate.
3. Build the component/template and its responsive styles.
4. Run the app locally and inspect desktop and mobile widths.
5. Check keyboard access, visible focus, reduced-motion behavior, and text contrast.
6. Build before committing a coherent milestone.

Keep changes small enough that you can explain the purpose of each file. Avoid generating every planned component or service at once.

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
