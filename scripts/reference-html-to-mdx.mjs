import fs from 'node:fs';
import * as parse5 from 'parse5';

const input = process.argv[2];

if (!input) {
  console.error('Usage: node scripts/reference-html-to-mdx.mjs <reference-main.html>');
  process.exit(1);
}

const root = parse5.parseFragment(fs.readFileSync(input, 'utf8'));

const getAttr = (node, name) =>
  node.attrs?.find((attribute) => attribute.name === name)?.value ?? '';

const getClass = (node) => getAttr(node, 'class');

const textContent = (node) =>
  node.nodeName === '#text'
    ? node.value
    : (node.childNodes ?? []).map(textContent).join('');

const findFirst = (node, predicate) => {
  if (predicate(node)) return node;

  for (const child of node.childNodes ?? []) {
    const match = findFirst(child, predicate);
    if (match) return match;
  }
};

const escapeText = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('{', '&#123;')
    .replaceAll('}', '&#125;');

const inline = (node) => {
  if (node.nodeName === '#text') {
    return escapeText(node.value.replace(/\s+/g, ' '));
  }

  const children = (node.childNodes ?? []).map(inline).join('');
  const id = getAttr(node, 'id');

  switch (node.tagName) {
    case 'a':
      return '<a href=' + JSON.stringify(getAttr(node, 'href')) + '>' + children + '</a>';
    case 'strong':
      return '<strong>' + children + '</strong>';
    case 'em':
      return '<em>' + children + '</em>';
    case 'code':
      return '<code>' + children + '</code>';
    case 'kbd':
      return '<kbd>' + children + '</kbd>';
    case 'span':
      return '<span' + (id ? ' id=' + JSON.stringify(id) : '') + '>' + children + '</span>';
    case 'br':
      return '<br />';
    default:
      return children;
  }
};

const codeBlock = (node, indent = '') => {
  const code = findFirst(node, (child) => child.tagName === 'code');
  const value = textContent(code ?? node).replace(/\n$/, '');
  const language = getClass(code).match(/language-([^\s]+)/)?.[1] ?? 'text';
  const languageProp =
    language === 'text' ? '' : ' language={' + JSON.stringify(language) + '}';
  return indent + '<CodeBlock code={' + JSON.stringify(value) + '}' + languageProp + ' />';
};

const serializeListItem = (node, indent) => {
  const significant = (node.childNodes ?? []).filter(
    (child) => child.nodeName !== '#text' || child.value.trim(),
  );
  const isInline = significant.every(
    (child) =>
      child.nodeName === '#text' ||
      ['strong', 'em', 'code', 'kbd', 'a', 'span'].includes(child.tagName),
  );

  if (isInline) {
    return indent + '<li>' + significant.map(inline).join('') + '</li>';
  }

  const content = significant
    .map((child) => serializeNode(child, indent + '  '))
    .filter(Boolean)
    .join('\n');

  return indent + '<li>\n' + content + '\n' + indent + '</li>';
};

const serializeList = (node, indent = '') => {
  const tag = node.tagName;
  const workflow = getClass(node).split(/\s+/).includes('doc-workflow-steps');
  const open = workflow
    ? '<' + tag + ' className="doc-workflow-steps">'
    : '<' + tag + '>';
  const items = (node.childNodes ?? [])
    .filter((child) => child.tagName === 'li')
    .map((child) => serializeListItem(child, indent + '  '))
    .join('\n');

  return indent + open + '\n' + items + '\n' + indent + '</' + tag + '>';
};

const serializeLinkCard = (node, indent = '') => {
  const iconNode = findFirst(
    node,
    (child) =>
      child.tagName === 'span' && getClass(child).includes('doc-link-card__icon--'),
  );
  const icon =
    getClass(iconNode).match(/doc-link-card__icon--([^\s]+)/)?.[1] ?? 'book';
  const body = findFirst(
    node,
    (child) =>
      child.tagName === 'span' &&
      getClass(child).split(/\s+/).includes('doc-link-card__body'),
  );
  const titleNode = findFirst(body, (child) => child.tagName === 'strong');
  const descriptionNode = body?.childNodes?.find(
    (child) => child.tagName === 'span' && !getClass(child),
  );

  return (
    indent +
    '<LinkCard href={' +
    JSON.stringify(getAttr(node, 'href')) +
    '} title={' +
    JSON.stringify(textContent(titleNode).trim()) +
    '} description={' +
    JSON.stringify(textContent(descriptionNode).trim()) +
    '} icon={' +
    JSON.stringify(icon) +
    '} />'
  );
};

const serializeScreenshot = (node, indent = '') => {
  const img = findFirst(node, (child) => child.tagName === 'img');
  const source = findFirst(node, (child) => child.tagName === 'source');
  const lightSrc = getAttr(img, 'data-docs-light-src') || getAttr(img, 'src');
  const darkSrc = getAttr(source, 'srcset') || getAttr(img, 'src');
  const style = getAttr(node, 'style');
  const maxHeight = Number(
    style.match(/--doc-screenshot-max-height:\s*(\d+)px/)?.[1] ?? 520,
  );

  return (
    indent +
    '<Screenshot src={' +
    JSON.stringify(lightSrc) +
    '} darkSrc={' +
    JSON.stringify(darkSrc) +
    '} alt={' +
    JSON.stringify(getAttr(img, 'alt')) +
    '} maxHeight={' +
    maxHeight +
    '} picture />'
  );
};

function serializeNode(node, indent = '') {
  if (node.nodeName === '#text') {
    return node.value.trim() ? indent + escapeText(node.value.trim()) : '';
  }

  if (node.tagName === 'pre') return codeBlock(node, indent);

  if (
    node.tagName === 'a' &&
    getClass(node).split(/\s+/).includes('doc-link-card')
  ) {
    return serializeLinkCard(node, indent);
  }

  if (
    node.tagName === 'figure' &&
    getClass(node).split(/\s+/).includes('doc-screenshot')
  ) {
    return serializeScreenshot(node, indent);
  }

  if (node.tagName === 'ul' || node.tagName === 'ol') {
    return serializeList(node, indent);
  }

  if (/^h[2-4]$/.test(node.tagName)) {
    const id = getAttr(node, 'id');
    return (
      indent +
      '<' +
      node.tagName +
      (id ? ' id=' + JSON.stringify(id) : '') +
      '>' +
      (node.childNodes ?? []).map(inline).join('').trim() +
      '</' +
      node.tagName +
      '>'
    );
  }

  if (node.tagName === 'p') {
    return (
      indent +
      '<p>' +
      (node.childNodes ?? []).map(inline).join('').trim() +
      '</p>'
    );
  }

  if (
    node.tagName === 'span' &&
    getClass(node).split(/\s+/).includes('doc-heading-anchor-alias')
  ) {
    return (
      indent +
      '<span id=' +
      JSON.stringify(getAttr(node, 'id')) +
      ' className="doc-heading-anchor-alias"></span>'
    );
  }

  return (node.childNodes ?? [])
    .map((child) => serializeNode(child, indent))
    .filter(Boolean)
    .join('\n');
}

const article = findFirst(
  root,
  (node) =>
    node.tagName === 'article' &&
    getClass(node).split(/\s+/).includes('doc-content'),
);

if (!article) {
  throw new Error('No .doc-content article found in ' + input);
}

const body = (article.childNodes ?? [])
  .map((child) => serializeNode(child))
  .filter(Boolean)
  .join('\n\n');

process.stdout.write(body + '\n');
