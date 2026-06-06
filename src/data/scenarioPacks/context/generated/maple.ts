import type { ScenarioEvent } from "../../../../types/game";

export const mapleContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-maple-apartment-deposit",
    "title": "First and Deposit",
    "prompt": "An apartment needs first month ($800) plus a $800 refundable deposit upfront. *(Locked: hasSteadyIncome.)*",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Pay it from savings.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Pay it from savings. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay it from savings. changes the route and creates a finance tradeoff to notice.",
            "logText": "First and Deposit: Pay it from savings."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Find a cheaper place needing less upfront.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Find a cheaper place needing less upfront. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Find a cheaper place needing less upfront. changes the route and creates a finance tradeoff to notice.",
            "logText": "First and Deposit: Find a cheaper place needing less upfront."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Get a roommate to split it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Get a roommate to split it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Get a roommate to split it. changes the route and creates a finance tradeoff to notice.",
            "logText": "First and Deposit: Get a roommate to split it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a deposit different from rent?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Move-in costs are a big upfront hurdle even when rent is affordable."
  },
  {
    "id": "ctx-maple-apprenticeship-vs-college",
    "title": "Earn While You Learn?",
    "prompt": "An apprenticeship pays you while training (lower starting pay, no debt). A degree path costs more upfront but may pay more later. *(Locked: age ≥16.)*",
    "topics": [
      "budgeting",
      "credit"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Apprenticeship.",
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
            "feedback": "Apprenticeship. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Apprenticeship. changes the route and creates a finance tradeoff to notice.",
            "logText": "Earn While You Learn?: Apprenticeship."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "College.",
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
            "feedback": "College. changes the route and creates a finance tradeoff to notice.",
            "explanation": "College. changes the route and creates a finance tradeoff to notice.",
            "logText": "Earn While You Learn?: College."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Work first, decide later.",
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
            "feedback": "Work first, decide later. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Work first, decide later. changes the route and creates a finance tradeoff to notice.",
            "logText": "Earn While You Learn?: Work first, decide later."
          }
        ]
      }
    ],
    "reflectionPrompt": "What matters more to you: earning now or earning more later?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "All paths can lead to good outcomes—they trade time, debt, and timing differently."
  },
  {
    "id": "ctx-maple-bike-vs-bus",
    "title": "Bike Fund or Bus Pass?",
    "prompt": "A used bike costs $80 (yours to keep, occasional repairs). A monthly bus pass is $20. You travel year-round.",
    "topics": [
      "investing",
      "money-values"
    ],
    "ageRange": {
      "min": 13,
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
        "label": "Buy bike",
        "description": "→ asset gained;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -80
              }
            ],
            "feedback": "$80 once vs $20×12 = $240/year for bus.",
            "explanation": "$80 once vs $20×12 = $240/year for bus.",
            "logText": "Bike Fund or Bus Pass?: Buy bike"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Bus pass",
        "description": "→ flexibility, no repairs.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -80
              }
            ],
            "feedback": "Bus pass changes the route and creates a finance tradeoff to notice.",
            "explanation": "Bus pass changes the route and creates a finance tradeoff to notice.",
            "logText": "Bike Fund or Bus Pass?: Bus pass"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save for bike while busing 2 months",
        "description": "*bridge plan*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -80
              }
            ],
            "feedback": "Save for bike while busing 2 months changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save for bike while busing 2 months changes the route and creates a finance tradeoff to notice.",
            "logText": "Bike Fund or Bus Pass?: Save for bike while busing 2 months"
          }
        ]
      }
    ],
    "reflectionPrompt": "Does owning something always beat paying monthly?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The bike is cheaper long-term but needs upkeep and isn't useful in all weather."
  },
  {
    "id": "ctx-maple-bnpl-sneakers",
    "title": "Four Easy Payments",
    "prompt": "$80 shoes offered as \"4 payments of $20, no interest—if you pay on time.\" A late payment adds a $7 fee.",
    "topics": [
      "credit",
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Pay in full now",
        "description": "→ cash −80, no risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -80
              }
            ],
            "feedback": "Pay in full now changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay in full now changes the route and creates a finance tradeoff to notice.",
            "logText": "Four Easy Payments: Pay in full now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use BNPL, set reminders",
        "description": "→ spreads cost; risk if late.",
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
            "feedback": "Use BNPL, set reminders changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use BNPL, set reminders changes the route and creates a finance tradeoff to notice.",
            "logText": "Four Easy Payments: Use BNPL, set reminders"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and save first",
        "description": "*delay gratification*.",
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
            "feedback": "Wait and save first changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait and save first changes the route and creates a finance tradeoff to notice.",
            "logText": "Four Easy Payments: Wait and save first"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is 'no interest' the same as 'free'?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "BNPL helps cash flow but late fees and easy overspending are real risks."
  },
  {
    "id": "ctx-maple-bnpl-stacking",
    "title": "Three Little Payments",
    "prompt": "You already have two BNPL plans. A third $90 item tempts you. *(Locked: usedBNPL.)*",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Wait until others are paid.",
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
            "feedback": "Wait until others are paid. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait until others are paid. changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Little Payments: Wait until others are paid."
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
            "logText": "Three Little Payments: Wait until others are paid. met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Add it",
        "description": "→ randomized cash-flow crunch.",
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
            "feedback": "Add it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Add it changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Little Payments: Add it"
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
            "logText": "Three Little Payments: Add it met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay cash instead.",
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
            "feedback": "Pay cash instead. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay cash instead. changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Little Payments: Pay cash instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is stacking small payments risky?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "New twist—each plan feels small but together they can overwhelm a budget."
  },
  {
    "id": "ctx-maple-budget-5030-20",
    "title": "Splitting Your First $1,000",
    "prompt": "Your monthly take-home is $1,000. The 50/30/20 rule of thumb suggests needs/wants/savings.",
    "topics": [
      "budgeting",
      "money-values",
      "saving"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Follow it",
        "description": "→ $500/$300/$200.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Follow it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Follow it changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting Your First $1,000: Follow it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Adjust to 60/20/20 (high rent).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Adjust to 60/20/20 (high rent). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Adjust to 60/20/20 (high rent). changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting Your First $1,000: Adjust to 60/20/20 (high rent)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Build your own split.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Build your own split. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Build your own split. changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting Your First $1,000: Build your own split."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is 50/30/20 a guideline, not a law?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The rule is a flexible starting point; real life shifts the ratios."
  },
  {
    "id": "ctx-maple-car-loan-term",
    "title": "Short Loan or Small Payment?",
    "prompt": "A $6,000 used car: 3-year loan ($180/mo) or 5-year loan ($120/mo, more total interest). *(Locked: needsTransport, hasSteadyIncome.)*",
    "topics": [
      "credit",
      "money-values",
      "budgeting"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "3-year.",
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
            "feedback": "3-year. changes the route and creates a finance tradeoff to notice.",
            "explanation": "3-year. changes the route and creates a finance tradeoff to notice.",
            "logText": "Short Loan or Small Payment?: 3-year."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "5-year.",
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
            "feedback": "5-year. changes the route and creates a finance tradeoff to notice.",
            "explanation": "5-year. changes the route and creates a finance tradeoff to notice.",
            "logText": "Short Loan or Small Payment?: 5-year."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save longer, pay more cash down.",
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
            "feedback": "Save longer, pay more cash down. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save longer, pay more cash down. changes the route and creates a finance tradeoff to notice.",
            "logText": "Short Loan or Small Payment?: Save longer, pay more cash down."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does a smaller payment sometimes cost more overall?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Longer terms ease monthly strain but raise total interest paid."
  },
  {
    "id": "ctx-maple-comparison-warranty",
    "title": "The Extended Warranty Pitch",
    "prompt": "A $200 device offers a $40 extended warranty. Most devices don't fail in the covered window.",
    "topics": [
      "consumer-skills"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Decline, self-insure.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Decline, self-insure. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline, self-insure. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Extended Warranty Pitch: Decline, self-insure."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy it for peace of mind.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Buy it for peace of mind. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy it for peace of mind. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Extended Warranty Pitch: Buy it for peace of mind."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy only for fragile/expensive items.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Buy only for fragile/expensive items. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy only for fragile/expensive items. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Extended Warranty Pitch: Buy only for fragile/expensive items."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a warranty worth it?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Warranties profit the seller on average but can pay off for fragile gear."
  },
  {
    "id": "ctx-maple-compound-allowance",
    "title": "The Patient Account",
    "prompt": "You can keep $50 under your mattress or in an account that grows ~5%/year.",
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
        "label": "Account",
        "description": "→ grows slowly but compounds.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 50
              }
            ],
            "feedback": "Account changes the route and creates a finance tradeoff to notice.",
            "explanation": "Account changes the route and creates a finance tradeoff to notice.",
            "logText": "The Patient Account: Account"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Mattress",
        "description": "→ safe but stagnant (and inflation erodes it).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 50
              }
            ],
            "feedback": "Mattress changes the route and creates a finance tradeoff to notice.",
            "explanation": "Mattress changes the route and creates a finance tradeoff to notice.",
            "logText": "The Patient Account: Mattress"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 50
              }
            ],
            "feedback": "Split. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Patient Account: Split."
          }
        ]
      }
    ],
    "reflectionPrompt": "What does compounding add that simple saving doesn't?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Mattress money is fully available but loses ground to inflation."
  },
  {
    "id": "ctx-maple-compound-early-vs-late",
    "title": "Starting Early",
    "prompt": "Saving $20/month from age 18 vs. waiting until 28 makes a big difference by retirement due to compounding.",
    "topics": [
      "saving",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Start small now.",
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
            "feedback": "Start small now. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Start small now. changes the route and creates a finance tradeoff to notice.",
            "logText": "Starting Early: Start small now."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until you earn more.",
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
            "feedback": "Wait until you earn more. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait until you earn more. changes the route and creates a finance tradeoff to notice.",
            "logText": "Starting Early: Wait until you earn more."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start tiny and increase later.",
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
            "feedback": "Start tiny and increase later. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Start tiny and increase later. changes the route and creates a finance tradeoff to notice.",
            "logText": "Starting Early: Start tiny and increase later."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does starting early beat starting big?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Starting small early often beats starting large later, thanks to time."
  },
  {
    "id": "ctx-maple-credit-first-account",
    "title": "Your First Credit Line",
    "prompt": "You qualify for a $500 limit card. *(Locked: age ≥18, hasIncome.)*",
    "topics": [
      "credit",
      "budgeting"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Use under 30% ($150 max), pay full",
        "description": "→ score builds.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Use under 30% ($150 max), pay full changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use under 30% ($150 max), pay full changes the route and creates a finance tradeoff to notice.",
            "logText": "Your First Credit Line: Use under 30% ($150 max), pay full"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Max it out, pay minimum",
        "description": "→ high utilization, interest.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Max it out, pay minimum changes the route and creates a finance tradeoff to notice.",
            "explanation": "Max it out, pay minimum changes the route and creates a finance tradeoff to notice.",
            "logText": "Your First Credit Line: Max it out, pay minimum"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use it once a month for a small bill, autopay",
        "description": "*habit*.",
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
            "feedback": "Use it once a month for a small bill, autopay changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use it once a month for a small bill, autopay changes the route and creates a finance tradeoff to notice.",
            "logText": "Your First Credit Line: Use it once a month for a small bill, autopay"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does keeping balances low help your score?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Credit builds history if used lightly; misuse costs money fast."
  },
  {
    "id": "ctx-maple-credit-report-check",
    "title": "Reading Your Own Report",
    "prompt": "You can check your credit report and spot an error listing an account you never opened. *(Locked: eligibleForCredit.)*",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Dispute the error.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Dispute the error. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Dispute the error. changes the route and creates a finance tradeoff to notice.",
            "logText": "Reading Your Own Report: Dispute the error."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Ignore it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ignore it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Reading Your Own Report: Ignore it."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Freeze your credit and dispute.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Freeze your credit and dispute. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Freeze your credit and dispute. changes the route and creates a finance tradeoff to notice.",
            "logText": "Reading Your Own Report: Freeze your credit and dispute."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why check your credit report regularly?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Checking takes effort but catches errors and fraud early."
  },
  {
    "id": "ctx-maple-crowdfund-friend",
    "title": "Backing a Friend's Project",
    "prompt": "A friend's small project asks for $20 \"support\" with no guaranteed return.",
    "topics": [
      "investing"
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
        "label": "Give as a gift, expect nothing.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Give as a gift, expect nothing. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Give as a gift, expect nothing. changes the route and creates a finance tradeoff to notice.",
            "logText": "Backing a Friend's Project: Give as a gift, expect nothing."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline kindly.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Decline kindly. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline kindly. changes the route and creates a finance tradeoff to notice.",
            "logText": "Backing a Friend's Project: Decline kindly."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Offer help instead of cash.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Offer help instead of cash. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Offer help instead of cash. changes the route and creates a finance tradeoff to notice.",
            "logText": "Backing a Friend's Project: Offer help instead of cash."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the difference between a gift and an investment?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Supporting people is valuable, but \"support\" isn't an investment with returns."
  },
  {
    "id": "ctx-maple-data-breach-response",
    "title": "Your Email Was in a Breach",
    "prompt": "A site you use reports a breach exposing emails and passwords.",
    "topics": [
      "scams"
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
        "label": "Change that password + others reusing it, enable 2FA.",
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
            "feedback": "Change that password + others reusing it, enable 2FA. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Change that password + others reusing it, enable 2FA. changes the route and creates a finance tradeoff to notice.",
            "logText": "Your Email Was in a Breach: Change that password + others reusing it, enable 2FA."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Change only that site.",
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
            "feedback": "Change only that site. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Change only that site. changes the route and creates a finance tradeoff to notice.",
            "logText": "Your Email Was in a Breach: Change only that site."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and watch.",
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
            "feedback": "Wait and watch. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait and watch. changes the route and creates a finance tradeoff to notice.",
            "logText": "Your Email Was in a Breach: Wait and watch."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the first thing to do after a breach?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Acting broadly is more work but limits the spread."
  },
  {
    "id": "ctx-maple-direct-deposit-setup",
    "title": "Where Should Your Pay Go?",
    "prompt": "Your job offers direct deposit. You can send all to checking or split a percentage to savings.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "100% checking.",
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
            "feedback": "100% checking. changes the route and creates a finance tradeoff to notice.",
            "explanation": "100% checking. changes the route and creates a finance tradeoff to notice.",
            "logText": "Where Should Your Pay Go?: 100% checking."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "80% checking / 20% savings",
        "description": "→ automatic saving.",
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
            "feedback": "80% checking / 20% savings changes the route and creates a finance tradeoff to notice.",
            "explanation": "80% checking / 20% savings changes the route and creates a finance tradeoff to notice.",
            "logText": "Where Should Your Pay Go?: 80% checking / 20% savings"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the bank how alerts work.",
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
            "feedback": "Ask the bank how alerts work. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask the bank how alerts work. changes the route and creates a finance tradeoff to notice.",
            "logText": "Where Should Your Pay Go?: Ask the bank how alerts work."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does automatic saving beat 'saving what's left'?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting pay saves effortlessly but leaves slightly less spending cash."
  },
  {
    "id": "ctx-maple-donate-decision",
    "title": "Giving Some Back",
    "prompt": "You want to donate to a community program that once helped you, but money is tight.",
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
        "label": "Donate a small set amount.",
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
            "feedback": "Donate a small set amount. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Donate a small set amount. changes the route and creates a finance tradeoff to notice.",
            "logText": "Giving Some Back: Donate a small set amount."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Volunteer time instead.",
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
            "feedback": "Volunteer time instead. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Volunteer time instead. changes the route and creates a finance tradeoff to notice.",
            "logText": "Giving Some Back: Volunteer time instead."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait until more stable.",
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
            "feedback": "Wait until more stable. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait until more stable. changes the route and creates a finance tradeoff to notice.",
            "logText": "Giving Some Back: Wait until more stable."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you fit giving into a tight budget?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Generosity is valuable; so is your own stability—time can substitute for money."
  },
  {
    "id": "ctx-maple-emergency-fund-start",
    "title": "First $200 Cushion",
    "prompt": "You have $200 extra. Spend it on a want, invest it, or start an emergency fund.",
    "topics": [
      "investing"
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
        "label": "Emergency fund",
        "description": "→ cushion built, future surprises softened.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Emergency fund changes the route and creates a finance tradeoff to notice.",
            "explanation": "Emergency fund changes the route and creates a finance tradeoff to notice.",
            "logText": "First $200 Cushion: Emergency fund"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Invest it",
        "description": "→ growth potential, but illiquid in a pinch.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Invest it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Invest it changes the route and creates a finance tradeoff to notice.",
            "logText": "First $200 Cushion: Invest it"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend on a want",
        "description": "→ enjoyment now.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Spend on a want changes the route and creates a finance tradeoff to notice.",
            "explanation": "Spend on a want changes the route and creates a finance tradeoff to notice.",
            "logText": "First $200 Cushion: Spend on a want"
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the job of an emergency fund vs. an investment?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A cushion isn't growing your money—it's protecting you."
  },
  {
    "id": "ctx-maple-emergency-no-cushion",
    "title": "The Surprise With No Cushion",
    "prompt": "A surprise $250 cost hits and you have no emergency fund. *(Locked: NOT hasEmergencyFund.)*",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Borrow from family, repay over time",
        "description": "*SC*.",
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
            "feedback": "Borrow from family, repay over time changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow from family, repay over time changes the route and creates a finance tradeoff to notice.",
            "logText": "The Surprise With No Cushion: Borrow from family, repay over time"
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
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Surprise With No Cushion: Borrow from family, repay over time met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use BNPL/credit",
        "description": "→ debt + interest.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Use BNPL/credit changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use BNPL/credit changes the route and creates a finance tradeoff to notice.",
            "logText": "The Surprise With No Cushion: Use BNPL/credit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Sell an asset.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Sell an asset. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell an asset. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Surprise With No Cushion: Sell an asset."
          }
        ]
      }
    ],
    "reflectionPrompt": "How would a cushion have changed this?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Without a cushion, every surprise becomes a borrowing decision."
  },
  {
    "id": "ctx-maple-entrepreneur-reinvest",
    "title": "Profit or Grow?",
    "prompt": "Your hustle made $300 profit. Reinvesting $150 in supplies could grow next month's sales. *(Locked: startedSideHustle.)*",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Reinvest half.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Reinvest half. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Reinvest half. changes the route and creates a finance tradeoff to notice.",
            "logText": "Profit or Grow?: Reinvest half."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pocket all of it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Pocket all of it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pocket all of it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Profit or Grow?: Pocket all of it."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Reinvest all.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Reinvest all. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Reinvest all. changes the route and creates a finance tradeoff to notice.",
            "logText": "Profit or Grow?: Reinvest all."
          }
        ]
      }
    ],
    "reflectionPrompt": "When should a business spend on itself?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Reinvesting risks current cash to grow future earnings."
  },
  {
    "id": "ctx-maple-final-net-worth",
    "title": "Adding It All Up",
    "prompt": "Time to total your assets (cash, savings, investments, items) minus your debts.",
    "topics": [
      "money-values",
      "saving",
      "investing",
      "credit"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Calculate carefully",
        "description": "→ net worth shown.",
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
            "feedback": "Calculate carefully changes the route and creates a finance tradeoff to notice.",
            "explanation": "Calculate carefully changes the route and creates a finance tradeoff to notice.",
            "logText": "Adding It All Up: Calculate carefully"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Estimate.",
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
            "feedback": "Estimate. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate. changes the route and creates a finance tradeoff to notice.",
            "logText": "Adding It All Up: Estimate."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Walk through it with your mentor",
        "description": "*SC*.",
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
            "feedback": "Walk through it with your mentor changes the route and creates a finance tradeoff to notice.",
            "explanation": "Walk through it with your mentor changes the route and creates a finance tradeoff to notice.",
            "logText": "Adding It All Up: Walk through it with your mentor"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does net worth tell you—and what does it leave out?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Net worth is one measure of progress, not a measure of your worth as a person."
  },
  {
    "id": "ctx-maple-first-checking-fees",
    "title": "Reading the Fine Print",
    "prompt": "One checking account charges $5/month unless you keep $300 in it; another is free with no minimum.",
    "topics": [
      "banking",
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Free no-minimum account.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 300
              }
            ],
            "feedback": "Free no-minimum account. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Free no-minimum account. changes the route and creates a finance tradeoff to notice.",
            "logText": "Reading the Fine Print: Free no-minimum account."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "The $5 one (more features).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 300
              }
            ],
            "feedback": "The $5 one (more features). changes the route and creates a finance tradeoff to notice.",
            "explanation": "The $5 one (more features). changes the route and creates a finance tradeoff to notice.",
            "logText": "Reading the Fine Print: The $5 one (more features)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "The $5 one but keep $300 to waive it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 300
              }
            ],
            "feedback": "The $5 one but keep $300 to waive it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "The $5 one but keep $300 to waive it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Reading the Fine Print: The $5 one but keep $300 to waive it."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do small monthly fees add up?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Feature-rich accounts may cost more unless you meet conditions."
  },
  {
    "id": "ctx-maple-first-job-w4",
    "title": "Filling Out the Form",
    "prompt": "Your first job asks you to complete a basic tax-withholding form.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Ask for help understanding it",
        "description": "*SC*.",
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
            "feedback": "Ask for help understanding it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask for help understanding it changes the route and creates a finance tradeoff to notice.",
            "logText": "Filling Out the Form: Ask for help understanding it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess and submit.",
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
            "feedback": "Guess and submit. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Guess and submit. changes the route and creates a finance tradeoff to notice.",
            "logText": "Filling Out the Form: Guess and submit."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look up an official explainer first.",
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
            "feedback": "Look up an official explainer first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Look up an official explainer first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Filling Out the Form: Look up an official explainer first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does this form affect your paycheck?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Getting help avoids over- or under-withholding all year."
  },
  {
    "id": "ctx-maple-flash-sale-pressure",
    "title": "Only 3 Left!",
    "prompt": "A \"limited time, only 3 left!\" banner pressures you to buy a $45 item you weren't planning on.",
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
        "label": "Wait 24 hours to decide.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -45
              }
            ],
            "feedback": "Wait 24 hours to decide. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait 24 hours to decide. changes the route and creates a finance tradeoff to notice.",
            "logText": "Only 3 Left!: Wait 24 hours to decide."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now.",
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
            "feedback": "Buy now. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now. changes the route and creates a finance tradeoff to notice.",
            "logText": "Only 3 Left!: Buy now."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add to a wishlist and budget for it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -45
              }
            ],
            "feedback": "Add to a wishlist and budget for it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Add to a wishlist and budget for it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Only 3 Left!: Add to a wishlist and budget for it."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do urgency tactics affect spending?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Sometimes the deal is real; pausing reveals whether you actually want it."
  },
  {
    "id": "ctx-maple-friend-borrow-app",
    "title": "Pay You Back Friday",
    "prompt": "A close friend asks to borrow $25 via a payment app, promising to repay Friday.",
    "topics": [
      "credit",
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
        "label": "Lend, note the date.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Lend, note the date. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Lend, note the date. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pay You Back Friday: Lend, note the date."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Lend a smaller amount you won't miss.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Lend a smaller amount you won't miss. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Lend a smaller amount you won't miss. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pay You Back Friday: Lend a smaller amount you won't miss."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline kindly.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Decline kindly. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline kindly. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pay You Back Friday: Decline kindly."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you protect both your money and the friendship?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Helping a friend is kind; only lend what you can afford to lose."
  },
  {
    "id": "ctx-maple-garage-sale-pricing",
    "title": "Pricing Your Old Stuff",
    "prompt": "You sell old games. A game you bought for $40 is now worth maybe $12 used.",
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
        "label": "Price at $12 to sell fast.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Price at $12 to sell fast. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Price at $12 to sell fast. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing Your Old Stuff: Price at $12 to sell fast."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Price at $25 hoping someone pays.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Price at $25 hoping someone pays. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Price at $25 hoping someone pays. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing Your Old Stuff: Price at $25 hoping someone pays."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep them.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Keep them. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep them. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing Your Old Stuff: Keep them."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do most things lose value after you buy them?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Most owned items are worth less than you paid—pricing to reality sells faster."
  },
  {
    "id": "ctx-maple-gig-or-steady",
    "title": "Tips or a Paycheck?",
    "prompt": "A gig pays variable tips (some weeks $200, some $60). A steady job pays a flat $130/week.",
    "topics": [
      "money-values",
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Gig",
        "description": "→ randomized weekly income.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Gig changes the route and creates a finance tradeoff to notice.",
            "explanation": "Gig changes the route and creates a finance tradeoff to notice.",
            "logText": "Tips or a Paycheck?: Gig"
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
            "logText": "Tips or a Paycheck?: Gig met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Steady job",
        "description": "→ predictable.",
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
            "feedback": "Steady job changes the route and creates a finance tradeoff to notice.",
            "explanation": "Steady job changes the route and creates a finance tradeoff to notice.",
            "logText": "Tips or a Paycheck?: Steady job"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do both part-time.",
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
            "feedback": "Do both part-time. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Do both part-time. changes the route and creates a finance tradeoff to notice.",
            "logText": "Tips or a Paycheck?: Do both part-time."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does income variability change budgeting?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Higher upside comes with unpredictability that's harder to budget."
  },
  {
    "id": "ctx-maple-goal-vs-debt",
    "title": "Save or Pay Down?",
    "prompt": "You have $300. You could add to savings or pay off a $300 debt charging 18% interest.",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Pay the debt",
        "description": "→ saves ~$54/year in interest.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -54
              }
            ],
            "feedback": "Pay the debt changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay the debt changes the route and creates a finance tradeoff to notice.",
            "logText": "Save or Pay Down?: Pay the debt"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -300
              }
            ],
            "feedback": "Save it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Save or Pay Down?: Save it."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split: small cushion + most to debt.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -300
              }
            ],
            "feedback": "Split: small cushion + most to debt. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split: small cushion + most to debt. changes the route and creates a finance tradeoff to notice.",
            "logText": "Save or Pay Down?: Split: small cushion + most to debt."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does paying debt beat saving?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "High-interest debt usually beats low savings returns—but a tiny cushion still matters."
  },
  {
    "id": "ctx-maple-gross-net-side",
    "title": "The Side-Hustle Tax Surprise",
    "prompt": "Your side hustle earned $1,200. You learn you may owe taxes on the profit.",
    "topics": [
      "taxes"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Set aside ~20% for taxes.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Set aside ~20% for taxes. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set aside ~20% for taxes. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Side-Hustle Tax Surprise: Set aside ~20% for taxes."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend it all.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Spend it all. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Spend it all. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Side-Hustle Tax Surprise: Spend it all."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor how self-employment taxes work",
        "description": "*SC*.",
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
            "feedback": "Ask a mentor how self-employment taxes work changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor how self-employment taxes work changes the route and creates a finance tradeoff to notice.",
            "logText": "The Side-Hustle Tax Surprise: Ask a mentor how self-employment taxes work"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why isn't all earned money fully yours to spend?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Setting money aside stings now but avoids a bigger problem later."
  },
  {
    "id": "ctx-maple-group-gift-split",
    "title": "Splitting the Group Gift",
    "prompt": "Six friends chip in for a $48 group present. Two friends are short this week and ask to pay you later through a payment app.",
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
        "label": "Cover them, track who owes",
        "description": "→ $48÷6 = $8 each; you front $16.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Cover them, track who owes changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cover them, track who owes changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting the Group Gift: Cover them, track who owes"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask everyone to pay before buying",
        "description": "*firm boundary*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Ask everyone to pay before buying changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask everyone to pay before buying changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting the Group Gift: Ask everyone to pay before buying"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cover them, no tracking",
        "description": "→ risk forgetting/awkwardness.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Cover them, no tracking changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cover them, no tracking changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting the Group Gift: Cover them, no tracking"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you keep lending to friends from harming the friendship?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Generosity builds trust but unrecorded loans cause friction."
  },
  {
    "id": "ctx-maple-impostor-grandparent",
    "title": "Urgent Call for Help",
    "prompt": "A message claims a relative is \"in trouble\" and needs money sent fast and secretly. *(Locked: usesPaymentApp.)*",
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
        "label": "Stop, verify with family directly",
        "description": "→ safe.",
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
            "feedback": "Stop, verify with family directly changes the route and creates a finance tradeoff to notice.",
            "explanation": "Stop, verify with family directly changes the route and creates a finance tradeoff to notice.",
            "logText": "Urgent Call for Help: Stop, verify with family directly"
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
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Urgent Call for Help: Stop, verify with family directly met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Send quickly out of worry",
        "description": "→ likely loss.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Send quickly out of worry changes the route and creates a finance tradeoff to notice.",
            "explanation": "Send quickly out of worry changes the route and creates a finance tradeoff to notice.",
            "logText": "Urgent Call for Help: Send quickly out of worry"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Report it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Report it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Report it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Urgent Call for Help: Report it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do scammers push secrecy and urgency?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Urgency + secrecy are deliberate scam pressure—pausing to verify protects you."
  },
  {
    "id": "ctx-maple-index-fund-fees",
    "title": "The Quiet Fee",
    "prompt": "Two similar funds: one charges 0.1% yearly, the other 1.0%. On $1,000 that's $1 vs. $10/year—and it compounds.",
    "topics": [
      "investing",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Low-fee fund.",
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
            "feedback": "Low-fee fund. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Low-fee fund. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Quiet Fee: Low-fee fund."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "High-fee fund (flashier marketing).",
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
            "feedback": "High-fee fund (flashier marketing). changes the route and creates a finance tradeoff to notice.",
            "explanation": "High-fee fund (flashier marketing). changes the route and creates a finance tradeoff to notice.",
            "logText": "The Quiet Fee: High-fee fund (flashier marketing)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare 10-year fee totals first.",
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
            "feedback": "Compare 10-year fee totals first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare 10-year fee totals first. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Quiet Fee: Compare 10-year fee totals first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do small fees matter over decades?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fees are easy to ignore but quietly eat long-term returns."
  },
  {
    "id": "ctx-maple-index-vs-hot-stock",
    "title": "The Hot Tip",
    "prompt": "A classmate swears one company's stock will \"double.\" You can put $100 in that single stock or in a diversified fund.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Single stock",
        "description": "→ randomized swing (could rise or fall sharply).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Single stock changes the route and creates a finance tradeoff to notice.",
            "explanation": "Single stock changes the route and creates a finance tradeoff to notice.",
            "logText": "The Hot Tip: Single stock"
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
            "logText": "The Hot Tip: Single stock met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Diversified fund",
        "description": "→ steadier, modest randomized move.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Diversified fund changes the route and creates a finance tradeoff to notice.",
            "explanation": "Diversified fund changes the route and creates a finance tradeoff to notice.",
            "logText": "The Hot Tip: Diversified fund"
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
            "logText": "The Hot Tip: Diversified fund met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split $50/$50",
        "description": "*MT*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Split $50/$50 changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split $50/$50 changes the route and creates a finance tradeoff to notice.",
            "logText": "The Hot Tip: Split $50/$50"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why doesn't a big possible gain make something a good bet?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Concentration can win big or lose big; diversification trades excitement for stability."
  },
  {
    "id": "ctx-maple-inflation-grocery",
    "title": "Same Cart, Higher Total",
    "prompt": "A grocery list that cost $50 last year costs $55 now.",
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
        "label": "Calculate the increase (10%).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -50
              }
            ],
            "feedback": "Calculate the increase (10%). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Calculate the increase (10%). changes the route and creates a finance tradeoff to notice.",
            "logText": "Same Cart, Higher Total: Calculate the increase (10%)."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Switch some brands.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -50
              }
            ],
            "feedback": "Switch some brands. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Switch some brands. changes the route and creates a finance tradeoff to notice.",
            "logText": "Same Cart, Higher Total: Switch some brands."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy in bulk where unit price is lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -50
              }
            ],
            "feedback": "Buy in bulk where unit price is lower. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy in bulk where unit price is lower. changes the route and creates a finance tradeoff to notice.",
            "logText": "Same Cart, Higher Total: Buy in bulk where unit price is lower."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can you fight rising prices day to day?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "You can't stop inflation but smart shopping softens it."
  },
  {
    "id": "ctx-maple-inflation-snack",
    "title": "The Dollar Snack That Isn't",
    "prompt": "A snack you bought for $1.00 two years ago now costs $1.20.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate the increase",
        "description": "→ 20% over 2 years ≈ 10%/year.",
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
            "feedback": "Calculate the increase changes the route and creates a finance tradeoff to notice.",
            "explanation": "Calculate the increase changes the route and creates a finance tradeoff to notice.",
            "logText": "The Dollar Snack That Isn't: Calculate the increase"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the bigger value pack instead.",
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
            "feedback": "Buy the bigger value pack instead. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the bigger value pack instead. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Dollar Snack That Isn't: Buy the bigger value pack instead."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Switch to a cheaper option.",
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
            "feedback": "Switch to a cheaper option. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Switch to a cheaper option. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Dollar Snack That Isn't: Switch to a cheaper option."
          }
        ]
      }
    ],
    "reflectionPrompt": "If prices rise, what should your savings do?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Inflation is normal; the question is whether your income/savings keep pace."
  },
  {
    "id": "ctx-maple-investing-downturn-hold",
    "title": "The Scary Dip",
    "prompt": "Your diversified fund drops 15% in a bad month. *(Locked: hasInvestments.)*",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Hold for the long term",
        "description": "→ randomized recovery.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Hold for the long term changes the route and creates a finance tradeoff to notice.",
            "explanation": "Hold for the long term changes the route and creates a finance tradeoff to notice.",
            "logText": "The Scary Dip: Hold for the long term"
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
            "logText": "The Scary Dip: Hold for the long term met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell to stop losses",
        "description": "→ locks in the loss.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Sell to stop losses changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell to stop losses changes the route and creates a finance tradeoff to notice.",
            "logText": "The Scary Dip: Sell to stop losses"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy more at lower prices.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Buy more at lower prices. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy more at lower prices. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Scary Dip: Buy more at lower prices."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might selling in a dip be a mistake for long-term goals?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Holding rides out dips but feels stressful; selling feels safe but can lock losses."
  },
  {
    "id": "ctx-maple-lawn-route-pricing",
    "title": "Pricing the Lawn Route",
    "prompt": "You mow lawns. Gas + supplies cost $4 per lawn. Neighbors will pay $15, $20, or $25 depending on lawn size. You can take 6 small or 4 large jobs in a weekend.",
    "topics": [
      "money-values",
      "banking"
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
        "label": "6 small at $15",
        "description": "→ revenue 90, cost 24, profit 66.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 90
              }
            ],
            "feedback": "6 small at $15 changes the route and creates a finance tradeoff to notice.",
            "explanation": "6 small at $15 changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing the Lawn Route: 6 small at $15"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "4 large at $25",
        "description": "→ revenue 100, cost 16, profit 84.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 100
              }
            ],
            "feedback": "4 large at $25 changes the route and creates a finance tradeoff to notice.",
            "explanation": "4 large at $25 changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing the Lawn Route: 4 large at $25"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Mix 3+2",
        "description": "→ compute together; feedback shows profit math.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -4
              }
            ],
            "feedback": "Mix 3+2 changes the route and creates a finance tradeoff to notice.",
            "explanation": "Mix 3+2 changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing the Lawn Route: Mix 3+2"
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
            "logText": "Pricing the Lawn Route: Mix 3+2 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "Raise small price to $18 and risk losing one",
        "description": "*randomized demand*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -4
              }
            ],
            "feedback": "Raise small price to $18 and risk losing one changes the route and creates a finance tradeoff to notice.",
            "explanation": "Raise small price to $18 and risk losing one changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing the Lawn Route: Raise small price to $18 and risk losing one"
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
            "logText": "Pricing the Lawn Route: Raise small price to $18 and risk losing one met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Higher price or higher volume—what did you optimize?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Fewer big jobs earn more but you depend on landing them."
  },
  {
    "id": "ctx-maple-loan-comparison",
    "title": "Two Loan Offers",
    "prompt": "For a $1,000 need: Loan A at 10% APR, Loan B at 24% APR. *(Locked: eligibleForCredit.)*",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Loan A.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Loan A. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Loan A. changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Loan Offers: Loan A."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Loan B (faster approval).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Loan B (faster approval). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Loan B (faster approval). changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Loan Offers: Loan B (faster approval)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow less / save first.",
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
            "feedback": "Borrow less / save first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow less / save first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Loan Offers: Borrow less / save first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why compare APR, not just monthly payment?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Faster approval can mean a much higher cost."
  },
  {
    "id": "ctx-maple-mentor-job-referral",
    "title": "The Referral",
    "prompt": "Your mentor offers to refer you for a job, but it's outside your comfort zone.",
    "topics": [
      "career",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Accept and prepare.",
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
            "feedback": "Accept and prepare. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Accept and prepare. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Referral: Accept and prepare."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline, apply elsewhere on your own.",
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
            "feedback": "Decline, apply elsewhere on your own. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline, apply elsewhere on your own. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Referral: Decline, apply elsewhere on your own."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Accept but ask for prep help.",
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
            "feedback": "Accept but ask for prep help. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Accept but ask for prep help. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Referral: Accept but ask for prep help."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do relationships create opportunities?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Referrals open doors but you still have to perform."
  },
  {
    "id": "ctx-maple-mentor-vs-influencer",
    "title": "Two Money Tips",
    "prompt": "Your mentor suggests a boring index fund. An online video pushes a \"secret\" coin that \"always goes up.",
    "topics": [
      "investing"
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
        "label": "Follow mentor",
        "description": "→ steady.",
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
            "feedback": "Follow mentor changes the route and creates a finance tradeoff to notice.",
            "explanation": "Follow mentor changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Money Tips: Follow mentor"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Follow video",
        "description": "→ high scam risk.",
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
            "feedback": "Follow video changes the route and creates a finance tradeoff to notice.",
            "explanation": "Follow video changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Money Tips: Follow video"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Research both before deciding",
        "description": "*discernment*.",
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
            "feedback": "Research both before deciding changes the route and creates a finance tradeoff to notice.",
            "explanation": "Research both before deciding changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Money Tips: Research both before deciding"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you judge whether money advice is trustworthy?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Always goes up\" is a classic warning sign; boring is often safer."
  },
  {
    "id": "ctx-maple-mystery-charge",
    "title": "The Charge You Don't Recognize",
    "prompt": "A $39 charge you don't recognize appears on your account.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Report and freeze immediately",
        "description": "→ fast resolution likely (randomized).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Report and freeze immediately changes the route and creates a finance tradeoff to notice.",
            "explanation": "Report and freeze immediately changes the route and creates a finance tradeoff to notice.",
            "logText": "The Charge You Don't Recognize: Report and freeze immediately"
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
            "logText": "The Charge You Don't Recognize: Report and freeze immediately met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait to see if it repeats",
        "description": "→ may escalate.",
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
            "feedback": "Wait to see if it repeats changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait to see if it repeats changes the route and creates a finance tradeoff to notice.",
            "logText": "The Charge You Don't Recognize: Wait to see if it repeats"
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
            "logText": "The Charge You Don't Recognize: Wait to see if it repeats met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Tell a trusted adult and report together",
        "description": "*SC*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Tell a trusted adult and report together changes the route and creates a finance tradeoff to notice.",
            "explanation": "Tell a trusted adult and report together changes the route and creates a finance tradeoff to notice.",
            "logText": "The Charge You Don't Recognize: Tell a trusted adult and report together"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does acting fast matter with fraud?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Reporting fast is safest; waiting risks more loss but avoids false alarms."
  },
  {
    "id": "ctx-maple-overdraft-edge",
    "title": "Two Dollars Short",
    "prompt": "Your checking has $18. A $20 purchase would overdraft with a $35 fee. You have $50 in savings.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Move $10 from savings first",
        "description": "→ avoid fee; small transfer.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -50
              }
            ],
            "feedback": "Move $10 from savings first changes the route and creates a finance tradeoff to notice.",
            "explanation": "Move $10 from savings first changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Dollars Short: Move $10 from savings first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy anyway, accept overdraft",
        "description": "→ −$35 fee;",
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
            "feedback": "A $20 buy cost $55.",
            "explanation": "A $20 buy cost $55.",
            "logText": "Two Dollars Short: Buy anyway, accept overdraft"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the purchase",
        "description": "→ keep balance.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -50
              }
            ],
            "feedback": "Skip the purchase changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip the purchase changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Dollars Short: Skip the purchase"
          }
        ]
      }
    ],
    "reflectionPrompt": "How can account alerts prevent this?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Overdraft buys time but the fee can dwarf the purchase."
  },
  {
    "id": "ctx-maple-password-reuse",
    "title": "One Password Everywhere",
    "prompt": "You use the same password on five accounts. One site reports a breach.",
    "topics": [
      "scams"
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
        "label": "Change reused passwords, turn on 2FA",
        "description": "→ safer.",
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
            "feedback": "Change reused passwords, turn on 2FA changes the route and creates a finance tradeoff to notice.",
            "explanation": "Change reused passwords, turn on 2FA changes the route and creates a finance tradeoff to notice.",
            "logText": "One Password Everywhere: Change reused passwords, turn on 2FA"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Change only the breached one.",
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
            "feedback": "Change only the breached one. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Change only the breached one. changes the route and creates a finance tradeoff to notice.",
            "logText": "One Password Everywhere: Change only the breached one."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do nothing",
        "description": "→ high risk.",
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
            "feedback": "Do nothing changes the route and creates a finance tradeoff to notice.",
            "explanation": "Do nothing changes the route and creates a finance tradeoff to notice.",
            "logText": "One Password Everywhere: Do nothing"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is reusing passwords risky?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Unique passwords are annoying to manage but contain damage."
  },
  {
    "id": "ctx-maple-paycheck-shrinks",
    "title": "Why Is My Check Smaller?",
    "prompt": "Your first part-time job offers $12/hour for 10 hours/week. Your first paycheck is smaller than you expected.",
    "topics": [
      "career",
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Read the pay stub",
        "description": "*learn deductions* → math helper reveals taxes;",
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
            "feedback": "$120 gross − deductions = net.",
            "explanation": "$120 gross − deductions = net.",
            "logText": "Why Is My Check Smaller?: Read the pay stub"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume an error and ignore",
        "description": "→ misconception persists.",
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
            "feedback": "Assume an error and ignore changes the route and creates a finance tradeoff to notice.",
            "explanation": "Assume an error and ignore changes the route and creates a finance tradeoff to notice.",
            "logText": "Why Is My Check Smaller?: Assume an error and ignore"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask your mentor to explain",
        "description": "*SC*.",
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
            "feedback": "Ask your mentor to explain changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask your mentor to explain changes the route and creates a finance tradeoff to notice.",
            "logText": "Why Is My Check Smaller?: Ask your mentor to explain"
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the difference between what you earn and what you keep?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Knowing your net pay lets you budget honestly."
  },
  {
    "id": "ctx-maple-peer-group-buy",
    "title": "Chipping in for a Big Buy",
    "prompt": "Four friends want to buy a $200 used game console to share.",
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
        "label": "Split evenly ($50 each), agree on rules.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -200
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Split evenly ($50 each), agree on rules. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split evenly ($50 each), agree on rules. changes the route and creates a finance tradeoff to notice.",
            "logText": "Chipping in for a Big Buy: Split evenly ($50 each), agree on rules."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "One owns it, others pay to use.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -200
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "One owns it, others pay to use. changes the route and creates a finance tradeoff to notice.",
            "explanation": "One owns it, others pay to use. changes the route and creates a finance tradeoff to notice.",
            "logText": "Chipping in for a Big Buy: One owns it, others pay to use."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip—too complicated.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -200
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Skip—too complicated. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip—too complicated. changes the route and creates a finance tradeoff to notice.",
            "logText": "Chipping in for a Big Buy: Skip—too complicated."
          }
        ]
      }
    ],
    "reflectionPrompt": "What problems can shared ownership create?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting cost is cheaper but shared things need clear rules."
  },
  {
    "id": "ctx-maple-pet-monthly-budget",
    "title": "Planning the Pet Budget",
    "prompt": "A pet costs ~$30/month for food and supplies, plus an unpredictable vet fund. *(Locked: hasPet.)*",
    "topics": [
      "budgeting",
      "money-values",
      "investing"
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
        "label": "Budget $30 + set aside $10/mo vet fund.",
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
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Budget $30 + set aside $10/mo vet fund. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget $30 + set aside $10/mo vet fund. changes the route and creates a finance tradeoff to notice.",
            "logText": "Planning the Pet Budget: Budget $30 + set aside $10/mo vet fund."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget $30 only.",
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
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Budget $30 only. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget $30 only. changes the route and creates a finance tradeoff to notice.",
            "logText": "Planning the Pet Budget: Budget $30 only."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Adopt later when ready.",
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
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Adopt later when ready. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Adopt later when ready. changes the route and creates a finance tradeoff to notice.",
            "logText": "Planning the Pet Budget: Adopt later when ready."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why budget for surprises before they happen?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "$30/month is steady; the vet fund prepares for the unsteady part."
  },
  {
    "id": "ctx-maple-phishing-text-twist",
    "title": "The Package You Didn't Order",
    "prompt": "A text says a package is \"held\" and asks you to tap a link and confirm your address and a small \"fee.",
    "topics": [
      "scams"
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
        "label": "Delete, don't tap",
        "description": "→ safe.",
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
            "feedback": "Delete, don't tap changes the route and creates a finance tradeoff to notice.",
            "explanation": "Delete, don't tap changes the route and creates a finance tradeoff to notice.",
            "logText": "The Package You Didn't Order: Delete, don't tap"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Tap to \"check",
        "description": "→ randomized data-exposure risk.",
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
            "feedback": "Tap to \"check changes the route and creates a finance tradeoff to notice.",
            "explanation": "Tap to \"check changes the route and creates a finance tradeoff to notice.",
            "logText": "The Package You Didn't Order: Tap to \"check"
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
            "logText": "The Package You Didn't Order: Tap to \"check met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Verify through the real shipper's app instead.",
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
            "feedback": "Verify through the real shipper's app instead. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Verify through the real shipper's app instead. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Package You Didn't Order: Verify through the real shipper's app instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a 'small fee' a warning sign?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "New twist—legitimate-sounding logistics texts are common bait now."
  },
  {
    "id": "ctx-maple-phone-cracked",
    "title": "The Cracked Screen",
    "prompt": "You dropped your phone. You pay $5/month for phone protection with a $49 repair deductible. Repair without coverage is $130.",
    "topics": [
      "money-values",
      "insurance"
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use the plan, pay deductible",
        "description": "→ cash −49;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -49
              }
            ],
            "feedback": "You paid $5×months + $49.",
            "explanation": "You paid $5×months + $49.",
            "logText": "The Cracked Screen: Use the plan, pay deductible"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "You never had the plan—pay full",
        "description": "→ cash −130.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -130
              }
            ],
            "feedback": "You never had the plan—pay full changes the route and creates a finance tradeoff to notice.",
            "explanation": "You never had the plan—pay full changes the route and creates a finance tradeoff to notice.",
            "logText": "The Cracked Screen: You never had the plan—pay full"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cancel plan going forward, self-insure with savings",
        "description": "*MT*.",
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
            "feedback": "Cancel plan going forward, self-insure with savings changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cancel plan going forward, self-insure with savings changes the route and creates a finance tradeoff to notice.",
            "logText": "The Cracked Screen: Cancel plan going forward, self-insure with savings"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying monthly worth it?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Coverage is cheaper only if you actually break things."
  },
  {
    "id": "ctx-maple-phone-insurance-claim",
    "title": "Worth the Claim?",
    "prompt": "A $60 screen crack; your deductible is $49 and a claim might raise future premiums.",
    "topics": [
      "insurance"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Pay $60 out of pocket",
        "description": "→ keep premium steady.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              }
            ],
            "feedback": "Pay $60 out of pocket changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $60 out of pocket changes the route and creates a finance tradeoff to notice.",
            "logText": "Worth the Claim?: Pay $60 out of pocket"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "File claim, pay $49.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -49
              }
            ],
            "feedback": "File claim, pay $49. changes the route and creates a finance tradeoff to notice.",
            "explanation": "File claim, pay $49. changes the route and creates a finance tradeoff to notice.",
            "logText": "Worth the Claim?: File claim, pay $49."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Live with the crack.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -49
              }
            ],
            "feedback": "Live with the crack. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Live with the crack. changes the route and creates a finance tradeoff to notice.",
            "logText": "Worth the Claim?: Live with the crack."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a small claim not worth filing?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Filing saves a little now but can cost more later."
  },
  {
    "id": "ctx-maple-phone-resale-value",
    "title": "Trade In or Sell?",
    "prompt": "Your old phone gets a $90 trade-in offer or might sell privately for $140 (with effort and some risk).",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Trade in for $90 (easy, safe).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 140
              }
            ],
            "feedback": "Trade in for $90 (easy, safe). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Trade in for $90 (easy, safe). changes the route and creates a finance tradeoff to notice.",
            "logText": "Trade In or Sell?: Trade in for $90 (easy, safe)."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell privately for $140 (more work).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 140
              }
            ],
            "feedback": "Sell privately for $140 (more work). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell privately for $140 (more work). changes the route and creates a finance tradeoff to notice.",
            "logText": "Trade In or Sell?: Sell privately for $140 (more work)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep as a backup.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 140
              }
            ],
            "feedback": "Keep as a backup. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep as a backup. changes the route and creates a finance tradeoff to notice.",
            "logText": "Trade In or Sell?: Keep as a backup."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you weigh effort, risk, and reward?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Private sale earns more but takes time and carries safety considerations."
  },
  {
    "id": "ctx-maple-phone-upgrade-pressure",
    "title": "Everyone Has the New Phone",
    "prompt": "Friends upgraded phones; yours works fine. An upgrade costs $300 or $25/month for 18 months.",
    "topics": [
      "money-values",
      "career"
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
        "label": "Keep current phone.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -300
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Keep current phone. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep current phone. changes the route and creates a finance tradeoff to notice.",
            "logText": "Everyone Has the New Phone: Keep current phone."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy outright.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -300
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Buy outright. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy outright. changes the route and creates a finance tradeoff to notice.",
            "logText": "Everyone Has the New Phone: Buy outright."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Monthly plan",
        "description": "→ $450 total over 18 months.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -300
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Monthly plan changes the route and creates a finance tradeoff to notice.",
            "explanation": "Monthly plan changes the route and creates a finance tradeoff to notice.",
            "logText": "Everyone Has the New Phone: Monthly plan"
          }
        ]
      }
    ],
    "reflectionPrompt": "How much is fitting in worth to you—and is there a cheaper way?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The monthly plan feels affordable but costs $150 more overall."
  },
  {
    "id": "ctx-maple-predatory-loan-flag",
    "title": "Cash in Minutes",
    "prompt": "An ad promises instant cash with \"no credit check\"—but the fees are enormous. *(Locked: needsCash flag context.)*",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Avoid it, seek alternatives.",
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
            "feedback": "Avoid it, seek alternatives. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Avoid it, seek alternatives. changes the route and creates a finance tradeoff to notice.",
            "logText": "Cash in Minutes: Avoid it, seek alternatives."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Read the full cost first.",
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
            "feedback": "Read the full cost first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Read the full cost first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Cash in Minutes: Read the full cost first."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Take it (the costly trap).",
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
            "feedback": "Take it (the costly trap). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Take it (the costly trap). changes the route and creates a finance tradeoff to notice.",
            "logText": "Cash in Minutes: Take it (the costly trap)."
          }
        ]
      }
    ],
    "reflectionPrompt": "What are warning signs of a predatory loan?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Easy\" loans often hide costs that trap borrowers."
  },
  {
    "id": "ctx-maple-renter-insurance-skip",
    "title": "Is Renter Insurance Worth $12?",
    "prompt": "Renter insurance is $12/month and would cover theft or water damage. *(Locked: hasRoommate or hasSteadyIncome.)*",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Buy it",
        "description": "→ protected; small monthly cost.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Buy it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy it changes the route and creates a finance tradeoff to notice.",
            "logText": "Is Renter Insurance Worth $12?: Buy it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, self-insure",
        "description": "→ randomized event tests it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Skip, self-insure changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip, self-insure changes the route and creates a finance tradeoff to notice.",
            "logText": "Is Renter Insurance Worth $12?: Skip, self-insure"
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
            "logText": "Is Renter Insurance Worth $12?: Skip, self-insure met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a higher-deductible cheaper plan.",
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
            "feedback": "Buy a higher-deductible cheaper plan. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy a higher-deductible cheaper plan. changes the route and creates a finance tradeoff to notice.",
            "logText": "Is Renter Insurance Worth $12?: Buy a higher-deductible cheaper plan."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a small monthly cost worth peace of mind?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Insurance usually \"loses\" money until the year it doesn't."
  },
  {
    "id": "ctx-maple-repair-or-replace-laptop",
    "title": "Fix It or Replace It?",
    "prompt": "Your $400 laptop (needed for school) has a $120 repair. A new one is $500.",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Repair",
        "description": "→ cheaper now; older device.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -500
              }
            ],
            "feedback": "Repair changes the route and creates a finance tradeoff to notice.",
            "explanation": "Repair changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix It or Replace It?: Repair"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Replace",
        "description": "→ costly; longer future life.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -500
              }
            ],
            "feedback": "Replace changes the route and creates a finance tradeoff to notice.",
            "explanation": "Replace changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix It or Replace It?: Replace"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Repair + start a replacement fund",
        "description": "*bridge*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -500
              }
            ],
            "feedback": "Repair + start a replacement fund changes the route and creates a finance tradeoff to notice.",
            "explanation": "Repair + start a replacement fund changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix It or Replace It?: Repair + start a replacement fund"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is repairing the worse deal?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Repair saves cash unless the device is near the end of its life."
  },
  {
    "id": "ctx-maple-roommate-rent-split",
    "title": "Whose Half Is Bigger?",
    "prompt": "Rent is $900. One bedroom is bigger. You and a roommate must split fairly. *(Locked: hasSteadyIncome.)*",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Even 50/50 = $450 each.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Even 50/50 = $450 each. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Even 50/50 = $450 each. changes the route and creates a finance tradeoff to notice.",
            "logText": "Whose Half Is Bigger?: Even 50/50 = $450 each."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Bigger room pays 60% = $540/$360.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Bigger room pays 60% = $540/$360. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Bigger room pays 60% = $540/$360. changes the route and creates a finance tradeoff to notice.",
            "logText": "Whose Half Is Bigger?: Bigger room pays 60% = $540/$360."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Negotiate based on income share.",
        "description": "All shown with math.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Negotiate based on income share. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Negotiate based on income share. changes the route and creates a finance tradeoff to notice.",
            "logText": "Whose Half Is Bigger?: Negotiate based on income share."
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes a split 'fair'?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Even splits are simple; weighted splits feel fairer but need agreement."
  },
  {
    "id": "ctx-maple-rule-of-72-choice",
    "title": "How Long to Double?",
    "prompt": "You compare two savings options: 3% and 6% growth. You want to know which doubles your money faster.",
    "topics": [
      "saving"
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
        "label": "Use Rule of 72",
        "description": "→ 72÷3 = 24 years; 72÷6 = 12 years.",
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
            "feedback": "Use Rule of 72 changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use Rule of 72 changes the route and creates a finance tradeoff to notice.",
            "logText": "How Long to Double?: Use Rule of 72"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess.",
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
            "feedback": "Guess. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Guess. changes the route and creates a finance tradeoff to notice.",
            "logText": "How Long to Double?: Guess."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to walk through it",
        "description": "*SC*.",
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
            "feedback": "Ask mentor to walk through it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor to walk through it changes the route and creates a finance tradeoff to notice.",
            "logText": "How Long to Double?: Ask mentor to walk through it"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does doubling time tell you about rate?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher rates double faster but often carry more risk."
  },
  {
    "id": "ctx-maple-salary-negotiation",
    "title": "Should I Ask for More?",
    "prompt": "A job offers $15/hour. You researched that $16–17 is common for the role.",
    "topics": [
      "career",
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Politely ask for $16.50, citing research",
        "description": "→ randomized result.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Politely ask for $16.50, citing research changes the route and creates a finance tradeoff to notice.",
            "explanation": "Politely ask for $16.50, citing research changes the route and creates a finance tradeoff to notice.",
            "logText": "Should I Ask for More?: Politely ask for $16.50, citing research"
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
            "logText": "Should I Ask for More?: Politely ask for $16.50, citing research met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Accept $15.",
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
            "feedback": "Accept $15. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Accept $15. changes the route and creates a finance tradeoff to notice.",
            "logText": "Should I Ask for More?: Accept $15."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask for non-pay perks instead.",
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
            "feedback": "Ask for non-pay perks instead. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask for non-pay perks instead. changes the route and creates a finance tradeoff to notice.",
            "logText": "Should I Ask for More?: Ask for non-pay perks instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the risk and reward of negotiating?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Asking can raise pay but feels risky; preparation lowers the risk."
  },
  {
    "id": "ctx-maple-savings-bond-placeholder",
    "title": "The Slow-and-Steady Certificate",
    "prompt": "A safe \"certificate\" locks $200 for 1 year at 4%, but you can't touch it early.",
    "topics": [
      "banking",
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Lock it in",
        "description": "→ $208 after a year, but illiquid.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Lock it in changes the route and creates a finance tradeoff to notice.",
            "explanation": "Lock it in changes the route and creates a finance tradeoff to notice.",
            "logText": "The Slow-and-Steady Certificate: Lock it in"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it flexible in savings.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Keep it flexible in savings. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it flexible in savings. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Slow-and-Steady Certificate: Keep it flexible in savings."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Lock half.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Lock half. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Lock half. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Slow-and-Steady Certificate: Lock half."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you give up for a guaranteed return?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Locking earns more but you can't access it in an emergency."
  },
  {
    "id": "ctx-maple-savings-goal-vs-now",
    "title": "The Concert vs. The Camera Fund",
    "prompt": "You've saved $120 toward a $300 camera (an asset for your side hustle). A concert costs $85.",
    "topics": [
      "investing"
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
        "label": "Skip concert, keep saving",
        "description": "→ goal closer.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -85
              }
            ],
            "feedback": "Skip concert, keep saving changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip concert, keep saving changes the route and creates a finance tradeoff to notice.",
            "logText": "The Concert vs. The Camera Fund: Skip concert, keep saving"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Go, restart partly.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -85
              }
            ],
            "feedback": "Go, restart partly. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Go, restart partly. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Concert vs. The Camera Fund: Go, restart partly."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Go, but earn $85 extra first",
        "description": "*delay*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 85
              }
            ],
            "feedback": "Go, but earn $85 extra first changes the route and creates a finance tradeoff to notice.",
            "explanation": "Go, but earn $85 extra first changes the route and creates a finance tradeoff to notice.",
            "logText": "The Concert vs. The Camera Fund: Go, but earn $85 extra first"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you weigh experiences against goals?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Experiences have real value; so does finishing a goal."
  },
  {
    "id": "ctx-maple-scam-job-offer",
    "title": "Get Paid to Reship",
    "prompt": "A \"job\" texts you: get paid to receive packages and reship them, no interview. *(Locked: appears only if usesPaymentApp.)*",
    "topics": [
      "scams",
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Ignore and report",
        "description": "→ safe.",
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
            "feedback": "Ignore and report changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ignore and report changes the route and creates a finance tradeoff to notice.",
            "logText": "Get Paid to Reship: Ignore and report"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask for details first",
        "description": "→ randomized pressure tactics revealed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Ask for details first changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask for details first changes the route and creates a finance tradeoff to notice.",
            "logText": "Get Paid to Reship: Ask for details first"
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
            "logText": "Get Paid to Reship: Ask for details first met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Try one \"to see",
        "description": "→ likely loss (locked-out for safety guidance).",
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
            "feedback": "Try one \"to see changes the route and creates a finance tradeoff to notice.",
            "explanation": "Try one \"to see changes the route and creates a finance tradeoff to notice.",
            "logText": "Get Paid to Reship: Try one \"to see"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made this offer suspicious?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Easy money offers with no interview are classic scam bait."
  },
  {
    "id": "ctx-maple-scholarship-hours",
    "title": "Hours Into Scholarships",
    "prompt": "Spending 10 hours applying to small scholarships might win $0, $300, or $1,500. *(Locked: pathwayChosen=college.)*",
    "topics": [
      "banking",
      "money-values",
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Apply broadly",
        "description": "→ randomized payoff.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Apply broadly changes the route and creates a finance tradeoff to notice.",
            "explanation": "Apply broadly changes the route and creates a finance tradeoff to notice.",
            "logText": "Hours Into Scholarships: Apply broadly"
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
            "logText": "Hours Into Scholarships: Apply broadly met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Apply to one big one only",
        "description": "→ lower odds, big prize.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Apply to one big one only changes the route and creates a finance tradeoff to notice.",
            "explanation": "Apply to one big one only changes the route and creates a finance tradeoff to notice.",
            "logText": "Hours Into Scholarships: Apply to one big one only"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip, focus on a job",
        "description": "*MT*.",
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
            "feedback": "Skip, focus on a job changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip, focus on a job changes the route and creates a finance tradeoff to notice.",
            "logText": "Hours Into Scholarships: Skip, focus on a job"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you value effort with uncertain payoff?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Scholarship hunting is unpaid time that can beat a paycheck—or not."
  },
  {
    "id": "ctx-maple-seventy-two-goal",
    "title": "The 72 Plan",
    "prompt": "You want to double $500. At 6%, the Rule of 72 says ~12 years; at 9%, ~8 years (with more risk).",
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
        "label": "Lower-risk 6% path.",
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
            "feedback": "Lower-risk 6% path. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Lower-risk 6% path. changes the route and creates a finance tradeoff to notice.",
            "logText": "The 72 Plan: Lower-risk 6% path."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Higher-risk 9% path.",
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
            "feedback": "Higher-risk 9% path. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Higher-risk 9% path. changes the route and creates a finance tradeoff to notice.",
            "logText": "The 72 Plan: Higher-risk 9% path."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Mix both.",
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
            "feedback": "Mix both. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Mix both. changes the route and creates a finance tradeoff to notice.",
            "logText": "The 72 Plan: Mix both."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you trade for faster doubling?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Faster doubling usually means accepting more risk. *(Seed nod: 72.)*"
  },
  {
    "id": "ctx-maple-side-hustle-records",
    "title": "Keep the Receipts?",
    "prompt": "Your craft sales bring in $200; supplies cost $70. A friend says \"don't bother tracking.",
    "topics": [
      "consumer-skills",
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
        "label": "Track income and costs",
        "description": "→ profit $130 clear.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -130
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Track income and costs changes the route and creates a finance tradeoff to notice.",
            "explanation": "Track income and costs changes the route and creates a finance tradeoff to notice.",
            "logText": "Keep the Receipts?: Track income and costs"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Don't track",
        "description": "→ fuzzy profit, tax confusion later.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -70
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Don't track changes the route and creates a finance tradeoff to notice.",
            "explanation": "Don't track changes the route and creates a finance tradeoff to notice.",
            "logText": "Keep the Receipts?: Don't track"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a simple ledger app.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -70
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Use a simple ledger app. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use a simple ledger app. changes the route and creates a finance tradeoff to notice.",
            "logText": "Keep the Receipts?: Use a simple ledger app."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do records matter even for a small hustle?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Tracking is tedious but it's the only way to know real profit."
  },
  {
    "id": "ctx-maple-study-tools-cert",
    "title": "Earning a Certification",
    "prompt": "A $90 online certification could raise your job options. It takes 20 hours.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Earn it",
        "description": "→ asset + opportunity gain.",
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
            "feedback": "Earn it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Earn it changes the route and creates a finance tradeoff to notice.",
            "logText": "Earning a Certification: Earn it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, save money.",
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
            "feedback": "Skip, save money. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip, save money. changes the route and creates a finance tradeoff to notice.",
            "logText": "Earning a Certification: Skip, save money."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Find a free version first.",
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
            "feedback": "Find a free version first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Find a free version first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Earning a Certification: Find a free version first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Can knowledge be an asset?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Certs cost time and money but can open higher-paying doors."
  },
  {
    "id": "ctx-maple-subscription-bundle",
    "title": "The Bundle Deal",
    "prompt": "Three apps cost $5 each ($15) separately, or $11 bundled—but you only use two.",
    "topics": [
      "consumer-skills",
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
        "label": "Buy two separately ($10).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -10
              }
            ],
            "feedback": "Buy two separately ($10). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy two separately ($10). changes the route and creates a finance tradeoff to notice.",
            "logText": "The Bundle Deal: Buy two separately ($10)."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the bundle ($11).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -11
              }
            ],
            "feedback": "Buy the bundle ($11). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the bundle ($11). changes the route and creates a finance tradeoff to notice.",
            "logText": "The Bundle Deal: Buy the bundle ($11)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy only one ($5).",
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
            "feedback": "Buy only one ($5). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy only one ($5). changes the route and creates a finance tradeoff to notice.",
            "logText": "The Bundle Deal: Buy only one ($5)."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a 'deal' a deal if you don't use all of it?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Bundles save money only if you'd actually use everything in them."
  },
  {
    "id": "ctx-maple-tax-refund-plan",
    "title": "The Refund Question",
    "prompt": "You get a $300 tax refund.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 17,
      "max": 20
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
        "label": "Emergency fund.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Emergency fund. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Emergency fund. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Refund Question: Emergency fund."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay down a small debt.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Pay down a small debt. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay down a small debt. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Refund Question: Pay down a small debt."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Spend it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Spend it. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Refund Question: Spend it."
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "Split across goals.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Split across goals. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split across goals. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Refund Question: Split across goals."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a big refund actually 'free money'?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A refund is your own money returned—useful, but not a windfall."
  },
  {
    "id": "ctx-maple-tip-the-math",
    "title": "Tip and Tax Together",
    "prompt": "A $40 meal has 8% tax and you want to leave a 15% tip on the pre-tax amount.",
    "topics": [
      "taxes"
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
        "label": "Compute step by step",
        "description": "→ tax $3.20, tip $6.00, total $49.20.",
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
            "feedback": "Compute step by step changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute step by step changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip and Tax Together: Compute step by step"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Estimate ~$50.",
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
            "feedback": "Estimate ~$50. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate ~$50. changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip and Tax Together: Estimate ~$50."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a quick 20% mental shortcut for tip.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Use a quick 20% mental shortcut for tip. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use a quick 20% mental shortcut for tip. changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip and Tax Together: Use a quick 20% mental shortcut for tip."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might you tip on pre-tax vs. total?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating is fast; exact math avoids surprises."
  },
  {
    "id": "ctx-maple-transit-budget",
    "title": "Getting to Work",
    "prompt": "A job pays $14/hour but is far. Transit costs $6/day; a closer job pays $13 with $1/day transit.",
    "topics": [
      "budgeting",
      "money-values",
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 19
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
        "label": "Far job",
        "description": "→ compute net after transit.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -6
              }
            ],
            "feedback": "Far job changes the route and creates a finance tradeoff to notice.",
            "explanation": "Far job changes the route and creates a finance tradeoff to notice.",
            "logText": "Getting to Work: Far job"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Closer job.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -6
              }
            ],
            "feedback": "Closer job. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Closer job. changes the route and creates a finance tradeoff to notice.",
            "logText": "Getting to Work: Closer job."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Carpool to reduce cost.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -6
              }
            ],
            "feedback": "Carpool to reduce cost. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Carpool to reduce cost. changes the route and creates a finance tradeoff to notice.",
            "logText": "Getting to Work: Carpool to reduce cost."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why subtract commuting costs from your wage?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher pay can shrink once commuting costs are counted."
  },
  {
    "id": "ctx-maple-trial-that-renews",
    "title": "The Trial That Remembers You",
    "prompt": "A game offers a 7-day free trial, then $6.99/month auto-renews. You're excited now but unsure you'll play much.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
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
        "label": "Start trial, set a cancel reminder",
        "description": "→ flag, wellbeing +;",
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
            "feedback": "$6.99 × 12 = $83.88/year if you forget.",
            "explanation": "$6.99 × 12 = $83.88/year if you forget.",
            "logText": "The Trial That Remembers You: Start trial, set a cancel reminder"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it",
        "description": "→ no cost.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Skip it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip it changes the route and creates a finance tradeoff to notice.",
            "logText": "The Trial That Remembers You: Skip it"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start trial, no reminder",
        "description": "→ risk auto-charge later (sets firstSubscription + creep).",
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
            "feedback": "Start trial, no reminder changes the route and creates a finance tradeoff to notice.",
            "explanation": "Start trial, no reminder changes the route and creates a finance tradeoff to notice.",
            "logText": "The Trial That Remembers You: Start trial, no reminder"
          }
        ]
      }
    ],
    "reflectionPrompt": "What's your plan to remember the cancel date?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Trials are real value if you actually cancel on time."
  },
  {
    "id": "ctx-maple-unit-price-shipping",
    "title": "Cheaper Until Shipping",
    "prompt": "Online: 12 pens for $6 + $4 shipping. Store: 12 pens for $7, no shipping.",
    "topics": [
      "consumer-skills"
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
        "label": "Online",
        "description": "→ $10 total.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -12
              }
            ],
            "feedback": "Online changes the route and creates a finance tradeoff to notice.",
            "explanation": "Online changes the route and creates a finance tradeoff to notice.",
            "logText": "Cheaper Until Shipping: Online"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Store",
        "description": "→ $7 total.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -12
              }
            ],
            "feedback": "Store changes the route and creates a finance tradeoff to notice.",
            "explanation": "Store changes the route and creates a finance tradeoff to notice.",
            "logText": "Cheaper Until Shipping: Store"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Online if you add items to hit free shipping.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -12
              }
            ],
            "feedback": "Online if you add items to hit free shipping. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Online if you add items to hit free shipping. changes the route and creates a finance tradeoff to notice.",
            "logText": "Cheaper Until Shipping: Online if you add items to hit free shipping."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why must you include fees in price comparisons?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "New twist—the cheaper sticker price loses once fees are added."
  },
  {
    "id": "ctx-maple-used-car-inspection",
    "title": "Trust but Verify",
    "prompt": "A used car looks great. A $75 inspection could reveal hidden problems. *(Locked: needsTransport.)*",
    "topics": [
      "scams"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Pay for inspection",
        "description": "→ randomized: finds issue or clears it.",
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
            "feedback": "Pay for inspection changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay for inspection changes the route and creates a finance tradeoff to notice.",
            "logText": "Trust but Verify: Pay for inspection"
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
            "logText": "Trust but Verify: Pay for inspection met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip to save $75.",
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
            "feedback": "Skip to save $75. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip to save $75. changes the route and creates a finance tradeoff to notice.",
            "logText": "Trust but Verify: Skip to save $75."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a knowledgeable adult to look",
        "description": "*SC*.",
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
            "feedback": "Ask a knowledgeable adult to look changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a knowledgeable adult to look changes the route and creates a finance tradeoff to notice.",
            "logText": "Trust but Verify: Ask a knowledgeable adult to look"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is $75 worth avoiding a costly surprise?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "An inspection costs a little to prevent a potentially huge loss."
  },
  {
    "id": "ctx-maple-vet-surprise",
    "title": "The Unexpected Vet Bill",
    "prompt": "Your dog needs a $260 vet visit. *(Locked: hasPet.)* Your cushion has $300.",
    "topics": [
      "saving"
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
        "label": "Pay from cushion",
        "description": "→ covered, rebuild needed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Pay from cushion changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay from cushion changes the route and creates a finance tradeoff to notice.",
            "logText": "The Unexpected Vet Bill: Pay from cushion"
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
            "logText": "The Unexpected Vet Bill: Pay from cushion met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "No cushion—use BNPL/loan",
        "description": "→ debt forms.",
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
            "feedback": "No cushion—use BNPL/loan changes the route and creates a finance tradeoff to notice.",
            "explanation": "No cushion—use BNPL/loan changes the route and creates a finance tradeoff to notice.",
            "logText": "The Unexpected Vet Bill: No cushion—use BNPL/loan"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family to split",
        "description": "*SC*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
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
            "feedback": "Ask family to split changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask family to split changes the route and creates a finance tradeoff to notice.",
            "logText": "The Unexpected Vet Bill: Ask family to split"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you plan for costs you can't predict?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Pets bring joy and predictable + unpredictable costs."
  },
  {
    "id": "ctx-maple-wage-vs-inflation",
    "title": "A Raise That Isn't",
    "prompt": "You get a 3% raise, but prices rose 4% this year.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 21
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
        "label": "Calculate real change",
        "description": "→ purchasing power dropped ~1%.",
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
            "feedback": "Calculate real change changes the route and creates a finance tradeoff to notice.",
            "explanation": "Calculate real change changes the route and creates a finance tradeoff to notice.",
            "logText": "A Raise That Isn't: Calculate real change"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Celebrate the raise.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Celebrate the raise. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Celebrate the raise. changes the route and creates a finance tradeoff to notice.",
            "logText": "A Raise That Isn't: Celebrate the raise."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Negotiate or cut costs.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Negotiate or cut costs. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Negotiate or cut costs. changes the route and creates a finance tradeoff to notice.",
            "logText": "A Raise That Isn't: Negotiate or cut costs."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can a raise still leave you worse off?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A raise feels good but only beats inflation if it outpaces prices."
  },
  {
    "id": "ctx-maple-weatherproof-coat",
    "title": "The Two-Winter Coat",
    "prompt": "A cheap coat costs $30 but usually lasts one winter; a sturdier coat costs $60 and tends to last two. You have $70 saved. Which do you buy, and what do you do with the rest?",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Cheap coat, save $40",
        "description": "*short-term cash kept, may rebuy next year* → cash −30, savings +0;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              }
            ],
            "feedback": "$30/year for two years = $60 either way—plus the hassle of rebuying.",
            "explanation": "$30/year for two years = $60 either way—plus the hassle of rebuying.",
            "logText": "The Two-Winter Coat: Cheap coat, save $40"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sturdy coat, save $10",
        "description": "*higher upfront, lower yearly cost* → cash −60;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              }
            ],
            "feedback": "$60 ÷ 2 years = $30/year, same yearly cost but no rebuy risk.",
            "explanation": "$60 ÷ 2 years = $30/year, same yearly cost but no rebuy risk.",
            "logText": "The Two-Winter Coat: Sturdy coat, save $10"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cheap coat now, start a coat sinking fund",
        "description": "*plan ahead* → cash −30, goal +5/mo;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              }
            ],
            "feedback": "You're spreading next year's cost into small chunks.",
            "explanation": "You're spreading next year's cost into small chunks.",
            "logText": "The Two-Winter Coat: Cheap coat now, start a coat sinking fund"
          }
        ]
      }
    ],
    "reflectionPrompt": "Did you weigh cost-per-year or just the price tag?",
    "sourceNote": "MoneyLife context batch MAPLE-SPARROW-72; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Both coats cost ~$30/year; the \"right\" answer depends on your cash cushion now."
  }
];
