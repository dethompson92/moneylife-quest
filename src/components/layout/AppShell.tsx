import type { ReactNode } from "react";
import { WalletCards } from "lucide-react";
import { BottomNav } from "./BottomNav";
import type { Screen } from "../../app/routes";
import type { GameState } from "../../types/game";

export function AppShell({
  children,
  screen,
  game,
  onNavigate
}: {
  children: ReactNode;
  screen: Screen;
  game: GameState | null;
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" type="button" onClick={() => onNavigate("home")} aria-label="Go to home">
          <span className="brand__mark" aria-hidden="true">
            <WalletCards />
          </span>
          <span>
            <strong>MoneyLife Quest</strong>
            <small>Personal Finance Simulator</small>
          </span>
        </button>
        {game ? (
          <div className="topbar__player">
            <span className="avatar" aria-hidden="true">
              {game.character.avatarEmoji}
            </span>
            <span>
              <strong>{game.character.displayName}</strong>
              <small>Age {game.character.age} · Year {game.turn}</small>
            </span>
          </div>
        ) : null}
      </header>
      <main>{children}</main>
      {game ? <BottomNav current={screen} onNavigate={onNavigate} /> : null}
    </div>
  );
}
