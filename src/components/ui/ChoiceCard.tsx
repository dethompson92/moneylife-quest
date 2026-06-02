import { Lock, ChevronRight } from "lucide-react";
import type { Choice, GameState } from "../../types/game";
import { formatRequirement } from "../../features/events/requirementText";
import { requirementsMet } from "../../features/events/eventSelection";

function getReversibilityTag(label: string, description?: string) {
  const text = `${label} ${description || ""}`.toLowerCase();
  if (
    text.includes("loan") ||
    text.includes("contract") ||
    text.includes("lease") ||
    text.includes("borrow") ||
    text.includes("finance") ||
    text.includes("debt") ||
    text.includes("sign") ||
    text.includes("agreement")
  ) {
    return {
      type: "permanent",
      label: "Can't Undo / Debt",
      color: "#ffe3e0",
      textColor: "#d9381e"
    };
  }
  if (
    text.includes("subscription") ||
    text.includes("recurring") ||
    text.includes("membership") ||
    text.includes("insurance") ||
    text.includes("auto-pay") ||
    text.includes("premium")
  ) {
    return {
      type: "hard",
      label: "Hard to Undo (Recurring)",
      color: "#fff3d6",
      textColor: "#b25e00"
    };
  }
  if (
    text.includes("cash") ||
    text.includes("snack") ||
    text.includes("one-off") ||
    text.includes("one-time") ||
    text.includes("buy") ||
    text.includes("purchase") ||
    text.includes("save") ||
    text.includes("spend") ||
    text.includes("donate")
  ) {
    return {
      type: "easy",
      label: "Easy to Undo (Cash / One-time)",
      color: "#d9f3ef",
      textColor: "#0f9d8a"
    };
  }
  return null;
}

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
  const tag = getReversibilityTag(choice.label, choice.description);

  return (
    <button className="choice-card" type="button" onClick={onChoose} disabled={locked}>
      <span className="choice-card__number">{index + 1}</span>
      <span className="choice-card__copy">
        <strong>{choice.label}</strong>
        {choice.description ? <small>{choice.description}</small> : null}
        {tag && (
          <span
            className={`reversibility-tag reversibility-tag--${tag.type}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "0.72rem",
              fontWeight: 800,
              marginTop: "6px",
              width: "fit-content",
              backgroundColor: tag.color,
              color: tag.textColor,
              border: `1px solid ${tag.textColor}33`
            }}
          >
            {tag.label}
          </span>
        )}
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
