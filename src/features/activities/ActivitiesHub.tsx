import { activities } from "./activityDefinitions";
import { Button } from "../../components/ui/Button";
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
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Activities</h2>
        <p>{highlightGlossaryTerms("Use actions between age-ups to steer your money life.")}</p>
      </div>
      <nav className="activity-shortcuts" aria-label="Activity section shortcuts">
        {activityShortcuts.map((shortcut) => (
          <button type="button" key={shortcut.screen} onClick={() => onNavigate(shortcut.screen)}>
            <strong>{shortcut.label}</strong>
            <span>{shortcut.description}</span>
          </button>
        ))}
      </nav>
      <div className="activity-grid">
        {categories.map((category) => (
          <div className="activity-column" key={category}>
            <h3>{category}</h3>
            {activities
              .filter((activity) => activity.category === category)
              .map((activity) => {
                const lockReason = activity.lockReason?.(game);
                return (
                  <article className="activity-card" key={activity.id}>
                    <strong>{highlightGlossaryTerms(activity.title)}</strong>
                    <p>{highlightGlossaryTerms(activity.description)}</p>
                    <Button variant="secondary" disabled={Boolean(lockReason)} onClick={() => onRunActivity(activity.id)}>
                      {lockReason ?? "Do Activity"}
                    </Button>
                  </article>
                );
              })}
          </div>
        ))}
      </div>
    </section>
  );
}
