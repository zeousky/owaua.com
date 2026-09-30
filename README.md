# owaua.com

Standalone source repository for the Owaua static website. The site files are in [`site/`](site/), and GitHub Actions publishes that directory to GitHub Pages on every push to `main`.

The `owaua.com` custom domain is configured in this repository's **Settings → Pages**. Its DNS and production hosting route remain on Daki/Cloudflare until they are intentionally changed; this repository does not change DNS.

Edit the static pages under `site/`. Partnership content is generated from [`site/partnerships/ergo.json`](site/partnerships/ergo.json) by [`scripts/render-partnerships.py`](scripts/render-partnerships.py), which the deployment workflow runs before upload.
