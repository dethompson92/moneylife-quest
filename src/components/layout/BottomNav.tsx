import { Activity, BookOpen, Home, PiggyBank, Settings, Trophy } from "lucide-react";
import type { Screen } from "../../app/routes";

const navItems: Array<{ screen: Screen; label: string; icon: typeof Home }> = [
  { screen: "dashboard", label: "Life", icon: Home },
  { screen: "activities", label: "Activities", icon: Activity },
  { screen: "money", label: "Money", icon: PiggyBank },
  { screen: "goals", label: "Goals", icon: Trophy },
  { screen: "teacher", label: "Teacher", icon: BookOpen },
  { screen: "settings", label: "Settings", icon: Settings }
];

export function BottomNav({ current, onNavigate }: { current: Screen; onNavigate: (screen: Screen) => void }) {
  return (
    <nav className="bottom-nav" aria-label="Main app navigation">
      {navItems.map((item) => {
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
