import { ageUp } from "./gameActions";
import { resolveChoice } from "../events/eventEngine";
import { runActivity } from "../activities/activityDefinitions";
import type { GameState } from "../../types/game";

export type GameAction =
  | { type: "AGE_UP" }
  | { type: "RESOLVE_CHOICE"; eventId: string; choiceId: string }
  | { type: "RUN_ACTIVITY"; activityId: string }
  | { type: "REPLACE"; state: GameState };

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "AGE_UP":
      return ageUp(state);
    case "RESOLVE_CHOICE":
      return resolveChoice(state, action.eventId, action.choiceId);
    case "RUN_ACTIVITY":
      return runActivity(state, action.activityId);
    case "REPLACE":
      return action.state;
    default:
      return state;
  }
}
