import { useState, useRef, useEffect, type ReactNode } from "react";
import { glossaryTerms } from "../../data/glossaryTerms";
import { contextGlossaryTerms } from "../../data/contextGlossary";
import type { GlossaryTerm } from "../../data/glossaryTerms";

// Combine local and context terms to ensure a comprehensive list
const allTerms: GlossaryTerm[] = [...glossaryTerms];
for (const cTerm of contextGlossaryTerms) {
  if (!allTerms.some((t) => t.id === cTerm.id)) {
    allTerms.push(cTerm);
  }
}

// Build a flat list of phrase-to-term mappings
const phraseList: Array<{ phrase: string; term: GlossaryTerm }> = [];
for (const term of allTerms) {
  phraseList.push({ phrase: term.term.toLowerCase(), term });
  for (const alias of term.aliases || []) {
    if (alias) {
      phraseList.push({ phrase: alias.toLowerCase(), term });
    }
  }
}

// Sort by phrase length descending to ensure longer phrases match first
// E.g. "checking account" matches before "checking"
phraseList.sort((a, b) => b.phrase.length - a.phrase.length);

// Escape RegExp special characters
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Construct RegExp with word boundaries
const regexParts = phraseList.map((item) => escapeRegExp(item.phrase));
const splitRegex = regexParts.length > 0 ? new RegExp(`\\b(${regexParts.join("|")})\\b`, "gi") : null;

export function GlossaryTooltip({ term, children }: { term: GlossaryTerm; children: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <span
      ref={containerRef}
      className="glossary-term-wrapper"
      style={{
        position: "relative",
        display: "inline",
        whiteSpace: "normal"
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        role="button"
        tabIndex={0}
        className="glossary-term-trigger"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            // Trigger same behavior
            setIsOpen((prev) => !prev);
          }
        }}
        style={{
          borderBottom: "1.5px dashed var(--teal)",
          color: "var(--teal-dark)",
          padding: 0,
          font: "inherit",
          fontWeight: "inherit",
          cursor: "help",
          display: "inline",
          outline: "none",
          verticalAlign: "baseline"
        }}
      >
        {children}
      </span>

      {isOpen && (
        <span
          className="glossary-tooltip-bubble"
          role="tooltip"
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "240px",
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--line)",
            borderRadius: "8px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
            padding: "10px 12px",
            zIndex: 1000,
            textAlign: "left",
            fontSize: "0.82rem",
            lineHeight: "1.4",
            color: "var(--navy)",
            fontWeight: "normal",
            display: "block",
            whiteSpace: "normal"
          }}
        >
          <strong style={{ display: "block", color: "var(--teal-dark)", fontSize: "0.88rem", marginBottom: "4px" }}>
            {term.term}
          </strong>
          <span>{term.definition}</span>
          {term.mathConnection && (
            <small
              style={{
                display: "block",
                marginTop: "6px",
                color: "var(--muted)",
                fontStyle: "italic",
                borderTop: "1px solid var(--line)",
                paddingTop: "4px"
              }}
            >
              💡 Math: {term.mathConnection}
            </small>
          )}
          {/* Caret Arrow pointing down */}
          <span
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              borderWidth: "6px",
              borderStyle: "solid",
              borderColor: "rgba(255, 255, 255, 0.98) transparent transparent transparent",
              display: "block",
              width: 0,
              height: 0
            }}
          />
        </span>
      )}
    </span>
  );
}

/**
 * Utility function to automatically highlight glossary terms in a text string.
 * Returns an array of ReactNodes (plain strings and GlossaryTooltip components).
 */
export function highlightGlossaryTerms(text: string | undefined | null): ReactNode {
  if (!text) return "";
  if (!splitRegex) return text;

  const parts = text.split(splitRegex);

  return (
    <>
      {parts.map((part, index) => {
        const lower = part.toLowerCase();
        const match = phraseList.find((item) => item.phrase === lower);

        if (match) {
          return (
            <GlossaryTooltip key={index} term={match.term}>
              {part}
            </GlossaryTooltip>
          );
        }

        return part;
      })}
    </>
  );
}
