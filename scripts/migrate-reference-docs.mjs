import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import GithubSlugger from 'github-slugger';
import { parse, serialize } from 'parse5';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const sourceOrigin = 'https://www.codex-docs.com';
const workspaceRoot = resolve(import.meta.dirname, '..');
const contentRoot = resolve(workspaceRoot, 'src/content/docs/zh');
const publicRoot = resolve(workspaceRoot, 'public');
const shouldWrite = process.argv.includes('--write');
const shouldRefreshAssets = process.argv.includes('--refresh-assets');
const generatedMarker = `sourceUrl: "${sourceOrigin}`;
const hubKeys = ['features', 'configuration', 'developers', 'security-administration', 'administration'];
const supplementalRoutes = [
  { hub: 'administration', navTitle: '使用限制与支出控制', path: '/docs/enterprise/usage-limits', slug: 'enterprise/usage-limits' },
  { hub: 'administration', navTitle: 'CI/CD 身份验证', path: '/docs/auth/ci-cd-auth', slug: 'auth/ci-cd-auth' },
];

const getAttribute = (node, name) => node.attrs?.find((attribute) => attribute.name === name)?.value;
const classNames = (node) => new Set((getAttribute(node, 'class') ?? '').split(/\s+/).filter(Boolean));
const textContent = (node) => node.nodeName === '#text'
  ? node.value
  : (node.childNodes ?? []).map(textContent).join('');

const findFirst = (node, predicate) => {
  if (predicate(node)) return node;
  for (const child of node.childNodes ?? []) {
    const match = findFirst(child, predicate);
    if (match) return match;
  }
  return undefined;
};

const findAll = (node, predicate, matches = []) => {
  if (predicate(node)) matches.push(node);
  for (const child of node.childNodes ?? []) findAll(child, predicate, matches);
  return matches;
};

const removeNodes = (node, predicate) => {
  if (!node.childNodes) return;
  node.childNodes = node.childNodes.filter((child) => !predicate(child));
  for (const child of node.childNodes) removeNodes(child, predicate);
};

