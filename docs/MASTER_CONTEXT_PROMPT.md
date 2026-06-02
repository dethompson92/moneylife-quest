# MoneyLife Quest Deep Context Generator Prompt

Copy this prompt into GPT-5.5 Pro, Claude Opus, or another high-reasoning model whenever you want a fresh batch of rich scenario ideas, teacher context, and feature recommendations for MoneyLife Quest. Paste the result back into Codex.

```text
You are an expert middle-school financial literacy curriculum designer, text-life-sim game writer, classroom UX researcher, 7th-grade math teacher, educational game systems designer, and originality/licensing reviewer.

I am building MoneyLife Quest, a school-safe browser game for 7th-grade students. It is a financial-literacy life simulator inspired only by broad text-life-sim mechanics: fictional character, age-up loop, life log, stats, modal decisions, activities, goals, badges, compounding consequences, and final reflection. Do not copy BitLife branding, UI, artwork, names, event text, source code, mature themes, or protected expression. Do not copy NGPF, Banzai, Napkin Finance, worksheets, answer keys, game scripts, or slide text. Use public resources only as topic inspiration and write original student-facing material.

Current app facts:
- Static React/Vite/TypeScript app deployed on GitHub Pages.
- No backend, login, ads, analytics, external APIs, or student data collection.
- Saves use localStorage only.
- Audience: 7th-grade students, classroom Chromebooks, 15-45 minute lessons.
- Teacher materials are only for classroom planning and must not include confidential answers, student data, rosters, or grades.
- Current gameplay starts at age 12 and ages through future adult outcomes.
- Current stats: wellbeing, moneyKnowledge, discipline, trustSafety, opportunity, creditScore/null, cash, checking, savings, investments, debtTotal, netWorth.
- Current relationship/support-circle idea: family/caregiver, friend, mentor, and pet support. Keep it school-safe and finance-connected.
- Desired tone: middle-school readable, specific, realistic, kind, never shaming, and full of tradeoffs where more than one choice can be reasonable.

Research themes to use as inspiration:
- Money values, needs/wants, opportunity cost, behavioral economics, habits, peer pressure.
- Consumer skills, comparison shopping, unit rates, receipts, subscriptions, payment apps, BNPL, shipping fees, returns.
- Budgeting, 50/30/20 as a flexible rule of thumb, cash flow, gross vs net pay, taxes, refunds, side-hustle records.
- Banking, checking vs savings, account fees, overdraft, alerts, direct deposit, debit cards, mobile banking.
- Saving, emergency funds, short-term goals, compound interest, Rule of 72, sinking funds.
- Credit, credit reports, credit scores, utilization, minimum payments, loan comparison, predatory lending, car loans.
- Investing, diversification, index funds/funds, risk, volatility, long time horizons, fees, investment scams.
- Protecting yourself, phishing, identity theft, impostor scams, ransomware, password reuse, 2FA, payment-app scams.
- Insurance, premiums, deductibles, renter/auto/health/phone insurance, risk pooling, when savings can self-insure.
- Career and life after high school, resumes, interviews, soft skills, salary negotiation, AI/job shifts, trade/community college/4-year/work-first/military/apprenticeship pathways, scholarships, FAFSA, student loans.
- 7th-grade math skills: percentages, decimals, unit rates, proportional reasoning, simple interest, compound growth intuition, tax/tip/discount, budgets, tables, graphs, interpreting totals, multi-step word problems.

Use reputable/public source categories as context. Prefer official or primary sources when making factual claims: CFPB, FDIC Money Smart, FTC Consumer Advice, Investor.gov/SEC, Federal Student Aid, IRS Understanding Taxes, state insurance/consumer education pages, NGPF public hub pages, Banzai public topic pages. Attribute source categories but do not copy their wording.

Important novelty instruction:
- Generate a fresh batch that does not repeat obvious examples like birthday money, first credit card, unit price comparison, or generic phishing text unless you put a new twist on them.
- If I paste previous batches below, avoid duplicates and explicitly call out which ideas are new.
- Use a random creative seed of your own choosing and name it at the top.

Return your answer in this exact structure:

1. Executive Research Synthesis
Give 12-18 concise, high-value insights that should shape the app. Make them practical for game design, not generic finance advice. Include why each matters for a 7th-grade classroom.

2. New Feature Recommendations
Give 15-25 features or systems that could make MoneyLife Quest deeper. For each include:
- Feature name
- Student-facing purpose
- Teacher value
- Data/state needed
- Risk or privacy concern
- MVP version
- Stretch version

3. Scenario Systems and Chains
Design 10-15 multi-event chains. Each chain should have 3-6 connected events where earlier choices set flags that affect later outcomes. Examples of chain types: subscription creep, emergency fund, credit history, first apartment, car ownership, payment apps, identity theft recovery, investing downturn, career pathway, college aid, entrepreneurship, insurance claim, family support, mentor advice, pet responsibility.

For each chain include:
- Chain title
- Learning target
- Trigger ages/life stages
- Required flags
- Events in order
- How choices compound
- Possible endings

4. Fresh Scenario Bank
Generate 75 original scenarios. Each scenario must be a future-life or near-future decision students could imagine eventually facing. Use this schema:
- id slug
- title
- age range
- topics
- prompt, 2-4 sentences
- 3-4 choices
- for each choice: label, short description, visible locked requirement if any, outcome summary, effects in plain language, feedback, reflection prompt
- randomized outcome? yes/no
- future flag set? yes/no and flag name
- tradeoff note explaining why the choice is not simply right/wrong

Requirements for this scenario bank:
- At least 25 mixed-tradeoff scenarios.
- At least 15 locked-choice scenarios.
- At least 15 randomized-outcome scenarios.
- At least 20 scenarios must set a future flag.
- At least 12 scenarios must include a relationship/support-circle element.
- At least 12 scenarios must use 7th-grade math explicitly.
- At least 10 scenarios must involve assets, net worth, or ownership decisions.
- Avoid mature content, dating/sex, drugs, crime-as-gameplay, gambling, alcohol, or student PII.

5. Relationship and Support Circle Ideas
Suggest 25 school-safe ways family/caregiver, friend, mentor, and pet relationships can affect finance gameplay. Include interactions, possible benefits, possible costs, and reflection questions.

6. Assets and Net Worth Ideas
Suggest 25 age-appropriate assets or ownership concepts for the game, such as bike, phone, laptop, certification, tools, car fund, emergency supplies, small business inventory, savings bond-like placeholder, diversified fund placeholder, renter deposit, etc. For each explain how it can gain/lose value and what math it teaches.

7. Teacher Discussion Prompts
Create 30 discussion prompts. Mix quick warm-ups, pair-share questions, exit-ticket reflections, and compare-outcomes prompts.

8. Balance and Ethics Notes
List 15 balancing rules that keep the game fair, non-shaming, realistic, and replayable. Include how to avoid implying that wealth equals character, how to represent constraints, and how to show recovery from mistakes.

9. Source and Originality Notes
List the public source categories that inspired the batch. Do not quote long passages. Include a reminder that the app should write original scenario text and should not imply endorsement by any source.

10. Implementation Handoff for Codex
Summarize the top 20 most implementable items from this batch as a concise engineering handoff. Include suggested files/modules if helpful, but do not assume the exact codebase.

Optional previous-batch context to avoid repeating:
[PASTE PREVIOUS MODEL OUTPUTS HERE IF YOU HAVE THEM]
```
