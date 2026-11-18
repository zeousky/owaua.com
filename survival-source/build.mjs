import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const source = dirname(fileURLToPath(import.meta.url));
const output = join(source, '..', 'site', 'survival');
const downloads = join(output, 'downloads');
const base = '/survival/';
const origin = 'https://owaua.com';
const bundle = 'survival-guides-all-languages.zip';
const load = async name => JSON.parse(await readFile(join(source, name + '.json'), 'utf8'));
const [locales, conflict, radiation, essentials, hazards] = await Promise.all(
  ['locales', 'conflict', 'radiation', 'essentials', 'hazards'].map(load),
);
const languages = Object.keys(locales);
const guides = {
  ww3: [conflict, radiation, essentials],
  general: [essentials, hazards],
};

for (const [guide, parts] of Object.entries(guides)) {
  for (const part of parts) {
    for (const lang of languages) {
      if (JSON.stringify(part[lang]?.map(c => [c.id, c.sources])) !==
          JSON.stringify(part.en.map(c => [c.id, c.sources])) ||
          part[lang].some(c => !c.title?.trim() || c.blocks.length < 2 ||
            c.blocks.some(block => !block.trim()) || !c.sources.length ||
            c.sources.some(url => new URL(url).protocol !== 'https:'))) {
        throw new Error(`Incomplete chapters or mismatched sources for ${guide}/${lang}`);
      }
    }
  }
  const ids = parts.flatMap(part => part.en.map(c => c.id));
  if (ids.length !== new Set(ids).size || ids.some(id => !/^[a-z][a-z0-9-]+$/.test(id))) {
    throw new Error(`Invalid or duplicate chapter anchor for ${guide}`);
  }
}

