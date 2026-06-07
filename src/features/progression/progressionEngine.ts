import { calculateNetWorth } from "../finance/financeEngine";
import { getAchievement } from "../achievements/achievementDefinitions";
import { getGoal } from "../goals/goalDefinitions";
import type { GameState } from "../../types/game";
import type {
  IdentityArchetype,
  IdentityDimension,
  IdentityScore,
  MasteryMapDefinition,
  MasteryMapProgress,
  MuseumRunCard,
  ProgressionRibbon,
  ProgressionSummary,
  ValueScore,
  ValueTag
} from "./progressionTypes";

const identityLabels: Record<IdentityDimension, string> = {
  planner: "Planner",
  explorer: "Explorer",
  helper: "Helper",
  investigator: "Investigator",
  builder: "Builder",
  balancer: "Balancer",
  protector: "Protector",
  reflector: "Reflector"
};

const valueLabels: Record<ValueTag, string> = {
  security: "Security",
  growth: "Growth",
  freedom: "Freedom",
  community: "Community",
  learning: "Learning",
  balance: "Balance",
  creativity: "Creativity",
  service: "Service"
};

export const identityArchetypes: IdentityArchetype[] = [
  {
    id: "steady-anchor",
    title: "The Steady Anchor",
    primaryDimension: "planner",
    secondaryDimension: "protector",
    description: "You built stability by planning ahead and protecting future options.",
    strengths: ["saving", "cushions", "careful decisions"],
    growthEdge: "A future run could practice taking a useful, well-planned risk.",
    reflectionPrompt: "When did planning ahead give you more freedom later?"
  },
  {
    id: "opportunity-explorer",
    title: "The Opportunity Explorer",
    primaryDimension: "explorer",
    secondaryDimension: "builder",
    description: "You looked for pathways, skills, and chances to grow.",
    strengths: ["career exploration", "skill-building", "adaptability"],
    growthEdge: "A future run could add routines that turn exciting options into steady progress.",
    reflectionPrompt: "Which opportunity seemed most worth the time or money?"
  },
  {
    id: "community-builder",
    title: "The Community Builder",
    primaryDimension: "helper",
    secondaryDimension: "balancer",
    description: "You used support, helped others, and treated relationships as part of financial life.",
    strengths: ["trust", "communication", "shared planning"],
    growthEdge: "A future run could practice boundaries so helping others does not erase your own goals.",
    reflectionPrompt: "How did support change your choices?"
  },
  {
    id: "careful-investigator",
    title: "The Careful Investigator",
    primaryDimension: "investigator",
    secondaryDimension: "protector",
    description: "You checked details, compared options, and slowed down before risky choices.",
    strengths: ["verification", "fee-checking", "consumer defense"],
    growthEdge: "A future run could practice deciding after enough evidence instead of waiting forever.",
    reflectionPrompt: "What detail changed your mind?"
  },
  {
    id: "future-builder",
    title: "The Future Builder",
    primaryDimension: "builder",
    secondaryDimension: "planner",
    description: "You grew assets, skills, or long-term options while keeping the math visible.",
    strengths: ["asset growth", "investing", "long-term thinking"],
    growthEdge: "A future run could protect wellbeing and liquidity while building.",
    reflectionPrompt: "What did you build that could help later?"
  },
  {
    id: "balanced-navigator",
    title: "The Balanced Navigator",
    primaryDimension: "balancer",
    description: "You balanced money, wellbeing, relationships, safety, and opportunity.",
    strengths: ["wellbeing", "tradeoff thinking", "sustainable choices"],
    growthEdge: "A future run could specialize in one area to see what changes.",
    reflectionPrompt: "Which tradeoff helped you stay balanced?"
  },
  {
    id: "digital-shield",
    title: "The Digital Shield",
    primaryDimension: "protector",
    secondaryDimension: "investigator",
    description: "You slowed down, verified, and protected accounts and information.",
    strengths: ["scam defense", "source checking", "safety habits"],
    growthEdge: "A future run could pair protection with more opportunity-building.",
    reflectionPrompt: "What pressure signal helped you slow down?"
  },
  {
    id: "comeback-champion",
    title: "The Comeback Champion",
    primaryDimension: "reflector",
    secondaryDimension: "planner",
    description: "You turned setbacks into lessons and built a better plan afterward.",
    strengths: ["recovery", "reflection", "prevention"],
    growthEdge: "A future run could focus on prevention before a problem happens.",
    reflectionPrompt: "What turned a mistake into a lesson?"
  }
];

