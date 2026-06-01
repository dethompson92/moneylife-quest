import type { Choice, Effect, Requirement, ScenarioEvent, Topic } from "../../types/game";
import { adultOutcomeEvents } from "./adultOutcomeExpansion";
import { banzaiExpansionEvents } from "./banzaiExpansion";
import { questExpansionEvents } from "./questExpansion";

type EventOptions = {
  lifeStages?: ScenarioEvent["lifeStages"];
  requirements?: Requirement[];
  baseWeight?: number;
  reflectionPrompt?: string;
};

function choice(
  id: string,
  label: string,
  feedback: string,
  logText: string,
  effects: Effect[],
  options: { requirements?: Requirement[]; description?: string } = {}
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
  options: { requirements?: Requirement[]; description?: string } = {}
): Choice {
  return {
    id,
    label,
    description: options.description,
    requirements: options.requirements,
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

function event(
  id: string,
  title: string,
  prompt: string,
  topics: Topic[],
  ageRange: { min: number; max: number },
  choices: Choice[],
  options: EventOptions = {}
): ScenarioEvent {
  return {
    id,
    title,
    prompt,
    topics,
    ageRange,
    lifeStages: options.lifeStages,
    requirements: options.requirements,
    baseWeight: options.baseWeight ?? 20,
    choices,
    reflectionPrompt:
      options.reflectionPrompt ??
      `Which option in "${title}" best balanced today, tomorrow, and your values?`,
    sourceNote: "Original classroom scenario inspired by common middle-school financial literacy topics."
  };
}

export const middleSchoolCoreEvents: ScenarioEvent[] = [
  event("values-birthday-money", "Birthday Money", "You receive $50 for your birthday. Your earbuds fund is calling, but so is your emergency fund.", ["money-values", "saving", "budgeting"], { min: 12, max: 14 }, [
    choice("spend-all", "Spend it all this weekend", "A fun purchase can be fine, but spending every dollar leaves no backup for later.", "You spent the birthday money right away and had a great weekend, but your savings did not grow.", [{ type: "cash", amount: 50 }, { type: "stat", stat: "wellbeing", amount: 4 }, { type: "stat", stat: "discipline", amount: -4 }]),
    choice("split-money", "Save half and spend half", "Splitting money balances present wants with future choices.", "You saved half and kept half for fun. Your emergency fund got stronger.", [{ type: "cash", amount: 25 }, { type: "savings", amount: 25 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }]),
    choice("save-all", "Save all $50", "Saving everything moves the goal fastest, but a good plan should still feel realistic.", "You saved the full gift and moved closer to your goal.", [{ type: "savings", amount: 50 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "wellbeing", amount: -1 }])
  ], { lifeStages: ["middle-school"] }),

  event("values-friend-hangout", "Mall Plan", "A friend invites you to the mall. You want to go, but your weekly spending money is almost gone.", ["money-values", "budgeting"], { min: 12, max: 15 }, [
    choice("go-anyway", "Go and buy snacks", "Social time matters, but spending without checking your plan can create stress later.", "You went to the mall and spent more than planned.", [{ type: "cash", amount: -22 }, { type: "stat", stat: "wellbeing", amount: 3 }, { type: "stat", stat: "discipline", amount: -3 }]),
    choice("suggest-park", "Suggest a free park hangout", "A cheaper option can keep the friendship and the budget.", "You suggested a free hangout and kept your budget intact.", [{ type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "stat", stat: "wellbeing", amount: 1 }]),
    choice("skip-save", "Skip this time and save", "Saying no can protect a goal, though it may feel disappointing.", "You skipped the trip and kept your money for your goal.", [{ type: "savings", amount: 10 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "wellbeing", amount: -2 }])
  ]),

  event("values-fundraiser", "School Fundraiser", "A fundraiser is collecting money for a school cause. You want to help, but you are also saving.", ["money-values", "budgeting"], { min: 12, max: 16 }, [
    choice("donate-cash", "Donate $10", "Giving can be part of a money plan when you decide on the amount on purpose.", "You donated a small amount and felt good about supporting the cause.", [{ type: "cash", amount: -10 }, { type: "stat", stat: "wellbeing", amount: 3 }], { requirements: [{ type: "minCash", value: 10 }] }),
    choice("volunteer-time", "Volunteer at the table", "Time can be valuable too, especially when cash is limited.", "You helped at the fundraiser without spending money.", [{ type: "stat", stat: "opportunity", amount: 3 }, { type: "stat", stat: "wellbeing", amount: 2 }]),
    choice("skip-donation", "Save for your own goal", "It is okay to say no when you have a clear priority, but notice how values shape money choices.", "You kept saving for your own goal.", [{ type: "savings", amount: 5 }, { type: "stat", stat: "discipline", amount: 2 }])
  ]),

  event("values-shoe-trend", "New Shoe Trend", "A popular pair of shoes is everywhere. Your current shoes still fit.", ["money-values", "consumer-skills"], { min: 12, max: 15 }, [
    choice("buy-now", "Buy the trendy pair now", "Trends can be tempting. The cost is the other thing you cannot buy with that money.", "You bought the trendy shoes and felt stylish, but your cash dropped.", [{ type: "cash", amount: -85 }, { type: "stat", stat: "wellbeing", amount: 4 }, { type: "stat", stat: "discipline", amount: -5 }], { requirements: [{ type: "minCash", value: 85 }] }),
    choice("compare-wait", "Compare prices and wait a week", "Waiting gives your brain time to separate a real want from pressure.", "You compared prices and found a better deal later.", [{ type: "cash", amount: -55 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 4 }], { requirements: [{ type: "minCash", value: 55 }] }),
    choice("keep-current", "Keep your current shoes", "Using what still works is not flashy, but it keeps options open.", "You kept your current shoes and saved the money.", [{ type: "savings", amount: 30 }, { type: "stat", stat: "discipline", amount: 4 }])
  ]),

  event("values-allowance-plan", "Allowance Plan", "You start getting a small weekly allowance and need a simple plan.", ["money-values", "budgeting", "saving"], { min: 12, max: 14 }, [
    choice("no-plan", "Keep it all in one pocket", "Without a plan, money disappears more easily because every dollar looks spendable.", "Your allowance came and went with no clear goal.", [{ type: "cash", amount: 40 }, { type: "stat", stat: "discipline", amount: -3 }]),
    choice("three-jars", "Use spend/save/give jars", "Separating money by purpose makes tradeoffs visible.", "You made spend, save, and give jars for your allowance.", [{ type: "cash", amount: 18 }, { type: "savings", amount: 18 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "first-budget" }]),
    choice("all-goal", "Send it all to savings", "Aggressive saving works best when you still leave room for small real-life spending.", "You sent your allowance to savings and moved closer to your goal.", [{ type: "savings", amount: 40 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "wellbeing", amount: -1 }])
  ], { lifeStages: ["middle-school"] }),

  event("values-game-vs-club", "Game Skin or Club Fee", "You have enough money for a game add-on or a club fee that meets after school.", ["money-values", "budgeting", "career"], { min: 12, max: 15 }, [
    choice("game-skin", "Buy the game add-on", "Entertainment has a place, but opportunity costs are what you give up.", "You bought the game add-on and enjoyed it, but missed the club deadline.", [{ type: "cash", amount: -18 }, { type: "stat", stat: "wellbeing", amount: 3 }, { type: "stat", stat: "opportunity", amount: -2 }], { requirements: [{ type: "minCash", value: 18 }] }),
    choice("club-fee", "Pay the club fee", "Some spending builds future skills or relationships.", "You joined the club and started building skills.", [{ type: "cash", amount: -18 }, { type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "wellbeing", amount: 1 }], { requirements: [{ type: "minCash", value: 18 }] }),
    choice("ask-scholarship", "Ask if there is a fee waiver", "Asking respectful questions can reveal options you did not know existed.", "You asked about help with the fee and learned the club has a scholarship spot.", [{ type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }])
  ]),

  event("values-bike-goal", "Bike Goal", "You want a bike, but you also want a starter emergency fund.", ["money-values", "saving"], { min: 12, max: 15 }, [
    choice("bike-first", "Save only for the bike", "A specific goal is motivating, but emergency money protects the plan.", "You focused on the bike and made visible progress.", [{ type: "savings", amount: 80 }, { type: "stat", stat: "wellbeing", amount: 2 }]),
    choice("emergency-first", "Build emergency fund first", "A cushion can keep one surprise from ruining every other goal.", "You made the emergency fund your first target.", [{ type: "savings", amount: 90 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "emergency-started" }]),
    choice("split-goals", "Split savings between both", "Dividing savings can keep motivation and safety moving together.", "You split the money between bike and emergency savings.", [{ type: "savings", amount: 75 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "stat", stat: "wellbeing", amount: 1 }])
  ]),

  event("values-chore-job", "Chore Job Offer", "A neighbor offers to pay you to help with yard work after school.", ["money-values", "career"], { min: 12, max: 16 }, [
    randomChoice("accept-job", "Accept and do careful work", [
      { suffix: "tip", probability: 0.35, feedback: "Reliability can create more opportunities.", logText: "You did careful work and got a small tip.", effects: [{ type: "cash", amount: 45 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "discipline", amount: 3 }] },
      { suffix: "normal", probability: 0.65, feedback: "Showing up and finishing the job builds trust.", logText: "You completed the yard work and earned money.", effects: [{ type: "cash", amount: 35 }, { type: "stat", stat: "opportunity", amount: 3 }, { type: "stat", stat: "discipline", amount: 2 }] }
    ]),
    choice("negotiate", "Ask clearly about pay and timing", "Clarifying expectations before work prevents awkward surprises.", "You asked about pay and timing before accepting.", [{ type: "cash", amount: 35 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "stat", stat: "opportunity", amount: 2 }]),
    choice("decline", "Decline because your week is full", "Protecting your time is also a decision, especially when school responsibilities are high.", "You declined politely and kept your week manageable.", [{ type: "stat", stat: "wellbeing", amount: 2 }, { type: "stat", stat: "opportunity", amount: -1 }])
  ]),

  event("values-money-style", "Money Style Check", "You notice you usually spend fast when friends are around.", ["money-values", "budgeting"], { min: 12, max: 16 }, [
    choice("ignore-style", "Ignore it", "Patterns still affect you even when you do not name them.", "You ignored your spending pattern and kept winging it.", [{ type: "cash", amount: -20 }, { type: "stat", stat: "discipline", amount: -2 }]),
    choice("name-trigger", "Name your trigger and set a limit", "Knowing your trigger helps you plan before the moment gets hard.", "You set a friend-hangout spending limit.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "achievement", achievementId: "needs-before-wants" }]),
    choice("leave-card-home", "Bring only planned cash", "A simple boundary can make the better choice easier.", "You brought only your planned spending money.", [{ type: "cash", amount: -8 }, { type: "stat", stat: "discipline", amount: 4 }])
  ]),

  event("values-social-pressure", "Influencer Hype", "A creator says everyone needs a new gadget. Your feed makes it look normal to buy one.", ["money-values", "consumer-skills", "scams"], { min: 13, max: 17 }, [
    choice("buy-from-link", "Buy through the link immediately", "Ads can look like advice. Pause before turning hype into spending.", "You bought from the link and later wished you had compared options.", [{ type: "cash", amount: -70 }, { type: "stat", stat: "trustSafety", amount: -3 }, { type: "stat", stat: "discipline", amount: -3 }], { requirements: [{ type: "minCash", value: 70 }] }),
    choice("research", "Research reviews and alternatives", "Checking independent information helps you tell usefulness from marketing.", "You researched reviews and found the gadget was not worth it for you.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "trustSafety", amount: 3 }]),
    choice("wait-48", "Wait 48 hours", "A waiting rule gives emotions time to cool down.", "You waited two days and the urge faded.", [{ type: "stat", stat: "discipline", amount: 5 }, { type: "savings", amount: 20 }])
  ]),

  event("consumer-unit-price", "Snack Aisle Math", "Two snack packs look similar, but the sizes are different.", ["consumer-skills", "budgeting"], { min: 12, max: 16 }, [
    choice("grab-bright", "Grab the brighter package", "Packaging is designed to get attention, not to prove value.", "You bought the brighter package and paid more per ounce.", [{ type: "cash", amount: -8 }, { type: "stat", stat: "moneyKnowledge", amount: -1 }], { requirements: [{ type: "minCash", value: 8 }] }),
    choice("check-unit", "Compare unit prices", "Unit price helps compare differently sized items fairly.", "You checked the unit price and picked the better value.", [{ type: "cash", amount: -5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "receipt-detective" }], { requirements: [{ type: "minCash", value: 5 }] }),
    choice("skip-snack", "Skip the snack", "Not buying is also a consumer choice.", "You skipped the snack and kept the money.", [{ type: "savings", amount: 5 }, { type: "stat", stat: "discipline", amount: 2 }])
  ]),

  event("consumer-coupon-minimum", "Coupon Catch", "A coupon says $10 off, but only if you spend at least $60.", ["consumer-skills", "budgeting"], { min: 12, max: 17 }, [
    choice("add-items", "Add items to use it", "A discount is not savings if it pushes you to buy things you did not need.", "You added extra items and spent more than planned.", [{ type: "cash", amount: -60 }, { type: "stat", stat: "discipline", amount: -4 }], { requirements: [{ type: "minCash", value: 60 }] }),
    choice("buy-needed", "Buy only what you came for", "The best deal is the one that matches your actual need.", "You skipped the coupon and bought only what you needed.", [{ type: "cash", amount: -24 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }], { requirements: [{ type: "minCash", value: 24 }] }),
    choice("save-coupon", "Save the coupon for later", "Timing matters. A coupon can help when it fits a real future purchase.", "You saved the coupon in case it matched a real need later.", [{ type: "stat", stat: "discipline", amount: 3 }])
  ]),

  event("consumer-receipt-error", "Receipt Surprise", "Your receipt shows an item rang up $6 higher than the shelf price.", ["consumer-skills"], { min: 12, max: 18 }, [
    choice("ignore-receipt", "Ignore it", "Small errors add up, and receipts are there to be checked.", "You ignored the receipt and lost a little money.", [{ type: "cash", amount: -6 }, { type: "stat", stat: "moneyKnowledge", amount: -1 }]),
    choice("ask-politely", "Politely ask an employee", "Checking a receipt respectfully is a useful consumer skill.", "You asked about the price and got the correction.", [{ type: "cash", amount: 6 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "receipt-detective" }]),
    choice("take-photo", "Take a photo of the shelf tag first", "Evidence can make a correction easier and calmer.", "You documented the shelf price and got the receipt fixed.", [{ type: "cash", amount: 6 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 1 }])
  ]),

  event("consumer-return-policy", "Return Policy", "You are buying headphones from a store with a tiny return-policy sign.", ["consumer-skills"], { min: 13, max: 18 }, [
    randomChoice("buy-without-reading", "Buy without reading the sign", [
      { suffix: "works", probability: 0.55, feedback: "Sometimes nothing goes wrong, but skipping return details is still a risk.", logText: "The headphones worked, so the return policy did not matter this time.", effects: [{ type: "cash", amount: -35 }, { type: "stat", stat: "wellbeing", amount: 2 }] },
      { suffix: "broken", probability: 0.45, feedback: "Return policies matter most when something goes wrong.", logText: "The headphones broke, and the store only offered store credit.", effects: [{ type: "cash", amount: -35 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }, { type: "stat", stat: "wellbeing", amount: -4 }] }
    ], { requirements: [{ type: "minCash", value: 35 }] }),
    choice("read-policy", "Read the policy before buying", "A minute of reading can prevent an annoying surprise.", "You checked the return window before deciding.", [{ type: "cash", amount: -35 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }], { requirements: [{ type: "minCash", value: 35 }] }),
    choice("choose-better-policy", "Buy a similar pair with better returns", "Price is only one part of the deal; protection matters too.", "You chose a pair with a clearer return policy.", [{ type: "cash", amount: -39 }, { type: "stat", stat: "trustSafety", amount: 3 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }], { requirements: [{ type: "minCash", value: 39 }] })
  ]),

  event("consumer-free-trial", "Free Trial", "A music app offers a free trial that turns into a paid subscription.", ["consumer-skills", "budgeting"], { min: 13, max: 18 }, [
    randomChoice("start-forget", "Start it and hope you remember", [
      { suffix: "remember", probability: 0.4, feedback: "Remembering worked, but relying on memory is fragile.", logText: "You remembered to cancel before the trial ended.", effects: [{ type: "stat", stat: "discipline", amount: 1 }] },
      { suffix: "forgot", probability: 0.6, feedback: "Automatic renewals are designed to keep going unless you act.", logText: "You forgot to cancel and paid for a month.", effects: [{ type: "cash", amount: -12 }, { type: "stat", stat: "discipline", amount: -3 }] }
    ]),
    choice("set-reminder", "Set a cancellation reminder", "A reminder turns a future task into a planned task.", "You set a reminder before starting the free trial.", [{ type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }]),
    choice("skip-trial", "Skip the trial", "Skipping can be the right call if the subscription is not a real priority.", "You skipped the trial and avoided a future charge.", [{ type: "savings", amount: 12 }, { type: "stat", stat: "discipline", amount: 2 }])
  ]),

  event("consumer-debit-cash", "Debit or Cash", "You are shopping with friends and need a way to stick to your spending limit.", ["consumer-skills", "banking", "budgeting"], { min: 13, max: 18 }, [
    choice("use-debit", "Use debit and check your balance", "Debit is convenient, but checking your balance prevents accidental overspending.", "You checked your balance before using debit.", [{ type: "checking", amount: -16 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }], { requirements: [{ type: "minCash", value: 0 }] }),
    choice("planned-cash", "Bring only planned cash", "Limiting what you bring makes the boundary simple.", "You brought only your planned spending money.", [{ type: "cash", amount: -14 }, { type: "stat", stat: "discipline", amount: 4 }], { requirements: [{ type: "minCash", value: 14 }] }),
    choice("borrow-friend", "Borrow from a friend", "Borrowing for wants can make social situations awkward later.", "You borrowed from a friend and owed them next week.", [{ type: "debt", amount: 14 }, { type: "stat", stat: "wellbeing", amount: -2 }])
  ]),

  event("consumer-shipping-fee", "Shipping Fee", "An online cart looks cheap until shipping appears at checkout.", ["consumer-skills", "budgeting"], { min: 13, max: 18 }, [
    choice("pay-shipping", "Pay the shipping fee", "Convenience has a price. The total cost is what matters.", "You paid shipping and the item cost more than expected.", [{ type: "cash", amount: -28 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }], { requirements: [{ type: "minCash", value: 28 }] }),
    choice("pickup", "Choose free pickup", "Changing the delivery method can lower total cost.", "You chose pickup and avoided the shipping fee.", [{ type: "cash", amount: -19 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }], { requirements: [{ type: "minCash", value: 19 }] }),
    choice("close-cart", "Close the cart and compare", "Pausing at checkout can keep surprise fees from becoming automatic.", "You closed the cart and compared prices elsewhere.", [{ type: "stat", stat: "discipline", amount: 3 }, { type: "savings", amount: 10 }])
  ]),

  event("consumer-sale-anchor", "Sale Sign", "A jacket says 40% off, but you did not plan to buy a jacket.", ["consumer-skills", "money-values"], { min: 13, max: 18 }, [
    choice("buy-sale", "Buy because it is on sale", "A sale lowers a price, but it does not make an unplanned item free.", "You bought the sale jacket and spent money you planned to save.", [{ type: "cash", amount: -48 }, { type: "stat", stat: "discipline", amount: -4 }], { requirements: [{ type: "minCash", value: 48 }] }),
    choice("check-need", "Ask if you need it", "Needs and values should come before the sale sign.", "You checked your plan and skipped the jacket.", [{ type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "achievement", achievementId: "needs-before-wants" }]),
    choice("add-wishlist", "Add it to a wish list", "A wish list preserves the idea without making an instant purchase.", "You added it to a wish list and kept shopping calmly.", [{ type: "stat", stat: "discipline", amount: 2 }])
  ]),

  event("budget-first-month", "First Monthly Budget", "You decide to organize your money into needs, wants, savings, and giving.", ["budgeting", "money-values"], { min: 13, max: 18 }, [
    choice("balanced-budget", "Use a balanced plan", "A balanced budget gives every dollar a job without being too strict.", "You made your first balanced budget.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "first-budget" }]),
    choice("fun-budget", "Keep most money for fun", "A fun-heavy budget feels easy now but leaves less for future you.", "You kept most money for wants and felt low stress now.", [{ type: "stat", stat: "wellbeing", amount: 3 }, { type: "stat", stat: "discipline", amount: -4 }]),
    choice("savings-budget", "Make an aggressive saving plan", "Saving a lot helps, but plans work best when they are realistic.", "You made an aggressive savings plan.", [{ type: "savings", amount: 30 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "wellbeing", amount: -1 }])
  ]),

  event("budget-needs-wants", "Needs or Wants", "Your budget is tight and you are sorting what must be paid first.", ["budgeting", "money-values"], { min: 13, max: 19 }, [
    choice("pay-needs", "Cover needs before wants", "Needs keep your life stable; wants can wait or shrink.", "You covered needs before wants.", [{ type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "needs-before-wants" }]),
    choice("split-evenly", "Split money evenly", "Equal is not always practical because needs and wants have different consequences.", "You split money evenly and had to adjust later.", [{ type: "stat", stat: "moneyKnowledge", amount: 1 }, { type: "cash", amount: -8 }]),
    choice("fun-first", "Pay fun costs first", "Wants can be meaningful, but needs create the foundation.", "You paid fun costs first and felt stressed when a need appeared.", [{ type: "stat", stat: "wellbeing", amount: -4 }, { type: "debt", amount: 25 }])
  ]),

  event("budget-paycheck-tax", "First Paycheck", "Your first paycheck is smaller than the hourly total you calculated.", ["budgeting", "taxes", "career"], { min: 15, max: 19 }, [
    choice("think-mistake", "Assume payroll made a mistake", "It is smart to check, but paychecks often have taxes and deductions.", "You asked about the paycheck and learned about deductions.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }]),
    choice("plan-net-pay", "Budget using take-home pay", "Budgeting with take-home pay keeps the plan realistic.", "You rebuilt your budget using the money you actually received.", [{ type: "cash", amount: 140 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 3 }]),
    choice("spend-gross", "Spend like you got the full amount", "Gross pay is not the same as take-home pay.", "You planned around gross pay and ran short.", [{ type: "cash", amount: 110 }, { type: "debt", amount: 30 }, { type: "stat", stat: "discipline", amount: -4 }])
  ], { lifeStages: ["high-school", "postsecondary", "early-career"] }),

  event("budget-school-cost", "Unexpected School Cost", "A class project needs supplies by Friday.", ["budgeting", "saving"], { min: 12, max: 16 }, [
    choice("use-savings", "Use a little savings", "This is exactly why a small cushion helps.", "You used savings for the surprise project cost.", [{ type: "savings", amount: -18 }, { type: "stat", stat: "wellbeing", amount: 1 }], { requirements: [{ type: "minSavings", value: 18 }] }),
    choice("borrow", "Borrow the money", "Borrowing solves today but creates a future payment.", "You borrowed money for supplies and added a small debt.", [{ type: "debt", amount: 18 }, { type: "stat", stat: "wellbeing", amount: -2 }]),
    choice("ask-options", "Ask the teacher about options", "Asking early can reveal lower-cost options.", "You asked the teacher and found extra classroom supplies.", [{ type: "stat", stat: "opportunity", amount: 2 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }])
  ]),

  event("budget-overbudget", "Overbudget Month", "You spent too much on small extras and still have a week left.", ["budgeting"], { min: 13, max: 19 }, [
    choice("ignore-gap", "Ignore it until next month", "Ignoring a gap does not close it. It usually moves the problem forward.", "You ignored the gap and added debt.", [{ type: "debt", amount: 35 }, { type: "stat", stat: "discipline", amount: -4 }]),
    choice("pause-wants", "Pause wants spending", "A short pause can stop a small problem from becoming a bigger one.", "You paused wants spending and finished the month.", [{ type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "wellbeing", amount: -1 }]),
    choice("earn-extra", "Offer to do an extra chore", "Increasing income is one way to repair a budget gap.", "You earned extra money to cover the gap.", [{ type: "cash", amount: 30 }, { type: "stat", stat: "opportunity", amount: 2 }, { type: "stat", stat: "discipline", amount: 2 }])
  ]),

  event("budget-preset", "Budget Preset", "You are choosing a budget style for the next few months.", ["budgeting"], { min: 13, max: 20 }, [
    choice("conservative", "Conservative: save more", "A savings-heavy plan builds security, though it may require patience.", "You chose a conservative budget.", [{ type: "savings", amount: 45 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "wellbeing", amount: -1 }]),
    choice("balanced", "Balanced: steady and realistic", "A realistic budget is easier to repeat.", "You chose a balanced budget.", [{ type: "savings", amount: 25 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "stat", stat: "wellbeing", amount: 2 }]),
    choice("fun", "Fun-first: low restrictions", "A loose budget can feel good, but goals may move slowly.", "You chose a fun-first budget.", [{ type: "cash", amount: -25 }, { type: "stat", stat: "wellbeing", amount: 3 }, { type: "stat", stat: "discipline", amount: -3 }])
  ]),

  event("budget-autosave", "Auto-Save", "Your bank app can automatically move a little money into savings every payday.", ["budgeting", "saving", "banking"], { min: 14, max: 22 }, [
    choice("turn-on", "Turn on auto-save", "Automation helps when motivation is low or life gets busy.", "You turned on auto-save.", [{ type: "savings", amount: 60 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "achievement", achievementId: "saved-100" }]),
    choice("manual-save", "Save manually each month", "Manual saving can work, but it depends on remembering.", "You decided to save manually.", [{ type: "savings", amount: 30 }, { type: "stat", stat: "discipline", amount: 2 }]),
    choice("not-now", "Not right now", "Waiting keeps cash flexible now, but saving may be easier to skip.", "You left auto-save off for now.", [{ type: "cash", amount: 20 }, { type: "stat", stat: "discipline", amount: -2 }])
  ]),

  event("budget-flex-cut", "Flexible Spending Cut", "You need to free up money for a short-term goal.", ["budgeting", "saving"], { min: 14, max: 22 }, [
    choice("cut-snacks", "Cut snack runs for a month", "Small repeated costs can become meaningful savings.", "You cut snack runs and redirected the money.", [{ type: "savings", amount: 35 }, { type: "stat", stat: "discipline", amount: 4 }]),
    choice("cancel-unused", "Cancel an unused subscription", "Removing unused expenses improves your budget without much sacrifice.", "You cancelled an unused subscription.", [{ type: "savings", amount: 24 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }]),
    choice("sell-unused", "Sell an unused item", "Turning unused stuff into cash can help a goal once, but it is not a monthly fix.", "You sold an unused item.", [{ type: "cash", amount: 40 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }])
  ]),

  event("bank-open-savings", "Open Savings", "You can open a simple savings account for goal money.", ["banking", "saving"], { min: 13, max: 18 }, [
    choice("open-savings", "Open it and label a goal", "Labeling savings makes the purpose clear.", "You opened a savings account and named your goal.", [{ type: "savings", amount: 50 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "emergency-started" }]),
    choice("keep-cash", "Keep money as cash", "Cash is easy to see, but also easy to spend or misplace.", "You kept the money as cash.", [{ type: "cash", amount: 50 }, { type: "stat", stat: "discipline", amount: -1 }]),
    choice("wait-bank", "Wait until you learn more", "Waiting to understand fees is reasonable, as long as it does not become avoidance.", "You decided to learn about account options first.", [{ type: "stat", stat: "moneyKnowledge", amount: 3 }])
  ]),

  event("bank-checking-fee", "Checking Fee", "One checking account has a monthly fee unless you keep a minimum balance.", ["banking", "consumer-skills"], { min: 14, max: 20 }, [
    choice("pick-fee", "Pick it because the card looks cool", "A cool card design is not worth avoidable fees.", "You picked the cool card and paid fees later.", [{ type: "cash", amount: -36 }, { type: "stat", stat: "moneyKnowledge", amount: -2 }]),
    choice("no-fee", "Choose a no-fee student account", "Fees are part of the account's real cost.", "You chose a no-fee account that fit your needs.", [{ type: "checking", amount: 25 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }]),
    choice("minimum-balance", "Use it only if you can keep the balance", "Minimum-balance accounts require monitoring.", "You chose the account and watched the balance carefully.", [{ type: "checking", amount: 20 }, { type: "stat", stat: "discipline", amount: 3 }], { requirements: [{ type: "minSavings", value: 100 }] })
  ]),

  event("bank-low-balance-alert", "Low Balance Alert", "Your checking account can send alerts when the balance gets low.", ["banking", "budgeting"], { min: 14, max: 22 }, [
    choice("enable-alert", "Turn on low-balance alerts", "Alerts give you time to adjust before fees or stress hit.", "You enabled low-balance alerts.", [{ type: "stat", stat: "trustSafety", amount: 3 }, { type: "stat", stat: "discipline", amount: 3 }]),
    choice("skip-alert", "Skip alerts", "Skipping alerts means you may not notice a problem until after it costs money.", "You skipped alerts and missed a low-balance warning.", [{ type: "debt", amount: 15 }, { type: "stat", stat: "discipline", amount: -2 }]),
    choice("weekly-check", "Check the account weekly", "A routine can work as well as a notification when you actually follow it.", "You made Friday your account-check day.", [{ type: "stat", stat: "discipline", amount: 4 }])
  ]),

  event("bank-emergency-milestone", "Emergency Milestone", "Your emergency fund reaches a new milestone.", ["saving", "banking"], { min: 13, max: 22 }, [
    choice("celebrate-small", "Celebrate with a low-cost treat", "Celebrating progress can help you keep going when the treat fits the plan.", "You celebrated the savings milestone with a small treat.", [{ type: "cash", amount: -8 }, { type: "stat", stat: "wellbeing", amount: 3 }, { type: "stat", stat: "discipline", amount: 1 }], { requirements: [{ type: "minCash", value: 8 }] }),
    choice("increase-goal", "Increase the goal", "Once a habit works, raising the goal can build more security.", "You raised your emergency-fund goal.", [{ type: "savings", amount: 50 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "saved-100" }]),
    choice("move-to-spending", "Move some savings to spending", "Using savings for wants can slow down the protection you just built.", "You moved savings into spending money.", [{ type: "savings", amount: -35 }, { type: "cash", amount: 35 }, { type: "stat", stat: "discipline", amount: -3 }], { requirements: [{ type: "minSavings", value: 35 }] })
  ], { requirements: [{ type: "minSavings", value: 100 }] }),

  event("bank-compound-interest", "Interest Earned", "Your savings account pays a little interest.", ["saving", "banking"], { min: 13, max: 22 }, [
    choice("leave-interest", "Leave the interest in savings", "Interest can earn more interest when you leave it alone.", "You left the interest in savings and watched the balance grow.", [{ type: "savings", amount: 12 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "compound-growth" }]),
    choice("spend-interest", "Spend the interest", "Spending interest is allowed, but it stops that small amount from growing.", "You spent the interest on a small treat.", [{ type: "cash", amount: 12 }, { type: "stat", stat: "wellbeing", amount: 2 }]),
    choice("add-extra", "Add extra to savings too", "Adding your own money makes interest work on a larger balance.", "You added extra money to savings with the interest.", [{ type: "savings", amount: 32 }, { type: "stat", stat: "discipline", amount: 4 }], { requirements: [{ type: "minCash", value: 20 }] })
  ], { requirements: [{ type: "minSavings", value: 50 }] }),

  event("bank-atm-fee", "ATM Fee", "The nearest ATM charges a fee, but your bank's ATM is farther away.", ["banking", "consumer-skills"], { min: 14, max: 22 }, [
    choice("pay-fee", "Use the nearest ATM", "Convenience can be worth it sometimes, but fees shrink your money.", "You paid the ATM fee for convenience.", [{ type: "cash", amount: -4 }, { type: "stat", stat: "wellbeing", amount: 1 }]),
    choice("walk-bank-atm", "Use your bank's ATM", "Avoiding repeated fees can save more than it seems.", "You used your bank's ATM and avoided the fee.", [{ type: "stat", stat: "discipline", amount: 3 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }]),
    choice("cashback", "Get cash back during a planned purchase", "Combining tasks can avoid extra costs.", "You got cash back during a purchase you already planned.", [{ type: "cash", amount: -2 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }])
  ]),

  event("bank-direct-deposit", "Direct Deposit Split", "Your part-time job lets you split pay between checking and savings.", ["banking", "saving", "career"], { min: 15, max: 22 }, [
    choice("split-20", "Send 20% to savings", "Paying yourself first makes saving automatic.", "You split each paycheck and savings grew quietly.", [{ type: "cash", amount: 120 }, { type: "savings", amount: 40 }, { type: "stat", stat: "discipline", amount: 4 }]),
    choice("all-checking", "Send all pay to checking", "Checking is useful for bills, but savings is easier to spend accidentally when mixed in.", "You sent all pay to checking.", [{ type: "checking", amount: 160 }, { type: "stat", stat: "discipline", amount: -1 }]),
    choice("split-50", "Send 50% to savings", "A big automatic split builds savings fast if your spending plan can handle it.", "You sent half the paycheck to savings.", [{ type: "cash", amount: 80 }, { type: "savings", amount: 80 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "wellbeing", amount: -1 }])
  ], { lifeStages: ["high-school", "postsecondary", "early-career"] }),

  event("bank-savings-temptation", "Savings Temptation", "You want to dip into savings for a limited-edition hoodie.", ["saving", "money-values"], { min: 13, max: 19 }, [
    choice("dip-savings", "Use savings for the hoodie", "Savings can be used, but every withdrawal changes the goal timeline.", "You used savings for the hoodie and delayed your goal.", [{ type: "savings", amount: -60 }, { type: "stat", stat: "wellbeing", amount: 4 }, { type: "stat", stat: "discipline", amount: -5 }], { requirements: [{ type: "minSavings", value: 60 }] }),
    choice("wait-sale", "Wait for a sale", "Waiting can turn an impulse into a planned purchase.", "You waited for a sale and kept most of your savings.", [{ type: "cash", amount: -35 }, { type: "stat", stat: "discipline", amount: 4 }], { requirements: [{ type: "minCash", value: 35 }] }),
    choice("skip-hoodie", "Skip it and protect the goal", "A clear goal makes it easier to let some wants pass.", "You skipped the hoodie and protected your savings.", [{ type: "savings", amount: 20 }, { type: "stat", stat: "discipline", amount: 5 }])
  ], { requirements: [{ type: "minSavings", value: 40 }] }),

  event("credit-first-card", "First Credit Offer", "A store offers you a starter credit card with a discount today.", ["credit", "consumer-skills"], { min: 16, max: 22 }, [
    choice("accept-discount", "Accept for the discount", "A one-time discount can lead to ongoing debt if you do not have a plan.", "You accepted the card for the discount and opened a credit line.", [{ type: "creditScore", amount: 20 }, { type: "debt", amount: 45 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }]),
    choice("read-terms", "Read the terms first", "Interest rate, fees, and due dates matter more than the sign-up pitch.", "You read the terms before deciding.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "creditScore", amount: 10 }]),
    choice("decline", "Decline for now", "Waiting is reasonable if you are not ready to manage payments.", "You declined the card and avoided a new responsibility.", [{ type: "stat", stat: "discipline", amount: 3 }, { type: "achievement", achievementId: "debt-dodger" }])
  ], { lifeStages: ["high-school", "postsecondary", "early-career"] }),

  event("credit-minimum-payment", "Minimum Payment", "Your credit card statement offers a small minimum payment and a larger full-balance option.", ["credit", "budgeting"], { min: 16, max: 22 }, [
    choice("pay-minimum", "Pay only the minimum", "Minimum payments keep the account current but interest can keep debt around.", "You paid the minimum and carried a balance.", [{ type: "cash", amount: -25 }, { type: "debt", amount: 35 }, { type: "creditScore", amount: 2 }], { requirements: [{ type: "minCash", value: 25 }, { type: "hasCredit", value: true }] }),
    choice("pay-full", "Pay the full balance", "Paying in full avoids interest and builds a strong habit.", "You paid the balance in full.", [{ type: "cash", amount: -60 }, { type: "debt", amount: -60 }, { type: "creditScore", amount: 18 }, { type: "achievement", achievementId: "paid-in-full" }], { requirements: [{ type: "minCash", value: 60 }, { type: "hasCredit", value: true }] }),
    choice("pay-extra", "Pay more than minimum", "Extra payments reduce interest even when you cannot pay everything.", "You paid more than the minimum and reduced the balance.", [{ type: "cash", amount: -40 }, { type: "debt", amount: -30 }, { type: "creditScore", amount: 8 }], { requirements: [{ type: "minCash", value: 40 }, { type: "hasCredit", value: true }] })
  ], { requirements: [{ type: "hasCredit", value: true }] }),

  event("credit-full-balance", "Full Balance Win", "You have enough money to pay off a small credit card balance.", ["credit"], { min: 16, max: 22 }, [
    choice("pay-it", "Pay it off now", "Avoiding interest is one of the biggest credit wins.", "You paid off the balance before interest grew.", [{ type: "cash", amount: -75 }, { type: "debt", amount: -75 }, { type: "creditScore", amount: 15 }, { type: "achievement", achievementId: "paid-in-full" }], { requirements: [{ type: "minCash", value: 75 }, { type: "hasCredit", value: true }] }),
    choice("keep-cash", "Keep cash and pay later", "Cash flexibility matters, but interest is the cost of waiting.", "You kept cash and let the balance continue.", [{ type: "debt", amount: 12 }, { type: "creditScore", amount: -4 }], { requirements: [{ type: "hasCredit", value: true }] }),
    choice("pay-half", "Pay half now", "Partial payments reduce the balance and can be a reasonable backup plan.", "You paid half and reduced future interest.", [{ type: "cash", amount: -38 }, { type: "debt", amount: -38 }, { type: "creditScore", amount: 6 }], { requirements: [{ type: "minCash", value: 38 }, { type: "hasCredit", value: true }] })
  ], { requirements: [{ type: "hasCredit", value: true }] }),

  event("credit-utilization", "Credit Limit", "You learn that using too much of a credit limit can hurt your score.", ["credit"], { min: 16, max: 22 }, [
    choice("use-high", "Use most of the limit", "High utilization can signal risk even when you plan to pay later.", "You used most of your credit limit.", [{ type: "debt", amount: 180 }, { type: "creditScore", amount: -25 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }], { requirements: [{ type: "hasCredit", value: true }] }),
    choice("small-planned", "Use it only for a small planned purchase", "Small planned use can build credit without letting the balance get too high.", "You made a small planned purchase and paid attention to the balance.", [{ type: "debt", amount: 30 }, { type: "creditScore", amount: 8 }, { type: "stat", stat: "discipline", amount: 3 }], { requirements: [{ type: "hasCredit", value: true }] }),
    choice("use-debit-instead", "Use debit instead", "Credit is optional. Avoiding debt can be the right move.", "You used debit and kept the credit balance low.", [{ type: "checking", amount: -24 }, { type: "creditScore", amount: 3 }, { type: "achievement", achievementId: "debt-dodger" }])
  ]),

  event("credit-late-payment", "Due Date", "A payment is due tonight and you almost forgot.", ["credit"], { min: 16, max: 22 }, [
    choice("pay-now", "Pay now", "On-time payments are a major part of credit health.", "You paid before the due date.", [{ type: "cash", amount: -35 }, { type: "creditScore", amount: 12 }, { type: "stat", stat: "discipline", amount: 3 }], { requirements: [{ type: "minCash", value: 35 }, { type: "hasCredit", value: true }] }),
    choice("set-autopay", "Set autopay for minimum payments", "Autopay can prevent missed due dates, though you still need to watch balances.", "You set autopay so future payments are less likely to be late.", [{ type: "cash", amount: -35 }, { type: "creditScore", amount: 10 }, { type: "stat", stat: "discipline", amount: 4 }], { requirements: [{ type: "minCash", value: 35 }, { type: "hasCredit", value: true }] }),
    choice("forget", "Deal with it tomorrow", "Late payments can be expensive and can damage credit.", "You missed the payment date and paid a fee.", [{ type: "debt", amount: 25 }, { type: "creditScore", amount: -35 }, { type: "stat", stat: "wellbeing", amount: -5 }], { requirements: [{ type: "hasCredit", value: true }] })
  ], { requirements: [{ type: "hasCredit", value: true }] }),

  event("credit-loan-compare", "Loan Offers", "You compare two small loan offers for a future purchase.", ["credit", "consumer-skills"], { min: 17, max: 22 }, [
    choice("lowest-payment", "Pick the lowest monthly payment", "A low payment can hide a longer timeline and higher total cost.", "You picked the lowest monthly payment but paid more over time.", [{ type: "debt", amount: 220 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }, { type: "flag", key: "comparedLoan", value: true }]),
    choice("lowest-total", "Compare total repayment cost", "Total repayment shows the real price of borrowing.", "You compared total cost and picked the better loan.", [{ type: "debt", amount: 150 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "flag", key: "comparedLoan", value: true }]),
    choice("save-instead", "Delay and save instead", "Waiting can be frustrating, but it can reduce or avoid borrowing.", "You delayed the purchase and saved toward it.", [{ type: "savings", amount: 80 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "debt-dodger" }])
  ], { lifeStages: ["high-school", "postsecondary", "early-career"] }),

  event("credit-cosign", "Co-Sign Request", "A friend asks you to co-sign for a purchase because your credit is stronger.", ["credit", "money-values"], { min: 17, max: 22 }, [
    randomChoice("cosign", "Co-sign because you trust them", [
      { suffix: "paid", probability: 0.45, feedback: "Trust matters, but co-signing still means legal responsibility.", logText: "Your friend paid on time, and nothing bad happened.", effects: [{ type: "stat", stat: "wellbeing", amount: 2 }] },
      { suffix: "missed", probability: 0.55, feedback: "Co-signing means missed payments can hurt you too.", logText: "Your friend missed payments, and your credit took a hit.", effects: [{ type: "creditScore", amount: -40 }, { type: "debt", amount: 120 }, { type: "stat", stat: "wellbeing", amount: -6 }] }
    ], { requirements: [{ type: "hasCredit", value: true }] }),
    choice("say-no", "Say no kindly", "Protecting your credit can be uncomfortable but wise.", "You said no kindly and explained the risk.", [{ type: "stat", stat: "discipline", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }]),
    choice("help-budget", "Help them make a savings plan", "Helping does not always mean taking on debt.", "You helped your friend make a savings plan instead.", [{ type: "stat", stat: "wellbeing", amount: 2 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }])
  ]),

  event("credit-recovery", "Credit Recovery", "Your credit score dropped after a tough month. You need a recovery plan.", ["credit", "budgeting"], { min: 17, max: 22 }, [
    choice("pay-on-time", "Focus on on-time payments", "Consistent on-time payments help credit recover over time.", "You made on-time payments your top priority.", [{ type: "creditScore", amount: 18 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "credit-climber" }], { requirements: [{ type: "hasCredit", value: true }] }),
    choice("lower-balances", "Lower balances first", "Reducing balances can improve utilization and lower stress.", "You lowered your balances step by step.", [{ type: "cash", amount: -70 }, { type: "debt", amount: -70 }, { type: "creditScore", amount: 16 }], { requirements: [{ type: "minCash", value: 70 }, { type: "hasCredit", value: true }] }),
    choice("open-more", "Open more credit quickly", "More accounts do not fix the habits that caused the problem.", "You opened more credit and made recovery harder.", [{ type: "creditScore", amount: -20 }, { type: "debt", amount: 80 }], { requirements: [{ type: "hasCredit", value: true }] })
  ], { requirements: [{ type: "hasCredit", value: true }] }),

  event("invest-start-early", "Start Investing", "You have some savings and hear that starting early can help money grow.", ["investing", "saving"], { min: 15, max: 22 }, [
    choice("start-small", "Invest a small amount", "Starting small can teach habits while keeping risk manageable.", "You invested a small amount and kept learning.", [{ type: "savings", amount: -50 }, { type: "investments", amount: 50 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }], { requirements: [{ type: "minSavings", value: 100 }] }),
    choice("wait-emergency", "Build emergency savings first", "An emergency fund can keep you from selling investments at a bad time.", "You chose to build savings before investing.", [{ type: "savings", amount: 60 }, { type: "stat", stat: "discipline", amount: 4 }]),
    choice("invest-all", "Invest all available savings", "Investing everything can leave you exposed to short-term surprises.", "You invested all your spare savings and felt nervous.", [{ type: "savings", amount: -120 }, { type: "investments", amount: 120 }, { type: "stat", stat: "wellbeing", amount: -4 }], { requirements: [{ type: "minSavings", value: 120 }] })
  ]),

  event("invest-diversify", "One Stock or Many", "You can buy one exciting company or a diversified fund.", ["investing"], { min: 15, max: 22 }, [
    randomChoice("single-stock", "Choose one exciting company", [
      { suffix: "up", probability: 0.45, feedback: "Single companies can rise fast, but the risk is concentrated.", logText: "Your single-stock pick jumped this year.", effects: [{ type: "investments", amount: 90 }, { type: "stat", stat: "wellbeing", amount: 4 }] },
      { suffix: "down", probability: 0.55, feedback: "Concentration can hurt when one company has a bad year.", logText: "Your single-stock pick dropped sharply.", effects: [{ type: "investments", amount: -60 }, { type: "stat", stat: "wellbeing", amount: -4 }] }
    ], { requirements: [{ type: "minSavings", value: 50 }] }),
    choice("diversified-fund", "Choose a diversified fund", "Diversification spreads risk across many investments.", "You chose a diversified fund.", [{ type: "savings", amount: -75 }, { type: "investments", amount: 85 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "diversified" }], { requirements: [{ type: "minSavings", value: 75 }] }),
    choice("learn-first", "Learn risk terms first", "Understanding risk before investing helps you choose with a plan.", "You learned about diversification before investing.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }])
  ]),

  event("invest-market-drop", "Market Drop", "Your investment value drops after a rough market month.", ["investing"], { min: 16, max: 22 }, [
    randomChoice("panic-sell", "Sell immediately", [
      { suffix: "relief", probability: 0.4, feedback: "Selling stops further losses but can lock in a drop.", logText: "You sold after the drop and felt temporary relief.", effects: [{ type: "investments", amount: -40 }, { type: "cash", amount: 70 }, { type: "stat", stat: "wellbeing", amount: 1 }] },
      { suffix: "rebound", probability: 0.6, feedback: "Panic selling can miss recoveries.", logText: "You sold, then watched the market recover without you.", effects: [{ type: "investments", amount: -70 }, { type: "stat", stat: "wellbeing", amount: -4 }] }
    ], { requirements: [{ type: "minInvestments", value: 50 }] }),
    choice("review-plan", "Review your long-term plan", "Investing plans should expect ups and downs.", "You reviewed your plan and stayed calm.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 3 }], { requirements: [{ type: "minInvestments", value: 50 }] }),
    choice("buy-more-small", "Add a small amount", "Adding during a drop can help if your emergency fund is protected.", "You added a small amount while keeping savings safe.", [{ type: "savings", amount: -25 }, { type: "investments", amount: 35 }, { type: "achievement", achievementId: "compound-growth" }], { requirements: [{ type: "minSavings", value: 250 }] })
  ], { requirements: [{ type: "minInvestments", value: 50 }] }),

  event("invest-hype", "Trendy Investment", "A group chat is hyping a risky investment that everyone says will go up.", ["investing", "scams"], { min: 15, max: 22 }, [
    randomChoice("chase-hype", "Put money in because everyone is talking", [
      { suffix: "brief-up", probability: 0.35, feedback: "Hype can rise briefly, but it is not a plan.", logText: "The trendy investment rose briefly and then became stressful.", effects: [{ type: "investments", amount: 45 }, { type: "stat", stat: "wellbeing", amount: -2 }] },
      { suffix: "loss", probability: 0.65, feedback: "Trends can fall just as fast as they spread.", logText: "The trendy investment dropped hard.", effects: [{ type: "investments", amount: -50 }, { type: "stat", stat: "trustSafety", amount: -3 }] }
    ], { requirements: [{ type: "minSavings", value: 50 }] }),
    choice("ask-why", "Ask what the investment actually is", "If nobody can explain it clearly, that is useful information.", "You asked questions and decided not to chase the hype.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "trustSafety", amount: 4 }, { type: "achievement", achievementId: "scam-spotted" }]),
    choice("diversify-instead", "Put a small amount in a diversified fund", "Diversification is less exciting but usually less fragile.", "You ignored the hype and chose a diversified approach.", [{ type: "savings", amount: -40 }, { type: "investments", amount: 45 }, { type: "achievement", achievementId: "diversified" }], { requirements: [{ type: "minSavings", value: 40 }] })
  ]),

  event("invest-bonds-stocks", "Risk Mix", "You compare a calmer bond-like option and a stock-like option with more ups and downs.", ["investing"], { min: 16, max: 22 }, [
    choice("all-risk", "Pick only the higher-risk option", "Higher risk may grow more, but the ride can be stressful.", "You chose the higher-risk option.", [{ type: "savings", amount: -60 }, { type: "investments", amount: 70 }, { type: "stat", stat: "wellbeing", amount: -2 }], { requirements: [{ type: "minSavings", value: 60 }] }),
    choice("mixed", "Use a mix of both", "A mix can balance growth and stability.", "You used a mix of investment types.", [{ type: "savings", amount: -60 }, { type: "investments", amount: 66 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "diversified" }], { requirements: [{ type: "minSavings", value: 60 }] }),
    choice("calm-only", "Pick only the calmer option", "Lower risk can fit short-term goals, though growth may be slower.", "You chose the calmer option.", [{ type: "savings", amount: -60 }, { type: "investments", amount: 62 }, { type: "stat", stat: "wellbeing", amount: 2 }], { requirements: [{ type: "minSavings", value: 60 }] })
  ]),

  event("invest-rebalance", "Rebalance Time", "One investment grew and now takes up most of your portfolio.", ["investing"], { min: 16, max: 22 }, [
    choice("rebalance", "Rebalance back to your plan", "Rebalancing keeps one winner from taking over your risk.", "You rebalanced your portfolio.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 3 }, { type: "achievement", achievementId: "diversified" }], { requirements: [{ type: "minInvestments", value: 100 }] }),
    choice("let-ride", "Let the winner ride", "Letting winners ride can work, but it increases concentration risk.", "You let the winning investment dominate.", [{ type: "investments", amount: 25 }, { type: "stat", stat: "wellbeing", amount: -1 }], { requirements: [{ type: "minInvestments", value: 100 }] }),
    choice("sell-all", "Sell everything", "Big all-or-nothing moves can be driven by feelings instead of plans.", "You sold everything and lost your long-term plan.", [{ type: "cash", amount: 90 }, { type: "investments", amount: -100 }, { type: "stat", stat: "discipline", amount: -4 }], { requirements: [{ type: "minInvestments", value: 100 }] })
  ], { requirements: [{ type: "minInvestments", value: 100 }] }),

  event("invest-compound", "Compounding Choice", "Your investment gained a little money this year.", ["investing", "saving"], { min: 16, max: 22 }, [
    choice("reinvest", "Reinvest the gain", "Reinvesting lets gains potentially earn gains of their own.", "You reinvested the gain.", [{ type: "investments", amount: 30 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "compound-growth" }], { requirements: [{ type: "minInvestments", value: 50 }] }),
    choice("cash-out-gain", "Cash out the gain", "Taking gains can feel good, but it slows compounding.", "You cashed out the gain.", [{ type: "cash", amount: 25 }, { type: "investments", amount: -25 }, { type: "stat", stat: "wellbeing", amount: 2 }], { requirements: [{ type: "minInvestments", value: 50 }] }),
    choice("add-monthly", "Add a small recurring amount", "Regular contributions can matter more than perfect timing.", "You added a recurring investment habit.", [{ type: "savings", amount: -30 }, { type: "investments", amount: 45 }, { type: "stat", stat: "discipline", amount: 4 }], { requirements: [{ type: "minSavings", value: 80 }] })
  ], { requirements: [{ type: "minInvestments", value: 50 }] }),

  event("invest-emergency-first", "Invest or Emergency Fund", "You have $200 saved and wonder if you should invest it all.", ["investing", "saving"], { min: 15, max: 22 }, [
    choice("invest-all-200", "Invest all $200", "Investing before a cushion can force you to sell when surprise costs happen.", "You invested all $200 and had no cushion left.", [{ type: "savings", amount: -200 }, { type: "investments", amount: 210 }, { type: "stat", stat: "wellbeing", amount: -4 }], { requirements: [{ type: "minSavings", value: 200 }] }),
    choice("keep-150", "Keep $150 saved and invest $50", "This balances learning with protection.", "You kept a cushion and invested a small amount.", [{ type: "savings", amount: -50 }, { type: "investments", amount: 55 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 3 }], { requirements: [{ type: "minSavings", value: 200 }] }),
    choice("save-more-first", "Save more before investing", "There is nothing wrong with preparing before taking investment risk.", "You grew your emergency fund first.", [{ type: "savings", amount: 60 }, { type: "achievement", achievementId: "emergency-started" }])
  ]),

  event("protect-phishing-text", "Suspicious Text", "A text says your account is locked and asks you to tap a link.", ["scams", "banking"], { min: 12, max: 22 }, [
    randomChoice("tap-link", "Tap the link", [
      { suffix: "caught", probability: 0.7, feedback: "Scam links can steal login information.", logText: "The link was fake, and you had to secure your account.", effects: [{ type: "cash", amount: -45 }, { type: "stat", stat: "trustSafety", amount: -6 }, { type: "stat", stat: "wellbeing", amount: -4 }] },
      { suffix: "warning", probability: 0.3, feedback: "You got lucky this time, but links in urgent messages are risky.", logText: "Your browser warned you before the fake page loaded.", effects: [{ type: "stat", stat: "trustSafety", amount: 1 }] }
    ]),
    choice("open-app", "Open the bank app directly", "Going directly to the official app avoids suspicious links.", "You checked your account safely through the official app.", [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "achievement", achievementId: "scam-spotted" }]),
    choice("ask-adult", "Ask a trusted adult or bank contact", "Slowing down is powerful when a message creates panic.", "You asked for help and learned it was phishing.", [{ type: "stat", stat: "trustSafety", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }])
  ]),

  event("protect-password-reuse", "Password Reuse", "You use the same password for games, email, and banking.", ["scams"], { min: 12, max: 22 }, [
    randomChoice("reuse", "Keep using one password", [
      { suffix: "fine", probability: 0.5, feedback: "Nothing happened this time, but one breach could affect many accounts.", logText: "Nothing bad happened this year, but the reused password stayed risky.", effects: [{ type: "stat", stat: "trustSafety", amount: -1 }] },
      { suffix: "breach", probability: 0.5, feedback: "Password reuse lets one breach spread.", logText: "A game site breach put other accounts at risk.", effects: [{ type: "cash", amount: -30 }, { type: "stat", stat: "trustSafety", amount: -6 }] }
    ]),
    choice("unique-passwords", "Use unique passwords", "Unique passwords limit the damage if one site has a breach.", "You changed important accounts to unique passwords.", [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "stat", stat: "discipline", amount: 2 }]),
    choice("password-manager", "Use a password manager with help", "A password manager can make strong, unique passwords realistic.", "You set up a password manager with guidance.", [{ type: "stat", stat: "trustSafety", amount: 6 }, { type: "achievement", achievementId: "scam-spotted" }], { requirements: [{ type: "statAtLeast", stat: "moneyKnowledge", value: 45 }] })
  ]),

  event("protect-2fa", "Two-Step Login", "Your email asks if you want to turn on two-factor authentication.", ["scams"], { min: 13, max: 22 }, [
    choice("enable-2fa", "Turn it on", "Two-factor authentication makes stolen passwords less useful.", "You turned on two-step login for important accounts.", [{ type: "stat", stat: "trustSafety", amount: 6 }, { type: "achievement", achievementId: "scam-spotted" }]),
    choice("skip-2fa", "Skip because it feels annoying", "Security steps can feel annoying until they prevent a problem.", "You skipped two-step login and stayed more vulnerable.", [{ type: "stat", stat: "trustSafety", amount: -3 }]),
    choice("turn-on-banking", "Turn it on for banking only", "Protecting the highest-risk accounts first is a practical start.", "You turned two-step login on for banking.", [{ type: "stat", stat: "trustSafety", amount: 4 }, { type: "stat", stat: "discipline", amount: 2 }])
  ]),

  event("protect-identity-warning", "Identity Warning", "A company emails that your information may have been exposed.", ["scams", "consumer-skills"], { min: 14, max: 22 }, [
    choice("ignore-email", "Ignore the warning", "Warnings are easy to avoid, but quick action can reduce damage.", "You ignored the warning and later saw suspicious activity.", [{ type: "cash", amount: -50 }, { type: "stat", stat: "trustSafety", amount: -5 }]),
    choice("change-passwords", "Change passwords and monitor accounts", "Fast action can limit a data breach's impact.", "You updated passwords and watched your accounts.", [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "stat", stat: "discipline", amount: 2 }]),
    choice("freeze-credit", "Learn about freezing credit", "Credit freezes can help prevent new accounts from being opened in your name.", "You learned how credit freezes work.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "trustSafety", amount: 4 }], { requirements: [{ type: "minAge", value: 16 }] })
  ]),

  event("protect-insurance", "Phone Insurance", "You can pay a small premium for phone protection or risk paying full repair cost.", ["insurance", "consumer-skills"], { min: 14, max: 22 }, [
    randomChoice("skip-insurance", "Skip protection", [
      { suffix: "fine", probability: 0.55, feedback: "Skipping insurance saves money when nothing happens.", logText: "Nothing happened to your phone this year, so you saved the premium.", effects: [{ type: "cash", amount: 25 }, { type: "stat", stat: "wellbeing", amount: 1 }] },
      { suffix: "crack", probability: 0.45, feedback: "Insurance is about trading small certain costs for protection from big uncertain costs.", logText: "Your phone screen cracked, and the repair was expensive.", effects: [{ type: "cash", amount: -140 }, { type: "stat", stat: "wellbeing", amount: -5 }] }
    ]),
    choice("buy-insurance", "Buy protection with a deductible", "Insurance can be useful when the possible loss would be hard to pay.", "You bought phone protection and understood the deductible.", [{ type: "cash", amount: -25 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "insurance-aware" }], { requirements: [{ type: "minCash", value: 25 }] }),
    choice("self-insure", "Save repair money yourself", "Self-insuring works when you actually set money aside.", "You set aside money in case of repairs.", [{ type: "savings", amount: 40 }, { type: "stat", stat: "discipline", amount: 4 }])
  ]),

  event("protect-too-good", "Too-Good Offer", "A message says you won a prize but must pay a fee to claim it.", ["scams", "consumer-skills"], { min: 12, max: 22 }, [
    choice("pay-fee", "Pay the claim fee", "Real prizes do not usually require surprise fees through random messages.", "You paid the fee and the prize never came.", [{ type: "cash", amount: -35 }, { type: "stat", stat: "trustSafety", amount: -6 }], { requirements: [{ type: "minCash", value: 35 }] }),
    choice("search-offer", "Search the offer and sender", "Researching before paying is a strong scam-defense habit.", "You searched the offer and found scam warnings.", [{ type: "stat", stat: "trustSafety", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "scam-spotted" }]),
    choice("delete-report", "Delete and report it", "Reporting helps platforms identify scams.", "You deleted and reported the suspicious message.", [{ type: "stat", stat: "trustSafety", amount: 4 }])
  ]),

  event("career-resume", "First Resume", "A local library posts a teen helper role and asks for a simple resume.", ["career", "life-after-high-school"], { min: 14, max: 18 }, [
    choice("make-resume", "Make a simple resume", "A resume helps you describe skills before you have much job history.", "You made a simple resume for the library role.", [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "achievement", achievementId: "interview-ready" }]),
    choice("apply-without", "Apply without preparing", "Applying is good, but preparation makes your strengths clearer.", "You applied quickly but did not explain your skills well.", [{ type: "stat", stat: "opportunity", amount: 1 }]),
    choice("ask-feedback", "Ask someone to review it", "Feedback can catch unclear wording before an employer sees it.", "You asked for resume feedback and improved it.", [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }])
  ]),

  event("career-interview", "Interview Prep", "You get an interview for a summer job.", ["career"], { min: 15, max: 19 }, [
    randomChoice("wing-it", "Wing it", [
      { suffix: "okay", probability: 0.35, feedback: "Sometimes winging it works, but preparation raises your odds.", logText: "The interview went okay, but you forgot examples.", effects: [{ type: "stat", stat: "opportunity", amount: 1 }] },
      { suffix: "rough", probability: 0.65, feedback: "Practice helps you answer clearly when nervous.", logText: "The interview felt rough because you had not prepared.", effects: [{ type: "stat", stat: "opportunity", amount: -3 }, { type: "stat", stat: "wellbeing", amount: -2 }] }
    ]),
    choice("practice", "Practice common questions", "Practice can turn nervous energy into clearer answers.", "You practiced interview answers and felt ready.", [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "achievement", achievementId: "interview-ready" }]),
    choice("research-job", "Research the job and schedule", "Knowing the role helps you ask better questions.", "You researched the job before the interview.", [{ type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "discipline", amount: 2 }])
  ], { lifeStages: ["high-school"] }),

  event("career-paycheck", "First Job Paycheck", "Your first job paycheck arrives, and you need to decide what happens next.", ["career", "budgeting", "taxes"], { min: 15, max: 20 }, [
    choice("spend-check", "Spend most of it to celebrate", "Celebrating is okay, but spending most of a paycheck can erase the benefit quickly.", "You celebrated your first paycheck with a big shopping trip.", [{ type: "cash", amount: 60 }, { type: "stat", stat: "wellbeing", amount: 4 }, { type: "stat", stat: "discipline", amount: -4 }]),
    choice("pay-yourself", "Save a set percentage first", "Saving first makes the habit automatic.", "You saved part of your first paycheck before spending.", [{ type: "cash", amount: 120 }, { type: "savings", amount: 80 }, { type: "stat", stat: "discipline", amount: 5 }]),
    choice("track-paystub", "Read the paystub", "A paystub shows taxes, hours, and deductions.", "You read your paystub and understood your take-home pay.", [{ type: "cash", amount: 150 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }])
  ], { lifeStages: ["high-school", "postsecondary", "early-career"] }),

  event("career-paths", "After High School Paths", "You compare a four-year college, community college, trade program, and work-first path.", ["career", "life-after-high-school", "credit"], { min: 17, max: 22 }, [
    choice("four-year", "Pick four-year college immediately", "A four-year path can open doors, but cost and borrowing need a plan.", "You chose a four-year college path and started planning costs.", [{ type: "debt", amount: 600 }, { type: "stat", stat: "opportunity", amount: 7 }, { type: "flag", key: "comparedLoan", value: true }, { type: "achievement", achievementId: "future-planner" }]),
    choice("community-first", "Start at community college", "Lower-cost paths can still build toward big goals.", "You chose a lower-cost first step and kept options open.", [{ type: "debt", amount: 180 }, { type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "future-planner" }]),
    choice("trade-work", "Explore trade or work-first options", "Different careers have different training paths and costs.", "You explored trade and work-first options before deciding.", [{ type: "cash", amount: 200 }, { type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "future-planner" }])
  ], { lifeStages: ["high-school", "postsecondary"] }),

  event("career-apartment-budget", "Future Apartment Budget", "You imagine moving out someday and build a sample monthly apartment budget.", ["career", "life-after-high-school", "budgeting"], { min: 17, max: 22 }, [
    choice("rent-only", "Budget only for rent", "Housing costs include more than rent: utilities, food, transportation, and deposits matter too.", "You budgeted only for rent and found the plan was incomplete.", [{ type: "stat", stat: "moneyKnowledge", amount: 2 }, { type: "stat", stat: "wellbeing", amount: -2 }]),
    choice("full-budget", "Include rent, utilities, food, and transportation", "A complete budget makes future choices more realistic.", "You built a fuller apartment budget.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "achievement", achievementId: "future-planner" }]),
    choice("roommate-plan", "Compare a roommate option", "Sharing costs can lower expenses, but it also requires responsibility and communication.", "You compared solo and roommate budgets.", [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "savings", amount: 60 }])
  ], { lifeStages: ["high-school", "postsecondary", "early-career"] })
];

export const scenarioEvents = [...middleSchoolCoreEvents, ...questExpansionEvents, ...banzaiExpansionEvents, ...adultOutcomeEvents];
