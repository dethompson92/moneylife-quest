export type TeacherResource = {
  title: string;
  topic: string;
  url: string;
  classroomUse: string;
};

export const curriculumResearchNotes = [
  "NGPF's public Middle School Course page frames grades 6-8 personal finance as a 9-unit sequence: money values, consumer skills, budgeting, credit, saving, investing, protecting yourself, preparing for success, and life after high school.",
  "Public NGPF unit pages emphasize doing the work: compare accounts, build budgets, read credit terms, manage investment risk, identify scams, and connect career training to future costs.",
  "NGPF's Question of the Day format works well as a bell ringer, so MoneyLife Quest uses current-event-style reflection prompts without copying NGPF lesson text, slides, worksheets, or answer keys.",
  "Banzai's public course and resource pages reinforce realistic life scenarios, hardships, insurance, credit, banking, digital citizenship, and entrepreneurship. MoneyLife Quest uses those topic patterns only as research inspiration, with original student-facing scenarios."
];

export const coreResourceLinks: TeacherResource[] = [
  {
    title: "NGPF Middle School Course",
    topic: "Course map",
    url: "https://www.ngpf.org/courses/middle-school-course/",
    classroomUse: "Use to align quick play sessions to the 9-unit middle-school sequence."
  },
  {
    title: "NGPF Arcade",
    topic: "Game-based finance",
    url: "https://www.ngpf.org/arcade/",
    classroomUse: "Use as a model for short play windows plus reflection, not as copied text or mechanics."
  },
  {
    title: "Budgeting Unit",
    topic: "Budgeting",
    url: "https://www.ngpf.org/curriculum/budgeting/",
    classroomUse: "Connect MoneyLife Quest choices to needs, wants, take-home pay, and budget adjustments."
  },
  {
    title: "Banking Unit",
    topic: "Banking",
    url: "https://www.ngpf.org/curriculum/banking/",
    classroomUse: "Use with checking, savings, fee, alert, and statement scenarios."
  },
  {
    title: "Consumer Skills Unit",
    topic: "Consumer skills",
    url: "https://www.ngpf.org/curriculum/consumer-skills/",
    classroomUse: "Use with comparison shopping, subscriptions, dark patterns, receipts, and identity protection."
  },
  {
    title: "Types of Credit Unit",
    topic: "Credit",
    url: "https://www.ngpf.org/curriculum/types-of-credit/",
    classroomUse: "Use with debit vs credit, interest, minimum payment, and loan scenarios."
  },
  {
    title: "Managing Credit Unit",
    topic: "Credit scores",
    url: "https://www.ngpf.org/curriculum/managing-credit/",
    classroomUse: "Use with credit-score recovery and credit-building scenarios."
  },
  {
    title: "Investing Unit",
    topic: "Investing",
    url: "https://www.ngpf.org/curriculum/investing/",
    classroomUse: "Use with risk, diversification, dollar-cost averaging, and market-drop scenarios."
  },
  {
    title: "Insurance Unit",
    topic: "Insurance",
    url: "https://www.ngpf.org/curriculum/insurance/",
    classroomUse: "Use with premium, deductible, risk, auto, renters, and claim scenarios."
  },
  {
    title: "Career Unit",
    topic: "Career",
    url: "https://www.ngpf.org/curriculum/career/",
    classroomUse: "Use with resume, interview, salary, training, and career pathway scenarios."
  },
  {
    title: "Question of the Day",
    topic: "Bell ringers",
    url: "https://www.ngpf.org/question-of-the-day/",
    classroomUse: "Use as optional warm-ups before or after game turns."
  }
];

