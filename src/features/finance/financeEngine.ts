import { clamp, clampMoney } from "../../lib/clamp";
import { createSeededRng, type Rng } from "../../lib/rng";
import { updateRelationship } from "../character/supportCircle";
import type { Effect, FinanceProfile, GameState, PlayerStats } from "../../types/game";

export function getInitialStats(startingMoneyKnowledge = 45): PlayerStats {
  return {
    wellbeing: 70,
    moneyKnowledge: clamp(startingMoneyKnowledge, 0, 100),
    discipline: 56,
    trustSafety: 58,
    opportunity: 52,
    creditScore: null
  };
}

export function getInitialFinances(): FinanceProfile {
  return {
    cash: 60,
    checking: 0,
    savings: 75,
    investments: 0,
    debtTotal: 0,
    annualIncome: 180,
    annualTaxes: 0,
    budget: {
      needsPercent: 45,
      wantsPercent: 25,
      savingsPercent: 20,
      givingPercent: 5,
      debtPaymentPercent: 5
    },
    accounts: [
      {
        id: "starter-cash",
        type: "savings",
        name: "Starter Savings",
        hasAlerts: false,
        monthlyFee: 0
      }
    ],
    debts: [],
    assets: [],
    portfolio: []
  };
}

export function calculateNetWorth(finances: FinanceProfile): number {
  const assets =
    finances.cash +
    finances.checking +
    finances.savings +
    finances.investments +
    finances.assets.reduce((sum, asset) => sum + asset.value, 0);
  return Math.round(assets - finances.debtTotal);
}

export function calculateCreditScore(state: GameState): number | null {
  if (state.stats.creditScore === null && state.finances.debtTotal <= 0) return null;
  const base = state.stats.creditScore ?? 640;
  const debtPenalty = Math.min(90, state.finances.debtTotal / 20);
  const disciplineBonus = (state.stats.discipline - 55) * 0.8;
  const knowledgeBonus = (state.stats.moneyKnowledge - 55) * 0.35;
  return clamp(base - debtPenalty + disciplineBonus + knowledgeBonus, 300, 850);
}

export function summarizeEffects(effects: Effect[]): string[] {
  return effects.map((effect) => {
    if (effect.type === "stat") return `${effect.stat} ${effect.amount >= 0 ? "+" : ""}${effect.amount}`;
    if (effect.type === "creditScore") return `credit ${effect.amount >= 0 ? "+" : ""}${effect.amount}`;
    if (effect.type === "flag") return `${effect.key} set`;
    if (effect.type === "relationship") return `${effect.relationshipId} support changed`;
    if (effect.type === "achievement") return `achievement: ${effect.achievementId}`;
    return `${effect.type} ${effect.amount >= 0 ? "+" : ""}${effect.amount}`;
  });
}

export function applyEffects(state: GameState, effects: Effect[]): GameState {
  const next: GameState = structuredClone(state);

  for (const effect of effects) {
    switch (effect.type) {
      case "cash":
        next.finances.cash += effect.amount;
        break;
      case "checking":
        next.finances.checking += effect.amount;
        break;
      case "savings":
        next.finances.savings += effect.amount;
        break;
      case "investments":
        next.finances.investments += effect.amount;
        break;
      case "debt":
        next.finances.debtTotal += effect.amount;
        if (effect.amount > 0 && next.stats.creditScore === null) next.stats.creditScore = 640;
        break;
      case "income":
        next.finances.annualIncome += effect.amount;
        break;
      case "taxes":
        next.finances.annualTaxes += effect.amount;
        break;
      case "stat":
        if (effect.stat === "creditScore") {
          next.stats.creditScore = clamp((next.stats.creditScore ?? 640) + effect.amount, 300, 850);
        } else {
          next.stats[effect.stat] = clamp((next.stats[effect.stat] ?? 0) + effect.amount, 0, 100) as never;
        }
        break;
      case "creditScore":
        next.stats.creditScore = clamp((next.stats.creditScore ?? 640) + effect.amount, 300, 850);
        break;
      case "flag":
        next.flags[effect.key] = effect.value;
        break;
      case "relationship":
        next.relationships = updateRelationship(next.relationships, effect.relationshipId, {
          closeness: effect.closeness,
          support: effect.support
        });
        break;
      case "achievement":
        if (!next.achievements.includes(effect.achievementId)) next.achievements.push(effect.achievementId);
        break;
    }
  }

  normalizeMoney(next);
  next.stats.creditScore = calculateCreditScore(next);
  next.updatedAt = new Date().toISOString();
  return syncFinanceHistory(next);
}

export function normalizeMoney(state: GameState): GameState {
  const f = state.finances;
  const shortfall = Math.abs(Math.min(0, f.cash)) + Math.abs(Math.min(0, f.checking));
  if (shortfall > 0) {
    f.debtTotal += shortfall;
    state.stats.wellbeing = clamp(state.stats.wellbeing - 4, 0, 100);
  }
  f.cash = clampMoney(f.cash);
  f.checking = clampMoney(f.checking);
  f.savings = clampMoney(f.savings);
  f.investments = clampMoney(f.investments);
  f.debtTotal = clampMoney(f.debtTotal);
  f.annualIncome = clampMoney(f.annualIncome);
  f.annualTaxes = clampMoney(f.annualTaxes);
  state.stats.wellbeing = clamp(state.stats.wellbeing, 0, 100);
  state.stats.moneyKnowledge = clamp(state.stats.moneyKnowledge, 0, 100);
  state.stats.discipline = clamp(state.stats.discipline, 0, 100);
  state.stats.trustSafety = clamp(state.stats.trustSafety, 0, 100);
  state.stats.opportunity = clamp(state.stats.opportunity, 0, 100);
  return state;
}

