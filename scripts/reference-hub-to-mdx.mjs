import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = process.cwd();
const routes = process.argv.slice(2);

if (routes.length === 0) {
  console.error('Usage: node scripts/reference-hub-to-mdx.mjs <route> [...]');
  process.exit(1);
}

const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value ?? '';
const text = (node) => node?.nodeName === '#text'
  ? node.value
  : (node?.childNodes ?? []).map(text).join('');

const findAll = (node, predicate, matches = []) => {
  if (predicate(node)) matches.push(node);
  for (const child of node?.childNodes ?? []) findAll(child, predicate, matches);
  return matches;
};

const findOne = (node, predicate) => findAll(node, predicate)[0];
const hasClass = (node, className) => attr(node, 'class').split(/\s+/).includes(className);
const cleanText = (node) => text(node).trim().replace(/\s+/g, ' ');

const readFrontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error('Missing frontmatter');
  return Object.fromEntries(match[1].split('\n').map((line) => {
    const separator = line.indexOf(':');
    if (separator < 0) return [line, ''];
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^"|"$/g, '')];
  }));
};

for (const route of routes) {
  const safeRoute = route.replaceAll('/', '-');
  const referencePath = path.join(root, '.design/reference/codex-docs', `${safeRoute}-main.html`);
  const contentPath = path.join(root, 'src/content/docs/zh', `${route}.mdx`);
  const document = parse(fs.readFileSync(referencePath, 'utf8'));
  const article = findOne(document, (node) => node.tagName === 'article');
  const variant = hasClass(article, 'docs-features-hub') ? 'features' : 'context';
  const header = findOne(article, (node) => node.tagName === 'header');
  const heading = findOne(header, (node) => node.tagName === 'h1');
  const descriptionNode = variant === 'features'
    ? findOne(header, (node) => node.tagName === 'p')
    : findOne(header, (node) => hasClass(node, 'docs-context-hub__description'));
  const cta = findOne(header, (node) => node.tagName === 'a');
  const image = findOne(header, (node) => node.tagName === 'img');
  const introduction = findOne(article, (node) => hasClass(node, 'docs-features-hub__introduction'));
  const groups = findAll(article, (node) => node.tagName === 'details').map((details) => {
    const summary = findOne(details, (node) => node.tagName === 'summary');
    const icon = findOne(summary, (node) => node.tagName === 'svg');
    const iconName = attr(icon, 'class').match(/lucide-([\w-]+)/g)?.at(-1)?.replace('lucide-', '') ?? 'folder';
    return {
      title: cleanText(findOne(summary, (node) => node.tagName === 'h2')),
      description: cleanText(findOne(summary, (node) => hasClass(node, 'docs-hub-group__description'))),
      icon: iconName,
      links: findAll(details, (node) => node.tagName === 'a').map((link) => ({
        href: attr(link, 'href'),
        label: cleanText(findOne(link, (node) => node.tagName === 'span') ?? link),
      })),
    };
  });

  const oldFrontmatter = readFrontmatter(fs.readFileSync(contentPath, 'utf8'));
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(cleanText(heading))}`,
    `description: ${JSON.stringify(cleanText(descriptionNode))}`,
    `locale: ${JSON.stringify(oldFrontmatter.locale)}`,
    `translationKey: ${JSON.stringify(oldFrontmatter.translationKey)}`,
    `section: ${JSON.stringify(oldFrontmatter.section)}`,
    `order: ${oldFrontmatter.order}`,
    `draft: ${oldFrontmatter.draft}`,
    `translationStatus: ${oldFrontmatter.translationStatus}`,
    `lastUpdated: ${oldFrontmatter.lastUpdated}`,
    'pageKind: hub',
    '---',
  ].join('\n');

  const props = {
    variant,
    title: cleanText(heading),
    description: cleanText(descriptionNode),
    cta: { href: attr(cta, 'href'), label: cleanText(cta) },
    image: {
      src: attr(image, 'src'),
      srcset: attr(image, 'srcset'),
      alt: attr(image, 'alt'),
      width: Number(attr(image, 'width')),
      height: Number(attr(image, 'height')),
    },
    ...(introduction ? { introduction: cleanText(introduction) } : {}),
    groups,
  };

  const body = `<HubPage {...${JSON.stringify(props, null, 2)}} />\n`;
  fs.writeFileSync(contentPath, `${frontmatter}\n${body}`);
  console.log(`Updated ${path.relative(root, contentPath)}`);
}
