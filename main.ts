import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// thinking_revised: hello, the revised thinking drops the batch of orders and its
// extra slot, keeping just one tidy line so the laugh lands in a single beat.
const joke = "I have a plan for every problem and no plan for the plan.";

const scriptDir = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
const payload = Buffer.from(joke, "utf8");
writeFileSync(target, payload);
console.log(`${payload.length} bytes written to ${target} (script dir: ${scriptDir})`);
