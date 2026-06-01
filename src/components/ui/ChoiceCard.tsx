import { Lock, ChevronRight } from "lucide-react";
import type { Choice, GameState } from "../../types/game";
import { formatRequirement } from "../../features/events/requirementText";
import { requirementsMet } from "../../features/events/eventSelection";
import { summarizeEffects } from "../../features/finance/financeEngine";

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
  const preview = choice.outcomes[0] ? summarizeEffects(choice.outcomes[0].effects).slice(0, 2) : [];
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
          preview.map((effect) => <small key={effect}>{effect}</small>)
        )}
      </span>
      {!locked ? <ChevronRight aria-hidden="true" /> : null}
    </button>
  );
}
