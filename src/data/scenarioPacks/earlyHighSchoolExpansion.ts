import type { Choice, Effect, Requirement, ScenarioEvent, Topic } from "../../types/game";

type ChoiceOptions = {
  requirements?: Requirement[];
  description?: string;
};

function choice(
  id: string,
  label: string,
  feedback: string,
  logText: string,
  effects: Effect[],
  options: ChoiceOptions = {}
): Choice {
  return {
    id,
    label,
    description: options.description,
    requirements: options.requirements,
    outcomes: [{ id: `${id}-normal`, probability: 1, effects, feedback, explanation: feedback, logText }]
  };
}

function randomChoice(
  id: string,
  label: string,
  outcomes: Array<{ suffix: string; probability: number; feedback: string; logText: string; effects: Effect[] }>,
  options: ChoiceOptions = {}
): Choice {
  return {
    id,
    label,
    description: options.description,
    requirements: options.requirements,
    outcomes: outcomes.map((outcome) => ({
      id: `${id}-${outcome.suffix}`,
      probability: outcome.probability,
      effects: outcome.effects,
      feedback: outcome.feedback,
      explanation: outcome.feedback,
      logText: outcome.logText
    }))
  };
}

function event(
  id: string,
  title: string,
  prompt: string,
  topics: Topic[],
  ageRange: { min: number; max: number },
  choices: Choice[]
): ScenarioEvent {
  return {
    id,
    title,
    prompt,
    topics,
    ageRange,
    lifeStages: ["middle-school", "high-school"],
    baseWeight: 22,
    choices,
    reflectionPrompt: `How could this ${title.toLowerCase()} choice affect options by 10th grade?`,
    sourceNote: "Original 8th-10th-grade bridge scenario inspired by public financial literacy vocabulary, teacher-provided finance PDFs, and classroom-safe future-planning themes."
  };
}

