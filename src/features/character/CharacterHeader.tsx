import { Compass, Target } from "lucide-react";
import { getGoal } from "../goals/goalDefinitions";
import { getGoalProgressPercent } from "../game/gameSelectors";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";

export function CharacterHeader({ game }: { game: GameState }) {
  const goal = getGoal(game.activeGoalId);
  const progress = getGoalProgressPercent(game);
  const isOpenLife = goal.openEnded === true;
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
        {isOpenLife ? <Compass aria-hidden="true" /> : <Target aria-hidden="true" />}
        <span>
          <small>{isOpenLife ? "Play style" : "Active goal"}</small>
          <strong>{highlightGlossaryTerms(goal.title)}</strong>
        </span>
        {isOpenLife ? (
          <span className="goal-strip__freeplay">{highlightGlossaryTerms("Open-ended")}</span>
        ) : (
          <div className="goal-strip__progress" aria-label={`${progress}% of goal objectives complete`}>
            <span style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    </section>
  );
}
