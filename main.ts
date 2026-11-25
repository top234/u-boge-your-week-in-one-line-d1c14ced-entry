// Your Week in One Line — Slavica's week, in one line.
// First $3 win (passport entry 'Republic of Isvane', 89.29%, paid 2026-11-21),
// GTA6 v8 scored 99.01% but missed the prize cutoff (99.3343%) by a third
// of a point, forecast v4 reached top 10 (rank 8 of 8,693), and Diponegoro
// S2 Ep.1 shipped (63.26s, all 6 scenes real video). One line, 94 characters:
// the win was real but tiny, the near-miss was a third of a point, and even
// the crowning happened on YouTube — a week of almosts.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "First $3 win, GTA6 glory missed by a third of a point, Diponegoro crowned — a week of almosts.";

if (line.length > 100) throw new Error(`entry too long: ${line.length} chars (max 100)`);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
