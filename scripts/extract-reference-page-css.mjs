import fs from 'node:fs';
import postcss from 'postcss';

const inputPath = process.argv[2];
const outputPath = process.argv[3];
const needles = process.argv.slice(4);

if (!inputPath || !outputPath || needles.length === 0) {
  console.error('Usage: node scripts/extract-reference-page-css.mjs <input.css> <output.css> <selector-fragment> [...]');
  process.exit(1);
}

const source = postcss.parse(fs.readFileSync(inputPath, 'utf8'));
const output = postcss.root();

const copyMatching = (container, target) => {
  for (const node of container.nodes ?? []) {
    if (node.type === 'rule') {
      if (needles.some((needle) => node.selector.includes(needle))) target.append(node.clone());
      continue;
    }

    if (node.type === 'atrule' && node.nodes) {
      const clone = postcss.atRule({ name: node.name, params: node.params });
      copyMatching(node, clone);
      if (clone.nodes?.length) target.append(clone);
    }
  }
};

copyMatching(source, output);
fs.writeFileSync(outputPath, `/* Generated from the captured reference stylesheet. Re-run the extraction script when the source design changes. */\n${output.toString()}\n`);
console.log(`Wrote ${outputPath}`);