export const masteryMaps: MasteryMapDefinition[] = [
  {
    id: "consumer-skills",
    title: "Consumer Skills Map",
    description: "Find real prices, avoid pressure, and make thoughtful purchases.",
    ribbonTitle: "Consumer Detective Ribbon",
    nodes: [
      { id: "unit-price", title: "Compared Unit Prices", description: "Used unit-rate thinking.", achievementIds: ["per-unit-thinker"] },
      { id: "fee-check", title: "Found Hidden Fees", description: "Checked the full total after charges.", achievementIds: ["read-the-total", "total-cost-thinker"] },
      { id: "receipt-check", title: "Checked a Receipt", description: "Caught or investigated a record detail.", achievementIds: ["receipt-detective", "report-detective"] },
      { id: "pressure-pause", title: "Walked Away From Pressure", description: "Paused before an urgency-based buy.", achievementIds: ["walked-away"] }
    ]
  },
  {
    id: "banking-saving",
    title: "Banking and Saving Map",
    description: "Build useful account habits and small cushions.",
    ribbonTitle: "Banking Navigator Ribbon",
    nodes: [
      { id: "first-cushion", title: "Started a Cushion", description: "Saved a first emergency buffer.", achievementIds: ["first-cushion", "saved-100"] },
      { id: "alerts", title: "Used Alerts or Automation", description: "Used a reminder, alert, or automatic saving habit.", achievementIds: ["alert-setter", "auto-pilot-saver"], flags: ["bankAlerts", "autoSaveOn"] },
      { id: "rebuild", title: "Rebuilt After Use", description: "Refilled savings after a surprise.", achievementIds: ["rebuilt-stronger", "emergency-500"], flags: ["rebuildsFund"] },
      { id: "positive-cash", title: "Kept Debt Manageable", description: "Protected the plan from runaway debt.", moneyAtLeast: { savings: 100 } }
    ]
  },
  {
    id: "credit-debt",
    title: "Credit and Debt Map",
    description: "Practice low balances, on-time habits, and total-cost thinking.",
    ribbonTitle: "Credit Pathfinder Ribbon",
    nodes: [
      { id: "credit-climb", title: "Built Credit Carefully", description: "Reached a healthier simplified credit band.", achievementIds: ["credit-climber", "under-thirty"] },
      { id: "report-detail", title: "Checked a Report", description: "Investigated a report or record detail.", achievementIds: ["report-detective"] },
      { id: "total-loan-cost", title: "Compared Total Cost", description: "Looked past the monthly payment.", achievementIds: ["total-cost-thinker"], flags: ["comparedLoan"] },
      { id: "debt-control", title: "Kept Debt Under Control", description: "Avoided unnecessary high-interest debt.", achievementIds: ["debt-dodger", "smaller-and-smarter"] }
    ]
  },
  {
    id: "investing",
    title: "Investing Map",
    description: "Use patience, diversification, fees, and risk reflection.",
    ribbonTitle: "Future Builder Ribbon",
    nodes: [
      { id: "diversified", title: "Diversified", description: "Used more than one kind of investment.", achievementIds: ["diversified"] },
      { id: "fee-aware", title: "Compared Fees", description: "Noticed how fees can affect growth.", achievementIds: ["fee-aware"] },
      { id: "growth-math", title: "Used Growth Math", description: "Used compounding or doubling intuition.", achievementIds: ["compound-growth", "doubling-estimator"] },
      { id: "steady-hand", title: "Stayed Patient", description: "Handled bumpy outcomes with process thinking.", achievementIds: ["steady-hand", "long-game-investor"] }
    ]
  },
  {
    id: "digital-safety",
    title: "Digital Safety Map",
    description: "Build habits that protect money and information.",
    ribbonTitle: "Digital Shield Ribbon",
    nodes: [
      { id: "verified", title: "Verified a Source", description: "Checked a sender or source before acting.", achievementIds: ["verified-first", "scam-spotted"], flags: ["verifiesSources"] },
      { id: "two-step", title: "Used Extra Protection", description: "Protected an account with an extra safety step.", achievementIds: ["two-step-guardian", "security-shield"] },
      { id: "asked-help", title: "Asked Before Acting", description: "Used trusted support before a risky move.", achievementIds: ["asked-for-help"], flags: ["asksProgramSupport"] },
      { id: "lure-refused", title: "Refused a Lure", description: "Walked away from a too-good-to-be-true ask.", achievementIds: ["hung-up-the-lure"] }
    ]
  },
  {
    id: "career-pathway",
    title: "Career and Pathway Map",
    description: "Compare pathways, practice opportunities, and plan with net pay.",
    ribbonTitle: "Career Navigator Ribbon",
    nodes: [
      { id: "career-explore", title: "Explored a Path", description: "Built career or pathway options.", achievementIds: ["career-explorer", "future-planner"], statsAtLeast: { opportunity: 70 } },
      { id: "interview", title: "Practiced and Prepared", description: "Prepared for an opportunity.", achievementIds: ["interview-ready", "practiced-and-ready"] },
      { id: "aid", title: "Decoded Aid or Support", description: "Separated free, earned, and borrowed help.", achievementIds: ["aid-decoder", "scholarship-seeker"] },
      { id: "net-pay", title: "Used Net Pay", description: "Planned with take-home pay.", achievementIds: ["net-pay-realist", "tax-translator"] }
    ]
  },
  {
    id: "resilience",
    title: "Resilience Map",
    description: "Recover, rebuild, and separate mistakes from identity.",
    ribbonTitle: "Resilient Planner Ribbon",
    nodes: [
      { id: "repair-step", title: "Took a Repair Step", description: "Responded to a setback with action.", achievementIds: ["first-repair-step"] },
      { id: "no-repeat", title: "Prevented a Repeat", description: "Used a prevention habit after a mistake.", achievementIds: ["no-repeat"] },
      { id: "worth", title: "Separated Worth From Money", description: "Reflected on what net worth misses.", achievementIds: ["worth-not-self-worth"] },
      { id: "balanced", title: "Protected Balance", description: "Kept money habits connected to wellbeing.", achievementIds: ["balanced-planner"] }
    ]
  }
];

