import type { Choice, Effect, Requirement, ScenarioEvent, Topic } from "../../types/game";

type ResearchMoment = {
  title: string;
  prompt: string;
  reflection: string;
};

type ResearchModule = {
  key: string;
  sourceLabel: string;
  topic: Topic;
  extraTopics: Topic[];
  ageRange: { min: number; max: number };
  evidenceLabel: string;
  balancedLabel: string;
  shortcutLabel: string;
  advancedLabel: string;
  flagKey: string;
  evidenceEffects: Effect[];
  balancedEffects: Effect[];
  shortcutWin: Effect[];
  shortcutLoss: Effect[];
  advancedEffects: Effect[];
  advancedRequirement: Requirement;
  achievementId: string;
  moments: ResearchMoment[];
};

const sourceNote =
  "Original scenario inspired by public finance education topic coverage from CFPB, FDIC, FTC, Investor.gov/SEC, Federal Student Aid, IRS, NGPF, and Banzai; no source text is copied.";

function outcome(id: string, effects: Effect[], feedback: string, logText: string) {
  return { id, probability: 1, effects, feedback, explanation: feedback, logText };
}

function choice(
  id: string,
  label: string,
  effects: Effect[],
  feedback: string,
  logText: string,
  requirements?: Requirement[]
): Choice {
  return { id, label, requirements, outcomes: [outcome(`${id}-normal`, effects, feedback, logText)] };
}

function randomShortcut(module: ResearchModule): Choice {
  return {
    id: "shortcut",
    label: module.shortcutLabel,
    outcomes: [
      {
        id: "shortcut-works",
        probability: 0.42,
        effects: module.shortcutWin,
        feedback: `The shortcut worked this time, but ${module.sourceLabel} style source-checking would make the decision safer next time.`,
        explanation: `The shortcut worked this time, but ${module.sourceLabel} style source-checking would make the decision safer next time.`,
        logText: "You took the quick route and got lucky for now."
      },
      {
        id: "shortcut-costs",
        probability: 0.58,
        effects: module.shortcutLoss,
        feedback: `The shortcut missed an important detail. ${module.sourceLabel} style source-checking would have slowed the mistake down.`,
        explanation: `The shortcut missed an important detail. ${module.sourceLabel} style source-checking would have slowed the mistake down.`,
        logText: "A rushed future-life choice created a cost you did not expect."
      }
    ]
  };
}

function makeEvent(module: ResearchModule, moment: ResearchMoment, index: number): ScenarioEvent {
  return {
    id: `research-${module.key}-${String(index + 1).padStart(2, "0")}`,
    title: moment.title,
    prompt: moment.prompt,
    topics: [module.topic, ...module.extraTopics],
    ageRange: module.ageRange,
    lifeStages: ["high-school", "postsecondary", "early-career", "adult"],
    baseWeight: 26,
    sourceNote,
    reflectionPrompt: `${moment.reflection} Which detail would you want to verify before this future adult decision?`,
    choices: [
      choice(
        "verify-first",
        module.evidenceLabel,
        [...module.evidenceEffects, { type: "flag", key: module.flagKey, value: true }, { type: "achievement", achievementId: module.achievementId }],
        `You used a source-checking habit before acting. ${module.sourceLabel} themes fit this kind of slow, careful choice.`,
        "You paused, checked the real details, and made a clearer adult money decision."
      ),
      choice(
        "balanced-plan",
        module.balancedLabel,
        module.balancedEffects,
        "A balanced option protects the budget while still moving life forward.",
        "You chose a middle path that kept the plan flexible."
      ),
      randomShortcut(module),
      choice(
        "advanced-option",
        module.advancedLabel,
        module.advancedEffects,
        "This stronger option is available because earlier habits created enough money, knowledge, or protection to use it.",
        "Your earlier habits unlocked a better future-life option.",
        [module.advancedRequirement]
      )
    ]
  };
}

