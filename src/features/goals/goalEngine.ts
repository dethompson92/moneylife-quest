import type { GameState, GoalObjective } from "../../types/game";
import { calculateNetWorth } from "../finance/financeEngine";
import { getActiveGoalIds, getGoal } from "./goalDefinitions";

function hasFlag(state: GameState, ...keys: string[]): boolean {
  return keys.some((key) => state.flags[key] === true);
}

function hasAchievement(state: GameState, ...ids: string[]): boolean {
  return ids.some((id) => state.achievements.includes(id));
}

function relationshipCount(state: GameState, role?: "family" | "friend" | "mentor" | "pet"): number {
  return role ? state.relationships.filter((relationship) => relationship.role === role).length : state.relationships.length;
}

export function evaluateGoalObjectives(state: GameState): GoalObjective[] {
  const previous = new Map(
    state.goalObjectives.map((objective) => [
      `${objective.goalId ?? state.activeGoalId}:${objective.id}`,
      objective.complete
    ])
  );
  return buildGoalObjectives(getActiveGoalIds(state)).map((objective) => ({
    ...objective,
    complete: previous.get(`${objective.goalId ?? state.activeGoalId}:${objective.id}`) === true || objectiveMet(objective.id, state)
  }));
}

export function buildGoalObjectives(goalIds: string[]): GoalObjective[] {
  return goalIds.flatMap((goalId, index) => {
    const goal = getGoal(goalId);
    const role = index === 0 ? "primary" : "mini";
    return goal.objectives.map((objective) => ({
      ...objective,
      goalId: goal.id,
      goalTitle: goal.title,
      goalRole: role,
      complete: false
    }));
  });
}

export function getPrimaryGoalObjectives(state: GameState): GoalObjective[] {
  const primaryGoalId = getActiveGoalIds(state)[0] ?? state.activeGoalId;
  return state.goalObjectives.filter((objective) => (objective.goalId ?? primaryGoalId) === primaryGoalId);
}

