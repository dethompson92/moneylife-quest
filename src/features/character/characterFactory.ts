import { avatarEmoji } from "../../data/avatars";
import { lastInitials, studentSafeNames } from "../../data/names";
import { createSeededRng, randomSeed, type Rng } from "../../lib/rng";
import type { Character, LifeStage } from "../../types/game";

export function getLifeStage(age: number): LifeStage {
  if (age < 14) return "middle-school";
  if (age < 18) return "high-school";
  if (age < 22) return "postsecondary";
  if (age < 30) return "early-career";
  return "adult";
}

export function createId(prefix: string): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Math.random().toString(36).slice(2)}`;
}

export function generateCharacter(rngOrSeed?: Rng | string, nickname?: string, avatar?: string): Character {
  const rng = typeof rngOrSeed === "string" || !rngOrSeed ? createSeededRng(rngOrSeed ?? randomSeed()) : rngOrSeed;
  const safeNickname = nickname?.trim().slice(0, 18);
  return {
    id: createId("character"),
    displayName:
      safeNickname ||
      `${rng.pick(studentSafeNames)} ${rng.pick(lastInitials)}`,
    avatarEmoji: avatar || rng.pick(avatarEmoji),
    age: 12,
    lifeStage: "middle-school",
    background: {
      allowanceAnnual: rng.nextInt(120, 360),
      familySupportLevel: rng.nextInt(1, 3) as 1 | 2 | 3,
      startingMoneyKnowledge: rng.nextInt(38, 56)
    }
  };
}
