import type { Choice, Effect, Requirement, ScenarioEvent, Topic } from "../../types/game";

type OutcomeSeed = {
  suffix: string;
  probability: number;
  feedback: string;
  logText: string;
  effects: Effect[];
};

const sourceNote = "Original scenario inspired by broad Banzai public resource topic coverage; text and mechanics are MoneyLife Quest originals.";

function simpleChoice(
  id: string,
  label: string,
  feedback: string,
  logText: string,
  effects: Effect[],
  requirements?: Requirement[]
): Choice {
  return {
    id,
    label,
    requirements,
    outcomes: [{ id: `${id}-normal`, probability: 1, feedback, explanation: feedback, logText, effects }]
  };
}

function randomChoice(id: string, label: string, outcomes: OutcomeSeed[], requirements?: Requirement[]): Choice {
  return {
    id,
    label,
    requirements,
    outcomes: outcomes.map((outcome) => ({
      id: `${id}-${outcome.suffix}`,
      probability: outcome.probability,
      feedback: outcome.feedback,
      explanation: outcome.feedback,
      logText: outcome.logText,
      effects: outcome.effects
    }))
  };
}

function scenario(
  id: string,
  title: string,
  prompt: string,
  topics: Topic[],
  ageRange: { min: number; max: number },
  choices: Choice[],
  baseWeight = 18
): ScenarioEvent {
  return {
    id,
    title,
    prompt,
    topics,
    ageRange,
    baseWeight,
    choices,
    reflectionPrompt: `What hidden cost or protection mattered most in "${title}"?`,
    sourceNote
  };
}

