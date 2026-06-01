import type { Choice, Effect, Requirement, ScenarioEvent, Topic } from "../../types/game";

type MathMoment = {
  title: string;
  prompt: string;
  reflection: string;
};

type MathModule = {
  key: string;
  topic: Topic;
  extraTopics: Topic[];
  ageRange: { min: number; max: number };
  mathSkill: string;
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
  moments: MathMoment[];
};

const sourceNote =
  "Original 7th-grade financial math scenario inspired by Humble Math financial literacy practice themes; no workbook text is copied.";

function normalOutcome(id: string, effects: Effect[], feedback: string, logText: string) {
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
  return { id, label, requirements, outcomes: [normalOutcome(`${id}-normal`, effects, feedback, logText)] };
}

function estimateChoice(id: string, label: string, win: Effect[], loss: Effect[], mathSkill: string): Choice {
  return {
    id,
    label,
    outcomes: [
      {
        id: `${id}-close`,
        probability: 0.45,
        effects: win,
        feedback: `Your estimate was close enough to guide the choice. ${mathSkill} helps when exact math would slow you down.`,
        explanation: `Your estimate was close enough to guide the choice. ${mathSkill} helps when exact math would slow you down.`,
        logText: "You used a quick estimate and it worked this time."
      },
      {
        id: `${id}-miss`,
        probability: 0.55,
        effects: loss,
        feedback: `The estimate missed an important cost. ${mathSkill} is useful, but checking the actual numbers protects your budget.`,
        explanation: `The estimate missed an important cost. ${mathSkill} is useful, but checking the actual numbers protects your budget.`,
        logText: "A rough estimate missed part of the real cost."
      }
    ]
  };
}

function makeEvent(module: MathModule, moment: MathMoment, index: number): ScenarioEvent {
  return {
    id: `math-${module.key}-${String(index + 1).padStart(2, "0")}`,
    title: moment.title,
    prompt: moment.prompt,
    topics: [module.topic, ...module.extraTopics],
    ageRange: module.ageRange,
    baseWeight: 23,
    sourceNote,
    reflectionPrompt: `${moment.reflection} Which numbers helped you decide?`,
    choices: [
      choice(
        "show-the-math",
        module.carefulLabel,
        [...module.carefulEffects, { type: "flag", key: module.flagKey, value: true }],
        `You used ${module.mathSkill} before choosing, so the decision was based on evidence instead of a guess.`,
        "You did the math first and made a clearer future-life choice."
      ),
      choice(
        "reasonable-adjustment",
        module.compromiseLabel,
        module.compromiseEffects,
        "A realistic adjustment can protect the budget while still leaving room for real life.",
        "You adjusted the plan so the numbers fit better."
      ),
      estimateChoice("mental-estimate", module.riskyLabel, module.riskyWin, module.riskyLoss, module.mathSkill),
      choice(
        "advanced-planner",
        module.advancedLabel,
        module.advancedEffects,
        "The stronger choice is available because earlier money habits created enough room to use it.",
        "Your earlier habits unlocked a more flexible math-based choice.",
        [module.advancedRequirement]
      )
    ]
  };
}

