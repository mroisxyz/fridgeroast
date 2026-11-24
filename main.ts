import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised: hello — a plain greeting opens the set, then the turn lands.
// batch: a single batch is enough; no second pass is needed.
// orders: the words arrive in a fixed order.
// slot: the last slot belongs to the second sentence.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = resolve(ownDir, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const joke = "The scariest words in any codebase are 'it worked yesterday.' The second scariest are 'I didn't change anything.'";

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'entry.txt'), joke, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(joke, 'utf8')} bytes`);
