import { Activity, Home, PiggyBank, Plus, Settings, Trophy } from "lucide-react";
import type { Screen } from "../../app/routes";
import type { GameState } from "../../types/game";

const navItems: Array<{ screen: Screen; label: string; icon: typeof Home }> = [
  { screen: "dashboard", label: "Life", icon: Home },
  { screen: "money", label: "Money", icon: PiggyBank },
  { screen: "activities", label: "Activities", icon: Activity },
  { screen: "goals", label: "Badges", icon: Trophy },
  { screen: "settings", label: "More", icon: Settings }
];

export function BottomNav({
  current,
  status,
  onNavigate,
  onAgeUp
}: {
  current: Screen;
  status: GameState["status"];
  onNavigate: (screen: Screen) => void;
  onAgeUp: () => void;
}) {
  const ageLabel = status === "event-pending" ? "Choose Event" : status === "ended" ? "Summary" : "Age Up";
  return (
    <nav className="bottom-nav" aria-label="Main app navigation">
      {navItems.slice(0, 2).map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.screen}
            type="button"
            className={current === item.screen ? "is-active" : ""}
            onClick={() => onNavigate(item.screen)}
          >
            <Icon aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        );
      })}
      <button
        type="button"
        className="bottom-nav__age"
        onClick={onAgeUp}
        disabled={status !== "active"}
      >
        <Plus aria-hidden="true" />
        <span>{ageLabel}</span>
      </button>
      {navItems.slice(2).map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.screen}
            type="button"
            className={current === item.screen ? "is-active" : ""}
            onClick={() => onNavigate(item.screen)}
          >
            <Icon aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
