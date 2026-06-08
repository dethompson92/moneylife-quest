import { describe, expect, it, beforeEach } from "vitest";
import { createNewGame, checkGoalProgress } from "../features/game/gameActions";
import { checkAchievements } from "../features/achievements/achievementEngine";
import { achievements } from "../features/achievements/achievementDefinitions";
import { goals } from "../features/goals/goalDefinitions";
import { generateSummary } from "../features/summary/summaryGenerator";
import { DEBUG_REPORTS_KEY, clearDebugReports, clearGame, loadDebugReports, loadGame, resetGame, SAVE_KEY, saveDebugReport, saveGame } from "../lib/storage";

describe("goals, achievements, and storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("updates goal progress and achievements", () => {
    const game = createNewGame({ goalId: "emergency-fund-hero" });
    const rich = {
      ...game,
      finances: { ...game.finances, savings: 600, debtTotal: 0 },
      stats: { ...game.stats, discipline: 70 }
    };
    const progressed = checkGoalProgress(checkAchievements(rich));
    expect(progressed.goalObjectives.every((objective) => objective.complete)).toBe(true);
  });

  it("supports the Balanced Life goal", () => {
    const game = createNewGame({ goalId: "balanced-life" });
    const balanced = {
      ...game,
      finances: { ...game.finances, savings: 400, debtTotal: 0 },
      stats: { ...game.stats, wellbeing: 78, moneyKnowledge: 70, discipline: 68, trustSafety: 67, opportunity: 55 }
    };
    const progressed = checkGoalProgress(checkAchievements(balanced));
    expect(progressed.goalObjectives.every((objective) => objective.complete)).toBe(true);
  });

  it("generates a copyable summary without personal fields", () => {
    const game = createNewGame({ nickname: "Ace", goalId: "emergency-fund-hero" });
    const summary = generateSummary(game);
    expect(summary).toContain("MoneyLife Quest Reflection");
    expect(summary).toContain("Main goal result");
    expect(summary).toContain("Credit band");
    expect(summary).not.toContain("@");
  });

  it("supports Open Life as a self-directed play style without required objectives", () => {
    const game = createNewGame({ nickname: "Ace", goalId: "open-life" });
    const progressed = checkGoalProgress(checkAchievements(game));
    const summary = generateSummary(progressed);
    expect(progressed.activeGoalId).toBe("open-life");
    expect(progressed.goalObjectives).toEqual([]);
    expect(progressed.flags.goalCompleted).not.toBe(true);
    expect(summary).toContain("Play style: Open Life - Self-directed playthrough");
    expect(summary).not.toContain("0/0 objectives complete");
  });

  it("supports a primary goal with up to two mini-goals", () => {
    const game = createNewGame({
      goalIds: ["emergency-fund-hero", "investor-starter", "scam-defender"]
    });
    expect(game.activeGoalId).toBe("emergency-fund-hero");
    expect(game.activeGoalIds).toEqual(["emergency-fund-hero", "investor-starter", "scam-defender"]);
    expect(game.goalObjectives.some((objective) => objective.goalRole === "mini" && objective.goalTitle === "Investor Starter")).toBe(true);

    const progressed = checkGoalProgress({
      ...game,
      finances: { ...game.finances, savings: 600, debtTotal: 0 },
      stats: { ...game.stats, discipline: 70 }
    });
    expect(progressed.flags.goalCompleted).toBe(true);
    expect(progressed.goalObjectives.filter((objective) => objective.goalRole === "primary").every((objective) => objective.complete)).toBe(true);
    expect(progressed.goalObjectives.filter((objective) => objective.goalRole === "mini").some((objective) => !objective.complete)).toBe(true);
    expect(generateSummary(progressed)).toContain("Mini-goals: Investor Starter");
  });

  it("migrates old single-goal saves into the goal stack shape", () => {
    const game = createNewGame({ seed: "old-save", goalId: "credit-builder" });
    const oldSave = { ...game } as any;
    delete oldSave.activeGoalIds;
    oldSave.goalObjectives = oldSave.goalObjectives.map(({ goalId, goalTitle, goalRole, ...objective }: any) => objective);
    localStorage.setItem(SAVE_KEY, JSON.stringify(oldSave));

    const loaded = loadGame();
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) throw new Error("Expected migrated save");
    expect(loaded.value.activeGoalIds).toEqual(["credit-builder"]);
    expect(loaded.value.goalObjectives.every((objective) => objective.goalId === "credit-builder")).toBe(true);
  });

  it("integrates merged-context goals and behavior badges into playable progress", () => {
    expect(goals.map((goal) => goal.id)).toEqual(expect.arrayContaining([
      "transportation-planner",
      "first-apartment-planner",
      "support-circle-builder",
      "math-in-real-life-master",
      "recovery-comeback"
    ]));
    expect(achievements.map((achievement) => achievement.id)).toEqual(expect.arrayContaining([
      "verified-first",
      "read-the-total",
      "did-the-math",
      "asked-for-help",
      "two-way-support"
    ]));

    const game = createNewGame({ goalId: "support-circle-builder" });
    const supported = {
      ...game,
      relationships: [
        ...game.relationships,
        { id: "friend", name: "Study Friend", role: "friend" as const, icon: "🤝", closeness: 55, support: 62, note: "Unlocked through a school choice." },
        { id: "mentor", name: "Career Mentor", role: "mentor" as const, icon: "🧭", closeness: 52, support: 64, note: "Unlocked through a future-planning choice." }
      ],
      flags: { ...game.flags, asksProgramSupport: true, usesSharedPlanning: true },
      stats: { ...game.stats, moneyKnowledge: 82, trustSafety: 78, discipline: 76 }
    };
    const progressed = checkGoalProgress(checkAchievements(supported));
    expect(progressed.achievements).toEqual(expect.arrayContaining(["asked-for-help", "two-way-support", "did-the-math", "verified-first"]));
    expect(progressed.goalObjectives.every((objective) => objective.complete)).toBe(true);
  });

  it("saves, loads, clears, and handles corrupt save data", () => {
    const game = createNewGame({ seed: "save" });
    expect(saveGame(game).ok).toBe(true);
    expect(loadGame().ok).toBe(true);
    clearGame();
    expect(loadGame()).toEqual({ ok: true, value: null });
    expect(() => resetGame()).not.toThrow();
    localStorage.setItem(SAVE_KEY, "{bad json");
    expect(loadGame().ok).toBe(false);
  });

  it("saves, loads, clears, and recovers from corrupt debug report data", () => {
    const result = saveDebugReport({
      id: "DBG123",
      createdAt: "2026-06-06T00:00:00.000Z",
      app: "MoneyLife Quest",
      issueType: "bug",
      description: "The debug message should be saved.",
      steps: "Open reporter and send.",
      contact: "",
      includeDiagnostics: false,
      status: "saved-local"
    });
    expect(result.ok).toBe(true);
    expect(loadDebugReports()).toHaveLength(1);
    expect(loadDebugReports()[0].description).toContain("debug message");
    clearDebugReports();
    expect(loadDebugReports()).toEqual([]);
    localStorage.setItem(DEBUG_REPORTS_KEY, "{bad json");
    expect(loadDebugReports()).toEqual([]);
  });
});