export const banzaiResourceLinks: TeacherResource[] = [
  {
    title: "Banzai Middle School Personal Finance",
    topic: "Life scenarios",
    url: "https://banzai.org/courses/finlit/middle-school",
    classroomUse: "Use as a topic map for realistic dilemmas, savings, checking, insurance, taxes, credit cards, and consumer smarts."
  },
  {
    title: "Banzai High School Personal Finance",
    topic: "Advanced scenarios",
    url: "https://banzai.org/courses/finlit/high-school",
    classroomUse: "Use to extend quick mode into credit scores, renter protection, tax returns, auto loans, retirement, and identity theft."
  },
  {
    title: "Banzai Wellness Center",
    topic: "Resource library",
    url: "https://banzai.org/articles",
    classroomUse: "Use as a teacher reference bank for optional follow-up reading and discussion."
  },
  {
    title: "Emergency Funds",
    topic: "Saving",
    url: "https://banzai.org/wellness/resources/emergency-funds",
    classroomUse: "Pair with surprise-cost events and the Emergency Fund Hero goal."
  },
  {
    title: "50/30/20 Rule",
    topic: "Budgeting",
    url: "https://banzai.org/wellness/resources/fifty-thirty-twenty",
    classroomUse: "Discuss why rules of thumb need to be adapted to real expenses."
  },
  {
    title: "Envelope Budgeting",
    topic: "Budgeting",
    url: "https://banzai.org/wellness/resources/envelope-budgeting",
    classroomUse: "Use with category limits and flexible-spending reflection."
  },
  {
    title: "Mobile Banking",
    topic: "Banking / protection",
    url: "https://banzai.org/wellness/resources/mobile-banking",
    classroomUse: "Use with account alerts, app safety, and balance-check habits."
  },
  {
    title: "Recognizing and Avoiding Scams",
    topic: "Scams",
    url: "https://banzai.org/wellness/resources/recognizing-and-avoiding-scams",
    classroomUse: "Use before phishing, fake prize, and account-compromise scenarios."
  },
  {
    title: "Identity Theft",
    topic: "Protection",
    url: "https://banzai.org/wellness/resources/identity-theft",
    classroomUse: "Discuss why small suspicious charges and password habits matter."
  },
  {
    title: "Cyber Security",
    topic: "Digital citizenship",
    url: "https://banzai.org/wellness/resources/cyber-security",
    classroomUse: "Use with the ransomware and account-lock warning scenarios."
  },
  {
    title: "Credit Scores",
    topic: "Credit",
    url: "https://banzai.org/wellness/resources/credit-scores",
    classroomUse: "Use with payment history, utilization, and score recovery choices."
  },
  {
    title: "Best Practices for Using a Credit Card",
    topic: "Credit",
    url: "https://banzai.org/wellness/resources/best-practices-for-using-a-credit-card",
    classroomUse: "Pair with pay-in-full, due-date, and APR awareness scenarios."
  },
  {
    title: "How to Avoid Predatory Lending",
    topic: "Borrowing",
    url: "https://banzai.org/wellness/resources/how-to-avoid-predatory-lending",
    classroomUse: "Use with loan comparison and total-cost-of-borrowing decisions."
  },
  {
    title: "What a Car Loan Costs",
    topic: "Auto loans",
    url: "https://banzai.org/wellness/resources/what-a-car-loan-costs",
    classroomUse: "Use with transportation and total-cost-of-ownership choices."
  },
  {
    title: "Auto Insurance",
    topic: "Insurance",
    url: "https://banzai.org/wellness/resources/auto-insurance",
    classroomUse: "Discuss premiums, deductibles, risk, and teen driver tradeoffs."
  },
  {
    title: "Renter's Insurance",
    topic: "Insurance",
    url: "https://banzai.org/wellness/resources/renters-insurance",
    classroomUse: "Use with first-apartment and protection planning scenarios."
  },
  {
    title: "Health Insurance",
    topic: "Insurance",
    url: "https://banzai.org/wellness/resources/health-insurance",
    classroomUse: "Use to frame premium, deductible, and out-of-pocket tradeoffs."
  },
  {
    title: "College Budget Breakdown",
    topic: "College planning",
    url: "https://banzai.org/wellness/resources/college-budget-breakdown",
    classroomUse: "Use with postsecondary cost checklist and scholarship scenarios."
  },
  {
    title: "Filling Out the FAFSA",
    topic: "Paying for college",
    url: "https://banzai.org/wellness/resources/filling-out-the-fafsa",
    classroomUse: "Use with financial aid deadline and document planning choices."
  },
  {
    title: "Job Benefits",
    topic: "Career",
    url: "https://banzai.org/wellness/resources/job-benefits",
    classroomUse: "Discuss total compensation beyond hourly wage."
  },
  {
    title: "How to Become a Young Entrepreneur",
    topic: "Entrepreneurship",
    url: "https://banzai.org/wellness/resources/become-a-young-entrepreneur",
    classroomUse: "Use with pricing, inventory, cash-flow, and profit scenarios."
  },
  {
    title: "Digital Spending Traps",
    topic: "Consumer skills",
    url: "https://banzai.org/wellness/resources/digital-spending-traps",
    classroomUse: "Use with games, subscriptions, in-app purchases, and countdown pressure."
  }
];

