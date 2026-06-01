import type { GameState } from "../../types/game";

export function checkAchievements(state: GameState): GameState {
  const next: GameState = structuredClone(state);
  const add = (id: string) => {
    if (!next.achievements.includes(id)) next.achievements.push(id);
  };

  if (next.finances.savings >= 100) add("saved-100");
  if (next.finances.savings >= 50) add("emergency-started");
  if (next.finances.savings >= 500) add("emergency-500");
  if ((next.stats.creditScore ?? 0) >= 680) add("credit-climber");
  if ((next.stats.creditScore ?? 0) >= 720 && next.finances.debtTotal < 300) add("apr-aware");
  if (next.finances.investments >= 120) add("compound-growth");
  if (next.finances.investments >= 75 && next.stats.moneyKnowledge >= 55) add("diversified");
  if (next.finances.investments >= 300 && next.finances.savings >= 250) add("long-game-investor");
  if (next.finances.debtTotal <= 50 && next.turn >= 4) add("debt-dodger");
  if (next.character.age >= 22 || next.status === "ended") add("reflection-ready");
  if (next.stats.discipline >= 68) add("first-budget");
  if (next.stats.discipline >= 75 && next.finances.debtTotal < 400) add("budget-rebuilder");
  if (next.stats.moneyKnowledge >= 70) add("smart-shopper-guide");
  if (next.stats.trustSafety >= 70) add("security-shield");
  if (next.stats.opportunity >= 70) add("career-explorer");
  if (next.stats.wellbeing >= 72 && next.stats.discipline >= 62 && next.finances.savings >= 200) add("balanced-planner");
  if (next.flags.valuesPlan === true) add("values-checkpoint");
  if (next.flags.priceChecklist === true) add("smart-shopper-guide");
  if (next.flags.bankAlerts === true || next.flags.autoSaveOn === true) add("alert-setter");
  if (next.flags.creditPlan === true) add("apr-aware");
  if (next.flags.investingPlan === true) add("long-game-investor");
  if (next.flags.securityChecklist === true) add("security-shield");
  if (next.flags.insured === true) add("insurance-aware");
  if (next.flags.aidPlan === true) add("scholarship-seeker");
  if (next.flags.taxChecklist === true) add("tax-translator");
  if (next.flags.businessBudget === true) add("entrepreneurial-thinker");
  return next;
}
