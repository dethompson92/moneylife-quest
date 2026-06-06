import type { GameState } from "../../types/game";
import type { IssueDraft, IssueReport, IssueType } from "../../types/reporting";

const APP_VERSION = "1.0.0";

export function buildIssueReport(draft: IssueDraft, game: GameState | null): IssueReport {
  return {
    ...draft,
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    createdAt: new Date().toISOString(),
    app: "MoneyLife Quest",
    diagnostics: draft.includeDiagnostics
      ? {
          appVersion: APP_VERSION,
          url: window.location.href,
          browser: navigator.userAgent,
          screenSize: `${window.innerWidth}x${window.innerHeight}`,
          gameAge: game?.character.age,
          gameTurn: game?.turn,
          gameMode: game?.mode,
          gameStatus: game?.status,
          activeGoalId: game?.activeGoalId,
          pendingEventId: game?.pendingEventId,
          achievements: game?.achievements.length
        }
      : undefined
  };
}

export function buildReportDestination(report: IssueReport, reportText: string): string | null {
  const githubIssueUrl = import.meta.env.VITE_GITHUB_ISSUES_URL?.trim();
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL?.trim();
  const title = `MoneyLife Quest ${labelForType(report.issueType)}: ${shortTitle(report.description)}`;

  if (githubIssueUrl) {
    try {
      const url = new URL(githubIssueUrl);
      url.searchParams.set("title", title);
      url.searchParams.set("body", reportText);
      return url.toString();
    } catch {
      return null;
    }
  }

  if (supportEmail) {
    return `mailto:${encodeURIComponent(supportEmail)}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(reportText)}`;
  }

  return null;
}

export function formatIssue(issue: IssueReport): string {
  return [
    "MoneyLife Quest Issue Report",
    `ID: ${issue.id}`,
    `Created: ${issue.createdAt}`,
    `Type: ${labelForType(issue.issueType)}`,
    `Local status: ${issue.status ? labelForStatus(issue.status) : "Draft"}`,
    `Optional contact: ${issue.contact.trim() || "(not provided)"}`,
    "",
    "What happened:",
    issue.description.trim() || "(blank)",
    "",
    "Steps to repeat:",
    issue.steps.trim() || "(not provided)",
    "",
    "Safe diagnostics:",
    issue.diagnostics ? JSON.stringify(issue.diagnostics, null, 2) : "Not included",
    "",
    "Privacy note: this report is saved locally in the browser. It is only handed off outside the app when the user intentionally opens a report link, email, or copied report."
  ].join("\n");
}

export function labelForType(type: IssueType): string {
  if (type === "accessibility") return "Accessibility";
  if (type === "confusing") return "Confusing Moment";
  if (type === "content") return "Content";
  if (type === "other") return "Other";
  return "Bug";
}

export function shortTitle(description: string): string {
  const trimmed = description.trim().replace(/\s+/g, " ");
  if (!trimmed) return "Report";
  return trimmed.length > 54 ? `${trimmed.slice(0, 54)}...` : trimmed;
}

function labelForStatus(status: NonNullable<IssueReport["status"]>): string {
  if (status === "handoff-opened") return "Saved locally and report handoff opened";
  return "Saved locally";
}
