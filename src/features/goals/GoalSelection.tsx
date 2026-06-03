import { Compass, Target } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { goals } from "./goalDefinitions";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";

export function GoalSelection({
  selectedGoal,
  onSelect,
  onStart
}: {
  selectedGoal: string;
  onSelect: (goalId: string) => void;
  onStart: () => void;
}) {
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>{highlightGlossaryTerms("Choose Your Money Goal or Free Play")}</h2>
        <p>{highlightGlossaryTerms("Pick a preset challenge, or choose Open Life to play without a set goal and make your own path.")}</p>
      </div>
      <div className="goal-grid">
        {goals.map((goal) => (
          <button
            type="button"
            className={`goal-card ${goal.openEnded ? "goal-card--open" : ""} ${selectedGoal === goal.id ? "is-selected" : ""}`}
            key={goal.id}
            onClick={() => onSelect(goal.id)}
            aria-pressed={selectedGoal === goal.id}
          >
            {goal.openEnded ? <Compass aria-hidden="true" /> : <Target aria-hidden="true" />}
            <strong>{goal.title}</strong>
            <small>{goal.description}</small>
            {goal.openEnded && <span className="goal-card__tag">{highlightGlossaryTerms("Free play")}</span>}
          </button>
        ))}
      </div>
      <Button onClick={onStart}>{selectedGoal === "open-life" ? "Start Open Life" : "Start Life"}</Button>
    </section>
  );
}