export function applyPassiveFinancialUpdates(state: GameState, providedRng?: Rng): GameState {
  const next: GameState = structuredClone(state);
  const rng = providedRng ?? createSeededRng(next.rngState);
  const careerBoost =
    Number(Boolean(next.flags.careerPlan)) * 80 +
    Number(Boolean(next.flags.aidPlan)) * 45 +
    Number(Boolean(next.flags.businessBudget)) * 70;
  const opportunityBoost = Math.max(0, next.stats.opportunity - 55) * (next.character.age >= 18 ? 8 : 3);
  const stageMultiplier = next.character.age >= 22 ? 1.45 : next.character.age >= 18 ? 1.15 : next.character.age >= 15 ? 1 : 0.35;
  const income = Math.round((next.finances.annualIncome + careerBoost + opportunityBoost) * stageMultiplier);
  const taxes = Math.round(income * (next.character.age >= 18 ? 0.12 : next.character.age >= 15 ? 0.08 : 0));
  const needs = Math.round(income * (next.finances.budget.needsPercent / 100));
  const wants = Math.round(income * (next.finances.budget.wantsPercent / 100));
  const plannedSavings = Math.round(income * (next.finances.budget.savingsPercent / 100)) + (next.flags.autoSaveOn ? Math.max(20, Math.round(income * 0.03)) : 0);
  const debtPayment = Math.min(next.finances.debtTotal, Math.round(income * (next.finances.budget.debtPaymentPercent / 100)));
  const savingsInterest = Math.round(next.finances.savings * (next.flags.bankAlerts ? 0.03 : 0.025));
  const debtRate = next.flags.creditPlan || next.flags.aprAware ? 0.055 : (next.stats.creditScore ?? 700) < 620 ? 0.11 : 0.08;
  const debtInterest = Math.round(next.finances.debtTotal * debtRate);
  const diversified = Boolean(next.flags.investingPlan) || next.achievements.includes("diversified");
  const volatilityRange = diversified ? 0.16 : 0.28;
  const volatilityFloor = diversified ? -0.045 : -0.1;
  const volatility = next.finances.investments <= 0 ? 0 : rng.next() * volatilityRange + volatilityFloor;
  const investmentReturn = Math.round(next.finances.investments * volatility);
  const insurancePremium = next.flags.insured ? Math.max(12, Math.round(income * 0.015)) : 0;
  const missedPaymentFee = next.flags.missedPayment ? 30 : 0;

  next.finances.cash += income - taxes - needs - wants - plannedSavings - debtPayment - insurancePremium;
  next.finances.savings += plannedSavings + savingsInterest;
  next.finances.debtTotal += debtInterest + missedPaymentFee - debtPayment;
  next.finances.investments += investmentReturn;
  next.finances.annualTaxes = Math.max(next.finances.annualTaxes, taxes);

  if (income > 0) {
    next.log = [
      createSystemLog(next, "Money Update", "Your yearly plan ran: income, taxes, spending, saving, debt payments, insurance, and investment movement all updated."),
      ...next.log
    ].slice(0, 80);
  }
  if (next.flags.autoSaveOn && income > 0) {
    next.log = [
      createSystemLog(next, "Auto-Save Worked", "Because auto-save was on, a little extra moved to savings before spending could claim it."),
      ...next.log
    ].slice(0, 80);
  }
  if (insurancePremium > 0) {
    next.log = [
      createSystemLog(next, "Insurance Premium", "You paid a small premium to keep protection in place before a surprise happens."),
      ...next.log
    ].slice(0, 80);
  }
  if (next.finances.cash < 0) {
    const hadEmergencyBuffer = next.finances.savings >= 400;
    if (hadEmergencyBuffer) {
      const transfer = Math.min(next.finances.savings, Math.abs(next.finances.cash));
      next.finances.savings -= transfer;
      next.finances.cash += transfer;
      next.stats.wellbeing = clamp(next.stats.wellbeing + 2, 0, 100);
      next.log = [
        createSystemLog(next, "Emergency Fund Helped", "Savings covered a cash shortfall before it became expensive debt."),
        ...next.log
      ].slice(0, 80);
    } else {
      next.log = [
        createSystemLog(next, "Cash Shortfall", "A cash shortfall became debt, which is why emergency savings matter."),
        ...next.log
      ].slice(0, 80);
    }
  }
  if (missedPaymentFee > 0) next.stats.creditScore = clamp((next.stats.creditScore ?? 640) - 10, 300, 850);
  normalizeMoney(next);
  next.rngState = rng.state();
  return next;
}

function createSystemLog(state: GameState, title: string, body: string) {
  return {
    id: `${title.toLowerCase().replace(/\W+/g, "-")}-${state.turn}-${Date.now()}`,
    turn: state.turn,
    age: state.character.age,
    title,
    body,
    createdAt: new Date().toISOString()
  };
}

export function syncFinanceHistory(state: GameState): GameState {
  const next: GameState = {
    ...state,
    financeHistory: state.financeHistory ? [...state.financeHistory] : []
  };
  const currentAge = next.character.age;
  const netWorth = calculateNetWorth(next.finances);
  const entry = {
    age: currentAge,
    netWorth,
    cash: next.finances.cash + next.finances.checking,
    savings: next.finances.savings,
    debt: next.finances.debtTotal,
    investments: next.finances.investments
  };

  const existingIndex = next.financeHistory.findIndex((h) => h.age === currentAge);
  if (existingIndex !== -1) {
    next.financeHistory[existingIndex] = entry;
  } else {
    next.financeHistory.push(entry);
  }
  return next;
}
