import type { GameState } from "../../types/game";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";

export function SupportCirclePanel({ game }: { game: GameState }) {
  return (
    <section className="support-panel" aria-label="Support circle">
      <h2>Support Circle</h2>
      <p className="support-panel__context">
        <strong>Context, not identity:</strong> {highlightGlossaryTerms("MoneyLife uses fictional support, access, and cost situations to show that life is not equal for everyone. It does not ask students to enter real ethnicity, sex, location, family income, or demographic identifiers.")}
      </p>
      <div className="support-list">
        {game.relationships.map((relationship) => (
          <article className="support-card" key={relationship.id}>
            <span className="support-card__icon" aria-hidden="true">{relationship.icon}</span>
            <div>
              <strong>{relationship.name}</strong>
              <small>{relationship.role}</small>
              <div className="support-meter" aria-label={`${relationship.name} closeness ${relationship.closeness} and support ${relationship.support}`}>
                <span style={{ width: `${relationship.closeness}%` }} />
                <span style={{ width: `${relationship.support}%` }} />
              </div>
              <p>{highlightGlossaryTerms(relationship.note)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