export const banzaiInteractiveLinks: TeacherResource[] = [
  {
    title: "Life Scenarios",
    topic: "Banzai course activity",
    url: "https://banzai.org/course/6562332/home#/categories/banzai-teen/courses/finlit/new-high-school/activities/finlit/new-high-school/ls/life-scenarios",
    classroomUse: "Teacher reference for scenario pacing; do not copy activity text."
  },
  {
    title: "How Much Can My Business Make?",
    topic: "Entrepreneurship",
    url: "https://banzai.org/course/6562332/home#/categories/entrepreneurship/courses/finlit/how-much-can-my-business-make/activities/finlit/how-much-can-my-business-make/story/game",
    classroomUse: "Teacher reference for profit, demand, and cost thinking; MoneyLife uses original business events."
  },
  {
    title: "Consumer Smarts",
    topic: "Consumer skills",
    url: "https://banzai.org/course/6562332/home#/categories/banzai-teen/courses/finlit/consumer-smarts/activities/finlit/consumer-smarts/story/game",
    classroomUse: "Use as a comparison point for month-long family budget discussion."
  },
  {
    title: "Banking Unit",
    topic: "Banking",
    url: "https://banzai.org/course/6562332/home#/categories/banzai-teen/courses/finlit/banking-unit/activities/finlit/banking-unit/story/game",
    classroomUse: "Use as a teacher reference for banking vocabulary and decision flow."
  },
  {
    title: "Stock Market Showdown",
    topic: "Investing",
    url: "https://banzai.org/course/6562332/home#/categories/banzai-plus/courses/finlit/stock-market-showdown/activities/finlit/stock-market-showdown/story/game",
    classroomUse: "Use to discuss risk, diversification, and simulated investing."
  },
  {
    title: "Paying for College",
    topic: "College planning",
    url: "https://banzai.org/course/6562332/home#/categories/college-and-careers/courses/finlit/paying-for-college/activities/finlit/cost-of-college/story/paying-for-college",
    classroomUse: "Use to extend the postsecondary path discussion."
  },
  {
    title: "College Alternatives",
    topic: "Career pathways",
    url: "https://banzai.org/course/6562332/home#/categories/college-and-careers/courses/finlit/college-alternatives/activities/finlit/cost-of-college/story/alternatives-to-college",
    classroomUse: "Use to compare certificate, trade, military, work-first, and college paths."
  },
  {
    title: "Soft Skills",
    topic: "Career",
    url: "https://banzai.org/course/6562332/home#/categories/college-and-careers/courses/finlit/soft-skills/activities/finlit/soft-skills/story/game",
    classroomUse: "Use with interview, teamwork, and opportunity scenarios."
  }
];