const escape = value => value.replace(/[&<>"']/g, char =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const pathFor = (lang, guide = '') =>
  base + (lang === 'en' ? '' : lang + '/') + (guide ? guide + '/' : '');
const filename = (lang, guide, format) => `${guide}-survival-${lang}.${format}`;
const downloadLink = (lang, guide, format, primary = false) => {
  const locale = locales[lang];
  const type = format.toUpperCase();
  return `<a class="button${primary ? ' primary' : ''}" href="${base}downloads/${filename(lang, guide, format)}" download aria-label="${escape(`${locale.download} ${type} · ${locale[guide]}`)}"><bdi>${type}</bdi></a>`;
};

function languagePicker(lang, guide) {
  const choices = languages.map(code => {
    const label = escape(locales[code].name);
    if (code === lang) return `<li><span lang="${code}" dir="auto" aria-current="page">${label}</span></li>`;
    return `<li><a href="${pathFor(code, guide)}" hreflang="${code}" lang="${code}" dir="auto">${label}</a></li>`;
  }).join('\n');
  return `<nav class="language-picker" id="languages" aria-labelledby="language-title">
    <h2 id="language-title">${escape(locales[lang].language)}</h2>
    <ul class="language-links">${choices}</ul>
  </nav>`;
}

function notice(locale) {
  return `<aside class="notice"><strong>${escape(locale.emergency)}</strong>
    <p>${escape(locale.alert)}</p></aside>`;
}

function shell(lang, guide, main, printStyle = '') {
  const locale = locales[lang];
  const title = guide ? locale[guide] : locale.library;
  const description = guide ? locale[guide + 'Intro'] : locale.intro;
  const alternates = languages.map(code =>
    `<link rel="alternate" hreflang="${code}" href="${origin}${pathFor(code, guide)}">`).join('\n');
  const pageStyle = printStyle ? `<style>${printStyle}</style>` : `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'">
  <link rel="stylesheet" href="${base}library.css">`;
  const header = guide ? `<a class="brand" href="${pathFor(lang)}">${escape(locale.library)}</a>
    <a class="site-link" href="#languages">${escape(locale.language)}</a>` :
    `<a class="brand" href="/" aria-label="owaua.com · ${escape(locale.home)}"><bdi>owaua.com</bdi></a>
    <a class="site-link" href="#languages">${escape(locale.language)}</a>`;
  return `<!doctype html>
<html lang="${lang}" dir="${locale.direction ?? 'ltr'}" id="top">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="referrer" content="no-referrer">
  <meta name="description" content="${escape(description)}">
  <meta name="theme-color" content="#f8f6f0">
  <title>${escape(title)} · owaua.com</title>
  <link rel="canonical" href="${origin}${pathFor(lang, guide)}">
  <link rel="alternate" hreflang="x-default" href="${origin}${pathFor('en', guide)}">
  ${alternates}
  ${pageStyle}
</head>
<body>
  <a class="skip" href="#main">${escape(locale.skip)}</a>
  <header class="masthead"><nav class="wrap">${header}</nav></header>
  <main id="main" class="wrap">${main}</main>
  <footer class="footer wrap"><p>${escape(locale.edition)}</p>
    <a href="#top">${escape(locale.top)}</a></footer>
</body>
</html>
`;
}

function libraryPage(lang) {
  const locale = locales[lang];
  const cards = Object.keys(guides).map(guide => `
    <article class="card">
      <h2><a href="${pathFor(lang, guide)}">${escape(locale[guide])}</a></h2>
      <p>${escape(locale[guide + 'Intro'])}</p>
      <div class="actions">
        <a class="button primary" href="${pathFor(lang, guide)}" aria-label="${escape(locale.read + ' · ' + locale[guide])}">${escape(locale.read)}</a>
        ${downloadLink(lang, guide, 'pdf')}
        ${downloadLink(lang, guide, 'txt')}
      </div>
    </article>`).join('');
  return shell(lang, '', `
    <div class="cover">
      <div><h1>${escape(locale.library)}</h1><p class="deck">${escape(locale.intro)}</p></div>
      ${notice(locale)}
    </div>
    ${languagePicker(lang, '')}
    <div class="cards">${cards}</div>
    <div class="bundle">
      <a class="button" href="${base}downloads/${bundle}" download>${escape(locale.all)}&nbsp;<bdi>(ZIP)</bdi></a>
      <p>${escape(locale.bundle)}</p>
    </div>`);
}

function guideMain(lang, guide, chapters, sources, forPrint = false) {
  const locale = locales[lang];
  const sourceNumber = url => sources.indexOf(url) + 1;
  const tableOfContents = chapters.map(c => `<li><a href="#${c.id}">${escape(c.title)}</a></li>`).join('');
  const references = sources.map((url, i) =>
    `<li id="source-${i + 1}"><a href="${escape(url)}"><bdi dir="ltr">${escape(url)}</bdi></a></li>`).join('\n');
  const sections = chapters.map(c => `<section class="chapter" id="${c.id}">
      <h2>${escape(c.title)}</h2>
      ${c.blocks.map(p => `<p>${escape(p)}</p>`).join('\n      ')}
      <ul class="citations" aria-label="${escape(locale.sources)}">${c.sources.map(url => {
        const number = sourceNumber(url);
        return `<li><a href="#source-${number}" aria-label="${escape(locale.sources)} ${number}">[${number}]</a></li>`;
      }).join('')}</ul>
    </section>`).join('\n    ');
  return `
    <div class="cover guide-cover">
      <div>${forPrint ? `<p class="edition"><bdi>owaua.com</bdi> · ${escape(locale.edition)}</p>` : ''}
        <h1>${escape(locale[guide])}</h1><p class="deck">${escape(locale[guide + 'Intro'])}</p>
        ${forPrint ? '' : `<div class="actions">${downloadLink(lang, guide, 'pdf', true)} ${downloadLink(lang, guide, 'txt')}</div>`}
      </div>
      ${notice(locale)}
    </div>
    <div class="guide-layout">
      <nav class="toc" aria-labelledby="contents-title">
        <h2 id="contents-title">${escape(locale.contents)}</h2>
        <ol>${tableOfContents}<li><a href="#references">${escape(locale.sources)}</a></li></ol>
      </nav>
      <div class="chapters">
        ${sections}
        <section id="references" class="chapter references">
          <h2>${escape(locale.sources)}</h2><ol>${references}</ol>
${locale.translation ? `          <p class="translation">${escape(locale.translation)}</p>\n` : ''}        </section>
      </div>
    </div>
    ${forPrint ? '' : languagePicker(lang, guide)}`;
}

function guideText(lang, guide, chapters, sources) {
  const locale = locales[lang];
  const body = chapters.map((c, i) =>
    `${i + 1}. ${c.title}\n\n${c.blocks.join('\n\n')}\n\n${locale.sources} ${c.sources.map(url => '[' + (sources.indexOf(url) + 1) + ']').join(' ')}`);
  return [
    locale[guide], origin + pathFor(lang, guide), locale.edition, locale[guide + 'Intro'],
    locale.emergency + '\n' + locale.alert,
    locale.contents + '\n' + chapters.map((c, i) => `${i + 1}. ${c.title}`).join('\n'),
    ...body,
    locale.sources + '\n' + sources.map((url, i) => `[${i + 1}] ${url}`).join('\n'),
    ...(locale.translation ? [locale.translation] : []),
  ].join('\n\n') + '\n';
}

async function writePage(lang, guide, html) {
  const directory = join(output, ...pathFor(lang, guide).slice(base.length).split('/'));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), html);
}

