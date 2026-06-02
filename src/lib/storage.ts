import type { GameSettings, GameState, StorageResult } from "../types/game";
import { createSeededRng } from "./rng";
import { createSupportCircle } from "../features/character/supportCircle";

export const SAVE_KEY = "moneylife.save.v1";
export const SETTINGS_KEY = "moneylife.settings.v1";
export const CURRENT_SAVE_VERSION = 1;

export const defaultSettings: GameSettings = {
  reducedMotion: false,
  highContrast: false,
  textSize: "standard"
};

export function saveGame(state: GameState): StorageResult<GameState> {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return { ok: true, value: state };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Save failed" };
  }
}

export function loadGame(): StorageResult<GameState> {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return { ok: true, value: null };
    const parsed = JSON.parse(raw) as GameState;
    if (!parsed || parsed.version !== CURRENT_SAVE_VERSION || !parsed.character || !parsed.finances) {
      return { ok: false, error: "Saved game is from an unsupported version." };
    }
    if (!parsed.relationships?.length) {
      parsed.relationships = createSupportCircle(createSeededRng(parsed.seed ?? parsed.id));
    }
    return { ok: true, value: parsed };
  } catch {
    return { ok: false, error: "Saved game could not be read." };
  }
}

export function clearGame(): void {
  localStorage.removeItem(SAVE_KEY);
}

export function resetGame(): void {
  clearGame();
}

export function saveSettings(settings: GameSettings): StorageResult<GameSettings> {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    return { ok: true, value: settings };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Settings save failed" };
  }
}

export function loadSettings(): GameSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...defaultSettings, ...(JSON.parse(raw) as Partial<GameSettings>) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}
