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

export type RemoteReportResult =
  | { ok: true; mode: "cors" | "no-cors" }
  | { ok: false; skipped?: boolean; error: string };

export async function sendReportToEndpoint(report: IssueReport, reportText: string, endpoint = getDebugReportEndpoint()): Promise<RemoteReportResult> {
  if (!endpoint) {
    return { ok: false, skipped: true, error: "No debug report endpoint is configured." };
  }

  const payload = JSON.stringify({
    id: report.id,
    createdAt: report.createdAt,
    app: report.app,
    issueType: report.issueType,
    description: report.description,
    steps: report.steps,
    contact: report.contact,
    status: report.status ?? "draft",
    remoteError: report.remoteError ?? null,
    diagnostics: report.diagnostics ?? null,
    reportText
  });

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true
    });
    if (!response.ok) {
      return { ok: false, error: `Report endpoint returned ${response.status}.` };
    }
    return { ok: true, mode: "cors" };
  } catch {
    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: payload,
        keepalive: true
      });
      return { ok: true, mode: "no-cors" };
    } catch (error) {
      return { ok: false, error: error instanceof Error ? error.message : "Report endpoint failed." };
    }
  }
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
    "Privacy note: this report is saved locally in the browser. If a teacher debug inbox endpoint is configured, Submit Issue also sends a copy to that teacher-controlled inbox without opening GitHub or email."
  ].join("\n");
}

export function labelForType(type: IssueType): string {
  if (type === "accessibility") return "Accessibility";
  if (type === "confusing") return "Confusing Moment";
  if (type === "content") return "Content";
  if (type === "other") return "Other";
  return "Bug";
}

function labelForStatus(status: NonNullable<IssueReport["status"]>): string {
  if (status === "sent-remote") return "Saved locally and sent to debug inbox";
  if (status === "remote-failed") return "Saved locally; debug inbox send failed";
  return "Saved locally";
}

export function getDebugReportEndpoint(): string {
  return import.meta.env.VITE_DEBUG_REPORT_ENDPOINT?.trim() ?? "";
}
