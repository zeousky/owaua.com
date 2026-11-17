import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const output = resolve(here, '.build');
await mkdir(output, { recursive: true });
const shell = await readFile(resolve(here, 'shell.html'), 'utf8');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const homeDescription = 'Mention owaua when you want a reply. It can remember, look things up, make a picture or a short video, talk in voice, and play a song.';
for (const name of ['index', 'privacy', 'terms', 'partnerships']) {
  const bundle = resolve(output, name + '.mjs');
  await build({ entryPoints: [resolve(here, 'routes', name + '.tsx')], outfile: bundle, bundle: true, platform: 'node', format: 'esm', jsx: 'automatic',
    external: ['react', 'react/jsx-runtime'], alias: { '@tanstack/react-router': resolve(here, 'router.tsx'), '@/components/site': resolve(here, 'site.tsx') } });
  const { Route } = await import(pathToFileURL(bundle).href);
  const meta = Route.head?.().meta ?? [];
  const title = meta.find(value => value.title)?.title ?? 'owaua · a discord bot you can talk to';
  const description = meta.find(value => value.name === 'description')?.content ?? homeDescription;
  const route = name === 'index' ? '/' : '/' + name;
  let body = renderToStaticMarkup(createElement(Route.component));
  body = body.replaceAll('/pfp.webp', '/assets/pfp-96.webp?v=20260918a').replaceAll('/shot.webp', '/image.webp?v=20260919a');
  if (name === 'partnerships') body = body.replace('<article class="partner">', '<article class="partner" id="ergo">');
  const homeStyles = name === 'index' ? '<link rel="stylesheet" href="/assets/signal.css">\n' : '';
  const html = shell.replaceAll('__TITLE__', escape(title)).replaceAll('__DESCRIPTION__', escape(description)).replaceAll('__CANONICAL__', 'https://owaua.com' + route).replace('__HOME_STYLES__', homeStyles).replace('__CONTENT__', body);
  const target = resolve(root, 'site', name === 'index' ? 'index.html' : name + '/index.html');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
  if (name === 'index') {
    // Keep established language URLs working with the current English copy.
    for (const language of ['french', 'german', 'greek', 'hungarian', 'italian', 'polish', 'romanian', 'ukrainian']) {
      await writeFile(resolve(root, 'site', language, 'index.html'), html);
    }
  }
}
execFileSync('python3', [resolve(root, 'scripts/render-partnerships.py')], { cwd: root, stdio: 'inherit' });
await rm(output, { recursive: true, force: true });
console.log('Built homepage, privacy, terms, partnerships, and compatible language URLs.');
