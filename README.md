# owaua.com

Website for the owaua Discord bot. The pages are in [`site/`](site/).

Push `main` and Railway builds the root `Dockerfile` to publish `site/`. Leave the domain DNS alone during routine site updates. This repo does not change it.

The E.R.G.O section comes from [`site/partnerships/ergo.json`](site/partnerships/ergo.json). Edit that file. Deploys rewrite the page from it.

The current English copy is in [`copy-source/`](copy-source/). Run `npm ci --prefix copy-source` and `node copy-source/build.mjs` after changing it. The export also keeps the existing language URLs working with the current English copy.

## Survival guides

The language labels and chapter text live in [`survival-source/`](survival-source/).
Each chapter has an anchor, translated text and official source links. Keep all
language editions in the same chapter order when updating a guide.

With Node.js, Python 3, Playwright and Chrome installed, run
`node survival-source/build.mjs` to refresh the static pages, PDFs, text files
and ZIP in `site/survival/`. Set `PLAYWRIGHT_MODULE` to the absolute path of an
existing Playwright package if it is installed outside the project. Commit the
generated files with the source so both hosts can serve them directly.
