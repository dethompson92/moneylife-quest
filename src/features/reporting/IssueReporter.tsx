import { useMemo, useState } from "react";
import { Bug, Clipboard, Download, Send, X } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { saveDebugReport } from "../../lib/storage";
import type { GameState } from "../../types/game";
import type { IssueDraft, IssueReport } from "../../types/reporting";
import { buildIssueReport, formatIssue, sendReportToEndpoint } from "./reportingUtils";

export function IssueReporter({ game, onCopy }: { game: GameState | null; onCopy: (text: string) => void }) {
  const [open, setOpen] = useState(false);
  const [copiedReport, setCopiedReport] = useState<string | null>(null);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [draft, setDraft] = useState<IssueDraft>({
    issueType: "bug",
    description: "",
    steps: "",
    contact: "",
    includeDiagnostics: true
  });

  const report = useMemo(() => buildIssueReport(draft, game), [draft, game]);
  const reportText = useMemo(() => formatIssue(report), [report]);
  const canSubmit = draft.description.trim().length > 0;

  function copyReport() {
    setCopiedReport(reportText);
    onCopy(reportText);
  }

  async function sendAndSaveReport() {
    if (!canSubmit) return;
    setIsSending(true);
    const localReport: IssueReport = {
      ...report,
      status: "saved-local"
    };

    const localSave = saveDebugReport(localReport);
    if (!localSave.ok) {
      setSaveError(localSave.error);
      setSavedNotice(null);
      setIsSending(false);
      return;
    }

    setSaveError(null);
    setSavedNotice("Saved locally. Sending to the debug inbox...");

    const localText = formatIssue(localReport);
    const remoteResult = await sendReportToEndpoint(localReport, localText);
    const finalReport: IssueReport = {
      ...localReport,
      status: remoteResult.ok ? "sent-remote" : remoteResult.skipped ? "saved-local" : "remote-failed",
      remoteError: remoteResult.ok || remoteResult.skipped ? undefined : remoteResult.error
    };
    const finalSave = saveDebugReport(finalReport);
    const finalText = formatIssue(finalReport);
    setCopiedReport(finalText);
    setIsSending(false);

    if (!finalSave.ok) {
      setSaveError(finalSave.error);
      setSavedNotice(null);
      return;
    }

    if (remoteResult.ok) {
      setSavedNotice("Sent to the debug inbox and saved locally.");
    } else if (remoteResult.skipped) {
      setSavedNotice("Saved locally on this browser. No debug inbox endpoint is configured yet.");
    } else {
      setSavedNotice(`Saved locally, but the debug inbox send failed: ${remoteResult.error}`);
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
            <Button icon={<Send aria-hidden="true" />} onClick={sendAndSaveReport} disabled={!canSubmit || isSending}>
              {isSending ? "Sending..." : "Send & Save"}
            </Button>
            <Button variant="secondary" icon={<Clipboard aria-hidden="true" />} onClick={copyReport} disabled={!canSubmit}>Copy</Button>
            <Button variant="secondary" icon={<Download aria-hidden="true" />} onClick={downloadReport} disabled={!canSubmit}>Download</Button>
          </div>
          <p className="issue-panel__hint">Send & Save uses the classroom debug inbox endpoint when configured. If the inbox is unavailable, the report remains saved on this browser.</p>
          <details className="issue-preview" open={Boolean(copiedReport)}>
            <summary>{copiedReport ? "Copied report text" : "Preview report text"}</summary>
            <textarea readOnly value={copiedReport ?? reportText} />
          </details>
        </div>
      ) : null}
    </>
  );
}
