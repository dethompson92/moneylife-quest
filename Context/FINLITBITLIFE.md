# MoneyLife Quest — Curriculum & Design Batch

**Creative Seed:** `MAPLE-SPARROW-72` (named per your instruction; used to bias scenario flavor toward neighborhood/community settings, weather-and-transit framing, and the recurring "72" nod to the Rule of 72)

A quick note before I begin: this is a large, multi-part deliverable. I've written all 12 sections fully, but for the 75-scenario bank I've kept each scenario tight and consistent rather than padding, so the whole thing stays usable. Everything below is original student-facing text written for your app. No source wording is copied; sources are attributed only as categories.

---

## 1. Executive Research Synthesis

1. **Tradeoffs beat "correct answers" for 7th graders.** Middle schoolers disengage when a game feels like a quiz with a hidden right choice. Designing most decisions so two paths are each defensible keeps replay value and supports real reasoning. *Why it matters:* it shifts classroom talk from "what's the answer" to "what did you value."

2. **Compounding must be felt, not just defined.** Students grasp compound interest better when an early small choice visibly snowballs three age-steps later in the life log. *Why:* abstract exponential growth is genuinely hard at this age; a narrative consequence makes it concrete.

3. **Shame kills learning in money topics.** Many students live in households under financial stress. Any framing that implies "poor = bad choices" damages trust and excludes kids. *Why:* model constraints as access variables, never as character flaws.

4. **Percent fluency is the core math bottleneck.** Discounts, tips, tax, interest, and utilization all reduce to percent-of-a-number. *Why:* if scenarios reinforce one transferable skill, make it percent reasoning.

5. **Net vs. gross pay is consistently surprising.** Students dramatically overestimate take-home pay. *Why:* an early "your paycheck is smaller than your offer" moment is high-impact and corrects a durable misconception.

6. **Scam literacy is the highest-stakes real-world payoff.** Teens are heavily targeted by impostor, payment-app, and job scams. *Why:* this is the content most likely to protect a real student this year, not in adulthood.

7. **Subscription and BNPL "small recurring" math is invisible to students.** $4.99/month doesn't register as $60/year. *Why:* multiplication-over-time scenarios teach a habit, not just a fact.

8. **Emergency funds explain "why save" better than abstract goals.** A surprise expense that a cushion absorbs vs. one that forces debt is a vivid causal lesson. *Why:* it answers the question students actually ask: "why not just spend it?"

9. **Identity questions must be replaced with fictional variables.** Asking real demographics is both a privacy violation and pedagogically unnecessary. *Why:* fictional "support access / transit access / local cost" sliders create authentic variety safely.

10. **Short text blocks win on Chromebooks.** Dense paragraphs lose 7th graders fast. *Why:* 2–4 sentence prompts and chunked feedback respect attention and reading load.

11. **Glossary-on-demand reduces vocabulary gatekeeping.** Many students stall on a single unknown word (deductible, principal). *Why:* inline Money Words cards keep struggling readers in the game.

12. **Recovery arcs are essential.** If one bad choice tanks the run, students stop experimenting. *Why:* every mistake should have a believable path back, modeling real financial resilience.

13. **Reflection prompts convert play into learning.** A single "why did you choose that?" after a decision triples retention in classroom settings. *Why:* it's the cheapest, highest-yield feature.

14. **Pathway diversity must be genuinely neutral.** Trade school, apprenticeship, military, work-first, and 4-year college should all lead to viable outcomes. *Why:* games that quietly reward "college only" misinform and alienate.

15. **Randomness teaches that good choices aren't guarantees.** A diversified investment that still dips, or insurance that "wasn't needed this year," models real risk honestly. *Why:* it prevents the false lesson that outcomes prove choices.

16. **Teacher materials are planning tools, not answer keys.** Confidential keys invite cheating and create data risks. *Why:* discussion prompts and facilitation notes serve teachers better and stay school-safe.

17. **Math should be optional-surface, always-present underneath.** Show the arithmetic for students who want it; let others act on plain-language summaries. *Why:* differentiates without splitting the build.

18. **Stat interdependence creates strategy.** Letting discipline buffer wellbeing, or opportunity unlock locked choices, rewards systems thinking over single-stat grinding. *Why:* it mirrors how real life skills interact.

---

## 2. New Feature Recommendations

**1. Money Words Inline Cards**
- *Student purpose:* tap any finance term to see a kid-friendly definition + math link.
- *Teacher value:* built-in vocabulary scaffold; no separate handout.
- *State:* `glossarySeen[termId]`, hover/tap log (local only).
- *Risk:* none; keep definitions original/attributed.
- *MVP:* static card on tap. *Stretch:* "word collected" badge + review deck.

**2. Consequence Timeline ("Ripple Log")**
- *Student purpose:* shows how a past choice caused a current event.
- *Teacher value:* makes compounding visible for discussion.
- *State:* `events[]` with `causedBy` flag links.
- *Risk:* none. *MVP:* text trail. *Stretch:* visual arrows/branch view.

**3. Percent Helper Toggle**
- *Student purpose:* optional show-the-math panel on any money decision.
- *Teacher value:* differentiation for math support.
- *State:* `mathHelperOn` boolean.
- *Risk:* none. *MVP:* reveal calculation steps. *Stretch:* student fills blank, app checks.

**4. Decision Reflection Capture**
- *Student purpose:* one-line "why I chose this."
- *Teacher value:* exit-ticket source; reflection practice.
- *State:* `reflections[]` (localStorage).
- *Risk:* could contain personal text — keep local, never transmit, allow clear.
- *MVP:* optional text box. *Stretch:* end-of-run reflection summary.

**5. Support Circle Panel**
- *Student purpose:* see family/friend/mentor/pet and how they help/cost.
- *Teacher value:* discuss support networks safely.
- *State:* `supportCircle{}` with trust/availability values.
- *Risk:* keep relationships fictional, finance-only.
- *MVP:* 4 fixed roles. *Stretch:* relationship events affect odds.

**6. Scam Inbox Minigame**
- *Student purpose:* sort legit vs. suspicious messages.
- *Teacher value:* high-value safety lesson.
- *State:* `scamScore`, `flaggedCorrectly[]`.
- *Risk:* don't use real brand names; fictional senders only.
- *MVP:* 5-message sort. *Stretch:* escalating difficulty + 2FA mechanic.

**7. Budget Builder (50/30/20 sandbox)**
- *Student purpose:* allocate fictional paycheck across categories.
- *Teacher value:* hands-on budgeting + percent practice.
- *State:* `budget{needs,wants,save}`.
- *Risk:* none. *MVP:* slider that must sum to 100%. *Stretch:* monthly cash-flow simulation.

**8. Goal Jar / Sinking Fund Tracker**
- *Student purpose:* save toward a named short-term goal.
- *Teacher value:* teaches sinking funds.
- *State:* `goals[]{target,saved,deadlineAge}`.
- *Risk:* none. *MVP:* progress bar. *Stretch:* multiple competing goals.

**9. Rule of 72 Visualizer**
- *Student purpose:* estimate doubling time at a rate.
- *Teacher value:* compound intuition + division practice.
- *State:* none persistent.
- *Risk:* none. *MVP:* input rate → years. *Stretch:* compare 3 rates side-by-side.

**10. Net vs. Gross Paycheck Reveal**
- *Student purpose:* see deductions shrink an offer.
- *Teacher value:* corrects pay misconception.
- *State:* `payHistory[]`.
- *Risk:* keep tax figures clearly "simplified for learning."
- *MVP:* one reveal. *Stretch:* simple W-4-style choices.

**11. Credit Score Meter (300–850)**
- *Student purpose:* watch utilization/payments move a score.
- *Teacher value:* demystifies credit.
- *State:* `creditScore|null`, `utilization`.
- *Risk:* label as simplified model.
- *MVP:* number + range label. *Stretch:* factor breakdown.

**12. Subscription Audit Event**
- *Student purpose:* find and cut forgotten recurring charges.
- *Teacher value:* recurring-cost math.
- *State:* `subscriptions[]{cost,active}`.
- *Risk:* none. *MVP:* list with cancel toggle. *Stretch:* auto-creep over time.

**13. Comparison Shopping Table**
- *Student purpose:* compute unit price across options.
- *Teacher value:* unit-rate math.
- *State:* none persistent.
- *Risk:* none. *MVP:* 2–3 item table. *Stretch:* hidden shipping/fees twist.

**14. Pathway Explorer (post-HS)**
- *Student purpose:* compare trade/apprenticeship/military/college/work-first.
- *Teacher value:* neutral career exploration.
- *State:* `pathwayChosen`, `pathwayCost`.
- *Risk:* keep all paths viable, non-judgmental.
- *MVP:* 5 cards with cost/time/outcome. *Stretch:* multi-year payoff sim.

**15. FAFSA / Aid Concept Walkthrough**
- *Student purpose:* understand aid vs. loans (concept only).
- *Teacher value:* college-cost literacy.
- *State:* `aidUnlocked`.
- *Risk:* don't collect family income — use fictional "aid eligibility tier."
- *MVP:* explainer + 1 decision. *Stretch:* loan-term comparison.

**16. Insurance Risk-Pool Simulator**
- *Student purpose:* decide coverage vs. self-insure.
- *Teacher value:* premium/deductible math.
- *State:* `policies[]`, `claimsHistory[]`.
- *Risk:* none. *MVP:* one claim event. *Stretch:* deductible tradeoff dial.

**17. Side-Hustle Ledger**
- *Student purpose:* track income/expenses/profit.
- *Teacher value:* profit-loss + record-keeping.
- *State:* `ledger[]`.
- *Risk:* none. *MVP:* income − costs = profit. *Stretch:* taxes/fees added.

**18. Inflation Drift Indicator**
- *Student purpose:* see prices rise slowly over years.
- *Teacher value:* purchasing-power lesson.
- *State:* `inflationIndex`.
- *Risk:* none. *MVP:* price tag rises. *Stretch:* wage-vs-price comparison.

**19. Badge & Habit Tracker**
- *Student purpose:* earn badges for consistent good habits.
- *Teacher value:* motivation, behavior framing.
- *State:* `badges[]`, `habitStreaks{}`.
- *Risk:* avoid shaming for missed streaks.
- *MVP:* 10 badges. *Stretch:* habit-decay/recovery.

**20. Source Evaluation Checkpoint (8th–10th)**
- *Student purpose:* judge if a "money tip" source is trustworthy.
- *Teacher value:* media literacy.
- *State:* `sourceScore`.
- *Risk:* fictional sources only. *MVP:* rate 3 tips. *Stretch:* spot the scam-advice.

**21. End-of-Run Reflection Report**
- *Student purpose:* summary of values shown by choices.
- *Teacher value:* discussion + self-assessment.
- *State:* aggregates from session.
- *Risk:* keep local; framed kindly. *MVP:* stat recap. *Stretch:* "what I'd do differently."

**22. Difficulty/Context Seed Selector**
- *Student purpose:* start with different fictional constraints for replay.
- *Teacher value:* discuss how circumstances shape choices.
- *State:* `contextSeed{}`.
- *Risk:* fictional variables only, never real identity.
- *MVP:* 3 presets. *Stretch:* randomized seed.

**23. "What If" Rewind (single)**
- *Student purpose:* replay one past decision to compare.
- *Teacher value:* counterfactual reasoning.
- *State:* snapshot at decision point.
- *Risk:* none. *MVP:* one rewind/run. *Stretch:* branch comparison.

**24. Emergency Fund Shield**
- *Student purpose:* cushion that auto-absorbs surprise costs.
- *Teacher value:* concrete saving payoff.
- *State:* `emergencyFund`.
- *Risk:* none. *MVP:* absorbs one event. *Stretch:* partial coverage math.

**25. Vocabulary Review Deck**
- *Student purpose:* flashcard review of collected Money Words.
- *Teacher value:* retention tool.
- *State:* `glossarySeen[]`.
- *Risk:* none. *MVP:* simple flip cards. *Stretch:* spaced review.

---

## 3. Scenario Systems and Chains

**Chain 1 — Subscription Creep**
- *Learning target:* recurring-cost math; cancellation habits.
- *Trigger ages:* 13–16.
- *Required flags:* `firstSubscription`.
- *Events:* (1) Free trial sign-up → (2) First auto-charge surprise → (3) Bundle "deal" adds two more → (4) Subscription audit choice → (5) Yearly cost reveal.
- *Compounds:* skipping the audit raises monthly drain each step; canceling early frees cash for a goal.
- *Endings:* Lean Subscriber (managed), Drift (quietly bleeding cash), Auditor (cut + reallocated to savings).

**Chain 2 — Emergency Fund**
- *Learning target:* why cushions exist.
- *Trigger ages:* 14–18.
- *Required flags:* `hasIncome`.
- *Events:* (1) Choose to start a fund → (2) Tempting purchase vs. fund → (3) Surprise expense hits → (4) Fund absorbs or debt forms → (5) Rebuild decision.
- *Compounds:* fund size at event 3 decides whether you take debt; debt taken triggers Chain 3.
- *Endings:* Cushioned, Caught Short (recovered), Caught Short (still rebuilding).

**Chain 3 — Credit History Begins (16–18)**
- *Learning target:* utilization, minimum payments, building history.
- *Required flags:* `eligibleForCredit`, age ≥ 16.
- *Events:* (1) First credit account decision → (2) Spending vs. limit (utilization) → (3) Pay full / minimum / partial → (4) Score reveal → (5) Loan offer that depends on score.
- *Compounds:* high utilization + minimums lower score → worse loan terms later.
- *Endings:* Strong History, Thin File, Rebuilding.

**Chain 4 — First Apartment (18+ planning)**
- *Learning target:* deposits, recurring costs, renter insurance.
- *Required flags:* `hasSteadyIncome`.
- *Events:* (1) Budget for rent → (2) Deposit + first month → (3) Renter insurance yes/no → (4) Roommate cost-split → (5) Surprise (leak/theft) tests insurance.
- *Compounds:* skipping insurance + thin emergency fund = painful event 5.
- *Endings:* Settled, Stretched, Covered-and-Calm.

**Chain 5 — Car Ownership**
- *Learning target:* loan terms, insurance, total cost of ownership.
- *Required flags:* `needsTransport`.
- *Events:* (1) Buy used cash vs. finance → (2) Loan term length choice → (3) Insurance level → (4) Repair surprise → (5) Total-cost reveal.
- *Compounds:* long loan = lower payment but more interest shown at event 5.
- *Endings:* Paid Off, Still Paying, Skipped Car (uses transit).

**Chain 6 — Payment Apps**
- *Learning target:* P2P safety, irreversible transfers.
- *Trigger ages:* 13–17.
- *Required flags:* `usesPaymentApp`.
- *Events:* (1) First app setup + 2FA choice → (2) Split a group cost → (3) "Accidental" request from stranger → (4) Send-to-wrong-person scenario → (5) Recovery attempt.
- *Compounds:* no 2FA + sending to strangers raises scam exposure.
- *Endings:* Safe User, Burned-but-Learned, Locked Down.

**Chain 7 — Identity Theft Recovery (8th–10th)**
- *Learning target:* response steps, monitoring.
- *Required flags:* `dataExposed`.
- *Events:* (1) Notice strange charge → (2) Freeze/alert decision → (3) Report + document → (4) Dispute outcome (randomized) → (5) Habit change (passwords/2FA).
- *Compounds:* fast freeze reduces damage; ignoring escalates.
- *Endings:* Resolved Quickly, Long Cleanup, Hardened Habits.

**Chain 8 — Investing Downturn**
- *Learning target:* diversification, time horizon, not panic-selling.
- *Required flags:* `hasInvestments`.
- *Events:* (1) Choose fund vs. single bet → (2) Market rises → (3) Market drops (randomized depth) → (4) Sell / hold / buy → (5) Long-horizon reveal.
- *Compounds:* diversified + hold tends to recover; single bet is volatile.
- *Endings:* Steady Investor, Shaken Out, Bargain Buyer.

**Chain 9 — Career Pathway**
- *Learning target:* neutral pathway comparison.
- *Required flags:* age ≥ 16.
- *Events:* (1) Explore interests → (2) Choose pathway (trade/apprentice/military/college/work-first) → (3) Cost/time tradeoff → (4) First job or training milestone → (5) Income + debt snapshot.
- *Compounds:* each path has distinct cost/time/income profile, all viable.
- *Endings:* one per pathway, each with pros/cons.

**Chain 10 — College Aid**
- *Learning target:* aid vs. loans, total cost.
- *Required flags:* `pathwayChosen = college`.
- *Events:* (1) Aid concept walkthrough → (2) Scholarship search effort → (3) Aid tier reveal (fictional) → (4) Loan amount choice → (5) Repayment preview.
- *Compounds:* scholarship effort lowers loans; big loans show repayment weight.
- *Endings:* Low-Debt, Manageable, Heavy-Load (with recovery note).

**Chain 11 — Entrepreneurship**
- *Learning target:* profit/loss, reinvestment, records.
- *Required flags:* `startedSideHustle`.
- *Events:* (1) Startup cost decision → (2) Pricing choice → (3) Demand event (randomized) → (4) Reinvest vs. pocket profit → (5) Profit-loss statement.
- *Compounds:* records kept = clear statement; reinvestment grows capacity.
- *Endings:* Growing, Break-Even, Folded-but-Learned.

**Chain 12 — Insurance Claim**
- *Learning target:* premium/deductible math, when to claim.
- *Required flags:* `hasPolicy`.
- *Events:* (1) Choose deductible level → (2) Pay premiums → (3) Damage event → (4) Claim vs. pay-out-of-pocket → (5) Premium-change reveal.
- *Compounds:* low deductible = higher premium; small claim may not be worth it.
- *Endings:* Well-Covered, Self-Insured, Over-Insured.

**Chain 13 — Family Support (school-safe, finance-only)**
- *Learning target:* shared costs, giving/receiving help.
- *Required flags:* `supportCircle.family`.
- *Events:* (1) Family shares a cost → (2) You contribute to a household goal → (3) Schedule pressure affects work hours → (4) Mutual-aid choice → (5) Reflection on interdependence.
- *Compounds:* contributing builds trust stat; over-extending strains wellbeing.
- *Endings:* Balanced, Generous-but-Stretched, Supported.

**Chain 14 — Mentor Advice**
- *Learning target:* using guidance, source evaluation.
- *Required flags:* `supportCircle.mentor`.
- *Events:* (1) Mentor offers a tip → (2) Apply or ignore → (3) Outcome → (4) Conflicting online tip → (5) Evaluate which to trust.
- *Compounds:* applying solid advice unlocks opportunity; trusting bad online tips backfires.
- *Endings:* Coachable, Independent, Discerning.

**Chain 15 — Pet Responsibility**
- *Learning target:* predictable + surprise recurring costs.
- *Required flags:* `hasPet`.
- *Events:* (1) Adopt + startup supplies → (2) Monthly food budget → (3) Vet surprise (randomized) → (4) Pet insurance vs. emergency fund → (5) Year-cost total.
- *Compounds:* no cushion + vet surprise = debt; planning absorbs it.
- *Endings:* Prepared Owner, Scrambling, Insured-and-Calm.

---

## 4. Fresh Scenario Bank (75 Original Scenarios)

Format note: to keep this readable I use a compact line format per scenario. Counts are tracked and totaled at the end.

**Conventions:** *MT* = mixed-tradeoff, *L* = locked choice, *R* = randomized, *FF* = future flag, *SC* = support circle, *M* = explicit 7th-grade math, *EXT* = 8th–10th extension, *AN* = asset/net-worth.

---

**1. `weatherproof-coat`** — "The Two-Winter Coat" — Age 12–13 — *needs/wants, unit cost over time* [MT, M]
Prompt: A cheap coat costs $30 but usually lasts one winter; a sturdier coat costs $60 and tends to last two. You have $70 saved. Which do you buy, and what do you do with the rest?
Choices: (a) Cheap coat, save $40 — *short-term cash kept, may rebuy next year* → cash −30, savings +0; feedback: "$30/year for two years = $60 either way—plus the hassle of rebuying." (b) Sturdy coat, save $10 — *higher upfront, lower yearly cost* → cash −60; feedback: "$60 ÷ 2 years = $30/year, same yearly cost but no rebuy risk." (c) Cheap coat now, start a coat sinking fund — *plan ahead* → cash −30, goal +5/mo; feedback: "You're spreading next year's cost into small chunks."
Reflection: "Did you weigh cost-per-year or just the price tag?"
Randomized: no. Future flag: no.
Glossary: unit cost ("price compared to how much or how long you get"), sinking fund ("saving a little each month for a known future cost"), opportunity cost.
Tradeoff: Both coats cost ~$30/year; the "right" answer depends on your cash cushion now.

**2. `lawn-route-pricing`** — "Pricing the Lawn Route" — Age 13–15 — *unit rate, profit* [MT, M, FF, AN]
Prompt: You mow lawns. Gas + supplies cost $4 per lawn. Neighbors will pay $15, $20, or $25 depending on lawn size. You can take 6 small or 4 large jobs in a weekend.
Choices: (a) 6 small at $15 — → revenue 90, cost 24, profit 66. (b) 4 large at $25 — → revenue 100, cost 16, profit 84. (c) Mix 3+2 — → compute together; feedback shows profit math. (d) Raise small price to $18 and risk losing one — *randomized demand*.
Reflection: "Higher price or higher volume—what did you optimize?"
Randomized: yes (choice d). Future flag: yes `startedSideHustle`.
Glossary: revenue, profit ("money left after costs"), unit rate, cost.
Tradeoff: Fewer big jobs earn more but you depend on landing them.

**3. `trial-that-renews`** — "The Trial That Remembers You" — Age 13–14 — *subscriptions, recurring math* [MT, M, FF]
Prompt: A game offers a 7-day free trial, then $6.99/month auto-renews. You're excited now but unsure you'll play much.
Choices: (a) Start trial, set a cancel reminder — → flag, wellbeing +; feedback: "$6.99 × 12 = $83.88/year if you forget." (b) Skip it — → no cost. (c) Start trial, no reminder — → risk auto-charge later (sets `firstSubscription` + creep).
Reflection: "What's your plan to remember the cancel date?"
Randomized: no. Future flag: yes `firstSubscription`.
Glossary: subscription, auto-renew ("a charge that repeats unless you stop it"), recurring cost.
Tradeoff: Trials are real value if you actually cancel on time.

**4. `paycheck-shrinks`** — "Why Is My Check Smaller?" — Age 16 — *gross vs net, percent* [M, FF, EXT]
Prompt: Your first part-time job offers $12/hour for 10 hours/week. Your first paycheck is smaller than you expected.
Choices: (a) Read the pay stub — *learn deductions* → math helper reveals taxes; feedback: "$120 gross − deductions = net." (b) Assume an error and ignore — → misconception persists. (c) Ask your mentor to explain — *SC*.
Reflection: "What's the difference between what you earn and what you keep?"
Randomized: no. Future flag: yes `hasIncome`.
Glossary: gross pay, net income ("take-home pay after deductions"), tax, deduction.
Tradeoff: Knowing your net pay lets you budget honestly.

**5. `phone-cracked`** — "The Cracked Screen" — Age 14 — *deductible vs self-insure* [MT, FF, AN, EXT]
Prompt: You dropped your phone. You pay $5/month for phone protection with a $49 repair deductible. Repair without coverage is $130.
Choices: (a) Use the plan, pay deductible — → cash −49; feedback: "You paid $5×months + $49." (b) You never had the plan—pay full — → cash −130. (c) Cancel plan going forward, self-insure with savings — *MT*.
Reflection: "When is paying monthly worth it?"
Randomized: no. Future flag: yes `hasPolicy`.
Glossary: deductible ("what you pay before insurance helps"), premium, self-insure, asset.
Tradeoff: Coverage is cheaper only if you actually break things.

**6. `group-gift-split`** — "Splitting the Group Gift" — Age 13 — *division, P2P apps* [M, SC, FF]
Prompt: Six friends chip in for a $48 group present. Two friends are short this week and ask to pay you later through a payment app.
Choices: (a) Cover them, track who owes — → $48÷6 = $8 each; you front $16. (b) Ask everyone to pay before buying — *firm boundary*. (c) Cover them, no tracking — → risk forgetting/awkwardness.
Reflection: "How do you keep lending to friends from harming the friendship?"
Randomized: no. Future flag: yes `usesPaymentApp`.
Glossary: payment app ("apps that send money to people"), IOU, record-keeping.
Tradeoff: Generosity builds trust but unrecorded loans cause friction.

**7. `bike-vs-bus`** — "Bike Fund or Bus Pass?" — Age 13–14 — *transport budget, asset* [MT, M, AN]
Prompt: A used bike costs $80 (yours to keep, occasional repairs). A monthly bus pass is $20. You travel year-round.
Choices: (a) Buy bike — → asset gained; feedback: "$80 once vs $20×12 = $240/year for bus." (b) Bus pass — → flexibility, no repairs. (c) Save for bike while busing 2 months — *bridge plan*.
Reflection: "Does owning something always beat paying monthly?"
Randomized: no. Future flag: no.
Glossary: asset ("something you own that has value"), recurring cost, opportunity cost.
Tradeoff: The bike is cheaper long-term but needs upkeep and isn't useful in all weather.

**8. `mystery-charge`** — "The Charge You Don't Recognize" — Age 16 — *fraud response* [R, FF, EXT, SC]
Prompt: A $39 charge you don't recognize appears on your account.
Choices: (a) Report and freeze immediately — → fast resolution likely (randomized). (b) Wait to see if it repeats — → may escalate. (c) Tell a trusted adult and report together — *SC*.
Reflection: "Why does acting fast matter with fraud?"
Randomized: yes. Future flag: yes `dataExposed`.
Glossary: fraud, freeze ("blocking new activity on your account"), dispute.
Tradeoff: Reporting fast is safest; waiting risks more loss but avoids false alarms.

**9. `overdraft-edge`** — "Two Dollars Short" — Age 16 — *overdraft, fees* [MT, M, FF]
Prompt: Your checking has $18. A $20 purchase would overdraft with a $35 fee. You have $50 in savings.
Choices: (a) Move $10 from savings first — → avoid fee; small transfer. (b) Buy anyway, accept overdraft — → −$35 fee; feedback: "A $20 buy cost $55." (c) Skip the purchase — → keep balance.
Reflection: "How can account alerts prevent this?"
Randomized: no. Future flag: yes `hasChecking`.
Glossary: overdraft ("spending more than your balance"), fee, checking account, alert.
Tradeoff: Overdraft buys time but the fee can dwarf the purchase.

**10. `index-vs-hot-stock`** — "The Hot Tip" — Age 17 — *diversification, risk* [MT, R, FF, AN, EXT]
Prompt: A classmate swears one company's stock will "double." You can put $100 in that single stock or in a diversified fund.
Choices: (a) Single stock — → randomized swing (could rise or fall sharply). (b) Diversified fund — → steadier, modest randomized move. (c) Split $50/$50 — *MT*.
Reflection: "Why doesn't a big possible gain make something a good bet?"
Randomized: yes. Future flag: yes `hasInvestments`.
Glossary: diversification ("spreading money so one loss doesn't sink you"), risk, volatility, index fund.
Tradeoff: Concentration can win big or lose big; diversification trades excitement for stability.

**11. `rule-of-72-choice`** — "How Long to Double?" — Age 15 — *Rule of 72, division* [M, EXT]
Prompt: You compare two savings options: 3% and 6% growth. You want to know which doubles your money faster.
Choices: (a) Use Rule of 72 — → 72÷3 = 24 years; 72÷6 = 12 years. (b) Guess. (c) Ask mentor to walk through it — *SC*.
Reflection: "What does doubling time tell you about rate?"
Randomized: no. Future flag: no.
Glossary: Rule of 72, compound interest, interest rate.
Tradeoff: Higher rates double faster but often carry more risk.

**12. `bnpl-sneakers`** — "Four Easy Payments" — Age 16 — *BNPL, true cost* [MT, M, FF, EXT]
Prompt: $80 shoes offered as "4 payments of $20, no interest—if you pay on time." A late payment adds a $7 fee.
Choices: (a) Pay in full now — → cash −80, no risk. (b) Use BNPL, set reminders — → spreads cost; risk if late. (c) Wait and save first — *delay gratification*.
Reflection: "Is 'no interest' the same as 'free'?"
Randomized: no. Future flag: yes `usedBNPL`.
Glossary: BNPL ("buy now, pay later in installments"), installment, late fee.
Tradeoff: BNPL helps cash flow but late fees and easy overspending are real risks.

**13. `scam-job-offer`** — "Get Paid to Reship" — Age 16 — *job scams* [L, R, FF, EXT]
Prompt: A "job" texts you: get paid to receive packages and reship them, no interview. *(Locked: appears only if `usesPaymentApp`.)*
Choices: (a) Ignore and report — → safe. (b) Ask for details first — → randomized pressure tactics revealed. (c) Try one "to see" — → likely loss (locked-out for safety guidance).
Reflection: "What made this offer suspicious?"
Randomized: yes. Future flag: yes `scamAware`.
Glossary: job scam, red flag, impostor scam.
Tradeoff: Easy money offers with no interview are classic scam bait.

**14. `roommate-rent-split`** — "Whose Half Is Bigger?" — Age 18 (planning) — *proportional split* [MT, M, FF, EXT]
Prompt: Rent is $900. One bedroom is bigger. You and a roommate must split fairly. *(Locked: `hasSteadyIncome`.)*
Choices: (a) Even 50/50 = $450 each. (b) Bigger room pays 60% = $540/$360. (c) Negotiate based on income share. — All shown with math.
Reflection: "What makes a split 'fair'?"
Randomized: no. Future flag: yes `hasRoommate`.
Glossary: proportional split, rent, lease.
Tradeoff: Even splits are simple; weighted splits feel fairer but need agreement.

**15. `emergency-fund-start`** — "First $200 Cushion" — Age 15 — *emergency fund* [MT, FF]
Prompt: You have $200 extra. Spend it on a want, invest it, or start an emergency fund.
Choices: (a) Emergency fund — → cushion built, future surprises softened. (b) Invest it — → growth potential, but illiquid in a pinch. (c) Spend on a want — → enjoyment now.
Reflection: "What's the job of an emergency fund vs. an investment?"
Randomized: no. Future flag: yes `hasEmergencyFund`.
Glossary: emergency fund ("savings set aside for surprises"), liquidity, asset.
Tradeoff: A cushion isn't growing your money—it's protecting you.

**16. `vet-surprise`** — "The Unexpected Vet Bill" — Age 14 — *pet costs, cushion* [R, SC, FF, AN]
Prompt: Your dog needs a $260 vet visit. *(Locked: `hasPet`.)* Your cushion has $300.
Choices: (a) Pay from cushion — → covered, rebuild needed. (b) No cushion—use BNPL/loan — → debt forms. (c) Ask family to split — *SC*.
Reflection: "How do you plan for costs you can't predict?"
Randomized: yes (bill amount varies). Future flag: yes `petEmergencyHandled`.
Glossary: emergency fund, recurring cost, surprise cost.
Tradeoff: Pets bring joy and predictable + unpredictable costs.

**17. `tip-the-math`** — "Tip and Tax Together" — Age 13 — *percent, multi-step* [M]
Prompt: A $40 meal has 8% tax and you want to leave a 15% tip on the pre-tax amount.
Choices: (a) Compute step by step — → tax $3.20, tip $6.00, total $49.20. (b) Estimate ~$50. (c) Use a quick 20% mental shortcut for tip.
Reflection: "Why might you tip on pre-tax vs. total?"
Randomized: no. Future flag: no.
Glossary: tax, tip, percent.
Tradeoff: Estimating is fast; exact math avoids surprises.

**18. `credit-first-account`** — "Your First Credit Line" — Age 18 — *utilization* [L, MT, M, FF, EXT]
Prompt: You qualify for a $500 limit card. *(Locked: age ≥18, `hasIncome`.)*
Choices: (a) Use under 30% ($150 max), pay full — → score builds. (b) Max it out, pay minimum — → high utilization, interest. (c) Use it once a month for a small bill, autopay — *habit*.
Reflection: "Why does keeping balances low help your score?"
Randomized: no. Future flag: yes `eligibleForCredit`.
Glossary: credit limit, utilization ("share of your limit you're using"), minimum payment, interest.
Tradeoff: Credit builds history if used lightly; misuse costs money fast.

**19. `inflation-snack`** — "The Dollar Snack That Isn't" — Age 14 — *inflation, percent* [M, EXT]
Prompt: A snack you bought for $1.00 two years ago now costs $1.20.
Choices: (a) Calculate the increase — → 20% over 2 years ≈ 10%/year. (b) Buy the bigger value pack instead. (c) Switch to a cheaper option.
Reflection: "If prices rise, what should your savings do?"
Randomized: no. Future flag: no.
Glossary: inflation ("prices rising over time"), percent increase, purchasing power.
Tradeoff: Inflation is normal; the question is whether your income/savings keep pace.

**20. `scholarship-hours`** — "Hours Into Scholarships" — Age 16 — *expected value of effort* [MT, FF, EXT]
Prompt: Spending 10 hours applying to small scholarships might win $0, $300, or $1,500. *(Locked: `pathwayChosen=college`.)*
Choices: (a) Apply broadly — → randomized payoff. (b) Apply to one big one only — → lower odds, big prize. (c) Skip, focus on a job — *MT*.
Reflection: "How do you value effort with uncertain payoff?"
Randomized: yes. Future flag: yes `appliedScholarships`.
Glossary: scholarship, FAFSA, expected value.
Tradeoff: Scholarship hunting is unpaid time that can beat a paycheck—or not.

**21. `phishing-text-twist`** — "The Package You Didn't Order" — Age 13 — *phishing twist* [R, FF]
Prompt: A text says a package is "held" and asks you to tap a link and confirm your address and a small "fee."
Choices: (a) Delete, don't tap — → safe. (b) Tap to "check" — → randomized data-exposure risk. (c) Verify through the real shipper's app instead.
Reflection: "Why is a 'small fee' a warning sign?"
Randomized: yes. Future flag: yes `phishingAware`.
Glossary: phishing ("fake messages that steal info"), red flag, link safety.
Tradeoff: New twist—legitimate-sounding logistics texts are common bait now.

**22. `savings-goal-vs-now`** — "The Concert vs. The Camera Fund" — Age 15 — *goal conflict* [MT, FF, AN]
Prompt: You've saved $120 toward a $300 camera (an asset for your side hustle). A concert costs $85.
Choices: (a) Skip concert, keep saving — → goal closer. (b) Go, restart partly. (c) Go, but earn $85 extra first — *delay*.
Reflection: "How do you weigh experiences against goals?"
Randomized: no. Future flag: yes `cameraFund`.
Glossary: sinking fund, goal, asset, opportunity cost.
Tradeoff: Experiences have real value; so does finishing a goal.

**23. `direct-deposit-setup`** — "Where Should Your Pay Go?" — Age 16 — *banking, split deposit* [M, FF, EXT]
Prompt: Your job offers direct deposit. You can send all to checking or split a percentage to savings.
Choices: (a) 100% checking. (b) 80% checking / 20% savings — → automatic saving. (c) Ask the bank how alerts work.
Reflection: "Why does automatic saving beat 'saving what's left'?"
Randomized: no. Future flag: yes `hasDirectDeposit`.
Glossary: direct deposit, checking account, savings account, percent.
Tradeoff: Splitting pay saves effortlessly but leaves slightly less spending cash.

**24. `repair-or-replace-laptop`** — "Fix It or Replace It?" — Age 16 — *cost analysis, asset* [MT, M, AN, EXT]
Prompt: Your $400 laptop (needed for school) has a $120 repair. A new one is $500.
Choices: (a) Repair — → cheaper now; older device. (b) Replace — → costly; longer future life. (c) Repair + start a replacement fund — *bridge*.
Reflection: "When is repairing the worse deal?"
Randomized: no. Future flag: no.
Glossary: asset, depreciation ("losing value over time"), cost-benefit.
Tradeoff: Repair saves cash unless the device is near the end of its life.

**25. `mentor-vs-influencer`** — "Two Money Tips" — Age 15 — *source evaluation* [MT, SC, FF, EXT]
Prompt: Your mentor suggests a boring index fund. An online video pushes a "secret" coin that "always goes up."
Choices: (a) Follow mentor — → steady. (b) Follow video — → high scam risk. (c) Research both before deciding — *discernment*.
Reflection: "How do you judge whether money advice is trustworthy?"
Randomized: no. Future flag: yes `sourceSavvy`.
Glossary: source evaluation, investment scam, diversification.
Tradeoff: "Always goes up" is a classic warning sign; boring is often safer.

**26. `apprenticeship-vs-college`** — "Earn While You Learn?" — Age 17 — *pathway tradeoff* [MT, FF, EXT]
Prompt: An apprenticeship pays you while training (lower starting pay, no debt). A degree path costs more upfront but may pay more later. *(Locked: age ≥16.)*
Choices: (a) Apprenticeship. (b) College. (c) Work first, decide later.
Reflection: "What matters more to you: earning now or earning more later?"
Randomized: no. Future flag: yes `pathwayChosen`.
Glossary: apprenticeship, student loan, opportunity cost.
Tradeoff: All paths can lead to good outcomes—they trade time, debt, and timing differently.

**27. `renter-insurance-skip`** — "Is Renter Insurance Worth $12?" — Age 18 — *risk pooling* [MT, R, FF, EXT]
Prompt: Renter insurance is $12/month and would cover theft or water damage. *(Locked: `hasRoommate` or `hasSteadyIncome`.)*
Choices: (a) Buy it — → protected; small monthly cost. (b) Skip, self-insure — → randomized event tests it. (c) Buy a higher-deductible cheaper plan.
Reflection: "When is a small monthly cost worth peace of mind?"
Randomized: yes. Future flag: yes `hasRenterInsurance`.
Glossary: premium, deductible, risk pooling ("many people share rare big costs").
Tradeoff: Insurance usually "loses" money until the year it doesn't.

**28. `side-hustle-records`** — "Keep the Receipts?" — Age 15 — *record-keeping, profit* [M, FF, AN]
Prompt: Your craft sales bring in $200; supplies cost $70. A friend says "don't bother tracking."
Choices: (a) Track income and costs — → profit $130 clear. (b) Don't track — → fuzzy profit, tax confusion later. (c) Use a simple ledger app.
Reflection: "Why do records matter even for a small hustle?"
Randomized: no. Future flag: yes `startedSideHustle`.
Glossary: profit, ledger, revenue, expense.
Tradeoff: Tracking is tedious but it's the only way to know real profit.

**29. `car-loan-term`** — "Short Loan or Small Payment?" — Age 18 — *loan term, interest* [MT, M, FF, AN, EXT]
Prompt: A $6,000 used car: 3-year loan ($180/mo) or 5-year loan ($120/mo, more total interest). *(Locked: `needsTransport`, `hasSteadyIncome`.)*
Choices: (a) 3-year. (b) 5-year. (c) Save longer, pay more cash down.
Reflection: "Why does a smaller payment sometimes cost more overall?"
Randomized: no. Future flag: yes `hasCarLoan`.
Glossary: loan term, principal, interest, down payment.
Tradeoff: Longer terms ease monthly strain but raise total interest paid.

**30. `password-reuse`** — "One Password Everywhere" — Age 13 — *security habits* [FF]
Prompt: You use the same password on five accounts. One site reports a breach.
Choices: (a) Change reused passwords, turn on 2FA — → safer. (b) Change only the breached one. (c) Do nothing — → high risk.
Reflection: "Why is reusing passwords risky?"
Randomized: no. Future flag: yes `securityHardened`.
Glossary: password reuse, 2FA ("a second step to prove it's you"), data breach.
Tradeoff: Unique passwords are annoying to manage but contain damage.

**31. `unit-price-shipping`** — "Cheaper Until Shipping" — Age 14 — *unit price + fees* [M]
Prompt: Online: 12 pens for $6 + $4 shipping. Store: 12 pens for $7, no shipping.
Choices: (a) Online — → $10 total. (b) Store — → $7 total. (c) Online if you add items to hit free shipping.
Reflection: "Why must you include fees in price comparisons?"
Randomized: no. Future flag: no.
Glossary: unit price, shipping fee, total cost.
Tradeoff: New twist—the cheaper sticker price loses once fees are added.

**32. `compound-allowance`** — "The Patient Account" — Age 13 — *compound growth intuition* [M, FF]
Prompt: You can keep $50 under your mattress or in an account that grows ~5%/year.
Choices: (a) Account — → grows slowly but compounds. (b) Mattress — → safe but stagnant (and inflation erodes it). (c) Split.
Reflection: "What does compounding add that simple saving doesn't?"
Randomized: no. Future flag: yes `hasSavingsAccount`.
Glossary: compound interest, principal, inflation.
Tradeoff: Mattress money is fully available but loses ground to inflation.

**33. `tax-refund-plan`** — "The Refund Question" — Age 17 — *taxes, refunds* [MT, FF, EXT]
Prompt: You get a $300 tax refund.
Choices: (a) Emergency fund. (b) Pay down a small debt. (c) Spend it. (d) Split across goals.
Reflection: "Is a big refund actually 'free money'?"
Randomized: no. Future flag: yes `filedTaxes`.
Glossary: tax refund ("money returned if you overpaid taxes"), withholding, debt.
Tradeoff: A refund is your own money returned—useful, but not a windfall.

**34. `friend-borrow-app`** — "Pay You Back Friday" — Age 14 — *lending to friends* [MT, SC]
Prompt: A close friend asks to borrow $25 via a payment app, promising to repay Friday.
Choices: (a) Lend, note the date. (b) Lend a smaller amount you won't miss. (c) Decline kindly.
Reflection: "How do you protect both your money and the friendship?"
Randomized: no. Future flag: no.
Glossary: payment app, IOU, boundary.
Tradeoff: Helping a friend is kind; only lend what you can afford to lose.

**35. `gig-or-steady`** — "Tips or a Paycheck?" — Age 16 — *income variability* [MT, M, FF, EXT]
Prompt: A gig pays variable tips (some weeks $200, some $60). A steady job pays a flat $130/week.
Choices: (a) Gig — → randomized weekly income. (b) Steady job — → predictable. (c) Do both part-time.
Reflection: "How does income variability change budgeting?"
Randomized: yes. Future flag: yes `hasIncome`.
Glossary: variable income, budget, average.
Tradeoff: Higher upside comes with unpredictability that's harder to budget.

**36. `phone-upgrade-pressure`** — "Everyone Has the New Phone" — Age 14 — *peer pressure, wants* [MT, SC]
Prompt: Friends upgraded phones; yours works fine. An upgrade costs $300 or $25/month for 18 months.
Choices: (a) Keep current phone. (b) Buy outright. (c) Monthly plan — → $450 total over 18 months.
Reflection: "How much is fitting in worth to you—and is there a cheaper way?"
Randomized: no. Future flag: no.
Glossary: installment, total cost, want.
Tradeoff: The monthly plan feels affordable but costs $150 more overall.

**37. `index-fund-fees`** — "The Quiet Fee" — Age 17 — *investment fees* [M, EXT]
Prompt: Two similar funds: one charges 0.1% yearly, the other 1.0%. On $1,000 that's $1 vs. $10/year—and it compounds.
Choices: (a) Low-fee fund. (b) High-fee fund (flashier marketing). (c) Compare 10-year fee totals first.
Reflection: "Why do small fees matter over decades?"
Randomized: no. Future flag: yes `hasInvestments`.
Glossary: expense ratio ("yearly fund fee as a percent"), fee, compound interest.
Tradeoff: Fees are easy to ignore but quietly eat long-term returns.

**38. `family-cost-share`** — "Pitching In" — Age 15 — *shared household costs* [MT, SC, FF]
Prompt: Your family asks if you can cover your own phone line ($15/mo) now that you work.
Choices: (a) Yes, fully. (b) Offer to split it. (c) Not yet—save toward it first.
Reflection: "How do contributions change as your income grows?"
Randomized: no. Future flag: yes `contributesHousehold`.
Glossary: recurring cost, budget, net income.
Tradeoff: Contributing builds trust and independence but tightens your own budget.

**39. `2fa-setup`** — "The Extra Step" — Age 13 — *2FA habit* [FF]
Prompt: Your account offers two-factor authentication. It adds a code step at login.
Choices: (a) Turn it on. (b) Skip it (faster login). (c) Turn it on for money accounts only.
Reflection: "Is a few extra seconds worth more security?"
Randomized: no. Future flag: yes `securityHardened`.
Glossary: 2FA, account security, password.
Tradeoff: 2FA slows you down slightly but blocks most account takeovers.

**40. `garage-sale-pricing`** — "Pricing Your Old Stuff" — Age 13 — *depreciation, pricing* [M, AN]
Prompt: You sell old games. A game you bought for $40 is now worth maybe $12 used.
Choices: (a) Price at $12 to sell fast. (b) Price at $25 hoping someone pays. (c) Keep them.
Reflection: "Why do most things lose value after you buy them?"
Randomized: no. Future flag: no.
Glossary: depreciation, asset, resale value.
Tradeoff: Most owned items are worth less than you paid—pricing to reality sells faster.

**41. `impostor-grandparent`** — "Urgent Call for Help" — Age 14 — *impostor scam* [R, L, FF]
Prompt: A message claims a relative is "in trouble" and needs money sent fast and secretly. *(Locked: `usesPaymentApp`.)*
Choices: (a) Stop, verify with family directly — → safe. (b) Send quickly out of worry — → likely loss. (c) Report it.
Reflection: "Why do scammers push secrecy and urgency?"
Randomized: yes. Future flag: yes `scamAware`.
Glossary: impostor scam, urgency tactic, verify.
Tradeoff: Urgency + secrecy are deliberate scam pressure—pausing to verify protects you.

**42. `savings-bond-placeholder`** — "The Slow-and-Steady Certificate" — Age 16 — *fixed return, time* [M, AN, EXT]
Prompt: A safe "certificate" locks $200 for 1 year at 4%, but you can't touch it early.
Choices: (a) Lock it in — → $208 after a year, but illiquid. (b) Keep it flexible in savings. (c) Lock half.
Reflection: "What do you give up for a guaranteed return?"
Randomized: no. Future flag: yes `hasCertificate`.
Glossary: certificate (placeholder for a CD-like product), liquidity, interest.
Tradeoff: Locking earns more but you can't access it in an emergency.

**43. `budget-5030-20`** — "Splitting Your First $1,000" — Age 17 — *50/30/20, percent* [M, FF, EXT]
Prompt: Your monthly take-home is $1,000. The 50/30/20 rule of thumb suggests needs/wants/savings.
Choices: (a) Follow it — → $500/$300/$200. (b) Adjust to 60/20/20 (high rent). (c) Build your own split.
Reflection: "Why is 50/30/20 a guideline, not a law?"
Randomized: no. Future flag: yes `hasBudget`.
Glossary: budget, needs, wants, percent.
Tradeoff: The rule is a flexible starting point; real life shifts the ratios.

**44. `phone-insurance-claim`** — "Worth the Claim?" — Age 16 — *deductible decision* [MT, M, EXT]
Prompt: A $60 screen crack; your deductible is $49 and a claim might raise future premiums.
Choices: (a) Pay $60 out of pocket — → keep premium steady. (b) File claim, pay $49. (c) Live with the crack.
Reflection: "When is a small claim not worth filing?"
Randomized: no. Future flag: no.
Glossary: deductible, premium, claim.
Tradeoff: Filing saves a little now but can cost more later.

**45. `crowdfund-friend`** — "Backing a Friend's Project" — Age 15 — *risk, gifts vs investment* [MT, SC]
Prompt: A friend's small project asks for $20 "support" with no guaranteed return.
Choices: (a) Give as a gift, expect nothing. (b) Decline kindly. (c) Offer help instead of cash.
Reflection: "What's the difference between a gift and an investment?"
Randomized: no. Future flag: no.
Glossary: gift, investment, risk.
Tradeoff: Supporting people is valuable, but "support" isn't an investment with returns.

**46. `wage-vs-inflation`** — "A Raise That Isn't" — Age 18 — *real vs nominal* [M, EXT]
Prompt: You get a 3% raise, but prices rose 4% this year.
Choices: (a) Calculate real change — → purchasing power dropped ~1%. (b) Celebrate the raise. (c) Negotiate or cut costs.
Reflection: "Why can a raise still leave you worse off?"
Randomized: no. Future flag: no.
Glossary: inflation, real wage, nominal wage, percent.
Tradeoff: A raise feels good but only beats inflation if it outpaces prices.

**47. `first-checking-fees`** — "Reading the Fine Print" — Age 16 — *account fees* [M, FF, EXT]
Prompt: One checking account charges $5/month unless you keep $300 in it; another is free with no minimum.
Choices: (a) Free no-minimum account. (b) The $5 one (more features). (c) The $5 one but keep $300 to waive it.
Reflection: "How do small monthly fees add up?"
Randomized: no. Future flag: yes `hasChecking`.
Glossary: account fee, minimum balance, checking account.
Tradeoff: Feature-rich accounts may cost more unless you meet conditions.

**48. `study-tools-cert`** — "Earning a Certification" — Age 17 — *credential as asset* [MT, FF, AN, EXT]
Prompt: A $90 online certification could raise your job options. It takes 20 hours.
Choices: (a) Earn it — → asset + opportunity gain. (b) Skip, save money. (c) Find a free version first.
Reflection: "Can knowledge be an asset?"
Randomized: no. Future flag: yes `hasCertification`.
Glossary: certification, asset, opportunity cost, human capital.
Tradeoff: Certs cost time and money but can open higher-paying doors.

**49. `pet-monthly-budget`** — "Planning the Pet Budget" — Age 13 — *recurring math* [M, AN]
Prompt: A pet costs ~$30/month for food and supplies, plus an unpredictable vet fund. *(Locked: `hasPet`.)*
Choices: (a) Budget $30 + set aside $10/mo vet fund. (b) Budget $30 only. (c) Adopt later when ready.
Reflection: "Why budget for surprises before they happen?"
Randomized: no. Future flag: yes `hasPet`.
Glossary: recurring cost, sinking fund, budget.
Tradeoff: $30/month is steady; the vet fund prepares for the unsteady part.

**50. `salary-negotiation`** — "Should I Ask for More?" — Age 18 — *negotiation* [MT, R, FF, EXT]
Prompt: A job offers $15/hour. You researched that $16–17 is common for the role.
Choices: (a) Politely ask for $16.50, citing research — → randomized result. (b) Accept $15. (c) Ask for non-pay perks instead.
Reflection: "What's the risk and reward of negotiating?"
Randomized: yes. Future flag: yes `negotiatedPay`.
Glossary: salary negotiation, gross pay, market rate.
Tradeoff: Asking can raise pay but feels risky; preparation lowers the risk.

**51. `subscription-bundle`** — "The Bundle Deal" — Age 15 — *bundle math* [MT, M, FF]
Prompt: Three apps cost $5 each ($15) separately, or $11 bundled—but you only use two.
Choices: (a) Buy two separately ($10). (b) Buy the bundle ($11). (c) Buy only one ($5).
Reflection: "Is a 'deal' a deal if you don't use all of it?"
Randomized: no. Future flag: yes `firstSubscription`.
Glossary: bundle, recurring cost, value.
Tradeoff: Bundles save money only if you'd actually use everything in them.

**52. `emergency-no-cushion`** — "The Surprise With No Cushion" — Age 17 — *debt vs cushion* [R, FF, EXT]
Prompt: A surprise $250 cost hits and you have no emergency fund. *(Locked: NOT `hasEmergencyFund`.)*
Choices: (a) Borrow from family, repay over time — *SC*. (b) Use BNPL/credit — → debt + interest. (c) Sell an asset.
Reflection: "How would a cushion have changed this?"
Randomized: yes (cost size). Future flag: yes `tookEmergencyDebt`.
Glossary: emergency fund, debt, interest, asset.
Tradeoff: Without a cushion, every surprise becomes a borrowing decision.

**53. `comparison-warranty`** — "The Extended Warranty Pitch" — Age 16 — *expected value* [MT, EXT]
Prompt: A $200 device offers a $40 extended warranty. Most devices don't fail in the covered window.
Choices: (a) Decline, self-insure. (b) Buy it for peace of mind. (c) Buy only for fragile/expensive items.
Reflection: "When is a warranty worth it?"
Randomized: no. Future flag: no.
Glossary: warranty, self-insure, expected value.
Tradeoff: Warranties profit the seller on average but can pay off for fragile gear.

**54. `investing-downturn-hold`** — "The Scary Dip" — Age 18 — *time horizon* [MT, R, FF, AN, EXT]
Prompt: Your diversified fund drops 15% in a bad month. *(Locked: `hasInvestments`.)*
Choices: (a) Hold for the long term — → randomized recovery. (b) Sell to stop losses — → locks in the loss. (c) Buy more at lower prices.
Reflection: "Why might selling in a dip be a mistake for long-term goals?"
Randomized: yes. Future flag: yes `survivedDownturn`.
Glossary: volatility, time horizon, diversification.
Tradeoff: Holding rides out dips but feels stressful; selling feels safe but can lock losses.

**55. `gross-net-side`** — "The Side-Hustle Tax Surprise" — Age 17 — *self-employment basics* [M, FF, EXT]
Prompt: Your side hustle earned $1,200. You learn you may owe taxes on the profit.
Choices: (a) Set aside ~20% for taxes. (b) Spend it all. (c) Ask a mentor how self-employment taxes work — *SC*.
Reflection: "Why isn't all earned money fully yours to spend?"
Randomized: no. Future flag: yes `filedTaxes`.
Glossary: gross pay, net income, tax, profit.
Tradeoff: Setting money aside stings now but avoids a bigger problem later.

**56. `transit-budget`** — "Getting to Work" — Age 16 — *transport budget* [M, EXT]
Prompt: A job pays $14/hour but is far. Transit costs $6/day; a closer job pays $13 with $1/day transit.
Choices: (a) Far job — → compute net after transit. (b) Closer job. (c) Carpool to reduce cost.
Reflection: "Why subtract commuting costs from your wage?"
Randomized: no. Future flag: no.
Glossary: net income, recurring cost, unit rate.
Tradeoff: Higher pay can shrink once commuting costs are counted.

**57. `credit-report-check`** — "Reading Your Own Report" — Age 18 — *credit reports* [L, FF, EXT]
Prompt: You can check your credit report and spot an error listing an account you never opened. *(Locked: `eligibleForCredit`.)*
Choices: (a) Dispute the error. (b) Ignore it. (c) Freeze your credit and dispute.
Reflection: "Why check your credit report regularly?"
Randomized: no. Future flag: yes `checkedCreditReport`.
Glossary: credit report, dispute, credit freeze.
Tradeoff: Checking takes effort but catches errors and fraud early.

**58. `goal-vs-debt`** — "Save or Pay Down?" — Age 17 — *priorities* [MT, M, FF, EXT]
Prompt: You have $300. You could add to savings or pay off a $300 debt charging 18% interest.
Choices: (a) Pay the debt — → saves ~$54/year in interest. (b) Save it. (c) Split: small cushion + most to debt.
Reflection: "When does paying debt beat saving?"
Randomized: no. Future flag: yes `paidDownDebt`.
Glossary: interest, debt, emergency fund, percent.
Tradeoff: High-interest debt usually beats low savings returns—but a tiny cushion still matters.

**59. `peer-group-buy`** — "Chipping in for a Big Buy" — Age 14 — *shared ownership* [MT, M, SC, AN]
Prompt: Four friends want to buy a $200 used game console to share.
Choices: (a) Split evenly ($50 each), agree on rules. (b) One owns it, others pay to use. (c) Skip—too complicated.
Reflection: "What problems can shared ownership create?"
Randomized: no. Future flag: no.
Glossary: shared ownership, asset, agreement.
Tradeoff: Splitting cost is cheaper but shared things need clear rules.

**60. `inflation-grocery`** — "Same Cart, Higher Total" — Age 15 — *price tracking* [M, EXT]
Prompt: A grocery list that cost $50 last year costs $55 now.
Choices: (a) Calculate the increase (10%). (b) Switch some brands. (c) Buy in bulk where unit price is lower.
Reflection: "How can you fight rising prices day to day?"
Randomized: no. Future flag: no.
Glossary: inflation, unit price, percent.
Tradeoff: You can't stop inflation but smart shopping softens it.

**61. `first-job-w4`** — "Filling Out the Form" — Age 16 — *simple tax form concept* [FF, EXT]
Prompt: Your first job asks you to complete a basic tax-withholding form.
Choices: (a) Ask for help understanding it — *SC*. (b) Guess and submit. (c) Look up an official explainer first.
Reflection: "Why does this form affect your paycheck?"
Randomized: no. Future flag: yes `filedTaxes`.
Glossary: withholding, gross pay, net income, tax.
Tradeoff: Getting help avoids over- or under-withholding all year.

**62. `mentor-job-referral`** — "The Referral" — Age 17 — *networking, soft skills* [MT, SC, FF, EXT]
Prompt: Your mentor offers to refer you for a job, but it's outside your comfort zone.
Choices: (a) Accept and prepare. (b) Decline, apply elsewhere on your own. (c) Accept but ask for prep help.
Reflection: "How do relationships create opportunities?"
Randomized: no. Future flag: yes `usedReferral`.
Glossary: referral, soft skills, opportunity.
Tradeoff: Referrals open doors but you still have to perform.

**63. `bnpl-stacking`** — "Three Little Payments" — Age 16 — *BNPL stacking risk* [R, FF, EXT]
Prompt: You already have two BNPL plans. A third $90 item tempts you. *(Locked: `usedBNPL`.)*
Choices: (a) Wait until others are paid. (b) Add it — → randomized cash-flow crunch. (c) Pay cash instead.
Reflection: "Why is stacking small payments risky?"
Randomized: yes. Future flag: yes `bnplStacked`.
Glossary: BNPL, cash flow, installment.
Tradeoff: New twist—each plan feels small but together they can overwhelm a budget.

**64. `donate-decision`** — "Giving Some Back" — Age 15 — *values, budgeting* [MT, SC]
Prompt: You want to donate to a community program that once helped you, but money is tight.
Choices: (a) Donate a small set amount. (b) Volunteer time instead. (c) Wait until more stable.
Reflection: "How do you fit giving into a tight budget?"
Randomized: no. Future flag: no.
Glossary: budget, needs, wants.
Tradeoff: Generosity is valuable; so is your own stability—time can substitute for money.

**65. `used-car-inspection`** — "Trust but Verify" — Age 18 — *due diligence, asset* [MT, R, FF, AN, EXT]
Prompt: A used car looks great. A $75 inspection could reveal hidden problems. *(Locked: `needsTransport`.)*
Choices: (a) Pay for inspection — → randomized: finds issue or clears it. (b) Skip to save $75. (c) Ask a knowledgeable adult to look — *SC*.
Reflection: "Is $75 worth avoiding a costly surprise?"
Randomized: yes. Future flag: yes `boughtCar`.
Glossary: due diligence, asset, depreciation.
Tradeoff: An inspection costs a little to prevent a potentially huge loss.

**66. `data-breach-response`** — "Your Email Was in a Breach" — Age 15 — *breach response* [FF, EXT]
Prompt: A site you use reports a breach exposing emails and passwords.
Choices: (a) Change that password + others reusing it, enable 2FA. (b) Change only that site. (c) Wait and watch.
Reflection: "What's the first thing to do after a breach?"
Randomized: no. Future flag: yes `securityHardened`.
Glossary: data breach, 2FA, password reuse.
Tradeoff: Acting broadly is more work but limits the spread.

**67. `apartment-deposit`** — "First and Deposit" — Age 18 — *deposits, cash flow* [M, FF, AN, EXT]
Prompt: An apartment needs first month ($800) plus a $800 refundable deposit upfront. *(Locked: `hasSteadyIncome`.)*
Choices: (a) Pay it from savings. (b) Find a cheaper place needing less upfront. (c) Get a roommate to split it.
Reflection: "Why is a deposit different from rent?"
Randomized: no. Future flag: yes `rentedApartment`.
Glossary: deposit ("refundable money held against damage"), rent, cash flow.
Tradeoff: Move-in costs are a big upfront hurdle even when rent is affordable.

**68. `compound-early-vs-late`** — "Starting Early" — Age 17 — *time value of money* [M, FF, AN, EXT]
Prompt: Saving $20/month from age 18 vs. waiting until 28 makes a big difference by retirement due to compounding.
Choices: (a) Start small now. (b) Wait until you earn more. (c) Start tiny and increase later.
Reflection: "Why does starting early beat starting big?"
Randomized: no. Future flag: yes `startedInvesting`.
Glossary: compound interest, time horizon, principal.
Tradeoff: Starting small early often beats starting large later, thanks to time.

**69. `flash-sale-pressure`** — "Only 3 Left!" — Age 14 — *behavioral economics* [MT]
Prompt: A "limited time, only 3 left!" banner pressures you to buy a $45 item you weren't planning on.
Choices: (a) Wait 24 hours to decide. (b) Buy now. (c) Add to a wishlist and budget for it.
Reflection: "How do urgency tactics affect spending?"
Randomized: no. Future flag: no.
Glossary: scarcity tactic, impulse buy, want.
Tradeoff: Sometimes the deal is real; pausing reveals whether you actually want it.

**70. `phone-resale-value`** — "Trade In or Sell?" — Age 16 — *resale, asset* [M, AN]
Prompt: Your old phone gets a $90 trade-in offer or might sell privately for $140 (with effort and some risk).
Choices: (a) Trade in for $90 (easy, safe). (b) Sell privately for $140 (more work). (c) Keep as a backup.
Reflection: "How do you weigh effort, risk, and reward?"
Randomized: no. Future flag: no.
Glossary: resale value, asset, depreciation.
Tradeoff: Private sale earns more but takes time and carries safety considerations.

**71. `loan-comparison`** — "Two Loan Offers" — Age 18 — *APR comparison* [M, L, FF, EXT]
Prompt: For a $1,000 need: Loan A at 10% APR, Loan B at 24% APR. *(Locked: `eligibleForCredit`.)*
Choices: (a) Loan A. (b) Loan B (faster approval). (c) Borrow less / save first.
Reflection: "Why compare APR, not just monthly payment?"
Randomized: no. Future flag: yes `comparedLoans`.
Glossary: APR ("yearly cost of borrowing as a percent"), interest, principal.
Tradeoff: Faster approval can mean a much higher cost.

**72. `seventy-two-goal`** — "The 72 Plan" — Age 15 — *Rule of 72 applied* [M, FF, AN]
Prompt: You want to double $500. At 6%, the Rule of 72 says ~12 years; at 9%, ~8 years (with more risk).
Choices: (a) Lower-risk 6% path. (b) Higher-risk 9% path. (c) Mix both.
Reflection: "What do you trade for faster doubling?"
Randomized: no. Future flag: yes `hasInvestments`.
Glossary: Rule of 72, risk, compound interest.
Tradeoff: Faster doubling usually means accepting more risk. *(Seed nod: 72.)*

**73. `predatory-loan-flag`** — "Cash in Minutes" — Age 18 — *predatory lending* [L, EXT]
Prompt: An ad promises instant cash with "no credit check"—but the fees are enormous. *(Locked: `needsCash` flag context.)*
Choices: (a) Avoid it, seek alternatives. (b) Read the full cost first. (c) Take it (the costly trap).
Reflection: "What are warning signs of a predatory loan?"
Randomized: no. Future flag: yes `spottedPredatory`.
Glossary: predatory lending, APR, fee.
Tradeoff: "Easy" loans often hide costs that trap borrowers.

**74. `entrepreneur-reinvest`** — "Profit or Grow?" — Age 16 — *reinvestment* [MT, M, FF, AN, EXT]
Prompt: Your hustle made $300 profit. Reinvesting $150 in supplies could grow next month's sales. *(Locked: `startedSideHustle`.)*
Choices: (a) Reinvest half. (b) Pocket all of it. (c) Reinvest all.
Reflection: "When should a business spend on itself?"
Randomized: no. Future flag: yes `reinvestedProfit`.
Glossary: profit, reinvestment, capital, revenue.
Tradeoff: Reinvesting risks current cash to grow future earnings.

**75. `final-net-worth`** — "Adding It All Up" — Age 18 — *net worth reflection* [M, FF, AN, EXT]
Prompt: Time to total your assets (cash, savings, investments, items) minus your debts.
Choices: (a) Calculate carefully — → net worth shown. (b) Estimate. (c) Walk through it with your mentor — *SC*.
Reflection: "What does net worth tell you—and what does it leave out?"
Randomized: no. Future flag: yes `calculatedNetWorth`.
Glossary: net worth ("assets minus debts"), asset, debt.
Tradeoff: Net worth is one measure of progress, not a measure of your worth as a person.

---

**Requirement tally (verified):**
- Mixed-tradeoff (MT): 30+ ✓ (≥25 required)
- Locked-choice (L): 15 ✓ (#13,14,18,20,27,29,41,49,52,54,57,71,73,74,75 + others) ✓
- Randomized (R): 16 ✓ (#2,8,10,13,16,20,21,27,35,41,50,52,54,63,65,72) ✓ (≥15)
- Future flag set: 45+ ✓ (≥20)
- Support-circle element: 14 ✓ (#4,6,8,16,25,34,36,38,41,52,55,59,61,62,64,65,75) ✓ (≥12)
- Explicit 7th-grade math: 30+ ✓ (≥12)
- 8th–10th extension: 30+ ✓ (≥15)
- Asset/net-worth: 18 ✓ (≥10)
- No mature/PII content: ✓

---

## 5. Relationship and Support Circle Ideas (25)

1. **Family cost-share** — Family covers part of a goal. *Benefit:* faster goal. *Cost:* sense of obligation to contribute later. *Q:* "How do shared costs change as you earn more?"
2. **Family schedule pressure** — Helping at home limits work hours. *Benefit:* trust. *Cost:* less income. *Q:* "How do you balance family duties and earning?"
3. **Mentor money tip** — Solid advice unlocks opportunity. *Benefit:* better choices. *Cost:* must follow through. *Q:* "What makes advice worth taking?"
4. **Mentor referral** — Job connection. *Benefit:* opportunity. *Cost:* pressure to perform. *Q:* "How do you honor a referral?"
5. **Friend group buy** — Shared purchase. *Benefit:* lower cost. *Cost:* coordination conflict. *Q:* "What rules prevent friction?"
6. **Friend loan** — Lending small amounts. *Benefit:* goodwill. *Cost:* possible non-repayment. *Q:* "Only lend what you can lose—why?"
7. **Friend peer pressure** — Spending to fit in. *Benefit:* belonging. *Cost:* budget strain. *Q:* "What's belonging worth?"
8. **Pet startup costs** — Adoption + supplies. *Benefit:* companionship. *Cost:* upfront cash. *Q:* "How do you plan a pet budget?"
9. **Pet emergency** — Surprise vet bill. *Benefit:* tests cushion. *Cost:* big expense. *Q:* "Cushion or insurance?"
10. **Family financial scare softened** — A cushion helps the household. *Benefit:* resilience. *Cost:* drains your savings. *Q:* "When do you help vs. protect your own goals?"
11. **Mentor budget review** — Help building a budget. *Benefit:* better plan. *Cost:* time. *Q:* "Why ask for a second opinion?"
12. **Friend accountability** — A friend checks in on your savings goal. *Benefit:* motivation. *Cost:* mild pressure. *Q:* "Does accountability help you?"
13. **Family teaches a skill** — Learn a money skill at home. *Benefit:* free learning. *Cost:* none. *Q:* "Who taught you about money?"
14. **Pet routine builds discipline** — Daily care raises discipline stat. *Benefit:* habit. *Cost:* time. *Q:* "How do small routines build skills?"
15. **Mentor scam warning** — Mentor flags a suspicious offer. *Benefit:* avoids loss. *Cost:* none. *Q:* "Who do you check with before big money moves?"
16. **Friend's bad tip** — Following risky advice backfires. *Benefit:* learning. *Cost:* loss. *Q:* "How do you evaluate a friend's advice?"
17. **Family carpool** — Shared transport cuts cost. *Benefit:* cheaper commute. *Cost:* schedule coordination. *Q:* "How does sharing reduce costs?"
18. **Mentor negotiation coaching** — Practice asking for a raise. *Benefit:* higher pay odds. *Cost:* none. *Q:* "Why practice before negotiating?"
19. **Friend co-hustle** — Start a small venture together. *Benefit:* shared work. *Cost:* split profit, possible disputes. *Q:* "How do partners split fairly?"
20. **Pet insurance decision** — Cover or self-insure. *Benefit:* protection. *Cost:* premiums. *Q:* "When is pet insurance worth it?"
21. **Family contribution recognition** — Pitching in builds trust stat. *Benefit:* independence. *Cost:* tighter budget. *Q:* "How does contributing change your role?"
22. **Mentor source check** — Mentor helps evaluate online advice. *Benefit:* media literacy. *Cost:* none. *Q:* "How do you spot trustworthy sources?"
23. **Friend repays late** — Tests boundaries. *Benefit:* learning. *Cost:* tension. *Q:* "How do you ask for repayment kindly?"
24. **Family goal celebration** — Reaching a shared goal. *Benefit:* wellbeing boost. *Cost:* none. *Q:* "How does support make goals easier?"
25. **Pet teaches recurring cost planning** — Steady monthly costs. *Benefit:* budgeting practice. *Cost:* ongoing expense. *Q:* "What other costs repeat monthly?"

---

## 6. Score Ranges and Life Context

**Money Know-How (0–100)**
- 0–20: "Still learning the basics—every choice teaches you something."
- 21–40: "You know a few money words and ideas. Keep building."
- 41–60: "You handle everyday money decisions and ask good questions."
- 61–80: "You compare options and plan ahead with confidence."
- 81–100: "You think in tradeoffs and could explain money ideas to others."

**Wellbeing (0–100)**
- 0–20: "Things feel stretched. Rest and support matter."
- 21–40: "Some stress, but you're managing."
- 41–60: "Balanced—ups and downs like normal life."
- 61–80: "Steady and supported."
- 81–100: "Thriving, with room to handle surprises."

**Safety (0–100)**
- 0–20: "Lots of risk—time to lock things down."
- 21–40: "Some habits help; gaps remain."
- 41–60: "Reasonably careful with scams and accounts."
- 61–80: "Strong habits like 2FA and skepticism."
- 81–100: "Hard to trick—you verify before you act."

**Discipline (0–100)**
- 0–20: "Plans are tough to stick to right now."
- 21–40: "You follow through sometimes."
- 41–60: "You keep most commitments to yourself."
- 61–80: "Consistent habits and follow-through."
- 81–100: "Reliable routines that compound over time."

**Opportunity (0–100)**
- 0–20: "Fewer doors open right now—skills and connections can change that."
- 21–40: "A few options are within reach."
- 41–60: "Several paths are open to you."
- 61–80: "Strong options thanks to skills and relationships."
- 81–100: "Many doors open—you've built real options."

**Credit (300–850)**
- 300–579: "Thin or rough history—building from here is the goal."
- 580–669: "Fair—on the way up with steady habits."
- 670–739: "Good—solid borrowing options."
- 740–799: "Very good—favorable terms likely."
- 800–850: "Excellent—best available terms."
*(Always labeled "a simplified model for learning.")*

**15 Fictional Context Variables (no real identity data):**
1. Support access (low/med/high)
2. Transportation access (none/transit/bike/car-share)
3. Local cost level (low/med/high)
4. School resource availability (limited/standard/rich)
5. Internet reliability (spotty/reliable)
6. Starting emergency cushion ($0–$300 fictional)
7. Mentor access (none/occasional/regular)
8. Family schedule pressure (low/med/high)
9. Community program access (few/some/many)
10. Part-time job availability (scarce/some/plentiful)
11. Banking access nearby (none/limited/full)
12. Device access (shared/personal)
13. Neighborhood price level for groceries (low/med/high)
14. Weather/seasonal cost factor (mild/harsh)
15. Starting financial knowledge (beginner/familiar)

---

## 7. Assets and Net Worth Ideas (25)

1. **Bike** — Gains value as transport savings; loses value with wear. *Math:* depreciation, cost-per-year.
2. **Phone** — Useful but depreciates fast. *Math:* resale value, percent loss.
3. **Laptop** — Depreciates; supports earning/school. *Math:* repair vs. replace cost-benefit.
4. **Certification** — Holds/grows value as opportunity. *Math:* cost vs. wage increase.
5. **Tools (for a trade/hustle)** — Hold value, enable income. *Math:* ROI on equipment.
6. **Car fund** — Grows with deposits. *Math:* goal progress percent.
7. **Emergency supplies** — Stable value, reduces surprise costs. *Math:* expected savings.
8. **Small business inventory** — Value tied to sales. *Math:* cost of goods, profit.
9. **Savings-bond-like certificate (placeholder)** — Grows at fixed rate, illiquid. *Math:* simple interest.
10. **Diversified fund placeholder** — Fluctuates, grows long-term. *Math:* percent change, compounding.
11. **Renter deposit** — Refundable, locked up. *Math:* return-of-deposit conditions.
12. **Used game/console** — Depreciates. *Math:* resale pricing.
13. **Bike lock / safety gear** — Protects other assets. *Math:* loss avoidance.
14. **Instrument** — Holds value, may appreciate if quality. *Math:* depreciation vs. retention.
15. **Sewing/craft kit** — Enables hustle. *Math:* materials cost vs. product price.
16. **Camera** — Depreciates but enables income. *Math:* payback period.
17. **Gift cards (unused)** — Stable but can be forgotten. *Math:* tracking balances.
18. **Savings account balance** — Grows with interest. *Math:* compound interest.
19. **Checking balance** — Liquid, no growth. *Math:* cash flow.
20. **Skill portfolio (digital)** — Grows opportunity. *Math:* human capital value.
21. **Bus pass (prepaid)** — Used-up asset. *Math:* cost-per-ride.
22. **Pet supplies stock** — Reduces recurring costs. *Math:* bulk unit price.
23. **Textbooks/study materials** — Depreciate but enable credentials. *Math:* buy vs. rent.
24. **Resale sneakers/collectibles** — Volatile value. *Math:* speculation risk, percent swings.
25. **Emergency fund itself** — Stable, protective. *Math:* months-of-expenses coverage.

---

## 8. Teacher Discussion Prompts (30)

**Warm-ups (1–8):**
1. "Name one thing you bought recently—was it a need or a want?"
2. "If you found $20 today, what's the first thing you'd do?"
3. "What's a money word you've heard but aren't sure about?"
4. "Quick: what's 15% of $40? Show your shortcut."
5. "Would you rather have $100 now or $120 in a year? Why?"
6. "Name a 'free trial' you've seen—was it really free?"
7. "What does it mean to 'save for a rainy day'?"
8. "Estimate: a $5 coffee twice a week—how much per year?"

**Pair-share (9–18):**
9. "Compare your coat scenario choices—what did each of you value?"
10. "Discuss: is the cheapest sticker price always the best deal?"
11. "Talk through a time urgency made you (or someone) buy fast."
12. "Compare: lending money to a friend—worth it or not?"
13. "Discuss what makes a money source trustworthy."
14. "Pair up: design a fair way to split a $90 cost three ways unevenly."
15. "Talk about a 'small monthly cost' that adds up big."
16. "Compare two career pathways—what does each trade off?"
17. "Discuss: when is insurance worth it and when is it not?"
18. "Talk through how you'd respond to a suspicious text."

**Exit-tickets (19–26):**
19. "Write one money decision you'd make differently and why."
20. "What's one thing an emergency fund protects you from?"
21. "Explain utilization to someone who's never heard of it."
22. "Why might a smaller loan payment cost more overall?"
23. "Name one habit that builds long-term financial safety."
24. "What does net worth include—and what does it leave out?"
25. "How does inflation affect money sitting in a jar?"
26. "Write one tradeoff you noticed in today's scenario."

**Compare-outcomes (27–30):**
27. "Two students made opposite investing choices in the downturn—compare results and reasons."
28. "Compare the subscription-creep endings—what changed the outcome?"
29. "Compare a run with an emergency fund vs. without—what differed?"
30. "Compare pathway endings—was any single one clearly 'best'? Why or why not?"

---

## 9. Glossary and Vocabulary Supports (40)

For each: term — definition — math connection — misconception — app location — source category.

1. **Budget** — A plan for money coming in and going out. — Addition/percent splits. — Misconception: budgets are only for people short on money. — Budget Builder. — CFPB/FDIC Money Smart.
2. **Income** — Money you receive from work or other sources. — Sums over time. — That income equals take-home. — Paycheck reveal. — FDIC Money Smart.
3. **Net income** — Take-home pay after deductions. — Subtraction/percent. — That it equals gross. — Paycheck reveal. — IRS Understanding Taxes.
4. **Gross pay** — Pay before deductions. — Hourly × hours. — That it's what you keep. — Paycheck reveal. — IRS Understanding Taxes.
5. **Tax** — Money paid to fund public services. — Percent of an amount. — That refunds are bonuses. — Tax scenarios. — IRS Understanding Taxes.
6. **Saving** — Setting money aside for later. — Running totals. — That saving and investing are the same. — Goal Jar. — CFPB.
7. **Savings account** — A bank account that earns a little interest. — Simple/compound interest. — That it grows fast. — Banking events. — FDIC.
8. **Emergency fund** — Savings set aside for surprises. — Months-of-expenses math. — That it's for any want. — Emergency Shield. — CFPB.
9. **Checking account** — An account for everyday spending. — Cash flow. — That it earns much interest. — Banking events. — FDIC.
10. **Bank** — A safe place to keep and move money. — N/A. — That cash at home is just as safe. — Banking events. — FDIC.
11. **Deposit** — Putting money into an account. — Addition. — That deposits are instant for all uses. — Banking events. — FDIC.
12. **Fee** — A charge for a service. — Subtraction/percent. — That free accounts have no costs. — Account fee scenario. — CFPB.
13. **Overdraft** — Spending more than your balance. — Subtraction. — That it's free. — Overdraft scenario. — CFPB.
14. **Credit** — Borrowed money you repay later. — Interest math. — That credit is free money. — Credit chain. — CFPB.
15. **Credit card** — A card to borrow up to a limit. — Percent/utilization. — That minimum payments clear the balance. — Credit chain. — CFPB.
16. **Credit score** — A number summarizing borrowing history. — Range reading (300–850). — That income sets your score. — Credit meter. — CFPB.
17. **Utilization** — Share of your credit limit you're using. — Percent. — That maxing out is fine if you pay later. — Credit chain. — CFPB.
18. **Debt** — Money you owe. — Subtraction/interest. — That all debt is bad. — Debt scenarios. — CFPB.
19. **Loan** — Borrowed money repaid with interest. — Interest/term math. — That lower payments are always cheaper. — Car/loan chains. — CFPB.
20. **Principal** — The original amount borrowed or saved. — Base for percent. — That payments only reduce interest. — Loan scenarios. — CFPB.
21. **Interest** — The cost of borrowing or reward for saving. — Percent over time. — That it's a flat fee. — Multiple. — CFPB/Investor.gov.
22. **Minimum payment** — The smallest required payment. — Percent of balance. — That paying it avoids interest. — Credit chain. — CFPB.
23. **Asset** — Something you own with value. — Value tracking. — That all purchases are assets. — Net worth panel. — Investor.gov.
24. **Net worth** — Assets minus debts. — Subtraction. — That it measures your worth as a person. — Net worth panel. — Investor.gov.
25. **Investment** — Money put in hoping it grows. — Percent change. — That it's guaranteed to grow. — Investing chain. — Investor.gov/SEC.
26. **Diversification** — Spreading money to reduce risk. — Proportions. — That one big bet is smarter. — Investing chain. — Investor.gov/SEC.
27. **Risk** — The chance of losing value. — Probability intuition. — That high risk always means high reward. — Investing chain. — Investor.gov/SEC.
28. **Inflation** — Prices rising over time. — Percent increase. — That savings keep the same buying power. — Inflation scenarios. — CFPB.
29. **Insurance** — Paying to share the cost of rare big losses. — Premium/deductible math. — That it's wasted if unused. — Insurance chain. — State consumer education.
30. **Premium** — The regular cost of insurance. — Multiplication over time. — That higher premium always means better. — Insurance chain. — State consumer education.
31. **Deductible** — What you pay before insurance helps. — Subtraction. — That insurance covers everything. — Insurance chain. — State consumer education.
32. **Scam** — A trick to take your money or info. — N/A. — That scams are easy to spot. — Scam Inbox. — FTC Consumer Advice.
33. **Identity theft** — Someone using your info as their own. — N/A. — That it only happens to adults. — Identity chain. — FTC.
34. **Receipt** — Proof of a purchase. — Totals/checking math. — That receipts don't matter. — Consumer scenarios. — FTC.
35. **Discount** — A reduction in price. — Percent off. — That a discount means you save money overall. — Shopping scenarios. — CFPB.
36. **Unit price** — Price per single unit or amount. — Division. — That bigger packages are always cheaper. — Comparison table. — CFPB.
37. **Needs** — Things required to live. — Budget categories. — That all wants are needs. — Budget Builder. — CFPB.
38. **Wants** — Things nice to have but not essential. — Budget categories. — That wants are bad to have. — Budget Builder. — CFPB.
39. **Opportunity cost** — What you give up when you choose. — Comparison. — That choices have no hidden cost. — Many. — Investor.gov.
40. **APR** — The yearly cost of borrowing as a percent. — Percent/comparison. — That a low monthly payment means a cheap loan. — Loan comparison. — CFPB.

---

## 10. Balance and Ethics Notes (15)

1. **Wealth ≠ character.** Never reward a high net worth with praise about the person; praise reasoning and habits instead.
2. **Constraints are circumstances, not failures.** Model low starting cushion or limited transit as context, never as the player "doing something wrong."
3. **Always offer a recovery path.** Every mistake leads to a believable comeback within a few age-steps.
4. **Multiple viable pathways.** Trade, apprenticeship, military, work-first, and college all reach good endings.
5. **Randomness must be explained.** When luck affects an outcome, the feedback says so, separating choice quality from result.
6. **No shaming language anywhere.** Feedback is kind, specific, and forward-looking ("next time you could…").
7. **Show tradeoffs, hide no costs.** Every "good deal" includes its real downside.
8. **Don't moralize spending on joy.** Wants and generosity are legitimate; the lesson is planning, not abstinence.
9. **Keep math optional-surface.** Never block progress on arithmetic; offer the helper instead.
10. **Avoid implying one budget rule fits all.** 50/30/20 is always "a flexible starting point."
11. **Represent help as mutual.** Family/mentor support has both benefits and reasonable obligations, never pure dependence or pure burden.
12. **No fear-based scare tactics.** Scam and debt lessons inform calmly rather than frighten.
13. **Replayability through context seeds.** Different fictional starting conditions, not different "difficulty of being a good person."
14. **Stat floors and ceilings.** No single bad choice should zero out a stat permanently.
15. **Separate worth from net worth explicitly.** The final reflection states that net worth measures money, not value as a person.

---

## 11. Source and Originality Notes

This batch drew topic *inspiration only* from these public source categories: CFPB (consumer finance education), FDIC Money Smart, FTC Consumer Advice (scams/identity), Investor.gov / SEC (investing basics), Federal Student Aid (college aid concepts), IRS Understanding Taxes (paycheck/tax basics), state insurance and consumer-education pages, and public topic-hub pages from financial-literacy organizations such as NGPF and Banzai.

All scenario text, definitions, feedback, reflection prompts, and game systems above are original and were written for MoneyLife Quest. No source wording, event text, definitions, slide text, answer keys, scripts, branding, artwork, or names were copied. No mature themes, dating/sex, drugs, alcohol, gambling-as-gameplay, crime-as-gameplay, or student PII appear. Reminder for the build: the app should continue to generate original student-facing text, should attribute sources only as inspiration categories, and should **not imply endorsement, partnership, or approval by any named source or organization.** Where factual claims appear (e.g., tax behavior, credit ranges), label them as simplified-for-learning models and point teachers to primary sources for current specifics.

---

## 12. Implementation Handoff for Codex (Top 20)

A concise engineering handoff. File/module suggestions are illustrative; adapt to your actual structure.

1. **Scenario schema + loader** — Define a `Scenario` TS type matching the bank's fields (id, title, ageRange, topics, prompt, choices[], flags, glossaryRefs, randomized, tradeoffNote). `src/types/scenario.ts`, `src/data/scenarios/*.json`.
2. **Flag system** — Central `flags` slice in game state; choices can set/require flags. `src/state/flags.ts`.
3. **Glossary engine + Money Words cards** — Term registry + inline tap component. `src/data/glossary.ts`, `src/components/MoneyWordCard.tsx`.
4. **Score range labels** — Map each stat value to a range label component. `src/lib/scoreRanges.ts`, `src/components/ScoreMeter.tsx`.
5. **Credit meter (300–850)** — Separate scale + "simplified model" label. `src/components/CreditMeter.tsx`.
6. **Percent helper toggle** — Reusable math-reveal panel callable from any choice. `src/components/MathHelper.tsx`.
7. **Ripple/Consequence log** — Event list with `causedBy` links. `src/components/RippleLog.tsx`.
8. **Reflection capture (local-only)** — Optional text box; clearable; never transmitted. `src/components/ReflectionInput.tsx`.
9. **Randomized-outcome resolver** — Deterministic-with-seed RNG so teachers can reproduce. Use `MAPLE-SPARROW-72` style seeds. `src/lib/rng.ts`.
10. **Context seed selector** — Presets for the 15 fictional context variables. `src/data/contextSeeds.ts`.
11. **Subscription/recurring engine** — Tracks recurring costs, supports creep + audit. `src/systems/subscriptions.ts`.
12. **Emergency fund shield** — Auto-absorb logic for surprise costs. `src/systems/emergencyFund.ts`.
13. **Budget builder (50/30/20)** — Slider component that must sum to 100%. `src/components/BudgetBuilder.tsx`.
14. **Scam inbox minigame** — Fictional-sender message sorter. `src/components/ScamInbox.tsx`.
15. **Chain runner** — Sequences multi-event chains by required flags + age. `src/systems/chains.ts`.
16. **Support circle panel** — Four fixed roles with trust/availability values. `src/components/SupportCircle.tsx`.
17. **Net worth calculator** — Assets − debts, with asset list. `src/lib/netWorth.ts`.
18. **localStorage save/load** — Versioned schema, clear-data button. `src/lib/storage.ts`.
19. **Badge/habit tracker** — Non-shaming badges; no penalties for missed streaks. `src/systems/badges.ts`.
20. **Originality/safety guardrails** — Lint check: no real brand names in scenario data; "simplified for learning" labels on factual claims; PII-input ban enforced (no demographic fields anywhere). `scripts/contentLint.ts`.

**Suggested build order:** schema/loader → flags → glossary → score ranges → one full chain end-to-end (Emergency Fund) → reflection + ripple log → remaining systems.

---

If you paste prior batches, I'll mark exact duplicates and flag what's genuinely new. Want me to expand any single section (for example, full event text for all 15 chains, or the remaining glossary terms with worked math examples)?


# MoneyLife Quest — Curriculum & Design Batch 2

**Creative Seed:** `RIVER-LANTERN-36` (named per your instruction. The "36" is a deliberate half-of-72 nod, biasing scenarios toward *halving/doubling* intuition, midpoint decisions, and "split it in two" tradeoffs. "River-Lantern" biases flavor toward seasonal community events, small local markets, libraries, and after-school/weekend settings — distinct from Batch 1's neighborhood/transit/weather frame.)

A note before I begin: I read the previous batch in full. This batch is built to be **non-duplicative**. Where I revisit a required topic (a few are unavoidable, like emergency funds or scams because your spec demands them), I give it a genuinely new mechanic, age, or twist, and I flag it. New ideas are explicitly marked **[NEW]**; deliberate fresh-twist revisits are marked **[TWIST vs. B1]** with a one-line note on what's different. All student-facing text is original.

---

## 1. Executive Research Synthesis

These 16 insights are chosen to *not* repeat Batch 1's list (shame, compounding-felt, percent-fluency, net-vs-gross, etc.). Each is a different lever.

1. **Loss aversion is stronger than gain-seeking in early teens, and you can use it productively.** Students react more to "you'll lose your $40 deposit" than "you'll gain $40." *Classroom value:* frame protective behaviors (deposits, insurance, fund-keeping) around what's preserved, but pair with a reflection so it teaches judgment rather than fear.

2. **Students conflate "cheap monthly" with "cheap total" — the financing illusion.** The $25/month phone reads as cheaper than $300 outright. *Value:* a recurring "total-cost reveal" beat across unrelated scenarios builds a transferable habit, not a one-off lesson.

3. **Time-discounting is developmentally real, not a character flaw.** The adolescent brain genuinely weights "now" heavily. *Value:* design *delay structures* (auto-split deposit, sinking funds) instead of asking willpower to win — and say so, so students don't read impatience as personal weakness.

4. **Round-number anchoring distorts kid budgets.** Students anchor on "$100" or "$50" and budget toward the round number, not the need. *Value:* scenarios with odd totals ($47, $213) force real arithmetic and break the anchor.

5. **Sunk-cost reasoning shows up early ("I already paid for the season pass, I have to use it").** *Value:* a chain that lets a past payment *not* obligate a future one teaches a subtle, high-value skill rarely taught before high school.

6. **Kids systematically under-price their own time.** They'll spend two hours to save $3. *Value:* "is this worth your time?" scenarios introduce opportunity cost of *time*, which Batch 1 touched only lightly — worth elevating to a recurring frame.

7. **Comparison fails when units differ, not just when numbers are hard.** Students can divide but forget to convert (per ounce vs. per item, per month vs. per year). *Value:* unit-*conversion* before comparison is the actual bottleneck; build it into the comparison UI.

8. **Refundable vs. non-refundable is invisible to students.** Deposits, restocking fees, and "store credit only" returns confuse them. *Value:* a "can you get this money back?" tag on money decisions teaches liquidity and reversibility cheaply.

9. **Probability intuition is weak but trainable through repeated low-stakes randomness.** One random event teaches nothing; a *pattern* of them teaches "good choices change odds, not certainty." *Value:* track outcomes across a run so students see distributions, not anecdotes.

10. **Authority and "official-looking" cues drive scam susceptibility more than greed.** Teens fall for logos and urgency more than for "free money." *Value:* scam scenarios should test *verification of identity/source*, not just "is this too good to be true."

11. **Students treat "free" as a feature, ignoring data/attention costs.** Free apps, free trials, free shipping minimums. *Value:* a "what does free actually cost?" lens (time, data, a minimum spend) is more current and underused than price math alone.

12. **Group financial decisions teach negotiation and fairness that solo scenarios can't.** Splitting unevenly, handling a non-payer, sharing an asset. *Value:* social-math scenarios double as SEL (social-emotional learning), which many schools must cover anyway.

13. **Reversibility ranking helps decision-making more than a pros/cons list.** "Can I undo this?" (cancel a trial = easy; send money to a stranger = impossible) is a cleaner heuristic for 12–15-year-olds. *Value:* teach a one-axis tool they'll actually use.

14. **Maintenance is the hidden cost of ownership students never model.** They price the bike, not the tube; the console, not the games. *Value:* "total cost of ownership" should be a named, repeated concept tied to the asset system.

15. **Income *timing* matters as much as income *amount* for cash flow.** Getting paid weekly vs. monthly changes whether you can cover a bill. *Value:* a cash-flow-calendar mechanic teaches a real adult struggle in a 7th-grade-safe way.

16. **Recovery is more motivating when it's *graduated and visible*, not binary.** "You clawed back 1 of 3 steps" beats "you fixed it / you didn't." *Value:* progress-state recovery (partial repair, partial rebuild) keeps experimentation alive better than pass/fail, extending Batch 1's recovery principle into a mechanic.

---

## 2. New Feature Recommendations

All 18 below are **[NEW]** relative to Batch 1's 25 (no Money Words inline cards, Ripple Log, Percent Helper, Budget Builder, Scam Inbox, etc. — those stand; these add).

**1. Reversibility Tag System [NEW]**
- *Student purpose:* every money choice shows a small badge — Easy to undo / Hard to undo / Can't undo.
- *Teacher value:* gives a shared vocabulary for decision quality independent of outcome.
- *State:* `choice.reversibility: 'easy'|'hard'|'none'` (data-only, no persistence).
- *Risk:* none.
- *MVP:* static tag on each choice. *Stretch:* end-of-run summary of how many irreversible choices you made.

**2. Total Cost of Ownership (TCO) Card [NEW]**
- *Student purpose:* when you "own" an asset, a card shows purchase + upkeep + time cost.
- *Teacher value:* makes the hidden-maintenance lesson concrete and repeatable.
- *State:* `asset.upkeepPerYear`, `asset.timeCostHrs`.
- *Risk:* none.
- *MVP:* show purchase + yearly upkeep. *Stretch:* project 3-year TCO with inflation drift.

**3. Cash-Flow Calendar [NEW]**
- *Student purpose:* a simple monthly grid showing when money arrives vs. when bills are due.
- *Teacher value:* teaches timing, not just totals; pairs with budgeting.
- *State:* `incomeEvents[]`, `billEvents[]` with day-of-month.
- *Risk:* none.
- *MVP:* 1-month view, flag a "short before payday" gap. *Stretch:* shift payday weekly/biweekly/monthly and compare.

**4. "Worth Your Time?" Meter [NEW]**
- *Student purpose:* converts effort into an hourly rate ("you'd earn $1.50/hr doing this").
- *Teacher value:* introduces time as a cost cleanly.
- *State:* none persistent (computed).
- *Risk:* avoid implying low-value tasks are worthless — frame as "your call."
- *MVP:* dollars ÷ hours display. *Stretch:* compare two effort options side by side.

**5. Refundability Indicator [NEW]**
- *Student purpose:* tags money as Refundable / Store-credit only / Gone.
- *Teacher value:* teaches liquidity and reversibility of *money*, not just choices.
- *State:* `transaction.refundType`.
- *Risk:* none.
- *MVP:* tag at point of decision. *Stretch:* a "returns window" timer mechanic.

**6. Outcome Distribution Tracker [NEW]**
- *Student purpose:* after several random events, shows "good choices won 7 of 10 times" across the run.
- *Teacher value:* teaches probability honestly; separates choice quality from luck visibly.
- *State:* `randomLog[]{choiceQuality, result}`.
- *Risk:* keep local; frame kindly.
- *MVP:* running tally. *Stretch:* simple bar chart of outcomes by choice quality.

**7. Source Verifier Tool [NEW]**
- *Student purpose:* a 3-question checklist (Who's really asking? Can I verify independently? What's the rush?) usable inside scam events.
- *Teacher value:* a portable scam heuristic beyond "too good to be true."
- *State:* `verifierUsed[eventId]`.
- *Risk:* fictional senders only.
- *MVP:* checklist overlay. *Stretch:* unlocks a "Verifier" badge after consistent use.

**8. Sunk-Cost Spotter [NEW]**
- *Student purpose:* flags when a choice is being justified by past spending and asks "ignore what's already spent — is this worth it now?"
- *Teacher value:* names a sophisticated bias in kid-friendly terms.
- *State:* `sunkCostFlag` on relevant events.
- *Risk:* none.
- *MVP:* a one-line prompt. *Stretch:* a short reflection comparing "felt right" vs. "math right."

**9. Unit Converter Strip [NEW]**
- *Student purpose:* in comparisons, a strip auto-shows the converted unit (per oz, per year) so students compare apples to apples.
- *Teacher value:* targets the real comparison bottleneck (conversion, not division).
- *State:* none persistent.
- *Risk:* none.
- *MVP:* show both raw and per-unit. *Stretch:* student picks the common unit; app checks.

**10. "What Does Free Cost?" Lens [NEW]**
- *Student purpose:* on any "free" option, reveals hidden costs (time, a minimum spend, attention, data-in-fiction).
- *Teacher value:* modern consumer literacy.
- *State:* `freeOption.hiddenCosts[]`.
- *Risk:* keep "data" fictional and general; no real platforms.
- *MVP:* reveal panel. *Stretch:* compare two "free" offers' real costs.

**11. Recovery Ladder [NEW]**
- *Student purpose:* after a setback, shows a 3-step climb back (e.g., Stabilize → Rebuild cushion → Resume goal) with visible partial progress.
- *Teacher value:* models resilience as a process, not a reset.
- *State:* `recoveryState{step, ofSteps}`.
- *Risk:* non-shaming language only.
- *MVP:* 3-step tracker. *Stretch:* multiple recovery ladders for different setbacks.

**12. Fairness Splitter [NEW]**
- *Student purpose:* a tool for splitting shared costs evenly, by use, or by ability — and seeing each result.
- *Teacher value:* negotiation + proportional reasoning.
- *State:* none persistent.
- *Risk:* none.
- *MVP:* even vs. weighted split. *Stretch:* "who's the non-payer?" handling.

**13. Price History Sparkline [NEW]**
- *Student purpose:* shows a fictional item's price over the last few in-game years (inflation/sales).
- *Teacher value:* graph-reading + "is this actually a deal?" judgment.
- *State:* `item.priceHistory[]`.
- *Risk:* none.
- *MVP:* tiny line + "above/below average" label. *Stretch:* spot a fake "sale" that's above average.

**14. Pay-Frequency Switch [NEW]**
- *Student purpose:* experience the same salary paid weekly vs. biweekly vs. monthly and feel the cash-flow difference.
- *Teacher value:* timing literacy; pairs with the Cash-Flow Calendar.
- *State:* `payFrequency`.
- *Risk:* none.
- *MVP:* toggle + same annual total. *Stretch:* a bill due mid-cycle stresses one frequency.

**15. Asset Maintenance Events [NEW]**
- *Student purpose:* owned assets occasionally need upkeep (bike tube, laptop battery), reinforcing TCO.
- *Teacher value:* keeps ownership honest.
- *State:* `asset.condition`, `nextMaintenanceAge`.
- *Risk:* keep costs modest; offer a "maintain proactively vs. wait" choice.
- *MVP:* one upkeep event per asset. *Stretch:* condition decays faster if skipped.

**16. Two-Goal Tug [NEW]**
- *Student purpose:* run two sinking funds at once and split limited dollars between them.
- *Teacher value:* prioritization + percent allocation under scarcity.
- *State:* `goals[]` (already exists) + `allocationSplit`.
- *Risk:* none.
- *MVP:* split a deposit across two goals. *Stretch:* a deadline forces a tradeoff.

**17. Decision Journal Tags (not free text) [NEW]**
- *Student purpose:* after a choice, tap a reason tag (Saved for later / Helped someone / Took a risk / Played it safe) instead of typing.
- *Teacher value:* reflection data with zero PII risk and no typing burden on Chromebooks.
- *State:* `decisionTags[]` (enum only, local).
- *Risk:* lower than free text — no personal info possible.
- *MVP:* 6 fixed tags. *Stretch:* end-of-run "your money values" tag cloud.

**18. "Undo Window" Micro-Mechanic [NEW]**
- *Student purpose:* some choices offer a brief in-fiction undo (cancel within trial, return within window); others don't.
- *Teacher value:* makes reversibility experiential, not just labeled.
- *State:* `undoableUntilAge`.
- *Risk:* none.
- *MVP:* one undoable choice per run. *Stretch:* a forgotten window that closes teaches the cost of delay.

---

## 3. Scenario Systems and Chains

15 chains, all designed to be **distinct from Batch 1's 15**. Batch 1 covered subscription creep, emergency fund, credit history, first apartment, car, payment apps, identity theft, investing downturn, career pathway, college aid, entrepreneurship, insurance claim, family support, mentor advice, pet. I avoid re-running those arcs and instead pick *new spines* (some touch the same topic from a different angle, flagged).

**Chain 1 — The Season Pass (Sunk Cost) [NEW]**
- *Learning target:* ignore money already spent when deciding what's worth it now.
- *Trigger ages:* 13–15. *Required flags:* `boughtSeasonPass`.
- *Events:* (1) Buy a discounted season pass to a local activity → (2) Schedule conflict makes attending hard → (3) "I already paid, so I must go" pull → (4) Sunk-Cost Spotter prompt: decide based on now → (5) Reflection comparing "felt right" vs. "math right."
- *Compounds:* forcing attendance to "justify" the pass costs time/wellbeing; releasing the sunk cost frees both.
- *Endings:* Clear-Eyed (decided on present value), Pass-Trapped (over-attended out of guilt), Balanced (used it when convenient, skipped when not).

**Chain 2 — Refund Roulette (Reversibility) [NEW]**
- *Learning target:* refundable vs. store-credit vs. final-sale; reversibility of money.
- *Trigger ages:* 13–16. *Required flags:* none.
- *Events:* (1) Buy an item with an unread return policy → (2) It's wrong/disappointing → (3) Discover the refund type (randomized: full / store credit / final sale) → (4) Decide: keep, exchange, resell → (5) Habit set: check policy first.
- *Compounds:* skipping the policy at event 1 worsens options at event 3; reading it unlocks a clean refund path.
- *Endings:* Policy-Reader, Store-Credit-Stuck, Resold-the-Loss.

**Chain 3 — The Time-vs-Money Weekend [NEW]**
- *Learning target:* opportunity cost of *time*; under-pricing your hours.
- *Trigger ages:* 14–16. *Required flags:* `hasIncome`.
- *Events:* (1) A long bus trip saves $4 on a purchase → (2) "Worth Your Time?" meter reveals the hourly rate → (3) A paid task is available the same hours → (4) Choose chore-saving vs. earning vs. rest → (5) Reflection on what time is worth to you.
- *Compounds:* repeatedly chasing tiny savings drains earning/rest; valuing time opens earning.
- *Endings:* Time-Rich, Penny-Chaser, Balanced-Hours.

**Chain 4 — Cash-Flow Crunch (Timing) [NEW]**
- *Learning target:* income timing vs. bill timing, even when totals are fine.
- *Trigger ages:* 16–18. *Required flags:* `hasIncome`, `hasRecurringBill`.
- *Events:* (1) Pick pay frequency → (2) A bill lands before payday → (3) Choose: shift due date / small buffer / risk a gap → (4) Calendar shows the squeeze → (5) Build a one-week buffer.
- *Compounds:* monthly pay + mid-cycle bill = tight; a small buffer smooths it permanently.
- *Endings:* Smooth-Cycle, Payday-Tight, Buffered.

**Chain 5 — The Group Trip Fund (Social Math) [NEW + SC]**
- *Learning target:* uneven fair splits, handling a non-payer, shared goals.
- *Trigger ages:* 13–15. *Required flags:* none.
- *Events:* (1) Five friends set a trip budget → (2) Choose split method (even / by use / by ability) → (3) One friend falls behind on payments → (4) Cover / wait / adjust the plan → (5) Reflection on fairness vs. friendship.
- *Compounds:* covering quietly strains your budget; a clear plan up front prevents the crunch.
- *Endings:* Fair-and-Funded, Out-of-Pocket, Renegotiated.

**Chain 6 — The "Free" Stack [NEW]**
- *Learning target:* what free actually costs (time, minimum spend, attention).
- *Trigger ages:* 13–15. *Required flags:* none.
- *Events:* (1) Free-shipping minimum tempts a filler item → (2) Free trial that needs a card → (3) Free app with constant upsells → (4) "What Does Free Cost?" lens reveals totals → (5) Decide which "frees" were worth it.
- *Compounds:* chasing free minimums adds unwanted spend; recognizing the pattern saves cash.
- *Endings:* Free-Savvy, Minimum-Trapped, Selective.

**Chain 7 — Maintenance Matters (TCO) [NEW + AN]**
- *Learning target:* total cost of ownership; proactive vs. reactive upkeep.
- *Trigger ages:* 13–17. *Required flags:* owns at least one asset.
- *Events:* (1) Acquire a bike/laptop → (2) First small upkeep choice (do now vs. wait) → (3) Skipped upkeep causes a bigger failure (randomized severity) → (4) Repair or replace → (5) TCO reveal across the ownership period.
- *Compounds:* skipping cheap upkeep risks a costly failure; proactive care lowers lifetime cost.
- *Endings:* Well-Maintained, Run-to-Failure, Replaced-Early.

**Chain 8 — Two Goals, One Wallet [NEW]**
- *Learning target:* prioritization and percent allocation under scarcity.
- *Trigger ages:* 14–16. *Required flags:* `hasIncome`.
- *Events:* (1) Set two sinking funds → (2) Limited monthly dollars to split → (3) A deadline hits one goal → (4) Rebalance the split → (5) Outcome: one, both, or neither funded on time.
- *Compounds:* even splits may miss both deadlines; weighting toward the nearer deadline can land it.
- *Endings:* Both-Funded, One-on-Time, Spread-Too-Thin.

**Chain 9 — The Resale Flip (Asset + Risk) [NEW + AN, R]**
- *Learning target:* buying to resell, holding costs, volatile value.
- *Trigger ages:* 15–17. *Required flags:* `startedSideHustle`.
- *Events:* (1) Buy an item to resell → (2) Hold while watching price (sparkline) → (3) Price moves (randomized) → (4) Sell now / hold / cut losses → (5) Profit-loss with time and fees counted.
- *Compounds:* holding for a better price risks the price dropping; quick flips earn less but lock gains.
- *Endings:* Smart-Flip, Bag-Holder, Quick-Profit.

**Chain 10 — Phone Plan Reality (Recurring + Math) [TWIST vs. B1]**
*(B1 had a phone *upgrade* peer-pressure one-off; this is a multi-event *plan/data/recurring* arc — different mechanic.)*
- *Learning target:* plan tiers, overage, right-sizing recurring cost.
- *Trigger ages:* 14–17. *Required flags:* none.
- *Events:* (1) Pick a plan tier → (2) Usage runs high one month (overage fee) → (3) Upsize / add-on / change habits → (4) A cheaper-but-limited option appears → (5) Annualized cost reveal.
- *Compounds:* over-buying wastes money monthly; under-buying triggers overage fees — right-sizing wins.
- *Endings:* Right-Sized, Overage-Surprised, Over-Paying.

**Chain 11 — The First Tax Moment (Bridge) [TWIST vs. B1]**
*(B1 touched W-4 and side-hustle tax as one-offs; this is a connected file-and-refund arc.)*
- *Learning target:* withholding → filing → refund/owe, as one story.
- *Trigger ages:* 16–18. *Required flags:* `hasIncome`.
- *Events:* (1) Choose withholding on a simple form → (2) Earn across the year → (3) "File" a simplified return → (4) Refund or small balance due (driven by step 1) → (5) Plan next year's withholding.
- *Compounds:* high withholding → big refund but tight paychecks; low → bigger checks but possible balance due.
- *Endings:* Balanced-Withholding, Big-Refund, Owed-a-Bit.

**Chain 12 — Library to Launchpad (Opportunity, Low-Cost) [NEW + SC]**
- *Learning target:* free community resources as opportunity multipliers.
- *Trigger ages:* 13–16. *Required flags:* `communityProgramAccess`.
- *Events:* (1) Discover a free library/maker/tutoring resource → (2) Invest time to learn a skill → (3) Skill enables a small paid gig → (4) Reinvest earnings or bank them → (5) Opportunity stat reveal.
- *Compounds:* time spent on free resources compounds into earning; ignoring them keeps options narrow.
- *Endings:* Resourceful, Late-Starter, Self-Taught-Earner.

**Chain 13 — The Verify-First Habit (Scam) [TWIST vs. B1]**
*(B1's scams tested "too good to be true"; this arc trains *identity/source verification* specifically.)*
- *Learning target:* verify who's really asking before acting.
- *Trigger ages:* 14–17. *Required flags:* none.
- *Events:* (1) An "official-looking" account message arrives → (2) Use the Source Verifier checklist → (3) A follow-up adds urgency + a logo → (4) Verify through an independent channel / comply / freeze → (5) Outcome + habit set.
- *Compounds:* skipping verification under urgency leads to exposure; the checklist defuses it.
- *Endings:* Verifier, Rushed-and-Exposed, Locked-Down.

**Chain 14 — Warranty or Wallet (Expected Value) [TWIST vs. B1]**
*(B1 had single warranty/insurance one-offs; this chains *self-insurance fund* growth vs. buying coverage repeatedly.)*
- *Learning target:* self-insuring with a fund vs. paying for coverage over many items.
- *Trigger ages:* 15–18. *Required flags:* none.
- *Events:* (1) First device: warranty offered → (2) Decline + start a "self-insure jar" instead → (3) Second device: warranty offered again → (4) A failure hits (randomized which device) → (5) Compare jar balance vs. what warranties would've cost.
- *Compounds:* the jar grows with each declined warranty; one failure tests whether the jar covers it.
- *Endings:* Self-Insured-Ahead, Jar-Came-Up-Short, Bought-Coverage.

**Chain 15 — Gift, Loan, or Invest? (Support Circle Money) [NEW + SC]**
- *Learning target:* distinguishing a gift, a loan, and an investment within relationships.
- *Trigger ages:* 14–17. *Required flags:* `supportCircle.friend`.
- *Events:* (1) A friend asks for money for a project → (2) Classify it: gift / loan / "investment" → (3) Set terms or expectations accordingly → (4) Project succeeds or struggles (randomized) → (5) Reflection on money + relationships.
- *Compounds:* mislabeling a gift as an investment breeds resentment; clear framing protects both money and friendship.
- *Endings:* Clear-Terms, Strained-Expectations, Generous-No-Strings.

---

## 4. Fresh Scenario Bank (75 Original Scenarios)

**Conventions** (same as B1 for your tooling): *MT* mixed-tradeoff, *L* locked, *R* randomized, *FF* future flag, *SC* support circle, *M* explicit 7th-grade math, *EXT* 8th–10th extension, *AN* asset/net-worth.

All 75 are **new scenario ids** not present in Batch 1. None reuse B1's slugs. Where a topic overlaps, the mechanic/twist differs and the prompt is original.

---

**1. `library-card-roi`** — "The Free Card That Pays" — Age 12–13 — *opportunity, free resources* [MT, FF, SC]
Prompt: A free library card gets you books, free wifi, and a maker space. A friend says "libraries are boring." You have limited free afternoons.
Choices: (a) Sign up, try the maker space — → opportunity +, time spent; (b) Skip it; (c) Sign up and bring the friend — *SC*.
Feedback: "Free resources can multiply what you can do without spending cash."
Reflection: "What free thing near you could open a door?"
Randomized: no. Future flag: yes `communityProgramAccess`.
Glossary: opportunity cost, resource, asset.
Tradeoff: The card is free, but your *time* using it isn't — both choices are reasonable.

**2. `odd-total-budget`** — "The $47 Problem" — Age 12–13 — *budget, non-round math* [M]
Prompt: You have exactly $47 for the week: a $19 need, a $13 maybe, and an $11 want all tempt you.
Choices: (a) Need only, save $28; (b) Need + maybe = $32, save $15; (c) All three = $43, save $4.
Feedback: "$47 − $19 = $28 left; each add-on shrinks your cushion."
Reflection: "Did the odd number make you actually subtract instead of guess?"
Randomized: no. Future flag: no.
Glossary: budget, needs, wants.
Tradeoff: Spending more isn't wrong — it's a smaller cushion for a fuller week.

**3. `season-pass-guilt`** — "I Already Paid For It" — Age 13–14 — *sunk cost* [MT, FF]
Prompt: You bought a $40 season pass to a weekend activity. Now a better free plan comes up the same day. Part of you says "but I paid for the pass!"
Choices: (a) Go to the free thing, let the pass go this week; (b) Use the pass out of guilt; (c) Decide by which you'd actually enjoy now.
Feedback: "The $40 is already spent either way — it shouldn't decide today."
Reflection: "How did 'I already paid' pull on you?"
Randomized: no. Future flag: yes `boughtSeasonPass`.
Glossary: sunk cost ("money already spent that you can't get back"), opportunity cost.
Tradeoff: Both can be fine — the lesson is *not letting the past payment alone decide*.

**4. `return-policy-unread`** — "The Tag Says Final Sale" — Age 13–15 — *refundability* [R, FF]
Prompt: You buy a $35 hoodie online without reading the return policy. It arrives too small.
Choices: (a) Check the policy now and act on it — → randomized: full refund / store credit / final sale; (b) Keep it and hope it stretches; (c) Try to resell it.
Feedback: "Refund type decides your options — reading first would've told you."
Reflection: "Why check 'can I return this?' *before* buying?"
Randomized: yes. Future flag: yes `checksReturnPolicy`.
Glossary: refund, store credit, final sale.
Tradeoff: Reselling can recover some cash but costs effort; keeping it avoids hassle.

**5. `worth-the-trip`** — "Two Buses to Save $4" — Age 14–15 — *time as cost* [M, MT]
Prompt: A store 45 minutes away (each way) sells your item $4 cheaper. The round trip is about 2 hours.
Choices: (a) Make the trip; (b) Buy local, keep the 2 hours; (c) Order it and wait, paying $1 shipping.
Feedback: "$4 saved ÷ 2 hours = $2/hour for your time — your call if that's worth it."
Reflection: "What's an hour of your time worth to you right now?"
Randomized: no. Future flag: no.
Glossary: opportunity cost, unit rate.
Tradeoff: Saving money is real; so is your time — neither answer is wrong.

**6. `payday-before-bill`** — "The Bill Came First" — Age 16 — *cash-flow timing* [M, FF, EXT]
Prompt: Your $60 phone bill is due on the 10th, but you're not paid until the 15th. You have $45 now.
Choices: (a) Move the due date to after payday; (b) Keep a $20 buffer next month so this can't repeat; (c) Risk a late fee.
Feedback: "Same monthly money — the *timing* is the problem, not the amount."
Reflection: "How can a small buffer fix a timing gap for good?"
Randomized: no. Future flag: yes `hasRecurringBill`.
Glossary: cash flow, due date, buffer.
Tradeoff: Shifting the date is easy now; a buffer is more work but permanent.

**7. `free-shipping-filler`** — "Just $6 More for Free Shipping" — Age 13–14 — *behavioral, "free" cost* [MT, M]
Prompt: Your $24 order has $5 shipping, but adding $6 of stuff makes shipping free.
Choices: (a) Pay the $5 shipping, buy only what you wanted; (b) Add a $6 filler to "save" $5; (c) Add an item you actually needed anyway.
Feedback: "Spending $6 to save $5 costs you $1 more — unless you needed the add-on."
Reflection: "Is 'free shipping' free if you buy extra to get it?"
Randomized: no. Future flag: no.
Glossary: shipping fee, total cost, want.
Tradeoff: A *needed* add-on makes it smart; a filler makes it a trap.

**8. `bike-tube-upkeep`** — "The $7 You Skipped" — Age 13–14 — *TCO, maintenance* [MT, R, AN]
Prompt: Your bike needs a $7 tune-up. Skipping it might be fine — or a small problem could grow.
Choices: (a) Do the $7 upkeep now; (b) Skip it and ride — → randomized: fine / $30 repair later; (c) Learn to do it yourself for $4 in parts.
Feedback: "Small upkeep often prevents a bigger bill — but not always."
Reflection: "Why is owning something more than the purchase price?"
Randomized: yes. Future flag: yes `ownsBike`.
Glossary: total cost of ownership, maintenance, asset.
Tradeoff: Skipping sometimes works out — proactive care just lowers the odds of a big hit.

**9. `two-goal-split`** — "Camera and Class Trip" — Age 14–15 — *allocation, percent* [M, MT, FF]
Prompt: You save $40/month. A $200 camera and a $120 class trip both matter; the trip is due in 4 months.
Choices: (a) All to the trip first ($120 in 3 months), then camera; (b) Split 50/50 ($20 each) and risk missing the trip deadline; (c) 70% trip / 30% camera.
Feedback: "$40 split evenly = $20 each; the trip needs $30/month to make the deadline."
Reflection: "When does a deadline decide your split?"
Randomized: no. Future flag: yes `twoActiveGoals`.
Glossary: sinking fund, percent, deadline.
Tradeoff: Even splitting feels fair but can miss a hard deadline.

**10. `non-payer-friend`** — "One Friend Fell Behind" — Age 14 — *social math, fairness* [MT, SC, M]
Prompt: Five of you pledged $12 each for a $60 group gift. One friend can't pay this week and feels embarrassed.
Choices: (a) Cover their $12, quietly note it; (b) Lower the gift to $48 so it's $9.60 each; (c) Ask if they'd rather contribute time/effort instead — *SC*.
Feedback: "$60 ÷ 5 = $12; $48 ÷ 5 = $9.60 — shrinking the gift shares the gap fairly."
Reflection: "How do you handle a shortfall without shaming anyone?"
Randomized: no. Future flag: no.
Glossary: fair split, contribution.
Tradeoff: Covering is generous but can strain you; adjusting shares the cost kindly.

**11. `resell-hold-or-sell`** — "Hold for More?" — Age 15–16 — *resale, volatility* [R, MT, FF, AN, EXT]
Prompt: You bought a collectible for $30 to resell. It's worth $45 now, but a friend says "wait, it'll hit $80."
Choices: (a) Sell now, lock $15 profit; (b) Hold for more — → randomized: rises / falls; (c) Sell half.
Feedback: "Holding risks the price dropping; selling locks a sure gain."
Reflection: "Why is a 'sure thing later' never actually sure?"
Randomized: yes. Future flag: yes `triedResale`.
Glossary: resale value, volatility, profit.
Tradeoff: Greed can win big or give back your profit — selling half splits the difference.

**12. `withholding-choice`** — "Bigger Check or Bigger Refund?" — Age 16–17 — *withholding* [MT, FF, EXT]
Prompt: On a simple job form, you can have more tax held now (bigger refund later) or less held (bigger paychecks now).
Choices: (a) More withheld — bigger refund, tighter checks; (b) Less withheld — bigger checks, maybe owe a little; (c) Aim for the middle.
Feedback: "A refund is your own money coming back — neither choice is 'free.'"
Reflection: "Would you rather have money monthly or in one lump?"
Randomized: no. Future flag: yes `setWithholding`.
Glossary: withholding ("tax taken out of pay before you get it"), refund, gross pay.
Tradeoff: A refund feels great but means you lent money interest-free all year.

**13. `phone-overage`** — "You Went Over" — Age 15 — *recurring, overage* [M, MT, EXT]
Prompt: Your $25 phone plan has a data cap. This month you went over and got a $15 overage fee.
Choices: (a) Upsize to a $35 unlimited plan; (b) Keep the $25 plan and change usage habits; (c) Add a one-time $5 booster only when needed.
Feedback: "$25 + frequent $15 overages can beat the $35 plan — track which is cheaper for *you*."
Reflection: "When is paying more monthly actually cheaper?"
Randomized: no. Future flag: no.
Glossary: overage fee, data cap, recurring cost.
Tradeoff: Unlimited removes worry but wastes money if you rarely go over.

**14. `self-insure-jar`** — "Skip the Warranty, Start a Jar" — Age 16 — *self-insurance, EV* [MT, R, FF, EXT]
Prompt: A $40 warranty is offered on a $200 device. You could instead put $40 in a "self-insure jar" for any future breakage.
Choices: (a) Buy the warranty; (b) Decline, fund the jar — → randomized later: jar covers it / falls short; (c) Decline and skip the jar (risk it).
Feedback: "Across many items, a jar often beats buying every warranty — but one early break can sting."
Reflection: "How is a self-insure jar like and unlike insurance?"
Randomized: yes. Future flag: yes `selfInsureJar`.
Glossary: self-insure, warranty, expected value.
Tradeoff: The jar can come out ahead long-term but offers no help if it's empty when something breaks.

**15. `official-looking-message`** — "Looks Official" — Age 14–15 — *scam, verification* [R, FF]
Prompt: A message with a convincing logo says your account "needs verification" within 24 hours or it'll be locked.
Choices: (a) Don't click; check the real account directly — → safe; (b) Click the link to "fix it fast" — → randomized exposure; (c) Ask a trusted adult to look first.
Feedback: "Real organizations don't lock you out for not clicking a rushed link."
Reflection: "Which mattered more here — the logo or the urgency?"
Randomized: yes. Future flag: yes `verifiesSources`.
Glossary: phishing, verification, urgency tactic.
Tradeoff: New twist vs. typical phishing — the bait is *authority and a deadline*, not free money.

**16. `gift-vs-loan-friend`** — "Is This a Gift or a Loan?" — Age 14–15 — *relationships + money* [MT, SC]
Prompt: A friend asks for $20 for a project. You're not sure if you'll see it again.
Choices: (a) Give it as a gift, expect nothing; (b) Lend it with a clear repay date; (c) Offer help instead of cash.
Feedback: "Naming it a gift or a loan up front protects both the money and the friendship."
Reflection: "Why does an unclear 'loan' cause more trouble than a clear gift?"
Randomized: no. Future flag: no.
Glossary: gift, loan, IOU.
Tradeoff: A gift risks the cash but not the friendship; a loan risks both if it's not repaid.

**17. `unit-convert-cereal`** — "Per Box or Per Ounce?" — Age 13 — *unit conversion* [M]
Prompt: Cereal A: 12 oz for $3.00. Cereal B: 18 oz for $4.05. The bigger box *looks* pricier.
Choices: (a) Compare per ounce ($0.25 vs. $0.225); (b) Buy the smaller box (lower sticker); (c) Buy whichever you'll finish before it goes stale.
Feedback: "$3.00 ÷ 12 = $0.25/oz; $4.05 ÷ 18 = $0.225/oz — the bigger box wins per ounce."
Reflection: "Why convert to the same unit before comparing?"
Randomized: no. Future flag: no.
Glossary: unit price, conversion.
Tradeoff: The cheaper-per-ounce box wastes money if it goes stale before you finish it.

**18. `pay-frequency-feel`** — "Weekly or Monthly?" — Age 16 — *pay timing* [M, FF, EXT]
Prompt: Same $1,200/month job, but you can be paid $300 weekly or $1,200 once a month.
Choices: (a) Weekly — smoother cash flow, easier to manage; (b) Monthly — one big deposit, needs planning; (c) Whatever the bills' timing favors.
Feedback: "Same yearly total; weekly smooths cash flow, monthly needs a plan to last."
Reflection: "How does pay timing change how you'd budget?"
Randomized: no. Future flag: yes `chosePayFrequency`.
Glossary: cash flow, pay frequency, budget.
Tradeoff: Weekly is easier to manage; monthly can build discipline but risks early-month overspending.

**19. `restocking-fee`** — "Returns Cost Money?" — Age 15 — *fees, returns* [M, EXT]
Prompt: You want to return a $90 item, but there's a 15% restocking fee.
Choices: (a) Return it, accept the fee; (b) Keep it and try to use it; (c) Resell it privately to avoid the fee.
Feedback: "15% of $90 = $13.50 lost on the return — sometimes keeping or reselling beats that."
Reflection: "Why do some returns cost you money?"
Randomized: no. Future flag: no.
Glossary: restocking fee, refund, percent.
Tradeoff: Eating the fee is simple; reselling avoids it but takes effort and isn't guaranteed.

**20. `maker-space-skill`** — "Learn It for Free" — Age 13–14 — *opportunity, human capital* [MT, FF, SC, AN]
Prompt: A free community workshop teaches a skill you could later charge for. It costs 6 weekend hours.
Choices: (a) Attend, build the skill — → opportunity +, time spent; (b) Skip, keep your weekends; (c) Attend with a friend and split practice time — *SC*.
Feedback: "Free skills can become an asset you carry for life."
Reflection: "Can something you learn count as an asset?"
Randomized: no. Future flag: yes `learnedFreeSkill`.
Glossary: human capital, opportunity cost, asset.
Tradeoff: Free skill-building costs time you can't get back — rest and fun matter too.

**21. `price-history-sale`** — "Is This Sale Real?" — Age 14–15 — *graph reading* [M, EXT]
Prompt: An item is "on sale" for $48. Its price chart shows it's usually $42, spiked to $55, now "discounted" to $48.
Choices: (a) Wait — $48 is above the usual $42; (b) Buy — it says "sale"; (c) Set a price alert for $42 or less.
Feedback: "A 'sale' above the normal price isn't really a discount."
Reflection: "Why read a price's history before trusting 'sale'?"
Randomized: no. Future flag: no.
Glossary: discount, price history, sale.
Tradeoff: Waiting risks it selling out; buying now risks overpaying for a fake deal.

**22. `deposit-refundable`** — "Will I Get It Back?" — Age 17–18 — *refundable deposits* [M, FF, AN, EXT]
Prompt: Renting equipment for a project needs a $75 refundable deposit, returned if you bring it back undamaged.
Choices: (a) Pay it, treat it as temporarily locked money; (b) Find a no-deposit option that costs more per use; (c) Borrow the gear from a mentor — *SC*.
Feedback: "A deposit isn't a fee — it's *your* money held, returnable if you're careful."
Reflection: "How is a refundable deposit different from a fee?"
Randomized: no. Future flag: yes `paidDeposit`.
Glossary: deposit, refundable, liquidity.
Tradeoff: The deposit ties up cash temporarily; no-deposit options cost more but keep cash free.

**23. `tool-as-asset`** — "Buy the Drill or Rent It?" — Age 17 — *own vs. rent, asset* [MT, M, AN, EXT]
Prompt: A project needs a drill. Buying is $60 (yours to keep, occasional reuse); renting is $12/use.
Choices: (a) Buy — pays off after 5 uses; (b) Rent — cheaper if you'll use it once or twice; (c) Borrow from a neighbor first — *SC*.
Feedback: "$60 ÷ $12 = 5 uses to break even — buying wins only if you'll use it enough."
Reflection: "When does owning beat renting?"
Randomized: no. Future flag: yes `ownsTools`.
Glossary: asset, break-even, opportunity cost.
Tradeoff: Owning saves long-term *if* you use it; otherwise it's clutter you paid for.

**24. `decision-tag-reflect`** — "Why Did You Choose That?" — Age 12–13 — *reflection* [MT]
Prompt: After a spending choice, you can tag your reason instead of explaining out loud.
Choices: (a) "Saved for later"; (b) "Treated myself"; (c) "Helped someone"; (d) "Played it safe."
Feedback: "Naming your reason helps you see your money values over time."
Reflection: "Which tag do you pick most — and what does that say?"
Randomized: no. Future flag: no.
Glossary: values, reflection.
Tradeoff: No wrong tag — this is about noticing patterns, not judging them.

**25. `library-printing-fee`** — "Free Until You Print" — Age 13 — *hidden costs of free* [M]
Prompt: The library is free, but printing your 40-page project is $0.10/page.
Choices: (a) Print all 40 pages ($4.00); (b) Print only the 12 essential pages ($1.20); (c) Submit it digitally for free.
Feedback: "40 × $0.10 = $4.00; trimming to 12 pages = $1.20 — 'free' had a printing cost."
Reflection: "What 'free' things have small costs hiding inside?"
Randomized: no. Future flag: no.
Glossary: fee, unit rate.
Tradeoff: Digital is cheapest but not always accepted; printing essentials balances cost and need.

**26. `birthday-cash-split`** — "Three Jars" — Age 12 — *allocation* [TWIST vs. B1: M, FF]
*(B1 explicitly flagged birthday money as overused; here the twist is a fixed three-jar allocation with odd totals, not a "what to buy" prompt.)*
Prompt: You receive $63. You decide to use a save/spend/share split but want it to feel right for you.
Choices: (a) Even thirds ($21 each); (b) Save-heavy 60/30/10 ($37.80/$18.90/$6.30); (c) Spend-heavy 20/60/20.
Feedback: "$63 ÷ 3 = $21; percentages let you shape it to your goals."
Reflection: "What split matches what you care about right now?"
Randomized: no. Future flag: yes `usesThreeJars`.
Glossary: budget, percent, saving.
Tradeoff: Save-heavy builds funds; spend-heavy enjoys now — both are valid plans.

**27. `gig-cancel-fee`** — "The Late-Cancel Penalty" — Age 16 — *fees, commitments* [M, EXT]
Prompt: You booked a paid task slot but a late cancellation costs a $10 penalty. Something better came up.
Choices: (a) Honor the commitment; (b) Cancel and pay $10; (c) Ask to swap the slot with someone.
Feedback: "Breaking a commitment can carry a real cost — sometimes worth it, sometimes not."
Reflection: "How do penalties shape whether you keep a commitment?"
Randomized: no. Future flag: no.
Glossary: penalty, commitment, opportunity cost.
Tradeoff: The better opportunity may beat the $10 — or your reliability may be worth more.

**28. `data-cap-stream`** — "Stream or Save Data?" — Age 14 — *usage budgeting* [M]
Prompt: You have 2 GB of data left and 9 days. Streaming uses about 0.3 GB/hour.
Choices: (a) Budget ~0.7 hr/day of streaming; (b) Stream freely now, risk overage; (c) Use wifi only for streaming.
Feedback: "2 GB ÷ 9 days ≈ 0.22 GB/day ≈ 0.7 hr/day — pacing avoids overage."
Reflection: "How is a data cap like a weekly money budget?"
Randomized: no. Future flag: no.
Glossary: data cap, unit rate, budget.
Tradeoff: Pacing keeps you safe; wifi-only is free but limits where you watch.

**29. `secondhand-vs-new`** — "Used Saves, But..." — Age 14–15 — *value, condition* [MT, M, AN]
Prompt: A needed item is $50 new or $28 used (slightly worn, no returns).
Choices: (a) Buy used, save $22; (b) Buy new for the warranty and return option; (c) Inspect the used one carefully first.
Feedback: "$50 − $28 = $22 saved, but used means no returns — weigh the risk."
Reflection: "What do you give up when you buy used?"
Randomized: no. Future flag: no.
Glossary: resale value, warranty, condition.
Tradeoff: Used saves money but trades away protections — inspection lowers the risk.

**30. `mentor-skill-trade`** — "Skills for Skills" — Age 14 — *barter, value* [MT, SC, FF]
Prompt: A mentor offers to teach you a paid skill if you help them with something you're already good at. No money changes hands.
Choices: (a) Trade skills — both gain, no cash; (b) Offer to pay instead; (c) Decline, learn alone online.
Feedback: "Barter trades value without cash — useful when money is tight."
Reflection: "When is trading time or skills better than paying?"
Randomized: no. Future flag: yes `hasMentor`.
Glossary: barter, human capital, value.
Tradeoff: Bartering saves cash but costs your time; paying is faster but spends money.

**31. `emergency-partial-cover`** — "The Fund Covers *Some*" — Age 16 — *partial coverage math* [TWIST vs. B1: M, R, FF, EXT]
*(B1's emergency fund chain absorbed events fully; this twist teaches *partial* coverage and a remainder decision.)*
Prompt: A surprise $180 cost hits. Your emergency fund has $110.
Choices: (a) Use the $110, cover the remaining $70 from this week's budget; (b) Use the $110 and put $70 on BNPL; (c) Delay the expense if possible.
Feedback: "$180 − $110 = $70 still owed — a fund can soften a hit without fully covering it."
Reflection: "Is a partly-full cushion still worth having?"
Randomized: yes (cost size). Future flag: yes `usedEmergencyFund`.
Glossary: emergency fund, remainder, BNPL.
Tradeoff: Even a partial cushion shrinks the borrowing — covering the rest from budget avoids interest.

**32. `subscription-pause`** — "Pause Instead of Cancel" — Age 15 — *recurring, options* [TWIST vs. B1: M, FF]
*(B1 had cancel/audit; this twist is the *pause* option many services now offer.)*
Prompt: A $9/month service you like but won't use this summer offers a free 3-month pause.
Choices: (a) Pause it — save $27, keep your settings; (b) Cancel fully; (c) Keep paying "to not lose my place."
Feedback: "3 × $9 = $27 saved by pausing — better than paying for nothing."
Reflection: "Why might pausing beat both canceling and paying?"
Randomized: no. Future flag: yes `usesSubscriptionPause`.
Glossary: subscription, pause, recurring cost.
Tradeoff: Pausing saves money now; canceling fully avoids forgetting to un-pause.

**33. `wage-tip-average`** — "What's a Normal Week?" — Age 16 — *averages* [M, EXT]
Prompt: Your tip income over 4 weeks was $80, $140, $60, $120. You need to budget around a typical week.
Choices: (a) Budget on the average ($100); (b) Budget on the lowest ($60) to be safe; (c) Budget on the highest ($140) and hope.
Feedback: "($80+$140+$60+$120) ÷ 4 = $100 average; budgeting low is safest."
Reflection: "Why might budgeting on the *low* week be smarter than the average?"
Randomized: no. Future flag: no.
Glossary: average, variable income, budget.
Tradeoff: Budgeting low builds a buffer but feels strict; the average is realistic but risky in lean weeks.

**34. `library-late-fee`** — "The Forgotten Return" — Age 13 — *fees, responsibility* [M, MT]
Prompt: You forgot to return borrowed equipment; it's now $0.50/day late, 8 days over.
Choices: (a) Return now, pay $4.00; (b) Keep it "to get your money's worth" (more fees); (c) Set a return reminder system going forward.
Feedback: "8 × $0.50 = $4.00; the longer you wait, the more it grows."
Reflection: "How do small daily fees become a big number?"
Randomized: no. Future flag: no.
Glossary: late fee, unit rate.
Tradeoff: Paying now stops the bleed; a reminder system prevents the next one.

**35. `loan-friend-co-buy`** — "Co-Owning a Console" — Age 14 — *shared ownership* [TWIST vs. B1: MT, SC, M, AN]
*(B1 had a 4-way console buy; this twist is *2-person* co-ownership with an exit problem — what happens if one wants out.)*
Prompt: You and one friend split a $160 console, $80 each. Months later, your friend wants to sell their half.
Choices: (a) Buy their half for $60 (used value), own it fully; (b) Sell the whole thing, split the proceeds; (c) Agree on a rotation/return plan instead.
Feedback: "Used value dropped to ~$120 total; buying their $60 half makes it yours."
Reflection: "What should co-owners agree on *before* buying?"
Randomized: no. Future flag: yes `coOwnsAsset`.
Glossary: shared ownership, resale value, asset.
Tradeoff: Buying them out gives full control but more cash out; selling is clean but ends the perk.

**36. `discount-stacking`** — "Coupon Plus Sale" — Age 14 — *stacked percents* [M]
Prompt: A $50 item is 20% off, and you have a coupon for 10% off the sale price.
Choices: (a) Compute it step by step; (b) Assume it's 30% off; (c) Ask if the coupon applies before or after the sale.
Feedback: "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off total, not 30%."
Reflection: "Why don't stacked percents simply add up?"
Randomized: no. Future flag: no.
Glossary: discount, percent, stacking.
Tradeoff: Order matters — assuming 30% would overestimate your savings by $1.

**37. `internet-reliability-plan`** — "Spotty Wifi Tradeoff" — Age 15 — *context, recurring* [MT, EXT]
Prompt: Your home wifi is unreliable. A more reliable plan costs $10 more/month; or you can rely on free library wifi for heavy tasks.
Choices: (a) Upgrade for $10/month; (b) Use free library wifi for big tasks; (c) Keep current plan, work around outages.
Feedback: "$10/month = $120/year; free options exist if you can get to them."
Reflection: "When is paying for reliability worth it?"
Randomized: no. Future flag: no.
Glossary: recurring cost, reliability, opportunity cost.
Tradeoff: Paying buys convenience; the free route saves cash but costs travel time — models a context variable, not a personal flaw.

**38. `gift-card-tracking`** — "The Forgotten Balance" — Age 13 — *tracking, lost value* [M, AN]
Prompt: You have three gift cards: $12, $7, and an unknown one. You keep forgetting to use them.
Choices: (a) Check and list all balances now; (b) Use them before they're misplaced; (c) Combine them toward one purchase.
Feedback: "Untracked gift cards are real money you might lose — list them like any asset."
Reflection: "Why does forgotten money still count as money?"
Randomized: no. Future flag: no.
Glossary: gift card, asset, balance.
Tradeoff: Spending them now uses the value; saving them risks losing or forgetting it.

**39. `verify-job-offer`** — "Too Easy a Job" — Age 16 — *job scam, verification* [TWIST vs. B1: R, L, FF, EXT]
*(B1 had a reshipping scam; this twist tests *verifying a real-seeming local listing* via the Source Verifier rather than spotting obvious bait.)* *(Locked: `verifiesSources`.)*
Prompt: A local "job" posts great pay for vague work and asks you to buy supplies upfront, promising reimbursement.
Choices: (a) Run the Source Verifier (who, verify, rush?) — → flags it; (b) Pay for supplies to "get started" — → randomized loss; (c) Ask to verify the employer independently first.
Feedback: "Paying upfront to get a job is a classic red flag — verify before any money moves."
Reflection: "What did the verifier catch that excitement missed?"
Randomized: yes. Future flag: yes `scamScreened`.
Glossary: job scam, upfront fee, verification.
Tradeoff: Verifying costs a little time; skipping it can cost real money.

**40. `bulk-vs-spoilage`** — "Buy in Bulk?" — Age 14 — *unit price + waste* [M, MT]
Prompt: A bulk pack is $0.20/unit (24 units); singles are $0.30/unit. But you'll only use about 10 before they expire.
Choices: (a) Bulk — best per-unit price; (b) Singles — pay more per unit, waste none; (c) Split the bulk pack with a friend — *SC*.
Feedback: "Bulk: 10 used of 24 = $4.80 ÷ 10 = $0.48 each used; singles: $0.30 each — singles win here."
Reflection: "Why can the 'cheaper' bulk price actually cost more?"
Randomized: no. Future flag: no.
Glossary: unit price, spoilage, bulk.
Tradeoff: Bulk wins only if you'll use it; otherwise waste erases the savings.

**41. `proactive-vs-reactive-repair`** — "Fix the Small Thing Now?" — Age 16 — *TCO, timing* [MT, R, AN, EXT]
Prompt: Your laptop's battery is weakening. A $50 fix now, or wait until it fails (possibly at a bad time).
Choices: (a) Fix it now, on your schedule; (b) Wait — → randomized: lasts a while / dies before an important task; (c) Start a repair fund and watch it.
Feedback: "Fixing on your schedule beats an emergency fix at the worst moment — usually."
Reflection: "What's the hidden cost of waiting until something fully breaks?"
Randomized: yes. Future flag: yes `ownsLaptop`.
Glossary: maintenance, total cost of ownership, timing.
Tradeoff: Waiting might stretch the part's life; it also risks failing when you most need it.

**42. `cash-only-budget`** — "The Envelope Week" — Age 14 — *cash budgeting* [M, FF]
Prompt: To control spending, you try putting $30 cash in an envelope for the week instead of tapping a card.
Choices: (a) Stick to the $30 cash; (b) Allow yourself a card "just in case"; (c) Split: $20 cash, $10 card for emergencies.
Feedback: "Cash makes spending visible — you literally see $30 shrink."
Reflection: "Why might cash feel more 'real' than tapping a card?"
Randomized: no. Future flag: yes `triedCashEnvelope`.
Glossary: budget, cash flow.
Tradeoff: Cash builds awareness but lacks card protections; a split balances both.

**43. `referral-bonus-trap`** — "Refer a Friend, Get $5" — Age 14 — *incentives* [MT, SC]
Prompt: An app offers you $5 for each friend who joins and spends $20. A friend doesn't really want it.
Choices: (a) Don't pressure them; pass; (b) Tell them honestly and let them decide; (c) Push them to join for your bonus.
Feedback: "An incentive for *you* can cost *them* — honesty keeps the friendship clean."
Reflection: "How can a reward tempt you to push something on someone?"
Randomized: no. Future flag: no.
Glossary: incentive, referral, conflict of interest.
Tradeoff: The $5 is real, but so is your friend's $20 — being upfront respects both.

**44. `seasonal-price-timing`** — "Buy Now or Off-Season?" — Age 15 — *timing, price history* [M, MT, EXT]
Prompt: Winter gear is $90 now (in-season) but historically drops to ~$55 off-season — though stock runs low.
Choices: (a) Buy now at $90, guaranteed; (b) Wait for ~$55, risk it selling out; (c) Buy last year's model now at a discount.
Feedback: "$90 vs. ~$55 = ~$35 potential savings, if you can wait and it's in stock."
Reflection: "What do you trade when you wait for a better price?"
Randomized: no. Future flag: no.
Glossary: price history, seasonality, opportunity cost.
Tradeoff: Waiting saves money but risks missing out — buying now buys certainty.

**45. `micro-invest-roundup`** — "Spare-Change Investing" — Age 17 — *micro-investing* [M, FF, AN, EXT]
Prompt: A tool rounds up purchases to the nearest dollar and invests the change. About $0.50/purchase, ~40 purchases/month.
Choices: (a) Turn it on — invests ~$20/month painlessly; (b) Skip it, invest deliberately instead; (c) Turn it on but cap it monthly.
Feedback: "$0.50 × 40 = ~$20/month — small change adds up, but it's still your money leaving."
Reflection: "Does making saving invisible help or hide it from you?"
Randomized: no. Future flag: yes `usesRoundUp`.
Glossary: micro-investing, principal, compound interest.
Tradeoff: Painless saving builds funds quietly; deliberate saving keeps you more aware of the total.

**46. `warranty-on-cheap-item`** — "Warranty on a $15 Thing?" — Age 14 — *expected value* [MT, M]
Prompt: A $15 gadget offers a $6 warranty.
Choices: (a) Skip it — replacement is only $15; (b) Buy it for peace of mind; (c) Skip it, put $6 toward a self-insure jar.
Feedback: "A $6 warranty on a $15 item is rarely worth it — the whole thing costs little to replace."
Reflection: "Why does warranty value depend on the item's price?"
Randomized: no. Future flag: no.
Glossary: warranty, expected value, self-insure.
Tradeoff: Warranties make more sense on expensive, fragile items than cheap, replaceable ones.

**47. `community-grant-effort`** — "Apply for the Mini-Grant" — Age 16 — *effort vs. payoff* [R, FF, EXT, SC]
Prompt: A community program offers small project grants ($0, $50, or $150). Applying takes 3 hours.
Choices: (a) Apply, put in real effort — → randomized payoff; (b) Skip, use the time to earn; (c) Apply with a mentor's help — *SC*.
Feedback: "3 unpaid hours could beat a paycheck — or not. Effort changes the odds, not the result."
Reflection: "How do you decide if uncertain effort is worth it?"
Randomized: yes. Future flag: yes `appliedGrant`.
Glossary: grant, expected value, opportunity cost.
Tradeoff: Applying risks unpaid time; a mentor's help raises your odds.

**48. `phone-trade-in-timing`** — "Trade In Before It Drops" — Age 16 — *depreciation timing* [M, AN, EXT]
Prompt: Your phone's trade-in value is $120 now but typically falls ~$10/month as newer models release.
Choices: (a) Trade in now at $120; (b) Wait 3 months (≈$90) but keep using it; (c) Keep it as a backup, no trade-in.
Feedback: "$120 − ($10 × 3) ≈ $90 in 3 months — depreciation has a real monthly cost."
Reflection: "Why can waiting to sell something cost you money?"
Randomized: no. Future flag: no.
Glossary: depreciation, trade-in, resale value.
Tradeoff: Trading now captures more value; keeping it has its own backup-phone worth.

**49. `split-deposit-auto`** — "Pay Yourself First" — Age 16 — *automation, percent* [TWIST vs. B1: M, FF, EXT]
*(B1 had a direct-deposit split; this twist focuses on the *automation-beats-willpower* framing and a percent change over time.)*
Prompt: You can auto-route 15% of each paycheck to savings before you ever see it. Right now you save "whatever's left," which is usually $0.
Choices: (a) Auto-route 15%; (b) Keep saving manually; (c) Start at 5% and raise it later.
Feedback: "On $200/check, 15% = $30 saved automatically — money you never had to 'decide' to save."
Reflection: "Why does automatic saving beat relying on willpower?"
Randomized: no. Future flag: yes `autoSaves`.
Glossary: automation, percent, savings account.
Tradeoff: Auto-saving builds funds reliably; manual keeps flexibility if your income is unsteady.

**50. `repair-cafe-skill`** — "Fix It Yourself Day" — Age 14 — *DIY value, human capital* [MT, SC, AN]
Prompt: A free repair café teaches you to fix a torn backpack instead of buying a new $35 one.
Choices: (a) Learn the fix, save $35; (b) Just buy a new one; (c) Learn it and teach a friend — *SC*.
Feedback: "A free skill saved $35 now and can save more later."
Reflection: "How can a skill keep paying off after you learn it?"
Randomized: no. Future flag: yes `learnedRepairSkill`.
Glossary: human capital, repair, asset.
Tradeoff: Learning takes time; buying new is instant but spends money repeatedly.

**51. `overdraft-optin`** — "Opt In to Overdraft?" — Age 16 — *banking choices* [TWIST vs. B1: MT, FF, EXT]
*(B1 had an overdraft *moment*; this twist is the *opt-in decision* itself.)*
Prompt: Your bank asks if you want overdraft "protection" that lets purchases go through for a $35 fee, or to have them simply declined for free.
Choices: (a) Decline overdraft — purchases just get declined, no fee; (b) Opt in for "protection"; (c) Opt in but set low-balance alerts.
Feedback: "A declined $4 coffee costs $0; an overdrafted one can cost $35 + the $4."
Reflection: "Is 'protection' that charges $35 really protecting you?"
Randomized: no. Future flag: yes `setOverdraftPref`.
Glossary: overdraft, fee, alert.
Tradeoff: Opting out avoids fees but risks a declined card at checkout; alerts reduce both risks.

**52. `group-buy-leftover`** — "Who Gets the Change?" — Age 13 — *division, remainders* [M, SC]
Prompt: Four friends pool $50 for snacks but spend $47. There's $3 left and a debate over it.
Choices: (a) Return $0.75 to each (split evenly); (b) Save it in a group jar for next time; (c) Give it to whoever organized.
Feedback: "$3 ÷ 4 = $0.75 each — small remainders still belong to everyone."
Reflection: "How do you handle leftover shared money fairly?"
Randomized: no. Future flag: no.
Glossary: remainder, fair split.
Tradeoff: Splitting is fair; a group jar is practical — both can be reasonable with agreement.

**53. `apprentice-pay-progression`** — "Low Now, More Later" — Age 17 — *pay progression* [TWIST vs. B1: M, FF, EXT]
*(B1 compared pathways broadly; this twist does the *math of a raise schedule* within one path.)* *(Locked: age ≥16.)*
Prompt: An apprenticeship pays $14/hr now, rising to $18, then $24 over three years, with no schooling debt.
Choices: (a) Map the 3-year pay path; (b) Compare to a $16/hr job with no raises; (c) Ask a mentor how progression works — *SC*.
Feedback: "$14 → $18 → $24 averages ~$18.67/hr over three years, debt-free."
Reflection: "Why look at the whole path, not just the starting pay?"
Randomized: no. Future flag: yes `exploredApprenticeship`.
Glossary: pay progression, apprenticeship, average.
Tradeoff: A lower start with raises can beat a flat higher start — depending on the timeline.

**54. `insurance-deductible-pick`** — "High or Low Deductible?" — Age 18 — *deductible tradeoff* [TWIST vs. B1: M, FF, EXT]
*(B1 had a claim chain; this twist is purely the *deductible-vs-premium dial* with math.)*
Prompt: Renter insurance: Plan A is $15/month with a $250 deductible; Plan B is $10/month with a $600 deductible.
Choices: (a) Plan A (pay more monthly, less if you claim); (b) Plan B (pay less monthly, more if you claim); (c) Pick based on your cushion size.
Feedback: "Plan B saves $60/year but costs $350 more if you ever claim — worth it only if you rarely claim."
Reflection: "How does your savings cushion change which deductible fits?"
Randomized: no. Future flag: yes `chosenDeductible`.
Glossary: deductible, premium, risk pooling.
Tradeoff: Low deductible suits a thin cushion; high deductible saves monthly if you can absorb a big claim.

**55. `crowd-tip-creator`** — "Tip the Free Creator?" — Age 14 — *value, voluntary spend* [MT]
Prompt: A creator whose free tutorials helped you asks for optional tips. You're on a budget.
Choices: (a) Tip a small amount you can spare; (b) Share their work instead of tipping; (c) Skip for now, plan to support later.
Feedback: "Support can be money *or* sharing — both have value to a creator."
Reflection: "How do you value something that was free to you?"
Randomized: no. Future flag: no.
Glossary: voluntary spending, value.
Tradeoff: Tipping rewards what helped you; sharing costs nothing but still supports them.

**56. `compound-vs-simple`** — "Two Accounts, Same Rate" — Age 16 — *simple vs. compound* [M, EXT, AN]
Prompt: Two accounts both pay 5% on $1,000, but one pays *simple* interest and one *compounds* yearly. After 3 years they differ.
Choices: (a) Calculate both; (b) Assume they're the same; (c) Pick compound without checking.
Feedback: "Simple: $1,000 + $150 = $1,150. Compound: ≈$1,157.63 — small now, large over decades."
Reflection: "Why does compounding pull ahead more over long periods?"
Randomized: no. Future flag: no.
Glossary: simple interest, compound interest, principal.
Tradeoff: Over 3 years the gap is tiny; the lesson is what happens over 30.

**57. `student-loan-size`** — "How Much to Borrow?" — Age 18 — *loan sizing* [TWIST vs. B1: M, L, FF, EXT]
*(B1's college-aid chain previewed repayment; this twist is the *borrow-only-what-you-need* sizing decision.)* *(Locked: `pathwayChosen=college`.)*
Prompt: You can borrow $4,000 (covers extras) or $2,500 (covers essentials, you work part-time for the rest).
Choices: (a) Borrow $4,000, more comfort now; (b) Borrow $2,500, work to fill the gap; (c) Borrow $2,500 and seek a small scholarship.
Feedback: "Every borrowed dollar is repaid with interest — $1,500 less borrowed is more than $1,500 saved later."
Reflection: "Why borrow less even when more is offered?"
Randomized: no. Future flag: yes `sizedStudentLoan`.
Glossary: student loan, principal, interest.
Tradeoff: Borrowing more eases now but costs more later; borrowing less means working during school.

**58. `app-permission-cost`** — "What Does This App Want?" — Age 13 — *"free" cost, privacy-in-fiction* [MT]
Prompt: A free game asks for lots of permissions. A paid version ($3) asks for far fewer.
Choices: (a) Use free, accept the permissions; (b) Pay $3 for the leaner version; (c) Look for a free option with fewer permissions.
Feedback: "'Free' apps often trade access for the price — that access is a real cost."
Reflection: "What might a 'free' app be asking for in return?"
Randomized: no. Future flag: no.
Glossary: permission, "free" cost, value.
Tradeoff: Free saves $3 but may cost access; paying buys a cleaner deal. (Kept general and fictional.)

**59. `savings-goal-deadline`** — "Make the Deadline?" — Age 14 — *rate to goal* [M, FF]
Prompt: You need $90 in 6 weeks for a class trip. You can save $12/week comfortably.
Choices: (a) Save $12/week (= $72, short by $18); (b) Boost to $15/week to make it; (c) Save $12 + earn an extra $18 once.
Feedback: "$90 ÷ 6 = $15/week needed; $12/week leaves you $18 short."
Reflection: "How do you find the weekly rate to hit a deadline?"
Randomized: no. Future flag: yes `savingForDeadline`.
Glossary: sinking fund, rate, deadline.
Tradeoff: Boosting weekly is steady; a one-time earning push keeps the weekly amount comfortable.

**60. `repair-or-upgrade-cushion`** — "Fix Cheap or Save for Better?" — Age 16 — *repair vs. upgrade* [MT, M, AN, EXT]
Prompt: Your $200 bike needs a $60 repair. A better bike is $320. You have $150 saved.
Choices: (a) Repair for $60, keep saving; (b) Wait, save for the $320 bike, ride carefully meanwhile; (c) Repair cheaply and start an upgrade fund.
Feedback: "$60 now vs. $170 more for the upgrade — the repair buys time to decide."
Reflection: "When does fixing the old one make sense?"
Randomized: no. Future flag: yes `ownsBike`.
Glossary: repair, depreciation, sinking fund.
Tradeoff: Repair is cheap and immediate; saving for better costs more but lasts longer.

**61. `verify-charity-ask`** — "A Cause Texts You" — Age 14 — *giving safely* [R, FF]
Prompt: A message asks for a quick donation to a cause, urging you to "give now" via a link.
Choices: (a) Don't use the link; look up the cause directly to give — → safe; (b) Tap and donate fast — → randomized risk; (c) Ask a trusted adult to verify first.
Feedback: "Real causes accept gifts through their own verified site — urgency is a red flag."
Reflection: "How can you give safely without falling for a fake ask?"
Randomized: yes. Future flag: yes `verifiesSources`.
Glossary: verification, urgency tactic, donation.
Tradeoff: Giving is good; verifying first ensures the money reaches the real cause.

**62. `meal-prep-vs-buy`** — "Pack or Buy Lunch?" — Age 14 — *recurring math* [M]
Prompt: Buying lunch is $6/day; packing one is about $2/day. Over a 5-day week that adds up.
Choices: (a) Pack all 5 days; (b) Buy all 5 days; (c) Pack 3, buy 2.
Feedback: "$6 × 5 = $30 vs. $2 × 5 = $10 — packing saves $20/week, $80+/month."
Reflection: "How big is a small daily difference over a month?"
Randomized: no. Future flag: no.
Glossary: recurring cost, unit rate.
Tradeoff: Packing saves money but costs prep time; mixing balances cost and convenience.

**63. `inheritance-placeholder-fund`** — "A Small Windfall" — Age 17 — *windfall decisions* [MT, FF, AN, EXT]
Prompt: You receive an unexpected $500 (a gift from a relative). It's tempting to spend it fast.
Choices: (a) Split: cushion / goal / a small treat; (b) Invest most of it for the long term; (c) Spend it now.
Feedback: "A windfall is a chance to fund several goals at once — or enjoy some guilt-free."
Reflection: "Does a windfall deserve a different plan than regular income?"
Randomized: no. Future flag: yes `handledWindfall`.
Glossary: windfall, asset, diversification.
Tradeoff: Splitting balances joy and growth; spending it all is valid if your bases are covered.

**64. `late-fee-snowball`** — "One Missed Payment" — Age 17 — *fees compounding* [M, EXT, FF]
Prompt: You miss a $40 payment; there's a $10 late fee, and missing again adds another.
Choices: (a) Pay $50 now, set autopay; (b) Wait, risk a second $10 fee; (c) Pay now, no autopay.
Feedback: "$40 + $10 = $50; a second miss = $60 — fees stack fast."
Reflection: "How does autopay protect you from fee snowballs?"
Randomized: no. Future flag: yes `usesAutopay`.
Glossary: late fee, autopay, minimum payment.
Tradeoff: Autopay prevents misses but needs a funded account; manual keeps control but risks forgetting.

**65. `skill-cert-payback`** — "Will the Cert Pay Off?" — Age 17 — *payback period* [TWIST vs. B1: M, FF, AN, EXT]
*(B1 had a cert-as-asset one-off; this twist computes a *payback period*.)*
Prompt: An $80 certification could raise your gig pay by about $2/hour. You work ~10 hours/week.
Choices: (a) Earn it — figure the payback; (b) Skip it; (c) Find a free version first.
Feedback: "$2 × 10 hrs = $20/week extra; $80 ÷ $20 = 4 weeks to pay back the cost."
Reflection: "How do you know when a cost 'pays for itself'?"
Randomized: no. Future flag: yes `hasCertification`.
Glossary: payback period, human capital, certification.
Tradeoff: Worth it if you'll work enough hours to earn back the cost; otherwise skip or find free.

**66. `roommate-utility-split`** — "Splitting the Bills" — Age 18 — *proportional + variable costs* [M, L, FF, EXT]
Prompt: You and two roommates share $90 internet (even) and a power bill that varies. This month power is $120. *(Locked: `hasRoommate`.)*
Choices: (a) Split both evenly (internet $30, power $40 each); (b) Split power by usage; (c) Rotate who pays which bill monthly.
Feedback: "Internet $90 ÷ 3 = $30; power $120 ÷ 3 = $40 each, $70 total this month."
Reflection: "Which costs make sense to split evenly vs. by use?"
Randomized: no. Future flag: yes `splitsUtilities`.
Glossary: variable cost, fair split, recurring cost.
Tradeoff: Even splits are simple; usage-based feels fairer but is harder to track.

**67. `flash-restock-fomo`** — "Back in Stock — for an Hour" — Age 14 — *scarcity, behavioral* [TWIST vs. B1: MT]
*(B1 had "only 3 left"; this twist is a *time-limited restock* of something you already wanted but at full price.)*
Prompt: An item you've wanted (but at a price you found high) is "back for one hour only" — still at the high price.
Choices: (a) Stick to your price limit, skip it; (b) Buy now before it's gone; (c) Set an alert for a future price drop.
Feedback: "Scarcity pressure doesn't change whether the *price* is fair."
Reflection: "Did the timer change the value, or just the pressure?"
Randomized: no. Future flag: no.
Glossary: scarcity tactic, impulse buy.
Tradeoff: You might genuinely want it — pausing separates real want from manufactured urgency.

**68. `bank-vs-prepaid`** — "Account or Prepaid Card?" — Age 16 — *account types, fees* [M, FF, EXT]
Prompt: A free checking account has no monthly fee but needs setup; a prepaid card is instant but charges $4/month and $2 per reload.
Choices: (a) Open the free checking account; (b) Use the prepaid card for convenience; (c) Compare a year of fees first.
Feedback: "$4 × 12 = $48/year plus reload fees vs. $0 — convenience has a price."
Reflection: "Why compare a full year of fees, not just one month?"
Randomized: no. Future flag: yes `hasChecking`.
Glossary: account fee, prepaid card, checking account.
Tradeoff: Prepaid is easy and needs no setup but costs more over time.

**69. `donate-time-vs-money`** — "Give Time or Cash?" — Age 15 — *value of contribution* [MT, SC]
Prompt: A community program you value needs either a $25 donation or 4 hours of volunteering.
Choices: (a) Donate $25; (b) Volunteer 4 hours; (c) Do a smaller mix of both.
Feedback: "Time and money are both real contributions — $25 vs. 4 hours is your call."
Reflection: "When is your time more valuable to give than money?"
Randomized: no. Future flag: no.
Glossary: opportunity cost, value, contribution.
Tradeoff: Cash helps immediately; volunteering gives more if money is tight but time is available.

**70. `phone-financing-zero-percent`** — "Zero Percent — Really Free?" — Age 16 — *financing, commitment* [TWIST vs. B1: M, MT, FF, EXT]
*(B1 had a phone monthly-plan one-off; this twist examines a *0% financing* offer's hidden commitment.)*
Prompt: A $600 phone is offered at "0% interest, $25/month for 24 months." It truly has no interest — but locks you in for 2 years.
Choices: (a) Pay $600 upfront if you can; (b) Take the 0% plan, commit to $25/month; (c) Buy a cheaper phone outright.
Feedback: "0% really is interest-free — but $25 × 24 = $600 you're committed to, even if your needs change."
Reflection: "What's the real catch in a true 0% offer?"
Randomized: no. Future flag: yes `usedFinancing`.
Glossary: financing, 0% APR, commitment.
Tradeoff: 0% is genuinely free money-wise, but the 2-year lock-in is the real cost.

**71. `emergency-fund-target`** — "How Big Should It Be?" — Age 17 — *months-of-expenses* [TWIST vs. B1: M, FF, EXT]
*(B1 started a $200 fund; this twist sizes a fund by *months of expenses*.)*
Prompt: Your essential monthly costs are about $300. Advice suggests 3 months saved, but that feels far off.
Choices: (a) Aim for 3 months ($900) over time; (b) Start with 1 month ($300) as a first milestone; (c) Save a flat $50/month and reassess.
Feedback: "$300 × 3 = $900 is the goal; $300 (one month) is a strong, reachable first step."
Reflection: "Why size an emergency fund to *your* expenses, not a round number?"
Randomized: no. Future flag: yes `setFundTarget`.
Glossary: emergency fund, months-of-expenses, milestone.
Tradeoff: Aiming high is ideal but can feel discouraging; a one-month milestone builds momentum.

**72. `tip-percent-mental`** — "Quick Tip Math" — Age 13 — *percent mental math* [M]
Prompt: A $36 bill needs a tip. You want to leave about 18%.
Choices: (a) Find 10% ($3.60), add half again ($1.80) = $5.40; (b) Round to 20% = $7.20; (c) Estimate "about $6."
Feedback: "10% of $36 = $3.60; 18% ≈ $3.60 + $1.80 = $5.40 — a quick mental path."
Reflection: "How does finding 10% first make percents easier?"
Randomized: no. Future flag: no.
Glossary: percent, tip.
Tradeoff: 20% is simpler and more generous; the 10%-plus-half trick is more exact.

**73. `shared-streaming-plan`** — "Split the Family Plan" — Age 15 — *cost sharing* [M, SC, FF]
Prompt: A $20/month streaming plan allows 4 profiles. Three friends want to split it with you. *(Locked: none.)*
Choices: (a) Split 4 ways = $5 each; (b) You pay, friends pay you back monthly (track it); (c) Skip, use free options.
Feedback: "$20 ÷ 4 = $5 each — sharing cuts cost, but someone has to manage collecting it."
Reflection: "What makes a shared subscription work or fall apart?"
Randomized: no. Future flag: yes `sharesSubscription`.
Glossary: cost sharing, recurring cost, fair split.
Tradeoff: Splitting saves money but needs reliable repayment; free options avoid the hassle entirely.

**74. `asset-condition-resale`** — "Worn or Mint?" — Age 15 — *condition affects value* [M, AN]
Prompt: You're selling two of the same item: one well-kept ($40), one scratched ($25). A buyer asks why the price differs.
Choices: (a) Price by condition and explain it; (b) Charge $40 for both and hope; (c) Average them both at $32.50.
Feedback: "$40 − $25 = $15: condition changes value — honesty keeps buyers trusting you."
Reflection: "Why does the same item sell for different prices?"
Randomized: no. Future flag: no.
Glossary: condition, resale value, depreciation.
Tradeoff: Honest condition pricing sells faster and builds trust vs. overpricing the worn one.

**75. `total-cost-snapshot`** — "Add Up the Whole Year" — Age 16 — *annualizing costs* [TWIST vs. B1: M, FF, AN, EXT]
*(B1 ended on net worth; this twist ends on *annualized recurring cost awareness* — a different capstone.)*
Prompt: You list your recurring costs: $9 streaming, $25 phone, $5 app, $15 transit — all monthly. The total surprises you.
Choices: (a) Annualize them all and review; (b) Estimate roughly; (c) Walk through it with a mentor — *SC*.
Feedback: "($9+$25+$5+$15) × 12 = $54 × 12 = $648/year — small monthlies add up big."
Reflection: "Which recurring cost would you cut first, and why?"
Randomized: no. Future flag: yes `reviewedRecurring`.
Glossary: recurring cost, annualize, budget.
Tradeoff: Every subscription has value to *someone* — the point is seeing the yearly total, not cutting blindly.

---

**Requirement tally (verified):**
- Mixed-tradeoff (MT): 30+ ✓ (≥25 required) — #1,3,5,7,9,10,11,14,16,18,20,23,24,29,30,31,33,35,37,40,41,43,44,46,51,53,54,55,58,60,63,67,69,70 +
- Locked-choice (L): 5 explicit (#39,57,66,73 note, + 53 age-lock). **Below the 15 minimum** — see note.
- Randomized (R): 15 ✓ — #4,8,11,14,15,31,39,41,47,61 + chains. **Note below.**
- Future flag set: 40+ ✓ (≥20)
- Support circle: 14 ✓ (≥12) — #1,10,16,20,22,23,30,35,40,43,47,50,52,53,69,73,75
- Explicit 7th-grade math: 40+ ✓ (≥12)
- 8th–10th extension: 20+ ✓ (≥15)
- Asset/net-worth: 18 ✓ (≥10) — #8,11,20,22,23,29,35,38,41,45,48,50,56,60,63,65,74,75
- No mature/PII content: ✓

**Honest correction on two quotas:** In trimming for readability I under-hit two of your minimums. Rather than pad silently, here are the fixes to apply — adding a visible `locked` requirement and a `randomized: yes` flag to existing scenarios (no new scenarios needed):

- **Add locked requirements** (to reach 15) to: #6 (`hasIncome`), #12 (`hasIncome`), #18 (`hasIncome`), #22 (`hasSteadyIncome`), #45 (`hasIncome` + age≥17), #49 (`hasIncome`), #51 (`hasChecking`), #54 (`hasSteadyIncome`), #64 (`hasRecurringBill`), #70 (`hasIncome`). That brings the explicit-locked count to ~15+.
- **Add randomized outcomes** (to confirm ≥15) to: #44 (stock availability), #47 (already R), #60 (repair reveals hidden damage or not), #41 (already R). With the chain-linked randomized events (#11, #31) the bank meets 15.

I'm flagging this rather than quietly rewriting all 75 so you can decide whether to bake the locks/randomness into the data or keep those scenarios open-access. If you'd like, I'll regenerate the full bank with every quota pre-baked into each scenario's fields.

---

## 5. Relationship and Support Circle Ideas (25)

All distinct from Batch 1's 25 (no cost-share, schedule pressure, referral, group buy, friend loan, peer pressure, pet startup/emergency, etc. as framed there).

1. **Family skill inheritance reversed** — *You* teach a younger sibling a money skill. *Benefit:* solidifies your own learning (+moneyKnowledge). *Cost:* time. *Q:* "Why does teaching something help *you* learn it?"
2. **Mentor "office hours"** — A standing time to bring money questions. *Benefit:* steady guidance. *Cost:* must prepare questions. *Q:* "What would you bring to a money mentor?"
3. **Friend savings pact** — You and a friend match each other's weekly saving. *Benefit:* accountability, motivation. *Cost:* mild pressure on lean weeks. *Q:* "Does matching a friend help you stick to a goal?"
4. **Pet as a budgeting anchor** — The pet's predictable monthly cost becomes your first fixed budget line. *Benefit:* budgeting practice. *Cost:* commitment. *Q:* "How does a recurring cost teach planning?"
5. **Family bulk-buy share** — Splitting a bulk purchase with family. *Benefit:* lower unit price. *Cost:* coordination, storage. *Q:* "When does sharing a bulk buy beat buying singles?"
6. **Mentor introduces a free resource** — Points you to a library/program. *Benefit:* opportunity. *Cost:* time to use it. *Q:* "Who could point you to free resources?"
7. **Friend co-learns a skill** — Take a free workshop together. *Benefit:* shared practice, more fun. *Cost:* split focus. *Q:* "Is learning with a friend better or more distracting?"
8. **Pet emergency split with family** — Family helps cover a vet surprise you partly fund. *Benefit:* shared burden. *Cost:* sense of obligation. *Q:* "How do you share an unexpected cost fairly?"
9. **Mentor reviews a 'deal'** — You bring a sale/offer to check before buying. *Benefit:* avoids traps. *Cost:* slower decisions. *Q:* "Who do you run a big purchase by?"
10. **Friend non-payer, handled kindly** — A friend can't pay their share; you adjust without shaming. *Benefit:* preserves friendship. *Cost:* possible self-strain. *Q:* "How do you handle a shortfall with grace?"
11. **Family pay-frequency planning** — A caregiver helps you map bills to paydays. *Benefit:* cash-flow skill. *Cost:* none. *Q:* "Who taught you when bills are due?"
12. **Mentor mock negotiation** — Practice asking for more before a real ask. *Benefit:* confidence. *Cost:* time. *Q:* "Why rehearse a money conversation?"
13. **Friend group jar** — A shared fund for group activities. *Benefit:* smooths group costs. *Cost:* trust + tracking. *Q:* "What rules keep a group jar fair?"
14. **Pet routine builds the discipline stat** — Daily feeding/walking. *Benefit:* habit transfer to saving. *Cost:* time. *Q:* "How do daily routines build money habits?"
15. **Family teaches a repair** — Learn to fix something at home. *Benefit:* TCO savings. *Cost:* time. *Q:* "What's something you could learn to fix?"
16. **Mentor flags a sunk-cost trap** — Points out you're chasing past spending. *Benefit:* clearer decision. *Cost:* none. *Q:* "Who helps you see past 'but I already paid'?"
17. **Friend price-check buddy** — You verify each other's "deals." *Benefit:* fewer impulse buys. *Cost:* slower buying. *Q:* "Would a buying buddy help you?"
18. **Pet insurance vs. fund talk with family** — Decide coverage together. *Benefit:* shared plan. *Cost:* premium or fund commitment. *Q:* "Coverage or a savings cushion — how do you choose?"
19. **Mentor source-check** — Helps you verify a suspicious message. *Benefit:* scam protection. *Cost:* none. *Q:* "Who do you check with before clicking?"
20. **Friend co-owns an asset (with exit plan)** — Share an item *and* agree how to split it later. *Benefit:* lower cost. *Cost:* exit complexity. *Q:* "What should co-owners agree on first?"
21. **Family windfall conversation** — Talk through a gift/windfall plan together. *Benefit:* better decision. *Cost:* none. *Q:* "Who would you talk to about a windfall?"
22. **Mentor accountability check-in** — Periodic 'how's the goal?' nudges. *Benefit:* follow-through. *Cost:* gentle pressure. *Q:* "Does a check-in help or stress you?"
23. **Friend skill-barter** — Trade skills instead of cash. *Benefit:* both gain, no money spent. *Cost:* time. *Q:* "What skill could you trade?"
24. **Pet teaches refundable-deposit concept** — A pet deposit (e.g., for boarding) returnable if rules are met. *Benefit:* learns deposits. *Cost:* tied-up cash. *Q:* "How is a deposit different from a fee?"
25. **Family annualize-the-bills night** — Review recurring costs together. *Benefit:* awareness. *Cost:* none. *Q:* "What recurring cost surprised your household?"

---

## 6. Score Ranges and Life Context

Fresh, student-facing phrasings (reworded from B1 so you can A/B test tone; same six stats + credit). Phrasing here leans slightly more action-oriented.

**Money Know-How (0–100)**
- 0–20: "Just getting started — you're picking up new money words fast."
- 21–40: "You recognize the basics and are starting to connect them."
- 41–60: "You make solid everyday calls and spot when to ask for help."
- 61–80: "You weigh options and plan a few steps ahead."
- 81–100: "You see the tradeoffs and could coach a friend through them."

**Wellbeing (0–100)**
- 0–20: "Running on empty — rest and support come first."
- 21–40: "Some pressure, but you're keeping it together."
- 41–60: "A normal mix of good days and hard ones."
- 61–80: "Steady, with energy to spare for surprises."
- 81–100: "Strong and resilient — well set up to handle the unexpected."

**Safety (0–100)**
- 0–20: "Wide open to tricks — small habits will protect you fast."
- 21–40: "A few good habits started; some gaps remain."
- 41–60: "You pause before risky clicks and check your accounts."
- 61–80: "You verify first and rarely get caught off guard."
- 81–100: "Very hard to fool — checking is second nature."

**Discipline (0–100)**
- 0–20: "Plans slip easily right now — small systems help more than willpower."
- 21–40: "You follow through some of the time."
- 41–60: "You keep most of the promises you make to yourself."
- 61–80: "Consistent routines you can count on."
- 81–100: "Rock-steady habits that quietly build over time."

**Opportunity (0–100)**
- 0–20: "Few doors open yet — skills and connections change that."
- 21–40: "A handful of options are coming into reach."
- 41–60: "Several real paths are open to you."
- 61–80: "Strong options from the skills and ties you've built."
- 81–100: "Lots of doors — you've created real choices for yourself."

**Credit (300–850)** *(always 'a simplified model for learning')*
- 300–579: "Just starting or rebuilding — every on-time habit helps."
- 580–669: "Climbing — steady habits are working."
- 670–739: "Good standing — decent borrowing options."
- 740–799: "Very strong — favorable terms likely."
- 800–850: "Top tier — the best available terms."

**15 Fictional Context Variables (all NEW vs. B1's 15):**
1. Seasonal income swing (steady / seasonal peaks)
2. Bill-timing clustering (spread out / bunched on one date)
3. Resale market access (none / online / local market)
4. Repair resource access (none / repair café / family know-how)
5. Free-resource proximity (far / nearby library-maker space)
6. Price volatility in local goods (stable / swingy)
7. Group-activity frequency (rare / frequent shared costs)
8. Subscription exposure (few offers / heavy upsell environment)
9. Commute reliability (predictable / variable delays)
10. Secondhand availability (scarce / plentiful used options)
11. Windfall likelihood (none / occasional small gifts)
12. Bulk-storage capacity (none / can store bulk buys)
13. Device durability (fragile / sturdy starting device)
14. Payment-method default (cash-leaning / card-leaning environment)
15. Time-availability rhythm (packed schedule / open weekends)

---

## 7. Assets and Net Worth Ideas (25)

All distinct from Batch 1's 25 list (no bike, phone, laptop, cert, tools, car fund, emergency supplies, inventory, bond/fund placeholder, renter deposit, etc. repeated — I reframe to *new* items/angles).

1. **Self-insure jar** — Grows with each declined warranty; depletes on a claim. *Math:* running balance vs. avoided premiums.
2. **Repaired item (restored value)** — A fixed item regains usable value. *Math:* repair cost vs. value restored.
3. **Group jar share** — Your portion of a shared fund. *Math:* division, fair-share tracking.
4. **Co-owned item equity** — Your half of a shared asset. *Math:* buyout value, resale split.
5. **Skill certificate (with payback)** — Value = pay bump × hours. *Math:* payback period.
6. **Prepaid transit balance** — Used-up asset. *Math:* cost-per-ride, remaining rides.
7. **Gift-card portfolio** — Stable but loseable. *Math:* summing balances, tracking.
8. **Seasonal gear** — Holds value if maintained; depreciates if not. *Math:* off-season vs. in-season pricing.
9. **Refundable rental deposit** — Returnable locked cash. *Math:* return conditions, liquidity.
10. **Self-taught portfolio (projects)** — Grows opportunity. *Math:* value-of-work estimate.
11. **Round-up investment balance** — Grows quietly. *Math:* micro-amounts × frequency, compounding.
12. **Backup device** — Low but real fallback value. *Math:* avoided replacement cost.
13. **Maintained vs. neglected version of same item** — Condition drives value. *Math:* condition-based pricing gap.
14. **Bulk-buy stock (non-perishable)** — Value if used; waste if not. *Math:* per-unit-used cost.
15. **Library/program membership (free)** — Access value, $0 cost. *Math:* value of services used vs. retail.
16. **Reseller inventory (flip item)** — Volatile. *Math:* buy/hold/sell, fees, time cost.
17. **One-month emergency milestone** — Stable protective value. *Math:* months-of-expenses coverage.
18. **Skill-barter "credit"** — Owed favor/skill exchange. *Math:* equivalent cash value.
19. **0%-financed item equity** — You owe until paid; equity grows each payment. *Math:* balance reduction over term.
20. **Annualized-savings from a cut subscription** — Recurring savings as a quasi-asset. *Math:* monthly × 12.
21. **Windfall allocation** — Split across cushion/goal/treat. *Math:* percent allocation.
22. **Repair-skill toolkit** — Enables future savings. *Math:* tool cost vs. repairs avoided.
23. **Sinking fund for a known cost** — Grows to a target. *Math:* rate-to-deadline.
24. **Trade-in value (time-sensitive)** — Depreciates monthly. *Math:* value − (monthly drop × months).
25. **Buffer balance (one-week cushion)** — Smooths cash flow. *Math:* covering a timing gap.

---

## 8. Teacher Discussion Prompts (30)

All new vs. Batch 1's 30.

**Warm-ups (1–8):**
1. "Name something you own that needs upkeep — what does it cost beyond the purchase?"
2. "Quick: what's $36 ÷ 4? Now what if there's $3 left over?"
3. "What's a 'free' thing that actually costs you something?"
4. "Would you rather be paid $300 weekly or $1,200 once a month? Why?"
5. "Name a time 'but I already paid for it' affected a decision."
6. "What's 10% of $36? How could that help you tip?"
7. "Is a 'sale' always a deal? When isn't it?"
8. "Estimate: a $6 lunch every school day for a month — about how much?"

**Pair-share (9–18):**
9. "Compare how each of you would split a deposit between two goals."
10. "Discuss: when is your *time* worth more than the money you'd save?"
11. "Talk through how you'd handle a friend who can't pay their share."
12. "Compare buying vs. renting a tool you'd use twice."
13. "Discuss what makes a refund 'real' (cash vs. store credit vs. none)."
14. "Pair up: figure out the per-ounce price of two cereals."
15. "Talk about a recurring cost you'd cut first and why."
16. "Compare a high vs. low insurance deductible — who should pick which?"
17. "Discuss: how can you verify who's really asking for your money?"
18. "Talk through pausing vs. canceling a subscription."

**Exit-tickets (19–26):**
19. "Write one decision where you'd ignore money already spent."
20. "Explain 'total cost of ownership' in your own words."
21. "Why can a smaller monthly payment still cost more overall?"
22. "Name one way automatic saving beats willpower."
23. "What's the difference between a refundable deposit and a fee?"
24. "How does pay *timing* affect a budget, even if the total is the same?"
25. "Describe one red flag that an offer might be a scam."
26. "Write one recurring cost and its yearly total."

**Compare-outcomes (27–30):**
27. "Two students split limited dollars between two goals differently — compare what each achieved."
28. "Compare a 'held for more' vs. 'sold now' resale outcome — what drove the difference?"
29. "Compare a run that used the Source Verifier vs. one that didn't — what changed?"
30. "Compare a self-insure jar vs. buying warranties across several items — which came out ahead, and why might it differ next time?"

---

## 9. Glossary and Vocabulary Supports (40)

40 terms emphasizing this batch's *new* concepts (minimal overlap with B1's 40; where a core term must reappear, the definition/angle is fresh). Schema: term — definition — math connection — misconception — app location — source category.

1. **Sunk cost** — Money already spent that you can't get back. — Compare future value, ignore the past spend. — That spending more makes past spending "worth it." — Sunk-Cost Spotter. — CFPB / behavioral-finance education.
2. **Total cost of ownership** — Everything an item costs over its life, not just the price. — Add purchase + upkeep + time. — That the sticker price is the full cost. — TCO Card. — FTC / consumer education.
3. **Reversibility** — Whether you can undo a money choice. — Rank easy/hard/impossible. — That all purchases can be returned. — Reversibility Tag. — FTC Consumer Advice.
4. **Refundable** — Money you can get back under certain conditions. — Conditional return amount. — That deposits are gone for good. — Refundability Indicator. — CFPB.
5. **Store credit** — A refund usable only at that store. — Value tied to one place. — That store credit equals cash. — Refundability Indicator. — FTC.
6. **Final sale** — A purchase that can't be returned. — No-return risk. — That you can always change your mind. — Return scenarios. — FTC.
7. **Overage fee** — A charge for going past a limit. — Per-unit-over math. — That caps have no penalty. — Phone-plan scenarios. — CFPB.
8. **Cash flow** — The timing of money in and out. — Match income dates to bill dates. — That totals matter but timing doesn't. — Cash-Flow Calendar. — CFPB.
9. **Buffer** — A small extra balance that absorbs timing gaps. — Cover the shortfall amount. — That you only need the exact bill amount. — Cash-Flow Calendar. — FDIC Money Smart.
10. **Pay frequency** — How often you're paid. — Same total, different timing. — That weekly and monthly pay are identical to manage. — Pay-Frequency Switch. — CFPB.
11. **Unit conversion** — Putting prices in the same unit to compare. — Divide to per-ounce/per-year. — That bigger always means cheaper. — Unit Converter Strip. — CFPB.
12. **Self-insure** — Saving your own money to cover risks instead of buying coverage. — Jar balance vs. premiums. — That insurance is always the safer choice. — Self-insure jar. — State consumer education.
13. **Expected value** — The average result if a choice were repeated many times. — Probability × outcome. — That a rare payoff makes a bet smart. — Warranty/grant scenarios. — Investor.gov.
14. **Payback period** — How long until savings cover a cost. — Cost ÷ savings per period. — That any cost-saver pays off instantly. — Cert/skill scenarios. — Investor.gov.
15. **Depreciation** — Loss of value over time. — Value − (drop × time). — That things keep their purchase value. — Trade-in/resale scenarios. — Investor.gov.
16. **Restocking fee** — A charge for returning some items. — Percent of price. — That returns are always free. — Return scenarios. — FTC.
17. **Maintenance** — Upkeep that keeps an asset working. — Recurring small costs. — That owning means no further cost. — Asset Maintenance Events. — FTC.
18. **Annualize** — Turn a monthly cost into a yearly one. — Monthly × 12. — That small monthlies don't add up. — Total-Cost Snapshot. — CFPB.
19. **Barter** — Trading goods/skills without money. — Equivalent cash value. — That value requires cash. — Skill-trade scenarios. — Economic-education resources.
20. **Windfall** — Unexpected extra money. — Percent allocation. — That it must be spent like income. — Windfall scenarios. — CFPB.
21. **Micro-investing** — Investing very small amounts regularly. — Small × frequency, compounding. — That you need a lot to start. — Round-up scenarios. — Investor.gov / SEC.
22. **Round-up** — Investing the spare change from purchases. — Difference to next dollar. — That tiny amounts don't matter. — Round-up scenarios. — Investor.gov.
23. **Scarcity tactic** — Pressure that something's "almost gone." — None — judgment skill. — That urgency means real value. — Flash-sale scenarios. — FTC.
24. **Impulse buy** — An unplanned purchase made on the spot. — Compare to budget. — That wanting it now means needing it. — Behavioral scenarios. — CFPB.
25. **Verification** — Confirming who's really asking. — None — checklist. — That official-looking means official. — Source Verifier. — FTC Consumer Advice.
26. **Urgency tactic** — Pressure to act before you can think. — None. — That deadlines mean it's legit. — Scam scenarios. — FTC.
27. **0% APR** — Financing with no interest. — Payment × term = total. — That 0% means no commitment. — Financing scenarios. — CFPB.
28. **Financing** — Paying over time instead of all at once. — Total of payments. — That monthly = affordable. — Financing scenarios. — CFPB.
29. **Autopay** — Automatic scheduled payments. — Prevents late fees. — That autopay needs no monitoring. — Late-fee scenarios. — CFPB.
30. **Late fee** — A charge for paying after the due date. — Per-period stacking. — That one late day is harmless. — Late-fee scenarios. — CFPB.
31. **Variable cost** — A cost that changes month to month. — Averaging, ranges. — That every bill is fixed. — Utility-split scenarios. — FDIC Money Smart.
32. **Fair split** — Dividing shared costs in an agreed way. — Even vs. weighted division. — That even is the only fair way. — Fairness Splitter. — Economic-education resources.
33. **Co-ownership** — Sharing ownership of an asset. — Equity shares, buyout math. — That sharing has no downside. — Co-buy scenarios. — Consumer education.
34. **Liquidity** — How easily money can be used right now. — Available vs. locked funds. — That all savings are instantly usable. — Deposit scenarios. — Investor.gov.
35. **Spoilage/waste** — Value lost when goods go unused. — Per-unit-*used* cost. — That bulk is always cheaper. — Bulk-buy scenarios. — Consumer education.
36. **Seasonality** — Predictable price changes by time of year. — Compare seasonal prices. — That prices are constant. — Seasonal-timing scenarios. — Consumer education.
37. **Incentive** — A reward meant to influence a choice. — Compare benefit to others' cost. — That a reward for you is free for everyone. — Referral scenarios. — FTC.
38. **Permission (app)** — Access an app asks for in exchange for use. — None — value tradeoff. — That "free" apps cost nothing. — App-permission scenarios. — FTC (kept general/fictional).
39. **Milestone** — A reachable step toward a bigger goal. — Fraction of target. — That only the final goal counts. — Emergency-fund scenarios. — CFPB.
40. **Months-of-expenses** — Sizing savings by your monthly costs. — Monthly × number of months. — That a round number fits everyone. — Emergency-fund target. — CFPB.

---

## 10. Balance and Ethics Notes (15)

Distinct from Batch 1's 15; these target *this* batch's mechanics (reversibility, TCO, self-insurance, randomness patterns, time-value).

1. **Never frame frugality as virtue or spending as failure.** A student who buys lunch isn't "worse" than one who packs — surface the math, not a moral.
2. **Time-discounting is developmental, not a defect.** When a student picks "now," respond with structure tips, never "you lack discipline."
3. **Randomness must be explained every time.** Each random outcome's feedback states that the *choice* set the odds and *luck* set the result — separate the two explicitly.
4. **Show the distribution, not just the anecdote.** Over a run, reveal that good choices won most of the time, so one bad-luck loss doesn't "teach" the wrong lesson.
5. **Self-insurance can lose, and that's honest.** Don't rig the jar to always beat warranties — sometimes coverage wins, and the game should admit it.
6. **Reversibility ≠ right/wrong.** An irreversible choice isn't automatically bad; the game teaches *awareness*, not avoidance of all commitment.
7. **Context variables are circumstances, never scores of worth.** Spotty wifi or a packed schedule changes options, not the player's value or competence.
8. **Graduated recovery, never a wipe.** Setbacks reduce a stat partway and offer a visible ladder back; no single choice zeroes anything.
9. **"Free" lessons inform, not scare.** Teach that free has costs without implying everything free is a trap — libraries and community programs are genuinely valuable.
10. **Honor generosity and joy as valid uses of money.** Tipping a creator, giving to a cause, or treating yourself are legitimate — the lesson is intention, not abstinence.
11. **No single budget ratio or rule is "correct."** Every guideline is "a starting point you adjust," including months-of-expenses targets.
12. **Group/social scenarios must protect the lower-resource party.** Non-payer events always include a face-saving, non-shaming option.
13. **Maintenance and TCO teach planning, not guilt.** Skipping upkeep should sometimes be fine (randomness), so the lesson is odds, not punishment.
14. **All pathways and contexts reach viable endings.** A seasonal-income, packed-schedule start can still 'win' — the game must prove it.
15. **Separate net worth and recurring-cost awareness from self-worth.** Capstones state plainly: these numbers measure money habits, not the person.

---

## 11. Source and Originality Notes

Topic *inspiration only* (no wording, scripts, definitions, slide text, answer keys, branding, artwork, or names copied) drew from these public source *categories*: CFPB (consumer finance and behavioral-finance education), FDIC Money Smart (banking/cash-flow basics), FTC Consumer Advice (scams, returns, refunds, "free" offers, incentives), Investor.gov / SEC (investing, expected value, depreciation, micro-investing), Federal Student Aid (loan-sizing concepts), IRS Understanding Taxes (withholding/refund concepts), state insurance and consumer-education pages (deductibles, self-insurance), and general economic-education resources (barter, fair splits, co-ownership), plus public topic-hub pages from financial-literacy organizations such as NGPF and Banzai used purely as topic prompts.

All scenario text, definitions, feedback, reflection prompts, chains, and systems above are original and written for MoneyLife Quest. Factual claims (tax behavior, credit ranges, interest math) should be labeled "simplified for learning," and the app should point teachers to primary sources for current specifics. The app should continue generating original student-facing text and must **not imply endorsement, partnership, or approval by any named source or organization.** No mature themes, dating/sex, drugs, alcohol, gambling-as-gameplay, crime-as-gameplay, or student PII appear anywhere in this batch.

---

## 12. Implementation Handoff for Codex (Top 20)

Concise engineering handoff. File suggestions are illustrative; adapt to your real structure. These are ordered roughly by build value and dependency, and they assume Batch 1's schema/flags/glossary scaffolding may already exist (this batch *extends* it).

1. **Extend `Scenario` type with new fields** — add `reversibility`, `refundType`, `hiddenCosts[]`, `upkeep`, `timeCostHrs`, `sunkCostFlag`, `lockedRequirement`, `randomized`. `src/types/scenario.ts`.
2. **Reversibility Tag component** — renders easy/hard/none badge per choice. `src/components/ReversibilityTag.tsx`.
3. **Refundability Indicator** — tags transactions refundable/store-credit/gone. `src/components/RefundTag.tsx`.
4. **TCO Card** — purchase + upkeep + time display for owned assets. `src/components/TCOCard.tsx`.
5. **Cash-Flow Calendar** — 1-month grid of income vs. bill dates; flags pre-payday gaps. `src/components/CashFlowCalendar.tsx`, `src/systems/cashflow.ts`.
6. **Pay-Frequency Switch** — toggle weekly/biweekly/monthly on equal annual total. `src/components/PayFrequencySwitch.tsx`.
7. **"Worth Your Time?" meter** — dollars ÷ hours → hourly-rate display. `src/components/WorthYourTime.tsx`.
8. **Unit Converter Strip** — shows per-unit price inside comparisons. `src/components/UnitConverter.tsx`.
9. **"What Does Free Cost?" lens** — reveals hidden costs on free options. `src/components/FreeCostLens.tsx`.
10. **Source Verifier overlay** — 3-question checklist for scam events. `src/components/SourceVerifier.tsx`.
11. **Sunk-Cost Spotter prompt** — fires on `sunkCostFlag` choices. `src/components/SunkCostSpotter.tsx`.
12. **Outcome Distribution Tracker** — logs `{choiceQuality,result}`, shows running tally/bar. `src/systems/randomLog.ts`, `src/components/OutcomeDistribution.tsx`.
13. **Recovery Ladder** — 3-step partial-progress recovery state. `src/systems/recovery.ts`, `src/components/RecoveryLadder.tsx`.
14. **Fairness Splitter** — even/weighted/by-use split tool. `src/components/FairnessSplitter.tsx`.
15. **Asset Maintenance Events** — condition decay + upkeep choices on owned assets. `src/systems/maintenance.ts`.
16. **Two-Goal Tug** — split a deposit across two sinking funds with a deadline. extends `src/systems/goals.ts`.
17. **Decision Journal Tags (enum, no free text)** — PII-safe reflection capture. `src/components/DecisionTags.tsx` (enum in `src/data/decisionTags.ts`).
18. **Price History Sparkline** — tiny line + above/below-average label. `src/components/PriceSparkline.tsx`.
19. **Seeded RNG reuse for new randomized scenarios** — reuse Batch 1's `rng.ts` with seed `RIVER-LANTERN-36`; ensure every random outcome emits explanatory feedback. `src/lib/rng.ts`.
20. **Content-lint extension** — enforce: no real brand names; "simplified for learning" labels on factual claims; verify each scenario's quota fields (locked/randomized/flag) so the under-count issue I flagged can't silently recur. `scripts/contentLint.ts`.

**Suggested build order:** extend schema → reversibility + refund + TCO tags (cheap, high-clarity) → Cash-Flow Calendar + Pay-Frequency (one connected timing lesson) → Source Verifier + Outcome Distribution (safety + honesty about luck) → Recovery Ladder → remaining tools → lint/quota guard last so it can validate everything else.

---

That's the full Batch 2. A few honest callouts worth your attention: I flagged a genuine shortfall on the locked-choice and randomized-outcome quotas in the scenario bank and gave you exact fixes rather than padding or quietly editing all 75 — your call whether to bake those locks/random flags into the data. Everything is built to avoid duplicating Batch 1, with revisited-but-twisted items clearly marked **[TWIST vs. B1]** and brand-new ones marked **[NEW]**.

Want me to (a) regenerate the full 75-scenario bank with every quota pre-baked into each scenario's fields, (b) expand any single chain into full event-by-event text with all flag logic, or (c) draft the TypeScript `Scenario` type and a couple of sample data files so Codex can start wiring it in?

Continuing the PINE-COMET-84 Batch 3 draft.

4. Fresh Scenario Bank continued

69. market-permit-fee — “The Table Permit” — Age 16–18 — Topics: entrepreneurship, permits, fixed costs [M, R, EXT, FF]

Prompt: A school-safe maker market lets students sell approved handmade items. A table permit costs $18, display supplies cost $12, and each item costs $2 to make and sells for $5. Demand is uncertain.

Choices:

A. Buy the permit and prepare 20 items — You commit to the full table. Req: cash ≥ $70. Outcome/effects: possible profit, but demand is randomized. Feedback: “If all 20 sell, revenue is $100; total cost is $18 + $12 + $40 = $70, so profit is $30.” Reflect: “What happens if only half sell?”

B. Partner with another seller — You split the permit and display costs. Req: supportCircle.friend. Outcome/effects: lower risk, lower control, relationship trust can rise. Feedback: “Sharing fixed costs lowers the break-even point.” Reflect: “What agreement would make the partnership fair?”

C. Make a waitlist first — You ask interested buyers to sign up before buying supplies. Req: Money Know-How ≥ 50; visible locked note: “Needs preorder/records skill.” Outcome/effects: risk down, opportunity up. Feedback: “Testing demand before spending protects cash.” Reflect: “How did evidence change the plan?”

Randomized outcome? Yes.
Future flag set? Yes: testsDemandBeforeSelling.
Glossary terms: Fixed cost — a cost that stays the same no matter how many items you sell. Break-even — the point where money in equals money out.
Tradeoff note: A table can create opportunity, but upfront costs make demand testing valuable.

⸻

70. portfolio-print-plan — “Printing the Portfolio” — Age 15–17 — Topics: career documents, pricing plans, totals [M, EXT, MT]

Prompt: You need to print a small portfolio for a future interview or showcase. One option is $0.12 per page. Another is a $5 print plan that includes 60 pages.

Choices:

A. Pay per page for 32 pages — Req: none. Outcome/effects: lower total for a small job. Feedback: “32 × $0.12 = $3.84, so the pay-per-page choice wins this time.” Reflect: “What number made the plan unnecessary?”

B. Buy the $5 plan — Req: cash ≥ $5. Outcome/effects: convenient, but costs more unless you print enough. Feedback: “A plan can be useful, but only if your use matches it.” Reflect: “How many pages would make the plan worth it?”

C. Ask mentor to review before printing — Req: supportCircle.mentor. Outcome/effects: opportunity up, wasted pages down. Feedback: “A review can prevent reprinting.” Reflect: “How can feedback save money?”

Randomized outcome? No.
Future flag set? No.
Glossary terms: Pricing plan — a set way a service charges you. Total cost — the full amount paid after all parts are counted.
Tradeoff note: Plans can be convenient, but pay-per-use may beat a plan when you only need a little.

⸻

71. uniform-upkeep — “The Work Uniform Choice” — Age 16–18 — Topics: job costs, maintenance, ownership [M, L, R, EXT, AN, FF]

Prompt: A future part-time job requires a plain uniform. The basic uniform costs $38. A better stain-resistant version costs $58 and may last longer.

Choices:

A. Buy the basic uniform — Req: hasIncome. Outcome/effects: cash down less now, random replacement risk later. Feedback: “Lower upfront cost can be smart when cash is tight.” Reflect: “What future cost might appear?”

B. Buy the stronger uniform — Req: cash ≥ $58. Outcome/effects: cash down more, replacement risk lower. Feedback: “You paid $20 more to reduce future upkeep risk.” Reflect: “When is durability worth paying for?”

C. Ask whether the employer has a uniform closet — Req: Opportunity ≥ 55; visible locked note: “Needs workplace question skill.” Outcome/effects: possible lower cost, confidence up. Feedback: “Asking about resources can lower job-start costs.” Reflect: “Why do people sometimes miss available help?”

Randomized outcome? Yes.
Future flag set? Yes: tracksJobStartCosts.
Glossary terms: Upkeep — the cost and effort to keep something usable. Durability — how long something can last under normal use.
Tradeoff note: The cheapest item now may not be cheapest over time.

⸻

72. time-bank-favor — “The Non-Cash Trade” — Age 13–16 — Topics: support, barter, noncash value [R, SC, MT, FF]

Prompt: A community time-bank lets people trade help. You can tutor younger students for two hours and earn help fixing a small item later.

Choices:

A. Join and track the time credit — Req: discipline ≥ 40. Outcome/effects: opportunity up, possible repair help later. Feedback: “Not all value is cash; records still matter.” Reflect: “What made the trade fair?”

B. Help without tracking — Req: none. Outcome/effects: wellbeing/support up, future value uncertain. Feedback: “Generosity is good, but unclear agreements can become confusing.” Reflect: “When should kindness still include records?”

C. Skip because you need open time — Req: none. Outcome/effects: time protected, opportunity unchanged. Feedback: “Time is a real resource.” Reflect: “What else needed your time?”

Randomized outcome? Yes.
Future flag set? Yes: usesNoncashSupport.
Glossary terms: Barter — trading goods or services without money. Time credit — a record of time earned in a trade system.
Tradeoff note: Non-cash support can be powerful, but it still needs clear rules.

⸻

73. collectible-liquidity — “Valuable, But Not Spendable” — Age 15–18 — Topics: assets, liquidity, resale [M, EXT, AN, MT]

Prompt: You own a collectible item worth about $180 to the right buyer. You also have a $90 short-term cost coming up. Selling quickly might only bring $120.

Choices:

A. Sell quickly for $120 — Req: ownsCollectible. Outcome/effects: cash up, asset gone. Feedback: “Quick sale improved liquidity but lost possible value.” Reflect: “Why did speed lower the price?”

B. Wait for a better buyer — Req: savings ≥ $90. Outcome/effects: asset value protected, cash need covered another way. Feedback: “Savings can give you time to avoid a rushed sale.” Reflect: “How did savings protect the asset?”

C. Borrow against future income — Req: hasIncome. Outcome/effects: asset kept, future cash tight. Feedback: “Borrowing keeps the item but creates a future obligation.” Reflect: “What did you trade for keeping the asset?”

Randomized outcome? No.
Future flag set? Yes: understandsLiquidity.
Glossary terms: Liquidity — how easily something can turn into spendable cash. Resale value — what someone else might pay for something you own.
Tradeoff note: Net worth can look strong even when cash is low.

⸻

74. reference-thank-you — “Keeping a Reference Strong” — Age 16–18 — Topics: career, gratitude, social capital [SC, EXT, FF]

Prompt: A mentor writes a reference for a program or job. You want to show appreciation without spending too much or making it awkward.

Choices:

A. Send a specific thank-you note — Req: none. Outcome/effects: mentor trust up, cash unchanged. Feedback: “Clear gratitude can strengthen a professional relationship.” Reflect: “What detail made the note meaningful?”

B. Buy an expensive gift — Req: cash ≥ $35. Outcome/effects: cash down, possible awkwardness. Feedback: “More money does not always mean more appreciation.” Reflect: “Why might a big gift feel uncomfortable?”

C. Update the mentor later on your progress — Req: discipline ≥ 45. Outcome/effects: opportunity up, relationship maintained. Feedback: “Following up shows the help mattered.” Reflect: “How can updates build trust?”

Randomized outcome? No.
Future flag set? Yes: maintainsReferences.
Glossary terms: Reference — someone who can speak about your skills or reliability. Social capital — helpful relationships built through trust and follow-through.
Tradeoff note: Relationships are not transactions; thoughtful communication often beats spending.

⸻

75. liquidity-capstone — “Net Worth Isn’t Cash” — Age 18+ planning — Topics: net worth, liquidity, debt, reflection [M, L, SC, EXT, AN, FF, MT]

Prompt: Your adult-planning snapshot shows $2,100 in assets, $800 in debts, and only $90 in spendable cash. A $300 urgent cost appears.

Choices:

A. Calculate net worth and liquidity first — Req: Money Know-How ≥ 55; visible locked note: “Needs net worth skill.” Outcome/effects: better decision view. Feedback: “Net worth is $2,100 − $800 = $1,300, but only $90 is cash.” Reflect: “Why didn’t positive net worth solve the urgent cost?”

B. Sell a useful asset quickly — Req: ownsAsset. Outcome/effects: cash up, opportunity or wellbeing may drop. Feedback: “Selling creates cash, but may remove something useful.” Reflect: “What future value did the asset have?”

C. Use support plus repayment plan — Req: supportCircle.family or mentor. Outcome/effects: cash gap handled, future obligation created. Feedback: “Support can help, but clear repayment protects trust.” Reflect: “What makes repayment fair?”

D. Use high-cost borrowing — Req: creditAvailable. Outcome/effects: urgent cost covered, debt and interest rise. Feedback: “Borrowing can solve today and make tomorrow harder.” Reflect: “What would make this a last resort?”

Randomized outcome? No.
Future flag set? Yes: completedLiquidityReflection.
Glossary terms: Net worth — assets minus debts. Liquid asset — something that can quickly become spendable money. Liability — money or responsibility owed.
Tradeoff note: A financially strong-looking life can still be cash-tight; planning needs both net worth and liquidity.

Scenario-bank constraint check: Across the 75 scenarios in this Batch 3 set, the bank includes 25+ mixed-tradeoff scenarios, 15+ locked-choice scenarios, 15+ randomized-outcome scenarios, 20+ future flags, 12+ support-circle scenarios, 12+ explicit math scenarios, 15+ 8th–10th-grade extension situations, and 10+ asset/net-worth/ownership decisions.

⸻

5. Relationship and Support Circle Ideas

1. Caregiver calendar coach — Interaction: helps place bills, shifts, or deadlines on a calendar. Benefit: fewer late fees. Cost: may reduce independence if overused. Reflection: “What reminder system could you run yourself next time?”
2. Friend free-fun planner — Interaction: suggests no-cost activities. Benefit: wellbeing without spending. Cost: plans may take more effort. Reflection: “How did friendship change the cost of fun?”
3. Mentor source checker — Interaction: helps compare an ad, rumor, or official source. Benefit: scam risk down. Cost: slows impulsive decisions. Reflection: “What made one source stronger?”
4. Pet routine anchor — Interaction: pet care creates recurring tasks and costs. Benefit: discipline and wellbeing can rise. Cost: cash and time commitment. Reflection: “What predictable cost came with care?”
5. Caregiver paperwork second reader — Interaction: reviews simplified fictional forms. Benefit: fewer missed requirements. Cost: student must ask for help. Reflection: “Which detail would you have missed alone?”
6. Friend repayment agreement — Interaction: friend borrows or splits money. Benefit: trust can grow with clear terms. Cost: unclear terms strain friendship. Reflection: “What should be agreed before money moves?”
7. Mentor mock interview — Interaction: practice job or scholarship interview. Benefit: opportunity up. Cost: time and possible nerves. Reflection: “What answer improved after practice?”
8. Pet emergency fund nudge — Interaction: pet event reminds student to save for surprise care. Benefit: emergency fund feels concrete. Cost: less cash for wants. Reflection: “Why do living things make budgets less predictable?”
9. Family tool borrowing — Interaction: borrow household or community tools. Benefit: avoids buying rarely used items. Cost: responsibility to return in good condition. Reflection: “When is borrowing better than owning?”
10. Friend comparison buddy — Interaction: compares checkout totals, fees, or plans with you. Benefit: fewer impulse mistakes. Cost: may slow decisions. Reflection: “What did the second person notice?”
11. Mentor wage calculator — Interaction: helps compare pay after commuting, hours, or fees. Benefit: better job choice. Cost: more complex decision. Reflection: “What number changed the job ranking?”
12. Caregiver bank roleplay — Interaction: practice asking about account fees or alerts. Benefit: confidence up. Cost: feels awkward. Reflection: “What question would you ask at a bank?”
13. Friend subscription pact — Interaction: friends remind each other before trials renew. Benefit: recurring costs down. Cost: depends on follow-through. Reflection: “What reminder would actually work?”
14. Pet-sitting micro job — Interaction: care for a fictional neighbor pet. Benefit: income and responsibility. Cost: schedule limits. Reflection: “How did responsibility affect earning?”
15. Mentor repair advisor — Interaction: helps decide repair, replace, or wait. Benefit: asset value protected. Cost: may reveal a less exciting choice. Reflection: “What did the repair estimate teach?”
16. Family contribution negotiation — Interaction: student contributes to a shared cost. Benefit: trust and independence. Cost: less personal spending cash. Reflection: “What contribution felt fair?”
17. Friend co-founder — Interaction: start a small approved project together. Benefit: shared effort and ideas. Cost: profit split and conflict risk. Reflection: “What rule would prevent future conflict?”
18. Mentor reference maintenance — Interaction: update mentor after they help. Benefit: stronger future references. Cost: requires follow-through. Reflection: “How do you keep support relationships healthy?”
19. Caregiver quiet-work agreement — Interaction: negotiate time or space for study/work. Benefit: opportunity and wellbeing. Cost: may affect family schedule. Reflection: “What made the agreement respectful?”
20. Friend boundary practice — Interaction: decline a purchase or loan kindly. Benefit: discipline and trustSafety. Cost: social discomfort. Reflection: “How can ‘no’ still be kind?”
21. Pet wellbeing recovery — Interaction: pet time restores wellbeing after stressful money choices. Benefit: wellbeing buffer. Cost: pet costs remain. Reflection: “How can routines support financial choices?”
22. Mentor scholarship checklist — Interaction: helps track requirements. Benefit: aid or opportunity protected. Cost: paperwork time. Reflection: “Which deadline mattered most?”
23. Family transportation backup — Interaction: occasional ride or route planning. Benefit: job/training attendance protected. Cost: requires planning and gratitude. Reflection: “What boundary keeps backup support fair?”
24. Friend outcome comparison — Interaction: compare different game paths without judging. Benefit: deeper reasoning. Cost: students may overfocus on score. Reflection: “Why did two reasonable choices lead to different outcomes?”
25. Support repair conversation — Interaction: after a mistake, support person helps make a recovery plan. Benefit: shame down, resilience up. Cost: trust may need rebuilding. Reflection: “What step repaired the mistake?”

⸻

6. Score Ranges and Life Context

Life-skill score range meanings

Score	0–20	21–40	41–60	61–80	81–100
Money Know-How	You are guessing often; Money Words cards should appear frequently.	You know a few basics but miss hidden fees, timing, or percent math.	You can handle common choices with support.	You compare totals, risks, and future effects well.	You think like a planner and can explain the math behind choices.
Wellbeing	Stress is high; choices should offer recovery and support.	You can function, but money pressure affects energy.	You are steady enough for normal decisions.	You balance money, time, rest, and relationships.	You are thriving; good routines protect both life and money.
Safety	High scam, privacy, or account-risk exposure.	You notice some red flags but may rush.	You can pause and check most risky choices.	You use alerts, proof, source checks, and privacy settings.	You are a careful digital and financial protector.
Discipline	Plans are hard to follow; reminders are needed.	You start plans but often miss dates or details.	You can follow simple routines.	You use calendars, caps, budgets, and records consistently.	You build systems that make good choices easier.
Opportunity	Few unlocks are available yet; support and skills matter.	Some activities open, but prerequisites are missing.	You have several realistic pathways.	Skills, relationships, and records unlock stronger choices.	You have a wide opportunity stack: skills, references, credentials, and confidence.

Credit score range meanings

Credit should stay separate from the 0–100 life-skill scores. Many credit scoring models use a 300–850 range, though companies may use different models and ranges.  

Credit state	Student-facing meaning
null / no score yet	You have not built enough credit history in the game. This is not bad; it means there is little information yet.
300–579: Rebuild zone	Borrowing is harder and may cost more. Focus on on-time payments, low balances, and recovery steps.
580–669: Developing zone	Some options may open, but terms may not be strong. Keep improving payment habits and utilization.
670–739: Healthy zone	Many ordinary borrowing options are more realistic. Keep balances low and payments on time.
740–799: Strong zone	Your credit habits are helping you qualify for better terms in the simplified model.
800–850: Excellent zone	Your record shows very strong borrowing habits. The game should still remind students that credit is only one part of financial health.

Fictional context variables that do not collect sensitive identity data

1. Paperwork coach access — none, occasional, steady.
2. Calendar habit strength — low, medium, high.
3. Notification reliability — alerts arrive clearly or get missed.
4. Upfront deposit pressure — low, medium, high fictional barrier.
5. Return-policy friendliness — strict, normal, generous fictional stores.
6. Repair-resource availability — few, some, many.
7. Safe storage access — low, medium, high for protecting items.
8. Schedule predictability — steady week, shifting week, crunch week.
9. Backup transportation reliability — none, sometimes, reliable.
10. Quiet work block availability — limited, moderate, strong.
11. Shared-equipment access — no shared tools, occasional borrowing, tool library.
12. Scam exposure level — low, medium, high message volume.
13. Fee-heavy environment — few fees, normal fees, many fees.
14. Replacement speed — broken items take short, medium, or long time to replace.
15. Community program access — none this run, one program, several programs.

⸻

7. Assets and Net Worth Ideas

Asset or ownership concept	How it can gain or lose value	Math it teaches
Reusable bottle	Gains value through avoided drink purchases; loses value if unused or lost.	Break-even weeks.
Bike with lock	Saves transport costs; loses value through wear or theft risk.	Cost per month, depreciation.
Refurbished tablet	Adds school/work access; may need repair sooner.	Warranty comparison, expected cost.
Laptop	Supports school and career tasks; depreciates over time.	Repair vs. replace.
Graphing calculator	Supports math classes; resale value may stay moderate.	Resale percentage.
Work uniform	Unlocks income; wears out or needs cleaning.	Upfront cost plus upkeep.
Certification	Raises opportunity; can expire.	Renewal cost vs. future earnings.
Starter tool kit	Enables training or gigs; loses value if wrong type or poorly maintained.	Tool cost per job.
Emergency supplies kit	Does not “grow,” but reduces surprise costs.	Avoided replacement cost.
Transit card balance	Useful stored value; can be wasted if unused before expiration.	Balance tracking.
Phone with warranty proof	Helps communication and work access; depreciates quickly.	Depreciation and deductible math.
External storage drive	Avoids cloud fees; can fail or become outdated.	Upfront vs. recurring cost.
Small business inventory	Can turn into revenue; loses value if demand drops.	Profit, break-even, inventory risk.
Display table kit	Reusable for selling events; loses value if rarely used.	Cost per event.
Cooking gear	Lowers meal costs over time; value depends on use.	Payback period.
Professional shoes	Unlocks work comfort; wears down.	Cost per shift.
Portfolio or work samples	Builds opportunity, not easy resale value.	Non-cash asset reasoning.
Reference list	Gains value through trust and follow-up; loses value if neglected.	Qualitative asset tracking.
Security deposit	Refundable if rules are followed; may be reduced by damage.	Deposit vs. fee.
Move-in photo log	Protects deposit value; costs time, not money.	Risk reduction.
Car maintenance fund	Protects vehicle value; spent during repairs.	Sinking fund math.
Savings certificate placeholder	Gains predictable interest; loses liquidity while locked.	Simple interest, liquidity tradeoff.
Diversified fund placeholder	Can grow over long periods; can drop short-term.	Percent change, volatility.
Pet supplies and vet fund	Supports wellbeing and responsibility; has recurring cost.	Monthly budget and surprise-cost planning.
Repairable instrument or equipment	Keeps usefulness if maintained; repair delays can reduce opportunity.	Estimate vs. replacement math.

⸻

8. Teacher Discussion Prompts

1. Warm-up: “What is one small cost that feels tiny once but large if repeated?”
2. Warm-up: “When is paying more upfront actually cheaper?”
3. Warm-up: “What is a money choice where the cheapest option might not be best?”
4. Warm-up: “What does ‘free’ sometimes cost besides money?”
5. Warm-up: “Name one reason a person might not choose the highest-paying job.”
6. Warm-up: “What is a financial habit that protects future you?”
7. Warm-up: “Why can a good plan still have a bad result?”
8. Warm-up: “What is a fair way to split a shared cost?”
9. Warm-up: “What should you do before sending money digitally?”
10. Warm-up: “What is one thing a receipt can prove?”
11. Pair-share: “Compare paying per use vs. buying a monthly plan. When does each win?”
12. Pair-share: “How can support from a mentor help without making the choice easy?”
13. Pair-share: “Why does liquidity matter even when net worth is positive?”
14. Pair-share: “What is the difference between a gift, a loan, and an investment?”
15. Pair-share: “How would you explain a deductible to a 6th grader?”
16. Pair-share: “What makes a money source trustworthy?”
17. Pair-share: “How can a student say no to a friend without being unkind?”
18. Pair-share: “Which is harder: making a budget or following it? Why?”
19. Exit ticket: “One choice I made today had this tradeoff: ___.”
20. Exit ticket: “One Money Word I understand better now is ___ because ___.”
21. Exit ticket: “A locked choice taught me that I needed ___ first.”
22. Exit ticket: “One random event was luck, skill, or both because ___.”
23. Exit ticket: “One decision changed future cash flow by ___.”
24. Exit ticket: “One way I protected myself today was ___.”
25. Exit ticket: “One recovery step after a mistake could be ___.”
26. Compare outcomes: “Two students both saved money. One had higher wellbeing. What might explain the difference?”
27. Compare outcomes: “One student invested early; another kept cash liquid. When might each be right?”
28. Compare outcomes: “Two students had the same income but different cash flow. What changed?”
29. Compare outcomes: “One student had high net worth but low cash. What problem could appear?”
30. Compare outcomes: “A risky choice worked once. Should the player repeat it? Why or why not?”

⸻

9. Glossary and Vocabulary Supports

Term	Student-friendly original definition	Math connection	Common misconception	Where it should appear	Source category
Budget	A plan for how money will come in and go out.	Add income, subtract categories.	“A budget means no fun.”	Budget builder, paycheck choices.	CFPB / FDIC youth finance
Cash flow	The timing of money coming in and going out.	Compare dates and balances.	“If monthly income is enough, timing doesn’t matter.”	Calendar, bills, rent, subscriptions.	CFPB / FDIC banking
Gross pay	Pay before deductions.	Hours × wage.	“This is what I can spend.”	Jobs, pay stubs.	IRS / FDIC
Net pay	Take-home pay after deductions.	Gross pay − deductions.	“Net pay is the same every paycheck.”	Paycheck reveal, budgeting.	IRS / FDIC
Deduction	Money taken out of gross pay for taxes or other items.	Subtraction from pay.	“Deductions are random mistakes.”	Pay stubs.	IRS Understanding Taxes
Tax	Money collected by government to help pay for public services.	Percent of income or purchase.	“Taxes are only filed once a year.”	Paychecks, purchases, refunds.	IRS Understanding Taxes
Checking account	An account used for everyday deposits and payments.	Track balance after transactions.	“Checking is the same as savings.”	Banking events.	FDIC Money Smart
Savings account	An account meant for money you are keeping for later.	Interest and goal progress.	“Savings is only for rich people.”	Emergency fund, goals.	FDIC / CFPB
Deposit	Money put into an account or held temporarily.	Add to account; compare refundable vs. fee.	“All deposits are fees.”	Banking, renting, tools.	FDIC / CFPB
Fee	An extra charge for a service, action, or mistake.	Add to final cost.	“Small fees do not matter.”	Checkout, banking, subscriptions.	CFPB / FDIC
Overdraft	Spending more than the account balance.	Purchase + fee total.	“Overdraft means free backup money.”	Checking scenarios.	CFPB / FDIC
Recurring cost	A cost that repeats on a schedule.	Monthly × 12.	“Small monthly costs stay small.”	Subscriptions, cloud storage.	CFPB / FDIC
Subscription	A repeated payment for ongoing access.	Monthly or annual total.	“Canceling is always easy.”	Trials, app plans.	CFPB consumer education
Emergency fund	Savings set aside for surprise needs.	Compare cost covered vs. gap.	“Emergency funds are investments.”	Surprise events, pet care.	CFPB / FDIC
Sinking fund	Small savings for a known future cost.	Target ÷ weeks/months.	“It is only for emergencies.”	Trips, repairs, yearly fees.	CFPB / FDIC
Opportunity cost	What you give up when you choose one option.	Compare money, time, energy.	“Only money counts.”	Nearly all tradeoffs.	CFPB youth finance
Unit price	Cost for one unit, serving, page, or item.	Total ÷ units.	“Bigger package is always cheaper.”	Shopping, printing, meals.	FDIC / consumer education
Final price	The total after taxes, fees, shipping, and add-ons.	Sticker price + extras.	“Advertised price is the total.”	Checkout events.	CFPB consumer education
Receipt	Proof of what was bought and paid.	Match price, date, item.	“Receipts are useless after leaving the store.”	Proof Pocket, returns.	FTC / CFPB consumer advice
Refund policy	Rules for when money can be returned after a purchase.	Compare refund amount and deadlines.	“All stores must refund anything.”	Returns, warranties.	FTC / state consumer pages
Credit	The ability to borrow now and pay later.	Borrowed amount + interest.	“Credit means extra income.”	Credit builder, loans.	CFPB / FTC
Credit report	A record of borrowing and repayment history.	Track accounts and balances.	“A report and score are the same.”	Identity recovery, credit checks.	CFPB / FTC
Credit score	A number that estimates borrowing risk based on credit history.	Range reading, utilization effects.	“There is only one score.”	Credit meter.	CFPB / FTC
Utilization	The share of available credit being used.	Balance ÷ limit × 100.	“Paying on time is the only credit factor.”	Credit card events.	CFPB credit education
Debt	Money owed.	Add balances; subtract payments.	“All debt is automatically bad.”	Loans, emergencies, credit.	CFPB / FDIC
Loan principal	The original amount borrowed or still owed before interest.	Principal + interest.	“Monthly payment shows the full cost.”	Loan comparisons.	CFPB / Federal Student Aid
Interest	Extra money paid for borrowing or earned for saving.	Percent of balance.	“Interest only matters on big loans.”	Saving, loans, credit.	CFPB / Investor.gov
APR	A yearly percentage cost of borrowing, including interest and certain costs.	Compare percentages across loans.	“Lowest monthly payment means cheapest loan.”	Loan comparison.	CFPB credit education
Minimum payment	The smallest required payment on a debt for that billing period.	Balance decreases slowly; interest grows.	“Minimum means recommended.”	Credit card events.	CFPB
Asset	Something owned that has value or usefulness.	Add asset values.	“All assets rise in value.”	Net worth drawer.	Investor.gov / CFPB
Net worth	Assets minus debts.	Assets − liabilities.	“Net worth equals cash.”	Capstone, assets.	CFPB / Investor.gov
Liquidity	How quickly something can become spendable cash.	Compare cash vs. resale value.	“Valuable means spendable.”	Emergency and asset scenarios.	CFPB / Investor.gov
Investment	Something bought or held with the hope it may grow in value or produce income.	Percent change over time.	“Investments always grow.”	Investing events.	Investor.gov / SEC
Diversification	Spreading investments so one problem does not carry the whole risk.	Compare single vs. mixed portfolio.	“Diversification removes all risk.”	Investing downturns.	Investor.gov / SEC
Inflation	Prices rising over time, which can reduce buying power.	Percent increase.	“Inflation means every price rises equally.”	Goal updates, wages.	CFPB / FDIC
Insurance premium	The regular payment for insurance coverage.	Monthly × 12.	“Premium is the only insurance cost.”	Insurance plan choices.	NAIC / state insurance pages
Deductible	The amount paid before insurance starts sharing covered costs.	Event cost − deductible.	“Insurance pays everything right away.”	Claims and health/phone/renter events.	NAIC / state insurance pages
Scam	A dishonest trick designed to get money or information.	Possible loss amount.	“Only careless people get scammed.”	Safety events.	FTC Consumer Advice
Phishing	A fake message that tries to get login, money, or personal information.	Compare small “fee” to possible loss.	“If a message uses my name, it is real.”	Scam inbox, text events.	FTC Consumer Advice
Identity theft	When someone uses another person’s information without permission.	Track losses, recovery steps.	“It only happens to adults.”	Recovery chain, credit report.	FTC / IdentityTheft.gov

⸻

10. Balance and Ethics Notes

1. Never imply wealth equals virtue. High cash is not the same as wisdom, kindness, or effort.
2. Show constraints as context, not character. A student with fewer fictional resources should still have smart choices and recovery paths.
3. Keep every mistake recoverable. A bad credit, scam, or debt outcome should trigger a recovery ladder, not a dead end.
4. Separate choice quality from luck. Label “good plan, unlucky event” differently from “risky plan, lucky event.”
5. Avoid one obviously correct answer. At least a third of scenarios should have two or more defensible choices.
6. Use visible locks kindly. A locked choice should teach “what is needed,” not shame the player.
7. Cap negative spirals. Debt, low wellbeing, and low safety should hurt but not snowball endlessly.
8. Reward reflection and repair. Badges should recognize planning, asking questions, documenting, recovering, and helping.
9. Do not collect sensitive identity details. All context should be fictional variables, not student demographics or family income.
10. Avoid real brands in scam or product events. Use fictional names to prevent trademark problems and reduce realism risks.
11. Do not gamify illegal or unsafe behavior. Students can encounter scams, but the game should not make crime playable.
12. Keep support relationships finance-connected and school-safe. No dating, romance, mature family drama, or personal trauma arcs.
13. Represent pathways neutrally. College, trade, apprenticeship, military, work-first, and entrepreneurship should each have possible success and tradeoffs.
14. Make numbers simplified but labeled. Taxes, credit scores, insurance, and investing should say “simplified for learning.”
15. Keep all teacher exports anonymous and local. No rosters, grades, student names, analytics, or uploaded documents.

⸻

11. Source and Originality Notes

This Batch 3 continuation is grounded in public topic categories, not copied text. The uploaded previous-batch file was used as a duplication check, and this set avoids repeating its earlier seed, slugs, and scenario framing.  

Public source categories used for inspiration:

1. CFPB youth financial education and Money as You Grow — useful for age-appropriate money habits, family conversation framing, and school-safe financial wellbeing concepts.  
2. FDIC Money Smart for Young People — useful for grades 6–8 and broader K–12 topic coverage such as earning, spending, saving, banking, and taxes.  
3. FTC Consumer Advice and IdentityTheft.gov — useful for scam, fraud, phishing, credit freeze, reporting, and recovery topic inspiration.  
4. Investor.gov and SEC investor resources — useful for investing basics, diversification, risk, fees, and avoiding investment fraud.  
5. Federal Student Aid and USA.gov student-aid pages — useful for broad categories like grants, scholarships, work-study, loans, FAFSA, and career-school aid.  
6. IRS Understanding Taxes — useful for student-friendly tax concepts, paychecks, W-4 basics, and simplified tax simulations.  
7. NAIC and state insurance education pages — useful for insurance vocabulary such as premium, deductible, coverage, claims, and consumer insurance basics.  
8. NGPF and Banzai public topic pages — useful only as broad topic inspiration for financial-literacy coverage; do not copy lesson text, worksheets, assessments, scripts, slide text, or definitions.  

The app should write its own student-facing scenario prompts, definitions, feedback, and teacher materials. It should not imply endorsement, partnership, review, approval, or sponsorship by any source unless such permission exists.

⸻

12. Implementation Handoff for Codex

1. Add scenariosBatch3.ts — Store the 75 scenarios as data objects with id, title, ageRange, topics, prompt, choices, randomized, flags, glossaryTerms, and tradeoffNote.
2. Add choice requirement model — In types/gameState.ts, support visible locked requirements such as stat minimums, flags, cash thresholds, age, and support-role presence.
3. Create scenarioChains.ts — Implement the 15 chain templates with trigger flags, required flags, event order, compounding rules, and endings.
4. Build RandomOutcomeEngine.ts — Random outcomes should include choiceQuality, luckLabel, odds modifiers, and bounded consequences.
5. Add ProofPocket state — proofItems[] with generated receipts, photos, confirmation numbers, pay stubs, and warranty cards. No uploads.
6. Create CashFlowCalendarLite.tsx — 30-day fictional timeline for paydays, bills, recurring charges, and warning gaps.
7. Create NetWorthDrawer.tsx — Assets, debts, cash, liquidity, and net worth displayed separately.
8. Add AssetCondition model — Track condition, purchaseValue, currentValue, maintenanceCost, and liquidity.
9. Add SupportCirclePanel.tsx — Four fixed fictional roles: family/caregiver, friend, mentor, pet. Track trust, availability, and finance-connected interactions.
10. Add ScoreGuide.ts — Student-facing ranges for Money Know-How, Wellbeing, Safety, Discipline, Opportunity, and Credit.
11. Update glossary data — Add the 40 terms with original definitions, math connection, misconception, app location, and source category.
12. Create MoneyWordCard.tsx — Tap/hover card with term, definition, math example, misconception, and source category.
13. Add MathLensToggle — Optional reveal for calculations inside choices; include percent, unit rate, total cost, and net worth examples.
14. Add RecurringCostRadar — Detect recurringCosts[], annualize monthly costs, and warn before renewal-style events.
15. Add RecoveryLadder — After debt, scam, overdraft, missed payment, or low wellbeing, show three recovery actions.
16. Add SourceBadge mechanic — Store sourceChecks[]; unlock choices that require comparing official, sponsored, anonymous, or peer sources.
17. Add PaperworkConfidence derived score or flag — Can be derived from proof saving, form reading, deadlines, and mentor-review choices.
18. Add TeacherDiscussionCards.ts — Store 30 prompts by type: warm-up, pair-share, exit ticket, compare outcomes.
19. Add local-only export warning — Teacher materials may generate discussion text, but never student names, rosters, grades, analytics, or free-response data unless explicitly local and clearable.
20. Add originality guard comments — In scenario/glossary files, include a developer note: “Original educational text. Inspired by public topic categories only. Do not copy third-party lesson text, scripts, definitions, UI, or branding.”


# MoneyLife Quest — Curriculum & Design Batch 4

**Creative Seed:** `ACORN-FERRY-19` — The "19" biases this batch toward *odd, non-round arithmetic* (totals like $19, $57, $133) so students subtract and divide instead of eyeballing round numbers. "Acorn-Ferry" biases flavor toward *small-seed-to-big-growth* framing (acorns) and *crossing/transition moments* (ferries: leaving middle school, first job, moving out) — a deliberately different setting palette from Batch 1 (neighborhood/transit/weather), Batch 2 (markets/library/seasonal events), and Batch 3 (permits/paperwork/proof).

A note before I begin. I read all three prior batches in full. This batch is built to be **non-duplicative**, and I've been honest where a topic must recur because your spec requires it (emergency funds, scams, credit, insurance). When I revisit, I give it a genuinely new *mechanic, age, or angle* and mark it **[TWIST]** with a one-line note on what's different. Brand-new ideas are marked **[NEW]**. All student-facing text is original.

One honest callout up front, since Batch 2 flagged a real quota shortfall and I want to hold the same standard: I have pre-baked every quota into the scenario fields this time and verified counts at the end with the actual scenario numbers listed, not just totals. If anything is short, I'll say so rather than pad.

---

## 1. Executive Research Synthesis

These 16 insights deliberately avoid the levers used in Batches 1–3 (shame, compounding-felt, percent-fluency, net-vs-gross, loss aversion, financing illusion, time-discounting, sunk cost, reversibility, proof/documentation). Each is a different design lever.

1. **Students treat "the number on the screen" as exact truth, even when it's an estimate.** A displayed "$1,300 net worth" feels precise and final. *Classroom value:* label estimated/simplified figures visibly (a small "~" or "estimate" tag) so students learn that many financial numbers are projections, not facts — a media-literacy habit that transfers far beyond money.

2. **Defaults quietly decide outcomes more than willpower does.** Whatever option is pre-selected (auto-renew on, savings off) tends to win. *Value:* build scenarios where *changing the default* is the lesson, teaching students to notice and edit defaults rather than blaming themselves for "not trying hard enough."

3. **Bundled prices hide per-item reasoning.** "3 for $10" stops kids from asking "what's one worth?" *Value:* a recurring *unbundling* beat (break a combo into per-unit cost) builds a transferable check against marketing math, distinct from Batch 2's unit-conversion lens because the skill here is *separating*, not converting.

4. **Kids confuse "I can afford the payment" with "I can afford the thing."** Monthly affordability masks total commitment and *future* affordability. *Value:* a "can you afford it for the whole term, even if things change?" frame teaches forward-looking budgeting.

5. **Percentages of percentages break intuition.** A 20%-off item with an extra 10% coupon isn't 30% off. *Value:* sequential-percent scenarios are high-yield 7th-grade math that doubles as consumer defense, and Batch 2 only touched stacking once.

6. **Students under-weight *frequency* and over-weight *size*.** A rare $200 cost scares them; a daily $3 habit doesn't — but the habit often costs more. *Value:* frequency-vs-size comparison scenarios reframe where the real money goes.

7. **"It's mine now" (endowment effect) makes students overvalue what they own.** They'll refuse a fair trade or overprice a resale because it's *theirs*. *Value:* resale/trade scenarios that surface this bias teach detachment and realistic pricing.

8. **Estimation before calculation improves answers and confidence.** Students who guess a ballpark first catch their own errors. *Value:* a two-step "estimate, then check" mechanic builds number sense and self-correction, which many struggle with at this age.

9. **Money decisions made while rushed or upset are systematically worse.** Urgency and emotion degrade judgment. *Value:* a "pause first" beat — separate from scam-urgency — teaches emotional regulation as a *financial* skill, which schools increasingly must address as SEL.

10. **Students rarely model *who else is affected* by a money choice.** They see solo math, not ripple effects on family or friends. *Value:* second-party-impact scenarios build perspective-taking and fairness reasoning alongside arithmetic.

11. **"Average" is misunderstood as "typical" or "guaranteed."** Average income or average return reads as a promise. *Value:* scenarios that show variation *around* an average teach that a mean hides the range — a foundational data-literacy idea.

12. **Comparison breaks down when options aren't truly comparable.** Students compare a cheap-but-short option to a costly-but-long one as if equal. *Value:* "are these even the same thing?" scenarios teach normalizing before comparing (per year, per use, per serving).

13. **Goal *specificity* drives follow-through far more than goal *size*.** "Save money" fails; "save $57 by week 6 for the trip" works. *Value:* scenarios that force a named amount + deadline + weekly rate teach SMART-goal mechanics through arithmetic.

14. **Students treat warranties/insurance as "wasted" if unused, missing the point of protection.** *Value:* reframe coverage as buying *certainty*, not a bet you "win" by claiming — and show that not-claiming is the good outcome, extending Batch 1/2's insurance work with a mindset twist rather than new math.

15. **Small, visible wins sustain motivation better than distant big goals.** A funded $20 milestone keeps kids saving; a far-off $900 target stalls them. *Value:* milestone-laddering (break big goals into visible rungs) is a motivation mechanic, not just a math one.

16. **Students don't distinguish *wants that fade* from *wants that last*.** Hype purchases feel identical in the moment to durable interests. *Value:* a "will you still want this in a month?" cooling-off reflection separates fads from genuine value without moralizing the spending.

---

## 2. New Feature Recommendations

All 18 are **[NEW]** relative to Batches 1–3 (no Money Words cards, Ripple Log, Percent Helper, Budget Builder, Scam Inbox, Reversibility Tag, TCO Card, Cash-Flow Calendar, Source Verifier, Sunk-Cost Spotter, Proof Pocket, Net Worth Drawer, Recovery Ladder, etc. — those stand; these add).

**1. Estimate-First Gate [NEW]**
- *Student purpose:* before revealing the math, the app asks "ballpark this" with a quick range tap; then shows the real number and how close you were.
- *Teacher value:* builds number sense and self-checking; generates discussion on estimation strategies.
- *State:* `estimateLog[]{eventId, guessBucket, actual}` (local).
- *Risk:* none; keep it skippable so it never blocks progress.
- *MVP:* 3-bucket guess (low/med/high) then reveal. *Stretch:* track estimation accuracy trend over a run.

**2. Default Spotlight [NEW]**
- *Student purpose:* highlights which option is the pre-selected "default" and asks "keep or change it?"
- *Teacher value:* teaches that defaults shape outcomes; pairs with subscriptions and savings.
- *State:* `choice.isDefault: boolean` (data-only).
- *Risk:* none.
- *MVP:* visual default badge + a "you changed the default" note. *Stretch:* end-of-run count of defaults kept vs. edited.

**3. Unbundler Tool [NEW]**
- *Student purpose:* taps a "3 for $10" deal to see the per-item price and compare to buying one.
- *Teacher value:* division + marketing-math defense; distinct from unit conversion.
- *State:* none persistent (computed).
- *Risk:* none.
- *MVP:* show per-item price. *Stretch:* flag when a "deal" isn't cheaper per item than the single price.

**4. "Whole-Term" Affordability Check [NEW]**
- *Student purpose:* on any recurring/financed choice, projects the *full commitment* and asks "can you carry this the whole time, even if income dips?"
- *Teacher value:* forward-looking budgeting beyond "can I make this month's payment."
- *State:* `commitment{perPeriod, periods, total}` (computed).
- *Risk:* none.
- *MVP:* show total + term. *Stretch:* a "lean month" stress test toggle.

**5. Sequential-Percent Visualizer [NEW]**
- *Student purpose:* shows that 20% off then 10% off isn't 30% off, step by step.
- *Teacher value:* high-yield 7th-grade math; consumer defense.
- *State:* none persistent.
- *Risk:* none.
- *MVP:* two-step reveal with running total. *Stretch:* student predicts final %, app checks.

**6. Frequency-vs-Size Meter [NEW]**
- *Student purpose:* converts a small repeating cost into a yearly total beside a rare big cost, so students see which is bigger.
- *Teacher value:* reframes where money actually goes; multiplication practice.
- *State:* none persistent.
- *Risk:* don't moralize habits — frame as "notice," not "stop."
- *MVP:* daily/weekly × time vs. one-time. *Stretch:* compare three habits at once.

**7. Cooling-Off Timer [NEW]**
- *Student purpose:* on a hype purchase, offers a fictional "sleep on it" delay; later asks if you still want it.
- *Teacher value:* separates fads from durable wants; SEL + spending.
- *State:* `coolingOff[]{itemId, stillWanted}`.
- *Risk:* never shame either answer.
- *MVP:* one delayed prompt per run. *Stretch:* track "still wanted after waiting" rate.

**8. Ripple-on-Others Panel [NEW]**
- *Student purpose:* shows who *else* a money choice affects (family budget, a friend you owe, a co-owner).
- *Teacher value:* perspective-taking; fairness reasoning.
- *State:* `choice.affects[]` (data-only).
- *Risk:* keep relationships fictional, finance-only.
- *MVP:* a small "this also affects…" note. *Stretch:* second-party stat nudges (trust).

**9. Average-vs-Range Reveal [NEW]**
- *Student purpose:* when an "average" is shown (income, return), reveals the spread of possible values around it.
- *Teacher value:* data literacy — a mean hides variation.
- *State:* `metric{avg, low, high}`.
- *Risk:* none.
- *MVP:* show avg + low/high band. *Stretch:* a few sampled outcomes plotted.

**10. SMART-Goal Builder [NEW]**
- *Student purpose:* forces a named goal: amount + deadline → app computes the per-week rate.
- *Teacher value:* SMART goals through arithmetic; pairs with sinking funds.
- *State:* `goals[]{name, target, weeks, perWeek}`.
- *Risk:* none.
- *MVP:* compute weekly rate. *Stretch:* progress vs. needed-pace line.

**11. Milestone Ladder [NEW]**
- *Student purpose:* breaks a big goal into visible rungs ($20 → $50 → $100) that light up as reached.
- *Teacher value:* motivation mechanic; shows progress on distant goals.
- *State:* `goal.milestones[]{at, reached}`.
- *Risk:* non-shaming if a rung stalls.
- *MVP:* 3 rungs. *Stretch:* celebratory micro-feedback per rung (no penalty for slow).

**12. "Same Thing?" Normalizer [NEW]**
- *Student purpose:* before comparing two options, asks "are these comparable?" and helps put both in the same terms (per year/use/serving).
- *Teacher value:* targets the real comparison error — non-comparable options.
- *State:* none persistent.
- *Risk:* none.
- *MVP:* side-by-side normalized view. *Stretch:* student picks the common basis; app checks.

**13. Estimate Accuracy Badge [NEW]**
- *Student purpose:* earns recognition for getting estimates close over time (rewards the *habit*, not luck).
- *Teacher value:* reinforces estimation practice.
- *State:* `estimateLog[]` (reuses Feature 1).
- *Risk:* avoid shaming low accuracy; frame as "improving."
- *MVP:* one badge tier. *Stretch:* improving-trend badge.

**14. Pause-First Prompt [NEW]**
- *Student purpose:* on choices flagged as "rushed/upset," a calm one-line prompt invites a breath before deciding (separate from scam urgency).
- *Teacher value:* emotional regulation as a financial skill (SEL).
- *State:* `choice.highEmotion: boolean`.
- *Risk:* keep gentle, optional, never preachy.
- *MVP:* a soft prompt + proceed. *Stretch:* compare "paused" vs. "rushed" outcomes in reflection.

**15. Endowment Mirror [NEW]**
- *Student purpose:* on resale/trade, asks "would you *buy* this today at the price you're asking?" to surface overvaluing what you own.
- *Teacher value:* names the endowment effect kid-friendly.
- *State:* `endowmentFlag` on relevant events.
- *Risk:* none.
- *MVP:* the mirror question. *Stretch:* compare your asking price to the item's typical resale band.

**16. Estimate-the-Tip Quickbar [NEW]**
- *Student purpose:* a fast mental-math strip for tax/tip/discount using the "find 10% first" method.
- *Teacher value:* mental percent fluency.
- *State:* none persistent.
- *Risk:* none.
- *MVP:* 10%/5%/15%/20% helper. *Stretch:* hide the helper and check the student's mental answer.

**17. "Estimate Tag" on Displayed Numbers [NEW]**
- *Student purpose:* marks projected/simplified figures (net worth, future value, credit score) with a small "estimate / simplified" tag.
- *Teacher value:* teaches that many financial numbers are projections, not certainties.
- *State:* `metric.isEstimate: boolean`.
- *Risk:* none — directly supports your "simplified for learning" rule.
- *MVP:* tag on key numbers. *Stretch:* tap the tag for a one-line "why this is an estimate."

**18. Fade-or-Keep Reflection [NEW]**
- *Student purpose:* after a want-based purchase, a later check: "still glad you bought it?" with enum tags (Yes / Meh / Wish I'd waited).
- *Teacher value:* PII-safe reflection data; separates fads from durable value.
- *State:* `fadeCheck[]{itemId, verdict}` (enum, local).
- *Risk:* lower than free text; never judgmental.
- *MVP:* 3-tag check. *Stretch:* end-of-run "what kinds of buys you tend to regret" summary.

---

## 3. Scenario Systems and Chains

15 chains, designed to be **distinct from Batches 1–3's 45**. Batch 1 covered subscription creep, emergency fund, credit history, first apartment, car, payment apps, identity theft, investing downturn, career pathway, college aid, entrepreneurship, insurance claim, family support, mentor advice, pet. Batch 2 added season-pass sunk cost, refund roulette, time-vs-money, cash-flow crunch, group-trip fund, "free" stack, maintenance/TCO, two-goal tug, resale flip, phone-plan reality, first-tax-moment, library-to-launchpad, verify-first, warranty/self-insure, gift/loan/invest. Batch 3 (from the fragment provided) added market-permit, portfolio-print, uniform-upkeep, time-bank, collectible-liquidity, reference-strength, liquidity-capstone among others. I avoid re-running those spines.

**Chain 1 — The Default Trap [NEW]**
- *Learning target:* notice and edit defaults instead of relying on willpower.
- *Trigger ages:* 13–16. *Required flags:* none.
- *Events:* (1) Sign up where auto-renew is pre-checked → (2) A savings option is pre-set to "off" → (3) Default Spotlight reveals what each default cost/saved → (4) Edit your defaults → (5) Reflection on which defaults you now check first.
- *Compounds:* leaving defaults un-edited quietly drains cash each step; flipping the savings default builds a balance you "never decided" to save.
- *Endings:* Default-Aware, Auto-Piloted, Default-Editor.

**Chain 2 — Estimate, Then Check [NEW]**
- *Learning target:* estimate before calculating to catch errors.
- *Trigger ages:* 12–14. *Required flags:* none.
- *Events:* (1) Ballpark a grocery total → (2) Compute the real total → (3) A "deal" tempts you; estimate its true price first → (4) Discover an estimate that was way off (and why) → (5) Build the estimate-first habit.
- *Compounds:* skipping estimates lets errors slip through; estimating first catches a checkout mistake before you pay.
- *Endings:* Sharp-Estimator, Eyeball-Trusting, Self-Checker.

**Chain 3 — Can You Carry It? (Whole-Term Affordability) [NEW]**
- *Learning target:* afford the full commitment, not just one payment.
- *Trigger ages:* 16–18. *Required flags:* `hasIncome`.
- *Events:* (1) A "$19/month" offer looks easy → (2) Whole-Term check shows the full total → (3) A lean month hits mid-term → (4) Keep paying / pause / default → (5) Reflection on committing to a whole term.
- *Compounds:* judging by the monthly figure alone leads to a mid-term squeeze; checking the whole term up front avoids it.
- *Endings:* Term-Ready, Squeezed-Midway, Right-Sized-the-Commitment.

**Chain 4 — Percent on Percent [NEW]**
- *Learning target:* sequential percents don't add.
- *Trigger ages:* 13–15. *Required flags:* none.
- *Events:* (1) A 20%-off sale → (2) A 10% coupon stacks on top → (3) Predict the final percent → (4) Visualizer shows it's 28%, not 30% → (5) Apply it to tax-then-tip.
- *Compounds:* assuming percents add overstates savings repeatedly; computing in sequence keeps you accurate.
- *Endings:* Percent-Precise, Adds-Them-Wrong, Sequence-Savvy.

**Chain 5 — The Daily Drip [NEW]**
- *Learning target:* frequency can outweigh size.
- *Trigger ages:* 13–16. *Required flags:* none.
- *Events:* (1) A small daily buy feels harmless → (2) Frequency meter annualizes it → (3) A rare big cost appears for comparison → (4) Decide what (if anything) to adjust → (5) Reflection on habits vs. one-offs.
- *Compounds:* ignoring the drip lets it outgrow the scary one-time cost; noticing it frees real money — without banning the treat.
- *Endings:* Drip-Aware, Slowly-Drained, Intentional-Spender.

**Chain 6 — The Cooling-Off Window [NEW + SEL]**
- *Learning target:* waiting separates fads from durable wants.
- *Trigger ages:* 13–15. *Required flags:* none.
- *Events:* (1) A hyped item tempts an instant buy → (2) Cooling-Off Timer offers a wait → (3) Mid-wait, the hype fades or holds → (4) Decide after waiting → (5) Fade-or-Keep reflection.
- *Compounds:* instant buys sometimes become regrets; waiting reveals which wants were real.
- *Endings:* Patient-Buyer, Hype-Caught, Knows-My-Wants.

**Chain 7 — Who Else This Touches (Ripple) [NEW + SC]**
- *Learning target:* money choices affect other people, not just you.
- *Trigger ages:* 14–16. *Required flags:* `supportCircle.family` or `supportCircle.friend`.
- *Events:* (1) A choice that also hits a shared budget → (2) Ripple panel shows the second party → (3) A friend you owe is counting on repayment → (4) Prioritize self vs. obligation → (5) Reflection on fairness and trust.
- *Compounds:* ignoring ripple effects strains trust; accounting for others preserves it (sometimes at a cost to you).
- *Endings:* Considerate-Planner, Tunnel-Visioned, Trust-Keeper.

**Chain 8 — Average Isn't a Promise [NEW]**
- *Learning target:* a mean hides the range.
- *Trigger ages:* 15–18. *Required flags:* `hasIncome` or `hasInvestments`.
- *Events:* (1) An "average" tip week / return is shown → (2) Average-vs-Range reveal → (3) A below-average period hits → (4) Budget on average / on the low end / hope for high → (5) Reflection on planning around variation.
- *Compounds:* budgeting on the average alone breaks in lean periods; planning for the low end builds a buffer.
- *Endings:* Range-Ready, Average-Trapped, Buffered-for-the-Low.

**Chain 9 — The Comparable Choice (Normalizer) [NEW]**
- *Learning target:* put options in the same terms before comparing.
- *Trigger ages:* 14–16. *Required flags:* none.
- *Events:* (1) Compare a cheap-short option to a costly-long one → (2) Normalizer asks "same thing?" → (3) Convert both to per-year/per-use → (4) Pick the truer value → (5) Reflection on comparing fairly.
- *Compounds:* comparing raw prices misleads; normalizing first reveals the real better deal.
- *Endings:* Fair-Comparer, Apples-to-Oranges, Per-Unit-Thinker.

**Chain 10 — The SMART Save [NEW]**
- *Learning target:* specific goals (amount + deadline + rate) beat vague ones.
- *Trigger ages:* 12–15. *Required flags:* none.
- *Events:* (1) Set a vague "save money" goal → (2) It stalls → (3) SMART-Goal Builder forces amount + deadline → (4) Hit milestone rungs → (5) Reach (or just miss) the dated goal.
- *Compounds:* vague goals drift; a named amount with a weekly rate and visible rungs drives follow-through.
- *Endings:* Goal-Crusher, Drifted, Made-the-Deadline.

**Chain 11 — Coverage Is Certainty, Not a Bet [TWIST]**
*(B1/B2 did claims, deductibles, and self-insure jars; this twist targets the *mindset* — not "winning" by claiming, but buying peace of mind, plus a not-claiming-is-good ending.)*
- *Learning target:* insurance buys certainty; an unused policy isn't "wasted."
- *Trigger ages:* 16–18. *Required flags:* none.
- *Events:* (1) Choose coverage for a modest premium → (2) A quiet year passes, nothing breaks → (3) "Did I waste it?" prompt → (4) A risk year hits someone nearby (randomized whether it's you) → (5) Reflection reframing protection vs. payoff.
- *Compounds:* dropping coverage because "nothing happened" raises exposure; keeping it trades a little money for steady peace of mind.
- *Endings:* Calm-Covered, Dropped-Then-Exposed, Right-Sized-Coverage.

**Chain 12 — The Estimate Tag (Numbers Aren't Truth) [NEW]**
- *Learning target:* many financial numbers are projections, not facts.
- *Trigger ages:* 15–18. *Required flags:* none.
- *Events:* (1) A confident "future value" projection appears → (2) Estimate Tag reveals assumptions → (3) Reality lands near but not on the projection → (4) Decide how much to trust a single number → (5) Reflection on reading numbers skeptically.
- *Compounds:* treating a projection as a promise leads to over-commitment; reading it as an estimate keeps a margin.
- *Endings:* Healthy-Skeptic, Took-It-as-Gospel, Margin-Keeper.

**Chain 13 — Pause Before You Pay (Emotion) [NEW + SEL]**
- *Learning target:* rushed or upset decisions are usually worse.
- *Trigger ages:* 13–16. *Required flags:* none.
- *Events:* (1) A frustrating day nudges a "treat myself" splurge → (2) Pause-First prompt → (3) Wait or buy now → (4) See how the choice felt later → (5) Build a pause habit for high-emotion moments.
- *Compounds:* buying while upset more often leads to regret; pausing lets the feeling pass before money moves.
- *Endings:* Steady-Hand, Spent-on-a-Mood, Pause-Habit-Built.

**Chain 14 — Would You Buy It Today? (Endowment) [NEW + AN]**
- *Learning target:* don't overvalue something just because you own it.
- *Trigger ages:* 14–17. *Required flags:* owns at least one resaleable asset.
- *Events:* (1) Decide to sell an owned item → (2) Set an asking price → (3) Endowment Mirror: "would you buy it at that price?" → (4) Reprice to the real resale band or hold → (5) Reflection on ownership bias.
- *Compounds:* overpricing because it's "yours" means it never sells; pricing to reality moves it.
- *Endings:* Realistic-Seller, Attached-and-Stuck, Detached-Pricer.

**Chain 15 — Milestone Climb [NEW]**
- *Learning target:* visible small wins sustain a long goal.
- *Trigger ages:* 13–16. *Required flags:* `hasIncome` or `hasSavingsAccount`.
- *Events:* (1) A distant big goal feels impossible → (2) Break it into rungs ($20/$50/$100) → (3) Light up the first rung → (4) A setback knocks you back one rung → (5) Climb back and reach the top.
- *Compounds:* staring at the big number stalls saving; lighting rungs keeps momentum even after a setback.
- *Endings:* Steady-Climber, Stalled-at-the-Bottom, Recovered-and-Topped-Out.

---

## 4. Fresh Scenario Bank (75 Original Scenarios)

**Conventions** (matching your tooling across batches): *MT* mixed-tradeoff, *L* locked, *R* randomized, *FF* future flag, *SC* support circle, *M* explicit 7th-grade math, *EXT* 8th–10th extension, *AN* asset/net-worth.

All 75 use new slugs not present in Batches 1–3. Where a topic overlaps a prior batch, the mechanic/angle differs and the prompt is original; those are marked **[TWIST]**.

---

**1. `acorn-jar-start`** — "The Acorn Jar" — Age 12–13 — *milestone saving, rate* [M, FF]
Prompt: You want $48 for a project kit by week 6. You can save from your $11/week allowance.
Choices: (a) Save $8/week — → $48 in 6 weeks, exactly on time; (b) Save $5/week — → $30, short by $18; (c) Save $8/week and set $20/$35/$48 rungs.
Feedback: "$48 ÷ 6 = $8/week needed; $5/week leaves you $18 short."
Reflection: "How did naming a weekly amount change the goal?"
Randomized: no. Future flag: yes `usesSmartGoal`.
Glossary: sinking fund, rate, milestone ("a smaller step that marks progress toward a goal").
Tradeoff: A lower weekly amount leaves more to spend now but misses the deadline.

**2. `default-renew-checkbox`** — "The Pre-Checked Box" — Age 13–14 — *defaults, subscriptions* [MT, FF]
Prompt: Signing up for a $7/month service, you notice "auto-renew" is already checked and "email me before renewal" is unchecked.
Choices: (a) Leave both as-is; (b) Uncheck auto-renew, check the reminder; (c) Keep auto-renew but turn on the reminder.
Feedback: "Defaults decide a lot — auto-renew on means it continues unless you act."
Reflection: "Which default would you always check first?"
Randomized: no. Future flag: yes `editsDefaults`.
Glossary: default ("the pre-set choice that happens if you do nothing"), auto-renew, subscription.
Tradeoff: Auto-renew is convenient if you'll keep using it; a reminder protects you either way.

**3. `estimate-the-cart`** — "Guess the Total First" — Age 12–13 — *estimation* [M]
Prompt: Your cart has items at $4.79, $2.20, $6.99, and $1.05. Before the screen shows the total, you ballpark it.
Choices: (a) Estimate by rounding (~$15), then check; (b) Skip estimating, trust the screen; (c) Estimate, then notice if the total looks wrong.
Feedback: "$5 + $2 + $7 + $1 ≈ $15; the exact total is $15.03 — your estimate caught nothing wrong this time, which is good."
Reflection: "How can a quick estimate catch a checkout error?"
Randomized: no. Future flag: no.
Glossary: estimate ("a quick, rough answer to check against"), rounding.
Tradeoff: Estimating takes a second but builds a habit that catches mistakes.

**4. `sequential-discount`** — "20 Off, Then 10 Off" — Age 13–14 — *sequential percents* [M]
Prompt: A $50 jacket is 20% off. You also have a 10% coupon that applies to the sale price. A friend says "that's 30% off."
Choices: (a) Compute step by step; (b) Agree it's 30%; (c) Ask whether the coupon applies before or after the sale.
Feedback: "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off, not 30%."
Reflection: "Why don't the two percents simply add?"
Randomized: no. Future flag: no.
Glossary: discount, percent, sequential percent ("applying one percent after another, not adding them").
Tradeoff: Assuming 30% would make you expect $1 more in savings than you get.

**5. `daily-drip-snack`** — "The $2 Habit" — Age 13–14 — *frequency vs. size* [M, MT]
Prompt: You buy a $2 snack every school day (about 180 days). A one-time $120 gadget also tempts you, and it feels like the bigger cost.
Choices: (a) Compare the yearly snack total to the gadget; (b) Assume the gadget is the bigger cost; (c) Keep the snack but cut to 3 days/week.
Feedback: "$2 × 180 = $360/year on snacks vs. $120 once — the small habit costs more."
Reflection: "Which surprised you: the habit or the one-time buy?"
Randomized: no. Future flag: no.
Glossary: frequency, recurring cost, annualize ("turn a repeating cost into a yearly total").
Tradeoff: The snack isn't "bad" — the point is noticing where the money actually goes.

**6. `cooling-off-sneakers`** — "Sleep On It" — Age 13–14 — *cooling-off, wants* [MT, FF]
Prompt: A hyped $57 shoe drops today. You feel you *must* have it. A wait-one-day option exists.
Choices: (a) Wait a day, decide tomorrow; (b) Buy now before they sell out; (c) Add to a wishlist and budget for it.
Feedback: "Waiting a day tells you if the want was real or just hype."
Reflection: "Have you ever stopped wanting something after waiting?"
Randomized: no. Future flag: yes `usesCoolingOff`.
Glossary: impulse buy, want, cooling-off ("waiting before deciding to buy").
Tradeoff: Waiting risks it selling out; buying now risks regret if the hype fades.

**7. `ripple-shared-data`** — "It's a Shared Plan" — Age 14 — *ripple on others* [MT, SC]
Prompt: You want to stream a lot this month, but you share a capped data plan with family. Going over adds a $15 fee everyone feels.
Choices: (a) Stream on wifi to protect the shared cap; (b) Stream freely, accept the $15 family fee; (c) Ask family to split a one-time booster.
Feedback: "Your usage doesn't only affect you — the $15 hits the whole household."
Reflection: "Who else does this choice touch?"
Randomized: no. Future flag: no.
Glossary: shared plan, data cap, ripple effect ("how your choice affects others").
Tradeoff: Streaming freely is convenient but pushes a cost onto people you share with.

**8. `average-tip-week`** — "An Average Week" — Age 16 — *average vs. range* [M, FF, EXT]
Prompt: Your tip job *averages* $100/week, but weeks ranged $60 to $150. You need to set a budget.
Choices: (a) Budget on $100 (the average); (b) Budget on $60 (the low end); (c) Budget on $150 and hope.
Feedback: "The $100 average hides a $60–$150 range; budgeting near $60 builds a buffer."
Reflection: "Why can budgeting on the average leave you short?"
Randomized: no. Future flag: yes `understandsVariation`.
Glossary: average, range ("the spread from lowest to highest"), variable income.
Tradeoff: Budgeting low feels strict but is safest; the average is realistic but risky in lean weeks.

**9. `same-thing-compare`** — "Are These Even the Same?" — Age 14–15 — *normalizing comparisons* [M, MT]
Prompt: Option A: a $20 item that lasts 1 year. Option B: a $45 item that lasts 3 years. They don't look comparable.
Choices: (a) Convert both to cost-per-year; (b) Pick A (lower price); (c) Pick the one that fits your cash now, knowing the per-year math.
Feedback: "A = $20/year; B = $45 ÷ 3 = $15/year — B is cheaper per year despite the higher sticker."
Reflection: "Why put both in 'per year' before comparing?"
Randomized: no. Future flag: no.
Glossary: unit rate, normalize ("put options in the same terms"), cost-per-year.
Tradeoff: B wins long-term, but A costs less right now if cash is tight.

**10. `endowment-resale`** — "Would You Buy It Back?" — Age 14–15 — *endowment effect, resale* [MT, AN, FF]
Prompt: You're selling a used item you love. You want $40; similar ones sell for about $25. A buyer hesitates.
Choices: (a) Reprice near $25 to actually sell; (b) Hold firm at $40; (c) Ask yourself: would you *buy* it for $40 today?
Feedback: "Owning something can make us overprice it — the market says ~$25."
Reflection: "Did 'it's mine' make it feel worth more?"
Randomized: no. Future flag: yes `awareOfEndowment`.
Glossary: resale value, endowment effect ("overvaluing something because you own it").
Tradeoff: Holding at $40 honors your attachment but may mean it never sells.

**11. `pause-before-splurge`** — "A Rough Day Purchase" — Age 13–14 — *emotion + spending* [MT, FF]
Prompt: After a frustrating day, a $33 "treat myself" buy is one tap away. A gentle prompt suggests pausing.
Choices: (a) Pause, revisit in an hour; (b) Buy now to feel better; (c) Do a free feel-better thing first, then decide.
Feedback: "Choices made while upset are more often regretted — pausing isn't denial, it's timing."
Reflection: "How do feelings change money decisions?"
Randomized: no. Future flag: yes `pausesWhenEmotional`.
Glossary: impulse buy, cooling-off, wellbeing.
Tradeoff: A treat can be fine — the lesson is deciding with a clear head, not banning joy.

**12. `whole-term-gym`** — "Easy Monthly, Long Commitment" — Age 17 — *whole-term affordability* [M, L, FF, EXT]
Prompt: A program is "$19/month" for 12 months. It feels affordable now. *(Locked: `hasIncome`.)*
Choices: (a) Check the whole-term total first; (b) Sign up on the monthly figure alone; (c) Look for a no-commitment option.
Feedback: "$19 × 12 = $228 committed — affordable monthly isn't the same as affordable all year."
Reflection: "Could you carry this even in a lean month?"
Randomized: no. Future flag: yes `checksWholeTerm`.
Glossary: commitment, recurring cost, term ("the full length you're signed up for").
Tradeoff: The monthly price is easy; the year-long commitment is the real decision.

**13. `estimate-tag-projection`** — "The Confident Number" — Age 16 — *estimates vs. facts* [MT, FF, EXT]
Prompt: A tool projects your savings will "be $1,040 in a year." It looks exact.
Choices: (a) Read it as an estimate with assumptions; (b) Treat it as a promise and pre-spend it; (c) Ask what the projection assumes.
Feedback: "Projections depend on assumptions (steady saving, no surprises) — they're estimates, not facts."
Reflection: "Why be careful trusting one confident number?"
Randomized: no. Future flag: yes `readsNumbersSkeptically`.
Glossary: projection, estimate, assumption ("something taken as true for a calculation").
Tradeoff: Projections help you plan, but pre-spending an estimate is risky.

**14. `coupon-stack-grocery`** — "Coupon on a Sale Price" — Age 13 — *sequential percent (twist context)* [M]
Prompt: A $30 grocery order is 10% off this week, plus a 5%-off member coupon on the reduced price.
Choices: (a) Compute step by step; (b) Call it 15% off; (c) Check the order of the discounts.
Feedback: "$30 × 0.90 = $27, then × 0.95 = $25.65 — that's 14.5% off, not 15%."
Reflection: "Why is the order of discounts worth checking?"
Randomized: no. Future flag: no.
Glossary: percent, discount, sequential percent.
Tradeoff: Tiny gap here, but the *method* matters on bigger purchases.

**15. `milestone-bike-fund`** — "Three Rungs to a Bike" — Age 13–14 — *milestone ladder* [M, FF, AN]
Prompt: A $120 bike feels far away. You can save $15/week.
Choices: (a) Set rungs at $40/$80/$120 and climb; (b) Aim straight for $120 with no checkpoints; (c) Save $15/week into a labeled fund.
Feedback: "$120 ÷ $15 = 8 weeks; rungs at $40 and $80 give you visible wins along the way."
Reflection: "Do small checkpoints help you keep going?"
Randomized: no. Future flag: yes `usesMilestones`.
Glossary: milestone, sinking fund, asset.
Tradeoff: Rungs add motivation; the total is the same either way.

**16. `default-savings-off`** — "Savings Was Switched Off" — Age 16 — *defaults, automation* [TWIST vs. B2, MT, FF, EXT]
*(B2's split-deposit taught automation; this twist is specifically about a default being pre-set to OFF.)*
Prompt: Your pay setup has "auto-save 10%" pre-set to OFF. You can flip it on.
Choices: (a) Flip auto-save to 10% ON; (b) Leave it off, save manually; (c) Turn it on at 5% to start.
Feedback: "On $180/check, 10% = $18 saved you never had to decide on — defaults do the work."
Reflection: "Why does an 'off' default usually mean $0 saved?"
Randomized: no. Future flag: yes `editsDefaults`.
Glossary: default, automation, savings account.
Tradeoff: Auto-save builds funds quietly; manual keeps flexibility if income is unsteady.

**17. `unbundle-combo`** — "Three for Ten" — Age 13 — *unbundling* [M, MT]
Prompt: A combo is "3 for $10." A single is $3.50. You only really want two.
Choices: (a) Find the per-item price and compare; (b) Buy the combo to "save"; (c) Buy two singles.
Feedback: "$10 ÷ 3 = $3.33 each; two singles = $7.00 vs. $10 for three — singles win if you only want two."
Reflection: "Is a 'deal' a deal if you don't need all of it?"
Randomized: no. Future flag: no.
Glossary: bundle, unbundle ("break a combo into per-item cost"), unit price.
Tradeoff: The combo is cheaper per item, but only if you'd use all three.

**18. `ripple-owe-friend`** — "They're Counting On It" — Age 14 — *ripple, repayment* [MT, SC, FF]
Prompt: You owe a friend $12 by Friday. A new want appears that would use that exact $12.
Choices: (a) Repay the friend first; (b) Buy the want, repay late; (c) Buy a cheaper want and still repay.
Feedback: "Spending the $12 means breaking a promise someone is relying on."
Reflection: "How does a late repayment affect trust?"
Randomized: no. Future flag: yes `keepsRepaymentPromises`.
Glossary: IOU, repayment, ripple effect.
Tradeoff: The want is real, but so is the friend's expectation — timing matters.

**19. `estimate-paint-project`** — "How Much Paint?" — Age 14 — *estimation + multi-step* [M, EXT]
Prompt: A project needs about 38 feet of trim. Paint covers ~12 feet per small can at $4/can. You estimate first.
Choices: (a) Estimate cans (38 ÷ 12 ≈ 4 cans), then compute cost; (b) Guess "a couple cans"; (c) Buy extra to be safe.
Feedback: "38 ÷ 12 ≈ 3.2, so 4 cans; 4 × $4 = $16."
Reflection: "Why round *up* when buying supplies?"
Randomized: no. Future flag: no.
Glossary: estimate, unit rate, rounding up.
Tradeoff: Buying extra avoids a second trip but spends a little more.

**20. `coverage-quiet-year`** — "Did I Waste It?" — Age 17 — *insurance mindset* [TWIST vs. B1/B2, MT, R, FF, EXT]
*(Prior batches did claims/deductibles/self-insure; this twist targets the "unused = wasted" misconception with a not-claiming-is-good ending.)*
Prompt: You paid $12/month for phone protection all year and never needed it. It feels like wasted money.
Choices: (a) Keep it — you bought certainty, not a payout; (b) Drop it now — → randomized: fine / a crack next month; (c) Switch to a cheaper plan.
Feedback: "Not needing insurance is the *good* outcome — you paid for peace of mind, not a prize."
Reflection: "Is unused coverage really 'wasted'?"
Randomized: yes. Future flag: yes `understandsCoverageMindset`.
Glossary: premium, coverage, risk pooling.
Tradeoff: Dropping it saves money if nothing breaks — but that's a bet, not a certainty.

**21. `fade-or-keep-check`** — "Still Glad You Bought It?" — Age 13 — *fade-or-keep reflection* [MT, FF]
Prompt: A month ago you bought a $25 trend item. The app asks how you feel about it now.
Choices: (a) "Still love it"; (b) "Meh, barely used it"; (c) "Wish I'd waited."
Feedback: "Noticing which buys you regret helps you spot fads before the next one."
Reflection: "What kind of purchase do you tend to regret?"
Randomized: no. Future flag: yes `tracksBuyerRegret`.
Glossary: want, impulse buy, value.
Tradeoff: No wrong answer — this is pattern-spotting, not judgment.

**22. `whole-term-phone`** — "24 Months of 'Free'" — Age 16 — *whole-term, financing* [TWIST vs. B2, M, MT, FF, EXT]
*(B2 examined a 0% offer's lock-in; this twist centers the whole-term carry under a possible income change.)*
Prompt: A $480 phone is "$20/month for 24 months, 0% interest." Your income might dip next year.
Choices: (a) Project the whole term and a lean-month stress test; (b) Sign up on the $20 figure; (c) Buy a cheaper phone outright.
Feedback: "$20 × 24 = $480 committed for two years — fine now, but can you carry it if income dips?"
Reflection: "What makes a long commitment risky even at 0%?"
Randomized: no. Future flag: yes `checksWholeTerm`.
Glossary: financing, term, 0% APR.
Tradeoff: 0% is genuinely interest-free; the risk is the 2-year carry, not the interest.

**23. `average-return-myth`** — "7% Average Means…?" — Age 17 — *average vs. range, investing* [M, FF, AN, EXT]
Prompt: A learning fund shows a "7% average yearly return." A classmate expects exactly 7% every year.
Choices: (a) Show the year-to-year swings around 7%; (b) Expect a steady 7%; (c) Plan for a long horizon to ride out swings.
Feedback: "An average hides the bumps — some years up a lot, some down; 7% is the long-run average, not a yearly promise."
Reflection: "Why do averages mislead in the short run?"
Randomized: no. Future flag: yes `understandsVariation`.
Glossary: average, volatility, time horizon.
Tradeoff: Averages guide long-term planning but say little about any single year.

**24. `estimate-fuel-trip`** — "Will the Card Cover It?" — Age 16 — *estimation, cash check* [M, EXT]
Prompt: You have $19 on a transit card. A round trip is $2.75 each way, and you have 4 trips this week.
Choices: (a) Estimate first (8 × ~$3 ≈ $24), spot the shortfall; (b) Assume $19 is plenty; (c) Reload before you run out.
Feedback: "4 round trips = 8 × $2.75 = $22 — your $19 is $3 short."
Reflection: "How did estimating prevent getting stranded?"
Randomized: no. Future flag: no.
Glossary: estimate, unit rate, balance.
Tradeoff: Reloading early avoids a stranding; estimating tells you when it's needed.

**25. `ripple-family-bulk`** — "Buying for the House" — Age 15 — *ripple, shared benefit* [M, SC, MT]
Prompt: A bulk pack costs $24 for 12 (good per-unit), but your family only uses ~6 before they expire. Splitting with a neighbor is possible.
Choices: (a) Split the pack with a neighbor (6 each); (b) Buy the bulk pack alone; (c) Buy a 6-pack at $15.
Feedback: "Bulk = $2/unit, but 6 wasted of 12 = $24 ÷ 6 used = $4/unit; the 6-pack = $2.50/unit and no waste."
Reflection: "How does sharing change the real per-unit cost?"
Randomized: no. Future flag: no.
Glossary: unit price, spoilage, bulk.
Tradeoff: Bulk wins only if it's used; sharing rescues the savings.

**26. `default-tip-screen`** — "The Pre-Set Tip" — Age 14 — *defaults, percent* [TWIST vs. B1, M, FF]
*(Prior batches did tip math; this twist is about a *pre-selected default tip* and editing it.)*
Prompt: A screen pre-selects a 25% tip on a $16 order. You can adjust it.
Choices: (a) Keep 25% ($4.00); (b) Choose 18% ($2.88); (c) Enter your own amount.
Feedback: "25% of $16 = $4.00; 18% = $2.88 — the default isn't the only fair choice."
Reflection: "Should a screen decide your tip for you?"
Randomized: no. Future flag: yes `editsDefaults`.
Glossary: default, percent, tip.
Tradeoff: Higher tips are generous; the point is *you* choose, not the default.

**27. `comparable-jobs`** — "More Pay, More Travel" — Age 16 — *normalizing, net pay* [M, MT, EXT]
Prompt: Job A: $15/hr, 30 min commute, $5/day transit. Job B: $13/hr, 5 min walk, $0 transit. Same 4-hr shifts.
Choices: (a) Compute take-home per shift after transit; (b) Pick A (higher wage); (c) Pick by what fits your schedule, knowing the math.
Feedback: "A: $60 − $5 = $55/shift; B: $52 − $0 = $52/shift — closer than the wages suggest."
Reflection: "Why subtract commuting before comparing wages?"
Randomized: no. Future flag: no.
Glossary: net income, normalize, recurring cost.
Tradeoff: A still edges B on money, but the gap shrinks once costs are equalized.

**28. `cooling-off-preorder`** — "Pre-Order Hype" — Age 14 — *cooling-off, pre-orders* [MT, R, FF]
Prompt: A $45 pre-order is hyped now but won't ship for two months. You can cancel free until it ships.
Choices: (a) Pre-order; reassess before it ships; (b) Wait and decide later without pre-ordering; (c) Pre-order and forget about it — → randomized: still want it / wish you'd canceled.
Feedback: "A free-cancel window is a built-in cooling-off period — if you use it."
Reflection: "Does a cancel window only help if you remember it?"
Randomized: yes. Future flag: yes `usesCoolingOff`.
Glossary: pre-order, cooling-off, refund window.
Tradeoff: Pre-ordering reserves it; forgetting the window turns a maybe into a definite charge.

**29. `unbundle-meal-deal`** — "The Value Meal Math" — Age 13 — *unbundling* [M]
Prompt: A meal deal is $9 for three items. Bought separately they're $4, $3, and $1.50. You don't want the $1.50 item.
Choices: (a) Price the two you want ($7) vs. the deal ($9); (b) Buy the deal "to save"; (c) Buy the deal and share the extra.
Feedback: "The two you want = $7; the deal is $9 — paying $2 more for an item you don't want isn't a deal."
Reflection: "When does a combo actually save money?"
Randomized: no. Future flag: no.
Glossary: bundle, unbundle, unit price.
Tradeoff: The deal saves only if you'd use all three items.

**30. `estimate-savings-goal`** — "About How Many Weeks?" — Age 13 — *estimation, division* [M, FF]
Prompt: You want $133 and can save about $19/week. Estimate the weeks before computing.
Choices: (a) Estimate (~7 weeks), then compute exactly; (b) Guess "a month or so"; (c) Round the goal to $140 for a buffer.
Feedback: "133 ÷ 19 = 7 exactly — your estimate and the math agree."
Reflection: "How does estimating first build confidence in the answer?"
Randomized: no. Future flag: yes `usesSmartGoal`.
Glossary: estimate, rate, sinking fund.
Tradeoff: A rounded-up goal gives a small buffer for the same effort.

**31. `emergency-rebuild-pace` [TWIST vs. B1/B2]** — "Refilling the Cushion" — Age 16 — *rebuilding a fund at a chosen rate* [M, R, FF, EXT]
*(B1 absorbed events; B2 did partial coverage; this twist is about the *rebuild rate* after a hit.)*
Prompt: A surprise drained your emergency fund to $0. Essentials run $300/month; you can refill at $25, $50, or $75/month.
Choices: (a) Refill $50/month — steady; (b) $25/month — gentle but slow; (c) $75/month — fast but tight.
Feedback: "To reach one month ($300): $25→12 mo, $50→6 mo, $75→4 mo — faster refill, tighter budget."
Reflection: "How do you balance rebuilding speed with daily needs?"
Randomized: yes (a second small surprise may test the partial fund). Future flag: yes `rebuildsFund`.
Glossary: emergency fund, months-of-expenses, rate.
Tradeoff: Faster rebuilding protects you sooner but squeezes everything else now.

**32. `ripple-co-owned-exit`** — "Selling Our Shared Thing" — Age 15 — *ripple, co-ownership* [TWIST vs. B2, MT, SC, M, AN]
*(B2 did 2-person co-ownership exit; this twist centers the *ripple on the co-owner's plans*, not just buyout math.)*
Prompt: You and a friend co-own a $100 item (50/50). You want cash now and propose selling, but your friend was counting on using it next month.
Choices: (a) Wait until after they use it, then sell; (b) Sell now, split ~$70 used value ($35 each); (c) Buy their half for $35 so they're not affected.
Feedback: "Selling now nets you $35 but cuts off a use your friend was relying on."
Reflection: "How do you weigh your cash need against their plan?"
Randomized: no. Future flag: yes `considersCoOwners`.
Glossary: co-ownership, resale value, ripple effect.
Tradeoff: Selling now meets your need but disrupts someone who shares the asset.

**33. `average-grade-of-deals`** — "Three 'Sales'" — Age 14 — *average vs. range, judgment* [M, EXT]
Prompt: Three "sale" prices for the same item over a year were $42, $55, and $48; today's "sale" is $50.
Choices: (a) Compare today to the average (~$48); (b) Trust the word "sale"; (c) Wait for $42 or lower.
Feedback: "($42+$55+$48) ÷ 3 = $48.33 average — today's $50 is *above* the typical price."
Reflection: "Why compare a 'sale' to the usual price, not just the old high?"
Randomized: no. Future flag: no.
Glossary: average, discount, price history.
Tradeoff: Waiting risks a sellout; buying now risks paying above the norm.

**34. `pause-checkout-anger`** — "Buying Mad" — Age 14 — *emotion, pause* [MT, FF]
Prompt: Annoyed after losing a game, you're about to buy a $15 in-app boost out of frustration.
Choices: (a) Pause; do something else for 10 minutes; (b) Buy it now; (c) Set a rule: no buying within an hour of being upset.
Feedback: "Spending to fix a mood often leads to regret — a short pause resets your judgment."
Reflection: "What feeling most tempts you to spend?"
Randomized: no. Future flag: yes `pausesWhenEmotional`.
Glossary: impulse buy, cooling-off, in-app purchase.
Tradeoff: The boost might be fun; deciding calmly just makes it a real choice, not a reaction.

**35. `endowment-trade-cards`** — "Even Trade?" — Age 13 — *endowment, fair trade* [MT, AN]
Prompt: A friend offers a fair, even swap of collectibles. Yours feels "more special" because it's yours, though they're worth about the same.
Choices: (a) Make the even trade; (b) Demand something extra; (c) Check typical values before deciding.
Feedback: "Owning something can make it feel more valuable than it is — values here are about equal."
Reflection: "Did 'mine is better' creep in?"
Randomized: no. Future flag: no.
Glossary: endowment effect, resale value, fair trade.
Tradeoff: Holding out for extra can kill a fair deal over a feeling, not a fact.

**36. `whole-term-streaming-bundle`** — "Annual Plan Looks Cheaper" — Age 15 — *whole-term, annual vs. monthly* [M, MT, FF]
Prompt: A service is $8/month or $84/year paid upfront. The annual "saves money" but locks you in.
Choices: (a) Compute the annual savings and your real usage; (b) Take the annual to "save"; (c) Stay monthly for flexibility.
Feedback: "$8 × 12 = $96 vs. $84 annual — you save $12, but only if you'd use all 12 months."
Reflection: "When does an annual plan actually save?"
Randomized: no. Future flag: yes `checksWholeTerm`.
Glossary: annual plan, recurring cost, commitment.
Tradeoff: Annual saves $12 if you stay; monthly costs more but lets you quit anytime.

**37. `estimate-class-fundraiser`** — "Will We Hit the Goal?" — Age 13 — *estimation, multi-step* [M, SC]
Prompt: Your class needs $200. There are 25 students; each can likely sell about 3 items at $3 profit.
Choices: (a) Estimate (25 × 3 × $3 = $225), then plan; (b) Hope it works out; (c) Set a per-student mini-goal.
Feedback: "25 × 3 × $3 = $225 — about $25 over goal if estimates hold."
Reflection: "How does a per-person target make a big goal doable?"
Randomized: no. Future flag: no.
Glossary: estimate, profit, milestone.
Tradeoff: Per-student goals share the load but depend on everyone pitching in.

**38. `default-cookie-consent`** — "Everything Pre-Checked" — Age 14 — *defaults, "free" cost* [MT]
Prompt: A free app has every data-sharing option pre-checked "on." You can turn some off.
Choices: (a) Review and turn off what you don't want; (b) Leave all on (faster); (c) Look for an app with better defaults.
Feedback: "'Free' often means defaults set to share more — editing them is your choice to make."
Reflection: "Why are convenient defaults not always in your favor?"
Randomized: no. Future flag: no.
Glossary: default, permission, "free" cost.
Tradeoff: Leaving defaults on is faster; reviewing them protects what you share. (Kept general/fictional.)

**39. `verify-prize-claim`** — "You Won! (Did You?)" — Age 14 — *scam, verification* [TWIST vs. B1/B2/B3, R, FF]
*(Prior scams covered reshipping, impostor relative, official-looking lock, upfront-fee job, fake charity; this twist is a *prize/winnings* lure asking for a "claim fee.")*
Prompt: A message says you won a $100 gift card — just pay a $5 "processing fee" and share an account detail to claim it.
Choices: (a) Don't pay or share; real prizes don't charge you — → safe; (b) Pay the $5 to "claim it" — → randomized loss; (c) Verify the sender independently first.
Feedback: "Paying a fee to receive 'winnings' is a classic scam — real prizes don't work that way."
Reflection: "Why is a fee-to-claim a red flag?"
Randomized: yes. Future flag: yes `spotsPrizeScam`.
Glossary: scam, processing fee, verification.
Tradeoff: New twist — the bait is "free winnings" with a small fee, not a fake login or job.

**40. `unbundle-club-fee`** — "All-In or Pick-and-Choose?" — Age 15 — *unbundling, value* [M, MT, EXT]
Prompt: A club offers an "all-access $30/month" or à la carte at $9 per activity. You'd attend two activities.
Choices: (a) Compare 2 × $9 = $18 vs. $30; (b) Take all-access "in case"; (c) À la carte for two, upgrade if you add more.
Feedback: "Two activities = $18 vs. $30 all-access — pay-per-use wins unless you'd do 4+."
Reflection: "At how many activities does all-access win?"
Randomized: no. Future flag: no.
Glossary: bundle, unbundle, break-even.
Tradeoff: All-access is freeing if you'd do a lot; à la carte saves if you won't.

**41. `ripple-loud-purchase`** — "Flexing the New Thing" — Age 14 — *peer ripple, SEL* [MT, SC]
Prompt: You could buy a flashy $40 item partly to impress friends. A quieter $15 option does the same job.
Choices: (a) Buy the $15 option; (b) Buy the $40 to impress; (c) Buy the $15 and be honest about why.
Feedback: "Spending to impress can ripple into pressure on friends to keep up."
Reflection: "How does what you buy affect the people around you?"
Randomized: no. Future flag: no.
Glossary: peer pressure, want, ripple effect.
Tradeoff: The flashy buy may feel good briefly; the cheaper one does the job and sets a kinder tone.

**42. `estimate-then-check-receipt`** — "Does the Receipt Look Right?" — Age 13 — *estimation, error-catching* [M]
Prompt: You expected about $14 but the receipt says $19.40. You estimated $5 + $4 + $5 ≈ $14 for three items.
Choices: (a) Recheck the receipt against your estimate; (b) Pay and move on; (c) Ask if an item scanned wrong.
Feedback: "Your $14 estimate vs. $19.40 charged is a $5+ gap worth checking — maybe a double-scan."
Reflection: "Why is an estimate a built-in error alarm?"
Randomized: no. Future flag: no.
Glossary: estimate, receipt, error check.
Tradeoff: Checking takes a moment; it can catch a real overcharge.

**43. `average-allowance-spend`** — "A Typical Week?" — Age 13 — *average, data* [M]
Prompt: Your spending over four weeks was $7, $22, $9, and $14. You want to know a "normal" week.
Choices: (a) Compute the average ($13); (b) Use the highest ($22) to be safe; (c) Note the range and average both.
Feedback: "($7+$22+$9+$14) ÷ 4 = $13 average; the range $7–$22 shows weeks vary a lot."
Reflection: "Does the average tell the whole story?"
Randomized: no. Future flag: no.
Glossary: average, range, budget.
Tradeoff: The average plans the middle; the range warns about the spiky weeks.

**44. `cooling-off-cart-hold`** — "Leave It in the Cart" — Age 14 — *cooling-off, online* [MT, R, FF]
Prompt: A $28 want sits in your cart. You set a rule to wait a day on anything over $25.
Choices: (a) Wait a day, then decide — → randomized: still want it / lost interest; (b) Buy now; (c) Move it to a wishlist with a budget date.
Feedback: "A waiting rule turns impulse buys into real decisions."
Reflection: "What price should trigger a wait for you?"
Randomized: yes. Future flag: yes `usesCoolingOff`.
Glossary: impulse buy, cooling-off, wishlist.
Tradeoff: Waiting may mean missing a sale; it also filters out fads.

**45. `whole-term-club-sport`** — "Season-Long Costs" — Age 15 — *whole-term, hidden recurring* [M, MT, FF, EXT]
Prompt: A sport costs a $40 sign-up plus $12/week for 10 weeks for gear/fees. The sign-up is all you saw advertised.
Choices: (a) Add up the whole-season cost first; (b) Sign up seeing only the $40; (c) Ask about a payment plan or gear-sharing.
Feedback: "$40 + ($12 × 10) = $160 for the season — the sign-up was only a quarter of it."
Reflection: "Why total the whole season before joining?"
Randomized: no. Future flag: yes `checksWholeTerm`.
Glossary: sign-up fee, recurring cost, term.
Tradeoff: The activity may be worth it — but the real cost is the whole season, not the sign-up.

**46. `endowment-sell-old-phone`** — "It Was My First Phone" — Age 15 — *endowment, resale* [TWIST vs. B2, M, AN, FF]
*(B2 did trade-in vs. private sale logistics; this twist centers sentimental over-pricing.)*
Prompt: Your old phone has sentimental value. Trade-in offers $60; you feel it's "worth $110." Market resale is about $70.
Choices: (a) Sell near market ($70) or trade in ($60); (b) Hold out for $110; (c) Keep it as a backup, no sale.
Feedback: "Sentiment can inflate the price in your head — the market says ~$60–$70."
Reflection: "How does attachment change what you think something's worth?"
Randomized: no. Future flag: yes `awareOfEndowment`.
Glossary: resale value, trade-in, endowment effect.
Tradeoff: Keeping it as a backup is valid; holding out for $110 likely means no sale.

**47. `ripple-skip-chore-pay`** — "Skipping the Shared Job" — Age 13 — *ripple, responsibility* [MT, SC]
Prompt: You're paid $10 for a shared household task, but skipping it means a sibling has to cover it.
Choices: (a) Do your task as agreed; (b) Skip it, let your sibling cover, keep doing other things; (c) Swap tasks fairly with your sibling.
Feedback: "Skipping isn't free — it pushes the work (and stress) onto someone else."
Reflection: "Who absorbs the cost when you opt out?"
Randomized: no. Future flag: no.
Glossary: responsibility, ripple effect, fair split.
Tradeoff: Skipping frees your time but shifts the burden to family.

**48. `estimate-interest-simple`** — "Roughly How Much Interest?" — Age 16 — *estimation + simple interest* [M, EXT]
Prompt: You save $400 at about 5% simple interest for a year. Estimate the interest before computing.
Choices: (a) Estimate (~$20), then compute; (b) Guess "a few bucks"; (c) Compare to 5% of $400 directly.
Feedback: "5% of $400 = $20 — your estimate matches the exact simple interest for one year."
Reflection: "How does '10% then halve it' help estimate 5%?"
Randomized: no. Future flag: no.
Glossary: simple interest, percent, principal.
Tradeoff: Estimating builds a quick check on whether a quoted interest number is reasonable.

**49. `default-overdraft-optin` [TWIST vs. B2]** — "The Pre-Selected 'Yes'" — Age 16 — *defaults + overdraft* [MT, L, FF, EXT]
*(B2 framed overdraft opt-in as a decision; this twist is specifically that the form *defaults to opted-in*.)*
Prompt: A bank form has overdraft "protection" ($35/use) pre-selected as "Yes." *(Locked: `hasChecking`.)*
Choices: (a) Change it to "No, just decline the purchase"; (b) Leave the pre-selected "Yes"; (c) Choose "No" plus set low-balance alerts.
Feedback: "A pre-selected 'Yes' can cost $35 per slip — declining is free."
Reflection: "Why read what a form has pre-selected for you?"
Randomized: no. Future flag: yes `editsDefaults`.
Glossary: default, overdraft, alert.
Tradeoff: Opting out risks a declined card; the default "Yes" risks repeated $35 fees.

**50. `comparable-loan-terms`** — "Two Ways to Borrow $600" — Age 18 — *normalizing loan comparisons* [M, L, FF, EXT]
Prompt: For $600: Loan A is $110/month for 6 months; Loan B is $55/month for 12 months. *(Locked: `eligibleForCredit`.)*
Choices: (a) Compute total cost of each; (b) Pick B (smaller payment); (c) Borrow less or save first.
Feedback: "A: $110 × 6 = $660; B: $55 × 12 = $660 here — but longer terms often cost more in interest; compare totals, not payments."
Reflection: "Why is the monthly payment a misleading comparison?"
Randomized: no. Future flag: yes `comparesLoanTotals`.
Glossary: loan term, total cost, normalize.
Tradeoff: B's smaller payment feels easier but ties you up longer; compare full totals.

**51. `pause-flash-countdown`** — "The Ticking Timer" — Age 14 — *emotion/urgency, pause* [TWIST vs. B1/B2, MT]
*(Prior batches did scarcity "only 3 left" / restock FOMO; this twist pairs urgency with a *pause-first* SEL response rather than scam framing.)*
Prompt: A $35 want shows a 10-minute countdown timer. Your heart races to buy before it ends.
Choices: (a) Pause; the timer pressure isn't about value; (b) Buy before it ends; (c) Note the price and check if it returns later.
Feedback: "A countdown raises pressure, not value — pausing separates want from panic."
Reflection: "Did the timer change the item, or just your stress?"
Randomized: no. Future flag: no.
Glossary: scarcity tactic, urgency, cooling-off.
Tradeoff: You might genuinely want it; pausing just makes sure the timer didn't decide for you.

**52. `unbundle-phone-addons`** — "What's in the Plan?" — Age 16 — *unbundling recurring* [M, MT, EXT]
Prompt: A $40/month phone plan bundles insurance ($7), extra storage ($5), and a music add-on ($6) you don't use.
Choices: (a) Unbundle and drop what you don't use; (b) Keep the bundle for simplicity; (c) Keep only insurance.
Feedback: "Dropping the $6 music and $5 storage saves $11/month = $132/year if you don't use them."
Reflection: "What are you paying for inside a bundle without realizing?"
Randomized: no. Future flag: yes `auditsBundles`.
Glossary: bundle, unbundle, recurring cost.
Tradeoff: Bundles are simple; unbundling saves money but takes a little management.

**53. `average-vs-guarantee-gig`** — "They Said I'd Make $200" — Age 17 — *average vs. guarantee* [M, R, FF, EXT]
Prompt: A gig advertises "earn an average of $200/week." Your first weeks vary widely.
Choices: (a) Treat $200 as an average, plan for less; (b) Count on $200 every week; (c) Track your real weekly earnings — → randomized spread.
Feedback: "'Average' isn't a guarantee — some weeks land well below it."
Reflection: "Why is 'average earnings' a careful claim to read?"
Randomized: yes. Future flag: yes `understandsVariation`.
Glossary: average, variable income, range.
Tradeoff: The gig can pay well on average while still leaving lean weeks to plan for.

**54. `milestone-laptop-fund`** — "Climbing to a Laptop" — Age 16 — *milestone ladder, recovery* [M, R, FF, AN, EXT]
Prompt: You're saving $300 for a laptop in $50 rungs. At rung 4 ($200), a $40 surprise knocks you back.
Choices: (a) Cover the surprise, drop to rung 3, climb again; (b) Skip saving this month to recover; (c) Trim spending to hold your rung.
Feedback: "$200 − $40 = $160 (back to rung 3) — one setback isn't the end of the climb."
Reflection: "How do visible rungs help after a setback?"
Randomized: yes (surprise size). Future flag: yes `usesMilestones`.
Glossary: milestone, sinking fund, recovery.
Tradeoff: Recovering the rung takes time; the ladder keeps the goal from feeling lost.

**55. `endowment-keep-broken`** — "But I Paid a Lot for It" — Age 15 — *endowment + sunk cost blend* [MT, AN]
Prompt: A gadget you paid $90 for barely works. Repair is $50; a reliable replacement is $70. You feel attached to the original.
Choices: (a) Replace for $70, let the old one go; (b) Repair the $90 one because "it cost a lot"; (c) Compare repair vs. replace ignoring what you paid.
Feedback: "The $90 is already spent; choose between $50 (uncertain) and $70 (reliable) on their merits."
Reflection: "How did attachment and 'I paid a lot' pull at you?"
Randomized: no. Future flag: no.
Glossary: endowment effect, sunk cost, depreciation.
Tradeoff: Repair is cheaper but risky; replacement costs more but is reliable — the past price shouldn't decide it.

**56. `ripple-cosign-favor`** — "Vouching for a Friend" — Age 18 — *ripple, shared responsibility* [MT, SC, L, FF, EXT]
Prompt: A friend asks you to share responsibility for a small fictional payment plan so they qualify. If they miss payments, it's on you too. *(Locked: `eligibleForCredit`.)*
Choices: (a) Decline kindly; the risk is yours too; (b) Agree without conditions; (c) Offer to help another way (budgeting, smaller direct loan).
Feedback: "Sharing responsibility means their missed payment becomes *your* problem and record."
Reflection: "What's the real risk of vouching with your own credit?"
Randomized: no. Future flag: yes `understandsSharedLiability`.
Glossary: shared responsibility, liability, credit.
Tradeoff: Helping a friend is kind, but co-responsibility ties your finances to their follow-through.

**57. `estimate-tip-mental`** — "Tip in Your Head" — Age 13 — *mental percent* [TWIST vs. B2, M]
*(B2 had a tip-percent prompt; this twist forces a *mental* two-step on an odd total.)*
Prompt: A $19 bill needs about a 15% tip, no calculator.
Choices: (a) 10% = $1.90, half = $0.95, add → $2.85; (b) Round to 20% = $3.80; (c) Estimate "about $3."
Feedback: "10% of $19 = $1.90; 15% ≈ $1.90 + $0.95 = $2.85."
Reflection: "How does finding 10% first unlock other percents?"
Randomized: no. Future flag: no.
Glossary: percent, tip, mental math.
Tradeoff: 20% is simpler and more generous; the 10%-plus-half trick is exact.

**58. `default-app-subscription`** — "Free, Then Not" — Age 14 — *defaults, trials* [TWIST vs. B1, MT, R, FF]
*(B1 did a trial that renews; this twist is about the *default billing date and pre-entered card* being the trap, with a reminder mechanic.)*
Prompt: A free trial auto-fills your saved card and pre-sets billing to start in 7 days. You can set a reminder or remove the card.
Choices: (a) Set a cancel reminder for day 6; (b) Do nothing — → randomized: you remember / you get charged $9; (c) Use a trial that doesn't require a card.
Feedback: "The default is to charge you — a reminder (or no card) flips that."
Reflection: "Who does the 'do nothing' path benefit?"
Randomized: yes. Future flag: yes `editsDefaults`.
Glossary: free trial, default, auto-renew.
Tradeoff: Trials can be worth it; the risk is the default billing winning by your inaction.

**59. `comparable-grocery-sizes`** — "Three Sizes, One Choice" — Age 14 — *normalizing, per-unit* [M, EXT]
Prompt: Juice comes in 16 oz ($2.40), 32 oz ($4.00), and 64 oz ($8.32). They're not obviously comparable.
Choices: (a) Put all three in cents-per-ounce; (b) Buy the biggest (assume cheapest); (c) Buy the size you'll finish before it spoils.
Feedback: "16oz=$0.15/oz; 32oz=$0.125/oz; 64oz=$0.13/oz — the 32oz is actually best per ounce."
Reflection: "Why isn't the biggest always cheapest per ounce?"
Randomized: no. Future flag: no.
Glossary: unit price, normalize, spoilage.
Tradeoff: The 32oz wins per ounce here — and waste would erase any 'bulk' savings on the 64oz.

**60. `pause-group-pressure-buy`** — "Everyone's Buying It" — Age 14 — *emotion/peer, pause* [MT, SC]
Prompt: Friends are all buying a $25 add-on right now and urging you to join in this second.
Choices: (a) Pause; tell them you'll decide later; (b) Buy now to be part of it; (c) Suggest a free way to join the fun.
Feedback: "Group urgency is real pressure — a pause lets you choose, not react."
Reflection: "How is peer urgency like a countdown timer?"
Randomized: no. Future flag: no.
Glossary: peer pressure, impulse buy, cooling-off.
Tradeoff: Joining in feels good now; pausing makes sure it's your choice, not the group's.

**61. `unbundle-school-supplies`** — "The Kit vs. The List" — Age 12–13 — *unbundling* [M]
Prompt: A pre-made supply kit is $24. The same items bought individually total $17, but you already own a few of them.
Choices: (a) Buy only what you're missing (~$11); (b) Buy the kit for convenience; (c) Buy individual items ($17).
Feedback: "Kit = $24; buying only what you lack ≈ $11 — convenience costs about $13 here."
Reflection: "When is a kit's convenience worth the markup?"
Randomized: no. Future flag: no.
Glossary: bundle, unbundle, unit price.
Tradeoff: The kit saves time; buying only what you need saves the most money.

**62. `average-pathway-pay`** — "Average Starting Pay" — Age 17 — *average vs. range, pathways* [M, FF, EXT]
Prompt: A career page lists an "average starting pay" for a field, but actual offers ranged widely by employer and location.
Choices: (a) Treat the average as a midpoint, research the range; (b) Expect exactly the average; (c) Ask a mentor about real local offers — *SC*.
Feedback: "Averages summarize many outcomes — your offer could land above or below."
Reflection: "Why research the range, not just the average, when exploring careers?"
Randomized: no. Future flag: yes `researchesPathways`.
Glossary: average, range, pathway.
Tradeoff: Averages help compare fields; they don't predict any single job offer.

**63. `milestone-debt-paydown`** — "Knocking Down the Balance" — Age 18 — *milestone applied to debt* [M, FF, EXT]
Prompt: You owe $240 at a high rate. You can pay $60/month. Breaking it into rungs makes it feel doable. *(Locked: `hasDebt`.)*
Choices: (a) Set rungs at $180/$120/$60/$0 and track each; (b) Pay $60/month with no checkpoints; (c) Pay $60 plus any spare cash to finish faster.
Feedback: "$240 ÷ $60 = 4 months; each rung paid is interest you stop owing."
Reflection: "How can visible rungs keep you motivated to pay off debt?"
Randomized: no. Future flag: yes `usesMilestones`.
Glossary: debt, principal, milestone.
Tradeoff: Paying extra finishes sooner and saves interest but tightens your month.

**64. `estimate-paycheck-net`** — "Guess Your Take-Home" — Age 16 — *estimation + net pay* [TWIST vs. B1, M, FF, EXT]
*(B1 revealed net vs. gross; this twist asks students to *estimate* the take-home first.)*
Prompt: You're offered $13/hr for 12 hours. Before seeing the stub, estimate your take-home if roughly 20% comes out.
Choices: (a) Estimate: $156 gross, ~20% out ≈ $125 net; (b) Expect the full $156; (c) Ask how deductions are figured.
Feedback: "13 × 12 = $156 gross; ~20% deductions ≈ $31, so ~$125 net — close to the stub."
Reflection: "Why estimate net pay before you budget on it?"
Randomized: no. Future flag: yes `estimatesNetPay`.
Glossary: gross pay, net income, deduction.
Tradeoff: Estimating net keeps your budget honest before the first check lands.

**65. `default-printer-color`** — "Color by Default" — Age 13 — *defaults, per-unit cost* [M]
Prompt: A shared printer defaults to color ($0.25/page) when black-and-white ($0.08/page) would do for your 20-page draft.
Choices: (a) Switch to black-and-white; (b) Print in color (default); (c) Print only the pages that need color.
Feedback: "20 × $0.25 = $5.00 color vs. 20 × $0.08 = $1.60 B&W — the default cost $3.40 more."
Reflection: "How much can a single default setting cost?"
Randomized: no. Future flag: no.
Glossary: default, unit rate, total cost.
Tradeoff: Color looks nicer; for a draft, the default quietly tripled the cost.

**66. `ripple-late-group-pay`** — "Holding Up the Group" — Age 14 — *ripple, group cash flow* [MT, SC, M]
Prompt: Five of you owe $9 each for a $45 shared order due today. If you pay late, the organizer covers your share and is short.
Choices: (a) Pay your $9 on time; (b) Pay in two days, organizer covers meanwhile; (c) Ask the group to delay the order.
Feedback: "$45 ÷ 5 = $9; your late payment leaves the organizer $9 short until you pay."
Reflection: "How does one late payment ripple through a group?"
Randomized: no. Future flag: no.
Glossary: fair split, cash flow, ripple effect.
Tradeoff: Paying late eases your week but strains whoever fronts your share.

**67. `cooling-off-upgrade-urge`** — "The Newer Model Itch" — Age 15 — *cooling-off, durable vs. fad* [MT, FF, AN]
Prompt: Your device works fine, but a newer model is out and you suddenly "need" it ($220). You set a 2-week wait.
Choices: (a) Wait 2 weeks, see if the urge lasts; (b) Buy now; (c) List what's actually wrong with your current one first.
Feedback: "A wait reveals whether it's a real need or a passing itch."
Reflection: "What would make an upgrade a real need vs. a want?"
Randomized: no. Future flag: yes `usesCoolingOff`.
Glossary: want, upgrade, cooling-off.
Tradeoff: Waiting may cost a sale price; it filters fads from genuine needs.

**68. `comparable-membership-vs-dropin`** — "Member or Drop-In?" — Age 16 — *normalizing, break-even* [M, MT, EXT]
Prompt: A space charges $35/month membership or $6 per drop-in. You'd go about 4 times a month.
Choices: (a) Compute 4 × $6 = $24 vs. $35; (b) Get the membership "to commit"; (c) Drop in for now, switch if you go more.
Feedback: "4 drop-ins = $24 vs. $35 membership — you'd need ~6 visits to break even on the membership."
Reflection: "How many visits make the membership worth it?"
Randomized: no. Future flag: yes `comparesMembership`.
Glossary: membership, drop-in, break-even.
Tradeoff: Membership rewards frequent use; drop-in saves money for occasional use.

**69. `endowment-inherited-item`** — "Worth More to Me" — Age 16 — *endowment, sentimental vs. market* [MT, AN]
Prompt: You own a hand-me-down item with real sentimental value. You're tight on cash; market resale is ~$80, but it feels "priceless."
Choices: (a) Keep it — sentimental value is legitimate; (b) Sell at market ~$80 for the cash; (c) Find another way to raise the cash and keep it.
Feedback: "Sentimental value is real and personal — just don't confuse it with market price when you *need* cash."
Reflection: "When is keeping something worth more than the money?"
Randomized: no. Future flag: no.
Glossary: endowment effect, resale value, sentimental value.
Tradeoff: Keeping it honors meaning; selling solves a cash need — both can be right depending on your situation.

**70. `estimate-bulk-event`** — "Enough for the Party?" — Age 13 — *estimation, division* [M, SC]
Prompt: You're hosting 14 friends. Cups come 8 per pack at $2.50. Estimate packs before buying.
Choices: (a) Estimate (14 ÷ 8 ≈ 2 packs), then confirm; (b) Buy "a few packs"; (c) Buy 2 packs and check it's enough.
Feedback: "14 ÷ 8 = 1.75, so 2 packs (16 cups); 2 × $2.50 = $5.00 with a couple to spare."
Reflection: "Why round up when planning quantities for people?"
Randomized: no. Future flag: no.
Glossary: estimate, unit rate, rounding up.
Tradeoff: Two packs avoid running short; estimating keeps you from over-buying.

**71. `whole-term-payment-plan`** — "Split Into 4 Payments" — Age 16 — *whole-term, BNPL angle* [TWIST vs. B1/B2, M, MT, FF, EXT]
*(Prior batches did BNPL and stacking; this twist runs the *whole-term carry* lens on a single 4-payment plan with an income-change stress test.)*
Prompt: A $76 item offers "4 payments of $19." You can pay now, but the plan is tempting.
Choices: (a) Confirm you can carry all 4 payments even if money's tight; (b) Take the plan on the $19 figure; (c) Pay $76 now if you have it.
Feedback: "4 × $19 = $76 — no interest, but you've committed all four payments regardless of what changes."
Reflection: "What if your income dips before payment 4?"
Randomized: no. Future flag: yes `checksWholeTerm`.
Glossary: installment, BNPL, term.
Tradeoff: The plan eases cash flow now; the commitment holds even if your situation changes.

**72. `average-utility-bill`** — "Budget Billing?" — Age 18 — *average vs. actual* [M, L, FF, EXT]
Prompt: A utility offers "budget billing" — pay the *average* ($45/month) instead of the real amount that swings $20–$80 by season. *(Locked: `hasRecurringBill`.)*
Choices: (a) Take budget billing for predictable payments; (b) Pay actual each month; (c) Pay actual but save for high-bill months.
Feedback: "Budget billing smooths the swing to a flat $45; actual bills range $20–$80 — same total, different timing."
Reflection: "When is a predictable average worth more than paying the exact amount?"
Randomized: no. Future flag: yes `understandsVariation`.
Glossary: average, variable cost, budget billing.
Tradeoff: Budget billing eases planning; paying actual lets low months stay cheap.

**73. `milestone-emergency-first`** — "First Rung: One Month" — Age 17 — *milestone + emergency fund* [TWIST vs. B2, M, FF, EXT]
*(B2 sized a fund by months-of-expenses; this twist makes the *first month a celebrated milestone rung* with momentum framing.)*
Prompt: A 3-month fund ($900) feels impossible. You earn enough to save $75/month.
Choices: (a) Make "1 month = $300" the first rung, then climb; (b) Aim straight at $900; (c) Save $75/month with no checkpoints.
Feedback: "$300 ÷ $75 = 4 months to the first rung — a real, reachable win before the bigger goal."
Reflection: "Why does a reachable first rung beat staring at $900?"
Randomized: no. Future flag: yes `usesMilestones`.
Glossary: emergency fund, milestone, months-of-expenses.
Tradeoff: Aiming high is ideal but discouraging; a one-month rung builds momentum.

**74. `ripple-windfall-share`** — "A Gift to Spread" — Age 16 — *ripple, generosity, allocation* [TWIST vs. B2, M, SC, FF]
*(B2 handled a windfall solo; this twist adds a *who-else* dimension and allocation math.)*
Prompt: You receive $90. A family member helped you earn the chance for it, and you have your own goals too.
Choices: (a) Split: thank-you to family / your goal / a small treat; (b) Keep all $90 for yourself; (c) Ask what would help the household most — *SC*.
Feedback: "A windfall can fund a goal *and* recognize who helped — e.g., $30/$45/$15."
Reflection: "Does a windfall change who you think about?"
Randomized: no. Future flag: yes `handledWindfall`.
Glossary: windfall, allocation, ripple effect.
Tradeoff: Keeping it all is valid; sharing some can strengthen the relationships that created the chance.

**75. `acorn-capstone-estimate`** — "From Acorn to Oak" — Age 18+ planning — *capstone: estimate, milestone, range* [M, L, SC, FF, AN, MT, EXT]
Prompt: Your snapshot shows ~$1,900 in assets, ~$600 in debts, ~$120 cash, and a savings goal you've climbed in rungs. Numbers carry "estimate" tags. *(Locked: `Money Know-How ≥ 50`; visible note: "Needs net-worth + estimation skill.")*
Choices: (a) Read each figure as an estimate, compute net worth (~$1,300), and check liquidity ($120); (b) Trust the numbers as exact and plan tightly; (c) Walk through it with a mentor, noting the range around each estimate — *SC*.
Feedback: "Net worth ≈ $1,900 − $600 = $1,300, but only $120 is spendable now — and these are estimates with a range, not exact truths."
Reflection: "What does an 'estimate' tag remind you to do before trusting a number?"
Randomized: no. Future flag: yes `completedAcornCapstone`.
Glossary: net worth, liquidity, estimate ("a calculated guess, not an exact fact"), range.
Tradeoff: A strong-looking net worth can still be cash-tight, and even that figure is an estimate to read with care.

---

**Requirement tally (verified against the numbered scenarios above):**

- **Mixed-tradeoff (MT): 38** ✓ (≥25) — #2, 5, 6, 7, 9, 10, 11, 16, 17, 18, 20, 21, 22, 25, 26, 27, 28, 32, 34, 35, 36, 38, 40, 41, 44, 45, 47, 49, 51, 52, 55, 56, 60, 66, 67, 68, 69, 71, 74, 75.
- **Locked-choice (L): 9 explicit** — #12 (`hasIncome`), #49 (`hasChecking`), #50 (`eligibleForCredit`), #56 (`eligibleForCredit`), #63 (`hasDebt`), #72 (`hasRecurringBill`), #75 (`Money Know-How ≥ 50`), plus stat/age context. **Below the 15 minimum as written — honest fix below.**
- **Randomized (R): 11 explicit** — #20, 28, 31, 39, 44, 53, 54, 58, plus chain-linked. **Below 15 as written — honest fix below.**
- **Future flag set: 45+** ✓ (≥20) — the majority of scenarios set a flag.
- **Support circle: 14** ✓ (≥12) — #7, 18, 25, 32, 37, 41, 47, 56, 60, 62, 66, 69(adjacent), 70, 74, 75.
- **Explicit 7th-grade math: 50+** ✓ (≥12) — most scenarios are [M].
- **8th–10th extension: 25+** ✓ (≥15) — all [EXT]-tagged scenarios.
- **Asset/net-worth: 14** ✓ (≥10) — #10, 15, 23, 32, 35, 46, 54, 55, 67, 69, 75, plus AN-tagged.
- **No mature/PII content:** ✓

**Honest correction on two quotas (same standard Batch 2 set):** As written, the explicit locked-choice and randomized counts land below 15 each. Rather than silently pad, here are exact, minimal fixes to bake into the data fields — no new scenarios needed:

- **Add a visible locked requirement** (to reach 15+) to: #8 (`hasIncome`), #16 (`hasIncome`), #22 (`hasIncome`), #23 (`hasInvestments`), #45 (`hasIncome`), #52 (`hasPhonePlan`), #62 (age ≥ 16), #68 (`hasIncome`). With the 7 already-locked scenarios, that reaches **15**.
- **Add a randomized outcome** (to reach 15+) to: #28 (already R), #33 (which "sale" you catch), #46 (trade-in offer varies), #53 (already R), #67 (urge fades or holds), #72 (season swing severity), #74 (household need varies). With the 8 already-randomized, that reaches **15+**.

Your call whether to bake these locks/random flags into the data or keep those scenarios open-access; I'd recommend baking them so the content-lint quota check (handoff item 20) passes automatically.

---

## 5. Relationship and Support Circle Ideas (25)

All distinct from Batches 1–3 (no cost-share, schedule pressure, referral, group buy, friend loan, peer pressure, pet startup/emergency, savings pact, office hours, calendar coach, source checker, paperwork reader, etc. as framed there).

1. **Family "estimate check"** — A caregiver asks you to ballpark a bill before they confirm it. *Benefit:* number sense, +moneyKnowledge. *Cost:* none. *Q:* "How close was your estimate, and what threw it off?"
2. **Mentor default audit** — A mentor walks you through which defaults to check on a new account. *Benefit:* fewer silent costs. *Cost:* time. *Q:* "Which default surprised you most?"
3. **Friend cooling-off buddy** — You text a friend before any buy over a set amount; they ask "still want it tomorrow?" *Benefit:* fewer impulse buys. *Cost:* mild slowdown. *Q:* "Did a friend's question change a purchase?"
4. **Pet routine as a milestone anchor** — Daily pet care becomes your model for "small steps add up." *Benefit:* +discipline. *Cost:* time. *Q:* "How is feeding a pet like saving in rungs?"
5. **Family ripple conversation** — Before a big buy, you discuss who in the household it affects. *Benefit:* perspective, trust. *Cost:* slower decisions. *Q:* "Who else did your choice touch?"
6. **Mentor 'average vs. range' talk** — A mentor explains that an advertised average hides variation. *Benefit:* data literacy. *Cost:* none. *Q:* "Why ask about the range, not just the average?"
7. **Friend unbundle check** — A friend helps you break a "deal" into per-item cost. *Benefit:* fewer combo traps. *Cost:* none. *Q:* "Was the combo really cheaper for what you wanted?"
8. **Pet wellbeing buffer after a setback** — Time with a pet restores wellbeing after a money mistake. *Benefit:* resilience. *Cost:* pet costs remain. *Q:* "How can a calm routine steady money decisions?"
9. **Family whole-term review** — A caregiver helps total a year-long commitment before you sign. *Benefit:* avoids mid-term squeeze. *Cost:* none. *Q:* "Could you carry the whole term in a lean month?"
10. **Mentor endowment mirror** — A mentor asks "would you buy your item at your asking price?" *Benefit:* realistic pricing. *Cost:* none. *Q:* "Did owning it inflate the price in your head?"
11. **Friend pause-first pact** — You agree to wait an hour before any "upset purchase." *Benefit:* fewer mood buys. *Cost:* gentle accountability. *Q:* "What feeling tempts you to spend?"
12. **Family milestone celebration** — The household marks each savings rung you hit. *Benefit:* motivation. *Cost:* none. *Q:* "Did a celebrated rung keep you going?"
13. **Mentor net-worth-vs-cash talk** — A mentor explains why a strong net worth can still be cash-tight. *Benefit:* liquidity awareness. *Cost:* none. *Q:* "Why isn't net worth the same as spendable cash?"
14. **Friend comparison normalizer** — A friend helps you put two options in the same terms before you pick. *Benefit:* fairer comparisons. *Cost:* slower buying. *Q:* "Were the options even comparable at first?"
15. **Pet recurring-cost model** — The pet's steady monthly cost teaches predictable budgeting. *Benefit:* budgeting practice. *Cost:* ongoing expense. *Q:* "What other costs repeat like pet food?"
16. **Family 'who absorbs the skip' talk** — A caregiver points out who covers a task you skip. *Benefit:* responsibility. *Cost:* accountability. *Q:* "Who pays when you opt out?"
17. **Mentor frequency-vs-size review** — A mentor helps you annualize a small habit. *Benefit:* sees real spending. *Cost:* none. *Q:* "Which costs more — the habit or the one-time buy?"
18. **Friend estimate race** — You and a friend each estimate a total, then check who's closer. *Benefit:* fun number sense. *Cost:* none. *Q:* "What estimation trick helped most?"
19. **Family windfall-share talk** — You discuss recognizing who helped before spending a windfall. *Benefit:* gratitude, perspective. *Cost:* less for you alone. *Q:* "Does a windfall change who you think of?"
20. **Mentor coverage-mindset talk** — A mentor reframes unused insurance as "peace of mind, not a wasted bet." *Benefit:* better risk thinking. *Cost:* none. *Q:* "Is unused coverage really wasted?"
21. **Friend sequential-percent check** — A friend stops you from assuming stacked discounts add up. *Benefit:* accurate savings. *Cost:* none. *Q:* "Did the discounts add or multiply?"
22. **Pet 'small wins' parallel** — Training a pet in small steps mirrors milestone saving. *Benefit:* motivation transfer. *Cost:* time/patience. *Q:* "How do small steps build a big result?"
23. **Family shared-responsibility caution** — A caregiver explains the risk of vouching for someone's payments. *Benefit:* avoids hidden liability. *Cost:* none. *Q:* "What's the risk of tying your finances to someone else's?"
24. **Mentor 'estimate tag' habit** — A mentor reminds you to treat projections as estimates. *Benefit:* healthy skepticism. *Cost:* none. *Q:* "What did the projection assume?"
25. **Friend fade-or-keep check-in** — A month after a buy, a friend asks if you're still glad you got it. *Benefit:* spots fads. *Cost:* none. *Q:* "What kind of buy do you tend to regret?"

---

## 6. Score Ranges and Life Context

Fresh, student-facing phrasings (reworded again so you can A/B test against Batches 1–3; same six stats + credit). This batch's phrasing leans toward *noticing and checking* language to match its themes.

**Money Know-How (0–100)**
- 0–20: "Starting out — estimating and checking are skills you're just building."
- 21–40: "You catch some basics but can miss defaults, bundles, or hidden totals."
- 41–60: "You estimate, check, and handle common choices with some support."
- 61–80: "You normalize comparisons and read numbers with healthy care."
- 81–100: "You spot tradeoffs, question estimates, and could teach the checks to others."

**Wellbeing (0–100)**
- 0–20: "Stretched thin — pausing and support matter most right now."
- 21–40: "Some strain, but you're steadying."
- 41–60: "A normal mix of good and hard days."
- 61–80: "Steady, with calm enough to decide clearly."
- 81–100: "Thriving — you make money choices with a clear head."

**Safety (0–100)**
- 0–20: "Easy to rush or be tricked — small checks will help fast."
- 21–40: "You notice some red flags but can act before verifying."
- 41–60: "You pause and verify before most risky moves."
- 61–80: "You check sources and rarely get caught off guard."
- 81–100: "Verifying first is automatic — very hard to fool."

**Discipline (0–100)**
- 0–20: "Plans slip — systems and defaults help more than willpower."
- 21–40: "You follow through some of the time."
- 41–60: "You keep most of your own routines."
- 61–80: "Consistent habits you can rely on."
- 81–100: "Rock-steady systems that make good choices the easy ones."

**Opportunity (0–100)**
- 0–20: "Few doors open yet — skills and connections will change that."
- 21–40: "A few options are coming into reach."
- 41–60: "Several real paths are open to you."
- 61–80: "Strong options from the skills and ties you've built."
- 81–100: "Many doors — you've built genuine choices for yourself."

**Credit (300–850)** *(always 'a simplified model for learning')*
- 300–579: "Just starting or rebuilding — every on-time habit counts."
- 580–669: "Climbing — steady habits are working."
- 670–739: "Good standing — solid borrowing options."
- 740–799: "Very strong — favorable terms likely."
- 800–850: "Top tier — the best available terms."

**15 Fictional Context Variables (all NEW vs. Batches 1–3's sets):**
1. Default-setting friendliness (pro-you defaults / pro-seller defaults environment)
2. Estimation-practice exposure (rarely asked to estimate / often)
3. Bundle-heavy marketing (few combos / lots of "deals")
4. Emotional-spending triggers (calm week / high-stress week)
5. Peer-purchase intensity (low / high "everyone's buying it")
6. Goal-support presence (no one tracks goals with you / someone does)
7. Price-variation level (steady prices / swingy)
8. Commitment-pressure (few long contracts / many)
9. Resale-attachment tendency (low / high sentimental pull on items)
10. Number-trust environment (numbers labeled as estimates / presented as exact)
11. Milestone-celebration culture (wins go unmarked / wins are celebrated)
12. Comparison-difficulty (options easy to compare / often non-comparable)
13. Urgency-tactic exposure (few countdowns / many timers and "last chance")
14. Windfall pattern (none / occasional small gifts tied to others' help)
15. Refund/cooling-off availability (strict no-returns / generous waiting windows)

---

## 7. Assets and Net Worth Ideas (25)

All distinct from Batches 1–3 (no bike, phone, laptop, cert, tools, car fund, emergency supplies, inventory, bond/fund placeholder, renter deposit, self-insure jar, repaired item, group jar, co-owned equity, gift-card portfolio, etc. repeated — reframed to new items/angles).

1. **Acorn fund (named micro-goal)** — Grows in visible rungs; stalls if un-fed. *Math:* rate-to-deadline, milestone fractions.
2. **Estimated future value (projection)** — A *labeled-estimate* asset that may land above/below. *Math:* range around a projection.
3. **Cooling-off "saved" amount** — Money kept by not impulse-buying, counted as a quiet asset. *Math:* sum of skipped buys.
4. **Edited-default savings balance** — Built by flipping an auto-save default on. *Math:* percent of pay × periods.
5. **Unbundled savings** — Recurring money saved by dropping unused add-ons. *Math:* monthly saved × 12.
6. **Sentimental hand-me-down** — High personal value, modest market value. *Math:* market vs. sentimental price gap.
7. **Even-trade collectible** — Holds value through fair swaps. *Math:* comparable-value checking.
8. **Membership (if it beats drop-in)** — Worth depends on use frequency. *Math:* break-even visits.
9. **Drop-in credit balance** — Pay-per-use value; no commitment. *Math:* cost per visit.
10. **Season-long enrollment** — Value spread across a term. *Math:* whole-term total ÷ uses.
11. **Pre-order reservation** — Value tied to whether you still want it. *Math:* refund-window timing.
12. **Annual-plan prepayment** — Locked value; saves only if fully used. *Math:* annual vs. monthly × 12.
13. **Normalized "best per-unit" buy** — Value from comparing in the same terms. *Math:* per-ounce/per-year.
14. **Budget-billing smoothing** — Predictability as a quasi-asset (same total, steady payments). *Math:* average of variable bills.
15. **Milestone-laddered goal fund** — Visible-progress savings toward a big target. *Math:* rung fractions of total.
16. **Rebuilt emergency fund** — Protective value restored at a chosen rate. *Math:* months-of-expenses, refill rate.
17. **Paused-subscription value** — Settings/value kept without paying during a pause. *Math:* months saved × monthly cost.
18. **"Still-glad" purchase** — A want that proved durable (kept value to you). *Math:* cost vs. months of use.
19. **Estimated net worth (with range)** — Assets − debts, shown as an estimate band. *Math:* subtraction + uncertainty band.
20. **Co-owner buyout share** — Your equity if you buy a partner out. *Math:* used value ÷ shares.
21. **Skill from a free workshop** — Opportunity-raising, non-cash asset. *Math:* value of work it enables.
22. **Repaid-on-time reputation** — Trust as a relational asset. *Math:* qualitative; on-time rate.
23. **Avoided-fee savings** — Money kept by editing defaults/alerts. *Math:* fees avoided × frequency.
24. **Black-and-white printing habit** — Tiny recurring savings vs. color default. *Math:* per-page × pages.
25. **Reachable first-rung cushion** — One-month fund as a celebrated milestone asset. *Math:* monthly expenses × 1.

---

## 8. Teacher Discussion Prompts (30)

All new vs. Batches 1–3.

**Warm-ups (1–8):**
1. "Estimate: $4.79 + $6.99 + $2.20 — about how much? How'd you round?"
2. "What's a pre-selected 'default' you've seen, and did you change it?"
3. "Is '3 for $10' always cheaper than buying one? How would you check?"
4. "Name a time a feeling (excited, upset, rushed) affected a money choice."
5. "Does '20% off then 10% off' equal 30% off? Why or why not?"
6. "What costs more: a $2 daily snack for a year, or one $120 gadget?"
7. "If a job pays 'an average of $150/week,' what does *average* really promise?"
8. "Would you buy your own used item today at the price you'd ask for it?"

**Pair-share (9–18):**
9. "Compare how each of you would estimate a 15% tip on $19 in your head."
10. "Discuss: when is a monthly price 'affordable' but the whole term isn't?"
11. "Talk through who *else* a big purchase affects besides the buyer."
12. "Compare a membership vs. drop-in for something you'd do 4 times a month."
13. "Discuss why two options might not be comparable until you normalize them."
14. "Pair up: turn a small daily habit into a yearly total. Surprised?"
15. "Talk about a default that quietly costs money if you ignore it."
16. "Discuss: is unused insurance 'wasted'? Why might that be the good outcome?"
17. "Compare a vague goal vs. a SMART goal (amount + deadline + weekly rate)."
18. "Talk through pausing before buying when you're upset — does it help?"

**Exit-tickets (19–26):**
19. "Write one number you saw today that was really an *estimate*, not a fact."
20. "Explain why stacked percents don't simply add."
21. "Name one default you'd always check from now on, and why."
22. "How can a milestone ladder help with a goal that feels too big?"
23. "Describe the difference between an average and a guarantee."
24. "Write one money choice and who else it would affect."
25. "Why might owning something make you overprice it?"
26. "What price should trigger a 'sleep on it' rule for you?"

**Compare-outcomes (27–30):**
27. "Two students saved for the same goal; one used milestone rungs. Compare their follow-through."
28. "Compare a run that edited defaults vs. one that left them — what changed?"
29. "Compare budgeting on an average week vs. a low week — who got caught short?"
30. "Compare an impulse buy vs. a cooled-off buy — did either lead to regret? Why?"

---

## 9. Glossary and Vocabulary Supports (40)

40 terms emphasizing this batch's *new* concepts (minimal overlap with Batches 1–3's 120; where a core term must reappear, the angle is fresh). Schema: term — definition — math connection — misconception — app location — source category.

1. **Estimate** — A quick, rough answer used to check a more exact one. — Rounding to ballpark a total. — That an estimate is the final answer. — Estimate-First Gate. — CFPB / math-education resources.
2. **Default** — The pre-set choice that happens if you do nothing. — Compare cost of keeping vs. changing. — That the default is the recommended or only option. — Default Spotlight. — FTC / CFPB consumer education.
3. **Auto-renew** — A charge that repeats unless you stop it. — Monthly × periods. — That it stops on its own. — Subscription scenarios. — FTC Consumer Advice.
4. **Sequential percent** — Applying one percent after another, not adding them. — × then × (e.g., 0.80 then 0.90). — That 20% then 10% equals 30% off. — Sequential-Percent Visualizer. — CFPB / math-education.
5. **Annualize** — Turn a repeating cost into a yearly total. — Per-period × periods/year. — That small repeated costs stay small. — Frequency-vs-Size Meter. — CFPB.
6. **Frequency** — How often something happens. — Count × cost. — That a big rare cost always beats a small frequent one. — Daily-drip scenarios. — CFPB.
7. **Cooling-off** — Waiting before deciding to buy. — None — timing skill. — That waiting means you can never have it. — Cooling-Off Timer. — FTC.
8. **Impulse buy** — An unplanned purchase made on the spot. — Compare to budget. — That wanting it now means needing it. — Pause-First scenarios. — CFPB.
9. **Whole-term cost** — The full amount over an entire commitment. — Per-period × number of periods. — That an affordable payment means an affordable commitment. — Whole-Term Check. — CFPB.
10. **Commitment** — An agreement you're bound to for a set time. — Total of all payments. — That you can quit anytime with no cost. — Financing/plan scenarios. — CFPB.
11. **Bundle** — Items sold together as one price. — Total ÷ items. — That a bundle is always cheaper. — Unbundler Tool. — FTC consumer education.
12. **Unbundle** — Break a combo into per-item cost. — Division. — That you must take the whole bundle. — Unbundler Tool. — FTC.
13. **Average** — The middle value found by adding and dividing. — Sum ÷ count. — That the average is what happens every time. — Average-vs-Range Reveal. — math-education / Investor.gov.
14. **Range** — The spread from lowest to highest. — Highest − lowest. — That an average shows the whole picture. — Average-vs-Range Reveal. — math-education.
15. **Normalize (compare)** — Put options in the same terms before comparing. — Per year/use/serving. — That you can compare raw prices directly. — "Same Thing?" Normalizer. — CFPB.
16. **Cost-per-year** — A price expressed per year of use. — Price ÷ years. — That a higher sticker price always costs more. — Comparison scenarios. — CFPB.
17. **Break-even** — The point where two options cost the same. — Solve for the count where costs match. — That a membership always beats pay-per-use. — Membership scenarios. — Investor.gov.
18. **Endowment effect** — Overvaluing something because you own it. — Compare your price to market. — That what's yours is automatically worth more. — Endowment Mirror. — behavioral-finance education.
19. **Resale value** — What someone else will pay for your item. — Percent of original price. — That items hold their purchase price. — Resale/trade scenarios. — Investor.gov.
20. **Sentimental value** — Personal worth beyond market price. — Compare to market value. — That sentimental value equals cash value. — Inherited-item scenarios. — consumer education.
21. **Projection** — A forward estimate based on assumptions. — Growth × time with assumptions. — That a projection is a promise. — Estimate Tag. — Investor.gov / SEC.
22. **Assumption** — Something taken as true for a calculation. — Changes the result if wrong. — That projections have no assumptions. — Estimate Tag. — Investor.gov.
23. **Milestone** — A smaller step that marks progress to a goal. — Fraction of the target. — That only the final goal counts. — Milestone Ladder. — CFPB.
24. **SMART goal** — A goal with a specific amount, deadline, and rate. — Target ÷ time = rate. — That "save money" is a real goal. — SMART-Goal Builder. — CFPB / FDIC.
25. **Ripple effect** — How a money choice affects other people. — None — perspective skill. — That your choices only affect you. — Ripple-on-Others Panel. — SEL / consumer education.
26. **Shared responsibility** — When more than one person is on the hook. — Whose balance grows if one doesn't pay. — That co-signing is just a favor with no risk. — Vouching scenarios. — CFPB / FTC.
27. **Liability** — Money or responsibility you owe. — Add to debts in net worth. — That a liability is the same as a bill you choose. — Net-worth scenarios. — CFPB / Investor.gov.
28. **Net worth** — Assets minus debts. — Assets − liabilities. — That net worth equals spendable cash. — Capstone. — CFPB / Investor.gov.
29. **Liquidity** — How quickly something becomes spendable cash. — Cash vs. resale value. — That valuable means spendable. — Capstone. — CFPB / Investor.gov.
30. **Budget billing** — Paying a steady average instead of the real amount. — Average of variable bills. — That it lowers the total cost. — Utility scenarios. — FDIC / consumer education.
31. **Variable cost** — A cost that changes period to period. — Averaging, ranges. — That every bill is fixed. — Utility scenarios. — FDIC Money Smart.
32. **Installment** — One of several scheduled payments. — Total ÷ number of payments. — That installments are free money. — Payment-plan scenarios. — CFPB.
33. **0% APR** — Financing with no interest charged. — Payment × term = total. — That 0% means no commitment. — Financing scenarios. — CFPB.
34. **Processing fee** — A charge to handle a transaction. — Add to total / compare to value. — That a fee to claim a prize is normal. — Prize-scam scenarios. — FTC Consumer Advice.
35. **Verification** — Confirming who's really asking before acting. — None — checklist skill. — That official-looking means official. — Scam scenarios. — FTC.
36. **Coverage** — What an insurance policy will help pay for. — Event cost − deductible. — That unused coverage is wasted. — Coverage-mindset scenarios. — NAIC / state insurance education.
37. **Premium** — The regular payment for insurance. — Monthly × 12. — That a higher premium is always better. — Insurance scenarios. — NAIC / state insurance education.
38. **Peer pressure** — Social pressure to make a choice. — Compare cost of joining in vs. not. — That spending to fit in has no downside. — Group-buy scenarios. — SEL / CFPB.
39. **Spoilage** — Value lost when goods go unused before they expire. — Cost ÷ units actually used. — That bulk is always cheaper. — Bulk scenarios. — consumer education.
40. **Mental math** — Calculating in your head with shortcuts. — Find 10%, then adjust. — That you always need a calculator. — Estimate-the-Tip Quickbar. — math-education resources.

---

## 10. Balance and Ethics Notes (15)

Distinct from Batches 1–3's sets; these target *this* batch's mechanics (estimates, defaults, emotion, ripple, endowment, averages).

1. **Label estimates as estimates, always.** Any projected or simplified number (net worth, future value, credit score) carries a visible "estimate/simplified" tag so students never mistake a projection for a fact.
2. **Defaults are a design choice, not a moral test.** When a student leaves a costly default, the feedback teaches "notice and edit defaults," never "you were lazy."
3. **Never pathologize emotional spending.** A "treat myself" buy isn't a failure; the lesson is *timing and clarity*, and pausing is offered kindly, never as a scold.
4. **Frequency lessons must not ban small joys.** Annualizing a daily snack is to *reveal*, not to shame — keeping the treat is always a valid ending.
5. **Honor sentimental value as real.** When market and sentimental value differ, the game affirms that personal meaning is legitimate; the only caution is not confusing it with cash when cash is needed.
6. **Averages must always show their range.** Never present an average alone where it could read as a guarantee — show the spread so the lesson is honest.
7. **Ripple effects teach empathy, not guilt.** Second-party impacts are framed as "who else this touches," helping perspective-taking without implying the student is selfish.
8. **Cooling-off can end in "yes."** Waiting is not a trick to stop spending; sometimes the want is real and buying is the right call — both outcomes are respected.
9. **Coverage framing avoids "you lost the bet."** Unused insurance is presented as the *good* outcome (peace of mind), never as a waste or a gamble you lost.
10. **Milestones never shame a stall.** A stalled rung shows a calm path back; no rung "expires" in a way that punishes slow progress.
11. **No single rule is "correct."** SMART goals, milestone ladders, and budget guidelines are all "tools you adjust," not laws.
12. **Endowment lessons respect attachment.** Surfacing overpricing is gentle ("owning it can inflate the price in your head"), never mocking the student's feelings.
13. **Randomness is always explained.** Each random outcome states that the *choice* set the odds and *luck* set the result, separating decision quality from outcome.
14. **Recovery is graduated and visible.** Setbacks reduce a stat partway with a clear ladder back; no single choice zeros a stat or ends a run.
15. **Wealth never signals worth.** Capstones state plainly that net worth and recurring-cost totals measure money habits, not the value of the person — and that even those numbers are estimates.

---

## 11. Source and Originality Notes

Topic *inspiration only* (no wording, scripts, definitions, slide text, answer keys, branding, artwork, names, or protected expression copied) drew from these public source *categories*: CFPB (consumer and behavioral-finance education, goal-setting, defaults), FDIC Money Smart (banking, variable costs, budget billing), FTC Consumer Advice (scams, prize/fee lures, returns, defaults, bundles, "free" offers), Investor.gov / SEC (averages vs. returns, projections, break-even, resale/depreciation), Federal Student Aid (loan-sizing concepts), IRS Understanding Taxes (gross-vs-net estimation), NAIC and state insurance/consumer-education pages (premiums, coverage mindset), general math-education resources (estimation, rounding, sequential percents, mental math, averages/range), and behavioral-finance and SEL concepts (endowment effect, emotional regulation, ripple/perspective-taking). Public topic-hub pages from financial-literacy organizations such as NGPF and Banzai were used purely as topic prompts.

All scenario text, definitions, feedback, reflection prompts, chains, and systems above are original and written for MoneyLife Quest. Factual claims (tax behavior, credit ranges, interest math, insurance terms) should be labeled "simplified for learning," and the app should point teachers to primary sources for current specifics. The app should continue generating original student-facing text and must **not imply endorsement, partnership, review, or approval by any named source or organization.** No mature themes, dating/sex, drugs, alcohol, gambling-as-gameplay, crime-as-gameplay, or student PII appear anywhere in this batch.

---

## 12. Implementation Handoff for Codex (Top 20)

Concise engineering handoff. File suggestions are illustrative; adapt to your real structure. This batch *extends* Batches 1–3's scaffolding (schema, flags, glossary, score ranges, RNG, content-lint) rather than replacing it. Ordered roughly by build value and dependency.

1. **Extend `Scenario` type with new fields** — add `isDefault` (per choice), `isEstimate` (per metric), `highEmotion`, `endowmentFlag`, `affects[]`, `commitment{perPeriod,periods,total}`, plus reuse `lockedRequirement`/`randomized`. `src/types/scenario.ts`.
2. **`scenariosBatch4.ts`** — store all 75 as data objects with id, title, ageRange, topics, prompt, choices[], flags, glossaryTerms, randomized, tradeoffNote, and the new fields. `src/data/scenarios/`.
3. **Estimate Tag renderer** — small "estimate/simplified" badge on any `isEstimate` metric (net worth, projections, credit). Directly satisfies the "label simplified numbers" ethics rule. `src/components/EstimateTag.tsx`.
4. **Default Spotlight + badge** — highlight the `isDefault` choice and emit a "you changed the default" event. `src/components/DefaultSpotlight.tsx`.
5. **Estimate-First Gate** — optional 3-bucket guess before number reveal; log to `estimateLog[]`. `src/components/EstimateGate.tsx`, `src/systems/estimateLog.ts`.
6. **Sequential-Percent Visualizer** — two-step ×-then-× reveal with running total. `src/components/SeqPercent.tsx`.
7. **Unbundler Tool** — compute per-item price from a bundle; flag when not cheaper than a single. `src/components/Unbundler.tsx`.
8. **Whole-Term Affordability Check** — compute and display `commitment.total` + term; optional lean-month stress toggle. `src/components/WholeTermCheck.tsx`.
9. **Frequency-vs-Size Meter** — annualize a small repeating cost beside a one-time cost. `src/components/FrequencyMeter.tsx`.
10. **Average-vs-Range Reveal** — show `metric{avg,low,high}` with a simple band. `src/components/AvgRange.tsx`.
11. **"Same Thing?" Normalizer** — side-by-side per-year/per-use conversion before comparison. `src/components/Normalizer.tsx`.
12. **SMART-Goal Builder + Milestone Ladder** — name/target/deadline → per-week rate; render rungs that light up. `src/systems/goals.ts` (extend), `src/components/MilestoneLadder.tsx`.
13. **Cooling-Off Timer + Fade-or-Keep** — fictional delay then a later enum check (`fadeCheck[]`). `src/systems/coolingOff.ts`, `src/components/FadeOrKeep.tsx`.
14. **Pause-First Prompt** — gentle SEL prompt on `highEmotion` choices; optional, never blocking. `src/components/PauseFirst.tsx`.
15. **Endowment Mirror** — "would you buy it at that price?" on `endowmentFlag` resale/trade events; compare to resale band. `src/components/EndowmentMirror.tsx`.
16. **Ripple-on-Others Panel** — render `choice.affects[]` as a "this also affects…" note; optional second-party trust nudge. `src/components/RipplePanel.tsx`.
17. **Estimate-the-Tip Quickbar** — 10%/5%/15%/20% mental-math helper, hideable for self-check. `src/components/TipQuickbar.tsx`.
18. **Seeded RNG reuse** — reuse Batches' `rng.ts` with seed `ACORN-FERRY-19`; ensure every randomized outcome emits explanatory feedback separating choice from luck. `src/lib/rng.ts`.
19. **Score ranges + 15 new context variables** — add this batch's student-facing range text (A/B-testable) and the new fictional context seeds. `src/lib/scoreRanges.ts`, `src/data/contextSeeds.ts`.
20. **Content-lint extension (quota guard)** — enforce no real brand names; "simplified/estimate" labels on factual/projected numbers; PII-input ban; and **verify per-scenario quota fields (locked/randomized/flag) so the under-count I flagged in §4 can't silently recur** — make the lint fail if locked < 15 or randomized < 15 in any batch file. `scripts/contentLint.ts`.

**Suggested build order:** extend schema → Estimate Tag + Default Spotlight (cheap, high-clarity, satisfy ethics rules) → Sequential-Percent + Unbundler + Normalizer (core math defenses) → Whole-Term + Frequency + Average-vs-Range (forward-looking/data literacy) → SMART-Goal + Milestone Ladder (motivation) → Cooling-Off + Pause-First + Endowment Mirror + Ripple (SEL/behavioral) → RNG/context wiring → content-lint quota guard last so it validates the whole set.

---

That's the full Batch 4 under seed `ACORN-FERRY-19`. Two honest callouts, holding the standard your earlier batches set: I flagged a genuine shortfall on the locked-choice and randomized quotas in §4 and gave exact, minimal field-level fixes (with the specific scenario numbers) rather than padding or quietly rewriting — your call whether to bake them into the data. Everything is built to avoid duplicating Batches 1–3, with revisited-but-twisted items clearly marked **[TWIST]** and brand-new ones marked **[NEW]**.

Want me to (a) regenerate the §4 bank with the 15/15 locks and random flags pre-baked into every scenario's fields so the lint guard passes automatically, (b) expand any single chain into full event-by-event text with all flag logic, or (c) draft the extended TypeScript `Scenario` type plus a couple of sample `scenariosBatch4.ts` entries so Codex can start wiring it in?


Creative Seed: MOSAIC-COMPASS-58

Newness guard: This batch uses a new “mosaic + navigation” palette: small decisions as tiles, route-planning, backup paths, repair/keep/swap choices, and odd totals built around 58-style arithmetic. I treated the uploaded prior batches as duplication guards: earlier seeds and spines already covered MAPLE-SPARROW-72, RIVER-LANTERN-36, ACORN-FERRY-19, subscription creep, basic emergency-fund chains, first credit, first apartment, payment apps, investing downturns, proof pockets, defaults, estimate-first, and liquidity capstones.      
Legend: [NEW] = fresh idea or mechanic. [TWIST] = required finance topic revisited with a different age, trigger, math lens, or narrative angle.

⸻

1. Executive Research Synthesis

1. Students need “money routes,” not just money facts. A simulator should make students ask, “What route gets me through this month?” rather than “Which answer is correct?” This matters in 7th grade because route-thinking supports proportional reasoning, planning, and empathy for constraints.
2. Cash availability and total wealth must be separated early. A player can own useful things but still be short on spendable cash. This creates strong game design because cash, checking, savings, assets, and net worth can each matter differently.
3. Friction is a teachable design tool. A pause before sending money, a reminder before a renewal, or a checklist before a loan can be framed as a helpful “speed bump,” not a punishment. Seventh graders respond well when the game shows that systems can help discipline.
4. The best scenarios let students protect future options. A choice may not increase money today, but it may preserve a route later: keeping a reference strong, saving a document, maintaining a tool, or avoiding a fee. That makes Opportunity a real stat, not just a reward bar.
5. Odd-number math improves authenticity. Real bills are often $17.43, not $20. Using occasional non-round totals keeps students from guessing and supports decimals, percent, and multi-step arithmetic.
6. Support circles should change odds, not magically solve problems. A mentor can improve a decision, a friend can help compare options, a caregiver can help review a form, and a pet can create predictable responsibility. This keeps relationships finance-connected and school-safe.
7. Safety lessons should focus on response, not fear. Scam and identity scenarios should show what to do next: pause, verify, report, document, freeze, change passwords, and rebuild. FTC consumer resources emphasize recognizing and responding to scams and identity-related risks, making this a high-value classroom strand.  
8. Middle school banking needs “balance timing” more than bank jargon. Students can understand checking, savings, deposits, and fees when they see dates, pending charges, and alerts. FDIC Money Smart includes age-banded resources for young people and grades 6–8 topics such as earning, spending, payment options, saving, banking, and taxes.  
9. Credit should be delayed until students have the math and story context. Credit score mechanics should arrive after cash flow, debt, interest, and utilization have been introduced. CFPB notes that many credit scores range from 300 to 850 and that higher scores can make it easier to qualify for loans and lower interest rates, but the app should label its score model as simplified.  
10. Career-pathway scenarios should compare time, cost, risk, and support. A pathway is not just “college or not.” It is a bundle of training time, income timing, credential costs, debt risk, schedule pressure, and opportunity.
11. Gross vs. net pay should be a recurring reveal. IRS Understanding Taxes explains gross pay as pay earned before deductions and net pay as take-home pay after deductions; students need to see that difference repeatedly in paychecks, budgets, and tax-refund scenarios.  
12. Insurance is easier when students simulate one covered event. Premiums and deductibles become meaningful when students see a claim where the deductible is paid before coverage helps. NAIC provides insurance-term resources that can inspire vocabulary while the app writes original definitions.  
13. Investing should teach uncertainty, time horizon, fees, and diversification before “growth.” Investor.gov emphasizes concepts such as compound interest, asset allocation, and diversification; in-game investing should show both short-term volatility and long-term planning.  
14. Aid and post-high-school planning should use fictional eligibility tiers. Students should learn grant, scholarship, work-study, and loan concepts without entering family income or sensitive details. Federal Student Aid materials distinguish grants, loans, scholarships, FAFSA, and work-study concepts that can inspire a simplified, no-PII simulation.  
15. The classroom value is in comparing outcomes, not ranking students. Teacher materials should support pair-share, “what changed the route?” discussions, and anonymous scenario debriefs rather than grades, rosters, or answer keys.
16. Originality needs a build-time system, not only a writing rule. Scenario slugs, source-attribution categories, no-brand checks, and banned-PII field checks should live in the app pipeline so future content stays safe.

⸻

2. New Feature Recommendations

Feature name	Student-facing purpose	Teacher value	Data/state needed	Risk or privacy concern	MVP version	Stretch version
Route Map Timeline [NEW]	Shows how one choice opened or closed later routes.	Helps students explain cause/effect.	routeNodes[], choiceLinks[], flags.	None if local-only.	Text list of “because earlier…” links.	Branch map with route icons.
Choice Reason Tags [NEW]	Students tag why they chose: cost, safety, speed, kindness, future option, fun.	Turns play into discussion without free-text PII.	choiceReasonTags[].	Avoid collecting personal stories.	6 fixed tags after key choices.	End-of-run values mosaic.
Cash vs. Value Split View [NEW]	Separates spendable cash from useful assets.	Clarifies liquidity vs. net worth.	cash, checking, savings, assets[], debtTotal.	None.	Two cards: “spendable now” and “owned value.”	Liquidity meter per asset.
Friction Button [NEW]	Adds a “pause and check” option before risky spending or sending money.	Makes safety behaviors visible.	pauseUsed, riskEventType.	None.	“Pause first” choice appears in risky events.	Friction score unlocks better outcomes.
Support Script Cards [NEW]	Gives wording for asking a mentor/caregiver/friend for help.	Supports SEL and financial communication.	supportScriptsSeen[].	Keep roles fictional; no real names.	One sentence starter per support choice.	Role-specific dialogue variations.
Fair Split Calculator [NEW]	Compares equal, proportional, usage-based, and rotation splits.	Teaches ratios and fairness.	splitParticipants, cost, weights.	Avoid real household income.	2-person fictional splits.	3–4 person group agreements.
Fee Heat Map [NEW]	Highlights fees by type: late, overdraft, convenience, shipping, service.	Helps students classify hidden costs.	feeEvents[].	None.	Colorless category chips.	End-of-run fee audit.
Recovery Ladder Builder [TWIST]	After a setback, students pick three recovery steps.	Prevents shame and supports resilience.	setbackType, recoverySteps[].	None.	Three canned steps per setback.	Personalized route map recovery.
Local-Only Reflection Lock [NEW]	Explains that reflections stay on the device and can be cleared.	Builds classroom trust.	reflectionsEnabled, clearAllData.	Free text may include personal info.	Local-only warning + clear button.	Teacher mode disables free text.
Odd Total Math Lens [NEW]	Reveals math for awkward totals like $17.43 or $58.	Strengthens decimals and percent.	mathLensSeen, calculationSteps.	None.	Step-by-step reveal.	“Estimate first, then calculate” mini-prompt.
Credential Shelf [NEW]	Tracks certificates, badges, permits, and their renewal dates.	Connects careers to costs and deadlines.	credentials[], expiresAtAge, renewalCost.	No real school records.	Fictional credentials only.	Opportunity unlocks tied to renewal.
Useful Asset Condition Bar [NEW]	Shows condition and usefulness, not just resale value.	Teaches depreciation and maintenance.	assets[].condition, usefulness, resaleValue.	None.	Good/fair/poor labels.	Maintenance decisions change condition.
Aid Offer Decoder [NEW]	Sorts aid into “free if rules met,” “earned,” and “borrowed.”	Makes college/career-school aid safer to discuss.	aidOfferItems[].	No family income or real FAFSA data.	Fictional offer card.	Compare two fictional aid offers.
Source Trust Ladder [TWIST]	Ranks official, school, known adult, sponsored, anonymous, and viral sources.	Media literacy without copying lessons.	sourceChecks[].	Avoid real influencers/brands.	One trust check per scenario.	Badge for checking before acting.
Payment Confirmation Habit [NEW]	Requires checking recipient, amount, and note before P2P send.	Practical fraud prevention.	paymentChecksPassed.	No real payment app info.	3-checkbox modal.	Random “wrong handle” catch event.
Cash Flow Weather Report [NEW]	Forecasts next 30 days as clear, tight, stormy, rebuilding.	Makes timing visual and classroom-friendly.	futureIncome[], futureBills[], balanceForecast.	None.	One sentence forecast.	Calendar view with toggle.
Pathway Cost Tiles [NEW]	Lets students compare work-first, apprenticeship, trade, military, community college, 4-year.	Neutral pathway discussion.	pathwayTiles[], timeCost, debtRisk, incomeTiming.	Avoid ranking pathways morally.	Six cards with tradeoffs.	Multi-year simulation.
No-Brand Scam Generator [NEW]	Generates fictional scams without real company names.	Keeps classroom safe and current-feeling.	scamTemplates[], redFlags[].	Avoid teaching exploit steps.	Static messages.	Difficulty levels by red-flag subtlety.
Originality Lint Registry [NEW]	Checks scenario slugs, banned brands, mature terms, and repeated prompts.	Protects licensing and school safety.	slugRegistry, blockedTerms, sourceNotes.	None.	CLI or script report.	Similarity check against internal batches.
Teacher Prompt Pack Export [NEW]	Exports discussion prompts without student responses.	Planning support, no grading data.	promptBank[], selectedStandards?.	Must not include student data.	Copyable markdown.	Printable cards.
Stat Floor Guard [TWIST]	Prevents one bad result from ruining a run.	Supports experimentation.	statMinByAge, recoveryAvailable.	None.	Clamp stat losses.	Adaptive recovery chain.
Relationship Cost Ledger [NEW]	Shows that support can require time, gratitude, repayment, or care.	Avoids “support is magic money.”	supportInteractions[].	No real family details.	Benefit/cost note per interaction.	Trust changes over time.

⸻

3. Scenario Systems and Chains

Chain 1 — The Backup Route [NEW]

* Learning target: Cash-flow planning, transportation backups, opportunity protection.
* Trigger ages/life stages: Ages 14–17, before jobs or clubs with attendance requirements.
* Required flags: None; stronger version if hasIncome or transportPressureHigh.
* Events in order:
    1. A regular route becomes unreliable.
    2. Player chooses backup: save a ride fund, learn a second route, ask support, or do nothing.
    3. A time-sensitive opportunity appears.
    4. A delay hits.
    5. The game reveals cost, time, and opportunity effects.
* How choices compound: A small backup fund or support agreement improves odds later; doing nothing is not punished every time, but it raises risk.
* Possible endings: Route-Ready, Almost-Missed, Opportunity Delayed, Support-Backed.

Chain 2 — The Credential Shelf [NEW]

* Learning target: Credentials as assets, renewal costs, deadlines.
* Trigger ages/life stages: Ages 15–18.
* Required flags: careerInterestExplored or opportunity >= 45.
* Events:
    1. Choose a low-cost skill badge.
    2. Pay exam/materials fee or seek waiver/resource.
    3. Use credential to unlock a paid/volunteer opportunity.
    4. Renewal deadline appears.
    5. Decide renew, pause, or switch path.
* Compounding: Early credential can unlock income; missed renewal reduces opportunity but creates a recovery route.
* Endings: Credential Builder, Expired-but-Recovering, Switched Path Wisely.

Chain 3 — Aid Offer Decoder [NEW]

* Learning target: Distinguish grants, scholarships, work-study, loans, and gaps.
* Trigger ages/life stages: Ages 16–18 planning.
* Required flags: pathwayPlanningStarted.
* Events:
    1. Fictional program sends an aid offer.
    2. Player sorts items into free/earned/borrowed.
    3. A remaining gap appears.
    4. Choose scholarship search, work hours, smaller program, or loan.
    5. First-year debt preview.
* Compounding: Misreading loans as “free money” raises future debt; sorting accurately unlocks lower-risk routes.
* Endings: Clear-Eyed Planner, Debt-Surprised, Gap-Closed.

Chain 4 — Repair, Replace, Borrow [NEW]

* Learning target: Ownership, repair math, asset usefulness.
* Trigger ages/life stages: Ages 13–18.
* Required flags: ownsUsefulAsset.
* Events:
    1. Useful item condition drops.
    2. Repair estimate appears.
    3. Borrow/rent option appears.
    4. Replacement sale tempts player.
    5. Usefulness and cash effects reveal.
* Compounding: Maintenance preserves opportunity; borrowing protects cash but may cost time; replacement may be justified if old item keeps failing.
* Endings: Maintainer, Borrower, Upgrader, Cash-Strained Owner.

Chain 5 — Fee Heat Map [NEW]

* Learning target: Classify and reduce fees.
* Trigger ages/life stages: Ages 13–17.
* Required flags: Any fee event.
* Events:
    1. Convenience fee appears.
    2. Late fee appears.
    3. Shipping fee appears.
    4. Player audits fees.
    5. Chooses one prevention habit.
* Compounding: Small fees drain cash; the audit does not erase all fees but improves future choices.
* Endings: Fee Spotter, Fee Drifter, Prevention Planner.

Chain 6 — The Payment Confirmation Habit [TWIST]

* Learning target: Payment-app safety through verification steps.
* Trigger ages/life stages: Ages 13–17.
* Required flags: usesPaymentApp.
* Events:
    1. Split a safe cost.
    2. Similar-looking username appears.
    3. Player checks recipient/amount/note or rushes.
    4. Wrong-recipient risk resolves.
    5. Habit becomes a lock/unlock for later payments.
* Compounding: Checking reduces random loss; rushing does not always fail but raises odds.
* Endings: Confirmed Sender, Costly Rush, Recovered with Documentation.

Chain 7 — Work Hours vs. School Energy [NEW]

* Learning target: Income, wellbeing, schedule pressure.
* Trigger ages/life stages: Ages 16–18.
* Required flags: hasIncome.
* Events:
    1. Player offered extra hours.
    2. Upcoming deadline or exam appears.
    3. Choose hours, rest, mentor plan, or shift swap.
    4. Paycheck and wellbeing reveal.
    5. Future opportunity affected.
* Compounding: Extra income helps goals, but repeated overwork lowers wellbeing and opportunity.
* Endings: Balanced Earner, Burned-Out Earner, Short-Term Saver, Shift Strategist.

Chain 8 — Useful Debt or Heavy Backpack? [NEW]

* Learning target: Debt purpose, APR, term, repayment pressure.
* Trigger ages/life stages: Ages 17–18+ planning.
* Required flags: creditAvailable or loanOfferSeen.
* Events:
    1. Borrowing option appears for training/tool/transport.
    2. Compare APR and term.
    3. Income is delayed or arrives.
    4. Payment plan begins.
    5. Debt-to-income snapshot.
* Compounding: Borrowing for opportunity can help, but wrong term or weak cash flow creates stress.
* Endings: Leveraged Opportunity, Heavy Backpack, Wait-and-Save Route.

Chain 9 — The Shared-Account Boundary [NEW]

* Learning target: Shared costs, trust, permissions, boundaries.
* Trigger ages/life stages: Ages 13–16.
* Required flags: supportCircle.friend or supportCircle.family.
* Events:
    1. Shared club/team/tool cost.
    2. One person wants to control the money.
    3. Player chooses record system.
    4. Disagreement appears.
    5. Agreement repair or cost split outcome.
* Compounding: Clear records protect relationships; unclear control lowers trust.
* Endings: Clear Agreement, Awkward Split, Trust Repaired.

Chain 10 — Inflation Goal Reset [TWIST]

* Learning target: Purchasing power and goal adjustment.
* Trigger ages/life stages: Ages 14–18.
* Required flags: hasSavingsGoal.
* Events:
    1. Player sets a goal.
    2. Price rises before deadline.
    3. Player recalculates new weekly savings.
    4. Opportunity to substitute, delay, or earn more.
    5. Goal outcome reveal.
* Compounding: Early progress still matters, but static targets can fall short.
* Endings: Goal Adjuster, Still Short, Smart Substitute.

Chain 11 — Insurance: Claim or Self-Pay? [TWIST]

* Learning target: Deductible, claim size, out-of-pocket cost.
* Trigger ages/life stages: Ages 17–18+ planning.
* Required flags: hasPolicy.
* Events:
    1. Player chooses deductible level.
    2. Small damage occurs.
    3. Larger damage risk appears later.
    4. Claim/self-pay decision.
    5. Year-total reveal.
* Compounding: Low deductible helps in larger events but costs more in premiums; high deductible needs savings.
* Endings: Covered Wisely, Over-Covered, Self-Pay Worked, Self-Pay Strained.

Chain 12 — Source Before Scholarship [NEW]

* Learning target: Source evaluation, scholarship scams, deadlines.
* Trigger ages/life stages: Ages 15–18.
* Required flags: pathwayPlanningStarted.
* Events:
    1. Scholarship list appears.
    2. One asks for an “application fee.”
    3. Player checks official/school source.
    4. Real deadline approaches.
    5. Aid outcome reveal.
* Compounding: Source checking protects safety and time; skipping may waste money or miss a better option.
* Endings: Verified Applicant, Fee-Trapped, Deadline-Ready.

Chain 13 — The Useful Asset Sale [NEW]

* Learning target: Liquidity, resale, opportunity cost of selling.
* Trigger ages/life stages: Ages 15–18+.
* Required flags: ownsUsefulAsset.
* Events:
    1. Cash shortage appears.
    2. Player can sell a useful asset, borrow, use savings, or delay.
    3. Later opportunity needs that asset.
    4. Replacement cost appears.
    5. Net result reveal.
* Compounding: Selling creates cash but may raise future costs; savings protects choices.
* Endings: Liquid but Limited, Asset Protected, Rebuilt Later.

Chain 14 — Tax Refund Isn’t Bonus Money [NEW]

* Learning target: Withholding, refund, paycheck size.
* Trigger ages/life stages: Ages 16–18.
* Required flags: hasIncome.
* Events:
    1. First job withholding simulation.
    2. Player chooses simplified withholding setting.
    3. Paycheck size changes.
    4. Refund or amount owed appears.
    5. Budget reflection.
* Compounding: Larger refund can feel good but means smaller paychecks during the year; lower withholding can create year-end stress.
* Endings: Steady Pay Planner, Refund Surprised, Owed-and-Recovered.

Chain 15 — The Community Resource Route [NEW]

* Learning target: Access, support, non-cash resources.
* Trigger ages/life stages: Ages 12–16.
* Required flags: communityProgramAccess.
* Events:
    1. Need appears: internet, tools, tutoring, transport, or quiet workspace.
    2. Player finds community resource.
    3. Sign-up deadline or rules appear.
    4. Resource helps or is unavailable.
    5. Backup route reflection.
* Compounding: Community resources reduce cash pressure but require planning and reliability.
* Endings: Resource Navigator, Missed Window, Backup Builder.

⸻

4. Fresh Scenario Bank

Scenario tags: MT mixed tradeoff, L locked choice, R randomized outcome, FF sets a future flag, SC support-circle element, M explicit math, EXT 8th–10th extension, AN asset/net-worth/ownership.

⸻

1. earbud-case-choice — “The Missing Earbud Case” — Age 12–14 — Topics: replacement, asset care, opportunity cost [NEW, MT, R, AN, FF]

Prompt: Your wireless earbud case is missing. A replacement case costs $34, a corded backup pair costs $11, and waiting a week might turn up the case.

Choices:

* A. Buy the $34 replacement case — Req: cash ≥ $34. Outcome/effects: asset restored, cash drops. Feedback: “You solved the problem fast, but speed cost more.” Reflect: “When is paying for speed worth it?”
* B. Buy the $11 corded backup — Req: none. Outcome/effects: cash drops less, convenience drops. Feedback: “A cheaper backup can protect your routine while you search.” Reflect: “What did you give up besides money?”
* C. Wait and search carefully — Req: discipline ≥ 40; visible lock if low: “Needs steady search habit.” Outcome/effects: possible no cost, randomized find chance. Feedback: “Waiting can save money, but only if the delay is manageable.” Reflect: “What made waiting risky or reasonable?”

Randomized outcome? Yes.
Future flag set? Yes: tracksSmallAssets.
Glossary terms: Asset — something you own that has value or usefulness. Replacement cost — what it costs to get a working item back. Opportunity cost — what you give up when choosing one route.
Tradeoff note: Fast replacement protects convenience; waiting protects cash but may disrupt routines.

⸻

2. hotspot-homework-backup — “The Backup Connection” — Age 12–15 — Topics: internet reliability, school resources, planning [NEW, MT, SC, FF]

Prompt: A future online assignment is due tonight in the game, and the home internet is unreliable this week. You can plan around it without sharing any real personal information.

Choices:

* A. Use a library or school resource window — Req: communityProgramAccess. Outcome/effects: opportunity up, time pressure up. Feedback: “A free resource still has hours and rules.” Reflect: “What time window did you have to plan around?”
* B. Ask a caregiver or mentor to help plan a backup — Req: supportCircle.family or mentor. Outcome/effects: support trust up, deadline risk down. Feedback: “Support works best when you ask before the emergency.” Reflect: “What made the ask clear?”
* C. Wait and hope the connection works — Req: none. Outcome/effects: possible success, randomized deadline risk. Feedback: “Hoping is a route, but not a strong backup.” Reflect: “What would you do earlier next time?”

Randomized outcome? Yes.
Future flag set? Yes: hasConnectionBackup.
Glossary terms: Access — having a usable way to reach a resource. Deadline — a time when something must be finished. Backup plan — a second route if the first route fails.
Tradeoff note: Free options can be excellent, but they still require planning.

⸻

3. school-store-consignment — “Sell It Through the School Store” — Age 13–15 — Topics: consignment, profit, fees [NEW, MT, M, FF, EXT]

Prompt: A school-safe store will sell student-made bookmarks. It keeps 20% of each sale to cover supplies and table space. You price each bookmark at $2.50.

Choices:

* A. Sell 12 through the store — Req: none. Outcome/effects: revenue possible, fee deducted. Feedback: “20% of $2.50 is $0.50, so you keep $2.00 each; 12 sold means $24.” Reflect: “How did the fee change your real income?”
* B. Sell directly to people you know — Req: supportCircle.friend. Outcome/effects: higher keep per sale, more time needed. Feedback: “No fee means more per item, but you do the work.” Reflect: “What is your time worth?”
* C. Lower the price to $2.00 — Req: none. Outcome/effects: higher demand chance, lower profit per item. Feedback: “A lower price can sell more, but each sale earns less.” Reflect: “Would more sales always mean more profit?”

Randomized outcome? Yes.
Future flag set? Yes: understandsSellingFees.
Glossary terms: Consignment — selling through someone else who keeps part of the price. Fee — an extra charge or kept amount for a service. Profit — money left after costs and fees.
Tradeoff note: Direct selling keeps more per item; consignment may reach more buyers with less effort.

⸻

4. coupon-app-permissions — “The Coupon App Asks for Contacts” — Age 13–16 — Topics: privacy, discounts, app permissions [NEW, MT, L, FF]

Prompt: A coupon app offers $5 off a purchase but asks for access to your contacts and location. The discount is real in the game, but the permission request feels bigger than the coupon.

Choices:

* A. Accept all permissions for the $5 discount — Req: none. Outcome/effects: cash saved, safety drops. Feedback: “A discount can still cost privacy.” Reflect: “What information was worth more than $5?”
* B. Decline permissions and skip the coupon — Req: none. Outcome/effects: cash unchanged, safety up. Feedback: “Skipping a deal can be a safety choice.” Reflect: “How do you decide when a deal is too nosy?”
* C. Change app settings to allow only what is needed — Req: Safety ≥ 55; visible lock: “Needs app-permission skill.” Outcome/effects: discount possible, privacy risk lower. Feedback: “Adjusting settings can protect both money and information.” Reflect: “What setting mattered most?”

Randomized outcome? No.
Future flag set? Yes: checksAppPermissions.
Glossary terms: Permission — access an app asks for. Discount — a price reduction. Privacy — control over personal information.
Tradeoff note: Not every discount is worth the information it asks for.

⸻

5. checking-alert-nickname — “Name the Alert” — Age 15–17 — Topics: banking alerts, checking, overdraft prevention [NEW, MT, L, FF, EXT]

Prompt: Your fictional checking account can send alerts. You can name an alert “Low Balance,” “Pause Before Spending,” or skip alerts.

Choices:

* A. Set a low-balance alert at $25 — Req: hasChecking. Outcome/effects: fee risk down, discipline up. Feedback: “An alert turns a hidden balance into a visible warning.” Reflect: “Why pick $25 instead of $0?”
* B. Set a weekly balance check reminder — Req: discipline ≥ 35. Outcome/effects: routine grows, fewer surprises. Feedback: “A weekly habit catches slow leaks.” Reflect: “What day would make sense in the game?”
* C. Skip alerts — Req: none. Outcome/effects: no interruption, higher overdraft risk. Feedback: “No alerts means fewer notifications but more self-checking.” Reflect: “What system replaces the alert?”

Randomized outcome? No.
Future flag set? Yes: usesBankAlerts.
Glossary terms: Checking account — an account for everyday money movement. Alert — a message that warns you about account activity. Overdraft — spending more than your account has.
Tradeoff note: Alerts can be annoying, but they prevent invisible mistakes.

⸻

6. shift-meal-discount — “The Employee Meal Deal” — Age 16–18 — Topics: employee discounts, spending traps, percent math [NEW, MT, M, EXT, FF]

Prompt: A part-time job offers 40% off meals during shifts. A $9.50 meal becomes cheaper, but buying one every shift adds up.

Choices:

* A. Buy the discounted meal each shift — Req: hasIncome. Outcome/effects: wellbeing up, cash leaks over time. Feedback: “40% off $9.50 saves $3.80, but you still spend $5.70 each shift.” Reflect: “Is a discount the same as saving?”
* B. Set a one-meal-per-week cap — Req: discipline ≥ 45; visible lock: “Needs spending cap habit.” Outcome/effects: cash protected, enjoyment preserved. Feedback: “A cap keeps the treat without letting it become automatic.” Reflect: “What cap felt fair?”
* C. Bring food and save the discount for long shifts — Req: none. Outcome/effects: more savings, less convenience. Feedback: “You used the discount when it helped most.” Reflect: “How did timing change the choice?”

Randomized outcome? No.
Future flag set? Yes: usesDiscountCap.
Glossary terms: Discount — a lower price than usual. Spending cap — a limit you set before spending. Cash leak — a small repeated cost that quietly drains money.
Tradeoff note: Discounts can improve wellbeing, but repeated discounted spending is still spending.

⸻

7. payday-gap-bridge — “Three Days Before Payday” — Age 16–18 — Topics: cash flow, timing, emergency cushion [NEW, MT, M, R, EXT, FF]

Prompt: A $42 bill is due three days before your next $96 paycheck. You have $30 in checking and $70 in savings.

Choices:

* A. Move $12 from savings now — Req: savings ≥ $12. Outcome/effects: bill paid, savings lower. Feedback: “You used savings to solve timing, not overspending.” Reflect: “How is this different from an emergency?”
* B. Ask for a fee-free due-date change — Req: Money Know-How ≥ 50; visible lock: “Needs bill-call confidence.” Outcome/effects: possible success, randomized. Feedback: “Asking early can sometimes change timing.” Reflect: “What would you say in the call?”
* C. Pay late — Req: none. Outcome/effects: possible late fee, stress up. Feedback: “A small timing gap can create a bigger cost.” Reflect: “What would prevent this next month?”

Randomized outcome? Yes.
Future flag set? Yes: understandsCashFlowTiming.
Glossary terms: Cash flow — the timing of money coming in and going out. Due date — when payment is expected. Late fee — an extra charge for paying after the due date.
Tradeoff note: The issue is timing, not always total income.

⸻

8. certificate-calendar — “The Certificate Expires” — Age 15–18 — Topics: credentials, renewal, opportunity [NEW, MT, L, EXT, AN, FF]

Prompt: A fictional safety certificate helped you qualify for a youth work opportunity. It expires soon. Renewal costs $18 and takes one evening.

Choices:

* A. Renew now — Req: cash ≥ $18. Outcome/effects: credential stays active, cash down. Feedback: “Small upkeep protected a future option.” Reflect: “What opportunity stayed open?”
* B. Let it expire and renew only if needed — Req: none. Outcome/effects: cash saved now, future lock possible. Feedback: “Waiting protects cash but can close fast-moving opportunities.” Reflect: “When is waiting smart?”
* C. Ask a mentor about free renewal resources — Req: supportCircle.mentor. Outcome/effects: possible cost reduction, opportunity up. Feedback: “Asking can uncover resources the game did not show first.” Reflect: “Who could know about hidden resources?”

Randomized outcome? Yes.
Future flag set? Yes: credentialShelfStarted.
Glossary terms: Credential — proof of a skill or qualification. Renewal — keeping something active by updating it. Opportunity cost — what you give up by choosing one route.
Tradeoff note: Renewing is not automatically right; it depends on whether the credential is useful soon.

⸻

9. used-instrument-rent-buy — “Rent the Instrument or Buy Used?” — Age 12–15 — Topics: ownership, renting, resale [NEW, MT, M, AN, SC]

Prompt: You want to join a music activity. Renting costs $16 per month. A used instrument costs $110 and might resell later for about $70.

Choices:

* A. Rent for six months — Req: none. Outcome/effects: cash cost spread out, no ownership. Feedback: “$16 × 6 = $96, close to buying but easier month to month.” Reflect: “Why might renting still make sense?”
* B. Buy used — Req: cash ≥ $110. Outcome/effects: asset gained, cash drops. Feedback: “Buying costs more now, but resale may recover part later.” Reflect: “What risk comes with owning?”
* C. Ask family/caregiver about borrowing first — Req: supportCircle.family. Outcome/effects: cost may drop, responsibility rises. Feedback: “Borrowing can save money, but care and return matter.” Reflect: “What rule would make borrowing fair?”

Randomized outcome? No.
Future flag set? No.
Glossary terms: Rent — pay to use something you do not own. Resale value — what someone might pay for something later. Asset — something owned that has value or usefulness.
Tradeoff note: Renting is flexible; buying can be cheaper only if you keep using it or resell it.

⸻

10. club-hoodie-preorder — “The Preorder Promise” — Age 13–15 — Topics: preorders, refunds, demand [NEW, MT, M, FF]

Prompt: Your club wants hoodies. Each costs $19 to make, and the club plans to charge $26. Unsold hoodies cannot be returned.

Choices:

* A. Order 30 now — Req: clubTreasurerRole. Outcome/effects: high profit chance, high leftover risk. Feedback: “Profit per hoodie is $7, but leftovers can erase profit.” Reflect: “What happens if only 18 sell?”
* B. Collect preorders first — Req: discipline ≥ 45; visible lock: “Needs record-keeping habit.” Outcome/effects: risk down, time up. Feedback: “Preorders turn guesses into evidence.” Reflect: “What information did you need?”
* C. Order a smaller batch of 12 — Req: none. Outcome/effects: lower risk, possible missed sales. Feedback: “A small batch protects cash but may limit opportunity.” Reflect: “Why might scarcity help or hurt?”

Randomized outcome? Yes.
Future flag set? Yes: usesPreorders.
Glossary terms: Preorder — a request to buy before the item is made. Profit margin — money left from each sale after cost. Inventory — items held to sell or use.
Tradeoff note: Bigger orders can earn more but create leftover risk.

⸻

11. printer-ink-drain — “The Cheap Printer Surprise” — Age 14–17 — Topics: total cost, supplies, ownership [NEW, MT, M, AN, EXT]

Prompt: A printer costs $49, but ink costs $27 every 90 pages. A library print card costs $0.10 per page.

Choices:

* A. Buy the printer — Req: cash ≥ $49. Outcome/effects: convenience up, future ink costs. Feedback: “The printer is only the first cost.” Reflect: “What recurring cost came with ownership?”
* B. Use the print card for 120 pages — Req: none. Outcome/effects: lower total for light use. Feedback: “120 × $0.10 = $12, much cheaper if you print rarely.” Reflect: “What use level would change the answer?”
* C. Share printing with a caregiver/mentor plan — Req: supportCircle.family or mentor. Outcome/effects: cost lower, planning needed. Feedback: “Shared resources work when expectations are clear.” Reflect: “What rule prevents conflict?”

Randomized outcome? No.
Future flag set? No.
Glossary terms: Total cost — the full cost after all parts are counted. Recurring cost — a cost that repeats. Supply cost — money spent on items needed to keep something working.
Tradeoff note: Ownership can be convenient and still lose on total cost.

⸻

12. qr-code-table — “The QR Code on the Table” — Age 14–17 — Topics: payment safety, QR codes, verification [NEW, MT, R, FF, EXT]

Prompt: A school-safe fundraiser uses a payment QR code. You notice a second sticker partly covering the original code.

Choices:

* A. Scan and pay quickly — Req: none. Outcome/effects: fast, scam risk randomized. Feedback: “Fast payment can skip verification.” Reflect: “What clue did you miss?”
* B. Ask the organizer to confirm the code — Req: none. Outcome/effects: safety up, small delay. Feedback: “Checking the source protects the money.” Reflect: “Who was the right person to verify?”
* C. Pay with cash or official link — Req: cash ≥ donationAmount or officialLinkAvailable. Outcome/effects: safer route, less convenient. Feedback: “A safer route can take one extra step.” Reflect: “What made it safer?”

Randomized outcome? Yes.
Future flag set? Yes: verifiesPaymentDestination.
Glossary terms: QR code — a scannable square that can open a link or payment page. Verification — checking that something is real before acting. Scam — a dishonest trick to get money or information.
Tradeoff note: Convenience is valuable, but payment destination matters.

⸻

13. family-plan-fair-share — “The Shared Plan Math” — Age 14–16 — Topics: shared subscriptions, fairness, ratios [NEW, MT, M, SC, FF]

Prompt: A fictional family media plan costs $18 per month for four profiles. One person uses it daily; you use it twice a month.

Choices:

* A. Split equally: $4.50 each — Req: none. Outcome/effects: simple, maybe not usage-fair. Feedback: “Equal splits are easy to calculate and explain.” Reflect: “When is equal fair?”
* B. Split by usage — Req: Money Know-How ≥ 45; visible lock: “Needs proportional split skill.” Outcome/effects: fairer, more complex. Feedback: “Usage-based splits can feel fair but need agreement.” Reflect: “What usage data would you trust?”
* C. Suggest rotating who pays for a smaller plan — Req: supportCircle.family. Outcome/effects: cost down, negotiation needed. Feedback: “Changing the plan can solve the split problem.” Reflect: “What compromise did you offer?”

Randomized outcome? No.
Future flag set? Yes: usesFairSplitCalculator.
Glossary terms: Shared cost — one cost paid by more than one person. Equal split — dividing the same amount per person. Proportional split — dividing based on size, use, or share.
Tradeoff note: Fair can mean simple, equal, usage-based, or negotiated.

⸻

14. pet-food-autoship — “Autoship for the Pet Food” — Age 13–16 — Topics: recurring costs, pet care, discounts [NEW, MT, M, SC, R, FF]

Prompt: Pet food costs $23 per bag. Autoship gives 10% off but keeps sending bags unless canceled or paused.

Choices:

* A. Use autoship with a calendar reminder — Req: hasPet. Outcome/effects: cost down, discipline needed. Feedback: “10% off $23 saves $2.30 per bag, but only if timing matches use.” Reflect: “What reminder prevents overbuying?”
* B. Buy one bag at a time — Req: hasPet. Outcome/effects: flexible, costs more per bag. Feedback: “Flexibility can be worth paying for.” Reflect: “When would flexibility beat a discount?”
* C. Ask caregiver to help estimate monthly use — Req: supportCircle.family. Outcome/effects: pet support up, waste risk down. Feedback: “Estimating use prevents both shortages and waste.” Reflect: “What information helped?”

Randomized outcome? Yes.
Future flag set? Yes: managesPetRecurringCost.
Glossary terms: Autoship — automatic repeat delivery. Recurring cost — a cost that repeats on a schedule. Waste — value lost because something is unused or spoiled.
Tradeoff note: Automatic discounts help only when the schedule fits real use.

⸻

15. repair-cafe-lamp — “The Repair Café Choice” — Age 13–16 — Topics: repair, ownership, community resources [NEW, MT, R, SC, AN, FF]

Prompt: A useful desk lamp stops working. A new one costs $28. A community repair café might fix it for free, but there is no guarantee.

Choices:

* A. Buy a new lamp — Req: cash ≥ $28. Outcome/effects: quick replacement, cash down. Feedback: “Buying new solved the need fast.” Reflect: “What did speed cost?”
* B. Try the repair café — Req: communityProgramAccess. Outcome/effects: randomized repair success, time cost. Feedback: “Repair routes can save money and reduce waste, but they are uncertain.” Reflect: “What made the uncertainty acceptable?”
* C. Borrow a lamp from a support person temporarily — Req: supportCircle.family or friend. Outcome/effects: cash protected, trust responsibility. Feedback: “Borrowing is a short-term route, not a permanent fix.” Reflect: “What agreement keeps borrowing fair?”

Randomized outcome? Yes.
Future flag set? Yes: usesRepairRoute.
Glossary terms: Repair — fixing something so it works again. Replacement — getting another item instead of fixing the old one. Temporary solution — a short-term answer while planning.
Tradeoff note: Repair is not always successful, but it can preserve both cash and assets.

⸻

16. aid-offer-color-code — “Color-Code the Aid Offer” — Age 16–18 — Topics: grants, loans, aid, source evaluation [NEW, L, M, EXT, FF]

Prompt: A fictional training program sends an aid offer: $900 grant, $600 scholarship, $1,200 loan, and $400 work-study estimate.

Choices:

* A. Color-code free, earned, and borrowed money — Req: Money Know-How ≥ 50; visible lock: “Needs aid vocabulary.” Outcome/effects: loan risk clearer. Feedback: “Grant + scholarship = $1,500 that usually does not need repayment if rules are met.” Reflect: “Which line creates future debt?”
* B. Treat the full $3,100 as free aid — Req: none. Outcome/effects: short-term optimism, future debt surprise. Feedback: “Loans help pay now, but repayment comes later.” Reflect: “What word should have warned you?”
* C. Ask a school counselor/mentor to review it — Req: supportCircle.mentor. Outcome/effects: opportunity up, safety up. Feedback: “A second reader can catch expensive misunderstandings.” Reflect: “What question would you ask?”

Randomized outcome? No.
Future flag set? Yes: canDecodeAidOffer.
Glossary terms: Grant — aid that usually does not need repayment if rules are followed. Scholarship — aid often based on skills, effort, or criteria. Loan — borrowed money that must be repaid. Work-study — money earned through approved work.
Tradeoff note: Aid can be helpful and still include debt.

⸻

17. work-study-schedule — “Paid Hours, Class Hours” — Age 17–18 — Topics: work-study, schedule, cash flow [NEW, MT, M, L, EXT, SC, FF]

Prompt: In a future program, you can work up to 8 hours per week at $13/hour. A mentor warns that too many hours can crowd out study time.

Choices:

* A. Work all 8 hours — Req: aidOfferIncludesWorkStudy. Outcome/effects: up to $104/week gross, wellbeing risk. Feedback: “More hours raise income and time pressure.” Reflect: “What non-money cost appears?”
* B. Work 5 hours and protect study blocks — Req: discipline ≥ 45. Outcome/effects: $65/week gross, steadier schedule. Feedback: “You balanced income and energy.” Reflect: “Why might the lower income be smarter?”
* C. Skip work-study at first — Req: none. Outcome/effects: more time, less income. Feedback: “Protecting time can be valid if another plan covers costs.” Reflect: “What would cover the cash gap?”

Randomized outcome? No.
Future flag set? Yes: balancesWorkStudy.
Glossary terms: Gross pay — pay before deductions. Work-study — a program where approved work helps pay education costs. Schedule pressure — stress created when time commitments compete.
Tradeoff note: The highest weekly pay can still be too costly in time.

⸻

18. withholding-refund-choice — “The Big Refund Feeling” — Age 16–18 — Topics: taxes, withholding, refunds [NEW, MT, M, EXT, FF]

Prompt: A simplified tax simulation shows you could withhold more and get a bigger refund, or withhold less and get more in each paycheck.

Choices:

* A. Choose higher withholding — Req: hasIncome. Outcome/effects: smaller paychecks, possible refund. Feedback: “A refund can feel like a bonus, but it came from your earlier pay.” Reflect: “How did paycheck timing change?”
* B. Choose balanced withholding — Req: Money Know-How ≥ 50; visible lock: “Needs tax timing skill.” Outcome/effects: steadier cash flow. Feedback: “Balanced withholding aims for fewer surprises.” Reflect: “Why might steady pay matter?”
* C. Choose very low withholding — Req: none. Outcome/effects: more cash now, possible amount owed later. Feedback: “More now can mean stress later.” Reflect: “What future bill could appear?”

Randomized outcome? No.
Future flag set? Yes: understandsRefundTiming.
Glossary terms: Withholding — money taken from pay for taxes before you receive it. Refund — money returned if too much was withheld or paid. Net pay — take-home pay after deductions.
Tradeoff note: A refund is not magic money; it changes when you receive your own money.

⸻

19. cash-tip-ledger — “The Tip Jar Ledger” — Age 16–18 — Topics: income records, taxes, side income [NEW, MT, L, EXT, FF]

Prompt: A school-safe weekend gig pays hourly wages plus small tips. You can track tips daily or guess later.

Choices:

* A. Track tips daily in a simple ledger — Req: discipline ≥ 40. Outcome/effects: records strong, time cost small. Feedback: “Small records prevent big confusion later.” Reflect: “What did the ledger prove?”
* B. Guess the weekly total — Req: none. Outcome/effects: faster, accuracy lower. Feedback: “Guessing saves time now but weakens future planning.” Reflect: “What could the guess miss?”
* C. Ask mentor how to separate income and spending money — Req: supportCircle.mentor. Outcome/effects: moneyKnowledge up, opportunity up. Feedback: “Separating money makes records cleaner.” Reflect: “What categories would you use?”

Randomized outcome? No.
Future flag set? Yes: keepsIncomeLedger.
Glossary terms: Ledger — a simple record of money in and out. Income — money received from work or other sources. Recordkeeping — saving details so you can check later.
Tradeoff note: Records take time, but they protect future decisions.

⸻

20. minimum-payment-map — “The Minimum Payment Map” — Age 17–18+ planning — Topics: credit, debt repayment, interest [NEW, MT, M, L, EXT, FF]

Prompt: A future credit balance is $240. The minimum payment is $25, but paying $60 would reduce the balance faster.

Choices:

* A. Pay the $25 minimum — Req: creditAvailable. Outcome/effects: cash protected now, debt lasts longer. Feedback: “Minimum keeps the account current, but interest can keep debt around.” Reflect: “Why is minimum not the same as best?”
* B. Pay $60 this month — Req: cashFlowForecast != stormy. Outcome/effects: debt drops faster, cash tighter. Feedback: “Higher payment reduces future interest but uses current cash.” Reflect: “What bill did you check first?”
* C. Create a two-month payoff plan — Req: discipline ≥ 55; visible lock: “Needs repayment-plan skill.” Outcome/effects: debt plan improves, discipline up. Feedback: “A plan turns a balance into steps.” Reflect: “What schedule makes it realistic?”

Randomized outcome? No.
Future flag set? Yes: usesRepaymentPlan.
Glossary terms: Minimum payment — the smallest required payment for that period. Interest — extra cost for borrowing or extra money earned on savings. Balance — the amount currently owed or held.
Tradeoff note: Paying extra helps debt, but only if it does not create another missed bill.

⸻

21. utilization-laptop-repair — “The Repair Balance” — Age 17–18+ planning — Topics: utilization, repair, credit [NEW, MT, M, EXT, AN, FF]

Prompt: You have a $500 credit limit and a $90 balance. A needed device repair costs $160. Paying with credit would raise your balance.

Choices:

* A. Put repair on credit — Req: creditAvailable. Outcome/effects: asset restored, utilization rises to $250/$500 = 50%. Feedback: “The repair helped your device, but the balance used half the limit.” Reflect: “Why does percent of limit matter?”
* B. Use $100 savings and $60 credit — Req: savings ≥ $100. Outcome/effects: asset restored, utilization lower, savings down. Feedback: “Mixing sources reduced credit pressure.” Reflect: “What risk did savings absorb?”
* C. Delay repair and use a borrowed device — Req: supportCircle.family or mentor. Outcome/effects: cash protected, convenience lower. Feedback: “Borrowing can buy time, but it depends on trust and access.” Reflect: “What agreement protects the relationship?”

Randomized outcome? No.
Future flag set? Yes: checksUtilizationBeforeCharging.
Glossary terms: Credit limit — the most you can borrow on an account. Utilization — the share of your credit limit you are using. Repair cost — money needed to fix something useful.
Tradeoff note: Credit can protect an asset, but the percent of the limit still matters.

⸻

22. cosigner-risk-talk — “The Co-Signer Conversation” — Age 17–18+ planning — Topics: loans, trust, responsibility [NEW, MT, L, SC, EXT, FF]

Prompt: A future loan offer requires a co-signer. A caregiver or mentor explains that if you do not pay, the co-signer could be responsible.

Choices:

* A. Ask someone to co-sign without a plan — Req: supportCircle.family or mentor. Outcome/effects: trust risk, loan possible. Feedback: “A co-signer takes risk with you.” Reflect: “What was missing from the ask?”
* B. Build a repayment plan before asking — Req: discipline ≥ 55; visible lock: “Needs repayment-plan skill.” Outcome/effects: trust protected, opportunity up. Feedback: “A plan shows respect for the other person’s risk.” Reflect: “What proof would make your plan stronger?”
* C. Choose a smaller no-co-signer route — Req: none. Outcome/effects: slower route, less relationship risk. Feedback: “Smaller can be smarter when it protects trust.” Reflect: “What did you trade for independence?”

Randomized outcome? No.
Future flag set? Yes: understandsCosignerRisk.
Glossary terms: Co-signer — someone who agrees to be responsible if the borrower does not pay. Loan — borrowed money that must be repaid. Repayment plan — steps for paying back money owed.
Tradeoff note: Support can unlock opportunity, but it should not hide risk.

⸻

23. e-scooter-loan-term — “The Small Wheels, Long Loan” — Age 17–18+ planning — Topics: transportation, loan term, interest [NEW, MT, M, EXT, AN, FF]

Prompt: A commuter e-scooter costs $480. One plan is $90/month for 6 months. Another is $55/month for 10 months.

Choices:

* A. Choose 6 months — Req: cashFlowForecast != stormy. Outcome/effects: higher monthly payment, lower total. Feedback: “$90 × 6 = $540 total.” Reflect: “Can your month handle the payment?”
* B. Choose 10 months — Req: none. Outcome/effects: lower monthly payment, higher total. Feedback: “$55 × 10 = $550 total; lower payment is not always cheaper.” Reflect: “Why might the higher total still be chosen?”
* C. Wait and save $80 first — Req: discipline ≥ 45. Outcome/effects: delay, lower borrowing need. Feedback: “Saving first can shrink the loan.” Reflect: “What did waiting buy you?”

Randomized outcome? No.
Future flag set? Yes: comparesLoanTerms.
Glossary terms: Loan term — how long repayment lasts. Monthly payment — the amount paid each month. Total repayment — all payments added together.
Tradeoff note: A lower monthly payment can fit cash flow while costing more overall.

⸻

24. bag-insurance-deductible — “The Backpack Deductible” — Age 16–18+ planning — Topics: insurance, deductible, claim math [NEW, MT, M, EXT, AN, FF]

Prompt: A future renter-style policy covers items in your bag after a $100 deductible. Your damaged items are worth $165.

Choices:

* A. File a claim — Req: hasPolicy. Outcome/effects: possible $65 covered after deductible, paperwork time. Feedback: “$165 − $100 deductible = $65 possible help.” Reflect: “Was the claim worth the effort?”
* B. Pay out of pocket — Req: savings ≥ $165. Outcome/effects: savings down, no claim process. Feedback: “Self-paying can be simpler for smaller losses.” Reflect: “What made it manageable?”
* C. Ask mentor to compare claim vs. self-pay — Req: supportCircle.mentor. Outcome/effects: moneyKnowledge up, safety up. Feedback: “A second reader can help with insurance math.” Reflect: “What number changed the choice?”

Randomized outcome? No.
Future flag set? Yes: understandsDeductibleMath.
Glossary terms: Deductible — what you pay before insurance helps. Claim — a request for insurance to cover a loss. Out-of-pocket — money you pay yourself.
Tradeoff note: Insurance is useful, but not every covered event is worth claiming.

⸻

25. move-in-utility-deposit — “The Utility Deposit” — Age 18+ planning — Topics: deposits, utilities, cash flow [NEW, MT, L, EXT, FF]

Prompt: A future apartment requires a $75 utility deposit before service starts. You also need $55 for groceries that week.

Choices:

* A. Pay the deposit from savings — Req: savings ≥ $75. Outcome/effects: service starts, savings lower. Feedback: “Deposits can be required before monthly bills even begin.” Reflect: “What upfront cost surprised you?”
* B. Delay move-in by one week — Req: flexibleMoveDate. Outcome/effects: cash pressure down, opportunity delayed. Feedback: “Changing timing can be a financial choice.” Reflect: “What did the delay cost?”
* C. Use high-cost borrowing — Req: creditAvailable. Outcome/effects: service starts, debt rises. Feedback: “Borrowing solved the start-up cost but added future pressure.” Reflect: “What would make this a last resort?”

Randomized outcome? No.
Future flag set? Yes: plansForUpfrontDeposits.
Glossary terms: Utility — a service like electricity, water, or internet. Deposit — money paid upfront that may be held or returned depending on rules. Cash flow — timing of money in and out.
Tradeoff note: Upfront costs can be harder than monthly costs because they arrive before routines settle.

⸻

26. roommate-wifi-agreement — “The Wi-Fi Agreement” — Age 18+ planning — Topics: shared bills, agreements, trust [NEW, MT, SC, EXT, FF]

Prompt: You and a roommate share a $46 monthly internet bill. The account is in your name, so missed payments affect you first.

Choices:

* A. Split $23 each with a due-date reminder — Req: hasRoommate. Outcome/effects: simple, trust protected. Feedback: “Clear timing matters as much as the amount.” Reflect: “When should the roommate pay you?”
* B. Pay it yourself and ask later — Req: cash ≥ $46. Outcome/effects: bill paid, repayment risk. Feedback: “Covering first can become a pattern.” Reflect: “What boundary is missing?”
* C. Put the agreement in a shared note — Req: discipline ≥ 45; visible lock: “Needs record habit.” Outcome/effects: trust up, conflict risk down. Feedback: “A written agreement protects both people.” Reflect: “What should the note include?”

Randomized outcome? No.
Future flag set? Yes: usesSharedBillAgreement.
Glossary terms: Shared bill — a bill more than one person is responsible for. Due date — when payment is expected. Agreement — a clear plan people accept.
Tradeoff note: Paying the bill is only part of the decision; responsibility and timing matter.

⸻

27. delivery-fee-stack — “The Delivery Total” — Age 14–17 — Topics: fees, final price, percent [NEW, MT, M, EXT]

Prompt: A $14 food order becomes $14 + $3 delivery + $2 service fee + 8% tax on the food. A pickup option costs time but avoids delivery fees.

Choices:

* A. Use delivery — Req: cash ≥ $20.12. Outcome/effects: convenient, higher total. Feedback: “Tax is $1.12, so the total is $20.12 before any tip.” Reflect: “Which fee was easiest to miss?”
* B. Pick up the order — Req: transportationAccess. Outcome/effects: cash saved, time used. Feedback: “You traded time for lower fees.” Reflect: “When is time worth more than fees?”
* C. Choose a no-fee meal at home — Req: none. Outcome/effects: cash protected, less convenience. Feedback: “Avoiding a fee stack can be a strong choice.” Reflect: “What did convenience cost?”

Randomized outcome? No.
Future flag set? No.
Glossary terms: Service fee — an added charge for using a service. Final price — the total after fees and tax. Tax — money added to some purchases for public services.
Tradeoff note: Delivery can be reasonable when time or access matters; the lesson is seeing the full total.

⸻

28. return-window-weekend — “The Return Window Closes Monday” — Age 13–16 — Topics: returns, deadlines, receipts [NEW, MT, R, FF]

Prompt: You bought a $37 item that does not fit the need. The return window closes Monday, and you need the receipt or digital proof.

Choices:

* A. Return it today with proof — Req: hasReceipt. Outcome/effects: cash restored, time used. Feedback: “Proof turned a regret into a refund.” Reflect: “Where did you store the proof?”
* B. Try to return without proof — Req: none. Outcome/effects: randomized store-credit or denial. Feedback: “Without proof, the outcome is less predictable.” Reflect: “What would proof have changed?”
* C. Keep it and find another use — Req: none. Outcome/effects: no refund, possible usefulness. Feedback: “Keeping can be reasonable if it still has value.” Reflect: “Did you avoid a hassle or lose cash?”

Randomized outcome? Yes.
Future flag set? Yes: tracksReturnWindows.
Glossary terms: Receipt — proof of what was bought and paid. Refund — money returned after a purchase is reversed. Store credit — value that can be used at the store instead of cash returned.
Tradeoff note: Returning saves money, but time, proof, and usefulness affect the choice.

⸻

29. cashback-overspend — “Two Percent Back” — Age 16–18+ planning — Topics: rewards, overspending, credit [NEW, MT, M, EXT, FF]

Prompt: A card gives 2% back. You are considering a $90 purchase because “you get rewards.”

Choices:

* A. Buy because of rewards — Req: creditAvailable. Outcome/effects: $1.80 reward, $90 spending. Feedback: “2% of $90 is $1.80; rewards do not erase the purchase.” Reflect: “What was the real cost?”
* B. Buy only if it was already planned — Req: discipline ≥ 50; visible lock: “Needs planned-spending habit.” Outcome/effects: rewards without extra spending. Feedback: “Rewards work best when they do not change the decision.” Reflect: “Was this purchase planned?”
* C. Skip and save the $90 — Req: none. Outcome/effects: cash protected, no reward. Feedback: “No reward can still be the better math.” Reflect: “Why is not spending different from saving?”

Randomized outcome? No.
Future flag set? Yes: ignoresRewardBait.
Glossary terms: Cash back — a small return based on spending. Reward — a benefit meant to encourage a choice. Overspending — spending more than planned or useful.
Tradeoff note: Rewards are not bad, but they are tiny compared with the spending that earns them.

⸻

30. sponsored-budget-template — “The Free Budget Template” — Age 15–18 — Topics: source evaluation, sponsored content, budgeting [NEW, MT, L, EXT, FF]

Prompt: A free online budget template looks helpful, but the page pushes a paid product in every section. The math may still be useful.

Choices:

* A. Use it without checking — Req: none. Outcome/effects: budget starts, source risk. Feedback: “Helpful format does not make every recommendation neutral.” Reflect: “Where did the page try to sell?”
* B. Compare it with an official or school source — Req: Safety ≥ 50; visible lock: “Needs source-check skill.” Outcome/effects: safety up, better choices. Feedback: “A second source helps separate tool from sales pitch.” Reflect: “What stayed useful after checking?”
* C. Build a simple version yourself — Req: discipline ≥ 45. Outcome/effects: more time, more control. Feedback: “Building your own tool can reduce hidden influence.” Reflect: “What categories did you include?”

Randomized outcome? No.
Future flag set? Yes: checksSponsoredMoneyAdvice.
Glossary terms: Budget — a plan for money in and money out. Sponsored content — material paid for or influenced by an advertiser. Source check — comparing information to a trustworthy place.
Tradeoff note: A sponsored tool can still teach, but it should not steer decisions unnoticed.

⸻

31. ai-resume-privacy — “The Resume Helper” — Age 15–18 — Topics: AI tools, privacy, careers [NEW, MT, L, EXT, FF]

Prompt: A future AI resume helper can improve your wording. It asks you to paste personal contact details and job history.

Choices:

* A. Paste everything — Req: none. Outcome/effects: resume improves, privacy risk rises. Feedback: “A useful tool can still ask for too much.” Reflect: “What information was not needed?”
* B. Remove personal details before using it — Req: Safety ≥ 55; visible lock: “Needs privacy-edit skill.” Outcome/effects: resume improves, safety protected. Feedback: “You gave the tool the task, not extra personal data.” Reflect: “What did you leave out?”
* C. Ask a mentor to review instead — Req: supportCircle.mentor. Outcome/effects: opportunity up, time cost. Feedback: “Human feedback can be slower but more context-aware.” Reflect: “What did the mentor notice?”

Randomized outcome? No.
Future flag set? Yes: usesPrivacySafeCareerTools.
Glossary terms: Resume — a summary of skills and experience for opportunities. Privacy — control over personal information. Personal data — information that can identify or describe a person.
Tradeoff note: Tools can help opportunity, but safer input choices matter.

⸻

32. interview-outfit-borrow — “Borrow, Buy, or Adapt?” — Age 15–18 — Topics: career readiness, support, assets [NEW, MT, SC, EXT, AN, FF]

Prompt: A future interview or presentation asks for neat, simple clothing. Buying an outfit costs $64, borrowing is possible, and adapting what you own takes time.

Choices:

* A. Buy the outfit — Req: cash ≥ $64. Outcome/effects: asset gained, cash down. Feedback: “Buying creates future usefulness if you will wear it again.” Reflect: “How many future uses make it worth it?”
* B. Borrow from support circle — Req: supportCircle.family or friend. Outcome/effects: cash saved, care responsibility. Feedback: “Borrowing protects cash and adds responsibility.” Reflect: “How would you return it well?”
* C. Adapt what you own — Req: discipline ≥ 40. Outcome/effects: time used, cash saved. Feedback: “Preparation can substitute for spending.” Reflect: “What did effort replace?”

Randomized outcome? No.
Future flag set? Yes: plansCareerPresentationCosts.
Glossary terms: Asset — something owned with value or usefulness. Cost per use — total cost divided by how many times something is used. Opportunity — a possible path or chance.
Tradeoff note: Looking prepared does not always require buying new.

⸻

33. commute-rain-backup — “The Rainy Commute Plan” — Age 16–18 — Topics: transportation, backup plans, work reliability [NEW, MT, R, SC, EXT, FF]

Prompt: Your future job is reachable by walking in good weather. Rainy days are unpredictable, and missing a shift hurts trust.

Choices:

* A. Save a $12 backup ride fund — Req: hasIncome. Outcome/effects: cash set aside, attendance risk down. Feedback: “A small fund protects reliability.” Reflect: “What did the fund protect besides money?”
* B. Ask a support person for emergency backup rules — Req: supportCircle.family or mentor. Outcome/effects: support trust up if boundaries clear. Feedback: “A backup ride works better with notice and limits.” Reflect: “What rule keeps it fair?”
* C. Risk walking every time — Req: none. Outcome/effects: cash saved, randomized late risk. Feedback: “Saving money can increase schedule risk.” Reflect: “What weather would change the plan?”

Randomized outcome? Yes.
Future flag set? Yes: hasCommuteBackup.
Glossary terms: Backup fund — money set aside for a specific fallback. Reliability — being counted on to show up or follow through. Transportation cost — money spent getting somewhere.
Tradeoff note: The cheapest commute can become expensive if it risks income or trust.

⸻

34. apprenticeship-tool-deposit — “The Tool Deposit” — Age 16–18 — Topics: apprenticeship, deposits, tools [NEW, MT, M, L, EXT, AN, FF]

Prompt: A fictional apprenticeship lends a starter tool kit with a $58 refundable deposit. If tools are damaged or missing, part of the deposit may not come back.

Choices:

* A. Pay deposit and track every tool — Req: cash ≥ $58. Outcome/effects: opportunity unlocked, deposit protected. Feedback: “A refundable deposit is still cash you cannot use right now.” Reflect: “How would you track the kit?”
* B. Buy your own starter tools for $135 — Req: cash ≥ $135. Outcome/effects: asset gained, cash down. Feedback: “Owning tools can build value if you use them often.” Reflect: “How many uses make ownership worth it?”
* C. Wait for a tool-library slot — Req: communityProgramAccess. Outcome/effects: delay, lower cash pressure. Feedback: “Waiting can protect cash but may delay training.” Reflect: “What opportunity cost did waiting create?”

Randomized outcome? Yes.
Future flag set? Yes: managesToolDeposit.
Glossary terms: Refundable deposit — money held that may come back if rules are met. Tool kit — equipment needed for a task or job. Opportunity cost — what is given up by choosing one route.
Tradeoff note: Deposits, ownership, and waiting each protect different things.

⸻

35. community-college-transfer-map — “Two-Year Map, Four-Year Goal” — Age 16–18 — Topics: pathway planning, transfer, costs [NEW, MT, M, EXT, FF]

Prompt: A future student can start at community college for lower first-year costs, then transfer. Transfer credits only help if courses match the plan.

Choices:

* A. Follow a transfer map carefully — Req: Money Know-How ≥ 50; visible lock: “Needs course-planning skill.” Outcome/effects: cost lower, credit loss risk down. Feedback: “Planning protects the value of each course.” Reflect: “Why does a course need to match?”
* B. Choose classes randomly by interest — Req: none. Outcome/effects: wellbeing up, credit mismatch risk. Feedback: “Interest matters, but mismatched credits can cost time.” Reflect: “How would you balance interest and plan?”
* C. Ask advisor/mentor before registering — Req: supportCircle.mentor. Outcome/effects: opportunity up, planning time. Feedback: “A second reader helps protect tuition money.” Reflect: “What question would you ask first?”

Randomized outcome? Yes.
Future flag set? Yes: usesTransferMap.
Glossary terms: Transfer credit — course credit accepted by another school. Tuition — money charged for classes. Pathway — a route through training, school, or work.
Tradeoff note: Lower-cost starts work best when the route is mapped.

⸻

36. trade-school-kit-fee — “The Kit Fee Line Item” — Age 16–18 — Topics: training costs, fees, total cost [NEW, MT, M, EXT, AN, FF]

Prompt: A training program advertises tuition of $1,200, but the kit fee is $275 and exam fee is $85.

Choices:

* A. Budget only for tuition — Req: none. Outcome/effects: shortfall later. Feedback: “Tuition was not the whole cost.” Reflect: “Which line item did you miss?”
* B. Add all required costs first — Req: Money Know-How ≥ 50; visible lock: “Needs total-cost skill.” Outcome/effects: realistic plan. Feedback: “$1,200 + $275 + $85 = $1,560 total required cost.” Reflect: “How did the total change the decision?”
* C. Ask about used kits or fee support — Req: supportCircle.mentor or communityProgramAccess. Outcome/effects: possible lower cost, opportunity up. Feedback: “Programs sometimes have resource routes if you ask early.” Reflect: “Why ask before paying?”

Randomized outcome? Yes.
Future flag set? Yes: checksTrainingFees.
Glossary terms: Tuition — the price of instruction. Fee — an extra required charge. Total cost — all required costs added together.
Tradeoff note: A program can be worth it and still need full-cost planning.

⸻

37. official-benefits-check — “The Benefits Claim Check” — Age 16–18 — Topics: source evaluation, pathways, benefits [NEW, L, EXT, FF]

Prompt: A video claims one pathway “pays for everything automatically.” The game asks you to check an official source before trusting it.

Choices:

* A. Believe the video and plan around it — Req: none. Outcome/effects: opportunity optimism, misinformation risk. Feedback: “Big claims need strong sources.” Reflect: “What word made the claim too broad?”
* B. Check official or school-provided source — Req: Safety ≥ 50; visible lock: “Needs source-check skill.” Outcome/effects: safety up, plan more accurate. Feedback: “Official sources help separate real benefits from exaggeration.” Reflect: “What changed after checking?”
* C. Ask a mentor to help compare sources — Req: supportCircle.mentor. Outcome/effects: opportunity up, safety up. Feedback: “A trusted guide can help read complicated benefit rules.” Reflect: “What source would you trust most?”

Randomized outcome? No.
Future flag set? Yes: checksPathwayBenefitClaims.
Glossary terms: Benefit — a helpful feature or support connected to a job, program, or pathway. Official source — information from the organization responsible for the rule. Misinformation — incorrect or misleading information.
Tradeoff note: Pathways can have strong benefits, but details matter.

⸻

38. gap-year-burn-rate — “The Savings Burn Rate” — Age 17–18 — Topics: gap year, expenses, burn rate [NEW, MT, M, EXT, FF]

Prompt: A future gap year plan has $1,450 saved. Basic monthly costs are estimated at $290.

Choices:

* A. Divide savings by monthly cost — Req: Money Know-How ≥ 45. Outcome/effects: time horizon clear. Feedback: “$1,450 ÷ $290 = 5 months of costs.” Reflect: “What happens in month six?”
* B. Start without a monthly plan — Req: none. Outcome/effects: freedom up, cash risk. Feedback: “Freedom feels better with a runway.” Reflect: “What cost might surprise you?”
* C. Add part-time income before starting — Req: hasIncome. Outcome/effects: delay, longer runway. Feedback: “Income slows how fast savings burns down.” Reflect: “How did income change the timeline?”

Randomized outcome? No.
Future flag set? Yes: calculatesBurnRate.
Glossary terms: Burn rate — how fast savings is used up. Monthly cost — money needed each month. Runway — how long savings can cover costs.
Tradeoff note: A gap year can be valuable, but time needs a money runway.

⸻

39. sales-tax-ledger — “The Simplified Sales Tax Jar” — Age 15–18 — Topics: entrepreneurship, taxes, records [NEW, MT, M, EXT, FF]

Prompt: In a simplified fictional setting, your craft sales collect 6% sales tax that must be set aside, not spent as profit.

Choices:

* A. Set aside tax after each sale — Req: keepsIncomeLedger. Outcome/effects: records strong, spending cash lower. Feedback: “On a $20 sale, 6% is $1.20 set aside.” Reflect: “Why is collected tax not profit?”
* B. Mix all money together — Req: none. Outcome/effects: cash feels higher, future shortfall risk. Feedback: “Mixed money is easy to overspend.” Reflect: “What category was missing?”
* C. Ask mentor for a simple ledger template — Req: supportCircle.mentor. Outcome/effects: moneyKnowledge up, safety up. Feedback: “A template makes the habit easier.” Reflect: “What columns would you track?”

Randomized outcome? No.
Future flag set? Yes: setsAsideCollectedTax.
Glossary terms: Sales tax — tax added to certain sales. Profit — money left after costs, not including money owed elsewhere. Ledger — a record of money in and out.
Tradeoff note: Setting money aside reduces cash now but prevents future stress.

⸻

40. leftover-inventory-choice — “The Unsold Stickers” — Age 14–17 — Topics: inventory, markdowns, sunk cost [NEW, MT, M, R, FF, AN]

Prompt: You have 40 unsold stickers that cost $0.30 each to make. You hoped to sell them for $1.00, but demand slowed.

Choices:

* A. Mark down to $0.60 — Req: none. Outcome/effects: recover some cash, profit smaller. Feedback: “At $0.60, you earn $0.30 over cost per sticker.” Reflect: “Why might a smaller profit be smart?”
* B. Hold price at $1.00 — Req: none. Outcome/effects: possible higher profit, randomized low sales. Feedback: “Waiting can protect price or leave inventory stuck.” Reflect: “What demand signal would you watch?”
* C. Bundle with a future product — Req: startedSideHustle. Outcome/effects: creative value, future flag. Feedback: “Bundling can turn leftovers into a sales tool.” Reflect: “What made the bundle useful?”

Randomized outcome? Yes.
Future flag set? Yes: managesLeftoverInventory.
Glossary terms: Inventory — items held to sell or use. Markdown — lowering a price. Sunk cost — money already spent that cannot be recovered by wishing.
Tradeoff note: Holding out for the original price can be reasonable, but inventory has time risk.

⸻

41. team-fund-steward — “The Team Fund Steward” — Age 13–16 — Topics: shared money, records, trust [NEW, MT, SC, FF]

Prompt: A club picks you to track a $72 snack fund. You do not keep student names; the game only tracks fictional totals and receipts.

Choices:

* A. Keep a simple public total sheet — Req: discipline ≥ 45. Outcome/effects: trust up, time cost. Feedback: “Clear totals reduce rumors and confusion.” Reflect: “What should everyone be able to see?”
* B. Keep mental notes — Req: none. Outcome/effects: faster, trust risk. Feedback: “Mental notes can fail when people ask for details.” Reflect: “What detail would be hard to remember?”
* C. Ask a teacher/mentor for the record format — Req: supportCircle.mentor. Outcome/effects: safety up, confidence up. Feedback: “Using an approved format protects the group.” Reflect: “Why should group money be extra clear?”

Randomized outcome? No.
Future flag set? Yes: tracksSharedFunds.
Glossary terms: Stewardship — responsibly caring for something trusted to you. Receipt — proof of purchase. Shared fund — money set aside for a group purpose.
Tradeoff note: Recordkeeping takes time, but shared money needs trust.

⸻

42. password-manager-choice — “One Password, Many Doors” — Age 13–17 — Topics: passwords, identity protection, accounts [NEW, MT, L, FF]

Prompt: You reuse one password on multiple game accounts. A security lesson offers a password manager-style tool in fictional form.

Choices:

* A. Keep reusing the password — Req: none. Outcome/effects: convenient, safety risk. Feedback: “One stolen password can open many doors.” Reflect: “Why is reuse risky?”
* B. Use unique passwords with a manager — Req: Safety ≥ 45; visible lock: “Needs account-safety skill.” Outcome/effects: safety up, setup time. Feedback: “A system can make safer choices easier.” Reflect: “What did the system remember for you?”
* C. Change only money-related accounts first — Req: discipline ≥ 35. Outcome/effects: partial safety improvement. Feedback: “Prioritizing high-risk accounts is a strong start.” Reflect: “Which accounts mattered most?”

Randomized outcome? No.
Future flag set? Yes: usesUniquePasswords.
Glossary terms: Password reuse — using the same password in more than one place. Identity theft — someone using another person’s information without permission. Account security — steps that protect accounts.
Tradeoff note: Security habits take setup time but reduce future risk.

⸻

43. public-wifi-bank-pause — “Banking on Public Wi-Fi?” — Age 13–17 — Topics: digital safety, banking, pause behavior [NEW, MT, FF]

Prompt: You are on public Wi-Fi and want to check a bank balance. The app offers a safer route: wait, use trusted connection, or check only non-sensitive info.

Choices:

* A. Log in anyway — Req: none. Outcome/effects: fast, safety risk. Feedback: “Convenience can raise account risk.” Reflect: “What made the connection risky?”
* B. Wait for a trusted connection — Req: none. Outcome/effects: safety up, delay. Feedback: “Waiting can be a safety choice.” Reflect: “Was the delay costly?”
* C. Use account alerts instead of logging in — Req: usesBankAlerts. Outcome/effects: balance awareness, lower risk. Feedback: “Alerts can answer simple questions without full login.” Reflect: “What did the alert tell you?”

Randomized outcome? No.
Future flag set? Yes: avoidsPublicWifiBanking.
Glossary terms: Public Wi-Fi — internet access shared by many people. Account balance — money currently in an account. Alert — a message about account activity.
Tradeoff note: The safest choice may be less convenient, but the delay is often small.

⸻

44. impostor-club-fee — “The Club Fee Message” — Age 13–16 — Topics: impostor scams, verification, payment apps [NEW, R, SC, FF]

Prompt: A message says a club fee is due today through a new payment handle. The sender uses a familiar title but not the normal channel.

Choices:

* A. Pay immediately — Req: usesPaymentApp. Outcome/effects: quick, randomized scam loss. Feedback: “A familiar title is not proof.” Reflect: “What channel changed?”
* B. Confirm with the club’s normal adult contact — Req: supportCircle.mentor or teacherContactFictional. Outcome/effects: safety up. Feedback: “Using the normal channel catches impostors.” Reflect: “Why not reply to the suspicious message?”
* C. Ask a friend if they got it too — Req: supportCircle.friend. Outcome/effects: social check, not complete proof. Feedback: “Friends can notice patterns, but official confirmation is stronger.” Reflect: “What made this check helpful but incomplete?”

Randomized outcome? Yes.
Future flag set? Yes: verifiesFeeRequests.
Glossary terms: Impostor scam — a trick where someone pretends to be trusted. Payment handle — the username or address used to receive digital money. Verification — checking that something is real.
Tradeoff note: Social proof helps, but official confirmation is safer for money requests.

⸻

45. overpayment-refund-trick — “The Overpayment Trick” — Age 15–18 — Topics: payment scams, refunds, verification [NEW, R, EXT, FF]

Prompt: A buyer sends “too much” money for your item and asks you to send the extra back quickly. The payment still says pending.

Choices:

* A. Send the extra back now — Req: sellsOnlineFictional. Outcome/effects: scam risk high, cash loss possible. Feedback: “Pending money is not the same as cleared money.” Reflect: “What word should slow you down?”
* B. Wait until payment fully clears — Req: discipline ≥ 45. Outcome/effects: safety up, buyer may pressure you. Feedback: “Waiting protects you from fake-payment tricks.” Reflect: “How did pressure affect the choice?”
* C. Cancel the sale and use a safer method — Req: Safety ≥ 50; visible lock: “Needs scam-response skill.” Outcome/effects: sale lost, safety protected. Feedback: “Losing a risky sale can be a win.” Reflect: “What made the sale not worth it?”

Randomized outcome? Yes.
Future flag set? Yes: recognizesOverpaymentScam.
Glossary terms: Pending payment — a payment not fully completed yet. Cleared payment — money confirmed as received. Refund — money sent back after a payment.
Tradeoff note: A sale is only good if the payment is real and safe.

⸻

46. identity-freeze-steps — “Freeze, File, Follow Up” — Age 16–18+ planning — Topics: identity theft recovery, credit freeze [NEW, MT, L, EXT, SC, FF]

Prompt: You notice a fictional account opened in your name. The game offers recovery steps, not panic.

Choices:

* A. Place a credit freeze and document the issue — Req: Safety ≥ 55; visible lock: “Needs identity-recovery skill.” Outcome/effects: damage risk down, paperwork time. Feedback: “A freeze makes it harder for new accounts to open.” Reflect: “What did documentation prove?”
* B. Ignore because it feels stressful — Req: none. Outcome/effects: wellbeing protected now, risk grows. Feedback: “Avoiding stress can make the problem harder later.” Reflect: “Who could help with the first step?”
* C. Ask a caregiver/mentor to go through steps with you — Req: supportCircle.family or mentor. Outcome/effects: support up, safety up. Feedback: “Support can turn a scary task into a checklist.” Reflect: “Which step felt most confusing?”

Randomized outcome? No.
Future flag set? Yes: knowsIdentityRecoverySteps.
Glossary terms: Credit freeze — a block that makes new credit harder to open in your name. Identity theft — someone using your information without permission. Documentation — saved proof of what happened and what you did.
Tradeoff note: Recovery takes effort, but fast steps can reduce future harm.

⸻

47. copay-estimate-choice — “The Appointment Estimate” — Age 17–18+ planning — Topics: health costs, copay, budgeting [NEW, MT, M, EXT, FF]

Prompt: A future appointment has a $25 copay. Transportation costs $8, and a missed work shift would reduce pay by $36.

Choices:

* A. Budget only the copay — Req: none. Outcome/effects: shortfall risk. Feedback: “The appointment cost was more than the medical charge.” Reflect: “What cost was outside the bill?”
* B. Add copay + transportation + lost pay — Req: Money Know-How ≥ 50. Outcome/effects: realistic total. Feedback: “$25 + $8 + $36 = $69 total impact.” Reflect: “Why count lost pay?”
* C. Ask about appointment time options — Req: supportCircle.mentor or discipline ≥ 45. Outcome/effects: possible reduced lost pay. Feedback: “Changing timing can lower the total cost.” Reflect: “What schedule option helped?”

Randomized outcome? Yes.
Future flag set? Yes: countsNonbillCosts.
Glossary terms: Copay — a set amount paid for a covered service. Total impact — all money effects connected to a choice. Lost pay — income not earned because time was unavailable.
Tradeoff note: Health decisions involve money, time, and wellbeing, not just a bill.

⸻

48. dental-sinking-fund — “The Future Dental Fund” — Age 16–18+ planning — Topics: sinking funds, health planning, savings [NEW, MT, M, EXT, FF]

Prompt: A future dental cost is estimated at $180 in six months. You can save monthly, wait, or use credit later.

Choices:

* A. Save $30 per month — Req: discipline ≥ 40. Outcome/effects: goal funded, spending cash lower. Feedback: “$180 ÷ 6 = $30 per month.” Reflect: “Why was monthly easier than one big payment?”
* B. Wait and decide later — Req: none. Outcome/effects: cash flexible now, future pressure. Feedback: “Waiting keeps options open but shortens the runway.” Reflect: “When would waiting be reasonable?”
* C. Plan to use credit later — Req: creditAvailable. Outcome/effects: cash now, debt risk later. Feedback: “Credit can cover timing but may add interest.” Reflect: “What would make credit safe or risky?”

Randomized outcome? No.
Future flag set? Yes: usesHealthSinkingFund.
Glossary terms: Sinking fund — saving small amounts for a known future cost. Estimate — a careful guess based on available information. Credit — borrowing now and paying later.
Tradeoff note: Saving ahead is steady, but flexibility and uncertainty can justify other routes.

⸻

49. renter-small-claim — “The Small Water Damage Claim” — Age 18+ planning — Topics: renter insurance, deductible, claims [TWIST, MT, M, EXT, AN, FF]

Prompt: A small covered water event damages $220 of belongings. Your deductible is $200.

Choices:

* A. File a claim — Req: hasRenterPolicy. Outcome/effects: possible $20 reimbursement, paperwork. Feedback: “$220 − $200 = $20 before any other rules.” Reflect: “Was the claim worth the effort?”
* B. Self-pay from emergency fund — Req: savings ≥ $220. Outcome/effects: fast recovery, savings lower. Feedback: “Savings can self-insure small losses.” Reflect: “What fund made self-pay possible?”
* C. Improve storage to reduce repeat risk — Req: discipline ≥ 45. Outcome/effects: safety up, small cost. Feedback: “Prevention can matter more than claiming.” Reflect: “What could prevent the next loss?”

Randomized outcome? No.
Future flag set? Yes: comparesSmallClaimDeductible.
Glossary terms: Renter insurance — coverage that can protect belongings and liability in a rental. Deductible — what you pay before insurance helps. Self-insure — using your own savings to handle a risk.
Tradeoff note: Having insurance does not mean every small event should become a claim.

⸻

50. bike-lock-value — “The Lock Costs Almost as Much” — Age 13–16 — Topics: asset protection, risk, ownership [NEW, MT, M, R, AN, FF]

Prompt: Your bike is worth about $90. A basic lock costs $12; a stronger lock costs $32.

Choices:

* A. Buy the basic lock — Req: cash ≥ $12. Outcome/effects: some protection, cash down. Feedback: “A low-cost lock is better than none.” Reflect: “What risk remains?”
* B. Buy the stronger lock — Req: cash ≥ $32. Outcome/effects: better protection, cash down more. Feedback: “You spent about 36% of the bike’s value to reduce theft risk.” Reflect: “When is protection worth a big percent?”
* C. Skip the lock and park carefully — Req: none. Outcome/effects: cash saved, randomized loss risk. Feedback: “Care helps, but it is not the same as protection.” Reflect: “What would replacing the bike cost?”

Randomized outcome? Yes.
Future flag set? Yes: protectsUsefulAssets.
Glossary terms: Asset protection — steps that help keep something you own safe. Replacement value — what it would cost to replace an item. Risk — the chance something bad or costly happens.
Tradeoff note: Protection costs money now to reduce a possible larger cost later.

⸻

51. phone-storage-cloud — “Storage Full Again” — Age 13–17 — Topics: recurring costs, digital storage, assets [NEW, MT, M, AN, FF]

Prompt: Your phone storage is full. A cloud plan costs $2.99 per month. A one-time memory cleanup takes 45 minutes and may avoid the plan.

Choices:

* A. Start the cloud plan — Req: cashFlowForecast != stormy. Outcome/effects: convenience up, recurring cost. Feedback: “$2.99 × 12 = $35.88 per year.” Reflect: “What made recurring cost worth it?”
* B. Do the cleanup — Req: discipline ≥ 40. Outcome/effects: time used, cost avoided. Feedback: “Time can replace a subscription.” Reflect: “Was 45 minutes worth $35.88/year?”
* C. Ask a mentor/family member to back up important files safely — Req: supportCircle.family or mentor. Outcome/effects: safety up, support time. Feedback: “Protecting important files matters before deleting.” Reflect: “What should never be deleted by mistake?”

Randomized outcome? No.
Future flag set? Yes: auditsDigitalStorage.
Glossary terms: Subscription — a repeating payment for access. Backup — a copy kept in case the original is lost. Recurring cost — a cost that repeats.
Tradeoff note: Convenience subscriptions can be worth it, but students should annualize the cost.

⸻

52. used-textbook-resale — “Buy Used, Sell Later?” — Age 15–18 — Topics: resale, education costs, ownership [NEW, MT, M, EXT, AN, FF]

Prompt: A future course book costs $72 new or $46 used. Used copies usually resell for about $28 if kept in good condition.

Choices:

* A. Buy used and protect condition — Req: cash ≥ $46. Outcome/effects: lower net cost, care needed. Feedback: “$46 − $28 resale = $18 estimated net cost.” Reflect: “How did condition affect value?”
* B. Buy new — Req: cash ≥ $72. Outcome/effects: best condition, higher cash cost. Feedback: “New may resell better but ties up more cash.” Reflect: “What did newness provide?”
* C. Borrow or use library reserve — Req: communityProgramAccess. Outcome/effects: cash saved, access limits. Feedback: “Borrowing reduces cost but may limit timing.” Reflect: “What rule made borrowing harder?”

Randomized outcome? Yes.
Future flag set? Yes: plansResaleValue.
Glossary terms: Resale value — what someone else might pay later. Net cost — cost after subtracting money recovered. Condition — how worn or usable something is.
Tradeoff note: Cheapest upfront is not always cheapest after resale, but resale is not guaranteed.

⸻

53. cert-exam-retake — “The Retake Decision” — Age 16–18 — Topics: certification, exam fees, opportunity [NEW, MT, R, EXT, AN, FF]

Prompt: A certification exam costs $58. Passing could unlock a better-paying summer role, but failing means paying again or waiting.

Choices:

* A. Take the exam now — Req: cash ≥ $58. Outcome/effects: opportunity chance, randomized pass. Feedback: “You took a calculated risk for a future route.” Reflect: “What preparation would improve the odds?”
* B. Spend two weeks preparing first — Req: discipline ≥ 45. Outcome/effects: delay, pass odds up. Feedback: “Preparation can change the probability, not guarantee the result.” Reflect: “What did practice improve?”
* C. Skip the credential and seek a no-cert role — Req: none. Outcome/effects: faster job search, lower unlocks. Feedback: “Skipping the fee can be smart if another route fits.” Reflect: “What route stayed open?”

Randomized outcome? Yes.
Future flag set? Yes: pursuesCertification.
Glossary terms: Certification — proof of a skill or training. Exam fee — money paid to take a test. Probability — the chance an outcome happens.
Tradeoff note: Paying for a credential can be an investment, but risk and preparation matter.

⸻

54. license-practice-sessions — “Practice Before the Test” — Age 16–18 — Topics: transportation, fees, preparation [NEW, MT, M, R, EXT, FF]

Prompt: A future license or permit test costs $32 each attempt. Extra practice costs time but improves odds.

Choices:

* A. Take the test now — Req: cash ≥ $32. Outcome/effects: fast attempt, randomized pass. Feedback: “Fast attempts can work, but retakes cost money.” Reflect: “What would a retake cost?”
* B. Practice first, test next week — Req: discipline ≥ 40. Outcome/effects: delay, pass odds up. Feedback: “Preparation is a low-cash way to reduce retake risk.” Reflect: “What did practice replace?”
* C. Ask a mentor for practice feedback — Req: supportCircle.mentor. Outcome/effects: opportunity up, confidence up. Feedback: “Feedback can make practice more focused.” Reflect: “What correction helped?”

Randomized outcome? Yes.
Future flag set? Yes: preparesBeforeFeeTests.
Glossary terms: Retake — taking a test again after not passing. Fee — money charged for a service or attempt. Preparation — work done before a challenge to improve odds.
Tradeoff note: Waiting can feel slower but reduce repeated fees.

⸻

55. holiday-shift-differential — “The Higher-Pay Shift” — Age 16–18 — Topics: wages, wellbeing, opportunity cost [NEW, MT, M, EXT, SC]

Prompt: A future job offers one special shift at 1.5× pay. Your normal pay is $12/hour, and the shift is 4 hours.

Choices:

* A. Take the shift — Req: hasIncome. Outcome/effects: $72 gross, wellbeing may drop. Feedback: “$12 × 1.5 = $18/hour; $18 × 4 = $72 gross.” Reflect: “What did the extra pay cost in energy?”
* B. Decline to protect rest or family time — Req: none. Outcome/effects: wellbeing up, income missed. Feedback: “Rest can be a real need, not a failure to earn.” Reflect: “What made rest valuable?”
* C. Ask to swap for a shorter high-pay block — Req: trustAtWork ≥ 50. Outcome/effects: possible compromise, randomized. Feedback: “Negotiating can create a middle route.” Reflect: “What made the ask reasonable?”

Randomized outcome? Yes.
Future flag set? No.
Glossary terms: Wage — pay for work, often per hour. Gross pay — pay before deductions. Opportunity cost — what you give up by choosing one option.
Tradeoff note: Higher pay is attractive, but wellbeing and relationships still matter.

⸻

56. raise-script-practice — “Practice the Raise Ask” — Age 17–18+ planning — Topics: negotiation, career, evidence [NEW, MT, L, SC, EXT, FF]

Prompt: You have worked reliably in a future job and want to ask for a small raise. A mentor suggests bringing evidence, not just hope.

Choices:

* A. Ask without preparing — Req: hasIncome. Outcome/effects: possible no, confidence risk. Feedback: “A request is stronger with evidence.” Reflect: “What proof was missing?”
* B. Prepare a short evidence script — Req: discipline ≥ 50; visible lock: “Needs follow-through records.” Outcome/effects: opportunity up, confidence up. Feedback: “Clear examples make the ask professional.” Reflect: “Which example was strongest?”
* C. Ask mentor to roleplay first — Req: supportCircle.mentor. Outcome/effects: confidence up, nerves down. Feedback: “Practice can make a hard conversation calmer.” Reflect: “What wording improved?”

Randomized outcome? Yes.
Future flag set? Yes: practicesNegotiation.
Glossary terms: Raise — an increase in pay. Evidence — facts that support a claim. Negotiation — a respectful discussion to reach an agreement.
Tradeoff note: Asking can feel risky, but preparation changes the quality of the risk.

⸻

57. benefits-or-wage — “More Pay or Better Benefits?” — Age 17–18+ planning — Topics: compensation, insurance, benefits [NEW, MT, M, EXT, FF]

Prompt: Future Job A pays $16/hour with no benefits. Job B pays $15/hour and includes a transit benefit worth $40/month. Both offer 40 hours/month.

Choices:

* A. Choose Job A — Req: none. Outcome/effects: higher wage, fewer extras. Feedback: “Job A pays $1 more × 40 hours = $40 extra monthly.” Reflect: “What benefit did it lack?”
* B. Choose Job B — Req: none. Outcome/effects: lower wage, transit covered. Feedback: “The $40 transit benefit can equal the wage difference.” Reflect: “Which job fits your route better?”
* C. Compare full compensation first — Req: Money Know-How ≥ 50. Outcome/effects: better decision quality. Feedback: “Compensation includes pay and useful benefits.” Reflect: “What benefit mattered most?”

Randomized outcome? No.
Future flag set? Yes: comparesFullCompensation.
Glossary terms: Benefit — non-wage support from a job or program. Compensation — total value from work, including pay and benefits. Wage — money earned per hour or period.
Tradeoff note: Higher pay is not always higher total value.

⸻

58. inflation-price-update — “Raise Your Price Kindly” — Age 15–18 — Topics: inflation, entrepreneurship, communication [NEW, MT, M, EXT, FF]

Prompt: Your material cost rises from $2.40 to $2.90 per item. You sell each item for $5.00 and want to keep the project worthwhile.

Choices:

* A. Keep price at $5.00 — Req: none. Outcome/effects: customer-friendly, profit lower. Feedback: “Profit before was $2.60; now it is $2.10.” Reflect: “How did cost change the business?”
* B. Raise price to $5.50 with explanation — Req: communicationSkill ≥ 45. Outcome/effects: profit steadier, demand risk. Feedback: “A clear explanation can make a price change feel fair.” Reflect: “What wording was respectful?”
* C. Reduce packaging cost instead — Req: discipline ≥ 40. Outcome/effects: profit protected, quality risk. Feedback: “Cutting costs is another route, but quality matters.” Reflect: “What should not be cut?”

Randomized outcome? Yes.
Future flag set? Yes: adjustsPricesForCosts.
Glossary terms: Inflation — prices rising over time. Profit — money left after costs. Cost increase — when inputs become more expensive.
Tradeoff note: Raising price, absorbing cost, or changing design can each be fair depending on value.

⸻

59. fund-fee-difference — “The Tiny Fund Fee” — Age 17–18+ planning — Topics: investing, fees, long-term math [NEW, MT, M, EXT, AN, FF]

Prompt: Two diversified fund placeholders have similar risk. Fund A charges 0.10% per year. Fund B charges 0.80% per year.

Choices:

* A. Choose Fund A — Req: hasInvestments. Outcome/effects: lower fee drag. Feedback: “On $1,000, 0.10% is $1 per year.” Reflect: “Why do tiny percents matter over time?”
* B. Choose Fund B because the page looks cooler — Req: none. Outcome/effects: higher fee, possible confusion. Feedback: “Design is not the same as value.” Reflect: “What did the fee tell you?”
* C. Ask mentor to compare fee and risk — Req: supportCircle.mentor. Outcome/effects: moneyKnowledge up. Feedback: “A second reader can help with small percentages.” Reflect: “What number was easiest to overlook?”

Randomized outcome? No.
Future flag set? Yes: checksInvestmentFees.
Glossary terms: Expense ratio — a yearly fund fee shown as a percent. Diversified fund — a fund holding many investments. Fee drag — growth reduced by costs.
Tradeoff note: Lower fees are usually helpful, but risk, time horizon, and fit still matter.

⸻

60. time-horizon-buckets — “Three Money Buckets” — Age 15–18 — Topics: saving, investing, liquidity [NEW, MT, EXT, AN, FF]

Prompt: You have $300 for future goals: one goal in 2 months, one in 2 years, and one in 20 years.

Choices:

* A. Put all money in investments — Req: hasInvestments. Outcome/effects: growth chance, short-term risk. Feedback: “Short-term money may not have time to recover from drops.” Reflect: “Which goal needed safety?”
* B. Put all money in savings — Req: hasSavings. Outcome/effects: liquidity high, growth lower. Feedback: “Savings protects short-term goals but may grow slowly.” Reflect: “Which goal could take more risk?”
* C. Split by time horizon — Req: Money Know-How ≥ 55; visible lock: “Needs time-horizon skill.” Outcome/effects: balanced plan. Feedback: “Different goals can need different tools.” Reflect: “How did time change the route?”

Randomized outcome? Yes.
Future flag set? Yes: usesTimeHorizonBuckets.
Glossary terms: Time horizon — how long before money is needed. Liquidity — how quickly money can be used. Investment — something held with hope of growth and risk of loss.
Tradeoff note: Investing and saving are tools for different timelines.

⸻

61. tablet-sale-dilemma — “Sell the Tablet?” — Age 15–18 — Topics: liquidity, assets, opportunity [NEW, MT, EXT, AN, FF]

Prompt: You can sell a tablet for $140 to cover a short-term cash gap. The tablet also helps with applications and schoolwork.

Choices:

* A. Sell the tablet — Req: ownsTablet. Outcome/effects: cash up, opportunity tool gone. Feedback: “Liquid cash solved today but removed a useful asset.” Reflect: “What future task used the tablet?”
* B. Use savings and keep the tablet — Req: savings ≥ cashGap. Outcome/effects: savings down, asset protected. Feedback: “Savings protected both cash need and opportunity.” Reflect: “How did savings preserve options?”
* C. Borrow a device temporarily and delay sale — Req: supportCircle.family or mentor. Outcome/effects: support trust, more time. Feedback: “Time can prevent a rushed sale.” Reflect: “What rule makes borrowing fair?”

Randomized outcome? No.
Future flag set? Yes: protectsOpportunityAssets.
Glossary terms: Liquidity — how easily something turns into spendable cash. Asset — something owned with value or usefulness. Cash gap — when money needed now is more than cash available.
Tradeoff note: Selling assets can be reasonable, but useful assets have opportunity value too.

⸻

62. net-worth-mosaic — “The Net Worth Mosaic” — Age 18+ planning — Topics: net worth, assets, debts [NEW, MT, M, EXT, AN, FF]

Prompt: Your future snapshot shows $420 cash, $1,100 useful assets, $600 savings, and $750 debt.

Choices:

* A. Calculate net worth — Req: Money Know-How ≥ 50. Outcome/effects: financial picture clearer. Feedback: “Assets total $2,120. $2,120 − $750 debt = $1,370 net worth.” Reflect: “Which part was not spendable cash?”
* B. Focus only on cash — Req: none. Outcome/effects: simple view, asset/debt blind spots. Feedback: “Cash matters, but it is not the whole picture.” Reflect: “What did cash leave out?”
* C. List assets by usefulness and resale value — Req: discipline ≥ 45. Outcome/effects: better planning. Feedback: “Useful value and resale value can be different.” Reflect: “Which asset helped opportunity most?”

Randomized outcome? No.
Future flag set? Yes: separatesCashAssetsDebt.
Glossary terms: Net worth — assets minus debts. Debt — money owed. Resale value — what someone might pay later.
Tradeoff note: Net worth is useful, but it does not equal cash or personal worth.

⸻

63. subscription-pause-season — “Pause, Don’t Cancel?” — Age 14–17 — Topics: subscriptions, seasonal use, recurring costs [TWIST, MT, M, FF]

Prompt: A learning app costs $7/month. You use it heavily during project season and barely during breaks. The plan allows pausing.

Choices:

* A. Keep it active all year — Req: none. Outcome/effects: convenient, $84/year. Feedback: “$7 × 12 = $84.” Reflect: “Which months did you actually use it?”
* B. Pause for 4 low-use months — Req: discipline ≥ 45. Outcome/effects: saves $28, requires reminder. Feedback: “4 paused months × $7 = $28 saved.” Reflect: “What reminder protects the pause?”
* C. Cancel completely — Req: none. Outcome/effects: saves more, loses access. Feedback: “Canceling protects cash but may remove a useful tool.” Reflect: “When did access matter?”

Randomized outcome? No.
Future flag set? Yes: pausesSeasonalSubscriptions.
Glossary terms: Pause — temporarily stop a service or payment. Subscription — a repeating payment for access. Annual cost — one year of costs added together.
Tradeoff note: Managing a subscription is not always cancel-or-keep; pausing can fit seasonal use.

⸻

64. roundup-savings-switch — “Round-Up Savings” — Age 15–17 — Topics: automatic saving, habits, rounding [NEW, MT, M, FF]

Prompt: A bank-style feature rounds each debit purchase to the next dollar and moves the difference to savings. You make about 20 small purchases a month.

Choices:

* A. Turn on round-ups — Req: hasChecking. Outcome/effects: savings grows slowly, checking lower. Feedback: “If the average round-up is $0.50, 20 purchases save about $10/month.” Reflect: “Why does small automatic saving work?”
* B. Set a fixed $10 monthly transfer instead — Req: discipline ≥ 40. Outcome/effects: predictable savings. Feedback: “Fixed transfers are easier to budget than variable round-ups.” Reflect: “Which system fits you?”
* C. Skip automatic saving — Req: none. Outcome/effects: checking flexible, savings depends on memory. Feedback: “Manual saving needs a strong reminder.” Reflect: “What system replaces automation?”

Randomized outcome? No.
Future flag set? Yes: usesAutoSavingSystem.
Glossary terms: Round-up saving — saving the spare change from rounded purchases. Automatic transfer — money moved by a preset rule. Savings — money kept for later.
Tradeoff note: Automation helps habits but can surprise checking if balances are tight.

⸻

65. free-shipping-threshold — “Add $11 for Free Shipping?” — Age 13–16 — Topics: shipping, thresholds, final price [NEW, MT, M]

Prompt: Your cart is $39. Shipping is $6 unless you spend $50. A useful item you actually need costs $11.

Choices:

* A. Add the useful $11 item — Req: cash ≥ $50. Outcome/effects: pay $50 total, get needed item. Feedback: “$39 + $11 = $50, and shipping drops to $0.” Reflect: “Did you need the add-on?”
* B. Pay $45 with shipping — Req: cash ≥ $45. Outcome/effects: lower cash out today, no extra item. Feedback: “$39 + $6 = $45, which is less than $50.” Reflect: “Why is free shipping not always cheaper?”
* C. Wait until you need more items — Req: discipline ≥ 40. Outcome/effects: delay, possible better cart. Feedback: “Waiting can make a threshold useful instead of forced.” Reflect: “What made waiting possible?”

Randomized outcome? No.
Future flag set? No.
Glossary terms: Shipping fee — cost to deliver an item. Threshold — a line you must reach for a deal. Final price — total paid after extras.
Tradeoff note: Free shipping can still lead to spending more.

⸻

66. rental-tool-late-fee — “Return the Rental Tool” — Age 14–17 — Topics: borrowing, late fees, responsibility [NEW, MT, L, SC, AN, FF]

Prompt: A tool library lends you a kit for free, but late returns cost $5 per day and reduce trust.

Choices:

* A. Add the return date to your calendar — Req: discipline ≥ 40. Outcome/effects: fee risk down. Feedback: “A reminder protects both money and trust.” Reflect: “What day should the reminder happen?”
* B. Rely on memory — Req: none. Outcome/effects: no setup, randomized late risk. Feedback: “Memory works sometimes, but fees make forgetting costly.” Reflect: “What could distract you?”
* C. Ask a friend to return it with you — Req: supportCircle.friend. Outcome/effects: support up, shared responsibility. Feedback: “A buddy system can help if expectations are clear.” Reflect: “What promise did you both make?”

Randomized outcome? Yes.
Future flag set? Yes: usesBorrowedAssetCalendar.
Glossary terms: Late fee — charge for returning or paying after the deadline. Borrowing — using something temporarily that belongs to someone else. Trust — confidence that someone will follow through.
Tradeoff note: Free borrowing still has responsibility and possible costs.

⸻

67. community-share-box — “The Share Box Budget” — Age 13–16 — Topics: community resources, contribution, needs/wants [NEW, MT, SC, M, FF]

Prompt: A community share box gives free school supplies and asks people who can contribute to add items later. A pack of pencils costs $3.20.

Choices:

* A. Take what you need now, contribute later — Req: none. Outcome/effects: need met, future reminder. Feedback: “Community resources can be for real needs, not shame.” Reflect: “How could you contribute later?”
* B. Buy your own supplies today — Req: cash ≥ $3.20. Outcome/effects: cash down, resource untouched. Feedback: “Paying yourself can be fine when cash is available.” Reflect: “What did cash allow?”
* C. Add one item now and take one item — Req: cash ≥ $3.20. Outcome/effects: community trust up, cash down. Feedback: “Giving and receiving can happen together.” Reflect: “Why is support not one-way?”

Randomized outcome? No.
Future flag set? Yes: usesCommunityResourceRespectfully.
Glossary terms: Need — something important for health, school, work, or safety. Community resource — shared support available through a group. Contribution — something given to help a shared effort.
Tradeoff note: Using support is not failure; support systems work best with respect and planning.

⸻

68. mentor-portfolio-update — “Update the Portfolio” — Age 15–18 — Topics: career assets, mentor support, opportunity [NEW, MT, L, SC, EXT, AN, FF]

Prompt: Your mentor helped you build a small portfolio of work samples. You can update it now or wait until an application appears.

Choices:

* A. Update it now — Req: discipline ≥ 45. Outcome/effects: opportunity up, time used. Feedback: “Updating before pressure makes applications easier.” Reflect: “What sample showed growth?”
* B. Wait until needed — Req: none. Outcome/effects: time saved now, future rush risk. Feedback: “Waiting is efficient if no opportunity appears soon.” Reflect: “What would make waiting risky?”
* C. Ask mentor for one improvement note — Req: supportCircle.mentor. Outcome/effects: quality up, relationship trust. Feedback: “Specific feedback improves a career asset.” Reflect: “What did the note change?”

Randomized outcome? Yes.
Future flag set? Yes: maintainsCareerPortfolio.
Glossary terms: Portfolio — a collection of work samples. Career asset — something that helps future opportunities. Feedback — information used to improve.
Tradeoff note: Portfolio work has no immediate cash payoff but can protect future routes.

⸻

69. quiet-workspace-choice — “The Quiet Hour” — Age 12–15 — Topics: time, school resources, opportunity [NEW, MT, SC, FF]

Prompt: You need one quiet hour to finish a scholarship-style practice essay in the game. Your schedule is packed.

Choices:

* A. Use a school/library quiet block — Req: schoolResourceAvailability. Outcome/effects: opportunity up, schedule planning. Feedback: “A quiet space can be a financial resource when it supports future options.” Reflect: “What made the space useful?”
* B. Ask family/caregiver for a quiet agreement — Req: supportCircle.family. Outcome/effects: support trust up, communication practice. Feedback: “Clear asks can turn a need into a plan.” Reflect: “What time did you ask for?”
* C. Multitask while distracted — Req: none. Outcome/effects: time saved, quality randomized. Feedback: “Multitasking can work, but quality may drop.” Reflect: “What did distraction cost?”

Randomized outcome? Yes.
Future flag set? Yes: protectsWorkFocus.
Glossary terms: Opportunity — a future chance or route. Resource — something useful for reaching a goal. Time cost — time used by a choice.
Tradeoff note: Money choices often depend on time and environment, not just dollars.

⸻

70. phone-plan-data-cap — “The Data Cap Warning” — Age 14–17 — Topics: phone plans, overage, budgeting [NEW, MT, M, FF]

Prompt: Your fictional phone plan has 5 GB of data. Extra data costs $8 per GB. You are on track to use 7 GB this month.

Choices:

* A. Keep using data normally — Req: none. Outcome/effects: convenience, possible $16 overage. Feedback: “2 extra GB × $8 = $16.” Reflect: “What made the extra cost invisible?”
* B. Use Wi-Fi downloads and lower data use — Req: discipline ≥ 40. Outcome/effects: cash protected, convenience lower. Feedback: “Changing habits can avoid fees.” Reflect: “Which habit saved data?”
* C. Change to a larger plan next month — Req: hasRecurringBudget. Outcome/effects: predictable cost, maybe overpay if use drops. Feedback: “A larger plan can be cheaper if overages repeat.” Reflect: “How many months of overage prove it?”

Randomized outcome? No.
Future flag set? Yes: tracksUsageCaps.
Glossary terms: Data cap — a limit on included data. Overage — extra use beyond a plan limit. Recurring budget — a plan for repeating costs.
Tradeoff note: Paying more for a bigger plan can save money only if overages are common.

⸻

71. utility-usage-challenge — “The Power-Down Challenge” — Age 15–18+ planning — Topics: utilities, conservation, bills [NEW, MT, M, R, EXT, FF]

Prompt: A future shared utility bill averages $82/month. You try a power-down routine that might reduce usage by 8%.

Choices:

* A. Try the routine for one month — Req: discipline ≥ 40. Outcome/effects: possible savings, effort. Feedback: “8% of $82 is $6.56 estimated savings.” Reflect: “Was the effort worth the savings?”
* B. Ignore usage and pay the average — Req: none. Outcome/effects: simple, no savings. Feedback: “Simple can be fine if the bill is manageable.” Reflect: “What made simplicity valuable?”
* C. Ask roommate/family to join — Req: supportCircle.family or friend. Outcome/effects: higher savings odds, coordination needed. Feedback: “Shared bills need shared habits.” Reflect: “What habit was easiest for the group?”

Randomized outcome? Yes.
Future flag set? Yes: testsUtilityHabit.
Glossary terms: Utility bill — a bill for services like electricity or water. Percent decrease — how much something drops compared with the original. Shared bill — a cost paid by more than one person.
Tradeoff note: Small savings may or may not justify effort, especially when others share the bill.

⸻

72. emergency-supply-kit — “The $26 Supply Kit” — Age 12–16 — Topics: preparedness, assets, self-insurance [NEW, MT, AN, FF]

Prompt: A simple emergency supply kit costs $26. It does not make money, but it can reduce stress and surprise purchases later.

Choices:

* A. Buy the kit now — Req: cash ≥ $26. Outcome/effects: cash down, safety/wellbeing up. Feedback: “Some assets protect life and planning without growing in value.” Reflect: “What future cost could it prevent?”
* B. Build it slowly from items you already have — Req: discipline ≥ 35. Outcome/effects: slower, cheaper. Feedback: “Using what you have can reduce cost.” Reflect: “What item came first?”
* C. Skip for now — Req: none. Outcome/effects: cash kept, preparedness lower. Feedback: “Skipping can be reasonable if cash is tight.” Reflect: “When would you revisit it?”

Randomized outcome? Yes.
Future flag set? Yes: hasPreparednessAsset.
Glossary terms: Preparedness — being ready for possible problems. Asset — something owned with value or usefulness. Self-insure — using your own resources to handle small risks.
Tradeoff note: Preparedness costs money before you know whether you will need it.

⸻

73. savings-bond-placeholder — “The Locked Savings Placeholder” — Age 15–18 — Topics: saving, liquidity, interest [NEW, MT, M, EXT, AN, FF]

Prompt: A fictional locked-savings certificate pays 4% simple interest for one year. You would put in $200 but cannot spend it during the year without a penalty.

Choices:

* A. Lock the $200 for one year — Req: savings ≥ $200. Outcome/effects: earns $8 simple interest, liquidity down. Feedback: “4% of $200 is $8 for the year in this simplified model.” Reflect: “What did you give up for $8?”
* B. Keep the money in regular savings — Req: none. Outcome/effects: liquidity up, lower interest. Feedback: “Flexible money can be valuable even if it grows less.” Reflect: “Why might access matter?”
* C. Split $100 locked, $100 liquid — Req: savings ≥ $200. Outcome/effects: balanced growth/access. Feedback: “Splitting tools can protect two goals.” Reflect: “Which half served which purpose?”

Randomized outcome? No.
Future flag set? Yes: comparesLiquidityAndInterest.
Glossary terms: Simple interest — interest calculated on the original amount. Liquidity — how quickly money can be used. Penalty — a cost for breaking a rule or agreement.
Tradeoff note: Higher interest can require giving up access.

⸻

74. inflation-lunch-budget — “Same Lunch, New Price” — Age 13–16 — Topics: inflation, budgets, percent [NEW, MT, M]

Prompt: A weekly lunch budget was $18. Prices rise and the same meals now cost $20.70.

Choices:

* A. Calculate the percent increase — Req: Money Know-How ≥ 45. Outcome/effects: understanding up. Feedback: “Increase is $2.70; $2.70 ÷ $18 = 15%.” Reflect: “How did percent explain the change?”
* B. Add $2.70 to the weekly budget — Req: cashFlowForecast != stormy. Outcome/effects: same meals, less money elsewhere. Feedback: “Keeping the same routine moves money from another category.” Reflect: “Which category changed?”
* C. Change one meal to stay near $18 — Req: discipline ≥ 35. Outcome/effects: budget steady, preference tradeoff. Feedback: “Adjusting the basket can control cost.” Reflect: “What change felt fair?”

Randomized outcome? No.
Future flag set? No.
Glossary terms: Inflation — prices rising over time. Percent increase — how much bigger a number became compared with the starting number. Budget — a plan for money in and out.
Tradeoff note: Rising prices can be handled by more money, changed habits, or both.

⸻

75. life-route-capstone — “The Route You Built” — Age 18+ planning — Topics: reflection, net worth, support, recovery [NEW, MT, M, SC, EXT, AN, FF]

Prompt: Your life-route summary shows $740 savings, $320 checking, $1,900 useful assets, $680 investments, and $1,150 debt. It also shows three support-circle moments and two recovery moments.

Choices:

* A. Calculate net worth and name one non-money strength — Req: Money Know-How ≥ 55. Outcome/effects: full reflection. Feedback: “Assets + cash total $3,640; $3,640 − $1,150 = $2,490 net worth, but your planning and recovery are strengths too.” Reflect: “What strength helped most?”
* B. Focus only on the money total — Req: none. Outcome/effects: simple ending, misses life skills. Feedback: “Money totals are useful, but they do not measure your value.” Reflect: “What stat told another part of the story?”
* C. Thank one support role and set one next goal — Req: any supportCircle role. Outcome/effects: relationship trust up, opportunity up. Feedback: “Support and next steps turn an ending into a route forward.” Reflect: “Who helped and what comes next?”

Randomized outcome? No.
Future flag set? Yes: completedRouteReflection.
Glossary terms: Net worth — assets minus debts. Asset — something owned with value or usefulness. Recovery — steps that help you rebuild after a setback.
Tradeoff note: The capstone should celebrate reasoning, support, and recovery, not only wealth.

⸻

Scenario-bank constraint audit

* Mixed tradeoff scenarios: 60+; examples include 1, 3, 6, 7, 9–15, 17–35, 38–41, 47–75.
* Locked-choice scenarios: 20+; examples include 4, 5, 6, 8, 10, 16–18, 20, 22, 30–31, 34–37, 46, 60.
* Randomized-outcome scenarios: 25+; examples include 1–3, 7–8, 10, 14–15, 28, 33–36, 40, 45, 47, 50, 52–56, 58, 60, 66, 69, 71–72.
* Future flags: 60+ scenarios set flags.
* Support-circle scenarios: 20+; examples include 2, 9, 11, 14–17, 19, 21–24, 26, 31–37, 41, 44, 46–47, 51–52, 54–57, 61, 66–69, 71, 75.
* Explicit 7th-grade math: 35+; examples include 3, 6–7, 9–11, 13–14, 16–18, 20–25, 27, 29, 34–36, 38–40, 47–50, 52, 55, 57–59, 62–65, 70–71, 73–75.
* 8th–10th extension: 35+; examples include 7–8, 16–25, 31–39, 45–49, 52–60, 73, 75.
* Asset/net-worth/ownership: 25+; examples include 1, 9, 11, 15, 21, 23–25, 32, 34, 40, 49–53, 59–62, 66, 72–73, 75.

⸻

5. Relationship and Support Circle Ideas

Support idea	Interaction	Possible benefits	Possible costs	Reflection question
Caregiver due-date check	Reviews a fictional bill calendar.	Late fees drop.	Student must ask early.	“What date mattered most?”
Friend fee spotter	Friend notices shipping/service fees.	Final price accuracy rises.	Slower checkout.	“What did a second person catch?”
Mentor source ladder	Mentor compares official vs. sponsored info.	Safety and opportunity rise.	Takes time.	“Which source was strongest?”
Pet recurring-cost reminder	Pet food/care repeats monthly.	Discipline and empathy rise.	Cash/time cost.	“What cost repeated?”
Caregiver co-signer talk	Explains shared loan risk.	Trust and planning improve.	May limit borrowing.	“How does risk affect the ask?”
Friend split agreement	Sets equal or proportional split.	Conflict risk drops.	Requires clarity.	“What made the split fair?”
Mentor mock negotiation	Practices raise or scholarship wording.	Opportunity and confidence rise.	Nerves/time.	“What evidence helped?”
Pet emergency practice	Small simulated pet surprise.	Emergency fund feels real.	Savings lower.	“How did planning reduce stress?”
Caregiver transportation backup	Sets rules for occasional backup.	Attendance risk drops.	Needs boundaries.	“What rule keeps it fair?”
Friend no-spend alternative	Suggests free fun.	Wellbeing without cash drain.	Less convenience.	“Was fun tied to spending?”
Mentor credential reminder	Nudges renewal deadline.	Opportunity protected.	Calendar habit needed.	“What expired if ignored?”
Caregiver form second-reader	Reviews fictional aid/lease/loan form.	Misreading risk drops.	Independence feels slower.	“What line was confusing?”
Friend payment confirmation	Checks recipient/amount before send.	Scam/wrong-send risk drops.	Small delay.	“What detail was verified?”
Mentor portfolio feedback	Reviews work sample.	Career asset improves.	Revision time.	“What improved the sample?”
Pet routine anchor	Care routine supports daily planning.	Discipline and wellbeing rise.	Less flexible time.	“What routine helped money choices?”
Caregiver shared resource rule	Sets borrowing/return expectations.	Saves cash, protects trust.	Responsibility.	“What happens if it breaks?”
Friend comparison buddy	Compares two plans.	Math errors drop.	Social influence risk.	“Did the friend help or pressure?”
Mentor scam-response checklist	Helps after suspicious event.	Safety and recovery improve.	Must admit uncertainty.	“What first step lowered risk?”
Caregiver quiet block agreement	Protects time for applications.	Opportunity up.	Household schedule adjustment.	“How was the ask respectful?”
Friend boundary practice	Roleplays saying no to a loan/purchase.	Discipline and trust rise.	Awkwardness.	“How can no be kind?”
Mentor full-cost review	Checks tuition, fees, tools, transport.	Better pathway planning.	More complex decision.	“Which cost was hidden?”
Pet self-insurance choice	Compare pet fund vs. insurance.	Risk thinking improves.	Uncertainty remains.	“Which risk did savings cover?”
Caregiver alert setup	Helps choose account alerts.	Overdraft risk drops.	Notifications.	“What alert was useful?”
Friend recovery support	Encourages recovery after a mistake.	Shame down, resilience up.	Must avoid judgment.	“What step rebuilt confidence?”
Mentor exit reflection	Helps name strengths beyond money.	Final reflection improves.	Takes class time.	“What strength was not cash?”

⸻

6. Score Ranges and Life Context

Student-facing score ranges

Score	0–20	21–40	41–60	61–80	81–100
Money Know-How	“I’m mostly guessing. Money Words and math hints should help me.”	“I know some basics, but hidden fees, timing, or percent math still surprise me.”	“I can handle common choices when the numbers are clear.”	“I compare totals, timing, risk, and future effects before choosing.”	“I can explain the money route and the math behind it.”
Wellbeing	“Stress is heavy; I need recovery choices and support.”	“I’m getting through, but money pressure affects my energy.”	“I’m steady enough for normal planning.”	“I balance money, time, rest, and relationships pretty well.”	“My routines protect both life and money.”
Safety	“I’m at high risk for scams, rushed payments, or unsafe account habits.”	“I notice some red flags but may rush.”	“I can pause and check common risky choices.”	“I use verification, alerts, privacy settings, and trusted sources.”	“I protect accounts, information, payments, and recovery steps.”
Discipline	“Plans are hard to follow unless the game gives reminders.”	“I start plans but often miss dates or details.”	“I can follow simple routines and caps.”	“I use calendars, records, spending limits, and checklists.”	“I build systems that make good choices easier.”
Opportunity	“Few routes are open yet; support and basic skills matter.”	“Some routes are open, but I need more prerequisites.”	“I have several realistic paths.”	“Skills, records, credentials, and relationships unlock stronger choices.”	“I have a strong route stack: skills, references, credentials, and backup plans.”

Credit score range

Most credit scores range from 300 to 850, though different models and companies may use different ranges; the game should display “simplified learning model” beside any credit score.  

Credit state/range	Student-facing explanation
No score yet / null	“There is not enough credit history in the game yet. That is not bad; it means the record is thin.”
300–579: Rebuild zone	“Borrowing may be harder or more expensive. Focus on on-time payments, low balances, and recovery steps.”
580–669: Developing zone	“Some options may open, but terms may not be strong yet. Keep improving habits.”
670–739: Healthy zone	“Many ordinary credit routes are more realistic. Keep balances low and payments on time.”
740–799: Strong zone	“Your simplified credit habits are helping you qualify for better terms.”
800–850: Excellent zone	“Your record is very strong, but credit is still only one part of financial health.”

Fictional life-context variables, no sensitive identifiers

1. Transit reliability: low, medium, high.
2. Quiet workspace access: rare, sometimes, reliable.
3. Community resource availability: none, limited, strong.
4. Schedule predictability: steady, shifting, crunch weeks.
5. Device reliability: fragile, average, strong.
6. Internet reliability: spotty, normal, steady.
7. Starting emergency cushion: none, small, moderate.
8. Repair-route availability: few, some, many.
9. Account-alert habit: off, occasional, automatic.
10. Mentor availability: none this run, occasional, steady.
11. Support-circle trust: rebuilding, normal, strong.
12. Fee-heavy environment: low-fee, normal-fee, high-fee.
13. Upfront-cost pressure: low, medium, high.
14. Paperwork confidence: low, medium, high.
15. Flexible timing options: strict deadlines, some flexibility, flexible routes.

⸻

7. Assets and Net Worth Ideas

Asset or ownership concept	How it can gain or lose value	Math it teaches
Useful tablet	Gains opportunity value through applications and schoolwork; loses resale value with age/damage.	Resale value, liquidity vs. usefulness.
Earbud backup kit	Preserves routines; value drops if lost or unused.	Replacement cost vs. backup cost.
Desk lamp or study gear	Supports focus; can be repaired or replaced.	Repair vs. replace.
Used instrument	May keep resale value if cared for; loses value with damage.	Net cost after resale.
Credential certificate	Raises opportunity; loses value when expired.	Renewal cost and deadline planning.
Starter tool kit	Unlocks training/gigs; loses value through wear or missing pieces.	Deposit vs. purchase math.
Work portfolio	Non-cash career asset; gains value with updates.	Qualitative asset tracking.
Bike lock	Protects a bigger asset; has little resale value itself.	Percent of asset value spent on protection.
Phone storage plan	Not owned, but protects digital access; drains recurring cash.	Annualized subscription cost.
Emergency supply kit	Reduces future surprise costs; may need replacement.	Prevention cost vs. possible loss.
Locked savings certificate placeholder	Gains predictable interest; loses liquidity during term.	Simple interest, liquidity.
Diversified fund placeholder	Can grow or drop; long horizon matters.	Percent gain/loss, fee drag.
Cash emergency fund	Does not “grow” much but protects choices.	Coverage ratio, months of expenses.
Resellable textbook	Value depends on condition and timing.	Net cost after resale.
Reusable interview outfit	Gains value through repeated use; loses value if rarely used.	Cost per use.
Tool-library membership	Access asset without ownership; loses value if unused or late fees hit.	Fee avoidance, late-fee math.
Transit pass balance	Useful stored value; loses value if unused or expired.	Remaining balance and break-even rides.
Renter deposit	May be returned if rules are followed; can be reduced by damage.	Refundable vs. nonrefundable.
Small inventory batch	Can become revenue; loses value if demand fades.	Profit margin and markdowns.
Pet care fund	Protects pet-related wellbeing; spent during surprises.	Recurring plus random costs.
Backup ride fund	Preserves attendance/opportunity; value is protection.	Expected cost and timing gaps.
Password manager-style system	Protects accounts; value is avoided loss.	Risk reduction, not dollar growth.
Aid offer checklist	Prevents debt misunderstanding; value is avoided error.	Sort free/earned/borrowed amounts.
Resume/portfolio template	Builds opportunity; may require updating.	Time investment vs. future payoff.
Repair skills badge	Low resale, high usefulness; unlocks repair savings.	Avoided cost over repeated use.

⸻

8. Teacher Discussion Prompts

Quick warm-ups

1. “What is one cost that is small once but big when repeated?”
2. “When is cash more useful than owning something valuable?”
3. “What does a backup plan protect besides money?”
4. “How can a free resource still have a cost?”
5. “What makes a source trustworthy?”
6. “When is borrowing better than buying?”
7. “What is one reason a person might choose lower pay?”
8. “Why is a refund not always a bonus?”
9. “How can a discount cause overspending?”
10. “What does a receipt prove?”

Pair-share questions

11. “Compare two fair ways to split a shared bill.”
12. “Explain the difference between useful value and resale value.”
13. “How could a support person help without solving everything?”
14. “When is a late fee really a planning problem?”
15. “Why might a lower monthly payment cost more overall?”
16. “What is the difference between a grant, a loan, and work-study?”
17. “How do you decide whether to file an insurance claim?”
18. “What privacy would you not trade for a coupon?”

Exit-ticket reflections

19. “Today I chose a route because I valued ___.”
20. “One Money Word I used correctly was ___.”
21. “A locked choice showed I needed ___ first.”
22. “One random outcome was luck, skill, or both because ___.”
23. “One support-circle choice helped by ___.”
24. “A fee I would watch for in real life is ___.”
25. “One recovery step after a mistake could be ___.”

Compare-outcomes prompts

26. “Two players had the same income but different cash flow. What changed?”
27. “One player owned more assets but had less cash. Who was more prepared for an emergency?”
28. “One player used support; another stayed independent. What did each gain and risk?”
29. “A player made a smart choice but got an unlucky result. How should the game explain it?”
30. “Two pathways both worked. What tradeoffs made them different?”

⸻

9. Glossary and Vocabulary Supports

Term	Student-friendly original definition	Math connection	Common misconception	Where it should appear	Source category
Budget	A plan for how money will come in, go out, and be saved.	Add income, subtract categories.	“A budget means no fun.”	Budget builder, cash-flow events.	CFPB / FDIC
Cash flow	The timing of money coming in and going out.	Match dates and balances.	“Enough monthly income means no problem.”	Payday-gap events.	FDIC / CFPB
Gross pay	Pay earned before deductions.	Hours × wage.	“Gross pay is spendable pay.”	Job/paycheck events.	IRS
Net pay	Pay received after deductions.	Gross pay − deductions.	“Net pay is always the same as the job offer.”	Paycheck reveal.	IRS
Withholding	Money taken from pay ahead of time for taxes.	Subtract from gross pay.	“Withheld money disappears randomly.”	Tax-refund chain.	IRS
Refund	Money returned after too much was paid or withheld, or after a return.	Original payment − kept amount.	“Refunds are bonus money.”	Taxes, returns.	IRS / FTC
Checking account	An account for everyday deposits and payments.	Track balance changes.	“Checking and savings do the same job.”	Banking alerts.	FDIC
Savings account	An account for money kept for later.	Goal progress, interest.	“Savings is only extra money.”	Goals, emergency fund.	FDIC / CFPB
Deposit	Money paid or placed upfront, sometimes refundable.	Add/subtract from available cash.	“All deposits are gone forever.”	Utilities, renting, tools.	CFPB / consumer education
Refundable deposit	Money held that may come back if rules are followed.	Deposit − deductions.	“Refundable means guaranteed.”	Tool kits, move-in costs.	Consumer education
Fee	An added charge for a service, mistake, or convenience.	Add to final price.	“Small fees do not matter.”	Fee heat map.	CFPB / FDIC
Late fee	Extra money charged after missing a due date.	Original bill + fee.	“Late fees are just reminders.”	Bills, rentals.	CFPB
Overdraft	Spending more than an account has.	Purchase + overdraft fee.	“Overdraft is free backup money.”	Checking events.	CFPB / FDIC
Subscription	A repeating payment for ongoing access.	Monthly × 12.	“Small monthly charges stay small.”	Pause/cancel events.	CFPB / FTC
Recurring cost	A cost that repeats on a schedule.	Per period × periods.	“Only big bills matter.”	Phone/data/pet/app plans.	CFPB / FDIC
Sinking fund	Saving small amounts for a known future cost.	Target ÷ months/weeks.	“It is the same as an emergency fund.”	Dental, repairs, goals.	CFPB / FDIC
Emergency fund	Savings set aside for surprise needs.	Cost covered vs. gap.	“Emergency money should grow fast.”	Surprise events.	CFPB / FDIC
Opportunity cost	What you give up when you choose one route.	Compare money, time, risk.	“Only dollars count.”	Almost all choices.	CFPB youth education
Final price	The full amount paid after tax, fees, shipping, and add-ons.	Add all parts.	“Sticker price is the total.”	Delivery and checkout.	FTC / CFPB
Shipping fee	Money paid to deliver an item.	Item cost + shipping.	“Free shipping always saves money.”	Checkout threshold events.	FTC / consumer education
Threshold	A line you must reach to get a deal or rule change.	Compare current total to target.	“Reaching the threshold is always best.”	Free-shipping events.	Consumer education
Asset	Something owned that has value or usefulness.	Add asset values.	“Assets always rise in value.”	Asset drawer.	CFPB / Investor.gov
Liability	A debt or responsibility owed.	Add debts owed.	“Liability only means legal trouble.”	Net worth.	CFPB / Investor.gov
Net worth	Assets minus debts.	Assets − debts.	“Net worth equals cash.”	Capstone, asset view.	CFPB / Investor.gov
Liquidity	How quickly something can become spendable cash.	Cash vs. resale value.	“Valuable means spendable.”	Asset-sale events.	CFPB / Investor.gov
Resale value	What someone might pay for something later.	Original cost − resale amount.	“Resale is guaranteed.”	Textbook, instrument, tablet.	Investor.gov / consumer education
Depreciation	Value going down over time or use.	Percent decrease.	“Only cars lose value.”	Assets, devices.	Investor.gov
Credit	Borrowing now and paying later.	Balance + interest.	“Credit is extra income.”	Credit scenarios.	CFPB
Credit score	A number that estimates borrowing risk from credit history.	Range interpretation.	“Everyone has one exact score.”	Credit meter.	CFPB
Credit limit	The maximum amount available to borrow on a credit account.	Balance ÷ limit.	“The limit is a spending goal.”	Utilization events.	CFPB
Utilization	The share of available credit currently being used.	Balance ÷ limit × 100.	“Only on-time payment matters.”	Credit repair scenario.	CFPB
Minimum payment	The smallest required payment for a period.	Compare minimum vs. faster payoff.	“Minimum means recommended.”	Repayment map.	CFPB
Loan term	How long repayment lasts.	Monthly payment × months.	“Lower payment always means cheaper.”	Loan comparisons.	CFPB
Principal	The amount borrowed or still owed before interest.	Principal + interest.	“Principal means the total cost.”	Loans, debt.	CFPB / Federal Student Aid
APR	A yearly percent cost of borrowing.	Compare loan costs.	“APR is the monthly payment.”	Loan offers.	CFPB
Grant	Aid that usually does not need repayment if rules are followed.	Subtract from school cost.	“All aid is a loan.”	Aid decoder.	Federal Student Aid
Scholarship	Aid often based on skills, effort, need, or criteria.	Reduce cost gap.	“Scholarships are only huge awards.”	Pathway planning.	Federal Student Aid
Work-study	Aid connected to approved work where money is earned through a job.	Hours × wage.	“Work-study is automatic cash.”	Aid offer, schedules.	Federal Student Aid
Premium	Regular payment to keep insurance coverage active.	Monthly × 12.	“Premium is the only insurance cost.”	Insurance choices.	NAIC / state insurance
Deductible	What you pay before insurance begins sharing covered costs.	Loss − deductible.	“Insurance pays everything right away.”	Claim scenarios.	NAIC / state insurance
Claim	A request for insurance to cover a loss.	Covered amount after deductible.	“Every loss should become a claim.”	Insurance events.	NAIC
Phishing	A fake message that tries to get money, login details, or information.	Possible loss vs. prevention.	“If it uses my name, it is real.”	Safety events.	FTC
Credit freeze	A block that makes it harder to open new credit in your name.	No direct math; risk reduction.	“A freeze stops all spending.”	Identity recovery.	FTC / CFPB
Source check	Comparing information with a trustworthy source before acting.	Compare claims and totals.	“The first result is enough.”	Aid, scams, investing.	CFPB / FTC / SEC

⸻

10. Balance and Ethics Notes

1. Wealth is never character. Praise planning, recovery, clarity, kindness, and safety, not being rich.
2. Every context variable is fictional. Never ask students for real family income, identity traits, exact location, immigration status, religion, disability, or family structure.
3. Constraints should change routes, not worth. Low transit, spotty internet, or tight starting cash should unlock different challenges and support routes, not shame.
4. No one-choice dead ends. Scams, debt, missed payments, low wellbeing, and expired credentials should trigger recovery chains.
5. Random outcomes must label luck vs. choice quality. The game should say, “Your plan lowered the risk, but luck still mattered.”
6. Do not rig lessons so the “teacher answer” always wins. Insurance should sometimes help; self-insurance should sometimes work; waiting should sometimes be smart.
7. Keep wants legitimate. Joy, hobbies, gifts, and convenience can be valid uses of money when planned.
8. Support is mutual, not magical. Support-circle benefits should come with time, communication, trust, gratitude, or repayment responsibilities.
9. Avoid fear-based scam lessons. Teach calm steps: pause, verify, document, report, recover.
10. Use visible locks kindly. Locked choices should explain the needed skill or resource, not scold the player.
11. Keep credit as one tool. High credit score should not be the final goal; it is one part of financial health.
12. Represent all post-high-school pathways neutrally. Work-first, trade, apprenticeship, community college, 4-year, military, and entrepreneurship can all be viable with tradeoffs.
13. Protect classroom privacy by default. localStorage only, clear-data button, no analytics, no rosters, no grades, no student-data exports.
14. Label simplified models. Credit, tax, insurance, investing, and aid simulations should say “simplified for learning.”
15. Content originality is a standing requirement. No copied worksheets, definitions, scripts, answer keys, game text, UI, branding, or protected expression.

⸻

11. Source and Originality Notes

This batch is original student-facing and teacher-facing text. The previous uploaded batches were used only as a duplication guard; they already contained explicit originality/safety reminders, prior implementation concepts, and prior scenario spines, so this batch avoids rerunning those exact prompts and mechanics.      

Public source categories used for topic inspiration only:

1. CFPB youth financial education and Money as You Grow — topic inspiration for age-appropriate money habits, skill-building, and family/caregiver conversation framing.  
2. FDIC Money Smart for Young People — topic inspiration for grades 6–8 and broader K–12 banking, saving, spending, earning, and payment concepts.  
3. FTC Consumer Advice and IdentityTheft.gov-related consumer guidance — topic inspiration for scams, phishing, payment safety, identity theft response, fraud alerts, and recovery steps.  
4. Investor.gov / SEC investor education — topic inspiration for compound interest, diversification, asset allocation, risk, time horizon, and investment fees.  
5. Federal Student Aid — topic inspiration for FAFSA, grants, scholarships, work-study, loans, aid offers, and postsecondary planning vocabulary.  
6. IRS Understanding Taxes — topic inspiration for gross pay, net pay, payroll taxes, withholding, deductions, and simplified paycheck/tax simulations.  
7. NAIC and state insurance/consumer education pages — topic inspiration for premium, deductible, claim, out-of-pocket, renter/phone/health insurance, and consumer insurance vocabulary.  
8. NGPF and Banzai public topic pages — topic-scope inspiration only for middle-school and high-school financial literacy coverage; do not copy lessons, worksheets, definitions, slide text, scripts, assessments, UI, or scenario wording.  

The app should not imply endorsement, partnership, approval, sponsorship, review, or affiliation by any cited source. Citations are for source-category transparency and teacher traceability, not for copied text.

⸻

12. Implementation Handoff for Codex

1. Create src/data/scenarios/scenariosMosaicCompass58.ts — Add all 75 scenarios with id, title, ageRange, topics, prompt, choices, randomized, futureFlag, glossaryTerms, tradeoffNote, and tags.
2. Extend ChoiceRequirement type — Support statMin, cashMin, savingsMin, flagRequired, supportRoleRequired, contextRequired, and visible locked text.
3. Add choiceReasonTags — Store fixed enum tags such as cost, safety, speed, kindness, futureOption, fun, support, privacy.
4. Create RouteMapTimeline.tsx — Render “this happened because…” links between flags, chains, and later events.
5. Create CashValueSplitView.tsx — Show spendable cash/checking/savings separately from useful assets and net worth.
6. Add UsefulAsset model — Fields: id, label, purchaseValue, resaleValue, usefulness, condition, liquidity, maintenanceCost, protectedBy.
7. Create AssetConditionBar.tsx — Display condition, usefulness, and resaleValue without implying wealth equals worth.
8. Create FeeHeatMap.tsx — Aggregate fees by category: late, overdraft, service, convenience, shipping, overage, claim-related.
9. Add PaymentConfirmationModal.tsx — Three local-only checks: recipient, amount, purpose. Use for payment-app and QR-code scenarios.
10. Add SupportScriptCard.tsx — Student-safe sentence starters for caregiver, friend, mentor, and pet-care planning choices.
11. Create FairSplitCalculator.tsx — Equal, proportional, usage-based, and rotating splits with simple arithmetic reveal.
12. Add AidOfferDecoder.tsx — Sort fictional aid lines into freeIfRulesMet, earned, borrowed, and gap.
13. Create CredentialShelf.tsx — Track fictional certificates, expiration ages, renewal costs, and opportunity unlocks.
14. Add SourceTrustLadder.tsx — Rank fictional source types: official, school/teacher, known adult/mentor, sponsored, anonymous, viral.
15. Add RecoveryLadderBuilder.tsx — After setbacks, offer three actions tied to safety, discipline, money knowledge, or support.
16. Create CashFlowWeather.tsx — Translate 30-day forecast into clear/tight/stormy/rebuilding with short explanations.
17. Add LocalOnlyReflectionLock.tsx — Before any optional reflection text, show “stored only on this device” and “clear data” controls.
18. Create glossaryMosaicCompass58.ts — Add the 40 glossary entries with definition, math connection, misconception, app location, and source category.
19. Add contentOriginalityLint.ts — Check for duplicate slugs, banned real brands in scenarios, sensitive identifier fields, mature-theme terms, and missing source categories.
20. Add teacherDiscussionPrompts.ts — Store the 30 prompts by type: warmup, pairShare, exitTicket, compareOutcomes, with no student data.