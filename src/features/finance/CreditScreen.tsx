import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { TermSpotlight } from "../glossary/TermSpotlight";
import type { GameState } from "../../types/game";

export function CreditScreen({ game, onAction }: { game: GameState; onAction: (activityId: string) => void }) {
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Credit / Debt</h2>
        <p>Credit can help or hurt depending on payment habits and balances.</p>
      </div>
      <div className="detail-grid">
        <article><small>Credit Score</small><strong>{game.stats.creditScore ?? "No history"}</strong></article>
        <article><small>Total Debt</small><strong>{formatMoney(game.finances.debtTotal)}</strong></article>
        <article><small>Cash Available</small><strong>{formatMoney(game.finances.cash)}</strong></article>
      </div>
      <TermSpotlight termIds={["credit", "credit-score", "debt", "credit-card", "minimum-payment", "interest", "utilization"]} maxTerms={5} />
      <Button onClick={() => onAction("credit-pay")} disabled={game.finances.cash < 35 || game.finances.debtTotal <= 0}>
        Make Extra Debt Payment
      </Button>
    </section>
  );
}
