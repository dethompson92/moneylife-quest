import { useState } from "react";
import { Calculator } from "lucide-react";
import { scenarioEvents } from "../../data/scenarioPacks/middleSchoolCore";
import { ChoiceCard } from "../../components/ui/ChoiceCard";
import { Modal } from "../../components/ui/Modal";
import { TermSpotlight } from "../glossary/TermSpotlight";
import type { GameState, Topic } from "../../types/game";

const topicGlossaryTerms: Record<Topic, string[]> = {
  "money-values": ["opportunity-cost", "needs", "wants"],
  "consumer-skills": ["unit-price", "discount", "receipt", "fee"],
  budgeting: ["budget", "cash-flow", "income", "expense"],
  banking: ["checking", "savings-account", "fee", "overdraft"],
  credit: ["credit", "credit-score", "credit-card", "debt", "interest"],
  saving: ["saving", "emergency-fund", "compound-interest"],
  investing: ["investment", "diversification", "risk", "compound-interest"],
  insurance: ["insurance", "premium", "deductible", "risk"],
  scams: ["scam", "risk", "payment-app"],
  career: ["income", "net-income", "tax", "opportunity-cost"],
  "life-after-high-school": ["student-loan", "loan", "budget", "opportunity-cost"],
  taxes: ["tax", "gross-pay", "net-income"]
};

function glossaryTermsForTopics(topics: Topic[]): string[] {
  return Array.from(new Set(topics.flatMap((topic) => topicGlossaryTerms[topic] ?? []))).slice(0, 5);
}

function findPercentages(text: string): number[] {
  const matches = Array.from(text.matchAll(/\b(\d+(?:\.\d+)?)\s*%/g));
  return matches.map((m) => parseFloat(m[1]));
}

