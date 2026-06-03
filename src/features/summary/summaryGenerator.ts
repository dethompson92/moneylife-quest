import { getAchievement } from "../achievements/achievementDefinitions";
import { getGoal } from "../goals/goalDefinitions";
import { calculateNetWorth } from "../finance/financeEngine";
import type { GameState } from "../../types/game";

export function generateSummary(state: GameState): string {
  const goal = getGoal(state.activeGoalId);
  const isOpenLife = goal.openEnded === true;
  const completeObjectives = state.goalObjectives.filter((objective) => objective.complete).length;
  const goalResult = isOpenLife
    ? "Self-directed playthrough"
    : completeObjectives === state.goalObjectives.length
      ? "Completed"
      : completeObjectives > 0
        ? "In progress"
        : "Started";
  const goalLine = isOpenLife
    ? `Play style: ${goal.title} - ${goalResult}; the player chose their own definition of success.`
    : `Goal result: ${goal.title} - ${goalResult} (${completeObjectives}/${state.goalObjectives.length} objectives complete)`;
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
    goalLine,
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
    `Reflection code: ${encodeReflectionCode(state)}`
  ].join("\n");
}

export function encodeReflectionCode(state: GameState): string {
  const namePart = (state.character.displayName || "XYZ").slice(0, 3).replace(/\s/g, "").toUpperCase();
  const nwRaw = calculateNetWorth(state.finances);
  const nwShifted = Math.max(0, nwRaw + 50000);
  const nwPart = nwShifted.toString(36).toUpperCase();

  const objectivesMet = state.goalObjectives.filter((obj) => obj.complete).length;
  const objPart = objectivesMet.toString(36).toUpperCase();

  const badgeCount = state.achievements.length;
  const badgePart = badgeCount.toString(36).toUpperCase();

  const credit = state.stats.creditScore;
  const creditShifted = credit === null ? 0 : credit - 300 + 1;
  const creditPart = creditShifted.toString(36).toUpperCase();

  return `MLQ-${namePart}-${nwPart}-${objPart}${badgePart}${creditPart}`;
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

export function decodeReflectionCode(code: string): { ok: true; data: any } | { ok: false; error: string } {
  try {
    const clean = code.trim().toUpperCase();
    if (!clean.startsWith("MLQ-")) {
      return { ok: false, error: "Invalid code format. Codes must start with 'MLQ-'" };
    }
    const parts = clean.split("-");
    if (parts.length < 4) {
      return { ok: false, error: "Invalid structure. Code should have 4 segments (e.g. MLQ-DEV-14CO-ACR)" };
    }
    const nickname = parts[1];
    const nwShifted = parseInt(parts[2], 36);
    if (isNaN(nwShifted)) {
      return { ok: false, error: "Invalid Net Worth encoding." };
    }
    const netWorth = nwShifted - 50000;

    const trailing = parts[3];
    if (trailing.length < 3) {
      return { ok: false, error: "Invalid trailing statistics." };
    }
    const objectives = parseInt(trailing[0], 36);
    const badges = parseInt(trailing[1], 36);
    const creditShifted = parseInt(trailing.slice(2), 36);
    const credit = creditShifted === 0 ? null : creditShifted + 300 - 1;

    return {
      ok: true,
      data: {
        nickname,
        netWorth,
        objectives,
        badges,
        credit
      }
    };
  } catch (e) {
    return { ok: false, error: "Unexpected parse failure. Check spelling." };
  }
}