export function buildProgressionSummary(state: GameState): ProgressionSummary {
  const identityScores = deriveIdentityScores(state);
  const archetype = resolveArchetype(identityScores);
  const topValues = deriveValueScores(state).slice(0, 3);
  const ribbons = resolveProgressionRibbons(state, archetype);
  const mastery = evaluateMasteryMaps(state);
  const nextRunSuggestion = suggestNextRun(archetype, state);
  const museumCard = createMuseumRunCard(state, archetype, ribbons, topValues, nextRunSuggestion);

  return {
    identityScores,
    archetype,
    topValues,
    ribbons,
    masteryMaps: mastery,
    museumCard,
    nextRunSuggestion
  };
}

export function deriveIdentityScores(state: GameState): IdentityScore[] {
  const relationshipSupport = state.relationships.reduce((sum, relationship) => sum + relationship.support, 0) / Math.max(1, state.relationships.length);
  const netWorth = calculateNetWorth(state.finances);
  const achievementCount = state.achievements.length;
  const has = (...ids: string[]) => ids.some((id) => state.achievements.includes(id));
  const flag = (...keys: string[]) => keys.some((key) => state.flags[key] === true);

  const raw: Record<IdentityDimension, number> = {
    planner: state.stats.discipline + state.finances.savings / 18 + (flag("autoSaveOn", "bankAlerts") ? 10 : 0),
    explorer: state.stats.opportunity + (flag("careerResearchPlan", "aidPlan", "decodesAidOffer") ? 12 : 0),
    helper: relationshipSupport + (has("asked-for-help", "two-way-support", "generous-within-plan") ? 14 : 0),
    investigator: state.stats.moneyKnowledge + (has("verified-first", "read-the-total", "report-detective", "receipt-detective") ? 14 : 0),
    builder: Math.min(100, Math.max(0, netWorth / 80)) + state.finances.investments / 15 + (has("knows-the-profit", "long-game-investor") ? 12 : 0),
    balancer: state.stats.wellbeing + (has("balanced-planner", "kind-boundary") ? 12 : 0),
    protector: state.stats.trustSafety + (has("security-shield", "two-step-guardian", "scam-spotted") ? 14 : 0),
    reflector: achievementCount * 2 + (has("first-repair-step", "rebuilt-stronger", "worth-not-self-worth", "reflection-ready") ? 25 : 0)
  };

  return (Object.entries(raw) as [IdentityDimension, number][])
    .map(([dimension, score]) => ({ dimension, label: identityLabels[dimension], score: clamp(Math.round(score), 0, 100) }))
    .sort((a, b) => b.score - a.score);
}