const modules: ResearchModule[] = [
  {
    key: "cfpb-spending-plan",
    sourceLabel: "CFPB youth financial education",
    topic: "budgeting",
    extraTopics: ["consumer-skills", "money-values"],
    ageRange: { min: 15, max: 35 },
    evidenceLabel: "Build the spending plan from real bills",
    balancedLabel: "Use a simple weekly check-in",
    shortcutLabel: "Trust the rough monthly guess",
    advancedLabel: "Automate bills and savings together",
    flagKey: "cfpbBudgetCheck",
    evidenceEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 5 }],
    balancedEffects: [{ type: "stat", stat: "discipline", amount: 4 }, { type: "savings", amount: 35 }],
    shortcutWin: [{ type: "cash", amount: 35 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    shortcutLoss: [{ type: "debt", amount: 140 }, { type: "stat", stat: "discipline", amount: -4 }],
    advancedEffects: [{ type: "savings", amount: 180 }, { type: "stat", stat: "discipline", amount: 6 }, { type: "flag", key: "autoSaveOn", value: true }],
    advancedRequirement: { type: "statAtLeast", stat: "discipline", value: 62 },
    achievementId: "first-budget",
    moments: [
      {
        title: "First Utility Bills",
        prompt: "Future you moves into a shared apartment. Rent is posted clearly, but electricity, water, internet, and move-in supplies are harder to predict.",
        reflection: "How does a spending plan make a move-out decision less surprising?"
      },
      {
        title: "Grocery Budget Reset",
        prompt: "A future grocery routine keeps running over budget because small snacks, delivery fees, and forgotten ingredients add up.",
        reflection: "What patterns would you look for before blaming one purchase?"
      },
      {
        title: "Monthly Paycheck Rhythm",
        prompt: "A future job pays monthly, but bills arrive all month. You need a plan so week one does not spend week four's money.",
        reflection: "Why can the timing of money matter as much as the amount?"
      },
      {
        title: "Roommate Shared Costs",
        prompt: "Future roommates want to split rent, streaming, supplies, and internet. Everyone remembers the numbers differently.",
        reflection: "How can a written plan protect relationships and money?"
      }
    ]
  },
  {
    key: "fdic-banking",
    sourceLabel: "FDIC Money Smart banking",
    topic: "banking",
    extraTopics: ["saving", "budgeting"],
    ageRange: { min: 15, max: 35 },
    evidenceLabel: "Compare account fees and protections",
    balancedLabel: "Keep checking and savings separate",
    shortcutLabel: "Open the first account offered",
    advancedLabel: "Use direct deposit split and alerts",
    flagKey: "bankingTermsChecked",
    evidenceEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "trustSafety", amount: 4 }],
    balancedEffects: [{ type: "checking", amount: 50 }, { type: "savings", amount: 50 }, { type: "stat", stat: "discipline", amount: 3 }],
    shortcutWin: [{ type: "checking", amount: 40 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }],
    shortcutLoss: [{ type: "cash", amount: -35 }, { type: "stat", stat: "moneyKnowledge", amount: -2 }],
    advancedEffects: [{ type: "savings", amount: 160 }, { type: "stat", stat: "discipline", amount: 6 }, { type: "flag", key: "bankAlerts", value: true }],
    advancedRequirement: { type: "minCash", value: 50 },
    achievementId: "alert-setter",
    moments: [
      {
        title: "First Adult Checking Account",
        prompt: "Future you needs an account for paychecks. One bank advertises a bonus, another has fewer fees, and a credit union offers strong alerts.",
        reflection: "Which account detail matters after the advertisement is gone?"
      },
      {
        title: "Overdraft Decision",
        prompt: "A debit card purchase might go through even if the balance is low, but the fee could be bigger than the purchase.",
        reflection: "How can alerts and tracking prevent an overdraft spiral?"
      },
      {
        title: "Safe Deposit Habits",
        prompt: "Future you gets paid by check for a temporary job and has to decide where the money should land first.",
        reflection: "How can separating money by purpose change what happens next?"
      },
      {
        title: "Bank App Notification",
        prompt: "Your future banking app offers transaction alerts, low-balance alerts, and password changes. It feels boring until something goes wrong.",
        reflection: "Which alert would protect you most in a busy week?"
      }
    ]
  },
  {
    key: "ftc-fraud",
    sourceLabel: "FTC consumer scam guidance",
    topic: "scams",
    extraTopics: ["banking", "credit"],
    ageRange: { min: 15, max: 35 },
    evidenceLabel: "Use official contact paths",
    balancedLabel: "Pause and ask a trusted person",
    shortcutLabel: "Respond before the offer disappears",
    advancedLabel: "Freeze or lock credit after warning signs",
    flagKey: "officialContactHabit",
    evidenceEffects: [{ type: "stat", stat: "trustSafety", amount: 6 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }],
    balancedEffects: [{ type: "stat", stat: "trustSafety", amount: 4 }, { type: "stat", stat: "wellbeing", amount: 2 }],
    shortcutWin: [{ type: "cash", amount: 25 }, { type: "stat", stat: "trustSafety", amount: -1 }],
    shortcutLoss: [{ type: "debt", amount: 180 }, { type: "stat", stat: "trustSafety", amount: -8 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    advancedEffects: [{ type: "stat", stat: "trustSafety", amount: 8 }, { type: "flag", key: "protectedIdentity", value: true }, { type: "creditScore", amount: 8 }],
    advancedRequirement: { type: "statAtLeast", stat: "trustSafety", value: 64 },
    achievementId: "security-shield",
    moments: [
      {
        title: "Fake Job Deposit",
        prompt: "A future remote job says it will send a check so you can buy work equipment, but it asks you to send leftover money back.",
        reflection: "What clues separate a real job process from a money-moving scam?"
      },
      {
        title: "Payment App Refund",
        prompt: "Someone says they sent money to you by accident and wants an immediate payment app refund.",
        reflection: "Why should speed make you more careful with payment apps?"
      },
      {
        title: "Bank Impostor Call",
        prompt: "A caller says your card is locked and asks for a code that just appeared on your phone.",
        reflection: "What should never be shared with a caller who contacted you first?"
      },
      {
        title: "Data Breach Letter",
        prompt: "Future you receives a real-looking notice that information may have been exposed. The letter includes a link and a deadline.",
        reflection: "How can you respond without giving more information to the wrong place?"
      }
    ]
  },
  {
    key: "investor-risk",
    sourceLabel: "Investor.gov and SEC investor education",
    topic: "investing",
    extraTopics: ["saving", "scams"],
    ageRange: { min: 16, max: 35 },
    evidenceLabel: "Compare risk, fees, and diversification",
    balancedLabel: "Invest a small regular amount",
    shortcutLabel: "Chase the loudest investment trend",
    advancedLabel: "Rebalance a diversified portfolio",
    flagKey: "investmentRiskChecked",
    evidenceEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "stat", stat: "discipline", amount: 3 }],
    balancedEffects: [{ type: "investments", amount: 100 }, { type: "stat", stat: "discipline", amount: 3 }],
    shortcutWin: [{ type: "investments", amount: 160 }, { type: "stat", stat: "wellbeing", amount: 2 }],
    shortcutLoss: [{ type: "investments", amount: -120 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    advancedEffects: [{ type: "investments", amount: 240 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "flag", key: "investingPlan", value: true }],
    advancedRequirement: { type: "minInvestments", value: 100 },
    achievementId: "diversified",
    moments: [
      {
        title: "First Retirement Account",
        prompt: "Future you can start a retirement account. The money would be for later, but time could help small deposits grow.",
        reflection: "How does time change the meaning of a small investment?"
      },
      {
        title: "Market Drop Year",
        prompt: "Your future investments fall during a scary news cycle. Selling would stop the stress, but it could lock in the loss.",
        reflection: "What is the difference between risk and panic?"
      },
      {
        title: "Single Stock Story",
        prompt: "Friends are excited about one company. A diversified option seems less exciting but spreads the risk.",
        reflection: "Why might boring be useful in an investment plan?"
      },
      {
        title: "Too-Good Investment Pitch",
        prompt: "A social media creator claims an investment is low risk, high return, and only available today.",
        reflection: "Which promise makes you slow down the most?"
      }
    ]
  },
  {
    key: "student-aid-path",
    sourceLabel: "Federal Student Aid college planning",
    topic: "life-after-high-school",
    extraTopics: ["credit", "career"],
    ageRange: { min: 16, max: 35 },
    evidenceLabel: "Compare full cost after grants and loans",
    balancedLabel: "Choose a lower-cost path with transfer options",
    shortcutLabel: "Pick the school with the best vibe",
    advancedLabel: "Appeal aid and apply for extra scholarships",
    flagKey: "aidPlan",
    evidenceEffects: [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }],
    balancedEffects: [{ type: "debt", amount: -120 }, { type: "stat", stat: "opportunity", amount: 3 }],
    shortcutWin: [{ type: "stat", stat: "wellbeing", amount: 3 }, { type: "debt", amount: 80 }],
    shortcutLoss: [{ type: "debt", amount: 500 }, { type: "stat", stat: "wellbeing", amount: -5 }],
    advancedEffects: [{ type: "savings", amount: 350 }, { type: "debt", amount: -220 }, { type: "stat", stat: "opportunity", amount: 6 }],
    advancedRequirement: { type: "statAtLeast", stat: "opportunity", value: 62 },
    achievementId: "scholarship-seeker",
    moments: [
      {
        title: "Aid Offer Letter",
        prompt: "Future you receives two aid offers. One has more grants, one has more loans, and both use official-sounding words.",
        reflection: "What should be compared before deciding which offer is actually cheaper?"
      },
      {
        title: "Trade Program Decision",
        prompt: "A certificate program could lead to paid work sooner, while a longer program could open different doors later.",
        reflection: "How can cost, time, and career fit all matter at once?"
      },
      {
        title: "Gap Year Work Plan",
        prompt: "Future you considers a gap year to work, save, and reapply. Without a plan, it could drift.",
        reflection: "What would make a gap year a strategy instead of a pause?"
      },
      {
        title: "Loan Amount Choice",
        prompt: "A school says you can borrow more than tuition to cover life costs. Borrowing less means tighter budgeting now.",
        reflection: "How does borrowing extra today affect choices after graduation?"
      }
    ]
  },
  {
    key: "irs-tax-life",
    sourceLabel: "IRS student and taxpayer education",
    topic: "taxes",
    extraTopics: ["career", "budgeting"],
    ageRange: { min: 16, max: 35 },
    evidenceLabel: "Estimate take-home pay before spending",
    balancedLabel: "Save part of any refund",
    shortcutLabel: "Plan from gross pay only",
    advancedLabel: "Track gig income and set aside taxes",
    flagKey: "taxPlan",
    evidenceEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "stat", stat: "discipline", amount: 3 }],
    balancedEffects: [{ type: "savings", amount: 120 }, { type: "stat", stat: "discipline", amount: 3 }],
    shortcutWin: [{ type: "cash", amount: 70 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }],
    shortcutLoss: [{ type: "cash", amount: -130 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    advancedEffects: [{ type: "taxes", amount: 120 }, { type: "savings", amount: 120 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }],
    advancedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 62 },
    achievementId: "tax-translator",
    moments: [
      {
        title: "First Paystub Surprise",
        prompt: "Future you earns an hourly wage, but the paycheck is lower than hours times pay because taxes and deductions came out.",
        reflection: "Why should a budget use take-home pay instead of gross pay?"
      },
      {
        title: "Refund Plan",
        prompt: "A tax refund arrives. It feels like bonus money, but future you has debt, savings goals, and a few wants.",
        reflection: "How can a refund support both today and later?"
      },
      {
        title: "Side Hustle Records",
        prompt: "A weekend side hustle earns money through apps and cash. Future you has to track income and expenses before tax time.",
        reflection: "What records would make tax time easier?"
      },
      {
        title: "New Job Form",
        prompt: "Future you starts a job and fills out tax paperwork. The choices affect paycheck size and possible refund or bill.",
        reflection: "Why is guessing on official forms risky?"
      }
    ]
  },
  {
    key: "credit-report",
    sourceLabel: "CFPB credit report and credit score education",
    topic: "credit",
    extraTopics: ["consumer-skills", "life-after-high-school"],
    ageRange: { min: 18, max: 35 },
    evidenceLabel: "Check credit report details",
    balancedLabel: "Keep credit use low and pay on time",
    shortcutLabel: "Ignore the credit notice",
    advancedLabel: "Dispute an error with documentation",
    flagKey: "creditReportChecked",
    evidenceEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "creditScore", amount: 12 }],
    balancedEffects: [{ type: "creditScore", amount: 10 }, { type: "stat", stat: "discipline", amount: 4 }],
    shortcutWin: [{ type: "stat", stat: "wellbeing", amount: 1 }, { type: "creditScore", amount: 2 }],
    shortcutLoss: [{ type: "creditScore", amount: -24 }, { type: "debt", amount: 120 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    advancedEffects: [{ type: "creditScore", amount: 26 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "flag", key: "creditPlan", value: true }],
    advancedRequirement: { type: "hasCredit", value: true },
    achievementId: "credit-climber",
    moments: [
      {
        title: "Apartment Credit Check",
        prompt: "Future you applies for an apartment. The landlord checks credit, payment history, and income before approving the lease.",
        reflection: "How can today payment habits affect future housing options?"
      },
      {
        title: "Credit Report Error",
        prompt: "A debt you do not recognize appears on a future credit report. It might be a mistake or a warning sign.",
        reflection: "What evidence would help correct a credit report problem?"
      },
      {
        title: "Credit Utilization Month",
        prompt: "Future you has a credit card balance close to the limit. The payment is current, but the high balance still matters.",
        reflection: "Why can using too much available credit be a signal?"
      },
      {
        title: "Loan Rate Comparison",
        prompt: "Two lenders offer the same loan amount. One monthly payment looks lower because the loan lasts longer.",
        reflection: "Why should total cost and rate be compared with monthly payment?"
      }
    ]
  },
  {
    key: "insurance-risk",
    sourceLabel: "Public insurance and risk education",
    topic: "insurance",
    extraTopics: ["budgeting", "saving"],
    ageRange: { min: 16, max: 35 },
    evidenceLabel: "Compare premium, deductible, and risk",
    balancedLabel: "Choose coverage for the biggest realistic loss",
    shortcutLabel: "Skip coverage to save cash",
    advancedLabel: "Pair insurance with emergency savings",
    flagKey: "riskPlan",
    evidenceEffects: [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }],
    balancedEffects: [{ type: "cash", amount: -45 }, { type: "stat", stat: "trustSafety", amount: 4 }, { type: "flag", key: "insured", value: true }],
    shortcutWin: [{ type: "cash", amount: 95 }, { type: "stat", stat: "trustSafety", amount: -2 }],
    shortcutLoss: [{ type: "debt", amount: 420 }, { type: "stat", stat: "wellbeing", amount: -8 }, { type: "stat", stat: "trustSafety", amount: -5 }],
    advancedEffects: [{ type: "savings", amount: 150 }, { type: "stat", stat: "trustSafety", amount: 6 }, { type: "flag", key: "insured", value: true }],
    advancedRequirement: { type: "minSavings", value: 250 },
    achievementId: "insurance-aware",
    moments: [
      {
        title: "Renter Storm Damage",
        prompt: "Future you rents an apartment. A storm damages belongings, and the lease does not replace your personal items.",
        reflection: "Which losses would be too big to handle without protection?"
      },
      {
        title: "Teen Driver Budget",
        prompt: "Future you adds driving to the budget. Insurance, gas, maintenance, and deductibles all compete with freedom.",
        reflection: "Why is the car payment not the full transportation cost?"
      },
      {
        title: "Health Deductible Choice",
        prompt: "Two future health plans have different premiums and deductibles. The cheaper monthly plan could cost more in a bad year.",
        reflection: "How can you compare monthly cost with possible emergency cost?"
      },
      {
        title: "Phone Protection Plan",
        prompt: "A store offers protection for a new phone. Future you has savings, but replacing the phone would still hurt.",
        reflection: "When is self-insuring with savings reasonable?"
      }
    ]
  },
  {
    key: "career-path",
    sourceLabel: "Career and workforce education sources",
    topic: "career",
    extraTopics: ["life-after-high-school", "budgeting"],
    ageRange: { min: 15, max: 35 },
    evidenceLabel: "Research pay, growth, training, and fit",
    balancedLabel: "Pick a path with a backup option",
    shortcutLabel: "Choose only by starting pay",
    advancedLabel: "Negotiate or ask about total compensation",
    flagKey: "careerPlan",
    evidenceEffects: [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }],
    balancedEffects: [{ type: "income", amount: 250 }, { type: "stat", stat: "opportunity", amount: 4 }],
    shortcutWin: [{ type: "income", amount: 500 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    shortcutLoss: [{ type: "income", amount: 80 }, { type: "stat", stat: "wellbeing", amount: -5 }],
    advancedEffects: [{ type: "income", amount: 650 }, { type: "savings", amount: 180 }, { type: "stat", stat: "opportunity", amount: 5 }],
    advancedRequirement: { type: "statAtLeast", stat: "opportunity", value: 64 },
    achievementId: "career-explorer",
    moments: [
      {
        title: "Benefits Versus Pay",
        prompt: "Future you compares two jobs. One pays more hourly, while the other includes training, health coverage, and a retirement match.",
        reflection: "How can benefits change the true value of a job?"
      },
      {
        title: "AI Skill Shift",
        prompt: "A future career field changes quickly because new tools affect the work. You can ignore it, panic, or learn a useful skill.",
        reflection: "How can learning protect opportunity during change?"
      },
      {
        title: "Salary Offer Moment",
        prompt: "Future you receives a job offer. The number is exciting, but the employer may expect respectful questions.",
        reflection: "What information would you gather before accepting?"
      },
      {
        title: "Career Location Choice",
        prompt: "A higher-paying job is in a more expensive area. Another job pays less but has lower rent and transportation costs.",
        reflection: "Why should cost of living be part of a career choice?"
      }
    ]
  },
  {
    key: "adult-budget-traps",
    sourceLabel: "NGPF QOD, Banzai, and public consumer education themes",
    topic: "consumer-skills",
    extraTopics: ["budgeting", "credit"],
    ageRange: { min: 15, max: 35 },
    evidenceLabel: "Convert small payments into yearly cost",
    balancedLabel: "Keep one want and cut one trap",
    shortcutLabel: "Say yes because the payment is small",
    advancedLabel: "Cancel, negotiate, and redirect money to goals",
    flagKey: "subscriptionAudit",
    evidenceEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 4 }],
    balancedEffects: [{ type: "savings", amount: 80 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    shortcutWin: [{ type: "stat", stat: "wellbeing", amount: 2 }, { type: "cash", amount: -35 }],
    shortcutLoss: [{ type: "debt", amount: 160 }, { type: "stat", stat: "discipline", amount: -5 }],
    advancedEffects: [{ type: "savings", amount: 220 }, { type: "stat", stat: "discipline", amount: 6 }, { type: "debt", amount: -80 }],
    advancedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 64 },
    achievementId: "subscription-sleuth",
    moments: [
      {
        title: "Subscription Creep",
        prompt: "Future you signs up for music, video, storage, delivery, and a gym app. Each one feels small until the monthly total appears.",
        reflection: "How can a monthly charge hide its yearly cost?"
      },
      {
        title: "Buy Now Pay Later Cart",
        prompt: "A future online cart offers four easy payments. The item is not urgent, but the payment looks tiny.",
        reflection: "When does splitting a payment make a want feel cheaper than it is?"
      },
      {
        title: "Concert Weekend Budget",
        prompt: "Future friends invite you to a concert weekend. Tickets are only the start: food, rides, fees, and merch also matter.",
        reflection: "How can you protect fun without wrecking the month?"
      },
      {
        title: "Moving Out Starter Kit",
        prompt: "Future you needs furniture, cleaning supplies, groceries, and deposits at the same time. The store card offers a discount today.",
        reflection: "How can one big life change create many small money decisions?"
      }
    ]
  }
];

export const officialResearchExpansionEvents: ScenarioEvent[] = modules.flatMap((module) =>
  module.moments.map((moment, index) => makeEvent(module, moment, index))
);
