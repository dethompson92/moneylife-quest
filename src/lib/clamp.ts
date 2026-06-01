export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(value)));
}

export function clampMoney(value: number): number {
  return Math.max(0, Math.round(value));
}
