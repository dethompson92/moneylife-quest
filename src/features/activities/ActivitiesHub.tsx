import { activities } from "./activityDefinitions";
import { Button } from "../../components/ui/Button";
import type { GameState } from "../../types/game";

export function ActivitiesHub({
  game,
  onRunActivity
}: {
  game: GameState;
  onRunActivity: (activityId: string) => void;
}) {
  const categories = Array.from(new Set(activities.map((activity) => activity.category)));
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Activities</h2>
        <p>Use actions between age-ups to steer your money life.</p>
      </div>
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
                    <strong>{activity.title}</strong>
                    <p>{activity.description}</p>
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
