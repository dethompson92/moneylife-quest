import type { AchievementDefinition } from "../../types/game";

export const achievements: AchievementDefinition[] = [
  { id: "first-budget", title: "First Budget", description: "Created or adjusted a budget plan." },
  { id: "saved-100", title: "Saved Your First $100", description: "Built savings past $100." },
  { id: "emergency-started", title: "Emergency Fund Started", description: "Set aside money for surprises." },
  { id: "emergency-fund-started", title: "Emergency Fund Started", description: "Calculated and started a future emergency cushion." },
  { id: "scam-spotted", title: "Scam Spotted", description: "Avoided a suspicious message or offer." },
  { id: "paid-in-full", title: "Paid in Full", description: "Handled a credit balance responsibly." },
  { id: "credit-climber", title: "Credit Climber", description: "Improved your credit score." },
  { id: "diversified", title: "Diversified", description: "Used more than one kind of investment." },
  { id: "needs-before-wants", title: "Needs Before Wants", description: "Protected essentials before extras." },
  { id: "receipt-detective", title: "Receipt Detective", description: "Caught a price or receipt detail." },
  { id: "interview-ready", title: "Interview Ready", description: "Prepared for work or career opportunities." },
  { id: "future-planner", title: "Future Planner", description: "Compared post-high-school paths." },
  { id: "insurance-aware", title: "Insurance Aware", description: "Understood premiums, deductibles, or risk." },
  { id: "compound-growth", title: "Compound Growth", description: "Let saved or invested money grow over time." },
  { id: "debt-dodger", title: "Debt Dodger", description: "Avoided unnecessary high-interest debt." },
  { id: "reflection-ready", title: "Reflection Ready", description: "Reached the final reflection summary." },
  { id: "values-checkpoint", title: "Values Checkpoint", description: "Named a money tradeoff before choosing." },
  { id: "smart-shopper-guide", title: "Smart Shopper Guide", description: "Used a shopper checklist instead of impulse." },
  { id: "budget-rebuilder", title: "Budget Rebuilder", description: "Recovered after a budget surprise." },
  { id: "alert-setter", title: "Alert Setter", description: "Used account alerts or automatic saving." },
  { id: "emergency-500", title: "Emergency $500", description: "Built a stronger starter emergency fund." },
  { id: "apr-aware", title: "APR Aware", description: "Noticed how card interest can change the real cost." },
  { id: "bnpl-aware", title: "BNPL Aware", description: "Compared Buy Now Pay Later with other options." },
  { id: "long-game-investor", title: "Long-Game Investor", description: "Chose a patient investing habit." },
  { id: "security-shield", title: "Security Shield", description: "Used a security checklist to protect money." },
  { id: "risk-ready", title: "Risk Ready", description: "Compared risk, premium, and deductible." },
  { id: "career-explorer", title: "Career Explorer", description: "Researched career paths and training." },
  { id: "scholarship-seeker", title: "Scholarship Seeker", description: "Took action to reduce future education cost." },
  { id: "tax-translator", title: "Tax Translator", description: "Connected paychecks, taxes, and take-home pay." },
  { id: "refund-ready", title: "Refund Ready", description: "Made a thoughtful tax refund plan." },
  { id: "entrepreneurial-thinker", title: "Entrepreneurial Thinker", description: "Tested an earning idea with costs in mind." },
  { id: "balanced-planner", title: "Balanced Planner", description: "Protected wellbeing while improving money habits." },
  { id: "subscription-sleuth", title: "Subscription Sleuth", description: "Converted small recurring charges into a yearly cost." },
  { id: "pay-yourself-first", title: "Pay Yourself First", description: "Moved money into savings before spending extras." },
  { id: "young-entrepreneur", title: "Young Entrepreneur", description: "Checked revenue, expenses, and profit before launching an idea." }
];

export function getAchievement(id: string): AchievementDefinition | undefined {
  return achievements.find((achievement) => achievement.id === id);
}
