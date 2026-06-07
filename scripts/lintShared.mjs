import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(scriptDir, "..");

const skippedDirs = new Set([
  ".git",
  "dist",
  "node_modules",
  "coverage",
  "playwright-report",
  "test-results"
]);

export function readText(relativePath) {
  return readFileSync(path.join(repoRoot, relativePath), "utf8");
}

export function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

export function toRepoPath(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join("/");
}

export function walkFiles(relativeDir, extensions = [".ts", ".tsx", ".js", ".mjs"]) {
  const start = path.join(repoRoot, relativeDir);
  if (!existsSync(start)) return [];
  const files = [];

  function walk(current) {
    for (const entry of readdirSync(current)) {
      if (skippedDirs.has(entry)) continue;
      const fullPath = path.join(current, entry);
      const stats = statSync(fullPath);
      if (stats.isDirectory()) {
        walk(fullPath);
      } else if (extensions.includes(path.extname(entry))) {
        files.push(fullPath);
      }
    }
  }

  walk(start);
  return files.sort();
}

export function existingFiles(paths) {
  return paths.map((file) => path.join(repoRoot, file)).filter((file) => existsSync(file));
}

export function countMatches(text, regex) {
  const safeRegex = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : `${regex.flags}g`);
  return [...text.matchAll(safeRegex)].length;
}

export function extractMatches(text, regex, groupIndex = 1) {
  const safeRegex = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : `${regex.flags}g`);
  return [...text.matchAll(safeRegex)].map((match) => match[groupIndex]).filter(Boolean);
}

export function pushFinding(findings, filePath, message) {
  findings.push(`${toRepoPath(filePath)} - ${message}`);
}

export function printLintResult(name, { errors, warnings = [], summary = [] }) {
  console.log(`\n${name}`);
  for (const item of summary) console.log(`  ${item}`);
  for (const warning of warnings) console.warn(`  warning: ${warning}`);
  if (errors.length === 0) {
    console.log("  PASS");
    return;
  }
  for (const error of errors) console.error(`  error: ${error}`);
  process.exitCode = 1;
}
