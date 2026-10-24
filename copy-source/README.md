# Current website wording

The four route components are the source for the public pages. Commands, limits, and data handling follow the Node bot running as Owaua. The wording is written the way a person would explain the bot.

This is a static export, with no app account, backend database, or client framework required on the website. The existing site shell, stylesheet, pictures, URLs, and native menu are retained.

Run from the repository root:

```sh
npm ci --prefix copy-source
node copy-source/build.mjs
python3 scripts/render-partnerships.py --check
```

Commit the source and generated `site/` pages together. Edit the E.R.G.O block in `site/partnerships/ergo.json`; the existing partnership renderer owns that HTML. Existing language URLs serve the current English homepage, matching the supplied “the site stays in English” wording.
