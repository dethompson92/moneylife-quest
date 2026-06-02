import type { GlossaryTerm } from "./glossaryTerms";

export const contextGlossaryTerms: GlossaryTerm[] = [
  {
    "id": "budget",
    "term": "Budget",
    "aliases": [
      "budgets",
      "budget"
    ],
    "definition": "A plan for money coming in and going out.",
    "mathConnection": "Addition/percent splits.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "income",
    "term": "Income",
    "aliases": [
      "incomes",
      "income"
    ],
    "definition": "Money you receive from work or other sources.",
    "mathConnection": "Sums over time.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "net-income",
    "term": "Net income",
    "aliases": [
      "net incomes",
      "net income"
    ],
    "definition": "Take-home pay after deductions.",
    "mathConnection": "Subtraction/percent.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "gross-pay",
    "term": "Gross pay",
    "aliases": [
      "gross pays",
      "gross pay"
    ],
    "definition": "Pay before deductions.",
    "mathConnection": "Hourly × hours.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "tax",
    "term": "Tax",
    "aliases": [
      "taxs",
      "tax"
    ],
    "definition": "Money paid to fund public services.",
    "mathConnection": "Percent of an amount.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "saving",
    "term": "Saving",
    "aliases": [
      "savings",
      "saving"
    ],
    "definition": "Setting money aside for later.",
    "mathConnection": "Running totals.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "savings-account",
    "term": "Savings account",
    "aliases": [
      "savings accounts",
      "savings account"
    ],
    "definition": "A bank account that earns a little interest.",
    "mathConnection": "Simple/compound interest.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "emergency-fund",
    "term": "Emergency fund",
    "aliases": [
      "emergency funds",
      "emergency fund"
    ],
    "definition": "Savings set aside for surprises.",
    "mathConnection": "Months-of-expenses math.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "checking-account",
    "term": "Checking account",
    "aliases": [
      "checking accounts",
      "checking account"
    ],
    "definition": "An account for everyday spending.",
    "mathConnection": "Cash flow.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "bank",
    "term": "Bank",
    "aliases": [
      "banks",
      "bank"
    ],
    "definition": "A safe place to keep and move money.",
    "mathConnection": "N/A.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "deposit",
    "term": "Deposit",
    "aliases": [
      "deposits",
      "deposit"
    ],
    "definition": "Putting money into an account.",
    "mathConnection": "Addition.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "fee",
    "term": "Fee",
    "aliases": [
      "fees",
      "fee"
    ],
    "definition": "A charge for a service.",
    "mathConnection": "Subtraction/percent.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "overdraft",
    "term": "Overdraft",
    "aliases": [
      "overdrafts",
      "overdraft"
    ],
    "definition": "Spending more than your balance.",
    "mathConnection": "Subtraction.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "credit",
    "term": "Credit",
    "aliases": [
      "credits",
      "credit"
    ],
    "definition": "Borrowed money you repay later.",
    "mathConnection": "Interest math.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "credit-card",
    "term": "Credit card",
    "aliases": [
      "credit cards",
      "credit card"
    ],
    "definition": "A card to borrow up to a limit.",
    "mathConnection": "Percent/utilization.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "credit-score",
    "term": "Credit score",
    "aliases": [
      "credit scores",
      "credit score"
    ],
    "definition": "A number summarizing borrowing history.",
    "mathConnection": "Range reading (300–850).",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "utilization",
    "term": "Utilization",
    "aliases": [
      "utilizations",
      "utilization"
    ],
    "definition": "Share of your credit limit you're using.",
    "mathConnection": "Percent.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "debt",
    "term": "Debt",
    "aliases": [
      "debts",
      "debt"
    ],
    "definition": "Money you owe.",
    "mathConnection": "Subtraction/interest.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "loan",
    "term": "Loan",
    "aliases": [
      "loans",
      "loan"
    ],
    "definition": "Borrowed money repaid with interest.",
    "mathConnection": "Interest/term math.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "principal",
    "term": "Principal",
    "aliases": [
      "principals",
      "principal"
    ],
    "definition": "The original amount borrowed or saved.",
    "mathConnection": "Base for percent.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "interest",
    "term": "Interest",
    "aliases": [
      "interests",
      "interest"
    ],
    "definition": "The cost of borrowing or reward for saving.",
    "mathConnection": "Percent over time.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "minimum-payment",
    "term": "Minimum payment",
    "aliases": [
      "minimum payments",
      "minimum payment"
    ],
    "definition": "The smallest required payment.",
    "mathConnection": "Percent of balance.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "asset",
    "term": "Asset",
    "aliases": [
      "assets",
      "asset"
    ],
    "definition": "Something you own with value.",
    "mathConnection": "Value tracking.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "net-worth",
    "term": "Net worth",
    "aliases": [
      "net worths",
      "net worth"
    ],
    "definition": "Assets minus debts.",
    "mathConnection": "Subtraction.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "investment",
    "term": "Investment",
    "aliases": [
      "investments",
      "investment"
    ],
    "definition": "Money put in hoping it grows.",
    "mathConnection": "Percent change.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "diversification",
    "term": "Diversification",
    "aliases": [
      "diversifications",
      "diversification"
    ],
    "definition": "Spreading money to reduce risk.",
    "mathConnection": "Proportions.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "risk",
    "term": "Risk",
    "aliases": [
      "risks",
      "risk"
    ],
    "definition": "The chance of losing value.",
    "mathConnection": "Probability intuition.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "inflation",
    "term": "Inflation",
    "aliases": [
      "inflations",
      "inflation"
    ],
    "definition": "Prices rising over time.",
    "mathConnection": "Percent increase.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "insurance",
    "term": "Insurance",
    "aliases": [
      "insurances",
      "insurance"
    ],
    "definition": "Paying to share the cost of rare big losses.",
    "mathConnection": "Premium/deductible math.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "premium",
    "term": "Premium",
    "aliases": [
      "premiums",
      "premium"
    ],
    "definition": "The regular cost of insurance.",
    "mathConnection": "Multiplication over time.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "deductible",
    "term": "Deductible",
    "aliases": [
      "deductibles",
      "deductible"
    ],
    "definition": "What you pay before insurance helps.",
    "mathConnection": "Subtraction.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "scam",
    "term": "Scam",
    "aliases": [
      "scams",
      "scam"
    ],
    "definition": "A trick to take your money or info.",
    "mathConnection": "N/A.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "identity-theft",
    "term": "Identity theft",
    "aliases": [
      "identity thefts",
      "identity theft"
    ],
    "definition": "Someone using your info as their own.",
    "mathConnection": "N/A.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "receipt",
    "term": "Receipt",
    "aliases": [
      "receipts",
      "receipt"
    ],
    "definition": "Proof of a purchase.",
    "mathConnection": "Totals/checking math.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "discount",
    "term": "Discount",
    "aliases": [
      "discounts",
      "discount"
    ],
    "definition": "A reduction in price.",
    "mathConnection": "Percent off.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "unit-price",
    "term": "Unit price",
    "aliases": [
      "unit prices",
      "unit price"
    ],
    "definition": "Price per single unit or amount.",
    "mathConnection": "Division.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "needs",
    "term": "Needs",
    "aliases": [
      "needss",
      "needs"
    ],
    "definition": "Things required to live.",
    "mathConnection": "Budget categories.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "wants",
    "term": "Wants",
    "aliases": [
      "wantss",
      "wants"
    ],
    "definition": "Things nice to have but not essential.",
    "mathConnection": "Budget categories.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "opportunity-cost",
    "term": "Opportunity cost",
    "aliases": [
      "opportunity costs",
      "opportunity cost"
    ],
    "definition": "What you give up when you choose.",
    "mathConnection": "Comparison.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "apr",
    "term": "APR",
    "aliases": [
      "aprs",
      "apr"
    ],
    "definition": "The yearly cost of borrowing as a percent.",
    "mathConnection": "Percent/comparison.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "sunk-cost",
    "term": "Sunk cost",
    "aliases": [
      "sunk costs",
      "sunk cost"
    ],
    "definition": "Money already spent that you can't get back.",
    "mathConnection": "Compare future value, ignore the past spend.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "total-cost-of-ownership",
    "term": "Total cost of ownership",
    "aliases": [
      "total cost of ownerships",
      "total cost of ownership"
    ],
    "definition": "Everything an item costs over its life, not just the price.",
    "mathConnection": "Add purchase + upkeep + time.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "reversibility",
    "term": "Reversibility",
    "aliases": [
      "reversibilitys",
      "reversibility"
    ],
    "definition": "Whether you can undo a money choice.",
    "mathConnection": "Rank easy/hard/impossible.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "refundable",
    "term": "Refundable",
    "aliases": [
      "refundables",
      "refundable"
    ],
    "definition": "Money you can get back under certain conditions.",
    "mathConnection": "Conditional return amount.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "store-credit",
    "term": "Store credit",
    "aliases": [
      "store credits",
      "store credit"
    ],
    "definition": "A refund usable only at that store.",
    "mathConnection": "Value tied to one place.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "final-sale",
    "term": "Final sale",
    "aliases": [
      "final sales",
      "final sale"
    ],
    "definition": "A purchase that can't be returned.",
    "mathConnection": "No-return risk.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "overage-fee",
    "term": "Overage fee",
    "aliases": [
      "overage fees",
      "overage fee"
    ],
    "definition": "A charge for going past a limit.",
    "mathConnection": "Per-unit-over math.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "cash-flow",
    "term": "Cash flow",
    "aliases": [
      "cash flows",
      "cash flow"
    ],
    "definition": "The timing of money in and out.",
    "mathConnection": "Match income dates to bill dates.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "buffer",
    "term": "Buffer",
    "aliases": [
      "buffers",
      "buffer"
    ],
    "definition": "A small extra balance that absorbs timing gaps.",
    "mathConnection": "Cover the shortfall amount.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "pay-frequency",
    "term": "Pay frequency",
    "aliases": [
      "pay frequencys",
      "pay frequency"
    ],
    "definition": "How often you're paid.",
    "mathConnection": "Same total, different timing.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "unit-conversion",
    "term": "Unit conversion",
    "aliases": [
      "unit conversions",
      "unit conversion"
    ],
    "definition": "Putting prices in the same unit to compare.",
    "mathConnection": "Divide to per-ounce/per-year.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "self-insure",
    "term": "Self-insure",
    "aliases": [
      "self-insures",
      "self-insure"
    ],
    "definition": "Saving your own money to cover risks instead of buying coverage.",
    "mathConnection": "Jar balance vs. premiums.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "expected-value",
    "term": "Expected value",
    "aliases": [
      "expected values",
      "expected value"
    ],
    "definition": "The average result if a choice were repeated many times.",
    "mathConnection": "Probability × outcome.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "payback-period",
    "term": "Payback period",
    "aliases": [
      "payback periods",
      "payback period"
    ],
    "definition": "How long until savings cover a cost.",
    "mathConnection": "Cost ÷ savings per period.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "depreciation",
    "term": "Depreciation",
    "aliases": [
      "depreciations",
      "depreciation"
    ],
    "definition": "Loss of value over time.",
    "mathConnection": "Value − (drop × time).",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "restocking-fee",
    "term": "Restocking fee",
    "aliases": [
      "restocking fees",
      "restocking fee"
    ],
    "definition": "A charge for returning some items.",
    "mathConnection": "Percent of price.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "maintenance",
    "term": "Maintenance",
    "aliases": [
      "maintenances",
      "maintenance"
    ],
    "definition": "Upkeep that keeps an asset working.",
    "mathConnection": "Recurring small costs.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "annualize",
    "term": "Annualize",
    "aliases": [
      "annualizes",
      "annualize"
    ],
    "definition": "Turn a monthly cost into a yearly one.",
    "mathConnection": "Monthly × 12.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "barter",
    "term": "Barter",
    "aliases": [
      "barters",
      "barter"
    ],
    "definition": "Trading goods/skills without money.",
    "mathConnection": "Equivalent cash value.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "windfall",
    "term": "Windfall",
    "aliases": [
      "windfalls",
      "windfall"
    ],
    "definition": "Unexpected extra money.",
    "mathConnection": "Percent allocation.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "micro-investing",
    "term": "Micro-investing",
    "aliases": [
      "micro-investings",
      "micro-investing"
    ],
    "definition": "Investing very small amounts regularly.",
    "mathConnection": "Small × frequency, compounding.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "round-up",
    "term": "Round-up",
    "aliases": [
      "round-ups",
      "round-up"
    ],
    "definition": "Investing the spare change from purchases.",
    "mathConnection": "Difference to next dollar.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "scarcity-tactic",
    "term": "Scarcity tactic",
    "aliases": [
      "scarcity tactics",
      "scarcity tactic"
    ],
    "definition": "Pressure that something's \"almost gone.\"",
    "mathConnection": "None",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "impulse-buy",
    "term": "Impulse buy",
    "aliases": [
      "impulse buys",
      "impulse buy"
    ],
    "definition": "An unplanned purchase made on the spot.",
    "mathConnection": "Compare to budget.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "verification",
    "term": "Verification",
    "aliases": [
      "verifications",
      "verification"
    ],
    "definition": "Confirming who's really asking.",
    "mathConnection": "None",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "urgency-tactic",
    "term": "Urgency tactic",
    "aliases": [
      "urgency tactics",
      "urgency tactic"
    ],
    "definition": "Pressure to act before you can think.",
    "mathConnection": "None.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "0-apr",
    "term": "0% APR",
    "aliases": [
      "0% aprs",
      "0% apr"
    ],
    "definition": "Financing with no interest.",
    "mathConnection": "Payment × term = total.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "financing",
    "term": "Financing",
    "aliases": [
      "financings",
      "financing"
    ],
    "definition": "Paying over time instead of all at once.",
    "mathConnection": "Total of payments.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "autopay",
    "term": "Autopay",
    "aliases": [
      "autopays",
      "autopay"
    ],
    "definition": "Automatic scheduled payments.",
    "mathConnection": "Prevents late fees.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "late-fee",
    "term": "Late fee",
    "aliases": [
      "late fees",
      "late fee"
    ],
    "definition": "A charge for paying after the due date.",
    "mathConnection": "Per-period stacking.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "variable-cost",
    "term": "Variable cost",
    "aliases": [
      "variable costs",
      "variable cost"
    ],
    "definition": "A cost that changes month to month.",
    "mathConnection": "Averaging, ranges.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "fair-split",
    "term": "Fair split",
    "aliases": [
      "fair splits",
      "fair split"
    ],
    "definition": "Dividing shared costs in an agreed way.",
    "mathConnection": "Even vs. weighted division.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "co-ownership",
    "term": "Co-ownership",
    "aliases": [
      "co-ownerships",
      "co-ownership"
    ],
    "definition": "Sharing ownership of an asset.",
    "mathConnection": "Equity shares, buyout math.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "liquidity",
    "term": "Liquidity",
    "aliases": [
      "liquiditys",
      "liquidity"
    ],
    "definition": "How easily money can be used right now.",
    "mathConnection": "Available vs. locked funds.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "spoilage-waste",
    "term": "Spoilage/waste",
    "aliases": [
      "spoilage/wastes",
      "spoilage/waste"
    ],
    "definition": "Value lost when goods go unused.",
    "mathConnection": "Per-unit-*used* cost.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "seasonality",
    "term": "Seasonality",
    "aliases": [
      "seasonalitys",
      "seasonality"
    ],
    "definition": "Predictable price changes by time of year.",
    "mathConnection": "Compare seasonal prices.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "incentive",
    "term": "Incentive",
    "aliases": [
      "incentives",
      "incentive"
    ],
    "definition": "A reward meant to influence a choice.",
    "mathConnection": "Compare benefit to others' cost.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "permission-app-",
    "term": "Permission (app)",
    "aliases": [
      "permission (app)s",
      "permission (app)"
    ],
    "definition": "Access an app asks for in exchange for use.",
    "mathConnection": "None",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "milestone",
    "term": "Milestone",
    "aliases": [
      "milestones",
      "milestone"
    ],
    "definition": "A reachable step toward a bigger goal.",
    "mathConnection": "Fraction of target.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "months-of-expenses",
    "term": "Months-of-expenses",
    "aliases": [
      "months-of-expensess",
      "months-of-expenses"
    ],
    "definition": "Sizing savings by your monthly costs.",
    "mathConnection": "Monthly × number of months.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "estimate",
    "term": "Estimate",
    "aliases": [
      "estimates",
      "estimate"
    ],
    "definition": "A quick, rough answer used to check a more exact one.",
    "mathConnection": "Rounding to ballpark a total.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "default",
    "term": "Default",
    "aliases": [
      "defaults",
      "default"
    ],
    "definition": "The pre-set choice that happens if you do nothing.",
    "mathConnection": "Compare cost of keeping vs. changing.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "auto-renew",
    "term": "Auto-renew",
    "aliases": [
      "auto-renews",
      "auto-renew"
    ],
    "definition": "A charge that repeats unless you stop it.",
    "mathConnection": "Monthly × periods.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "sequential-percent",
    "term": "Sequential percent",
    "aliases": [
      "sequential percents",
      "sequential percent"
    ],
    "definition": "Applying one percent after another, not adding them.",
    "mathConnection": "× then × (e.g., 0.80 then 0.90).",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "annualize",
    "term": "Annualize",
    "aliases": [
      "annualizes",
      "annualize"
    ],
    "definition": "Turn a repeating cost into a yearly total.",
    "mathConnection": "Per-period × periods/year.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "frequency",
    "term": "Frequency",
    "aliases": [
      "frequencys",
      "frequency"
    ],
    "definition": "How often something happens.",
    "mathConnection": "Count × cost.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "cooling-off",
    "term": "Cooling-off",
    "aliases": [
      "cooling-offs",
      "cooling-off"
    ],
    "definition": "Waiting before deciding to buy.",
    "mathConnection": "None",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "impulse-buy",
    "term": "Impulse buy",
    "aliases": [
      "impulse buys",
      "impulse buy"
    ],
    "definition": "An unplanned purchase made on the spot.",
    "mathConnection": "Compare to budget.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "whole-term-cost",
    "term": "Whole-term cost",
    "aliases": [
      "whole-term costs",
      "whole-term cost"
    ],
    "definition": "The full amount over an entire commitment.",
    "mathConnection": "Per-period × number of periods.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "commitment",
    "term": "Commitment",
    "aliases": [
      "commitments",
      "commitment"
    ],
    "definition": "An agreement you're bound to for a set time.",
    "mathConnection": "Total of all payments.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "bundle",
    "term": "Bundle",
    "aliases": [
      "bundles",
      "bundle"
    ],
    "definition": "Items sold together as one price.",
    "mathConnection": "Total ÷ items.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "unbundle",
    "term": "Unbundle",
    "aliases": [
      "unbundles",
      "unbundle"
    ],
    "definition": "Break a combo into per-item cost.",
    "mathConnection": "Division.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "average",
    "term": "Average",
    "aliases": [
      "averages",
      "average"
    ],
    "definition": "The middle value found by adding and dividing.",
    "mathConnection": "Sum ÷ count.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "range",
    "term": "Range",
    "aliases": [
      "ranges",
      "range"
    ],
    "definition": "The spread from lowest to highest.",
    "mathConnection": "Highest − lowest.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "normalize-compare-",
    "term": "Normalize (compare)",
    "aliases": [
      "normalize (compare)s",
      "normalize (compare)"
    ],
    "definition": "Put options in the same terms before comparing.",
    "mathConnection": "Per year/use/serving.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "cost-per-year",
    "term": "Cost-per-year",
    "aliases": [
      "cost-per-years",
      "cost-per-year"
    ],
    "definition": "A price expressed per year of use.",
    "mathConnection": "Price ÷ years.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "break-even",
    "term": "Break-even",
    "aliases": [
      "break-evens",
      "break-even"
    ],
    "definition": "The point where two options cost the same.",
    "mathConnection": "Solve for the count where costs match.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "endowment-effect",
    "term": "Endowment effect",
    "aliases": [
      "endowment effects",
      "endowment effect"
    ],
    "definition": "Overvaluing something because you own it.",
    "mathConnection": "Compare your price to market.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "resale-value",
    "term": "Resale value",
    "aliases": [
      "resale values",
      "resale value"
    ],
    "definition": "What someone else will pay for your item.",
    "mathConnection": "Percent of original price.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "sentimental-value",
    "term": "Sentimental value",
    "aliases": [
      "sentimental values",
      "sentimental value"
    ],
    "definition": "Personal worth beyond market price.",
    "mathConnection": "Compare to market value.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "projection",
    "term": "Projection",
    "aliases": [
      "projections",
      "projection"
    ],
    "definition": "A forward estimate based on assumptions.",
    "mathConnection": "Growth × time with assumptions.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "assumption",
    "term": "Assumption",
    "aliases": [
      "assumptions",
      "assumption"
    ],
    "definition": "Something taken as true for a calculation.",
    "mathConnection": "Changes the result if wrong.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "milestone",
    "term": "Milestone",
    "aliases": [
      "milestones",
      "milestone"
    ],
    "definition": "A smaller step that marks progress to a goal.",
    "mathConnection": "Fraction of the target.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "smart-goal",
    "term": "SMART goal",
    "aliases": [
      "smart goals",
      "smart goal"
    ],
    "definition": "A goal with a specific amount, deadline, and rate.",
    "mathConnection": "Target ÷ time = rate.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "ripple-effect",
    "term": "Ripple effect",
    "aliases": [
      "ripple effects",
      "ripple effect"
    ],
    "definition": "How a money choice affects other people.",
    "mathConnection": "None",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "shared-responsibility",
    "term": "Shared responsibility",
    "aliases": [
      "shared responsibilitys",
      "shared responsibility"
    ],
    "definition": "When more than one person is on the hook.",
    "mathConnection": "Whose balance grows if one doesn't pay.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "liability",
    "term": "Liability",
    "aliases": [
      "liabilitys",
      "liability"
    ],
    "definition": "Money or responsibility you owe.",
    "mathConnection": "Add to debts in net worth.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "net-worth",
    "term": "Net worth",
    "aliases": [
      "net worths",
      "net worth"
    ],
    "definition": "Assets minus debts.",
    "mathConnection": "Assets − liabilities.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "liquidity",
    "term": "Liquidity",
    "aliases": [
      "liquiditys",
      "liquidity"
    ],
    "definition": "How quickly something becomes spendable cash.",
    "mathConnection": "Cash vs. resale value.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "budget-billing",
    "term": "Budget billing",
    "aliases": [
      "budget billings",
      "budget billing"
    ],
    "definition": "Paying a steady average instead of the real amount.",
    "mathConnection": "Average of variable bills.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "variable-cost",
    "term": "Variable cost",
    "aliases": [
      "variable costs",
      "variable cost"
    ],
    "definition": "A cost that changes period to period.",
    "mathConnection": "Averaging, ranges.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "installment",
    "term": "Installment",
    "aliases": [
      "installments",
      "installment"
    ],
    "definition": "One of several scheduled payments.",
    "mathConnection": "Total ÷ number of payments.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "0-apr",
    "term": "0% APR",
    "aliases": [
      "0% aprs",
      "0% apr"
    ],
    "definition": "Financing with no interest charged.",
    "mathConnection": "Payment × term = total.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "processing-fee",
    "term": "Processing fee",
    "aliases": [
      "processing fees",
      "processing fee"
    ],
    "definition": "A charge to handle a transaction.",
    "mathConnection": "Add to total / compare to value.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "verification",
    "term": "Verification",
    "aliases": [
      "verifications",
      "verification"
    ],
    "definition": "Confirming who's really asking before acting.",
    "mathConnection": "None",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "coverage",
    "term": "Coverage",
    "aliases": [
      "coverages",
      "coverage"
    ],
    "definition": "What an insurance policy will help pay for.",
    "mathConnection": "Event cost − deductible.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "premium",
    "term": "Premium",
    "aliases": [
      "premiums",
      "premium"
    ],
    "definition": "The regular payment for insurance.",
    "mathConnection": "Monthly × 12.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "peer-pressure",
    "term": "Peer pressure",
    "aliases": [
      "peer pressures",
      "peer pressure"
    ],
    "definition": "Social pressure to make a choice.",
    "mathConnection": "Compare cost of joining in vs. not.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "spoilage",
    "term": "Spoilage",
    "aliases": [
      "spoilages",
      "spoilage"
    ],
    "definition": "Value lost when goods go unused before they expire.",
    "mathConnection": "Cost ÷ units actually used.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  },
  {
    "id": "mental-math",
    "term": "Mental math",
    "aliases": [
      "mental maths",
      "mental math"
    ],
    "definition": "Calculating in your head with shortcuts.",
    "mathConnection": "Find 10%, then adjust.",
    "sources": [
      {
        "label": "MoneyLife Master Context Prompt Output"
      }
    ]
  }
];
