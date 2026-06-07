# MoneyLife Quest Phase 1-3 Roadmap

This roadmap integrates the June 2026 ChatGPT planning note from `pasted-text.txt`.
It treats `Context/FINLITBITLIFE.md` as the master product bible, but maps the
recommendations onto the current MoneyLife Quest codebase instead of forcing a
large folder rename.

## Core Interpretation

The note says the project should stop treating `FINLITBITLIFE.md` as a raw idea
dump. It should become an acceptance contract for:

- typed scenario and game data,
- reusable game engines,
- local-only persistence,
- privacy and content lints,
- classroom-safe UI,
- replay progression,
- teacher discussion tools.

The most important instruction from the note is:

> Do not display the MD file as content. Convert it into typed data, engines,
> lints, tests, and classroom-safe UI.

## What Already Exists

The current app already covers much of the recommended Phase 1 and early Phase 2
foundation:

- Static React/Vite/TypeScript app with GitHub Pages workflow.
- Local-only saves and settings.
- Seeded RNG and deterministic class links.
- Scenario schema, choice resolution, locked choices, randomized outcomes, and
  future flags.
- Context importer for `FINLITBITLIFE.md`.
- 594 imported context scenarios and 677 glossary terms.
- Core goals and expanded merged-context goals.
- Achievement engine and behavior-focused badges.
- Open Life mode for self-directed play.
- Inline Money Words popovers instead of a separate glossary wall.
- Score guide ranges for student-facing stat meaning.
- Support Circle with guardian/family at start and relationship unlocks later.
- Activities page with available actions and collapsed `Coming Later`.
- Financial Identity, Values Compass, Ending Ribbons, Mastery Maps, and local
  Financial Museum on the final summary.
- Debug reporter connected to a central teacher inbox when configured.
- Teacher tools gated from normal student navigation.

## Current Codebase Mapping

The planning note suggests generic paths such as `src/systems/*` and
`src/components/*`. In this repo, the current equivalents are:

| Planning concept | Current app location |
| --- | --- |
| Scenario data | `src/data/scenarioPacks/*` |
| Context scenario importer | `scripts/parseContext.js` |
| Game state and core actions | `src/types/game.ts`, `src/features/game/*` |
| Choice resolver | `src/features/events/eventEngine.ts` |
| Event selection | `src/features/events/eventSelection.ts` |
| Goal definitions and engine | `src/features/goals/*` |
| Achievement definitions and engine | `src/features/achievements/*` |
| Finance, credit, net worth | `src/features/finance/*` |
| Support Circle | `src/features/character/supportCircle.ts` |
| Activities | `src/features/activities/*` |
| Glossary/Money Words | `src/features/glossary/*`, `src/data/contextGlossary.ts` |
| Score labels | `src/data/scoreGuides.ts`, `src/features/stats/ScoreGuidePanel.tsx` |
| Progression identity/maps/museum | `src/features/progression/*` |
| Storage | `src/lib/storage.ts` |
| Teacher tools | `src/features/teacher/TeacherGuide.tsx` |
| Reporting/debug inbox | `src/features/reporting/*`, `docs/DEBUG_REPORT_INBOX.md` |

## Phase 1: Playable Learning Core

Goal: make the existing core loop stricter, more auditable, and more complete.

Current status: mostly implemented.

Remaining high-value work:

- Add explicit `quotaTags`, `goalsAffected`, `achievementTriggers`,
  `glossaryTerms`, and `futureFlag` metadata to imported context scenarios when
  cleanly parseable.
- Add a `GoalHookNote` in event modals so students can see why a scenario matters
  to the active goal.
- Add a small `ComebackTracker` surface for repair ladders after missed payments,
  scams, overdrafts, or debt stress.
- Deepen asset/debt records beyond aggregate totals so net worth can show
  spendable money versus owned assets versus debt.
- Add lint scripts that make the context file enforceable before build.

Recommended acceptance tests:

- Every scenario ID is unique.
- Every scenario has 2-4 choices.
- Every choice has feedback and reflection.
- Every referenced glossary term resolves.
- Every achievement is reachable or explicitly global.
- Locked choices display a clear requirement and cannot apply effects.
- Random outcomes explain luck versus choice quality.
- Final reflection states that net worth is not self-worth.

## Phase 2: Replay and Meta-Progression

Goal: make replay valuable because students can become different kinds of
financial decision-makers, not because they chase a wealth score.

Current status: first slice implemented.

Already implemented:

- Financial Identity archetypes.
- Values Compass.
- Ending Ribbons.
- Mastery Maps on final summary.
- Local-only Financial Museum run cards.

