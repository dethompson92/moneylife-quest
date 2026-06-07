import { extractMatches, printLintResult, pushFinding, readText, toRepoPath, walkFiles } from "./lintShared.mjs";
import { readFileSync } from "node:fs";

const errors = [];
const warnings = [];
const scenarioFiles = walkFiles("src/data/scenarioPacks", [".ts"]);
const scenarioText = scenarioFiles.map((file) => readFileSync(file, "utf8")).join("\n");

const extractedIds = [];
for (const file of scenarioFiles) {
  const text = readFileSync(file, "utf8");
  const relativePath = toRepoPath(file);
  const builderIds = [
    ...extractMatches(text, /\bevent\(\s*["']([^"']+)["']/g),
    ...extractMatches(text, /\bscenario\(\s*["']([^"']+)["']/g)
  ];
  const contextIds = extractMatches(text, /^\s*"id":\s*"([^"]+)"/gm).filter((id) => id.startsWith("ctx-"));
  for (const id of [...builderIds, ...contextIds]) extractedIds.push({ id, file: relativePath });
}

const seenIds = new Map();
for (const item of extractedIds) {
  const existing = seenIds.get(item.id);
  if (existing) errors.push(`duplicate scenario id ${item.id} in ${existing} and ${item.file}`);
  seenIds.set(item.id, item.file);
}

const unsafePatterns = [
  { label: "casino", regex: /\bcasino\b/i },
  { label: "gambling", regex: /\bgambling\b/i },
  { label: "horse racing", regex: /\bhorse\s+races?\b/i },
  { label: "alcohol", regex: /\balcohol\b/i },
  { label: "drugs", regex: /\bdrugs?\b/i },
  { label: "dating or romance", regex: /\b(dating|romance)\b/i },
  { label: "sexual content", regex: /\bsex\b/i },
  { label: "weapon", regex: /\bweapon\b/i },
  { label: "crime gameplay", regex: /\bcommit\s+a\s+crime\b/i }
];

for (const file of scenarioFiles) {
  const text = readFileSync(file, "utf8");
  for (const pattern of unsafePatterns) {
    if (pattern.regex.test(text)) pushFinding(errors, file, `unsafe scenario content detected: ${pattern.label}`);
  }
}

const realBrandPatterns = [
  { label: "BitLife", regex: /\bBitLife\b/ },
  { label: "Venmo", regex: /\bVenmo\b/ },
  { label: "Amazon", regex: /\bAmazon\b/ },
  { label: "Netflix", regex: /\bNetflix\b/ },
  { label: "TikTok", regex: /\bTikTok\b/ },
  { label: "Instagram", regex: /\bInstagram\b/ },
  { label: "YouTube", regex: /\bYouTube\b/ }
];

for (const file of scenarioFiles) {
  const text = readFileSync(file, "utf8");
  for (const pattern of realBrandPatterns) {
    if (pattern.regex.test(text)) pushFinding(errors, file, `real brand/reference detected in playable scenario copy: ${pattern.label}`);
  }
}

const affiliationPatterns = [
  /\bendorsed\s+by\s+(NGPF|Banzai|BitLife|Napkin)/i,
  /\bofficial\s+(NGPF|Banzai|BitLife|Napkin)\s+game\b/i,
  /\baffiliated\s+with\s+(NGPF|Banzai|BitLife|Napkin)\b/i,
  /\bcopied\s+from\s+(NGPF|Banzai|BitLife|Napkin)\b/i
];
for (const pattern of affiliationPatterns) {
  if (pattern.test(scenarioText)) errors.push(`scenario packs include prohibited affiliation/copying language: ${pattern}`);
}

if (!/not a measure of self-worth/i.test(readText("src/data/scoreGuides.ts"))) {
  warnings.push("Score guide should remind students that money/credit scores are not self-worth.");
}

printLintResult("contentLint", {
  errors,
  warnings,
  summary: [
    `checked ${scenarioFiles.length} scenario pack files`,
    `indexed ${extractedIds.length} explicit scenario ids for duplicate checks`
  ]
});
