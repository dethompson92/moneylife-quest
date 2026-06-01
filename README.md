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

Teacher-facing tools are hidden behind a classroom password. Set it during local builds or GitHub Pages deployment:

```bash
VITE_TEACHER_PASSWORD="choose-your-password" pnpm run build
```

If no build variable is set, the production Teacher Tools panel stays locked. Local development and tests use this fallback:

```text
future-life-budget
```

Important: because this is a static public site, this is a classroom gate, not high-security authentication. Do not put confidential teacher-only answers, student data, rosters, grades, or private records in the deployed app.

## Bug Reporter

The bottom-right Bug or issue button creates a local report. It never sends data automatically.

Optional deployment variables:

```text
VITE_GITHUB_ISSUES_URL=https://github.com/YOUR-USER/YOUR-REPO/issues/new?template=bug_report.yml
VITE_SUPPORT_EMAIL=you@example.com
```

If either is set, the app can open a prefilled issue or email. Copy and download still work without any configuration.

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. After pushing to `main`, configure GitHub Pages to use GitHub Actions, then set repository variables if desired:

- `VITE_TEACHER_PASSWORD`
- `VITE_GITHUB_ISSUES_URL`
- `VITE_SUPPORT_EMAIL`

The workflow installs dependencies, runs tests, builds the Vite app, uploads `dist`, and deploys Pages.

## Sources and Originality

See `docs/SOURCES.md` and the password-gated Teacher Guide source index. Public NGPF and Banzai resources, teacher-provided Google Docs/Slides, Napkin Finance, and classroom project PDFs were used as topic inspiration and attribution context only. MoneyLife Quest is not affiliated with or endorsed by BitLife, NGPF, Banzai, or Napkin Finance.

## Privacy

Students should use nicknames only. The app does not ask for full names, emails, phone numbers, addresses, school IDs, or locations. Game saves are kept in browser localStorage.
