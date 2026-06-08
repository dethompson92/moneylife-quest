import { extractMatches, printLintResult, readText } from "./lintShared.mjs";

const errors = [];
const warnings = [];

const definitionsText = readText("src/features/goals/goalDefinitions.ts");
const gameTypesText = readText("src/types/game.ts");
const appText = readText("src/app/App.tsx");
const eventSelectionText = readText("src/features/events/eventSelection.ts");

const goalIds = extractMatches(definitionsText, /^    id:\s*"([^"]+)"/gm);
const defined = new Set();

for (const id of goalIds) {
  if (defined.has(id)) errors.push(`duplicate goal id: ${id}`);
  defined.add(id);
}

const openEndedCount = (definitionsText.match(/openEnded:\s*true/g) ?? []).length;
const conflictIds = new Set([
  ...extractMatches(definitionsText, /a:\s*"([^"]+)"/g),
  ...extractMatches(definitionsText, /b:\s*"([^"]+)"/g)
]);

for (const id of conflictIds) {
  if (!defined.has(id)) errors.push(`goal conflict references unknown goal id: ${id}`);
}

if (goalIds.length < 20) errors.push(`goal catalog too small for transcript plan: ${goalIds.length}/20`);
if (openEndedCount < 1) errors.push("goal catalog needs at least one open-ended sandbox goal");
if (!definitionsText.includes("MAX_MINI_GOALS")) errors.push("MAX_MINI_GOALS guard is missing");
if (!definitionsText.includes("normalizeGoalStack")) errors.push("normalizeGoalStack migration helper is missing");
if (!definitionsText.includes("getGoalConflictWarnings")) errors.push("goal conflict warning helper is missing");
if (!gameTypesText.includes("activeGoalIds")) errors.push("GameState does not store the active goal stack");
if (!appText.includes("selectedMiniGoals")) errors.push("setup UI does not expose mini-goal selection");
if (!eventSelectionText.includes("getGoalTopicMatchWeight")) errors.push("event selection is not goal-stack aware");

const unsafeGoalLanguage = /\b(rich|poor|failure|loser|bad with money|only path|best life)\b/i;
for (const line of definitionsText.split("\n")) {
  if (unsafeGoalLanguage.test(line)) errors.push(`goal wording may be shaming, wealth-only, or too deterministic: ${line.trim()}`);
}

if (conflictIds.size === 0) warnings.push("no goal conflict pairs were found; tradeoff guidance may be thin");

printLintResult("goalLint", {
  errors,
  warnings,
  summary: [
    `goals: ${goalIds.length}`,
    `open-ended goals: ${openEndedCount}`,
    `conflict-linked goals: ${conflictIds.size}`
  ]
});