export const earlyHighSchoolExpansionEvents: ScenarioEvent[] = [
  event("hs-course-selection-budget", "Course Selection Budget", "You are choosing 9th-grade classes. A career elective has a small materials fee, while another class is free but less connected to your goals.", ["career", "budgeting", "money-values"], { min: 13, max: 15 }, [
    choice("pay-career-fee", "Pay the career elective fee", "A planned fee can be worth it when it builds skills you care about.", "You chose the career elective and planned for the materials fee.", [{ type: "cash", amount: -35 }, { type: "stat", stat: "opportunity", amount: 6 }, { type: "flag", key: "careerElective", value: true }], { requirements: [{ type: "minCash", value: 35 }] }),
    choice("free-class", "Choose the free class", "Avoiding a fee protects cash, though it may give less career exposure.", "You chose the free class and kept more cash available.", [{ type: "cash", amount: 20 }, { type: "stat", stat: "discipline", amount: 2 }]),
    choice("ask-fee-help", "Ask about fee support", "Asking early can reveal options without assuming the answer is no.", "You asked about fee support and learned how school activity assistance works.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "relationship", relationshipId: "mentor", support: 3 }])
  ]),

  event("hs-club-travel-cost", "Club Travel Cost", "A school club has a Saturday event across town. You need to compare bus fare, a ride from family, or skipping the event.", ["budgeting", "career", "consumer-skills"], { min: 13, max: 16 }, [
    choice("pay-bus-fare", "Budget for bus fare", "Transportation is a real cost, and planning it keeps the opportunity possible.", "You budgeted for transportation and attended the club event.", [{ type: "cash", amount: -12 }, { type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "discipline", amount: 2 }], { requirements: [{ type: "minCash", value: 12 }] }),
    choice("ask-family-ride", "Ask family for a ride", "Support can lower money cost, but it still requires planning and gratitude.", "You asked early and coordinated a ride.", [{ type: "relationship", relationshipId: "family", closeness: 3, support: 3 }, { type: "stat", stat: "opportunity", amount: 4 }]),
    choice("skip-event", "Skip and save the money", "Saving cash is reasonable, but some free opportunities cost time or transportation.", "You skipped the event and saved the transportation money.", [{ type: "savings", amount: 12 }, { type: "stat", stat: "opportunity", amount: -1 }])
  ]),

  event("hs-subscription-split", "Shared Subscription Split", "Friends want to split a study app subscription. It looks cheap monthly, but the yearly total is bigger than it feels.", ["budgeting", "consumer-skills"], { min: 13, max: 16 }, [
    choice("join-without-math", "Join without checking the yearly cost", "Monthly prices can feel small even when they repeat all year.", "You joined quickly and later noticed the total was higher than expected.", [{ type: "cash", amount: -48 }, { type: "stat", stat: "discipline", amount: -3 }], { requirements: [{ type: "minCash", value: 48 }] }),
    choice("calculate-year", "Calculate the yearly total first", "Multiplying the monthly cost by 12 makes the real decision clearer.", "You calculated the yearly total before deciding.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "flag", key: "subscriptionMath", value: true }]),
    choice("use-free-version", "Try the free version first", "Testing before paying protects money while you learn whether the tool helps.", "You used the free version and kept your budget flexible.", [{ type: "savings", amount: 18 }, { type: "stat", stat: "discipline", amount: 3 }])
  ]),

  event("hs-phone-upgrade-plan", "Phone Upgrade Plan", "Your phone battery is annoying, but a new phone would drain savings. A repair might solve the problem for less.", ["consumer-skills", "saving", "budgeting"], { min: 14, max: 16 }, [
    choice("buy-new-phone", "Buy the new phone", "A new phone can be useful, but using most savings for one purchase weakens your cushion.", "You bought a new phone and your savings cushion shrank.", [{ type: "savings", amount: -260 }, { type: "stat", stat: "wellbeing", amount: 4 }, { type: "stat", stat: "discipline", amount: -4 }], { requirements: [{ type: "minSavings", value: 260 }] }),
    choice("compare-repair", "Compare repair and replacement costs", "Comparing total costs is a strong consumer habit.", "You compared repair and replacement costs before choosing.", [{ type: "cash", amount: -75 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }], { requirements: [{ type: "minCash", value: 75 }] }),
    choice("wait-save", "Wait and save toward it", "Waiting can turn a stressful purchase into a planned one.", "You made a phone sinking fund and waited.", [{ type: "savings", amount: 60 }, { type: "stat", stat: "discipline", amount: 5 }])
  ]),

  event("hs-summer-job-application", "Summer Job Application", "You can apply for a summer job now, but the application asks for availability, references, and a short skills answer.", ["career", "life-after-high-school"], { min: 14, max: 16 }, [
    randomChoice("rush-apply", "Rush the application", [
      { suffix: "callback", probability: 0.35, feedback: "Sometimes speed works, but a careful application usually improves your odds.", logText: "You rushed the application and still got a callback.", effects: [{ type: "stat", stat: "opportunity", amount: 2 }] },
      { suffix: "miss", probability: 0.65, feedback: "Employers often use the application to judge preparation and communication.", logText: "The rushed application did not lead to an interview.", effects: [{ type: "stat", stat: "opportunity", amount: -2 }, { type: "stat", stat: "wellbeing", amount: -1 }] }
    ]),
    choice("prepare-answers", "Prepare answers and references", "Preparation helps you show skills even with limited job experience.", "You prepared the application and references.", [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "relationship", relationshipId: "mentor", support: 3 }, { type: "achievement", achievementId: "interview-ready" }]),
    choice("ask-mentor", "Ask a mentor to review it", "Feedback can make your application clearer and more professional.", "A mentor helped you polish your application.", [{ type: "relationship", relationshipId: "mentor", closeness: 2, support: 4 }, { type: "stat", stat: "opportunity", amount: 5 }])
  ]),

  event("hs-first-paycheck-estimate", "First Paycheck Estimate", "A weekend helper job pays by the hour. You estimate gross pay, but taxes may make take-home pay lower.", ["career", "taxes", "budgeting"], { min: 14, max: 16 }, [
    choice("spend-gross", "Plan spending from gross pay", "Gross pay is not the same as take-home pay, so spending from it can overpromise money.", "You planned around gross pay and felt short after deductions.", [{ type: "cash", amount: 85 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }, { type: "stat", stat: "wellbeing", amount: -2 }]),
    choice("estimate-net", "Estimate take-home pay", "Net pay is the safer number for a budget because it reflects deductions.", "You estimated take-home pay before making plans.", [{ type: "cash", amount: 95 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }]),
    choice("split-paycheck", "Save a set percent first", "Saving a percent makes income easier to manage even when pay changes.", "You saved part of your paycheck first.", [{ type: "cash", amount: 70 }, { type: "savings", amount: 35 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "achievement", achievementId: "first-budget" }])
  ]),

  event("hs-activity-fee-deadline", "Activity Fee Deadline", "An activity fee is due Friday. You can pay now, ask about a payment plan, or hope it works out later.", ["budgeting", "money-values", "career"], { min: 13, max: 16 }, [
    choice("pay-now", "Pay now", "Paying on time avoids stress when you have the cash available.", "You paid the fee before the deadline.", [{ type: "cash", amount: -45 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "opportunity", amount: 3 }], { requirements: [{ type: "minCash", value: 45 }] }),
    choice("ask-plan", "Ask about a payment plan", "A payment plan can keep an opportunity open without pretending the cost is zero.", "You asked early and arranged a smaller first payment.", [{ type: "cash", amount: -15 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "relationship", relationshipId: "mentor", support: 2 }], { requirements: [{ type: "minCash", value: 15 }] }),
    choice("wait-later", "Wait and hope", "Waiting can make options smaller when a deadline is real.", "You waited too long and had fewer choices.", [{ type: "stat", stat: "opportunity", amount: -3 }, { type: "stat", stat: "wellbeing", amount: -2 }])
  ]),

  event("hs-friend-fundraiser-budget", "Friend Fundraiser Budget", "A friend is fundraising for a team trip. You want to help, but you also have a savings goal.", ["money-values", "budgeting"], { min: 13, max: 16 }, [
    choice("buy-big-bundle", "Buy the big bundle", "Supporting someone is kind, but the biggest option is not the only supportive option.", "You bought the big bundle and your cash dropped.", [{ type: "cash", amount: -40 }, { type: "relationship", relationshipId: "friend", closeness: 3 }, { type: "stat", stat: "discipline", amount: -2 }], { requirements: [{ type: "minCash", value: 40 }] }),
    choice("small-support", "Choose a small support amount", "A planned amount can match your values and your budget.", "You supported your friend with an amount that fit your plan.", [{ type: "cash", amount: -10 }, { type: "relationship", relationshipId: "friend", closeness: 2 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }], { requirements: [{ type: "minCash", value: 10 }] }),
    choice("share-volunteer", "Help share or volunteer instead", "Support is not only money; time and effort can matter too.", "You helped with the fundraiser without spending cash.", [{ type: "relationship", relationshipId: "friend", support: 3 }, { type: "stat", stat: "wellbeing", amount: 2 }])
  ]),

  event("hs-school-store-profit", "School Store Profit", "A club wants to sell snacks at a school event. You help estimate price, cost, and profit before buying inventory.", ["consumer-skills", "budgeting", "career"], { min: 14, max: 16 }, [
    choice("guess-price", "Guess a selling price", "Guessing can work, but profit depends on the difference between price and cost.", "You guessed the price and the club barely broke even.", [{ type: "stat", stat: "moneyKnowledge", amount: 1 }, { type: "stat", stat: "opportunity", amount: 1 }]),
    choice("calculate-profit", "Calculate profit per item", "Profit per item helps you know whether the plan is worth the work.", "You calculated price minus cost before buying inventory.", [{ type: "cash", amount: 35 }, { type: "stat", stat: "moneyKnowledge", amount: 6 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "flag", key: "profitMath", value: true }]),
    choice("smaller-test", "Test a smaller inventory first", "A smaller test limits risk while you learn demand.", "You tested a small batch and avoided overbuying.", [{ type: "cash", amount: 18 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }])
  ]),

  event("hs-used-bike-value", "Used Bike Value", "You find a used bike that could help you get to activities. It costs less than new, but it may need repairs.", ["consumer-skills", "saving", "budgeting"], { min: 13, max: 16 }, [
    randomChoice("buy-without-check", "Buy without checking condition", [
      { suffix: "fine", probability: 0.45, feedback: "Sometimes a used item is a great deal, but checking condition still matters.", logText: "The used bike worked well and saved transportation time.", effects: [{ type: "cash", amount: -80 }, { type: "stat", stat: "opportunity", amount: 4 }] },
      { suffix: "repair", probability: 0.55, feedback: "Used items can have hidden costs, so condition and repair estimates matter.", logText: "The bike needed repairs that made the deal less cheap.", effects: [{ type: "cash", amount: -145 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }] }
    ], { requirements: [{ type: "minCash", value: 145 }] }),
    choice("check-repair-cost", "Check repair cost first", "Total cost includes purchase price plus repairs.", "You checked the bike and negotiated based on repair needs.", [{ type: "cash", amount: -70 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }], { requirements: [{ type: "minCash", value: 70 }] }),
    choice("keep-saving", "Keep saving for a better option", "Waiting can be wise when the total cost is uncertain.", "You kept saving for safer transportation.", [{ type: "savings", amount: 50 }, { type: "stat", stat: "discipline", amount: 4 }])
  ]),

  event("hs-advanced-class-supplies", "Advanced Class Supplies", "A 10th-grade-level class you want to take next year recommends supplies and a graphing tool. You can plan now or wait.", ["career", "budgeting", "saving"], { min: 14, max: 16 }, [
    choice("buy-all-now", "Buy everything now", "Buying early can reduce stress, but only if you know what is truly required.", "You bought everything early and later learned one item was optional.", [{ type: "cash", amount: -90 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: -1 }], { requirements: [{ type: "minCash", value: 90 }] }),
    choice("confirm-required", "Confirm what is required", "Checking requirements prevents spending on things you may not need.", "You confirmed the required supplies and avoided extras.", [{ type: "cash", amount: -45 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 4 }], { requirements: [{ type: "minCash", value: 45 }] }),
    choice("make-sinking-fund", "Start a supplies sinking fund", "Saving ahead spreads a cost across time.", "You started a small sinking fund for class supplies.", [{ type: "savings", amount: 45 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "flag", key: "schoolSuppliesPlan", value: true }])
  ]),

  event("hs-digital-portfolio-choice", "Digital Portfolio Choice", "A teacher suggests saving examples of your work for future applications. You can ignore it, organize files, or ask for feedback.", ["career", "life-after-high-school"], { min: 14, max: 16 }, [
    choice("ignore-portfolio", "Ignore it for now", "It is easy to wait, but future-you may wish examples were organized.", "You ignored the portfolio idea and had less ready later.", [{ type: "stat", stat: "opportunity", amount: -1 }]),
    choice("organize-files", "Organize your best work", "Keeping examples of work can make future applications easier.", "You organized a simple digital portfolio.", [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "discipline", amount: 3 }]),
    choice("ask-feedback", "Ask for feedback on examples", "Feedback helps you choose work that shows growth and skill.", "You asked for feedback and improved your portfolio.", [{ type: "relationship", relationshipId: "mentor", closeness: 2, support: 3 }, { type: "stat", stat: "opportunity", amount: 6 }])
  ])
];
