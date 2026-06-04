import type { ReactNode } from "react";
import { Menu, WalletCards } from "lucide-react";
import { BottomNav } from "./BottomNav";
import { formatMoney } from "../../lib/formatMoney";
import type { Screen } from "../../app/routes";
import type { GameState } from "../../types/game";

const standaloneScreens: Screen[] = ["home", "setup", "goal-select", "teacher", "privacy"];

export function AppShell({
  children,
  screen,
  game,
  onNavigate,
  onAgeUp
}: {
  children: ReactNode;
  screen: Screen;
  game: GameState | null;
  onNavigate: (screen: Screen) => void;
  onAgeUp: () => void;
}) {
  const isGameActive = Boolean(game && !standaloneScreens.includes(screen));
  return (
    <div className={`app-shell${isGameActive ? " app-shell--game" : ""}`}>
      <header className={`topbar${isGameActive ? " topbar--game" : ""}`}>
        <button className="brand" type="button" onClick={() => onNavigate("home")} aria-label="Go to home">
          <span className="brand__mark" aria-hidden="true">
            {isGameActive ? <Menu /> : <WalletCards />}
          </span>
          <span>
            <strong>MoneyLife Quest</strong>
            <small>{isGameActive ? "Money simulation" : "Personal Finance Simulator"}</small>
          </span>
        </button>
        {isGameActive && game ? (
          <div className="topbar__balance" aria-label="Current bank balance">
            <strong>{formatMoney(game.finances.cash + game.finances.checking)}</strong>
            <small>Bank Balance</small>
          </div>
        ) : (
          <div className="topbar__player">
            <span>
              <strong>School-safe</strong>
              <small>No ads, no logins</small>
            </span>
          </div>
        )}
      </header>
      <main className={isGameActive ? "game-surface" : ""}>{children}</main>
      {isGameActive && game ? <BottomNav current={screen} status={game.status} onNavigate={onNavigate} onAgeUp={onAgeUp} /> : null}
    </div>
  );
}
