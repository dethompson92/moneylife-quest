import type { GoalDefinition } from "../../types/game";

export const goals: GoalDefinition[] = [
  {
    id: "open-life",
    title: "Open Life",
    description: "No preset goal. Make choices toward your own custom future and watch the outcomes unfold.",
    relatedTopics: [
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
    ],
    objectives: [],
    completionMessage: "You played an open-ended money life and built your own definition of success.",
    openEnded: true
  },
  {
    id: "emergency-fund-hero",
    title: "Emergency Fund Hero",
    description: "Build a cushion for surprise costs without letting debt take over.",
    relatedTopics: ["saving", "budgeting", "banking"],
    objectives: [
      { id: "save-500", label: "Save at least $500" },
      { id: "low-debt", label: "Keep debt under $300" },
      { id: "discipline-65", label: "Reach 65 Discipline" }
    ],
    completionMessage: "You built a real safety cushion and made future surprises less scary."
  },
  {
    id: "smart-shopper",
    title: "Smart Shopper",
    description: "Compare prices, read details, and make spending choices that match your goals.",
    relatedTopics: ["consumer-skills", "money-values", "budgeting"],
    objectives: [
      { id: "knowledge-70", label: "Reach 70 Money Know-How" },
      { id: "wants-balanced", label: "Keep wants spending at 35% or less" },
      { id: "receipt-detective", label: "Unlock Receipt Detective" }
    ],
    completionMessage: "You learned to slow down, compare, and spot the real deal."
  },
  {
    id: "credit-builder",
    title: "Credit Builder",
    description: "Use credit carefully, pay on time, and keep balances manageable.",
    relatedTopics: ["credit", "budgeting"],
    objectives: [
      { id: "credit-680", label: "Reach a 680+ credit score" },
      { id: "debt-under-500", label: "Keep debt under $500" },
      { id: "paid-full", label: "Unlock Paid in Full" }
    ],
    completionMessage: "You proved credit can be useful when you stay in control."
  },
  {
    id: "debt-smart-graduate",
    title: "Debt-Smart Graduate",
    description: "Explore future paths while keeping borrowing realistic.",
    relatedTopics: ["credit", "career", "life-after-high-school"],
    objectives: [
      { id: "opportunity-70", label: "Reach 70 Opportunity" },
      { id: "compare-loan", label: "Compare a loan or education offer" },
      { id: "debt-under-1000", label: "Finish with debt under $1,000" }
    ],
    completionMessage: "You made future plans with both opportunity and cost in view."
  },
  {
    id: "investor-starter",
    title: "Investor Starter",
    description: "Start small, diversify, and let time help your money grow.",
    relatedTopics: ["investing", "saving"],
    objectives: [
      { id: "invest-250", label: "Invest at least $250" },
      { id: "diversified", label: "Unlock Diversified" },
      { id: "emergency-before-risk", label: "Keep savings above $200" }
    ],
    completionMessage: "You invested with patience instead of chasing hype."
  },
  {
    id: "scam-defender",
    title: "Scam Defender",
    description: "Protect your money, passwords, identity, and future options.",
    relatedTopics: ["scams", "insurance", "consumer-skills"],
    objectives: [
      { id: "safety-75", label: "Reach 75 Safety" },
      { id: "scam-spotted", label: "Unlock Scam Spotted" },
      { id: "low-scam-loss", label: "Avoid major scam losses" }
    ],
    completionMessage: "You made security a habit, not a one-time warning."
  },
  {
    id: "balanced-life",
    title: "Balanced Life",
    description: "Keep money, wellbeing, safety, and opportunity moving together instead of chasing one score.",
    relatedTopics: ["money-values", "budgeting", "saving", "career"],
    objectives: [
      { id: "wellbeing-70", label: "Keep Wellbeing at 70+" },
      { id: "three-skills-65", label: "Reach 65+ in three life skills" },
      { id: "positive-net-worth", label: "Finish with positive net worth" }
    ],
    completionMessage: "You built a balanced life: not perfect, but flexible, thoughtful, and resilient."
  },
  {
    id: "career-ready",
    title: "Career Ready",
    description: "Build an adult pathway plan with realistic income, training, benefits, and budget choices.",
    relatedTopics: ["career", "life-after-high-school", "taxes", "budgeting"],
    objectives: [
      { id: "opportunity-70", label: "Reach 70 Opportunity" },
      { id: "career-research-plan", label: "Research a Year 1 income or pathway" },
      { id: "net-pay-plan", label: "Use take-home pay in a budget decision" }
    ],
    completionMessage: "You connected career choices to real adult money decisions."
  },
  {
    id: "emergency-fund-anchor",
    title: "The Anchor Fund",
    description: "Build a cushion so surprise costs do not sink the whole plan.",
    relatedTopics: ["saving", "budgeting", "banking"],
    objectives: [
      { id: "first-cushion", label: "Save a first $29 cushion" },
      { id: "shock-absorber", label: "Keep debt low after a surprise" },
      { id: "rebuilt-stronger", label: "Rebuild the cushion after using it" }
    ],
    completionMessage: "You built a cushion that protects options, calm, and future choices."
  },
  {
    id: "comparison-shopper-pro",
    title: "The Sharp Shopper",
    description: "Beat marketing math by checking totals, unit rates, and fees.",
    relatedTopics: ["consumer-skills", "budgeting", "money-values"],
    objectives: [
      { id: "per-unit-thinker", label: "Use unit-rate thinking" },
      { id: "read-the-total", label: "Include fees before buying" },
      { id: "walked-away", label: "Walk away from one pressure buy" }
    ],
    completionMessage: "You slowed down and found the real price behind the sticker price."
  },
  {
    id: "budget-habit-builder",
    title: "The Habit Builder",
    description: "Make planning automatic so the system does some of the work.",
    relatedTopics: ["budgeting", "saving", "banking"],
    objectives: [
      { id: "first-budget", label: "Create a working budget" },
      { id: "auto-pilot-saver", label: "Turn saving into a routine" },
      { id: "streak-of-three", label: "Build a saving streak" }
    ],
    completionMessage: "You treated budgeting like a repeatable routine, not a one-time worksheet."
  },
  {
    id: "credit-builder-starter",
    title: "The Credit Builder",
    description: "Practice low balances, on-time habits, and report checking.",
    relatedTopics: ["credit", "budgeting"],
    objectives: [
      { id: "under-thirty", label: "Keep debt/use low" },
      { id: "on-time-streak", label: "Build an on-time payment streak" },
      { id: "report-detective", label: "Check for an error or detail" }
    ],
    completionMessage: "You learned that credit grows through steady habits and careful checking."
  },
  {
    id: "credit-repair-comeback",
    title: "The Credit Comeback",
    description: "Recover from a money setback with calm, repeatable repair steps.",
    relatedTopics: ["credit", "saving", "budgeting"],
    objectives: [
      { id: "first-repair-step", label: "Take one repair action" },
      { id: "debt-under-1000", label: "Bring debt below $1,000" },
      { id: "no-repeat", label: "Show the prevention habit stuck" }
    ],
    completionMessage: "You proved a setback can become a recovery plan."
  },
  {
    id: "debt-smart-pathway",
    title: "The Debt-Smart Planner",
    description: "Borrow only what helps and compare terms before committing.",
    relatedTopics: ["credit", "life-after-high-school", "career"],
    objectives: [
      { id: "total-cost-thinker", label: "Compare the total cost" },
      { id: "smaller-and-smarter", label: "Avoid taking more debt than needed" },
      { id: "debt-under-1000", label: "Finish with debt under $1,000" }
    ],
    completionMessage: "You treated debt as a tool with terms, not free money."
  },
  {
    id: "investor-starter-longgame",
    title: "The Long-Game Investor",
    description: "Use patience, diversification, and fee awareness instead of hype.",
    relatedTopics: ["investing", "saving"],
    objectives: [
      { id: "invest-250", label: "Invest at least $250" },
      { id: "steady-hand", label: "Stay patient through ups and downs" },
      { id: "fee-aware", label: "Notice how fees affect growth" }
    ],
    completionMessage: "You focused on a sound investing process, even when outcomes were bumpy."
  },
  {
    id: "scam-defender-digital",
    title: "The Scam Defender",
    description: "Slow down, verify requests, and protect accounts before money moves.",
    relatedTopics: ["scams", "banking", "consumer-skills"],
    objectives: [
      { id: "verified-first", label: "Verify before acting" },
      { id: "two-step-guardian", label: "Use extra account protection" },
      { id: "safety-75", label: "Reach 75 Safety" }
    ],
    completionMessage: "You made verification a habit before pressure could take over."
  },
  {
    id: "career-ready-interview",
    title: "The Career-Ready Quest",
    description: "Prepare for work with net-pay thinking, practice, and reliability.",
    relatedTopics: ["career", "taxes", "budgeting"],
    objectives: [
      { id: "net-pay-realist", label: "Use take-home pay in planning" },
      { id: "practiced-and-ready", label: "Practice for an opportunity" },
      { id: "opportunity-70", label: "Reach 70 Opportunity" }
    ],
    completionMessage: "You connected career preparation to realistic adult money choices."
  },
  {
    id: "pathway-explorer",
    title: "The Pathway Explorer",
    description: "Compare college, trade, apprenticeship, work-first, and other safe future routes fairly.",
    relatedTopics: ["life-after-high-school", "career", "credit"],
    objectives: [
      { id: "fair-comparer", label: "Compare paths without assuming one best answer" },
      { id: "aid-decoder", label: "Sort aid or support by what must be repaid" },
      { id: "opportunity-70", label: "Reach 70 Opportunity" }
    ],
    completionMessage: "You kept more than one future door open while noticing the tradeoffs."
  },
  {
    id: "transportation-planner",
    title: "The Get-There Planner",
    description: "Plan reliable transportation by total cost, not just the first price.",
    relatedTopics: ["budgeting", "consumer-skills", "career"],
    objectives: [
      { id: "true-cost-driver", label: "Include upkeep, insurance, or hidden costs" },
      { id: "backup-ready", label: "Build a backup transportation plan" },
      { id: "money-knowledge-65", label: "Reach 65 Money Know-How" }
    ],
    completionMessage: "You protected opportunity by planning how to get there."
  },
  {
    id: "first-apartment-planner",
    title: "The Move-In Planner",
    description: "Prepare for deposits, shared costs, and first-place surprises.",
    relatedTopics: ["budgeting", "insurance", "saving"],
    objectives: [
      { id: "upfront-ready", label: "Save for upfront move-in costs" },
      { id: "fair-splitter", label: "Use a fair shared-cost plan" },
      { id: "positive-net-worth", label: "Keep positive net worth" }
    ],
    completionMessage: "You learned that affording rent and affording move-in are not the same thing."
  },
  {
    id: "insurance-aware",
    title: "The Risk-Ready Planner",
    description: "Match savings, deductibles, and coverage to the risk you can handle.",
    relatedTopics: ["insurance", "saving", "budgeting"],
    objectives: [
      { id: "right-sized-deductible", label: "Match deductible choices to savings" },
      { id: "calm-coverage", label: "Understand that unused coverage still protects" },
      { id: "emergency-before-risk", label: "Keep savings above $200" }
    ],
    completionMessage: "You treated insurance as a way to buy steadier options."
  },
  {
    id: "entrepreneur-starter",
    title: "The Side-Hustle Starter",
    description: "Test a tiny earning idea with profit, records, and set-asides in mind.",
    relatedTopics: ["career", "budgeting", "taxes"],
    objectives: [
      { id: "knows-the-profit", label: "Calculate profit, not just revenue" },
      { id: "record-keeper", label: "Keep a simple ledger or proof trail" },
      { id: "discipline-65", label: "Reach 65 Discipline" }
    ],
    completionMessage: "You built an earning plan with clear books and realistic costs."
  },
  {
    id: "net-worth-builder",
    title: "The Net Worth Builder",
    description: "Grow assets minus debts while remembering that money is not self-worth.",
    relatedTopics: ["saving", "investing", "credit"],
    objectives: [
      { id: "did-the-math", label: "Calculate assets minus debt correctly" },
      { id: "positive-net-worth", label: "Finish with positive net worth" },
      { id: "worth-not-self-worth", label: "Reflect on what net worth does not measure" }
    ],
    completionMessage: "You used net worth as a tool, not a judgment of a person."
  },
  {
    id: "balanced-life-wellbeing",
    title: "The Balanced Navigator",
    description: "Keep money, time, relationships, and wellbeing moving together.",
    relatedTopics: ["money-values", "budgeting", "career"],
    objectives: [
      { id: "wellbeing-70", label: "Keep Wellbeing at 70+" },
      { id: "kind-boundary", label: "Protect a healthy boundary" },
      { id: "balanced-planner", label: "Unlock Balanced Planner" }
    ],
    completionMessage: "You made room for money habits and a livable future."
  },
  {
    id: "support-circle-builder",
    title: "The Support Builder",
    description: "Build healthy give-and-take with guardians, friends, mentors, and pets.",
    relatedTopics: ["money-values", "career", "budgeting"],
    objectives: [
      { id: "asked-for-help", label: "Ask a trusted person for help" },
      { id: "two-way-support", label: "Build mutual support" },
      { id: "support-circle-3", label: "Grow the support circle to 3 relationships" }
    ],
    completionMessage: "You learned that support works best when it is clear, fair, and mutual."
  },
  {
    id: "math-in-real-life-master",
    title: "The Real-Math Master",
    description: "Use percent, unit rate, total cost, and doubling-time thinking in real choices.",
    relatedTopics: ["consumer-skills", "budgeting", "investing", "taxes"],
    objectives: [
      { id: "five-correct", label: "Show strong real-life math habits" },
      { id: "tax-and-tip-pro", label: "Handle percent-based totals" },
      { id: "doubling-estimator", label: "Use growth or doubling intuition" }
    ],
    completionMessage: "You made math the tool that changed the decision."
  },
  {
    id: "recovery-comeback",
    title: "The Comeback Run",
    description: "Use repair steps and prevention habits after something goes wrong.",
    relatedTopics: ["money-values", "credit", "saving"],
    objectives: [
      { id: "first-repair-step", label: "Take one repair step" },
      { id: "no-repeat", label: "Avoid repeating the same mistake" },
      { id: "discipline-65", label: "Reach 65 Discipline" }
    ],
    completionMessage: "You turned a setback into a plan you can explain."
  },
  {
    id: "sandbox-custom",
    title: "Your Own Quest",
    description: "A second free-play option for students who want to define success their own way.",
    relatedTopics: [
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
    ],
    objectives: [],
    completionMessage: "You played a self-directed run and built your own money-life story.",
    openEnded: true
  }
];

export function getGoal(goalId?: string): GoalDefinition {
  return goals.find((goal) => goal.id === goalId) ?? goals[0];
}

export function isOpenEndedGoal(goalId?: string): boolean {
  return getGoal(goalId).openEnded === true;
}
