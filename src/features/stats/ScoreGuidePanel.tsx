import { Gauge } from "lucide-react";
import { creditScoreRanges, getCreditScoreRange, getScoreRange, skillScoreGuides } from "../../data/scoreGuides";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";
import type { PlayerStats } from "../../types/game";

export function ScoreGuidePanel({ stats }: { stats: PlayerStats }) {
  return (
    <section className="score-guide" aria-label="Score guide">
      <div className="score-guide__header">
        <Gauge aria-hidden="true" />
        <h2>Score Guide</h2>
      </div>
      <p>{highlightGlossaryTerms("Scores show the current strength of a habit or life skill. They are feedback for the game, not a judgment of a person.")}</p>
      <div className="score-guide__list">
        {skillScoreGuides.map((guide) => {
          const value = stats[guide.key];
          const currentRange = getScoreRange(value, guide.ranges);
          return (
            <details className="score-guide__card" key={guide.key}>
              <summary>
                <span>
                  <strong>{highlightGlossaryTerms(guide.label)}</strong>
                  <small>{value}/100 - {currentRange.label}</small>
                </span>
              </summary>
              <p>{highlightGlossaryTerms(currentRange.meaning)}</p>
              <small>{highlightGlossaryTerms(guide.studentLabel)}</small>
              <ol className="score-guide__ranges" aria-label={`${guide.label} score ranges`}>
                {guide.ranges.map((range) => (
                  <li key={`${guide.key}-${range.min}`}>
                    <strong>{range.min}-{range.max}</strong>
                    <span>{highlightGlossaryTerms(`${range.label}: ${range.meaning}`)}</span>
                  </li>
                ))}
              </ol>
            </details>
          );
        })}
        <details className="score-guide__card">
          <summary>
            <span>
              <strong>{highlightGlossaryTerms("Credit")}</strong>
              <small>{stats.creditScore ? `${stats.creditScore} - ${getCreditScoreRange(stats.creditScore)?.label}` : "No history yet"}</small>
            </span>
          </summary>
          <p>{highlightGlossaryTerms(stats.creditScore ? getCreditScoreRange(stats.creditScore)?.meaning : "No credit history means the character has not used credit yet. It is not bad; it means lenders do not have a pattern to review.")}</p>
          <small>{highlightGlossaryTerms("Credit uses a 300-850 scale instead of 0-100.")}</small>
          <ol className="score-guide__ranges" aria-label="Credit score ranges">
            {creditScoreRanges.map((range) => (
              <li key={`credit-${range.min}`}>
                <strong>{range.min}-{range.max}</strong>
                <span>{highlightGlossaryTerms(`${range.label}: ${range.meaning}`)}</span>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
