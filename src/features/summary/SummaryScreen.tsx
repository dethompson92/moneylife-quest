import { useEffect, useMemo, useState } from "react";
import { Clipboard, RotateCcw } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { formatMoney } from "../../lib/formatMoney";
import { getGoal } from "../goals/goalDefinitions";
import { calculateNetWorth } from "../finance/financeEngine";
import { generateSummary } from "./summaryGenerator";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import { buildProgressionSummary } from "../progression/progressionEngine";
import { loadMuseumRunCards, saveMuseumRunCard } from "../progression/progressionStorage";
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
  const isOpenLife = goal.openEnded === true;
  const progression = useMemo(() => buildProgressionSummary(game), [game]);
  const [museumCards, setMuseumCards] = useState(() => loadMuseumRunCards());

  useEffect(() => {
    if (game.status === "ended") {
      setMuseumCards(saveMuseumRunCard(progression.museumCard));
    } else {
      setMuseumCards(loadMuseumRunCards());
    }
  }, [game.status, progression.museumCard]);

  return (
    <section className="screen-panel summary-screen">
      <div className="section-heading">
        <h2>{highlightGlossaryTerms("Final Reflection")}</h2>
        <p>{highlightGlossaryTerms(game.endingReason ?? "Your quick class playthrough is complete.")}</p>
      </div>
      <div className="summary-stats">
        <article><small>{highlightGlossaryTerms(isOpenLife ? "Play Style" : "Goal")}</small><strong>{highlightGlossaryTerms(goal.title)}</strong></article>
        <article><small>{highlightGlossaryTerms("Net Worth")}</small><strong>{formatMoney(calculateNetWorth(game.finances))}</strong></article>
        <article><small>{highlightGlossaryTerms("Debt")}</small><strong>{formatMoney(game.finances.debtTotal)}</strong></article>
        <article><small>{highlightGlossaryTerms("Credit")}</small><strong>{game.stats.creditScore ?? "No history"}</strong></article>
        <article><small>{highlightGlossaryTerms("Safety")}</small><strong>{game.stats.trustSafety}/100</strong></article>
        <article><small>{highlightGlossaryTerms("Badges")}</small><strong>{game.achievements.length}</strong></article>
      </div>
      <div className="progression-card progression-card--identity">
        <div>
          <small>{highlightGlossaryTerms("Financial Identity")}</small>
          <h3>{highlightGlossaryTerms(progression.archetype.title)}</h3>
          <p>{highlightGlossaryTerms(progression.archetype.description)}</p>
        </div>
        <div className="identity-score-list" aria-label="Financial identity scores">
          {progression.identityScores.slice(0, 4).map((score) => (
            <div className="mini-progress" key={score.dimension}>
              <span>{highlightGlossaryTerms(score.label)}</span>
              <div className="mini-progress__track"><span style={{ width: `${score.score}%` }} /></div>
              <strong>{score.score}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="progression-grid">
        <section className="progression-card">
          <small>{highlightGlossaryTerms("Values Compass")}</small>
          <h3>{highlightGlossaryTerms("What Your Choices Protected")}</h3>
          <div className="value-stack">
            {progression.topValues.map((value) => (
              <div className="mini-progress" key={value.tag}>
                <span>{highlightGlossaryTerms(value.label)}</span>
                <div className="mini-progress__track"><span style={{ width: `${value.score}%` }} /></div>
                <strong>{value.score}</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="progression-card">
          <small>{highlightGlossaryTerms("Ending Ribbons")}</small>
          <h3>{highlightGlossaryTerms("Run Pattern")}</h3>
          <div className="ribbon-list">
            {progression.ribbons.map((ribbon) => (
              <article key={ribbon.id}>
                <strong>{highlightGlossaryTerms(ribbon.title)}</strong>
                <span>{highlightGlossaryTerms(ribbon.description)}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
      <section className="progression-card">
        <small>{highlightGlossaryTerms("Mastery Maps")}</small>
        <h3>{highlightGlossaryTerms("Skills This Run Practiced")}</h3>
        <div className="mastery-map-grid">
          {progression.masteryMaps.map((map) => {
            const percent = Math.round((map.completedCount / map.totalCount) * 100);
            return (
              <article className={map.complete ? "mastery-map is-complete" : "mastery-map"} key={map.id}>
                <div>
                  <strong>{highlightGlossaryTerms(map.title)}</strong>
                  <span>{map.completedCount}/{map.totalCount}</span>
                </div>
                <div className="mini-progress__track" aria-label={`${map.title} ${percent}% complete`}><span style={{ width: `${percent}%` }} /></div>
                <small>{highlightGlossaryTerms(map.complete ? `${map.ribbonTitle} unlocked` : map.description)}</small>
              </article>
            );
          })}
        </div>
      </section>
      <section className="progression-card">
        <small>{highlightGlossaryTerms("Financial Museum")}</small>
        <h3>{highlightGlossaryTerms("Local Run Portfolio")}</h3>
        <p>{highlightGlossaryTerms("Completed run cards stay only in this browser. They are for comparing your own playthroughs, not ranking classmates.")}</p>
        <div className="museum-card-list">
          {museumCards.slice(0, 3).map((card) => (
            <article className="museum-card" key={card.id}>
              <strong>{highlightGlossaryTerms(`Run ${card.runNumber}: ${card.archetypeTitle}`)}</strong>
              <span>{highlightGlossaryTerms(card.primaryGoalTitle)}</span>
              <small>{highlightGlossaryTerms(card.biggestLesson)}</small>
            </article>
          ))}
        </div>
        <p><strong>{highlightGlossaryTerms("Next run:")}</strong> {highlightGlossaryTerms(progression.nextRunSuggestion)}</p>
      </section>
      <label className="summary-box">
        <span>{highlightGlossaryTerms("Copyable student summary")}</span>
        <textarea readOnly value={summary} />
      </label>
      <div className="reflection-prompts">
        <h3>{highlightGlossaryTerms("Discussion Prompts")}</h3>
        <p>{highlightGlossaryTerms("Which choice had the biggest tradeoff?")}</p>
        <p>{highlightGlossaryTerms("What would you try differently in a replay?")}</p>
        <p>{highlightGlossaryTerms(isOpenLife ? "What custom goal did you quietly follow while playing?" : "How did your goal change your decisions?")}</p>
      </div>
      <div className="button-row">
        <Button icon={<Clipboard aria-hidden="true" />} onClick={() => onCopy(summary)}>Copy Summary</Button>
        <Button variant="secondary" icon={<RotateCcw aria-hidden="true" />} onClick={onRestart}>Play Again</Button>
      </div>
    </section>
  );
}
