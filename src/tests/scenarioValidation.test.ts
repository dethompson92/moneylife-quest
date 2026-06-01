import { describe, expect, it } from "vitest";
import { scenarioEvents } from "../data/scenarioPacks/middleSchoolCore";
import { validateScenarioEvents } from "../features/events/eventValidation";

describe("scenario validation", () => {
  it("includes at least 250 valid original events with reflection fields", () => {
    expect(scenarioEvents.length).toBeGreaterThanOrEqual(250);
    expect(validateScenarioEvents(scenarioEvents)).toEqual([]);
    expect(scenarioEvents.every((event) => event.reflectionPrompt.length > 12)).toBe(true);
    expect(scenarioEvents.flatMap((event) => event.choices).flatMap((choice) => choice.outcomes).every((outcome) => outcome.explanation.length > 12)).toBe(true);
  });

  it("includes tradeoffs, locked choices, and randomized outcomes", () => {
    const choices = scenarioEvents.flatMap((event) => event.choices);
    const lockedChoices = choices.filter((choice) => choice.requirements?.length);
    const randomChoices = choices.filter((choice) => choice.outcomes.length > 1);
    const flagSettingEvents = scenarioEvents.filter((event) =>
      event.choices.some((choice) => choice.outcomes.some((outcome) => outcome.effects.some((effect) => effect.type === "flag")))
    );
    expect(lockedChoices.length).toBeGreaterThanOrEqual(50);
    expect(randomChoices.length).toBeGreaterThanOrEqual(50);
    expect(flagSettingEvents.length).toBeGreaterThanOrEqual(50);
    expect(scenarioEvents.filter((event) => event.choices.length >= 3).length).toBeGreaterThanOrEqual(75);
  });

  it("includes a Banzai-informed extension pack without copied student-facing text", () => {
    const banzaiInspired = scenarioEvents.filter((event) => event.id.startsWith("banzai-"));
    expect(banzaiInspired.length).toBeGreaterThanOrEqual(16);
    expect(banzaiInspired.every((event) => event.sourceNote?.includes("MoneyLife Quest originals"))).toBe(true);
  });

  it("leans into future adult outcome choices", () => {
    const adultFutureEvents = scenarioEvents.filter((event) => event.id.startsWith("adult-"));
    expect(adultFutureEvents.length).toBeGreaterThanOrEqual(80);
    expect(adultFutureEvents.every((event) => event.ageRange.max >= 35)).toBe(true);
  });
});
