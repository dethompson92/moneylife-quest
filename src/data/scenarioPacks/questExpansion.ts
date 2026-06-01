import type { Choice, Effect, Requirement, ScenarioEvent, Topic } from "../../types/game";

type Moment = {
  title: string;
  prompt: string;
  reflection: string;
};

type ModuleBlueprint = {
  key: string;
  title: string;
  primaryTopic: Topic;
  extraTopics: Topic[];
  ageRange: { min: number; max: number };
  wiseLabel: string;
  balancedLabel: string;
  riskyLabel: string;
  lockedLabel: string;
  wiseEffects: Effect[];
  balancedEffects: Effect[];
  riskyGoodEffects: Effect[];
  riskyBadEffects: Effect[];
  lockedEffects: Effect[];
  lockedRequirement: Requirement;
  achievementId?: string;
  flagKey?: string;
  moments: Moment[];
};

const moduleBlueprints: ModuleBlueprint[] = [
  {
    key: "values",
    title: "Money Values",
    primaryTopic: "money-values",
    extraTopics: ["budgeting"],
    ageRange: { min: 12, max: 18 },
    wiseLabel: "Name the tradeoff first",
    balancedLabel: "Pick a smaller version",
    riskyLabel: "Follow the crowd",
    lockedLabel: "Use your written spending rule",
    wiseEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "discipline", amount: 3 }],
    balancedEffects: [{ type: "cash", amount: -12 }, { type: "stat", stat: "wellbeing", amount: 2 }, { type: "stat", stat: "discipline", amount: 1 }],
    riskyGoodEffects: [{ type: "stat", stat: "wellbeing", amount: 4 }, { type: "cash", amount: -28 }],
    riskyBadEffects: [{ type: "cash", amount: -38 }, { type: "stat", stat: "discipline", amount: -4 }, { type: "stat", stat: "wellbeing", amount: -2 }],
    lockedEffects: [{ type: "savings", amount: 20 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "achievement", achievementId: "values-checkpoint" }],
    lockedRequirement: { type: "statAtLeast", stat: "discipline", value: 62 },
    achievementId: "values-checkpoint",
    flagKey: "valuesPlan",
    moments: [
      { title: "Concert Talk", prompt: "A group chat is planning a concert night. The ticket is not impossible, but it would erase your bike savings for a month.", reflection: "How did your choice show what mattered most to you?" },
      { title: "Birthday Wish List", prompt: "A relative asks what gift card you want. You can pick the store everyone likes or one that helps with a long-term goal.", reflection: "When is a gift still part of a money plan?" },
      { title: "Snack Run", prompt: "A friend offers to buy snacks if you pay them back next week. You are not sure you will remember.", reflection: "How can borrowing from friends affect trust?" },
      { title: "After-School Club Trip", prompt: "A club trip costs extra. You want to go, but the fee competes with your savings goal.", reflection: "What makes an experience worth spending on?" },
      { title: "Limited Drop", prompt: "A limited-edition item is only available today. The timer makes it feel urgent.", reflection: "How do time limits change spending decisions?" },
      { title: "Gift for a Friend", prompt: "A friend's birthday is coming up. You want to be generous without pretending your budget is unlimited.", reflection: "How can kindness and a budget work together?" },
      { title: "School Spirit Day", prompt: "Everyone is buying spirit gear. You already have school colors at home.", reflection: "What is the difference between belonging and buying?" },
      { title: "Weekend Choice", prompt: "You can spend the weekend earning money, resting, or doing a low-cost hangout.", reflection: "How do time, money, and wellbeing compete here?" }
    ]
  },
  {
    key: "consumer",
    title: "Smart Shopper",
    primaryTopic: "consumer-skills",
    extraTopics: ["money-values"],
    ageRange: { min: 12, max: 22 },
    wiseLabel: "Compare total cost",
    balancedLabel: "Buy only the planned item",
    riskyLabel: "Trust the flashy deal",
    lockedLabel: "Use your price-check checklist",
    wiseEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "cash", amount: 8 }],
    balancedEffects: [{ type: "cash", amount: -18 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyGoodEffects: [{ type: "cash", amount: -12 }, { type: "stat", stat: "wellbeing", amount: 2 }],
    riskyBadEffects: [{ type: "cash", amount: -42 }, { type: "stat", stat: "moneyKnowledge", amount: -2 }, { type: "stat", stat: "discipline", amount: -3 }],
    lockedEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "cash", amount: 15 }, { type: "achievement", achievementId: "smart-shopper-guide" }],
    lockedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 64 },
    achievementId: "smart-shopper-guide",
    flagKey: "priceChecklist",
    moments: [
      { title: "Subscription Maze", prompt: "A streaming app says the first month is free, but the renewal price is in tiny text.", reflection: "What should a careful shopper check before starting a trial?" },
      { title: "Influencer Cart", prompt: "A creator posts a discount code for a product they say changed their routine.", reflection: "How can advertising look like friendly advice?" },
      { title: "Shipping Surprise", prompt: "Your online cart looks cheap until shipping, fees, and tax appear at checkout.", reflection: "Why does total cost matter more than sticker price?" },
      { title: "Return Window", prompt: "Two backpacks cost about the same, but one has a clear return policy and one does not.", reflection: "When is a better policy worth a slightly higher price?" },
      { title: "Unit Price Challenge", prompt: "Two bottles of soap are different sizes and both claim to be the better value.", reflection: "How does unit price make comparison fair?" },
      { title: "Digital Price Tags", prompt: "A price changed between yesterday and today. You are deciding whether to wait, buy, or compare.", reflection: "How can price changes affect impulse buying?" },
      { title: "Ethical Purchase", prompt: "A cheaper item saves money, while a slightly pricier one matches your values better.", reflection: "How do values show up in consumer decisions?" },
      { title: "Receipt Review", prompt: "A receipt includes a fee you do not recognize. The line behind you is long.", reflection: "What is a respectful way to ask about a charge?" }
    ]
  },
  {
    key: "budget",
    title: "Budget Builder",
    primaryTopic: "budgeting",
    extraTopics: ["taxes"],
    ageRange: { min: 13, max: 24 },
    wiseLabel: "Update the budget before spending",
    balancedLabel: "Move money from wants",
    riskyLabel: "Hope next month fixes it",
    lockedLabel: "Use your emergency budget",
    wiseEffects: [{ type: "stat", stat: "discipline", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }, { type: "achievement", achievementId: "first-budget" }],
    balancedEffects: [{ type: "savings", amount: 16 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyGoodEffects: [{ type: "cash", amount: 10 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyBadEffects: [{ type: "debt", amount: 45 }, { type: "stat", stat: "wellbeing", amount: -4 }, { type: "stat", stat: "discipline", amount: -3 }],
    lockedEffects: [{ type: "savings", amount: 35 }, { type: "stat", stat: "discipline", amount: 5 }, { type: "achievement", achievementId: "budget-rebuilder" }],
    lockedRequirement: { type: "statAtLeast", stat: "discipline", value: 66 },
    achievementId: "budget-rebuilder",
    flagKey: "budgetRoutine",
    moments: [
      { title: "First Phone Bill", prompt: "A shared phone plan gives you a monthly bill. The due date lands before your next paycheck.", reflection: "How can due dates change a budget?" },
      { title: "Paycheck Estimate", prompt: "You estimated pay using hours times wage, but the paycheck has deductions.", reflection: "Why is take-home pay different from gross pay?" },
      { title: "Food Budget", prompt: "Eating out after practice is convenient, but it is becoming your biggest weekly expense.", reflection: "What is a realistic way to reduce spending without quitting social life?" },
      { title: "Prom Pitch", prompt: "A school event has outfit, ticket, photo, and food costs. Each item seems small alone.", reflection: "How do bundled costs become a budget surprise?" },
      { title: "Roommate Future", prompt: "A future apartment budget looks easier with roommates, but shared bills require communication.", reflection: "What non-money skills help a budget succeed?" },
      { title: "Summer Plan", prompt: "You have a summer job and a long list of things you want to buy before school starts.", reflection: "How can a seasonal paycheck last longer?" },
      { title: "Price Jump", prompt: "A regular purchase gets more expensive. You can cut back, switch brands, or ignore it.", reflection: "How does inflation change everyday plans?" },
      { title: "Emergency Reset", prompt: "A surprise cost knocks the month off track. You need to decide what changes first.", reflection: "What is the first budget category you would adjust?" }
    ]
  },
  {
    key: "banking",
    title: "Banking Choices",
    primaryTopic: "banking",
    extraTopics: ["saving"],
    ageRange: { min: 13, max: 24 },
    wiseLabel: "Read the account details",
    balancedLabel: "Choose the simple no-fee option",
    riskyLabel: "Ignore the fee details",
    lockedLabel: "Set alerts and automatic transfers",
    wiseEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "trustSafety", amount: 2 }],
    balancedEffects: [{ type: "checking", amount: 30 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyGoodEffects: [{ type: "checking", amount: 20 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyBadEffects: [{ type: "debt", amount: 35 }, { type: "stat", stat: "discipline", amount: -3 }, { type: "stat", stat: "wellbeing", amount: -3 }],
    lockedEffects: [{ type: "savings", amount: 45 }, { type: "flag", key: "autoSaveOn", value: true }, { type: "achievement", achievementId: "alert-setter" }],
    lockedRequirement: { type: "minSavings", value: 120 },
    achievementId: "alert-setter",
    flagKey: "bankAlerts",
    moments: [
      { title: "Account Choice", prompt: "Two accounts look similar, but one has ATM fees and a minimum balance rule.", reflection: "Which account detail could cost you later?" },
      { title: "Low Balance Warning", prompt: "Your balance is close to zero before a planned debit card purchase.", reflection: "How can alerts prevent fees?" },
      { title: "Mobile Deposit", prompt: "You receive a small check and can deposit it by app or wait to visit a branch.", reflection: "What should you verify before depositing money digitally?" },
      { title: "Savings Label", prompt: "Your savings account can be renamed for a goal, but it takes a minute to set up.", reflection: "Why can naming a goal make saving easier?" },
      { title: "Out-of-Network ATM", prompt: "An ATM nearby charges a fee. Another is free but farther away.", reflection: "When is convenience worth a small fee?" },
      { title: "Bank Statement", prompt: "Your statement has transactions you forgot about and one you do not recognize.", reflection: "How often should someone check account history?" },
      { title: "Direct Deposit", prompt: "Your job can split pay between checking and savings automatically.", reflection: "Why might automatic saving work better than willpower?" },
      { title: "Overdraft Choice", prompt: "A debit card purchase could overdraw the account if a pending charge clears first.", reflection: "How does a pending transaction affect available money?" }
    ]
  },
  {
    key: "saving",
    title: "Savings Habits",
    primaryTopic: "saving",
    extraTopics: ["banking", "money-values"],
    ageRange: { min: 12, max: 24 },
    wiseLabel: "Pay future you first",
    balancedLabel: "Split between goal and fun",
    riskyLabel: "Use savings for the want",
    lockedLabel: "Move extra into emergency savings",
    wiseEffects: [{ type: "savings", amount: 55 }, { type: "stat", stat: "discipline", amount: 4 }],
    balancedEffects: [{ type: "savings", amount: 28 }, { type: "cash", amount: 12 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyGoodEffects: [{ type: "savings", amount: -20 }, { type: "stat", stat: "wellbeing", amount: 3 }],
    riskyBadEffects: [{ type: "savings", amount: -65 }, { type: "debt", amount: 25 }, { type: "stat", stat: "discipline", amount: -4 }],
    lockedEffects: [{ type: "savings", amount: 85 }, { type: "achievement", achievementId: "emergency-500" }, { type: "stat", stat: "discipline", amount: 3 }],
    lockedRequirement: { type: "minSavings", value: 250 },
    achievementId: "emergency-500",
    flagKey: "emergencyPlan",
    moments: [
      { title: "Emergency Test", prompt: "A $400 surprise cost appears in a class warm-up. You wonder how your own game character would handle it.", reflection: "What makes emergency savings different from regular savings?" },
      { title: "Goal Thermometer", prompt: "Your savings goal looks far away, and you are tempted to stop tracking it.", reflection: "How can visible progress keep a habit alive?" },
      { title: "Small Windfall", prompt: "You receive unexpected money from helping a neighbor and need a plan before it disappears.", reflection: "What should happen first when surprise money arrives?" },
      { title: "Short-Term Goal", prompt: "You want something in two months. Investing could grow, but savings is safer for short timing.", reflection: "Why does the timeline affect where money belongs?" },
      { title: "Separate Account", prompt: "Your savings sits beside checking and feels easy to transfer back.", reflection: "How can account separation protect a goal?" },
      { title: "Interest Moment", prompt: "Your account earned a small amount of interest. It is not huge, but it is money from money.", reflection: "What does interest teach about patience?" },
      { title: "Sinking Fund", prompt: "A big school cost is coming later. You can save a little now or wait until it is urgent.", reflection: "How does planning ahead lower stress?" },
      { title: "Savings Slump", prompt: "You missed your savings target this month. You can quit, restart smaller, or blame the budget.", reflection: "What makes a savings plan recoverable?" }
    ]
  },
  {
    key: "credit",
    title: "Credit Decisions",
    primaryTopic: "credit",
    extraTopics: ["budgeting"],
    ageRange: { min: 16, max: 28 },
    wiseLabel: "Pay in full or pause",
    balancedLabel: "Pay more than the minimum",
    riskyLabel: "Carry the balance",
    lockedLabel: "Use your credit payoff plan",
    wiseEffects: [{ type: "creditScore", amount: 18 }, { type: "debt", amount: -50 }, { type: "achievement", achievementId: "paid-in-full" }],
    balancedEffects: [{ type: "creditScore", amount: 8 }, { type: "debt", amount: -25 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyGoodEffects: [{ type: "creditScore", amount: 2 }, { type: "debt", amount: 30 }],
    riskyBadEffects: [{ type: "debt", amount: 95 }, { type: "creditScore", amount: -28 }, { type: "stat", stat: "wellbeing", amount: -4 }],
    lockedEffects: [{ type: "creditScore", amount: 24 }, { type: "debt", amount: -80 }, { type: "achievement", achievementId: "apr-aware" }],
    lockedRequirement: { type: "hasCredit", value: true },
    achievementId: "apr-aware",
    flagKey: "creditPlan",
    moments: [
      { title: "APR Reality Check", prompt: "A bell-ringer notes that carrying a credit card balance can mean interest around the low twenties. You have a small balance due.", reflection: "How does interest change the real cost of a purchase?" },
      { title: "Store Card Discount", prompt: "A cashier offers a discount if you open a card today. The pitch is fast and the terms are long.", reflection: "What should happen before accepting credit?" },
      { title: "Minimum Payment", prompt: "The minimum payment fits your cash, but the full payment avoids interest.", reflection: "Why can a small payment feel helpful and still cost more later?" },
      { title: "Credit Utilization", prompt: "You could use most of your credit limit for a planned purchase.", reflection: "How can credit use affect future borrowing options?" },
      { title: "Due Date Mix-Up", prompt: "You almost miss a payment because the due date falls during a busy week.", reflection: "What system would keep due dates visible?" },
      { title: "Buy Now Pay Later", prompt: "Checkout offers four small payments. The item is a want, not a need.", reflection: "How is splitting payments similar to and different from credit?" },
      { title: "Loan Comparison", prompt: "Two loan offers have different monthly payments and different total costs.", reflection: "Which number tells you the real cost of borrowing?" },
      { title: "Credit Recovery", prompt: "A late payment hurt your score. You need a steady plan, not a quick trick.", reflection: "Why does rebuilding credit take repeated behavior?" }
    ]
  },
  {
    key: "investing",
    title: "Investing Choices",
    primaryTopic: "investing",
    extraTopics: ["saving"],
    ageRange: { min: 15, max: 35 },
    wiseLabel: "Diversify and keep learning",
    balancedLabel: "Invest a small planned amount",
    riskyLabel: "Chase the hottest pick",
    lockedLabel: "Use long-term dollar-cost averaging",
    wiseEffects: [{ type: "investments", amount: 75 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "achievement", achievementId: "diversified" }],
    balancedEffects: [{ type: "savings", amount: -40 }, { type: "investments", amount: 46 }, { type: "stat", stat: "discipline", amount: 2 }],
    riskyGoodEffects: [{ type: "investments", amount: 95 }, { type: "stat", stat: "wellbeing", amount: 3 }],
    riskyBadEffects: [{ type: "investments", amount: -70 }, { type: "stat", stat: "wellbeing", amount: -5 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }],
    lockedEffects: [{ type: "investments", amount: 110 }, { type: "achievement", achievementId: "long-game-investor" }, { type: "stat", stat: "discipline", amount: 4 }],
    lockedRequirement: { type: "minSavings", value: 300 },
    achievementId: "long-game-investor",
    flagKey: "investingPlan",
    moments: [
      { title: "Million-Dollar Math", prompt: "A compound-growth warm-up shows how small monthly investing can become surprisingly large over decades.", reflection: "Why does starting early matter more than starting perfectly?" },
      { title: "Market Drop", prompt: "Your simulated investments fall this year even though your long-term plan has not changed.", reflection: "How can emotion affect investment decisions during a drop?" },
      { title: "Single Stock Story", prompt: "A classmate brags about one company. You can follow, diversify, or wait.", reflection: "What risk comes from putting money in one place?" },
      { title: "Pro vs Market", prompt: "A discussion question asks why even professionals can struggle to beat a broad market over long periods.", reflection: "What does that suggest about simple diversified investing?" },
      { title: "Emergency First", prompt: "You want to invest, but your emergency savings is thin.", reflection: "Why can emergency savings protect investments?" },
      { title: "Rebalance Day", prompt: "One investment grew faster than the rest, so your risk mix changed.", reflection: "Why might a plan need maintenance?" },
      { title: "Bonds and Stocks", prompt: "You compare a calmer option with a growth-focused option.", reflection: "How do risk and time horizon connect?" },
      { title: "Trendy Coin", prompt: "A speculative investment is getting attention, but you do not understand how it works.", reflection: "What should you understand before taking investment risk?" }
    ]
  },
  {
    key: "protection",
    title: "Protect Yourself",
    primaryTopic: "scams",
    extraTopics: ["consumer-skills"],
    ageRange: { min: 12, max: 28 },
    wiseLabel: "Verify before clicking",
    balancedLabel: "Ask a trusted adult or official source",
    riskyLabel: "Click quickly",
    lockedLabel: "Use your security checklist",
    wiseEffects: [{ type: "stat", stat: "trustSafety", amount: 6 }, { type: "achievement", achievementId: "scam-spotted" }],
    balancedEffects: [{ type: "stat", stat: "trustSafety", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 2 }],
    riskyGoodEffects: [{ type: "stat", stat: "wellbeing", amount: 1 }],
    riskyBadEffects: [{ type: "cash", amount: -60 }, { type: "stat", stat: "trustSafety", amount: -6 }, { type: "stat", stat: "wellbeing", amount: -5 }],
    lockedEffects: [{ type: "stat", stat: "trustSafety", amount: 8 }, { type: "achievement", achievementId: "security-shield" }, { type: "flag", key: "securityChecklist", value: true }],
    lockedRequirement: { type: "statAtLeast", stat: "trustSafety", value: 68 },
    achievementId: "security-shield",
    flagKey: "securityChecklist",
    moments: [
      { title: "Payment App Request", prompt: "A payment app request arrives from a name that looks almost like a friend.", reflection: "What should you verify before sending money?" },
      { title: "Prize Text", prompt: "A text says you won a gift card but asks for a login first.", reflection: "What red flags show up in a prize message?" },
      { title: "Password Reuse", prompt: "You use the same password in several places because it is easy to remember.", reflection: "Why does one leaked password create many risks?" },
      { title: "Two-Factor Choice", prompt: "An account offers two-factor authentication. Setup takes a few minutes.", reflection: "What is the tradeoff between convenience and security?" },
      { title: "Fake Job Offer", prompt: "A summer job message promises high pay but asks you to buy supplies through a link.", reflection: "How can job scams target people looking for work?" },
      { title: "Social Media Fraud", prompt: "An account claims a secret investing method can double money fast.", reflection: "Why are money promises on social media risky?" },
      { title: "Data Privacy", prompt: "A quiz app asks for birthday, school, and phone number before showing results.", reflection: "Which personal details are not worth giving for entertainment?" },
      { title: "Identity Recovery", prompt: "You notice a suspicious login alert and need to act calmly.", reflection: "What first steps help after a security warning?" }
    ]
  },
  {
    key: "insurance",
    title: "Risk and Insurance",
    primaryTopic: "insurance",
    extraTopics: ["scams"],
    ageRange: { min: 15, max: 35 },
    wiseLabel: "Compare premium and deductible",
    balancedLabel: "Choose basic protection",
    riskyLabel: "Skip coverage to save cash",
    lockedLabel: "Use your risk plan",
    wiseEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "stat", stat: "trustSafety", amount: 3 }, { type: "achievement", achievementId: "insurance-aware" }],
    balancedEffects: [{ type: "cash", amount: -18 }, { type: "stat", stat: "trustSafety", amount: 3 }, { type: "flag", key: "insured", value: true }],
    riskyGoodEffects: [{ type: "cash", amount: 25 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyBadEffects: [{ type: "debt", amount: 140 }, { type: "stat", stat: "wellbeing", amount: -6 }],
    lockedEffects: [{ type: "stat", stat: "trustSafety", amount: 6 }, { type: "flag", key: "insured", value: true }, { type: "achievement", achievementId: "risk-ready" }],
    lockedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 62 },
    achievementId: "risk-ready",
    flagKey: "insured",
    moments: [
      { title: "Deductible Decision", prompt: "A policy with a lower monthly premium has a higher deductible if something happens.", reflection: "How do monthly cost and future risk trade off?" },
      { title: "Renters Coverage", prompt: "You imagine a future apartment and the value of the items you would need to replace.", reflection: "Why might belongings need protection too?" },
      { title: "Teen Driver Cost", prompt: "A driving future sounds exciting until you see how insurance affects transportation cost.", reflection: "How can behavior affect future insurance costs?" },
      { title: "Phone Protection", prompt: "A phone protection plan costs extra. You can buy it, skip it, or save your own repair fund.", reflection: "When is self-insuring reasonable?" },
      { title: "Good Student Discount", prompt: "A teacher mentions that grades can sometimes connect to future auto insurance discounts.", reflection: "How can school habits affect money later?" },
      { title: "Emergency Repair", prompt: "A small accident creates a cost. Insurance would help, but only if you chose it earlier.", reflection: "Why does protection need to be in place before trouble?" },
      { title: "Premium Squeeze", prompt: "A monthly premium makes the budget tighter, but skipping it leaves a bigger risk.", reflection: "How do you decide which risks are worth paying to reduce?" },
      { title: "Claim Choice", prompt: "You have a small loss and must decide whether filing a claim is worth the deductible.", reflection: "What information would you compare before filing a claim?" }
    ]
  },
  {
    key: "career",
    title: "Career Readiness",
    primaryTopic: "career",
    extraTopics: ["life-after-high-school"],
    ageRange: { min: 14, max: 28 },
    wiseLabel: "Prepare before the opportunity",
    balancedLabel: "Ask for feedback",
    riskyLabel: "Wing it",
    lockedLabel: "Use your resume and interview plan",
    wiseEffects: [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "stat", stat: "discipline", amount: 2 }, { type: "achievement", achievementId: "interview-ready" }],
    balancedEffects: [{ type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "wellbeing", amount: 1 }],
    riskyGoodEffects: [{ type: "income", amount: 80 }, { type: "stat", stat: "opportunity", amount: 2 }],
    riskyBadEffects: [{ type: "stat", stat: "opportunity", amount: -4 }, { type: "stat", stat: "wellbeing", amount: -3 }],
    lockedEffects: [{ type: "income", amount: 160 }, { type: "stat", stat: "opportunity", amount: 6 }, { type: "achievement", achievementId: "career-explorer" }],
    lockedRequirement: { type: "statAtLeast", stat: "opportunity", value: 64 },
    achievementId: "career-explorer",
    flagKey: "careerPlan",
    moments: [
      { title: "Resume Draft", prompt: "A job application asks for experience. You have school activities, chores, and volunteer work to describe.", reflection: "How can everyday responsibilities become resume evidence?" },
      { title: "Interview Practice", prompt: "A friend offers to practice interview questions with you, but it feels awkward.", reflection: "Why can practice help confidence?" },
      { title: "Summer Job", prompt: "You can apply early for a summer job or wait until everyone else starts looking.", reflection: "How does timing affect opportunity?" },
      { title: "Salary Question", prompt: "A future employer makes an offer. You are unsure whether respectful negotiation is allowed.", reflection: "What information helps someone negotiate fairly?" },
      { title: "Soft Skills", prompt: "A supervisor values showing up on time and communicating clearly as much as technical skill.", reflection: "Why do soft skills have money value?" },
      { title: "AI and Careers", prompt: "A current-events prompt says technology may change some jobs and create others.", reflection: "How can learning new skills protect future options?" },
      { title: "Industry Map", prompt: "You compare industries with many jobs against careers that sound more exciting to you.", reflection: "How should demand, pay, interest, and training all matter?" },
      { title: "Side Hustle Idea", prompt: "You have a small service idea but need to price it, schedule it, and keep school first.", reflection: "What makes earning money sustainable?" }
    ]
  },
  {
    key: "college",
    title: "After High School",
    primaryTopic: "life-after-high-school",
    extraTopics: ["career", "credit"],
    ageRange: { min: 16, max: 30 },
    wiseLabel: "Compare total path cost",
    balancedLabel: "Pick the flexible lower-cost step",
    riskyLabel: "Choose by vibe only",
    lockedLabel: "Use your scholarship and aid plan",
    wiseEffects: [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "flag", key: "comparedLoan", value: true }],
    balancedEffects: [{ type: "debt", amount: 120 }, { type: "stat", stat: "opportunity", amount: 4 }],
    riskyGoodEffects: [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "debt", amount: 240 }],
    riskyBadEffects: [{ type: "debt", amount: 520 }, { type: "stat", stat: "wellbeing", amount: -6 }, { type: "stat", stat: "moneyKnowledge", amount: -1 }],
    lockedEffects: [{ type: "debt", amount: -200 }, { type: "stat", stat: "opportunity", amount: 6 }, { type: "achievement", achievementId: "scholarship-seeker" }],
    lockedRequirement: { type: "statAtLeast", stat: "opportunity", value: 65 },
    achievementId: "scholarship-seeker",
    flagKey: "aidPlan",
    moments: [
      { title: "Path Compare", prompt: "You compare four-year college, community college, trade training, military service, and work-first paths.", reflection: "What should be compared besides the name of the path?" },
      { title: "Scholarship Deadline", prompt: "A scholarship essay is due soon. It is not guaranteed, but applying could lower future debt.", reflection: "Why is effort sometimes worth it without a guaranteed result?" },
      { title: "Financial Aid Appeal", prompt: "A family situation changed, and a future college aid offer may not show the full picture.", reflection: "When should someone ask for a financial aid review?" },
      { title: "Gap Year Plan", prompt: "A gap year sounds useful if it has a plan, but risky if it becomes drift.", reflection: "What makes time off purposeful?" },
      { title: "Major and Career", prompt: "A major sounds interesting, but you also want to understand related jobs and earnings.", reflection: "How can career research support a college choice?" },
      { title: "Campus Costs", prompt: "Beyond tuition, supplies, transportation, and setup costs can surprise families.", reflection: "What hidden costs belong in a college budget?" },
      { title: "Training Program", prompt: "A certificate program is shorter than a degree but still costs money and time.", reflection: "How can someone judge training quality?" },
      { title: "First Apartment", prompt: "A future apartment budget includes rent, utilities, groceries, transportation, and deposits.", reflection: "Which upfront cost would be easiest to forget?" }
    ]
  },
  {
    key: "taxes",
    title: "Taxes and Paychecks",
    primaryTopic: "taxes",
    extraTopics: ["budgeting", "career"],
    ageRange: { min: 15, max: 35 },
    wiseLabel: "Read the paystub or form",
    balancedLabel: "Ask a clear question",
    riskyLabel: "Guess and move on",
    lockedLabel: "Use your tax-season checklist",
    wiseEffects: [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "achievement", achievementId: "tax-translator" }],
    balancedEffects: [{ type: "stat", stat: "opportunity", amount: 2 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }],
    riskyGoodEffects: [{ type: "cash", amount: 12 }],
    riskyBadEffects: [{ type: "cash", amount: -55 }, { type: "stat", stat: "wellbeing", amount: -3 }, { type: "stat", stat: "moneyKnowledge", amount: 1 }],
    lockedEffects: [{ type: "cash", amount: 80 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "achievement", achievementId: "refund-ready" }],
    lockedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 62 },
    achievementId: "tax-translator",
    flagKey: "taxChecklist",
    moments: [
      { title: "Withholding Mystery", prompt: "Your paycheck includes taxes and withholding. The take-home amount is lower than expected.", reflection: "Why should a budget use net pay?" },
      { title: "Refund Plan", prompt: "A future tax refund could feel like bonus money, but it may already have jobs to do.", reflection: "How can a refund be planned before it arrives?" },
      { title: "Tax Software Choice", prompt: "You wonder whether preparing a simple return yourself is realistic or whether help is needed.", reflection: "What makes a tax situation simple or complicated?" },
      { title: "W-4 Form", prompt: "A form asks questions that affect paycheck withholding.", reflection: "Why should someone ask questions before submitting money forms?" },
      { title: "Side Job Records", prompt: "You earn money from small jobs and need to track income and supplies.", reflection: "Why do records matter when income is irregular?" },
      { title: "Sales Tax", prompt: "A purchase costs more at the register than on the shelf tag.", reflection: "How should sales tax affect a shopping estimate?" },
      { title: "Tax Rate Compare", prompt: "A class discussion compares tax systems in different countries.", reflection: "What public services might taxes help pay for?" },
      { title: "Filing Deadline", prompt: "A deadline is approaching and you still need documents in one place.", reflection: "How can organizing documents reduce stress?" }
    ]
  },
  {
    key: "entrepreneurship",
    title: "Entrepreneurship",
    primaryTopic: "career",
    extraTopics: ["budgeting", "consumer-skills"],
    ageRange: { min: 13, max: 30 },
    wiseLabel: "Test the idea small",
    balancedLabel: "Track costs before pricing",
    riskyLabel: "Spend big before selling",
    lockedLabel: "Use a simple business budget",
    wiseEffects: [{ type: "income", amount: 120 }, { type: "stat", stat: "opportunity", amount: 4 }, { type: "stat", stat: "moneyKnowledge", amount: 3 }],
    balancedEffects: [{ type: "cash", amount: 45 }, { type: "stat", stat: "discipline", amount: 3 }],
    riskyGoodEffects: [{ type: "income", amount: 190 }, { type: "stat", stat: "wellbeing", amount: 3 }],
    riskyBadEffects: [{ type: "debt", amount: 130 }, { type: "stat", stat: "wellbeing", amount: -4 }, { type: "stat", stat: "discipline", amount: -3 }],
    lockedEffects: [{ type: "income", amount: 220 }, { type: "achievement", achievementId: "entrepreneurial-thinker" }, { type: "stat", stat: "opportunity", amount: 5 }],
    lockedRequirement: { type: "statAtLeast", stat: "moneyKnowledge", value: 66 },
    achievementId: "entrepreneurial-thinker",
    flagKey: "businessBudget",
    moments: [
      { title: "Sticker Shop", prompt: "You want to sell custom stickers, but supplies, shipping, and time all cost something.", reflection: "Why is revenue different from profit?" },
      { title: "Lawn Service", prompt: "Neighbors might pay for lawn help, but you need a schedule and safe equipment plan.", reflection: "How does reliability affect repeat customers?" },
      { title: "Tutoring Offer", prompt: "A younger student needs help. You can charge fairly, volunteer, or avoid the commitment.", reflection: "How can pricing reflect value and responsibility?" },
      { title: "Inventory Risk", prompt: "Buying more inventory lowers cost per item but could leave money stuck in unsold products.", reflection: "Why can bulk buying be risky for a small business?" },
      { title: "Customer Feedback", prompt: "A customer suggests a change. You can listen, ignore it, or redesign everything overnight.", reflection: "How should feedback shape decisions?" },
      { title: "Social Media Promo", prompt: "Promoting a small business online could help, but personal information should stay private.", reflection: "How can marketing stay safe?" },
      { title: "Donation Drive", prompt: "Your business earns extra money and you consider donating part of it.", reflection: "How can values fit into entrepreneurship?" },
      { title: "Busy Season", prompt: "Orders grow right before exams. Money is exciting, but time is limited.", reflection: "How can success create new tradeoffs?" }
    ]
  }
];

function makeChoice(
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
    outcomes: [{ id: `${id}-steady`, probability: 1, feedback, explanation: feedback, logText, effects }]
  };
}

function makeRandomChoice(module: ModuleBlueprint, index: number): Choice {
  return {
    id: `quick-win-${index + 1}`,
    label: module.riskyLabel,
    outcomes: [
      {
        id: `quick-win-${index + 1}-works`,
        probability: 0.42,
        effects: module.riskyGoodEffects,
        feedback: "This time the quick choice worked out, but the risk still mattered.",
        explanation: "Random outcomes show that a lucky result does not always prove a choice was wise.",
        logText: "The quick choice worked this time, though it still carried risk."
      },
      {
        id: `quick-win-${index + 1}-costs`,
        probability: 0.58,
        effects: module.riskyBadEffects,
        feedback: "The quick choice created a cost that a slower plan might have avoided.",
        explanation: "A financial shortcut can feel easier today but create a harder tomorrow.",
        logText: "The quick choice backfired and created a money or stress cost."
      }
    ]
  };
}

function buildEvent(module: ModuleBlueprint, moment: Moment, index: number): ScenarioEvent {
  const choices: Choice[] = [
    makeChoice(
      `plan-${index + 1}`,
      module.wiseLabel,
      "Slowing down turns the decision into a plan instead of a reaction.",
      `You handled ${moment.title.toLowerCase()} with a plan and learned from the tradeoff.`,
      [...module.wiseEffects, ...(module.flagKey ? [{ type: "flag", key: module.flagKey, value: true } as Effect] : [])]
    ),
    makeChoice(
      `balance-${index + 1}`,
      module.balancedLabel,
      "A balanced choice can protect the goal while still leaving room for real life.",
      `You chose a middle path for ${moment.title.toLowerCase()} and kept more options open.`,
      module.balancedEffects
    ),
    index % 3 === 0
      ? makeRandomChoice(module, index)
      : makeChoice(
          `risky-${index + 1}`,
          module.riskyLabel,
          "The easier choice can be understandable, but it may reduce flexibility later.",
          `You took the quick route on ${moment.title.toLowerCase()} and saw the tradeoff.`,
          module.riskyBadEffects
        )
  ];

  if (index % 4 === 1) {
    choices.push(
      makeChoice(
        `advanced-${index + 1}`,
        module.lockedLabel,
        "This stronger option is available because earlier habits created more room to choose.",
        `You used a stronger habit for ${moment.title.toLowerCase()} and turned preparation into an advantage.`,
        module.lockedEffects,
        [module.lockedRequirement]
      )
    );
  }

  return {
    id: `quest-${module.key}-${String(index + 1).padStart(2, "0")}`,
    title: `${module.title}: ${moment.title}`,
    prompt: moment.prompt,
    topics: Array.from(new Set([module.primaryTopic, ...module.extraTopics])),
    ageRange: module.ageRange,
    baseWeight: 16 + (index % 5),
    choices,
    reflectionPrompt: moment.reflection,
    sourceNote: "Original MoneyLife Quest scenario inspired by broad personal finance curriculum themes and current-event question styles."
  };
}

const generatedExpansionEvents = moduleBlueprints.flatMap((module) =>
  module.moments.map((moment, index) => buildEvent(module, moment, index))
);

const qodInspiredEvents: ScenarioEvent[] = [
  {
    id: "quest-qod-credit-card-interest",
    title: "Reality Check: Credit Card Interest",
    prompt: "A classroom warm-up says the average APR across current credit card accounts is about 21%. Your character has a balance and a choice to make before interest grows.",
    topics: ["credit", "budgeting"],
    ageRange: { min: 16, max: 35 },
    baseWeight: 24,
    reflectionPrompt: "How would a high APR change the way you use a credit card?",
    sourceNote: "Original scenario inspired by an NGPF Question of the Day about current credit card APR.",
    choices: [
      makeChoice("pay-full", "Pay the full balance if possible", "Paying in full keeps interest from turning a purchase into a longer debt.", "You paid the balance and avoided interest.", [{ type: "cash", amount: -90 }, { type: "debt", amount: -90 }, { type: "creditScore", amount: 18 }, { type: "achievement", achievementId: "apr-aware" }], [{ type: "minCash", value: 90 }, { type: "hasCredit", value: true }]),
      makeChoice("pay-extra", "Pay extra and pause new spending", "Extra payments reduce the balance that interest can grow on.", "You paid extra and stopped adding charges.", [{ type: "cash", amount: -55 }, { type: "debt", amount: -45 }, { type: "creditScore", amount: 8 }], [{ type: "minCash", value: 55 }, { type: "hasCredit", value: true }]),
      makeRandomChoice({ ...moduleBlueprints[5], riskyBadEffects: [{ type: "debt", amount: 120 }, { type: "creditScore", amount: -25 }, { type: "stat", stat: "wellbeing", amount: -5 }] }, 2)
    ],
    requirements: [{ type: "hasCredit", value: true }]
  },
  {
    id: "quest-qod-bnpl",
    title: "Reality Check: Buy Now Pay Later",
    prompt: "A current-events prompt says 15% of adults used Buy Now Pay Later in the prior year. Checkout offers you four small payments on something you want.",
    topics: ["credit", "consumer-skills"],
    ageRange: { min: 15, max: 30 },
    baseWeight: 22,
    reflectionPrompt: "What makes a split payment feel easier, and what could make it risky?",
    sourceNote: "Original scenario inspired by an NGPF Question of the Day about Buy Now Pay Later use.",
    choices: [
      makeChoice("compare-credit", "Compare it to saving or paying now", "Comparing options makes the financing choice visible.", "You compared payment options before deciding.", [{ type: "stat", stat: "moneyKnowledge", amount: 5 }, { type: "achievement", achievementId: "bnpl-aware" }]),
      makeChoice("wait-save", "Wait and save for it", "Waiting avoids adding a payment obligation to future you.", "You waited and saved toward the purchase.", [{ type: "savings", amount: 40 }, { type: "stat", stat: "discipline", amount: 4 }]),
      makeRandomChoice({ ...moduleBlueprints[5], riskyBadEffects: [{ type: "debt", amount: 80 }, { type: "stat", stat: "discipline", amount: -4 }, { type: "creditScore", amount: -12 }] }, 5)
    ]
  },
  {
    id: "quest-qod-compound-160",
    title: "Reality Check: Compound Growth",
    prompt: "A compound-interest discussion shows how consistent monthly investing can grow much larger over decades than the amount contributed.",
    topics: ["investing", "saving"],
    ageRange: { min: 15, max: 35 },
    baseWeight: 23,
    reflectionPrompt: "Why does time matter so much in compound growth?",
    sourceNote: "Original scenario inspired by an NGPF Question of the Day about monthly investing and long-term compounding.",
    choices: [
      makeChoice("start-auto", "Start a tiny automatic investment", "Consistency matters more than a perfect starting amount.", "You started a small automatic investing habit.", [{ type: "savings", amount: -25 }, { type: "investments", amount: 30 }, { type: "stat", stat: "discipline", amount: 4 }, { type: "achievement", achievementId: "long-game-investor" }], [{ type: "minSavings", value: 50 }]),
      makeChoice("learn-first", "Build savings and learn first", "Learning before investing reduces panic when markets move.", "You built savings while learning investing basics.", [{ type: "savings", amount: 50 }, { type: "stat", stat: "moneyKnowledge", amount: 5 }]),
      makeRandomChoice(moduleBlueprints[6], 0)
    ]
  },
  {
    id: "quest-qod-career-no-degree",
    title: "Reality Check: Fast-Growing Careers",
    prompt: "A career warm-up highlights fast-growing jobs that do not require a four-year degree. You are comparing training paths after high school.",
    topics: ["career", "life-after-high-school"],
    ageRange: { min: 16, max: 30 },
    baseWeight: 21,
    reflectionPrompt: "How should career demand, training time, cost, and interest all shape a path?",
    sourceNote: "Original scenario inspired by an NGPF Question of the Day about fast-growing careers without a four-year degree.",
    choices: [
      makeChoice("research-paths", "Research pay, openings, and training cost", "A good path decision compares opportunity and cost together.", "You researched training paths before choosing.", [{ type: "stat", stat: "opportunity", amount: 6 }, { type: "stat", stat: "moneyKnowledge", amount: 4 }, { type: "achievement", achievementId: "career-explorer" }]),
      makeChoice("shadow-worker", "Ask to interview or shadow someone", "Real conversations can reveal what a job feels like day to day.", "You talked with someone in the field.", [{ type: "stat", stat: "opportunity", amount: 5 }, { type: "stat", stat: "wellbeing", amount: 1 }]),
      makeChoice("ignore-training", "Pick only by the coolest title", "Interest matters, but training fit and job demand matter too.", "You picked by title and had to revise the plan later.", [{ type: "stat", stat: "opportunity", amount: -2 }, { type: "debt", amount: 120 }])
    ]
  }
];

export const questExpansionEvents: ScenarioEvent[] = [...generatedExpansionEvents, ...qodInspiredEvents];
