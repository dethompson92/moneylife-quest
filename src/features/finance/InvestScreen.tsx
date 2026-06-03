import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";

export function InvestScreen({ game, onAction }: { game: GameState; onAction: (activityId: string) => void }) {
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>{highlightGlossaryTerms("Invest")}</h2>
        <p>{highlightGlossaryTerms("Educational simulation only, not financial advice. Use fake investments to learn risk and time.")}</p>
      </div>
      <div className="detail-grid">
        <article><small>{highlightGlossaryTerms("Investments")}</small><strong>{formatMoney(game.finances.investments)}</strong></article>
        <article><small>{highlightGlossaryTerms("Savings Cushion")}</small><strong>{formatMoney(game.finances.savings)}</strong></article>
        <article><small>{highlightGlossaryTerms("Knowledge")}</small><strong>{game.stats.moneyKnowledge}/100</strong></article>
      </div>
      <Button onClick={() => onAction("invest-small")} disabled={game.finances.savings < 120}>
        Invest $40 in a Diversified Fund
      </Button>
    </section>
  );
}
