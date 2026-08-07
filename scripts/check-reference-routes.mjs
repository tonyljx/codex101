import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { parse } from 'parse5';

const workspaceRoot = resolve(import.meta.dirname, '..');
const sidebarSource = readFileSync(resolve(workspaceRoot, 'src/lib/reference-sidebars.ts'), 'utf8');
const configuredRoutes = [
  ...new Set(
    [...sidebarSource.matchAll(/item\([^,]+,\s*'([^']+)'\)/g)].map((match) => match[1].replace(/\/$/, '')),
  ),
];

const missingRoutes = configuredRoutes.filter((route) => {
  const outputPath = resolve(workspaceRoot, 'dist', route.replace(/^\//, ''), 'index.html');
  return !existsSync(outputPath);
});

if (missingRoutes.length > 0) {
  console.error(`Reference navigation contains ${missingRoutes.length} route(s) without generated HTML:`);
  for (const route of missingRoutes) console.error(`- ${route}`);
  process.exit(1);
}

const docsOutputRoot = resolve(workspaceRoot, 'dist/docs');
const htmlFiles = [];
const collectHtml = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) collectHtml(path);
    else if (entry.name === 'index.html') htmlFiles.push(path);
  }
};
collectHtml(docsOutputRoot);

const missingInternalLinks = new Map();
for (const htmlFile of htmlFiles) {
  const document = parse(readFileSync(htmlFile, 'utf8'));
  const stack = [document];
  while (stack.length > 0) {
    const node = stack.pop();
    stack.push(...(node.childNodes ?? []));
    if (node.tagName !== 'a') continue;
    const href = node.attrs?.find((attribute) => attribute.name === 'href')?.value;
    if (!href?.startsWith('/docs/')) continue;
    const pathname = new URL(href, 'https://codex101.local').pathname.replace(/\/$/, '');
    const outputPath = resolve(workspaceRoot, 'dist', pathname.replace(/^\//, ''), 'index.html');
    if (existsSync(outputPath)) continue;
    const sources = missingInternalLinks.get(pathname) ?? new Set();
    sources.add(`/docs/${relative(docsOutputRoot, resolve(htmlFile, '..')).replaceAll('\\', '/')}`.replace(/\/$/, ''));
    missingInternalLinks.set(pathname, sources);
  }
}

if (missingInternalLinks.size > 0) {
  console.error(`Generated Chinese documentation contains ${missingInternalLinks.size} missing internal route(s):`);
  for (const [route, sources] of missingInternalLinks) {
    console.error(`- ${route} (linked from ${[...sources].join(', ')})`);
  }
  process.exit(1);
}

console.log(`Reference route coverage passed: ${configuredRoutes.length}/${configuredRoutes.length} routes generated.`);
console.log(`Internal link coverage passed: ${htmlFiles.length} Chinese documentation pages checked.`);