export const questionSparkLinks: TeacherResource[] = [
  {
    title: "Average credit card APR",
    topic: "Credit",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-is-the-average-interest-rate-on-current-credit-card-accounts",
    classroomUse: "Ask how APR changes the real cost of carrying a balance."
  },
  {
    title: "Buy Now Pay Later use",
    topic: "Credit / consumer skills",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percent-of-americans-used-buy-now-pay-later-in-the-last-year",
    classroomUse: "Compare split payments, credit cards, debit, and waiting."
  },
  {
    title: "Saving monthly to reach $1 million",
    topic: "Investing",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-would-i-need-to-save-monthly-to-have-1-million-when-i-retire2",
    classroomUse: "Discuss time, compounding, and starting early."
  },
  {
    title: "Professionals versus the market",
    topic: "Investing",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-over-a-recent-20-year-period-what-percent-of-pros-investing-in-large-companies-beat-the-market",
    classroomUse: "Connect to diversification and simple long-term strategies."
  },
  {
    title: "$400 emergency coverage",
    topic: "Saving",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percentage-of-americans-can-not-cover-a-400-emergency-with-cashsavings-account-emergency-fund2022",
    classroomUse: "Discuss emergency funds as flexibility, not wealth."
  },
  {
    title: "Average card debt among balance carriers",
    topic: "Managing credit",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-is-the-national-average-credit-card-debt-among-cardholders-with-unpaid-balances",
    classroomUse: "Ask how balances can grow when only minimum payments are made."
  },
  {
    title: "Payment app use by Gen Z",
    topic: "Banking / digital payments",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percent-of-gen-z-14-21-year-olds-have-a-payment-app-on-their-phone",
    classroomUse: "Discuss payment-app safety and mistaken transfers."
  },
  {
    title: "Average credit score for Gen Z",
    topic: "Credit",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-whats-the-average-credit-score-for-gen-z",
    classroomUse: "Discuss how scores start, change, and recover."
  },
  {
    title: "College graduates working in their major",
    topic: "Career / college",
    url: "https://www.ngpf.org/blog/question-of-the-day/qod-what-percent-of-college-graduates-end-up-working-in-the-field-of-their-major",
    classroomUse: "Ask how flexible skills matter when careers change."
  },
  {
    title: "Financial aid appeal outcomes",
    topic: "Paying for college",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-if-a-student-successfully-appeals-their-college-financial-aid-offer-how-much-additional-aid-do-they-typically-receive-per-year",
    classroomUse: "Discuss asking for help and documenting changed circumstances."
  },
  {
    title: "AI jobs displaced and created",
    topic: "Career",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-the-world-economic-forum-projects-ai-will-displace-92-million-jobs-globally-by-2030-how-many-new-jobs-does-it-project-will-be-created",
    classroomUse: "Discuss upskilling and future-proof career habits."
  },
  {
    title: "Subscription spending",
    topic: "Budgeting / consumer skills",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-does-the-average-consumer-spend-per-month-on-subscription-services",
    classroomUse: "Have students audit which recurring charges are needs, wants, or forgotten."
  },
  {
    title: "Tax refunds",
    topic: "Taxes",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-many-americans-receive-a-tax-refund-and-what-is-the-average-dollar-amount",
    classroomUse: "Plan a refund across debt, savings, giving, and wants."
  },
  {
    title: "Teen social platforms",
    topic: "Consumer skills / protection",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-are-the-three-most-popular-social-media-platforms-for-teens",
    classroomUse: "Connect social platforms to ads, influencers, scams, and privacy."
  },
  {
    title: "Summer jobs for ages 16-24",
    topic: "Career",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percentage-of-people-age-16-24-work-a-summer-job",
    classroomUse: "Discuss first-job income plans and paystub deductions."
  },
  {
    title: "Personal finance graduation requirements",
    topic: "Course purpose",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-updated-what-percent-of-us-high-school-students-are-required-to-take-a-personal-finance-course-to-graduate",
    classroomUse: "Start a discussion about why finance class matters."
  },
  {
    title: "Teen driver insurance cost",
    topic: "Insurance",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-does-it-cost-per-year-on-average-to-add-a-teen-driver-to-a-familys-car-insurance-policy",
    classroomUse: "Connect transportation freedom to premiums and risk."
  },
  {
    title: "Penny doubled for 30 days",
    topic: "Compound growth",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-would-you-rather-have-1000000-or-start-with-a-penny-and-double-your-money-every-day-for-30-days2021",
    classroomUse: "Use as a hook before compound-interest choices."
  },
  {
    title: "Largest employment industries",
    topic: "Career",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-are-the-5-industries-with-the-largest-employment",
    classroomUse: "Compare job availability with interests and training."
  },
  {
    title: "Tax refund spending plans",
    topic: "Taxes / budgeting",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-are-the-top-3-ways-consumers-plan-to-spend-their-tax-refund",
    classroomUse: "Have students rank refund uses by short-term and long-term impact."
  },
  {
    title: "Women and credit cards",
    topic: "Credit / history",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-when-were-women-first-allowed-to-get-credit-cards",
    classroomUse: "Discuss how access to credit connects to economic opportunity."
  },
  {
    title: "Social media fraud type",
    topic: "Scams",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-whats-the-1-fraud-committed-on-social-media-investment-scams-romance-scams-or-online-shopping",
    classroomUse: "Use before the Protect Yourself scenario set."
  },
  {
    title: "Salary negotiation",
    topic: "Career",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percentage-of-employers-say-they-are-willing-to-negotiate-salary-on-an-initial-job-offer",
    classroomUse: "Discuss respectful negotiation and evidence."
  },
  {
    title: "Fast-growing careers without a four-year degree",
    topic: "Career pathways",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-are-the-top-3-fastest-growing-careers-that-dont-need-a-4-year-degree/",
    classroomUse: "Compare four-year, two-year, certificate, trade, and work-first paths."
  },
  {
    title: "Average concert ticket price",
    topic: "Consumer skills",
    url: "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-was-the-average-ticket-price-across-the-years-top-100-concerts/",
    classroomUse: "Use with opportunity cost and experience spending."
  }
];

