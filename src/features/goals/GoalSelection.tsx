import { Compass, Target } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { MAX_MINI_GOALS, getGoalConflictWarnings, goals } from "./goalDefinitions";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";

export function GoalSelection({
  selectedGoal,
  selectedMiniGoals,
  onSelect,
  onToggleMini,
  onStart
}: {
  selectedGoal: string;
  selectedMiniGoals: string[];
  onSelect: (goalId: string) => void;
  onToggleMini: (goalId: string) => void;
  onStart: () => void;
}) {
  const selectedGoalIds = [selectedGoal, ...selectedMiniGoals];
  const conflictWarnings = getGoalConflictWarnings(selectedGoalIds);
  const primaryGoal = goals.find((goal) => goal.id === selectedGoal) ?? goals[0];
  const miniGoalText = selectedMiniGoals.length
    ? `${selectedMiniGoals.length}/${MAX_MINI_GOALS} mini-goals selected`
    : `Optional: choose up to ${MAX_MINI_GOALS} mini-goals`;

  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>{highlightGlossaryTerms("Choose Your Money Goal or Free Play")}</h2>
        <p>{highlightGlossaryTerms("Pick one main goal, then add up to two mini-goals if you want useful tradeoffs. Choose Open Life for a sandbox run with no preset goal.")}</p>
      </div>
      <div className="goal-selection__summary" aria-live="polite">
        <strong>{highlightGlossaryTerms(`Main goal: ${primaryGoal.title}`)}</strong>
        <span>{highlightGlossaryTerms(primaryGoal.openEnded ? "Sandbox mode clears mini-goals so the run stays self-directed." : miniGoalText)}</span>
        {conflictWarnings.length ? (
          <div className="goal-conflict-list">
            {conflictWarnings.map((warning) => (
              <p key={warning}>{highlightGlossaryTerms(`Tradeoff: ${warning}`)}</p>
            ))}
          </div>
        ) : null}
      </div>
      <div className="goal-grid">
        {goals.map((goal) => {
          const isPrimary = selectedGoal === goal.id;
          const isMini = selectedMiniGoals.includes(goal.id);
          const miniDisabled =
            primaryGoal.openEnded ||
            goal.openEnded ||
            isPrimary ||
            (!isMini && selectedMiniGoals.length >= MAX_MINI_GOALS);
          return (
            <article
              className={`goal-card ${goal.openEnded ? "goal-card--open" : ""} ${isPrimary ? "is-selected" : ""} ${isMini ? "is-mini" : ""}`}
              key={goal.id}
              aria-label={`${goal.title} goal`}
            >
              {goal.openEnded ? <Compass aria-hidden="true" /> : <Target aria-hidden="true" />}
              <strong>{goal.title}</strong>
              <small>{highlightGlossaryTerms(goal.description)}</small>
              <div className="goal-card__meta">
                {isPrimary ? <span className="goal-card__tag">{highlightGlossaryTerms("Main goal")}</span> : null}
                {isMini ? <span className="goal-card__tag goal-card__tag--mini">{highlightGlossaryTerms("Mini-goal")}</span> : null}
                {goal.openEnded ? <span className="goal-card__tag">{highlightGlossaryTerms("Free play")}</span> : null}
              </div>
              <div className="goal-card__actions">
                <Button
                  variant={isPrimary ? "primary" : "secondary"}
                  onClick={() => onSelect(goal.id)}
                  aria-label={isPrimary ? `Selected main goal: ${goal.title}` : `Make ${goal.title} the main goal`}
                >
                  {isPrimary ? "Selected Main" : "Make Main"}
                </Button>
                {!goal.openEnded ? (
                  <Button
                    variant={isMini ? "primary" : "secondary"}
                    onClick={() => onToggleMini(goal.id)}
                    disabled={miniDisabled}
                    aria-label={isMini ? `Remove ${goal.title} mini-goal` : `Add ${goal.title} mini-goal`}
                  >
                    {isMini ? "Remove Mini" : "Add Mini"}
                  </Button>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
      <Button onClick={onStart}>{primaryGoal.openEnded ? "Start Open Life" : "Start Life"}</Button>
    </section>
  );
}
