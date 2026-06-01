import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import type { GameState } from "../../types/game";

export function InvestScreen({ game, onAction }: { game: GameState; onAction: (activityId: string) => void }) {
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Invest</h2>
        <p>Educational simulation only, not financial advice. Use fake investments to learn risk and time.</p>
      </div>
      <div className="detail-grid">
        <article><small>Investments</small><strong>{formatMoney(game.finances.investments)}</strong></article>
        <article><small>Savings Cushion</small><strong>{formatMoney(game.finances.savings)}</strong></article>
        <article><small>Knowledge</small><strong>{game.stats.moneyKnowledge}/100</strong></article>
      </div>
      <Button onClick={() => onAction("invest-small")} disabled={game.finances.savings < 120}>
        Invest $40 in a Diversified Fund
      </Button>
    </section>
  );
}
