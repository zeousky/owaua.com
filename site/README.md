# owaua.com

Static website for the Owaua Discord bot.

## Layout

- `index.html` — English homepage.
- `french/`, `german/`, `greek/`, `hungarian/`, `italian/`, `polish/`, `romanian/`, and `ukrainian/` — localized homepages.
- `privacy/`, `terms/`, and `partnerships/` — standalone content pages.
- `partnerships/ergo.json` — data for the generated E.R.G.O partnership block; see `partnerships/README.md`.
- `assets/` — shared CSS, JavaScript, fonts, editorial media, and profile images.
- `assets/archive/` — unused legacy assets retained locally for reference; these are not linked by the site.
- `404.html` — fallback page.

Keep page URLs stable when moving files: the deployment serves each directory's
`index.html` at its directory path.

Deployment instructions are in [`AGENTS.md`](AGENTS.md).

## GitHub Pages

The workflow at the repository root publishes `site/` to GitHub Pages whenever `main` changes. The `owaua.com` custom domain is configured in the repository's **Settings → Pages**. GitHub Actions deployments do not read the checked-in `CNAME` file to configure the domain; it is retained as site metadata.

The existing DNS and production hosting route remain on Daki/Cloudflare. Do not change DNS as part of a routine site deployment. A DNS cutover to GitHub Pages is a separate, intentional operation.