const modules: MathModule[] = [
  {
    key: "earning-hours",
    topic: "career",
    extraTopics: ["budgeting", "taxes"],
    ageRange: { min: 14, max: 35 },
    mathSkill: "multiplying hourly pay by hours and comparing gross pay to take-home pay",
    carefulLabel: "Calculate weekly and yearly pay",
    compromiseLabel: "Pick fewer hours and protect school time",
    riskyLabel: "Estimate the paycheck in your head",
    advancedLabel: "Build a net-pay budget from the paystub",
    flagKey: "mathEarningHours",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 4 }],
    compromiseEffects: [{ type: "income", amount: 180 }, { type: "stat", stat: "wellbeing", amount: 2 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "income", amount: 260 }, { type: "stat", stat: "wellbeing", amount: 2 }],
    riskyLoss: [{ type: "cash", amount: -85 }, { type: "stat", stat: "wellbeing", amount: -3 }, { type: "stat", stat: "moneyKnowledge", amount: -1 }],
    advancedEffects: [{ type: "income", amount: 360 }, { type: "taxes", amount: 35 }, { type: "achievement", achievementId: "tax-translator" }],
    advancedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 62 },
    moments: [
      {
        title: "Future Summer Schedule",
        prompt: "At age 17, you compare a summer job at $14 per hour for 20 hours a week with one at $12 per hour for 28 hours a week. One pays more, but one leaves more time for classwork.",
        reflection: "How did multiplying rate by hours change the way the two jobs looked?"
      },
      {
        title: "Overtime Offer",
        prompt: "At a future hourly job, your manager offers extra hours for a busy week. The extra pay helps, but transportation and homework time also matter.",
        reflection: "When is extra income worth the extra hours?"
      },
      {
        title: "Gross Pay Surprise",
        prompt: "Your first adult paycheck is smaller than expected because taxes and deductions came out. You need to rebuild the budget using take-home pay.",
        reflection: "Why is gross pay not the same as spendable money?"
      },
      {
        title: "Two-Part Income",
        prompt: "You work a steady part-time job and sometimes earn weekend event pay. Your future apartment budget needs a number you can actually count on.",
        reflection: "Which income should be used for regular bills, and why?"
      }
    ]
  },
  {
    key: "education-roi",
    topic: "life-after-high-school",
    extraTopics: ["career", "credit"],
    ageRange: { min: 15, max: 35 },
    mathSkill: "subtracting program costs and comparing pay changes over time",
    carefulLabel: "Compare total cost and pay increase",
    compromiseLabel: "Start with the lower-cost pathway",
    riskyLabel: "Choose based on the most exciting title",
    advancedLabel: "Use aid to lower the amount borrowed",
    flagKey: "mathEducationRoi",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 4 }],
    compromiseEffects: [{ type: "debt", amount: 120 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "debt", amount: 260 }],
    riskyLoss: [{ type: "debt", amount: 540 }, { type: "stat", stat: "wellbeing", amount: -5 }, { type: "creditScore", amount: -12 }],
    advancedEffects: [{ type: "debt", amount: -180 }, { type: "stat", stat: "opportunity", amount: 5 }, { type: "achievement", achievementId: "scholarship-seeker" }],
    advancedRequirement: { type: "statAtLeast", stat: "opportunity", value: 64 },
    moments: [
      {
        title: "Certificate or Degree",
        prompt: "Your future career goal has two possible training paths. A shorter certificate costs less now, while a longer degree may create more options later.",
        reflection: "How can subtracting costs and comparing future pay make a pathway choice clearer?"
      },
      {
        title: "Payback Timeline",
        prompt: "A training program could raise your yearly pay, but you would borrow money to finish it. You estimate how many years it would take for the raise to cover the cost.",
        reflection: "Why does a payback timeline matter before borrowing?"
      },
      {
        title: "Apprenticeship Math",
        prompt: "An apprenticeship pays while you learn, but the starting wage is lower than a job you can get right now.",
        reflection: "How can a lower starting wage still be a long-term investment?"
      },
      {
        title: "Transfer Plan",
        prompt: "You can begin at a lower-cost college and transfer later. You need to compare tuition, credits, and the amount you may borrow.",
        reflection: "Which costs should be added before deciding which path is cheaper?"
      }
    ]
  },
  {
    key: "subscriptions",
    topic: "budgeting",
    extraTopics: ["consumer-skills", "banking"],
    ageRange: { min: 13, max: 35 },
    mathSkill: "converting monthly, quarterly, and yearly prices to the same time period",
    carefulLabel: "Convert every subscription to annual cost",
    compromiseLabel: "Keep one service and cancel one",
    riskyLabel: "Trust that small monthly prices are fine",
    advancedLabel: "Move annual savings to an emergency fund",
    flagKey: "mathSubscriptionAnnual",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 4 }],
    compromiseEffects: [{ type: "cash", amount: 95 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 3 }, { type: "cash", amount: -50 }],
    riskyLoss: [{ type: "debt", amount: 160 }, { type: "stat", stat: "discipline", amount: -4 }, { type: "stat", stat: "wellbeing", amount: -3 }],
    advancedEffects: [{ type: "savings", amount: 140 }, { type: "achievement", achievementId: "budget-rebuilder" }, { type: "stat", stat: "discipline", amount: 3 }],
    advancedRequirement: { type: "minCash", value: 120 },
    moments: [
      {
        title: "Streaming Stack",
        prompt: "Future you has three entertainment subscriptions: one monthly, one quarterly, and one annual. The monthly prices look small until you compare the yearly totals.",
        reflection: "Why do all subscription prices need the same time unit?"
      },
      {
        title: "Annual Plan Discount",
        prompt: "A study app offers a monthly plan and an annual plan. The annual plan is cheaper only if you use it most of the year.",
        reflection: "How many months would make the annual plan worth it?"
      },
      {
        title: "Free Trial Calendar",
        prompt: "A free trial turns into a paid subscription next month. Future you has to decide whether to set a reminder or hope you remember.",
        reflection: "How can a calendar reminder protect a budget?"
      },
      {
        title: "Software Bundle",
        prompt: "A future side project needs editing software. You can pay monthly, quarterly, or buy a year upfront.",
        reflection: "What does the total yearly cost reveal that the monthly price hides?"
      }
    ]
  },
  {
    key: "budget-percent",
    topic: "budgeting",
    extraTopics: ["life-after-high-school", "saving"],
    ageRange: { min: 13, max: 35 },
    mathSkill: "using percentages of income to build budget categories",
    carefulLabel: "Set category percentages before spending",
    compromiseLabel: "Adjust wants down for one month",
    riskyLabel: "Spend first and see what is left",
    advancedLabel: "Automate a percent into savings",
    flagKey: "mathBudgetPercent",
    carefulEffects: [{ type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "first-budget" }],
    compromiseEffects: [{ type: "cash", amount: 80 }, { type: "stat", stat: "wellbeing", amount: -1 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 3 }, { type: "cash", amount: -60 }],
    riskyLoss: [{ type: "debt", amount: 190 }, { type: "stat", stat: "discipline", amount: -5 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    advancedEffects: [{ type: "savings", amount: 160 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "alert-setter" }],
    advancedRequirement: { type: "statAtLeast", stat: "discipline", value: 62 },
    moments: [
      {
        title: "First Apartment Categories",
        prompt: "You imagine adult rent, food, transportation, savings, and fun. The budget works only if the percentages add up to 100 or less.",
        reflection: "Why should a percent budget add up before the month begins?"
      },
      {
        title: "Income Change",
        prompt: "Your future monthly income rises. You can raise every category, or keep some categories steady and raise savings.",
        reflection: "How does proportional reasoning help when income changes?"
      },
      {
        title: "Budget Pie Chart",
        prompt: "A pie chart shows wants taking a larger slice than needs, savings, and debt payments combined. You need to rebalance it.",
        reflection: "What does a visual budget show quickly?"
      },
      {
        title: "One-Month Reset",
        prompt: "A busy month pushed your spending off plan. You can guess next month or use the old numbers to set new limits.",
        reflection: "How can last month's numbers improve next month's plan?"
      }
    ]
  },
  {
    key: "emergency-ratio",
    topic: "saving",
    extraTopics: ["budgeting", "insurance"],
    ageRange: { min: 13, max: 35 },
    mathSkill: "multiplying monthly expenses by months of emergency coverage",
    carefulLabel: "Calculate one, three, and six months of expenses",
    compromiseLabel: "Start with a one-month mini fund",
    riskyLabel: "Assume emergencies are unlikely",
    advancedLabel: "Separate emergency savings from spending money",
    flagKey: "mathEmergencyMonths",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 4 }],
    compromiseEffects: [{ type: "savings", amount: 100 }, { type: "stat", stat: "wellbeing", amount: 2 }],
    riskyWin: [{ type: "cash", amount: 70 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyLoss: [{ type: "debt", amount: 260 }, { type: "stat", stat: "wellbeing", amount: -5 }, { type: "creditScore", amount: -8 }],
    advancedEffects: [{ type: "savings", amount: 220 }, { type: "achievement", achievementId: "emergency-started" }, { type: "stat", stat: "discipline", amount: 3 }],
    advancedRequirement: { type: "minSavings", value: 150 },
    moments: [
      {
        title: "Future Emergency Target",
        prompt: "Your future bills are about $1,200 a month. You compare a one-month, three-month, and six-month emergency fund.",
        reflection: "Why does multiplying monthly expenses by months make the savings target more realistic?"
      },
      {
        title: "Car Repair Buffer",
        prompt: "A future repair could cost hundreds of dollars. You can save slowly, use a card later, or skip the plan.",
        reflection: "How does saving before an emergency change the options after it happens?"
      },
      {
        title: "Job Gap Plan",
        prompt: "Future you thinks about what would happen if a job ended suddenly. The budget needs enough saved time to search for another job.",
        reflection: "Why can emergency funds be measured in months instead of dollars only?"
      },
      {
        title: "Medical Copay Month",
        prompt: "A surprise medical bill and a regular utility bill arrive in the same week. Your savings plan gets tested.",
        reflection: "How do small emergency funds reduce stress even before they are huge?"
      }
    ]
  },
  {
    key: "discount-tax",
    topic: "consumer-skills",
    extraTopics: ["taxes", "budgeting"],
    ageRange: { min: 13, max: 35 },
    mathSkill: "calculating discount first, then sales tax on the sale price",
    carefulLabel: "Calculate discount, sale price, tax, and total",
    compromiseLabel: "Wait until the final total fits the budget",
    riskyLabel: "Look only at the sale sticker",
    advancedLabel: "Use the savings difference toward a goal",
    flagKey: "mathDiscountTax",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "achievement", achievementId: "smart-shopper-guide" }],
    compromiseEffects: [{ type: "cash", amount: 70 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 3 }, { type: "cash", amount: -45 }],
    riskyLoss: [{ type: "cash", amount: -120 }, { type: "stat", stat: "moneyKnowledge", amount: -2 }, { type: "stat", stat: "wellbeing", amount: -3 }],
    advancedEffects: [{ type: "savings", amount: 90 }, { type: "stat", stat: "discipline", amount: 4 }],
    advancedRequirement: { type: "minCash", value: 80 },
    moments: [
      {
        title: "Laptop Sale Total",
        prompt: "Future you finds a laptop with a percent discount, but sales tax still applies. The real question is the final total, not the discount sign.",
        reflection: "Why does the order of discount and tax matter?"
      },
      {
        title: "Work Shoes Coupon",
        prompt: "You need shoes for a future job. One store has a lower sticker price, while another has a coupon and tax added at checkout.",
        reflection: "How can two-step percent math reveal the better choice?"
      },
      {
        title: "Holiday Sale Pressure",
        prompt: "A limited-time sale makes a want feel urgent. You can calculate the after-tax price or let the timer decide.",
        reflection: "How can math slow down pressure from a sale?"
      },
      {
        title: "Back-to-School Supplies",
        prompt: "You compare a discount code, a flat coupon, and regular sales tax for a future school supply run.",
        reflection: "When is a dollar-off coupon better than a percent-off coupon?"
      }
    ]
  },
  {
    key: "unit-price",
    topic: "consumer-skills",
    extraTopics: ["budgeting", "saving"],
    ageRange: { min: 13, max: 35 },
    mathSkill: "dividing price by units to compare unit rates",
    carefulLabel: "Compare cost per unit before buying",
    compromiseLabel: "Buy the smaller size to avoid waste",
    riskyLabel: "Assume the biggest package is cheapest",
    advancedLabel: "Stock up only because you will use it",
    flagKey: "mathUnitPrice",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "cash", amount: 50 }, { type: "achievement", achievementId: "receipt-detective" }],
    compromiseEffects: [{ type: "cash", amount: 35 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "cash", amount: 65 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyLoss: [{ type: "cash", amount: -95 }, { type: "stat", stat: "discipline", amount: -3 }, { type: "stat", stat: "wellbeing", amount: -2 }],
    advancedEffects: [{ type: "savings", amount: 110 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }],
    advancedRequirement: { type: "minSavings", value: 120 },
    moments: [
      {
        title: "Grocery Unit Rate",
        prompt: "Future you is grocery shopping. A bulk box is bigger, but the smaller box may have the lower price per ounce.",
        reflection: "Why does unit price beat package size when comparing value?"
      },
      {
        title: "Transit Ticket Bundle",
        prompt: "A future commute offers single rides, a 10-ride pack, and a monthly pass. The best deal depends on how often you ride.",
        reflection: "How does cost per ride change the transportation decision?"
      },
      {
        title: "Party Snack Budget",
        prompt: "You are hosting friends and compare snack packs by cost per serving. Buying too much would waste money.",
        reflection: "How can unit rate and realistic quantity both matter?"
      },
      {
        title: "Household Supplies",
        prompt: "Future you compares laundry detergent sizes. The lowest unit price is only helpful if you can store and use it.",
        reflection: "When can a good unit price still be the wrong purchase?"
      }
    ]
  },
  {
    key: "tips-estimation",
    topic: "consumer-skills",
    extraTopics: ["budgeting", "taxes"],
    ageRange: { min: 14, max: 35 },
    mathSkill: "estimating 10%, 15%, and 20% tips from a rounded bill",
    carefulLabel: "Estimate the tip and total before ordering",
    compromiseLabel: "Choose a lower-cost order and tip well",
    riskyLabel: "Order first and calculate at the table",
    advancedLabel: "Set a dining-out budget for the month",
    flagKey: "mathTipEstimate",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 4 }],
    compromiseEffects: [{ type: "cash", amount: 55 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 4 }, { type: "cash", amount: -35 }],
    riskyLoss: [{ type: "cash", amount: -105 }, { type: "stat", stat: "discipline", amount: -3 }, { type: "stat", stat: "wellbeing", amount: -2 }],
    advancedEffects: [{ type: "savings", amount: 80 }, { type: "stat", stat: "discipline", amount: 3 }],
    advancedRequirement: { type: "statAtLeast", stat: "discipline", value: 60 },
    moments: [
      {
        title: "Restaurant Total",
        prompt: "Future you eats out with friends. The menu price is not the final cost because tax and tip still need to be added.",
        reflection: "How can estimating a tip before ordering prevent overspending?"
      },
      {
        title: "Rideshare Tip",
        prompt: "A future rideshare app suggests tip percentages after the ride. You want to be generous without ignoring the transportation budget.",
        reflection: "How can percent estimates support both fairness and planning?"
      },
      {
        title: "Delivery Fee Stack",
        prompt: "A delivery order adds service fees, tax, and tip. The meal starts cheap but the total grows.",
        reflection: "Which added costs should be included before deciding?"
      },
      {
        title: "Celebration Dinner",
        prompt: "A birthday dinner is coming up. Future you can choose a restaurant after estimating meal, tax, tip, and transportation.",
        reflection: "How can estimation make a special event feel planned instead of stressful?"
      }
    ]
  },
  {
    key: "savings-interest",
    topic: "saving",
    extraTopics: ["banking", "investing"],
    ageRange: { min: 13, max: 35 },
    mathSkill: "using simple interest and compound interest to compare savings growth",
    carefulLabel: "Compare balances after interest",
    compromiseLabel: "Start with a small recurring deposit",
    riskyLabel: "Wait until income is higher to start",
    advancedLabel: "Choose the higher-rate account with no fee",
    flagKey: "mathSavingsInterest",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "savings", amount: 90 }],
    compromiseEffects: [{ type: "savings", amount: 120 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyWin: [{ type: "cash", amount: 90 }, { type: "stat", stat: "wellbeing", amount: 2 }],
    riskyLoss: [{ type: "savings", amount: -60 }, { type: "stat", stat: "discipline", amount: -3 }, { type: "stat", stat: "moneyKnowledge", amount: -1 }],
    advancedEffects: [{ type: "savings", amount: 210 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "compound-growth" }],
    advancedRequirement: { type: "minSavings", value: 200 },
    moments: [
      {
        title: "Bank Interest Choice",
        prompt: "Future you compares two savings accounts. One has a higher interest rate, but another has easier access and no balance rules.",
        reflection: "How can interest rate and account rules both matter?"
      },
      {
        title: "Simple or Compound",
        prompt: "You compare money that earns interest once versus money that keeps interest in the account so it can earn more.",
        reflection: "Why does compound interest grow faster than simple interest?"
      },
      {
        title: "Earlier Savings",
        prompt: "Future you can save a small amount now or wait and save a larger amount later.",
        reflection: "What does time do for savings growth?"
      },
      {
        title: "Account Fee Check",
        prompt: "A savings account pays interest but charges a monthly fee if the balance is too low.",
        reflection: "Why should fees be subtracted before calling an account a better deal?"
      }
    ]
  },
  {
    key: "loan-interest",
    topic: "credit",
    extraTopics: ["banking", "budgeting"],
    ageRange: { min: 15, max: 35 },
    mathSkill: "multiplying principal by interest rate and comparing loan terms",
    carefulLabel: "Compare total interest, not just monthly payment",
    compromiseLabel: "Borrow less and delay the purchase",
    riskyLabel: "Pick the lowest monthly payment",
    advancedLabel: "Make an early payment after keeping a cushion",
    flagKey: "mathLoanInterest",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "creditScore", amount: 10 }],
    compromiseEffects: [{ type: "debt", amount: -120 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyWin: [{ type: "cash", amount: 120 }, { type: "debt", amount: 170 }],
    riskyLoss: [{ type: "debt", amount: 420 }, { type: "creditScore", amount: -16 }, { type: "stat", stat: "wellbeing", amount: -5 }],
    advancedEffects: [{ type: "debt", amount: -240 }, { type: "creditScore", amount: 12 }, { type: "achievement", achievementId: "debt-dodger" }],
    advancedRequirement: { type: "minSavings", value: 250 },
    moments: [
      {
        title: "Used Car Loan",
        prompt: "Future you compares two used-car loans. One has a lower monthly payment because the term is longer, but it may cost more in interest.",
        reflection: "Why can a smaller monthly payment cost more overall?"
      },
      {
        title: "Credit Card Balance",
        prompt: "A future credit card balance can be paid in full or carried with interest. The interest rate turns time into extra cost.",
        reflection: "How does interest change the price of something already bought?"
      },
      {
        title: "Laptop Payment Plan",
        prompt: "A payment plan makes a laptop affordable today, but fees and interest change the total price.",
        reflection: "What should be added before calling a payment plan affordable?"
      },
      {
        title: "Early Payment Decision",
        prompt: "You have extra cash and a loan balance. Paying early saves interest, but using every dollar could leave no emergency cushion.",
        reflection: "How should savings and debt payoff be balanced?"
      }
    ]
  },
  {
    key: "inflation-investing",
    topic: "investing",
    extraTopics: ["saving", "consumer-skills"],
    ageRange: { min: 14, max: 35 },
    mathSkill: "comparing percent growth with inflation and risk",
    carefulLabel: "Compare growth rate with inflation",
    compromiseLabel: "Split money between savings and a diversified fund",
    riskyLabel: "Chase the highest possible return",
    advancedLabel: "Rebalance after a market change",
    flagKey: "mathInflationInvesting",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }],
    compromiseEffects: [{ type: "savings", amount: 70 }, { type: "investments", amount: 100 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyWin: [{ type: "investments", amount: 260 }, { type: "stat", stat: "wellbeing", amount: 3 }],
    riskyLoss: [{ type: "investments", amount: -220 }, { type: "stat", stat: "wellbeing", amount: -5 }, { type: "stat", stat: "moneyKnowledge", amount: -2 }],
    advancedEffects: [{ type: "investments", amount: 210 }, { type: "achievement", achievementId: "diversified" }, { type: "stat", stat: "moneyKnowledge", amount: 4 }],
    advancedRequirement: { type: "minInvestments", value: 150 },
    moments: [
      {
        title: "Inflation and a Bike",
        prompt: "Future prices rise faster than a basic savings account. You compare whether your money is keeping its purchasing power.",
        reflection: "Why can a balance grow while buying power shrinks?"
      },
      {
        title: "Diversified Fund Choice",
        prompt: "You can put money in cash, one exciting company, or a diversified fund. The percent return could be positive or negative.",
        reflection: "How does spreading risk change the decision?"
      },
      {
        title: "Market Drop Month",
        prompt: "Your future investment account falls this year. You can panic sell, keep a plan, or rebalance.",
        reflection: "Why should long-term investments be judged over more than one month?"
      },
      {
        title: "Rule-of-72 Estimate",
        prompt: "You use a quick doubling-time estimate to compare possible investment growth rates.",
        reflection: "How can an estimate help without pretending the future is guaranteed?"
      }
    ]
  },
  {
    key: "business-profit",
    topic: "career",
    extraTopics: ["consumer-skills", "budgeting"],
    ageRange: { min: 14, max: 35 },
    mathSkill: "subtracting expenses from revenue to estimate profit or loss",
    carefulLabel: "Calculate revenue, expenses, and profit",
    compromiseLabel: "Test the idea with a small first batch",
    riskyLabel: "Buy inventory before checking demand",
    advancedLabel: "Price for profit and customer value",
    flagKey: "mathBusinessProfit",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 4 }],
    compromiseEffects: [{ type: "cash", amount: 90 }, { type: "stat", stat: "discipline", amount: 2 }, { type: "stat", stat: "opportunity", amount: 2 }],
    riskyWin: [{ type: "cash", amount: 240 }, { type: "stat", stat: "wellbeing", amount: 4 }],
    riskyLoss: [{ type: "cash", amount: -180 }, { type: "stat", stat: "wellbeing", amount: -4 }, { type: "stat", stat: "discipline", amount: -3 }],
    advancedEffects: [{ type: "cash", amount: 220 }, { type: "achievement", achievementId: "entrepreneurial-thinker" }, { type: "stat", stat: "opportunity", amount: 4 }],
    advancedRequirement: { type: "statAtLeast", stat: "opportunity", value: 62 },
    moments: [
      {
        title: "Pop-Up Snack Stand",
        prompt: "Future you wants to sell snacks at a weekend event. Revenue looks exciting, but ingredients, packaging, and fees come out first.",
        reflection: "Why is profit different from money collected?"
      },
      {
        title: "Custom Shirt Order",
        prompt: "A school club asks future you to make custom shirts. A bulk order lowers unit cost, but unsold shirts could become a loss.",
        reflection: "How does unit cost affect pricing and profit?"
      },
      {
        title: "Marketing Budget",
        prompt: "You can promote a small future business for free, pay a little, or spend a lot. More attention might bring more sales, but it is not guaranteed.",
        reflection: "How can advertising be both an expense and an investment?"
      },
      {
        title: "Hire a Helper",
        prompt: "A future side business is growing. Hiring help increases expenses, but it could let you serve more customers.",
        reflection: "When can a higher expense create higher profit?"
      }
    ]
  },
  {
    key: "receipt-change",
    topic: "consumer-skills",
    extraTopics: ["budgeting", "banking"],
    ageRange: { min: 13, max: 35 },
    mathSkill: "adding purchases, subtracting payments, and checking receipts",
    carefulLabel: "Check the receipt and change",
    compromiseLabel: "Ask politely about one unclear charge",
    riskyLabel: "Assume the register is always right",
    advancedLabel: "Track the receipt in your budget app",
    flagKey: "mathReceiptCheck",
    carefulEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "cash", amount: 35 }, { type: "achievement", achievementId: "receipt-detective" }],
    compromiseEffects: [{ type: "cash", amount: 25 }, { type: "stat", stat: "trustSafety", amount: 2 }],
    riskyWin: [{ type: "stat", stat: "wellbeing", amount: 1 }],
    riskyLoss: [{ type: "cash", amount: -70 }, { type: "stat", stat: "discipline", amount: -2 }, { type: "stat", stat: "moneyKnowledge", amount: -1 }],
    advancedEffects: [{ type: "stat", stat: "discipline", amount: 4 }, { type: "cash", amount: 45 }],
    advancedRequirement: { type: "statAtLeast", stat: "discipline", value: 58 },
    moments: [
      {
        title: "Receipt Error",
        prompt: "Future you notices a sale item scanned at full price. The difference is small, but the habit matters.",
        reflection: "Why is checking a receipt a math skill and a consumer skill?"
      },
      {
        title: "Cash Change",
        prompt: "You pay with cash at a future market stand and need to know whether the change is correct.",
        reflection: "How can mental subtraction protect you in everyday purchases?"
      },
      {
        title: "Shared Bill",
        prompt: "A future group order needs to be split fairly. Tax, delivery fee, and tip make equal splitting more complicated.",
        reflection: "What should be included before dividing a shared bill?"
      },
      {
        title: "Bank App Match",
        prompt: "Your bank app shows a pending charge. Future you compares it with the receipt before the budget gets confusing.",
        reflection: "How does matching receipts to bank activity help prevent mistakes?"
      }
    ]
  }
];

export const mathExpansionEvents: ScenarioEvent[] = modules.flatMap((module) =>
  module.moments.map((moment, index) => makeEvent(module, moment, index))
);
