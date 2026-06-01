import { describe, expect, it } from "vitest";
import { scenarioEvents } from "../data/scenarioPacks/middleSchoolCore";
import { validateScenarioEvents } from "../features/events/eventValidation";

describe("scenario validation", () => {
  it("includes at least 300 valid original events with reflection fields", () => {
    expect(scenarioEvents.length).toBeGreaterThanOrEqual(300);
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

  it("includes a Humble Math-informed seventh-grade financial math pack", () => {
    const mathEvents = scenarioEvents.filter((event) => event.id.startsWith("math-"));
    const mathChoices = mathEvents.flatMap((event) => event.choices);
    const mathOutcomes = mathChoices.flatMap((choice) => choice.outcomes);
    const prompts = mathEvents.map((event) => `${event.prompt} ${event.reflectionPrompt}`).join(" ").toLowerCase();

    expect(mathEvents.length).toBeGreaterThanOrEqual(48);
    expect(mathEvents.every((event) => event.sourceNote?.includes("Humble Math"))).toBe(true);
    expect(mathEvents.every((event) => event.ageRange.max >= 35)).toBe(true);
    expect(mathChoices.filter((choice) => choice.requirements?.length).length).toBeGreaterThanOrEqual(40);
    expect(mathChoices.filter((choice) => choice.outcomes.length > 1).length).toBeGreaterThanOrEqual(40);
    expect(mathOutcomes.some((outcome) => outcome.effects.some((effect) => effect.type === "flag"))).toBe(true);
    expect(prompts).toContain("percent");
    expect(prompts).toContain("unit");
    expect(prompts).toContain("interest");
  });
});