export const additionalQuestionSparkUrls = [
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percent-of-small-businesses-are-lgbtq-owned",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-do-consumers-send-more-money-on-venmo-or-spend-more-money-on-amazon",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-can-you-name-one-of-the-top-10-best-employers-for-women",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percent-of-americans-under-65-years-old-have-0-saved-for-retirement",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-is-the-most-popular-shopping-website-for-teens2",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-has-been-the-geometric-average-return-for-the-stock-market-over-the-past-50-years-1970-2020",
  "https://www.ngpf.org/blog/question-of-the-day/chart-how-does-the-cost-of-a-car-vary-by-state",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-net-worth-do-americans-say-it-takes-to-feel-financially-comfortable-today",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-on-average-how-much-do-americans-planning-a-summer-vacation-expect-to-spend-on-flights-and-lodging-this-year",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-more-does-it-cost-today-to-fill-up-a-cars-gas-tank-about-14-gallons-than-it-did-one-year-ago",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-rank-order-these-payment-types-from-most-to-least-popular-with-consumers-cash-debit-card-and-credit-card",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-gpa-is-required-to-earn-a-good-student-discount-on-an-auto-insurance-policy",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-order-these-countries-from-highest-to-lowest-tax-rates-united-states-germany-mexico",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-updated-what-percent-of-us-taxpayers-prepared-their-own-tax-returns-in-2021",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-on-the-prediction-market-polymarket-researchers-flagged-about-210000-trades-as-potentially-involving-non-public-information-by-their-estimate-how-much-did-users-on-the-losing-side-of-those-trades-lose",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-beyond-tuition-and-housing-how-much-does-the-average-family-spend-to-get-one-student-ready-for-college-each-fall",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-does-the-average-american-plan-to-spend-on-a-graduation-gift",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-are-the-top-3-reasons-why-students-take-a-gap-year",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-the-world-economic-forum-projects-ai-will-displace-92-million-jobs-globally-by-2030-how-many-new-jobs-does-it-project-will-be-created",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-is-the-average-cost-of-a-prom-when-all-costs-are-included",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-does-it-cost-for-a-family-of-four-to-attend-an-average-mlb-baseball-game",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-womens-history-month-what-percentage-of-all-new-businesses-in-the-us-are-now-started-by-women",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percent-of-your-daily-activities-are-habits",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-how-much-are-americans-expected-to-spend-in-total-on-st-patricks-day-this-year",
  "https://www.ngpf.org/blog/question-of-the-day/qod-what-is-the-1-spending-category-across-all-generations",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-womens-history-month-how-did-madam-cj-walker-become-one-of-the-first-self-made-female-millionaires",
  "https://www.ngpf.org/blog/question-of-the-day/qod--out-of-5-americans-tip-with-and-their-median-tip-is-/",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-if-you-invested-1000-in-netflix-stock-ten-years-ago-what-would-it-be-worth-now-in-2022/",
  "https://www.ngpf.org/blog/question-of-the-day/qod-what-percent-of-college-graduates-end-up-working-in-the-field-of-their-major/",
  "https://www.ngpf.org/blog/question-of-the-day/question-of-the-day-what-percent-of-gen-z-14-21-year-olds-have-a-payment-app-on-their-phone"
];
