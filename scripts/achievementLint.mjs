import { extractMatches, printLintResult, readText, walkFiles } from "./lintShared.mjs";
import { readFileSync } from "node:fs";

const errors = [];
const warnings = [];

const definitionsText = readText("src/features/achievements/achievementDefinitions.ts");
const definitionIds = extractMatches(definitionsText, /id:\s*"([^"]+)"/g);
const definitionTitles = extractMatches(definitionsText, /title:\s*"([^"]+)"/g);
const defined = new Set();

for (const id of definitionIds) {
  if (defined.has(id)) errors.push(`duplicate achievement definition id: ${id}`);
  defined.add(id);
}

const seenTitles = new Map();
for (let index = 0; index < definitionTitles.length; index += 1) {
  const title = definitionTitles[index];
  const id = definitionIds[index] ?? "(unknown id)";
  const previous = seenTitles.get(title);
  if (previous) warnings.push(`duplicate achievement title "${title}" used by ${previous} and ${id}`);
  seenTitles.set(title, id);
}

const sourceFiles = walkFiles("src", [".ts", ".tsx"]).filter((file) => !file.endsWith("achievementDefinitions.ts"));
const referenced = new Set();
for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  for (const id of extractMatches(text, /achievementId["']?\s*:\s*["']([^"']+)["']/g)) referenced.add(id);
  for (const id of extractMatches(text, /\badd\(\s*["']([^"']+)["']\s*\)/g)) referenced.add(id);
  for (const idsBlock of extractMatches(text, /achievementIds\s*:\s*\[([^\]]+)\]/g)) {
    for (const id of extractMatches(idsBlock, /["']([^"']+)["']/g)) referenced.add(id);
  }
  for (const callBlock of [
    ...extractMatches(text, /\bhasAny\(([^)]*)\)/g),
    ...extractMatches(text, /\bhasAchievement\(([^)]*)\)/g)
  ]) {
    for (const id of extractMatches(callBlock, /["']([a-z0-9-]+)["']/g)) referenced.add(id);
  }
}

for (const id of referenced) {
  if (!defined.has(id)) errors.push(`achievement reference is missing a definition: ${id}`);
}

const unused = [...defined].filter((id) => !referenced.has(id));
if (unused.length > 0) warnings.push(`${unused.length} achievements are defined but not currently referenced: ${unused.slice(0, 12).join(", ")}${unused.length > 12 ? "..." : ""}`);

const unsafeRewardLanguage = /\b(rich|millionaire|poor|broke|failure|loser|bad with money)\b/i;
for (const line of definitionsText.split("\n")) {
  if (unsafeRewardLanguage.test(line)) errors.push(`achievement wording may be shaming or wealth-only: ${line.trim()}`);
}

if (definitionIds.length < 25) errors.push(`achievement catalog too small: ${definitionIds.length}/25`);

printLintResult("achievementLint", {
  errors,
  warnings,
  summary: [
    `definitions: ${definitionIds.length}`,
    `referenced badge ids: ${referenced.size}`,
    `unused definitions: ${unused.length}`
  ]
});
