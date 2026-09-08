import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const root = resolve('dist/client');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
assert(html.includes('Haodong Liang'), 'Missing homepage content');
assert(html.includes('a pretrained model'), 'Missing approved research description');
assert(html.includes('using instrumental variables'), 'Missing regression contribution');
assert(html.includes('with the environment'), 'Missing reinforcement-learning contribution');
assert(html.includes('our work establishes that Transformers'), 'Missing collaborative regression wording');
assert(html.includes('we investigate how Transformers can act as agents'), 'Missing collaborative reinforcement-learning wording');
assert(html.includes('We address endogeneity under privacy constraints'), 'Missing collaborative privacy wording');
assert(/<h4>Reviewer<\/h4><p>ICLR \(2026, 2027\)<br\s*\/?\s*>NeurIPS \(2026\)<br\s*\/?\s*>IEEE Transactions on Information Theory<\/p>/.test(html), 'Reviewer service must have three requested lines');
assert(/<h4>Teaching Assistant<\/h4><p>EEC 266 Information Theory and Coding \(Fall 2025\)<br\s*\/?\s*>EEC 018 Digital System Design \(Spring 2025\)<br\s*\/?\s*>EEC 161 Applied Probability \(Spring 2024\)<\/p>/.test(html), 'Teaching Assistant must list the three requested courses in order');
assert(html.includes('2023–2028 (expected)'), 'Missing updated Ph.D. education dates');
assert(!html.includes('2023–present'), 'Remove the previous Ph.D. education date range');
assert(!html.includes('paper-description'), 'Publication descriptions must be removed');
assert(!html.includes('github.com/lanagarmire/ASGARD'), 'Publication Code link must be removed');
assert(!html.includes('<footer'), 'Bottom contact block must be removed');
assert.equal([...html.matchAll(/class="publication"/g)].length, 4, 'Preserve all four publications');
assert(html.includes('<title>Haodong Liang'), 'Missing page title');
assert(!html.includes('chatgpt.site'), 'Old hosting origin appears in exported HTML');
assert(!html.includes('localhost:'), 'Local preview origin appears in exported HTML');
for (const [url, name] of [
  ['https://faculty.engineering.ucdavis.edu/lai/', 'Lifeng Lai'],
  ['https://sites.google.com/view/kriznakumar/home', 'Krishnakumar Balasubramanian'],
]) {
  assert(html.includes(`href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`), `Missing verified advisor homepage link: ${name}`);
}
const iclDiagram = readFileSync(resolve(root, 'icl-concept-paper.svg'), 'utf8');
for (const label of ['Context', 'apple → fruit', 'bird → animal', 'carrot → ?', 'vegetable']) {
  assert(iclDiagram.includes(`>${label}</text>`), `Missing ICL diagram label: ${label}`);
}
assert(!iclDiagram.includes('Examples'), 'Replace Examples with Context in the ICL diagram');
assert(!iclDiagram.includes('>No parameter updates</text>'), 'Remove the parameter-update label inside the ICL diagram');
assert(!iclDiagram.includes('doubling task'), 'Remove the old numeric ICL example');
for (const subject of ['apple', 'bird', 'carrot']) {
  const illustration = `illustrations/icl-${subject}.png`;
  assert(html.includes(`src="/${illustration}" alt="" aria-hidden="true"`), `Missing decorative ICL illustration: ${subject}`);
  const png = readFileSync(resolve(root, illustration));
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `Invalid PNG illustration: ${subject}`);
}
assert(existsSync(resolve(root, 'illustrations/ATTRIBUTION.txt')), 'Preserve illustration attribution');
assert(existsSync(resolve(root, 'illustrations/LICENSE-GRAPHICS.txt')), 'Preserve illustration license');
const privacyDiagram = readFileSync(resolve(root, 'privacy-concept-paper.svg'), 'utf8');
for (const label of ['D', 'D′', 'a', 'b', 'M(D)', 'M(D′)', 'One record', 'changes']) {
  assert(privacyDiagram.includes(`>${label}</text>`), `Missing privacy diagram label: ${label}`);
}
assert.equal([...privacyDiagram.matchAll(/>M<\/text>/g)].length, 2, 'Show the same mechanism for both neighboring datasets');
assert(/id="distribution-d"[^>]*fill="none"/.test(privacyDiagram), 'Preserve the solid distribution outline');
assert(/id="distribution-d-prime"[^>]*stroke-dasharray="5 4"/.test(privacyDiagram), 'Preserve the dashed distribution outline');
assert(privacyDiagram.includes('not just their visual overlap'), 'Preserve the conceptual caveat in the privacy description');

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const urls = [...html.matchAll(/\b(?:src|href)="([^"]+)"/g)].map(match => match[1]);
let checked = 0;
for (const url of urls) {
  if (url.startsWith('#')) {
    assert(ids.has(url.slice(1)), `Missing anchor target: ${url}`);
    continue;
  }
  if (!url.startsWith('/') || url.startsWith('//')) continue;
  const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
  const target = resolve(root, '.' + pathname);
  assert(target.startsWith(root + sep) || target === root, `Path escapes static output: ${url}`);
  assert(existsSync(target), `Missing local asset: ${url}`);
  checked++;
}
for (const name of ['Haodong-Liang-CV.pdf', 'haodong-liang-portrait.png', 'favicon.svg', 'icl-concept-paper.svg', 'privacy-concept-paper.svg', '.nojekyll']) {
  assert(existsSync(resolve(root, name)), `Missing required file: ${name}`);
}
assert(!existsSync(resolve(root, '.openai')), 'Hosting configuration must not be published');
assert(!existsSync(resolve(root, 'photo.png')), 'Original untracked photo must not be published');
console.log(`Static homepage verified: ${checked} asset references, ${ids.size} anchors, approved content and required downloads.`);
