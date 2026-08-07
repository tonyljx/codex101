import fs from 'node:fs';
import postcss from 'postcss';

const [inputPath, outputPath, prefix, ...needles] = process.argv.slice(2);
if (!inputPath || !outputPath || !prefix || needles.length === 0) {
  console.error('Usage: node scripts/extract-prefixed-reference-css.mjs <input.css> <output.css> <prefix> <selector-fragment> [...]');
  process.exit(1);
}

const source = postcss.parse(fs.readFileSync(inputPath, 'utf8'));
const output = postcss.root();

const prefixSelector = (selector) => {
  if (selector.startsWith('html.dark ')) return `html.dark ${prefix} ${selector.slice('html.dark '.length)}`;
  if (selector.startsWith('html[data-theme=dark] ')) return `html[data-theme=dark] ${prefix} ${selector.slice('html[data-theme=dark] '.length)}`;
  return `${prefix} ${selector}`;
};

const copyMatching = (container, target) => {
  for (const node of container.nodes ?? []) {
    if (node.type === 'rule') {
      if (!needles.some((needle) => node.selector.includes(needle))) continue;
      const clone = node.clone();
      clone.selectors = node.selectors.map(prefixSelector);
      target.append(clone);
      continue;
    }

    if (node.type !== 'atrule' || !node.nodes) continue;
    if (node.name === 'layer') {
      copyMatching(node, target);
      continue;
    }
    const clone = postcss.atRule({ name: node.name, params: node.params });
    copyMatching(node, clone);
    if (clone.nodes?.length) target.append(clone);
  }
};

copyMatching(source, output);
fs.writeFileSync(outputPath, `/* Generated and scoped from the captured reference stylesheet. */\n${output.toString()}\n`);
console.log(`Wrote ${outputPath}`);
