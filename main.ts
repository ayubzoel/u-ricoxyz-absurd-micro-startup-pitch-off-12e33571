// Absurd Micro-Startup Pitch-Off entry: one absurdly specific pitch sentence.
// The program writes exactly one line of text to entry.txt and nothing else.
// Deterministic: no clock, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "NightNanny is a $7-a-month babysitter for your coding agent: at 3am it kills its 47th refactor of the same file and ships the version that already worked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry is ${codePoints} code points, gate allows 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
