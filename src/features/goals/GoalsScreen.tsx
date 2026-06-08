import { ArrowLeft } from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { achievements } from "../achievements/achievementDefinitions";
import { getActiveGoalIds, getGoal, getGoalConflictWarnings } from "./goalDefinitions";
import { getObjectivesForGoal } from "./goalEngine";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";

export function GoalsScreen({ game, onBack }: { game: GameState; onBack?: () => void }) {
  const activeGoalIds = getActiveGoalIds(game);
  const goal = getGoal(activeGoalIds[0]);
  const conflictWarnings = getGoalConflictWarnings(activeGoalIds);
  return (
    <section className="screen-panel">
      <div className="section-heading section-heading--split">
        <div>
          <h2>{highlightGlossaryTerms(goal.openEnded ? "Open Life / Achievements" : "Goals / Achievements")}</h2>
          <p>{highlightGlossaryTerms(goal.description)}</p>
        </div>
        {onBack ? <Button variant="secondary" icon={<ArrowLeft aria-hidden="true" />} onClick={onBack}>Back to Activities</Button> : null}
      </div>
      {goal.openEnded ? (
        <div className="objective-list objective-list--open">
          <div className="objective">
            <span aria-hidden="true">?</span>
            <span>{highlightGlossaryTerms("Set your own private win condition: more savings, less debt, better balance, stronger career options, or something else.")}</span>
          </div>
          <div className="objective">
            <span aria-hidden="true">?</span>
            <span>{highlightGlossaryTerms("Use age-up events and activities to see how everyday choices create future outcomes.")}</span>
          </div>
          <div className="objective">
            <span aria-hidden="true">?</span>
            <span>{highlightGlossaryTerms("Replay with a different personal goal and compare how your money life changes.")}</span>
          </div>
        </div>
      ) : (
        <div className="goal-stack">
          {activeGoalIds.map((goalId, index) => {
            const activeGoal = getGoal(goalId);
            const objectives = getObjectivesForGoal(game, goalId);
            return (
              <article className="goal-stack-card" key={goalId}>
                <div className="goal-stack-card__header">
                  <span>{index === 0 ? "Main Goal" : "Mini-Goal"}</span>
                  <strong>{highlightGlossaryTerms(activeGoal.title)}</strong>
                </div>
                <div className="objective-list">
                  {objectives.map((objective) => (
                    <div className={objective.complete ? "objective is-complete" : "objective"} key={`${goalId}-${objective.id}`}>
                      <span aria-hidden="true">{objective.complete ? "✓" : "○"}</span>
                      <span>{highlightGlossaryTerms(objective.label)}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
          {conflictWarnings.length ? (
            <div className="goal-conflict-list">
              {conflictWarnings.map((warning) => (
                <p key={warning}>{highlightGlossaryTerms(`Tradeoff: ${warning}`)}</p>
              ))}
            </div>
          ) : null}
        </div>
      )}
      <h3>Badges</h3>
      <div className="badge-grid">
        {achievements.map((achievement) => (
          <Badge key={achievement.id} id={achievement.id} locked={!game.achievements.includes(achievement.id)} />
        ))}
      </div>
    </section>
  );
}
