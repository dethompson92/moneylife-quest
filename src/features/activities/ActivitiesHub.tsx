import { activities } from "./activityDefinitions";
import { ChevronRight } from "lucide-react";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";
import type { Screen } from "../../app/routes";

type ActivityShortcut = {
  label: string;
  description: string;
  screen: Extract<Screen, "money" | "bank" | "credit" | "invest" | "protect" | "goals">;
};

const activityShortcuts: ActivityShortcut[] = [
  { label: "Budget", description: "Income, spending, and needs/wants", screen: "money" },
  { label: "Bank / Save", description: "Checking, savings, and alerts", screen: "bank" },
  { label: "Credit", description: "Debt, payments, and score habits", screen: "credit" },
  { label: "Invest", description: "Risk, time, and diversification", screen: "invest" },
  { label: "Protect", description: "Scams, identity, and insurance", screen: "protect" },
  { label: "Goals", description: "Badges and reflection progress", screen: "goals" }
];

const shortcutIcons: Record<ActivityShortcut["screen"], string> = {
  money: "📋",
  bank: "🏦",
  credit: "💳",
  invest: "📈",
  protect: "🛡",
  goals: "🏆"
};

const categoryIcons: Record<string, string> = {
  School: "🎓",
  Work: "💼",
  Bank: "🏦",
  Budget: "📋",
  Shop: "🛒",
  Credit: "💳",
  Save: "🐷",
  Invest: "📈",
  Protect: "🛡",
  Future: "🧭",
  Support: "🤝"
};

export function ActivitiesHub({
  game,
  onRunActivity,
  onNavigate
}: {
  game: GameState;
  onRunActivity: (activityId: string) => void;
  onNavigate: (screen: ActivityShortcut["screen"]) => void;
}) {
  const categories = Array.from(new Set(activities.map((activity) => activity.category)));
  return (
    <section className="screen-panel list-screen">
      <div className="section-heading">
        <h2>Activities</h2>
        <p>{highlightGlossaryTerms("Use actions between age-ups to steer your money life.")}</p>
      </div>
      <nav className="activity-shortcuts menu-row-list" aria-label="Activity section shortcuts">
        {activityShortcuts.map((shortcut) => (
          <button type="button" className="menu-row" key={shortcut.screen} onClick={() => onNavigate(shortcut.screen)}>
            <span className="menu-row__icon" aria-hidden="true">{shortcutIcons[shortcut.screen]}</span>
            <span className="menu-row__copy">
              <strong>{shortcut.label}</strong>
              <small>{shortcut.description}</small>
            </span>
            <ChevronRight aria-hidden="true" />
          </button>
        ))}
      </nav>
      <div className="activity-list">
        {categories.map((category) => (
          <section className="activity-section" key={category}>
            <h3>{category}</h3>
            {activities
              .filter((activity) => activity.category === category)
              .map((activity) => {
                const lockReason = activity.lockReason?.(game);
                return (
                  <article className={`menu-row activity-row${lockReason ? " is-locked" : ""}`} key={activity.id}>
                    <span className="menu-row__icon" aria-hidden="true">{categoryIcons[activity.category] ?? "💡"}</span>
                    <span className="menu-row__copy">
                      <strong>{highlightGlossaryTerms(activity.title)}</strong>
                      <small>{highlightGlossaryTerms(lockReason ?? activity.description)}</small>
                    </span>
                    <button type="button" className="menu-row__action" disabled={Boolean(lockReason)} onClick={() => onRunActivity(activity.id)} aria-label={`${lockReason ?? "Do activity"}: ${activity.title}`}>
                      <ChevronRight aria-hidden="true" />
                    </button>
                  </article>
                );
              })}
          </section>
        ))}
      </div>
    </section>
  );
}
