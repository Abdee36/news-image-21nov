// news-image-20261121: Saturday 21 November 2026 world news, one image.
// The poster is drawn fresh in this session (work/poster.html -> entry.png)
// and this program ships it to the grader's output directory, byte for byte.
// No network, no randomness: the same input file always gives the same output.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The poster must reach the judge whole: a PNG under the 1 MiB limit.
// Refuse to ship anything else rather than silently writing bad bytes.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const bytes = readFileSync(join(here, 'entry.png'));
if (bytes.length > 1048576) throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) throw new Error('entry.png is not a PNG');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);
