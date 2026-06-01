import type { ScenarioEvent, Topic } from "../../types/game";

const allowedTopics: Topic[] = [
  "money-values",
  "consumer-skills",
  "budgeting",
  "banking",
  "credit",
  "saving",
  "investing",
  "insurance",
  "scams",
  "career",
  "life-after-high-school",
  "taxes"
];

export function validateScenarioEvents(events: ScenarioEvent[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const choiceIds = new Set<string>();

  for (const event of events) {
    if (!event.id) errors.push("Event missing id");
    if (ids.has(event.id)) errors.push(`Duplicate event id: ${event.id}`);
    ids.add(event.id);
    if (!event.title || !event.prompt) errors.push(`${event.id} missing title or prompt`);
    if (!event.reflectionPrompt) errors.push(`${event.id} missing reflectionPrompt`);
    if (!event.topics.length) errors.push(`${event.id} missing topics`);
    for (const topic of event.topics) {
      if (!allowedTopics.includes(topic)) errors.push(`${event.id} has invalid topic ${topic}`);
    }
    if (event.choices.length < 2 || event.choices.length > 4) {
      errors.push(`${event.id} must have 2-4 choices`);
    }
    for (const choice of event.choices) {
      const compositeId = `${event.id}:${choice.id}`;
      if (choiceIds.has(compositeId)) errors.push(`Duplicate choice id: ${compositeId}`);
      choiceIds.add(compositeId);
      if (!choice.label) errors.push(`${compositeId} missing label`);
      if (!choice.outcomes.length) errors.push(`${compositeId} missing outcomes`);
      const probabilityTotal = choice.outcomes.reduce((sum, outcome) => sum + outcome.probability, 0);
      if (Math.abs(probabilityTotal - 1) > 0.001) errors.push(`${compositeId} probabilities must equal 1`);
      for (const outcome of choice.outcomes) {
        if (!outcome.feedback || !outcome.explanation || !outcome.logText) {
          errors.push(`${compositeId}:${outcome.id} missing feedback, explanation, or logText`);
        }
        if (!outcome.effects?.length) {
          errors.push(`${compositeId}:${outcome.id} missing effects`);
        }
      }
    }
  }
  return errors;
}
