import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";

export function CreditScreen({ game, onAction, onBack }: { game: GameState; onAction: (activityId: string) => void; onBack: () => void }) {
  return (
    <section className="screen-panel">
      <div className="section-heading section-heading--split">
        <div>
          <h2>{highlightGlossaryTerms("Credit / Debt")}</h2>
          <p>{highlightGlossaryTerms("Credit can help or hurt depending on payment habits and balances.")}</p>
        </div>
        <Button variant="secondary" icon={<ArrowLeft aria-hidden="true" />} onClick={onBack}>Back to Activities</Button>
      </div>
      <div className="detail-grid">
        <article><small>{highlightGlossaryTerms("Credit Score")}</small><strong>{game.stats.creditScore ?? "No history"}</strong></article>
        <article><small>{highlightGlossaryTerms("Total Debt")}</small><strong>{formatMoney(game.finances.debtTotal)}</strong></article>
        <article><small>{highlightGlossaryTerms("Cash Available")}</small><strong>{formatMoney(game.finances.cash)}</strong></article>
      </div>
      <Button onClick={() => onAction("credit-pay")} disabled={game.finances.cash < 35 || game.finances.debtTotal <= 0}>
        Make Extra Debt Payment
      </Button>
    </section>
  );
}
