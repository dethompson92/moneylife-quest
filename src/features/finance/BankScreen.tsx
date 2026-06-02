import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { TermSpotlight } from "../glossary/TermSpotlight";
import type { GameState } from "../../types/game";

export function BankScreen({ game, onAction }: { game: GameState; onAction: (activityId: string) => void }) {
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Bank / Save</h2>
        <p>Separate spending money from goal money.</p>
      </div>
      <div className="detail-grid">
        <article><small>Checking</small><strong>{formatMoney(game.finances.checking)}</strong></article>
        <article><small>Savings</small><strong>{formatMoney(game.finances.savings)}</strong></article>
        <article><small>Emergency Goal</small><strong>{Math.min(100, Math.round((game.finances.savings / 500) * 100))}%</strong></article>
      </div>
      <TermSpotlight termIds={["checking", "savings-account", "saving", "emergency-fund", "deposit", "fee", "overdraft"]} maxTerms={5} />
      <div className="button-row">
        <Button onClick={() => onAction("save-transfer")} disabled={game.finances.cash < 25}>Transfer $25 to Savings</Button>
        <Button variant="secondary" onClick={() => onAction("bank-alert")}>Turn On Alerts</Button>
      </div>
    </section>
  );
}
