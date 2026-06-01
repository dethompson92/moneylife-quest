export function formatMoney(value: number): string {
  const sign = value < 0 ? "-" : "";
  return `${sign}$${Math.abs(Math.round(value)).toLocaleString("en-US")}`;
}

export function formatSignedMoney(value: number): string {
  const prefix = value >= 0 ? "+" : "-";
  return `${prefix} $${Math.abs(Math.round(value)).toLocaleString("en-US")}`;
}
