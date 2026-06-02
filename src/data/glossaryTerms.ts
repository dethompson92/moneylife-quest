export type GlossarySource = {
  label: string;
  url?: string;
};

export type GlossaryTerm = {
  id: string;
  term: string;
  aliases: string[];
  definition: string;
  mathConnection?: string;
  sources: GlossarySource[];
};

const ngpfDictionary = {
  label: "NGPF Personal Finance Dictionary",
  url: "https://docs.google.com/document/d/16JX29Ei17XkvPCmPKazAY7ZFWOkclvoqiVVscfLYu0s/edit?tab=t.0#heading=h.z6ne0og04bp5"
};

const ngpfMiddleSchool = {
  label: "NGPF Middle School Course",
  url: "https://www.ngpf.org/courses/middle-school-course/"
};

const napkinFinance = {
  label: "Teacher-provided Napkin Finance PDF"
};

const humbleMath = {
  label: "Teacher-provided Humble Math Financial Literacy PDF"
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "asset",
    term: "Asset",
    aliases: ["assets", "real asset", "real assets"],
    definition: "Something you own that has value, such as savings, a tool, a phone, a car fund, investments, or business equipment.",
    mathConnection: "Assets are added when you calculate net worth.",
    sources: [ngpfDictionary, napkinFinance, humbleMath]
  },
  {
    id: "bank",
    term: "Bank",
    aliases: ["banks", "banking"],
    definition: "A financial institution where people can store money, use accounts, and sometimes borrow money.",
    mathConnection: "Bank decisions often involve fees, balances, interest rates, and percent growth.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "balance",
    term: "Balance",
    aliases: ["account balance", "balances"],
    definition: "The amount of money in an account or the amount still owed on a debt.",
    mathConnection: "A balance can go up or down after deposits, withdrawals, payments, fees, and interest.",
    sources: [ngpfDictionary, humbleMath]
  },
  {
    id: "budget",
    term: "Budget",
    aliases: ["budgeting", "money plan"],
    definition: "A plan for how income will be used for needs, wants, saving, giving, and debt payments.",
    mathConnection: "Budgets use percentages and totals to split money into categories.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "cash-flow",
    term: "Cash Flow",
    aliases: ["cashflow", "cash shortfall", "surplus"],
    definition: "The movement of money in and out. Positive cash flow means more came in than went out; a shortfall means the plan ran out of cash.",
    mathConnection: "Cash flow is income minus expenses for a period of time.",
    sources: [ngpfDictionary, humbleMath]
  },
  {
    id: "checking",
    term: "Checking Account",
    aliases: ["checking", "checking accounts"],
    definition: "An account meant for everyday spending, transfers, debit card use, and paying bills.",
    mathConnection: "Checking balances change often, so tracking subtraction and addition matters.",
    sources: [ngpfDictionary, ngpfMiddleSchool, humbleMath]
  },
  {
    id: "compound-interest",
    term: "Compound Interest",
    aliases: ["compounding", "compound growth"],
    definition: "Growth that happens when interest is added to a balance, and future interest is calculated on the new larger balance.",
    mathConnection: "Compounding is repeated percent growth over time.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "credit",
    term: "Credit",
    aliases: ["credit history"],
    definition: "The ability to borrow money or buy now and pay later, usually based on trust that you will repay.",
    mathConnection: "Credit choices affect balances, payments, interest, and future borrowing costs.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "credit-card",
    term: "Credit Card",
    aliases: ["credit cards", "card balance"],
    definition: "A payment card that lets you borrow money from the card company and repay it later.",
    mathConnection: "Carrying a balance can add interest, so the final cost can be more than the purchase price.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "credit-score",
    term: "Credit Score",
    aliases: ["credit scores", "score"],
    definition: "A number lenders may use to estimate how risky it is to lend someone money.",
    mathConnection: "Scores are affected by patterns like payment history, debt, and credit use.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "debt",
    term: "Debt",
    aliases: ["debts", "borrowed money"],
    definition: "Money you owe and usually must repay with interest or fees.",
    mathConnection: "Debt is subtracted from assets when finding net worth.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "deductible",
    term: "Deductible",
    aliases: ["deductibles"],
    definition: "The amount you pay yourself before some insurance plans begin paying for a covered cost.",
    mathConnection: "A deductible changes the out-of-pocket cost after an accident or claim.",
    sources: [ngpfDictionary, napkinFinance]
  },
  {
    id: "deposit",
    term: "Deposit",
    aliases: ["deposits", "direct deposit"],
    definition: "Money put into an account. Direct deposit sends pay automatically into an account.",
    mathConnection: "Deposits increase a balance.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "discount",
    term: "Discount",
    aliases: ["discounts", "coupon", "coupons", "sale"],
    definition: "A price reduction. A discount can save money if the item was already worth buying.",
    mathConnection: "Discounts often use percent off, such as 20% off a $50 item.",
    sources: [ngpfDictionary, ngpfMiddleSchool, humbleMath]
  },
  {
    id: "diversification",
    term: "Diversification",
    aliases: ["diversified", "diversify"],
    definition: "Spreading money across different investments so one bad result does not decide everything.",
    mathConnection: "Diversification compares risk across a whole group, not just one choice.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "emergency-fund",
    term: "Emergency Fund",
    aliases: ["emergency savings", "savings cushion", "cushion"],
    definition: "Money set aside for unexpected important costs, not everyday wants.",
    mathConnection: "A fund goal can be tracked as a percentage of a target amount.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "expense",
    term: "Expense",
    aliases: ["expenses", "cost", "costs"],
    definition: "Money spent or owed for something, such as food, transportation, fees, or bills.",
    mathConnection: "Expenses are subtracted from income in a budget.",
    sources: [ngpfDictionary, humbleMath]
  },
  {
    id: "fee",
    term: "Fee",
    aliases: ["fees", "bank fee", "late fee", "overdraft fee"],
    definition: "A charge for a service, mistake, or account rule. Small fees can add up over time.",
    mathConnection: "Repeated fees are multiplication: one fee times how many times it happens.",
    sources: [ngpfDictionary, ngpfMiddleSchool, humbleMath]
  },
  {
    id: "gross-pay",
    term: "Gross Pay",
    aliases: ["gross income", "gross"],
    definition: "Money earned before taxes and deductions are taken out.",
    mathConnection: "Gross pay minus deductions equals take-home pay.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "income",
    term: "Income",
    aliases: ["earnings", "paycheck", "wage", "salary"],
    definition: "Money received from work, business, gifts, benefits, or investments.",
    mathConnection: "Income is the starting amount for many budget calculations.",
    sources: [ngpfDictionary, ngpfMiddleSchool, humbleMath]
  },
  {
    id: "inflation",
    term: "Inflation",
    aliases: ["purchasing power"],
    definition: "A general rise in prices over time, which means the same money may buy less later.",
    mathConnection: "Inflation is often described as a percent increase in price.",
    sources: [ngpfDictionary, napkinFinance, humbleMath]
  },
  {
    id: "insurance",
    term: "Insurance",
    aliases: ["insured", "coverage", "claim", "claims"],
    definition: "A way to pay a smaller regular cost to reduce the risk of a much larger surprise cost.",
    mathConnection: "Insurance decisions compare premium, deductible, and possible loss.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "interest",
    term: "Interest",
    aliases: ["interest rate", "interest rates"],
    definition: "Money paid for borrowing money or money earned for saving/lending money.",
    mathConnection: "Interest usually uses a percent rate and a time period.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "investment",
    term: "Investment",
    aliases: ["invest", "investing", "investments", "portfolio"],
    definition: "Putting money into something with the hope it may grow, while accepting that it can also lose value.",
    mathConnection: "Investment results can be gains, losses, percent returns, or changing balances.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "loan",
    term: "Loan",
    aliases: ["loans", "borrow", "borrowing"],
    definition: "Money borrowed that must be repaid, often with interest and a payment schedule.",
    mathConnection: "Loan math includes principal, interest, payment amount, and term length.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "minimum-payment",
    term: "Minimum Payment",
    aliases: ["minimum payments"],
    definition: "The smallest payment allowed on a debt for that period. Paying only the minimum can make repayment take longer.",
    mathConnection: "A smaller payment can leave more principal, which may create more interest later.",
    sources: [ngpfDictionary, humbleMath]
  },
  {
    id: "net-income",
    term: "Net Income",
    aliases: ["take-home pay", "net pay"],
    definition: "Money left from a paycheck after taxes and deductions.",
    mathConnection: "Net income is often the amount used for a realistic budget.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "net-worth",
    term: "Net Worth",
    aliases: ["networth"],
    definition: "A snapshot of financial position: what you own minus what you owe.",
    mathConnection: "Net worth = assets - debts.",
    sources: [ngpfDictionary, humbleMath]
  },
  {
    id: "needs",
    term: "Needs",
    aliases: ["basic needs", "necessities"],
    definition: "Things that are important for basic living or responsibilities, such as food, housing, transportation, and required bills.",
    mathConnection: "Budgets often compare the percentage spent on needs and wants.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "opportunity-cost",
    term: "Opportunity Cost",
    aliases: ["tradeoff", "tradeoffs", "trade-off", "trade-offs"],
    definition: "What you give up when you choose one option instead of another.",
    mathConnection: "A tradeoff can be compared with money, time, risk, or future choices.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "overdraft",
    term: "Overdraft",
    aliases: ["overdrafts"],
    definition: "When more money is taken from an account than the account has available.",
    mathConnection: "An overdraft can turn a negative balance into debt or fees.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "payment-app",
    term: "Payment App",
    aliases: ["payment apps", "peer-to-peer payment", "p2p payment"],
    definition: "An app used to send or receive money. It is convenient, but mistakes and scams can be hard to reverse.",
    mathConnection: "Payment app spending is still spending and belongs in a budget.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "premium",
    term: "Premium",
    aliases: ["premiums"],
    definition: "A regular amount paid to keep an insurance policy active.",
    mathConnection: "A premium is a repeated expense, so monthly cost can be multiplied by 12 for a yearly total.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "principal",
    term: "Principal",
    aliases: ["loan principal"],
    definition: "The original amount saved, invested, or borrowed before interest is added.",
    mathConnection: "Interest is often calculated from the principal balance.",
    sources: [ngpfDictionary, humbleMath]
  },
  {
    id: "receipt",
    term: "Receipt",
    aliases: ["receipts"],
    definition: "A record of a purchase that shows what was bought, prices, taxes, discounts, and total cost.",
    mathConnection: "Receipts help check addition, percent tax, and whether discounts applied correctly.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "risk",
    term: "Risk",
    aliases: ["risky", "volatility", "volatile"],
    definition: "The chance that something may go differently than expected, including losing money or facing a surprise cost.",
    mathConnection: "Risk can be compared with probability, possible loss, and possible reward.",
    sources: [ngpfDictionary, napkinFinance, humbleMath]
  },
  {
    id: "rule-of-72",
    term: "Rule of 72",
    aliases: ["rule-of-72"],
    definition: "A quick estimate for how long it may take money to double: divide 72 by the annual growth rate.",
    mathConnection: "At 8% growth, 72 divided by 8 is about 9 years to double.",
    sources: [ngpfDictionary, napkinFinance, humbleMath]
  },
  {
    id: "saving",
    term: "Saving",
    aliases: ["savings", "save"],
    definition: "Setting money aside instead of spending it right away.",
    mathConnection: "Savings goals can be tracked with subtraction, percentages, and timelines.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "savings-account",
    term: "Savings Account",
    aliases: ["savings accounts"],
    definition: "An account designed to store money for goals or emergencies, sometimes earning interest.",
    mathConnection: "Savings account balances can grow through deposits and interest.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance]
  },
  {
    id: "scam",
    term: "Scam",
    aliases: ["scams", "fraud", "phishing", "identity theft"],
    definition: "A dishonest attempt to steal money, information, or account access.",
    mathConnection: "A scam can turn one small click or payment into a larger loss.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  },
  {
    id: "student-loan",
    term: "Student Loan",
    aliases: ["student loans", "college loan"],
    definition: "Money borrowed to help pay for education costs and repaid later, usually with interest.",
    mathConnection: "Student loan choices compare borrowed amount, interest, payments, and future income.",
    sources: [ngpfDictionary, napkinFinance]
  },
  {
    id: "tax",
    term: "Tax",
    aliases: ["taxes", "tax refund", "tax return"],
    definition: "Money collected by government to pay for public services. Paychecks often show taxes taken out.",
    mathConnection: "Taxes often use percent rates and subtraction from gross pay.",
    sources: [ngpfDictionary, ngpfMiddleSchool, napkinFinance, humbleMath]
  },
  {
    id: "unit-price",
    term: "Unit Price",
    aliases: ["unit rate", "unit rates", "unit prices"],
    definition: "The cost for one unit, such as one ounce, one item, or one pound. It helps compare different package sizes.",
    mathConnection: "Unit price = total price divided by number of units.",
    sources: [ngpfDictionary, ngpfMiddleSchool, humbleMath]
  },
  {
    id: "utilization",
    term: "Credit Utilization",
    aliases: ["utilization"],
    definition: "How much of available credit is being used. High use can make borrowing look riskier.",
    mathConnection: "Utilization is a percent: balance divided by credit limit.",
    sources: [ngpfDictionary, napkinFinance]
  },
  {
    id: "wants",
    term: "Wants",
    aliases: ["fun spending", "nonessential spending"],
    definition: "Things that can improve life or feel fun but are not basic needs.",
    mathConnection: "Budgeting asks how much of income should go to wants after needs and goals.",
    sources: [ngpfDictionary, ngpfMiddleSchool]
  }
];

export function findGlossaryTerms(textParts: Array<string | undefined | null>, limit = 5): GlossaryTerm[] {
  const text = textParts.filter(Boolean).join(" ").toLowerCase();
  const found = glossaryTerms.filter((entry) =>
    [entry.term, ...entry.aliases].some((phrase) => phraseMatches(text, phrase))
  );
  return found
    .sort((a, b) => b.term.length - a.term.length)
    .slice(0, limit);
}

export function getGlossaryTermsById(ids: string[], limit = 6): GlossaryTerm[] {
  const uniqueIds = Array.from(new Set(ids));
  return uniqueIds
    .map((id) => glossaryTerms.find((entry) => entry.id === id))
    .filter((entry): entry is GlossaryTerm => Boolean(entry))
    .slice(0, limit);
}

function phraseMatches(text: string, phrase: string): boolean {
  const escaped = phrase.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
}
