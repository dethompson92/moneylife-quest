# Claude Opus Transcript Integration Plan

Source file: `Context/Finlitbitlife Claude opus 4.8 genpspark transcript 6-7-26.md`

This transcript is treated as design and product research input, not as student-facing copy. The app should continue to use original scenario text, original definitions, and original UI language. Public finance resources and generated transcripts can shape topics, systems, and guardrails, but they should not be copied into gameplay as protected expression.

## Implement Now

### Goal Stack

- Add one primary goal plus up to two optional mini-goals.
- Preserve Open Life and Your Own Quest as goal-free sandbox modes.
- Show goal conflicts as tradeoffs, not errors.
- Make goal progress visible by goal group so students understand what they are working toward.
- Boost age-up events that relate to the active goal stack while preserving variety.

### Achievement and Ribbon Guardrails

- Keep rewarding process behaviors: reading terms, comparing choices, using math, asking for help, recovering after mistakes, and protecting accounts.
- Avoid achievement language that implies high net worth equals good character.
- Keep hidden achievements classroom-safe and never tied to harmful behavior.
- Maintain lint coverage so badges have trigger logic and do not drift into pure wealth rewards.

### Lantern Report Summary

- Continue the richer final report pattern already in the app: financial identity, values, ribbons, mastery maps, badges, goal progress, and copyable reflection.
- Separate main-goal progress from mini-goal progress.
- Keep the sentence that net worth is useful but is not self-worth.

### Scenario Chain Foundation

- Add typed coverage and event-selection priority for these chain flags:
  - `accountExposed`
  - `sentToWrongPerson`
  - `subscriptionCreep`
  - `usedEmergencyFund`
  - `rebuildsFund`
  - `survivedDownturn`
- Use those flags to gently prioritize follow-up events without making the run repetitive.

### Teacher Gate

- Teacher tools remain hidden behind the existing teacher gate.
- Student navigation should not show teacher-only planning, exports, or class simulation tools.
- Teacher exports must stay anonymized and must not introduce rosters, grades, names, or analytics.

## Implement Later

### Larger Chain Expansion

- Subscription creep over multiple years.
- Emergency fund build, use, and rebuild.
- Credit utilization and repair.
- First apartment and move-in costs.
- Transportation and car ownership total cost.
- Payment app mistake and recovery.
- Identity theft recovery.
- Investing downturn and rebalance.
- Career pathway comparison.
- College, trade, apprenticeship, and work-first decisions.
- Side hustle profit and record keeping.
- Insurance deductible and claim.
- Support-circle shared-cost decisions.

### Teacher Tools

- Compare-outcomes view using fake seeded runs.
- Markdown or CSV teacher export.
- Goal-specific discussion prompt generator.
- Seeded class simulation using only anonymized fictional data.

### Director System

- Stronger chain runner with required flags, cooldowns, and follow-up windows.
- Topic breadth guard that tracks more than recent log topics.
- Scenario quota balancing by grade band, topic, and goal.

## Already Implemented

- Static React/Vite/TypeScript app with no backend, no accounts, no ads, and no analytics.
- Local save and settings.
- Teacher password gate.
- Debug reporter with local saving and optional teacher inbox endpoint.
- Many expanded goals from the transcript.
- Behavior-oriented achievements.
- Ending ribbons and a richer final summary layer.
- Privacy, content, quota, and achievement lint scripts.
- Inline glossary popovers instead of a separate Money Words section.
- Support Circle with school-safe relationships.

## Do Not Implement

- Real student identifiers, rosters, grades, or demographic identity collection.
- Sensitive identity modeling based on race, ethnicity, sex, religion, disability, immigration status, precise location, or family income.
- Mature content, dating/sex content, drugs, gambling, alcohol, or crime-as-gameplay.
- Backend analytics or tracking.
- Copying BitLife, NGPF, Banzai, Napkin Finance, Humble Math, or worksheet/game wording.
- Any teacher feature visible to normal student navigation.

## Acceptance Targets For This Pass

- New games store `activeGoalIds` with one primary goal and up to two mini-goals.
- Old saves with only `activeGoalId` migrate safely.
- Open Life starts with no mini-goals and no required objectives.
- Goal selection warns about selected goal conflicts as tradeoffs.
- Goals screen groups objectives under main goal and mini-goals.
- Character header keeps the main goal simple and shows mini-goal count.
- Age-up event selection uses the full goal stack and a recent-topic variety guard.
- Summary text reports main-goal and mini-goal progress separately.
- Tests and build pass before deployment.