export const banzaiExpansionEvents: ScenarioEvent[] = [
  scenario("banzai-rent-first-month", "First Rent Plan", "You are imagining your first apartment. The rent number looks possible, but deposits, utilities, moving supplies, and renter protection also matter.", ["budgeting", "insurance", "life-after-high-school"], { min: 17, max: 24 }, [
    simpleChoice("rent-only", "Budget only for rent", "Rent is the biggest line, but it is not the whole housing cost.", "You planned for rent only and had to borrow for move-in extras.", [{ type: "debt", amount: 220 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }, { type: "stat", stat: "wellbeing", amount: -3 }]),
    simpleChoice("full-move-budget", "Include deposits, utilities, and moving costs", "A complete move-in plan reduces surprise debt.", "You made a fuller first-apartment plan before signing anything.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "future-planner" }]),
    simpleChoice("renters-insurance", "Add renters insurance to the estimate", "A small recurring cost can protect belongings from a much larger loss.", "You included renters insurance in the sample budget.", [{ type: "cash", amount: -15 }, { type: "stat", stat: "trustSafety", amount: 4 }, { type: "flag", key: "insuranceCoverage", value: true }, { type: "achievement", achievementId: "insurance-aware" }], [{ type: "minCash", value: 15 }])
  ]),

  scenario("banzai-health-plan-choice", "First Health Plan", "A future job offers two health plans: one costs less each month but has a higher deductible, and one costs more each month but has lower out-of-pocket risk.", ["insurance", "budgeting", "career"], { min: 16, max: 30 }, [
    simpleChoice("cheapest-premium", "Pick the lowest monthly premium", "The lowest premium can be reasonable when you understand the deductible and have savings.", "You picked the lowest premium and kept cash flow easier.", [{ type: "cash", amount: 60 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }]),
    simpleChoice("compare-total-risk", "Compare premium plus possible deductible", "Insurance decisions are about total risk, not just the monthly bill.", "You compared the plans using both monthly cost and possible surprise cost.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "trustSafety", amount: 3 }, { type: "achievement", achievementId: "insurance-aware" }]),
    randomChoice("skip-coverage", "Skip coverage and hope for the best", [
      { suffix: "quiet", probability: 0.55, feedback: "Nothing happened this year, but you carried a big risk.", logText: "You skipped coverage and got lucky for now.", effects: [{ type: "cash", amount: 120 }, { type: "stat", stat: "trustSafety", amount: -3 }] },
      { suffix: "urgent", probability: 0.45, feedback: "Insurance feels optional until an expensive problem appears.", logText: "A medical bill arrived and turned into debt.", effects: [{ type: "debt", amount: 450 }, { type: "stat", stat: "wellbeing", amount: -8 }, { type: "stat", stat: "trustSafety", amount: -5 }] }
    ])
  ]),

  scenario("banzai-mobile-banking-alert", "Mobile Banking Alert", "Your checking account app can send low-balance and unusual-activity alerts. You usually ignore settings screens.", ["banking", "scams", "budgeting"], { min: 13, max: 22 }, [
    simpleChoice("turn-on-alerts", "Turn on account alerts", "Alerts help you catch mistakes, fees, or suspicious activity early.", "You turned on bank alerts and caught your balance before it got too low.", [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "flag", key: "bankAlerts", value: true }, { type: "achievement", achievementId: "alert-setter" }]),
    simpleChoice("ignore-settings", "Skip the alert settings", "Skipping alerts saves a minute now but can cost attention later.", "You skipped alerts and missed a low-balance warning.", [{ type: "cash", amount: -25 }, { type: "stat", stat: "discipline", amount: -3 }]),
    simpleChoice("review-weekly", "Set a weekly money check-in", "A habit can do the same job as a notification if you actually keep it.", "You scheduled a weekly balance check-in.", [{ type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }])
  ]),

  scenario("banzai-digital-spending-trap", "Digital Spending Trap", "A game offers a limited-time bundle using coins, gems, and a countdown timer. The price is hard to compare to dollars.", ["consumer-skills", "budgeting", "money-values"], { min: 12, max: 18 }, [
    simpleChoice("buy-bundle", "Buy before the timer ends", "Countdowns can make a want feel urgent even when it is not.", "You bought the bundle and later realized it used most of your weekly money.", [{ type: "cash", amount: -24 }, { type: "stat", stat: "discipline", amount: -4 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }], [{ type: "minCash", value: 24 }]),
    simpleChoice("convert-to-dollars", "Convert the coins to dollars first", "Translating points or coins into real money makes the choice clearer.", "You converted the bundle into dollars and decided it was too expensive.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "smart-shopper-guide" }]),
    simpleChoice("set-app-limit", "Set a monthly app-spending limit", "A limit turns a fuzzy boundary into a decision you made before the pressure hit.", "You set a small app-spending limit for the month.", [{ type: "stat", stat: "discipline", amount: 5 }, { type: "flag", key: "spendingLimit", value: true }])
  ]),

  scenario("banzai-identity-compromised", "Account Looks Weird", "You get a bank alert for a small purchase you do not recognize. It might be a mistake, or it might be a test charge.", ["scams", "banking", "credit"], { min: 14, max: 26 }, [
    simpleChoice("wait-see", "Wait to see if it happens again", "Small unknown charges can be a warning sign. Waiting gives the problem time.", "You waited, and another charge appeared.", [{ type: "cash", amount: -45 }, { type: "stat", stat: "trustSafety", amount: -5 }]),
    simpleChoice("contact-bank", "Contact the bank using the app or card number", "Using a trusted contact path helps you report fraud without giving information to an impostor.", "You contacted the bank safely and started a dispute.", [{ type: "cash", amount: 30 }, { type: "stat", stat: "trustSafety", amount: 6 }, { type: "flag", key: "protectedIdentity", value: true }, { type: "achievement", achievementId: "security-shield" }]),
    simpleChoice("reply-text", "Reply to a random text that says it can help", "Fraud messages often pretend to help with fraud. Use official channels.", "The text was fake and asked for your login.", [{ type: "stat", stat: "trustSafety", amount: -8 }, { type: "debt", amount: 60 }])
  ]),

  scenario("banzai-emergency-job-gap", "Two-Week Work Gap", "Your future part-time job cuts hours for two weeks. You still have transportation and food costs.", ["saving", "budgeting", "career"], { min: 15, max: 26 }, [
    simpleChoice("use-emergency-fund", "Use emergency savings carefully", "Emergency funds are for protecting essentials when income changes.", "You used emergency savings to cover essentials without new debt.", [{ type: "savings", amount: -120 }, { type: "stat", stat: "wellbeing", amount: 2 }, { type: "achievement", achievementId: "emergency-fund-started" }], [{ type: "minSavings", value: 120 }]),
    simpleChoice("cut-flexible-costs", "Cut flexible spending for two weeks", "Temporary cuts can protect your budget while income is lower.", "You paused extras and made it through the lower-income stretch.", [{ type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }]),
    simpleChoice("charge-everything", "Put the gap on credit", "Credit can bridge a gap, but it needs a payoff plan or the gap gets bigger.", "You charged the gap and added debt.", [{ type: "debt", amount: 160 }, { type: "creditScore", amount: -10 }, { type: "stat", stat: "wellbeing", amount: -3 }])
  ]),

  scenario("banzai-503020-budget", "50/30/20 Remix", "You learn a budget idea that separates needs, wants, and savings. Your life does not fit it perfectly yet.", ["budgeting", "saving", "money-values"], { min: 13, max: 24 }, [
    simpleChoice("copy-exactly", "Copy the percentages exactly", "Rules of thumb are starting points, not laws. Adjusting matters.", "You copied the plan exactly and found one category did not fit.", [{ type: "stat", stat: "moneyKnowledge", amount: 2 }, { type: "stat", stat: "wellbeing", amount: -1 }]),
    simpleChoice("adapt-plan", "Adapt it to your real expenses", "A useful budget matches your actual income, needs, and goals.", "You adapted the framework into a realistic budget.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "achievement", achievementId: "first-budget" }]),
    simpleChoice("ignore-budget", "Decide budgets are too strict", "A budget is not a punishment; it is a plan for choices.", "You ignored the framework and lost track of spending.", [{ type: "cash", amount: -35 }, { type: "stat", stat: "discipline", amount: -4 }])
  ]),

  scenario("banzai-envelope-budget", "Envelope Check", "You want a simple way to stop overspending on snacks, rides, and online purchases.", ["budgeting", "consumer-skills"], { min: 12, max: 20 }, [
    simpleChoice("digital-envelopes", "Make digital spending envelopes", "Separating categories can make invisible spending visible.", "You created digital envelopes for flexible spending.", [{ type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "first-budget" }]),
    simpleChoice("one-big-balance", "Keep one big balance", "One balance can hide which category is actually running out.", "Your balance looked fine until several small purchases piled up.", [{ type: "cash", amount: -30 }, { type: "stat", stat: "discipline", amount: -3 }]),
    simpleChoice("cash-envelope", "Use cash for one tricky category", "A physical limit can make a hard category easier to manage.", "You used one cash envelope and stopped when it was empty.", [{ type: "stat", stat: "discipline", amount: 4 }, { type: "savings", amount: 15 }])
  ]),

  scenario("banzai-first-card-terms", "First Card Terms", "A first credit card offer arrives. The rewards look exciting, but the rate, fees, and due date matter more.", ["credit", "consumer-skills"], { min: 18, max: 26 }, [
    simpleChoice("read-terms", "Read the rate, fee, and due date", "Credit terms tell you the real cost of carrying a balance or missing a payment.", "You read the terms before applying.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "flag", key: "aprAware", value: true }, { type: "achievement", achievementId: "apr-aware" }]),
    simpleChoice("apply-for-rewards", "Apply because of rewards", "Rewards are only useful when you avoid interest and fees.", "You focused on rewards and missed an annual fee.", [{ type: "cash", amount: -45 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }]),
    simpleChoice("wait-until-income", "Wait until you have steady income", "Waiting can be wise if the tool is not useful for your current life.", "You waited and kept learning about credit first.", [{ type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }])
  ]),

  scenario("banzai-predatory-loan", "Too-Fast Loan Offer", "A lender says you can get cash today with no credit check. The payment looks small, but the total repayment is unclear.", ["credit", "scams", "consumer-skills"], { min: 16, max: 28 }, [
    simpleChoice("take-fast-cash", "Take the fast cash", "Quick money can be very expensive when fees and rates are hidden.", "You took the fast loan and the repayment ballooned.", [{ type: "debt", amount: 320 }, { type: "creditScore", amount: -18 }, { type: "stat", stat: "wellbeing", amount: -5 }]),
    simpleChoice("ask-total-cost", "Ask for the total repayment cost", "A fair loan should be understandable before you sign.", "You asked for the total cost and spotted the expensive terms.", [{ type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "stat", stat: "trustSafety", amount: 5 }, { type: "achievement", achievementId: "debt-dodger" }]),
    simpleChoice("compare-community-option", "Compare a safer local option", "Comparing lenders can prevent a desperate moment from becoming a debt cycle.", "You compared options and found a smaller, clearer loan.", [{ type: "debt", amount: 90 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "flag", key: "comparedLoan", value: true }])
  ]),

  scenario("banzai-car-loan-cost", "Car Loan Math", "A future car payment fits your monthly budget, but insurance, gas, repairs, and interest also need room.", ["credit", "insurance", "budgeting"], { min: 16, max: 28 }, [
    simpleChoice("monthly-only", "Judge only the monthly payment", "A low payment can still hide a long loan or high total cost.", "You focused on the monthly payment and underestimated the real cost.", [{ type: "debt", amount: 500 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }]),
    simpleChoice("total-cost", "Compare total cost of ownership", "Transportation costs include loan interest, insurance, fuel, maintenance, and fees.", "You compared the total cost before choosing.", [{ type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "achievement", achievementId: "smart-shopper-guide" }]),
    simpleChoice("save-down-payment", "Save a bigger down payment first", "More money down can lower borrowing and give you more options.", "You waited and grew a down payment.", [{ type: "savings", amount: 180 }, { type: "stat", stat: "discipline", amount: 5 }])
  ]),

  scenario("banzai-college-budget-fafsa", "College Cost Checklist", "A postsecondary program lists tuition, but books, transportation, food, fees, and financial aid paperwork affect the real plan.", ["life-after-high-school", "career", "credit"], { min: 16, max: 23 }, [
    simpleChoice("tuition-only", "Plan around tuition only", "Tuition is a major cost, but college budgets include many smaller costs too.", "You planned around tuition and were surprised by extra costs.", [{ type: "debt", amount: 260 }, { type: "stat", stat: "wellbeing", amount: -3 }]),
    simpleChoice("full-cost-list", "List all expected costs", "A full cost list makes scholarships, work, and borrowing choices clearer.", "You built a complete college cost checklist.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 4 }]),
    simpleChoice("aid-deadlines", "Track aid and scholarship deadlines", "Missing a deadline can cost more than a bad shopping choice.", "You tracked aid deadlines and submitted forms early.", [{ type: "savings", amount: 250 }, { type: "stat", stat: "opportunity", amount: 5 }, { type: "achievement", achievementId: "scholarship-seeker" }])
  ]),

  scenario("banzai-job-benefits", "Benefits Are Pay Too", "A job offer has a lower hourly wage than another option but includes paid training, health coverage, and a retirement match.", ["career", "insurance", "saving"], { min: 16, max: 30 }, [
    simpleChoice("highest-wage", "Pick only the highest hourly wage", "Wages matter, but benefits can change the total value of a job.", "You chose the higher wage and later noticed fewer supports.", [{ type: "income", amount: 500 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }]),
    simpleChoice("compare-total-comp", "Compare total compensation", "Benefits are part of pay because they can reduce future costs or build savings.", "You compared wages, training, health coverage, and matching dollars.", [{ type: "income", amount: 350 }, { type: "savings", amount: 180 }, { type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "achievement", achievementId: "future-planner" }]),
    simpleChoice("ask-benefit-questions", "Ask clear benefit questions", "Asking respectful questions helps you understand a job before accepting.", "You asked about benefits and learned which costs the job covers.", [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }])
  ]),

  scenario("banzai-young-business-price", "Pop-Up Business Price", "You want to sell handmade keychains at a school fair. Supplies, table fees, time, and unsold inventory all affect profit.", ["career", "budgeting", "consumer-skills"], { min: 12, max: 20 }, [
    simpleChoice("guess-price", "Pick a price that sounds nice", "A price should cover costs and make sense to buyers.", "You guessed a price and barely covered supplies.", [{ type: "cash", amount: 25 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }]),
    simpleChoice("cost-plus-price", "Add up costs before setting the price", "Profit starts with knowing your costs per item.", "You calculated cost per keychain and set a better price.", [{ type: "cash", amount: 85 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 3 }, { type: "achievement", achievementId: "entrepreneurial-thinker" }]),
    randomChoice("premium-display", "Spend extra on a premium display", [
      { suffix: "works", probability: 0.45, feedback: "Presentation can help sales when it fits the budget.", logText: "The display attracted customers and boosted profit.", effects: [{ type: "cash", amount: 110 }, { type: "stat", stat: "opportunity", amount: 4 }] },
      { suffix: "overbuilt", probability: 0.55, feedback: "A business cost is still a risk if sales do not rise enough.", logText: "The display looked great but ate into profit.", effects: [{ type: "cash", amount: 35 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }] }
    ], [{ type: "minCash", value: 30 }])
  ]),

  scenario("banzai-business-cash-flow", "Inventory Cash Flow", "Your small business idea is working, and you can buy more supplies at a discount. It would use almost all your cash.", ["career", "budgeting", "saving"], { min: 13, max: 22 }, [
    simpleChoice("buy-max-supplies", "Spend almost everything on inventory", "Bulk discounts help only if you can still handle surprises.", "You bought lots of supplies and then struggled with a surprise cost.", [{ type: "cash", amount: -80 }, { type: "stat", stat: "wellbeing", amount: -3 }], [{ type: "minCash", value: 80 }]),
    simpleChoice("keep-cash-cushion", "Buy some supplies and keep a cushion", "Cash flow keeps a project alive between sales.", "You bought enough supplies while keeping backup cash.", [{ type: "cash", amount: -35 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "entrepreneurial-thinker" }], [{ type: "minCash", value: 35 }]),
    simpleChoice("preorder-first", "Take preorders before buying", "Preorders can test demand before committing money.", "You gathered preorders and bought only what you needed.", [{ type: "cash", amount: 70 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }])
  ]),

  scenario("banzai-inflation-grocery-plan", "Price Jump Week", "Your usual snacks, bus pass, and lunch supplies all cost more than last month.", ["budgeting", "consumer-skills"], { min: 13, max: 25 }, [
    simpleChoice("same-cart", "Buy the usual items anyway", "Inflation makes old habits cost more. The same cart can now break the plan.", "You bought the same items and overspent.", [{ type: "cash", amount: -42 }, { type: "stat", stat: "discipline", amount: -3 }]),
    simpleChoice("swap-brands", "Compare brands and swap where it makes sense", "Substitutions can protect a budget without cutting everything.", "You compared unit prices and swapped a few items.", [{ type: "cash", amount: -18 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "achievement", achievementId: "smart-shopper-guide" }], [{ type: "minCash", value: 18 }]),
    simpleChoice("plan-meals", "Plan meals before shopping", "Planning reduces last-minute purchases and waste.", "You made a simple plan before shopping.", [{ type: "savings", amount: 20 }, { type: "stat", stat: "discipline", amount: 4 }])
  ]),

  scenario("banzai-ransomware-warning", "Locked Screen Warning", "A pop-up says your files are locked and demands payment cards. You need to decide what to do next.", ["scams", "consumer-skills"], { min: 12, max: 22 }, [
    simpleChoice("pay-popup", "Enter payment information", "Urgent payment demands are a major warning sign. Paying can expose more information.", "You entered payment info into a suspicious pop-up.", [{ type: "cash", amount: -75 }, { type: "stat", stat: "trustSafety", amount: -9 }], [{ type: "minCash", value: 75 }]),
    simpleChoice("disconnect-report", "Disconnect and ask a trusted adult or IT person", "Stopping and getting trusted help is safer than negotiating with a pop-up.", "You disconnected the device and reported the warning.", [{ type: "stat", stat: "trustSafety", amount: 7 }, { type: "flag", key: "protectedIdentity", value: true }, { type: "achievement", achievementId: "scam-spotted" }]),
    simpleChoice("search-message", "Search the exact message on a different device", "Checking outside the suspicious screen helps you verify whether it is a known scam.", "You researched safely and found warnings about the message.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "trustSafety", amount: 5 }])
  ]),

  scenario("banzai-retirement-match-preview", "Future Match Money", "A future employer offers to match a small part of retirement savings. Retirement feels far away.", ["saving", "investing", "career"], { min: 16, max: 30 }, [
    simpleChoice("skip-match", "Skip it because retirement is far away", "Far away goals are exactly where time can help the most.", "You skipped the match and missed free future savings.", [{ type: "stat", stat: "moneyKnowledge", amount: 1 }, { type: "stat", stat: "discipline", amount: -3 }]),
    simpleChoice("capture-match", "Save enough to get the match", "A match is part of compensation when you can afford the contribution.", "You saved enough to get the employer match.", [{ type: "investments", amount: 160 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "achievement", achievementId: "compound-growth" }]),
    simpleChoice("ask-plan-questions", "Ask how vesting and fees work", "Long-term accounts have details worth understanding.", "You asked about vesting, fees, and investment choices.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 3 }])
  ])
];
