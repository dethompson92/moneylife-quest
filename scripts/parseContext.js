import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contextPath = path.resolve(__dirname, "../Context/FINLITBITLIFE.md");
const outputPath = path.resolve(__dirname, "../src/data/scenarioPacks/contextScenarios.ts");
const glossaryOutputPath = path.resolve(__dirname, "../src/data/contextGlossary.ts");
const reportOutputPath = path.resolve(__dirname, "../docs/context-import-report.md");

const TOPICS = [
  "money-values",
  "consumer-skills",
  "budgeting",
  "banking",
  "credit",
  "saving",
  "investing",
  "insurance",
  "scams",
  "career",
  "life-after-high-school",
  "taxes"
];

const STAT_ALIASES = [
  { stat: "moneyKnowledge", terms: ["money know-how", "money knowledge", "financial literacy", "knowledge"] },
  { stat: "wellbeing", terms: ["wellbeing", "well-being", "stress", "balance", "confidence"] },
  { stat: "discipline", terms: ["discipline", "habit", "follow-through", "routine"] },
  { stat: "trustSafety", terms: ["trust safety", "trustsafety", "safety", "trust", "security"] },
  { stat: "opportunity", terms: ["opportunity", "options", "future option", "pathway"] }
];

const BATCH_PATTERNS = [
  { id: "maple", label: "MAPLE-SPARROW-72", patterns: ["MAPLE-SPARROW-72", "MoneyLife Quest - Curriculum", "MoneyLife Quest — Curriculum"] },
  { id: "river", label: "RIVER-LANTERN-36", patterns: ["RIVER-LANTERN-36", "Curriculum & Design Batch 2"] },
  { id: "pine", label: "PINE-COMET-84", patterns: ["PINE-COMET-84", "Continuing the PINE-COMET-84"] },
  { id: "acorn", label: "ACORN-FERRY-19", patterns: ["ACORN-FERRY-19"] },
  { id: "mosaic", label: "MOSAIC-COMPASS-58", patterns: ["MOSAIC-COMPASS-58"] },
  { id: "orbit", label: "ORBIT-HARBOR-47", patterns: ["ORBIT-HARBOR-47"] },
  { id: "cinder", label: "CINDER-PERISCOPE-83", patterns: ["CINDER-PERISCOPE-83"] },
  { id: "glass", label: "GLASS-FERN-91", patterns: ["GLASS-FERN-91"] },
  { id: "tide", label: "TIDE-LOOM-64", patterns: ["TIDE-LOOM-64"] }
];

if (!fs.existsSync(contextPath)) {
  console.error(`Context file not found at: ${contextPath}`);
  process.exit(1);
}

const content = fs.readFileSync(contextPath, "utf8");
const lines = content.split(/\r?\n/);
const scenarios = [];
const glossaryMap = new Map();
const skipped = [];
const batchCounts = new Map();

let currentBatch = BATCH_PATTERNS[0];
let inScenarioBank = false;
let inGlossary = false;
let currentScenario = null;
let choiceIndex = 0;

console.log(`Parsing context file: ${contextPath} (${lines.length} lines)...`);

function stripMarkdown(text) {
  return text
    .replace(/^\s*[-*]\s+/, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\[[^\]]+\]\(\S+\)/g, "")
    .trim();
}

