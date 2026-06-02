import type { ScenarioEvent } from "../../types/game";

export const contextScenariosEvents: ScenarioEvent[] = [
  {
    "id": "ctx-1-weatherproof-coat",
    "title": "The Two-Winter Coat",
    "prompt": "A cheap coat costs $30 but usually lasts one winter; a sturdier coat costs $60 and tends to last two. You have $70 saved. Which do you buy, and what do you do with the rest?",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Cheap coat, save $40",
        "description": "short-term cash kept, may rebuy next year",
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
                "type": "savings",
                "amount": 0
              }
            ],
            "feedback": "$30/year for two years = $60 either way—plus the hassle of rebuying.",
            "explanation": "$30/year for two years = $60 either way—plus the hassle of rebuying.",
            "logText": "Cheap coat, save $40"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sturdy coat, save $10",
        "description": "higher upfront, lower yearly cost",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -60
              }
            ],
            "feedback": "$60 ÷ 2 years = $30/year, same yearly cost but no rebuy risk.",
            "explanation": "$60 ÷ 2 years = $30/year, same yearly cost but no rebuy risk.",
            "logText": "Sturdy coat, save $10"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cheap coat now, start a coat sinking fund",
        "description": "plan ahead",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -30
              }
            ],
            "feedback": "You're spreading next year's cost into small chunks.",
            "explanation": "You're spreading next year's cost into small chunks.",
            "logText": "Cheap coat now, start a coat sinking fund"
          }
        ]
      }
    ],
    "reflectionPrompt": "Did you weigh cost-per-year or just the price tag?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Both coats cost ~$30/year; the \"right\" answer depends on your cash cushion now."
  },
  {
    "id": "ctx-1-lawn-route-pricing",
    "title": "Pricing the Lawn Route",
    "prompt": "You mow lawns. Gas + supplies cost $4 per lawn. Neighbors will pay $15, $20, or $25 depending on lawn size. You can take 6 small or 4 large jobs in a weekend.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "6 small at $15 —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "6 small at $15 —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "4 large at $25 —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "4 large at $25 —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Mix 3+2 —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Mix 3+2 —"
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "Raise small price to $18 and risk losing one",
        "description": "randomized demand*.",
        "outcomes": [
          {
            "id": "outcome-4",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Raise small price to $18 and risk losing one"
          }
        ]
      }
    ],
    "reflectionPrompt": "Higher price or higher volume—what did you optimize?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Fewer big jobs earn more but you depend on landing them."
  },
  {
    "id": "ctx-1-trial-that-renews",
    "title": "The Trial That Remembers You",
    "prompt": "A game offers a 7-day free trial, then $6.99/month auto-renews. You're excited now but unsure you'll play much.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Start trial, set a cancel reminder —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$6.99 × 12 = $83.88/year if you forget.",
            "explanation": "$6.99 × 12 = $83.88/year if you forget.",
            "logText": "Start trial, set a cancel reminder —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip it —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start trial, no reminder —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "flag",
                "key": "s",
                "value": true
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Start trial, no reminder —"
          }
        ]
      }
    ],
    "reflectionPrompt": "What's your plan to remember the cancel date?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Trials are real value if you actually cancel on time."
  },
  {
    "id": "ctx-1-paycheck-shrinks",
    "title": "Why Is My Check Smaller?",
    "prompt": "Your first part-time job offers $12/hour for 10 hours/week. Your first paycheck is smaller than you expected.",
    "topics": [
      "taxes"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Read the pay stub",
        "description": "learn deductions",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$120 gross − deductions = net.",
            "explanation": "$120 gross − deductions = net.",
            "logText": "Read the pay stub"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume an error and ignore —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Assume an error and ignore —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask your mentor to explain",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask your mentor to explain"
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the difference between what you earn and what you keep?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Knowing your net pay lets you budget honestly."
  },
  {
    "id": "ctx-1-phone-cracked",
    "title": "The Cracked Screen",
    "prompt": "You dropped your phone. You pay $5/month for phone protection with a $49 repair deductible. Repair without coverage is $130.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use the plan, pay deductible —",
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
            "logText": "Use the plan, pay deductible —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "You never had the plan—pay full —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -130
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "You never had the plan—pay full —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cancel plan going forward, self-insure with savings",
        "description": "MT*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Cancel plan going forward, self-insure with savings"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying monthly worth it?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Coverage is cheaper only if you actually break things."
  },
  {
    "id": "ctx-1-group-gift-split",
    "title": "Splitting the Group Gift",
    "prompt": "Six friends chip in for a $48 group present. Two friends are short this week and ask to pay you later through a payment app.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Cover them, track who owes —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Cover them, track who owes —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask everyone to pay before buying",
        "description": "firm boundary*.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask everyone to pay before buying"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cover them, no tracking —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Cover them, no tracking —"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you keep lending to friends from harming the friendship?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Generosity builds trust but unrecorded loans cause friction."
  },
  {
    "id": "ctx-1-bike-vs-bus",
    "title": "Bike Fund or Bus Pass?",
    "prompt": "A used bike costs $80 (yours to keep, occasional repairs). A monthly bus pass is $20. You travel year-round.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy bike —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "flag",
                "key": "gained",
                "value": true
              }
            ],
            "feedback": "$80 once vs $20×12 = $240/year for bus.",
            "explanation": "$80 once vs $20×12 = $240/year for bus.",
            "logText": "Buy bike —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Bus pass —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Bus pass —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save for bike while busing 2 months",
        "description": "bridge plan*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Save for bike while busing 2 months"
          }
        ]
      }
    ],
    "reflectionPrompt": "Does owning something always beat paying monthly?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The bike is cheaper long-term but needs upkeep and isn't useful in all weather."
  },
  {
    "id": "ctx-1-mystery-charge",
    "title": "The Charge You Don't Recognize",
    "prompt": "A $39 charge you don't recognize appears on your account.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Report and freeze immediately —",
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
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Report and freeze immediately —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait to see if it repeats —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Wait to see if it repeats —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Tell a trusted adult and report together",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Tell a trusted adult and report together"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does acting fast matter with fraud?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Reporting fast is safest; waiting risks more loss but avoids false alarms."
  },
  {
    "id": "ctx-1-overdraft-edge",
    "title": "Two Dollars Short",
    "prompt": "Your checking has $18. A $20 purchase would overdraft with a $35 fee. You have $50 in savings.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Move $10 from savings first —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Move $10 from savings first —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy anyway, accept overdraft —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A $20 buy cost $55.",
            "explanation": "A $20 buy cost $55.",
            "logText": "Buy anyway, accept overdraft —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the purchase —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip the purchase —"
          }
        ]
      }
    ],
    "reflectionPrompt": "How can account alerts prevent this?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Overdraft buys time but the fee can dwarf the purchase."
  },
  {
    "id": "ctx-1-index-vs-hot-stock",
    "title": "The Hot Tip",
    "prompt": "A classmate swears one company's stock will \"double.\" You can put $100 in that single stock or in a diversified fund.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Single stock —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Single stock —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Diversified fund —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Diversified fund —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split $50/$50",
        "description": "MT*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Split $50/$50"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why doesn't a big possible gain make something a good bet?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Concentration can win big or lose big; diversification trades excitement for stability."
  },
  {
    "id": "ctx-1-rule-of-72-choice",
    "title": "How Long to Double?",
    "prompt": "You compare two savings options: 3% and 6% growth. You want to know which doubles your money faster.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use Rule of 72 —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Use Rule of 72 —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Guess."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to walk through it",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask mentor to walk through it"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does doubling time tell you about rate?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Higher rates double faster but often carry more risk."
  },
  {
    "id": "ctx-1-bnpl-sneakers",
    "title": "Four Easy Payments",
    "prompt": "$80 shoes offered as \"4 payments of $20, no interest—if you pay on time.\" A late payment adds a $7 fee.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay in full now —",
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
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay in full now —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use BNPL, set reminders —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Use BNPL, set reminders —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and save first",
        "description": "delay gratification*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Wait and save first"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is 'no interest' the same as 'free'?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "BNPL helps cash flow but late fees and easy overspending are real risks."
  },
  {
    "id": "ctx-1-scam-job-offer",
    "title": "Get Paid to Reship",
    "prompt": "A \"job\" texts you: get paid to receive packages and reship them, no interview. *(Locked: appears only if `usesPaymentApp`.)*",
    "topics": [
      "scams",
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Ignore and report —",
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
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ignore and report —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask for details first —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask for details first —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Try one \"to see\" —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Try one \"to see\" —"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made this offer suspicious?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Easy money offers with no interview are classic scam bait."
  },
  {
    "id": "ctx-1-roommate-rent-split",
    "title": "Whose Half Is Bigger?",
    "prompt": "Rent is $900. One bedroom is bigger. You and a roommate must split fairly. *(Locked: `hasSteadyIncome`.)*",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Even 50/50 = $450 each."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Bigger room pays 60% = $540/$360.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Bigger room pays 60% = $540/$360."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Negotiate based on income share.",
        "description": "All shown with math.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Negotiate based on income share."
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes a split 'fair'?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Even splits are simple; weighted splits feel fairer but need agreement."
  },
  {
    "id": "ctx-1-emergency-fund-start",
    "title": "First $200 Cushion",
    "prompt": "You have $200 extra. Spend it on a want, invest it, or start an emergency fund.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Emergency fund —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Emergency fund —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Invest it —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Invest it —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend on a want —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Spend on a want —"
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the job of an emergency fund vs. an investment?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A cushion isn't growing your money—it's protecting you."
  },
  {
    "id": "ctx-1-vet-surprise",
    "title": "The Unexpected Vet Bill",
    "prompt": "Your dog needs a $260 vet visit. *(Locked: `hasPet`.)* Your cushion has $300.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay from cushion —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay from cushion —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "No cushion—use BNPL/loan —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "No cushion—use BNPL/loan —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family to split",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask family to split"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you plan for costs you can't predict?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Pets bring joy and predictable + unpredictable costs."
  },
  {
    "id": "ctx-1-tip-the-math",
    "title": "Tip and Tax Together",
    "prompt": "A $40 meal has 8% tax and you want to leave a 15% tip on the pre-tax amount.",
    "topics": [
      "taxes"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Compute step by step —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Compute step by step —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Estimate ~$50.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Estimate ~$50."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a quick 20% mental shortcut for tip.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Use a quick 20% mental shortcut for tip."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might you tip on pre-tax vs. total?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating is fast; exact math avoids surprises."
  },
  {
    "id": "ctx-1-credit-first-account",
    "title": "Your First Credit Line",
    "prompt": "You qualify for a $500 limit card. *(Locked: age ≥18, `hasIncome`.)*",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use under 30% ($150 max), pay full —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Use under 30% ($150 max), pay full —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Max it out, pay minimum —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Max it out, pay minimum —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use it once a month for a small bill, autopay",
        "description": "habit*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Use it once a month for a small bill, autopay"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does keeping balances low help your score?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Credit builds history if used lightly; misuse costs money fast."
  },
  {
    "id": "ctx-1-inflation-snack",
    "title": "The Dollar Snack That Isn't",
    "prompt": "A snack you bought for $1.00 two years ago now costs $1.20.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate the increase —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Calculate the increase —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the bigger value pack instead.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy the bigger value pack instead."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Switch to a cheaper option.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Switch to a cheaper option."
          }
        ]
      }
    ],
    "reflectionPrompt": "If prices rise, what should your savings do?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Inflation is normal; the question is whether your income/savings keep pace."
  },
  {
    "id": "ctx-1-scholarship-hours",
    "title": "Hours Into Scholarships",
    "prompt": "Spending 10 hours applying to small scholarships might win $0, $300, or $1,500. *(Locked: `pathwayChosen=college`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Apply broadly —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Apply broadly —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Apply to one big one only —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Apply to one big one only —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip, focus on a job",
        "description": "MT*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip, focus on a job"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you value effort with uncertain payoff?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Scholarship hunting is unpaid time that can beat a paycheck—or not."
  },
  {
    "id": "ctx-1-phishing-text-twist",
    "title": "The Package You Didn't Order",
    "prompt": "A text says a package is \"held\" and asks you to tap a link and confirm your address and a small \"fee.\"",
    "topics": [
      "scams"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Delete, don't tap —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Delete, don't tap —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Tap to \"check\" —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Tap to \"check\" —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Verify through the real shipper's app instead.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Verify through the real shipper's app instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a 'small fee' a warning sign?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "New twist—legitimate-sounding logistics texts are common bait now."
  },
  {
    "id": "ctx-1-savings-goal-vs-now",
    "title": "The Concert vs. The Camera Fund",
    "prompt": "You've saved $120 toward a $300 camera (an asset for your side hustle). A concert costs $85.",
    "topics": [
      "saving"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Skip concert, keep saving —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip concert, keep saving —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Go, restart partly.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Go, restart partly."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Go, but earn $85 extra first",
        "description": "delay*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Go, but earn $85 extra first"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you weigh experiences against goals?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Experiences have real value; so does finishing a goal."
  },
  {
    "id": "ctx-1-direct-deposit-setup",
    "title": "Where Should Your Pay Go?",
    "prompt": "Your job offers direct deposit. You can send all to checking or split a percentage to savings.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "100% checking."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "80% checking / 20% savings —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "80% checking / 20% savings —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the bank how alerts work.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask the bank how alerts work."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does automatic saving beat 'saving what's left'?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting pay saves effortlessly but leaves slightly less spending cash."
  },
  {
    "id": "ctx-1-repair-or-replace-laptop",
    "title": "Fix It or Replace It?",
    "prompt": "Your $400 laptop (needed for school) has a $120 repair. A new one is $500.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Repair —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Repair —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Replace —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Replace —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Repair + start a replacement fund",
        "description": "bridge*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Repair + start a replacement fund"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is repairing the worse deal?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Repair saves cash unless the device is near the end of its life."
  },
  {
    "id": "ctx-1-mentor-vs-influencer",
    "title": "Two Money Tips",
    "prompt": "Your mentor suggests a boring index fund. An online video pushes a \"secret\" coin that \"always goes up.\"",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Follow mentor —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Follow mentor —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Follow video —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Follow video —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Research both before deciding",
        "description": "discernment*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Research both before deciding"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you judge whether money advice is trustworthy?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "\"Always goes up\" is a classic warning sign; boring is often safer."
  },
  {
    "id": "ctx-1-apprenticeship-vs-college",
    "title": "Earn While You Learn?",
    "prompt": "An apprenticeship pays you while training (lower starting pay, no debt). A degree path costs more upfront but may pay more later. *(Locked: age ≥16.)*",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Apprenticeship."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "College.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "College."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Work first, decide later.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Work first, decide later."
          }
        ]
      }
    ],
    "reflectionPrompt": "What matters more to you: earning now or earning more later?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "All paths can lead to good outcomes—they trade time, debt, and timing differently."
  },
  {
    "id": "ctx-1-renter-insurance-skip",
    "title": "Is Renter Insurance Worth $12?",
    "prompt": "Renter insurance is $12/month and would cover theft or water damage. *(Locked: `hasRoommate` or `hasSteadyIncome`.)*",
    "topics": [
      "insurance"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy it —",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy it —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, self-insure —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip, self-insure —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a higher-deductible cheaper plan.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy a higher-deductible cheaper plan."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a small monthly cost worth peace of mind?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Insurance usually \"loses\" money until the year it doesn't."
  },
  {
    "id": "ctx-1-side-hustle-records",
    "title": "Keep the Receipts?",
    "prompt": "Your craft sales bring in $200; supplies cost $70. A friend says \"don't bother tracking.\"",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Track income and costs —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Track income and costs —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Don't track —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Don't track —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a simple ledger app.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Use a simple ledger app."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do records matter even for a small hustle?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Tracking is tedious but it's the only way to know real profit."
  },
  {
    "id": "ctx-1-car-loan-term",
    "title": "Short Loan or Small Payment?",
    "prompt": "A $6,000 used car: 3-year loan ($180/mo) or 5-year loan ($120/mo, more total interest). *(Locked: `needsTransport`, `hasSteadyIncome`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "3-year."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "5-year.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "5-year."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save longer, pay more cash down.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Save longer, pay more cash down."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does a smaller payment sometimes cost more overall?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Longer terms ease monthly strain but raise total interest paid."
  },
  {
    "id": "ctx-1-password-reuse",
    "title": "One Password Everywhere",
    "prompt": "You use the same password on five accounts. One site reports a breach.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Change reused passwords, turn on 2FA —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Change reused passwords, turn on 2FA —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Change only the breached one.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Change only the breached one."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do nothing —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Do nothing —"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is reusing passwords risky?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Unique passwords are annoying to manage but contain damage."
  },
  {
    "id": "ctx-1-unit-price-shipping",
    "title": "Cheaper Until Shipping",
    "prompt": "Online: 12 pens for $6 + $4 shipping. Store: 12 pens for $7, no shipping.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Online —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Online —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Store —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Store —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Online if you add items to hit free shipping.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Online if you add items to hit free shipping."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why must you include fees in price comparisons?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "New twist—the cheaper sticker price loses once fees are added."
  },
  {
    "id": "ctx-1-compound-allowance",
    "title": "The Patient Account",
    "prompt": "You can keep $50 under your mattress or in an account that grows ~5%/year.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Account —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Account —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Mattress —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Mattress —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Split."
          }
        ]
      }
    ],
    "reflectionPrompt": "What does compounding add that simple saving doesn't?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Mattress money is fully available but loses ground to inflation."
  },
  {
    "id": "ctx-1-tax-refund-plan",
    "title": "The Refund Question",
    "prompt": "You get a $300 tax refund.",
    "topics": [
      "taxes"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Emergency fund."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay down a small debt.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay down a small debt."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Spend it."
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "Split across goals.",
        "outcomes": [
          {
            "id": "outcome-4",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Split across goals."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a big refund actually 'free money'?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A refund is your own money returned—useful, but not a windfall."
  },
  {
    "id": "ctx-1-friend-borrow-app",
    "title": "Pay You Back Friday",
    "prompt": "A close friend asks to borrow $25 via a payment app, promising to repay Friday.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Lend, note the date."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Lend a smaller amount you won't miss.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Lend a smaller amount you won't miss."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline kindly.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Decline kindly."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you protect both your money and the friendship?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Helping a friend is kind; only lend what you can afford to lose."
  },
  {
    "id": "ctx-1-gig-or-steady",
    "title": "Tips or a Paycheck?",
    "prompt": "A gig pays variable tips (some weeks $200, some $60). A steady job pays a flat $130/week.",
    "topics": [
      "taxes"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Gig —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Gig —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Steady job —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Steady job —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do both part-time.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Do both part-time."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does income variability change budgeting?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Higher upside comes with unpredictability that's harder to budget."
  },
  {
    "id": "ctx-1-phone-upgrade-pressure",
    "title": "Everyone Has the New Phone",
    "prompt": "Friends upgraded phones; yours works fine. An upgrade costs $300 or $25/month for 18 months.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Keep current phone."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy outright.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy outright."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Monthly plan —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Monthly plan —"
          }
        ]
      }
    ],
    "reflectionPrompt": "How much is fitting in worth to you—and is there a cheaper way?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The monthly plan feels affordable but costs $150 more overall."
  },
  {
    "id": "ctx-1-index-fund-fees",
    "title": "The Quiet Fee",
    "prompt": "Two similar funds: one charges 0.1% yearly, the other 1.0%. On $1,000 that's $1 vs. $10/year—and it compounds.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Low-fee fund."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "High-fee fund (flashier marketing).",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "High-fee fund (flashier marketing)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare 10-year fee totals first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Compare 10-year fee totals first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do small fees matter over decades?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Fees are easy to ignore but quietly eat long-term returns."
  },
  {
    "id": "ctx-1-family-cost-share",
    "title": "Pitching In",
    "prompt": "Your family asks if you can cover your own phone line ($15/mo) now that you work.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Yes, fully.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Yes, fully."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Offer to split it.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Offer to split it."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Not yet—save toward it first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Not yet—save toward it first."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do contributions change as your income grows?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Contributing builds trust and independence but tightens your own budget."
  },
  {
    "id": "ctx-1-2fa-setup",
    "title": "The Extra Step",
    "prompt": "Your account offers two-factor authentication. It adds a code step at login.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Turn it on.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Turn it on."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it (faster login).",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip it (faster login)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn it on for money accounts only.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Turn it on for money accounts only."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a few extra seconds worth more security?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "2FA slows you down slightly but blocks most account takeovers."
  },
  {
    "id": "ctx-1-garage-sale-pricing",
    "title": "Pricing Your Old Stuff",
    "prompt": "You sell old games. A game you bought for $40 is now worth maybe $12 used.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Price at $12 to sell fast."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Price at $25 hoping someone pays.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Price at $25 hoping someone pays."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep them.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Keep them."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do most things lose value after you buy them?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Most owned items are worth less than you paid—pricing to reality sells faster."
  },
  {
    "id": "ctx-1-impostor-grandparent",
    "title": "Urgent Call for Help",
    "prompt": "A message claims a relative is \"in trouble\" and needs money sent fast and secretly. *(Locked: `usesPaymentApp`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Stop, verify with family directly —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Stop, verify with family directly —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Send quickly out of worry —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Send quickly out of worry —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Report it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Report it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do scammers push secrecy and urgency?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Urgency + secrecy are deliberate scam pressure—pausing to verify protects you."
  },
  {
    "id": "ctx-1-savings-bond-placeholder",
    "title": "The Slow-and-Steady Certificate",
    "prompt": "A safe \"certificate\" locks $200 for 1 year at 4%, but you can't touch it early.",
    "topics": [
      "saving"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Lock it in —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Lock it in —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it flexible in savings.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Keep it flexible in savings."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Lock half.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Lock half."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you give up for a guaranteed return?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Locking earns more but you can't access it in an emergency."
  },
  {
    "id": "ctx-1-budget-5030-20",
    "title": "Splitting Your First $1,000",
    "prompt": "Your monthly take-home is $1,000. The 50/30/20 rule of thumb suggests needs/wants/savings.",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Follow it —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Follow it —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Adjust to 60/20/20 (high rent).",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Adjust to 60/20/20 (high rent)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Build your own split.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Build your own split."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is 50/30/20 a guideline, not a law?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The rule is a flexible starting point; real life shifts the ratios."
  },
  {
    "id": "ctx-1-phone-insurance-claim",
    "title": "Worth the Claim?",
    "prompt": "A $60 screen crack; your deductible is $49 and a claim might raise future premiums.",
    "topics": [
      "insurance"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay $60 out of pocket —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay $60 out of pocket —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "File claim, pay $49.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "File claim, pay $49."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Live with the crack.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Live with the crack."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a small claim not worth filing?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Filing saves a little now but can cost more later."
  },
  {
    "id": "ctx-1-crowdfund-friend",
    "title": "Backing a Friend's Project",
    "prompt": "A friend's small project asks for $20 \"support\" with no guaranteed return.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Give as a gift, expect nothing."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline kindly.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Decline kindly."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Offer help instead of cash.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Offer help instead of cash."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the difference between a gift and an investment?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Supporting people is valuable, but \"support\" isn't an investment with returns."
  },
  {
    "id": "ctx-1-wage-vs-inflation",
    "title": "A Raise That Isn't",
    "prompt": "You get a 3% raise, but prices rose 4% this year.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate real change —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Calculate real change —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Celebrate the raise.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Celebrate the raise."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Negotiate or cut costs.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Negotiate or cut costs."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can a raise still leave you worse off?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A raise feels good but only beats inflation if it outpaces prices."
  },
  {
    "id": "ctx-1-first-checking-fees",
    "title": "Reading the Fine Print",
    "prompt": "One checking account charges $5/month unless you keep $300 in it; another is free with no minimum.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Free no-minimum account."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "The $5 one (more features).",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "The $5 one (more features)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "The $5 one but keep $300 to waive it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "The $5 one but keep $300 to waive it."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do small monthly fees add up?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Feature-rich accounts may cost more unless you meet conditions."
  },
  {
    "id": "ctx-1-study-tools-cert",
    "title": "Earning a Certification",
    "prompt": "A $90 online certification could raise your job options. It takes 20 hours.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Earn it —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Earn it —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, save money.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip, save money."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Find a free version first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Find a free version first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Can knowledge be an asset?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Certs cost time and money but can open higher-paying doors."
  },
  {
    "id": "ctx-1-pet-monthly-budget",
    "title": "Planning the Pet Budget",
    "prompt": "A pet costs ~$30/month for food and supplies, plus an unpredictable vet fund. *(Locked: `hasPet`.)*",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Budget $30 + set aside $10/mo vet fund."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget $30 only.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Budget $30 only."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Adopt later when ready.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Adopt later when ready."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why budget for surprises before they happen?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "$30/month is steady; the vet fund prepares for the unsteady part."
  },
  {
    "id": "ctx-1-salary-negotiation",
    "title": "Should I Ask for More?",
    "prompt": "A job offers $15/hour. You researched that $16–17 is common for the role.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Politely ask for $16.50, citing research —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Politely ask for $16.50, citing research —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Accept $15.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Accept $15."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask for non-pay perks instead.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask for non-pay perks instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the risk and reward of negotiating?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Asking can raise pay but feels risky; preparation lowers the risk."
  },
  {
    "id": "ctx-1-subscription-bundle",
    "title": "The Bundle Deal",
    "prompt": "Three apps cost $5 each ($15) separately, or $11 bundled—but you only use two.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy two separately ($10)."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the bundle ($11).",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy the bundle ($11)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy only one ($5).",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy only one ($5)."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a 'deal' a deal if you don't use all of it?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Bundles save money only if you'd actually use everything in them."
  },
  {
    "id": "ctx-1-emergency-no-cushion",
    "title": "The Surprise With No Cushion",
    "prompt": "A surprise $250 cost hits and you have no emergency fund. *(Locked: NOT `hasEmergencyFund`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Borrow from family, repay over time",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Borrow from family, repay over time"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use BNPL/credit —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Use BNPL/credit —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Sell an asset.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Sell an asset."
          }
        ]
      }
    ],
    "reflectionPrompt": "How would a cushion have changed this?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Without a cushion, every surprise becomes a borrowing decision."
  },
  {
    "id": "ctx-1-comparison-warranty",
    "title": "The Extended Warranty Pitch",
    "prompt": "A $200 device offers a $40 extended warranty. Most devices don't fail in the covered window.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Decline, self-insure."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy it for peace of mind.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy it for peace of mind."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy only for fragile/expensive items.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy only for fragile/expensive items."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a warranty worth it?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Warranties profit the seller on average but can pay off for fragile gear."
  },
  {
    "id": "ctx-1-investing-downturn-hold",
    "title": "The Scary Dip",
    "prompt": "Your diversified fund drops 15% in a bad month. *(Locked: `hasInvestments`.)*",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Hold for the long term —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Hold for the long term —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell to stop losses —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Sell to stop losses —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy more at lower prices.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy more at lower prices."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might selling in a dip be a mistake for long-term goals?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Holding rides out dips but feels stressful; selling feels safe but can lock losses."
  },
  {
    "id": "ctx-1-gross-net-side",
    "title": "The Side-Hustle Tax Surprise",
    "prompt": "Your side hustle earned $1,200. You learn you may owe taxes on the profit.",
    "topics": [
      "career",
      "taxes"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Set aside ~20% for taxes."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend it all.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Spend it all."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor how self-employment taxes work",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask a mentor how self-employment taxes work"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why isn't all earned money fully yours to spend?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Setting money aside stings now but avoids a bigger problem later."
  },
  {
    "id": "ctx-1-transit-budget",
    "title": "Getting to Work",
    "prompt": "A job pays $14/hour but is far. Transit costs $6/day; a closer job pays $13 with $1/day transit.",
    "topics": [
      "budgeting",
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Far job —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Far job —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Closer job.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Closer job."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Carpool to reduce cost.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Carpool to reduce cost."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why subtract commuting costs from your wage?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Higher pay can shrink once commuting costs are counted."
  },
  {
    "id": "ctx-1-credit-report-check",
    "title": "Reading Your Own Report",
    "prompt": "You can check your credit report and spot an error listing an account you never opened. *(Locked: `eligibleForCredit`.)*",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Dispute the error."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ignore it."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Freeze your credit and dispute.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Freeze your credit and dispute."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why check your credit report regularly?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Checking takes effort but catches errors and fraud early."
  },
  {
    "id": "ctx-1-goal-vs-debt",
    "title": "Save or Pay Down?",
    "prompt": "You have $300. You could add to savings or pay off a $300 debt charging 18% interest.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay the debt —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay the debt —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save it.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Save it."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split: small cushion + most to debt.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Split: small cushion + most to debt."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does paying debt beat saving?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "High-interest debt usually beats low savings returns—but a tiny cushion still matters."
  },
  {
    "id": "ctx-1-peer-group-buy",
    "title": "Chipping in for a Big Buy",
    "prompt": "Four friends want to buy a $200 used game console to share.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Split evenly ($50 each), agree on rules."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "One owns it, others pay to use.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "One owns it, others pay to use."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip—too complicated.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip—too complicated."
          }
        ]
      }
    ],
    "reflectionPrompt": "What problems can shared ownership create?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting cost is cheaper but shared things need clear rules."
  },
  {
    "id": "ctx-1-inflation-grocery",
    "title": "Same Cart, Higher Total",
    "prompt": "A grocery list that cost $50 last year costs $55 now.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Calculate the increase (10%)."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Switch some brands.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Switch some brands."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy in bulk where unit price is lower.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy in bulk where unit price is lower."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can you fight rising prices day to day?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "You can't stop inflation but smart shopping softens it."
  },
  {
    "id": "ctx-1-first-job-w4",
    "title": "Filling Out the Form",
    "prompt": "Your first job asks you to complete a basic tax-withholding form.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Ask for help understanding it",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask for help understanding it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess and submit.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Guess and submit."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look up an official explainer first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Look up an official explainer first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does this form affect your paycheck?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Getting help avoids over- or under-withholding all year."
  },
  {
    "id": "ctx-1-mentor-job-referral",
    "title": "The Referral",
    "prompt": "Your mentor offers to refer you for a job, but it's outside your comfort zone.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Accept and prepare."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline, apply elsewhere on your own.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Decline, apply elsewhere on your own."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Accept but ask for prep help.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Accept but ask for prep help."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do relationships create opportunities?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Referrals open doors but you still have to perform."
  },
  {
    "id": "ctx-1-bnpl-stacking",
    "title": "Three Little Payments",
    "prompt": "You already have two BNPL plans. A third $90 item tempts you. *(Locked: `usedBNPL`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Wait until others are paid.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Wait until others are paid."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Add it —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Add it —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay cash instead.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay cash instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is stacking small payments risky?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "New twist—each plan feels small but together they can overwhelm a budget."
  },
  {
    "id": "ctx-1-donate-decision",
    "title": "Giving Some Back",
    "prompt": "You want to donate to a community program that once helped you, but money is tight.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Donate a small set amount."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Volunteer time instead.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Volunteer time instead."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait until more stable.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Wait until more stable."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you fit giving into a tight budget?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Generosity is valuable; so is your own stability—time can substitute for money."
  },
  {
    "id": "ctx-1-used-car-inspection",
    "title": "Trust but Verify",
    "prompt": "A used car looks great. A $75 inspection could reveal hidden problems. *(Locked: `needsTransport`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay for inspection —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay for inspection —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip to save $75.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Skip to save $75."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a knowledgeable adult to look",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Ask a knowledgeable adult to look"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is $75 worth avoiding a costly surprise?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "An inspection costs a little to prevent a potentially huge loss."
  },
  {
    "id": "ctx-1-data-breach-response",
    "title": "Your Email Was in a Breach",
    "prompt": "A site you use reports a breach exposing emails and passwords.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Change that password + others reusing it, enable 2FA."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Change only that site.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Change only that site."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and watch.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Wait and watch."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the first thing to do after a breach?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Acting broadly is more work but limits the spread."
  },
  {
    "id": "ctx-1-apartment-deposit",
    "title": "First and Deposit",
    "prompt": "An apartment needs first month ($800) plus a $800 refundable deposit upfront. *(Locked: `hasSteadyIncome`.)*",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pay it from savings."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Find a cheaper place needing less upfront.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Find a cheaper place needing less upfront."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Get a roommate to split it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Get a roommate to split it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a deposit different from rent?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Move-in costs are a big upfront hurdle even when rent is affordable."
  },
  {
    "id": "ctx-1-compound-early-vs-late",
    "title": "Starting Early",
    "prompt": "Saving $20/month from age 18 vs. waiting until 28 makes a big difference by retirement due to compounding.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Start small now."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until you earn more.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Wait until you earn more."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start tiny and increase later.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Start tiny and increase later."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does starting early beat starting big?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Starting small early often beats starting large later, thanks to time."
  },
  {
    "id": "ctx-1-flash-sale-pressure",
    "title": "Only 3 Left!",
    "prompt": "A \"limited time, only 3 left!\" banner pressures you to buy a $45 item you weren't planning on.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Wait 24 hours to decide."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Buy now."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add to a wishlist and budget for it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Add to a wishlist and budget for it."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do urgency tactics affect spending?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Sometimes the deal is real; pausing reveals whether you actually want it."
  },
  {
    "id": "ctx-1-phone-resale-value",
    "title": "Trade In or Sell?",
    "prompt": "Your old phone gets a $90 trade-in offer or might sell privately for $140 (with effort and some risk).",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Trade in for $90 (easy, safe)."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell privately for $140 (more work).",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Sell privately for $140 (more work)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep as a backup.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Keep as a backup."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you weigh effort, risk, and reward?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Private sale earns more but takes time and carries safety considerations."
  },
  {
    "id": "ctx-1-loan-comparison",
    "title": "Two Loan Offers",
    "prompt": "For a $1,000 need: Loan A at 10% APR, Loan B at 24% APR. *(Locked: `eligibleForCredit`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Loan A."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Loan B (faster approval).",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Loan B (faster approval)."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow less / save first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Borrow less / save first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why compare APR, not just monthly payment?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Faster approval can mean a much higher cost."
  },
  {
    "id": "ctx-1-seventy-two-goal",
    "title": "The 72 Plan",
    "prompt": "You want to double $500. At 6%, the Rule of 72 says ~12 years; at 9%, ~8 years (with more risk).",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Lower-risk 6% path."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Higher-risk 9% path.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Higher-risk 9% path."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Mix both.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Mix both."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you trade for faster doubling?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Faster doubling usually means accepting more risk. *(Seed nod: 72.)*"
  },
  {
    "id": "ctx-1-predatory-loan-flag",
    "title": "Cash in Minutes",
    "prompt": "An ad promises instant cash with \"no credit check\"—but the fees are enormous. *(Locked: `needsCash` flag context.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Avoid it, seek alternatives."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Read the full cost first.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Read the full cost first."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Take it (the costly trap).",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Take it (the costly trap)."
          }
        ]
      }
    ],
    "reflectionPrompt": "What are warning signs of a predatory loan?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "\"Easy\" loans often hide costs that trap borrowers."
  },
  {
    "id": "ctx-1-entrepreneur-reinvest",
    "title": "Profit or Grow?",
    "prompt": "Your hustle made $300 profit. Reinvesting $150 in supplies could grow next month's sales. *(Locked: `startedSideHustle`.)*",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Reinvest half."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pocket all of it.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Pocket all of it."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Reinvest all.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Reinvest all."
          }
        ]
      }
    ],
    "reflectionPrompt": "When should a business spend on itself?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Reinvesting risks current cash to grow future earnings."
  },
  {
    "id": "ctx-1-final-net-worth",
    "title": "Adding It All Up",
    "prompt": "Time to total your assets (cash, savings, investments, items) minus your debts.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate carefully —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Calculate carefully —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Estimate.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Estimate."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Walk through it with your mentor",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your choice will affect your options and habits.",
            "explanation": "Every decision teaches a different tradeoff.",
            "logText": "Walk through it with your mentor"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does net worth tell you—and what does it leave out?",
    "sourceNote": "Context Batch 1 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Net worth is one measure of progress, not a measure of your worth as a person."
  },
  {
    "id": "ctx-2-library-card-roi",
    "title": "The Free Card That Pays",
    "prompt": "A free library card gets you books, free wifi, and a maker space. A friend says \"libraries are boring.\" You have limited free afternoons.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Sign up, try the maker space —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Free resources can multiply what you can do without spending cash.",
            "explanation": "Free resources can multiply what you can do without spending cash.",
            "logText": "Sign up, try the maker space —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Free resources can multiply what you can do without spending cash.",
            "explanation": "Free resources can multiply what you can do without spending cash.",
            "logText": "Skip it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Sign up and bring the friend",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Free resources can multiply what you can do without spending cash.",
            "explanation": "Free resources can multiply what you can do without spending cash.",
            "logText": "Sign up and bring the friend"
          }
        ]
      }
    ],
    "reflectionPrompt": "What free thing near you could open a door?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The card is free, but your *time* using it isn't — both choices are reasonable."
  },
  {
    "id": "ctx-2-odd-total-budget",
    "title": "The $47 Problem",
    "prompt": "You have exactly $47 for the week: a $19 need, a $13 maybe, and an $11 want all tempt you.",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Need only, save $28;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$47 − $19 = $28 left; each add-on shrinks your cushion.",
            "explanation": "$47 − $19 = $28 left; each add-on shrinks your cushion.",
            "logText": "Need only, save $28;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Need + maybe = $32, save $15;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$47 − $19 = $28 left; each add-on shrinks your cushion.",
            "explanation": "$47 − $19 = $28 left; each add-on shrinks your cushion.",
            "logText": "Need + maybe = $32, save $15;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "All three = $43, save $4.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$47 − $19 = $28 left; each add-on shrinks your cushion.",
            "explanation": "$47 − $19 = $28 left; each add-on shrinks your cushion.",
            "logText": "All three = $43, save $4."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did the odd number make you actually subtract instead of guess?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Spending more isn't wrong — it's a smaller cushion for a fuller week."
  },
  {
    "id": "ctx-2-season-pass-guilt",
    "title": "I Already Paid For It",
    "prompt": "You bought a $40 season pass to a weekend activity. Now a better free plan comes up the same day. Part of you says \"but I paid for the pass!\"",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Go to the free thing, let the pass go this week;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $40 is already spent either way — it shouldn't decide today.",
            "explanation": "The $40 is already spent either way — it shouldn't decide today.",
            "logText": "Go to the free thing, let the pass go this week;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the pass out of guilt;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $40 is already spent either way — it shouldn't decide today.",
            "explanation": "The $40 is already spent either way — it shouldn't decide today.",
            "logText": "Use the pass out of guilt;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decide by which you'd actually enjoy now.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $40 is already spent either way — it shouldn't decide today.",
            "explanation": "The $40 is already spent either way — it shouldn't decide today.",
            "logText": "Decide by which you'd actually enjoy now."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did 'I already paid' pull on you?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Both can be fine — the lesson is *not letting the past payment alone decide*."
  },
  {
    "id": "ctx-2-return-policy-unread",
    "title": "The Tag Says Final Sale",
    "prompt": "You buy a $35 hoodie online without reading the return policy. It arrives too small.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Check the policy now and act on it —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Refund type decides your options — reading first would've told you.",
            "explanation": "Refund type decides your options — reading first would've told you.",
            "logText": "Check the policy now and act on it —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it and hope it stretches;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Refund type decides your options — reading first would've told you.",
            "explanation": "Refund type decides your options — reading first would've told you.",
            "logText": "Keep it and hope it stretches;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Try to resell it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Refund type decides your options — reading first would've told you.",
            "explanation": "Refund type decides your options — reading first would've told you.",
            "logText": "Try to resell it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why check 'can I return this?' *before* buying?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Reselling can recover some cash but costs effort; keeping it avoids hassle."
  },
  {
    "id": "ctx-2-worth-the-trip",
    "title": "Two Buses to Save $4",
    "prompt": "A store 45 minutes away (each way) sells your item $4 cheaper. The round trip is about 2 hours.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Make the trip;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$4 saved ÷ 2 hours = $2/hour for your time — your call if that's worth it.",
            "explanation": "$4 saved ÷ 2 hours = $2/hour for your time — your call if that's worth it.",
            "logText": "Make the trip;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy local, keep the 2 hours;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$4 saved ÷ 2 hours = $2/hour for your time — your call if that's worth it.",
            "explanation": "$4 saved ÷ 2 hours = $2/hour for your time — your call if that's worth it.",
            "logText": "Buy local, keep the 2 hours;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Order it and wait, paying $1 shipping.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$4 saved ÷ 2 hours = $2/hour for your time — your call if that's worth it.",
            "explanation": "$4 saved ÷ 2 hours = $2/hour for your time — your call if that's worth it.",
            "logText": "Order it and wait, paying $1 shipping."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's an hour of your time worth to you right now?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Saving money is real; so is your time — neither answer is wrong."
  },
  {
    "id": "ctx-2-payday-before-bill",
    "title": "The Bill Came First",
    "prompt": "Your $60 phone bill is due on the 10th, but you're not paid until the 15th. You have $45 now.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Move the due date to after payday;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Same monthly money — the *timing* is the problem, not the amount.",
            "explanation": "Same monthly money — the *timing* is the problem, not the amount.",
            "logText": "Move the due date to after payday;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep a $20 buffer next month so this can't repeat;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Same monthly money — the *timing* is the problem, not the amount.",
            "explanation": "Same monthly money — the *timing* is the problem, not the amount.",
            "logText": "Keep a $20 buffer next month so this can't repeat;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Risk a late fee.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Same monthly money — the *timing* is the problem, not the amount.",
            "explanation": "Same monthly money — the *timing* is the problem, not the amount.",
            "logText": "Risk a late fee."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a small buffer fix a timing gap for good?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Shifting the date is easy now; a buffer is more work but permanent."
  },
  {
    "id": "ctx-2-free-shipping-filler",
    "title": "Just $6 More for Free Shipping",
    "prompt": "Your $24 order has $5 shipping, but adding $6 of stuff makes shipping free.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay the $5 shipping, buy only what you wanted;",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending $6 to save $5 costs you $1 more — unless you needed the add-on.",
            "explanation": "Spending $6 to save $5 costs you $1 more — unless you needed the add-on.",
            "logText": "Pay the $5 shipping, buy only what you wanted;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Add a $6 filler to \"save\" $5;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Spending $6 to save $5 costs you $1 more — unless you needed the add-on.",
            "explanation": "Spending $6 to save $5 costs you $1 more — unless you needed the add-on.",
            "logText": "Add a $6 filler to \"save\" $5;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add an item you actually needed anyway.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Spending $6 to save $5 costs you $1 more — unless you needed the add-on.",
            "explanation": "Spending $6 to save $5 costs you $1 more — unless you needed the add-on.",
            "logText": "Add an item you actually needed anyway."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is 'free shipping' free if you buy extra to get it?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A *needed* add-on makes it smart; a filler makes it a trap."
  },
  {
    "id": "ctx-2-bike-tube-upkeep",
    "title": "The $7 You Skipped",
    "prompt": "Your bike needs a $7 tune-up. Skipping it might be fine — or a small problem could grow.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Do the $7 upkeep now;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Small upkeep often prevents a bigger bill — but not always.",
            "explanation": "Small upkeep often prevents a bigger bill — but not always.",
            "logText": "Do the $7 upkeep now;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it and ride —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Small upkeep often prevents a bigger bill — but not always.",
            "explanation": "Small upkeep often prevents a bigger bill — but not always.",
            "logText": "Skip it and ride —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Learn to do it yourself for $4 in parts.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Small upkeep often prevents a bigger bill — but not always.",
            "explanation": "Small upkeep often prevents a bigger bill — but not always.",
            "logText": "Learn to do it yourself for $4 in parts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is owning something more than the purchase price?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Skipping sometimes works out — proactive care just lowers the odds of a big hit."
  },
  {
    "id": "ctx-2-two-goal-split",
    "title": "Camera and Class Trip",
    "prompt": "You save $40/month. A $200 camera and a $120 class trip both matter; the trip is due in 4 months.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "All to the trip first ($120 in 3 months), then camera;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 split evenly = $20 each; the trip needs $30/month to make the deadline.",
            "explanation": "$40 split evenly = $20 each; the trip needs $30/month to make the deadline.",
            "logText": "All to the trip first ($120 in 3 months), then camera;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split 50/50 ($20 each) and risk missing the trip deadline;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 split evenly = $20 each; the trip needs $30/month to make the deadline.",
            "explanation": "$40 split evenly = $20 each; the trip needs $30/month to make the deadline.",
            "logText": "Split 50/50 ($20 each) and risk missing the trip deadline;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "70% trip / 30% camera.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 split evenly = $20 each; the trip needs $30/month to make the deadline.",
            "explanation": "$40 split evenly = $20 each; the trip needs $30/month to make the deadline.",
            "logText": "70% trip / 30% camera."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does a deadline decide your split?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Even splitting feels fair but can miss a hard deadline."
  },
  {
    "id": "ctx-2-non-payer-friend",
    "title": "One Friend Fell Behind",
    "prompt": "Five of you pledged $12 each for a $60 group gift. One friend can't pay this week and feels embarrassed.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Cover their $12, quietly note it;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$60 ÷ 5 = $12; $48 ÷ 5 = $9.60 — shrinking the gift shares the gap fairly.",
            "explanation": "$60 ÷ 5 = $12; $48 ÷ 5 = $9.60 — shrinking the gift shares the gap fairly.",
            "logText": "Cover their $12, quietly note it;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Lower the gift to $48 so it's $9.60 each;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$60 ÷ 5 = $12; $48 ÷ 5 = $9.60 — shrinking the gift shares the gap fairly.",
            "explanation": "$60 ÷ 5 = $12; $48 ÷ 5 = $9.60 — shrinking the gift shares the gap fairly.",
            "logText": "Lower the gift to $48 so it's $9.60 each;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if they'd rather contribute time/effort instead",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$60 ÷ 5 = $12; $48 ÷ 5 = $9.60 — shrinking the gift shares the gap fairly.",
            "explanation": "$60 ÷ 5 = $12; $48 ÷ 5 = $9.60 — shrinking the gift shares the gap fairly.",
            "logText": "Ask if they'd rather contribute time/effort instead"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you handle a shortfall without shaming anyone?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Covering is generous but can strain you; adjusting shares the cost kindly."
  },
  {
    "id": "ctx-2-resell-hold-or-sell",
    "title": "Hold for More?",
    "prompt": "You bought a collectible for $30 to resell. It's worth $45 now, but a friend says \"wait, it'll hit $80.\"",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Sell now, lock $15 profit;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Holding risks the price dropping; selling locks a sure gain.",
            "explanation": "Holding risks the price dropping; selling locks a sure gain.",
            "logText": "Sell now, lock $15 profit;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hold for more —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Holding risks the price dropping; selling locks a sure gain.",
            "explanation": "Holding risks the price dropping; selling locks a sure gain.",
            "logText": "Hold for more —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Sell half.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Holding risks the price dropping; selling locks a sure gain.",
            "explanation": "Holding risks the price dropping; selling locks a sure gain.",
            "logText": "Sell half."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a 'sure thing later' never actually sure?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Greed can win big or give back your profit — selling half splits the difference."
  },
  {
    "id": "ctx-2-withholding-choice",
    "title": "Bigger Check or Bigger Refund?",
    "prompt": "On a simple job form, you can have more tax held now (bigger refund later) or less held (bigger paychecks now).",
    "topics": [
      "taxes"
    ],
    "ageRange": {
      "min": 16,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "More withheld",
        "description": "bigger refund, tighter checks;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A refund is your own money coming back — neither choice is 'free.'",
            "explanation": "A refund is your own money coming back — neither choice is 'free.'",
            "logText": "More withheld"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Less withheld",
        "description": "bigger checks, maybe owe a little;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A refund is your own money coming back — neither choice is 'free.'",
            "explanation": "A refund is your own money coming back — neither choice is 'free.'",
            "logText": "Less withheld"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Aim for the middle.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A refund is your own money coming back — neither choice is 'free.'",
            "explanation": "A refund is your own money coming back — neither choice is 'free.'",
            "logText": "Aim for the middle."
          }
        ]
      }
    ],
    "reflectionPrompt": "Would you rather have money monthly or in one lump?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A refund feels great but means you lent money interest-free all year."
  },
  {
    "id": "ctx-2-phone-overage",
    "title": "You Went Over",
    "prompt": "Your $25 phone plan has a data cap. This month you went over and got a $15 overage fee.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Upsize to a $35 unlimited plan;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$25 + frequent $15 overages can beat the $35 plan — track which is cheaper for *you*.",
            "explanation": "$25 + frequent $15 overages can beat the $35 plan — track which is cheaper for *you*.",
            "logText": "Upsize to a $35 unlimited plan;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep the $25 plan and change usage habits;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$25 + frequent $15 overages can beat the $35 plan — track which is cheaper for *you*.",
            "explanation": "$25 + frequent $15 overages can beat the $35 plan — track which is cheaper for *you*.",
            "logText": "Keep the $25 plan and change usage habits;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add a one-time $5 booster only when needed.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$25 + frequent $15 overages can beat the $35 plan — track which is cheaper for *you*.",
            "explanation": "$25 + frequent $15 overages can beat the $35 plan — track which is cheaper for *you*.",
            "logText": "Add a one-time $5 booster only when needed."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying more monthly actually cheaper?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Unlimited removes worry but wastes money if you rarely go over."
  },
  {
    "id": "ctx-2-self-insure-jar",
    "title": "Skip the Warranty, Start a Jar",
    "prompt": "A $40 warranty is offered on a $200 device. You could instead put $40 in a \"self-insure jar\" for any future breakage.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the warranty;",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Across many items, a jar often beats buying every warranty — but one early break can sting.",
            "explanation": "Across many items, a jar often beats buying every warranty — but one early break can sting.",
            "logText": "Buy the warranty;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline, fund the jar —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Across many items, a jar often beats buying every warranty — but one early break can sting.",
            "explanation": "Across many items, a jar often beats buying every warranty — but one early break can sting.",
            "logText": "Decline, fund the jar —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline and skip the jar (risk it).",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Across many items, a jar often beats buying every warranty — but one early break can sting.",
            "explanation": "Across many items, a jar often beats buying every warranty — but one early break can sting.",
            "logText": "Decline and skip the jar (risk it)."
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a self-insure jar like and unlike insurance?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The jar can come out ahead long-term but offers no help if it's empty when something breaks."
  },
  {
    "id": "ctx-2-official-looking-message",
    "title": "Looks Official",
    "prompt": "A message with a convincing logo says your account \"needs verification\" within 24 hours or it'll be locked.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Don't click; check the real account directly —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Real organizations don't lock you out for not clicking a rushed link.",
            "explanation": "Real organizations don't lock you out for not clicking a rushed link.",
            "logText": "Don't click; check the real account directly —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Click the link to \"fix it fast\" —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Real organizations don't lock you out for not clicking a rushed link.",
            "explanation": "Real organizations don't lock you out for not clicking a rushed link.",
            "logText": "Click the link to \"fix it fast\" —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult to look first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Real organizations don't lock you out for not clicking a rushed link.",
            "explanation": "Real organizations don't lock you out for not clicking a rushed link.",
            "logText": "Ask a trusted adult to look first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which mattered more here — the logo or the urgency?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "New twist vs. typical phishing — the bait is *authority and a deadline*, not free money."
  },
  {
    "id": "ctx-2-gift-vs-loan-friend",
    "title": "Is This a Gift or a Loan?",
    "prompt": "A friend asks for $20 for a project. You're not sure if you'll see it again.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Give it as a gift, expect nothing;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Naming it a gift or a loan up front protects both the money and the friendship.",
            "explanation": "Naming it a gift or a loan up front protects both the money and the friendship.",
            "logText": "Give it as a gift, expect nothing;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Lend it with a clear repay date;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Naming it a gift or a loan up front protects both the money and the friendship.",
            "explanation": "Naming it a gift or a loan up front protects both the money and the friendship.",
            "logText": "Lend it with a clear repay date;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Offer help instead of cash.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Naming it a gift or a loan up front protects both the money and the friendship.",
            "explanation": "Naming it a gift or a loan up front protects both the money and the friendship.",
            "logText": "Offer help instead of cash."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does an unclear 'loan' cause more trouble than a clear gift?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A gift risks the cash but not the friendship; a loan risks both if it's not repaid."
  },
  {
    "id": "ctx-2-unit-convert-cereal",
    "title": "Per Box or Per Ounce?",
    "prompt": "Cereal A: 12 oz for $3.00. Cereal B: 18 oz for $4.05. The bigger box *looks* pricier.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Compare per ounce ($0.25 vs. $0.225);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$3.00 ÷ 12 = $0.25/oz; $4.05 ÷ 18 = $0.225/oz — the bigger box wins per ounce.",
            "explanation": "$3.00 ÷ 12 = $0.25/oz; $4.05 ÷ 18 = $0.225/oz — the bigger box wins per ounce.",
            "logText": "Compare per ounce ($0.25 vs. $0.225);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the smaller box (lower sticker);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$3.00 ÷ 12 = $0.25/oz; $4.05 ÷ 18 = $0.225/oz — the bigger box wins per ounce.",
            "explanation": "$3.00 ÷ 12 = $0.25/oz; $4.05 ÷ 18 = $0.225/oz — the bigger box wins per ounce.",
            "logText": "Buy the smaller box (lower sticker);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy whichever you'll finish before it goes stale.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$3.00 ÷ 12 = $0.25/oz; $4.05 ÷ 18 = $0.225/oz — the bigger box wins per ounce.",
            "explanation": "$3.00 ÷ 12 = $0.25/oz; $4.05 ÷ 18 = $0.225/oz — the bigger box wins per ounce.",
            "logText": "Buy whichever you'll finish before it goes stale."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why convert to the same unit before comparing?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The cheaper-per-ounce box wastes money if it goes stale before you finish it."
  },
  {
    "id": "ctx-2-pay-frequency-feel",
    "title": "Weekly or Monthly?",
    "prompt": "Same $1,200/month job, but you can be paid $300 weekly or $1,200 once a month.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Weekly",
        "description": "smoother cash flow, easier to manage;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Same yearly total; weekly smooths cash flow, monthly needs a plan to last.",
            "explanation": "Same yearly total; weekly smooths cash flow, monthly needs a plan to last.",
            "logText": "Weekly"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Monthly",
        "description": "one big deposit, needs planning;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Same yearly total; weekly smooths cash flow, monthly needs a plan to last.",
            "explanation": "Same yearly total; weekly smooths cash flow, monthly needs a plan to last.",
            "logText": "Monthly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Whatever the bills' timing favors.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Same yearly total; weekly smooths cash flow, monthly needs a plan to last.",
            "explanation": "Same yearly total; weekly smooths cash flow, monthly needs a plan to last.",
            "logText": "Whatever the bills' timing favors."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does pay timing change how you'd budget?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Weekly is easier to manage; monthly can build discipline but risks early-month overspending."
  },
  {
    "id": "ctx-2-restocking-fee",
    "title": "Returns Cost Money?",
    "prompt": "You want to return a $90 item, but there's a 15% restocking fee.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Return it, accept the fee;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "15% of $90 = $13.50 lost on the return — sometimes keeping or reselling beats that.",
            "explanation": "15% of $90 = $13.50 lost on the return — sometimes keeping or reselling beats that.",
            "logText": "Return it, accept the fee;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it and try to use it;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "15% of $90 = $13.50 lost on the return — sometimes keeping or reselling beats that.",
            "explanation": "15% of $90 = $13.50 lost on the return — sometimes keeping or reselling beats that.",
            "logText": "Keep it and try to use it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Resell it privately to avoid the fee.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "15% of $90 = $13.50 lost on the return — sometimes keeping or reselling beats that.",
            "explanation": "15% of $90 = $13.50 lost on the return — sometimes keeping or reselling beats that.",
            "logText": "Resell it privately to avoid the fee."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do some returns cost you money?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Eating the fee is simple; reselling avoids it but takes effort and isn't guaranteed."
  },
  {
    "id": "ctx-2-maker-space-skill",
    "title": "Learn It for Free",
    "prompt": "A free community workshop teaches a skill you could later charge for. It costs 6 weekend hours.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Attend, build the skill —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Free skills can become an asset you carry for life.",
            "explanation": "Free skills can become an asset you carry for life.",
            "logText": "Attend, build the skill —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, keep your weekends;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Free skills can become an asset you carry for life.",
            "explanation": "Free skills can become an asset you carry for life.",
            "logText": "Skip, keep your weekends;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Attend with a friend and split practice time",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Free skills can become an asset you carry for life.",
            "explanation": "Free skills can become an asset you carry for life.",
            "logText": "Attend with a friend and split practice time"
          }
        ]
      }
    ],
    "reflectionPrompt": "Can something you learn count as an asset?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Free skill-building costs time you can't get back — rest and fun matter too."
  },
  {
    "id": "ctx-2-price-history-sale",
    "title": "Is This Sale Real?",
    "prompt": "An item is \"on sale\" for $48. Its price chart shows it's usually $42, spiked to $55, now \"discounted\" to $48.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Wait",
        "description": "$48 is above the usual $42;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A 'sale' above the normal price isn't really a discount.",
            "explanation": "A 'sale' above the normal price isn't really a discount.",
            "logText": "Wait"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy",
        "description": "it says \"sale\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A 'sale' above the normal price isn't really a discount.",
            "explanation": "A 'sale' above the normal price isn't really a discount.",
            "logText": "Buy"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a price alert for $42 or less.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A 'sale' above the normal price isn't really a discount.",
            "explanation": "A 'sale' above the normal price isn't really a discount.",
            "logText": "Set a price alert for $42 or less."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why read a price's history before trusting 'sale'?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting risks it selling out; buying now risks overpaying for a fake deal."
  },
  {
    "id": "ctx-2-deposit-refundable",
    "title": "Will I Get It Back?",
    "prompt": "Renting equipment for a project needs a $75 refundable deposit, returned if you bring it back undamaged.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay it, treat it as temporarily locked money;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A deposit isn't a fee — it's *your* money held, returnable if you're careful.",
            "explanation": "A deposit isn't a fee — it's *your* money held, returnable if you're careful.",
            "logText": "Pay it, treat it as temporarily locked money;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Find a no-deposit option that costs more per use;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A deposit isn't a fee — it's *your* money held, returnable if you're careful.",
            "explanation": "A deposit isn't a fee — it's *your* money held, returnable if you're careful.",
            "logText": "Find a no-deposit option that costs more per use;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow the gear from a mentor",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A deposit isn't a fee — it's *your* money held, returnable if you're careful.",
            "explanation": "A deposit isn't a fee — it's *your* money held, returnable if you're careful.",
            "logText": "Borrow the gear from a mentor"
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a refundable deposit different from a fee?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The deposit ties up cash temporarily; no-deposit options cost more but keep cash free."
  },
  {
    "id": "ctx-2-tool-as-asset",
    "title": "Buy the Drill or Rent It?",
    "prompt": "A project needs a drill. Buying is $60 (yours to keep, occasional reuse); renting is $12/use.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy",
        "description": "pays off after 5 uses;",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$60 ÷ $12 = 5 uses to break even — buying wins only if you'll use it enough.",
            "explanation": "$60 ÷ $12 = 5 uses to break even — buying wins only if you'll use it enough.",
            "logText": "Buy"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Rent",
        "description": "cheaper if you'll use it once or twice;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$60 ÷ $12 = 5 uses to break even — buying wins only if you'll use it enough.",
            "explanation": "$60 ÷ $12 = 5 uses to break even — buying wins only if you'll use it enough.",
            "logText": "Rent"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow from a neighbor first",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$60 ÷ $12 = 5 uses to break even — buying wins only if you'll use it enough.",
            "explanation": "$60 ÷ $12 = 5 uses to break even — buying wins only if you'll use it enough.",
            "logText": "Borrow from a neighbor first"
          }
        ]
      }
    ],
    "reflectionPrompt": "When does owning beat renting?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Owning saves long-term *if* you use it; otherwise it's clutter you paid for."
  },
  {
    "id": "ctx-2-decision-tag-reflect",
    "title": "Why Did You Choose That?",
    "prompt": "After a spending choice, you can tag your reason instead of explaining out loud.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "\"Saved for later\";",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Naming your reason helps you see your money values over time.",
            "explanation": "Naming your reason helps you see your money values over time.",
            "logText": "\"Saved for later\";"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "\"Treated myself\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Naming your reason helps you see your money values over time.",
            "explanation": "Naming your reason helps you see your money values over time.",
            "logText": "\"Treated myself\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "\"Helped someone\";",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Naming your reason helps you see your money values over time.",
            "explanation": "Naming your reason helps you see your money values over time.",
            "logText": "\"Helped someone\";"
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "\"Played it safe.\"",
        "outcomes": [
          {
            "id": "outcome-4",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Naming your reason helps you see your money values over time.",
            "explanation": "Naming your reason helps you see your money values over time.",
            "logText": "\"Played it safe.\""
          }
        ]
      }
    ],
    "reflectionPrompt": "Which tag do you pick most — and what does that say?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "No wrong tag — this is about noticing patterns, not judging them."
  },
  {
    "id": "ctx-2-library-printing-fee",
    "title": "Free Until You Print",
    "prompt": "The library is free, but printing your 40-page project is $0.10/page.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Print all 40 pages ($4.00);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "40 × $0.10 = $4.00; trimming to 12 pages = $1.20 — 'free' had a printing cost.",
            "explanation": "40 × $0.10 = $4.00; trimming to 12 pages = $1.20 — 'free' had a printing cost.",
            "logText": "Print all 40 pages ($4.00);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Print only the 12 essential pages ($1.20);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "40 × $0.10 = $4.00; trimming to 12 pages = $1.20 — 'free' had a printing cost.",
            "explanation": "40 × $0.10 = $4.00; trimming to 12 pages = $1.20 — 'free' had a printing cost.",
            "logText": "Print only the 12 essential pages ($1.20);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Submit it digitally for free.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "40 × $0.10 = $4.00; trimming to 12 pages = $1.20 — 'free' had a printing cost.",
            "explanation": "40 × $0.10 = $4.00; trimming to 12 pages = $1.20 — 'free' had a printing cost.",
            "logText": "Submit it digitally for free."
          }
        ]
      }
    ],
    "reflectionPrompt": "What 'free' things have small costs hiding inside?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Digital is cheapest but not always accepted; printing essentials balances cost and need."
  },
  {
    "id": "ctx-2-birthday-cash-split",
    "title": "Three Jars",
    "prompt": "You receive $63. You decide to use a save/spend/share split but want it to feel right for you.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 14
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Even thirds ($21 each);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$63 ÷ 3 = $21; percentages let you shape it to your goals.",
            "explanation": "$63 ÷ 3 = $21; percentages let you shape it to your goals.",
            "logText": "Even thirds ($21 each);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save-heavy 60/30/10 ($37.80/$18.90/$6.30);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$63 ÷ 3 = $21; percentages let you shape it to your goals.",
            "explanation": "$63 ÷ 3 = $21; percentages let you shape it to your goals.",
            "logText": "Save-heavy 60/30/10 ($37.80/$18.90/$6.30);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend-heavy 20/60/20.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$63 ÷ 3 = $21; percentages let you shape it to your goals.",
            "explanation": "$63 ÷ 3 = $21; percentages let you shape it to your goals.",
            "logText": "Spend-heavy 20/60/20."
          }
        ]
      }
    ],
    "reflectionPrompt": "What split matches what you care about right now?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Save-heavy builds funds; spend-heavy enjoys now — both are valid plans."
  },
  {
    "id": "ctx-2-gig-cancel-fee",
    "title": "The Late-Cancel Penalty",
    "prompt": "You booked a paid task slot but a late cancellation costs a $10 penalty. Something better came up.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Honor the commitment;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Breaking a commitment can carry a real cost — sometimes worth it, sometimes not.",
            "explanation": "Breaking a commitment can carry a real cost — sometimes worth it, sometimes not.",
            "logText": "Honor the commitment;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Cancel and pay $10;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Breaking a commitment can carry a real cost — sometimes worth it, sometimes not.",
            "explanation": "Breaking a commitment can carry a real cost — sometimes worth it, sometimes not.",
            "logText": "Cancel and pay $10;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask to swap the slot with someone.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Breaking a commitment can carry a real cost — sometimes worth it, sometimes not.",
            "explanation": "Breaking a commitment can carry a real cost — sometimes worth it, sometimes not.",
            "logText": "Ask to swap the slot with someone."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do penalties shape whether you keep a commitment?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The better opportunity may beat the $10 — or your reliability may be worth more."
  },
  {
    "id": "ctx-2-data-cap-stream",
    "title": "Stream or Save Data?",
    "prompt": "You have 2 GB of data left and 9 days. Streaming uses about 0.3 GB/hour.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Budget ~0.7 hr/day of streaming;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "2 GB ÷ 9 days ≈ 0.22 GB/day ≈ 0.7 hr/day — pacing avoids overage.",
            "explanation": "2 GB ÷ 9 days ≈ 0.22 GB/day ≈ 0.7 hr/day — pacing avoids overage.",
            "logText": "Budget ~0.7 hr/day of streaming;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Stream freely now, risk overage;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "2 GB ÷ 9 days ≈ 0.22 GB/day ≈ 0.7 hr/day — pacing avoids overage.",
            "explanation": "2 GB ÷ 9 days ≈ 0.22 GB/day ≈ 0.7 hr/day — pacing avoids overage.",
            "logText": "Stream freely now, risk overage;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use wifi only for streaming.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "2 GB ÷ 9 days ≈ 0.22 GB/day ≈ 0.7 hr/day — pacing avoids overage.",
            "explanation": "2 GB ÷ 9 days ≈ 0.22 GB/day ≈ 0.7 hr/day — pacing avoids overage.",
            "logText": "Use wifi only for streaming."
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a data cap like a weekly money budget?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Pacing keeps you safe; wifi-only is free but limits where you watch."
  },
  {
    "id": "ctx-2-secondhand-vs-new",
    "title": "Used Saves, But...",
    "prompt": "A needed item is $50 new or $28 used (slightly worn, no returns).",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy used, save $22;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$50 − $28 = $22 saved, but used means no returns — weigh the risk.",
            "explanation": "$50 − $28 = $22 saved, but used means no returns — weigh the risk.",
            "logText": "Buy used, save $22;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy new for the warranty and return option;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$50 − $28 = $22 saved, but used means no returns — weigh the risk.",
            "explanation": "$50 − $28 = $22 saved, but used means no returns — weigh the risk.",
            "logText": "Buy new for the warranty and return option;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Inspect the used one carefully first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$50 − $28 = $22 saved, but used means no returns — weigh the risk.",
            "explanation": "$50 − $28 = $22 saved, but used means no returns — weigh the risk.",
            "logText": "Inspect the used one carefully first."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you give up when you buy used?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Used saves money but trades away protections — inspection lowers the risk."
  },
  {
    "id": "ctx-2-mentor-skill-trade",
    "title": "Skills for Skills",
    "prompt": "A mentor offers to teach you a paid skill if you help them with something you're already good at. No money changes hands.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Trade skills",
        "description": "both gain, no cash;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Barter trades value without cash — useful when money is tight.",
            "explanation": "Barter trades value without cash — useful when money is tight.",
            "logText": "Trade skills"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Offer to pay instead;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Barter trades value without cash — useful when money is tight.",
            "explanation": "Barter trades value without cash — useful when money is tight.",
            "logText": "Offer to pay instead;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline, learn alone online.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Barter trades value without cash — useful when money is tight.",
            "explanation": "Barter trades value without cash — useful when money is tight.",
            "logText": "Decline, learn alone online."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is trading time or skills better than paying?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Bartering saves cash but costs your time; paying is faster but spends money."
  },
  {
    "id": "ctx-2-emergency-partial-cover",
    "title": "The Fund Covers *Some*",
    "prompt": "A surprise $180 cost hits. Your emergency fund has $110.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use the $110, cover the remaining $70 from this week's budget;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$180 − $110 = $70 still owed — a fund can soften a hit without fully covering it.",
            "explanation": "$180 − $110 = $70 still owed — a fund can soften a hit without fully covering it.",
            "logText": "Use the $110, cover the remaining $70 from this week's budget;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the $110 and put $70 on BNPL;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$180 − $110 = $70 still owed — a fund can soften a hit without fully covering it.",
            "explanation": "$180 − $110 = $70 still owed — a fund can soften a hit without fully covering it.",
            "logText": "Use the $110 and put $70 on BNPL;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Delay the expense if possible.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$180 − $110 = $70 still owed — a fund can soften a hit without fully covering it.",
            "explanation": "$180 − $110 = $70 still owed — a fund can soften a hit without fully covering it.",
            "logText": "Delay the expense if possible."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a partly-full cushion still worth having?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Even a partial cushion shrinks the borrowing — covering the rest from budget avoids interest."
  },
  {
    "id": "ctx-2-subscription-pause",
    "title": "Pause Instead of Cancel",
    "prompt": "A $9/month service you like but won't use this summer offers a free 3-month pause.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pause it",
        "description": "save $27, keep your settings;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "3 × $9 = $27 saved by pausing — better than paying for nothing.",
            "explanation": "3 × $9 = $27 saved by pausing — better than paying for nothing.",
            "logText": "Pause it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Cancel fully;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "3 × $9 = $27 saved by pausing — better than paying for nothing.",
            "explanation": "3 × $9 = $27 saved by pausing — better than paying for nothing.",
            "logText": "Cancel fully;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep paying \"to not lose my place.\"",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "3 × $9 = $27 saved by pausing — better than paying for nothing.",
            "explanation": "3 × $9 = $27 saved by pausing — better than paying for nothing.",
            "logText": "Keep paying \"to not lose my place.\""
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might pausing beat both canceling and paying?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Pausing saves money now; canceling fully avoids forgetting to un-pause."
  },
  {
    "id": "ctx-2-wage-tip-average",
    "title": "What's a Normal Week?",
    "prompt": "Your tip income over 4 weeks was $80, $140, $60, $120. You need to budget around a typical week.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Budget on the average ($100);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($80+$140+$60+$120) ÷ 4 = $100 average; budgeting low is safest.",
            "explanation": "($80+$140+$60+$120) ÷ 4 = $100 average; budgeting low is safest.",
            "logText": "Budget on the average ($100);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget on the lowest ($60) to be safe;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($80+$140+$60+$120) ÷ 4 = $100 average; budgeting low is safest.",
            "explanation": "($80+$140+$60+$120) ÷ 4 = $100 average; budgeting low is safest.",
            "logText": "Budget on the lowest ($60) to be safe;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Budget on the highest ($140) and hope.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($80+$140+$60+$120) ÷ 4 = $100 average; budgeting low is safest.",
            "explanation": "($80+$140+$60+$120) ÷ 4 = $100 average; budgeting low is safest.",
            "logText": "Budget on the highest ($140) and hope."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might budgeting on the *low* week be smarter than the average?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Budgeting low builds a buffer but feels strict; the average is realistic but risky in lean weeks."
  },
  {
    "id": "ctx-2-library-late-fee",
    "title": "The Forgotten Return",
    "prompt": "You forgot to return borrowed equipment; it's now $0.50/day late, 8 days over.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Return now, pay $4.00;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "8 × $0.50 = $4.00; the longer you wait, the more it grows.",
            "explanation": "8 × $0.50 = $4.00; the longer you wait, the more it grows.",
            "logText": "Return now, pay $4.00;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it \"to get your money's worth\" (more fees);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "8 × $0.50 = $4.00; the longer you wait, the more it grows.",
            "explanation": "8 × $0.50 = $4.00; the longer you wait, the more it grows.",
            "logText": "Keep it \"to get your money's worth\" (more fees);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a return reminder system going forward.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "8 × $0.50 = $4.00; the longer you wait, the more it grows.",
            "explanation": "8 × $0.50 = $4.00; the longer you wait, the more it grows.",
            "logText": "Set a return reminder system going forward."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do small daily fees become a big number?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Paying now stops the bleed; a reminder system prevents the next one."
  },
  {
    "id": "ctx-2-loan-friend-co-buy",
    "title": "Co-Owning a Console",
    "prompt": "You and one friend split a $160 console, $80 each. Months later, your friend wants to sell their half.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy their half for $60 (used value), own it fully;",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Used value dropped to ~$120 total; buying their $60 half makes it yours.",
            "explanation": "Used value dropped to ~$120 total; buying their $60 half makes it yours.",
            "logText": "Buy their half for $60 (used value), own it fully;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell the whole thing, split the proceeds;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Used value dropped to ~$120 total; buying their $60 half makes it yours.",
            "explanation": "Used value dropped to ~$120 total; buying their $60 half makes it yours.",
            "logText": "Sell the whole thing, split the proceeds;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Agree on a rotation/return plan instead.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Used value dropped to ~$120 total; buying their $60 half makes it yours.",
            "explanation": "Used value dropped to ~$120 total; buying their $60 half makes it yours.",
            "logText": "Agree on a rotation/return plan instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "What should co-owners agree on *before* buying?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Buying them out gives full control but more cash out; selling is clean but ends the perk."
  },
  {
    "id": "ctx-2-discount-stacking",
    "title": "Coupon Plus Sale",
    "prompt": "A $50 item is 20% off, and you have a coupon for 10% off the sale price.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Compute it step by step;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off total, not 30%.",
            "explanation": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off total, not 30%.",
            "logText": "Compute it step by step;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume it's 30% off;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off total, not 30%.",
            "explanation": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off total, not 30%.",
            "logText": "Assume it's 30% off;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if the coupon applies before or after the sale.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off total, not 30%.",
            "explanation": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off total, not 30%.",
            "logText": "Ask if the coupon applies before or after the sale."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why don't stacked percents simply add up?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Order matters — assuming 30% would overestimate your savings by $1."
  },
  {
    "id": "ctx-2-internet-reliability-plan",
    "title": "Spotty Wifi Tradeoff",
    "prompt": "Your home wifi is unreliable. A more reliable plan costs $10 more/month; or you can rely on free library wifi for heavy tasks.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Upgrade for $10/month;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$10/month = $120/year; free options exist if you can get to them.",
            "explanation": "$10/month = $120/year; free options exist if you can get to them.",
            "logText": "Upgrade for $10/month;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use free library wifi for big tasks;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$10/month = $120/year; free options exist if you can get to them.",
            "explanation": "$10/month = $120/year; free options exist if you can get to them.",
            "logText": "Use free library wifi for big tasks;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep current plan, work around outages.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$10/month = $120/year; free options exist if you can get to them.",
            "explanation": "$10/month = $120/year; free options exist if you can get to them.",
            "logText": "Keep current plan, work around outages."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying for reliability worth it?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Paying buys convenience; the free route saves cash but costs travel time — models a context variable, not a personal flaw."
  },
  {
    "id": "ctx-2-gift-card-tracking",
    "title": "The Forgotten Balance",
    "prompt": "You have three gift cards: $12, $7, and an unknown one. You keep forgetting to use them.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Check and list all balances now;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Untracked gift cards are real money you might lose — list them like any asset.",
            "explanation": "Untracked gift cards are real money you might lose — list them like any asset.",
            "logText": "Check and list all balances now;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use them before they're misplaced;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Untracked gift cards are real money you might lose — list them like any asset.",
            "explanation": "Untracked gift cards are real money you might lose — list them like any asset.",
            "logText": "Use them before they're misplaced;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Combine them toward one purchase.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Untracked gift cards are real money you might lose — list them like any asset.",
            "explanation": "Untracked gift cards are real money you might lose — list them like any asset.",
            "logText": "Combine them toward one purchase."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does forgotten money still count as money?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Spending them now uses the value; saving them risks losing or forgetting it."
  },
  {
    "id": "ctx-2-verify-job-offer",
    "title": "Too Easy a Job",
    "prompt": "A local \"job\" posts great pay for vague work and asks you to buy supplies upfront, promising reimbursement.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Run the Source Verifier (who, verify, rush?) —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "flag",
                "key": "s",
                "value": true
              }
            ],
            "feedback": "Paying upfront to get a job is a classic red flag — verify before any money moves.",
            "explanation": "Paying upfront to get a job is a classic red flag — verify before any money moves.",
            "logText": "Run the Source Verifier (who, verify, rush?) —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay for supplies to \"get started\" —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Paying upfront to get a job is a classic red flag — verify before any money moves.",
            "explanation": "Paying upfront to get a job is a classic red flag — verify before any money moves.",
            "logText": "Pay for supplies to \"get started\" —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask to verify the employer independently first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Paying upfront to get a job is a classic red flag — verify before any money moves.",
            "explanation": "Paying upfront to get a job is a classic red flag — verify before any money moves.",
            "logText": "Ask to verify the employer independently first."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the verifier catch that excitement missed?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Verifying costs a little time; skipping it can cost real money."
  },
  {
    "id": "ctx-2-bulk-vs-spoilage",
    "title": "Buy in Bulk?",
    "prompt": "A bulk pack is $0.20/unit (24 units); singles are $0.30/unit. But you'll only use about 10 before they expire.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Bulk",
        "description": "best per-unit price;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Bulk: 10 used of 24 = $4.80 ÷ 10 = $0.48 each used; singles: $0.30 each — singles win here.",
            "explanation": "Bulk: 10 used of 24 = $4.80 ÷ 10 = $0.48 each used; singles: $0.30 each — singles win here.",
            "logText": "Bulk"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Singles",
        "description": "pay more per unit, waste none;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Bulk: 10 used of 24 = $4.80 ÷ 10 = $0.48 each used; singles: $0.30 each — singles win here.",
            "explanation": "Bulk: 10 used of 24 = $4.80 ÷ 10 = $0.48 each used; singles: $0.30 each — singles win here.",
            "logText": "Singles"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split the bulk pack with a friend",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Bulk: 10 used of 24 = $4.80 ÷ 10 = $0.48 each used; singles: $0.30 each — singles win here.",
            "explanation": "Bulk: 10 used of 24 = $4.80 ÷ 10 = $0.48 each used; singles: $0.30 each — singles win here.",
            "logText": "Split the bulk pack with a friend"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can the 'cheaper' bulk price actually cost more?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Bulk wins only if you'll use it; otherwise waste erases the savings."
  },
  {
    "id": "ctx-2-proactive-vs-reactive-repair",
    "title": "Fix the Small Thing Now?",
    "prompt": "Your laptop's battery is weakening. A $50 fix now, or wait until it fails (possibly at a bad time).",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Fix it now, on your schedule;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Fixing on your schedule beats an emergency fix at the worst moment — usually.",
            "explanation": "Fixing on your schedule beats an emergency fix at the worst moment — usually.",
            "logText": "Fix it now, on your schedule;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Fixing on your schedule beats an emergency fix at the worst moment — usually.",
            "explanation": "Fixing on your schedule beats an emergency fix at the worst moment — usually.",
            "logText": "Wait —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start a repair fund and watch it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Fixing on your schedule beats an emergency fix at the worst moment — usually.",
            "explanation": "Fixing on your schedule beats an emergency fix at the worst moment — usually.",
            "logText": "Start a repair fund and watch it."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the hidden cost of waiting until something fully breaks?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting might stretch the part's life; it also risks failing when you most need it."
  },
  {
    "id": "ctx-2-cash-only-budget",
    "title": "The Envelope Week",
    "prompt": "To control spending, you try putting $30 cash in an envelope for the week instead of tapping a card.",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Stick to the $30 cash;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Cash makes spending visible — you literally see $30 shrink.",
            "explanation": "Cash makes spending visible — you literally see $30 shrink.",
            "logText": "Stick to the $30 cash;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Allow yourself a card \"just in case\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Cash makes spending visible — you literally see $30 shrink.",
            "explanation": "Cash makes spending visible — you literally see $30 shrink.",
            "logText": "Allow yourself a card \"just in case\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split: $20 cash, $10 card for emergencies.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Cash makes spending visible — you literally see $30 shrink.",
            "explanation": "Cash makes spending visible — you literally see $30 shrink.",
            "logText": "Split: $20 cash, $10 card for emergencies."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might cash feel more 'real' than tapping a card?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Cash builds awareness but lacks card protections; a split balances both."
  },
  {
    "id": "ctx-2-referral-bonus-trap",
    "title": "Refer a Friend, Get $5",
    "prompt": "An app offers you $5 for each friend who joins and spends $20. A friend doesn't really want it.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Don't pressure them; pass;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "An incentive for *you* can cost *them* — honesty keeps the friendship clean.",
            "explanation": "An incentive for *you* can cost *them* — honesty keeps the friendship clean.",
            "logText": "Don't pressure them; pass;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Tell them honestly and let them decide;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "An incentive for *you* can cost *them* — honesty keeps the friendship clean.",
            "explanation": "An incentive for *you* can cost *them* — honesty keeps the friendship clean.",
            "logText": "Tell them honestly and let them decide;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Push them to join for your bonus.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "An incentive for *you* can cost *them* — honesty keeps the friendship clean.",
            "explanation": "An incentive for *you* can cost *them* — honesty keeps the friendship clean.",
            "logText": "Push them to join for your bonus."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a reward tempt you to push something on someone?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The $5 is real, but so is your friend's $20 — being upfront respects both."
  },
  {
    "id": "ctx-2-seasonal-price-timing",
    "title": "Buy Now or Off-Season?",
    "prompt": "Winter gear is $90 now (in-season) but historically drops to ~$55 off-season — though stock runs low.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy now at $90, guaranteed;",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$90 vs. ~$55 = ~$35 potential savings, if you can wait and it's in stock.",
            "explanation": "$90 vs. ~$55 = ~$35 potential savings, if you can wait and it's in stock.",
            "logText": "Buy now at $90, guaranteed;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait for ~$55, risk it selling out;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$90 vs. ~$55 = ~$35 potential savings, if you can wait and it's in stock.",
            "explanation": "$90 vs. ~$55 = ~$35 potential savings, if you can wait and it's in stock.",
            "logText": "Wait for ~$55, risk it selling out;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy last year's model now at a discount.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$90 vs. ~$55 = ~$35 potential savings, if you can wait and it's in stock.",
            "explanation": "$90 vs. ~$55 = ~$35 potential savings, if you can wait and it's in stock.",
            "logText": "Buy last year's model now at a discount."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you trade when you wait for a better price?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting saves money but risks missing out — buying now buys certainty."
  },
  {
    "id": "ctx-2-micro-invest-roundup",
    "title": "Spare-Change Investing",
    "prompt": "A tool rounds up purchases to the nearest dollar and invests the change. About $0.50/purchase, ~40 purchases/month.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Turn it on",
        "description": "invests ~$20/month painlessly;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$0.50 × 40 = ~$20/month — small change adds up, but it's still your money leaving.",
            "explanation": "$0.50 × 40 = ~$20/month — small change adds up, but it's still your money leaving.",
            "logText": "Turn it on"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it, invest deliberately instead;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$0.50 × 40 = ~$20/month — small change adds up, but it's still your money leaving.",
            "explanation": "$0.50 × 40 = ~$20/month — small change adds up, but it's still your money leaving.",
            "logText": "Skip it, invest deliberately instead;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn it on but cap it monthly.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$0.50 × 40 = ~$20/month — small change adds up, but it's still your money leaving.",
            "explanation": "$0.50 × 40 = ~$20/month — small change adds up, but it's still your money leaving.",
            "logText": "Turn it on but cap it monthly."
          }
        ]
      }
    ],
    "reflectionPrompt": "Does making saving invisible help or hide it from you?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Painless saving builds funds quietly; deliberate saving keeps you more aware of the total."
  },
  {
    "id": "ctx-2-warranty-on-cheap-item",
    "title": "Warranty on a $15 Thing?",
    "prompt": "A $15 gadget offers a $6 warranty.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Skip it",
        "description": "replacement is only $15;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A $6 warranty on a $15 item is rarely worth it — the whole thing costs little to replace.",
            "explanation": "A $6 warranty on a $15 item is rarely worth it — the whole thing costs little to replace.",
            "logText": "Skip it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy it for peace of mind;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A $6 warranty on a $15 item is rarely worth it — the whole thing costs little to replace.",
            "explanation": "A $6 warranty on a $15 item is rarely worth it — the whole thing costs little to replace.",
            "logText": "Buy it for peace of mind;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip it, put $6 toward a self-insure jar.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A $6 warranty on a $15 item is rarely worth it — the whole thing costs little to replace.",
            "explanation": "A $6 warranty on a $15 item is rarely worth it — the whole thing costs little to replace.",
            "logText": "Skip it, put $6 toward a self-insure jar."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does warranty value depend on the item's price?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Warranties make more sense on expensive, fragile items than cheap, replaceable ones."
  },
  {
    "id": "ctx-2-community-grant-effort",
    "title": "Apply for the Mini-Grant",
    "prompt": "A community program offers small project grants ($0, $50, or $150). Applying takes 3 hours.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Apply, put in real effort —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "3 unpaid hours could beat a paycheck — or not. Effort changes the odds, not the result.",
            "explanation": "3 unpaid hours could beat a paycheck — or not. Effort changes the odds, not the result.",
            "logText": "Apply, put in real effort —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, use the time to earn;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "3 unpaid hours could beat a paycheck — or not. Effort changes the odds, not the result.",
            "explanation": "3 unpaid hours could beat a paycheck — or not. Effort changes the odds, not the result.",
            "logText": "Skip, use the time to earn;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Apply with a mentor's help",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "3 unpaid hours could beat a paycheck — or not. Effort changes the odds, not the result.",
            "explanation": "3 unpaid hours could beat a paycheck — or not. Effort changes the odds, not the result.",
            "logText": "Apply with a mentor's help"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you decide if uncertain effort is worth it?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Applying risks unpaid time; a mentor's help raises your odds."
  },
  {
    "id": "ctx-2-phone-trade-in-timing",
    "title": "Trade In Before It Drops",
    "prompt": "Your phone's trade-in value is $120 now but typically falls ~$10/month as newer models release.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Trade in now at $120;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$120 − ($10 × 3) ≈ $90 in 3 months — depreciation has a real monthly cost.",
            "explanation": "$120 − ($10 × 3) ≈ $90 in 3 months — depreciation has a real monthly cost.",
            "logText": "Trade in now at $120;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait 3 months (≈$90) but keep using it;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$120 − ($10 × 3) ≈ $90 in 3 months — depreciation has a real monthly cost.",
            "explanation": "$120 − ($10 × 3) ≈ $90 in 3 months — depreciation has a real monthly cost.",
            "logText": "Wait 3 months (≈$90) but keep using it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it as a backup, no trade-in.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$120 − ($10 × 3) ≈ $90 in 3 months — depreciation has a real monthly cost.",
            "explanation": "$120 − ($10 × 3) ≈ $90 in 3 months — depreciation has a real monthly cost.",
            "logText": "Keep it as a backup, no trade-in."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can waiting to sell something cost you money?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Trading now captures more value; keeping it has its own backup-phone worth."
  },
  {
    "id": "ctx-2-split-deposit-auto",
    "title": "Pay Yourself First",
    "prompt": "You can auto-route 15% of each paycheck to savings before you ever see it. Right now you save \"whatever's left,\" which is usually $0.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Auto-route 15%;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "On $200/check, 15% = $30 saved automatically — money you never had to 'decide' to save.",
            "explanation": "On $200/check, 15% = $30 saved automatically — money you never had to 'decide' to save.",
            "logText": "Auto-route 15%;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep saving manually;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "On $200/check, 15% = $30 saved automatically — money you never had to 'decide' to save.",
            "explanation": "On $200/check, 15% = $30 saved automatically — money you never had to 'decide' to save.",
            "logText": "Keep saving manually;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start at 5% and raise it later.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "On $200/check, 15% = $30 saved automatically — money you never had to 'decide' to save.",
            "explanation": "On $200/check, 15% = $30 saved automatically — money you never had to 'decide' to save.",
            "logText": "Start at 5% and raise it later."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does automatic saving beat relying on willpower?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Auto-saving builds funds reliably; manual keeps flexibility if your income is unsteady."
  },
  {
    "id": "ctx-2-repair-cafe-skill",
    "title": "Fix It Yourself Day",
    "prompt": "A free repair café teaches you to fix a torn backpack instead of buying a new $35 one.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Learn the fix, save $35;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "A free skill saved $35 now and can save more later.",
            "explanation": "A free skill saved $35 now and can save more later.",
            "logText": "Learn the fix, save $35;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Just buy a new one;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A free skill saved $35 now and can save more later.",
            "explanation": "A free skill saved $35 now and can save more later.",
            "logText": "Just buy a new one;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Learn it and teach a friend",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A free skill saved $35 now and can save more later.",
            "explanation": "A free skill saved $35 now and can save more later.",
            "logText": "Learn it and teach a friend"
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a skill keep paying off after you learn it?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Learning takes time; buying new is instant but spends money repeatedly."
  },
  {
    "id": "ctx-2-overdraft-optin",
    "title": "Opt In to Overdraft?",
    "prompt": "Your bank asks if you want overdraft \"protection\" that lets purchases go through for a $35 fee, or to have them simply declined for free.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Decline overdraft",
        "description": "purchases just get declined, no fee;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A declined $4 coffee costs $0; an overdrafted one can cost $35 + the $4.",
            "explanation": "A declined $4 coffee costs $0; an overdrafted one can cost $35 + the $4.",
            "logText": "Decline overdraft"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Opt in for \"protection\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A declined $4 coffee costs $0; an overdrafted one can cost $35 + the $4.",
            "explanation": "A declined $4 coffee costs $0; an overdrafted one can cost $35 + the $4.",
            "logText": "Opt in for \"protection\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Opt in but set low-balance alerts.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A declined $4 coffee costs $0; an overdrafted one can cost $35 + the $4.",
            "explanation": "A declined $4 coffee costs $0; an overdrafted one can cost $35 + the $4.",
            "logText": "Opt in but set low-balance alerts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is 'protection' that charges $35 really protecting you?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Opting out avoids fees but risks a declined card at checkout; alerts reduce both risks."
  },
  {
    "id": "ctx-2-group-buy-leftover",
    "title": "Who Gets the Change?",
    "prompt": "Four friends pool $50 for snacks but spend $47. There's $3 left and a debate over it.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Return $0.75 to each (split evenly);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$3 ÷ 4 = $0.75 each — small remainders still belong to everyone.",
            "explanation": "$3 ÷ 4 = $0.75 each — small remainders still belong to everyone.",
            "logText": "Return $0.75 to each (split evenly);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save it in a group jar for next time;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$3 ÷ 4 = $0.75 each — small remainders still belong to everyone.",
            "explanation": "$3 ÷ 4 = $0.75 each — small remainders still belong to everyone.",
            "logText": "Save it in a group jar for next time;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Give it to whoever organized.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$3 ÷ 4 = $0.75 each — small remainders still belong to everyone.",
            "explanation": "$3 ÷ 4 = $0.75 each — small remainders still belong to everyone.",
            "logText": "Give it to whoever organized."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you handle leftover shared money fairly?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting is fair; a group jar is practical — both can be reasonable with agreement."
  },
  {
    "id": "ctx-2-apprentice-pay-progression",
    "title": "Low Now, More Later",
    "prompt": "An apprenticeship pays $14/hr now, rising to $18, then $24 over three years, with no schooling debt.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Map the 3-year pay path;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$14 → $18 → $24 averages ~$18.67/hr over three years, debt-free.",
            "explanation": "$14 → $18 → $24 averages ~$18.67/hr over three years, debt-free.",
            "logText": "Map the 3-year pay path;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Compare to a $16/hr job with no raises;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$14 → $18 → $24 averages ~$18.67/hr over three years, debt-free.",
            "explanation": "$14 → $18 → $24 averages ~$18.67/hr over three years, debt-free.",
            "logText": "Compare to a $16/hr job with no raises;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor how progression works",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$14 → $18 → $24 averages ~$18.67/hr over three years, debt-free.",
            "explanation": "$14 → $18 → $24 averages ~$18.67/hr over three years, debt-free.",
            "logText": "Ask a mentor how progression works"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why look at the whole path, not just the starting pay?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A lower start with raises can beat a flat higher start — depending on the timeline."
  },
  {
    "id": "ctx-2-insurance-deductible-pick",
    "title": "High or Low Deductible?",
    "prompt": "Renter insurance: Plan A is $15/month with a $250 deductible; Plan B is $10/month with a $600 deductible.",
    "topics": [
      "insurance"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Plan A (pay more monthly, less if you claim);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Plan B saves $60/year but costs $350 more if you ever claim — worth it only if you rarely claim.",
            "explanation": "Plan B saves $60/year but costs $350 more if you ever claim — worth it only if you rarely claim.",
            "logText": "Plan A (pay more monthly, less if you claim);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Plan B (pay less monthly, more if you claim);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Plan B saves $60/year but costs $350 more if you ever claim — worth it only if you rarely claim.",
            "explanation": "Plan B saves $60/year but costs $350 more if you ever claim — worth it only if you rarely claim.",
            "logText": "Plan B (pay less monthly, more if you claim);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick based on your cushion size.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Plan B saves $60/year but costs $350 more if you ever claim — worth it only if you rarely claim.",
            "explanation": "Plan B saves $60/year but costs $350 more if you ever claim — worth it only if you rarely claim.",
            "logText": "Pick based on your cushion size."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does your savings cushion change which deductible fits?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Low deductible suits a thin cushion; high deductible saves monthly if you can absorb a big claim."
  },
  {
    "id": "ctx-2-crowd-tip-creator",
    "title": "Tip the Free Creator?",
    "prompt": "A creator whose free tutorials helped you asks for optional tips. You're on a budget.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Tip a small amount you can spare;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Support can be money *or* sharing — both have value to a creator.",
            "explanation": "Support can be money *or* sharing — both have value to a creator.",
            "logText": "Tip a small amount you can spare;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Share their work instead of tipping;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Support can be money *or* sharing — both have value to a creator.",
            "explanation": "Support can be money *or* sharing — both have value to a creator.",
            "logText": "Share their work instead of tipping;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip for now, plan to support later.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Support can be money *or* sharing — both have value to a creator.",
            "explanation": "Support can be money *or* sharing — both have value to a creator.",
            "logText": "Skip for now, plan to support later."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you value something that was free to you?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Tipping rewards what helped you; sharing costs nothing but still supports them."
  },
  {
    "id": "ctx-2-compound-vs-simple",
    "title": "Two Accounts, Same Rate",
    "prompt": "Two accounts both pay 5% on $1,000, but one pays *simple* interest and one *compounds* yearly. After 3 years they differ.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate both;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Simple: $1,000 + $150 = $1,150. Compound: ≈$1,157.63 — small now, large over decades.",
            "explanation": "Simple: $1,000 + $150 = $1,150. Compound: ≈$1,157.63 — small now, large over decades.",
            "logText": "Calculate both;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume they're the same;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Simple: $1,000 + $150 = $1,150. Compound: ≈$1,157.63 — small now, large over decades.",
            "explanation": "Simple: $1,000 + $150 = $1,150. Compound: ≈$1,157.63 — small now, large over decades.",
            "logText": "Assume they're the same;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick compound without checking.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Simple: $1,000 + $150 = $1,150. Compound: ≈$1,157.63 — small now, large over decades.",
            "explanation": "Simple: $1,000 + $150 = $1,150. Compound: ≈$1,157.63 — small now, large over decades.",
            "logText": "Pick compound without checking."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does compounding pull ahead more over long periods?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Over 3 years the gap is tiny; the lesson is what happens over 30."
  },
  {
    "id": "ctx-2-student-loan-size",
    "title": "How Much to Borrow?",
    "prompt": "You can borrow $4,000 (covers extras) or $2,500 (covers essentials, you work part-time for the rest).",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Borrow $4,000, more comfort now;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Every borrowed dollar is repaid with interest — $1,500 less borrowed is more than $1,500 saved later.",
            "explanation": "Every borrowed dollar is repaid with interest — $1,500 less borrowed is more than $1,500 saved later.",
            "logText": "Borrow $4,000, more comfort now;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow $2,500, work to fill the gap;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Every borrowed dollar is repaid with interest — $1,500 less borrowed is more than $1,500 saved later.",
            "explanation": "Every borrowed dollar is repaid with interest — $1,500 less borrowed is more than $1,500 saved later.",
            "logText": "Borrow $2,500, work to fill the gap;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow $2,500 and seek a small scholarship.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Every borrowed dollar is repaid with interest — $1,500 less borrowed is more than $1,500 saved later.",
            "explanation": "Every borrowed dollar is repaid with interest — $1,500 less borrowed is more than $1,500 saved later.",
            "logText": "Borrow $2,500 and seek a small scholarship."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why borrow less even when more is offered?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing more eases now but costs more later; borrowing less means working during school."
  },
  {
    "id": "ctx-2-app-permission-cost",
    "title": "What Does This App Want?",
    "prompt": "A free game asks for lots of permissions. A paid version ($3) asks for far fewer.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use free, accept the permissions;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Free' apps often trade access for the price — that access is a real cost.",
            "explanation": "'Free' apps often trade access for the price — that access is a real cost.",
            "logText": "Use free, accept the permissions;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $3 for the leaner version;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Free' apps often trade access for the price — that access is a real cost.",
            "explanation": "'Free' apps often trade access for the price — that access is a real cost.",
            "logText": "Pay $3 for the leaner version;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look for a free option with fewer permissions.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Free' apps often trade access for the price — that access is a real cost.",
            "explanation": "'Free' apps often trade access for the price — that access is a real cost.",
            "logText": "Look for a free option with fewer permissions."
          }
        ]
      }
    ],
    "reflectionPrompt": "What might a 'free' app be asking for in return?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Free saves $3 but may cost access; paying buys a cleaner deal. (Kept general and fictional.)"
  },
  {
    "id": "ctx-2-savings-goal-deadline",
    "title": "Make the Deadline?",
    "prompt": "You need $90 in 6 weeks for a class trip. You can save $12/week comfortably.",
    "topics": [
      "saving"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Save $12/week (= $72, short by $18);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$90 ÷ 6 = $15/week needed; $12/week leaves you $18 short.",
            "explanation": "$90 ÷ 6 = $15/week needed; $12/week leaves you $18 short.",
            "logText": "Save $12/week (= $72, short by $18);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Boost to $15/week to make it;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$90 ÷ 6 = $15/week needed; $12/week leaves you $18 short.",
            "explanation": "$90 ÷ 6 = $15/week needed; $12/week leaves you $18 short.",
            "logText": "Boost to $15/week to make it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $12 + earn an extra $18 once.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$90 ÷ 6 = $15/week needed; $12/week leaves you $18 short.",
            "explanation": "$90 ÷ 6 = $15/week needed; $12/week leaves you $18 short.",
            "logText": "Save $12 + earn an extra $18 once."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you find the weekly rate to hit a deadline?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Boosting weekly is steady; a one-time earning push keeps the weekly amount comfortable."
  },
  {
    "id": "ctx-2-repair-or-upgrade-cushion",
    "title": "Fix Cheap or Save for Better?",
    "prompt": "Your $200 bike needs a $60 repair. A better bike is $320. You have $150 saved.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Repair for $60, keep saving;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$60 now vs. $170 more for the upgrade — the repair buys time to decide.",
            "explanation": "$60 now vs. $170 more for the upgrade — the repair buys time to decide.",
            "logText": "Repair for $60, keep saving;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait, save for the $320 bike, ride carefully meanwhile;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$60 now vs. $170 more for the upgrade — the repair buys time to decide.",
            "explanation": "$60 now vs. $170 more for the upgrade — the repair buys time to decide.",
            "logText": "Wait, save for the $320 bike, ride carefully meanwhile;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Repair cheaply and start an upgrade fund.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$60 now vs. $170 more for the upgrade — the repair buys time to decide.",
            "explanation": "$60 now vs. $170 more for the upgrade — the repair buys time to decide.",
            "logText": "Repair cheaply and start an upgrade fund."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does fixing the old one make sense?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Repair is cheap and immediate; saving for better costs more but lasts longer."
  },
  {
    "id": "ctx-2-verify-charity-ask",
    "title": "A Cause Texts You",
    "prompt": "A message asks for a quick donation to a cause, urging you to \"give now\" via a link.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Don't use the link; look up the cause directly to give —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Real causes accept gifts through their own verified site — urgency is a red flag.",
            "explanation": "Real causes accept gifts through their own verified site — urgency is a red flag.",
            "logText": "Don't use the link; look up the cause directly to give —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Tap and donate fast —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Real causes accept gifts through their own verified site — urgency is a red flag.",
            "explanation": "Real causes accept gifts through their own verified site — urgency is a red flag.",
            "logText": "Tap and donate fast —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult to verify first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Real causes accept gifts through their own verified site — urgency is a red flag.",
            "explanation": "Real causes accept gifts through their own verified site — urgency is a red flag.",
            "logText": "Ask a trusted adult to verify first."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can you give safely without falling for a fake ask?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Giving is good; verifying first ensures the money reaches the real cause."
  },
  {
    "id": "ctx-2-meal-prep-vs-buy",
    "title": "Pack or Buy Lunch?",
    "prompt": "Buying lunch is $6/day; packing one is about $2/day. Over a 5-day week that adds up.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pack all 5 days;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$6 × 5 = $30 vs. $2 × 5 = $10 — packing saves $20/week, $80+/month.",
            "explanation": "$6 × 5 = $30 vs. $2 × 5 = $10 — packing saves $20/week, $80+/month.",
            "logText": "Pack all 5 days;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy all 5 days;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$6 × 5 = $30 vs. $2 × 5 = $10 — packing saves $20/week, $80+/month.",
            "explanation": "$6 × 5 = $30 vs. $2 × 5 = $10 — packing saves $20/week, $80+/month.",
            "logText": "Buy all 5 days;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pack 3, buy 2.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$6 × 5 = $30 vs. $2 × 5 = $10 — packing saves $20/week, $80+/month.",
            "explanation": "$6 × 5 = $30 vs. $2 × 5 = $10 — packing saves $20/week, $80+/month.",
            "logText": "Pack 3, buy 2."
          }
        ]
      }
    ],
    "reflectionPrompt": "How big is a small daily difference over a month?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Packing saves money but costs prep time; mixing balances cost and convenience."
  },
  {
    "id": "ctx-2-inheritance-placeholder-fund",
    "title": "A Small Windfall",
    "prompt": "You receive an unexpected $500 (a gift from a relative). It's tempting to spend it fast.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Split: cushion / goal / a small treat;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A windfall is a chance to fund several goals at once — or enjoy some guilt-free.",
            "explanation": "A windfall is a chance to fund several goals at once — or enjoy some guilt-free.",
            "logText": "Split: cushion / goal / a small treat;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Invest most of it for the long term;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A windfall is a chance to fund several goals at once — or enjoy some guilt-free.",
            "explanation": "A windfall is a chance to fund several goals at once — or enjoy some guilt-free.",
            "logText": "Invest most of it for the long term;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend it now.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A windfall is a chance to fund several goals at once — or enjoy some guilt-free.",
            "explanation": "A windfall is a chance to fund several goals at once — or enjoy some guilt-free.",
            "logText": "Spend it now."
          }
        ]
      }
    ],
    "reflectionPrompt": "Does a windfall deserve a different plan than regular income?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting balances joy and growth; spending it all is valid if your bases are covered."
  },
  {
    "id": "ctx-2-late-fee-snowball",
    "title": "One Missed Payment",
    "prompt": "You miss a $40 payment; there's a $10 late fee, and missing again adds another.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay $50 now, set autopay;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 + $10 = $50; a second miss = $60 — fees stack fast.",
            "explanation": "$40 + $10 = $50; a second miss = $60 — fees stack fast.",
            "logText": "Pay $50 now, set autopay;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait, risk a second $10 fee;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 + $10 = $50; a second miss = $60 — fees stack fast.",
            "explanation": "$40 + $10 = $50; a second miss = $60 — fees stack fast.",
            "logText": "Wait, risk a second $10 fee;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay now, no autopay.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 + $10 = $50; a second miss = $60 — fees stack fast.",
            "explanation": "$40 + $10 = $50; a second miss = $60 — fees stack fast.",
            "logText": "Pay now, no autopay."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does autopay protect you from fee snowballs?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Autopay prevents misses but needs a funded account; manual keeps control but risks forgetting."
  },
  {
    "id": "ctx-2-skill-cert-payback",
    "title": "Will the Cert Pay Off?",
    "prompt": "An $80 certification could raise your gig pay by about $2/hour. You work ~10 hours/week.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Earn it",
        "description": "figure the payback;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$2 × 10 hrs = $20/week extra; $80 ÷ $20 = 4 weeks to pay back the cost.",
            "explanation": "$2 × 10 hrs = $20/week extra; $80 ÷ $20 = 4 weeks to pay back the cost.",
            "logText": "Earn it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$2 × 10 hrs = $20/week extra; $80 ÷ $20 = 4 weeks to pay back the cost.",
            "explanation": "$2 × 10 hrs = $20/week extra; $80 ÷ $20 = 4 weeks to pay back the cost.",
            "logText": "Skip it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Find a free version first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$2 × 10 hrs = $20/week extra; $80 ÷ $20 = 4 weeks to pay back the cost.",
            "explanation": "$2 × 10 hrs = $20/week extra; $80 ÷ $20 = 4 weeks to pay back the cost.",
            "logText": "Find a free version first."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you know when a cost 'pays for itself'?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Worth it if you'll work enough hours to earn back the cost; otherwise skip or find free."
  },
  {
    "id": "ctx-2-roommate-utility-split",
    "title": "Splitting the Bills",
    "prompt": "You and two roommates share $90 internet (even) and a power bill that varies. This month power is $120. *(Locked: `hasRoommate`.)*",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Split both evenly (internet $30, power $40 each);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Internet $90 ÷ 3 = $30; power $120 ÷ 3 = $40 each, $70 total this month.",
            "explanation": "Internet $90 ÷ 3 = $30; power $120 ÷ 3 = $40 each, $70 total this month.",
            "logText": "Split both evenly (internet $30, power $40 each);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split power by usage;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Internet $90 ÷ 3 = $30; power $120 ÷ 3 = $40 each, $70 total this month.",
            "explanation": "Internet $90 ÷ 3 = $30; power $120 ÷ 3 = $40 each, $70 total this month.",
            "logText": "Split power by usage;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Rotate who pays which bill monthly.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Internet $90 ÷ 3 = $30; power $120 ÷ 3 = $40 each, $70 total this month.",
            "explanation": "Internet $90 ÷ 3 = $30; power $120 ÷ 3 = $40 each, $70 total this month.",
            "logText": "Rotate who pays which bill monthly."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which costs make sense to split evenly vs. by use?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Even splits are simple; usage-based feels fairer but is harder to track."
  },
  {
    "id": "ctx-2-flash-restock-fomo",
    "title": "Back in Stock — for an Hour",
    "prompt": "An item you've wanted (but at a price you found high) is \"back for one hour only\" — still at the high price.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Stick to your price limit, skip it;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Scarcity pressure doesn't change whether the *price* is fair.",
            "explanation": "Scarcity pressure doesn't change whether the *price* is fair.",
            "logText": "Stick to your price limit, skip it;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now before it's gone;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Scarcity pressure doesn't change whether the *price* is fair.",
            "explanation": "Scarcity pressure doesn't change whether the *price* is fair.",
            "logText": "Buy now before it's gone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set an alert for a future price drop.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Scarcity pressure doesn't change whether the *price* is fair.",
            "explanation": "Scarcity pressure doesn't change whether the *price* is fair.",
            "logText": "Set an alert for a future price drop."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did the timer change the value, or just the pressure?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "You might genuinely want it — pausing separates real want from manufactured urgency."
  },
  {
    "id": "ctx-2-bank-vs-prepaid",
    "title": "Account or Prepaid Card?",
    "prompt": "A free checking account has no monthly fee but needs setup; a prepaid card is instant but charges $4/month and $2 per reload.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Open the free checking account;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$4 × 12 = $48/year plus reload fees vs. $0 — convenience has a price.",
            "explanation": "$4 × 12 = $48/year plus reload fees vs. $0 — convenience has a price.",
            "logText": "Open the free checking account;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the prepaid card for convenience;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$4 × 12 = $48/year plus reload fees vs. $0 — convenience has a price.",
            "explanation": "$4 × 12 = $48/year plus reload fees vs. $0 — convenience has a price.",
            "logText": "Use the prepaid card for convenience;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare a year of fees first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$4 × 12 = $48/year plus reload fees vs. $0 — convenience has a price.",
            "explanation": "$4 × 12 = $48/year plus reload fees vs. $0 — convenience has a price.",
            "logText": "Compare a year of fees first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why compare a full year of fees, not just one month?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Prepaid is easy and needs no setup but costs more over time."
  },
  {
    "id": "ctx-2-donate-time-vs-money",
    "title": "Give Time or Cash?",
    "prompt": "A community program you value needs either a $25 donation or 4 hours of volunteering.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Donate $25;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Time and money are both real contributions — $25 vs. 4 hours is your call.",
            "explanation": "Time and money are both real contributions — $25 vs. 4 hours is your call.",
            "logText": "Donate $25;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Volunteer 4 hours;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Time and money are both real contributions — $25 vs. 4 hours is your call.",
            "explanation": "Time and money are both real contributions — $25 vs. 4 hours is your call.",
            "logText": "Volunteer 4 hours;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do a smaller mix of both.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Time and money are both real contributions — $25 vs. 4 hours is your call.",
            "explanation": "Time and money are both real contributions — $25 vs. 4 hours is your call.",
            "logText": "Do a smaller mix of both."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is your time more valuable to give than money?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Cash helps immediately; volunteering gives more if money is tight but time is available."
  },
  {
    "id": "ctx-2-phone-financing-zero-percent",
    "title": "Zero Percent — Really Free?",
    "prompt": "A $600 phone is offered at \"0% interest, $25/month for 24 months.\" It truly has no interest — but locks you in for 2 years.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay $600 upfront if you can;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "0% really is interest-free — but $25 × 24 = $600 you're committed to, even if your needs change.",
            "explanation": "0% really is interest-free — but $25 × 24 = $600 you're committed to, even if your needs change.",
            "logText": "Pay $600 upfront if you can;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take the 0% plan, commit to $25/month;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "0% really is interest-free — but $25 × 24 = $600 you're committed to, even if your needs change.",
            "explanation": "0% really is interest-free — but $25 × 24 = $600 you're committed to, even if your needs change.",
            "logText": "Take the 0% plan, commit to $25/month;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a cheaper phone outright.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "0% really is interest-free — but $25 × 24 = $600 you're committed to, even if your needs change.",
            "explanation": "0% really is interest-free — but $25 × 24 = $600 you're committed to, even if your needs change.",
            "logText": "Buy a cheaper phone outright."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the real catch in a true 0% offer?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "0% is genuinely free money-wise, but the 2-year lock-in is the real cost."
  },
  {
    "id": "ctx-2-emergency-fund-target",
    "title": "How Big Should It Be?",
    "prompt": "Your essential monthly costs are about $300. Advice suggests 3 months saved, but that feels far off.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Aim for 3 months ($900) over time;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$300 × 3 = $900 is the goal; $300 (one month) is a strong, reachable first step.",
            "explanation": "$300 × 3 = $900 is the goal; $300 (one month) is a strong, reachable first step.",
            "logText": "Aim for 3 months ($900) over time;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Start with 1 month ($300) as a first milestone;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$300 × 3 = $900 is the goal; $300 (one month) is a strong, reachable first step.",
            "explanation": "$300 × 3 = $900 is the goal; $300 (one month) is a strong, reachable first step.",
            "logText": "Start with 1 month ($300) as a first milestone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save a flat $50/month and reassess.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$300 × 3 = $900 is the goal; $300 (one month) is a strong, reachable first step.",
            "explanation": "$300 × 3 = $900 is the goal; $300 (one month) is a strong, reachable first step.",
            "logText": "Save a flat $50/month and reassess."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why size an emergency fund to *your* expenses, not a round number?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Aiming high is ideal but can feel discouraging; a one-month milestone builds momentum."
  },
  {
    "id": "ctx-2-tip-percent-mental",
    "title": "Quick Tip Math",
    "prompt": "A $36 bill needs a tip. You want to leave about 18%.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Find 10% ($3.60), add half again ($1.80) = $5.40;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "10% of $36 = $3.60; 18% ≈ $3.60 + $1.80 = $5.40 — a quick mental path.",
            "explanation": "10% of $36 = $3.60; 18% ≈ $3.60 + $1.80 = $5.40 — a quick mental path.",
            "logText": "Find 10% ($3.60), add half again ($1.80) = $5.40;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Round to 20% = $7.20;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "10% of $36 = $3.60; 18% ≈ $3.60 + $1.80 = $5.40 — a quick mental path.",
            "explanation": "10% of $36 = $3.60; 18% ≈ $3.60 + $1.80 = $5.40 — a quick mental path.",
            "logText": "Round to 20% = $7.20;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Estimate \"about $6.\"",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "10% of $36 = $3.60; 18% ≈ $3.60 + $1.80 = $5.40 — a quick mental path.",
            "explanation": "10% of $36 = $3.60; 18% ≈ $3.60 + $1.80 = $5.40 — a quick mental path.",
            "logText": "Estimate \"about $6.\""
          }
        ]
      }
    ],
    "reflectionPrompt": "How does finding 10% first make percents easier?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "20% is simpler and more generous; the 10%-plus-half trick is more exact."
  },
  {
    "id": "ctx-2-shared-streaming-plan",
    "title": "Split the Family Plan",
    "prompt": "A $20/month streaming plan allows 4 profiles. Three friends want to split it with you. *(Locked: none.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Split 4 ways = $5 each;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$20 ÷ 4 = $5 each — sharing cuts cost, but someone has to manage collecting it.",
            "explanation": "$20 ÷ 4 = $5 each — sharing cuts cost, but someone has to manage collecting it.",
            "logText": "Split 4 ways = $5 each;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "You pay, friends pay you back monthly (track it);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$20 ÷ 4 = $5 each — sharing cuts cost, but someone has to manage collecting it.",
            "explanation": "$20 ÷ 4 = $5 each — sharing cuts cost, but someone has to manage collecting it.",
            "logText": "You pay, friends pay you back monthly (track it);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip, use free options.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$20 ÷ 4 = $5 each — sharing cuts cost, but someone has to manage collecting it.",
            "explanation": "$20 ÷ 4 = $5 each — sharing cuts cost, but someone has to manage collecting it.",
            "logText": "Skip, use free options."
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes a shared subscription work or fall apart?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting saves money but needs reliable repayment; free options avoid the hassle entirely."
  },
  {
    "id": "ctx-2-asset-condition-resale",
    "title": "Worn or Mint?",
    "prompt": "You're selling two of the same item: one well-kept ($40), one scratched ($25). A buyer asks why the price differs.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Price by condition and explain it;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 − $25 = $15: condition changes value — honesty keeps buyers trusting you.",
            "explanation": "$40 − $25 = $15: condition changes value — honesty keeps buyers trusting you.",
            "logText": "Price by condition and explain it;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Charge $40 for both and hope;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 − $25 = $15: condition changes value — honesty keeps buyers trusting you.",
            "explanation": "$40 − $25 = $15: condition changes value — honesty keeps buyers trusting you.",
            "logText": "Charge $40 for both and hope;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Average them both at $32.50.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 − $25 = $15: condition changes value — honesty keeps buyers trusting you.",
            "explanation": "$40 − $25 = $15: condition changes value — honesty keeps buyers trusting you.",
            "logText": "Average them both at $32.50."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does the same item sell for different prices?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Honest condition pricing sells faster and builds trust vs. overpricing the worn one."
  },
  {
    "id": "ctx-2-total-cost-snapshot",
    "title": "Add Up the Whole Year",
    "prompt": "You list your recurring costs: $9 streaming, $25 phone, $5 app, $15 transit — all monthly. The total surprises you.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Annualize them all and review;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($9+$25+$5+$15) × 12 = $54 × 12 = $648/year — small monthlies add up big.",
            "explanation": "($9+$25+$5+$15) × 12 = $54 × 12 = $648/year — small monthlies add up big.",
            "logText": "Annualize them all and review;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Estimate roughly;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($9+$25+$5+$15) × 12 = $54 × 12 = $648/year — small monthlies add up big.",
            "explanation": "($9+$25+$5+$15) × 12 = $54 × 12 = $648/year — small monthlies add up big.",
            "logText": "Estimate roughly;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Walk through it with a mentor",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($9+$25+$5+$15) × 12 = $54 × 12 = $648/year — small monthlies add up big.",
            "explanation": "($9+$25+$5+$15) × 12 = $54 × 12 = $648/year — small monthlies add up big.",
            "logText": "Walk through it with a mentor"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which recurring cost would you cut first, and why?",
    "sourceNote": "Context Batch 2 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Every subscription has value to *someone* — the point is seeing the yearly total, not cutting blindly."
  },
  {
    "id": "ctx-3-market-permit-fee",
    "title": "The Table Permit",
    "prompt": "A school-safe maker market lets students sell approved handmade items. A table permit costs $18, display supplies cost $12, and each item costs $2 to make and sells for $5. Demand is uncertain.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the permit and prepare 20 items",
        "description": "You commit to the full table.",
        "requirements": [
          {
            "type": "minCash",
            "value": 70
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "If all 20 sell, revenue is $100; total cost is $18 + $12 + $40 = $70, so profit is $30.",
            "explanation": "If all 20 sell, revenue is $100; total cost is $18 + $12 + $40 = $70, so profit is $30.",
            "logText": "Buy the permit and prepare 20 items"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Partner with another seller",
        "description": "You split the permit and display costs.",
        "requirements": [
          {
            "type": "flagEquals",
            "key": "hasFriend",
            "value": true
          }
        ],
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sharing fixed costs lowers the break-even point.",
            "explanation": "Sharing fixed costs lowers the break-even point.",
            "logText": "Partner with another seller"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Make a waitlist first",
        "description": "You ask interested buyers to sign up before buying supplies.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "moneyKnowledge",
            "value": 50
          }
        ],
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Testing demand before spending protects cash.",
            "explanation": "Testing demand before spending protects cash.",
            "logText": "Make a waitlist first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is the key personal finance tradeoff in \"The Table Permit\"?",
    "sourceNote": "Context Batch 3 compiled original scenario."
  },
  {
    "id": "ctx-3-portfolio-print-plan",
    "title": "Printing the Portfolio",
    "prompt": "You need to print a small portfolio for a future interview or showcase. One option is $0.12 per page. Another is a $5 print plan that includes 60 pages.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay per page for 32 pages",
        "description": "Req: none. Outcome/effects: lower total for a small job.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "32 × $0.12 = $3.84, so the pay-per-page choice wins this time.",
            "explanation": "32 × $0.12 = $3.84, so the pay-per-page choice wins this time.",
            "logText": "Pay per page for 32 pages"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $5 plan",
        "description": "Req: cash ≥ $5. Outcome/effects: convenient, but costs more unless you print enough.",
        "requirements": [
          {
            "type": "minCash",
            "value": 5
          }
        ],
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A plan can be useful, but only if your use matches it.",
            "explanation": "A plan can be useful, but only if your use matches it.",
            "logText": "Buy the $5 plan"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to review before printing",
        "description": "Req: supportCircle.mentor. Outcome/effects: opportunity up, wasted pages down.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A review can prevent reprinting.",
            "explanation": "A review can prevent reprinting.",
            "logText": "Ask mentor to review before printing"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is the key personal finance tradeoff in \"Printing the Portfolio\"?",
    "sourceNote": "Context Batch 3 compiled original scenario."
  },
  {
    "id": "ctx-3-uniform-upkeep",
    "title": "The Work Uniform Choice",
    "prompt": "A future part-time job requires a plain uniform. The basic uniform costs $38. A better stain-resistant version costs $58 and may last longer.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the basic uniform",
        "description": "Req: hasIncome. Outcome/effects: cash down less now, random replacement risk later.",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Lower upfront cost can be smart when cash is tight.",
            "explanation": "Lower upfront cost can be smart when cash is tight.",
            "logText": "Buy the basic uniform"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the stronger uniform",
        "description": "Req: cash ≥ $58. Outcome/effects: cash down more, replacement risk lower.",
        "requirements": [
          {
            "type": "minCash",
            "value": 58
          }
        ],
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "You paid $20 more to reduce future upkeep risk.",
            "explanation": "You paid $20 more to reduce future upkeep risk.",
            "logText": "Buy the stronger uniform"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask whether the employer has a uniform closet",
        "description": "Req: Opportunity ≥ 55; visible locked note: “Needs workplace question skill.” Outcome/effects: possible lower cost, confidence up.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Asking about resources can lower job-start costs.",
            "explanation": "Asking about resources can lower job-start costs.",
            "logText": "Ask whether the employer has a uniform closet"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is the key personal finance tradeoff in \"The Work Uniform Choice\"?",
    "sourceNote": "Context Batch 3 compiled original scenario."
  },
  {
    "id": "ctx-3-time-bank-favor",
    "title": "The Non-Cash Trade",
    "prompt": "A community time-bank lets people trade help. You can tutor younger students for two hours and earn help fixing a small item later.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 13,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Join and track the time credit",
        "description": "Req: discipline ≥ 40. Outcome/effects: opportunity up, possible repair help later.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Not all value is cash; records still matter.",
            "explanation": "Not all value is cash; records still matter.",
            "logText": "Join and track the time credit"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Help without tracking",
        "description": "Req: none. Outcome/effects: wellbeing/support up, future value uncertain.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Generosity is good, but unclear agreements can become confusing.",
            "explanation": "Generosity is good, but unclear agreements can become confusing.",
            "logText": "Help without tracking"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip because you need open time",
        "description": "Req: none. Outcome/effects: time protected, opportunity unchanged.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Time is a real resource.",
            "explanation": "Time is a real resource.",
            "logText": "Skip because you need open time"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is the key personal finance tradeoff in \"The Non-Cash Trade\"?",
    "sourceNote": "Context Batch 3 compiled original scenario."
  },
  {
    "id": "ctx-3-collectible-liquidity",
    "title": "Valuable, But Not Spendable",
    "prompt": "You own a collectible item worth about $180 to the right buyer. You also have a $90 short-term cost coming up. Selling quickly might only bring $120.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Sell quickly for $120",
        "description": "Req: ownsCollectible. Outcome/effects: cash up, asset gone.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "flag",
                "key": "gone",
                "value": true
              }
            ],
            "feedback": "Quick sale improved liquidity but lost possible value.",
            "explanation": "Quick sale improved liquidity but lost possible value.",
            "logText": "Sell quickly for $120"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait for a better buyer",
        "description": "Req: savings ≥ $90. Outcome/effects: asset value protected, cash need covered another way.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 90
          }
        ],
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "flag",
                "key": "value",
                "value": true
              }
            ],
            "feedback": "Savings can give you time to avoid a rushed sale.",
            "explanation": "Savings can give you time to avoid a rushed sale.",
            "logText": "Wait for a better buyer"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow against future income",
        "description": "Req: hasIncome. Outcome/effects: asset kept, future cash tight.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "flag",
                "key": "kept",
                "value": true
              }
            ],
            "feedback": "Borrowing keeps the item but creates a future obligation.",
            "explanation": "Borrowing keeps the item but creates a future obligation.",
            "logText": "Borrow against future income"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is the key personal finance tradeoff in \"Valuable, But Not Spendable\"?",
    "sourceNote": "Context Batch 3 compiled original scenario."
  },
  {
    "id": "ctx-3-reference-thank-you",
    "title": "Keeping a Reference Strong",
    "prompt": "A mentor writes a reference for a program or job. You want to show appreciation without spending too much or making it awkward.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Send a specific thank-you note",
        "description": "Req: none. Outcome/effects: mentor trust up, cash unchanged.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Clear gratitude can strengthen a professional relationship.",
            "explanation": "Clear gratitude can strengthen a professional relationship.",
            "logText": "Send a specific thank-you note"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy an expensive gift",
        "description": "Req: cash ≥ $35. Outcome/effects: cash down, possible awkwardness.",
        "requirements": [
          {
            "type": "minCash",
            "value": 35
          }
        ],
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "More money does not always mean more appreciation.",
            "explanation": "More money does not always mean more appreciation.",
            "logText": "Buy an expensive gift"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Update the mentor later on your progress",
        "description": "Req: discipline ≥ 45. Outcome/effects: opportunity up, relationship maintained.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Following up shows the help mattered.",
            "explanation": "Following up shows the help mattered.",
            "logText": "Update the mentor later on your progress"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is the key personal finance tradeoff in \"Keeping a Reference Strong\"?",
    "sourceNote": "Context Batch 3 compiled original scenario."
  },
  {
    "id": "ctx-3-liquidity-capstone",
    "title": "Net Worth Isn’t Cash",
    "prompt": "Your adult-planning snapshot shows $2,100 in assets, $800 in debts, and only $90 in spendable cash. A $300 urgent cost appears.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 23
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate net worth and liquidity first",
        "description": "Req: Money Know-How ≥ 55; visible locked note: “Needs net worth skill.” Outcome/effects: better decision view.",
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
                "amount": 2
              }
            ],
            "feedback": "Net worth is $2,100 − $800 = $1,300, but only $90 is cash.",
            "explanation": "Net worth is $2,100 − $800 = $1,300, but only $90 is cash.",
            "logText": "Calculate net worth and liquidity first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell a useful asset quickly",
        "description": "Req: ownsAsset. Outcome/effects: cash up, opportunity or wellbeing may drop.",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Selling creates cash, but may remove something useful.",
            "explanation": "Selling creates cash, but may remove something useful.",
            "logText": "Sell a useful asset quickly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use support plus repayment plan",
        "description": "Req: supportCircle.family or mentor. Outcome/effects: cash gap handled, future obligation created.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Support can help, but clear repayment protects trust.",
            "explanation": "Support can help, but clear repayment protects trust.",
            "logText": "Use support plus repayment plan"
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "Use high-cost borrowing",
        "description": "Req: creditAvailable. Outcome/effects: urgent cost covered, debt and interest rise.",
        "outcomes": [
          {
            "id": "outcome-4",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Borrowing can solve today and make tomorrow harder.",
            "explanation": "Borrowing can solve today and make tomorrow harder.",
            "logText": "Use high-cost borrowing"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is the key personal finance tradeoff in \"Net Worth Isn’t Cash\"?",
    "sourceNote": "Context Batch 3 compiled original scenario."
  },
  {
    "id": "ctx-4-acorn-jar-start",
    "title": "The Acorn Jar",
    "prompt": "You want $48 for a project kit by week 6. You can save from your $11/week allowance.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Save $8/week —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$48 ÷ 6 = $8/week needed; $5/week leaves you $18 short.",
            "explanation": "$48 ÷ 6 = $8/week needed; $5/week leaves you $18 short.",
            "logText": "Save $8/week —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save $5/week —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$48 ÷ 6 = $8/week needed; $5/week leaves you $18 short.",
            "explanation": "$48 ÷ 6 = $8/week needed; $5/week leaves you $18 short.",
            "logText": "Save $5/week —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $8/week and set $20/$35/$48 rungs.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$48 ÷ 6 = $8/week needed; $5/week leaves you $18 short.",
            "explanation": "$48 ÷ 6 = $8/week needed; $5/week leaves you $18 short.",
            "logText": "Save $8/week and set $20/$35/$48 rungs."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did naming a weekly amount change the goal?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A lower weekly amount leaves more to spend now but misses the deadline."
  },
  {
    "id": "ctx-4-default-renew-checkbox",
    "title": "The Pre-Checked Box",
    "prompt": "Signing up for a $7/month service, you notice \"auto-renew\" is already checked and \"email me before renewal\" is unchecked.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Defaults decide a lot — auto-renew on means it continues unless you act.",
            "explanation": "Defaults decide a lot — auto-renew on means it continues unless you act.",
            "logText": "Leave both as-is;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Uncheck auto-renew, check the reminder;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Defaults decide a lot — auto-renew on means it continues unless you act.",
            "explanation": "Defaults decide a lot — auto-renew on means it continues unless you act.",
            "logText": "Uncheck auto-renew, check the reminder;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep auto-renew but turn on the reminder.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Defaults decide a lot — auto-renew on means it continues unless you act.",
            "explanation": "Defaults decide a lot — auto-renew on means it continues unless you act.",
            "logText": "Keep auto-renew but turn on the reminder."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which default would you always check first?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Auto-renew is convenient if you'll keep using it; a reminder protects you either way."
  },
  {
    "id": "ctx-4-estimate-the-cart",
    "title": "Guess the Total First",
    "prompt": "Your cart has items at $4.79, $2.20, $6.99, and $1.05. Before the screen shows the total, you ballpark it.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
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
                "amount": 2
              }
            ],
            "feedback": "$5 + $2 + $7 + $1 ≈ $15; the exact total is $15.03 — your estimate caught nothing wrong this time, which is good.",
            "explanation": "$5 + $2 + $7 + $1 ≈ $15; the exact total is $15.03 — your estimate caught nothing wrong this time, which is good.",
            "logText": "Estimate by rounding (~$15), then check;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip estimating, trust the screen;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$5 + $2 + $7 + $1 ≈ $15; the exact total is $15.03 — your estimate caught nothing wrong this time, which is good.",
            "explanation": "$5 + $2 + $7 + $1 ≈ $15; the exact total is $15.03 — your estimate caught nothing wrong this time, which is good.",
            "logText": "Skip estimating, trust the screen;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Estimate, then notice if the total looks wrong.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$5 + $2 + $7 + $1 ≈ $15; the exact total is $15.03 — your estimate caught nothing wrong this time, which is good.",
            "explanation": "$5 + $2 + $7 + $1 ≈ $15; the exact total is $15.03 — your estimate caught nothing wrong this time, which is good.",
            "logText": "Estimate, then notice if the total looks wrong."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a quick estimate catch a checkout error?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating takes a second but builds a habit that catches mistakes."
  },
  {
    "id": "ctx-4-sequential-discount",
    "title": "20 Off, Then 10 Off",
    "prompt": "A $50 jacket is 20% off. You also have a 10% coupon that applies to the sale price. A friend says \"that's 30% off.\"",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off, not 30%.",
            "explanation": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off, not 30%.",
            "logText": "Compute step by step;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Agree it's 30%;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off, not 30%.",
            "explanation": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off, not 30%.",
            "logText": "Agree it's 30%;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask whether the coupon applies before or after the sale.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off, not 30%.",
            "explanation": "$50 × 0.80 = $40, then × 0.90 = $36 — that's 28% off, not 30%.",
            "logText": "Ask whether the coupon applies before or after the sale."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why don't the two percents simply add?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Assuming 30% would make you expect $1 more in savings than you get."
  },
  {
    "id": "ctx-4-daily-drip-snack",
    "title": "The $2 Habit",
    "prompt": "You buy a $2 snack every school day (about 180 days). A one-time $120 gadget also tempts you, and it feels like the bigger cost.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$2 × 180 = $360/year on snacks vs. $120 once — the small habit costs more.",
            "explanation": "$2 × 180 = $360/year on snacks vs. $120 once — the small habit costs more.",
            "logText": "Compare the yearly snack total to the gadget;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume the gadget is the bigger cost;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$2 × 180 = $360/year on snacks vs. $120 once — the small habit costs more.",
            "explanation": "$2 × 180 = $360/year on snacks vs. $120 once — the small habit costs more.",
            "logText": "Assume the gadget is the bigger cost;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep the snack but cut to 3 days/week.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$2 × 180 = $360/year on snacks vs. $120 once — the small habit costs more.",
            "explanation": "$2 × 180 = $360/year on snacks vs. $120 once — the small habit costs more.",
            "logText": "Keep the snack but cut to 3 days/week."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which surprised you: the habit or the one-time buy?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The snack isn't \"bad\" — the point is noticing where the money actually goes."
  },
  {
    "id": "ctx-4-cooling-off-sneakers",
    "title": "Sleep On It",
    "prompt": "A hyped $57 shoe drops today. You feel you *must* have it. A wait-one-day option exists.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
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
                "amount": 2
              }
            ],
            "feedback": "Waiting a day tells you if the want was real or just hype.",
            "explanation": "Waiting a day tells you if the want was real or just hype.",
            "logText": "Wait a day, decide tomorrow;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now before they sell out;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Waiting a day tells you if the want was real or just hype.",
            "explanation": "Waiting a day tells you if the want was real or just hype.",
            "logText": "Buy now before they sell out;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add to a wishlist and budget for it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Waiting a day tells you if the want was real or just hype.",
            "explanation": "Waiting a day tells you if the want was real or just hype.",
            "logText": "Add to a wishlist and budget for it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Have you ever stopped wanting something after waiting?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting risks it selling out; buying now risks regret if the hype fades."
  },
  {
    "id": "ctx-4-ripple-shared-data",
    "title": "It's a Shared Plan",
    "prompt": "You want to stream a lot this month, but you share a capped data plan with family. Going over adds a $15 fee everyone feels.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your usage doesn't only affect you — the $15 hits the whole household.",
            "explanation": "Your usage doesn't only affect you — the $15 hits the whole household.",
            "logText": "Stream on wifi to protect the shared cap;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Stream freely, accept the $15 family fee;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your usage doesn't only affect you — the $15 hits the whole household.",
            "explanation": "Your usage doesn't only affect you — the $15 hits the whole household.",
            "logText": "Stream freely, accept the $15 family fee;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family to split a one-time booster.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your usage doesn't only affect you — the $15 hits the whole household.",
            "explanation": "Your usage doesn't only affect you — the $15 hits the whole household.",
            "logText": "Ask family to split a one-time booster."
          }
        ]
      }
    ],
    "reflectionPrompt": "Who else does this choice touch?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Streaming freely is convenient but pushes a cost onto people you share with."
  },
  {
    "id": "ctx-4-average-tip-week",
    "title": "An Average Week",
    "prompt": "Your tip job *averages* $100/week, but weeks ranged $60 to $150. You need to set a budget.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "The $100 average hides a $60–$150 range; budgeting near $60 builds a buffer.",
            "explanation": "The $100 average hides a $60–$150 range; budgeting near $60 builds a buffer.",
            "logText": "Budget on $100 (the average);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget on $60 (the low end);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $100 average hides a $60–$150 range; budgeting near $60 builds a buffer.",
            "explanation": "The $100 average hides a $60–$150 range; budgeting near $60 builds a buffer.",
            "logText": "Budget on $60 (the low end);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Budget on $150 and hope.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $100 average hides a $60–$150 range; budgeting near $60 builds a buffer.",
            "explanation": "The $100 average hides a $60–$150 range; budgeting near $60 builds a buffer.",
            "logText": "Budget on $150 and hope."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can budgeting on the average leave you short?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Budgeting low feels strict but is safest; the average is realistic but risky in lean weeks."
  },
  {
    "id": "ctx-4-same-thing-compare",
    "title": "Are These Even the Same?",
    "prompt": "Option A: a $20 item that lasts 1 year. Option B: a $45 item that lasts 3 years. They don't look comparable.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A = $20/year; B = $45 ÷ 3 = $15/year — B is cheaper per year despite the higher sticker.",
            "explanation": "A = $20/year; B = $45 ÷ 3 = $15/year — B is cheaper per year despite the higher sticker.",
            "logText": "Convert both to cost-per-year;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pick A (lower price);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A = $20/year; B = $45 ÷ 3 = $15/year — B is cheaper per year despite the higher sticker.",
            "explanation": "A = $20/year; B = $45 ÷ 3 = $15/year — B is cheaper per year despite the higher sticker.",
            "logText": "Pick A (lower price);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick the one that fits your cash now, knowing the per-year math.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A = $20/year; B = $45 ÷ 3 = $15/year — B is cheaper per year despite the higher sticker.",
            "explanation": "A = $20/year; B = $45 ÷ 3 = $15/year — B is cheaper per year despite the higher sticker.",
            "logText": "Pick the one that fits your cash now, knowing the per-year math."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why put both in 'per year' before comparing?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "B wins long-term, but A costs less right now if cash is tight."
  },
  {
    "id": "ctx-4-endowment-resale",
    "title": "Would You Buy It Back?",
    "prompt": "You're selling a used item you love. You want $40; similar ones sell for about $25. A buyer hesitates.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 15
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Owning something can make us overprice it — the market says ~$25.",
            "explanation": "Owning something can make us overprice it — the market says ~$25.",
            "logText": "Reprice near $25 to actually sell;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hold firm at $40;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Owning something can make us overprice it — the market says ~$25.",
            "explanation": "Owning something can make us overprice it — the market says ~$25.",
            "logText": "Hold firm at $40;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask yourself: would you *buy* it for $40 today?",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Owning something can make us overprice it — the market says ~$25.",
            "explanation": "Owning something can make us overprice it — the market says ~$25.",
            "logText": "Ask yourself: would you *buy* it for $40 today?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Did 'it's mine' make it feel worth more?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Holding at $40 honors your attachment but may mean it never sells."
  },
  {
    "id": "ctx-4-pause-before-splurge",
    "title": "A Rough Day Purchase",
    "prompt": "After a frustrating day, a $33 \"treat myself\" buy is one tap away. A gentle prompt suggests pausing.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Choices made while upset are more often regretted — pausing isn't denial, it's timing.",
            "explanation": "Choices made while upset are more often regretted — pausing isn't denial, it's timing.",
            "logText": "Pause, revisit in an hour;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now to feel better;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Choices made while upset are more often regretted — pausing isn't denial, it's timing.",
            "explanation": "Choices made while upset are more often regretted — pausing isn't denial, it's timing.",
            "logText": "Buy now to feel better;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do a free feel-better thing first, then decide.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Choices made while upset are more often regretted — pausing isn't denial, it's timing.",
            "explanation": "Choices made while upset are more often regretted — pausing isn't denial, it's timing.",
            "logText": "Do a free feel-better thing first, then decide."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do feelings change money decisions?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A treat can be fine — the lesson is deciding with a clear head, not banning joy."
  },
  {
    "id": "ctx-4-whole-term-gym",
    "title": "Easy Monthly, Long Commitment",
    "prompt": "A program is \"$19/month\" for 12 months. It feels affordable now. *(Locked: `hasIncome`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "$19 × 12 = $228 committed — affordable monthly isn't the same as affordable all year.",
            "explanation": "$19 × 12 = $228 committed — affordable monthly isn't the same as affordable all year.",
            "logText": "Check the whole-term total first;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sign up on the monthly figure alone;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$19 × 12 = $228 committed — affordable monthly isn't the same as affordable all year.",
            "explanation": "$19 × 12 = $228 committed — affordable monthly isn't the same as affordable all year.",
            "logText": "Sign up on the monthly figure alone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look for a no-commitment option.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$19 × 12 = $228 committed — affordable monthly isn't the same as affordable all year.",
            "explanation": "$19 × 12 = $228 committed — affordable monthly isn't the same as affordable all year.",
            "logText": "Look for a no-commitment option."
          }
        ]
      }
    ],
    "reflectionPrompt": "Could you carry this even in a lean month?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The monthly price is easy; the year-long commitment is the real decision."
  },
  {
    "id": "ctx-4-estimate-tag-projection",
    "title": "The Confident Number",
    "prompt": "A tool projects your savings will \"be $1,040 in a year.\" It looks exact.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "Projections depend on assumptions (steady saving, no surprises) — they're estimates, not facts.",
            "explanation": "Projections depend on assumptions (steady saving, no surprises) — they're estimates, not facts.",
            "logText": "Read it as an estimate with assumptions;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Treat it as a promise and pre-spend it;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Projections depend on assumptions (steady saving, no surprises) — they're estimates, not facts.",
            "explanation": "Projections depend on assumptions (steady saving, no surprises) — they're estimates, not facts.",
            "logText": "Treat it as a promise and pre-spend it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask what the projection assumes.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Projections depend on assumptions (steady saving, no surprises) — they're estimates, not facts.",
            "explanation": "Projections depend on assumptions (steady saving, no surprises) — they're estimates, not facts.",
            "logText": "Ask what the projection assumes."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why be careful trusting one confident number?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Projections help you plan, but pre-spending an estimate is risky."
  },
  {
    "id": "ctx-4-coupon-stack-grocery",
    "title": "Coupon on a Sale Price",
    "prompt": "A $30 grocery order is 10% off this week, plus a 5%-off member coupon on the reduced price.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$30 × 0.90 = $27, then × 0.95 = $25.65 — that's 14.5% off, not 15%.",
            "explanation": "$30 × 0.90 = $27, then × 0.95 = $25.65 — that's 14.5% off, not 15%.",
            "logText": "Compute step by step;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Call it 15% off;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$30 × 0.90 = $27, then × 0.95 = $25.65 — that's 14.5% off, not 15%.",
            "explanation": "$30 × 0.90 = $27, then × 0.95 = $25.65 — that's 14.5% off, not 15%.",
            "logText": "Call it 15% off;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Check the order of the discounts.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$30 × 0.90 = $27, then × 0.95 = $25.65 — that's 14.5% off, not 15%.",
            "explanation": "$30 × 0.90 = $27, then × 0.95 = $25.65 — that's 14.5% off, not 15%.",
            "logText": "Check the order of the discounts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is the order of discounts worth checking?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Tiny gap here, but the *method* matters on bigger purchases."
  },
  {
    "id": "ctx-4-milestone-bike-fund",
    "title": "Three Rungs to a Bike",
    "prompt": "A $120 bike feels far away. You can save $15/week.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 14
    },
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
                "amount": 2
              }
            ],
            "feedback": "$120 ÷ $15 = 8 weeks; rungs at $40 and $80 give you visible wins along the way.",
            "explanation": "$120 ÷ $15 = 8 weeks; rungs at $40 and $80 give you visible wins along the way.",
            "logText": "Set rungs at $40/$80/$120 and climb;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Aim straight for $120 with no checkpoints;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$120 ÷ $15 = 8 weeks; rungs at $40 and $80 give you visible wins along the way.",
            "explanation": "$120 ÷ $15 = 8 weeks; rungs at $40 and $80 give you visible wins along the way.",
            "logText": "Aim straight for $120 with no checkpoints;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $15/week into a labeled fund.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$120 ÷ $15 = 8 weeks; rungs at $40 and $80 give you visible wins along the way.",
            "explanation": "$120 ÷ $15 = 8 weeks; rungs at $40 and $80 give you visible wins along the way.",
            "logText": "Save $15/week into a labeled fund."
          }
        ]
      }
    ],
    "reflectionPrompt": "Do small checkpoints help you keep going?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Rungs add motivation; the total is the same either way."
  },
  {
    "id": "ctx-4-default-savings-off",
    "title": "Savings Was Switched Off",
    "prompt": "Your pay setup has \"auto-save 10%\" pre-set to OFF. You can flip it on.",
    "topics": [
      "saving"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "On $180/check, 10% = $18 saved you never had to decide on — defaults do the work.",
            "explanation": "On $180/check, 10% = $18 saved you never had to decide on — defaults do the work.",
            "logText": "Flip auto-save to 10% ON;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave it off, save manually;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "On $180/check, 10% = $18 saved you never had to decide on — defaults do the work.",
            "explanation": "On $180/check, 10% = $18 saved you never had to decide on — defaults do the work.",
            "logText": "Leave it off, save manually;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn it on at 5% to start.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "On $180/check, 10% = $18 saved you never had to decide on — defaults do the work.",
            "explanation": "On $180/check, 10% = $18 saved you never had to decide on — defaults do the work.",
            "logText": "Turn it on at 5% to start."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does an 'off' default usually mean $0 saved?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Auto-save builds funds quietly; manual keeps flexibility if income is unsteady."
  },
  {
    "id": "ctx-4-unbundle-combo",
    "title": "Three for Ten",
    "prompt": "A combo is \"3 for $10.\" A single is $3.50. You only really want two.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "amount": 2
              }
            ],
            "feedback": "$10 ÷ 3 = $3.33 each; two singles = $7.00 vs. $10 for three — singles win if you only want two.",
            "explanation": "$10 ÷ 3 = $3.33 each; two singles = $7.00 vs. $10 for three — singles win if you only want two.",
            "logText": "Find the per-item price and compare;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the combo to \"save\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$10 ÷ 3 = $3.33 each; two singles = $7.00 vs. $10 for three — singles win if you only want two.",
            "explanation": "$10 ÷ 3 = $3.33 each; two singles = $7.00 vs. $10 for three — singles win if you only want two.",
            "logText": "Buy the combo to \"save\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy two singles.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$10 ÷ 3 = $3.33 each; two singles = $7.00 vs. $10 for three — singles win if you only want two.",
            "explanation": "$10 ÷ 3 = $3.33 each; two singles = $7.00 vs. $10 for three — singles win if you only want two.",
            "logText": "Buy two singles."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a 'deal' a deal if you don't need all of it?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The combo is cheaper per item, but only if you'd use all three."
  },
  {
    "id": "ctx-4-ripple-owe-friend",
    "title": "They're Counting On It",
    "prompt": "You owe a friend $12 by Friday. A new want appears that would use that exact $12.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Spending the $12 means breaking a promise someone is relying on.",
            "explanation": "Spending the $12 means breaking a promise someone is relying on.",
            "logText": "Repay the friend first;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the want, repay late;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending the $12 means breaking a promise someone is relying on.",
            "explanation": "Spending the $12 means breaking a promise someone is relying on.",
            "logText": "Buy the want, repay late;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a cheaper want and still repay.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending the $12 means breaking a promise someone is relying on.",
            "explanation": "Spending the $12 means breaking a promise someone is relying on.",
            "logText": "Buy a cheaper want and still repay."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does a late repayment affect trust?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The want is real, but so is the friend's expectation — timing matters."
  },
  {
    "id": "ctx-4-estimate-paint-project",
    "title": "How Much Paint?",
    "prompt": "A project needs about 38 feet of trim. Paint covers ~12 feet per small can at $4/can. You estimate first.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "38 ÷ 12 ≈ 3.2, so 4 cans; 4 × $4 = $16.",
            "explanation": "38 ÷ 12 ≈ 3.2, so 4 cans; 4 × $4 = $16.",
            "logText": "Estimate cans (38 ÷ 12 ≈ 4 cans), then compute cost;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess \"a couple cans\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "38 ÷ 12 ≈ 3.2, so 4 cans; 4 × $4 = $16.",
            "explanation": "38 ÷ 12 ≈ 3.2, so 4 cans; 4 × $4 = $16.",
            "logText": "Guess \"a couple cans\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy extra to be safe.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "38 ÷ 12 ≈ 3.2, so 4 cans; 4 × $4 = $16.",
            "explanation": "38 ÷ 12 ≈ 3.2, so 4 cans; 4 × $4 = $16.",
            "logText": "Buy extra to be safe."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why round *up* when buying supplies?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Buying extra avoids a second trip but spends a little more."
  },
  {
    "id": "ctx-4-coverage-quiet-year",
    "title": "Did I Waste It?",
    "prompt": "You paid $12/month for phone protection all year and never needed it. It feels like wasted money.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Not needing insurance is the *good* outcome — you paid for peace of mind, not a prize.",
            "explanation": "Not needing insurance is the *good* outcome — you paid for peace of mind, not a prize.",
            "logText": "Keep it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Drop it now —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Not needing insurance is the *good* outcome — you paid for peace of mind, not a prize.",
            "explanation": "Not needing insurance is the *good* outcome — you paid for peace of mind, not a prize.",
            "logText": "Drop it now —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Switch to a cheaper plan.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Not needing insurance is the *good* outcome — you paid for peace of mind, not a prize.",
            "explanation": "Not needing insurance is the *good* outcome — you paid for peace of mind, not a prize.",
            "logText": "Switch to a cheaper plan."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is unused coverage really 'wasted'?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Dropping it saves money if nothing breaks — but that's a bet, not a certainty."
  },
  {
    "id": "ctx-4-fade-or-keep-check",
    "title": "Still Glad You Bought It?",
    "prompt": "A month ago you bought a $25 trend item. The app asks how you feel about it now.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "\"Still love it\";",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Noticing which buys you regret helps you spot fads before the next one.",
            "explanation": "Noticing which buys you regret helps you spot fads before the next one.",
            "logText": "\"Still love it\";"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "\"Meh, barely used it\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Noticing which buys you regret helps you spot fads before the next one.",
            "explanation": "Noticing which buys you regret helps you spot fads before the next one.",
            "logText": "\"Meh, barely used it\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "\"Wish I'd waited.\"",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Noticing which buys you regret helps you spot fads before the next one.",
            "explanation": "Noticing which buys you regret helps you spot fads before the next one.",
            "logText": "\"Wish I'd waited.\""
          }
        ]
      }
    ],
    "reflectionPrompt": "What kind of purchase do you tend to regret?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "No wrong answer — this is pattern-spotting, not judgment."
  },
  {
    "id": "ctx-4-whole-term-phone",
    "title": "24 Months of 'Free'",
    "prompt": "A $480 phone is \"$20/month for 24 months, 0% interest.\" Your income might dip next year.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$20 × 24 = $480 committed for two years — fine now, but can you carry it if income dips?",
            "explanation": "$20 × 24 = $480 committed for two years — fine now, but can you carry it if income dips?",
            "logText": "Project the whole term and a lean-month stress test;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sign up on the $20 figure;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$20 × 24 = $480 committed for two years — fine now, but can you carry it if income dips?",
            "explanation": "$20 × 24 = $480 committed for two years — fine now, but can you carry it if income dips?",
            "logText": "Sign up on the $20 figure;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a cheaper phone outright.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$20 × 24 = $480 committed for two years — fine now, but can you carry it if income dips?",
            "explanation": "$20 × 24 = $480 committed for two years — fine now, but can you carry it if income dips?",
            "logText": "Buy a cheaper phone outright."
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes a long commitment risky even at 0%?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "0% is genuinely interest-free; the risk is the 2-year carry, not the interest."
  },
  {
    "id": "ctx-4-average-return-myth",
    "title": "7% Average Means…?",
    "prompt": "A learning fund shows a \"7% average yearly return.\" A classmate expects exactly 7% every year.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "An average hides the bumps — some years up a lot, some down; 7% is the long-run average, not a yearly promise.",
            "explanation": "An average hides the bumps — some years up a lot, some down; 7% is the long-run average, not a yearly promise.",
            "logText": "Show the year-to-year swings around 7%;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Expect a steady 7%;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "An average hides the bumps — some years up a lot, some down; 7% is the long-run average, not a yearly promise.",
            "explanation": "An average hides the bumps — some years up a lot, some down; 7% is the long-run average, not a yearly promise.",
            "logText": "Expect a steady 7%;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Plan for a long horizon to ride out swings.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "An average hides the bumps — some years up a lot, some down; 7% is the long-run average, not a yearly promise.",
            "explanation": "An average hides the bumps — some years up a lot, some down; 7% is the long-run average, not a yearly promise.",
            "logText": "Plan for a long horizon to ride out swings."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do averages mislead in the short run?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Averages guide long-term planning but say little about any single year."
  },
  {
    "id": "ctx-4-estimate-fuel-trip",
    "title": "Will the Card Cover It?",
    "prompt": "You have $19 on a transit card. A round trip is $2.75 each way, and you have 4 trips this week.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "4 round trips = 8 × $2.75 = $22 — your $19 is $3 short.",
            "explanation": "4 round trips = 8 × $2.75 = $22 — your $19 is $3 short.",
            "logText": "Estimate first (8 × ~$3 ≈ $24), spot the shortfall;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume $19 is plenty;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 round trips = 8 × $2.75 = $22 — your $19 is $3 short.",
            "explanation": "4 round trips = 8 × $2.75 = $22 — your $19 is $3 short.",
            "logText": "Assume $19 is plenty;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Reload before you run out.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 round trips = 8 × $2.75 = $22 — your $19 is $3 short.",
            "explanation": "4 round trips = 8 × $2.75 = $22 — your $19 is $3 short.",
            "logText": "Reload before you run out."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did estimating prevent getting stranded?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Reloading early avoids a stranding; estimating tells you when it's needed."
  },
  {
    "id": "ctx-4-ripple-family-bulk",
    "title": "Buying for the House",
    "prompt": "A bulk pack costs $24 for 12 (good per-unit), but your family only uses ~6 before they expire. Splitting with a neighbor is possible.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Bulk = $2/unit, but 6 wasted of 12 = $24 ÷ 6 used = $4/unit; the 6-pack = $2.50/unit and no waste.",
            "explanation": "Bulk = $2/unit, but 6 wasted of 12 = $24 ÷ 6 used = $4/unit; the 6-pack = $2.50/unit and no waste.",
            "logText": "Split the pack with a neighbor (6 each);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the bulk pack alone;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Bulk = $2/unit, but 6 wasted of 12 = $24 ÷ 6 used = $4/unit; the 6-pack = $2.50/unit and no waste.",
            "explanation": "Bulk = $2/unit, but 6 wasted of 12 = $24 ÷ 6 used = $4/unit; the 6-pack = $2.50/unit and no waste.",
            "logText": "Buy the bulk pack alone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy a 6-pack at $15.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Bulk = $2/unit, but 6 wasted of 12 = $24 ÷ 6 used = $4/unit; the 6-pack = $2.50/unit and no waste.",
            "explanation": "Bulk = $2/unit, but 6 wasted of 12 = $24 ÷ 6 used = $4/unit; the 6-pack = $2.50/unit and no waste.",
            "logText": "Buy a 6-pack at $15."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does sharing change the real per-unit cost?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Bulk wins only if it's used; sharing rescues the savings."
  },
  {
    "id": "ctx-4-default-tip-screen",
    "title": "The Pre-Set Tip",
    "prompt": "A screen pre-selects a 25% tip on a $16 order. You can adjust it.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "25% of $16 = $4.00; 18% = $2.88 — the default isn't the only fair choice.",
            "explanation": "25% of $16 = $4.00; 18% = $2.88 — the default isn't the only fair choice.",
            "logText": "Keep 25% ($4.00);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose 18% ($2.88);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "25% of $16 = $4.00; 18% = $2.88 — the default isn't the only fair choice.",
            "explanation": "25% of $16 = $4.00; 18% = $2.88 — the default isn't the only fair choice.",
            "logText": "Choose 18% ($2.88);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Enter your own amount.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "25% of $16 = $4.00; 18% = $2.88 — the default isn't the only fair choice.",
            "explanation": "25% of $16 = $4.00; 18% = $2.88 — the default isn't the only fair choice.",
            "logText": "Enter your own amount."
          }
        ]
      }
    ],
    "reflectionPrompt": "Should a screen decide your tip for you?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Higher tips are generous; the point is *you* choose, not the default."
  },
  {
    "id": "ctx-4-comparable-jobs",
    "title": "More Pay, More Travel",
    "prompt": "Job A: $15/hr, 30 min commute, $5/day transit. Job B: $13/hr, 5 min walk, $0 transit. Same 4-hr shifts.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A: $60 − $5 = $55/shift; B: $52 − $0 = $52/shift — closer than the wages suggest.",
            "explanation": "A: $60 − $5 = $55/shift; B: $52 − $0 = $52/shift — closer than the wages suggest.",
            "logText": "Compute take-home per shift after transit;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pick A (higher wage);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A: $60 − $5 = $55/shift; B: $52 − $0 = $52/shift — closer than the wages suggest.",
            "explanation": "A: $60 − $5 = $55/shift; B: $52 − $0 = $52/shift — closer than the wages suggest.",
            "logText": "Pick A (higher wage);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick by what fits your schedule, knowing the math.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A: $60 − $5 = $55/shift; B: $52 − $0 = $52/shift — closer than the wages suggest.",
            "explanation": "A: $60 − $5 = $55/shift; B: $52 − $0 = $52/shift — closer than the wages suggest.",
            "logText": "Pick by what fits your schedule, knowing the math."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why subtract commuting before comparing wages?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A still edges B on money, but the gap shrinks once costs are equalized."
  },
  {
    "id": "ctx-4-cooling-off-preorder",
    "title": "Pre-Order Hype",
    "prompt": "A $45 pre-order is hyped now but won't ship for two months. You can cancel free until it ships.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pre-order; reassess before it ships;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A free-cancel window is a built-in cooling-off period — if you use it.",
            "explanation": "A free-cancel window is a built-in cooling-off period — if you use it.",
            "logText": "Pre-order; reassess before it ships;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait and decide later without pre-ordering;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A free-cancel window is a built-in cooling-off period — if you use it.",
            "explanation": "A free-cancel window is a built-in cooling-off period — if you use it.",
            "logText": "Wait and decide later without pre-ordering;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pre-order and forget about it —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A free-cancel window is a built-in cooling-off period — if you use it.",
            "explanation": "A free-cancel window is a built-in cooling-off period — if you use it.",
            "logText": "Pre-order and forget about it —"
          }
        ]
      }
    ],
    "reflectionPrompt": "Does a cancel window only help if you remember it?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Pre-ordering reserves it; forgetting the window turns a maybe into a definite charge."
  },
  {
    "id": "ctx-4-unbundle-meal-deal",
    "title": "The Value Meal Math",
    "prompt": "A meal deal is $9 for three items. Bought separately they're $4, $3, and $1.50. You don't want the $1.50 item.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The two you want = $7; the deal is $9 — paying $2 more for an item you don't want isn't a deal.",
            "explanation": "The two you want = $7; the deal is $9 — paying $2 more for an item you don't want isn't a deal.",
            "logText": "Price the two you want ($7) vs. the deal ($9);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the deal \"to save\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "The two you want = $7; the deal is $9 — paying $2 more for an item you don't want isn't a deal.",
            "explanation": "The two you want = $7; the deal is $9 — paying $2 more for an item you don't want isn't a deal.",
            "logText": "Buy the deal \"to save\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy the deal and share the extra.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "The two you want = $7; the deal is $9 — paying $2 more for an item you don't want isn't a deal.",
            "explanation": "The two you want = $7; the deal is $9 — paying $2 more for an item you don't want isn't a deal.",
            "logText": "Buy the deal and share the extra."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does a combo actually save money?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The deal saves only if you'd use all three items."
  },
  {
    "id": "ctx-4-estimate-savings-goal",
    "title": "About How Many Weeks?",
    "prompt": "You want $133 and can save about $19/week. Estimate the weeks before computing.",
    "topics": [
      "saving"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "amount": 2
              }
            ],
            "feedback": "133 ÷ 19 = 7 exactly — your estimate and the math agree.",
            "explanation": "133 ÷ 19 = 7 exactly — your estimate and the math agree.",
            "logText": "Estimate (~7 weeks), then compute exactly;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess \"a month or so\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "133 ÷ 19 = 7 exactly — your estimate and the math agree.",
            "explanation": "133 ÷ 19 = 7 exactly — your estimate and the math agree.",
            "logText": "Guess \"a month or so\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Round the goal to $140 for a buffer.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "133 ÷ 19 = 7 exactly — your estimate and the math agree.",
            "explanation": "133 ÷ 19 = 7 exactly — your estimate and the math agree.",
            "logText": "Round the goal to $140 for a buffer."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does estimating first build confidence in the answer?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A rounded-up goal gives a small buffer for the same effort."
  },
  {
    "id": "ctx-4-emergency-rebuild-pace",
    "title": "Refilling the Cushion",
    "prompt": "A surprise drained your emergency fund to $0. Essentials run $300/month; you can refill at $25, $50, or $75/month.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Refill $50/month",
        "description": "steady;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "To reach one month ($300): $25→12 mo, $50→6 mo, $75→4 mo — faster refill, tighter budget.",
            "explanation": "To reach one month ($300): $25→12 mo, $50→6 mo, $75→4 mo — faster refill, tighter budget.",
            "logText": "Refill $50/month"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "$25/month",
        "description": "gentle but slow;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "To reach one month ($300): $25→12 mo, $50→6 mo, $75→4 mo — faster refill, tighter budget.",
            "explanation": "To reach one month ($300): $25→12 mo, $50→6 mo, $75→4 mo — faster refill, tighter budget.",
            "logText": "$25/month"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "$75/month",
        "description": "fast but tight.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "To reach one month ($300): $25→12 mo, $50→6 mo, $75→4 mo — faster refill, tighter budget.",
            "explanation": "To reach one month ($300): $25→12 mo, $50→6 mo, $75→4 mo — faster refill, tighter budget.",
            "logText": "$75/month"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you balance rebuilding speed with daily needs?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Faster rebuilding protects you sooner but squeezes everything else now."
  },
  {
    "id": "ctx-4-ripple-co-owned-exit",
    "title": "Selling Our Shared Thing",
    "prompt": "You and a friend co-own a $100 item (50/50). You want cash now and propose selling, but your friend was counting on using it next month.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Selling now nets you $35 but cuts off a use your friend was relying on.",
            "explanation": "Selling now nets you $35 but cuts off a use your friend was relying on.",
            "logText": "Wait until after they use it, then sell;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell now, split ~$70 used value ($35 each);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Selling now nets you $35 but cuts off a use your friend was relying on.",
            "explanation": "Selling now nets you $35 but cuts off a use your friend was relying on.",
            "logText": "Sell now, split ~$70 used value ($35 each);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy their half for $35 so they're not affected.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Selling now nets you $35 but cuts off a use your friend was relying on.",
            "explanation": "Selling now nets you $35 but cuts off a use your friend was relying on.",
            "logText": "Buy their half for $35 so they're not affected."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you weigh your cash need against their plan?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Selling now meets your need but disrupts someone who shares the asset."
  },
  {
    "id": "ctx-4-average-grade-of-deals",
    "title": "Three 'Sales'",
    "prompt": "Three \"sale\" prices for the same item over a year were $42, $55, and $48; today's \"sale\" is $50.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "($42+$55+$48) ÷ 3 = $48.33 average — today's $50 is *above* the typical price.",
            "explanation": "($42+$55+$48) ÷ 3 = $48.33 average — today's $50 is *above* the typical price.",
            "logText": "Compare today to the average (~$48);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Trust the word \"sale\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($42+$55+$48) ÷ 3 = $48.33 average — today's $50 is *above* the typical price.",
            "explanation": "($42+$55+$48) ÷ 3 = $48.33 average — today's $50 is *above* the typical price.",
            "logText": "Trust the word \"sale\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait for $42 or lower.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($42+$55+$48) ÷ 3 = $48.33 average — today's $50 is *above* the typical price.",
            "explanation": "($42+$55+$48) ÷ 3 = $48.33 average — today's $50 is *above* the typical price.",
            "logText": "Wait for $42 or lower."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why compare a 'sale' to the usual price, not just the old high?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting risks a sellout; buying now risks paying above the norm."
  },
  {
    "id": "ctx-4-pause-checkout-anger",
    "title": "Buying Mad",
    "prompt": "Annoyed after losing a game, you're about to buy a $15 in-app boost out of frustration.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pause; do something else for 10 minutes;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Spending to fix a mood often leads to regret — a short pause resets your judgment.",
            "explanation": "Spending to fix a mood often leads to regret — a short pause resets your judgment.",
            "logText": "Pause; do something else for 10 minutes;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy it now;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending to fix a mood often leads to regret — a short pause resets your judgment.",
            "explanation": "Spending to fix a mood often leads to regret — a short pause resets your judgment.",
            "logText": "Buy it now;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a rule: no buying within an hour of being upset.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending to fix a mood often leads to regret — a short pause resets your judgment.",
            "explanation": "Spending to fix a mood often leads to regret — a short pause resets your judgment.",
            "logText": "Set a rule: no buying within an hour of being upset."
          }
        ]
      }
    ],
    "reflectionPrompt": "What feeling most tempts you to spend?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The boost might be fun; deciding calmly just makes it a real choice, not a reaction."
  },
  {
    "id": "ctx-4-endowment-trade-cards",
    "title": "Even Trade?",
    "prompt": "A friend offers a fair, even swap of collectibles. Yours feels \"more special\" because it's yours, though they're worth about the same.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Owning something can make it feel more valuable than it is — values here are about equal.",
            "explanation": "Owning something can make it feel more valuable than it is — values here are about equal.",
            "logText": "Make the even trade;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Demand something extra;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Owning something can make it feel more valuable than it is — values here are about equal.",
            "explanation": "Owning something can make it feel more valuable than it is — values here are about equal.",
            "logText": "Demand something extra;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Check typical values before deciding.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Owning something can make it feel more valuable than it is — values here are about equal.",
            "explanation": "Owning something can make it feel more valuable than it is — values here are about equal.",
            "logText": "Check typical values before deciding."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did 'mine is better' creep in?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Holding out for extra can kill a fair deal over a feeling, not a fact."
  },
  {
    "id": "ctx-4-whole-term-streaming-bundle",
    "title": "Annual Plan Looks Cheaper",
    "prompt": "A service is $8/month or $84/year paid upfront. The annual \"saves money\" but locks you in.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "amount": 2
              }
            ],
            "feedback": "$8 × 12 = $96 vs. $84 annual — you save $12, but only if you'd use all 12 months.",
            "explanation": "$8 × 12 = $96 vs. $84 annual — you save $12, but only if you'd use all 12 months.",
            "logText": "Compute the annual savings and your real usage;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take the annual to \"save\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$8 × 12 = $96 vs. $84 annual — you save $12, but only if you'd use all 12 months.",
            "explanation": "$8 × 12 = $96 vs. $84 annual — you save $12, but only if you'd use all 12 months.",
            "logText": "Take the annual to \"save\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Stay monthly for flexibility.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$8 × 12 = $96 vs. $84 annual — you save $12, but only if you'd use all 12 months.",
            "explanation": "$8 × 12 = $96 vs. $84 annual — you save $12, but only if you'd use all 12 months.",
            "logText": "Stay monthly for flexibility."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does an annual plan actually save?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Annual saves $12 if you stay; monthly costs more but lets you quit anytime."
  },
  {
    "id": "ctx-4-estimate-class-fundraiser",
    "title": "Will We Hit the Goal?",
    "prompt": "Your class needs $200. There are 25 students; each can likely sell about 3 items at $3 profit.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "25 × 3 × $3 = $225 — about $25 over goal if estimates hold.",
            "explanation": "25 × 3 × $3 = $225 — about $25 over goal if estimates hold.",
            "logText": "Estimate (25 × 3 × $3 = $225), then plan;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hope it works out;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "25 × 3 × $3 = $225 — about $25 over goal if estimates hold.",
            "explanation": "25 × 3 × $3 = $225 — about $25 over goal if estimates hold.",
            "logText": "Hope it works out;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a per-student mini-goal.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "25 × 3 × $3 = $225 — about $25 over goal if estimates hold.",
            "explanation": "25 × 3 × $3 = $225 — about $25 over goal if estimates hold.",
            "logText": "Set a per-student mini-goal."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does a per-person target make a big goal doable?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Per-student goals share the load but depend on everyone pitching in."
  },
  {
    "id": "ctx-4-default-cookie-consent",
    "title": "Everything Pre-Checked",
    "prompt": "A free app has every data-sharing option pre-checked \"on.\" You can turn some off.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Free' often means defaults set to share more — editing them is your choice to make.",
            "explanation": "'Free' often means defaults set to share more — editing them is your choice to make.",
            "logText": "Review and turn off what you don't want;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave all on (faster);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Free' often means defaults set to share more — editing them is your choice to make.",
            "explanation": "'Free' often means defaults set to share more — editing them is your choice to make.",
            "logText": "Leave all on (faster);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look for an app with better defaults.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Free' often means defaults set to share more — editing them is your choice to make.",
            "explanation": "'Free' often means defaults set to share more — editing them is your choice to make.",
            "logText": "Look for an app with better defaults."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why are convenient defaults not always in your favor?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Leaving defaults on is faster; reviewing them protects what you share. (Kept general/fictional.)"
  },
  {
    "id": "ctx-4-verify-prize-claim",
    "title": "You Won! (Did You?)",
    "prompt": "A message says you won a $100 gift card — just pay a $5 \"processing fee\" and share an account detail to claim it.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Don't pay or share; real prizes don't charge you —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Paying a fee to receive 'winnings' is a classic scam — real prizes don't work that way.",
            "explanation": "Paying a fee to receive 'winnings' is a classic scam — real prizes don't work that way.",
            "logText": "Don't pay or share; real prizes don't charge you —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the $5 to \"claim it\" —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Paying a fee to receive 'winnings' is a classic scam — real prizes don't work that way.",
            "explanation": "Paying a fee to receive 'winnings' is a classic scam — real prizes don't work that way.",
            "logText": "Pay the $5 to \"claim it\" —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Verify the sender independently first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Paying a fee to receive 'winnings' is a classic scam — real prizes don't work that way.",
            "explanation": "Paying a fee to receive 'winnings' is a classic scam — real prizes don't work that way.",
            "logText": "Verify the sender independently first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a fee-to-claim a red flag?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "New twist — the bait is \"free winnings\" with a small fee, not a fake login or job."
  },
  {
    "id": "ctx-4-unbundle-club-fee",
    "title": "All-In or Pick-and-Choose?",
    "prompt": "A club offers an \"all-access $30/month\" or à la carte at $9 per activity. You'd attend two activities.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Two activities = $18 vs. $30 all-access — pay-per-use wins unless you'd do 4+.",
            "explanation": "Two activities = $18 vs. $30 all-access — pay-per-use wins unless you'd do 4+.",
            "logText": "Compare 2 × $9 = $18 vs. $30;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take all-access \"in case\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Two activities = $18 vs. $30 all-access — pay-per-use wins unless you'd do 4+.",
            "explanation": "Two activities = $18 vs. $30 all-access — pay-per-use wins unless you'd do 4+.",
            "logText": "Take all-access \"in case\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "À la carte for two, upgrade if you add more.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Two activities = $18 vs. $30 all-access — pay-per-use wins unless you'd do 4+.",
            "explanation": "Two activities = $18 vs. $30 all-access — pay-per-use wins unless you'd do 4+.",
            "logText": "À la carte for two, upgrade if you add more."
          }
        ]
      }
    ],
    "reflectionPrompt": "At how many activities does all-access win?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "All-access is freeing if you'd do a lot; à la carte saves if you won't."
  },
  {
    "id": "ctx-4-ripple-loud-purchase",
    "title": "Flexing the New Thing",
    "prompt": "You could buy a flashy $40 item partly to impress friends. A quieter $15 option does the same job.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending to impress can ripple into pressure on friends to keep up.",
            "explanation": "Spending to impress can ripple into pressure on friends to keep up.",
            "logText": "Buy the $15 option;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $40 to impress;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending to impress can ripple into pressure on friends to keep up.",
            "explanation": "Spending to impress can ripple into pressure on friends to keep up.",
            "logText": "Buy the $40 to impress;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy the $15 and be honest about why.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Spending to impress can ripple into pressure on friends to keep up.",
            "explanation": "Spending to impress can ripple into pressure on friends to keep up.",
            "logText": "Buy the $15 and be honest about why."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does what you buy affect the people around you?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The flashy buy may feel good briefly; the cheaper one does the job and sets a kinder tone."
  },
  {
    "id": "ctx-4-estimate-then-check-receipt",
    "title": "Does the Receipt Look Right?",
    "prompt": "You expected about $14 but the receipt says $19.40. You estimated $5 + $4 + $5 ≈ $14 for three items.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "amount": 2
              }
            ],
            "feedback": "Your $14 estimate vs. $19.40 charged is a $5+ gap worth checking — maybe a double-scan.",
            "explanation": "Your $14 estimate vs. $19.40 charged is a $5+ gap worth checking — maybe a double-scan.",
            "logText": "Recheck the receipt against your estimate;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay and move on;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your $14 estimate vs. $19.40 charged is a $5+ gap worth checking — maybe a double-scan.",
            "explanation": "Your $14 estimate vs. $19.40 charged is a $5+ gap worth checking — maybe a double-scan.",
            "logText": "Pay and move on;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if an item scanned wrong.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Your $14 estimate vs. $19.40 charged is a $5+ gap worth checking — maybe a double-scan.",
            "explanation": "Your $14 estimate vs. $19.40 charged is a $5+ gap worth checking — maybe a double-scan.",
            "logText": "Ask if an item scanned wrong."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is an estimate a built-in error alarm?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Checking takes a moment; it can catch a real overcharge."
  },
  {
    "id": "ctx-4-average-allowance-spend",
    "title": "A Typical Week?",
    "prompt": "Your spending over four weeks was $7, $22, $9, and $14. You want to know a \"normal\" week.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($7+$22+$9+$14) ÷ 4 = $13 average; the range $7–$22 shows weeks vary a lot.",
            "explanation": "($7+$22+$9+$14) ÷ 4 = $13 average; the range $7–$22 shows weeks vary a lot.",
            "logText": "Compute the average ($13);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the highest ($22) to be safe;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($7+$22+$9+$14) ÷ 4 = $13 average; the range $7–$22 shows weeks vary a lot.",
            "explanation": "($7+$22+$9+$14) ÷ 4 = $13 average; the range $7–$22 shows weeks vary a lot.",
            "logText": "Use the highest ($22) to be safe;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Note the range and average both.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "($7+$22+$9+$14) ÷ 4 = $13 average; the range $7–$22 shows weeks vary a lot.",
            "explanation": "($7+$22+$9+$14) ÷ 4 = $13 average; the range $7–$22 shows weeks vary a lot.",
            "logText": "Note the range and average both."
          }
        ]
      }
    ],
    "reflectionPrompt": "Does the average tell the whole story?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The average plans the middle; the range warns about the spiky weeks."
  },
  {
    "id": "ctx-4-cooling-off-cart-hold",
    "title": "Leave It in the Cart",
    "prompt": "A $28 want sits in your cart. You set a rule to wait a day on anything over $25.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Wait a day, then decide —",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A waiting rule turns impulse buys into real decisions.",
            "explanation": "A waiting rule turns impulse buys into real decisions.",
            "logText": "Wait a day, then decide —"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A waiting rule turns impulse buys into real decisions.",
            "explanation": "A waiting rule turns impulse buys into real decisions.",
            "logText": "Buy now;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Move it to a wishlist with a budget date.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A waiting rule turns impulse buys into real decisions.",
            "explanation": "A waiting rule turns impulse buys into real decisions.",
            "logText": "Move it to a wishlist with a budget date."
          }
        ]
      }
    ],
    "reflectionPrompt": "What price should trigger a wait for you?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting may mean missing a sale; it also filters out fads."
  },
  {
    "id": "ctx-4-whole-term-club-sport",
    "title": "Season-Long Costs",
    "prompt": "A sport costs a $40 sign-up plus $12/week for 10 weeks for gear/fees. The sign-up is all you saw advertised.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 + ($12 × 10) = $160 for the season — the sign-up was only a quarter of it.",
            "explanation": "$40 + ($12 × 10) = $160 for the season — the sign-up was only a quarter of it.",
            "logText": "Add up the whole-season cost first;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sign up seeing only the $40;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 + ($12 × 10) = $160 for the season — the sign-up was only a quarter of it.",
            "explanation": "$40 + ($12 × 10) = $160 for the season — the sign-up was only a quarter of it.",
            "logText": "Sign up seeing only the $40;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about a payment plan or gear-sharing.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$40 + ($12 × 10) = $160 for the season — the sign-up was only a quarter of it.",
            "explanation": "$40 + ($12 × 10) = $160 for the season — the sign-up was only a quarter of it.",
            "logText": "Ask about a payment plan or gear-sharing."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why total the whole season before joining?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The activity may be worth it — but the real cost is the whole season, not the sign-up."
  },
  {
    "id": "ctx-4-endowment-sell-old-phone",
    "title": "It Was My First Phone",
    "prompt": "Your old phone has sentimental value. Trade-in offers $60; you feel it's \"worth $110.\" Market resale is about $70.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sentiment can inflate the price in your head — the market says ~$60–$70.",
            "explanation": "Sentiment can inflate the price in your head — the market says ~$60–$70.",
            "logText": "Sell near market ($70) or trade in ($60);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hold out for $110;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sentiment can inflate the price in your head — the market says ~$60–$70.",
            "explanation": "Sentiment can inflate the price in your head — the market says ~$60–$70.",
            "logText": "Hold out for $110;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it as a backup, no sale.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sentiment can inflate the price in your head — the market says ~$60–$70.",
            "explanation": "Sentiment can inflate the price in your head — the market says ~$60–$70.",
            "logText": "Keep it as a backup, no sale."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does attachment change what you think something's worth?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Keeping it as a backup is valid; holding out for $110 likely means no sale."
  },
  {
    "id": "ctx-4-ripple-skip-chore-pay",
    "title": "Skipping the Shared Job",
    "prompt": "You're paid $10 for a shared household task, but skipping it means a sibling has to cover it.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Skipping isn't free — it pushes the work (and stress) onto someone else.",
            "explanation": "Skipping isn't free — it pushes the work (and stress) onto someone else.",
            "logText": "Do your task as agreed;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it, let your sibling cover, keep doing other things;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Skipping isn't free — it pushes the work (and stress) onto someone else.",
            "explanation": "Skipping isn't free — it pushes the work (and stress) onto someone else.",
            "logText": "Skip it, let your sibling cover, keep doing other things;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Swap tasks fairly with your sibling.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Skipping isn't free — it pushes the work (and stress) onto someone else.",
            "explanation": "Skipping isn't free — it pushes the work (and stress) onto someone else.",
            "logText": "Swap tasks fairly with your sibling."
          }
        ]
      }
    ],
    "reflectionPrompt": "Who absorbs the cost when you opt out?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Skipping frees your time but shifts the burden to family."
  },
  {
    "id": "ctx-4-estimate-interest-simple",
    "title": "Roughly How Much Interest?",
    "prompt": "You save $400 at about 5% simple interest for a year. Estimate the interest before computing.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "5% of $400 = $20 — your estimate matches the exact simple interest for one year.",
            "explanation": "5% of $400 = $20 — your estimate matches the exact simple interest for one year.",
            "logText": "Estimate (~$20), then compute;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess \"a few bucks\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "5% of $400 = $20 — your estimate matches the exact simple interest for one year.",
            "explanation": "5% of $400 = $20 — your estimate matches the exact simple interest for one year.",
            "logText": "Guess \"a few bucks\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare to 5% of $400 directly.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "5% of $400 = $20 — your estimate matches the exact simple interest for one year.",
            "explanation": "5% of $400 = $20 — your estimate matches the exact simple interest for one year.",
            "logText": "Compare to 5% of $400 directly."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does '10% then halve it' help estimate 5%?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating builds a quick check on whether a quoted interest number is reasonable."
  },
  {
    "id": "ctx-4-default-overdraft-optin",
    "title": "The Pre-Selected 'Yes'",
    "prompt": "A bank form has overdraft \"protection\" ($35/use) pre-selected as \"Yes.\" *(Locked: `hasChecking`.)*",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A pre-selected 'Yes' can cost $35 per slip — declining is free.",
            "explanation": "A pre-selected 'Yes' can cost $35 per slip — declining is free.",
            "logText": "Change it to \"No, just decline the purchase\";"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave the pre-selected \"Yes\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A pre-selected 'Yes' can cost $35 per slip — declining is free.",
            "explanation": "A pre-selected 'Yes' can cost $35 per slip — declining is free.",
            "logText": "Leave the pre-selected \"Yes\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose \"No\" plus set low-balance alerts.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A pre-selected 'Yes' can cost $35 per slip — declining is free.",
            "explanation": "A pre-selected 'Yes' can cost $35 per slip — declining is free.",
            "logText": "Choose \"No\" plus set low-balance alerts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why read what a form has pre-selected for you?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Opting out risks a declined card; the default \"Yes\" risks repeated $35 fees."
  },
  {
    "id": "ctx-4-comparable-loan-terms",
    "title": "Two Ways to Borrow $600",
    "prompt": "For $600: Loan A is $110/month for 6 months; Loan B is $55/month for 12 months. *(Locked: `eligibleForCredit`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "A: $110 × 6 = $660; B: $55 × 12 = $660 here — but longer terms often cost more in interest; compare totals, not payments.",
            "explanation": "A: $110 × 6 = $660; B: $55 × 12 = $660 here — but longer terms often cost more in interest; compare totals, not payments.",
            "logText": "Compute total cost of each;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pick B (smaller payment);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A: $110 × 6 = $660; B: $55 × 12 = $660 here — but longer terms often cost more in interest; compare totals, not payments.",
            "explanation": "A: $110 × 6 = $660; B: $55 × 12 = $660 here — but longer terms often cost more in interest; compare totals, not payments.",
            "logText": "Pick B (smaller payment);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow less or save first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "A: $110 × 6 = $660; B: $55 × 12 = $660 here — but longer terms often cost more in interest; compare totals, not payments.",
            "explanation": "A: $110 × 6 = $660; B: $55 × 12 = $660 here — but longer terms often cost more in interest; compare totals, not payments.",
            "logText": "Borrow less or save first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is the monthly payment a misleading comparison?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "B's smaller payment feels easier but ties you up longer; compare full totals."
  },
  {
    "id": "ctx-4-pause-flash-countdown",
    "title": "The Ticking Timer",
    "prompt": "A $35 want shows a 10-minute countdown timer. Your heart races to buy before it ends.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pause; the timer pressure isn't about value;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A countdown raises pressure, not value — pausing separates want from panic.",
            "explanation": "A countdown raises pressure, not value — pausing separates want from panic.",
            "logText": "Pause; the timer pressure isn't about value;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy before it ends;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A countdown raises pressure, not value — pausing separates want from panic.",
            "explanation": "A countdown raises pressure, not value — pausing separates want from panic.",
            "logText": "Buy before it ends;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Note the price and check if it returns later.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A countdown raises pressure, not value — pausing separates want from panic.",
            "explanation": "A countdown raises pressure, not value — pausing separates want from panic.",
            "logText": "Note the price and check if it returns later."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did the timer change the item, or just your stress?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "You might genuinely want it; pausing just makes sure the timer didn't decide for you."
  },
  {
    "id": "ctx-4-unbundle-phone-addons",
    "title": "What's in the Plan?",
    "prompt": "A $40/month phone plan bundles insurance ($7), extra storage ($5), and a music add-on ($6) you don't use.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "Dropping the $6 music and $5 storage saves $11/month = $132/year if you don't use them.",
            "explanation": "Dropping the $6 music and $5 storage saves $11/month = $132/year if you don't use them.",
            "logText": "Unbundle and drop what you don't use;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep the bundle for simplicity;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Dropping the $6 music and $5 storage saves $11/month = $132/year if you don't use them.",
            "explanation": "Dropping the $6 music and $5 storage saves $11/month = $132/year if you don't use them.",
            "logText": "Keep the bundle for simplicity;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep only insurance.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Dropping the $6 music and $5 storage saves $11/month = $132/year if you don't use them.",
            "explanation": "Dropping the $6 music and $5 storage saves $11/month = $132/year if you don't use them.",
            "logText": "Keep only insurance."
          }
        ]
      }
    ],
    "reflectionPrompt": "What are you paying for inside a bundle without realizing?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Bundles are simple; unbundling saves money but takes a little management."
  },
  {
    "id": "ctx-4-average-vs-guarantee-gig",
    "title": "They Said I'd Make $200",
    "prompt": "A gig advertises \"earn an average of $200/week.\" Your first weeks vary widely.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Average' isn't a guarantee — some weeks land well below it.",
            "explanation": "'Average' isn't a guarantee — some weeks land well below it.",
            "logText": "Treat $200 as an average, plan for less;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Count on $200 every week;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Average' isn't a guarantee — some weeks land well below it.",
            "explanation": "'Average' isn't a guarantee — some weeks land well below it.",
            "logText": "Count on $200 every week;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Track your real weekly earnings —",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "'Average' isn't a guarantee — some weeks land well below it.",
            "explanation": "'Average' isn't a guarantee — some weeks land well below it.",
            "logText": "Track your real weekly earnings —"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is 'average earnings' a careful claim to read?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The gig can pay well on average while still leaving lean weeks to plan for."
  },
  {
    "id": "ctx-4-milestone-laptop-fund",
    "title": "Climbing to a Laptop",
    "prompt": "You're saving $300 for a laptop in $50 rungs. At rung 4 ($200), a $40 surprise knocks you back.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Cover the surprise, drop to rung 3, climb again;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$200 − $40 = $160 (back to rung 3) — one setback isn't the end of the climb.",
            "explanation": "$200 − $40 = $160 (back to rung 3) — one setback isn't the end of the climb.",
            "logText": "Cover the surprise, drop to rung 3, climb again;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip saving this month to recover;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$200 − $40 = $160 (back to rung 3) — one setback isn't the end of the climb.",
            "explanation": "$200 − $40 = $160 (back to rung 3) — one setback isn't the end of the climb.",
            "logText": "Skip saving this month to recover;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Trim spending to hold your rung.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "$200 − $40 = $160 (back to rung 3) — one setback isn't the end of the climb.",
            "explanation": "$200 − $40 = $160 (back to rung 3) — one setback isn't the end of the climb.",
            "logText": "Trim spending to hold your rung."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do visible rungs help after a setback?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Recovering the rung takes time; the ladder keeps the goal from feeling lost."
  },
  {
    "id": "ctx-4-endowment-keep-broken",
    "title": "But I Paid a Lot for It",
    "prompt": "A gadget you paid $90 for barely works. Repair is $50; a reliable replacement is $70. You feel attached to the original.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $90 is already spent; choose between $50 (uncertain) and $70 (reliable) on their merits.",
            "explanation": "The $90 is already spent; choose between $50 (uncertain) and $70 (reliable) on their merits.",
            "logText": "Replace for $70, let the old one go;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Repair the $90 one because \"it cost a lot\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $90 is already spent; choose between $50 (uncertain) and $70 (reliable) on their merits.",
            "explanation": "The $90 is already spent; choose between $50 (uncertain) and $70 (reliable) on their merits.",
            "logText": "Repair the $90 one because \"it cost a lot\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare repair vs. replace ignoring what you paid.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The $90 is already spent; choose between $50 (uncertain) and $70 (reliable) on their merits.",
            "explanation": "The $90 is already spent; choose between $50 (uncertain) and $70 (reliable) on their merits.",
            "logText": "Compare repair vs. replace ignoring what you paid."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did attachment and 'I paid a lot' pull at you?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Repair is cheaper but risky; replacement costs more but is reliable — the past price shouldn't decide it."
  },
  {
    "id": "ctx-4-ripple-cosign-favor",
    "title": "Vouching for a Friend",
    "prompt": "A friend asks you to share responsibility for a small fictional payment plan so they qualify. If they miss payments, it's on you too. *(Locked: `eligibleForCredit`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Decline kindly; the risk is yours too;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sharing responsibility means their missed payment becomes *your* problem and record.",
            "explanation": "Sharing responsibility means their missed payment becomes *your* problem and record.",
            "logText": "Decline kindly; the risk is yours too;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Agree without conditions;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sharing responsibility means their missed payment becomes *your* problem and record.",
            "explanation": "Sharing responsibility means their missed payment becomes *your* problem and record.",
            "logText": "Agree without conditions;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Offer to help another way (budgeting, smaller direct loan).",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sharing responsibility means their missed payment becomes *your* problem and record.",
            "explanation": "Sharing responsibility means their missed payment becomes *your* problem and record.",
            "logText": "Offer to help another way (budgeting, smaller direct loan)."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the real risk of vouching with your own credit?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Helping a friend is kind, but co-responsibility ties your finances to their follow-through."
  },
  {
    "id": "ctx-4-estimate-tip-mental",
    "title": "Tip in Your Head",
    "prompt": "A $19 bill needs about a 15% tip, no calculator.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "10% = $1.90, half = $0.95, add",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "10% of $19 = $1.90; 15% ≈ $1.90 + $0.95 = $2.85.",
            "explanation": "10% of $19 = $1.90; 15% ≈ $1.90 + $0.95 = $2.85.",
            "logText": "10% = $1.90, half = $0.95, add"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Round to 20% = $3.80;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "10% of $19 = $1.90; 15% ≈ $1.90 + $0.95 = $2.85.",
            "explanation": "10% of $19 = $1.90; 15% ≈ $1.90 + $0.95 = $2.85.",
            "logText": "Round to 20% = $3.80;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Estimate \"about $3.\"",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "10% of $19 = $1.90; 15% ≈ $1.90 + $0.95 = $2.85.",
            "explanation": "10% of $19 = $1.90; 15% ≈ $1.90 + $0.95 = $2.85.",
            "logText": "Estimate \"about $3.\""
          }
        ]
      }
    ],
    "reflectionPrompt": "How does finding 10% first unlock other percents?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "20% is simpler and more generous; the 10%-plus-half trick is exact."
  },
  {
    "id": "ctx-4-default-app-subscription",
    "title": "Free, Then Not",
    "prompt": "A free trial auto-fills your saved card and pre-sets billing to start in 7 days. You can set a reminder or remove the card.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The default is to charge you — a reminder (or no card) flips that.",
            "explanation": "The default is to charge you — a reminder (or no card) flips that.",
            "logText": "Set a cancel reminder for day 6;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Do nothing —",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The default is to charge you — a reminder (or no card) flips that.",
            "explanation": "The default is to charge you — a reminder (or no card) flips that.",
            "logText": "Do nothing —"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a trial that doesn't require a card.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "The default is to charge you — a reminder (or no card) flips that.",
            "explanation": "The default is to charge you — a reminder (or no card) flips that.",
            "logText": "Use a trial that doesn't require a card."
          }
        ]
      }
    ],
    "reflectionPrompt": "Who does the 'do nothing' path benefit?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Trials can be worth it; the risk is the default billing winning by your inaction."
  },
  {
    "id": "ctx-4-comparable-grocery-sizes",
    "title": "Three Sizes, One Choice",
    "prompt": "Juice comes in 16 oz ($2.40), 32 oz ($4.00), and 64 oz ($8.32). They're not obviously comparable.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "16oz=$0.15/oz; 32oz=$0.125/oz; 64oz=$0.13/oz — the 32oz is actually best per ounce.",
            "explanation": "16oz=$0.15/oz; 32oz=$0.125/oz; 64oz=$0.13/oz — the 32oz is actually best per ounce.",
            "logText": "Put all three in cents-per-ounce;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the biggest (assume cheapest);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "16oz=$0.15/oz; 32oz=$0.125/oz; 64oz=$0.13/oz — the 32oz is actually best per ounce.",
            "explanation": "16oz=$0.15/oz; 32oz=$0.125/oz; 64oz=$0.13/oz — the 32oz is actually best per ounce.",
            "logText": "Buy the biggest (assume cheapest);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy the size you'll finish before it spoils.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "16oz=$0.15/oz; 32oz=$0.125/oz; 64oz=$0.13/oz — the 32oz is actually best per ounce.",
            "explanation": "16oz=$0.15/oz; 32oz=$0.125/oz; 64oz=$0.13/oz — the 32oz is actually best per ounce.",
            "logText": "Buy the size you'll finish before it spoils."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why isn't the biggest always cheapest per ounce?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The 32oz wins per ounce here — and waste would erase any 'bulk' savings on the 64oz."
  },
  {
    "id": "ctx-4-pause-group-pressure-buy",
    "title": "Everyone's Buying It",
    "prompt": "Friends are all buying a $25 add-on right now and urging you to join in this second.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pause; tell them you'll decide later;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Group urgency is real pressure — a pause lets you choose, not react.",
            "explanation": "Group urgency is real pressure — a pause lets you choose, not react.",
            "logText": "Pause; tell them you'll decide later;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now to be part of it;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Group urgency is real pressure — a pause lets you choose, not react.",
            "explanation": "Group urgency is real pressure — a pause lets you choose, not react.",
            "logText": "Buy now to be part of it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Suggest a free way to join the fun.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Group urgency is real pressure — a pause lets you choose, not react.",
            "explanation": "Group urgency is real pressure — a pause lets you choose, not react.",
            "logText": "Suggest a free way to join the fun."
          }
        ]
      }
    ],
    "reflectionPrompt": "How is peer urgency like a countdown timer?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Joining in feels good now; pausing makes sure it's your choice, not the group's."
  },
  {
    "id": "ctx-4-unbundle-school-supplies",
    "title": "The Kit vs. The List",
    "prompt": "A pre-made supply kit is $24. The same items bought individually total $17, but you already own a few of them.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
      "max": 13
    },
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
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Kit = $24; buying only what you lack ≈ $11 — convenience costs about $13 here.",
            "explanation": "Kit = $24; buying only what you lack ≈ $11 — convenience costs about $13 here.",
            "logText": "Buy only what you're missing (~$11);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the kit for convenience;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Kit = $24; buying only what you lack ≈ $11 — convenience costs about $13 here.",
            "explanation": "Kit = $24; buying only what you lack ≈ $11 — convenience costs about $13 here.",
            "logText": "Buy the kit for convenience;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy individual items ($17).",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Kit = $24; buying only what you lack ≈ $11 — convenience costs about $13 here.",
            "explanation": "Kit = $24; buying only what you lack ≈ $11 — convenience costs about $13 here.",
            "logText": "Buy individual items ($17)."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a kit's convenience worth the markup?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The kit saves time; buying only what you need saves the most money."
  },
  {
    "id": "ctx-4-average-pathway-pay",
    "title": "Average Starting Pay",
    "prompt": "A career page lists an \"average starting pay\" for a field, but actual offers ranged widely by employer and location.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Averages summarize many outcomes — your offer could land above or below.",
            "explanation": "Averages summarize many outcomes — your offer could land above or below.",
            "logText": "Treat the average as a midpoint, research the range;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Expect exactly the average;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Averages summarize many outcomes — your offer could land above or below.",
            "explanation": "Averages summarize many outcomes — your offer could land above or below.",
            "logText": "Expect exactly the average;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor about real local offers",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Averages summarize many outcomes — your offer could land above or below.",
            "explanation": "Averages summarize many outcomes — your offer could land above or below.",
            "logText": "Ask a mentor about real local offers"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why research the range, not just the average, when exploring careers?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Averages help compare fields; they don't predict any single job offer."
  },
  {
    "id": "ctx-4-milestone-debt-paydown",
    "title": "Knocking Down the Balance",
    "prompt": "You owe $240 at a high rate. You can pay $60/month. Breaking it into rungs makes it feel doable. *(Locked: `hasDebt`.)*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$240 ÷ $60 = 4 months; each rung paid is interest you stop owing.",
            "explanation": "$240 ÷ $60 = 4 months; each rung paid is interest you stop owing.",
            "logText": "Set rungs at $180/$120/$60/$0 and track each;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $60/month with no checkpoints;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$240 ÷ $60 = 4 months; each rung paid is interest you stop owing.",
            "explanation": "$240 ÷ $60 = 4 months; each rung paid is interest you stop owing.",
            "logText": "Pay $60/month with no checkpoints;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay $60 plus any spare cash to finish faster.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$240 ÷ $60 = 4 months; each rung paid is interest you stop owing.",
            "explanation": "$240 ÷ $60 = 4 months; each rung paid is interest you stop owing.",
            "logText": "Pay $60 plus any spare cash to finish faster."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can visible rungs keep you motivated to pay off debt?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Paying extra finishes sooner and saves interest but tightens your month."
  },
  {
    "id": "ctx-4-estimate-paycheck-net",
    "title": "Guess Your Take-Home",
    "prompt": "You're offered $13/hr for 12 hours. Before seeing the stub, estimate your take-home if roughly 20% comes out.",
    "topics": [
      "taxes"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "13 × 12 = $156 gross; ~20% deductions ≈ $31, so ~$125 net — close to the stub.",
            "explanation": "13 × 12 = $156 gross; ~20% deductions ≈ $31, so ~$125 net — close to the stub.",
            "logText": "Estimate: $156 gross, ~20% out ≈ $125 net;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Expect the full $156;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "13 × 12 = $156 gross; ~20% deductions ≈ $31, so ~$125 net — close to the stub.",
            "explanation": "13 × 12 = $156 gross; ~20% deductions ≈ $31, so ~$125 net — close to the stub.",
            "logText": "Expect the full $156;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask how deductions are figured.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "13 × 12 = $156 gross; ~20% deductions ≈ $31, so ~$125 net — close to the stub.",
            "explanation": "13 × 12 = $156 gross; ~20% deductions ≈ $31, so ~$125 net — close to the stub.",
            "logText": "Ask how deductions are figured."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why estimate net pay before you budget on it?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Estimating net keeps your budget honest before the first check lands."
  },
  {
    "id": "ctx-4-default-printer-color",
    "title": "Color by Default",
    "prompt": "A shared printer defaults to color ($0.25/page) when black-and-white ($0.08/page) would do for your 20-page draft.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "20 × $0.25 = $5.00 color vs. 20 × $0.08 = $1.60 B&W — the default cost $3.40 more.",
            "explanation": "20 × $0.25 = $5.00 color vs. 20 × $0.08 = $1.60 B&W — the default cost $3.40 more.",
            "logText": "Switch to black-and-white;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Print in color (default);",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "20 × $0.25 = $5.00 color vs. 20 × $0.08 = $1.60 B&W — the default cost $3.40 more.",
            "explanation": "20 × $0.25 = $5.00 color vs. 20 × $0.08 = $1.60 B&W — the default cost $3.40 more.",
            "logText": "Print in color (default);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Print only the pages that need color.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "20 × $0.25 = $5.00 color vs. 20 × $0.08 = $1.60 B&W — the default cost $3.40 more.",
            "explanation": "20 × $0.25 = $5.00 color vs. 20 × $0.08 = $1.60 B&W — the default cost $3.40 more.",
            "logText": "Print only the pages that need color."
          }
        ]
      }
    ],
    "reflectionPrompt": "How much can a single default setting cost?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Color looks nicer; for a draft, the default quietly tripled the cost."
  },
  {
    "id": "ctx-4-ripple-late-group-pay",
    "title": "Holding Up the Group",
    "prompt": "Five of you owe $9 each for a $45 shared order due today. If you pay late, the organizer covers your share and is short.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 16
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$45 ÷ 5 = $9; your late payment leaves the organizer $9 short until you pay.",
            "explanation": "$45 ÷ 5 = $9; your late payment leaves the organizer $9 short until you pay.",
            "logText": "Pay your $9 on time;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay in two days, organizer covers meanwhile;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$45 ÷ 5 = $9; your late payment leaves the organizer $9 short until you pay.",
            "explanation": "$45 ÷ 5 = $9; your late payment leaves the organizer $9 short until you pay.",
            "logText": "Pay in two days, organizer covers meanwhile;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the group to delay the order.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$45 ÷ 5 = $9; your late payment leaves the organizer $9 short until you pay.",
            "explanation": "$45 ÷ 5 = $9; your late payment leaves the organizer $9 short until you pay.",
            "logText": "Ask the group to delay the order."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does one late payment ripple through a group?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Paying late eases your week but strains whoever fronts your share."
  },
  {
    "id": "ctx-4-cooling-off-upgrade-urge",
    "title": "The Newer Model Itch",
    "prompt": "Your device works fine, but a newer model is out and you suddenly \"need\" it ($220). You set a 2-week wait.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 17
    },
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A wait reveals whether it's a real need or a passing itch.",
            "explanation": "A wait reveals whether it's a real need or a passing itch.",
            "logText": "Wait 2 weeks, see if the urge lasts;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A wait reveals whether it's a real need or a passing itch.",
            "explanation": "A wait reveals whether it's a real need or a passing itch.",
            "logText": "Buy now;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "List what's actually wrong with your current one first.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A wait reveals whether it's a real need or a passing itch.",
            "explanation": "A wait reveals whether it's a real need or a passing itch.",
            "logText": "List what's actually wrong with your current one first."
          }
        ]
      }
    ],
    "reflectionPrompt": "What would make an upgrade a real need vs. a want?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting may cost a sale price; it filters fads from genuine needs."
  },
  {
    "id": "ctx-4-comparable-membership-vs-dropin",
    "title": "Member or Drop-In?",
    "prompt": "A space charges $35/month membership or $6 per drop-in. You'd go about 4 times a month.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 drop-ins = $24 vs. $35 membership — you'd need ~6 visits to break even on the membership.",
            "explanation": "4 drop-ins = $24 vs. $35 membership — you'd need ~6 visits to break even on the membership.",
            "logText": "Compute 4 × $6 = $24 vs. $35;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Get the membership \"to commit\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 drop-ins = $24 vs. $35 membership — you'd need ~6 visits to break even on the membership.",
            "explanation": "4 drop-ins = $24 vs. $35 membership — you'd need ~6 visits to break even on the membership.",
            "logText": "Get the membership \"to commit\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Drop in for now, switch if you go more.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 drop-ins = $24 vs. $35 membership — you'd need ~6 visits to break even on the membership.",
            "explanation": "4 drop-ins = $24 vs. $35 membership — you'd need ~6 visits to break even on the membership.",
            "logText": "Drop in for now, switch if you go more."
          }
        ]
      }
    ],
    "reflectionPrompt": "How many visits make the membership worth it?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Membership rewards frequent use; drop-in saves money for occasional use."
  },
  {
    "id": "ctx-4-endowment-inherited-item",
    "title": "Worth More to Me",
    "prompt": "You own a hand-me-down item with real sentimental value. You're tight on cash; market resale is ~$80, but it feels \"priceless.\"",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
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
                "amount": 2
              }
            ],
            "feedback": "Sentimental value is real and personal — just don't confuse it with market price when you *need* cash.",
            "explanation": "Sentimental value is real and personal — just don't confuse it with market price when you *need* cash.",
            "logText": "Keep it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell at market ~$80 for the cash;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sentimental value is real and personal — just don't confuse it with market price when you *need* cash.",
            "explanation": "Sentimental value is real and personal — just don't confuse it with market price when you *need* cash.",
            "logText": "Sell at market ~$80 for the cash;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Find another way to raise the cash and keep it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Sentimental value is real and personal — just don't confuse it with market price when you *need* cash.",
            "explanation": "Sentimental value is real and personal — just don't confuse it with market price when you *need* cash.",
            "logText": "Find another way to raise the cash and keep it."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is keeping something worth more than the money?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Keeping it honors meaning; selling solves a cash need — both can be right depending on your situation."
  },
  {
    "id": "ctx-4-estimate-bulk-event",
    "title": "Enough for the Party?",
    "prompt": "You're hosting 14 friends. Cups come 8 per pack at $2.50. Estimate packs before buying.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "14 ÷ 8 = 1.75, so 2 packs (16 cups); 2 × $2.50 = $5.00 with a couple to spare.",
            "explanation": "14 ÷ 8 = 1.75, so 2 packs (16 cups); 2 × $2.50 = $5.00 with a couple to spare.",
            "logText": "Estimate (14 ÷ 8 ≈ 2 packs), then confirm;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy \"a few packs\";",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "14 ÷ 8 = 1.75, so 2 packs (16 cups); 2 × $2.50 = $5.00 with a couple to spare.",
            "explanation": "14 ÷ 8 = 1.75, so 2 packs (16 cups); 2 × $2.50 = $5.00 with a couple to spare.",
            "logText": "Buy \"a few packs\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy 2 packs and check it's enough.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -20
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "14 ÷ 8 = 1.75, so 2 packs (16 cups); 2 × $2.50 = $5.00 with a couple to spare.",
            "explanation": "14 ÷ 8 = 1.75, so 2 packs (16 cups); 2 × $2.50 = $5.00 with a couple to spare.",
            "logText": "Buy 2 packs and check it's enough."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why round up when planning quantities for people?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Two packs avoid running short; estimating keeps you from over-buying."
  },
  {
    "id": "ctx-4-whole-term-payment-plan",
    "title": "Split Into 4 Payments",
    "prompt": "A $76 item offers \"4 payments of $19.\" You can pay now, but the plan is tempting.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
    "baseWeight": 20,
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
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 × $19 = $76 — no interest, but you've committed all four payments regardless of what changes.",
            "explanation": "4 × $19 = $76 — no interest, but you've committed all four payments regardless of what changes.",
            "logText": "Confirm you can carry all 4 payments even if money's tight;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take the plan on the $19 figure;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 × $19 = $76 — no interest, but you've committed all four payments regardless of what changes.",
            "explanation": "4 × $19 = $76 — no interest, but you've committed all four payments regardless of what changes.",
            "logText": "Take the plan on the $19 figure;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay $76 now if you have it.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "4 × $19 = $76 — no interest, but you've committed all four payments regardless of what changes.",
            "explanation": "4 × $19 = $76 — no interest, but you've committed all four payments regardless of what changes.",
            "logText": "Pay $76 now if you have it."
          }
        ]
      }
    ],
    "reflectionPrompt": "What if your income dips before payment 4?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "The plan eases cash flow now; the commitment holds even if your situation changes."
  },
  {
    "id": "ctx-4-average-utility-bill",
    "title": "Budget Billing?",
    "prompt": "A utility offers \"budget billing\" — pay the *average* ($45/month) instead of the real amount that swings $20–$80 by season. *(Locked: `hasRecurringBill`.)*",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 18,
      "max": 20
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Budget billing smooths the swing to a flat $45; actual bills range $20–$80 — same total, different timing.",
            "explanation": "Budget billing smooths the swing to a flat $45; actual bills range $20–$80 — same total, different timing.",
            "logText": "Take budget billing for predictable payments;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay actual each month;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Budget billing smooths the swing to a flat $45; actual bills range $20–$80 — same total, different timing.",
            "explanation": "Budget billing smooths the swing to a flat $45; actual bills range $20–$80 — same total, different timing.",
            "logText": "Pay actual each month;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay actual but save for high-bill months.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "Budget billing smooths the swing to a flat $45; actual bills range $20–$80 — same total, different timing.",
            "explanation": "Budget billing smooths the swing to a flat $45; actual bills range $20–$80 — same total, different timing.",
            "logText": "Pay actual but save for high-bill months."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is a predictable average worth more than paying the exact amount?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Budget billing eases planning; paying actual lets low months stay cheap."
  },
  {
    "id": "ctx-4-milestone-emergency-first",
    "title": "First Rung: One Month",
    "prompt": "A 3-month fund ($900) feels impossible. You earn enough to save $75/month.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 17,
      "max": 19
    },
    "baseWeight": 20,
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$300 ÷ $75 = 4 months to the first rung — a real, reachable win before the bigger goal.",
            "explanation": "$300 ÷ $75 = 4 months to the first rung — a real, reachable win before the bigger goal.",
            "logText": "Make \"1 month = $300\" the first rung, then climb;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Aim straight at $900;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "$300 ÷ $75 = 4 months to the first rung — a real, reachable win before the bigger goal.",
            "explanation": "$300 ÷ $75 = 4 months to the first rung — a real, reachable win before the bigger goal.",
            "logText": "Aim straight at $900;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $75/month with no checkpoints.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              }
            ],
            "feedback": "$300 ÷ $75 = 4 months to the first rung — a real, reachable win before the bigger goal.",
            "explanation": "$300 ÷ $75 = 4 months to the first rung — a real, reachable win before the bigger goal.",
            "logText": "Save $75/month with no checkpoints."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does a reachable first rung beat staring at $900?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Aiming high is ideal but discouraging; a one-month rung builds momentum."
  },
  {
    "id": "ctx-4-ripple-windfall-share",
    "title": "A Gift to Spread",
    "prompt": "You receive $90. A family member helped you earn the chance for it, and you have your own goals too.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 16,
      "max": 18
    },
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A windfall can fund a goal *and* recognize who helped — e.g., $30/$45/$15.",
            "explanation": "A windfall can fund a goal *and* recognize who helped — e.g., $30/$45/$15.",
            "logText": "Split: thank-you to family / your goal / a small treat;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep all $90 for yourself;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A windfall can fund a goal *and* recognize who helped — e.g., $30/$45/$15.",
            "explanation": "A windfall can fund a goal *and* recognize who helped — e.g., $30/$45/$15.",
            "logText": "Keep all $90 for yourself;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask what would help the household most",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "A windfall can fund a goal *and* recognize who helped — e.g., $30/$45/$15.",
            "explanation": "A windfall can fund a goal *and* recognize who helped — e.g., $30/$45/$15.",
            "logText": "Ask what would help the household most"
          }
        ]
      }
    ],
    "reflectionPrompt": "Does a windfall change who you think about?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "Keeping it all is valid; sharing some can strengthen the relationships that created the chance."
  },
  {
    "id": "ctx-4-acorn-capstone-estimate",
    "title": "From Acorn to Oak",
    "prompt": "Your snapshot shows ~$1,900 in assets, ~$600 in debts, ~$120 cash, and a savings goal you've climbed in rungs. Numbers carry \"estimate\" tags. *(Locked: `Money Know-How ≥ 50`; visible note: \"Needs net-worth + estimation skill.\")*",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 18,
      "max": 23
    },
    "baseWeight": 20,
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
                "amount": 2
              }
            ],
            "feedback": "Net worth ≈ $1,900 − $600 = $1,300, but only $120 is spendable now — and these are estimates with a range, not exact truths.",
            "explanation": "Net worth ≈ $1,900 − $600 = $1,300, but only $120 is spendable now — and these are estimates with a range, not exact truths.",
            "logText": "Read each figure as an estimate, compute net worth (~$1,300), and check liquidity ($120);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Trust the numbers as exact and plan tightly;",
        "outcomes": [
          {
            "id": "outcome-2",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Net worth ≈ $1,900 − $600 = $1,300, but only $120 is spendable now — and these are estimates with a range, not exact truths.",
            "explanation": "Net worth ≈ $1,900 − $600 = $1,300, but only $120 is spendable now — and these are estimates with a range, not exact truths.",
            "logText": "Trust the numbers as exact and plan tightly;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Walk through it with a mentor, noting the range around each estimate",
        "description": "SC*.",
        "outcomes": [
          {
            "id": "outcome-3",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 2
              }
            ],
            "feedback": "Net worth ≈ $1,900 − $600 = $1,300, but only $120 is spendable now — and these are estimates with a range, not exact truths.",
            "explanation": "Net worth ≈ $1,900 − $600 = $1,300, but only $120 is spendable now — and these are estimates with a range, not exact truths.",
            "logText": "Walk through it with a mentor, noting the range around each estimate"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does an 'estimate' tag remind you to do before trusting a number?",
    "sourceNote": "Context Batch 4 compiled original scenario.",
    "randomized": false,
    "tradeoffNote": "A strong-looking net worth can still be cash-tight, and even that figure is an estimate to read with care."
  }
];
