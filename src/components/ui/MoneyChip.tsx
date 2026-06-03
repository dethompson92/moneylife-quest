import type { ReactNode } from "react";
import { formatMoney } from "../../lib/formatMoney";
import { highlightGlossaryTerms } from "../../features/glossary/GlossaryTooltip";

export function MoneyChip({
  label,
  value,
  icon,
  tone = "teal"
}: {
  label: string;
  value: number | string;
  icon: ReactNode;
  tone?: "teal" | "coral" | "yellow" | "navy";
}) {
  return (
    <div className={`money-chip money-chip--${tone}`}>
      <span className="money-chip__icon" aria-hidden="true">
        {icon}
      </span>
      <span>
        <span className="money-chip__label">{highlightGlossaryTerms(label)}</span>
        <strong>{typeof value === "number" ? formatMoney(value) : value}</strong>
      </span>
    </div>
  );
}
