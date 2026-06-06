# MoneyLife Quest

MoneyLife Quest is a school-safe financial-literacy life simulator for 7th grade classrooms. Students start a fictional character, choose a goal, age forward, make money decisions, see consequences, unlock badges, and finish with a reflection summary.

The app is static and GitHub Pages-ready:

- No student accounts
- No ads or analytics
- No backend or external APIs
- Saves stay in the local browser
- Original scenario text only
- Teacher tools are password-gated

## Local Setup

This project uses React, TypeScript, Vite, Vitest, Playwright, and pnpm.

```bash
pnpm install
pnpm run dev
pnpm test
pnpm run build
pnpm run test:e2e
```

## Teacher Password

Teacher-facing tools are hidden behind a classroom password gate. Do not place the plaintext password in source code, `.env` files that will be committed, or GitHub Pages variables.

For GitHub Pages, set a repository secret named:

```text
TEACHER_TOOLS_PASSWORD
```

Set its value to your classroom password. The deploy workflow turns that secret into a one-way SHA-256 hash at build time and publishes only the hash, not the plaintext password.

For local development, generate a hash and pass only the hash:

```bash
node -e "console.log(require('node:crypto').createHash('sha256').update(process.argv[1]).digest('hex'))" "your-password"
VITE_TEACHER_PASSWORD_HASH="paste-generated-hash" pnpm run build
```

If no hash is configured, the Teacher Tools panel stays locked.

Important: because this is a static public site, this is a classroom gate, not high-security authentication. A determined student can inspect and modify client-side JavaScript. Do not put confidential teacher-only answers, student data, rosters, grades, or private records in the deployed app.

## Bug Reporter and Debug Log

The bottom-right Bug or issue button lets a player write a debug note, then tap Send & Save. The report is saved in `localStorage` under `moneylife.debugReports.v1` on that browser. Teacher Tools includes a protected Debug Log tab for reviewing, copying, downloading, deleting, or clearing those locally saved reports.

Reports do not open GitHub Issues or email. To receive reports from student devices, configure `VITE_DEBUG_REPORT_ENDPOINT` so Send & Save can automatically POST the report to your debug inbox after saving locally.

Optional deployment variables:

```text
VITE_DEBUG_REPORT_ENDPOINT=https://script.google.com/macros/s/YOUR-DEPLOYMENT-ID/exec
```

If the endpoint is set, the app saves locally and sends to that inbox. If the endpoint is missing or unavailable, local save, copy, and download still work.

See [docs/DEBUG_REPORT_INBOX.md](docs/DEBUG_REPORT_INBOX.md) for a Google Sheets + Apps Script setup that creates a no-login teacher-accessible inbox.

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. After pushing to `main`, configure GitHub Pages to use GitHub Actions, then set repository variables if desired:

- Secret: `TEACHER_TOOLS_PASSWORD`
- Variable: `VITE_DEBUG_REPORT_ENDPOINT`

The workflow installs dependencies, runs unit tests, installs Playwright Chromium, runs the browser smoke test, builds the Vite app, uploads `dist`, and deploys Pages.

## Sources and Originality

See `docs/SOURCES.md` and the password-gated Teacher Guide source index. Public NGPF and Banzai resources, teacher-provided Google Docs/Slides, Napkin Finance, and classroom project PDFs were used as topic inspiration and attribution context only. MoneyLife Quest is not affiliated with or endorsed by BitLife, NGPF, Banzai, or Napkin Finance.

## Privacy

Students should use nicknames only. The app does not ask for full names, emails, phone numbers, addresses, school IDs, or locations. Game saves are kept in browser localStorage.
