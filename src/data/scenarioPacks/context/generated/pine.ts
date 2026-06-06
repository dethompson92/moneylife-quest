import type { ScenarioEvent } from "../../../../types/game";

export const pineContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-pine-collectible-liquidity",
    "title": "Valuable, But Not Spendable",
    "prompt": "You own a collectible item worth about $180 to the right buyer. You also have a $90 short-term cost coming up. Selling quickly might only bring $120.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 18
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Sell quickly for $120",
        "description": "cash up, asset gone.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 120
              }
            ],
            "feedback": "Quick sale improved liquidity but lost possible value.",
            "explanation": "Quick sale improved liquidity but lost possible value.",
            "logText": "Valuable, But Not Spendable: Sell quickly for $120"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait for a better buyer",
        "description": "asset value protected, cash need covered another way.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 90
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Savings can give you time to avoid a rushed sale.",
            "explanation": "Savings can give you time to avoid a rushed sale.",
            "logText": "Valuable, But Not Spendable: Wait for a better buyer"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow against future income",
        "description": "asset kept, future cash tight.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Borrowing keeps the item but creates a future obligation.",
            "explanation": "Borrowing keeps the item but creates a future obligation.",
            "logText": "Valuable, But Not Spendable: Borrow against future income"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did speed lower the price?",
    "sourceNote": "MoneyLife context batch PINE-COMET-84; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Net worth can look strong even when cash is low."
  },
  {
    "id": "ctx-pine-liquidity-capstone",
    "title": "Net Worth Isn’t Cash",
    "prompt": "Your adult-planning snapshot shows $2,100 in assets, $800 in debts, and only $90 in spendable cash. A $300 urgent cost appears.",
    "topics": [
      "money-values",
      "credit"
    ],
    "ageRange": {
      "min": 18,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate net worth and liquidity first",
        "description": "better decision view.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 55
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Net worth is $2,100 − $800 = $1,300, but only $90 is cash.",
            "explanation": "Net worth is $2,100 − $800 = $1,300, but only $90 is cash.",
            "logText": "Net Worth Isn’t Cash: Calculate net worth and liquidity first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell a useful asset quickly",
        "description": "cash up, opportunity or wellbeing may drop.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Selling creates cash, but may remove something useful.",
            "explanation": "Selling creates cash, but may remove something useful.",
            "logText": "Net Worth Isn’t Cash: Sell a useful asset quickly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use support plus repayment plan",
        "description": "cash gap handled, future obligation created.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 45
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Support can help, but clear repayment protects trust.",
            "explanation": "Support can help, but clear repayment protects trust.",
            "logText": "Net Worth Isn’t Cash: Use support plus repayment plan"
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "Use high-cost borrowing",
        "description": "urgent cost covered, debt and interest rise.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Borrowing can solve today and make tomorrow harder.",
            "explanation": "Borrowing can solve today and make tomorrow harder.",
            "logText": "Net Worth Isn’t Cash: Use high-cost borrowing"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why didn’t positive net worth solve the urgent cost?",
    "sourceNote": "MoneyLife context batch PINE-COMET-84; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A financially strong-looking life can still be cash-tight; planning needs both net worth and liquidity."
  },
  {
    "id": "ctx-pine-market-permit-fee",
    "title": "The Table Permit",
    "prompt": "A school-safe maker market lets students sell approved handmade items. A table permit costs $18, display supplies cost $12, and each item costs $2 to make and sells for $5. Demand is uncertain.",
    "topics": [
      "investing",
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the permit and prepare 20 items",
        "description": "You commit to the full table. possible profit, but demand is randomized.",
        "requirements": [
          {
            "type": "minCash",
            "value": 70
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              }
            ],
            "feedback": "If all 20 sell, revenue is $100; total cost is $18 + $12 + $40 = $70, so profit is $30.",
            "explanation": "If all 20 sell, revenue is $100; total cost is $18 + $12 + $40 = $70, so profit is $30.",
            "logText": "The Table Permit: Buy the permit and prepare 20 items"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Table Permit: Buy the permit and prepare 20 items met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Partner with another seller",
        "description": "You split the permit and display costs. lower risk, lower control, relationship trust can rise.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "wellbeing",
            "value": 45
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Sharing fixed costs lowers the break-even point.",
            "explanation": "Sharing fixed costs lowers the break-even point.",
            "logText": "The Table Permit: Partner with another seller"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Table Permit: Partner with another seller met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Make a waitlist first",
        "description": "You ask interested buyers to sign up before buying supplies. risk down, opportunity up.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 50
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Testing demand before spending protects cash.",
            "explanation": "Testing demand before spending protects cash.",
            "logText": "The Table Permit: Make a waitlist first"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Table Permit: Make a waitlist first met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What happens if only half sell?",
    "sourceNote": "MoneyLife context batch PINE-COMET-84; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "A table can create opportunity, but upfront costs make demand testing valuable."
  },
  {
    "id": "ctx-pine-portfolio-print-plan",
    "title": "Printing the Portfolio",
    "prompt": "You need to print a small portfolio for a future interview or showcase. One option is $0.12 per page. Another is a $5 print plan that includes 60 pages.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "lifeStages": [
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay per page for 32 pages",
        "description": "lower total for a small job.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -32
              }
            ],
            "feedback": "32 × $0.12 = $3.84, so the pay-per-page choice wins this time.",
            "explanation": "32 × $0.12 = $3.84, so the pay-per-page choice wins this time.",
            "logText": "Printing the Portfolio: Pay per page for 32 pages"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $5 plan",
        "description": "convenient, but costs more unless you print enough.",
        "requirements": [
          {
            "type": "minCash",
            "value": 5
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -5
              }
            ],
            "feedback": "A plan can be useful, but only if your use matches it.",
            "explanation": "A plan can be useful, but only if your use matches it.",
            "logText": "Printing the Portfolio: Buy the $5 plan"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to review before printing",
        "description": "opportunity up, wasted pages down.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 45
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A review can prevent reprinting.",
            "explanation": "A review can prevent reprinting.",
            "logText": "Printing the Portfolio: Ask mentor to review before printing"
          }
        ]
      }
    ],
    "reflectionPrompt": "What number made the plan unnecessary?",
    "sourceNote": "MoneyLife context batch PINE-COMET-84; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Plans can be convenient, but pay-per-use may beat a plan when you only need a little."
  },
  {
    "id": "ctx-pine-reference-thank-you",
    "title": "Keeping a Reference Strong",
    "prompt": "A mentor writes a reference for a program or job. You want to show appreciation without spending too much or making it awkward.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Send a specific thank-you note",
        "description": "mentor trust up, cash unchanged.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Clear gratitude can strengthen a professional relationship.",
            "explanation": "Clear gratitude can strengthen a professional relationship.",
            "logText": "Keeping a Reference Strong: Send a specific thank-you note"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy an expensive gift",
        "description": "cash down, possible awkwardness.",
        "requirements": [
          {
            "type": "minCash",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "More money does not always mean more appreciation.",
            "explanation": "More money does not always mean more appreciation.",
            "logText": "Keeping a Reference Strong: Buy an expensive gift"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Update the mentor later on your progress",
        "description": "opportunity up, relationship maintained.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 45
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Following up shows the help mattered.",
            "explanation": "Following up shows the help mattered.",
            "logText": "Keeping a Reference Strong: Update the mentor later on your progress"
          }
        ]
      }
    ],
    "reflectionPrompt": "What detail made the note meaningful?",
    "sourceNote": "MoneyLife context batch PINE-COMET-84; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Relationships are not transactions; thoughtful communication often beats spending."
  },
  {
    "id": "ctx-pine-time-bank-favor",
    "title": "The Non-Cash Trade",
    "prompt": "A community time-bank lets people trade help. You can tutor younger students for two hours and earn help fixing a small item later.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 13,
      "max": 16
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Join and track the time credit",
        "description": "opportunity up, possible repair help later.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 40
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Not all value is cash; records still matter.",
            "explanation": "Not all value is cash; records still matter.",
            "logText": "The Non-Cash Trade: Join and track the time credit"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Non-Cash Trade: Join and track the time credit met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Help without tracking",
        "description": "wellbeing/support up, future value uncertain.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Generosity is good, but unclear agreements can become confusing.",
            "explanation": "Generosity is good, but unclear agreements can become confusing.",
            "logText": "The Non-Cash Trade: Help without tracking"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Non-Cash Trade: Help without tracking met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip because you need open time",
        "description": "time protected, opportunity unchanged.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Time is a real resource.",
            "explanation": "Time is a real resource.",
            "logText": "The Non-Cash Trade: Skip because you need open time"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the trade fair?",
    "sourceNote": "MoneyLife context batch PINE-COMET-84; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Non-cash support can be powerful, but it still needs clear rules."
  },
  {
    "id": "ctx-pine-uniform-upkeep",
    "title": "The Work Uniform Choice",
    "prompt": "A future part-time job requires a plain uniform. The basic uniform costs $38. A better stain-resistant version costs $58 and may last longer.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the basic uniform",
        "description": "cash down less now, random replacement risk later.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -38
              }
            ],
            "feedback": "Lower upfront cost can be smart when cash is tight.",
            "explanation": "Lower upfront cost can be smart when cash is tight.",
            "logText": "The Work Uniform Choice: Buy the basic uniform"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Work Uniform Choice: Buy the basic uniform met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the stronger uniform",
        "description": "cash down more, replacement risk lower.",
        "requirements": [
          {
            "type": "minCash",
            "value": 58
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -38
              }
            ],
            "feedback": "You paid $20 more to reduce future upkeep risk.",
            "explanation": "You paid $20 more to reduce future upkeep risk.",
            "logText": "The Work Uniform Choice: Buy the stronger uniform"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Work Uniform Choice: Buy the stronger uniform met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask whether the employer has a uniform closet",
        "description": "possible lower cost, confidence up.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 55
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -38
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Asking about resources can lower job-start costs.",
            "explanation": "Asking about resources can lower job-start costs.",
            "logText": "The Work Uniform Choice: Ask whether the employer has a uniform closet"
          }
        ]
      }
    ],
    "reflectionPrompt": "What future cost might appear?",
    "sourceNote": "MoneyLife context batch PINE-COMET-84; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "The cheapest item now may not be cheapest over time."
  }
];
