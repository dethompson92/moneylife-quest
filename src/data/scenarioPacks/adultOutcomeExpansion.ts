import type { Choice, Effect, Requirement, ScenarioEvent, Topic } from "../../types/game";

type AdultMoment = {
  title: string;
  prompt: string;
  reflection: string;
};

type AdultModule = {
  key: string;
  topic: Topic;
  extraTopics: Topic[];
  ageRange: { min: number; max: number };
  carefulLabel: string;
  compromiseLabel: string;
  riskyLabel: string;
  advancedLabel: string;
  flagKey: string;
  carefulEffects: Effect[];
  compromiseEffects: Effect[];
  riskyWin: Effect[];
  riskyLoss: Effect[];
  advancedEffects: Effect[];
  advancedRequirement: Requirement;
  moments: AdultMoment[];
};

const sourceNote = "Original future-adult-outcome scenario inspired by classroom future-life budgeting themes and public financial literacy resources.";

function outcome(id: string, effects: Effect[], feedback: string, logText: string) {
  return { id, probability: 1, effects, feedback, explanation: feedback, logText };
}

function choice(id: string, label: string, effects: Effect[], feedback: string, logText: string, requirements?: Requirement[]): Choice {
  return { id, label, requirements, outcomes: [outcome(`${id}-normal`, effects, feedback, logText)] };
}

function riskyChoice(id: string, label: string, win: Effect[], loss: Effect[], context: string): Choice {
  return {
    id,
    label,
    outcomes: [
      {
        id: `${id}-works`,
        probability: 0.38,
        effects: win,
        feedback: `The risky adult choice worked this time, but ${context.toLowerCase()} still needs a backup plan.`,
        explanation: `The risky adult choice worked this time, but ${context.toLowerCase()} still needs a backup plan.`,
        logText: `The risky path worked for now, but it stayed risky.`
      },
      {
        id: `${id}-costs`,
        probability: 0.62,
        effects: loss,
        feedback: `The risky adult choice created a cost because ${context.toLowerCase()} was not fully planned.`,
        explanation: `The risky adult choice created a cost because ${context.toLowerCase()} was not fully planned.`,
        logText: `The risky path created a future cost.`
      }
    ]
  };
}

function makeEvent(module: AdultModule, moment: AdultMoment, index: number): ScenarioEvent {
  return {
    id: `adult-${module.key}-${String(index + 1).padStart(2, "0")}`,
    title: moment.title,
    prompt: moment.prompt,
    topics: [module.topic, ...module.extraTopics],
    ageRange: module.ageRange,
    baseWeight: 24,
    sourceNote,
    reflectionPrompt: moment.reflection,
    choices: [
      choice(
        "careful-plan",
        module.carefulLabel,
        [...module.carefulEffects, { type: "flag", key: module.flagKey, value: true }],
        "Planning with real adult numbers gives future you more choices.",
        "You used real numbers and made a future-ready choice."
      ),
      choice(
        "realistic-compromise",
        module.compromiseLabel,
        module.compromiseEffects,
        "A realistic compromise can protect the budget without making life feel impossible.",
        "You adjusted the choice to fit the budget."
      ),
      riskyChoice("risky-leap", module.riskyLabel, module.riskyWin, module.riskyLoss, moment.title),
      choice(
        "advanced-option",
        module.advancedLabel,
        module.advancedEffects,
        "The stronger option is available because earlier habits created room for it.",
        "Your earlier habits unlocked a stronger future option.",
        [module.advancedRequirement]
      )
    ]
  };
}

