import { Lock, ChevronRight } from "lucide-react";
import type { Choice, GameState } from "../../types/game";
import { formatRequirement } from "../../features/events/requirementText";
import { requirementsMet } from "../../features/events/eventSelection";

export function ChoiceCard({
  choice,
  index,
  state,
  onChoose
}: {
  choice: Choice;
  index: number;
  state: GameState;
  onChoose: () => void;
}) {
  const locked = !requirementsMet(choice.requirements, state);
  return (
    <button className="choice-card" type="button" onClick={onChoose} disabled={locked}>
      <span className="choice-card__number">{index + 1}</span>
      <span className="choice-card__copy">
        <strong>{choice.label}</strong>
        {choice.description ? <small>{choice.description}</small> : null}
      </span>
      <span className="choice-card__effects">
        {locked ? (
          <small className="locked-text">
            <Lock aria-hidden="true" size={15} /> {formatRequirement(choice.requirements?.[0])}
          </small>
        ) : (
          <small className="choice-card__reveal">Effects revealed after you choose</small>
        )}
      </span>
      {!locked ? <ChevronRight aria-hidden="true" /> : null}
    </button>
  );
}
