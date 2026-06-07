import { describe, expect, it } from "vitest";
import { createNewGame, ageUp } from "../features/game/gameActions";
import { applyEffects, applyPassiveFinancialUpdates, calculateCreditScore, calculateNetWorth } from "../features/finance/financeEngine";
import { resolveChoice } from "../features/events/eventEngine";
import { scenarioEvents } from "../data/scenarioPacks/middleSchoolCore";
import { runActivity } from "../features/activities/activityDefinitions";
import { getGoalHookNote } from "../features/goals/goalHookNote";

describe("game engine", () => {
  it("creates deterministic starting lives from a seed", () => {
    const first = createNewGame({ seed: "period-one" });
    const second = createNewGame({ seed: "period-one" });
    expect(first.character.displayName).toBe(second.character.displayName);
    expect(first.character.avatarEmoji).toBe(second.character.avatarEmoji);
    expect(first.character.age).toBe(12);
    expect(first.relationships.length).toBeGreaterThanOrEqual(1);
    expect(first.relationships.length).toBeLessThanOrEqual(2);
    expect(first.relationships.every((relationship) => relationship.role === "family")).toBe(true);
    expect(first.relationships.map((relationship) => relationship.id)).toContain("family");
    expect(first.relationships).toEqual(second.relationships);
    const starterCounts = Array.from({ length: 16 }, (_, index) => createNewGame({ seed: `guardian-count-${index}` }).relationships.length);
    expect(starterCounts).toContain(2);
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

  it("unlocks support circle relationships through story effects", () => {
    const game = createNewGame({ seed: "support-unlock" });
    expect(game.relationships.some((relationship) => relationship.id === "friend")).toBe(false);
    const unchanged = runActivity(game, "support-friend-plan");
    expect(unchanged).toBe(game);

    const withFriend = applyEffects(game, [{ type: "relationship", relationshipId: "friend", closeness: 3 }]);
    expect(withFriend.relationships.some((relationship) => relationship.id === "friend" && relationship.role === "friend")).toBe(true);
    expect(withFriend.log.some((entry) => entry.title === "Support Circle Update")).toBe(true);

    const afterFriendActivity = runActivity(withFriend, "support-friend-plan");
    expect(afterFriendActivity).not.toBe(withFriend);
    expect(afterFriendActivity.relationships.find((relationship) => relationship.id === "friend")?.closeness).toBeGreaterThan(
      withFriend.relationships.find((relationship) => relationship.id === "friend")!.closeness
    );
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

  it("explains why an event matters to the active goal", () => {
    const game = createNewGame({ seed: "goal-hook", goalId: "emergency-fund-hero" });
    const savingEvent = scenarioEvents.find((event) => event.topics.includes("saving"))!;
    const hook = getGoalHookNote(game, savingEvent);
    expect(hook.title).toBe("Goal connection");
    expect(hook.body).toContain("Emergency Fund Hero");
    expect(hook.body.toLowerCase()).toContain("saving");

    const openLife = createNewGame({ seed: "goal-hook-open", goalId: "open-life" });
    const openHook = getGoalHookNote(openLife, savingEvent);
    expect(openHook.title).toBe("Open Life connection");
    expect(openHook.body).toContain("private goal");
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