export function deriveValueScores(state: GameState): ValueScore[] {
  const netWorth = calculateNetWorth(state.finances);
  const has = (...ids: string[]) => ids.some((id) => state.achievements.includes(id));
  const flag = (...keys: string[]) => keys.some((key) => state.flags[key] === true);
  const raw: Record<ValueTag, number> = {
    security: state.finances.savings / 12 + state.stats.trustSafety + (has("first-cushion", "security-shield") ? 12 : 0),
    growth: state.finances.investments / 12 + state.stats.opportunity + (has("career-explorer", "long-game-investor") ? 10 : 0),
    freedom: Math.max(0, netWorth / 100) + (state.finances.debtTotal < 300 ? 20 : 0),
    community: state.relationships.length * 10 + (has("asked-for-help", "two-way-support", "generous-within-plan") ? 18 : 0),
    learning: state.stats.moneyKnowledge + (has("did-the-math", "five-correct", "tax-and-tip-pro") ? 12 : 0),
    balance: state.stats.wellbeing + (has("balanced-planner", "kind-boundary") ? 14 : 0),
    creativity: (flag("businessBudget", "usesInvoices", "pricesPetCareWork") ? 55 : 0) + (has("young-entrepreneur", "knows-the-profit") ? 20 : 0),
    service: state.finances.budget.givingPercent * 8 + (has("generous-within-plan", "two-way-support") ? 18 : 0)
  };

  return (Object.entries(raw) as [ValueTag, number][])
    .map(([tag, score]) => ({ tag, label: valueLabels[tag], score: clamp(Math.round(score), 0, 100) }))
    .sort((a, b) => b.score - a.score);
}

export function resolveArchetype(identityScores: IdentityScore[]): IdentityArchetype {
  const [top, second] = identityScores;
  return (
    identityArchetypes.find((archetype) => archetype.primaryDimension === top?.dimension && archetype.secondaryDimension === second?.dimension) ??
    identityArchetypes.find((archetype) => archetype.primaryDimension === top?.dimension) ??
    identityArchetypes[0]
  );
}

export function resolveProgressionRibbons(state: GameState, archetype: IdentityArchetype): ProgressionRibbon[] {
  const ribbons: ProgressionRibbon[] = [];
  const add = (ribbon: ProgressionRibbon) => {
    if (!ribbons.some((item) => item.id === ribbon.id)) ribbons.push(ribbon);
  };
  const has = (...ids: string[]) => ids.some((id) => state.achievements.includes(id));

  if (state.finances.savings >= 300 || has("first-cushion", "shock-absorber")) {
    add({ id: "steady-anchor", title: "The Steady Anchor", description: "You protected future options with a cushion." });
  }
  if (has("read-the-total", "per-unit-thinker", "receipt-detective")) {
    add({ id: "consumer-detective", title: "The Consumer Detective", description: "You looked past sticker prices and checked the real total." });
  }
  if (has("verified-first", "two-step-guardian", "security-shield", "scam-spotted")) {
    add({ id: "digital-shield", title: "The Digital Shield", description: "You slowed down, verified, and protected information." });
  }
  if (has("long-game-investor", "diversified", "compound-growth", "fee-aware")) {
    add({ id: "future-builder", title: "The Future Builder", description: "You made patient choices for long-term growth." });
  }
  if (has("career-explorer", "practiced-and-ready", "aid-decoder", "net-pay-realist")) {
    add({ id: "career-navigator", title: "The Career Navigator", description: "You connected future pathways to realistic money choices." });
  }
  if (has("first-repair-step", "rebuilt-stronger", "no-repeat")) {
    add({ id: "resilient-planner", title: "The Resilient Planner", description: "You recovered from setbacks with a plan." });
  }
  if (has("worth-not-self-worth") || state.stats.wellbeing >= 72) {
    add({ id: "worth-beyond-net-worth", title: "Worth Beyond Net Worth", description: "You treated money numbers as tools, not a measure of a person." });
  }
  if (!ribbons.length) {
    add({ id: archetype.id, title: archetype.title, description: archetype.description });
  }

  return ribbons.slice(0, 3);
}

