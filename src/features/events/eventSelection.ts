import { scenarioEvents } from "../../data/scenarioPacks/middleSchoolCore";
import { weightedPick, type Rng } from "../../lib/rng";
import type { GameState, Requirement, ScenarioEvent } from "../../types/game";

export function requirementsMet(requirements: Requirement[] | undefined, state: GameState): boolean {
  if (!requirements?.length) return true;
  return requirements.every((requirement) => {
    switch (requirement.type) {
      case "minAge":
        return state.character.age >= requirement.value;
      case "maxAge":
        return state.character.age <= requirement.value;
      case "minCash":
        return state.finances.cash + state.finances.checking >= requirement.value;
      case "minSavings":
        return state.finances.savings >= requirement.value;
      case "minInvestments":
        return state.finances.investments >= requirement.value;
      case "maxDebt":
        return state.finances.debtTotal <= requirement.value;
      case "hasCredit":
        return requirement.value === false ? state.stats.creditScore === null : state.stats.creditScore !== null;
      case "flagEquals":
        return state.flags[requirement.key] === requirement.value;
      case "statAtLeast":
        return (state.stats[requirement.stat] ?? 0) >= requirement.value;
    }
  });
}

export function selectNextEvent(
  state: GameState,
  events: ScenarioEvent[] = scenarioEvents,
  rng?: Rng
): ScenarioEvent | null {
  const eligible = events.filter((event) => {
    const topicMatch = event.topics.some((topic) => state.activeTopicFilter.includes(topic));
    const ageMatch = state.character.age >= event.ageRange.min && state.character.age <= event.ageRange.max;
    const stageMatch = !event.lifeStages?.length || event.lifeStages.includes(state.character.lifeStage);
    const freshEnough = !state.completedEventIds.includes(event.id);
    return topicMatch && ageMatch && stageMatch && freshEnough && requirementsMet(event.requirements, state);
  });

  if (!eligible.length) return null;
  const weighted = eligible.map((event) => ({
    item: event,
    weight: event.baseWeight + goalTopicBonus(event, state) + urgencyBonus(event, state) + adultOutcomeBonus(event, state)
  }));
  return rng ? weightedPick(weighted, rng) : weighted[0]?.item ?? null;
}

function goalTopicBonus(event: ScenarioEvent, state: GameState): number {
  if (state.activeGoalId.includes("emergency") && event.topics.some((topic) => topic === "saving" || topic === "budgeting")) return 8;
  if (state.activeGoalId.includes("credit") && event.topics.includes("credit")) return 10;
  if (state.activeGoalId.includes("investor") && event.topics.includes("investing")) return 10;
  if (state.activeGoalId.includes("scam") && event.topics.some((topic) => topic === "scams" || topic === "insurance")) return 10;
  if (state.activeGoalId.includes("shopper") && event.topics.includes("consumer-skills")) return 10;
  if (state.activeGoalId.includes("balanced") && event.topics.some((topic) => ["money-values", "budgeting", "saving", "career"].includes(topic))) return 7;
  if (state.activeGoalId.includes("career") && event.topics.some((topic) => ["career", "life-after-high-school", "taxes", "budgeting"].includes(topic))) return 10;
  return 0;
}

function urgencyBonus(event: ScenarioEvent, state: GameState): number {
  if (state.finances.debtTotal > 300 && event.topics.includes("credit")) return 8;
  if (state.finances.savings < 100 && event.topics.includes("saving")) return 6;
  if (state.stats.trustSafety < 50 && event.topics.includes("scams")) return 6;
  return 0;
}

function adultOutcomeBonus(event: ScenarioEvent, state: GameState): number {
  if (!event.id.startsWith("adult-")) return 0;
  if (state.character.age >= 18) return 14;
  if (state.character.age >= 16) return 8;
  return 2;
}
