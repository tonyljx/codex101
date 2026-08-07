import fs from 'node:fs';
import path from 'node:path';
import { parse, serialize } from 'parse5';

const root = process.cwd();
const routes = process.argv.slice(2);
const fragmentDir = path.join(root, 'src/components/docs/product-illustrations');

if (routes.length === 0) {
  console.error('Usage: node scripts/reference-product-to-mdx.mjs <route> [...]');
  process.exit(1);
}

fs.mkdirSync(fragmentDir, { recursive: true });

const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value ?? '';
const text = (node) => node?.nodeName === '#text'
  ? node.value
  : (node?.childNodes ?? []).map(text).join('');
const cleanText = (node) => text(node).trim().replace(/\s+/g, ' ');
const hasClass = (node, name) => attr(node, 'class').split(/\s+/).includes(name);
const elementChildren = (node) => (node?.childNodes ?? []).filter((child) => child.tagName);

const findAll = (node, predicate, matches = []) => {
  if (!node) return matches;
  if (predicate(node)) matches.push(node);
  for (const child of node?.childNodes ?? []) findAll(child, predicate, matches);
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

const linkData = (node) => node ? ({ href: attr(node, 'href'), label: cleanText(node) }) : undefined;
const iconName = (node) => {
  const svg = findOne(node, (item) => item.tagName === 'svg');
  return attr(svg, 'class').match(/lucide-([\w-]+)/g)?.at(-1)?.replace('lucide-', '') ?? 'globe';
};

const parseDownloadMenu = (menu) => {
  if (!menu) return undefined;
  const button = findOne(menu, (node) => node.tagName === 'button');
  const items = findAll(menu, (node) => node.tagName === 'a' && hasClass(node, 'docs-download-menu__item'));
  const footer = findOne(menu, (node) => node.tagName === 'a' && hasClass(node, 'docs-download-menu__footer'));
  return {
    label: cleanText(findOne(button, (node) => node.tagName === 'span') ?? button),
    items: items.map((item) => ({ href: attr(item, 'href'), label: cleanText(item) })),
    footer: linkData(footer),
  };
};

const writeFragment = (name, media) => {
  const fragmentName = `${name}.html`;
  fs.writeFileSync(path.join(fragmentDir, fragmentName), `${serialize(media).trim()}\n`);
  return fragmentName;
};

const parseMedia = (media, name) => {
  if (!media) return undefined;
  const rootElement = elementChildren(media)[0];
  if (rootElement?.tagName === 'img') {
    return {
      type: 'image',
      src: attr(rootElement, 'src'),
      alt: attr(rootElement, 'alt'),
      width: Number(attr(rootElement, 'width')) || undefined,
      height: Number(attr(rootElement, 'height')) || undefined,
    };
  }

  if (rootElement && hasClass(rootElement, 'deferred-video')) {
    const video = findOne(rootElement, (node) => node.tagName === 'video');
    return {
      type: 'video',
      src: attr(video, 'data-video-src') || attr(video, 'src'),
      title: attr(video, 'title'),
    };
  }

  return { type: 'fragment', fragment: writeFragment(name, media) };
};

for (const route of routes) {
  const safeRoute = route.replaceAll('/', '-');
  const referencePath = path.join(root, '.design/reference/codex-docs', `${safeRoute}-main.html`);
  const contentPath = path.join(root, 'src/content/docs/zh', `${route}.mdx`);
  const document = parse(fs.readFileSync(referencePath, 'utf8'));
  const article = findOne(document, (node) => hasClass(node, 'docs-product-landing'));
  const hero = findOne(article, (node) => hasClass(node, 'docs-product-landing__hero'));
  const heroHeading = findOne(hero, (node) => node.tagName === 'h1');
  const heroActions = findOne(hero, (node) => hasClass(node, 'docs-product-landing__actions'));
  const primaryLink = findOne(heroActions, (node) => node.tagName === 'a' && hasClass(node, 'docs-product-landing__primary-action'));
  const secondaryLink = findOne(heroActions, (node) => node.tagName === 'a' && hasClass(node, 'docs-product-landing__secondary-action'));
  const downloadMenu = findOne(heroActions, (node) => hasClass(node, 'docs-download-menu'));
  const heroMedia = findOne(hero, (node) => hasClass(node, 'docs-product-landing__hero-media'));

  const advantagesSection = findOne(article, (node) => hasClass(node, 'docs-product-landing__advantages'));
  const advantages = elementChildren(advantagesSection).filter((node) => node.tagName === 'article').map((item) => ({
    number: cleanText(findOne(item, (node) => node.tagName === 'span')),
    title: cleanText(findOne(item, (node) => node.tagName === 'h2')),
    description: cleanText(findOne(item, (node) => node.tagName === 'p')),
  }));

  const quickstart = findOne(article, (node) => hasClass(node, 'docs-product-landing__quickstart'));
  const stepsList = findOne(quickstart, (node) => hasClass(node, 'docs-product-landing__steps'));
  const steps = elementChildren(stepsList).filter((node) => node.tagName === 'li').map((item) => {
    const action = findOne(item, (node) => node.tagName === 'a'
      && !hasClass(node, 'docs-download-menu__item')
      && !hasClass(node, 'docs-download-menu__footer'));
    const pre = findOne(item, (node) => node.tagName === 'pre');
    const code = findOne(pre, (node) => node.tagName === 'code');
    return {
      title: cleanText(findOne(item, (node) => node.tagName === 'h3')),
      description: cleanText(findOne(item, (node) => node.tagName === 'p')),
      ...(action ? { action: linkData(action) } : {}),
      ...(findOne(item, (node) => hasClass(node, 'docs-download-menu')) ? { download: true } : {}),
      ...(code ? {
        code: {
          value: text(code).trim(),
          language: attr(pre, 'class').match(/language-([\w-]+)/)?.[1] ?? 'text',
        },
      } : {}),
    };
  });
  const nextSteps = findOne(quickstart, (node) => hasClass(node, 'docs-product-landing__next-steps'));

  const capabilities = findOne(article, (node) => hasClass(node, 'docs-product-landing__capabilities'));
  const capabilitiesHeader = elementChildren(capabilities).find((node) => node.tagName === 'header');
  const featureList = findOne(capabilities, (node) => hasClass(node, 'docs-product-landing__feature-list'));
  const features = elementChildren(featureList).filter((node) => node.tagName === 'article').map((item, index) => {
    const copy = findOne(item, (node) => hasClass(node, 'docs-product-landing__feature-copy'));
    const media = findOne(item, (node) => hasClass(node, 'docs-product-landing__feature-media'));
    return {
      number: cleanText(findOne(copy, (node) => node.tagName === 'span')),
      title: cleanText(findOne(copy, (node) => node.tagName === 'h3')),
      description: cleanText(findOne(copy, (node) => node.tagName === 'p')),
      action: linkData(findOne(copy, (node) => node.tagName === 'a')),
      media: parseMedia(media, `${safeRoute}-feature-${index + 1}`),
    };
  });

  const workflowSection = findOne(article, (node) => hasClass(node, 'docs-product-landing__workflow'));
  const workflow = workflowSection ? (() => {
    const header = elementChildren(workflowSection).find((node) => node.tagName === 'header');
    const grid = findOne(workflowSection, (node) => hasClass(node, 'docs-product-landing__workflow-grid'));
    return {
      title: cleanText(findOne(header, (node) => node.tagName === 'h2')),
      description: cleanText(findOne(header, (node) => node.tagName === 'p')),
      items: elementChildren(grid).filter((node) => node.tagName === 'article').map((item) => {
        const meta = findOne(item, (node) => hasClass(node, 'docs-product-landing__workflow-meta'));
        const headingLink = findOne(findOne(item, (node) => node.tagName === 'h3'), (node) => node.tagName === 'a');
        return {
          meta: elementChildren(meta).map(cleanText),
          action: linkData(headingLink),
          description: cleanText(elementChildren(item).find((node) => node.tagName === 'p')),
        };
      }),
    };
  })() : undefined;

  const useWhenSection = findOne(article, (node) => hasClass(node, 'docs-product-landing__use-when'));
  const useWhenList = findOne(useWhenSection, (node) => node.tagName === 'dl');
  const useWhen = {
    title: cleanText(findOne(useWhenSection, (node) => node.tagName === 'h2')),
    items: elementChildren(useWhenList).map((item) => ({
      term: cleanText(findOne(item, (node) => node.tagName === 'dt')),
      description: cleanText(findOne(item, (node) => node.tagName === 'dd')),
    })),
  };

  const surfacesSection = findOne(article, (node) => hasClass(node, 'docs-product-landing__surfaces'));
  const surfacesNav = findOne(surfacesSection, (node) => node.tagName === 'nav');
  const surfaces = {
    title: cleanText(findOne(surfacesSection, (node) => node.tagName === 'h2')),
    items: elementChildren(surfacesNav).filter((node) => node.tagName === 'a').map((item) => ({
      href: attr(item, 'href'),
      icon: iconName(findOne(item, (node) => hasClass(node, 'docs-product-landing__surface-icon'))),
      title: cleanText(findOne(item, (node) => node.tagName === 'h3')),
      description: cleanText(findOne(item, (node) => node.tagName === 'p')),
    })),
  };

  const data = {
    product: attr(article, 'data-product'),
    hero: {
      eyebrow: cleanText(findOne(hero, (node) => hasClass(node, 'docs-product-landing__eyebrow'))),
      titleLines: elementChildren(heroHeading).filter((node) => node.tagName === 'span').map(cleanText),
      lead: cleanText(findOne(hero, (node) => hasClass(node, 'docs-product-landing__lead'))),
      primary: primaryLink ? linkData(primaryLink) : undefined,
      download: parseDownloadMenu(downloadMenu),
      secondary: linkData(secondaryLink),
      media: parseMedia(heroMedia, `${safeRoute}-hero`),
    },
    advantages,
    quickstart: {
      label: cleanText(findOne(quickstart, (node) => hasClass(node, 'docs-product-landing__section-label'))),
      title: cleanText(elementChildren(quickstart).find((node) => node.tagName === 'h2')),
      description: cleanText(findOne(quickstart, (node) => hasClass(node, 'docs-product-landing__section-lead'))),
      steps,
      nextSteps: {
        title: cleanText(findOne(nextSteps, (node) => node.tagName === 'h2')),
        links: findAll(nextSteps, (node) => node.tagName === 'a').map(linkData),
      },
    },
    capabilities: {
      title: cleanText(findOne(capabilitiesHeader, (node) => node.tagName === 'h2')),
      description: cleanText(findOne(capabilitiesHeader, (node) => node.tagName === 'p')),
      features,
    },
    ...(workflow ? { workflow } : {}),
    useWhen,
    surfaces,
  };

  const oldFrontmatter = readFrontmatter(fs.readFileSync(contentPath, 'utf8'));
  const title = data.hero.titleLines.join('');
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `navTitle: ${JSON.stringify(oldFrontmatter.title)}`,
    `description: ${JSON.stringify(data.hero.lead)}`,
    `locale: ${JSON.stringify(oldFrontmatter.locale)}`,
    `translationKey: ${JSON.stringify(oldFrontmatter.translationKey)}`,
    `section: ${JSON.stringify(oldFrontmatter.section)}`,
    `order: ${oldFrontmatter.order}`,
    `draft: ${oldFrontmatter.draft}`,
    `translationStatus: ${oldFrontmatter.translationStatus}`,
    `lastUpdated: ${oldFrontmatter.lastUpdated}`,
    'pageKind: product',
    '---',
  ].join('\n');

  fs.writeFileSync(contentPath, `${frontmatter}\n<ProductPage {...${JSON.stringify(data, null, 2)}} />\n`);
  console.log(`Updated ${path.relative(root, contentPath)}`);
}
