import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import type { GameState } from "../../types/game";

export function BudgetScreen({ game, onPreset, onNavigate }: { game: GameState; onPreset: (preset: "balanced" | "save" | "fun") => void; onNavigate: (screen: "bank" | "credit" | "invest" | "protect") => void }) {
  const budget = game.finances.budget;
  const netIncome = Math.max(0, game.finances.annualIncome - game.finances.annualTaxes);
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Money Plan</h2>
        <p>Use simple percentages so the numbers stay readable in class.</p>
      </div>
      <div className="money-tabs">
        <Button variant="secondary" onClick={() => onNavigate("bank")}>Bank / Save</Button>
        <Button variant="secondary" onClick={() => onNavigate("credit")}>Credit / Debt</Button>
        <Button variant="secondary" onClick={() => onNavigate("invest")}>Invest</Button>
        <Button variant="secondary" onClick={() => onNavigate("protect")}>Protect</Button>
      </div>
      <div className="budget-layout">
        <div className="budget-meter">
          <strong>Annual take-home estimate</strong>
          <span>{formatMoney(netIncome)}</span>
          <small>Income minus estimated taxes</small>
        </div>
        <div className="budget-list">
          {[
            ["Needs", budget.needsPercent],
            ["Wants", budget.wantsPercent],
            ["Savings", budget.savingsPercent],
            ["Giving", budget.givingPercent],
            ["Debt", budget.debtPaymentPercent]
          ].map(([label, value]) => (
            <div className="budget-row" key={label}>
              <span>{label}</span>
              <div><span style={{ width: `${value}%` }} /></div>
              <strong>{value}%</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="button-row">
        <Button variant="secondary" onClick={() => onPreset("balanced")}>Balanced</Button>
        <Button variant="secondary" onClick={() => onPreset("save")}>Aggressive Saving</Button>
        <Button variant="secondary" onClick={() => onPreset("fun")}>Fun Flexible</Button>
      </div>
    </section>
  );
}