const printStyle = await readFile(join(output, 'library.css'), 'utf8') + `
  @page {
    size: A4;
    margin: 15mm 16mm 18mm;
    @bottom-center { content: counter(page) " / " counter(pages); direction: ltr; font-size: 9pt; color: #4b585d; }
  }
  @media print {
    :root { font-size: 10.5pt; line-height: 1.49; }
    h1 { font-size: 26pt !important; }
    .deck { font-size: 11pt; }
    .edition { margin-bottom: .45rem; color: var(--muted); }
    .toc ol { columns: 2; column-gap: 2rem; }
    .toc li { break-inside: avoid; }
    .chapter { break-inside: avoid; padding-block: .95rem; }
    .references ol { list-style-position: inside; padding-inline-start: 0; }
    .references { break-inside: auto; }
    .references li { break-inside: avoid; }
    .citations a { min-height: 1.2rem; }
  }
`;

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ channel: process.env.CHROME_CHANNEL || 'chrome' });
const archiveMembers = [];
try {
  await mkdir(downloads, { recursive: true });
  const page = await browser.newPage();
  for (const lang of languages) {
    await writePage(lang, '', libraryPage(lang));
    for (const [guide, parts] of Object.entries(guides)) {
      const chapters = parts.flatMap(part => part[lang]);
      const sources = [...new Set(chapters.flatMap(c => c.sources))];
      await writePage(lang, guide, shell(lang, guide, guideMain(lang, guide, chapters, sources)));
      const textFile = filename(lang, guide, 'txt');
      const pdfFile = filename(lang, guide, 'pdf');
      await writeFile(join(downloads, textFile), guideText(lang, guide, chapters, sources));
      await page.setContent(shell(lang, guide, guideMain(lang, guide, chapters, sources, true), printStyle));
      await page.pdf({
        path: join(downloads, pdfFile),
        preferCSSPageSize: true,
        printBackground: true,
        tagged: true,
        outline: true,
      });
      archiveMembers.push(textFile, pdfFile);
    }
  }
} finally {
  await browser.close();
}

execFileSync('python3', ['-m', 'zipfile', '-c', bundle, ...archiveMembers], { cwd: downloads });
console.log(`Built ${languages.length} language editions, ${archiveMembers.length} downloads and one ZIP.`);
