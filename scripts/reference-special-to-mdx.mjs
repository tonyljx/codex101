import fs from 'node:fs';
import path from 'node:path';
import { parse, serialize } from 'parse5';

const root = process.cwd();
const routes = process.argv.slice(2);
const outputDir = path.join(root, 'src/content/special/zh');

if (routes.length === 0) {
  console.error('Usage: node scripts/reference-special-to-mdx.mjs <route> [...]');
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value ?? '';
const text = (node) => node?.nodeName === '#text' ? node.value : (node?.childNodes ?? []).map(text).join('');
const cleanText = (node) => text(node).trim().replace(/\s+/g, ' ');
const hasClass = (node, className) => attr(node, 'class').split(/\s+/).includes(className);

const findAll = (node, predicate, matches = []) => {
  if (!node) return matches;
  if (predicate(node)) matches.push(node);
  for (const child of node.childNodes ?? []) findAll(child, predicate, matches);
  return matches;
};
const findOne = (node, predicate) => findAll(node, predicate)[0];

const readFrontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error('Missing frontmatter');
  return Object.fromEntries(match[1].split('\n').map((line) => {
    const separator = line.indexOf(':');
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^"|"$/g, '')];
  }));
};

const removeNode = (node) => {
  if (!node?.parentNode?.childNodes) return;
  node.parentNode.childNodes = node.parentNode.childNodes.filter((child) => child !== node);
};

for (const route of routes) {
  const referencePath = path.join(root, '.design/reference/codex-docs', `${route}-main.html`);
  const contentPath = path.join(root, 'src/content/docs/zh', `${route}.mdx`);
  const document = parse(fs.readFileSync(referencePath, 'utf8'));
  const page = findOne(document, (node) => hasClass(node, 'docs-page-content'));
  if (!page) throw new Error(`Missing .docs-page-content in ${referencePath}`);

  findAll(page, (node) => node.tagName === 'script'
    || node.tagName === 'ins'
    || hasClass(node, 'google-auto-placed')).forEach(removeNode);
  findAll(page, (node) => Boolean(node.attrs)).forEach((node) => {
    const style = node.attrs.find(({ name }) => name === 'style');
    if (!style) return;
    style.value = style.value
      .split(';')
      .map((declaration) => declaration.trim())
      .filter(Boolean)
      .filter((declaration) => !/^height\s*:\s*auto\s*!important$/i.test(declaration))
      .join(';');
    if (!style.value) node.attrs = node.attrs.filter(({ name }) => name !== 'style');
  });

  const sourceHeader = findOne(page, (node) => hasClass(node, 'docs-page-header'))
    ?? findOne(page, (node) => hasClass(node, 'docs-pricing__header'));
  const sourceTitle = cleanText(findOne(sourceHeader, (node) => node.tagName === 'h1'));
  const sourceDescription = cleanText(findOne(sourceHeader, (node) => node.tagName === 'p'));
  const oldFrontmatter = readFrontmatter(fs.readFileSync(contentPath, 'utf8'));
  const navTitle = oldFrontmatter.navTitle
    ?? (sourceTitle !== oldFrontmatter.title ? oldFrontmatter.title : undefined);
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(sourceTitle)}`,
    ...(navTitle ? [`navTitle: ${JSON.stringify(navTitle)}`] : []),
    `description: ${JSON.stringify(sourceDescription)}`,
    `locale: ${JSON.stringify(oldFrontmatter.locale)}`,
    `translationKey: ${JSON.stringify(oldFrontmatter.translationKey)}`,
    `section: ${JSON.stringify(oldFrontmatter.section)}`,
    `order: ${oldFrontmatter.order}`,
    `draft: ${oldFrontmatter.draft}`,
    `translationStatus: ${oldFrontmatter.translationStatus}`,
    `lastUpdated: ${oldFrontmatter.lastUpdated}`,
    'pageKind: special',
    '---',
  ].join('\n');

  fs.writeFileSync(path.join(outputDir, `${route}.html`), `${serialize(page).trim()}\n`);
  fs.writeFileSync(contentPath, `${frontmatter}\n<SpecialPage source=${JSON.stringify(route)} />\n`);
  console.log(`Updated ${path.relative(root, contentPath)} and generated ${path.relative(root, path.join(outputDir, `${route}.html`))}`);
}
