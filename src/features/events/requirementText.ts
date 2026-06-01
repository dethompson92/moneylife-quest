import type { Requirement } from "../../types/game";

export function formatRequirement(requirement?: Requirement): string {
  if (!requirement) return "Locked";
  switch (requirement.type) {
    case "minAge":
      return `Unlocks at age ${requirement.value}`;
    case "maxAge":
      return `Only before age ${requirement.value}`;
    case "minCash":
      return `Needs $${requirement.value}`;
    case "minSavings":
      return `Needs $${requirement.value} saved`;
    case "minInvestments":
      return `Needs $${requirement.value} invested`;
    case "maxDebt":
      return `Debt must be under $${requirement.value}`;
    case "hasCredit":
      return requirement.value === false ? "Requires no credit account" : "Requires credit history";
    case "flagEquals":
      return "Requires earlier choice";
    case "statAtLeast":
      return `Needs ${requirement.stat} ${requirement.value}`;
  }
}
