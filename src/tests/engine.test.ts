import { describe, expect, it } from "vitest";
import { createNewGame, ageUp } from "../features/game/gameActions";
import { applyEffects, applyPassiveFinancialUpdates, calculateCreditScore, calculateNetWorth } from "../features/finance/financeEngine";
import { resolveChoice } from "../features/events/eventEngine";
import { scenarioEvents } from "../data/scenarioPacks/middleSchoolCore";

describe("game engine", () => {
  it("creates deterministic starting lives from a seed", () => {
    const first = createNewGame({ seed: "period-one" });
    const second = createNewGame({ seed: "period-one" });
    expect(first.character.displayName).toBe(second.character.displayName);
    expect(first.character.avatarEmoji).toBe(second.character.avatarEmoji);
    expect(first.character.age).toBe(12);
  });

  it("clamps stats and converts cash shortfalls into debt", () => {
    const game = createNewGame({ seed: "shortfall" });
    const next = applyEffects(game, [
      { type: "cash", amount: -500 },
      { type: "stat", stat: "discipline", amount: 200 },
      { type: "stat", stat: "wellbeing", amount: -200 }
    ]);
    expect(next.finances.cash).toBe(0);
    expect(next.finances.debtTotal).toBeGreaterThan(0);
    expect(next.stats.discipline).toBe(100);
    expect(next.stats.wellbeing).toBe(0);
  });

  it("calculates net worth and credit score", () => {
    const game = createNewGame({ seed: "credit" });
    const next = applyEffects(game, [
      { type: "creditScore", amount: 20 },
      { type: "debt", amount: 100 },
      { type: "savings", amount: 200 }
    ]);
    expect(calculateNetWorth(next.finances)).toBe(next.finances.cash + next.finances.checking + next.finances.savings + next.finances.investments - next.finances.debtTotal);
    expect(calculateCreditScore(next)).toBeGreaterThanOrEqual(300);
  });

  it("updates support circle relationships through effects", () => {
    const game = createNewGame({ seed: "support-circle" });
    const family = game.relationships.find((relationship) => relationship.id === "family")!;
    const next = applyEffects(game, [{ type: "relationship", relationshipId: "family", closeness: 5, support: 4 }]);
    const updatedFamily = next.relationships.find((relationship) => relationship.id === "family")!;
    expect(updatedFamily.closeness).toBeGreaterThan(family.closeness);
    expect(updatedFamily.support).toBeGreaterThan(family.support);
  });

  it("age up selects an event and resolving it updates log and saveable state", () => {
    const game = createNewGame({ seed: "event-flow", topicFilter: ["money-values"] });
    const pending = ageUp(game);
    expect(pending.pendingEventId).toBeTruthy();
    const event = scenarioEvents.find((candidate) => candidate.id === pending.pendingEventId)!;
    const resolved = resolveChoice(pending, event.id, event.choices[0].id);
    expect(resolved.pendingEventId).toBeUndefined();
    expect(resolved.log[0].title).toBe(event.title);
    expect(resolved.completedEventIds).toContain(event.id);
  });

  it("applies compounding habit flags during passive updates", () => {
    const game = createNewGame({ seed: "compound-flags" });
    const prepared = {
      ...game,
      character: { ...game.character, age: 19 },
      flags: { ...game.flags, autoSaveOn: true, insured: true, careerPlan: true, investingPlan: true },
      finances: { ...game.finances, annualIncome: 1000, savings: 500, investments: 300 }
    };
    const next = applyPassiveFinancialUpdates(prepared);
    expect(next.finances.savings).toBeGreaterThan(prepared.finances.savings);
    expect(next.log.some((entry) => entry.title === "Auto-Save Worked")).toBe(true);
    expect(next.log.some((entry) => entry.title === "Insurance Premium")).toBe(true);
  });
});
