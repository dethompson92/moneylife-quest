import { clamp } from "../../lib/clamp";

export function StatBar({
  label,
  value,
  icon
}: {
  label: string;
  value: number;
  icon?: string;
}) {
  const clamped = clamp(value, 0, 100);
  return (
    <div className="stat-bar" aria-label={`${label}: ${clamped} out of 100`}>
      <div className="stat-bar__row">
        <span className="stat-bar__label">
          <span aria-hidden="true">{icon}</span> {label}
        </span>
        <span className="stat-bar__value">{clamped} / 100</span>
      </div>
      <div className="stat-bar__track">
        <span style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
