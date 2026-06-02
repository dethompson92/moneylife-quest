import { useState, useEffect } from "react";
import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { TermSpotlight } from "../glossary/TermSpotlight";
import { calculateNetWorth } from "./financeEngine";
import type { GameState, Budget } from "../../types/game";

export function BudgetScreen({
  game,
  onPreset,
  onSaveCustomBudget,
  onNavigate
}: {
  game: GameState;
  onPreset: (preset: "balanced" | "save" | "fun") => void;
  onSaveCustomBudget: (budget: Budget) => void;
  onNavigate: (screen: "bank" | "credit" | "invest" | "protect") => void;
}) {
  const budget = game.finances.budget;
  const netIncome = Math.max(0, game.finances.annualIncome - game.finances.annualTaxes);
  const assetValue = game.finances.assets.reduce((sum, asset) => sum + asset.value, 0);

  // Local state for interactive budget allocation
  const [needs, setNeeds] = useState(budget.needsPercent);
  const [wants, setWants] = useState(budget.wantsPercent);
  const [savings, setSavings] = useState(budget.savingsPercent);
  const [giving, setGiving] = useState(budget.givingPercent);
  const [debt, setDebt] = useState(budget.debtPaymentPercent);

  // Sync local state when presets are selected (changing game.finances.budget)
  useEffect(() => {
    setNeeds(budget.needsPercent);
    setWants(budget.wantsPercent);
    setSavings(budget.savingsPercent);
    setGiving(budget.givingPercent);
    setDebt(budget.debtPaymentPercent);
  }, [budget]);

  const total = needs + wants + savings + giving + debt;
  const isBalanced = total === 100;

  const handleAdjust = (category: string, amount: number) => {
    if (category === "needs") setNeeds((prev) => Math.max(0, Math.min(100, prev + amount)));
    if (category === "wants") setWants((prev) => Math.max(0, Math.min(100, prev + amount)));
    if (category === "savings") setSavings((prev) => Math.max(0, Math.min(100, prev + amount)));
    if (category === "giving") setGiving((prev) => Math.max(0, Math.min(100, prev + amount)));
    if (category === "debt") setDebt((prev) => Math.max(0, Math.min(100, prev + amount)));
  };

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
      <div className="detail-grid">
        <article><small>Net Worth</small><strong>{formatMoney(calculateNetWorth(game.finances))}</strong></article>
        <article><small>Assets</small><strong>{formatMoney(assetValue)}</strong></article>
        <article><small>Investments</small><strong>{formatMoney(game.finances.investments)}</strong></article>
        <article><small>Debt</small><strong>{formatMoney(game.finances.debtTotal)}</strong></article>
      </div>
      <TermSpotlight termIds={["budget", "net-worth", "asset", "investment", "debt", "net-income", "tax", "needs", "wants"]} maxTerms={5} />
      
      <div className="budget-layout" style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        <div className="budget-meter">
          <strong>Annual take-home estimate</strong>
          <span>{formatMoney(netIncome)}</span>
          <small>Income minus estimated taxes</small>
        </div>

        <div className="budget-builder-card" style={{ padding: "20px", border: "1px solid var(--line)", borderRadius: "var(--radius)", backgroundColor: "#ffffff" }}>
          <h3 style={{ margin: "0 0 15px 0", color: "var(--navy)" }}>Interactive Budget Builder</h3>
          <p style={{ margin: "0 0 20px 0", fontSize: "0.9rem", color: "var(--muted)" }}>
            Adjust your allocation to equal <strong>exactly 100%</strong>. Aim for the <strong>50/30/20 rule</strong> (50% Needs, 30% Wants, 20% Savings/Giving/Debt).
          </p>

          <div className="budget-sliders-list" style={{ display: "grid", gap: "16px" }}>
            {[
              { id: "needs", label: "Needs", value: needs, setter: setNeeds, tip: "Housing, groceries, bills (target: ~50%)" },
              { id: "wants", label: "Wants", value: wants, setter: setWants, tip: "Dining out, entertainment, hobbies (target: ~30%)" },
              { id: "savings", label: "Savings", value: savings, setter: setSavings, tip: "Emergency fund, future goals (target: ~10-20%)" },
              { id: "giving", label: "Giving", value: giving, setter: setGiving, tip: "Charity, gifts, support (target: ~5%)" },
              { id: "debt", label: "Debt Paydown", value: debt, setter: setDebt, tip: "Extra loan/credit card payments" }
            ].map((item) => (
              <div key={item.id} style={{ display: "grid", gap: "6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong style={{ color: "var(--navy)" }}>{item.label}</strong>
                    <span style={{ display: "block", fontSize: "0.78rem", color: "var(--muted)" }}>{item.tip}</span>
                  </div>
                  <strong style={{ fontSize: "1.1rem", color: "var(--teal-dark)" }}>{item.value}%</strong>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => handleAdjust(item.id, -5)}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid var(--line)",
                      backgroundColor: "var(--surface)",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={item.value}
                    onChange={(e) => item.setter(parseInt(e.target.value, 10))}
                    style={{ flex: 1, accentColor: "var(--teal)" }}
                  />
                  <button
                    type="button"
                    onClick={() => handleAdjust(item.id, 5)}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid var(--line)",
                      backgroundColor: "var(--surface)",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              borderRadius: "var(--radius)",
              backgroundColor: isBalanced ? "#e8f8f4" : "#fff2f1",
              color: isBalanced ? "var(--teal-dark)" : "var(--coral)",
              fontWeight: 800,
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>Total Allocated:</span>
            <span style={{ fontSize: "1.2rem" }}>{total}% / 100%</span>
          </div>

          {!isBalanced && (
            <p style={{ margin: "8px 0 0 0", fontSize: "0.85rem", color: "var(--coral)", textAlign: "center" }}>
              {total > 100
                ? `You have over-allocated by ${total - 100}%. Reduce some categories.`
                : `You have ${100 - total}% left to allocate. Increase some categories.`}
            </p>
          )}

          <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="primary"
              disabled={!isBalanced}
              onClick={() =>
                onSaveCustomBudget({
                  needsPercent: needs,
                  wantsPercent: wants,
                  savingsPercent: savings,
                  givingPercent: giving,
                  debtPaymentPercent: debt
                })
              }
            >
              Save Custom Budget
            </Button>
          </div>
        </div>
      </div>

      <div className="button-row" style={{ marginTop: "20px" }}>
        <Button variant="secondary" onClick={() => onPreset("balanced")}>Balanced Preset</Button>
        <Button variant="secondary" onClick={() => onPreset("save")}>Aggressive Saving Preset</Button>
        <Button variant="secondary" onClick={() => onPreset("fun")}>Fun Flexible Preset</Button>
      </div>
    </section>
  );
}
