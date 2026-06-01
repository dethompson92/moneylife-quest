import { createContext, useContext } from "react";
import type { GameState } from "../../types/game";

export type GameContextValue = {
  game: GameState | null;
  setGame: (state: GameState | null) => void;
};

export const GameContext = createContext<GameContextValue | null>(null);

export function useGameContext(): GameContextValue {
  const value = useContext(GameContext);
  if (!value) throw new Error("useGameContext must be used inside GameContext.Provider");
  return value;
}
