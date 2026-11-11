# Cloudflare Pages deployment

## Current deployment

The Angular portfolio is connected to Cloudflare Pages through the GitHub repository `vishnu-manimala/vps`. The production branch is `main`; new commits to that branch trigger a build and deployment.

| Setting | Value |
| --- | --- |
| Cloudflare Pages project | `vps` |
| Production branch | `main` |
| Build command | `npm run build:pages` |
| Build output directory | `dist/portfolio/browser` |
| Build Node.js version | `24.21.0` (`NODE_VERSION`) |
| Cloudflare preview URL | `https://vps-2c4.pages.dev` |

The `pages` Angular build configuration selects static output while preserving the default SSR build used for local learning. Run `npm run build:pages` to build the static site locally.

## Custom domain

The domain registered at Hostinger and present in Cloudflare is `vishnumanimala.online`. Its nameservers already point to Cloudflare (`eva.ns.cloudflare.com` and `keenan.ns.cloudflare.com`), and the Cloudflare zone is Active.

The Pages project now has `vishnumanimala.online` attached as a custom domain. Cloudflare showed the DNS record as a proxied CNAME from `vishnumanimala.online` to `vps-2c4.pages.dev`; the existing record already pointed to that Pages hostname. The custom-domain status was **Initializing** when configured, and Cloudflare indicated DNS and site availability can take up to 48 hours to update.

If the domain is still unavailable after that period, check the Pages project's **Custom domains** status and Cloudflare's DNS record for the root hostname. Do not change Hostinger nameservers; DNS is already managed by Cloudflare.

## Future project subdomains

Keep the portfolio at `vishnumanimala.online`. When Ayra Online and TripSync are ready to publish, host each app separately and point subdomains such as `ayra.vishnumanimala.online` and `tripsync.vishnumanimala.online` to their respective hosts. Add links from the portfolio once those deployments are live.
