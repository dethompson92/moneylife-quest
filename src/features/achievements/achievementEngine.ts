import type { GameState } from "../../types/game";

export function checkAchievements(state: GameState): GameState {
  const next: GameState = structuredClone(state);
  const add = (id: string) => {
    if (!next.achievements.includes(id)) next.achievements.push(id);
  };
  const hasFlag = (...keys: string[]) => keys.some((key) => next.flags[key] === true);
  const hasAny = (...ids: string[]) => ids.some((id) => next.achievements.includes(id));
  const relationshipCount = (role?: "family" | "friend" | "mentor" | "pet") =>
    role ? next.relationships.filter((relationship) => relationship.role === role).length : next.relationships.length;

  if (next.finances.savings >= 100) add("saved-100");
  if (next.finances.savings >= 50) add("emergency-started");
  if (next.finances.savings >= 500) add("emergency-500");
  if (next.finances.savings >= 29) add("first-cushion");
  if (next.finances.savings >= 150 && next.finances.debtTotal < 500) add("shock-absorber");
  if (next.finances.savings >= 500 || hasFlag("rebuildsFund", "usesRepairResource")) add("rebuilt-stronger");
  if ((next.stats.creditScore ?? 0) >= 680) add("credit-climber");
  if ((next.stats.creditScore ?? 0) >= 680 && next.finances.debtTotal < 500) add("under-thirty");
  if ((next.stats.creditScore ?? 0) >= 700 && next.flags.missedPayment !== true) add("on-time-streak");
  if ((next.stats.creditScore ?? 0) >= 720 && next.finances.debtTotal < 300) add("apr-aware");
  if (next.finances.investments >= 120) add("compound-growth");
  if (next.finances.investments >= 75 && next.stats.moneyKnowledge >= 55) add("diversified");
  if (next.finances.investments >= 300 && next.finances.savings >= 250) add("long-game-investor");
  if (next.finances.investments >= 250 && next.stats.moneyKnowledge >= 60) add("steady-hand");
  if ((next.finances.investments >= 250 && next.stats.moneyKnowledge >= 70) || hasFlag("checksInvestmentFees")) add("fee-aware");
  if ((next.finances.investments > 0 && next.stats.moneyKnowledge >= 75) || hasFlag("ruleOf72")) add("doubling-estimator");
  if (next.finances.debtTotal <= 50 && next.turn >= 4) add("debt-dodger");
  if (next.character.age >= 22 || next.status === "ended") add("reflection-ready");
  if (next.stats.discipline >= 68) add("first-budget");
  if (next.stats.discipline >= 68 && next.stats.moneyKnowledge >= 55) add("flexible-planner");
  if (next.stats.discipline >= 75 && next.finances.debtTotal < 400) add("budget-rebuilder");
  if (next.stats.discipline >= 75 && next.finances.savings >= 150) add("streak-of-three");
  if (next.stats.discipline >= 68 && next.finances.debtTotal < 450) add("walked-away");
  if (next.stats.moneyKnowledge >= 70) add("smart-shopper-guide");
  if (next.stats.moneyKnowledge >= 65 || hasFlag("auditsBundles", "usesMarkdownStrategy")) add("per-unit-thinker");
  if (next.stats.moneyKnowledge >= 68 || hasFlag("checksCheckoutFees", "usesInvoices", "tracksPendingBalance")) add("read-the-total");
  if (next.stats.moneyKnowledge >= 72 || hasFlag("comparedLoan", "comparesLoanTotals", "evaluatesAuthorizedUser")) add("total-cost-thinker");
  if (next.stats.moneyKnowledge >= 78 || hasFlag("completedMoneySnapshot", "usesMathHelper")) add("did-the-math");
  if (next.stats.moneyKnowledge >= 80 || hasFlag("passesMathChecks")) add("five-correct");
  if (next.stats.moneyKnowledge >= 72 || hasFlag("taxChecklist", "usesTaxCalendar")) add("tax-and-tip-pro");
  if (next.stats.trustSafety >= 70) add("security-shield");
  if (next.stats.trustSafety >= 70 || hasFlag("verifiesSources", "usesSourceLadder", "confirmsDigitalPayments", "protectsVerificationCodes")) add("verified-first");
  if (next.stats.trustSafety >= 75 && next.flags.paidScamFee !== true) add("hung-up-the-lure");
  if (next.stats.trustSafety >= 80 || hasFlag("securityChecklist", "valuesRecoveryCodes", "protectsVerificationCodes")) add("two-step-guardian");
  if (next.stats.opportunity >= 70) add("career-explorer");
  if (next.stats.opportunity >= 72 || hasFlag("preparedInterview", "strongReferencePossible")) add("practiced-and-ready");
  if ((next.stats.opportunity >= 75 && next.stats.discipline >= 65) || hasFlag("strongReferencePossible")) add("reliable-reference");
  if ((next.stats.opportunity >= 65 && next.stats.moneyKnowledge >= 65) || hasFlag("researchesPathways", "decodesAidOffer")) add("fair-comparer");
  if (next.stats.wellbeing >= 72 && next.stats.discipline >= 62 && next.finances.savings >= 200) add("balanced-planner");
  if (next.stats.wellbeing >= 70 && next.finances.debtTotal < 400) add("kind-boundary");
  if (next.flags.valuesPlan === true) add("values-checkpoint");
  if (next.flags.priceChecklist === true) add("smart-shopper-guide");
  if (next.flags.bankAlerts === true || next.flags.autoSaveOn === true) add("alert-setter");
  if (next.flags.autoSaveOn === true || hasFlag("autoSaves", "usesPaycheckSplit")) add("auto-pilot-saver");
  if (next.flags.autoSaveOn === true || hasFlag("autoSaves", "usesPaycheckSplit") || (next.finances.savings >= 100 && next.stats.discipline >= 60)) add("pay-yourself-first");
  if (next.flags.creditPlan === true) add("apr-aware");
  if (next.flags.investingPlan === true) add("long-game-investor");
  if (next.flags.securityChecklist === true) add("security-shield");
  if (next.flags.insured === true) add("insurance-aware");
  if ((next.flags.insured === true && next.finances.savings >= 300) || hasFlag("matchesDeductibleToSavings", "deductiblePocketStarted", "understandsPolicyLimit")) add("right-sized-deductible");
  if (next.flags.insured === true && next.stats.wellbeing >= 65) add("calm-coverage");
  if (next.flags.aidPlan === true) add("scholarship-seeker");
  if (next.flags.aidPlan === true || hasFlag("decodedAidOffer", "decodesAidOffer")) add("aid-decoder");
  if (next.flags.taxChecklist === true) add("tax-translator");
  if (next.flags.businessBudget === true) add("entrepreneurial-thinker");
  if (next.flags.businessBudget === true || hasFlag("keepsIncomeLedger", "pricesPetCareWork", "testsSmallBusinessIdea")) add("young-entrepreneur");
  if (next.flags.businessBudget === true || hasFlag("keepsIncomeLedger", "usesInvoices", "pricesPetCareWork")) add("knows-the-profit");
  if (hasFlag("keepsIncomeLedger", "tracksReimbursements", "usesInvoices", "usesTaxCalendar") || next.stats.discipline >= 72) add("record-keeper");
  if (next.finances.debtTotal < 500 && next.stats.opportunity >= 55) add("smaller-and-smarter");
  if (hasFlag("checksCreditReportError") || hasAny("receipt-detective")) add("report-detective");
  if (hasFlag("hasBackupRoute", "transportBackupFund") || (next.finances.savings >= 200 && next.stats.opportunity >= 55)) add("backup-ready");
  if ((next.stats.moneyKnowledge >= 70 && next.stats.opportunity >= 55) || hasFlag("hasBackupRoute")) add("true-cost-driver");
  if (next.finances.savings >= 600 || hasFlag("tracksMoveInDeposits")) add("upfront-ready");
  if (hasFlag("usesSharedPlanning", "setsPartnerRoles") || next.stats.discipline >= 68) add("fair-splitter");
  if ((next.stats.wellbeing >= 65 && calculateNetWorthLike(next) > 0) || hasFlag("completedMoneySnapshot", "completedValuesReflection")) add("worth-not-self-worth");
  if (hasFlag("usesRepairResource", "rebuildsFund", "repairsCustomerTrust") || (next.turn >= 3 && next.stats.discipline >= 60)) add("first-repair-step");
  if (next.flags.repeatedSameMistake !== true && next.finances.debtTotal < 400 && next.stats.discipline >= 75) add("no-repeat");
  if (hasFlag("asksProgramSupport", "usesRepairResource") || next.relationships.some((relationship) => relationship.support >= 60)) add("asked-for-help");
  if (relationshipCount() >= 3 || hasFlag("usesSharedPlanning", "tracksReimbursements")) add("two-way-support");
  if (next.finances.budget.givingPercent >= 5 && next.stats.wellbeing >= 65 && next.finances.debtTotal < 500) add("generous-within-plan");
  return next;
}

function calculateNetWorthLike(state: GameState): number {
  return state.finances.cash + state.finances.checking + state.finances.savings + state.finances.investments - state.finances.debtTotal;
}
