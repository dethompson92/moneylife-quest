import type { ScenarioEvent } from "../../../../types/game";

export const acornContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-acorn-acorn-capstone-estimate",
    "title": "From Acorn to Oak",
    "prompt": "Your snapshot shows ~$1,900 in assets, ~$600 in debts, ~$120 cash, and a savings goal you've climbed in rungs. Numbers carry \"estimate\" tags. *(Locked: Money Know-How ≥ 50; visible note: \"Needs net-worth + estimation skill.\")*",
    "topics": [
      "money-values",
      "credit",
      "saving",
      "budgeting"
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
        "label": "Read each figure as an estimate, compute net worth (~$1,300), and check liquidity ($120);",
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
            "feedback": "Read each figure as an estimate, compute net worth (~$1,300), and check liquidity ($120); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Read each figure as an estimate, compute net worth (~$1,300), and check liquidity ($120); changes the route and creates a finance tradeoff to notice.",
            "logText": "From Acorn to Oak: Read each figure as an estimate, compute net worth (~$1,300), and check liquidity ($120);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Trust the numbers as exact and plan tightly;",
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
            "feedback": "Trust the numbers as exact and plan tightly; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Trust the numbers as exact and plan tightly; changes the route and creates a finance tradeoff to notice.",
            "logText": "From Acorn to Oak: Trust the numbers as exact and plan tightly;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Walk through it with a mentor, noting the range around each estimate",
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
            "feedback": "Walk through it with a mentor, noting the range around each estimate changes the route and creates a finance tradeoff to notice.",
            "explanation": "Walk through it with a mentor, noting the range around each estimate changes the route and creates a finance tradeoff to notice.",
            "logText": "From Acorn to Oak: Walk through it with a mentor, noting the range around each estimate"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does an 'estimate' tag remind you to do before trusting a number?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A strong-looking net worth can still be cash-tight, and even that figure is an estimate to read with care."
  },
  {
    "id": "ctx-acorn-acorn-jar-start",
    "title": "The Acorn Jar",
    "prompt": "You want $48 for a project kit by week 6. You can save from your $11/week allowance.",
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
        "label": "Save $8/week",
        "description": "→ $48 in 6 weeks, exactly on time;",
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
            "feedback": "Save $8/week changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save $8/week changes the route and creates a finance tradeoff to notice.",
            "logText": "The Acorn Jar: Save $8/week"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save $5/week",
        "description": "→ $30, short by $18;",
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
            "feedback": "Save $5/week changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save $5/week changes the route and creates a finance tradeoff to notice.",
            "logText": "The Acorn Jar: Save $5/week"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $8/week and set $20/$35/$48 rungs.",
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
            "feedback": "Save $8/week and set $20/$35/$48 rungs. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save $8/week and set $20/$35/$48 rungs. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Acorn Jar: Save $8/week and set $20/$35/$48 rungs."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did naming a weekly amount change the goal?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A lower weekly amount leaves more to spend now but misses the deadline."
  },
  {
    "id": "ctx-acorn-average-allowance-spend",
    "title": "A Typical Week?",
    "prompt": "Your spending over four weeks was $7, $22, $9, and $14. You want to know a \"normal\" week.",
    "topics": [
      "banking",
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
        "label": "Compute the average ($13);",
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
            "feedback": "Compute the average ($13); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute the average ($13); changes the route and creates a finance tradeoff to notice.",
            "logText": "A Typical Week?: Compute the average ($13);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the highest ($22) to be safe;",
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
            "feedback": "Use the highest ($22) to be safe; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use the highest ($22) to be safe; changes the route and creates a finance tradeoff to notice.",
            "logText": "A Typical Week?: Use the highest ($22) to be safe;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Note the range and average both.",
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
            "feedback": "Note the range and average both. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Note the range and average both. changes the route and creates a finance tradeoff to notice.",
            "logText": "A Typical Week?: Note the range and average both."
          }
        ]
      }
    ],
    "reflectionPrompt": "Does the average tell the whole story?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The average plans the middle; the range warns about the spiky weeks."
  },
  {
    "id": "ctx-acorn-average-grade-of-deals",
    "title": "Three 'Sales",
    "prompt": "Three \"sale\" prices for the same item over a year were $42, $55, and $48; today's \"sale\" is $50.",
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
        "label": "Compare today to the average (~$48);",
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
            "feedback": "Compare today to the average (~$48); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare today to the average (~$48); changes the route and creates a finance tradeoff to notice.",
            "logText": "Three 'Sales: Compare today to the average (~$48);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Trust the word \"sale\";",
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
            "feedback": "Trust the word \"sale\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Trust the word \"sale\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Three 'Sales: Trust the word \"sale\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait for $42 or lower.",
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
            "feedback": "Wait for $42 or lower. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait for $42 or lower. changes the route and creates a finance tradeoff to notice.",
            "logText": "Three 'Sales: Wait for $42 or lower."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why compare a 'sale' to the usual price, not just the old high?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting risks a sellout; buying now risks paying above the norm."
  },
  {
    "id": "ctx-acorn-average-pathway-pay",
    "title": "Average Starting Pay",
    "prompt": "A career page lists an \"average starting pay\" for a field, but actual offers ranged widely by employer and location.",
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
        "label": "Treat the average as a midpoint, research the range;",
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
            "feedback": "Treat the average as a midpoint, research the range; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Treat the average as a midpoint, research the range; changes the route and creates a finance tradeoff to notice.",
            "logText": "Average Starting Pay: Treat the average as a midpoint, research the range;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Expect exactly the average;",
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
            "feedback": "Expect exactly the average; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Expect exactly the average; changes the route and creates a finance tradeoff to notice.",
            "logText": "Average Starting Pay: Expect exactly the average;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor about real local offers",
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
            "feedback": "Ask a mentor about real local offers changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor about real local offers changes the route and creates a finance tradeoff to notice.",
            "logText": "Average Starting Pay: Ask a mentor about real local offers"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why research the range, not just the average, when exploring careers?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Averages help compare fields; they don't predict any single job offer."
  },
  {
    "id": "ctx-acorn-average-return-myth",
    "title": "7% Average Means…?",
    "prompt": "A learning fund shows a \"7% average yearly return.\" A classmate expects exactly 7% every year.",
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
        "label": "Show the year-to-year swings around 7%;",
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
            "feedback": "Show the year-to-year swings around 7%; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Show the year-to-year swings around 7%; changes the route and creates a finance tradeoff to notice.",
            "logText": "7% Average Means…?: Show the year-to-year swings around 7%;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Expect a steady 7%;",
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
            "feedback": "Expect a steady 7%; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Expect a steady 7%; changes the route and creates a finance tradeoff to notice.",
            "logText": "7% Average Means…?: Expect a steady 7%;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Plan for a long horizon to ride out swings.",
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
            "feedback": "Plan for a long horizon to ride out swings. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Plan for a long horizon to ride out swings. changes the route and creates a finance tradeoff to notice.",
            "logText": "7% Average Means…?: Plan for a long horizon to ride out swings."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do averages mislead in the short run?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Averages guide long-term planning but say little about any single year."
  },
  {
    "id": "ctx-acorn-average-tip-week",
    "title": "An Average Week",
    "prompt": "Your tip job *averages* $100/week, but weeks ranged $60 to $150. You need to set a budget.",
    "topics": [
      "career",
      "money-values",
      "budgeting"
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
        "label": "Budget on $100 (the average);",
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
            "feedback": "Budget on $100 (the average); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget on $100 (the average); changes the route and creates a finance tradeoff to notice.",
            "logText": "An Average Week: Budget on $100 (the average);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget on $60 (the low end);",
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
            "feedback": "Budget on $60 (the low end); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget on $60 (the low end); changes the route and creates a finance tradeoff to notice.",
            "logText": "An Average Week: Budget on $60 (the low end);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Budget on $150 and hope.",
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
            "feedback": "Budget on $150 and hope. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget on $150 and hope. changes the route and creates a finance tradeoff to notice.",
            "logText": "An Average Week: Budget on $150 and hope."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can budgeting on the average leave you short?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Budgeting low feels strict but is safest; the average is realistic but risky in lean weeks."
  },
  {
    "id": "ctx-acorn-average-utility-bill",
    "title": "Budget Billing?",
    "prompt": "A utility offers \"budget billing\" — pay the *average* ($45/month) instead of the real amount that swings $20–$80 by season. *(Locked: hasRecurringBill.)*",
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
        "label": "Take budget billing for predictable payments;",
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
            "feedback": "Take budget billing for predictable payments; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Take budget billing for predictable payments; changes the route and creates a finance tradeoff to notice.",
            "logText": "Budget Billing?: Take budget billing for predictable payments;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay actual each month;",
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
            "feedback": "Pay actual each month; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay actual each month; changes the route and creates a finance tradeoff to notice.",
            "logText": "Budget Billing?: Pay actual each month;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay actual but save for high-bill months.",
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
            "feedback": "Pay actual but save for high-bill months. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay actual but save for high-bill months. changes the route and creates a finance tradeoff to notice.",
            "logText": "Budget Billing?: Pay actual but save for high-bill months."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a predictable average worth more than paying the exact amount?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Budget billing eases planning; paying actual lets low months stay cheap."
  },
  {
    "id": "ctx-acorn-average-vs-guarantee-gig",
    "title": "They Said I'd Make $200",
    "prompt": "A gig advertises \"earn an average of $200/week.\" Your first weeks vary widely.",
    "topics": [
      "life-after-high-school",
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
        "label": "Treat $200 as an average, plan for less;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 200
              }
            ],
            "feedback": "Treat $200 as an average, plan for less; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Treat $200 as an average, plan for less; changes the route and creates a finance tradeoff to notice.",
            "logText": "They Said I'd Make $200: Treat $200 as an average, plan for less;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Count on $200 every week;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 200
              }
            ],
            "feedback": "Count on $200 every week; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Count on $200 every week; changes the route and creates a finance tradeoff to notice.",
            "logText": "They Said I'd Make $200: Count on $200 every week;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Track your real weekly earnings",
        "description": "→ randomized spread.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 200
              }
            ],
            "feedback": "Track your real weekly earnings changes the route and creates a finance tradeoff to notice.",
            "explanation": "Track your real weekly earnings changes the route and creates a finance tradeoff to notice.",
            "logText": "They Said I'd Make $200: Track your real weekly earnings"
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
            "logText": "They Said I'd Make $200: Track your real weekly earnings met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is 'average earnings' a careful claim to read?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "The gig can pay well on average while still leaving lean weeks to plan for."
  },
  {
    "id": "ctx-acorn-comparable-grocery-sizes",
    "title": "Three Sizes, One Choice",
    "prompt": "Juice comes in 16 oz ($2.40), 32 oz ($4.00), and 64 oz ($8.32). They're not obviously comparable.",
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
        "label": "Put all three in cents-per-ounce;",
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
            "feedback": "Put all three in cents-per-ounce; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Put all three in cents-per-ounce; changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Sizes, One Choice: Put all three in cents-per-ounce;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the biggest (assume cheapest);",
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
            "feedback": "Buy the biggest (assume cheapest); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the biggest (assume cheapest); changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Sizes, One Choice: Buy the biggest (assume cheapest);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy the size you'll finish before it spoils.",
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
            "feedback": "Buy the size you'll finish before it spoils. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the size you'll finish before it spoils. changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Sizes, One Choice: Buy the size you'll finish before it spoils."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why isn't the biggest always cheapest per ounce?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The 32oz wins per ounce here — and waste would erase any 'bulk' savings on the 64oz."
  },
  {
    "id": "ctx-acorn-comparable-jobs",
    "title": "More Pay, More Travel",
    "prompt": "Job A: $15/hr, 30 min commute, $5/day transit. Job B: $13/hr, 5 min walk, $0 transit. Same 4-hr shifts.",
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
        "label": "Compute take-home per shift after transit;",
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
            "feedback": "Compute take-home per shift after transit; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute take-home per shift after transit; changes the route and creates a finance tradeoff to notice.",
            "logText": "More Pay, More Travel: Compute take-home per shift after transit;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pick A (higher wage);",
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
            "feedback": "Pick A (higher wage); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pick A (higher wage); changes the route and creates a finance tradeoff to notice.",
            "logText": "More Pay, More Travel: Pick A (higher wage);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick by what fits your schedule, knowing the math.",
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
            "feedback": "Pick by what fits your schedule, knowing the math. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pick by what fits your schedule, knowing the math. changes the route and creates a finance tradeoff to notice.",
            "logText": "More Pay, More Travel: Pick by what fits your schedule, knowing the math."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why subtract commuting before comparing wages?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A still edges B on money, but the gap shrinks once costs are equalized."
  },
  {
    "id": "ctx-acorn-comparable-loan-terms",
    "title": "Two Ways to Borrow $600",
    "prompt": "For $600: Loan A is $110/month for 6 months; Loan B is $55/month for 12 months. *(Locked: eligibleForCredit.)*",
    "topics": [
      "credit",
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
        "label": "Compute total cost of each;",
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
            "feedback": "Compute total cost of each; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute total cost of each; changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Ways to Borrow $600: Compute total cost of each;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pick B (smaller payment);",
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
            "feedback": "Pick B (smaller payment); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pick B (smaller payment); changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Ways to Borrow $600: Pick B (smaller payment);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow less or save first.",
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
            "feedback": "Borrow less or save first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow less or save first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Ways to Borrow $600: Borrow less or save first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is the monthly payment a misleading comparison?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "B's smaller payment feels easier but ties you up longer; compare full totals."
  },
  {
    "id": "ctx-acorn-comparable-membership-vs-dropin",
    "title": "Member or Drop-In?",
    "prompt": "A space charges $35/month membership or $6 per drop-in. You'd go about 4 times a month.",
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
        "label": "Compute 4 × $6 = $24 vs. $35;",
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
            "feedback": "Compute 4 × $6 = $24 vs. $35; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute 4 × $6 = $24 vs. $35; changes the route and creates a finance tradeoff to notice.",
            "logText": "Member or Drop-In?: Compute 4 × $6 = $24 vs. $35;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Get the membership \"to commit\";",
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
            "feedback": "Get the membership \"to commit\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Get the membership \"to commit\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Member or Drop-In?: Get the membership \"to commit\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Drop in for now, switch if you go more.",
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
            "feedback": "Drop in for now, switch if you go more. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Drop in for now, switch if you go more. changes the route and creates a finance tradeoff to notice.",
            "logText": "Member or Drop-In?: Drop in for now, switch if you go more."
          }
        ]
      }
    ],
    "reflectionPrompt": "How many visits make the membership worth it?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Membership rewards frequent use; drop-in saves money for occasional use."
  },
  {
    "id": "ctx-acorn-cooling-off-cart-hold",
    "title": "Leave It in the Cart",
    "prompt": "A $28 want sits in your cart. You set a rule to wait a day on anything over $25.",
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
        "label": "Wait a day, then decide",
        "description": "→ randomized: still want it / lost interest;",
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
            "feedback": "Wait a day, then decide changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait a day, then decide changes the route and creates a finance tradeoff to notice.",
            "logText": "Leave It in the Cart: Wait a day, then decide"
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
            "logText": "Leave It in the Cart: Wait a day, then decide met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now;",
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
            "feedback": "Buy now; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now; changes the route and creates a finance tradeoff to notice.",
            "logText": "Leave It in the Cart: Buy now;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Move it to a wishlist with a budget date.",
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
            "feedback": "Move it to a wishlist with a budget date. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Move it to a wishlist with a budget date. changes the route and creates a finance tradeoff to notice.",
            "logText": "Leave It in the Cart: Move it to a wishlist with a budget date."
          }
        ]
      }
    ],
    "reflectionPrompt": "What price should trigger a wait for you?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Waiting may mean missing a sale; it also filters out fads."
  },
  {
    "id": "ctx-acorn-cooling-off-preorder",
    "title": "Pre-Order Hype",
    "prompt": "A $45 pre-order is hyped now but won't ship for two months. You can cancel free until it ships.",
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
        "label": "Pre-order",
        "description": "reassess before it ships;",
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
            "feedback": "Pre-order changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pre-order changes the route and creates a finance tradeoff to notice.",
            "logText": "Pre-Order Hype: Pre-order"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait and decide later without pre-ordering;",
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
            "feedback": "Wait and decide later without pre-ordering; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait and decide later without pre-ordering; changes the route and creates a finance tradeoff to notice.",
            "logText": "Pre-Order Hype: Wait and decide later without pre-ordering;"
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
            "logText": "Pre-Order Hype: Wait and decide later without pre-ordering; met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pre-order and forget about it",
        "description": "→ randomized: still want it / wish you'd canceled.",
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
            "feedback": "Pre-order and forget about it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pre-order and forget about it changes the route and creates a finance tradeoff to notice.",
            "logText": "Pre-Order Hype: Pre-order and forget about it"
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
            "logText": "Pre-Order Hype: Pre-order and forget about it met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Does a cancel window only help if you remember it?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Pre-ordering reserves it; forgetting the window turns a maybe into a definite charge."
  },
  {
    "id": "ctx-acorn-cooling-off-sneakers",
    "title": "Sleep On It",
    "prompt": "A hyped $57 shoe drops today. You feel you *must* have it. A wait-one-day option exists.",
    "topics": [
      "consumer-skills"
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
        "label": "Wait a day, decide tomorrow;",
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
            "feedback": "Wait a day, decide tomorrow; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait a day, decide tomorrow; changes the route and creates a finance tradeoff to notice.",
            "logText": "Sleep On It: Wait a day, decide tomorrow;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now before they sell out;",
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
            "feedback": "Buy now before they sell out; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now before they sell out; changes the route and creates a finance tradeoff to notice.",
            "logText": "Sleep On It: Buy now before they sell out;"
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Add to a wishlist and budget for it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Add to a wishlist and budget for it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Sleep On It: Add to a wishlist and budget for it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Have you ever stopped wanting something after waiting?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting risks it selling out; buying now risks regret if the hype fades."
  },
  {
    "id": "ctx-acorn-cooling-off-upgrade-urge",
    "title": "The Newer Model Itch",
    "prompt": "Your device works fine, but a newer model is out and you suddenly \"need\" it ($220). You set a 2-week wait.",
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
        "label": "Wait 2 weeks, see if the urge lasts;",
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
            "feedback": "Wait 2 weeks, see if the urge lasts; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait 2 weeks, see if the urge lasts; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Newer Model Itch: Wait 2 weeks, see if the urge lasts;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now;",
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
            "feedback": "Buy now; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Newer Model Itch: Buy now;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "List what's actually wrong with your current one first.",
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
            "feedback": "List what's actually wrong with your current one first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "List what's actually wrong with your current one first. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Newer Model Itch: List what's actually wrong with your current one first."
          }
        ]
      }
    ],
    "reflectionPrompt": "What would make an upgrade a real need vs. a want?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting may cost a sale price; it filters fads from genuine needs."
  },
  {
    "id": "ctx-acorn-coupon-stack-grocery",
    "title": "Coupon on a Sale Price",
    "prompt": "A $30 grocery order is 10% off this week, plus a 5%-off member coupon on the reduced price.",
    "topics": [
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
        "label": "Compute step by step;",
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
            "feedback": "Compute step by step; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute step by step; changes the route and creates a finance tradeoff to notice.",
            "logText": "Coupon on a Sale Price: Compute step by step;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Call it 15% off;",
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
            "feedback": "Call it 15% off; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Call it 15% off; changes the route and creates a finance tradeoff to notice.",
            "logText": "Coupon on a Sale Price: Call it 15% off;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Check the order of the discounts.",
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
            "feedback": "Check the order of the discounts. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Check the order of the discounts. changes the route and creates a finance tradeoff to notice.",
            "logText": "Coupon on a Sale Price: Check the order of the discounts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is the order of discounts worth checking?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Tiny gap here, but the *method* matters on bigger purchases."
  },
  {
    "id": "ctx-acorn-coverage-quiet-year",
    "title": "Did I Waste It?",
    "prompt": "You paid $12/month for phone protection all year and never needed it. It feels like wasted money.",
    "topics": [
      "insurance",
      "consumer-skills"
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
        "label": "Keep it",
        "description": "you bought certainty, not a payout;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 12
              }
            ],
            "feedback": "Keep it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it changes the route and creates a finance tradeoff to notice.",
            "logText": "Did I Waste It?: Keep it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Drop it now",
        "description": "→ randomized: fine / a crack next month;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 12
              }
            ],
            "feedback": "Drop it now changes the route and creates a finance tradeoff to notice.",
            "explanation": "Drop it now changes the route and creates a finance tradeoff to notice.",
            "logText": "Did I Waste It?: Drop it now"
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
            "logText": "Did I Waste It?: Drop it now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Switch to a cheaper plan.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 12
              }
            ],
            "feedback": "Switch to a cheaper plan. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Switch to a cheaper plan. changes the route and creates a finance tradeoff to notice.",
            "logText": "Did I Waste It?: Switch to a cheaper plan."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is unused coverage really 'wasted'?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Dropping it saves money if nothing breaks — but that's a bet, not a certainty."
  },
  {
    "id": "ctx-acorn-daily-drip-snack",
    "title": "The $2 Habit",
    "prompt": "You buy a $2 snack every school day (about 180 days). A one-time $120 gadget also tempts you, and it feels like the bigger cost.",
    "topics": [
      "life-after-high-school",
      "consumer-skills"
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
        "label": "Compare the yearly snack total to the gadget;",
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
            "feedback": "Compare the yearly snack total to the gadget; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare the yearly snack total to the gadget; changes the route and creates a finance tradeoff to notice.",
            "logText": "The $2 Habit: Compare the yearly snack total to the gadget;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume the gadget is the bigger cost;",
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
            "feedback": "Assume the gadget is the bigger cost; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Assume the gadget is the bigger cost; changes the route and creates a finance tradeoff to notice.",
            "logText": "The $2 Habit: Assume the gadget is the bigger cost;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep the snack but cut to 3 days/week.",
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
            "feedback": "Keep the snack but cut to 3 days/week. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep the snack but cut to 3 days/week. changes the route and creates a finance tradeoff to notice.",
            "logText": "The $2 Habit: Keep the snack but cut to 3 days/week."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which surprised you: the habit or the one-time buy?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The snack isn't \"bad\" — the point is noticing where the money actually goes."
  },
  {
    "id": "ctx-acorn-default-app-subscription",
    "title": "Free, Then Not",
    "prompt": "A free trial auto-fills your saved card and pre-sets billing to start in 7 days. You can set a reminder or remove the card.",
    "topics": [
      "consumer-skills",
      "budgeting"
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
        "label": "Set a cancel reminder for day 6;",
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
            "feedback": "Set a cancel reminder for day 6; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set a cancel reminder for day 6; changes the route and creates a finance tradeoff to notice.",
            "logText": "Free, Then Not: Set a cancel reminder for day 6;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Do nothing",
        "description": "→ randomized: you remember / you get charged $9;",
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
            "feedback": "Do nothing changes the route and creates a finance tradeoff to notice.",
            "explanation": "Do nothing changes the route and creates a finance tradeoff to notice.",
            "logText": "Free, Then Not: Do nothing"
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
            "logText": "Free, Then Not: Do nothing met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a trial that doesn't require a card.",
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
            "feedback": "Use a trial that doesn't require a card. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use a trial that doesn't require a card. changes the route and creates a finance tradeoff to notice.",
            "logText": "Free, Then Not: Use a trial that doesn't require a card."
          }
        ]
      }
    ],
    "reflectionPrompt": "Who does the 'do nothing' path benefit?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Trials can be worth it; the risk is the default billing winning by your inaction."
  },
  {
    "id": "ctx-acorn-default-cookie-consent",
    "title": "Everything Pre-Checked",
    "prompt": "A free app has every data-sharing option pre-checked \"on.\" You can turn some off.",
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
        "label": "Review and turn off what you don't want;",
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
            "feedback": "Review and turn off what you don't want; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Review and turn off what you don't want; changes the route and creates a finance tradeoff to notice.",
            "logText": "Everything Pre-Checked: Review and turn off what you don't want;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave all on (faster);",
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
            "feedback": "Leave all on (faster); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Leave all on (faster); changes the route and creates a finance tradeoff to notice.",
            "logText": "Everything Pre-Checked: Leave all on (faster);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look for an app with better defaults.",
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
            "feedback": "Look for an app with better defaults. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Look for an app with better defaults. changes the route and creates a finance tradeoff to notice.",
            "logText": "Everything Pre-Checked: Look for an app with better defaults."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why are convenient defaults not always in your favor?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Leaving defaults on is faster; reviewing them protects what you share. (Kept general/fictional.)"
  },
  {
    "id": "ctx-acorn-default-overdraft-optin",
    "title": "The Pre-Selected 'Yes",
    "prompt": "A bank form has overdraft \"protection\" ($35/use) pre-selected as \"Yes.\" *(Locked: hasChecking.)*",
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
        "label": "Change it to \"No, just decline the purchase\";",
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
            "feedback": "Change it to \"No, just decline the purchase\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Change it to \"No, just decline the purchase\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Selected 'Yes: Change it to \"No, just decline the purchase\";"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave the pre-selected \"Yes\";",
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
            "feedback": "Leave the pre-selected \"Yes\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Leave the pre-selected \"Yes\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Selected 'Yes: Leave the pre-selected \"Yes\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose \"No\" plus set low-balance alerts.",
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
            "feedback": "Choose \"No\" plus set low-balance alerts. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Choose \"No\" plus set low-balance alerts. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Selected 'Yes: Choose \"No\" plus set low-balance alerts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why read what a form has pre-selected for you?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Opting out risks a declined card; the default \"Yes\" risks repeated $35 fees."
  },
  {
    "id": "ctx-acorn-default-printer-color",
    "title": "Color by Default",
    "prompt": "A shared printer defaults to color ($0.25/page) when black-and-white ($0.08/page) would do for your 20-page draft.",
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
        "label": "Switch to black-and-white;",
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
            "feedback": "Switch to black-and-white; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Switch to black-and-white; changes the route and creates a finance tradeoff to notice.",
            "logText": "Color by Default: Switch to black-and-white;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Print in color (default);",
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
            "feedback": "Print in color (default); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Print in color (default); changes the route and creates a finance tradeoff to notice.",
            "logText": "Color by Default: Print in color (default);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Print only the pages that need color.",
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
            "feedback": "Print only the pages that need color. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Print only the pages that need color. changes the route and creates a finance tradeoff to notice.",
            "logText": "Color by Default: Print only the pages that need color."
          }
        ]
      }
    ],
    "reflectionPrompt": "How much can a single default setting cost?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Color looks nicer; for a draft, the default quietly tripled the cost."
  },
  {
    "id": "ctx-acorn-default-renew-checkbox",
    "title": "The Pre-Checked Box",
    "prompt": "Signing up for a $7/month service, you notice \"auto-renew\" is already checked and \"email me before renewal\" is unchecked.",
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
        "label": "Leave both as-is;",
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
            "feedback": "Leave both as-is; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Leave both as-is; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Checked Box: Leave both as-is;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Uncheck auto-renew, check the reminder;",
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
            "feedback": "Uncheck auto-renew, check the reminder; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Uncheck auto-renew, check the reminder; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Checked Box: Uncheck auto-renew, check the reminder;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep auto-renew but turn on the reminder.",
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
            "feedback": "Keep auto-renew but turn on the reminder. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep auto-renew but turn on the reminder. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Checked Box: Keep auto-renew but turn on the reminder."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which default would you always check first?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Auto-renew is convenient if you'll keep using it; a reminder protects you either way."
  },
  {
    "id": "ctx-acorn-default-savings-off",
    "title": "Savings Was Switched Off",
    "prompt": "Your pay setup has \"auto-save 10%\" pre-set to OFF. You can flip it on.",
    "topics": [
      "saving"
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
        "label": "Flip auto-save to 10% ON;",
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
            "feedback": "Flip auto-save to 10% ON; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Flip auto-save to 10% ON; changes the route and creates a finance tradeoff to notice.",
            "logText": "Savings Was Switched Off: Flip auto-save to 10% ON;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave it off, save manually;",
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
            "feedback": "Leave it off, save manually; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Leave it off, save manually; changes the route and creates a finance tradeoff to notice.",
            "logText": "Savings Was Switched Off: Leave it off, save manually;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn it on at 5% to start.",
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
            "feedback": "Turn it on at 5% to start. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Turn it on at 5% to start. changes the route and creates a finance tradeoff to notice.",
            "logText": "Savings Was Switched Off: Turn it on at 5% to start."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does an 'off' default usually mean $0 saved?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Auto-save builds funds quietly; manual keeps flexibility if income is unsteady."
  },
  {
    "id": "ctx-acorn-default-tip-screen",
    "title": "The Pre-Set Tip",
    "prompt": "A screen pre-selects a 25% tip on a $16 order. You can adjust it.",
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
        "label": "Keep 25% ($4.00);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 25
              }
            ],
            "feedback": "Keep 25% ($4.00); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep 25% ($4.00); changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Set Tip: Keep 25% ($4.00);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose 18% ($2.88);",
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
            "feedback": "Choose 18% ($2.88); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Choose 18% ($2.88); changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Set Tip: Choose 18% ($2.88);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Enter your own amount.",
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
            "feedback": "Enter your own amount. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Enter your own amount. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Pre-Set Tip: Enter your own amount."
          }
        ]
      }
    ],
    "reflectionPrompt": "Should a screen decide your tip for you?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher tips are generous; the point is *you* choose, not the default."
  },
  {
    "id": "ctx-acorn-emergency-rebuild-pace",
    "title": "Refilling the Cushion",
    "prompt": "A surprise drained your emergency fund to $0. Essentials run $300/month; you can refill at $25, $50, or $75/month.",
    "topics": [
      "investing",
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
        "label": "Refill $50/month",
        "description": "steady;",
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
            "feedback": "Refill $50/month changes the route and creates a finance tradeoff to notice.",
            "explanation": "Refill $50/month changes the route and creates a finance tradeoff to notice.",
            "logText": "Refilling the Cushion: Refill $50/month"
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
            "logText": "Refilling the Cushion: Refill $50/month met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "$25/month",
        "description": "gentle but slow;",
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
            "feedback": "$25/month changes the route and creates a finance tradeoff to notice.",
            "explanation": "$25/month changes the route and creates a finance tradeoff to notice.",
            "logText": "Refilling the Cushion: $25/month"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "$75/month",
        "description": "fast but tight.",
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
            "feedback": "$75/month changes the route and creates a finance tradeoff to notice.",
            "explanation": "$75/month changes the route and creates a finance tradeoff to notice.",
            "logText": "Refilling the Cushion: $75/month"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you balance rebuilding speed with daily needs?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Faster rebuilding protects you sooner but squeezes everything else now."
  },
  {
    "id": "ctx-acorn-endowment-inherited-item",
    "title": "Worth More to Me",
    "prompt": "You own a hand-me-down item with real sentimental value. You're tight on cash; market resale is ~$80, but it feels \"priceless.",
    "topics": [
      "money-values",
      "investing",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Keep it",
        "description": "sentimental value is legitimate;",
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
            "feedback": "Keep it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it changes the route and creates a finance tradeoff to notice.",
            "logText": "Worth More to Me: Keep it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell at market ~$80 for the cash;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 80
              }
            ],
            "feedback": "Sell at market ~$80 for the cash; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell at market ~$80 for the cash; changes the route and creates a finance tradeoff to notice.",
            "logText": "Worth More to Me: Sell at market ~$80 for the cash;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Find another way to raise the cash and keep it.",
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
            "feedback": "Find another way to raise the cash and keep it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Find another way to raise the cash and keep it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Worth More to Me: Find another way to raise the cash and keep it."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is keeping something worth more than the money?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Keeping it honors meaning; selling solves a cash need — both can be right depending on your situation."
  },
  {
    "id": "ctx-acorn-endowment-keep-broken",
    "title": "But I Paid a Lot for It",
    "prompt": "A gadget you paid $90 for barely works. Repair is $50; a reliable replacement is $70. You feel attached to the original.",
    "topics": [
      "career",
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
        "label": "Replace for $70, let the old one go;",
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
            "feedback": "Replace for $70, let the old one go; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Replace for $70, let the old one go; changes the route and creates a finance tradeoff to notice.",
            "logText": "But I Paid a Lot for It: Replace for $70, let the old one go;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Repair the $90 one because \"it cost a lot\";",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -90
              }
            ],
            "feedback": "Repair the $90 one because \"it cost a lot\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Repair the $90 one because \"it cost a lot\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "But I Paid a Lot for It: Repair the $90 one because \"it cost a lot\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare repair vs. replace ignoring what you paid.",
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
            "feedback": "Compare repair vs. replace ignoring what you paid. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare repair vs. replace ignoring what you paid. changes the route and creates a finance tradeoff to notice.",
            "logText": "But I Paid a Lot for It: Compare repair vs. replace ignoring what you paid."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did attachment and 'I paid a lot' pull at you?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Repair is cheaper but risky; replacement costs more but is reliable — the past price shouldn't decide it."
  },
  {
    "id": "ctx-acorn-endowment-resale",
    "title": "Would You Buy It Back?",
    "prompt": "You're selling a used item you love. You want $40; similar ones sell for about $25. A buyer hesitates.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
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
        "label": "Reprice near $25 to actually sell;",
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
            "feedback": "Reprice near $25 to actually sell; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Reprice near $25 to actually sell; changes the route and creates a finance tradeoff to notice.",
            "logText": "Would You Buy It Back?: Reprice near $25 to actually sell;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hold firm at $40;",
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
            "feedback": "Hold firm at $40; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Hold firm at $40; changes the route and creates a finance tradeoff to notice.",
            "logText": "Would You Buy It Back?: Hold firm at $40;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask yourself: would you *buy* it for $40 today?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -40
              }
            ],
            "feedback": "Ask yourself: would you *buy* it for $40 today? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask yourself: would you *buy* it for $40 today? changes the route and creates a finance tradeoff to notice.",
            "logText": "Would You Buy It Back?: Ask yourself: would you *buy* it for $40 today?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Did 'it's mine' make it feel worth more?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Holding at $40 honors your attachment but may mean it never sells."
  },
  {
    "id": "ctx-acorn-endowment-sell-old-phone",
    "title": "It Was My First Phone",
    "prompt": "Your old phone has sentimental value. Trade-in offers $60; you feel it's \"worth $110.\" Market resale is about $70.",
    "topics": [
      "money-values",
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
        "label": "Sell near market ($70) or trade in ($60);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 70
              }
            ],
            "feedback": "Sell near market ($70) or trade in ($60); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell near market ($70) or trade in ($60); changes the route and creates a finance tradeoff to notice.",
            "logText": "It Was My First Phone: Sell near market ($70) or trade in ($60);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hold out for $110;",
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
            "feedback": "Hold out for $110; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Hold out for $110; changes the route and creates a finance tradeoff to notice.",
            "logText": "It Was My First Phone: Hold out for $110;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it as a backup, no sale.",
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
            "feedback": "Keep it as a backup, no sale. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it as a backup, no sale. changes the route and creates a finance tradeoff to notice.",
            "logText": "It Was My First Phone: Keep it as a backup, no sale."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does attachment change what you think something's worth?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Keeping it as a backup is valid; holding out for $110 likely means no sale."
  },
  {
    "id": "ctx-acorn-endowment-trade-cards",
    "title": "Even Trade?",
    "prompt": "A friend offers a fair, even swap of collectibles. Yours feels \"more special\" because it's yours, though they're worth about the same.",
    "topics": [
      "money-values",
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
        "label": "Make the even trade;",
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
            "feedback": "Make the even trade; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Make the even trade; changes the route and creates a finance tradeoff to notice.",
            "logText": "Even Trade?: Make the even trade;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Demand something extra;",
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
            "feedback": "Demand something extra; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Demand something extra; changes the route and creates a finance tradeoff to notice.",
            "logText": "Even Trade?: Demand something extra;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Check typical values before deciding.",
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
            "feedback": "Check typical values before deciding. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Check typical values before deciding. changes the route and creates a finance tradeoff to notice.",
            "logText": "Even Trade?: Check typical values before deciding."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did 'mine is better' creep in?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Holding out for extra can kill a fair deal over a feeling, not a fact."
  },
  {
    "id": "ctx-acorn-estimate-bulk-event",
    "title": "Enough for the Party?",
    "prompt": "You're hosting 14 friends. Cups come 8 per pack at $2.50. Estimate packs before buying.",
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
        "label": "Estimate (14 ÷ 8 ≈ 2 packs), then confirm;",
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
            "feedback": "Estimate (14 ÷ 8 ≈ 2 packs), then confirm; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate (14 ÷ 8 ≈ 2 packs), then confirm; changes the route and creates a finance tradeoff to notice.",
            "logText": "Enough for the Party?: Estimate (14 ÷ 8 ≈ 2 packs), then confirm;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy \"a few packs\";",
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
            "feedback": "Buy \"a few packs\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy \"a few packs\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Enough for the Party?: Buy \"a few packs\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy 2 packs and check it's enough.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Buy 2 packs and check it's enough. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy 2 packs and check it's enough. changes the route and creates a finance tradeoff to notice.",
            "logText": "Enough for the Party?: Buy 2 packs and check it's enough."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why round up when planning quantities for people?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Two packs avoid running short; estimating keeps you from over-buying."
  },
  {
    "id": "ctx-acorn-estimate-class-fundraiser",
    "title": "Will We Hit the Goal?",
    "prompt": "Your class needs $200. There are 25 students; each can likely sell about 3 items at $3 profit.",
    "topics": [
      "investing",
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
        "label": "Estimate (25 × 3 × $3 = $225), then plan;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 3
              }
            ],
            "feedback": "Estimate (25 × 3 × $3 = $225), then plan; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate (25 × 3 × $3 = $225), then plan; changes the route and creates a finance tradeoff to notice.",
            "logText": "Will We Hit the Goal?: Estimate (25 × 3 × $3 = $225), then plan;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hope it works out;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 3
              }
            ],
            "feedback": "Hope it works out; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Hope it works out; changes the route and creates a finance tradeoff to notice.",
            "logText": "Will We Hit the Goal?: Hope it works out;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a per-student mini-goal.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 3
              }
            ],
            "feedback": "Set a per-student mini-goal. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set a per-student mini-goal. changes the route and creates a finance tradeoff to notice.",
            "logText": "Will We Hit the Goal?: Set a per-student mini-goal."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does a per-person target make a big goal doable?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Per-student goals share the load but depend on everyone pitching in."
  },
  {
    "id": "ctx-acorn-estimate-fuel-trip",
    "title": "Will the Card Cover It?",
    "prompt": "You have $19 on a transit card. A round trip is $2.75 each way, and you have 4 trips this week.",
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
        "label": "Estimate first (8 × ~$3 ≈ $24), spot the shortfall;",
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
            "feedback": "Estimate first (8 × ~$3 ≈ $24), spot the shortfall; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate first (8 × ~$3 ≈ $24), spot the shortfall; changes the route and creates a finance tradeoff to notice.",
            "logText": "Will the Card Cover It?: Estimate first (8 × ~$3 ≈ $24), spot the shortfall;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume $19 is plenty;",
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
            "feedback": "Assume $19 is plenty; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Assume $19 is plenty; changes the route and creates a finance tradeoff to notice.",
            "logText": "Will the Card Cover It?: Assume $19 is plenty;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Reload before you run out.",
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
            "feedback": "Reload before you run out. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Reload before you run out. changes the route and creates a finance tradeoff to notice.",
            "logText": "Will the Card Cover It?: Reload before you run out."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did estimating prevent getting stranded?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Reloading early avoids a stranding; estimating tells you when it's needed."
  },
  {
    "id": "ctx-acorn-estimate-interest-simple",
    "title": "Roughly How Much Interest?",
    "prompt": "You save $400 at about 5% simple interest for a year. Estimate the interest before computing.",
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
        "label": "Estimate (~$20), then compute;",
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
            "feedback": "Estimate (~$20), then compute; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate (~$20), then compute; changes the route and creates a finance tradeoff to notice.",
            "logText": "Roughly How Much Interest?: Estimate (~$20), then compute;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess \"a few bucks\";",
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
            "feedback": "Guess \"a few bucks\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Guess \"a few bucks\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Roughly How Much Interest?: Guess \"a few bucks\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare to 5% of $400 directly.",
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
            "feedback": "Compare to 5% of $400 directly. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare to 5% of $400 directly. changes the route and creates a finance tradeoff to notice.",
            "logText": "Roughly How Much Interest?: Compare to 5% of $400 directly."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does '10% then halve it' help estimate 5%?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating builds a quick check on whether a quoted interest number is reasonable."
  },
  {
    "id": "ctx-acorn-estimate-paint-project",
    "title": "How Much Paint?",
    "prompt": "A project needs about 38 feet of trim. Paint covers ~12 feet per small can at $4/can. You estimate first.",
    "topics": [
      "budgeting",
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
        "label": "Estimate cans (38 ÷ 12 ≈ 4 cans), then compute cost;",
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
            "feedback": "Estimate cans (38 ÷ 12 ≈ 4 cans), then compute cost; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate cans (38 ÷ 12 ≈ 4 cans), then compute cost; changes the route and creates a finance tradeoff to notice.",
            "logText": "How Much Paint?: Estimate cans (38 ÷ 12 ≈ 4 cans), then compute cost;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess \"a couple cans\";",
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
            "feedback": "Guess \"a couple cans\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Guess \"a couple cans\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "How Much Paint?: Guess \"a couple cans\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy extra to be safe.",
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
            "feedback": "Buy extra to be safe. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy extra to be safe. changes the route and creates a finance tradeoff to notice.",
            "logText": "How Much Paint?: Buy extra to be safe."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why round *up* when buying supplies?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Buying extra avoids a second trip but spends a little more."
  },
  {
    "id": "ctx-acorn-estimate-paycheck-net",
    "title": "Guess Your Take-Home",
    "prompt": "You're offered $13/hr for 12 hours. Before seeing the stub, estimate your take-home if roughly 20% comes out.",
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
        "label": "Estimate: $156 gross, ~20% out ≈ $125 net;",
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
            "feedback": "Estimate: $156 gross, ~20% out ≈ $125 net; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate: $156 gross, ~20% out ≈ $125 net; changes the route and creates a finance tradeoff to notice.",
            "logText": "Guess Your Take-Home: Estimate: $156 gross, ~20% out ≈ $125 net;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Expect the full $156;",
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
            "feedback": "Expect the full $156; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Expect the full $156; changes the route and creates a finance tradeoff to notice.",
            "logText": "Guess Your Take-Home: Expect the full $156;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask how deductions are figured.",
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
            "feedback": "Ask how deductions are figured. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask how deductions are figured. changes the route and creates a finance tradeoff to notice.",
            "logText": "Guess Your Take-Home: Ask how deductions are figured."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why estimate net pay before you budget on it?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating net keeps your budget honest before the first check lands."
  },
  {
    "id": "ctx-acorn-estimate-savings-goal",
    "title": "About How Many Weeks?",
    "prompt": "You want $133 and can save about $19/week. Estimate the weeks before computing.",
    "topics": [
      "saving",
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
        "label": "Estimate (~7 weeks), then compute exactly;",
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
            "feedback": "Estimate (~7 weeks), then compute exactly; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate (~7 weeks), then compute exactly; changes the route and creates a finance tradeoff to notice.",
            "logText": "About How Many Weeks?: Estimate (~7 weeks), then compute exactly;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess \"a month or so\";",
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
            "feedback": "Guess \"a month or so\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Guess \"a month or so\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "About How Many Weeks?: Guess \"a month or so\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Round the goal to $140 for a buffer.",
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
            "feedback": "Round the goal to $140 for a buffer. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Round the goal to $140 for a buffer. changes the route and creates a finance tradeoff to notice.",
            "logText": "About How Many Weeks?: Round the goal to $140 for a buffer."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does estimating first build confidence in the answer?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A rounded-up goal gives a small buffer for the same effort."
  },
  {
    "id": "ctx-acorn-estimate-tag-projection",
    "title": "The Confident Number",
    "prompt": "A tool projects your savings will \"be $1,040 in a year.\" It looks exact.",
    "topics": [
      "saving",
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
        "label": "Read it as an estimate with assumptions;",
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
            "feedback": "Read it as an estimate with assumptions; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Read it as an estimate with assumptions; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Confident Number: Read it as an estimate with assumptions;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Treat it as a promise and pre-spend it;",
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
            "feedback": "Treat it as a promise and pre-spend it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Treat it as a promise and pre-spend it; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Confident Number: Treat it as a promise and pre-spend it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask what the projection assumes.",
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
            "feedback": "Ask what the projection assumes. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask what the projection assumes. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Confident Number: Ask what the projection assumes."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why be careful trusting one confident number?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Projections help you plan, but pre-spending an estimate is risky."
  },
  {
    "id": "ctx-acorn-estimate-the-cart",
    "title": "Guess the Total First",
    "prompt": "Your cart has items at $4.79, $2.20, $6.99, and $1.05. Before the screen shows the total, you ballpark it.",
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
        "label": "Estimate by rounding (~$15), then check;",
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
            "feedback": "Estimate by rounding (~$15), then check; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate by rounding (~$15), then check; changes the route and creates a finance tradeoff to notice.",
            "logText": "Guess the Total First: Estimate by rounding (~$15), then check;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip estimating, trust the screen;",
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
            "feedback": "Skip estimating, trust the screen; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip estimating, trust the screen; changes the route and creates a finance tradeoff to notice.",
            "logText": "Guess the Total First: Skip estimating, trust the screen;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Estimate, then notice if the total looks wrong.",
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
            "feedback": "Estimate, then notice if the total looks wrong. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate, then notice if the total looks wrong. changes the route and creates a finance tradeoff to notice.",
            "logText": "Guess the Total First: Estimate, then notice if the total looks wrong."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a quick estimate catch a checkout error?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating takes a second but builds a habit that catches mistakes."
  },
  {
    "id": "ctx-acorn-estimate-then-check-receipt",
    "title": "Does the Receipt Look Right?",
    "prompt": "You expected about $14 but the receipt says $19.40. You estimated $5 + $4 + $5 ≈ $14 for three items.",
    "topics": [
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
        "label": "Recheck the receipt against your estimate;",
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
            "feedback": "Recheck the receipt against your estimate; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Recheck the receipt against your estimate; changes the route and creates a finance tradeoff to notice.",
            "logText": "Does the Receipt Look Right?: Recheck the receipt against your estimate;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay and move on;",
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
            "feedback": "Pay and move on; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay and move on; changes the route and creates a finance tradeoff to notice.",
            "logText": "Does the Receipt Look Right?: Pay and move on;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if an item scanned wrong.",
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
            "feedback": "Ask if an item scanned wrong. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask if an item scanned wrong. changes the route and creates a finance tradeoff to notice.",
            "logText": "Does the Receipt Look Right?: Ask if an item scanned wrong."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is an estimate a built-in error alarm?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Checking takes a moment; it can catch a real overcharge."
  },
  {
    "id": "ctx-acorn-estimate-tip-mental",
    "title": "Tip in Your Head",
    "prompt": "A $19 bill needs about a 15% tip, no calculator.",
    "topics": [
      "budgeting",
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
        "label": "10% = $1.90, half = $0.95, add → $2.85;",
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
            "feedback": "10% = $1.90, half = $0.95, add → $2.85; changes the route and creates a finance tradeoff to notice.",
            "explanation": "10% = $1.90, half = $0.95, add → $2.85; changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip in Your Head: 10% = $1.90, half = $0.95, add → $2.85;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Round to 20% = $3.80;",
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
            "feedback": "Round to 20% = $3.80; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Round to 20% = $3.80; changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip in Your Head: Round to 20% = $3.80;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Estimate \"about $3.",
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
            "feedback": "Estimate \"about $3. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate \"about $3. changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip in Your Head: Estimate \"about $3."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does finding 10% first unlock other percents?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "20% is simpler and more generous; the 10%-plus-half trick is exact."
  },
  {
    "id": "ctx-acorn-fade-or-keep-check",
    "title": "Still Glad You Bought It?",
    "prompt": "A month ago you bought a $25 trend item. The app asks how you feel about it now.",
    "topics": [
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
        "label": "Still love it\";",
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
            "feedback": "Still love it\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Still love it\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Still Glad You Bought It?: Still love it\";"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Meh, barely used it\";",
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
            "feedback": "Meh, barely used it\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Meh, barely used it\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Still Glad You Bought It?: Meh, barely used it\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wish I'd waited.",
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
            "feedback": "Wish I'd waited. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wish I'd waited. changes the route and creates a finance tradeoff to notice.",
            "logText": "Still Glad You Bought It?: Wish I'd waited."
          }
        ]
      }
    ],
    "reflectionPrompt": "What kind of purchase do you tend to regret?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "No wrong answer — this is pattern-spotting, not judgment."
  },
  {
    "id": "ctx-acorn-milestone-bike-fund",
    "title": "Three Rungs to a Bike",
    "prompt": "A $120 bike feels far away. You can save $15/week.",
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
        "label": "Set rungs at $40/$80/$120 and climb;",
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
            "feedback": "Set rungs at $40/$80/$120 and climb; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set rungs at $40/$80/$120 and climb; changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Rungs to a Bike: Set rungs at $40/$80/$120 and climb;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Aim straight for $120 with no checkpoints;",
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
            "feedback": "Aim straight for $120 with no checkpoints; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Aim straight for $120 with no checkpoints; changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Rungs to a Bike: Aim straight for $120 with no checkpoints;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $15/week into a labeled fund.",
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
            "feedback": "Save $15/week into a labeled fund. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save $15/week into a labeled fund. changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Rungs to a Bike: Save $15/week into a labeled fund."
          }
        ]
      }
    ],
    "reflectionPrompt": "Do small checkpoints help you keep going?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Rungs add motivation; the total is the same either way."
  },
  {
    "id": "ctx-acorn-milestone-debt-paydown",
    "title": "Knocking Down the Balance",
    "prompt": "You owe $240 at a high rate. You can pay $60/month. Breaking it into rungs makes it feel doable. *(Locked: hasDebt.)*",
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
        "label": "Set rungs at $180/$120/$60/$0 and track each;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Set rungs at $180/$120/$60/$0 and track each; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set rungs at $180/$120/$60/$0 and track each; changes the route and creates a finance tradeoff to notice.",
            "logText": "Knocking Down the Balance: Set rungs at $180/$120/$60/$0 and track each;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $60/month with no checkpoints;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Pay $60/month with no checkpoints; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $60/month with no checkpoints; changes the route and creates a finance tradeoff to notice.",
            "logText": "Knocking Down the Balance: Pay $60/month with no checkpoints;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay $60 plus any spare cash to finish faster.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Pay $60 plus any spare cash to finish faster. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $60 plus any spare cash to finish faster. changes the route and creates a finance tradeoff to notice.",
            "logText": "Knocking Down the Balance: Pay $60 plus any spare cash to finish faster."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can visible rungs keep you motivated to pay off debt?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying extra finishes sooner and saves interest but tightens your month."
  },
  {
    "id": "ctx-acorn-milestone-emergency-first",
    "title": "First Rung: One Month",
    "prompt": "A 3-month fund ($900) feels impossible. You earn enough to save $75/month.",
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
        "label": "Make \"1 month = $300\" the first rung, then climb;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 75
              }
            ],
            "feedback": "Make \"1 month = $300\" the first rung, then climb; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Make \"1 month = $300\" the first rung, then climb; changes the route and creates a finance tradeoff to notice.",
            "logText": "First Rung: One Month: Make \"1 month = $300\" the first rung, then climb;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Aim straight at $900;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 75
              }
            ],
            "feedback": "Aim straight at $900; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Aim straight at $900; changes the route and creates a finance tradeoff to notice.",
            "logText": "First Rung: One Month: Aim straight at $900;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $75/month with no checkpoints.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 75
              }
            ],
            "feedback": "Save $75/month with no checkpoints. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save $75/month with no checkpoints. changes the route and creates a finance tradeoff to notice.",
            "logText": "First Rung: One Month: Save $75/month with no checkpoints."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does a reachable first rung beat staring at $900?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Aiming high is ideal but discouraging; a one-month rung builds momentum."
  },
  {
    "id": "ctx-acorn-milestone-laptop-fund",
    "title": "Climbing to a Laptop",
    "prompt": "You're saving $300 for a laptop in $50 rungs. At rung 4 ($200), a $40 surprise knocks you back.",
    "topics": [
      "investing",
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
        "label": "Cover the surprise, drop to rung 3, climb again;",
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
            "feedback": "Cover the surprise, drop to rung 3, climb again; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cover the surprise, drop to rung 3, climb again; changes the route and creates a finance tradeoff to notice.",
            "logText": "Climbing to a Laptop: Cover the surprise, drop to rung 3, climb again;"
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
            "logText": "Climbing to a Laptop: Cover the surprise, drop to rung 3, climb again; met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip saving this month to recover;",
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
            "feedback": "Skip saving this month to recover; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip saving this month to recover; changes the route and creates a finance tradeoff to notice.",
            "logText": "Climbing to a Laptop: Skip saving this month to recover;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Trim spending to hold your rung.",
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
            "feedback": "Trim spending to hold your rung. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Trim spending to hold your rung. changes the route and creates a finance tradeoff to notice.",
            "logText": "Climbing to a Laptop: Trim spending to hold your rung."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do visible rungs help after a setback?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Recovering the rung takes time; the ladder keeps the goal from feeling lost."
  },
  {
    "id": "ctx-acorn-pause-before-splurge",
    "title": "A Rough Day Purchase",
    "prompt": "After a frustrating day, a $33 \"treat myself\" buy is one tap away. A gentle prompt suggests pausing.",
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
        "label": "Pause, revisit in an hour;",
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
            "feedback": "Pause, revisit in an hour; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pause, revisit in an hour; changes the route and creates a finance tradeoff to notice.",
            "logText": "A Rough Day Purchase: Pause, revisit in an hour;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now to feel better;",
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
            "feedback": "Buy now to feel better; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now to feel better; changes the route and creates a finance tradeoff to notice.",
            "logText": "A Rough Day Purchase: Buy now to feel better;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do a free feel-better thing first, then decide.",
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
            "feedback": "Do a free feel-better thing first, then decide. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Do a free feel-better thing first, then decide. changes the route and creates a finance tradeoff to notice.",
            "logText": "A Rough Day Purchase: Do a free feel-better thing first, then decide."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do feelings change money decisions?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A treat can be fine — the lesson is deciding with a clear head, not banning joy."
  },
  {
    "id": "ctx-acorn-pause-checkout-anger",
    "title": "Buying Mad",
    "prompt": "Annoyed after losing a game, you're about to buy a $15 in-app boost out of frustration.",
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
        "label": "Pause",
        "description": "do something else for 10 minutes;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -15
              }
            ],
            "feedback": "Pause changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pause changes the route and creates a finance tradeoff to notice.",
            "logText": "Buying Mad: Pause"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy it now;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -15
              }
            ],
            "feedback": "Buy it now; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy it now; changes the route and creates a finance tradeoff to notice.",
            "logText": "Buying Mad: Buy it now;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a rule: no buying within an hour of being upset.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -15
              }
            ],
            "feedback": "Set a rule: no buying within an hour of being upset. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set a rule: no buying within an hour of being upset. changes the route and creates a finance tradeoff to notice.",
            "logText": "Buying Mad: Set a rule: no buying within an hour of being upset."
          }
        ]
      }
    ],
    "reflectionPrompt": "What feeling most tempts you to spend?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The boost might be fun; deciding calmly just makes it a real choice, not a reaction."
  },
  {
    "id": "ctx-acorn-pause-flash-countdown",
    "title": "The Ticking Timer",
    "prompt": "A $35 want shows a 10-minute countdown timer. Your heart races to buy before it ends.",
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
        "label": "Pause",
        "description": "the timer pressure isn't about value;",
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
            "feedback": "Pause changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pause changes the route and creates a finance tradeoff to notice.",
            "logText": "The Ticking Timer: Pause"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy before it ends;",
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
            "feedback": "Buy before it ends; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy before it ends; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Ticking Timer: Buy before it ends;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Note the price and check if it returns later.",
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
            "feedback": "Note the price and check if it returns later. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Note the price and check if it returns later. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Ticking Timer: Note the price and check if it returns later."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did the timer change the item, or just your stress?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "You might genuinely want it; pausing just makes sure the timer didn't decide for you."
  },
  {
    "id": "ctx-acorn-pause-group-pressure-buy",
    "title": "Everyone's Buying It",
    "prompt": "Friends are all buying a $25 add-on right now and urging you to join in this second.",
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
        "label": "Pause",
        "description": "tell them you'll decide later;",
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
            "feedback": "Pause changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pause changes the route and creates a finance tradeoff to notice.",
            "logText": "Everyone's Buying It: Pause"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now to be part of it;",
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
            "feedback": "Buy now to be part of it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now to be part of it; changes the route and creates a finance tradeoff to notice.",
            "logText": "Everyone's Buying It: Buy now to be part of it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Suggest a free way to join the fun.",
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
            "feedback": "Suggest a free way to join the fun. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Suggest a free way to join the fun. changes the route and creates a finance tradeoff to notice.",
            "logText": "Everyone's Buying It: Suggest a free way to join the fun."
          }
        ]
      }
    ],
    "reflectionPrompt": "How is peer urgency like a countdown timer?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Joining in feels good now; pausing makes sure it's your choice, not the group's."
  },
  {
    "id": "ctx-acorn-ripple-co-owned-exit",
    "title": "Selling Our Shared Thing",
    "prompt": "You and a friend co-own a $100 item (50/50). You want cash now and propose selling, but your friend was counting on using it next month.",
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
        "label": "Wait until after they use it, then sell;",
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
            "feedback": "Wait until after they use it, then sell; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait until after they use it, then sell; changes the route and creates a finance tradeoff to notice.",
            "logText": "Selling Our Shared Thing: Wait until after they use it, then sell;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell now, split ~$70 used value ($35 each);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 70
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Sell now, split ~$70 used value ($35 each); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell now, split ~$70 used value ($35 each); changes the route and creates a finance tradeoff to notice.",
            "logText": "Selling Our Shared Thing: Sell now, split ~$70 used value ($35 each);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy their half for $35 so they're not affected.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -35
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Buy their half for $35 so they're not affected. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy their half for $35 so they're not affected. changes the route and creates a finance tradeoff to notice.",
            "logText": "Selling Our Shared Thing: Buy their half for $35 so they're not affected."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you weigh your cash need against their plan?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Selling now meets your need but disrupts someone who shares the asset."
  },
  {
    "id": "ctx-acorn-ripple-cosign-favor",
    "title": "Vouching for a Friend",
    "prompt": "A friend asks you to share responsibility for a small fictional payment plan so they qualify. If they miss payments, it's on you too. *(Locked: eligibleForCredit.)*",
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
        "label": "Decline kindly",
        "description": "the risk is yours too;",
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
            "feedback": "Decline kindly changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline kindly changes the route and creates a finance tradeoff to notice.",
            "logText": "Vouching for a Friend: Decline kindly"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Agree without conditions;",
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
            "feedback": "Agree without conditions; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Agree without conditions; changes the route and creates a finance tradeoff to notice.",
            "logText": "Vouching for a Friend: Agree without conditions;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Offer to help another way (budgeting, smaller direct loan).",
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
            "feedback": "Offer to help another way (budgeting, smaller direct loan). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Offer to help another way (budgeting, smaller direct loan). changes the route and creates a finance tradeoff to notice.",
            "logText": "Vouching for a Friend: Offer to help another way (budgeting, smaller direct loan)."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the real risk of vouching with your own credit?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Helping a friend is kind, but co-responsibility ties your finances to their follow-through."
  },
  {
    "id": "ctx-acorn-ripple-family-bulk",
    "title": "Buying for the House",
    "prompt": "A bulk pack costs $24 for 12 (good per-unit), but your family only uses ~6 before they expire. Splitting with a neighbor is possible.",
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
        "label": "Split the pack with a neighbor (6 each);",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Split the pack with a neighbor (6 each); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split the pack with a neighbor (6 each); changes the route and creates a finance tradeoff to notice.",
            "logText": "Buying for the House: Split the pack with a neighbor (6 each);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the bulk pack alone;",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Buy the bulk pack alone; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the bulk pack alone; changes the route and creates a finance tradeoff to notice.",
            "logText": "Buying for the House: Buy the bulk pack alone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a 6-pack at $15.",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Buy a 6-pack at $15. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy a 6-pack at $15. changes the route and creates a finance tradeoff to notice.",
            "logText": "Buying for the House: Buy a 6-pack at $15."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does sharing change the real per-unit cost?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Bulk wins only if it's used; sharing rescues the savings."
  },
  {
    "id": "ctx-acorn-ripple-late-group-pay",
    "title": "Holding Up the Group",
    "prompt": "Five of you owe $9 each for a $45 shared order due today. If you pay late, the organizer covers your share and is short.",
    "topics": [
      "banking",
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
        "label": "Pay your $9 on time;",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Pay your $9 on time; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay your $9 on time; changes the route and creates a finance tradeoff to notice.",
            "logText": "Holding Up the Group: Pay your $9 on time;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay in two days, organizer covers meanwhile;",
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
            "feedback": "Pay in two days, organizer covers meanwhile; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay in two days, organizer covers meanwhile; changes the route and creates a finance tradeoff to notice.",
            "logText": "Holding Up the Group: Pay in two days, organizer covers meanwhile;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the group to delay the order.",
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
            "feedback": "Ask the group to delay the order. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask the group to delay the order. changes the route and creates a finance tradeoff to notice.",
            "logText": "Holding Up the Group: Ask the group to delay the order."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does one late payment ripple through a group?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying late eases your week but strains whoever fronts your share."
  },
  {
    "id": "ctx-acorn-ripple-loud-purchase",
    "title": "Flexing the New Thing",
    "prompt": "You could buy a flashy $40 item partly to impress friends. A quieter $15 option does the same job.",
    "topics": [
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
        "label": "Buy the $15 option;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -15
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Buy the $15 option; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the $15 option; changes the route and creates a finance tradeoff to notice.",
            "logText": "Flexing the New Thing: Buy the $15 option;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $40 to impress;",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Buy the $40 to impress; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the $40 to impress; changes the route and creates a finance tradeoff to notice.",
            "logText": "Flexing the New Thing: Buy the $40 to impress;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy the $15 and be honest about why.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -15
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Buy the $15 and be honest about why. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the $15 and be honest about why. changes the route and creates a finance tradeoff to notice.",
            "logText": "Flexing the New Thing: Buy the $15 and be honest about why."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does what you buy affect the people around you?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The flashy buy may feel good briefly; the cheaper one does the job and sets a kinder tone."
  },
  {
    "id": "ctx-acorn-ripple-owe-friend",
    "title": "They're Counting On It",
    "prompt": "You owe a friend $12 by Friday. A new want appears that would use that exact $12.",
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
        "label": "Repay the friend first;",
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
            "feedback": "Repay the friend first; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Repay the friend first; changes the route and creates a finance tradeoff to notice.",
            "logText": "They're Counting On It: Repay the friend first;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the want, repay late;",
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
            "feedback": "Buy the want, repay late; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the want, repay late; changes the route and creates a finance tradeoff to notice.",
            "logText": "They're Counting On It: Buy the want, repay late;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a cheaper want and still repay.",
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
            "feedback": "Buy a cheaper want and still repay. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy a cheaper want and still repay. changes the route and creates a finance tradeoff to notice.",
            "logText": "They're Counting On It: Buy a cheaper want and still repay."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does a late repayment affect trust?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The want is real, but so is the friend's expectation — timing matters."
  },
  {
    "id": "ctx-acorn-ripple-shared-data",
    "title": "It's a Shared Plan",
    "prompt": "You want to stream a lot this month, but you share a capped data plan with family. Going over adds a $15 fee everyone feels.",
    "topics": [
      "money-values",
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
        "label": "Stream on wifi to protect the shared cap;",
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
            "feedback": "Stream on wifi to protect the shared cap; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Stream on wifi to protect the shared cap; changes the route and creates a finance tradeoff to notice.",
            "logText": "It's a Shared Plan: Stream on wifi to protect the shared cap;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Stream freely, accept the $15 family fee;",
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
            "feedback": "Stream freely, accept the $15 family fee; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Stream freely, accept the $15 family fee; changes the route and creates a finance tradeoff to notice.",
            "logText": "It's a Shared Plan: Stream freely, accept the $15 family fee;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family to split a one-time booster.",
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
            "feedback": "Ask family to split a one-time booster. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask family to split a one-time booster. changes the route and creates a finance tradeoff to notice.",
            "logText": "It's a Shared Plan: Ask family to split a one-time booster."
          }
        ]
      }
    ],
    "reflectionPrompt": "Who else does this choice touch?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Streaming freely is convenient but pushes a cost onto people you share with."
  },
  {
    "id": "ctx-acorn-ripple-skip-chore-pay",
    "title": "Skipping the Shared Job",
    "prompt": "You're paid $10 for a shared household task, but skipping it means a sibling has to cover it.",
    "topics": [
      "banking",
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
        "label": "Do your task as agreed;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 10
              }
            ],
            "feedback": "Do your task as agreed; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Do your task as agreed; changes the route and creates a finance tradeoff to notice.",
            "logText": "Skipping the Shared Job: Do your task as agreed;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it, let your sibling cover, keep doing other things;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 10
              }
            ],
            "feedback": "Skip it, let your sibling cover, keep doing other things; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip it, let your sibling cover, keep doing other things; changes the route and creates a finance tradeoff to notice.",
            "logText": "Skipping the Shared Job: Skip it, let your sibling cover, keep doing other things;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Swap tasks fairly with your sibling.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 10
              }
            ],
            "feedback": "Swap tasks fairly with your sibling. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Swap tasks fairly with your sibling. changes the route and creates a finance tradeoff to notice.",
            "logText": "Skipping the Shared Job: Swap tasks fairly with your sibling."
          }
        ]
      }
    ],
    "reflectionPrompt": "Who absorbs the cost when you opt out?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Skipping frees your time but shifts the burden to family."
  },
  {
    "id": "ctx-acorn-ripple-windfall-share",
    "title": "A Gift to Spread",
    "prompt": "You receive $90. A family member helped you earn the chance for it, and you have your own goals too.",
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
        "label": "Split: thank-you to family / your goal / a small treat;",
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
            "feedback": "Split: thank-you to family / your goal / a small treat; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split: thank-you to family / your goal / a small treat; changes the route and creates a finance tradeoff to notice.",
            "logText": "A Gift to Spread: Split: thank-you to family / your goal / a small treat;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep all $90 for yourself;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 90
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Keep all $90 for yourself; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep all $90 for yourself; changes the route and creates a finance tradeoff to notice.",
            "logText": "A Gift to Spread: Keep all $90 for yourself;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask what would help the household most",
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
            "feedback": "Ask what would help the household most changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask what would help the household most changes the route and creates a finance tradeoff to notice.",
            "logText": "A Gift to Spread: Ask what would help the household most"
          }
        ]
      }
    ],
    "reflectionPrompt": "Does a windfall change who you think about?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Keeping it all is valid; sharing some can strengthen the relationships that created the chance."
  },
  {
    "id": "ctx-acorn-same-thing-compare",
    "title": "Are These Even the Same?",
    "prompt": "Option A: a $20 item that lasts 1 year. Option B: a $45 item that lasts 3 years. They don't look comparable.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
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
        "label": "Convert both to cost-per-year;",
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
            "feedback": "Convert both to cost-per-year; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Convert both to cost-per-year; changes the route and creates a finance tradeoff to notice.",
            "logText": "Are These Even the Same?: Convert both to cost-per-year;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pick A (lower price);",
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
            "feedback": "Pick A (lower price); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pick A (lower price); changes the route and creates a finance tradeoff to notice.",
            "logText": "Are These Even the Same?: Pick A (lower price);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick the one that fits your cash now, knowing the per-year math.",
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
            "feedback": "Pick the one that fits your cash now, knowing the per-year math. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pick the one that fits your cash now, knowing the per-year math. changes the route and creates a finance tradeoff to notice.",
            "logText": "Are These Even the Same?: Pick the one that fits your cash now, knowing the per-year math."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why put both in 'per year' before comparing?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "B wins long-term, but A costs less right now if cash is tight."
  },
  {
    "id": "ctx-acorn-sequential-discount",
    "title": "20 Off, Then 10 Off",
    "prompt": "A $50 jacket is 20% off. You also have a 10% coupon that applies to the sale price. A friend says \"that's 30% off.",
    "topics": [
      "money-values",
      "consumer-skills"
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
        "label": "Compute step by step;",
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
            "feedback": "Compute step by step; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute step by step; changes the route and creates a finance tradeoff to notice.",
            "logText": "20 Off, Then 10 Off: Compute step by step;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Agree it's 30%;",
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
            "feedback": "Agree it's 30%; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Agree it's 30%; changes the route and creates a finance tradeoff to notice.",
            "logText": "20 Off, Then 10 Off: Agree it's 30%;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask whether the coupon applies before or after the sale.",
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
            "feedback": "Ask whether the coupon applies before or after the sale. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask whether the coupon applies before or after the sale. changes the route and creates a finance tradeoff to notice.",
            "logText": "20 Off, Then 10 Off: Ask whether the coupon applies before or after the sale."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why don't the two percents simply add?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Assuming 30% would make you expect $1 more in savings than you get."
  },
  {
    "id": "ctx-acorn-unbundle-club-fee",
    "title": "All-In or Pick-and-Choose?",
    "prompt": "A club offers an \"all-access $30/month\" or à la carte at $9 per activity. You'd attend two activities.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Compare 2 × $9 = $18 vs. $30;",
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
            "feedback": "Compare 2 × $9 = $18 vs. $30; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare 2 × $9 = $18 vs. $30; changes the route and creates a finance tradeoff to notice.",
            "logText": "All-In or Pick-and-Choose?: Compare 2 × $9 = $18 vs. $30;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take all-access \"in case\";",
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
            "feedback": "Take all-access \"in case\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Take all-access \"in case\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "All-In or Pick-and-Choose?: Take all-access \"in case\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "À la carte for two, upgrade if you add more.",
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
            "feedback": "À la carte for two, upgrade if you add more. changes the route and creates a finance tradeoff to notice.",
            "explanation": "À la carte for two, upgrade if you add more. changes the route and creates a finance tradeoff to notice.",
            "logText": "All-In or Pick-and-Choose?: À la carte for two, upgrade if you add more."
          }
        ]
      }
    ],
    "reflectionPrompt": "At how many activities does all-access win?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "All-access is freeing if you'd do a lot; à la carte saves if you won't."
  },
  {
    "id": "ctx-acorn-unbundle-combo",
    "title": "Three for Ten",
    "prompt": "A combo is \"3 for $10.\" A single is $3.50. You only really want two.",
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
        "label": "Find the per-item price and compare;",
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
            "feedback": "Find the per-item price and compare; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Find the per-item price and compare; changes the route and creates a finance tradeoff to notice.",
            "logText": "Three for Ten: Find the per-item price and compare;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the combo to \"save\";",
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
            "feedback": "Buy the combo to \"save\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the combo to \"save\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Three for Ten: Buy the combo to \"save\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy two singles.",
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
            "feedback": "Buy two singles. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy two singles. changes the route and creates a finance tradeoff to notice.",
            "logText": "Three for Ten: Buy two singles."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a 'deal' a deal if you don't need all of it?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The combo is cheaper per item, but only if you'd use all three."
  },
  {
    "id": "ctx-acorn-unbundle-meal-deal",
    "title": "The Value Meal Math",
    "prompt": "A meal deal is $9 for three items. Bought separately they're $4, $3, and $1.50. You don't want the $1.50 item.",
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
        "label": "Price the two you want ($7) vs. the deal ($9);",
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
            "feedback": "Price the two you want ($7) vs. the deal ($9); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Price the two you want ($7) vs. the deal ($9); changes the route and creates a finance tradeoff to notice.",
            "logText": "The Value Meal Math: Price the two you want ($7) vs. the deal ($9);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the deal \"to save\";",
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
            "feedback": "Buy the deal \"to save\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the deal \"to save\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Value Meal Math: Buy the deal \"to save\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy the deal and share the extra.",
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
            "feedback": "Buy the deal and share the extra. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the deal and share the extra. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Value Meal Math: Buy the deal and share the extra."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does a combo actually save money?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The deal saves only if you'd use all three items."
  },
  {
    "id": "ctx-acorn-unbundle-phone-addons",
    "title": "What's in the Plan?",
    "prompt": "A $40/month phone plan bundles insurance ($7), extra storage ($5), and a music add-on ($6) you don't use.",
    "topics": [
      "money-values",
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
        "label": "Unbundle and drop what you don't use;",
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
            "feedback": "Unbundle and drop what you don't use; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Unbundle and drop what you don't use; changes the route and creates a finance tradeoff to notice.",
            "logText": "What's in the Plan?: Unbundle and drop what you don't use;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep the bundle for simplicity;",
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
            "feedback": "Keep the bundle for simplicity; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep the bundle for simplicity; changes the route and creates a finance tradeoff to notice.",
            "logText": "What's in the Plan?: Keep the bundle for simplicity;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep only insurance.",
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
            "feedback": "Keep only insurance. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep only insurance. changes the route and creates a finance tradeoff to notice.",
            "logText": "What's in the Plan?: Keep only insurance."
          }
        ]
      }
    ],
    "reflectionPrompt": "What are you paying for inside a bundle without realizing?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Bundles are simple; unbundling saves money but takes a little management."
  },
  {
    "id": "ctx-acorn-unbundle-school-supplies",
    "title": "The Kit vs. The List",
    "prompt": "A pre-made supply kit is $24. The same items bought individually total $17, but you already own a few of them.",
    "topics": [
      "life-after-high-school",
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
        "label": "Buy only what you're missing (~$11);",
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
            "feedback": "Buy only what you're missing (~$11); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy only what you're missing (~$11); changes the route and creates a finance tradeoff to notice.",
            "logText": "The Kit vs. The List: Buy only what you're missing (~$11);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the kit for convenience;",
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
            "feedback": "Buy the kit for convenience; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the kit for convenience; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Kit vs. The List: Buy the kit for convenience;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy individual items ($17).",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -17
              }
            ],
            "feedback": "Buy individual items ($17). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy individual items ($17). changes the route and creates a finance tradeoff to notice.",
            "logText": "The Kit vs. The List: Buy individual items ($17)."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a kit's convenience worth the markup?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The kit saves time; buying only what you need saves the most money."
  },
  {
    "id": "ctx-acorn-verify-prize-claim",
    "title": "You Won! (Did You?)",
    "prompt": "A message says you won a $100 gift card — just pay a $5 \"processing fee\" and share an account detail to claim it.",
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
        "label": "Don't pay or share; real prizes don't charge you",
        "description": "→ safe;",
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
            "feedback": "Don't pay or share; real prizes don't charge you changes the route and creates a finance tradeoff to notice.",
            "explanation": "Don't pay or share; real prizes don't charge you changes the route and creates a finance tradeoff to notice.",
            "logText": "You Won! (Did You?): Don't pay or share; real prizes don't charge you"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the $5 to \"claim it",
        "description": "→ randomized loss;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -5
              }
            ],
            "feedback": "Pay the $5 to \"claim it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay the $5 to \"claim it changes the route and creates a finance tradeoff to notice.",
            "logText": "You Won! (Did You?): Pay the $5 to \"claim it"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -5
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "You Won! (Did You?): Pay the $5 to \"claim it met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Verify the sender independently first.",
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
            "feedback": "Verify the sender independently first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Verify the sender independently first. changes the route and creates a finance tradeoff to notice.",
            "logText": "You Won! (Did You?): Verify the sender independently first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a fee-to-claim a red flag?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "New twist — the bait is \"free winnings\" with a small fee, not a fake login or job."
  },
  {
    "id": "ctx-acorn-whole-term-club-sport",
    "title": "Season-Long Costs",
    "prompt": "A sport costs a $40 sign-up plus $12/week for 10 weeks for gear/fees. The sign-up is all you saw advertised.",
    "topics": [
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Add up the whole-season cost first;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -40
              }
            ],
            "feedback": "Add up the whole-season cost first; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Add up the whole-season cost first; changes the route and creates a finance tradeoff to notice.",
            "logText": "Season-Long Costs: Add up the whole-season cost first;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sign up seeing only the $40;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -40
              }
            ],
            "feedback": "Sign up seeing only the $40; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sign up seeing only the $40; changes the route and creates a finance tradeoff to notice.",
            "logText": "Season-Long Costs: Sign up seeing only the $40;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about a payment plan or gear-sharing.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -40
              }
            ],
            "feedback": "Ask about a payment plan or gear-sharing. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask about a payment plan or gear-sharing. changes the route and creates a finance tradeoff to notice.",
            "logText": "Season-Long Costs: Ask about a payment plan or gear-sharing."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why total the whole season before joining?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The activity may be worth it — but the real cost is the whole season, not the sign-up."
  },
  {
    "id": "ctx-acorn-whole-term-gym",
    "title": "Easy Monthly, Long Commitment",
    "prompt": "A program is \"$19/month\" for 12 months. It feels affordable now. *(Locked: hasIncome.)*",
    "topics": [
      "money-values",
      "budgeting"
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
        "label": "Check the whole-term total first;",
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
            "feedback": "Check the whole-term total first; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Check the whole-term total first; changes the route and creates a finance tradeoff to notice.",
            "logText": "Easy Monthly, Long Commitment: Check the whole-term total first;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sign up on the monthly figure alone;",
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
            "feedback": "Sign up on the monthly figure alone; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sign up on the monthly figure alone; changes the route and creates a finance tradeoff to notice.",
            "logText": "Easy Monthly, Long Commitment: Sign up on the monthly figure alone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look for a no-commitment option.",
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
            "feedback": "Look for a no-commitment option. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Look for a no-commitment option. changes the route and creates a finance tradeoff to notice.",
            "logText": "Easy Monthly, Long Commitment: Look for a no-commitment option."
          }
        ]
      }
    ],
    "reflectionPrompt": "Could you carry this even in a lean month?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The monthly price is easy; the year-long commitment is the real decision."
  },
  {
    "id": "ctx-acorn-whole-term-payment-plan",
    "title": "Split Into 4 Payments",
    "prompt": "A $76 item offers \"4 payments of $19.\" You can pay now, but the plan is tempting.",
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
        "label": "Confirm you can carry all 4 payments even if money's tight;",
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
            "feedback": "Confirm you can carry all 4 payments even if money's tight; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Confirm you can carry all 4 payments even if money's tight; changes the route and creates a finance tradeoff to notice.",
            "logText": "Split Into 4 Payments: Confirm you can carry all 4 payments even if money's tight;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take the plan on the $19 figure;",
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
            "feedback": "Take the plan on the $19 figure; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Take the plan on the $19 figure; changes the route and creates a finance tradeoff to notice.",
            "logText": "Split Into 4 Payments: Take the plan on the $19 figure;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay $76 now if you have it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -76
              }
            ],
            "feedback": "Pay $76 now if you have it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $76 now if you have it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Split Into 4 Payments: Pay $76 now if you have it."
          }
        ]
      }
    ],
    "reflectionPrompt": "What if your income dips before payment 4?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The plan eases cash flow now; the commitment holds even if your situation changes."
  },
  {
    "id": "ctx-acorn-whole-term-phone",
    "title": "24 Months of 'Free",
    "prompt": "A $480 phone is \"$20/month for 24 months, 0% interest.\" Your income might dip next year.",
    "topics": [
      "money-values",
      "budgeting"
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
        "label": "Project the whole term and a lean-month stress test;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Project the whole term and a lean-month stress test; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Project the whole term and a lean-month stress test; changes the route and creates a finance tradeoff to notice.",
            "logText": "24 Months of 'Free: Project the whole term and a lean-month stress test;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sign up on the $20 figure;",
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
            "feedback": "Sign up on the $20 figure; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sign up on the $20 figure; changes the route and creates a finance tradeoff to notice.",
            "logText": "24 Months of 'Free: Sign up on the $20 figure;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a cheaper phone outright.",
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
            "feedback": "Buy a cheaper phone outright. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy a cheaper phone outright. changes the route and creates a finance tradeoff to notice.",
            "logText": "24 Months of 'Free: Buy a cheaper phone outright."
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes a long commitment risky even at 0%?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "0% is genuinely interest-free; the risk is the 2-year carry, not the interest."
  },
  {
    "id": "ctx-acorn-whole-term-streaming-bundle",
    "title": "Annual Plan Looks Cheaper",
    "prompt": "A service is $8/month or $84/year paid upfront. The annual \"saves money\" but locks you in.",
    "topics": [
      "money-values",
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
        "label": "Compute the annual savings and your real usage;",
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
            "feedback": "Compute the annual savings and your real usage; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute the annual savings and your real usage; changes the route and creates a finance tradeoff to notice.",
            "logText": "Annual Plan Looks Cheaper: Compute the annual savings and your real usage;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take the annual to \"save\";",
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
            "feedback": "Take the annual to \"save\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Take the annual to \"save\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Annual Plan Looks Cheaper: Take the annual to \"save\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Stay monthly for flexibility.",
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
            "feedback": "Stay monthly for flexibility. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Stay monthly for flexibility. changes the route and creates a finance tradeoff to notice.",
            "logText": "Annual Plan Looks Cheaper: Stay monthly for flexibility."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does an annual plan actually save?",
    "sourceNote": "MoneyLife context batch ACORN-FERRY-19; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Annual saves $12 if you stay; monthly costs more but lets you quit anytime."
  }
];