export function evaluateMasteryMaps(state: GameState): MasteryMapProgress[] {
  return masteryMaps.map((map) => {
    const nodes = map.nodes.map((node) => ({ ...node, complete: masteryNodeComplete(state, node) }));
    const completedCount = nodes.filter((node) => node.complete).length;
    return {
      id: map.id,
      title: map.title,
      description: map.description,
      ribbonTitle: map.ribbonTitle,
      nodes,
      completedCount,
      totalCount: nodes.length,
      complete: completedCount === nodes.length
    };
  });
}

export function createMuseumRunCard(
  state: GameState,
  archetype: IdentityArchetype,
  ribbons: ProgressionRibbon[],
  topValues: ValueScore[],
  nextRunSuggestion: string
): MuseumRunCard {
  const goal = getGoal(state.activeGoalId);
  const strongestStats = Object.entries({
    "Money Know-How": state.stats.moneyKnowledge,
    Wellbeing: state.stats.wellbeing,
    Safety: state.stats.trustSafety,
    Discipline: state.stats.discipline,
    Opportunity: state.stats.opportunity
  })
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([label]) => label);

  return {
    id: state.id,
    completedAt: state.updatedAt,
    runNumber: 0,
    primaryGoalTitle: goal.title,
    archetypeTitle: archetype.title,
    ribbonTitles: ribbons.map((ribbon) => ribbon.title),
    topValues: topValues.map((value) => value.tag),
    strongestStats,
    keyAchievements: state.achievements.slice(-6).map((id) => getAchievement(id)?.title ?? id),
    biggestLesson: inferBiggestLesson(state),
    nextRunSuggestion
  };
}

function masteryNodeComplete(state: GameState, node: MasteryMapDefinition["nodes"][number]): boolean {
  if (node.achievementIds?.some((id) => state.achievements.includes(id))) return true;
  if (node.flags?.some((key) => state.flags[key] === true)) return true;
  if (
    node.statsAtLeast &&
    Object.entries(node.statsAtLeast).every(([stat, value]) => {
      const current = state.stats[stat as keyof GameState["stats"]];
      return current !== null && current >= Number(value);
    })
  ) return true;
  if (node.moneyAtLeast && Object.entries(node.moneyAtLeast).every(([field, value]) => Number(state.finances[field as keyof GameState["finances"]]) >= Number(value))) return true;
  return false;
}

function inferBiggestLesson(state: GameState): string {
  if (state.achievements.includes("verified-first") || state.achievements.includes("security-shield")) {
    return "Slowing down before acting can protect money and information.";
  }
  if (state.achievements.includes("rebuilt-stronger")) {
    return "Using a cushion is not failure; rebuilding it is part of the plan.";
  }
  if (state.achievements.includes("read-the-total") || state.achievements.includes("per-unit-thinker")) {
    return "The real price is the full total, not just the sticker price.";
  }
  if (state.achievements.includes("worth-not-self-worth")) {
    return "Net worth is a useful number, but it is not a person's worth.";
  }
  return "Thoughtful choices build options over time.";
}

function suggestNextRun(archetype: IdentityArchetype, state: GameState): string {
  if (archetype.primaryDimension === "planner") return "Try an Explorer, Career, or Side-Hustle goal next.";
  if (archetype.primaryDimension === "explorer") return "Try an Anchor Fund or Safety goal next.";
  if (archetype.primaryDimension === "helper") return "Try a Boundaries, Balanced Life, or Net Worth goal next.";
  if (archetype.primaryDimension === "investigator") return "Try an Entrepreneur or Pathway goal next.";
  if (archetype.primaryDimension === "builder" && state.stats.wellbeing < 65) return "Try Balanced Life next and compare how wellbeing changes.";
  if (archetype.primaryDimension === "protector") return "Try a Growth or Career goal next while keeping your safety habits.";
  return "Replay with a goal that challenges a different money skill.";
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
