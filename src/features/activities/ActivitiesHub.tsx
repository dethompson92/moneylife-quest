import { activities, type Activity } from "./activityDefinitions";
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
  const activityRows = activities.map((activity) => ({
    activity,
    lockReason: activity.lockReason?.(game) ?? null
  }));
  const availableActivities = activityRows.filter((row) => !row.lockReason);
  const lockedActivities = activityRows.filter((row) => row.lockReason);
  const categories = Array.from(new Set(availableActivities.map((row) => row.activity.category)));
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
      <div className="activity-list" data-testid="available-activities">
        {categories.length ? (
          categories.map((category) => (
            <section className="activity-section" key={category}>
              <h3>{category}</h3>
              {availableActivities
                .filter((row) => row.activity.category === category)
                .map((row) => (
                  <AvailableActivityRow activity={row.activity} key={row.activity.id} onRunActivity={onRunActivity} />
                ))}
            </section>
          ))
        ) : (
          <p className="empty-note">No activities are available yet. Age up to unlock more choices.</p>
        )}
      </div>
      {lockedActivities.length ? (
        <details className="coming-later-activities">
          <summary>Coming Later ({lockedActivities.length})</summary>
          <p>These actions can unlock when your money, relationships, or life stage changes.</p>
          <div className="activity-list" data-testid="coming-later-activities">
            {lockedActivities.map(({ activity, lockReason }) => (
              <article className="menu-row activity-row is-locked" key={activity.id}>
                <span className="menu-row__icon" aria-hidden="true">{categoryIcons[activity.category] ?? "💡"}</span>
                <span className="menu-row__copy">
                  <strong>{highlightGlossaryTerms(activity.title)}</strong>
                  <small>{highlightGlossaryTerms(lockReason ?? "Available later")}</small>
                </span>
              </article>
            ))}
          </div>
        </details>
      ) : null}
    </section>
  );
}

function AvailableActivityRow({
  activity,
  onRunActivity
}: {
  activity: Activity;
  onRunActivity: (activityId: string) => void;
}) {
  return (
    <article className="menu-row activity-row" key={activity.id}>
      <span className="menu-row__icon" aria-hidden="true">{categoryIcons[activity.category] ?? "💡"}</span>
      <span className="menu-row__copy">
        <strong>{highlightGlossaryTerms(activity.title)}</strong>
        <small>{highlightGlossaryTerms(activity.description)}</small>
      </span>
      <button type="button" className="menu-row__action" onClick={() => onRunActivity(activity.id)} aria-label={`Do activity: ${activity.title}`}>
        <span>Do</span>
        <ChevronRight aria-hidden="true" />
      </button>
    </article>
  );
}
