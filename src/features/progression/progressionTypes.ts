import type { GameState } from "../../types/game";

export type IdentityDimension =
  | "planner"
  | "explorer"
  | "helper"
  | "investigator"
  | "builder"
  | "balancer"
  | "protector"
  | "reflector";

export type ValueTag =
  | "security"
  | "growth"
  | "freedom"
  | "community"
  | "learning"
  | "balance"
  | "creativity"
  | "service";

export type IdentityScore = {
  dimension: IdentityDimension;
  label: string;
  score: number;
};

export type IdentityArchetype = {
  id: string;
  title: string;
  primaryDimension: IdentityDimension;
  secondaryDimension?: IdentityDimension;
  description: string;
  strengths: string[];
  growthEdge: string;
  reflectionPrompt: string;
};

export type ValueScore = {
  tag: ValueTag;
  label: string;
  score: number;
};

export type ProgressionRibbon = {
  id: string;
  title: string;
  description: string;
};

export type MasteryNodeDefinition = {
  id: string;
  title: string;
  description: string;
  achievementIds?: string[];
  flags?: string[];
  statsAtLeast?: Partial<Record<keyof GameState["stats"], number>>;
  moneyAtLeast?: Partial<Record<keyof GameState["finances"], number>>;
};

export type MasteryMapDefinition = {
  id: string;
  title: string;
  description: string;
  ribbonTitle: string;
  nodes: MasteryNodeDefinition[];
};

export type MasteryNodeProgress = MasteryNodeDefinition & {
  complete: boolean;
};

export type MasteryMapProgress = Omit<MasteryMapDefinition, "nodes"> & {
  nodes: MasteryNodeProgress[];
  completedCount: number;
  totalCount: number;
  complete: boolean;
};

export type MuseumRunCard = {
  id: string;
  completedAt: string;
  runNumber: number;
  primaryGoalTitle: string;
  archetypeTitle: string;
  ribbonTitles: string[];
  topValues: ValueTag[];
  strongestStats: string[];
  keyAchievements: string[];
  biggestLesson: string;
  nextRunSuggestion: string;
};

export type ProgressionSummary = {
  identityScores: IdentityScore[];
  archetype: IdentityArchetype;
  topValues: ValueScore[];
  ribbons: ProgressionRibbon[];
  masteryMaps: MasteryMapProgress[];
  museumCard: MuseumRunCard;
  nextRunSuggestion: string;
};
