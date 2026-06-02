import { BookOpen } from "lucide-react";
import { findGlossaryTerms, getGlossaryTermsById, type GlossaryTerm } from "../../data/glossaryTerms";

export function TermSpotlight({
  title = "Money Words",
  text,
  termIds,
  maxTerms = 4
}: {
  title?: string;
  text?: Array<string | undefined | null>;
  termIds?: string[];
  maxTerms?: number;
}) {
  const priorityTerms = termIds?.length ? getGlossaryTermsById(termIds, maxTerms) : [];
  const discoveredTerms = text?.length && priorityTerms.length < maxTerms ? findGlossaryTerms(text, maxTerms) : [];
  const terms = [...priorityTerms, ...discoveredTerms]
    .filter((term, index, list) => list.findIndex((candidate) => candidate.id === term.id) === index)
    .slice(0, maxTerms);
  if (!terms.length) return null;

  return (
    <aside className="term-spotlight" aria-label={title}>
      <div className="term-spotlight__header">
        <BookOpen aria-hidden="true" />
        <h3>{title}</h3>
      </div>
      <div className="term-list">
        {terms.map((term) => (
          <TermCard term={term} key={term.id} />
        ))}
      </div>
    </aside>
  );
}

function TermCard({ term }: { term: GlossaryTerm }) {
  return (
    <article className="term-card">
      <strong>{term.term}</strong>
      <p>{term.definition}</p>
      {term.mathConnection ? <small>{term.mathConnection}</small> : null}
      <div className="term-card__sources">
        {term.sources.slice(0, 2).map((source) =>
          source.url ? (
            <a key={`${term.id}-${source.label}`} href={source.url} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          ) : (
            <span key={`${term.id}-${source.label}`}>{source.label}</span>
          )
        )}
      </div>
    </article>
  );
}
