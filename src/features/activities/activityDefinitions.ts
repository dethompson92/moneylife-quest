import type { Effect, GameState, Topic } from "../../types/game";
import { applyEffects } from "../finance/financeEngine";
import { checkAchievements } from "../achievements/achievementEngine";
import { checkGoalProgress } from "../game/gameActions";

export type Activity = {
  id: string;
  category: string;
  title: string;
  description: string;
  topic: Topic;
  effects: Effect[];
  lockReason?: (state: GameState) => string | null;
};

export const activities: Activity[] = [
  { id: "school-quiz", category: "School", title: "Take a Money Mini-Quiz", description: "Practice vocabulary and decision skills.", topic: "money-values", effects: [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "opportunity", amount: 1 }] },
  { id: "work-chore", category: "Work", title: "Do a Paid Chore", description: "Earn a small amount with reliable work.", topic: "career", effects: [{ type: "cash", amount: 25 }, { type: "stat", stat: "discipline", amount: 2 }] },
  { id: "bank-alert", category: "Bank", title: "Turn On Bank Alerts", description: "Get warned before low-balance trouble.", topic: "banking", effects: [{ type: "stat", stat: "trustSafety", amount: 3 }, { type: "stat", stat: "discipline", amount: 2 }] },
  { id: "budget-reset", category: "Budget", title: "Make a Balanced Budget", description: "Use a steady needs, wants, savings plan.", topic: "budgeting", effects: [{ type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "first-budget" }] },
  { id: "shop-compare", category: "Shop", title: "Compare Unit Prices", description: "Practice finding the real better deal.", topic: "consumer-skills", effects: [{ type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "receipt-detective" }] },
  { id: "credit-pay", category: "Credit", title: "Make an Extra Debt Payment", description: "Lower balances and future interest.", topic: "credit", effects: [{ type: "cash", amount: -35 }, { type: "debt", amount: -35 }, { type: "creditScore", amount: 8 }], lockReason: (state) => (state.finances.cash < 35 ? "Needs $35 cash" : state.finances.debtTotal <= 0 ? "No debt to pay" : null) },
  { id: "save-transfer", category: "Save", title: "Transfer $25 to Savings", description: "Move money before it becomes spending.", topic: "saving", effects: [{ type: "cash", amount: -25 }, { type: "savings", amount: 25 }, { type: "stat", stat: "discipline", amount: 2 }], lockReason: (state) => (state.finances.cash < 25 ? "Needs $25 cash" : null) },
  { id: "invest-small", category: "Invest", title: "Invest $40 in a Diversified Fund", description: "Start small while keeping savings safe.", topic: "investing", effects: [{ type: "savings", amount: -40 }, { type: "investments", amount: 45 }, { type: "achievement", achievementId: "diversified" }], lockReason: (state) => (state.finances.savings < 120 ? "Keep at least $120 saved first" : null) },
  { id: "protect-2fa", category: "Protect", title: "Enable Two-Step Login", description: "Make important accounts safer.", topic: "scams", effects: [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "achievement", achievementId: "scam-spotted" }] },
  { id: "future-plan", category: "Future", title: "Compare Future Paths", description: "Look at cost, training time, and opportunity.", topic: "life-after-high-school", effects: [{ type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "future-planner" }] },
  { id: "support-family-budget", category: "Support", title: "Talk Budget With Family", description: "Ask a trusted adult how they compare needs, wants, and bills.", topic: "money-values", effects: [{ type: "relationship", relationshipId: "family", closeness: 4, support: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }, { type: "stat", stat: "wellbeing", amount: 2 }] },
  { id: "support-friend-plan", category: "Support", title: "Suggest a Low-Cost Hangout", description: "Keep the friendship strong without overspending.", topic: "consumer-skills", effects: [{ type: "relationship", relationshipId: "friend", closeness: 5, support: 2 }, { type: "stat", stat: "discipline", amount: 2 }, { type: "savings", amount: 10 }] },
  { id: "support-mentor-career", category: "Support", title: "Ask a Mentor About Careers", description: "Get advice about training, interviews, and future paths.", topic: "career", effects: [{ type: "relationship", relationshipId: "mentor", closeness: 4, support: 6 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "achievement", achievementId: "career-explorer" }] },
  { id: "support-pet-care", category: "Support", title: "Care for Your Pet", description: "Practice responsibility with a small care cost.", topic: "budgeting", effects: [{ type: "cash", amount: -15 }, { type: "relationship", relationshipId: "pet", closeness: 6, support: 2 }, { type: "stat", stat: "wellbeing", amount: 4 }], lockReason: (state) => (state.finances.cash < 15 ? "Needs $15 cash" : null) }
];

export function runActivity(state: GameState, activityId: string): GameState {
  const activity = activities.find((candidate) => candidate.id === activityId);
  if (!activity || activity.lockReason?.(state)) return state;
  let next = applyEffects(state, activity.effects);
  next.log = [
    {
      id: `activity-${activity.id}-${Date.now()}`,
      turn: next.turn,
      age: next.character.age,
      title: activity.title,
      body: activity.description,
      topic: activity.topic,
      createdAt: new Date().toISOString()
    },
    ...next.log
  ].slice(0, 80);
  next = checkGoalProgress(next);
  next = checkAchievements(next);
  return next;
}
