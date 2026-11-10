# Deploying to Cloudflare Pages

The portfolio is configured for a static production build. Its current routes are prerendered, so the deployed site does not need an always-running Node server.

## Build settings

Connect the GitHub repository `vishnu-manimala/vps` to a new Cloudflare Pages project using Git integration, then use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build:pages` |
| Build output directory | `dist/portfolio/browser` |
| Environment variable | `NODE_VERSION=24.21.0` |

The `pages` Angular build configuration selects static output while preserving the default SSR build used for local learning. `wrangler.jsonc` records the Pages project name and output directory.

After connecting the repository, Cloudflare Pages automatically builds and deploys commits pushed to the production branch. The deployment is served from a free `*.pages.dev` URL before a custom domain is attached.

## Custom domain

Add `vishnumanimal.online` in the Pages project under **Custom domains**. Cloudflare requires the domain to be added as a zone and its nameservers to point to Cloudflare for an apex domain. The domain can remain registered at its current registrar; only DNS hosting changes. Before changing nameservers, copy any existing DNS records needed for email or other services.

Optionally add `www.vishnumanimal.online` as a second hostname and redirect it to the apex domain.

## Future project subdomains

Keep the portfolio at `vishnumanimal.online`. When Ayra Online and TripSync are ready to publish, host each app separately and point subdomains such as `ayra.vishnumanimal.online` and `tripsync.vishnumanimal.online` to their respective hosts. Add links from the portfolio once those deployments are live. Their DNS records can be configured individually without changing the portfolio URL.
