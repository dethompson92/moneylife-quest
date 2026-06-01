export type Rng = {
  next: () => number;
  nextInt: (min: number, max: number) => number;
  pick: <T>(items: T[]) => T;
  state: () => number;
};

export function hashSeed(seed: string): number {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0 || 1;
}

export function randomSeed(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random()}`;
}

export function createSeededRng(seedOrState: string | number): Rng {
  let state =
    typeof seedOrState === "number" ? seedOrState >>> 0 || 1 : hashSeed(seedOrState);

  const next = () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 4294967296;
  };

  return {
    next,
    nextInt: (min, max) => Math.floor(next() * (max - min + 1)) + min,
    pick: (items) => items[Math.floor(next() * items.length)] ?? items[0],
    state: () => state
  };
}

export function weightedPick<T>(
  weightedItems: Array<{ item: T; weight: number }>,
  rng: Rng
): T | null {
  const total = weightedItems.reduce((sum, entry) => sum + Math.max(0, entry.weight), 0);
  if (total <= 0) return null;
  let cursor = rng.next() * total;
  for (const entry of weightedItems) {
    cursor -= Math.max(0, entry.weight);
    if (cursor <= 0) return entry.item;
  }
  return weightedItems[weightedItems.length - 1]?.item ?? null;
}