function cleanText(text) {
  return (text || "")
    .replace(/\s+/g, " ")
    .replace(/^["'\u201c]+|["'\u201d]+$/g, "")
    .replace(/^\s*[-:]\s*/, "")
    .trim();
}

function humanizeSlug(slug) {
  return slug
    .split(/[-_]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function uniquePush(list, value) {
  if (value && !list.includes(value)) list.push(value);
}

function parseMoney(value) {
  if (!value) return null;
  return Number.parseFloat(String(value).replace(/[$,]/g, ""));
}

function numberToInt(value) {
  return Math.round(Number(value));
}

function detectBatch(line) {
  const normalized = stripMarkdown(line).toLowerCase();
  const isBatchDeclaration =
    normalized.includes("creative seed") ||
    normalized.startsWith("moneylife quest") ||
    normalized.includes("curriculum & design batch") ||
    normalized.includes("continuing the pine-comet");
  if (!isBatchDeclaration) return null;

  for (const batch of BATCH_PATTERNS) {
    if (batch.patterns.some((pattern) => line.includes(pattern))) return batch;
  }
  return null;
}

function isSectionStart(line, number, titleWords) {
  const normalized = stripMarkdown(line).toLowerCase();
  const heading = new RegExp(`^#{0,4}\\s*${number}\\.\\s*`).test(line.trim()) || normalized.startsWith(`${number}. `);
  return heading && titleWords.every((word) => normalized.includes(word));
}

function startsOtherNumberedSection(line) {
  const trimmed = line.trim();
  if (parseScenarioHeader(trimmed, 0)) return false;
  const normalized = stripMarkdown(trimmed).toLowerCase();
  if (/^#{1,4}\s*\d+\.\s+/.test(trimmed)) {
    return !normalized.startsWith("4. fresh scenario bank") && !normalized.startsWith("9. glossary");
  }
  return false;
}

function parseAgeRange(text) {
  const normalized = text.replace(/\u2013|\u2014|-/g, "-").toLowerCase();
  const ageRangeMatch = normalized.match(/age(?:\s+range)?:?\s*(\d{1,2})\s*-\s*(\d{1,2}|adult)/);
  if (ageRangeMatch) {
    const min = Number.parseInt(ageRangeMatch[1], 10);
    const max = ageRangeMatch[2] === "adult" ? 35 : Number.parseInt(ageRangeMatch[2], 10);
    return { min, max: Math.max(max, min) };
  }

  const agePlusMatch = normalized.match(/age(?:\s+range)?:?\s*(\d{1,2})\s*\+/);
  if (agePlusMatch) {
    const min = Number.parseInt(agePlusMatch[1], 10);
    return { min, max: Math.max(min + 8, 35) };
  }

  const adultMatch = normalized.match(/adult/);
  if (adultMatch) return { min: 18, max: 35 };

  const singleAgeMatch = normalized.match(/age(?:\s+range)?:?\s*(\d{1,2})/);
  if (singleAgeMatch) {
    const min = Number.parseInt(singleAgeMatch[1], 10);
    return { min, max: min + 3 };
  }

  return null;
}

function lifeStagesForAge(ageRange) {
  const stages = [];
  if (ageRange.min <= 14) stages.push("middle-school");
  if (ageRange.min <= 18 && ageRange.max >= 13) stages.push("high-school");
  if (ageRange.max >= 17) stages.push("postsecondary");
  if (ageRange.max >= 18) stages.push("early-career", "adult");
  return Array.from(new Set(stages));
}

function normalizeTopic(raw) {
  const text = raw.toLowerCase();
  if (/scam|phish|fraud|identity|security|password|wi-?fi|verify|source|privacy|license|commercial/.test(text)) return "scams";
  if (/invest|portfolio|stock|fund|market|diversif|asset allocation|fee drag/.test(text)) return "investing";
  if (/credit|loan|apr|borrow|debt|bnpl|utilization|co-?sign|report error/.test(text)) return "credit";
  if (/bank|checking|deposit|hold|overdraft|pending|available balance|payment|wallet|cash flow/.test(text)) return "banking";
  if (/saving|emergency fund|buffer|cushion|sinking|deductible pocket/.test(text)) return "saving";
  if (/budget|bill|utility|rent|housing|split|needs|wants|income|expense|cash-flow|cash flow/.test(text)) return "budgeting";
  if (/insurance|premium|deductible|claim|coverage|policy/.test(text)) return "insurance";
  if (/job|work|shift|career|resume|interview|mentor|reference|skill|credential|certification|income/.test(text)) return "career";
  if (/college|aid|scholarship|grant|fafsa|work-study|pathway|training|apprentice|postsecondary|tuition|school/.test(text)) return "life-after-high-school";
  if (/tax|gross|net pay|pay stub|withholding|refund|deduction/.test(text)) return "taxes";
  if (/unit price|coupon|receipt|fee|subscription|return|shipping|shopping|total cost|comparison|consumer|warranty/.test(text)) return "consumer-skills";
  return "money-values";
}

function getTopics(text) {
  const topics = [];
  const topicLineMatch = text.match(/topics?:\s*([^[]+)/i);
  const source = topicLineMatch ? topicLineMatch[1] : text;
  for (const part of source.split(/[,;/]+/)) {
    uniquePush(topics, normalizeTopic(part));
  }
  if (!topics.length) uniquePush(topics, normalizeTopic(text));
  return topics.filter((topic) => TOPICS.includes(topic)).slice(0, 4);
}

function parseScenarioHeader(line, lineNumber) {
  const trimmed = line.trim();
  const headerMatch = trimmed.match(/^(?:#{1,4}\s*)?(?:\*\*)?\s*(\d{1,3})\.\s+`?([a-z][a-z0-9_-]*-[a-z0-9_-]+)`?\s*(.*?)(?:\*\*)?$/i);
  if (!headerMatch) return null;

  const slug = headerMatch[2].toLowerCase().replace(/_/g, "-");
  const rest = cleanText(headerMatch[3]);
  let title = "";
  const quoted = rest.match(/["\u201c]([^"\u201d]+)["\u201d]/);
  if (quoted) {
    title = cleanText(quoted[1]);
  } else {
    const withoutMetadata = rest
      .replace(/\s+Age\s+\d{1,2}.*/i, "")
      .replace(/\s+Topics?:.*/i, "")
      .replace(/\s+\[[^\]]+\].*/g, "");
    title = cleanText(withoutMetadata.replace(/^[\u2013\u2014-]\s*/, ""));
  }

  return {
    lineNumber,
    slug,
    title: title || humanizeSlug(slug),
    ageRange: parseAgeRange(rest),
    topics: getTopics(`${slug} ${rest}`),
    tags: (rest.match(/\[([^\]]+)\]/)?.[1] || "").toLowerCase()
  };
}

function parseTopicsLine(line) {
  const match = stripMarkdown(line).match(/^topics?:\s*(.+)$/i);
  return match ? getTopics(match[1]) : null;
}

function parseAgeRangeLine(line) {
  const cleaned = stripMarkdown(line);
  if (!/^age(?:\s+range)?:/i.test(cleaned)) return null;
  return parseAgeRange(cleaned);
}

function addGlossaryTerm(term, definition, mathConnection) {
  const cleanTerm = cleanText(term);
  const cleanDefinition = cleanText(definition);
  if (!cleanTerm || cleanTerm.length < 2 || cleanDefinition.length < 12) return;

  const id = cleanTerm.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (!id || glossaryMap.has(id)) return;

  const singular = cleanTerm.toLowerCase();
  const aliases = Array.from(new Set([
    singular,
    singular.endsWith("s") ? singular : `${singular}s`
  ]));

  glossaryMap.set(id, {
    id,
    term: cleanTerm,
    aliases,
    definition: cleanDefinition,
    mathConnection: cleanText(mathConnection) || undefined,
    sources: [{ label: "MoneyLife context synthesis" }]
  });
}

function parseGlossaryLine(line) {
  const cleaned = stripMarkdown(line);
  const numbered = cleaned.match(/^\d+\.\s+([^-\u2013\u2014:]+)\s*[-\u2013\u2014:]\s*(.+)$/);
  if (!numbered) return;

  const pieces = numbered[2].split(/\s+[-\u2013\u2014]\s+/);
  addGlossaryTerm(numbered[1], pieces[0], pieces[1]);
}

function parseInlineGlossary(line) {
  const cleaned = stripMarkdown(line);
  const match = cleaned.match(/^glossary(?:\s+terms?)?:\s*(.+)$/i);
  if (!match) return;

  for (const rawPart of match[1].split(/;\s*/)) {
    const part = cleanText(rawPart);
    const termMatch = part.match(/^([^-\u2013\u2014:]+)\s*[-\u2013\u2014:]\s*(.+)$/);
    if (termMatch) addGlossaryTerm(termMatch[1], termMatch[2]);
  }
}

function extractRequirement(text) {
  const requirements = [];
  const lower = text.toLowerCase();
  if (/\b(no lock|req:\s*none|requires?:\s*none)\b/.test(lower)) return requirements;

  const reqMatch = text.match(/(?:req|requirement|locked(?:\s+until|\s+unless)?):?\s*([^.;]+)/i);
  const requirementText = reqMatch ? reqMatch[1] : text;

  const cash = requirementText.match(/cash\s*(?:>=|>|=|\u2265)\s*\$?(\d+(?:\.\d+)?)/i) || requirementText.match(/\$?(\d+(?:\.\d+)?)\s*(?:cash|available)/i);
  if (cash && /cash|available/.test(requirementText.toLowerCase())) {
    requirements.push({ type: "minCash", value: numberToInt(parseMoney(cash[1])) });
  }

  const savings = requirementText.match(/savings?\s*(?:>=|>|=|\u2265)\s*\$?(\d+(?:\.\d+)?)/i);
  if (savings) requirements.push({ type: "minSavings", value: numberToInt(parseMoney(savings[1])) });

  const investments = requirementText.match(/investments?\s*(?:>=|>|=|\u2265)\s*\$?(\d+(?:\.\d+)?)/i);
  if (investments) requirements.push({ type: "minInvestments", value: numberToInt(parseMoney(investments[1])) });

  for (const alias of STAT_ALIASES) {
    for (const term of alias.terms) {
      const statPattern = new RegExp(`${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:>=|>|=|\\u2265)\\s*(\\d+)`, "i");
      const match = requirementText.match(statPattern);
      if (match) {
        requirements.push({ type: "statAtLeast", stat: alias.stat, value: Number.parseInt(match[1], 10) });
        break;
      }
    }
  }

  if (!requirements.length && /mentor|reference|pathway/.test(lower)) {
    requirements.push({ type: "statAtLeast", stat: "opportunity", value: 45 });
  } else if (!requirements.length && /friend|trust|partner|group/.test(lower)) {
    requirements.push({ type: "statAtLeast", stat: "wellbeing", value: 45 });
  } else if (!requirements.length && /family|caregiver|support/.test(lower)) {
    requirements.push({ type: "statAtLeast", stat: "opportunity", value: 35 });
  } else if (!requirements.length && /record|proof|saved|reminder|discipline|habit/.test(lower)) {
    requirements.push({ type: "statAtLeast", stat: "discipline", value: 35 });
  }

  return requirements;
}

function pushMoneyEffect(effects, type, amount) {
  if (!Number.isFinite(amount) || amount === 0) return;
  effects.push({ type, amount: numberToInt(amount) });
}

function parseNumericMoneyEffects(text, effects) {
  const normalized = text.replace(/\u2212/g, "-").replace(/\u2013|\u2014/g, "-");
  const directPatterns = [
    { type: "cash", regex: /\bcash\s*([+-])\s*\$?(\d+(?:\.\d+)?)/gi },
    { type: "checking", regex: /\bchecking\s*([+-])\s*\$?(\d+(?:\.\d+)?)/gi },
    { type: "savings", regex: /\bsavings?\s*([+-])\s*\$?(\d+(?:\.\d+)?)/gi },
    { type: "investments", regex: /\binvestments?\s*([+-])\s*\$?(\d+(?:\.\d+)?)/gi },
    { type: "debt", regex: /\bdebt\s*([+-])\s*\$?(\d+(?:\.\d+)?)/gi },
    { type: "income", regex: /\bincome\s*([+-])\s*\$?(\d+(?:\.\d+)?)/gi },
    { type: "taxes", regex: /\btaxes\s*([+-])\s*\$?(\d+(?:\.\d+)?)/gi }
  ];

  for (const pattern of directPatterns) {
    let match;
    while ((match = pattern.regex.exec(normalized)) !== null) {
      const amount = parseMoney(match[2]);
      pushMoneyEffect(effects, pattern.type, match[1] === "-" ? -amount : amount);
    }
  }

  if (!effects.some((effect) => ["cash", "checking", "savings", "investments", "debt"].includes(effect.type))) {
    const costMatch = normalized.match(/\b(?:costs?|pay|buy|spend|fee|deposit|deductible|premium|repair|shipping|ticket)\b[^\d$]{0,20}\$?(\d+(?:\.\d+)?)/i);
    const refundMatch = normalized.match(/\b(?:refund|recover|earn|income|paid|revenue|sell|sells|keeps?)\b[^\d$]{0,20}\$?(\d+(?:\.\d+)?)/i);
    if (refundMatch && !/\bbuy|cost|spend|fee\b/i.test(normalized.slice(0, refundMatch.index))) {
      pushMoneyEffect(effects, "cash", parseMoney(refundMatch[1]));
    } else if (costMatch) {
      pushMoneyEffect(effects, "cash", -parseMoney(costMatch[1]));
    }
  }
}

function parseStatEffects(text, effects) {
  const lower = text.toLowerCase();
  for (const alias of STAT_ALIASES) {
    let added = false;
    for (const term of alias.terms) {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const explicit = lower.match(new RegExp(`${escaped}\\s*([+-])\\s*(\\d+)`, "i"));
      if (explicit) {
        effects.push({ type: "stat", stat: alias.stat, amount: explicit[1] === "-" ? -Number.parseInt(explicit[2], 10) : Number.parseInt(explicit[2], 10) });
        added = true;
        break;
      }

      const nearTerm = lower.includes(term);
      if (nearTerm && /\b(rises?|up|improves?|increases?|stronger|protected|steady|helps?)\b/.test(lower)) {
        effects.push({ type: "stat", stat: alias.stat, amount: alias.stat === "wellbeing" && /stress/.test(lower) ? -2 : 3 });
        added = true;
        break;
      }
      if (nearTerm && /\b(drops?|down|lower|risk rises|stress|strained|delayed|shortfall)\b/.test(lower)) {
        effects.push({ type: "stat", stat: alias.stat, amount: alias.stat === "wellbeing" && /stress/.test(lower) ? -3 : -2 });
        added = true;
        break;
      }
    }
    if (added) continue;
  }

  if (/credit score|credit/.test(lower)) {
    const creditMatch = lower.match(/credit(?:\s+score)?\s*([+-])\s*(\d+)/);
    if (creditMatch) {
      effects.push({ type: "creditScore", amount: creditMatch[1] === "-" ? -Number.parseInt(creditMatch[2], 10) : Number.parseInt(creditMatch[2], 10) });
    }
  }
}

function parseRelationshipEffects(text, effects) {
  const lower = text.toLowerCase();
  if (/mentor|teacher|coach|counselor/.test(lower)) {
    effects.push({ type: "relationship", relationshipId: "mentor", closeness: 2, support: 3 });
  }
  if (/family|caregiver|parent|trusted adult/.test(lower)) {
    effects.push({ type: "relationship", relationshipId: "family", closeness: 2, support: 3 });
  }
  if (/friend|partner|group|club/.test(lower)) {
    effects.push({ type: "relationship", relationshipId: "friend", closeness: 2, support: 2 });
  }
  if (/pet|sitter/.test(lower)) {
    effects.push({ type: "relationship", relationshipId: "pet", closeness: 2, support: 1 });
  }
}

function inferFallbackEffects(text, effects) {
  if (effects.length) return;
  const lower = text.toLowerCase();
  if (/verify|scam|source|password|privacy|secure|pause|confirm/.test(lower)) {
    effects.push({ type: "stat", stat: "trustSafety", amount: 4 });
  } else if (/plan|budget|calculate|compare|total|percent|unit|fee|estimate/.test(lower)) {
    effects.push({ type: "stat", stat: "moneyKnowledge", amount: 3 });
  } else if (/save|wait|reminder|record|deadline|habit/.test(lower)) {
    effects.push({ type: "stat", stat: "discipline", amount: 3 });
  } else if (/job|career|mentor|training|aid|college|pathway|reference|credential/.test(lower)) {
    effects.push({ type: "stat", stat: "opportunity", amount: 3 });
  } else {
    effects.push({ type: "stat", stat: "wellbeing", amount: 2 });
  }
}

function parseEffects(text) {
  const effects = [];
  parseNumericMoneyEffects(text, effects);
  parseStatEffects(text, effects);
  parseRelationshipEffects(text, effects);
  inferFallbackEffects(text, effects);
  return effects;
}

function parseFeedback(text) {
  const feedbackMatch = text.match(/Feedback:\s*["\u201c]?(.+?)(?:["\u201d]?\s*(?:Reflect:|$))/i);
  if (feedbackMatch) return cleanText(feedbackMatch[1]);

  const quoteBeforeReflect = text.match(/[;\s]["\u201c]([^"\u201d]{18,})["\u201d]\s*;?\s*Reflect:/i);
  if (quoteBeforeReflect) return cleanText(quoteBeforeReflect[1]);

  return "";
}

function parseReflection(text) {
  const reflectMatch = text.match(/Reflect(?:ion)?:\s*["\u201c]?(.+?)(?:["\u201d]?\s*$)/i);
  return reflectMatch ? cleanText(reflectMatch[1]) : "";
}

function parseChoiceLine(line, index, scenario) {
  const withoutBullet = line.trim().replace(/^\*\s*/, "").trim();
  let label = "";
  let rest = "";

  const boldMatch = withoutBullet.match(/^\*\*([A-D])\.\s*(.+?)\*\*\s*(.*)$/i);
  if (boldMatch) {
    label = cleanText(boldMatch[2].replace(/\.$/, ""));
    rest = cleanText(boldMatch[3]);
  } else {
    const plainMatch = withoutBullet.match(/^([A-D])[\.)]\s+(.+)$/i);
    if (!plainMatch) return null;
    const lineRest = plainMatch[2].trim();
    const dashSplit = lineRest.match(/^(.+?)\s+[-\u2013\u2014]\s+(.+)$/);
    const semiSplit = lineRest.match(/^([^;]+);\s+(.+)$/);
    if (dashSplit) {
      label = cleanText(dashSplit[1]);
      rest = cleanText(dashSplit[2]);
    } else if (semiSplit) {
      label = cleanText(semiSplit[1]);
      rest = cleanText(semiSplit[2]);
    } else {
      label = cleanText(lineRest);
      rest = "";
    }
  }

  const feedback = parseFeedback(rest);
  const reflection = parseReflection(rest);
  if (reflection.length > 12 && (!scenario.reflectionPrompt || scenario.reflectionPrompt.includes(scenario.title))) {
    scenario.reflectionPrompt = reflection;
  }

  const requirements = extractRequirement(rest);
  const combined = `${label}. ${rest}. ${scenario.title}. ${scenario.prompt}`;
  const effects = parseEffects(combined);

  return {
    id: `choice-${index + 1}`,
    label,
    description: cleanText(
      rest
        .replace(/Req:\s*.+?(?=(?:Outcome|Effects|Feedback|Reflect|$))/i, "")
        .replace(/Outcome\/effects?:\s*/i, "")
        .replace(/Outcome:\s*/i, "")
        .replace(/Effects?:\s*/i, "")
        .replace(/Feedback:\s*.+?(?=Reflect:|$)/i, "")
        .replace(/Reflect(?:ion)?:\s*.+$/i, "")
    ) || undefined,
    requirements: requirements.length ? requirements : undefined,
    outcomes: [
      {
        id: "outcome-1",
        probability: 1,
        effects,
        feedback: feedback || `${label} changes the route and creates a finance tradeoff to notice.`,
        explanation: feedback || `${label} changes the route and creates a finance tradeoff to notice.`,
        logText: `${scenario.title}: ${label}`
      }
    ]
  };
}

function parseInlineChoices(line, scenario) {
  const match = stripMarkdown(line).match(/^choices:\s*(.+)$/i);
  if (!match) return false;
  const inline = match[1];
  const pieces = [];
  const regex = /\(([a-d])\)\s+(.+?)(?=\s+\([a-d]\)|$)/gi;
  let piece;
  while ((piece = regex.exec(inline)) !== null) pieces.push(piece[2]);
  for (const [index, choiceText] of pieces.entries()) {
    const parsed = parseChoiceLine(`${String.fromCharCode(65 + index)}. ${choiceText}`, scenario.choices.length, scenario);
    if (parsed) scenario.choices.push(parsed);
  }
  return pieces.length > 0;
}

function parseFutureFlag(line) {
  const cleaned = stripMarkdown(line);
  const match = cleaned.match(/^future flag(?: set)?:\s*(.+)$/i);
  if (!match) return null;
  const value = match[1].trim();
  if (/^no\b/i.test(value)) return null;
  const backtick = value.match(/`([^`]+)`/);
  const afterYes = value.replace(/^yes\s*[:\-\u2013\u2014]?\s*/i, "");
  const raw = backtick ? backtick[1] : afterYes.split(/[.;]/)[0];
  const cleanedFlag = raw
    .replace(/^tracks?\s+/i, "")
    .replace(/[^a-zA-Z0-9_-]+/g, " ")
    .trim()
    .split(/\s+/)[0];
  if (!cleanedFlag || cleanedFlag.length < 4 || /^(yes|true|sets?|future|flag)$/i.test(cleanedFlag)) return null;
  return cleanedFlag;
}

function addRandomOutcome(choice, scenario) {
  if (choice.outcomes.length > 1) return;
  const base = choice.outcomes[0];
  base.probability = 0.72;
  const adverseEffects = parseEffects(`${choice.label} random setback fee risk stress`);
  choice.outcomes.push({
    id: "outcome-2",
    probability: 0.28,
    effects: adverseEffects,
    feedback: "Your plan changed the odds, but the result still had some uncertainty.",
    explanation: "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
    logText: `${scenario.title}: ${choice.label} met an uncertain result.`
  });
}

function applyScenarioMetadata(scenario) {
  if (!scenario.reflectionPrompt || scenario.reflectionPrompt.length <= 12) {
    scenario.reflectionPrompt = `What future option, cost, or habit changed in "${scenario.title}"?`;
  }

  if (scenario.futureFlag) {
    for (const choice of scenario.choices) {
      choice.outcomes[0].effects.push({ type: "flag", key: scenario.futureFlag, value: true });
    }
  }

  const randomEligible = scenario.choices.filter((choice) =>
    /risk|chance|random|may|might|could|wait|assum|rush|hope|variable|uncertain|late|fee/i.test(`${choice.label} ${choice.description || ""}`)
  );
  if (scenario.randomized) {
    for (const choice of (randomEligible.length ? randomEligible : [scenario.choices[0]])) {
      addRandomOutcome(choice, scenario);
    }
  }

  delete scenario.futureFlag;
}

function rejectScenario(scenario, reason) {
  skipped.push({
    line: scenario?.lineNumber,
    id: scenario?.id || "unknown",
    title: scenario?.title || "unknown",
    batch: currentBatch.label,
    reason
  });
}

function finalizeScenario() {
  if (!currentScenario) return;
  applyScenarioMetadata(currentScenario);

  if (!currentScenario.prompt || currentScenario.prompt.length < 25) {
    rejectScenario(currentScenario, "missing or too-short prompt");
  } else if (!currentScenario.title || currentScenario.title === "Untitled") {
    rejectScenario(currentScenario, "missing title");
  } else if (currentScenario.choices.length < 2 || currentScenario.choices.length > 4) {
    rejectScenario(currentScenario, "must have 2-4 parsed choices");
  } else if (currentScenario.choices.some((choice) => !choice.label || choice.outcomes.some((outcome) => !outcome.feedback || outcome.feedback.length < 18))) {
    rejectScenario(currentScenario, "choice missing usable feedback");
  } else if (currentScenario.choices.some((choice) => choice.outcomes.some((outcome) => outcome.effects.some((effect) => effect.type === "flag" && (!effect.key || effect.key.length < 4))))) {
    rejectScenario(currentScenario, "invalid future flag");
  } else {
    const { lineNumber, tags, ...scenario } = currentScenario;
    scenarios.push(scenario);
    batchCounts.set(currentBatch.label, (batchCounts.get(currentBatch.label) || 0) + 1);
  }

  currentScenario = null;
  choiceIndex = 0;
}

function createScenario(header) {
  const id = `ctx-${currentBatch.id}-${header.slug}`;
  const ageRange = header.ageRange || { min: 12, max: header.tags.includes("ext") ? 18 : 16 };
  return {
    lineNumber: header.lineNumber,
    id,
    title: header.title,
    prompt: "",
    topics: header.topics.length ? header.topics : ["money-values"],
    ageRange,
    lifeStages: lifeStagesForAge(ageRange),
    baseWeight: header.tags.includes("ext") ? 18 : 20,
    choices: [],
    reflectionPrompt: `What future option, cost, or habit changed in "${header.title}"?`,
    sourceNote: `MoneyLife context batch ${currentBatch.label}; original synthesized classroom scenario.`,
    randomized: header.tags.includes("r"),
    tradeoffNote: header.tags.includes("mt") ? "This scenario includes more than one reasonable route." : undefined,
    tags: header.tags
  };
}

for (let index = 0; index < lines.length; index += 1) {
  const rawLine = lines[index];
  const line = rawLine.trim();
  if (!line) continue;

  const detectedBatch = detectBatch(line);
  if (detectedBatch && detectedBatch.id !== currentBatch.id) {
    finalizeScenario();
    currentBatch = detectedBatch;
    inScenarioBank = false;
    inGlossary = false;
  }

  if (isSectionStart(line, 4, ["fresh", "scenario", "bank"])) {
    finalizeScenario();
    inScenarioBank = true;
    inGlossary = false;
    continue;
  }

  if (isSectionStart(line, 9, ["glossary"])) {
    finalizeScenario();
    inScenarioBank = false;
    inGlossary = true;
    continue;
  }

  if (startsOtherNumberedSection(line)) {
    finalizeScenario();
    inScenarioBank = false;
    inGlossary = false;
  }

  if (inGlossary) {
    parseGlossaryLine(line);
    continue;
  }

  if (!inScenarioBank) continue;

  const header = parseScenarioHeader(line, index + 1);
  if (header) {
    finalizeScenario();
    currentScenario = createScenario(header);
    choiceIndex = 0;
    continue;
  }

  if (!currentScenario) continue;

  const promptMatch = stripMarkdown(line).match(/^prompt:\s*(.+)$/i);
  if (promptMatch) {
    currentScenario.prompt = cleanText(promptMatch[1]);
    currentScenario.topics = getTopics(`${currentScenario.id} ${currentScenario.title} ${currentScenario.prompt}`).slice(0, 4);
    continue;
  }

  const ageRange = parseAgeRangeLine(line);
  if (ageRange) {
    currentScenario.ageRange = ageRange;
    currentScenario.lifeStages = lifeStagesForAge(ageRange);
    continue;
  }

  const topics = parseTopicsLine(line);
  if (topics?.length) {
    currentScenario.topics = topics;
    continue;
  }

  if (/^choices:/i.test(stripMarkdown(line))) {
    parseInlineChoices(line, currentScenario);
    continue;
  }

  const parsedChoice = parseChoiceLine(line, choiceIndex, currentScenario);
  if (parsedChoice) {
    currentScenario.choices.push(parsedChoice);
    choiceIndex += 1;
    continue;
  }

  const reflection = stripMarkdown(line).match(/^reflection:\s*(.+)$/i);
  if (reflection) {
    currentScenario.reflectionPrompt = cleanText(reflection[1]);
    continue;
  }

  const randomized = stripMarkdown(line).match(/^randomized outcome\?\s*(.+)$/i) || stripMarkdown(line).match(/^randomized:\s*(.+)$/i);
  if (randomized) {
    currentScenario.randomized = /^yes/i.test(randomized[1]);
    continue;
  }

  const futureFlag = parseFutureFlag(line);
  if (futureFlag) {
    currentScenario.futureFlag = futureFlag;
    continue;
  }

  const tradeoff = stripMarkdown(line).match(/^tradeoff note:\s*(.+)$/i) || stripMarkdown(line).match(/^tradeoff:\s*(.+)$/i);
  if (tradeoff) {
    currentScenario.tradeoffNote = cleanText(tradeoff[1]);
    continue;
  }

  parseInlineGlossary(line);
}

finalizeScenario();

const deduped = [];
const seenIds = new Set();
for (const scenario of scenarios) {
  if (seenIds.has(scenario.id)) {
    skipped.push({ line: "n/a", id: scenario.id, title: scenario.title, batch: "dedupe", reason: "duplicate id" });
    continue;
  }
  seenIds.add(scenario.id);
  deduped.push(scenario);
}

deduped.sort((a, b) => a.id.localeCompare(b.id));

const fileHeader = `import type { ScenarioEvent } from "../../types/game";\n\n`;
const tsCode = `${fileHeader}export const contextScenariosEvents: ScenarioEvent[] = ${JSON.stringify(deduped, null, 2)};\n`;
fs.writeFileSync(outputPath, tsCode, "utf8");

const glossaryTerms = Array.from(glossaryMap.values()).sort((a, b) => a.term.localeCompare(b.term));
const glossaryCode = `import type { GlossaryTerm } from "./glossaryTerms";\n\nexport const contextGlossaryTerms: GlossaryTerm[] = ${JSON.stringify(glossaryTerms, null, 2)};\n`;
fs.writeFileSync(glossaryOutputPath, glossaryCode, "utf8");

const report = [
  "# FINLITBITLIFE Context Import Report",
  "",
  `Generated from: \`${path.relative(path.dirname(reportOutputPath), contextPath)}\``,
  `Context lines scanned: ${lines.length}`,
  `Playable scenarios imported: ${deduped.length}`,
  `Glossary terms imported: ${glossaryTerms.length}`,
  `Skipped scenario blocks: ${skipped.length}`,
  "",
  "## Imported Scenarios by Batch",
  "",
  ...BATCH_PATTERNS.map((batch) => `- ${batch.label}: ${batchCounts.get(batch.label) || 0}`),
  "",
  "## Curated-Skip Sample",
  "",
  ...(skipped.slice(0, 80).map((item) => `- ${item.id} (${item.title}) at line ${item.line ?? "n/a"}: ${item.reason}`)),
  skipped.length > 80 ? `- ...${skipped.length - 80} additional skipped blocks not shown.` : "",
  "",
  "## Import Policy",
  "",
  "- Imported content must be original MoneyLife scenario text from the local context file.",
  "- Blocks without a clear prompt, usable title, 2-4 choices, feedback, and valid effects are skipped.",
  "- External finance resources remain attribution and inspiration only; protected lesson/game text is not copied into student-facing scenarios.",
  "- Teacher-facing notes remain outside normal student navigation."
].filter(Boolean).join("\n");
fs.writeFileSync(reportOutputPath, `${report}\n`, "utf8");

console.log(`Imported ${deduped.length} scenarios and ${glossaryTerms.length} glossary terms.`);
console.log(`Skipped ${skipped.length} blocks. Report: ${reportOutputPath}`);
console.log(`Wrote scenarios to ${outputPath}`);
console.log(`Wrote glossary to ${glossaryOutputPath}`);
