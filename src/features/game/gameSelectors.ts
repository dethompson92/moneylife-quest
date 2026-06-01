import { calculateNetWorth } from "../finance/financeEngine";
import type { GameState } from "../../types/game";

export function getPendingEvent(state: GameState) {
  return state.pendingEventId;
}

export function getNetWorth(state: GameState): number {
  return calculateNetWorth(state.finances);
}

export function getGoalProgressPercent(state: GameState): number {
  if (!state.goalObjectives.length) return 0;
  return Math.round((state.goalObjectives.filter((objective) => objective.complete).length / state.goalObjectives.length) * 100);
}
