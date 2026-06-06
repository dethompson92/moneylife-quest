# MoneyLife Quest Debug Report Inbox

MoneyLife Quest is hosted on GitHub Pages, so the site cannot write directly to the repository or a private database by itself. To collect reports from every student device, configure a public form-style endpoint and set it as `VITE_DEBUG_REPORT_ENDPOINT`.

## Recommended No-Login Setup: Google Sheets + Apps Script

1. Create a Google Sheet named `MoneyLife Quest Debug Reports`.
2. Add this header row:

   `Received At | Report ID | Type | Description | Steps | Optional Contact | Status | URL | Game Age | Game Turn | Browser | Screen Size | Full Report JSON`

3. Open `Extensions -> Apps Script`.
4. Paste this script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const raw = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
  const data = JSON.parse(raw);
  const diagnostics = data.diagnostics || {};

  sheet.appendRow([
    new Date(),
    data.id || "",
    data.issueType || "",
    data.description || "",
    data.steps || "",
    data.contact || "",
    data.status || "",
    diagnostics.url || "",
    diagnostics.gameAge || "",
    diagnostics.gameTurn || "",
    diagnostics.browser || "",
    diagnostics.screenSize || "",
    raw
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Click `Deploy -> New deployment`.
6. Choose `Web app`.
7. Set `Execute as` to `Me`.
8. Set `Who has access` to `Anyone`.
9. Copy the web app URL.
10. In the GitHub repository, add a repository variable:

```text
Name: VITE_DEBUG_REPORT_ENDPOINT
Value: your Google Apps Script web app URL
```

11. Re-run the GitHub Pages workflow or push a small commit.

## What Students Experience

When a student taps `Send & Save`, the app:

1. Saves the report locally in that browser.
2. Sends the report to the configured debug inbox endpoint.
3. Shows whether the inbox send succeeded or failed.

If the endpoint is missing or offline, the report remains saved locally on that device.

## Privacy Guardrails

- The report form tells students not to include full names, rosters, grades, phone numbers, addresses, or private information.
- Contact is optional.
- Diagnostics are limited to app state, browser string, screen size, URL, game age, game turn, mode, status, goal, pending event, and badge count.
- Do not use this inbox for grades, FERPA-protected records, or sensitive student information.
