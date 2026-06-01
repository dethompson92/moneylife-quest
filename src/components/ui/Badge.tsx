import { Trophy } from "lucide-react";
import { getAchievement } from "../../features/achievements/achievementDefinitions";

export function Badge({ id, locked = false }: { id: string; locked?: boolean }) {
  const achievement = getAchievement(id);
  return (
    <div className={`badge ${locked ? "badge--locked" : ""}`}>
      <Trophy aria-hidden="true" />
      <span>
        <strong>{achievement?.title ?? id}</strong>
        <small>{achievement?.description ?? "Achievement"}</small>
      </span>
    </div>
  );
}
