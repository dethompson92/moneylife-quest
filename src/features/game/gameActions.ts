import { scenarioEvents } from "../../data/scenarioPacks/middleSchoolCore";
import { defaultSettings } from "../../lib/storage";
import { createSeededRng, randomSeed } from "../../lib/rng";
import { createId, generateCharacter, getLifeStage } from "../character/characterFactory";
import { createSupportCircle } from "../character/supportCircle";
import { checkAchievements } from "../achievements/achievementEngine";
import { applyPassiveFinancialUpdates, getInitialFinances, getInitialStats, syncFinanceHistory } from "../finance/financeEngine";
import { getGoal } from "../goals/goalDefinitions";
import { evaluateGoalObjectives, goalCompleted } from "../goals/goalEngine";
import { selectNextEvent } from "../events/eventSelection";
import type { GameState, NewGameOptions, Topic } from "../../types/game";

export const allTopics: Topic[] = [
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

export function createNewGame(options: NewGameOptions = {}): GameState {
  const seed = options.seed ?? randomSeed();
  const rng = createSeededRng(seed);
  const character = generateCharacter(rng, options.nickname, options.avatarEmoji);
  const goal = getGoal(options.goalId ?? undefined);
  const now = new Date().toISOString();
  const state: GameState = {
    version: 1,
    id: createId("game"),
    status: "active",
    mode: options.mode ?? "quick-class",
    seed,
    rngState: rng.state(),
    turn: 0,
    character,
    activeGoalId: goal.id,
    activeTopicFilter: options.topicFilter?.length ? options.topicFilter : allTopics,
    stats: getInitialStats(character.background.startingMoneyKnowledge),
    finances: getInitialFinances(),
    relationships: createSupportCircle(rng),
    flags: {},
    completedEventIds: [],
    log: [
      {
        id: "start-log",
        turn: 0,
        age: 12,
        title: "New MoneyLife Quest",
        body: `${character.displayName} started a fictional money quest at age 12.`,
        topic: "money-values",
        createdAt: now
      }
    ],
    achievements: [],
    goalObjectives: goal.objectives.map((objective) => ({ ...objective, complete: false })),
    settings: defaultSettings,
    financeHistory: [],
    createdAt: now,
    updatedAt: now
  };
  return syncFinanceHistory(checkGoalProgress(state));
}

export function ageUp(state: GameState): GameState {
  if (state.pendingEventId || state.status !== "active") return state;
  let next: GameState = structuredClone(state);
  const rng = createSeededRng(next.rngState);
  next.turn += 1;
  next.character.age += getAgeIncrement(next);
  next.character.lifeStage = getLifeStage(next.character.age);
  next.pendingFeedback = undefined;
  next.pendingEffectSummary = undefined;
  next = applyPassiveFinancialUpdates(next, rng);
  next = checkGoalProgress(next);
  next = checkAchievements(next);
  next = syncFinanceHistory(next);
  const selected = selectNextEvent(next, scenarioEvents, rng);
  next.rngState = rng.state();
  if (selected) {
    next.pendingEventId = selected.id;
    next.status = "event-pending";
  } else {
    next.log = [
      {
        id: `quiet-year-${next.turn}-${Date.now()}`,
        turn: next.turn,
        age: next.character.age,
        title: "Steady Year",
        body: "Another year passed. You kept working on money habits and future choices.",
        topic: "money-values",
        createdAt: new Date().toISOString()
      },
      ...next.log
    ];
    next = checkEndConditions(next);
  }
  next.updatedAt = new Date().toISOString();
  return next;
}

export function getAgeIncrement(state: GameState): number {
  if (state.mode === "quick-class" || state.mode === "topic-practice") return 1;
  return 1;
}

export function checkGoalProgress(state: GameState): GameState {
  const next: GameState = structuredClone(state);
  next.goalObjectives = evaluateGoalObjectives(next);
  if (goalCompleted(next) && !next.flags.goalCompleted) {
    next.flags.goalCompleted = true;
    next.log = [
      {
        id: `goal-complete-${Date.now()}`,
        turn: next.turn,
        age: next.character.age,
        title: "Goal Complete",
        body: getGoal(next.activeGoalId).completionMessage,
        topic: getGoal(next.activeGoalId).relatedTopics[0],
        createdAt: new Date().toISOString()
      },
      ...next.log
    ];
  }
  return next;
}

export function checkEndConditions(state: GameState): GameState {
  const next: GameState = structuredClone(state);
  const quickDone = (next.mode === "quick-class" || next.mode === "topic-practice") && next.turn >= 10;
  const sandboxDone = next.mode === "full-sandbox" && next.character.age >= 35;
  if (quickDone || sandboxDone) {
    next.status = "ended";
    next.pendingEventId = undefined;
    next.endingReason = quickDone ? "Quick class mode complete" : "Sandbox milestone complete";
    if (!next.achievements.includes("reflection-ready")) next.achievements.push("reflection-ready");
  }
  return next;
}