export function EventModal({
  game,
  onResolve
}: {
  game: GameState;
  onResolve: (eventId: string, choiceId: string) => void;
}) {
  const event = scenarioEvents.find((candidate) => candidate.id === game.pendingEventId);
  if (!event) return null;

  const [showMath, setShowMath] = useState(false);
  const [mathTotal, setMathTotal] = useState(100);
  const [selectedPercentIndex, setSelectedPercentIndex] = useState(0);
  const [customPercent, setCustomPercent] = useState("");

  const allTexts = [
    event.title,
    event.prompt,
    event.reflectionPrompt,
    ...event.choices.flatMap((choice) => [
      choice.label,
      choice.description || ""
    ])
  ].join(" ");
  const percentages = Array.from(new Set(findPercentages(allTexts)));

  return (
    <Modal title="New Event">
      <div className="event-modal">
        <div className="event-modal__topic">{event.topics[0].replace(/-/g, " ")}</div>
        <h3>{event.title}</h3>
        <p>{event.prompt}</p>
        <p className="reflection-cue"><strong>Reflect:</strong> {event.reflectionPrompt}</p>
        
        <TermSpotlight
          termIds={glossaryTermsForTopics(event.topics)}
          text={[
            event.title,
            event.prompt,
            event.reflectionPrompt,
            ...event.choices.flatMap((choice) => [
              choice.label,
              choice.description,
              ...choice.outcomes.flatMap((outcome) => [outcome.feedback, outcome.explanation, outcome.logText])
            ])
          ]}
        />

        {percentages.length > 0 && (
          <div className="math-helper-container" style={{ margin: "14px 0" }}>
            <button
              type="button"
              onClick={() => setShowMath(!showMath)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                border: "1px solid #b9ebe1",
                borderRadius: "var(--radius)",
                backgroundColor: "#f1fbf8",
                color: "#0f9d8a",
                fontWeight: 800,
                cursor: "pointer",
                fontSize: "0.9rem"
              }}
            >
              <Calculator size={16} />
              {showMath ? "Hide Math Helper" : "Show Math Helper (Percent Breakout)"}
            </button>

            {showMath && (
              <div
                className="math-helper-card"
                style={{
                  marginTop: "10px",
                  padding: "16px",
                  border: "1px solid #b9ebe1",
                  borderRadius: "var(--radius)",
                  backgroundColor: "rgba(255, 255, 255, 0.96)",
                  boxShadow: "var(--shadow-soft)",
                  textAlign: "left"
                }}
              >
                <h4 style={{ margin: "0 0 10px 0", color: "var(--navy)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Calculator size={18} style={{ color: "var(--teal)" }} /> Math & Percent Helper
                </h4>
                <p style={{ margin: "0 0 14px 0", fontSize: "0.88rem", color: "var(--muted)" }}>
                  Let's break down the percentages mentioned in this scenario step-by-step.
                </p>

                <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", marginBottom: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px", color: "var(--navy)" }}>
                      Select Percentage:
                    </label>
                    <select
                      value={selectedPercentIndex}
                      onChange={(e) => {
                        setSelectedPercentIndex(parseInt(e.target.value, 10));
                        setCustomPercent("");
                      }}
                      style={{ padding: "6px", width: "100%", borderRadius: "4px", border: "1px solid var(--line)" }}
                    >
                      {percentages.map((p, idx) => (
                        <option key={idx} value={idx}>
                          {p}% (from scenario)
                        </option>
                      ))}
                      <option value={percentages.length}>Custom...</option>
                    </select>
                  </div>

                  {selectedPercentIndex === percentages.length && (
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px", color: "var(--navy)" }}>
                        Custom Percent (%):
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        placeholder="e.g. 15"
                        value={customPercent}
                        onChange={(e) => setCustomPercent(e.target.value)}
                        style={{ padding: "6px", width: "100%", borderRadius: "4px", border: "1px solid var(--line)" }}
                      />
                    </div>
                  )}

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px", color: "var(--navy)" }}>
                      Base Amount ($):
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10000"
                      value={mathTotal}
                      onChange={(e) => setMathTotal(Math.max(1, parseInt(e.target.value, 10) || 0))}
                      style={{ padding: "6px", width: "100%", borderRadius: "4px", border: "1px solid var(--line)" }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px", color: "var(--navy)" }}>
                    Adjust Base Amount:
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={mathTotal <= 1000 ? mathTotal : 1000}
                    onChange={(e) => setMathTotal(parseInt(e.target.value, 10))}
                    style={{ width: "100%", accentColor: "var(--teal)" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--muted)" }}>
                    <span>$10</span>
                    <span>$500</span>
                    <span>$1000</span>
                  </div>
                </div>

                {(() => {
                  const percent =
                    selectedPercentIndex === percentages.length
                      ? parseFloat(customPercent) || 0
                      : percentages[selectedPercentIndex];
                  const decimal = percent / 100;
                  const result = mathTotal * decimal;

                  return (
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        border: "1px solid rgba(15, 157, 138, 0.2)"
                      }}
                    >
                      <strong style={{ display: "block", color: "var(--teal-dark)", fontSize: "1.1rem", marginBottom: "8px" }}>
                        Calculation: {percent}% of ${mathTotal}
                      </strong>
                      <div style={{ fontSize: "0.9rem", lineHeight: "1.4", color: "var(--text)" }}>
                        <div style={{ display: "flex", gap: "6px", marginBottom: "4px" }}>
                          <span style={{ color: "var(--muted)", width: "24px" }}>①</span>
                          <span>Convert percentage to a decimal:</span>
                        </div>
                        <div style={{ paddingLeft: "30px", fontWeight: "bold", color: "var(--navy)", marginBottom: "6px" }}>
                          {percent}% = {percent} ÷ 100 = {decimal.toFixed(4).replace(/\.?0+$/, "")}
                        </div>

                        <div style={{ display: "flex", gap: "6px", marginBottom: "4px" }}>
                          <span style={{ color: "var(--muted)", width: "24px" }}>②</span>
                          <span>Multiply the decimal by the base amount:</span>
                        </div>
                        <div style={{ paddingLeft: "30px", fontWeight: "bold", color: "var(--navy)" }}>
                          {decimal.toFixed(4).replace(/\.?0+$/, "")} × ${mathTotal} = ${result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        <div className="choice-list">
          {event.choices.map((choice, index) => (
            <ChoiceCard
              key={choice.id}
              choice={choice}
              index={index}
              state={game}
              onChoose={() => onResolve(event.id, choice.id)}
            />
          ))}
        </div>
        <p className="tip">Tip: Every choice shapes your future. Some locked choices become available as your money habits grow.</p>
      </div>
    </Modal>
  );
}
