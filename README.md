# owaua.com

Standalone source repository for the Owaua static website. The site files are in [`site/`](site/), and GitHub Actions publishes that directory to GitHub Pages on every push to `main`.

The published site includes the `site/CNAME` file for `owaua.com`. GitHub Pages can serve the default `zeousky.github.io` URL after Pages is enabled in repository settings. The custom domain will continue using its current DNS and hosting route until its DNS records are intentionally changed; this repository does not change DNS.

Edit the static pages under `site/`. Partnership content is generated from [`site/partnerships/ergo.json`](site/partnerships/ergo.json) by [`scripts/render-partnerships.py`](scripts/render-partnerships.py), which the deployment workflow runs before upload.
