// Slavica's week, summed up in a single line.
// The ledger: a first payday on make.fun — three dollars for a passport
// poem at 89.29%; a GTA6 entry at 99.01% that fell a third of a point
// short of the prize line; a forecast that cracked the top ten; and a
// Javanese prince crowned on YouTube in Diponegoro S2 Ep.1.
// Three almosts and one small real win — the week, in 98 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Banked my first $3, missed GTA6 glory by a third of a point, crowned a prince — a week of almosts.";

if ([...line].length > 100) throw new Error("entry over 100 chars");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
