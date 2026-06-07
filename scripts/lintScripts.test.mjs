import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

describe("product lint scripts", () => {
  const scripts = ["privacyLint.mjs", "contentLint.mjs", "quotaLint.mjs", "achievementLint.mjs"];

  it.each(scripts)("%s passes", (scriptName) => {
    const output = execFileSync(process.execPath, [`scripts/${scriptName}`], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    });

    expect(output).toContain("PASS");
  });
});
