import { useMemo, useState } from "react";
import { ArrowLeft, TrendingUp, ShieldCheck, PiggyBank, AlertCircle, DollarSign, Info } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { GameState } from "../../types/game";

export function NetWorthScreen({
  game,
  onNavigate,
  onBack
}: {
  game: GameState;
  onNavigate: (screen: "money" | "bank" | "credit" | "invest" | "protect") => void;
  onBack: () => void;
}) {
  const history = game.financeHistory || [];
  const currentSavings = game.finances.savings;

  // Liquidity Evaluation
  const liquidityStatus = useMemo(() => {
    if (currentSavings < 200) {
      return {
        label: "Vulnerable",
        color: "var(--coral)",
        bgColor: "#fff2f1",
        description: "Your emergency buffer is low. A single surprise repair or cash shortfall will convert straight into high-interest debt, dragging down your net worth."
      };
    } else if (currentSavings < 500) {
      return {
        label: "Stable",
        color: "var(--navy)",
        bgColor: "#f1f5f9",
        description: "You have built a moderate cushion. You can absorb small costs, but strive to reach the $500 capstone emergency target for true financial resilience."
      };
    } else {
      return {
        label: "Strong",
        color: "var(--teal-dark)",
        bgColor: "#e8f8f4",
        description: "Outstanding! You have hit the $500 target. This cushion acts as a shield, letting you absorb large life twists without having to borrow or stress."
      };
    }
  }, [currentSavings]);

  // SVG Chart Computations
  const chartWidth = 500;
  const chartHeight = 220;
  const paddingX = 40;
  const paddingY = 30;

  const chartData = useMemo(() => {
    if (history.length === 0) return null;
    
    const ages = history.map((h) => h.age);
    const values = history.map((h) => h.netWorth);

    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];
    const ageRange = maxAge === minAge ? 1 : maxAge - minAge;

    const maxVal = Math.max(...values, 200);
    const minVal = Math.min(...values, 0);
    const valRange = maxVal === minVal ? 1 : maxVal - minVal;

    const points = history.map((h, i) => {
      const x = paddingX + ((h.age - minAge) / ageRange) * (chartWidth - paddingX * 2);
      const y = chartHeight - paddingY - ((h.netWorth - minVal) / valRange) * (chartHeight - paddingY * 2);
      return { x, y, age: h.age, value: h.netWorth };
    });

    // Construct path commands
    let linePath = "";
    let areaPath = "";

    if (points.length > 0) {
      linePath = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map((p) => `L ${p.x} ${p.y}`).join(" ");
      
      const bottomY = chartHeight - paddingY;
      areaPath = `${linePath} L ${points[points.length - 1].x} ${bottomY} L ${points[0].x} ${bottomY} Z`;
    }

    return {
      points,
      linePath,
      areaPath,
      minAge,
      maxAge,
      minVal,
      maxVal
    };
  }, [history]);

  const [hoveredPoint, setHoveredPoint] = useState<{ age: number; value: number; x: number; y: number } | null>(null);

  return (
    <section className="screen-panel net-worth-screen" style={{ position: "relative" }}>
      <div className="section-heading section-heading--split">
        <div>
          <h2>{highlightGlossaryTerms("Net Worth & Trends")}</h2>
          <p>{highlightGlossaryTerms("Monitor your assets minus liabilities over the years to track strategy impact.")}</p>
        </div>
        <Button variant="secondary" icon={<ArrowLeft aria-hidden="true" />} onClick={onBack}>Back to Activities</Button>
      </div>

      <div className="money-tabs">
        <Button variant="secondary" onClick={() => onNavigate("money")}>Money Plan</Button>
        <Button variant="secondary" onClick={() => onNavigate("bank")}>Bank / Save</Button>
        <Button variant="secondary" onClick={() => onNavigate("credit")}>Credit / Debt</Button>
        <Button variant="secondary" onClick={() => onNavigate("invest")}>Invest</Button>
        <Button variant="secondary" onClick={() => onNavigate("protect")}>Protect</Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", marginTop: "20px" }}>
        {/* SVG Graph Card */}
        <div className="dashboard-card" style={{ padding: "20px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <TrendingUp size={20} className="text-teal" />
              <span>{highlightGlossaryTerms("Net Worth Over Time")}</span>
            </h3>
            {hoveredPoint && (
              <span style={{ fontSize: "0.85rem", background: "var(--navy)", color: "white", padding: "4px 8px", borderRadius: "4px" }}>
                Age {hoveredPoint.age}: <strong>{formatMoney(hoveredPoint.value)}</strong>
              </span>
            )}
          </div>

          {chartData ? (
            <div style={{ width: "100%", overflowX: "auto" }}>
              <svg 
                viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1={paddingX} y1={paddingY} x2={chartWidth - paddingX} y2={paddingY} stroke="var(--line)" strokeDasharray="3,3" />
                <line x1={paddingX} y1={chartHeight / 2} x2={chartWidth - paddingX} y2={chartHeight / 2} stroke="var(--line)" strokeDasharray="3,3" />
                <line x1={paddingX} y1={chartHeight - paddingY} x2={chartWidth - paddingX} y2={chartHeight - paddingY} stroke="var(--line)" />

                {/* X and Y Axis Labels */}
                <text x={paddingX} y={chartHeight - 10} fill="var(--muted)" fontSize="10" textAnchor="middle">
                  Age {chartData.minAge}
                </text>
                <text x={chartWidth - paddingX} y={chartHeight - 10} fill="var(--muted)" fontSize="10" textAnchor="middle">
                  Age {chartData.maxAge}
                </text>
                <text x={paddingX - 10} y={paddingY + 4} fill="var(--muted)" fontSize="10" textAnchor="end">
                  {formatMoney(chartData.maxVal)}
                </text>
                <text x={paddingX - 10} y={chartHeight - paddingY + 4} fill="var(--muted)" fontSize="10" textAnchor="end">
                  {formatMoney(chartData.minVal)}
                </text>

                {/* Chart Area and Line */}
                <path d={chartData.areaPath} fill="url(#areaGrad)" />
                <path d={chartData.linePath} fill="none" stroke="var(--teal-dark)" strokeWidth="3" strokeLinecap="round" />

                {/* Interactive Points */}
                {chartData.points.map((p, idx) => (
                  <circle
                    key={idx}
                    cx={p.x}
                    cy={p.y}
                    r={hoveredPoint?.age === p.age ? "6" : "4"}
                    fill={hoveredPoint?.age === p.age ? "var(--teal-dark)" : "#ffffff"}
                    stroke="var(--teal-dark)"
                    strokeWidth="2"
                    style={{ cursor: "pointer", transition: "r 0.15s ease" }}
                    onMouseEnter={() => setHoveredPoint(p)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}
              </svg>
            </div>
          ) : (
            <div style={{ height: "180px", display: "flex", justifyContent: "center", alignItems: "center", color: "var(--muted)" }}>
              {highlightGlossaryTerms("No history recorded yet. Age up to build your trajectory.")}
            </div>
          )}
        </div>

        {/* Two-Column Detail Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {/* Liquidity Planning Card */}
          <div className="dashboard-card" style={{ padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              <PiggyBank size={20} className="text-teal" />
              <span>{highlightGlossaryTerms("Liquidity & Emergency Cushion")}</span>
            </h3>

            <div style={{ background: liquidityStatus.bgColor, color: liquidityStatus.color, padding: "10px 16px", borderRadius: "var(--radius)", fontWeight: "bold", display: "inline-block", marginBottom: "15px" }}>
              {highlightGlossaryTerms("Cushion Rating")}: {liquidityStatus.label}
            </div>

            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.5 }}>
              {highlightGlossaryTerms(liquidityStatus.description)}
            </p>
          </div>

          {/* Education / Sinking Funds */}
          <div className="dashboard-card" style={{ padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={20} className="text-navy" />
              <span>{highlightGlossaryTerms("Strategy Brief: Doubling Rule")}</span>
            </h3>
            
            <p style={{ margin: "0 0 15px 0", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.5 }}>
              {highlightGlossaryTerms("The Rule of 72: Divide 72 by your annual interest rate to find when your money doubles. At a basic 3% savings interest, it takes 24 years to double. At a 9% investing return, it takes only 8 years!")}
            </p>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", background: "rgba(0,0,0,0.02)", padding: "10px", borderRadius: "var(--radius)", fontSize: "0.82rem", color: "var(--navy)" }}>
              <Info size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>
                {highlightGlossaryTerms("Net Worth Check: To accelerate growth, focus on high-yield saving, stock diversification, and pay off any debts carrying an interest rate above 6%.")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
