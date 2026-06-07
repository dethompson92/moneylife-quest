import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";

export function BankScreen({ game, onAction, onBack }: { game: GameState; onAction: (activityId: string) => void; onBack: () => void }) {
  return (
    <section className="screen-panel">
      <div className="section-heading section-heading--split">
        <div>
          <h2>{highlightGlossaryTerms("Bank / Save")}</h2>
          <p>{highlightGlossaryTerms("Separate spending money from goal money.")}</p>
        </div>
        <Button variant="secondary" icon={<ArrowLeft aria-hidden="true" />} onClick={onBack}>Back to Activities</Button>
      </div>
      <div className="detail-grid">
        <article><small>{highlightGlossaryTerms("Checking")}</small><strong>{formatMoney(game.finances.checking)}</strong></article>
        <article><small>{highlightGlossaryTerms("Savings")}</small><strong>{formatMoney(game.finances.savings)}</strong></article>
        <article><small>{highlightGlossaryTerms("Emergency Goal")}</small><strong>{Math.min(100, Math.round((game.finances.savings / 500) * 100))}%</strong></article>
      </div>
      <div className="button-row">
        <Button onClick={() => onAction("save-transfer")} disabled={game.finances.cash < 25}>Transfer $25 to Savings</Button>
        <Button variant="secondary" onClick={() => onAction("bank-alert")}>Turn On Alerts</Button>
      </div>
    </section>
  );
}
