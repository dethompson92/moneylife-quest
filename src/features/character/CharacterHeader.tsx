import { Target } from "lucide-react";
import { getGoal } from "../goals/goalDefinitions";
import { getGoalProgressPercent } from "../game/gameSelectors";
import type { GameState } from "../../types/game";

export function CharacterHeader({ game }: { game: GameState }) {
  const goal = getGoal(game.activeGoalId);
  const progress = getGoalProgressPercent(game);
  return (
    <section className="character-strip" aria-label="Character and goal">
      <div className="character-strip__identity">
        <span className="avatar avatar--large" aria-hidden="true">
          {game.character.avatarEmoji}
        </span>
        <span>
          <strong>{game.character.displayName}</strong>
          <small>
            Age {game.character.age} · {game.character.lifeStage.replace(/-/g, " ")} · Year {game.turn}
          </small>
        </span>
      </div>
      <div className="goal-strip">
        <Target aria-hidden="true" />
        <span>
          <small>Active goal</small>
          <strong>{goal.title}</strong>
        </span>
        <div className="goal-strip__progress" aria-label={`${progress}% of goal objectives complete`}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
}
