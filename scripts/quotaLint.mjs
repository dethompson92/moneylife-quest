import { countMatches, extractMatches, printLintResult, walkFiles } from "./lintShared.mjs";
import { readFileSync } from "node:fs";

const errors = [];
const scenarioFiles = walkFiles("src/data/scenarioPacks", [".ts"]);
const text = scenarioFiles.map((file) => readFileSync(file, "utf8")).join("\n");

const eventIds = new Set([
  ...extractMatches(text, /\bevent\(\s*["']([^"']+)["']/g),
  ...extractMatches(text, /\bscenario\(\s*["']([^"']+)["']/g),
  ...extractMatches(text, /^\s*"id":\s*"(ctx-[^"]+)"/gm)
]);

const quotas = [
  {
    name: "total scenarios",
    value: eventIds.size,
    minimum: 500,
    reason: "keeps MoneyLife deep enough before new feature work"
  },
  {
    name: "mixed tradeoff signals",
    value: countMatches(text, /\btradeoff(?:Note)?\b/gi),
    minimum: 75,
    reason: "keeps choices from becoming simple right/wrong quizzes"
  },
  {
    name: "locked-choice signals",
    value: countMatches(text, /\brequirements\b|\(Locked:/g),
    minimum: 50,
    reason: "keeps progression, prerequisites, and earned options meaningful"
  },
  {
    name: "randomized-outcome signals",
    value:
      countMatches(text, /\brandomChoice\(/g) +
      countMatches(text, /"randomized":\s*true/g) +
      countMatches(text, /probability["']?\s*:\s*0\./g),
    minimum: 50,
    reason: "keeps replayability and uncertainty in future outcomes"
  },
  {
    name: "future-flag effects",
    value: countMatches(text, /type["']?\s*:\s*["']flag["']/g),
    minimum: 50,
    reason: "keeps earlier choices affecting later opportunities"
  },
  {
    name: "support-circle signals",
    value: countMatches(text, /\b(relationshipId|support circle|mentor|friend|family|caregiver|pet)\b/gi),
    minimum: 30,
    reason: "keeps school-safe relationships connected to finance decisions"
  },
  {
    name: "math/vocabulary signals",
    value: countMatches(text, /\b(percent|percentage|unit price|unit-rate|decimal|ratio|tax|tip|interest|principal|multiply|divide|total|table|graph|Rule of 72|budget)\b/gi),
    minimum: 75,
    reason: "keeps the app connected to 7th-grade and early high-school math"
  },
  {
    name: "8th-10th/adult-outcome signals",
    value: countMatches(text, /\b(high-school|postsecondary|early-career|adult|10th|9th|apprenticeship|college|career|first apartment)\b/gi),
    minimum: 75,
    reason: "keeps the simulator focused on future pathways students can imagine"
  },
  {
    name: "asset/net-worth signals",
    value: countMatches(text, /\b(asset|net worth|deposit|car|phone|laptop|bike|inventory|investment|portfolio|ownership|renter|renters|fund)\b/gi),
    minimum: 75,
    reason: "keeps ownership, assets, and net-worth thinking visible"
  }
];

for (const quota of quotas) {
  if (quota.value < quota.minimum) {
    errors.push(`${quota.name} quota too low: ${quota.value}/${quota.minimum} (${quota.reason})`);
  }
}

printLintResult("quotaLint", {
  errors,
  summary: quotas.map((quota) => `${quota.name}: ${quota.value}/${quota.minimum}`)
});
