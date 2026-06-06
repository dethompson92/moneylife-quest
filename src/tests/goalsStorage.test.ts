import { describe, expect, it, beforeEach } from "vitest";
import { createNewGame, checkGoalProgress } from "../features/game/gameActions";
import { checkAchievements } from "../features/achievements/achievementEngine";
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
    expect(summary).toContain("Goal result");
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
