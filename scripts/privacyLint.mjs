import { existingFiles, printLintResult, pushFinding, readJson, toRepoPath, walkFiles } from "./lintShared.mjs";
import { readFileSync } from "node:fs";

const errors = [];
const warnings = [];

const productionFiles = [
  ...walkFiles("src", [".ts", ".tsx"]).filter((file) => !toRepoPath(file).startsWith("src/tests/")),
  ...walkFiles("scripts", [".js", ".mjs"]),
  ...existingFiles(["index.html", "package.json", "vite.config.ts", ".github/workflows/deploy.yml", "README.md"])
].filter((file) => {
  const relativePath = toRepoPath(file);
  return !relativePath.startsWith("scripts/") || (!relativePath.endsWith("Lint.mjs") && relativePath !== "scripts/lintShared.mjs");
});

const piiAllowlist = new Set([
  "src/features/reporting/IssueReporter.tsx",
  "src/features/reporting/reportingUtils.ts",
  "src/types/reporting.ts"
]);

const networkAllowlist = new Set(["src/features/reporting/reportingUtils.ts"]);

const sensitiveFieldPatterns = [
  { label: "student name field", regex: /\bstudentName\b/ },
  { label: "real name field", regex: /\b(realName|fullName|legalName)\b\s*[?:=]/ },
  { label: "student identifier field", regex: /\b(studentId|schoolId|rosterId)\b\s*[?:=]/ },
  { label: "email field", regex: /\b(email|emailAddress)\b\s*[?:=]/ },
  { label: "phone field", regex: /\b(phone|phoneNumber)\b\s*[?:=]/ },
  { label: "address field", regex: /\b(address|streetAddress|zipCode|postalCode)\b\s*[?:=]/ },
  { label: "sensitive demographic field", regex: /\b(race|ethnicity|gender|sex|religion|disability|immigrationStatus|familyIncome|exactLocation)\b\s*[?:=]/ }
];

const analyticsPatterns = [
  { label: "Google Analytics/dataLayer", regex: /\b(gtag\s*\(|dataLayer)\b/ },
  { label: "Mixpanel", regex: /\bmixpanel\b/i },
  { label: "PostHog", regex: /\bposthog\b/i },
  { label: "Amplitude", regex: /\bamplitude\b/i },
  { label: "analytics track call", regex: /\banalytics\.track\s*\(/i },
  { label: "beacon tracking", regex: /\bnavigator\.sendBeacon\s*\(/i }
];

for (const file of productionFiles) {
  const relativePath = toRepoPath(file);
  const text = readFileSync(file, "utf8");

  if (!piiAllowlist.has(relativePath)) {
    for (const pattern of sensitiveFieldPatterns) {
      if (pattern.regex.test(text)) {
        pushFinding(errors, file, `possible ${pattern.label}; use fictional context variables instead of student PII`);
      }
    }
  }

  for (const pattern of analyticsPatterns) {
    if (pattern.regex.test(text)) {
      pushFinding(errors, file, `analytics/tracking code detected: ${pattern.label}`);
    }
  }

  if (!networkAllowlist.has(relativePath)) {
    if (/\bfetch\s*\(/.test(text) || /\bXMLHttpRequest\b/.test(text) || /\bnew\s+WebSocket\s*\(/.test(text)) {
      pushFinding(errors, file, "network call detected outside the approved teacher debug inbox sender");
    }
  }

  if (relativePath === "index.html" && /<script[^>]+src=["']https?:\/\//i.test(text)) {
    pushFinding(errors, file, "external script tag detected");
  }
}

const packageJson = readJson("package.json");
const allPackages = {
  ...(packageJson.dependencies ?? {}),
  ...(packageJson.devDependencies ?? {})
};
const bannedPackages = ["@segment/analytics-next", "mixpanel-browser", "posthog-js", "@amplitude/analytics-browser", "react-ga4"];
for (const dependency of bannedPackages) {
  if (dependency in allPackages) errors.push(`package.json - analytics dependency is not allowed: ${dependency}`);
}

if (piiAllowlist.has("src/features/reporting/IssueReporter.tsx")) {
  warnings.push("Issue reporter may collect optional contact text only inside the approved reporting files; keep that field optional and privacy-labeled.");
}

printLintResult("privacyLint", {
  errors,
  warnings,
  summary: [`checked ${productionFiles.length} production files for PII fields, secrets, analytics, and unapproved network calls`]
});
