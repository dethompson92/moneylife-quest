import { Clipboard, RotateCcw } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { getGoal } from "../goals/goalDefinitions";
import { calculateNetWorth } from "../finance/financeEngine";
import { generateSummary } from "./summaryGenerator";
import type { GameState } from "../../types/game";

export function SummaryScreen({
  game,
  onCopy,
  onRestart
}: {
  game: GameState;
  onCopy: (text: string) => void;
  onRestart: () => void;
}) {
  const summary = generateSummary(game);
  const goal = getGoal(game.activeGoalId);
  return (
    <section className="screen-panel summary-screen">
      <div className="section-heading">
        <h2>Final Reflection</h2>
        <p>{game.endingReason ?? "Your quick class playthrough is complete."}</p>
      </div>
      <div className="summary-stats">
        <article><small>Goal</small><strong>{goal.title}</strong></article>
        <article><small>Net Worth</small><strong>{formatMoney(calculateNetWorth(game.finances))}</strong></article>
        <article><small>Debt</small><strong>{formatMoney(game.finances.debtTotal)}</strong></article>
        <article><small>Credit</small><strong>{game.stats.creditScore ?? "No history"}</strong></article>
        <article><small>Safety</small><strong>{game.stats.trustSafety}/100</strong></article>
        <article><small>Badges</small><strong>{game.achievements.length}</strong></article>
      </div>
      <label className="summary-box">
        <span>Copyable student summary</span>
        <textarea readOnly value={summary} />
      </label>
      <div className="reflection-prompts">
        <h3>Discussion Prompts</h3>
        <p>Which choice had the biggest tradeoff?</p>
        <p>What would you try differently in a replay?</p>
        <p>How did your goal change your decisions?</p>
      </div>
      <div className="button-row">
        <Button icon={<Clipboard aria-hidden="true" />} onClick={() => onCopy(summary)}>Copy Summary</Button>
        <Button variant="secondary" icon={<RotateCcw aria-hidden="true" />} onClick={onRestart}>Play Again</Button>
      </div>
    </section>
  );
}
