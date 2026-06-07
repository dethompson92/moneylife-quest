import { getGoal } from "./goalDefinitions";
import type { Effect, GameState, ScenarioEvent, Topic } from "../../types/game";

export type GoalHookNote = {
  title: string;
  body: string;
  tone: "direct" | "indirect" | "open";
};

const topicLabels: Record<Topic, string> = {
  "money-values": "money values",
  "consumer-skills": "consumer skills",
  budgeting: "budgeting",
  banking: "banking",
  credit: "credit",
  saving: "saving",
  investing: "investing",
  insurance: "insurance",
  scams: "scam protection",
  career: "career planning",
  "life-after-high-school": "life after high school",
  taxes: "taxes"
};

export function getGoalHookNote(state: GameState, event: ScenarioEvent): GoalHookNote {
  const goal = getGoal(state.activeGoalId);
  const matchedTopics = event.topics.filter((topic) => goal.relatedTopics.includes(topic));
  const effectSignals = summarizeEventEffectSignals(event);
  const signalText = effectSignals.length > 0 ? effectSignals.slice(0, 3).join(", ") : "future choices";

  if (goal.openEnded) {
    return {
      title: "Open Life connection",
      body: `You chose free play, so this event matters if it connects to your private goal. Watch how it may affect ${signalText}.`,
      tone: "open"
    };
  }

  if (matchedTopics.length > 0) {
    const topicText = matchedTopics.map((topic) => topicLabels[topic]).slice(0, 3).join(", ");
    const unfinishedObjective = state.goalObjectives.find((objective) => !objective.complete);
    const objectiveText = unfinishedObjective ? ` It may help or complicate "${unfinishedObjective.label}."` : "";
    return {
      title: "Goal connection",
      body: `${goal.title} is connected to ${topicText}. This decision can move ${signalText} in a direction that changes your goal path.${objectiveText}`,
      tone: "direct"
    };
  }

  return {
    title: "Long-game connection",
    body: `${goal.title} is not mainly about ${topicLabels[event.topics[0]] ?? "this topic"}, but choices here can still affect ${signalText}, which may make your goal easier or harder later.`,
    tone: "indirect"
  };
}

function summarizeEventEffectSignals(event: ScenarioEvent): string[] {
  const signals = new Set<string>();
  for (const effect of event.choices.flatMap((choice) => choice.outcomes.flatMap((outcome) => outcome.effects))) {
    addEffectSignal(effect, signals);
  }
  return [...signals];
}

function addEffectSignal(effect: Effect, signals: Set<string>) {
  switch (effect.type) {
    case "cash":
    case "checking":
      signals.add("cash flow");
      break;
    case "savings":
      signals.add("savings");
      break;
    case "debt":
      signals.add("debt");
      break;
    case "creditScore":
      signals.add("credit");
      break;
    case "investments":
      signals.add("investments");
      break;
    case "income":
      signals.add("income");
      break;
    case "taxes":
      signals.add("taxes");
      break;
    case "relationship":
      signals.add("support circle");
      break;
    case "flag":
      signals.add("future options");
      break;
    case "achievement":
      signals.add("badges");
      break;
    case "stat":
      if (effect.stat === "moneyKnowledge") signals.add("Money Know-How");
      if (effect.stat === "trustSafety") signals.add("Safety");
      if (effect.stat === "discipline") signals.add("Discipline");
      if (effect.stat === "opportunity") signals.add("Opportunity");
      if (effect.stat === "wellbeing") signals.add("Wellbeing");
      if (effect.stat === "creditScore") signals.add("credit");
      break;
  }
}
