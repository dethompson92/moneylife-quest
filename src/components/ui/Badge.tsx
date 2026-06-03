import { Trophy } from "lucide-react";
import { getAchievement } from "../../features/achievements/achievementDefinitions";
import { highlightGlossaryTerms } from "../../features/glossary/GlossaryTooltip";

export function Badge({ id, locked = false }: { id: string; locked?: boolean }) {
  const achievement = getAchievement(id);
  return (
    <div className={`badge ${locked ? "badge--locked" : ""}`}>
      <Trophy aria-hidden="true" />
      <span>
        <strong>{highlightGlossaryTerms(achievement?.title ?? id)}</strong>
        <small>{highlightGlossaryTerms(achievement?.description ?? "Achievement")}</small>
      </span>
    </div>
  );
}
