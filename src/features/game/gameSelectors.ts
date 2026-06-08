import { calculateNetWorth } from "../finance/financeEngine";
import { getPrimaryGoalObjectives } from "../goals/goalEngine";
import type { GameState } from "../../types/game";

export function getPendingEvent(state: GameState) {
  return state.pendingEventId;
}

export function getNetWorth(state: GameState): number {
  return calculateNetWorth(state.finances);
}

export function getGoalProgressPercent(state: GameState): number {
  const objectives = getPrimaryGoalObjectives(state);
  if (!objectives.length) return 0;
  return Math.round((objectives.filter((objective) => objective.complete).length / objectives.length) * 100);
}
