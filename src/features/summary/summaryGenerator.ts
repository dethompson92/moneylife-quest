import { getAchievement } from "../achievements/achievementDefinitions";
import { getGoal } from "../goals/goalDefinitions";
import { calculateNetWorth } from "../finance/financeEngine";
import type { GameState } from "../../types/game";

export function generateSummary(state: GameState): string {
  const goal = getGoal(state.activeGoalId);
  const completeObjectives = state.goalObjectives.filter((objective) => objective.complete).length;
  const goalResult = completeObjectives === state.goalObjectives.length ? "Completed" : completeObjectives > 0 ? "In progress" : "Started";
  const badges = state.achievements
    .map((id) => getAchievement(id)?.title)
    .filter(Boolean)
    .slice(0, 12)
    .join(", ");
  const netWorth = calculateNetWorth(state.finances);
  const creditBand = creditBandLabel(state.stats.creditScore);
  const biggestWin = pickBiggestWin(state);
  const biggestMistake = pickBiggestMistake(state);

  return [
    `MoneyLife Quest Reflection`,
    `Character: ${state.character.displayName}, age ${state.character.age}`,
    `Goal result: ${goal.title} - ${goalResult} (${completeObjectives}/${state.goalObjectives.length} objectives complete)`,
    `Net worth: $${netWorth.toLocaleString("en-US")}`,
    `Savings: $${Math.round(state.finances.savings).toLocaleString("en-US")}`,
    `Debt: $${Math.round(state.finances.debtTotal).toLocaleString("en-US")}`,
    `Credit band: ${creditBand}`,
    `Money Know-How: ${state.stats.moneyKnowledge}/100`,
    `Safety: ${state.stats.trustSafety}/100`,
    `Badges: ${badges || "Still building"}`,
    `Biggest win: ${biggestWin}`,
    `Biggest mistake or hardest tradeoff: ${biggestMistake}`,
    `One money lesson I can explain: choices have tradeoffs, and a plan gives future me more options.`,
    `Reflection code: ${state.id.slice(-6).toUpperCase()}-${completeObjectives}${state.achievements.length}`
  ].join("\n");
}

function creditBandLabel(score: number | null): string {
  if (score === null) return "No credit history";
  if (score >= 740) return `Strong (${score})`;
  if (score >= 670) return `Building well (${score})`;
  if (score >= 580) return `Needs attention (${score})`;
  return `High risk (${score})`;
}

function pickBiggestWin(state: GameState): string {
  if (state.achievements.includes("emergency-500")) return "built a $500 emergency cushion";
  if (state.achievements.includes("paid-in-full")) return "avoided credit-card interest by paying in full";
  if (state.achievements.includes("long-game-investor")) return "started a patient investing habit";
  if (state.achievements.includes("security-shield")) return "protected money and identity from risky messages";
  if (state.finances.savings >= 300) return "kept savings growing";
  return "kept learning from each decision";
}

function pickBiggestMistake(state: GameState): string {
  if (state.finances.debtTotal >= 700) return "debt grew faster than the plan";
  if ((state.stats.creditScore ?? 850) < 620) return "credit choices made future borrowing harder";
  if (state.stats.wellbeing < 45) return "money stress got too high";
  if (state.stats.trustSafety < 50) return "security habits needed more attention";
  return "balancing wants, goals, and stress took practice";
}
