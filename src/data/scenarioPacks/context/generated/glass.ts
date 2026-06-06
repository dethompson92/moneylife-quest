import type { ScenarioEvent } from "../../../../types/game";

export const glassContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-glass-aid-offer-gap-line",
    "title": "Aid Offer Gap Line",
    "prompt": "A fictional aid offer lists $2,000 grant, $1,000 scholarship, $1,500 work-study, and a $3,000 gap.",
    "topics": [
      "life-after-high-school",
      "money-values",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Accept free aid first and plan the gap",
        "description": "Borrowing reduced. Money Know-How rises.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Grants and scholarships usually do not need repayment.",
            "explanation": "Grants and scholarships usually do not need repayment.",
            "logText": "Aid Offer Gap Line: Accept free aid first and plan the gap"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow the whole gap immediately",
        "description": "Simple, but debt rises. Debt increases; stress may rise.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Loans solve cash today and create payments later.",
            "explanation": "Loans solve cash today and create payments later.",
            "logText": "Aid Offer Gap Line: Borrow the whole gap immediately"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask aid office/school counselor about options",
        "description": "More options may appear. Opportunity rises.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 35
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
            "feedback": "Aid offers are documents you can ask questions about.",
            "explanation": "Aid offers are documents you can ask questions about.",
            "logText": "Aid Offer Gap Line: Ask aid office/school counselor about options"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which lines were not loans?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing can be reasonable, but students should identify free aid and remaining gap first."
  },
  {
    "id": "ctx-glass-alert-threshold-choice",
    "title": "Alert Threshold Choice",
    "prompt": "Your checking account can text you when your balance drops below a chosen number. You usually spend $18–$30 on small weekly costs.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Set alert at $25",
        "description": "Warning arrives before balance gets too low. Safety and Discipline rise.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "An alert turns attention into a system.",
            "explanation": "An alert turns attention into a system.",
            "logText": "Alert Threshold Choice: Set alert at $25"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Set alert at $5",
        "description": "Fewer alerts, less warning. Convenience rises; fee risk remains.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A late warning may not leave time to fix the problem.",
            "explanation": "A late warning may not leave time to fix the problem.",
            "logText": "Alert Threshold Choice: Set alert at $5"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip alerts",
        "description": "Less noise, more memory burden. Discipline risk rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Skipping alerts is okay only if another system works.",
            "explanation": "Skipping alerts is okay only if another system works.",
            "logText": "Alert Threshold Choice: Skip alerts"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why $25 instead of $0?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Alerts can annoy you, but they can prevent bigger problems."
  },
  {
    "id": "ctx-glass-apprentice-toolbelt",
    "title": "Apprentice Toolbelt",
    "prompt": "An apprenticeship pathway recommends a $110 starter toolbelt. A cheaper $45 kit works for now but may need replacement.",
    "topics": [
      "budgeting"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy starter toolbelt",
        "description": "Better quality, higher upfront cost. Asset gained; opportunity rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 110
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
              }
            ],
            "feedback": "Tools can be earning assets.",
            "explanation": "Tools can be earning assets.",
            "logText": "Apprentice Toolbelt: Buy starter toolbelt"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy cheaper kit",
        "description": "Lower barrier, replacement risk. Cash protected; future cost likely.",
        "requirements": [
          {
            "type": "minCash",
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
              }
            ],
            "feedback": "Starting cheaper can be smart if you are still exploring.",
            "explanation": "Starting cheaper can be smart if you are still exploring.",
            "logText": "Apprentice Toolbelt: Buy cheaper kit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask program about loaner tools",
        "description": "Possible access without purchase. Opportunity rises.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 40
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
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Programs may have resources if you ask.",
            "explanation": "Programs may have resources if you ask.",
            "logText": "Apprentice Toolbelt: Ask program about loaner tools"
          }
        ]
      }
    ],
    "reflectionPrompt": "How will this help you earn?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Buying quality can pay off, but borrowing or starting small can reduce risk."
  },
  {
    "id": "ctx-glass-art-table-fee",
    "title": "Art Table Fee",
    "prompt": "A school-safe art fair table costs $18. Your prints cost $0.80 each to make and sell for $3.",
    "topics": [
      "life-after-high-school"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Reserve table and bring 20 prints",
        "description": "Randomized demand. Opportunity rises; inventory risk.",
        "requirements": [
          {
            "type": "minCash",
            "value": 34
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -16
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "20 prints cost $16, plus $18 table fee.",
            "explanation": "20 prints cost $16, plus $18 table fee.",
            "logText": "Art Table Fee: Reserve table and bring 20 prints"
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
            "logText": "Art Table Fee: Reserve table and bring 20 prints met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Share table with a friend",
        "description": "Lower fee, shared space. Trust and cash improve.",
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
            "feedback": "Splitting fixed costs lowers break-even.",
            "explanation": "Splitting fixed costs lowers break-even.",
            "logText": "Art Table Fee: Share table with a friend"
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
            "logText": "Art Table Fee: Share table with a friend met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip and sell by commission later",
        "description": "No table risk, slower sales. Safety rises; opportunity delayed.",
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Avoiding a fixed cost lowers risk.",
            "explanation": "Avoiding a fixed cost lowers risk.",
            "logText": "Art Table Fee: Skip and sell by commission later"
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
            "logText": "Art Table Fee: Skip and sell by commission later met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How many must sell to break even?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Paying for opportunity can be smart, but only if sales can cover fixed costs."
  },
  {
    "id": "ctx-glass-atm-fee-map",
    "title": "Atm Fee Map",
    "prompt": "One ATM nearby charges $3.50. A no-fee ATM is 12 minutes away. You need $20 cash.",
    "topics": [
      "consumer-skills"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use the nearby ATM",
        "description": "Fast but costly. Cash drops by fee.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -3
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "A $3.50 fee on $20 is 17.5% of the cash you withdrew.",
            "explanation": "A $3.50 fee on $20 is 17.5% of the cash you withdrew.",
            "logText": "Atm Fee Map: Use the nearby ATM"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Walk to the no-fee ATM",
        "description": "Saves fee, costs time. Discipline rises; time drops.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -12
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Avoiding a fee is a trade with time.",
            "explanation": "Avoiding a fee is a trade with time.",
            "logText": "Atm Fee Map: Walk to the no-fee ATM"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Plan cash earlier",
        "description": "Future fee avoided. Money Know-How rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -12
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Planning ahead can remove the tradeoff.",
            "explanation": "Planning ahead can remove the tradeoff.",
            "logText": "Atm Fee Map: Plan cash earlier"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was the time saved worth 17.5%?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fees are not always “wrong,” but they should be noticed."
  },
  {
    "id": "ctx-glass-autopay-date-mismatch",
    "title": "Autopay Date Mismatch",
    "prompt": "Autopay is set for the 2nd, but payday is the 3rd. The bill is $64.",
    "topics": [
      "money-values",
      "budgeting"
    ],
    "ageRange": {
      "min": 17,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Move autopay to after payday",
        "description": "Timing risk lower. Safety rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Autopay helps only when the date fits cash flow.",
            "explanation": "Autopay helps only when the date fits cash flow.",
            "logText": "Autopay Date Mismatch: Move autopay to after payday"
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
            "logText": "Autopay Date Mismatch: Move autopay to after payday met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it and hope balance is enough",
        "description": "Randomized low-balance problem. Fee risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Automation can fail if timing is wrong.",
            "explanation": "Automation can fail if timing is wrong.",
            "logText": "Autopay Date Mismatch: Keep it and hope balance is enough"
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
            "logText": "Autopay Date Mismatch: Keep it and hope balance is enough met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep a $75 buffer",
        "description": "Bill covered even before payday. Cash reserved; Safety rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 75
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "A buffer protects automatic systems.",
            "explanation": "A buffer protects automatic systems.",
            "logText": "Autopay Date Mismatch: Keep a $75 buffer"
          }
        ]
      }
    ],
    "reflectionPrompt": "What date mismatch mattered?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Automation is powerful but not a substitute for timing awareness."
  },
  {
    "id": "ctx-glass-avalanche-snowball-mini",
    "title": "Avalanche Snowball Mini",
    "prompt": "You have two simplified debts: $90 at 8% and $40 at 20%. You have $20 extra this month.",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 17,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay the 20% debt first",
        "description": "Mathematically saves more interest. Debt cost falls; Money Know-How rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Higher percent debt grows faster.",
            "explanation": "Higher percent debt grows faster.",
            "logText": "Avalanche Snowball Mini: Pay the 20% debt first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the $40 debt first because it is smaller",
        "description": "Faster emotional win. Wellbeing rises; interest savings lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -40
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Small wins can keep motivation alive.",
            "explanation": "Small wins can keep motivation alive.",
            "logText": "Avalanche Snowball Mini: Pay the $40 debt first because it is smaller"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $10 and pay $10 extra",
        "description": "Builds tiny cushion and reduces debt. Safety and debt progress both rise.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -10
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Splitting can protect against new borrowing.",
            "explanation": "Splitting can protect against new borrowing.",
            "logText": "Avalanche Snowball Mini: Save $10 and pay $10 extra"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did rate matter?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The math-best payoff and the behavior-best payoff may differ."
  },
  {
    "id": "ctx-glass-bike-light-coupon",
    "title": "Bike Light Coupon",
    "prompt": "A bike light set costs $20, but a coupon takes 25% off. You ride home before sunset most days, but winter is coming.",
    "topics": [
      "consumer-skills",
      "money-values"
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
        "label": "Buy with coupon",
        "description": "Safety improves. Cash drops $15; Safety rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 15
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "25% of $20 is $5, so the sale price is $15.",
            "explanation": "25% of $20 is $5, so the sale price is $15.",
            "logText": "Bike Light Coupon: Buy with coupon"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until winter",
        "description": "Cash stays now; coupon may expire. Cash protected; future price risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              }
            ],
            "feedback": "Waiting can be smart if the need is not here yet.",
            "explanation": "Waiting can be smart if the need is not here yet.",
            "logText": "Bike Light Coupon: Wait until winter"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if a community program has free lights",
        "description": "Possible no-cost safety. Money Know-How rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Looking for resources is a financial skill.",
            "explanation": "Looking for resources is a financial skill.",
            "logText": "Bike Light Coupon: Ask if a community program has free lights"
          }
        ]
      }
    ],
    "reflectionPrompt": "What future risk did you plan for?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Safety purchases may feel optional until conditions change."
  },
  {
    "id": "ctx-glass-bike-lock-grade",
    "title": "Bike Lock Grade",
    "prompt": "You use a bike to get around. A basic lock is $9; a stronger lock is $32.",
    "topics": [
      "money-values"
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
        "label": "Buy the basic lock",
        "description": "Some protection. Cash protected now; theft risk remains higher.",
        "requirements": [
          {
            "type": "minCash",
            "value": 9
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Cheap protection is better than none, but risk is not equal.",
            "explanation": "Cheap protection is better than none, but risk is not equal.",
            "logText": "Bike Lock Grade: Buy the basic lock"
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
            "logText": "Bike Lock Grade: Buy the basic lock met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the stronger lock",
        "description": "Lower randomized loss risk. Cash drops; Safety rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 32
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Protection is part of ownership cost.",
            "explanation": "Protection is part of ownership cost.",
            "logText": "Bike Lock Grade: Buy the stronger lock"
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
            "logText": "Bike Lock Grade: Buy the stronger lock met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Store the bike inside when possible",
        "description": "Lower risk without buying the best lock. Discipline rises; convenience drops.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 35
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
              }
            ],
            "feedback": "A behavior can reduce risk too.",
            "explanation": "A behavior can reduce risk too.",
            "logText": "Bike Lock Grade: Store the bike inside when possible"
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
            "logText": "Bike Lock Grade: Store the bike inside when possible met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What are you protecting?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Paying more for protection can be wise, but habits also matter."
  },
  {
    "id": "ctx-glass-calculator-buy-borrow",
    "title": "Calculator Buy Borrow",
    "prompt": "A used calculator costs $65, borrowing from school is free but limited, and renting costs $8 per month.",
    "topics": [
      "credit",
      "budgeting"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy used",
        "description": "You own a tool for multiple years. Asset gained; cash drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 65
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -65
              }
            ],
            "feedback": "Owning can help if you need it often.",
            "explanation": "Owning can help if you need it often.",
            "logText": "Calculator Buy Borrow: Buy used"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow from school",
        "description": "No cost, but limited access. Cash protected; opportunity depends on schedule.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -65
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Community resources reduce cost but may have rules.",
            "explanation": "Community resources reduce cost but may have rules.",
            "logText": "Calculator Buy Borrow: Borrow from school"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Rent monthly",
        "description": "Flexible but can add up. Cash drops monthly.",
        "requirements": [
          {
            "type": "minCash",
            "value": 8
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -65
              }
            ],
            "feedback": "$8 × 10 months = $80, more than buying used.",
            "explanation": "$8 × 10 months = $80, more than buying used.",
            "logText": "Calculator Buy Borrow: Rent monthly"
          }
        ]
      }
    ],
    "reflectionPrompt": "How many months make buying cheaper?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing, renting, and buying each make sense under different access and time needs."
  },
  {
    "id": "ctx-glass-camp-seat-deposit",
    "title": "Camp Seat Deposit",
    "prompt": "A summer skills camp has a $40 deposit. It counts toward the total cost, but it is not refundable after May 1.",
    "topics": [
      "banking",
      "investing"
    ],
    "ageRange": {
      "min": 14,
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
        "label": "Pay now to hold the seat",
        "description": "Seat secured; cash less flexible. Opportunity rises; cash drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 40
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
              }
            ],
            "feedback": "A nonrefundable deposit reduces future flexibility.",
            "explanation": "A nonrefundable deposit reduces future flexibility.",
            "logText": "Camp Seat Deposit: Pay now to hold the seat"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until schedule is clear",
        "description": "Cash stays flexible; seat may fill. Discipline rises; opportunity uncertain.",
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
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Waiting protects cash but risks the deadline.",
            "explanation": "Waiting protects cash but risks the deadline.",
            "logText": "Camp Seat Deposit: Wait until schedule is clear"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about aid or payment plan",
        "description": "More options may appear. Opportunity rises if available.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 40
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
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Asking can reveal choices that were not obvious.",
            "explanation": "Asking can reveal choices that were not obvious.",
            "logText": "Camp Seat Deposit: Ask about aid or payment plan"
          }
        ]
      }
    ],
    "reflectionPrompt": "How sure are you?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Holding a spot can be smart, but deposits are serious commitments."
  },
  {
    "id": "ctx-glass-campus-meal-pass",
    "title": "Campus Meal Pass",
    "prompt": "A fictional campus meal pass costs $1,200 for 100 meals. Buying meals as needed averages $10.50 each.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the pass if you will use 100 meals",
        "description": "$12 per meal, predictable. Cash committed; convenience rises.",
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
                "type": "cash",
                "amount": -1
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "$1,200 ÷ 100 = $12 per meal.",
            "explanation": "$1,200 ÷ 100 = $12 per meal.",
            "logText": "Campus Meal Pass: Buy the pass if you will use 100 meals"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay as needed",
        "description": "Lower commitment, possible lower total. Flexibility rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -1
              }
            ],
            "feedback": "At $10.50 each, 100 meals would cost $1,050.",
            "explanation": "At $10.50 each, 100 meals would cost $1,050.",
            "logText": "Campus Meal Pass: Pay as needed"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Mix grocery plan and occasional meals",
        "description": "More planning, lower cost. Discipline rises.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -1
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Mixed plans often fit real life better than extremes.",
            "explanation": "Mixed plans often fit real life better than extremes.",
            "logText": "Campus Meal Pass: Mix grocery plan and occasional meals"
          }
        ]
      }
    ],
    "reflectionPrompt": "How many meals will you really use?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A pass is convenient, but only a deal if usage matches."
  },
  {
    "id": "ctx-glass-caregiver-bill-vocab",
    "title": "Caregiver Bill Vocab",
    "prompt": "A fictional bill uses confusing words: balance, minimum due, due date, and service fee. A caregiver asks you to help read it.",
    "topics": [
      "budgeting",
      "money-values",
      "consumer-skills"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use Money Words to label each part",
        "description": "Understanding rises. Money Know-How and Trust rise.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 40
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
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Naming parts makes the document less scary.",
            "explanation": "Naming parts makes the document less scary.",
            "logText": "Caregiver Bill Vocab: Use Money Words to label each part"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess from the biggest number",
        "description": "Possible misunderstanding. Money Know-How risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "The biggest number is not always the amount due now.",
            "explanation": "The biggest number is not always the amount due now.",
            "logText": "Caregiver Bill Vocab: Guess from the biggest number"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor/official help source",
        "description": "Correct explanation. Safety rises.",
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
                "stat": "wellbeing",
                "amount": 3
              },
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
            "feedback": "Hard documents deserve trustworthy help.",
            "explanation": "Hard documents deserve trustworthy help.",
            "logText": "Caregiver Bill Vocab: Ask mentor/official help source"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which word mattered most?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Helping with money words builds confidence, but guessing can create costly mistakes."
  },
  {
    "id": "ctx-glass-caregiver-list-swap",
    "title": "Caregiver List Swap",
    "prompt": "A caregiver texts that one item on a grocery list is out of stock. The replacement costs 30% more.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Approve the replacement",
        "description": "Meal plan stays the same. Cash drops more; wellbeing steady.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A 30% increase on $5 is $1.50 more.",
            "explanation": "A 30% increase on $5 is $1.50 more.",
            "logText": "Caregiver List Swap: Approve the replacement"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose a cheaper substitute",
        "description": "Cost stays lower; plan changes. Money Know-How rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Substituting is a real consumer skill.",
            "explanation": "Substituting is a real consumer skill.",
            "logText": "Caregiver List Swap: Choose a cheaper substitute"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the caregiver for priorities",
        "description": "Better shared decision. Trust rises.",
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
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A quick question can prevent money and meal mistakes.",
            "explanation": "A quick question can prevent money and meal mistakes.",
            "logText": "Caregiver List Swap: Ask the caregiver for priorities"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was keeping the plan worth $1.50?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The “cheaper” choice may not meet the same need."
  },
  {
    "id": "ctx-glass-cert-retake-fee",
    "title": "Cert Retake Fee",
    "prompt": "A beginner certification exam costs $45. If you fail, a retake costs $25. Studying 6 more hours raises your chance of passing.",
    "topics": [
      "career",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Test now",
        "description": "Randomized pass/fail. Opportunity may rise; cash drops.",
        "requirements": [
          {
            "type": "minCash",
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
                "amount": -45
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Taking a chance saves time but may add a retake cost.",
            "explanation": "Taking a chance saves time but may add a retake cost.",
            "logText": "Cert Retake Fee: Test now"
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
            "logText": "Cert Retake Fee: Test now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Study 6 more hours first",
        "description": "Higher pass chance. Opportunity rises; time drops.",
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
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -45
              },
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
            "feedback": "Preparation can be cheaper than a retake.",
            "explanation": "Preparation can be cheaper than a retake.",
            "logText": "Cert Retake Fee: Study 6 more hours first"
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
            "logText": "Cert Retake Fee: Study 6 more hours first met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor for a practice test",
        "description": "Better information before paying. Money Know-How rises.",
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
                "type": "cash",
                "amount": -45
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Practice turns guessing into evidence.",
            "explanation": "Practice turns guessing into evidence.",
            "logText": "Cert Retake Fee: Ask mentor for a practice test"
          }
        ]
      }
    ],
    "reflectionPrompt": "What risk did you accept?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Testing early may be efficient, but preparation can reduce money risk."
  },
  {
    "id": "ctx-glass-cloud-storage-choice",
    "title": "Cloud Storage Choice",
    "prompt": "Your device is almost full. Cloud storage costs $2.99/month; a local drive costs $38 once.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay for cloud storage",
        "description": "Easy access, recurring cost. Convenience rises; cash drops monthly.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -3
              }
            ],
            "feedback": "$2.99 × 12 is about $35.88 per year.",
            "explanation": "$2.99 × 12 is about $35.88 per year.",
            "logText": "Cloud Storage Choice: Pay for cloud storage"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the local drive",
        "description": "One-time cost, needs care. Asset gained; cash drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 38
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -3
              }
            ],
            "feedback": "Owning storage shifts cost upfront.",
            "explanation": "Owning storage shifts cost upfront.",
            "logText": "Cloud Storage Choice: Buy the local drive"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Clean up files first",
        "description": "Free space, time cost. Discipline rises; cash protected.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "The cheapest fix may be organization.",
            "explanation": "The cheapest fix may be organization.",
            "logText": "Cloud Storage Choice: Clean up files first"
          }
        ]
      }
    ],
    "reflectionPrompt": "How long will you pay?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cloud convenience is real, but monthly charges add up."
  },
  {
    "id": "ctx-glass-club-supply-captain",
    "title": "Club Supply Captain",
    "prompt": "Your after-school club needs markers, tape, and poster board for a showcase. The group has $32, and the supply list totals $39 before tax. You volunteer to help make a plan.",
    "topics": [
      "budgeting",
      "money-values",
      "taxes"
    ],
    "ageRange": {
      "min": 12,
      "max": 14
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Trim the list",
        "description": "Buy the most needed items first. Money Know-How rises; opportunity stays steady.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A budget is a plan for limits, not a punishment.",
            "explanation": "A budget is a plan for limits, not a punishment.",
            "logText": "Club Supply Captain: Trim the list"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask each member for $1",
        "description": "Group covers the gap. Trust rises if you explain clearly.",
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
            "probability": 1,
            "effects": [
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
            "feedback": "Small shared costs need clear communication.",
            "explanation": "Small shared costs need clear communication.",
            "logText": "Club Supply Captain: Ask each member for $1"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay the extra yourself",
        "description": "The showcase is ready, but your cash drops. Opportunity rises; cash drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 8
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
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Generosity helps, but unplanned covering can become a habit.",
            "explanation": "Generosity helps, but unplanned covering can become a habit.",
            "logText": "Club Supply Captain: Pay the extra yourself"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which item mattered most?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Helping the group is valuable, but fairness and communication matter."
  },
  {
    "id": "ctx-glass-credit-limit-increase",
    "title": "Credit Limit Increase",
    "prompt": "Your simplified credit account limit rises from $500 to $800. Your balance is $120.",
    "topics": [
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Keep spending the same",
        "description": "Utilization drops from 24% to 15%. Credit score may improve.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$120 ÷ $500 = 24%; $120 ÷ $800 = 15%.",
            "explanation": "$120 ÷ $500 = 24%; $120 ÷ $800 = 15%.",
            "logText": "Credit Limit Increase: Keep spending the same"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend more because limit is higher",
        "description": "Balance rises. Debt risk rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A higher limit is not extra income.",
            "explanation": "A higher limit is not extra income.",
            "logText": "Credit Limit Increase: Spend more because limit is higher"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline increase for now",
        "description": "Less temptation, utilization unchanged. Discipline rises.",
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
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Avoiding temptation can be a valid strategy.",
            "explanation": "Avoiding temptation can be a valid strategy.",
            "logText": "Credit Limit Increase: Decline increase for now"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did the score improve without spending?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A higher limit can help or hurt depending on behavior."
  },
  {
    "id": "ctx-glass-deposit-photo-proof",
    "title": "Deposit Photo Proof",
    "prompt": "In an adult-planning scenario, you move into a small rental. Taking photos of existing damage takes 20 minutes.",
    "topics": [
      "banking",
      "budgeting"
    ],
    "ageRange": {
      "min": 17,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Take photos and save notes",
        "description": "Deposit dispute protection. Safety rises; time drops.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
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
              }
            ],
            "feedback": "Proof protects money you may need back later.",
            "explanation": "Proof protects money you may need back later.",
            "logText": "Deposit Photo Proof: Take photos and save notes"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip because the room looks fine",
        "description": "Randomized future deposit dispute. Cash risk rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "No proof can make old damage look new.",
            "explanation": "No proof can make old damage look new.",
            "logText": "Deposit Photo Proof: Skip because the room looks fine"
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
            "logText": "Deposit Photo Proof: Skip because the room looks fine met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Walk through with roommate/landlord",
        "description": "Shared record. Trust and Safety rise.",
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
            "probability": 1,
            "effects": [
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
            "feedback": "Shared notes reduce confusion later.",
            "explanation": "Shared notes reduce confusion later.",
            "logText": "Deposit Photo Proof: Walk through with roommate/landlord"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you document?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Documentation feels unnecessary until it becomes the only evidence."
  },
  {
    "id": "ctx-glass-digital-art-scope",
    "title": "Digital Art Scope",
    "prompt": "You make a digital logo for a club. You agreed to $18 for one version, but they ask for “just three tiny changes.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Do the changes for free",
        "description": "Client is happy; your time cost grows. Trust rises; cash per hour falls.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Free extras can build goodwill or train people to expect free labor.",
            "explanation": "Free extras can build goodwill or train people to expect free labor.",
            "logText": "Digital Art Scope: Do the changes for free"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Explain one free revision, then $5 each",
        "description": "Randomized client response. Opportunity may rise; confidence grows.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 45
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
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
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Clear terms protect both sides.",
            "explanation": "Clear terms protect both sides.",
            "logText": "Digital Art Scope: Explain one free revision, then $5 each"
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
            "logText": "Digital Art Scope: Explain one free revision, then $5 each met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to help write terms next time",
        "description": "Future work is clearer. Opportunity and Discipline rise.",
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
                "stat": "discipline",
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
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A simple agreement can prevent awkward money talks.",
            "explanation": "A simple agreement can prevent awkward money talks.",
            "logText": "Digital Art Scope: Ask a mentor to help write terms next time"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was this generosity or underpricing?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Being flexible helps relationships, but unclear work can shrink profit."
  },
  {
    "id": "ctx-glass-diversification-shelf",
    "title": "Diversification Shelf",
    "prompt": "In a simplified simulation, you can put $90 into one project idea or split it across three different ideas.",
    "topics": [
      "investing",
      "budgeting"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Put all $90 in one idea",
        "description": "Bigger possible gain, bigger loss risk. Opportunity volatility rises.",
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
            "feedback": "One outcome controls everything.",
            "explanation": "One outcome controls everything.",
            "logText": "Diversification Shelf: Put all $90 in one idea"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split $30/$30/$30",
        "description": "Lower single-failure risk. Safety rises; upside steadier.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Diversification spreads risk.",
            "explanation": "Diversification spreads risk.",
            "logText": "Diversification Shelf: Split $30/$30/$30"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Put $60 in favorite, $15/$15 in others",
        "description": "Balanced confidence and spread. Mixed risk/reward.",
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
            "feedback": "Allocation shows priorities.",
            "explanation": "Allocation shows priorities.",
            "logText": "Diversification Shelf: Put $60 in favorite, $15/$15 in others"
          }
        ]
      }
    ],
    "reflectionPrompt": "What happens if that one fails?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Spreading lowers some risk but may reduce the biggest possible win."
  },
  {
    "id": "ctx-glass-emergency-ride-buffer",
    "title": "Emergency Ride Buffer",
    "prompt": "You rely on a regular ride to a weekend job. Once in a while, the ride falls through and a safe backup ride costs $14.",
    "topics": [
      "saving",
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "lifeStages": [
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Keep $28 as a backup ride buffer",
        "description": "Two emergency rides covered. Cash reserved; opportunity protected.",
        "requirements": [
          {
            "type": "minCash",
            "value": 28
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 28
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "A buffer is money with a job.",
            "explanation": "A buffer is money with a job.",
            "logText": "Emergency Ride Buffer: Keep $28 as a backup ride buffer"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hope the ride works out",
        "description": "Randomized missed shift risk. Cash free now; opportunity may drop.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -14
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "No plan can work when luck is good, but risk stays.",
            "explanation": "No plan can work when luck is good, but risk stays.",
            "logText": "Emergency Ride Buffer: Hope the ride works out"
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
            "logText": "Emergency Ride Buffer: Hope the ride works out met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor/caregiver to plan a backup list",
        "description": "More options, less cash pressure. Trust and Safety rise.",
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
                "type": "cash",
                "amount": -14
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Support can reduce risk without replacing planning.",
            "explanation": "Support can reduce risk without replacing planning.",
            "logText": "Emergency Ride Buffer: Ask a mentor/caregiver to plan a backup list"
          }
        ]
      }
    ],
    "reflectionPrompt": "What job did this money get?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Reserving cash can feel limiting until it protects income."
  },
  {
    "id": "ctx-glass-envelope-rename",
    "title": "Envelope Rename",
    "prompt": "You save better when money has a name. Your savings app lets you label folders like “Laptop Repair,” “Trip Snacks,” or “Emergency.",
    "topics": [
      "saving",
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Create a repair folder",
        "description": "Future maintenance feels planned. Discipline rises.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
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
              }
            ],
            "feedback": "Named money is harder to spend by accident.",
            "explanation": "Named money is harder to spend by accident.",
            "logText": "Envelope Rename: Create a repair folder"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Create a fun folder",
        "description": "Joy spending becomes planned. Wellbeing rises; cash reserved.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Planned fun is still responsible money use.",
            "explanation": "Planned fun is still responsible money use.",
            "logText": "Envelope Rename: Create a fun folder"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep one general savings pile",
        "description": "Simple, but goals blur. Less management; lower goal clarity.",
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
            "feedback": "Simple systems work if you still know the purpose.",
            "explanation": "Simple systems work if you still know the purpose.",
            "logText": "Envelope Rename: Keep one general savings pile"
          }
        ]
      }
    ],
    "reflectionPrompt": "What future problem did you name?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "More folders add clarity but also more tracking."
  },
  {
    "id": "ctx-glass-fair-qr-confirm",
    "title": "Fair Qr Confirm",
    "prompt": "A booth at a school-safe community fair has a QR code for payment. Another sticker is partly covering the original code.",
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
        "label": "Ask the booth helper to confirm the code",
        "description": "Safer payment. Safety rises.",
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
              }
            ],
            "feedback": "Checking the recipient before paying is a strong habit.",
            "explanation": "Checking the recipient before paying is a strong habit.",
            "logText": "Fair Qr Confirm: Ask the booth helper to confirm the code"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Scan and pay quickly",
        "description": "Randomized: normal payment or wrong recipient warning. Safety may drop.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "Fast payment can skip important checks.",
            "explanation": "Fast payment can skip important checks.",
            "logText": "Fair Qr Confirm: Scan and pay quickly"
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
            "logText": "Fair Qr Confirm: Scan and pay quickly met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use cash or skip",
        "description": "Avoids QR risk. Cash drops or purchase skipped.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              }
            ],
            "feedback": "Different payment methods carry different risks.",
            "explanation": "Different payment methods carry different risks.",
            "logText": "Fair Qr Confirm: Use cash or skip"
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
            "logText": "Fair Qr Confirm: Use cash or skip met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What detail did you verify?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Digital payment is convenient, but convenience should not erase safety checks."
  },
  {
    "id": "ctx-glass-fake-investing-chat",
    "title": "Fake Investing Chat",
    "prompt": "A private chat claims members are “guaranteed” to beat the market if they join today. They show screenshots of huge gains.",
    "topics": [
      "investing"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Leave and report/block",
        "description": "Safety protected. Safety rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Guaranteed investing claims are a serious warning sign.",
            "explanation": "Guaranteed investing claims are a serious warning sign.",
            "logText": "Fake Investing Chat: Leave and report/block"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Watch quietly for proof",
        "description": "Randomized pressure messages appear. Safety risk remains.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              }
            ],
            "feedback": "Scammers often use screenshots and urgency.",
            "explanation": "Scammers often use screenshots and urgency.",
            "logText": "Fake Investing Chat: Watch quietly for proof"
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
            "logText": "Fake Investing Chat: Watch quietly for proof met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted mentor/official source",
        "description": "Source-check habit improves. Money Know-How rises.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              },
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Good advice can survive being checked.",
            "explanation": "Good advice can survive being checked.",
            "logText": "Fake Investing Chat: Ask a trusted mentor/official source"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which word was the red flag?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Curiosity is normal, but pressure and guarantees should stop the action."
  },
  {
    "id": "ctx-glass-family-plan-audit",
    "title": "Family Plan Audit",
    "prompt": "A fictional family tech plan has one unused add-on costing $6/month. Removing it saves money but one person worries they might need it later.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Remove the add-on",
        "description": "Saves $72/year. Cash improves; trust depends on communication.",
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
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "$6 × 12 = $72 per year.",
            "explanation": "$6 × 12 = $72 per year.",
            "logText": "Family Plan Audit: Remove the add-on"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it for one more month and review",
        "description": "Buys time, costs $6. Trust steady; cash drops slightly.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -6
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A review date can prevent endless delay.",
            "explanation": "A review date can prevent endless delay.",
            "logText": "Family Plan Audit: Keep it for one more month and review"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Replace with a cheaper option",
        "description": "Partial savings. Cash improves; convenience may drop.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 40
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Right-sizing often beats all-or-nothing.",
            "explanation": "Right-sizing often beats all-or-nothing.",
            "logText": "Family Plan Audit: Replace with a cheaper option"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did you include everyone affected?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cutting costs affects people; good budgeting includes communication."
  },
  {
    "id": "ctx-glass-find-device-first",
    "title": "Find Device First",
    "prompt": "Your tablet is missing. Replacing it costs $180, but a find-my-device feature may locate it if enabled.",
    "topics": [
      "money-values"
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
        "label": "Try locate and lock features",
        "description": "Randomized recovery. Safety rises; asset may return.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -180
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Security tools can protect both data and property.",
            "explanation": "Security tools can protect both data and property.",
            "logText": "Find Device First: Try locate and lock features"
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
            "logText": "Find Device First: Try locate and lock features met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Search manually first",
        "description": "Takes time, possible recovery. Discipline rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -180
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Not every missing item needs immediate replacement.",
            "explanation": "Not every missing item needs immediate replacement.",
            "logText": "Find Device First: Search manually first"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Replace immediately",
        "description": "Fast solution, high cost. Cash drops; asset restored.",
        "requirements": [
          {
            "type": "minCash",
            "value": 180
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -180
              }
            ],
            "feedback": "Fast fixes can be expensive.",
            "explanation": "Fast fixes can be expensive.",
            "logText": "Find Device First: Replace immediately"
          }
        ]
      }
    ],
    "reflectionPrompt": "What setup helped now?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Replacement solves the problem quickly but may skip cheaper recovery."
  },
  {
    "id": "ctx-glass-freezer-space-split",
    "title": "Freezer Space Split",
    "prompt": "A bulk pack saves $6 compared with smaller packs, but your freezer space is limited. A caregiver says some may go bad if it cannot fit.",
    "topics": [
      "budgeting",
      "money-values"
    ],
    "ageRange": {
      "min": 14,
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
        "label": "Buy bulk anyway",
        "description": "Randomized waste if space is too small. Cash may be wasted.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A low unit price loses if food spoils.",
            "explanation": "A low unit price loses if food spoils.",
            "logText": "Freezer Space Split: Buy bulk anyway"
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
            "logText": "Freezer Space Split: Buy bulk anyway met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy smaller pack",
        "description": "Higher unit price, lower waste risk. Cash drops less now.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Sometimes the smaller package is the better total plan.",
            "explanation": "Sometimes the smaller package is the better total plan.",
            "logText": "Freezer Space Split: Buy smaller pack"
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
            "logText": "Freezer Space Split: Buy smaller pack met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split bulk with family/friend",
        "description": "Savings with less storage risk. Trust rises; coordination needed.",
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
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Sharing can turn a bad-fit deal into a good-fit deal.",
            "explanation": "Sharing can turn a bad-fit deal into a good-fit deal.",
            "logText": "Freezer Space Split: Split bulk with family/friend"
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
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
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
            "logText": "Freezer Space Split: Split bulk with family/friend met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What condition made the deal work?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Unit savings are not real savings if the extra cannot be used."
  },
  {
    "id": "ctx-glass-friend-no-spend-check",
    "title": "Friend No Spend Check",
    "prompt": "A friend wants to try a one-week “no unnecessary spending” challenge. You are interested but do not want it to feel strict or judgy.",
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
        "label": "Join with kind rules",
        "description": "Habit support. Discipline rises; trust rises.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A challenge works better when it allows needs and joy.",
            "explanation": "A challenge works better when it allows needs and joy.",
            "logText": "Friend No Spend Check: Join with kind rules"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline but choose one personal limit",
        "description": "Smaller habit. Discipline rises slightly.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "You can use the idea without copying the whole challenge.",
            "explanation": "You can use the idea without copying the whole challenge.",
            "logText": "Friend No Spend Check: Decline but choose one personal limit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn it into a competition",
        "description": "Motivation rises, shame risk. Discipline may rise; wellbeing may drop.",
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
                "stat": "discipline",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Competition can motivate or pressure.",
            "explanation": "Competition can motivate or pressure.",
            "logText": "Friend No Spend Check: Turn it into a competition"
          }
        ]
      }
    ],
    "reflectionPrompt": "What rule kept it kind?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Challenges should build awareness, not shame."
  },
  {
    "id": "ctx-glass-group-fund-treasurer",
    "title": "Group Fund Treasurer",
    "prompt": "Your class group collects $3 from each of 18 students for a project activity. You help track the total.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use a simple list and total",
        "description": "$54 tracked clearly. Trust and Discipline rise.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "18 × $3 = $54; records protect everyone.",
            "explanation": "18 × $3 = $54; records protect everyone.",
            "logText": "Group Fund Treasurer: Use a simple list and total"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep the total in your head",
        "description": "Less effort, higher mistake risk. Discipline drops.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Memory is not a record.",
            "explanation": "Memory is not a record.",
            "logText": "Group Fund Treasurer: Keep the total in your head"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a teacher/mentor to verify the count",
        "description": "Shared accountability. Safety rises.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Verification protects the person handling money.",
            "explanation": "Verification protects the person handling money.",
            "logText": "Group Fund Treasurer: Ask a teacher/mentor to verify the count"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did the list build trust?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Records may feel formal, but shared money needs clarity."
  },
  {
    "id": "ctx-glass-ink-auto-refill",
    "title": "Ink Auto Refill",
    "prompt": "A printer ink service offers automatic refills for $7/month. Buying ink only when needed costs about $22 every four months.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
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
        "label": "Use auto-refill",
        "description": "Predictable monthly cost. Convenience rises; recurring cost begins.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -7
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "$7 × 12 = $84 per year.",
            "explanation": "$7 × 12 = $84 per year.",
            "logText": "Ink Auto Refill: Use auto-refill"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy only when needed",
        "description": "Less predictable, possibly cheaper. Cash varies; Discipline needed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -22
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Pay-as-needed works if you remember before running out.",
            "explanation": "Pay-as-needed works if you remember before running out.",
            "logText": "Ink Auto Refill: Buy only when needed"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Print less and use school/library resources when allowed",
        "description": "Lower cost, more planning. Cash protected; schedule flexibility drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -22
              }
            ],
            "feedback": "Using resources can save money but costs coordination.",
            "explanation": "Using resources can save money but costs coordination.",
            "logText": "Ink Auto Refill: Print less and use school/library resources when allowed"
          }
        ]
      }
    ],
    "reflectionPrompt": "How much would pay-as-needed cost?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Automation saves attention but can quietly cost more."
  },
  {
    "id": "ctx-glass-jersey-order-minimum",
    "title": "Jersey Order Minimum",
    "prompt": "A custom hoodie order only gets the lower price if 20 people join. At 17 orders, the price is $31; at 20 orders, it drops to $26.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Encourage three more people",
        "description": "Everyone may save $5. Opportunity and trust rise if honest.",
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
            "probability": 1,
            "effects": [
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Group buying works best when nobody feels pressured.",
            "explanation": "Group buying works best when nobody feels pressured.",
            "logText": "Jersey Order Minimum: Encourage three more people"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $31 and stop recruiting",
        "description": "Higher price, less pressure. Cash drops more; wellbeing steady.",
        "requirements": [
          {
            "type": "minCash",
            "value": 31
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -31
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Avoiding pressure can be worth the extra cost.",
            "explanation": "Avoiding pressure can be worth the extra cost.",
            "logText": "Jersey Order Minimum: Pay $31 and stop recruiting"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the hoodie",
        "description": "Cash stays available. Discipline rises; social connection may dip.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Belonging can matter, but so does your budget.",
            "explanation": "Belonging can matter, but so does your budget.",
            "logText": "Jersey Order Minimum: Skip the hoodie"
          }
        ]
      }
    ],
    "reflectionPrompt": "How can you invite without pushing?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The lowest price is not always the lowest social cost."
  },
  {
    "id": "ctx-glass-laundry-cash-plan",
    "title": "Laundry Cash Plan",
    "prompt": "Laundry costs $2.25 to wash and $1.75 to dry. You do laundry once a week.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Budget $4/week",
        "description": "Simple weekly plan. Discipline rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "$2.25 + $1.75 = $4; about $16 per month.",
            "explanation": "$2.25 + $1.75 = $4; about $16 per month.",
            "logText": "Laundry Cash Plan: Budget $4/week"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait and pay when needed",
        "description": "Less tracking, possible cash scramble. Convenience rises; risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -2
              }
            ],
            "feedback": "Predictable costs are easier when named.",
            "explanation": "Predictable costs are easier when named.",
            "logText": "Laundry Cash Plan: Wait and pay when needed"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Share loads when appropriate",
        "description": "Lower cost if fair and practical. Trust and cash improve.",
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
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -2
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
            "feedback": "Sharing saves money only with clear rules.",
            "explanation": "Sharing saves money only with clear rules.",
            "logText": "Laundry Cash Plan: Share loads when appropriate"
          }
        ]
      }
    ],
    "reflectionPrompt": "What month has five laundry weeks?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Small adult costs are easy to ignore until they repeat."
  },
  {
    "id": "ctx-glass-locker-key-deposit",
    "title": "Locker Key Deposit",
    "prompt": "A school program offers a supply locker key with a $10 refundable hold. You get the money back if the key returns by Friday.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 12,
      "max": 14
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Take the key and set a reminder",
        "description": "Easier access to supplies. Cash temporarily unavailable; Discipline rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Refundable money is still not spendable until it returns.",
            "explanation": "Refundable money is still not spendable until it returns.",
            "logText": "Locker Key Deposit: Take the key and set a reminder"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask to share with a partner",
        "description": "You split responsibility. Trust can rise; schedule coordination needed.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "trustSafety",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Sharing lowers burden but adds communication.",
            "explanation": "Sharing lowers burden but adds communication.",
            "logText": "Locker Key Deposit: Ask to share with a partner"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the key",
        "description": "Cash stays available; supply access is less convenient. Safety steady; opportunity slightly lower.",
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Avoiding a deposit can be reasonable if cash is tight.",
            "explanation": "Avoiding a deposit can be reasonable if cash is tight.",
            "logText": "Locker Key Deposit: Skip the key"
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a hold different from a price?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Free-to-use resources can still create timing pressure."
  },
  {
    "id": "ctx-glass-lost-receipt-return",
    "title": "Lost Receipt Return",
    "prompt": "You bought a backpack insert that does not fit. The store may accept a return, but your receipt is missing.",
    "topics": [
      "consumer-skills"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Search email/app records",
        "description": "Proof may be found. Safety and Discipline rise.",
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Digital records can rescue a return.",
            "explanation": "Digital records can rescue a return.",
            "logText": "Lost Receipt Return: Search email/app records"
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
            "logText": "Lost Receipt Return: Search email/app records met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Try returning without proof",
        "description": "Randomized: store credit, denial, or partial refund. Cash outcome varies.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Without proof, your options depend on policy.",
            "explanation": "Without proof, your options depend on policy.",
            "logText": "Lost Receipt Return: Try returning without proof"
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
            "logText": "Lost Receipt Return: Try returning without proof met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it and repurpose it",
        "description": "No refund, but some usefulness. Cash unchanged; wellbeing may rise.",
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
            "feedback": "A mistake can sometimes be turned into partial value.",
            "explanation": "A mistake can sometimes be turned into partial value.",
            "logText": "Lost Receipt Return: Keep it and repurpose it"
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
            "logText": "Lost Receipt Return: Keep it and repurpose it met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Where should proof live next time?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Chasing a refund takes time; keeping a usable item may be reasonable."
  },
  {
    "id": "ctx-glass-meal-prep-container",
    "title": "Meal Prep Container",
    "prompt": "A set of reusable food containers costs $16. Buying convenience lunches costs about $5 more each time than packing food.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the containers",
        "description": "Break-even after about 4 packed lunches. Cash drops; future costs fall.",
        "requirements": [
          {
            "type": "minCash",
            "value": 16
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -16
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "$16 ÷ $5 savings ≈ 4 uses.",
            "explanation": "$16 ÷ $5 savings ≈ 4 uses.",
            "logText": "Meal Prep Container: Buy the containers"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep buying convenience lunch",
        "description": "More flexibility, higher cost. Cash drops over time; wellbeing may rise from convenience.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -16
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Convenience has value, but it repeats.",
            "explanation": "Convenience has value, but it repeats.",
            "logText": "Meal Prep Container: Keep buying convenience lunch"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pack only twice a week",
        "description": "Balanced savings and flexibility. Discipline rises moderately.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -16
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Partial habits can still save money.",
            "explanation": "Partial habits can still save money.",
            "logText": "Meal Prep Container: Pack only twice a week"
          }
        ]
      }
    ],
    "reflectionPrompt": "Will the habit stick?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The math works only if the behavior follows."
  },
  {
    "id": "ctx-glass-medical-estimate-call",
    "title": "Medical Estimate Call",
    "prompt": "In an adult-planning scenario, a non-urgent visit may cost different amounts depending on network and deductible.",
    "topics": [
      "money-values",
      "banking"
    ],
    "ageRange": {
      "min": 17,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Ask for an estimate first",
        "description": "Cost range becomes clearer. Money Know-How rises.",
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
            "feedback": "An estimate is not a promise, but it reduces surprise.",
            "explanation": "An estimate is not a promise, but it reduces surprise.",
            "logText": "Medical Estimate Call: Ask for an estimate first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Go without checking",
        "description": "Faster care planning, surprise bill risk. Wellbeing may rise; cash risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Care matters, but cost questions can be part of planning.",
            "explanation": "Care matters, but cost questions can be part of planning.",
            "logText": "Medical Estimate Call: Go without checking"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult/mentor to help read benefits",
        "description": "Better understanding. Safety rises.",
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
            "feedback": "Insurance language can be hard; asking is smart.",
            "explanation": "Insurance language can be hard; asking is smart.",
            "logText": "Medical Estimate Call: Ask a trusted adult/mentor to help read benefits"
          }
        ]
      }
    ],
    "reflectionPrompt": "What number was still uncertain?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cost planning should not block needed care, but it can reduce avoidable surprises."
  },
  {
    "id": "ctx-glass-mentor-resume-proofread",
    "title": "Mentor Resume Proofread",
    "prompt": "You want to apply for a teen job or volunteer role. A mentor offers to review your resume, but you need to send it two days before the deadline.",
    "topics": [
      "career",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Send it early for feedback",
        "description": "Resume improves. Opportunity rises; Discipline rises.",
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
                "stat": "discipline",
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
            "feedback": "Help works best when you leave time to use it.",
            "explanation": "Help works best when you leave time to use it.",
            "logText": "Mentor Resume Proofread: Send it early for feedback"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Submit it yourself at the last minute",
        "description": "Faster, but fewer improvements. Opportunity may stay lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Independence is useful, but deadlines reduce options.",
            "explanation": "Independence is useful, but deadlines reduce options.",
            "logText": "Mentor Resume Proofread: Submit it yourself at the last minute"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask for a quick text review",
        "description": "Some help, less depth. Opportunity rises slightly.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "trustSafety",
            "value": 50
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
            "feedback": "A smaller ask may fit a tight timeline.",
            "explanation": "A smaller ask may fit a tight timeline.",
            "logText": "Mentor Resume Proofread: Ask for a quick text review"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did early action unlock?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Getting feedback takes time, but it can raise future options."
  },
  {
    "id": "ctx-glass-mock-interview-choice",
    "title": "Mock Interview Choice",
    "prompt": "A mentor offers a 20-minute practice interview. You feel awkward practicing, but the real interview is next week.",
    "topics": [
      "career"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Practice with mentor",
        "description": "Randomized confidence boost. Opportunity rises; wellbeing may dip then recover.",
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
            "probability": 0.72,
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
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Practice makes the real moment less new.",
            "explanation": "Practice makes the real moment less new.",
            "logText": "Mock Interview Choice: Practice with mentor"
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
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Mock Interview Choice: Practice with mentor met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Practice alone",
        "description": "Some preparation. Discipline rises.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Solo practice helps, but feedback catches blind spots.",
            "explanation": "Solo practice helps, but feedback catches blind spots.",
            "logText": "Mock Interview Choice: Practice alone"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip practice",
        "description": "Saves time, more uncertainty. Wellbeing may stay; opportunity risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Avoiding awkward practice can make the real thing harder.",
            "explanation": "Avoiding awkward practice can make the real thing harder.",
            "logText": "Mock Interview Choice: Skip practice"
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
            "logText": "Mock Interview Choice: Skip practice met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which answer improved?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Practice costs comfort now to reduce risk later."
  },
  {
    "id": "ctx-glass-net-worth-not-worth",
    "title": "Net Worth Not Worth",
    "prompt": "Your run ends with assets, debts, habits, support, and one big lesson. The game asks you to read net worth as a money snapshot, not a measure of who your character is.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate assets minus debts",
        "description": "Net worth shown. Money Know-How rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Net worth = assets − debts.",
            "explanation": "Net worth = assets − debts.",
            "logText": "Net Worth Not Worth: Calculate assets minus debts"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Compare habits, not just money",
        "description": "ReflectionFlags ≥ 5. Values report appears. Wellbeing and Money Know-How rise.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
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
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Habits explain direction better than one number.",
            "explanation": "Habits explain direction better than one number.",
            "logText": "Net Worth Not Worth: Compare habits, not just money"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor/support circle for one next-step goal",
        "description": "Recovery/growth goal appears. Opportunity rises.",
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
                "stat": "discipline",
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Support can help turn a snapshot into a plan.",
            "explanation": "Support can help turn a snapshot into a plan.",
            "logText": "Net Worth Not Worth: Ask mentor/support circle for one next-step goal"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does this number show?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Net worth is useful information, but it must never become self-worth."
  },
  {
    "id": "ctx-glass-nickname-payment-risk",
    "title": "Nickname Payment Risk",
    "prompt": "You owe a friend named Jordan $9. The app shows two Jordans with similar icons.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Confirm the username before sending",
        "description": "Payment goes to correct person. Safety rises.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Recipient checks prevent expensive awkwardness.",
            "explanation": "Recipient checks prevent expensive awkwardness.",
            "logText": "Nickname Payment Risk: Confirm the username before sending"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Send to the first Jordan",
        "description": "Randomized wrong-recipient problem. Cash risk; trust strain.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Names alone are not enough.",
            "explanation": "Names alone are not enough.",
            "logText": "Nickname Payment Risk: Send to the first Jordan"
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
            "logText": "Nickname Payment Risk: Send to the first Jordan met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask friend to send a request",
        "description": "Lower wrong-person risk. Trust and Safety rise.",
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
            "feedback": "Letting the recipient request can reduce mistakes.",
            "explanation": "Letting the recipient request can reduce mistakes.",
            "logText": "Nickname Payment Risk: Ask friend to send a request"
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
            "logText": "Nickname Payment Risk: Ask friend to send a request met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What detail confirmed it?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "A few seconds of checking can prevent a hard-to-reverse mistake."
  },
  {
    "id": "ctx-glass-overtime-study-balance",
    "title": "Overtime Study Balance",
    "prompt": "You can work 4 extra hours at $15/hour during exam week. You need study time too.",
    "topics": [
      "career",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Work all 4 hours",
        "description": "$60 gross added. Cash rises; wellbeing and study time drop.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "wellbeing",
            "value": 50
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Gross pay is not the same as take-home pay.",
            "explanation": "Gross pay is not the same as take-home pay.",
            "logText": "Overtime Study Balance: Work all 4 hours"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Work 2 hours",
        "description": "$30 gross added, more study time. Balanced outcome.",
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
            "feedback": "A partial yes can be a strong choice.",
            "explanation": "A partial yes can be a strong choice.",
            "logText": "Overtime Study Balance: Work 2 hours"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline overtime",
        "description": "Protects study and rest. Wellbeing rises; cash unchanged.",
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
            "feedback": "Not earning extra can protect future opportunity.",
            "explanation": "Not earning extra can protect future opportunity.",
            "logText": "Overtime Study Balance: Decline overtime"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did extra pay cost?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Extra income is useful, but not free if it harms school or health."
  },
  {
    "id": "ctx-glass-paid-training-travel",
    "title": "Paid Training Travel",
    "prompt": "A paid training program offers $80 per day, but travel costs $11 per day and takes 90 minutes. A closer unpaid workshop has no travel cost.",
    "topics": [
      "life-after-high-school",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Take paid training",
        "description": "Net is $69/day before food/time. Cash rises; wellbeing may drop.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -11
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$80 − $11 = $69, but time also matters.",
            "explanation": "$80 − $11 = $69, but time also matters.",
            "logText": "Paid Training Travel: Take paid training"
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
            "logText": "Paid Training Travel: Take paid training met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose closer workshop",
        "description": "No pay, less strain. Opportunity rises; cash unchanged.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -11
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Unpaid can still build skill if the cost is low.",
            "explanation": "Unpaid can still build skill if the cost is low.",
            "logText": "Paid Training Travel: Choose closer workshop"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about travel stipend",
        "description": "Randomized support. Opportunity may rise.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 40
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -11
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
            "feedback": "Questions can reveal hidden supports.",
            "explanation": "Questions can reveal hidden supports.",
            "logText": "Paid Training Travel: Ask about travel stipend"
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
            "logText": "Paid Training Travel: Ask about travel stipend met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the wage not show?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Paid is not automatically better if costs and time are high."
  },
  {
    "id": "ctx-glass-pathway-benefits-source",
    "title": "Pathway Benefits Source",
    "prompt": "A classmate shares a claim about a post-high-school pathway benefit. The post has no official link and leaves out requirements.",
    "topics": [
      "scams"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Check an official or school source",
        "description": "Accurate requirements found. Money Know-How and Safety rise.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
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
              }
            ],
            "feedback": "Benefits often have rules, deadlines, or service requirements.",
            "explanation": "Benefits often have rules, deadlines, or service requirements.",
            "logText": "Pathway Benefits Source: Check an official or school source"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Trust the post",
        "description": "Randomized: mostly true, incomplete, or misleading. Opportunity risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              }
            ],
            "feedback": "A true-sounding claim can still be incomplete.",
            "explanation": "A true-sounding claim can still be incomplete.",
            "logText": "Pathway Benefits Source: Trust the post"
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
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Pathway Benefits Source: Trust the post met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a counselor/mentor to compare options",
        "description": "Neutral pathway comparison. Opportunity rises.",
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
            "feedback": "Pathway decisions deserve careful source checks.",
            "explanation": "Pathway decisions deserve careful source checks.",
            "logText": "Pathway Benefits Source: Ask a counselor/mentor to compare options"
          }
        ]
      }
    ],
    "reflectionPrompt": "What requirement was missing?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Pathway benefits can be real but still misunderstood if requirements are ignored."
  },
  {
    "id": "ctx-glass-payment-privacy-settings",
    "title": "Payment Privacy Settings",
    "prompt": "A payment app has a social feed showing who paid whom. Your settings are public by default.",
    "topics": [
      "scams"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Set payments private",
        "description": "Less oversharing. Safety rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Money activity does not need an audience.",
            "explanation": "Money activity does not need an audience.",
            "logText": "Payment Privacy Settings: Set payments private"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave public because friends do",
        "description": "Convenience/no change, privacy risk. Safety slightly drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Defaults may not match your privacy needs.",
            "explanation": "Defaults may not match your privacy needs.",
            "logText": "Payment Privacy Settings: Leave public because friends do"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Review all app privacy settings",
        "description": "Better safety routine. Safety and Discipline rise.",
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
              }
            ],
            "feedback": "One setting check can reveal several risks.",
            "explanation": "One setting check can reveal several risks.",
            "logText": "Payment Privacy Settings: Review all app privacy settings"
          }
        ]
      }
    ],
    "reflectionPrompt": "What should stay private?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Social features can be fun, but money privacy protects students."
  },
  {
    "id": "ctx-glass-paystub-hours-error",
    "title": "Paystub Hours Error",
    "prompt": "Your pay stub lists 9.5 hours, but your notes say you worked 10 hours at $13/hour.",
    "topics": [
      "taxes",
      "career",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Check records and ask politely",
        "description": "Randomized correction or explanation. Money Know-How rises; trust may rise.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -9
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "0.5 hour × $13 = $6.50 before deductions.",
            "explanation": "0.5 hour × $13 = $6.50 before deductions.",
            "logText": "Paystub Hours Error: Check records and ask politely"
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
            "logText": "Paystub Hours Error: Check records and ask politely met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it because it is small",
        "description": "No conflict, but possible lost pay. Cash lower; Discipline lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -9
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "Small errors can repeat.",
            "explanation": "Small errors can repeat.",
            "logText": "Paystub Hours Error: Ignore it because it is small"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to practice the wording",
        "description": "Confidence rises. Opportunity and Safety rise.",
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
                "type": "cash",
                "amount": -9
              },
              {
                "type": "stat",
                "stat": "wellbeing",
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
            "feedback": "Polite money questions are workplace skills.",
            "explanation": "Polite money questions are workplace skills.",
            "logText": "Paystub Hours Error: Ask a mentor to practice the wording"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did records matter?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Speaking up can feel awkward, but records make it fair and professional."
  },
  {
    "id": "ctx-glass-pending-transfer-delay",
    "title": "Pending Transfer Delay",
    "prompt": "You move $50 from savings to checking, but the app says it may be available tomorrow. A $42 payment is scheduled tonight.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Move the payment date if possible",
        "description": "Timing risk falls. Safety rises; Discipline rises.",
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Cash flow is about when money arrives, not only how much.",
            "explanation": "Cash flow is about when money arrives, not only how much.",
            "logText": "Pending Transfer Delay: Move the payment date if possible"
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
            "logText": "Pending Transfer Delay: Move the payment date if possible met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume the transfer will clear",
        "description": "Randomized timing; fee risk. Cash may drop from fee.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Pending is not the same as available.",
            "explanation": "Pending is not the same as available.",
            "logText": "Pending Transfer Delay: Assume the transfer will clear"
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
            "logText": "Pending Transfer Delay: Assume the transfer will clear met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a small checking buffer next time",
        "description": "Future timing safer. Cash reserved; Safety rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 10
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
              }
            ],
            "feedback": "A buffer makes timing less fragile.",
            "explanation": "A buffer makes timing less fragile.",
            "logText": "Pending Transfer Delay: Use a small checking buffer next time"
          }
        ]
      }
    ],
    "reflectionPrompt": "What date mattered most?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Transfers solve amount problems, but not always timing problems."
  },
  {
    "id": "ctx-glass-pet-food-price-plan",
    "title": "Pet Food Price Plan",
    "prompt": "Your pet’s food rises from $18 to $21 per bag. One bag lasts about 3 weeks.",
    "topics": [
      "money-values"
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
        "label": "Keep same food and adjust budget",
        "description": "Pet routine stable. Cash drops more; wellbeing steady.",
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
                "stat": "discipline",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "$3 more every 3 weeks is about $52 more per year.",
            "explanation": "$3 more every 3 weeks is about $52 more per year.",
            "logText": "Pet Food Price Plan: Keep same food and adjust budget"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask caregiver/vet-safe source about alternatives",
        "description": "Possible lower cost without harm. Money Know-How rises.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 35
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Pet savings should still protect pet health.",
            "explanation": "Pet savings should still protect pet health.",
            "logText": "Pet Food Price Plan: Ask caregiver/vet-safe source about alternatives"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy larger bag if storage works",
        "description": "Lower per-serving cost, higher upfront cost. Cash drops now; future cost lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Bulk works only if you can store and use it.",
            "explanation": "Bulk works only if you can store and use it.",
            "logText": "Pet Food Price Plan: Buy larger bag if storage works"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does recurring math matter?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Saving money on pet care should never ignore the pet’s wellbeing."
  },
  {
    "id": "ctx-glass-pet-sitting-quote",
    "title": "Pet Sitting Quote",
    "prompt": "A neighbor asks you to pet-sit for two days. You must price visits, travel time, and responsibility.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Charge $8 per visit, 4 visits",
        "description": "$32 revenue before travel/time. Cash rises; responsibility rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "4 × $8 = $32, but time is part of the job.",
            "explanation": "4 × $8 = $32, but time is part of the job.",
            "logText": "Pet Sitting Quote: Charge $8 per visit, 4 visits"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Charge a flat $40 with clear tasks",
        "description": "Randomized acceptance. Opportunity may rise.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 45
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "A clear quote helps both sides know the deal.",
            "explanation": "A clear quote helps both sides know the deal.",
            "logText": "Pet Sitting Quote: Charge a flat $40 with clear tasks"
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
            "logText": "Pet Sitting Quote: Charge a flat $40 with clear tasks met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor/caregiver to review safety and schedule",
        "description": "Safer plan. Safety rises.",
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
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Responsibility jobs need planning, not just pricing.",
            "explanation": "Responsibility jobs need planning, not just pricing.",
            "logText": "Pet Sitting Quote: Ask a mentor/caregiver to review safety and schedule"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the price include?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Higher pay must match clear expectations and safe logistics."
  },
  {
    "id": "ctx-glass-punch-card-maybe",
    "title": "Punch Card Maybe",
    "prompt": "A snack stand gives one free item after 8 purchases. You are at 6 stamps. Each snack costs $2.25.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 14
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy two more to earn the reward",
        "description": "You spend $4.50 to unlock one item. Cash drops; Want satisfaction rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 4
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -4
              }
            ],
            "feedback": "A reward is only a deal if you wanted the purchases anyway.",
            "explanation": "A reward is only a deal if you wanted the purchases anyway.",
            "logText": "Punch Card Maybe: Buy two more to earn the reward"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until you actually want snacks",
        "description": "No extra spending today. Discipline rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Delaying can protect cash from reward pressure.",
            "explanation": "Delaying can protect cash from reward pressure.",
            "logText": "Punch Card Maybe: Wait until you actually want snacks"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Give the card to a friend who is already buying",
        "description": "Friend benefits; you avoid spending. Trust rises; no cash cost.",
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
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -2
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
            "feedback": "Sometimes the best value is not chasing the reward yourself.",
            "explanation": "Sometimes the best value is not chasing the reward yourself.",
            "logText": "Punch Card Maybe: Give the card to a friend who is already buying"
          }
        ]
      }
    ],
    "reflectionPrompt": "Did the stamp card change your plan?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Rewards can be useful, but they can also make extra spending feel smart."
  },
  {
    "id": "ctx-glass-refill-bottle-break-even",
    "title": "Refill Bottle Break Even",
    "prompt": "A sturdy refill bottle costs $18. Disposable drinks cost $1.50 each. Your school has a refill station.",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 12,
      "max": 14
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the refill bottle",
        "description": "Break-even after 12 avoided drinks. Cash drops now; future spending drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 18
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              }
            ],
            "feedback": "$18 ÷ $1.50 = 12 uses before the bottle pays for itself.",
            "explanation": "$18 ÷ $1.50 = 12 uses before the bottle pays for itself.",
            "logText": "Refill Bottle Break Even: Buy the refill bottle"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep buying drinks",
        "description": "Lower upfront cost; higher long-run cost. Cash stays now; recurring cost continues.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              }
            ],
            "feedback": "Small repeat costs can pass a bigger one.",
            "explanation": "Small repeat costs can pass a bigger one.",
            "logText": "Refill Bottle Break Even: Keep buying drinks"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a cheaper bottle first",
        "description": "Lower upfront risk; less durable. Cash drops less; replacement risk remains.",
        "requirements": [
          {
            "type": "minCash",
            "value": 7
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -18
              }
            ],
            "feedback": "A lower-cost test can be smart before a bigger buy.",
            "explanation": "A lower-cost test can be smart before a bigger buy.",
            "logText": "Refill Bottle Break Even: Use a cheaper bottle first"
          }
        ]
      }
    ],
    "reflectionPrompt": "Will you use it enough?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Ownership saves money only if the item is actually used and cared for."
  },
  {
    "id": "ctx-glass-refund-or-dispute-route",
    "title": "Refund Or Dispute Route",
    "prompt": "An online order arrives damaged. You can contact the seller first, start a payment dispute, or give up.",
    "topics": [
      "investing",
      "banking",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Contact seller with photos",
        "description": "Randomized refund/replacement. Safety and Money Know-How rise.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Clear proof helps solve ordinary problems.",
            "explanation": "Clear proof helps solve ordinary problems.",
            "logText": "Refund Or Dispute Route: Contact seller with photos"
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
            "logText": "Refund Or Dispute Route: Contact seller with photos met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Start a dispute immediately",
        "description": "Stronger action, may take longer. Safety rises; time cost.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Disputes are useful, but usually after trying the direct route.",
            "explanation": "Disputes are useful, but usually after trying the direct route.",
            "logText": "Refund Or Dispute Route: Start a dispute immediately"
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
            "logText": "Refund Or Dispute Route: Start a dispute immediately met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep the damaged item",
        "description": "Saves time, loses value. Cash value drops.",
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
            "feedback": "Sometimes people give up because the process is tiring.",
            "explanation": "Sometimes people give up because the process is tiring.",
            "logText": "Refund Or Dispute Route: Keep the damaged item"
          }
        ]
      }
    ],
    "reflectionPrompt": "What evidence mattered?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Protecting your money takes effort; not every small loss is worth a long process."
  },
  {
    "id": "ctx-glass-repair-cafe-day",
    "title": "Repair Cafe Day",
    "prompt": "A community repair event may help fix your small desk fan for free. A new fan costs $26, but the event is only Saturday morning.",
    "topics": [
      "money-values"
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
        "label": "Go to the repair event",
        "description": "Randomized repair success. Cash protected; time used.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -26
              }
            ],
            "feedback": "Free help can still cost time and planning.",
            "explanation": "Free help can still cost time and planning.",
            "logText": "Repair Cafe Day: Go to the repair event"
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
            "logText": "Repair Cafe Day: Go to the repair event met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy a new fan",
        "description": "Fast replacement. Cash drops; wellbeing rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 26
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -26
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Replacing saves time when repair is uncertain.",
            "explanation": "Replacing saves time when repair is uncertain.",
            "logText": "Repair Cafe Day: Buy a new fan"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family/mentor about a temporary fix",
        "description": "Short-term solution. Trust rises; comfort partially restored.",
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
                "type": "cash",
                "amount": -26
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Temporary fixes can buy decision time.",
            "explanation": "Temporary fixes can buy decision time.",
            "logText": "Repair Cafe Day: Ask family/mentor about a temporary fix"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the resource usable?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Repair is not always faster, but it can protect cash and reduce waste."
  },
  {
    "id": "ctx-glass-return-window-calendar",
    "title": "Return Window Calendar",
    "prompt": "You buy a school-safe hobby item, but you will not know if it fits your project until next week. The return window is 14 days.",
    "topics": [
      "life-after-high-school",
      "consumer-skills"
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
        "label": "Set a check-by date on day 10",
        "description": "Return option protected. Discipline rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "A reminder keeps the window open.",
            "explanation": "A reminder keeps the window open.",
            "logText": "Return Window Calendar: Set a check-by date on day 10"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decide later without reminder",
        "description": "Randomized missed window. Cash risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Good intentions need systems.",
            "explanation": "Good intentions need systems.",
            "logText": "Return Window Calendar: Decide later without reminder"
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
            "logText": "Return Window Calendar: Decide later without reminder met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep packaging and receipt together",
        "description": "Return easier. Safety rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Proof plus condition protects choices.",
            "explanation": "Proof plus condition protects choices.",
            "logText": "Return Window Calendar: Keep packaging and receipt together"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why not wait until day 14?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "A return policy only helps if the student preserves time and proof."
  },
  {
    "id": "ctx-glass-robotics-kit-upgrade",
    "title": "Robotics Kit Upgrade",
    "prompt": "Your robotics team can buy a $28 sensor or save for a $75 arm kit. The sensor helps this month; the arm kit could unlock harder challenges later.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the sensor now",
        "description": "Immediate performance improves. Opportunity rises now; savings goal delayed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -28
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Short-term upgrades can be smart when a deadline is close.",
            "explanation": "Short-term upgrades can be smart when a deadline is close.",
            "logText": "Robotics Kit Upgrade: Buy the sensor now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save for the arm kit",
        "description": "Bigger future upgrade remains possible. Discipline rises; current score unchanged.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -28
              },
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
            "feedback": "Waiting keeps a future option open.",
            "explanation": "Waiting keeps a future option open.",
            "logText": "Robotics Kit Upgrade: Save for the arm kit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the mentor to match effort with funding",
        "description": "Mentor may offer a challenge goal. Opportunity rises if team follows through.",
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
                "type": "cash",
                "amount": -28
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
            "feedback": "Support often comes with responsibility.",
            "explanation": "Support often comes with responsibility.",
            "logText": "Robotics Kit Upgrade: Ask the mentor to match effort with funding"
          }
        ]
      }
    ],
    "reflectionPrompt": "What problem did you solve first?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The best choice depends on whether the team values current performance or future capability."
  },
  {
    "id": "ctx-glass-roundup-investing",
    "title": "Roundup Investing",
    "prompt": "A simplified investing tool rounds purchases up to the next dollar and invests the difference. Ten small purchases average $0.45 rounded up each.",
    "topics": [
      "investing"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Turn on round-ups",
        "description": "Small automatic investing begins. Investments rise slowly; cash drops slightly.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "10 × $0.45 = $4.50 invested.",
            "explanation": "10 × $0.45 = $4.50 invested.",
            "logText": "Roundup Investing: Turn on round-ups"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save round-ups instead of investing",
        "description": "Lower risk, more accessible. Savings rises.",
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
            "feedback": "Saving may fit short-term goals better than investing.",
            "explanation": "Saving may fit short-term goals better than investing.",
            "logText": "Roundup Investing: Save round-ups instead of investing"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip automation",
        "description": "Full control, more memory required. Discipline burden rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Manual systems work if you actually use them.",
            "explanation": "Manual systems work if you actually use them.",
            "logText": "Roundup Investing: Skip automation"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do small amounts matter over time?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Automation helps habits but should match time horizon and risk."
  },
  {
    "id": "ctx-glass-safe-copy-folder",
    "title": "Safe Copy Folder",
    "prompt": "In a future-planning activity, your character needs copies of important documents for a job or program. You must store them safely.",
    "topics": [
      "money-values",
      "budgeting"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Keep copies in a secure folder",
        "description": "Ready for applications. Safety and Opportunity rise.",
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Important documents should be protected, not scattered.",
            "explanation": "Important documents should be protected, not scattered.",
            "logText": "Safe Copy Folder: Keep copies in a secure folder"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save photos in a random album",
        "description": "Convenient but less secure. Safety risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              }
            ],
            "feedback": "Convenience can create privacy risk.",
            "explanation": "Convenience can create privacy risk.",
            "logText": "Safe Copy Folder: Save photos in a random album"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult/mentor how to store them",
        "description": "Better storage plan. Trust and Safety rise.",
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
            "feedback": "Sensitive documents deserve guidance.",
            "explanation": "Sensitive documents deserve guidance.",
            "logText": "Safe Copy Folder: Ask a trusted adult/mentor how to store them"
          }
        ]
      }
    ],
    "reflectionPrompt": "Who should have access?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Easy access and strong privacy need to be balanced."
  },
  {
    "id": "ctx-glass-school-store-inventory",
    "title": "School Store Inventory",
    "prompt": "Your class runs a tiny school-store simulation. Pencil packs cost $0.60 each and sell for $1. You can buy 20, 40, or 60 packs.",
    "topics": [
      "life-after-high-school",
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy 20 packs",
        "description": "Low risk, lower possible profit. Safety rises; profit capped.",
        "requirements": [
          {
            "type": "minCash",
            "value": 12
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "20 packs can earn up to $8 profit.",
            "explanation": "20 packs can earn up to $8 profit.",
            "logText": "School Store Inventory: Buy 20 packs"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "School Store Inventory: Buy 20 packs met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy 40 packs",
        "description": "Balanced risk. Opportunity rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 24
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -40
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
            "feedback": "40 packs can earn up to $16, but only if demand appears.",
            "explanation": "40 packs can earn up to $16, but only if demand appears.",
            "logText": "School Store Inventory: Buy 40 packs"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -40
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "School Store Inventory: Buy 40 packs met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy 60 packs",
        "description": "Randomized: high profit or leftover inventory. Risk rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 36
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              }
            ],
            "feedback": "Inventory ties up cash until it sells.",
            "explanation": "Inventory ties up cash until it sells.",
            "logText": "School Store Inventory: Buy 60 packs"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "School Store Inventory: Buy 60 packs met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might low inventory be smart?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "More inventory can earn more or leave cash stuck on the shelf."
  },
  {
    "id": "ctx-glass-shift-or-rest",
    "title": "Shift Or Rest",
    "prompt": "Your manager offers one extra shift before a big school project is due. You could earn more, but your energy is low.",
    "topics": [
      "career",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Take the shift",
        "description": "More income, less rest. Cash rises; wellbeing drops.",
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
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Earning more can still cost something.",
            "explanation": "Earning more can still cost something.",
            "logText": "Shift Or Rest: Take the shift"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline politely",
        "description": "Protects school and rest. Wellbeing rises; cash unchanged.",
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
            "feedback": "Saying no can protect future opportunity.",
            "explanation": "Saying no can protect future opportunity.",
            "logText": "Shift Or Rest: Decline politely"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a friend/mentor to help plan the week",
        "description": "Balanced schedule possible. Discipline rises.",
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
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Planning support can turn a hard choice into a schedule.",
            "explanation": "Planning support can turn a hard choice into a schedule.",
            "logText": "Shift Or Rest: Ask a friend/mentor to help plan the week"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the money trade with?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "More work is not always better if it damages school, health, or reliability."
  },
  {
    "id": "ctx-glass-skill-stack-plan",
    "title": "Skill Stack Plan",
    "prompt": "You plan to work after high school while building skills. You can take one free workshop, one paid certificate, or focus on work hours.",
    "topics": [
      "career",
      "life-after-high-school"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Free workshop",
        "description": "Low-cost skill building. Opportunity rises; time drops.",
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
            "feedback": "Free does not mean effortless.",
            "explanation": "Free does not mean effortless.",
            "logText": "Skill Stack Plan: Free workshop"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Paid certificate",
        "description": "Stronger signal, higher cost. Human capital asset rises; cash drops.",
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
            "feedback": "Credentials can be assets when employers value them.",
            "explanation": "Credentials can be assets when employers value them.",
            "logText": "Skill Stack Plan: Paid certificate"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Work more hours first",
        "description": "Cash builds; training delayed. Cash rises; opportunity delayed.",
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
            "feedback": "Work-first can be strategic if paired with future learning.",
            "explanation": "Work-first can be strategic if paired with future learning.",
            "logText": "Skill Stack Plan: Work more hours first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What time did it require?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Skills, cash, and time all matter; the best order depends on constraints."
  },
  {
    "id": "ctx-glass-snack-inventory-spoilage",
    "title": "Snack Inventory Spoilage",
    "prompt": "You buy 30 packaged snacks for a fundraiser simulation at $0.70 each and sell for $1.25, but they expire in two weeks.",
    "topics": [
      "investing",
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy all 30",
        "description": "High possible profit, spoilage risk. Opportunity rises; risk rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 21
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Max profit is 30 × $0.55 = $16.50 before losses.",
            "explanation": "Max profit is 30 × $0.55 = $16.50 before losses.",
            "logText": "Snack Inventory Spoilage: Buy all 30"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Snack Inventory Spoilage: Buy all 30 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy 15 first",
        "description": "Lower risk, lower upside. Safety rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 10
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -15
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Smaller batches test demand.",
            "explanation": "Smaller batches test demand.",
            "logText": "Snack Inventory Spoilage: Buy 15 first"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -15
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Snack Inventory Spoilage: Buy 15 first met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Take preorders first",
        "description": "Demand clearer. Money Know-How rises.",
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
                "type": "cash",
                "amount": -30
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Preorders reduce guessing.",
            "explanation": "Preorders reduce guessing.",
            "logText": "Snack Inventory Spoilage: Take preorders first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What demand are you assuming?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Bigger orders can earn more, but time-sensitive inventory raises risk."
  },
  {
    "id": "ctx-glass-tax-record-folder",
    "title": "Tax Record Folder",
    "prompt": "Your first job and small gigs create pay stubs, forms, and receipts. You can organize them now or wait until tax time.",
    "topics": [
      "career",
      "money-values",
      "taxes"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Create a simple tax folder",
        "description": "Future filing easier. Discipline rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Records reduce stress later.",
            "explanation": "Records reduce stress later.",
            "logText": "Tax Record Folder: Create a simple tax folder"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save only the biggest documents",
        "description": "Less effort, some missing details. Discipline rises slightly.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Partial organization helps but may leave gaps.",
            "explanation": "Partial organization helps but may leave gaps.",
            "logText": "Tax Record Folder: Save only the biggest documents"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult/mentor what to keep",
        "description": "Better list. Money Know-How rises.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              },
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
            "feedback": "Tax questions are easier with guidance.",
            "explanation": "Tax questions are easier with guidance.",
            "logText": "Tax Record Folder: Ask a trusted adult/mentor what to keep"
          }
        ]
      }
    ],
    "reflectionPrompt": "What belongs in the folder?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Organization is boring until it prevents confusion."
  },
  {
    "id": "ctx-glass-textbook-rent-open",
    "title": "Textbook Rent Open",
    "prompt": "A course resource costs $74 to buy, $28 to rent, or $0 as an open resource with fewer practice problems.",
    "topics": [
      "scams",
      "budgeting"
    ],
    "ageRange": {
      "min": 16,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy",
        "description": "Full access and resale possibility. Cash drops; asset/resale option appears.",
        "requirements": [
          {
            "type": "minCash",
            "value": 74
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -74
              }
            ],
            "feedback": "Buying can work if resale or long-term use matters.",
            "explanation": "Buying can work if resale or long-term use matters.",
            "logText": "Textbook Rent Open: Buy"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Rent",
        "description": "Lower cost, no ownership. Cash drops less.",
        "requirements": [
          {
            "type": "minCash",
            "value": 28
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -74
              }
            ],
            "feedback": "Renting fits short-term use.",
            "explanation": "Renting fits short-term use.",
            "logText": "Textbook Rent Open: Rent"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use open resource plus tutoring/help",
        "description": "No cash cost, more effort. Money Know-How rises; time cost.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -74
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Free resources can work with support.",
            "explanation": "Free resources can work with support.",
            "logText": "Textbook Rent Open: Use open resource plus tutoring/help"
          }
        ]
      }
    ],
    "reflectionPrompt": "Will you use it again?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Lowest cash cost may require more self-direction."
  },
  {
    "id": "ctx-glass-thank-you-reference",
    "title": "Thank You Reference",
    "prompt": "A teacher or mentor served as a reference for a program. You got the spot and are deciding how to follow up.",
    "topics": [
      "career"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Send a short thank-you",
        "description": "Trust strengthens. Opportunity rises slightly.",
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
            "feedback": "Professional relationships grow through follow-through.",
            "explanation": "Professional relationships grow through follow-through.",
            "logText": "Thank You Reference: Send a short thank-you"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Say nothing because you are busy",
        "description": "No immediate cost. Trust unchanged or slightly lower.",
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
            "feedback": "Silence is not terrible, but it misses a relationship moment.",
            "explanation": "Silence is not terrible, but it misses a relationship moment.",
            "logText": "Thank You Reference: Say nothing because you are busy"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask how to keep them updated",
        "description": "Ongoing support route opens. Opportunity rises.",
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
            "feedback": "Updating people helps them support you better.",
            "explanation": "Updating people helps them support you better.",
            "logText": "Thank You Reference: Ask how to keep them updated"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the note show?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Relationship maintenance costs time but can create future opportunity."
  },
  {
    "id": "ctx-glass-tool-library-pass",
    "title": "Tool Library Pass",
    "prompt": "You need a tool for one project. Buying costs $42; a tool library lends it for free with a $15 refundable deposit.",
    "topics": [
      "money-values",
      "investing"
    ],
    "ageRange": {
      "min": 14,
      "max": 17
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Borrow with deposit",
        "description": "Low cost if returned on time. Cash temporarily tied up; Discipline rises.",
        "requirements": [
          {
            "type": "minCash",
            "value": 15
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -42
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Borrowing can be cheap if you follow the rules.",
            "explanation": "Borrowing can be cheap if you follow the rules.",
            "logText": "Tool Library Pass: Borrow with deposit"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the tool",
        "description": "You own it for future projects. Asset gained; cash drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 42
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -42
              }
            ],
            "feedback": "Ownership makes sense if use repeats.",
            "explanation": "Ownership makes sense if use repeats.",
            "logText": "Tool Library Pass: Buy the tool"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor/caregiver to help plan return",
        "description": "Deposit-return chance improves. Safety and Trust rise.",
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
                "type": "cash",
                "amount": -42
              },
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
            "feedback": "Support can protect refundable money.",
            "explanation": "Support can protect refundable money.",
            "logText": "Tool Library Pass: Ask a mentor/caregiver to help plan return"
          }
        ]
      }
    ],
    "reflectionPrompt": "What could make it costly?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing is cheapest when the return system is reliable."
  },
  {
    "id": "ctx-glass-trade-in-data-wipe",
    "title": "Trade In Data Wipe",
    "prompt": "You are trading in an old device. The trade-in value is $60, but personal files and saved logins may still be on it.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Back up and factory reset",
        "description": "Safer trade. Safety rises; time drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Privacy steps are part of selling a device.",
            "explanation": "Privacy steps are part of selling a device.",
            "logText": "Trade In Data Wipe: Back up and factory reset"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Trade it quickly",
        "description": "Randomized privacy problem. Safety may drop.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "Fast money can skip cleanup.",
            "explanation": "Fast money can skip cleanup.",
            "logText": "Trade In Data Wipe: Trade it quickly"
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
            "logText": "Trade In Data Wipe: Trade it quickly met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it as backup",
        "description": "No cash now; backup asset remains. Asset usefulness remains; cash unchanged.",
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
            "feedback": "Keeping an asset can have option value.",
            "explanation": "Keeping an asset can have option value.",
            "logText": "Trade In Data Wipe: Keep it as backup"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you protect?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Resale value matters, but safety and usefulness matter too."
  },
  {
    "id": "ctx-glass-transfer-map-savings",
    "title": "Transfer Map Savings",
    "prompt": "A two-year start plus transfer could lower costs, but only if credits transfer. A four-year start is simpler but more expensive upfront.",
    "topics": [
      "saving",
      "credit"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Start with transfer map",
        "description": "Lower cost if planned carefully. Opportunity rises; Discipline needed.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
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
                "stat": "moneyKnowledge",
                "amount": 3
              },
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
            "feedback": "A cheaper path needs credit planning.",
            "explanation": "A cheaper path needs credit planning.",
            "logText": "Transfer Map Savings: Start with transfer map"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Start four-year directly",
        "description": "Simpler path, higher possible cost. Opportunity rises; debt risk rises.",
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
            "feedback": "Simplicity can be valuable but may cost more.",
            "explanation": "Simplicity can be valuable but may cost more.",
            "logText": "Transfer Map Savings: Start four-year directly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Work first and revisit",
        "description": "More time, delayed school. Cash may rise; opportunity delayed.",
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
            "feedback": "Waiting can build savings or slow credentials.",
            "explanation": "Waiting can build savings or slow credentials.",
            "logText": "Transfer Map Savings: Work first and revisit"
          }
        ]
      }
    ],
    "reflectionPrompt": "What must match?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A lower-cost route can require more planning."
  },
  {
    "id": "ctx-glass-used-tablet-battery",
    "title": "Used Tablet Battery",
    "prompt": "A used tablet is $95. A quick battery check can reveal whether it may need a $45 battery soon.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Check battery health first",
        "description": "Randomized condition revealed. Safety rises; better decision.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
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
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Inspection turns hidden risk into information.",
            "explanation": "Inspection turns hidden risk into information.",
            "logText": "Used Tablet Battery: Check battery health first"
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
            "logText": "Used Tablet Battery: Check battery health first met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy without checking",
        "description": "Randomized repair risk. Cash drops; asset gained with uncertainty.",
        "requirements": [
          {
            "type": "minCash",
            "value": 95
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "A low price can hide future repair cost.",
            "explanation": "A low price can hide future repair cost.",
            "logText": "Used Tablet Battery: Buy without checking"
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
            "logText": "Used Tablet Battery: Buy without checking met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a knowledgeable adult/mentor to inspect",
        "description": "Better confidence. Trust and Safety rise.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              },
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
            "feedback": "Support can improve consumer decisions.",
            "explanation": "Support can improve consumer decisions.",
            "logText": "Used Tablet Battery: Ask a knowledgeable adult/mentor to inspect"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the check prevent?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Used items can be great value if hidden condition risks are checked."
  },
  {
    "id": "ctx-glass-utility-split-meter",
    "title": "Utility Split Meter",
    "prompt": "A roommate uses a space heater often, and the electric bill is $24 higher than usual. You need a fair split.",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 17,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Split evenly",
        "description": "Simple, but possibly unfair. Trust may dip.",
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
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Equal is not always fair when use differs.",
            "explanation": "Equal is not always fair when use differs.",
            "logText": "Utility Split Meter: Split evenly"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask the heavy user to pay more",
        "description": "Fairer if handled kindly. Money Know-How and Trust may rise.",
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
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
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
            "feedback": "Usage-based splits need respectful wording.",
            "explanation": "Usage-based splits need respectful wording.",
            "logText": "Utility Split Meter: Ask the heavy user to pay more"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a rule for next month",
        "description": "Prevents future conflict. Discipline rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "A future rule can repair a present awkwardness.",
            "explanation": "A future rule can repair a present awkwardness.",
            "logText": "Utility Split Meter: Set a rule for next month"
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes equal feel fair or unfair?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fair math still needs kind communication."
  },
  {
    "id": "ctx-glass-warranty-transfer-value",
    "title": "Warranty Transfer Value",
    "prompt": "A used instrument has a transferable warranty for $25 more than another similar one. You may resell it next year.",
    "topics": [
      "consumer-skills"
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay $25 more for transferable warranty",
        "description": "More protection and possible resale appeal. Asset quality rises; cash drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -25
              }
            ],
            "feedback": "Transferable benefits can affect resale value.",
            "explanation": "Transferable benefits can affect resale value.",
            "logText": "Warranty Transfer Value: Pay $25 more for transferable warranty"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy cheaper one",
        "description": "Lower upfront cost, more repair risk. Cash protected.",
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
            "feedback": "A lower price may shift risk to you.",
            "explanation": "A lower price may shift risk to you.",
            "logText": "Warranty Transfer Value: Buy cheaper one"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask seller for repair history",
        "description": "Better information. Safety rises.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 40
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
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "History can matter as much as price.",
            "explanation": "History can matter as much as price.",
            "logText": "Warranty Transfer Value: Ask seller for repair history"
          }
        ]
      }
    ],
    "reflectionPrompt": "Who else values the warranty?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying extra for protection can help if it reduces risk or improves resale."
  },
  {
    "id": "ctx-glass-watch-party-license",
    "title": "Watch Party License",
    "prompt": "Friends want to watch a school-safe documentary together. One legal rental costs $4.99; each person could also rent separately.",
    "topics": [
      "scams",
      "budgeting"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "One rental, everyone chips in",
        "description": "Cost split fairly if rules are clear. Trust rises.",
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
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -1
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
            "feedback": "Five people splitting $4.99 pay about $1 each.",
            "explanation": "Five people splitting $4.99 pay about $1 each.",
            "logText": "Watch Party License: One rental, everyone chips in"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Everyone rents separately",
        "description": "Simple ownership, higher total group cost. Trust steady; group total rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -5
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
            "feedback": "Simple can cost more.",
            "explanation": "Simple can cost more.",
            "logText": "Watch Party License: Everyone rents separately"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick a free library/school option",
        "description": "No cash cost, fewer title choices. Cash protected.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -5
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Free resources may trade cost for selection.",
            "explanation": "Free resources may trade cost for selection.",
            "logText": "Watch Party License: Pick a free library/school option"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you collect fairly?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cheapest for the group may require the most coordination."
  },
  {
    "id": "ctx-glass-weather-deductible-pocket",
    "title": "Weather Deductible Pocket",
    "prompt": "In an adult-planning car scenario, a policy has a $500 deductible. You can keep a separate deductible pocket in savings.",
    "topics": [
      "saving"
    ],
    "ageRange": {
      "min": 17,
      "max": 35
    },
    "lifeStages": [
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Save the $500 pocket gradually",
        "description": "Claim is easier if needed. Savings reserved; Safety rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Insurance still requires your part of the cost.",
            "explanation": "Insurance still requires your part of the cost.",
            "logText": "Weather Deductible Pocket: Save the $500 pocket gradually"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep only $100 available",
        "description": "More flexible cash now, possible claim stress. Cash flexibility rises; risk rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 100
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Coverage and cash need to work together.",
            "explanation": "Coverage and cash need to work together.",
            "logText": "Weather Deductible Pocket: Keep only $100 available"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": 100
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Weather Deductible Pocket: Keep only $100 available met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose higher deductible for lower premium",
        "description": "Lower monthly cost if you can carry risk. Cash flow improves; risk capacity required.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 500
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Higher deductible works better when saved.",
            "explanation": "Higher deductible works better when saved.",
            "logText": "Weather Deductible Pocket: Choose higher deductible for lower premium"
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
            "logText": "Weather Deductible Pocket: Choose higher deductible for lower premium met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why save for a deductible?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Lower premiums can be smart only if the deductible is affordable."
  },
  {
    "id": "ctx-glass-work-shoe-choice",
    "title": "Work Shoe Choice",
    "prompt": "A weekend job requires standing for long shifts. Cheap shoes cost $24 and may hurt; supportive shoes cost $68 and may last longer.",
    "topics": [
      "career",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy cheap shoes",
        "description": "Lower upfront cost. Cash protected; wellbeing risk.",
        "requirements": [
          {
            "type": "minCash",
            "value": 24
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -24
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Low price can have a hidden comfort cost.",
            "explanation": "Low price can have a hidden comfort cost.",
            "logText": "Work Shoe Choice: Buy cheap shoes"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy supportive shoes",
        "description": "Higher upfront cost; better comfort and durability. Wellbeing rises; cash drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 68
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -24
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Work gear can be an asset if it helps you earn.",
            "explanation": "Work gear can be an asset if it helps you earn.",
            "logText": "Work Shoe Choice: Buy supportive shoes"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask employer/mentor about requirements first",
        "description": "Avoid wrong purchase. Money Know-How rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -24
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Checking rules before buying reduces waste.",
            "explanation": "Checking rules before buying reduces waste.",
            "logText": "Work Shoe Choice: Ask employer/mentor about requirements first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What cost is not on the receipt?",
    "sourceNote": "MoneyLife context batch GLASS-FERN-91; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Spending more can be responsible when it protects health and earning ability."
  }
];