export function getObjectivesForGoal(state: GameState, goalId: string): GoalObjective[] {
  return state.goalObjectives.filter((objective) => (objective.goalId ?? state.activeGoalId) === goalId);
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
    case "first-cushion":
      return state.finances.savings >= 29 || hasAchievement(state, "first-cushion", "saved-100");
    case "shock-absorber":
      return (state.finances.savings >= 150 && state.finances.debtTotal < 500) || hasAchievement(state, "shock-absorber");
    case "rebuilt-stronger":
      return hasFlag(state, "rebuildsFund", "usesRepairResource") || hasAchievement(state, "rebuilt-stronger", "emergency-500");
    case "per-unit-thinker":
      return hasFlag(state, "auditsBundles", "usesMarkdownStrategy") || hasAchievement(state, "per-unit-thinker") || state.stats.moneyKnowledge >= 65;
    case "read-the-total":
      return hasFlag(state, "checksCheckoutFees", "usesInvoices", "tracksPendingBalance") || hasAchievement(state, "read-the-total") || state.stats.moneyKnowledge >= 68;
    case "walked-away":
      return hasAchievement(state, "walked-away") || (state.stats.discipline >= 68 && state.finances.debtTotal < 450);
    case "auto-pilot-saver":
      return hasFlag(state, "autoSaveOn", "autoSaves", "usesPaycheckSplit") || hasAchievement(state, "auto-pilot-saver");
    case "streak-of-three":
      return hasAchievement(state, "streak-of-three") || (state.stats.discipline >= 72 && state.finances.savings >= 150);
    case "under-thirty":
      return hasAchievement(state, "under-thirty") || ((state.stats.creditScore ?? 0) >= 680 && state.finances.debtTotal < 500);
    case "on-time-streak":
      return hasAchievement(state, "on-time-streak") || ((state.stats.creditScore ?? 0) >= 700 && state.flags.missedPayment !== true);
    case "report-detective":
      return hasFlag(state, "checksCreditReportError") || hasAchievement(state, "report-detective", "receipt-detective");
    case "total-cost-thinker":
      return hasFlag(state, "comparedLoan", "comparesLoanTotals", "evaluatesAuthorizedUser") || hasAchievement(state, "total-cost-thinker") || state.stats.moneyKnowledge >= 72;
    case "smaller-and-smarter":
      return hasFlag(state, "spottedPredatory") || hasAchievement(state, "smaller-and-smarter", "debt-dodger") || (state.finances.debtTotal < 500 && state.stats.opportunity >= 55);
    case "steady-hand":
      return hasFlag(state, "survivedDownturn", "understandsRebalancing") || hasAchievement(state, "steady-hand", "long-game-investor") || (state.finances.investments >= 250 && state.stats.moneyKnowledge >= 60);
    case "fee-aware":
      return hasFlag(state, "checksInvestmentFees") || hasAchievement(state, "fee-aware") || (state.finances.investments >= 250 && state.stats.moneyKnowledge >= 70);
    case "verified-first":
      return hasFlag(state, "verifiesSources", "usesSourceLadder", "confirmsDigitalPayments", "protectsVerificationCodes") || hasAchievement(state, "verified-first", "scam-spotted", "security-shield");
    case "two-step-guardian":
      return hasFlag(state, "securityChecklist", "valuesRecoveryCodes", "protectsVerificationCodes") || hasAchievement(state, "two-step-guardian") || state.stats.trustSafety >= 80;
    case "net-pay-realist":
      return hasFlag(state, "netPayPlan", "estimatesNetPay") || hasAchievement(state, "net-pay-realist", "tax-translator");
    case "practiced-and-ready":
      return hasFlag(state, "preparedInterview", "strongReferencePossible") || hasAchievement(state, "practiced-and-ready", "interview-ready") || state.stats.opportunity >= 72;
    case "fair-comparer":
      return hasFlag(state, "researchesPathways", "decodesAidOffer") || hasAchievement(state, "fair-comparer") || (state.stats.opportunity >= 65 && state.stats.moneyKnowledge >= 65);
    case "aid-decoder":
      return hasFlag(state, "aidPlan", "decodedAidOffer", "decodesAidOffer") || hasAchievement(state, "aid-decoder", "scholarship-seeker");
    case "true-cost-driver":
      return hasFlag(state, "hasBackupRoute", "transportBackupFund") || hasAchievement(state, "true-cost-driver") || (state.stats.moneyKnowledge >= 70 && state.stats.opportunity >= 55 && state.flags.ignoredUpkeep !== true);
    case "backup-ready":
      return hasFlag(state, "hasBackupRoute", "transportBackupFund") || hasAchievement(state, "backup-ready") || (state.finances.savings >= 200 && state.stats.opportunity >= 55);
    case "money-knowledge-65":
      return state.stats.moneyKnowledge >= 65;
    case "upfront-ready":
      return hasFlag(state, "tracksMoveInDeposits") || hasAchievement(state, "upfront-ready") || state.finances.savings >= 600;
    case "fair-splitter":
      return hasFlag(state, "usesSharedPlanning", "setsPartnerRoles") || hasAchievement(state, "fair-splitter") || state.stats.discipline >= 68;
    case "right-sized-deductible":
      return hasFlag(state, "matchesDeductibleToSavings", "deductiblePocketStarted", "understandsPolicyLimit") || hasAchievement(state, "right-sized-deductible") || (state.flags.insured === true && state.finances.savings >= 300);
    case "calm-coverage":
      return hasAchievement(state, "calm-coverage") || (state.flags.insured === true && state.stats.wellbeing >= 65);
    case "knows-the-profit":
      return hasFlag(state, "businessBudget", "keepsIncomeLedger", "usesInvoices", "pricesPetCareWork") || hasAchievement(state, "knows-the-profit", "entrepreneurial-thinker");
    case "record-keeper":
      return hasFlag(state, "keepsIncomeLedger", "tracksReimbursements", "usesInvoices", "usesTaxCalendar") || hasAchievement(state, "record-keeper") || state.stats.discipline >= 72;
    case "did-the-math":
      return hasFlag(state, "completedMoneySnapshot", "usesMathHelper") || hasAchievement(state, "did-the-math") || state.stats.moneyKnowledge >= 78;
    case "worth-not-self-worth":
      return hasFlag(state, "completedMoneySnapshot", "completedValuesReflection") || hasAchievement(state, "worth-not-self-worth") || (calculateNetWorth(state.finances) > 0 && state.stats.wellbeing >= 65);
    case "kind-boundary":
      return hasFlag(state, "setsCosignBoundary") || hasAchievement(state, "kind-boundary") || (state.stats.wellbeing >= 70 && state.finances.debtTotal < 400);
    case "balanced-planner":
      return hasAchievement(state, "balanced-planner") || (state.stats.wellbeing >= 72 && state.stats.discipline >= 62 && state.finances.savings >= 200);
    case "asked-for-help":
      return hasFlag(state, "asksProgramSupport", "usesRepairResource") || hasAchievement(state, "asked-for-help") || state.relationships.some((relationship) => relationship.support >= 60);
    case "two-way-support":
      return hasFlag(state, "usesSharedPlanning", "tracksReimbursements") || hasAchievement(state, "two-way-support") || relationshipCount(state) >= 3;
    case "support-circle-3":
      return relationshipCount(state) >= 3;
    case "five-correct":
      return hasFlag(state, "passesMathChecks") || hasAchievement(state, "five-correct") || state.stats.moneyKnowledge >= 80;
    case "tax-and-tip-pro":
      return hasFlag(state, "taxChecklist", "usesTaxCalendar") || hasAchievement(state, "tax-and-tip-pro", "tax-translator") || state.stats.moneyKnowledge >= 72;
    case "doubling-estimator":
      return hasFlag(state, "ruleOf72") || hasAchievement(state, "doubling-estimator", "compound-growth") || (state.finances.investments > 0 && state.stats.moneyKnowledge >= 75);
    case "first-repair-step":
      return hasFlag(state, "usesRepairResource", "rebuildsFund", "repairsCustomerTrust") || hasAchievement(state, "first-repair-step") || (state.turn >= 3 && state.stats.discipline >= 60);
    case "no-repeat":
      return state.flags.repeatedSameMistake !== true && (hasAchievement(state, "no-repeat") || (state.finances.debtTotal < 400 && state.stats.discipline >= 75));
    default:
      return false;
  }
}

export function goalCompleted(state: GameState): boolean {
  const primaryGoal = getGoal(getActiveGoalIds(state)[0] ?? state.activeGoalId);
  if (primaryGoal.openEnded) return false;
  const primaryObjectives = getPrimaryGoalObjectives(state);
  return primaryObjectives.length > 0 && primaryObjectives.every((objective) => objective.complete);
}