function readReferenceRoutes(source) {
  const hubMatches = [...source.matchAll(/^ {2}(?:'([^']+)'|([a-z-]+)): \{$/gm)]
    .map((match) => ({ key: match[1] ?? match[2], index: match.index }))
    .filter((match) => hubKeys.includes(match.key));
  const routes = [];

  for (const [hubIndex, hub] of hubMatches.entries()) {
    const end = hubMatches[hubIndex + 1]?.index ?? source.indexOf('\n};', hub.index);
    const block = source.slice(hub.index, end);
    for (const match of block.matchAll(/item\('([^']+)',\s*'([^']+)'\)/g)) {
      if (match[2] === `/docs/${hub.key}`) continue;
      routes.push({ hub: hub.key, navTitle: match[1], path: match[2], slug: match[2].replace(/^\/docs\//, '') });
    }
  }

  return routes;
}

function createTurndownService() {
  const service = new TurndownService({
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
    headingStyle: 'atx',
  });
  const headingSlugger = new GithubSlugger();
  service.use(gfm);

  service.addRule('sourceHeadingAnchors', {
    filter: (node) => node.nodeName === 'SPAN' && node.classList.contains('doc-heading-anchor-alias'),
    replacement: (_content, node) => {
      const id = node.getAttribute('id');
      return id ? `\n\n<span id=${JSON.stringify(id)}></span>\n\n` : '';
    },
  });

  service.addRule('sourceHeadings', {
    filter: ['h2', 'h3', 'h4', 'h5'],
    replacement: (content, node) => {
      const level = Number(node.nodeName.slice(1));
      const label = content.trim();
      const generatedId = headingSlugger.slug(node.textContent.trim());
      const sourceId = node.getAttribute('id');
      const alias = sourceId && sourceId !== generatedId ? `<span id=${JSON.stringify(sourceId)}></span>\n\n` : '';
      return `\n\n${alias}${'#'.repeat(level)} ${label}\n\n`;
    },
  });

  service.addRule('sourceCodeBlocks', {
    filter: 'pre',
    replacement: (_content, node) => {
      const code = node.textContent.replace(/\u00a0/g, ' ').replace(/^\n+|\n+$/g, '');
      const codeNode = node.querySelector('code');
      const languageClass = [node, codeNode]
        .filter(Boolean)
        .flatMap((element) => (element.getAttribute('class') ?? '').split(/\s+/))
        .find((name) => name.startsWith('language-'));
      const language = languageClass?.slice('language-'.length) ?? 'text';
      return `\n\n<CodeBlock code={${JSON.stringify(code)}} language=${JSON.stringify(language)} />\n\n`;
    },
  });

  service.addRule('sourceCallouts', {
    filter: (node) => node.nodeName === 'ASIDE' && node.classList.contains('doc-callout'),
    replacement: (content, node) => {
      const kind = ['warning', 'danger', 'primary', 'note'].find((value) => node.classList.contains(`doc-callout--${value}`)) ?? 'default';
      return `\n\n<Callout kind=${JSON.stringify(kind)}>\n\n${content.trim()}\n\n</Callout>\n\n`;
    },
  });

  service.addRule('sourceScreenshots', {
    filter: (node) => node.nodeName === 'FIGURE' && node.classList.contains('doc-screenshot'),
    replacement: (_content, node) => {
      const image = node.querySelector('img');
      if (!image) return '';
      const darkSource = node.querySelector('source[media*="dark"]');
      const maxHeight = node.getAttribute('style')?.match(/max-height:\s*(\d+)px/)?.[1];
      const properties = [
        `src=${JSON.stringify(image.getAttribute('src') ?? '')}`,
        darkSource?.getAttribute('srcset') ? `darkSrc=${JSON.stringify(darkSource.getAttribute('srcset').split(/\s+/)[0])}` : undefined,
        `alt=${JSON.stringify(image.getAttribute('alt') ?? '')}`,
        image.getAttribute('width') ? `width={${Number(image.getAttribute('width'))}}` : undefined,
        image.getAttribute('height') ? `height={${Number(image.getAttribute('height'))}}` : undefined,
        maxHeight ? `maxHeight={${Number(maxHeight)}}` : undefined,
      ].filter(Boolean).join(' ');
      return `\n\n<Screenshot ${properties} />\n\n`;
    },
  });

  service.addRule('sourceVideos', {
    filter: 'video',
    replacement: (_content, node) => {
      const src = node.getAttribute('src') ?? node.getAttribute('data-video-src') ?? node.querySelector('source')?.getAttribute('src');
      return src ? `\n\n<Video src=${JSON.stringify(src)} />\n\n` : '';
    },
  });

  service.addRule('sourceTableWrappers', {
    filter: (node) => node.nodeName === 'DIV' && node.classList.contains('doc-table-wrap'),
    replacement: (content) => `\n\n<div className="doc-table-wrap">\n\n${content.trim()}\n\n</div>\n\n`,
  });

  service.addRule('sourceFileTrees', {
    filter: (node) => node.nodeName === 'DIV' && node.classList.contains('doc-file-tree'),
    replacement: (_content, node) => {
      const tree = node.textContent.replace(/\n{3,}/g, '\n\n').trim();
      return tree ? `\n\n<CodeBlock code={${JSON.stringify(tree)}} language="text" />\n\n` : '';
    },
  });

  service.addRule('sourceKeyboardKeys', {
    filter: 'kbd',
    replacement: (content) => `<kbd>${content}</kbd>`,
  });

  return service;
}

function collectAssetPaths(node) {
  const paths = new Set();
  for (const element of findAll(node, (candidate) => Boolean(candidate.tagName))) {
    for (const attributeName of ['src', 'poster', 'data-video-src']) {
      const value = getAttribute(element, attributeName);
      if (value) paths.add(value);
    }
    const srcset = getAttribute(element, 'srcset');
    if (srcset) {
      for (const candidate of srcset.split(',')) paths.add(candidate.trim().split(/\s+/)[0]);
    }
    const style = getAttribute(element, 'style') ?? '';
    for (const match of style.matchAll(/url\(["']?([^"')]+)["']?\)/g)) paths.add(match[1]);
  }
  return [...paths].filter(Boolean);
}

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function downloadAsset(assetPath) {
  const url = new URL(assetPath, sourceOrigin);
  if (url.origin !== sourceOrigin || !url.pathname.startsWith('/')) return { skipped: assetPath };
  const outputPath = resolve(publicRoot, `.${url.pathname}`);
  if (!outputPath.startsWith(`${publicRoot}/`)) throw new Error(`Refusing asset path outside public/: ${assetPath}`);
  if (!shouldRefreshAssets && await fileExists(outputPath)) return { existing: url.pathname };

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Asset request failed (${response.status}): ${url}`);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
  return { written: url.pathname };
}

async function mapWithConcurrency(items, concurrency, callback) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await callback(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}

function yamlString(value) {
  return JSON.stringify(value.replace(/\s+/g, ' ').trim());
}

function escapeTableCodePipes(markdown) {
  return markdown.split('\n').map((line) => {
    if (!/^\s*\|/.test(line)) return line;
    return line.replace(/(`+)([^`\n]*?)\1/g, (_match, fence, code) =>
      `${fence}${code.replace(/\|/g, '\\|')}${fence}`,
    );
  }).join('\n');
}

function createFrontmatter(route, page, index) {
  const lines = [
    '---',
    `title: ${yamlString(page.title)}`,
    route.navTitle !== page.title ? `navTitle: ${yamlString(route.navTitle)}` : undefined,
    `description: ${yamlString(page.description)}`,
    'locale: "zh"',
    `translationKey: ${JSON.stringify(route.slug)}`,
    'section: "explore"',
    `order: ${1001 + index}`,
    'draft: false',
    'translationStatus: complete',
    `lastUpdated: ${new Date().toISOString().slice(0, 10)}`,
    'pageKind: article',
    `referenceHub: ${JSON.stringify(route.hub)}`,
    `sourceUrl: ${JSON.stringify(`${sourceOrigin}${route.path}`)}`,
  ].filter(Boolean);

  if (page.outline.length > 0) {
    lines.push('outline:');
    for (const item of page.outline) {
      lines.push(`  - id: ${yamlString(item.id)}`);
      lines.push(`    label: ${yamlString(item.label)}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

async function fetchReferencePage(route, index) {
  const url = `${sourceOrigin}${route.path}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Page request failed (${response.status}): ${url}`);
  const document = parse(await response.text());
  const header = findFirst(document, (node) => node.tagName === 'header' && classNames(node).has('docs-page-header'));
  const content = findFirst(document, (node) => Boolean(node.tagName) && classNames(node).has('doc-content'));
  if (!header || !content) throw new Error(`Missing docs header or content root: ${url}`);

  const titleNode = findFirst(header, (node) => node.tagName === 'h1');
  const descriptionNode = findFirst(header, (node) => node.tagName === 'p');
  const title = titleNode ? textContent(titleNode).trim() : route.navTitle;
  const description = descriptionNode ? textContent(descriptionNode).trim() : `${title} 文档。`;
  const assetPaths = collectAssetPaths(content);

  removeNodes(content, (node) => {
    const classes = classNames(node);
    return ['script', 'style', 'iframe', 'ins'].includes(node.tagName)
      || classes.has('codex-micro-demo')
      || classes.has('docs-voice-demo')
      || classes.has('google-auto-placed');
  });

  const outline = findAll(content, (node) => node.tagName === 'h2').map((heading) => ({
    id: getAttribute(heading, 'id') ?? new GithubSlugger().slug(textContent(heading).trim()),
    label: textContent(heading).replace(/\s+/g, ' ').trim(),
  }));
  const markdown = escapeTableCodePipes(
    createTurndownService().turndown(serialize(content))
      .replace(/\n{4,}/g, '\n\n\n')
      .trim(),
  );
  const frontmatter = createFrontmatter(route, { title, description, outline }, index);
  return { ...route, title, description, outline, assetPaths, content: `${frontmatter}\n\n${markdown}\n` };
}

const sidebarSource = await readFile(resolve(workspaceRoot, 'src/lib/reference-sidebars.ts'), 'utf8');
const referenceRoutes = readReferenceRoutes(sidebarSource);
if (referenceRoutes.length !== 105) throw new Error(`Expected 105 reference detail routes, found ${referenceRoutes.length}.`);
const routes = [...referenceRoutes, ...supplementalRoutes];

console.log(`Fetching ${routes.length} reference documents from ${sourceOrigin}...`);
const pages = await mapWithConcurrency(routes, 8, fetchReferencePage);
const assets = [...new Set(pages.flatMap((page) => page.assetPaths))];

if (!shouldWrite) {
  console.log(`Dry run complete: ${pages.length} MDX documents and ${assets.length} referenced assets ready.`);
  console.log('Run with --write to update src/content/docs/zh and public/.');
  process.exit(0);
}

for (const page of pages) {
  const outputPath = resolve(contentRoot, `${page.slug}.mdx`);
  if (!outputPath.startsWith(`${contentRoot}/`)) throw new Error(`Refusing content path outside zh docs: ${page.slug}`);
  if (await fileExists(outputPath)) {
    const existing = await readFile(outputPath, 'utf8');
    if (!existing.includes(generatedMarker)) throw new Error(`Refusing to overwrite non-generated content: ${outputPath}`);
  }
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, page.content);
}

const assetResults = await mapWithConcurrency(assets, 8, downloadAsset);
const downloaded = assetResults.filter((result) => result.written).length;
const existing = assetResults.filter((result) => result.existing).length;
const skipped = assetResults.filter((result) => result.skipped).length;
console.log(`Migrated ${pages.length} MDX documents. Assets: ${downloaded} downloaded, ${existing} existing, ${skipped} external skipped.`);
