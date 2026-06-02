import type { GameState } from "../../types/game";

export function SupportCirclePanel({ game }: { game: GameState }) {
  return (
    <section className="support-panel" aria-label="Support circle">
      <h2>Support Circle</h2>
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
              <p>{relationship.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
