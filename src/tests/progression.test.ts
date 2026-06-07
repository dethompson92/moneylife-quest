import { beforeEach, describe, expect, it } from "vitest";
import { achievements } from "../features/achievements/achievementDefinitions";
import { createNewGame } from "../features/game/gameActions";
import { buildProgressionSummary } from "../features/progression/progressionEngine";
import { MUSEUM_KEY, loadMuseumRunCards, saveMuseumRunCard } from "../features/progression/progressionStorage";
import { generateSummary } from "../features/summary/summaryGenerator";
import type { GameState } from "../types/game";

describe("meta-progression", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("derives a financial identity, values, ribbons, and mastery maps from a run", () => {
    const game = createProgressionGame();
    const progression = buildProgressionSummary(game);

    expect(progression.archetype.title).toMatch(/The /);
    expect(progression.identityScores).toHaveLength(8);
    expect(progression.identityScores[0].score).toBeGreaterThanOrEqual(progression.identityScores[1].score);
    expect(progression.topValues).toHaveLength(3);
    expect(progression.ribbons.map((ribbon) => ribbon.id)).toEqual(expect.arrayContaining(["steady-anchor", "digital-shield"]));
    expect(progression.masteryMaps.some((map) => map.completedCount > 0)).toBe(true);
    expect(progression.nextRunSuggestion.length).toBeGreaterThan(12);
  });

  it("adds progression language to the copyable final reflection", () => {
    const summary = generateSummary(createProgressionGame());

    expect(summary).toContain("Financial identity:");
    expect(summary).toContain("Top values:");
    expect(summary).toContain("Ribbons:");
    expect(summary).toContain("Mastery map progress:");
    expect(summary).toContain("net worth is a useful number");
  });

  it("stores completed run cards locally without student contact or sensitive identity fields", () => {
    const card = buildProgressionSummary(createProgressionGame()).museumCard;
    const saved = saveMuseumRunCard(card);
    const savedAgain = saveMuseumRunCard({ ...card, biggestLesson: "Updated lesson." });

    expect(saved).toHaveLength(1);
    expect(savedAgain).toHaveLength(1);
    expect(loadMuseumRunCards()[0].biggestLesson).toBe("Updated lesson.");

    const storedRaw = localStorage.getItem(MUSEUM_KEY) ?? "";
    expect(storedRaw).not.toContain("email");
    expect(storedRaw).not.toContain("phone");
    expect(storedRaw).not.toContain("address");
    expect(storedRaw).not.toContain("studentName");
  });

  it("recovers from corrupt museum storage", () => {
    localStorage.setItem(MUSEUM_KEY, "{bad json");
    expect(loadMuseumRunCards()).toEqual([]);
  });
});

function createProgressionGame(): GameState {
  const knownAchievements = new Set(achievements.map((achievement) => achievement.id));
  const achievementIds = [
    "first-cushion",
    "shock-absorber",
    "read-the-total",
    "verified-first",
    "security-shield",
    "diversified",
    "long-game-investor",
    "worth-not-self-worth",
    "reflection-ready"
  ].filter((id) => knownAchievements.has(id));

  return {
    ...createNewGame({ seed: "progression", goalId: "balanced-life" }),
    status: "ended",
    turn: 10,
    endingReason: "Quick class mode complete",
    achievements: achievementIds,
    flags: {
      autoSaveOn: true,
      bankAlerts: true,
      investingPlan: true,
      verifiesSources: true
    },
    stats: {
      wellbeing: 78,
      moneyKnowledge: 84,
      discipline: 82,
      trustSafety: 88,
      opportunity: 70,
      creditScore: 690
    },
    finances: {
      ...createNewGame({ seed: "progression-finances" }).finances,
      cash: 120,
      checking: 80,
      savings: 640,
      investments: 420,
      debtTotal: 120
    }
  };
}
