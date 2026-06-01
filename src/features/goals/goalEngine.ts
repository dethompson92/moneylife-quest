import type { GameState, GoalObjective } from "../../types/game";
import { calculateNetWorth } from "../finance/financeEngine";

export function evaluateGoalObjectives(state: GameState): GoalObjective[] {
  return state.goalObjectives.map((objective) => ({
    ...objective,
    complete: objective.complete || objectiveMet(objective.id, state)
  }));
}

export function objectiveMet(id: string, state: GameState): boolean {
  switch (id) {
    case "save-500":
      return state.finances.savings >= 500;
    case "low-debt":
      return state.finances.debtTotal < 300;
    case "discipline-65":
      return state.stats.discipline >= 65;
    case "knowledge-70":
      return state.stats.moneyKnowledge >= 70;
    case "wants-balanced":
      return state.finances.budget.wantsPercent <= 35;
    case "receipt-detective":
      return state.achievements.includes("receipt-detective");
    case "credit-680":
      return (state.stats.creditScore ?? 0) >= 680;
    case "debt-under-500":
      return state.finances.debtTotal < 500;
    case "paid-full":
      return state.achievements.includes("paid-in-full");
    case "opportunity-70":
      return state.stats.opportunity >= 70;
    case "compare-loan":
      return state.flags.comparedLoan === true;
    case "debt-under-1000":
      return state.finances.debtTotal < 1000;
    case "invest-250":
      return state.finances.investments >= 250;
    case "diversified":
      return state.achievements.includes("diversified");
    case "emergency-before-risk":
      return state.finances.savings >= 200;
    case "safety-75":
      return state.stats.trustSafety >= 75;
    case "scam-spotted":
      return state.achievements.includes("scam-spotted");
    case "low-scam-loss":
      return state.finances.debtTotal < 450 && state.stats.trustSafety >= 60;
    case "wellbeing-70":
      return state.stats.wellbeing >= 70;
    case "three-skills-65":
      return [state.stats.moneyKnowledge, state.stats.discipline, state.stats.trustSafety, state.stats.opportunity].filter((value) => value >= 65).length >= 3;
    case "positive-net-worth":
      return calculateNetWorth(state.finances) > 0;
    case "career-research-plan":
      return state.flags.careerResearchPlan === true || state.achievements.includes("career-explorer");
    case "net-pay-plan":
      return state.flags.netPayPlan === true || state.achievements.includes("tax-translator");
    default:
      return false;
  }
}

export function goalCompleted(state: GameState): boolean {
  return state.goalObjectives.length > 0 && state.goalObjectives.every((objective) => objective.complete);
}
