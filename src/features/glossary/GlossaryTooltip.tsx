import { useId, useState, useRef, useEffect, useLayoutEffect, type CSSProperties, type ReactNode } from "react";
import { glossaryTerms } from "../../data/glossaryTerms";
import { contextGlossaryTerms } from "../../data/contextGlossary";
import type { GlossaryTerm } from "../../data/glossaryTerms";

const allTerms: GlossaryTerm[] = [...glossaryTerms];
for (const cTerm of contextGlossaryTerms) {
  if (!allTerms.some((t) => t.id === cTerm.id)) {
    allTerms.push(cTerm);
  }
}

const phraseList: Array<{ phrase: string; term: GlossaryTerm }> = [];
for (const term of allTerms) {
  phraseList.push({ phrase: term.term.toLowerCase(), term });
  for (const alias of term.aliases || []) {
    if (alias) {
      phraseList.push({ phrase: alias.toLowerCase(), term });
    }
  }
}

phraseList.sort((a, b) => b.phrase.length - a.phrase.length);

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const regexParts = phraseList.map((item) => escapeRegExp(item.phrase));
const splitRegex = regexParts.length > 0 ? new RegExp(`\\b(${regexParts.join("|")})\\b`, "gi") : null;

export function GlossaryTooltip({ term, children }: { term: GlossaryTerm; children: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bubbleStyle, setBubbleStyle] = useState<CSSProperties>({});
  const containerRef = useRef<HTMLSpanElement>(null);
  const pinnedRef = useRef(false);
  const tooltipId = useId();

  const pinOpen = () => {
    pinnedRef.current = true;
    setIsOpen(true);
  };

  const close = () => {
    pinnedRef.current = false;
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const updatePosition = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const margin = 16;
      const width = Math.min(270, window.innerWidth - margin * 2);
      const idealLeft = rect.left + rect.width / 2 - width / 2;
      const left = Math.min(Math.max(idealLeft, margin), window.innerWidth - width - margin);
      const top = Math.max(12, rect.top - 10);
      const caretLeft = Math.min(Math.max(rect.left + rect.width / 2 - left, 14), width - 14);

      setBubbleStyle({
        "--glossary-left": `${left}px`,
        "--glossary-top": `${top}px`,
        "--glossary-width": `${width}px`,
        "--glossary-caret-left": `${caretLeft}px`
      } as CSSProperties);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);

  const handleOpen = (event: React.MouseEvent) => {
    event.stopPropagation();
    pinOpen();
  };

  return (
    <span
      ref={containerRef}
      className="glossary-term-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        if (!pinnedRef.current) setIsOpen(false);
      }}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!pinnedRef.current && !containerRef.current?.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-describedby={isOpen ? tooltipId : undefined}
        aria-expanded={isOpen}
        className="glossary-term-trigger"
        onPointerDown={(event) => {
          event.stopPropagation();
          pinOpen();
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
          pinOpen();
        }}
        onTouchStart={(event) => {
          event.stopPropagation();
          pinOpen();
        }}
        onClick={handleOpen}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            pinOpen();
          }
          if (event.key === "Escape") {
            close();
          }
        }}
      >
        {children}
      </button>

      {isOpen && (
        <span
          id={tooltipId}
          className="glossary-tooltip-bubble"
          role="tooltip"
          style={bubbleStyle}
        >
          <strong>{term.term}</strong>
          <span>{term.definition}</span>
          {term.mathConnection && (
            <small>
              Math: {term.mathConnection}
            </small>
          )}
          <span className="glossary-tooltip-bubble__caret" aria-hidden="true" />
        </span>
      )}
    </span>
  );
}

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
