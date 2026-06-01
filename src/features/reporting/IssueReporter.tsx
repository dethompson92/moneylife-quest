import { useMemo, useState } from "react";
import { Bug, Clipboard, Download, ExternalLink, X } from "lucide-react";
import { Button } from "../../components/ui/Button";
import type { GameState } from "../../types/game";

const APP_VERSION = "1.0.0";

type IssueDraft = {
  issueType: "bug" | "content" | "accessibility" | "confusing" | "other";
  description: string;
  steps: string;
  contact: string;
  includeDiagnostics: boolean;
};

type IssueReport = IssueDraft & {
  id: string;
  createdAt: string;
  app: string;
  diagnostics?: {
    appVersion: string;
    url: string;
    browser: string;
    screenSize: string;
    gameAge?: number;
    gameTurn?: number;
    gameMode?: string;
    gameStatus?: string;
    activeGoalId?: string;
    pendingEventId?: string;
    achievements?: number;
  };
};

export function IssueReporter({ game, onCopy }: { game: GameState | null; onCopy: (text: string) => void }) {
  const [open, setOpen] = useState(false);
  const [copiedReport, setCopiedReport] = useState<string | null>(null);
  const [draft, setDraft] = useState<IssueDraft>({
    issueType: "bug",
    description: "",
    steps: "",
    contact: "",
    includeDiagnostics: true
  });

  const report = useMemo(() => buildIssueReport(draft, game), [draft, game]);
  const reportText = useMemo(() => formatIssue(report), [report]);
  const reportDestination = useMemo(() => buildReportDestination(report, reportText), [report, reportText]);
  const canSubmit = draft.description.trim().length > 0;

  function copyReport() {
    setCopiedReport(reportText);
    onCopy(reportText);
  }

  function openReportDestination() {
    if (!reportDestination) return;
    window.open(reportDestination, "_blank", "noopener,noreferrer");
  }

  function downloadReport() {
    const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `moneylife-issue-${report.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <button className="issue-launcher" type="button" onClick={() => setOpen(true)} aria-label="Report a bug or issue">
        <Bug aria-hidden="true" />
        <span>Bug or issue</span>
      </button>
      {open ? (
        <div className="issue-panel" role="dialog" aria-modal="false" aria-label="Bug or issue reporter">
          <div className="issue-panel__header">
            <strong>Bug or Issue</strong>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close issue reporter">
              <X aria-hidden="true" />
            </button>
          </div>
          <p>Reports are never sent automatically. Do not include student names, private information, or class rosters.</p>
          <label>
            Issue type
            <select value={draft.issueType} onChange={(event) => setDraft({ ...draft, issueType: event.target.value as IssueDraft["issueType"] })}>
              <option value="bug">Something broke</option>
              <option value="content">Content issue</option>
              <option value="accessibility">Accessibility</option>
              <option value="confusing">Confusing moment</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            What happened?
            <textarea value={draft.description} maxLength={1000} onChange={(event) => setDraft({ ...draft, description: event.target.value })} />
          </label>
          <label>
            Steps to repeat it
            <textarea value={draft.steps} maxLength={1000} onChange={(event) => setDraft({ ...draft, steps: event.target.value })} />
          </label>
          <label>
            Optional contact
            <input
              value={draft.contact}
              maxLength={160}
              placeholder="Optional name or email"
              onChange={(event) => setDraft({ ...draft, contact: event.target.value })}
            />
            <small>This is optional and should be used only if you want a reply.</small>
          </label>
          <label className="inline-check">
            <span>Include safe app diagnostics</span>
            <input type="checkbox" checked={draft.includeDiagnostics} onChange={(event) => setDraft({ ...draft, includeDiagnostics: event.target.checked })} />
          </label>
          <div className="button-row">
            <Button icon={<Clipboard aria-hidden="true" />} onClick={copyReport} disabled={!canSubmit}>Copy Report</Button>
            <Button variant="secondary" icon={<ExternalLink aria-hidden="true" />} onClick={openReportDestination} disabled={!canSubmit || !reportDestination}>
              Open Issue
            </Button>
            <Button variant="secondary" icon={<Download aria-hidden="true" />} onClick={downloadReport} disabled={!canSubmit}>Download</Button>
          </div>
          {!reportDestination ? (
            <p className="issue-panel__hint">Set VITE_GITHUB_ISSUES_URL or VITE_SUPPORT_EMAIL during deployment to enable direct report handoff.</p>
          ) : null}
          <details className="issue-preview" open={Boolean(copiedReport)}>
            <summary>{copiedReport ? "Copied report text" : "Preview report text"}</summary>
            <textarea readOnly value={copiedReport ?? reportText} />
          </details>
        </div>
      ) : null}
    </>
  );
}

function buildIssueReport(draft: IssueDraft, game: GameState | null): IssueReport {
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

function buildReportDestination(report: IssueReport, reportText: string): string | null {
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

function formatIssue(issue: IssueReport): string {
  return [
    "MoneyLife Quest Issue Report",
    `ID: ${issue.id}`,
    `Created: ${issue.createdAt}`,
    `Type: ${labelForType(issue.issueType)}`,
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
    "Privacy note: this report was created locally in the browser and was not automatically sent anywhere."
  ].join("\n");
}

function shortTitle(description: string): string {
  const trimmed = description.trim().replace(/\s+/g, " ");
  if (!trimmed) return "Report";
  return trimmed.length > 54 ? `${trimmed.slice(0, 54)}...` : trimmed;
}

function labelForType(type: IssueDraft["issueType"]): string {
  if (type === "accessibility") return "Accessibility";
  if (type === "confusing") return "Confusing Moment";
  if (type === "content") return "Content";
  if (type === "other") return "Other";
  return "Bug";
}
