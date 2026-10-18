# owaua.com site repository

- Edit website files under `site/`.
- Railway builds from the repository root and publishes only `site/` after rendering partnership content.
- Partnership content is generated from `site/partnerships/ergo.json` by `scripts/render-partnerships.py`; edit the JSON rather than generated HTML.
- Keep the existing `site/CNAME` and stable page URLs.
- Do not change domain DNS as part of routine site deployments.
