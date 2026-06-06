import { useMemo, useState } from "react";
import { Bug, Clipboard, Download, Send, X } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { saveDebugReport } from "../../lib/storage";
import type { GameState } from "../../types/game";
import type { IssueDraft, IssueReport } from "../../types/reporting";
import { buildIssueReport, buildReportDestination, formatIssue } from "./reportingUtils";

export function IssueReporter({ game, onCopy }: { game: GameState | null; onCopy: (text: string) => void }) {
  const [open, setOpen] = useState(false);
  const [copiedReport, setCopiedReport] = useState<string | null>(null);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
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

  function sendAndSaveReport() {
    if (!canSubmit) return;
    const storedReport: IssueReport = {
      ...report,
      status: reportDestination ? "handoff-opened" : "saved-local"
    };
    const result = saveDebugReport(storedReport);
    if (!result.ok) {
      setSaveError(result.error);
      setSavedNotice(null);
      return;
    }

    const storedText = formatIssue(storedReport);
    setCopiedReport(storedText);
    setSaveError(null);
    setSavedNotice(reportDestination ? "Saved locally and opened the report handoff." : "Saved locally on this browser for teacher review or export.");

    if (reportDestination) {
      window.open(reportDestination, "_blank", "noopener,noreferrer");
    }
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
          <p>Reports save locally when you send them. Do not include student names, private information, or class rosters.</p>
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
          {savedNotice ? <p className="issue-panel__status" role="status">{savedNotice}</p> : null}
          {saveError ? <p className="issue-panel__error" role="alert">Could not save report: {saveError}</p> : null}
          <div className="button-row">
            <Button icon={<Send aria-hidden="true" />} onClick={sendAndSaveReport} disabled={!canSubmit}>
              Send & Save
            </Button>
            <Button variant="secondary" icon={<Clipboard aria-hidden="true" />} onClick={copyReport} disabled={!canSubmit}>Copy</Button>
            <Button variant="secondary" icon={<Download aria-hidden="true" />} onClick={downloadReport} disabled={!canSubmit}>Download</Button>
          </div>
          {!reportDestination ? (
            <p className="issue-panel__hint">This deployment has no outside handoff URL configured yet, so Send & Save stores the report in this browser only.</p>
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
