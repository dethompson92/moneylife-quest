import { scenarioEvents } from "../../data/scenarioPacks/middleSchoolCore";
import { createSeededRng, weightedPick } from "../../lib/rng";
import { applyEffects, summarizeEffects } from "../finance/financeEngine";
import { checkAchievements } from "../achievements/achievementEngine";
import { checkEndConditions, checkGoalProgress } from "../game/gameActions";
import { requirementsMet } from "./eventSelection";
import type { Choice, GameState, Outcome } from "../../types/game";

export function resolveChoice(state: GameState, eventId: string, choiceId: string): GameState {
  const event = scenarioEvents.find((candidate) => candidate.id === eventId);
  if (!event) throw new Error(`Unknown event: ${eventId}`);
  const selectedChoice = event.choices.find((candidate) => candidate.id === choiceId);
  if (!selectedChoice) throw new Error(`Unknown choice: ${choiceId}`);
  if (!requirementsMet(selectedChoice.requirements, state)) return state;

  const rng = createSeededRng(state.rngState);
  const outcome = resolveOutcome(selectedChoice, rng);
  let next = applyEffects(state, outcome.effects);
  next.rngState = rng.state();
  next.completedEventIds = Array.from(new Set([...next.completedEventIds, event.id]));
  next.pendingEventId = undefined;
  next.status = "active";
  next.pendingFeedback = `${outcome.explanation} Reflection: ${event.reflectionPrompt}`;
  next.pendingEffectSummary = summarizeEffects(outcome.effects);
  next.log = [
    {
      id: `log-${event.id}-${Date.now()}`,
      turn: next.turn,
      age: next.character.age,
      title: event.title,
      body: outcome.logText,
      topic: event.topics[0],
      effects: summarizeEffects(outcome.effects),
      createdAt: new Date().toISOString()
    },
    ...next.log
  ].slice(0, 80);
  next = checkGoalProgress(next);
  next = checkAchievements(next);
  next = checkEndConditions(next);
  next.updatedAt = new Date().toISOString();
  return next;
}

export function resolveOutcome(choice: Choice, rng = createSeededRng(Date.now())): Outcome {
  return weightedPick(
    choice.outcomes.map((outcome) => ({ item: outcome, weight: outcome.probability })),
    rng
  ) ?? choice.outcomes[0];
}
