import { Target } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { goals } from "./goalDefinitions";

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
        <h2>Choose Your Money Goal</h2>
        <p>Your goal changes which events and progress badges matter most.</p>
      </div>
      <div className="goal-grid">
        {goals.map((goal) => (
          <button
            type="button"
            className={`goal-card ${selectedGoal === goal.id ? "is-selected" : ""}`}
            key={goal.id}
            onClick={() => onSelect(goal.id)}
          >
            <Target aria-hidden="true" />
            <strong>{goal.title}</strong>
            <small>{goal.description}</small>
          </button>
        ))}
      </div>
      <Button onClick={onStart}>Start Life</Button>
    </section>
  );
}
