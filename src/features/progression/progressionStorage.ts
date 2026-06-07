import type { MuseumRunCard } from "./progressionTypes";

export const MUSEUM_KEY = "moneylife.museum.v1";
const MAX_MUSEUM_CARDS = 12;

export function loadMuseumRunCards(): MuseumRunCard[] {
  try {
    const raw = localStorage.getItem(MUSEUM_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isMuseumRunCard).slice(0, MAX_MUSEUM_CARDS);
  } catch {
    return [];
  }
}

export function saveMuseumRunCard(card: MuseumRunCard): MuseumRunCard[] {
  const existing = loadMuseumRunCards();
  const existingIndex = existing.findIndex((item) => item.id === card.id);
  const normalized = {
    ...card,
    runNumber: existingIndex >= 0 ? existing[existingIndex].runNumber : existing.length + 1
  };
  const next = existingIndex >= 0
    ? existing.map((item) => (item.id === card.id ? normalized : item))
    : [normalized, ...existing].slice(0, MAX_MUSEUM_CARDS);

  localStorage.setItem(MUSEUM_KEY, JSON.stringify(next));
  return next;
}

export function clearMuseumRunCards(): void {
  localStorage.removeItem(MUSEUM_KEY);
}

function isMuseumRunCard(value: unknown): value is MuseumRunCard {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<MuseumRunCard>;
  return (
    typeof item.id === "string" &&
    typeof item.completedAt === "string" &&
    typeof item.runNumber === "number" &&
    typeof item.primaryGoalTitle === "string" &&
    typeof item.archetypeTitle === "string" &&
    Array.isArray(item.ribbonTitles) &&
    Array.isArray(item.topValues) &&
    Array.isArray(item.strongestStats) &&
    Array.isArray(item.keyAchievements) &&
    typeof item.biggestLesson === "string" &&
    typeof item.nextRunSuggestion === "string"
  );
}