const adultModules: AdultModule[] = [
  {
    key: "income-pathway",
    topic: "career",
    extraTopics: ["life-after-high-school", "taxes"],
    ageRange: { min: 16, max: 35 },
    carefulLabel: "Research Year 1 income first",
    compromiseLabel: "Start with a realistic entry role",
    riskyLabel: "Assume the top salary right away",
    advancedLabel: "Use training to raise income later",
    flagKey: "careerResearchPlan",
    carefulEffects: [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "career-explorer" }],
    compromiseEffects: [{ type: "income", amount: 320 }, { type: "stat", stat: "wellbeing", amount: 2 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "income", amount: 900 }, { type: "stat", stat: "wellbeing", amount: 4 }],
    riskyLoss: [{ type: "income", amount: -180 }, { type: "debt", amount: 140 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    advancedEffects: [{ type: "income", amount: 760 }, { type: "stat", stat: "opportunity", amount: 6 }, { type: "achievement", achievementId: "career-explorer" }],
    advancedRequirement: { type: "statAtLeast", stat: "opportunity", value: 66 },
    moments: [
      { title: "Year 1 Job Offer", prompt: "Your future plan starts with a first-year job offer. The dream title pays more later, but the entry role is what you can actually get now.", reflection: "How should a first-year income plan balance ambition with evidence?" },
      { title: "Hourly Schedule", prompt: "You can work more hours for more income, but the schedule cuts into school, sleep, and training time.", reflection: "When does extra income start costing too much time?" },
      { title: "Training Certificate", prompt: "A short training program could increase future pay, but it has an upfront cost and takes weekends.", reflection: "How can training be both a cost and an investment?" },
      { title: "Relocation Choice", prompt: "A job in another city pays more but raises rent, transportation, and support costs.", reflection: "Why does income need to be compared with cost of living?" },
      { title: "Soft Skills Feedback", prompt: "A manager says communication and reliability could help you move up faster.", reflection: "Which non-money skills can change money outcomes?" },
      { title: "Career Pivot", prompt: "Your first pathway is not working as expected. You can quit suddenly, plan a pivot, or stack new skills.", reflection: "What makes a career change financially safer?" },
      { title: "Side Income", prompt: "A side gig can add money, but taxes, time, and transportation change the real value.", reflection: "How do you know whether extra work is worth it?" },
      { title: "Negotiation Moment", prompt: "You receive a job offer and wonder whether to ask about pay, schedule, or benefits.", reflection: "What evidence makes negotiation more respectful and realistic?" }
    ]
  },
  {
    key: "tax-net-pay",
    topic: "taxes",
    extraTopics: ["budgeting", "career"],
    ageRange: { min: 16, max: 35 },
    carefulLabel: "Budget with net pay",
    compromiseLabel: "Set aside a tax cushion",
    riskyLabel: "Spend based on gross pay",
    advancedLabel: "Review paycheck deductions",
    flagKey: "netPayPlan",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "tax-translator" }],
    compromiseEffects: [{ type: "savings", amount: 70 }, { type: "taxes", amount: 40 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "cash", amount: 120 }, { type: "stat", stat: "wellbeing", amount: 2 }],
    riskyLoss: [{ type: "debt", amount: 180 }, { type: "stat", stat: "moneyKnowledge", amount: -2 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    advancedEffects: [{ type: "cash", amount: 90 }, { type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "achievement", achievementId: "refund-ready" }],
    advancedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 65 },
    moments: [
      { title: "First Take-Home Pay", prompt: "Your first adult paycheck is smaller than salary divided by twelve because taxes and deductions came out.", reflection: "Why should a budget start with take-home pay?" },
      { title: "Refund Plan", prompt: "A tax refund arrives. It feels like bonus money, but your debt and emergency fund are also asking for attention.", reflection: "How could a refund serve more than one goal?" },
      { title: "Gig Work Taxes", prompt: "A gig app pays you without withholding taxes. The money lands now, but tax time comes later.", reflection: "Why can untaxed income surprise people?" },
      { title: "W-4 Question", prompt: "A new job asks for tax withholding information. You can guess, ask for help, or use an estimator.", reflection: "What makes a tax form a planning tool?" },
      { title: "Payroll Deduction", prompt: "You can pay for health coverage or retirement through payroll deduction, lowering cash today.", reflection: "When can smaller take-home pay still be a good decision?" },
      { title: "State Move", prompt: "A job in another state changes taxes and paycheck estimates.", reflection: "Why do location and taxes belong in the same budget conversation?" },
      { title: "Side Hustle Records", prompt: "You earned money selling items online and need to track expenses and income.", reflection: "How can records protect a future tax return?" },
      { title: "Tax Filing Deadline", prompt: "The filing deadline is approaching. You can file early, rush late, or ignore it.", reflection: "How does procrastination create money stress?" }
    ]
  },
  {
    key: "pathway-debt",
    topic: "credit",
    extraTopics: ["life-after-high-school", "career"],
    ageRange: { min: 17, max: 35 },
    carefulLabel: "Compare total pathway cost",
    compromiseLabel: "Choose a lower-cost first step",
    riskyLabel: "Borrow without calculating payments",
    advancedLabel: "Use aid, work, or savings to reduce borrowing",
    flagKey: "pathwayCostPlan",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "flag", key: "comparedLoan", value: true }],
    compromiseEffects: [{ type: "debt", amount: 110 }, { type: "stat", stat: "opportunity", amount: 3 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "debt", amount: 260 }],
    riskyLoss: [{ type: "debt", amount: 620 }, { type: "creditScore", amount: -18 }, { type: "stat", stat: "wellbeing", amount: -5 }],
    advancedEffects: [{ type: "debt", amount: -160 }, { type: "stat", stat: "opportunity", amount: 5 }, { type: "achievement", achievementId: "scholarship-seeker" }],
    advancedRequirement: { type: "statAtLeast", stat: "discipline", value: 64 },
    moments: [
      { title: "Community College Bridge", prompt: "A lower-cost first step could transfer later, but some friends say it feels less exciting.", reflection: "How can pride affect pathway costs?" },
      { title: "Trade Tool Kit", prompt: "A trade pathway has tool and certification costs before higher wages arrive.", reflection: "What upfront costs belong in a pathway plan?" },
      { title: "Four-Year Offer", prompt: "A college acceptance arrives with grants, loans, and a remaining gap.", reflection: "Which part of an aid offer is free money and which part is debt?" },
      { title: "Work-First Plan", prompt: "You can work full-time now and train later, but income growth may be slower at first.", reflection: "How can a work-first path still include future training?" },
      { title: "Certificate Deadline", prompt: "A certificate program has a deadline and a payment plan.", reflection: "What questions should be answered before signing up?" },
      { title: "Loan Grace Period", prompt: "Student loan payments do not start immediately, so the cost feels far away.", reflection: "Why do delayed payments still belong in today's choice?" },
      { title: "Apprenticeship Option", prompt: "An apprenticeship pays while training, but spots are competitive.", reflection: "How can opportunity and uncertainty both be true?" },
      { title: "Financial Aid Appeal", prompt: "Your family situation changed, and you can either accept the first aid offer or ask about an appeal.", reflection: "When is it worth respectfully asking for another review?" }
    ]
  },
  {
    key: "housing-utilities",
    topic: "budgeting",
    extraTopics: ["insurance", "life-after-high-school"],
    ageRange: { min: 18, max: 35 },
    carefulLabel: "Keep housing near 30% of net pay",
    compromiseLabel: "Pick the simpler starter place",
    riskyLabel: "Choose the dream place first",
    advancedLabel: "Negotiate, compare, and add renter protection",
    flagKey: "housingAffordabilityPlan",
    carefulEffects: [{ type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }],
    compromiseEffects: [{ type: "cash", amount: 80 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 5 }, { type: "cash", amount: -160 }],
    riskyLoss: [{ type: "debt", amount: 420 }, { type: "stat", stat: "wellbeing", amount: -7 }, { type: "stat", stat: "discipline", amount: -4 }],
    advancedEffects: [{ type: "cash", amount: 130 }, { type: "flag", key: "insuranceCoverage", value: true }, { type: "achievement", achievementId: "insurance-aware" }],
    advancedRequirement: { type: "minSavings", value: 250 },
    moments: [
      { title: "Apartment Tour", prompt: "An apartment looks perfect online, but the rent uses a large share of monthly net pay.", reflection: "What does housing percent reveal that rent alone does not?" },
      { title: "Utility Estimate", prompt: "Rent is affordable, but electricity, internet, water, and heat are not included.", reflection: "Why are utilities part of housing, even when they are separate bills?" },
      { title: "Roommate Agreement", prompt: "A roommate lowers costs but requires shared rules about bills, guests, and chores.", reflection: "What non-money agreement protects a shared budget?" },
      { title: "Security Deposit", prompt: "Moving in requires first month, deposit, and small setup fees.", reflection: "Why does moving require savings before the first rent payment?" },
      { title: "Renter Insurance", prompt: "You can add a low-cost renter policy or hope nothing happens to your belongings.", reflection: "What risk does renter protection cover?" },
      { title: "Furniture Choice", prompt: "You can furnish slowly, finance furniture, or buy secondhand.", reflection: "How can a home look unfinished and still be financially smart?" },
      { title: "Lease Fine Print", prompt: "The lease has rules about late fees, pets, parking, and early move-out.", reflection: "Which lease detail could change the real cost?" },
      { title: "Utility Spike", prompt: "A cold month makes the heating bill jump.", reflection: "How can a budget prepare for bills that change by season?" }
    ]
  },
  {
    key: "transportation",
    topic: "budgeting",
    extraTopics: ["consumer-skills", "insurance"],
    ageRange: { min: 16, max: 35 },
    carefulLabel: "Calculate monthly total and unit rate",
    compromiseLabel: "Mix transit, rides, and walking",
    riskyLabel: "Look only at the car payment",
    advancedLabel: "Choose the option with lower total ownership cost",
    flagKey: "transportationMathPlan",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }],
    compromiseEffects: [{ type: "cash", amount: 70 }, { type: "stat", stat: "wellbeing", amount: -1 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 4 }, { type: "debt", amount: 220 }],
    riskyLoss: [{ type: "debt", amount: 560 }, { type: "cash", amount: -120 }, { type: "stat", stat: "wellbeing", amount: -6 }],
    advancedEffects: [{ type: "cash", amount: 160 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "achievement", achievementId: "smart-shopper-guide" }],
    advancedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 66 },
    moments: [
      { title: "Transit Pass or Car", prompt: "A transit pass costs less, but a car gives flexibility for work and family needs.", reflection: "How do convenience and total cost compete?" },
      { title: "Gas Price Jump", prompt: "Gas costs rise during your commute-heavy month.", reflection: "Why should transportation budgets include changeable costs?" },
      { title: "Used Car Inspection", prompt: "A cheap used car is available, but no mechanic has inspected it.", reflection: "How can a low price become expensive later?" },
      { title: "Parking Fee", prompt: "The job is downtown, and monthly parking changes the commute math.", reflection: "Which hidden transportation cost is easiest to forget?" },
      { title: "Insurance Quote", prompt: "Adding auto insurance makes the car budget tighter.", reflection: "Why does driving require more than a payment and gas?" },
      { title: "Rideshare Habit", prompt: "Rideshares solve late mornings but quietly become a weekly pattern.", reflection: "How do small convenience costs become a category?" },
      { title: "Bike Commute", prompt: "A bike commute saves money but needs safety gear and weather backup.", reflection: "What makes a low-cost option realistic?" },
      { title: "Repair Emergency", prompt: "A repair bill arrives right when rent is due.", reflection: "How does an emergency fund change a transportation surprise?" }
    ]
  },
  {
    key: "insurance-risk",
    topic: "insurance",
    extraTopics: ["budgeting", "scams"],
    ageRange: { min: 16, max: 35 },
    carefulLabel: "Compare premium, deductible, and risk",
    compromiseLabel: "Buy essential coverage first",
    riskyLabel: "Skip coverage to save monthly cash",
    advancedLabel: "Build a deductible fund",
    flagKey: "riskProtectionPlan",
    carefulEffects: [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "risk-ready" }],
    compromiseEffects: [{ type: "cash", amount: -45 }, { type: "stat", stat: "trustSafety", amount: 3 }, { type: "flag", key: "insured", value: true }],
    riskyWin: [{ type: "cash", amount: 90 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyLoss: [{ type: "debt", amount: 520 }, { type: "stat", stat: "wellbeing", amount: -7 }, { type: "stat", stat: "trustSafety", amount: -5 }],
    advancedEffects: [{ type: "savings", amount: 140 }, { type: "stat", stat: "trustSafety", amount: 5 }, { type: "achievement", achievementId: "insurance-aware" }],
    advancedRequirement: { type: "minSavings", value: 300 },
    moments: [
      { title: "Health Deductible", prompt: "A health plan has a lower premium but a higher deductible.", reflection: "Why should deductible risk be part of the monthly plan?" },
      { title: "Phone Protection", prompt: "A protection plan for your phone costs extra each month.", reflection: "When is self-insuring with savings better than buying coverage?" },
      { title: "Auto Claim", prompt: "A small accident creates a claim decision and a deductible.", reflection: "Why is the cheapest policy not always the safest choice?" },
      { title: "Renter Loss", prompt: "A pipe leak damages belongings in an apartment.", reflection: "How can renter coverage protect more than the landlord's building?" },
      { title: "Insurance Scam Call", prompt: "A caller says you must pay immediately to keep coverage.", reflection: "How can official contact paths prevent scam payments?" },
      { title: "Open Enrollment", prompt: "A benefits window closes soon, and you need to choose coverage for next year.", reflection: "Why are deadlines part of insurance planning?" },
      { title: "Emergency Room Bill", prompt: "A medical bill arrives higher than expected.", reflection: "What questions should someone ask before panicking or paying?" },
      { title: "Pet or Hobby Risk", prompt: "A future hobby or pet adds joy but also potential costs.", reflection: "How do lifestyle choices create protection needs?" }
    ]
  },
  {
    key: "food-consumer",
    topic: "consumer-skills",
    extraTopics: ["budgeting", "taxes"],
    ageRange: { min: 14, max: 35 },
    carefulLabel: "Compare unit rates and final cost",
    compromiseLabel: "Plan groceries plus limited eating out",
    riskyLabel: "Use delivery whenever busy",
    advancedLabel: "Meal plan with sale and tax math",
    flagKey: "foodMathPlan",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "cash", amount: 35 }, { type: "achievement", achievementId: "receipt-detective" }],
    compromiseEffects: [{ type: "cash", amount: 20 }, { type: "stat", stat: "wellbeing", amount: 2 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 4 }, { type: "cash", amount: -80 }],
    riskyLoss: [{ type: "debt", amount: 120 }, { type: "cash", amount: -75 }, { type: "stat", stat: "discipline", amount: -4 }],
    advancedEffects: [{ type: "cash", amount: 95 }, { type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "achievement", achievementId: "smart-shopper-guide" }],
    advancedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 68 },
    moments: [
      { title: "Grocery Unit Rate", prompt: "Two sizes of the same food have different prices, discounts, and sales tax rules.", reflection: "How does unit rate protect you from confusing prices?" },
      { title: "Delivery Fee Stack", prompt: "A delivery order adds service fees, tip, and higher menu prices.", reflection: "Why should final cost be checked before checkout?" },
      { title: "Meal Prep Sunday", prompt: "A little planning could lower weekday food spending, but it takes time.", reflection: "How can time spent planning save money later?" },
      { title: "Store Brand Test", prompt: "A store brand is cheaper, but you are not sure about quality.", reflection: "How do quality and cost both belong in consumer choices?" },
      { title: "Bulk Buy Question", prompt: "Bulk groceries cost less per unit but require cash now and storage space.", reflection: "When does a bulk discount make sense?" },
      { title: "Eating Out Social Life", prompt: "Friends want weekly restaurant nights, and you want to keep the friendship.", reflection: "How can social spending fit without taking over?" },
      { title: "Coupon Minimum", prompt: "A coupon works only if you spend more than planned.", reflection: "When does a coupon stop saving money?" },
      { title: "Receipt Review", prompt: "A grocery receipt includes a duplicate charge.", reflection: "Why is checking receipts a life skill, not just a school task?" }
    ]
  },
  {
    key: "lifestyle-subscriptions",
    topic: "money-values",
    extraTopics: ["budgeting", "consumer-skills"],
    ageRange: { min: 14, max: 35 },
    carefulLabel: "Audit recurring costs",
    compromiseLabel: "Keep the top two services",
    riskyLabel: "Keep every subscription active",
    advancedLabel: "Set a lifestyle spending cap",
    flagKey: "lifestyleAuditPlan",
    carefulEffects: [{ type: "stat", stat: "discipline", amount: 5 }, { type: "cash", amount: 60 }],
    compromiseEffects: [{ type: "stat", stat: "wellbeing", amount: 3 }, { type: "cash", amount: 25 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 5 }, { type: "cash", amount: -70 }],
    riskyLoss: [{ type: "debt", amount: 130 }, { type: "stat", stat: "discipline", amount: -5 }, { type: "stat", stat: "wellbeing", amount: -3 }],
    advancedEffects: [{ type: "savings", amount: 120 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "achievement", achievementId: "balanced-planner" }],
    advancedRequirement: { type: "statAtLeast", stat: "discipline", value: 68 },
    moments: [
      { title: "Subscription Creep", prompt: "Music, video, cloud storage, and game subscriptions all renew this month.", reflection: "How can small monthly costs become one big choice?" },
      { title: "Phone Plan Upgrade", prompt: "A phone upgrade adds a device payment to the monthly bill.", reflection: "Why should a device payment be treated like debt?" },
      { title: "Concert Budget", prompt: "A concert ticket is affordable, but travel, food, and merch change the total.", reflection: "What makes an experience worth the full cost?" },
      { title: "Clothing Refresh", prompt: "A new job has a dress code, and you need work clothes without overspending.", reflection: "How can spending support opportunity without becoming impulse?" },
      { title: "Fitness Membership", prompt: "A gym membership sounds healthy, but a free routine could also work.", reflection: "When is paying for a habit worth it?" },
      { title: "Travel Wish", prompt: "A weekend trip would be memorable but uses money set aside for moving costs.", reflection: "How do values and timing shape wants?" },
      { title: "Personal Care Budget", prompt: "Haircuts, skincare, and hygiene are partly needs and partly preferences.", reflection: "How do categories blur between need and want?" },
      { title: "Gift Season", prompt: "Several birthdays arrive close together.", reflection: "How can generosity be planned instead of panicked?" }
    ]
  },
  {
    key: "savings-investing",
    topic: "saving",
    extraTopics: ["investing", "budgeting"],
    ageRange: { min: 15, max: 35 },
    carefulLabel: "Save first, then invest steadily",
    compromiseLabel: "Split money between emergency and growth",
    riskyLabel: "Invest before having a cushion",
    advancedLabel: "Use a long-term automated plan",
    flagKey: "futureMoneyPlan",
    carefulEffects: [{ type: "savings", amount: 120 }, { type: "investments", amount: 50 }, { type: "stat", stat: "discipline", amount: 4 }],
    compromiseEffects: [{ type: "savings", amount: 65 }, { type: "investments", amount: 65 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }],
    riskyWin: [{ type: "investments", amount: 180 }, { type: "stat", stat: "wellbeing", amount: 3 }],
    riskyLoss: [{ type: "investments", amount: -120 }, { type: "debt", amount: 90 }, { type: "stat", stat: "wellbeing", amount: -5 }],
    advancedEffects: [{ type: "investments", amount: 220 }, { type: "savings", amount: 100 }, { type: "achievement", achievementId: "long-game-investor" }],
    advancedRequirement: { type: "minSavings", value: 400 },
    moments: [
      { title: "Emergency Fund Target", prompt: "Your budget finally has a surplus, and you can decide how much becomes emergency savings.", reflection: "Why is savings part of the budget, not leftover money?" },
      { title: "Rule of 72 Moment", prompt: "A future-you calculation shows how long money might take to double at a given return.", reflection: "What does doubling time teach about patience?" },
      { title: "Market Downturn", prompt: "Investments drop during a bad year, but your emergency fund is still intact.", reflection: "How can savings keep you from selling investments at the worst time?" },
      { title: "Retirement Match", prompt: "A job offers matching dollars if you contribute part of your paycheck.", reflection: "Why can a match be part of pay?" },
      { title: "Short Goal vs Long Goal", prompt: "You need money in six months and also want long-term growth.", reflection: "How does timeline decide whether money should be saved or invested?" },
      { title: "Diversification Check", prompt: "One investment has grown big, making your portfolio less balanced.", reflection: "Why can a winner still create too much risk?" },
      { title: "Speculative Hype", prompt: "A risky online investment trend promises fast gains.", reflection: "What should you understand before risking money?" },
      { title: "Automated Transfer", prompt: "An automatic transfer could save money before you see it in checking.", reflection: "How can automation make a habit easier?" }
    ]
  },
  {
    key: "budget-revision",
    topic: "budgeting",
    extraTopics: ["money-values", "life-after-high-school"],
    ageRange: { min: 16, max: 35 },
    carefulLabel: "Revise the budget until it balances",
    compromiseLabel: "Trim one flexible category",
    riskyLabel: "Ignore the deficit",
    advancedLabel: "Use a surplus plan with savings, debt, and joy",
    flagKey: "budgetRevisionPlan",
    carefulEffects: [{ type: "stat", stat: "discipline", amount: 6 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "budget-rebuilder" }],
    compromiseEffects: [{ type: "cash", amount: 80 }, { type: "stat", stat: "wellbeing", amount: -1 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyWin: [{ type: "cash", amount: 40 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyLoss: [{ type: "debt", amount: 240 }, { type: "stat", stat: "wellbeing", amount: -6 }, { type: "stat", stat: "discipline", amount: -5 }],
    advancedEffects: [{ type: "savings", amount: 140 }, { type: "debt", amount: -90 }, { type: "stat", stat: "wellbeing", amount: 3 }, { type: "achievement", achievementId: "balanced-planner" }],
    advancedRequirement: { type: "statAtLeast", stat: "discipline", value: 70 },
    moments: [
      { title: "Budget Deficit", prompt: "Your future monthly expenses are higher than take-home pay.", reflection: "What should change first when expenses beat income?" },
      { title: "Budget Surplus", prompt: "Your plan has money left over after expenses.", reflection: "How can a surplus support savings, debt payoff, and happiness?" },
      { title: "Final Dashboard", prompt: "All categories are entered, and one number looks unrealistic.", reflection: "Why is revision part of responsible planning?" },
      { title: "Needs Wants Goals", prompt: "A category you called a need may actually be adjustable.", reflection: "How can a budget reveal a mislabeled want?" },
      { title: "Source Check", prompt: "A final budget number has no source or explanation.", reflection: "Why does evidence matter when making a future plan?" },
      { title: "Tradeoff Story", prompt: "Your final plan needs to explain the biggest choice you made.", reflection: "What tradeoff taught you the most about adulthood?" },
      { title: "Advice to Future You", prompt: "You are writing advice to your future self after seeing the full budget.", reflection: "What habit would help future you the most?" },
      { title: "Gallery Walk", prompt: "Another student chose a very different pathway with different costs.", reflection: "How can comparing plans build empathy instead of competition?" }
    ]
  }
];

export const adultOutcomeEvents: ScenarioEvent[] = adultModules.flatMap((module) =>
  module.moments.map((moment, index) => makeEvent(module, moment, index))
);
