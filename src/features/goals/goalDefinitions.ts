import type { GoalDefinition } from "../../types/game";

export const goals: GoalDefinition[] = [
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
  }
];

export function getGoal(goalId?: string): GoalDefinition {
  return goals.find((goal) => goal.id === goalId) ?? goals[0];
}
