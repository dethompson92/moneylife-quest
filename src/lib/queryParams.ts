import type { GameMode, Topic } from "../types/game";

const topicMap: Record<string, Topic[]> = {
  all: [
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
  ],
  consumer: ["consumer-skills", "money-values"],
  budgeting: ["budgeting", "taxes", "money-values"],
  credit: ["credit"],
  saving: ["saving", "banking"],
  investing: ["investing"],
  protection: ["scams", "insurance"],
  career: ["career", "life-after-high-school"]
};

export function parseClassParams(search = window.location.search): {
  mode?: GameMode;
  seed?: string;
  goal?: string;
  topics?: Topic[];
  topicKey: string;
} {
  const params = new URLSearchParams(search);
  const modeParam = params.get("mode");
  const mode: GameMode | undefined =
    modeParam === "quick"
      ? "quick-class"
      : modeParam === "topic"
        ? "topic-practice"
        : modeParam === "full"
          ? "full-sandbox"
          : undefined;
  const topicKey = params.get("topic") ?? "all";
  return {
    mode,
    seed: params.get("seed") ?? undefined,
    goal: params.get("goal") ?? undefined,
    topics: topicMap[topicKey] ?? topicMap.all,
    topicKey
  };
}

export function buildClassLink({
  mode,
  topic,
  seed,
  goal
}: {
  mode: "quick" | "topic" | "full";
  topic: string;
  seed: string;
  goal?: string;
}): string {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("mode", mode);
  url.searchParams.set("topic", topic);
  if (seed.trim()) url.searchParams.set("seed", seed.trim());
  if (goal) url.searchParams.set("goal", goal);
  return url.toString();
}

export const topicOptions = Object.keys(topicMap);