Next Phase 2 build slices:

1. Add a dedicated `Mastery Maps` view reachable from Goals or Summary so
   students can see skill nodes before a run ends.
2. Add a `Run Compare` view that compares local museum cards without ranking.
3. Add tiny, noncompetitive Legacy Unlocks:
   - small stat nudge,
   - unlocked reflection prompt,
   - optional context seed,
   - no money windfall,
   - no leaderboard advantage.
4. Add `Replay With New Goal` for selected completed scenarios so students can
   see how the same decision changes under a different goal lens.

Guardrails:

- No student ranking.
- No class leaderboard.
- No backend.
- No wealth snowballing from legacy unlocks.
- Values remain enum-only, not free-text identity data.

## Phase 3: Classroom and Teacher Systems

Goal: support discussion without turning the app into surveillance software.

Current status: teacher guide and gated teacher tools exist; the reflection
gallery layer is not yet built.

Recommended build slices:

1. Teacher Mode Safety Notice:
   - "Teacher Mode is local-only."
   - "No student names, rosters, grades, analytics, or personal data are
     collected."
2. Teacher Reflection Cards:
   - goal,
   - archetype,
   - ribbon,
   - top values,
   - key achievement,
   - discussion prompt,
   - sentence starter.
3. Local-only Teacher Reflection Gallery:
   - copy card text,
   - print card,
   - clear local cards.
4. Discussion Prompt Engine:
   - warmups,
   - pair-shares,
   - exit tickets,
   - compare-outcome prompts,
   - goal-reflection prompts.
5. Goal Conflict Notices:
   - frame productive tension, not incompatibility.
   - example: Investor Starter and Emergency Fund Anchor pull money in different
     directions because one needs time and one needs liquidity.

Guardrails:

- No student names.
- No rosters.
- No grades.
- No analytics.
- No public class reports.
- No export of student free-response by default.

## Lint and Acceptance Contract

The note strongly recommends turning privacy and content expectations into
scripts. This is the biggest technical gap left.

Recommended scripts:

- `scripts/privacyLint.ts`
- `scripts/contentLint.ts`
- `scripts/quotaLint.ts`
- `scripts/achievementLint.ts`

Recommended package scripts:

- `lint:privacy`
- `lint:content`
- `lint:quota`
- `lint:achievements`
- `lint:all`

Privacy lint should fail on sensitive fields or tracking language such as:

- `studentName`
- `realName`
- `email`
- `phone`
- `address`
- `zipCode`
- `race`
- `ethnicity`
- `gender`
- `sex`
- `religion`
- `disability`
- `immigrationStatus`
- `familyIncome`
- `exactLocation`
- `analytics`
- `gtag`
- `mixpanel`
- `posthog`
- `segment`

Important nuance: the app has an optional debug-report endpoint using `fetch`
when configured. A privacy lint should not blindly ban all `fetch` usage; it
should allow the known reporting endpoint wrapper and fail on unreviewed network
calls elsewhere.

Content lint should check:

- no real brands in student scenarios,
- no mature themes,
- no endorsement claims,
- no missing tradeoff notes,
- no unsafe hidden achievements,
- no orphan achievement triggers,
- simplified model labels where required.

Quota lint should check:

- mixed tradeoff scenarios,
- locked-choice scenarios,
- randomized-outcome scenarios,
- future-flag scenarios,
- support-circle scenarios,
- math scenarios,
- extension scenarios,
- asset/net-worth scenarios.

Achievement lint should check:

- achievements unlock once,
- achievements have valid trigger paths,
- hidden achievements reward safe behaviors,
- no achievement rewards only final wealth.

## Recommended Next Build Order

1. Add lint scripts and package scripts first.
2. Add tests for the lint scripts.
3. Add Goal Hook notes in event modals.
4. Add a student-facing Mastery Maps page.
5. Add Run Compare for local museum cards.
6. Add Teacher Mode Safety Notice and reflection cards.
7. Add tiny noncompetitive Legacy Unlocks.
8. Add Replay With New Goal.
9. Deepen asset/debt records.
10. Expand context importer metadata only after the lints exist.

## Non-Negotiables

- No backend.
- No login.
- No ads.
- No analytics.
- No student account system.
- No student demographic fields.
- No real family-income or location data.
- No mature content.
- No shame language.
- No wealth-equals-worth messaging.
- No debt-equals-failure messaging.
- No "college is the only good path" messaging.
- All post-high-school pathways remain viable.

## Final Target

MoneyLife Quest should teach that money choices can shape options, habits, and
confidence. Net worth is a number. It is not a person's worth.
