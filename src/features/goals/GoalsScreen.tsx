import { Badge } from "../../components/ui/Badge";
import { achievements } from "../achievements/achievementDefinitions";
import { getGoal } from "./goalDefinitions";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";

export function GoalsScreen({ game }: { game: GameState }) {
  const goal = getGoal(game.activeGoalId);
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>{highlightGlossaryTerms("Goals / Achievements")}</h2>
        <p>{highlightGlossaryTerms(goal.description)}</p>
      </div>
      <div className="objective-list">
        {game.goalObjectives.map((objective) => (
          <div className={objective.complete ? "objective is-complete" : "objective"} key={objective.id}>
            <span aria-hidden="true">{objective.complete ? "✓" : "○"}</span>
            <span>{highlightGlossaryTerms(objective.label)}</span>
          </div>
        ))}
      </div>
      <h3>Badges</h3>
      <div className="badge-grid">
        {achievements.map((achievement) => (
          <Badge key={achievement.id} id={achievement.id} locked={!game.achievements.includes(achievement.id)} />
        ))}
      </div>
    </section>
  );
}
