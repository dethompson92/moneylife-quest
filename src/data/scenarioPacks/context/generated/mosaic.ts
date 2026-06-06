import type { ScenarioEvent } from "../../../../types/game";

export const mosaicContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-mosaic-ai-resume-privacy",
    "title": "The Resume Helper",
    "prompt": "A future AI resume helper can improve your wording. It asks you to paste personal contact details and job history.",
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
        "label": "Paste everything",
        "description": "resume improves, privacy risk rises.",
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
            "feedback": "A useful tool can still ask for too much.",
            "explanation": "A useful tool can still ask for too much.",
            "logText": "The Resume Helper: Paste everything"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Remove personal details before using it",
        "description": "resume improves, safety protected.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "trustSafety",
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "You gave the tool the task, not extra personal data.",
            "explanation": "You gave the tool the task, not extra personal data.",
            "logText": "The Resume Helper: Remove personal details before using it"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to review instead",
        "description": "opportunity up, time cost.",
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
            "feedback": "Human feedback can be slower but more context-aware.",
            "explanation": "Human feedback can be slower but more context-aware.",
            "logText": "The Resume Helper: Ask a mentor to review instead"
          }
        ]
      }
    ],
    "reflectionPrompt": "What information was not needed?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Tools can help opportunity, but safer input choices matter."
  },
  {
    "id": "ctx-mosaic-aid-offer-color-code",
    "title": "Color-Code the Aid Offer",
    "prompt": "A fictional training program sends an aid offer: $900 grant, $600 scholarship, $1,200 loan, and $400 work-study estimate.",
    "topics": [
      "life-after-high-school",
      "money-values",
      "credit",
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
        "label": "Color-code free, earned, and borrowed money",
        "description": "loan risk clearer.",
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
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Grant + scholarship = $1,500 that usually does not need repayment if rules are met.",
            "explanation": "Grant + scholarship = $1,500 that usually does not need repayment if rules are met.",
            "logText": "Color-Code the Aid Offer: Color-code free, earned, and borrowed money"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Treat the full $3,100 as free aid",
        "description": "short-term optimism, future debt surprise.",
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
            "feedback": "Loans help pay now, but repayment comes later.",
            "explanation": "Loans help pay now, but repayment comes later.",
            "logText": "Color-Code the Aid Offer: Treat the full $3,100 as free aid"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a school counselor/mentor to review it",
        "description": "opportunity up, safety up.",
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
            "feedback": "A second reader can catch expensive misunderstandings.",
            "explanation": "A second reader can catch expensive misunderstandings.",
            "logText": "Color-Code the Aid Offer: Ask a school counselor/mentor to review it"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which line creates future debt?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Aid can be helpful and still include debt."
  },
  {
    "id": "ctx-mosaic-apprenticeship-tool-deposit",
    "title": "The Tool Deposit",
    "prompt": "A fictional apprenticeship lends a starter tool kit with a $58 refundable deposit. If tools are damaged or missing, part of the deposit may not come back.",
    "topics": [
      "investing",
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
        "label": "Pay deposit and track every tool",
        "description": "opportunity unlocked, deposit protected.",
        "requirements": [
          {
            "type": "minCash",
            "value": 58
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
            "feedback": "A refundable deposit is still cash you cannot use right now.",
            "explanation": "A refundable deposit is still cash you cannot use right now.",
            "logText": "The Tool Deposit: Pay deposit and track every tool"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy your own starter tools for $135",
        "description": "asset gained, cash down.",
        "requirements": [
          {
            "type": "minCash",
            "value": 135
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
            "feedback": "Owning tools can build value if you use them often.",
            "explanation": "Owning tools can build value if you use them often.",
            "logText": "The Tool Deposit: Buy your own starter tools for $135"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait for a tool-library slot",
        "description": "delay, lower cash pressure.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Waiting can protect cash but may delay training.",
            "explanation": "Waiting can protect cash but may delay training.",
            "logText": "The Tool Deposit: Wait for a tool-library slot"
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
            "logText": "The Tool Deposit: Wait for a tool-library slot met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How would you track the kit?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Deposits, ownership, and waiting each protect different things."
  },
  {
    "id": "ctx-mosaic-bag-insurance-deductible",
    "title": "The Backpack Deductible",
    "prompt": "A future renter-style policy covers items in your bag after a $100 deductible. Your damaged items are worth $165.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "File a claim",
        "description": "possible $65 covered after deductible, paperwork time.",
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
            "feedback": "$165 − $100 deductible = $65 possible help.",
            "explanation": "$165 − $100 deductible = $65 possible help.",
            "logText": "The Backpack Deductible: File a claim"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay out of pocket",
        "description": "savings down, no claim process.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 165
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
            "feedback": "Self-paying can be simpler for smaller losses.",
            "explanation": "Self-paying can be simpler for smaller losses.",
            "logText": "The Backpack Deductible: Pay out of pocket"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to compare claim vs. self-pay",
        "description": "moneyKnowledge up, safety up.",
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
              }
            ],
            "feedback": "A second reader can help with insurance math.",
            "explanation": "A second reader can help with insurance math.",
            "logText": "The Backpack Deductible: Ask mentor to compare claim vs. self-pay"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was the claim worth the effort?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Insurance is useful, but not every covered event is worth claiming."
  },
  {
    "id": "ctx-mosaic-benefits-or-wage",
    "title": "More Pay or Better Benefits?",
    "prompt": "Future Job A pays $16/hour with no benefits. Job B pays $15/hour and includes a transit benefit worth $40/month. Both offer 40 hours/month.",
    "topics": [
      "career",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Choose Job A",
        "description": "higher wage, fewer extras.",
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
            "feedback": "Job A pays $1 more × 40 hours = $40 extra monthly.",
            "explanation": "Job A pays $1 more × 40 hours = $40 extra monthly.",
            "logText": "More Pay or Better Benefits?: Choose Job A"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose Job B",
        "description": "lower wage, transit covered.",
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
            "feedback": "The $40 transit benefit can equal the wage difference.",
            "explanation": "The $40 transit benefit can equal the wage difference.",
            "logText": "More Pay or Better Benefits?: Choose Job B"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare full compensation first",
        "description": "better decision quality.",
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
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Compensation includes pay and useful benefits.",
            "explanation": "Compensation includes pay and useful benefits.",
            "logText": "More Pay or Better Benefits?: Compare full compensation first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What benefit did it lack?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher pay is not always higher total value."
  },
  {
    "id": "ctx-mosaic-bike-lock-value",
    "title": "The Lock Costs Almost as Much",
    "prompt": "Your bike is worth about $90. A basic lock costs $12; a stronger lock costs $32.",
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
        "description": "some protection, cash down.",
        "requirements": [
          {
            "type": "minCash",
            "value": 12
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
              }
            ],
            "feedback": "A low-cost lock is better than none.",
            "explanation": "A low-cost lock is better than none.",
            "logText": "The Lock Costs Almost as Much: Buy the basic lock"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the stronger lock",
        "description": "better protection, cash down more.",
        "requirements": [
          {
            "type": "minCash",
            "value": 32
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
              }
            ],
            "feedback": "You spent about 36% of the bike’s value to reduce theft risk.",
            "explanation": "You spent about 36% of the bike’s value to reduce theft risk.",
            "logText": "The Lock Costs Almost as Much: Buy the stronger lock"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the lock and park carefully",
        "description": "cash saved, randomized loss risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -12
              }
            ],
            "feedback": "Care helps, but it is not the same as protection.",
            "explanation": "Care helps, but it is not the same as protection.",
            "logText": "The Lock Costs Almost as Much: Skip the lock and park carefully"
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
            "logText": "The Lock Costs Almost as Much: Skip the lock and park carefully met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What risk remains?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Protection costs money now to reduce a possible larger cost later."
  },
  {
    "id": "ctx-mosaic-cash-tip-ledger",
    "title": "The Tip Jar Ledger",
    "prompt": "A school-safe weekend gig pays hourly wages plus small tips. You can track tips daily or guess later.",
    "topics": [
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Track tips daily in a simple ledger",
        "description": "records strong, time cost small.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Small records prevent big confusion later.",
            "explanation": "Small records prevent big confusion later.",
            "logText": "The Tip Jar Ledger: Track tips daily in a simple ledger"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess the weekly total",
        "description": "faster, accuracy lower.",
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
            "feedback": "Guessing saves time now but weakens future planning.",
            "explanation": "Guessing saves time now but weakens future planning.",
            "logText": "The Tip Jar Ledger: Guess the weekly total"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor how to separate income and spending money",
        "description": "moneyKnowledge up, opportunity up.",
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
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Separating money makes records cleaner.",
            "explanation": "Separating money makes records cleaner.",
            "logText": "The Tip Jar Ledger: Ask mentor how to separate income and spending money"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the ledger prove?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Records take time, but they protect future decisions."
  },
  {
    "id": "ctx-mosaic-cashback-overspend",
    "title": "Two Percent Back",
    "prompt": "A card gives 2% back. You are considering a $90 purchase because “you get rewards.",
    "topics": [
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
        "label": "Buy because of rewards",
        "description": "$1.80 reward, $90 spending.",
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
            "feedback": "2% of $90 is $1.80; rewards do not erase the purchase.",
            "explanation": "2% of $90 is $1.80; rewards do not erase the purchase.",
            "logText": "Two Percent Back: Buy because of rewards"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy only if it was already planned",
        "description": "rewards without extra spending.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Rewards work best when they do not change the decision.",
            "explanation": "Rewards work best when they do not change the decision.",
            "logText": "Two Percent Back: Buy only if it was already planned"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip and save the $90",
        "description": "cash protected, no reward.",
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
            "feedback": "No reward can still be the better math.",
            "explanation": "No reward can still be the better math.",
            "logText": "Two Percent Back: Skip and save the $90"
          }
        ]
      }
    ],
    "reflectionPrompt": "What was the real cost?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Rewards are not bad, but they are tiny compared with the spending that earns them."
  },
  {
    "id": "ctx-mosaic-cert-exam-retake",
    "title": "The Retake Decision",
    "prompt": "A certification exam costs $58. Passing could unlock a better-paying summer role, but failing means paying again or waiting.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Take the exam now",
        "description": "opportunity chance, randomized pass.",
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
                "amount": -58
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "You took a calculated risk for a future route.",
            "explanation": "You took a calculated risk for a future route.",
            "logText": "The Retake Decision: Take the exam now"
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
            "logText": "The Retake Decision: Take the exam now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend two weeks preparing first",
        "description": "delay, pass odds up.",
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
                "amount": -58
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Preparation can change the probability, not guarantee the result.",
            "explanation": "Preparation can change the probability, not guarantee the result.",
            "logText": "The Retake Decision: Spend two weeks preparing first"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the credential and seek a no-cert role",
        "description": "faster job search, lower unlocks.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -58
              }
            ],
            "feedback": "Skipping the fee can be smart if another route fits.",
            "explanation": "Skipping the fee can be smart if another route fits.",
            "logText": "The Retake Decision: Skip the credential and seek a no-cert role"
          }
        ]
      }
    ],
    "reflectionPrompt": "What preparation would improve the odds?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Paying for a credential can be an investment, but risk and preparation matter."
  },
  {
    "id": "ctx-mosaic-certificate-calendar",
    "title": "The Certificate Expires",
    "prompt": "A fictional safety certificate helped you qualify for a youth work opportunity. It expires soon. Renewal costs $18 and takes one evening.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Renew now",
        "description": "credential stays active, cash down.",
        "requirements": [
          {
            "type": "minCash",
            "value": 18
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Small upkeep protected a future option.",
            "explanation": "Small upkeep protected a future option.",
            "logText": "The Certificate Expires: Renew now"
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
            "logText": "The Certificate Expires: Renew now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Let it expire and renew only if needed",
        "description": "cash saved now, future lock possible.",
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
            "feedback": "Waiting protects cash but can close fast-moving opportunities.",
            "explanation": "Waiting protects cash but can close fast-moving opportunities.",
            "logText": "The Certificate Expires: Let it expire and renew only if needed"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor about free renewal resources",
        "description": "possible cost reduction, opportunity up.",
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
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Asking can uncover resources the game did not show first.",
            "explanation": "Asking can uncover resources the game did not show first.",
            "logText": "The Certificate Expires: Ask a mentor about free renewal resources"
          }
        ]
      }
    ],
    "reflectionPrompt": "What opportunity stayed open?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Renewing is not automatically right; it depends on whether the credential is useful soon."
  },
  {
    "id": "ctx-mosaic-checking-alert-nickname",
    "title": "Name the Alert",
    "prompt": "Your fictional checking account can send alerts. You can name an alert “Low Balance,” “Pause Before Spending,” or skip alerts.",
    "topics": [
      "banking",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Set a low-balance alert at $25",
        "description": "fee risk down, discipline up.",
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
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "An alert turns a hidden balance into a visible warning.",
            "explanation": "An alert turns a hidden balance into a visible warning.",
            "logText": "Name the Alert: Set a low-balance alert at $25"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Set a weekly balance check reminder",
        "description": "routine grows, fewer surprises.",
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
                "amount": 4
              }
            ],
            "feedback": "A weekly habit catches slow leaks.",
            "explanation": "A weekly habit catches slow leaks.",
            "logText": "Name the Alert: Set a weekly balance check reminder"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip alerts",
        "description": "no interruption, higher overdraft risk.",
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
            "feedback": "No alerts means fewer notifications but more self-checking.",
            "explanation": "No alerts means fewer notifications but more self-checking.",
            "logText": "Name the Alert: Skip alerts"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why pick $25 instead of $0?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Alerts can be annoying, but they prevent invisible mistakes."
  },
  {
    "id": "ctx-mosaic-club-hoodie-preorder",
    "title": "The Preorder Promise",
    "prompt": "Your club wants hoodies. Each costs $19 to make, and the club plans to charge $26. Unsold hoodies cannot be returned.",
    "topics": [
      "budgeting",
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
        "label": "Order 30 now",
        "description": "high profit chance, high leftover risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -19
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Profit per hoodie is $7, but leftovers can erase profit.",
            "explanation": "Profit per hoodie is $7, but leftovers can erase profit.",
            "logText": "The Preorder Promise: Order 30 now"
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
            "logText": "The Preorder Promise: Order 30 now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Collect preorders first",
        "description": "risk down, time up.",
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
                "amount": -19
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
              }
            ],
            "feedback": "Preorders turn guesses into evidence.",
            "explanation": "Preorders turn guesses into evidence.",
            "logText": "The Preorder Promise: Collect preorders first"
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
            "logText": "The Preorder Promise: Collect preorders first met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Order a smaller batch of 12",
        "description": "lower risk, possible missed sales.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -19
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
            "feedback": "A small batch protects cash but may limit opportunity.",
            "explanation": "A small batch protects cash but may limit opportunity.",
            "logText": "The Preorder Promise: Order a smaller batch of 12"
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
            "logText": "The Preorder Promise: Order a smaller batch of 12 met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What happens if only 18 sell?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Bigger orders can earn more but create leftover risk."
  },
  {
    "id": "ctx-mosaic-community-college-transfer-map",
    "title": "Two-Year Map, Four-Year Goal",
    "prompt": "A future student can start at community college for lower first-year costs, then transfer. Transfer credits only help if courses match the plan.",
    "topics": [
      "life-after-high-school",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Follow a transfer map carefully",
        "description": "cost lower, credit loss risk down.",
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Planning protects the value of each course.",
            "explanation": "Planning protects the value of each course.",
            "logText": "Two-Year Map, Four-Year Goal: Follow a transfer map carefully"
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
            "logText": "Two-Year Map, Four-Year Goal: Follow a transfer map carefully met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose classes randomly by interest",
        "description": "wellbeing up, credit mismatch risk.",
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
            "feedback": "Interest matters, but mismatched credits can cost time.",
            "explanation": "Interest matters, but mismatched credits can cost time.",
            "logText": "Two-Year Map, Four-Year Goal: Choose classes randomly by interest"
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
            "logText": "Two-Year Map, Four-Year Goal: Choose classes randomly by interest met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask advisor/mentor before registering",
        "description": "opportunity up, planning time.",
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
            "feedback": "A second reader helps protect tuition money.",
            "explanation": "A second reader helps protect tuition money.",
            "logText": "Two-Year Map, Four-Year Goal: Ask advisor/mentor before registering"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does a course need to match?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Lower-cost starts work best when the route is mapped."
  },
  {
    "id": "ctx-mosaic-community-share-box",
    "title": "The Share Box Budget",
    "prompt": "A community share box gives free school supplies and asks people who can contribute to add items later. A pack of pencils costs $3.20.",
    "topics": [
      "budgeting"
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
        "label": "Take what you need now, contribute later",
        "description": "need met, future reminder.",
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
            "feedback": "Community resources can be for real needs, not shame.",
            "explanation": "Community resources can be for real needs, not shame.",
            "logText": "The Share Box Budget: Take what you need now, contribute later"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy your own supplies today",
        "description": "cash down, resource untouched.",
        "requirements": [
          {
            "type": "minCash",
            "value": 3
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
            "feedback": "Paying yourself can be fine when cash is available.",
            "explanation": "Paying yourself can be fine when cash is available.",
            "logText": "The Share Box Budget: Buy your own supplies today"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add one item now and take one item",
        "description": "community trust up, cash down.",
        "requirements": [
          {
            "type": "minCash",
            "value": 3
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Giving and receiving can happen together.",
            "explanation": "Giving and receiving can happen together.",
            "logText": "The Share Box Budget: Add one item now and take one item"
          }
        ]
      }
    ],
    "reflectionPrompt": "How could you contribute later?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Using support is not failure; support systems work best with respect and planning."
  },
  {
    "id": "ctx-mosaic-commute-rain-backup",
    "title": "The Rainy Commute Plan",
    "prompt": "Your future job is reachable by walking in good weather. Rainy days are unpredictable, and missing a shift hurts trust.",
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
        "label": "Save a $12 backup ride fund",
        "description": "cash set aside, attendance risk down.",
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
            "feedback": "A small fund protects reliability.",
            "explanation": "A small fund protects reliability.",
            "logText": "The Rainy Commute Plan: Save a $12 backup ride fund"
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
            "logText": "The Rainy Commute Plan: Save a $12 backup ride fund met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask a support person for emergency backup rules",
        "description": "support trust up if boundaries clear.",
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
            "feedback": "A backup ride works better with notice and limits.",
            "explanation": "A backup ride works better with notice and limits.",
            "logText": "The Rainy Commute Plan: Ask a support person for emergency backup rules"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Risk walking every time",
        "description": "cash saved, randomized late risk.",
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
            "feedback": "Saving money can increase schedule risk.",
            "explanation": "Saving money can increase schedule risk.",
            "logText": "The Rainy Commute Plan: Risk walking every time"
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
            "logText": "The Rainy Commute Plan: Risk walking every time met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the fund protect besides money?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "The cheapest commute can become expensive if it risks income or trust."
  },
  {
    "id": "ctx-mosaic-copay-estimate-choice",
    "title": "The Appointment Estimate",
    "prompt": "A future appointment has a $25 copay. Transportation costs $8, and a missed work shift would reduce pay by $36.",
    "topics": [
      "money-values",
      "career"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Budget only the copay",
        "description": "shortfall risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -8
              }
            ],
            "feedback": "The appointment cost was more than the medical charge.",
            "explanation": "The appointment cost was more than the medical charge.",
            "logText": "The Appointment Estimate: Budget only the copay"
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
            "logText": "The Appointment Estimate: Budget only the copay met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Add copay + transportation + lost pay",
        "description": "realistic total.",
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
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -8
              }
            ],
            "feedback": "$25 + $8 + $36 = $69 total impact.",
            "explanation": "$25 + $8 + $36 = $69 total impact.",
            "logText": "The Appointment Estimate: Add copay + transportation + lost pay"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about appointment time options",
        "description": "possible reduced lost pay.",
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
                "amount": -8
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              },
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
            "feedback": "Changing timing can lower the total cost.",
            "explanation": "Changing timing can lower the total cost.",
            "logText": "The Appointment Estimate: Ask about appointment time options"
          }
        ]
      }
    ],
    "reflectionPrompt": "What cost was outside the bill?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Health decisions involve money, time, and wellbeing, not just a bill."
  },
  {
    "id": "ctx-mosaic-cosigner-risk-talk",
    "title": "The Co-Signer Conversation",
    "prompt": "A future loan offer requires a co-signer. A caregiver or mentor explains that if you do not pay, the co-signer could be responsible.",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Ask someone to co-sign without a plan",
        "description": "trust risk, loan possible.",
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
            "feedback": "A co-signer takes risk with you.",
            "explanation": "A co-signer takes risk with you.",
            "logText": "The Co-Signer Conversation: Ask someone to co-sign without a plan"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Build a repayment plan before asking",
        "description": "trust protected, opportunity up.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A plan shows respect for the other person’s risk.",
            "explanation": "A plan shows respect for the other person’s risk.",
            "logText": "The Co-Signer Conversation: Build a repayment plan before asking"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose a smaller no-co-signer route",
        "description": "slower route, less relationship risk.",
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Smaller can be smarter when it protects trust.",
            "explanation": "Smaller can be smarter when it protects trust.",
            "logText": "The Co-Signer Conversation: Choose a smaller no-co-signer route"
          }
        ]
      }
    ],
    "reflectionPrompt": "What was missing from the ask?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Support can unlock opportunity, but it should not hide risk."
  },
  {
    "id": "ctx-mosaic-coupon-app-permissions",
    "title": "The Coupon App Asks for Contacts",
    "prompt": "A coupon app offers $5 off a purchase but asks for access to your contacts and location. The discount is real in the game, but the permission request feels bigger than the coupon.",
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
        "label": "Accept all permissions for the $5 discount",
        "description": "cash saved, safety drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "A discount can still cost privacy.",
            "explanation": "A discount can still cost privacy.",
            "logText": "The Coupon App Asks for Contacts: Accept all permissions for the $5 discount"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline permissions and skip the coupon",
        "description": "cash unchanged, safety up.",
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
            "feedback": "Skipping a deal can be a safety choice.",
            "explanation": "Skipping a deal can be a safety choice.",
            "logText": "The Coupon App Asks for Contacts: Decline permissions and skip the coupon"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Change app settings to allow only what is needed",
        "description": "discount possible, privacy risk lower.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "trustSafety",
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
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "Adjusting settings can protect both money and information.",
            "explanation": "Adjusting settings can protect both money and information.",
            "logText": "The Coupon App Asks for Contacts: Change app settings to allow only what is needed"
          }
        ]
      }
    ],
    "reflectionPrompt": "What information was worth more than $5?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Not every discount is worth the information it asks for."
  },
  {
    "id": "ctx-mosaic-delivery-fee-stack",
    "title": "The Delivery Total",
    "prompt": "A $14 food order becomes $14 + $3 delivery + $2 service fee + 8% tax on the food. A pickup option costs time but avoids delivery fees.",
    "topics": [
      "taxes"
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
        "label": "Use delivery",
        "description": "convenient, higher total.",
        "requirements": [
          {
            "type": "minCash",
            "value": 20
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -8
              }
            ],
            "feedback": "Tax is $1.12, so the total is $20.12 before any tip.",
            "explanation": "Tax is $1.12, so the total is $20.12 before any tip.",
            "logText": "The Delivery Total: Use delivery"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pick up the order",
        "description": "cash saved, time used.",
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
                "amount": -8
              }
            ],
            "feedback": "You traded time for lower fees.",
            "explanation": "You traded time for lower fees.",
            "logText": "The Delivery Total: Pick up the order"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose a no-fee meal at home",
        "description": "cash protected, less convenience.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -8
              }
            ],
            "feedback": "Avoiding a fee stack can be a strong choice.",
            "explanation": "Avoiding a fee stack can be a strong choice.",
            "logText": "The Delivery Total: Choose a no-fee meal at home"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which fee was easiest to miss?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Delivery can be reasonable when time or access matters; the lesson is seeing the full total."
  },
  {
    "id": "ctx-mosaic-dental-sinking-fund",
    "title": "The Future Dental Fund",
    "prompt": "A future dental cost is estimated at $180 in six months. You can save monthly, wait, or use credit later.",
    "topics": [
      "investing",
      "money-values",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Save $30 per month",
        "description": "goal funded, spending cash lower.",
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
                "type": "cash",
                "amount": -180
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "$180 ÷ 6 = $30 per month.",
            "explanation": "$180 ÷ 6 = $30 per month.",
            "logText": "The Future Dental Fund: Save $30 per month"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait and decide later",
        "description": "cash flexible now, future pressure.",
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
            "feedback": "Waiting keeps options open but shortens the runway.",
            "explanation": "Waiting keeps options open but shortens the runway.",
            "logText": "The Future Dental Fund: Wait and decide later"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Plan to use credit later",
        "description": "cash now, debt risk later.",
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
            "feedback": "Credit can cover timing but may add interest.",
            "explanation": "Credit can cover timing but may add interest.",
            "logText": "The Future Dental Fund: Plan to use credit later"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why was monthly easier than one big payment?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Saving ahead is steady, but flexibility and uncertainty can justify other routes."
  },
  {
    "id": "ctx-mosaic-e-scooter-loan-term",
    "title": "The Small Wheels, Long Loan",
    "prompt": "A commuter e-scooter costs $480. One plan is $90/month for 6 months. Another is $55/month for 10 months.",
    "topics": [
      "credit",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Choose 6 months",
        "description": "higher monthly payment, lower total.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -480
              }
            ],
            "feedback": "$90 × 6 = $540 total.",
            "explanation": "$90 × 6 = $540 total.",
            "logText": "The Small Wheels, Long Loan: Choose 6 months"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose 10 months",
        "description": "lower monthly payment, higher total.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -480
              }
            ],
            "feedback": "$55 × 10 = $550 total; lower payment is not always cheaper.",
            "explanation": "$55 × 10 = $550 total; lower payment is not always cheaper.",
            "logText": "The Small Wheels, Long Loan: Choose 10 months"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and save $80 first",
        "description": "delay, lower borrowing need.",
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
                "amount": -480
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "Saving first can shrink the loan.",
            "explanation": "Saving first can shrink the loan.",
            "logText": "The Small Wheels, Long Loan: Wait and save $80 first"
          }
        ]
      }
    ],
    "reflectionPrompt": "Can your month handle the payment?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A lower monthly payment can fit cash flow while costing more overall."
  },
  {
    "id": "ctx-mosaic-earbud-case-choice",
    "title": "The Missing Earbud Case",
    "prompt": "Your wireless earbud case is missing. A replacement case costs $34, a corded backup pair costs $11, and waiting a week might turn up the case.",
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
        "label": "Buy the $34 replacement case",
        "description": "asset restored, cash drops.",
        "requirements": [
          {
            "type": "minCash",
            "value": 34
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -34
              }
            ],
            "feedback": "You solved the problem fast, but speed cost more.",
            "explanation": "You solved the problem fast, but speed cost more.",
            "logText": "The Missing Earbud Case: Buy the $34 replacement case"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $11 corded backup",
        "description": "cash drops less, convenience drops.",
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
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "A cheaper backup can protect your routine while you search.",
            "explanation": "A cheaper backup can protect your routine while you search.",
            "logText": "The Missing Earbud Case: Buy the $11 corded backup"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and search carefully",
        "description": "possible no cost, randomized find chance.",
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
                "type": "cash",
                "amount": -34
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Waiting can save money, but only if the delay is manageable.",
            "explanation": "Waiting can save money, but only if the delay is manageable.",
            "logText": "The Missing Earbud Case: Wait and search carefully"
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
            "logText": "The Missing Earbud Case: Wait and search carefully met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying for speed worth it?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Fast replacement protects convenience; waiting protects cash but may disrupt routines."
  },
  {
    "id": "ctx-mosaic-emergency-supply-kit",
    "title": "The $26 Supply Kit",
    "prompt": "A simple emergency supply kit costs $26. It does not make money, but it can reduce stress and surprise purchases later.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 12,
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
        "label": "Buy the kit now",
        "description": "cash down, safety/wellbeing up.",
        "requirements": [
          {
            "type": "minCash",
            "value": 26
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -26
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Some assets protect life and planning without growing in value.",
            "explanation": "Some assets protect life and planning without growing in value.",
            "logText": "The $26 Supply Kit: Buy the kit now"
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
            "logText": "The $26 Supply Kit: Buy the kit now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Build it slowly from items you already have",
        "description": "slower, cheaper.",
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
                "amount": -26
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "Using what you have can reduce cost.",
            "explanation": "Using what you have can reduce cost.",
            "logText": "The $26 Supply Kit: Build it slowly from items you already have"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip for now",
        "description": "cash kept, preparedness lower.",
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
                "amount": -3
              }
            ],
            "feedback": "Skipping can be reasonable if cash is tight.",
            "explanation": "Skipping can be reasonable if cash is tight.",
            "logText": "The $26 Supply Kit: Skip for now"
          }
        ]
      }
    ],
    "reflectionPrompt": "What future cost could it prevent?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Preparedness costs money before you know whether you will need it."
  },
  {
    "id": "ctx-mosaic-family-plan-fair-share",
    "title": "The Shared Plan Math",
    "prompt": "A fictional family media plan costs $18 per month for four profiles. One person uses it daily; you use it twice a month.",
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
        "label": "Split equally: $4.50 each",
        "description": "simple, maybe not usage-fair.",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Equal splits are easy to calculate and explain.",
            "explanation": "Equal splits are easy to calculate and explain.",
            "logText": "The Shared Plan Math: Split equally: $4.50 each"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split by usage",
        "description": "fairer, more complex.",
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
                "type": "cash",
                "amount": -18
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Usage-based splits can feel fair but need agreement.",
            "explanation": "Usage-based splits can feel fair but need agreement.",
            "logText": "The Shared Plan Math: Split by usage"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Suggest rotating who pays for a smaller plan",
        "description": "cost down, negotiation needed.",
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
                "amount": -18
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Changing the plan can solve the split problem.",
            "explanation": "Changing the plan can solve the split problem.",
            "logText": "The Shared Plan Math: Suggest rotating who pays for a smaller plan"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is equal fair?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fair can mean simple, equal, usage-based, or negotiated."
  },
  {
    "id": "ctx-mosaic-free-shipping-threshold",
    "title": "Add $11 for Free Shipping?",
    "prompt": "Your cart is $39. Shipping is $6 unless you spend $50. A useful item you actually need costs $11.",
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
        "label": "Add the useful $11 item",
        "description": "pay $50 total, get needed item.",
        "requirements": [
          {
            "type": "minCash",
            "value": 50
          }
        ],
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
            "feedback": "$39 + $11 = $50, and shipping drops to $0.",
            "explanation": "$39 + $11 = $50, and shipping drops to $0.",
            "logText": "Add $11 for Free Shipping?: Add the useful $11 item"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $45 with shipping",
        "description": "lower cash out today, no extra item.",
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
                "type": "cash",
                "amount": -45
              }
            ],
            "feedback": "$39 + $6 = $45, which is less than $50.",
            "explanation": "$39 + $6 = $45, which is less than $50.",
            "logText": "Add $11 for Free Shipping?: Pay $45 with shipping"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait until you need more items",
        "description": "delay, possible better cart.",
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
                "type": "cash",
                "amount": -39
              }
            ],
            "feedback": "Waiting can make a threshold useful instead of forced.",
            "explanation": "Waiting can make a threshold useful instead of forced.",
            "logText": "Add $11 for Free Shipping?: Wait until you need more items"
          }
        ]
      }
    ],
    "reflectionPrompt": "Did you need the add-on?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Free shipping can still lead to spending more."
  },
  {
    "id": "ctx-mosaic-fund-fee-difference",
    "title": "The Tiny Fund Fee",
    "prompt": "Two diversified fund placeholders have similar risk. Fund A charges 0.10% per year. Fund B charges 0.80% per year.",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Choose Fund A",
        "description": "lower fee drag.",
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
            "feedback": "On $1,000, 0.10% is $1 per year.",
            "explanation": "On $1,000, 0.10% is $1 per year.",
            "logText": "The Tiny Fund Fee: Choose Fund A"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose Fund B because the page looks cooler",
        "description": "higher fee, possible confusion.",
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
            "feedback": "Design is not the same as value.",
            "explanation": "Design is not the same as value.",
            "logText": "The Tiny Fund Fee: Choose Fund B because the page looks cooler"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to compare fee and risk",
        "description": "moneyKnowledge up.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A second reader can help with small percentages.",
            "explanation": "A second reader can help with small percentages.",
            "logText": "The Tiny Fund Fee: Ask mentor to compare fee and risk"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do tiny percents matter over time?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Lower fees are usually helpful, but risk, time horizon, and fit still matter."
  },
  {
    "id": "ctx-mosaic-gap-year-burn-rate",
    "title": "The Savings Burn Rate",
    "prompt": "A future gap year plan has $1,450 saved. Basic monthly costs are estimated at $290.",
    "topics": [
      "saving",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Divide savings by monthly cost",
        "description": "time horizon clear.",
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
                "type": "cash",
                "amount": -290
              }
            ],
            "feedback": "$1,450 ÷ $290 = 5 months of costs.",
            "explanation": "$1,450 ÷ $290 = 5 months of costs.",
            "logText": "The Savings Burn Rate: Divide savings by monthly cost"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Start without a monthly plan",
        "description": "freedom up, cash risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -290
              }
            ],
            "feedback": "Freedom feels better with a runway.",
            "explanation": "Freedom feels better with a runway.",
            "logText": "The Savings Burn Rate: Start without a monthly plan"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add part-time income before starting",
        "description": "delay, longer runway.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -290
              }
            ],
            "feedback": "Income slows how fast savings burns down.",
            "explanation": "Income slows how fast savings burns down.",
            "logText": "The Savings Burn Rate: Add part-time income before starting"
          }
        ]
      }
    ],
    "reflectionPrompt": "What happens in month six?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A gap year can be valuable, but time needs a money runway."
  },
  {
    "id": "ctx-mosaic-holiday-shift-differential",
    "title": "The Higher-Pay Shift",
    "prompt": "A future job offers one special shift at 1.5× pay. Your normal pay is $12/hour, and the shift is 4 hours.",
    "topics": [
      "budgeting",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Take the shift",
        "description": "$72 gross, wellbeing may drop.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -12
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "$12 × 1.5 = $18/hour; $18 × 4 = $72 gross.",
            "explanation": "$12 × 1.5 = $18/hour; $18 × 4 = $72 gross.",
            "logText": "The Higher-Pay Shift: Take the shift"
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
            "logText": "The Higher-Pay Shift: Take the shift met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline to protect rest or family time",
        "description": "wellbeing up, income missed.",
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
            "feedback": "Rest can be a real need, not a failure to earn.",
            "explanation": "Rest can be a real need, not a failure to earn.",
            "logText": "The Higher-Pay Shift: Decline to protect rest or family time"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask to swap for a shorter high-pay block",
        "description": "possible compromise, randomized.",
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
                "amount": -12
              }
            ],
            "feedback": "Negotiating can create a middle route.",
            "explanation": "Negotiating can create a middle route.",
            "logText": "The Higher-Pay Shift: Ask to swap for a shorter high-pay block"
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
            "logText": "The Higher-Pay Shift: Ask to swap for a shorter high-pay block met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the extra pay cost in energy?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Higher pay is attractive, but wellbeing and relationships still matter."
  },
  {
    "id": "ctx-mosaic-hotspot-homework-backup",
    "title": "The Backup Connection",
    "prompt": "A future online assignment is due tonight in the game, and the home internet is unreliable this week. You can plan around it without sharing any real personal information.",
    "topics": [
      "career",
      "money-values"
    ],
    "ageRange": {
      "min": 12,
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
        "label": "Use a library or school resource window",
        "description": "opportunity up, time pressure up.",
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
            "feedback": "A free resource still has hours and rules.",
            "explanation": "A free resource still has hours and rules.",
            "logText": "The Backup Connection: Use a library or school resource window"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask a caregiver or mentor to help plan a backup",
        "description": "support trust up, deadline risk down.",
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
            "feedback": "Support works best when you ask before the emergency.",
            "explanation": "Support works best when you ask before the emergency.",
            "logText": "The Backup Connection: Ask a caregiver or mentor to help plan a backup"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Backup Connection: Ask a caregiver or mentor to help plan a backup met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and hope the connection works",
        "description": "possible success, randomized deadline risk.",
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
            "feedback": "Hoping is a route, but not a strong backup.",
            "explanation": "Hoping is a route, but not a strong backup.",
            "logText": "The Backup Connection: Wait and hope the connection works"
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
            "logText": "The Backup Connection: Wait and hope the connection works met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What time window did you have to plan around?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Free options can be excellent, but they still require planning."
  },
  {
    "id": "ctx-mosaic-identity-freeze-steps",
    "title": "Freeze, File, Follow Up",
    "prompt": "You notice a fictional account opened in your name. The game offers recovery steps, not panic.",
    "topics": [
      "scams",
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
        "label": "Place a credit freeze and document the issue",
        "description": "damage risk down, paperwork time.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "trustSafety",
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "A freeze makes it harder for new accounts to open.",
            "explanation": "A freeze makes it harder for new accounts to open.",
            "logText": "Freeze, File, Follow Up: Place a credit freeze and document the issue"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore because it feels stressful",
        "description": "wellbeing protected now, risk grows.",
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
            "feedback": "Avoiding stress can make the problem harder later.",
            "explanation": "Avoiding stress can make the problem harder later.",
            "logText": "Freeze, File, Follow Up: Ignore because it feels stressful"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a caregiver/mentor to go through steps with you",
        "description": "support up, safety up.",
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
            "feedback": "Support can turn a scary task into a checklist.",
            "explanation": "Support can turn a scary task into a checklist.",
            "logText": "Freeze, File, Follow Up: Ask a caregiver/mentor to go through steps with you"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did documentation prove?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Recovery takes effort, but fast steps can reduce future harm."
  },
  {
    "id": "ctx-mosaic-impostor-club-fee",
    "title": "The Club Fee Message",
    "prompt": "A message says a club fee is due today through a new payment handle. The sender uses a familiar title but not the normal channel.",
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
        "label": "Pay immediately",
        "description": "quick, randomized scam loss.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A familiar title is not proof.",
            "explanation": "A familiar title is not proof.",
            "logText": "The Club Fee Message: Pay immediately"
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
            "logText": "The Club Fee Message: Pay immediately met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Confirm with the club’s normal adult contact",
        "description": "safety up.",
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
            "feedback": "Using the normal channel catches impostors.",
            "explanation": "Using the normal channel catches impostors.",
            "logText": "The Club Fee Message: Confirm with the club’s normal adult contact"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a friend if they got it too",
        "description": "social check, not complete proof.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Friends can notice patterns, but official confirmation is stronger.",
            "explanation": "Friends can notice patterns, but official confirmation is stronger.",
            "logText": "The Club Fee Message: Ask a friend if they got it too"
          }
        ]
      }
    ],
    "reflectionPrompt": "What channel changed?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Social proof helps, but official confirmation is safer for money requests."
  },
  {
    "id": "ctx-mosaic-inflation-lunch-budget",
    "title": "Same Lunch, New Price",
    "prompt": "A weekly lunch budget was $18. Prices rise and the same meals now cost $20.70.",
    "topics": [
      "budgeting"
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
        "label": "Calculate the percent increase",
        "description": "understanding up.",
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
                "type": "cash",
                "amount": -21
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Increase is $2.70; $2.70 ÷ $18 = 15%.",
            "explanation": "Increase is $2.70; $2.70 ÷ $18 = 15%.",
            "logText": "Same Lunch, New Price: Calculate the percent increase"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Add $2.70 to the weekly budget",
        "description": "same meals, less money elsewhere.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -21
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Keeping the same routine moves money from another category.",
            "explanation": "Keeping the same routine moves money from another category.",
            "logText": "Same Lunch, New Price: Add $2.70 to the weekly budget"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Change one meal to stay near $18",
        "description": "budget steady, preference tradeoff.",
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
                "amount": -21
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Adjusting the basket can control cost.",
            "explanation": "Adjusting the basket can control cost.",
            "logText": "Same Lunch, New Price: Change one meal to stay near $18"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did percent explain the change?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Rising prices can be handled by more money, changed habits, or both."
  },
  {
    "id": "ctx-mosaic-inflation-price-update",
    "title": "Raise Your Price Kindly",
    "prompt": "Your material cost rises from $2.40 to $2.90 per item. You sell each item for $5.00 and want to keep the project worthwhile.",
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
        "label": "Keep price at $5.00",
        "description": "customer-friendly, profit lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 5
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Profit before was $2.60; now it is $2.10.",
            "explanation": "Profit before was $2.60; now it is $2.10.",
            "logText": "Raise Your Price Kindly: Keep price at $5.00"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Raise price to $5.50 with explanation",
        "description": "profit steadier, demand risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -2
              }
            ],
            "feedback": "A clear explanation can make a price change feel fair.",
            "explanation": "A clear explanation can make a price change feel fair.",
            "logText": "Raise Your Price Kindly: Raise price to $5.50 with explanation"
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
            "logText": "Raise Your Price Kindly: Raise price to $5.50 with explanation met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Reduce packaging cost instead",
        "description": "profit protected, quality risk.",
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
                "type": "cash",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Cutting costs is another route, but quality matters.",
            "explanation": "Cutting costs is another route, but quality matters.",
            "logText": "Raise Your Price Kindly: Reduce packaging cost instead"
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
            "logText": "Raise Your Price Kindly: Reduce packaging cost instead met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did cost change the business?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Raising price, absorbing cost, or changing design can each be fair depending on value."
  },
  {
    "id": "ctx-mosaic-interview-outfit-borrow",
    "title": "Borrow, Buy, or Adapt?",
    "prompt": "A future interview or presentation asks for neat, simple clothing. Buying an outfit costs $64, borrowing is possible, and adapting what you own takes time.",
    "topics": [
      "credit",
      "money-values",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the outfit",
        "description": "asset gained, cash down.",
        "requirements": [
          {
            "type": "minCash",
            "value": 64
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -64
              }
            ],
            "feedback": "Buying creates future usefulness if you will wear it again.",
            "explanation": "Buying creates future usefulness if you will wear it again.",
            "logText": "Borrow, Buy, or Adapt?: Buy the outfit"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow from support circle",
        "description": "cash saved, care responsibility.",
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
                "amount": -64
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
            "feedback": "Borrowing protects cash and adds responsibility.",
            "explanation": "Borrowing protects cash and adds responsibility.",
            "logText": "Borrow, Buy, or Adapt?: Borrow from support circle"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Adapt what you own",
        "description": "time used, cash saved.",
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
                "type": "cash",
                "amount": -64
              }
            ],
            "feedback": "Preparation can substitute for spending.",
            "explanation": "Preparation can substitute for spending.",
            "logText": "Borrow, Buy, or Adapt?: Adapt what you own"
          }
        ]
      }
    ],
    "reflectionPrompt": "How many future uses make it worth it?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Looking prepared does not always require buying new."
  },
  {
    "id": "ctx-mosaic-leftover-inventory-choice",
    "title": "The Unsold Stickers",
    "prompt": "You have 40 unsold stickers that cost $0.30 each to make. You hoped to sell them for $1.00, but demand slowed.",
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
        "label": "Mark down to $0.60",
        "description": "recover some cash, profit smaller.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 0
              }
            ],
            "feedback": "At $0.60, you earn $0.30 over cost per sticker.",
            "explanation": "At $0.60, you earn $0.30 over cost per sticker.",
            "logText": "The Unsold Stickers: Mark down to $0.60"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hold price at $1.00",
        "description": "possible higher profit, randomized low sales.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 0
              }
            ],
            "feedback": "Waiting can protect price or leave inventory stuck.",
            "explanation": "Waiting can protect price or leave inventory stuck.",
            "logText": "The Unsold Stickers: Hold price at $1.00"
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
            "logText": "The Unsold Stickers: Hold price at $1.00 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Bundle with a future product",
        "description": "creative value, future flag.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 0
              }
            ],
            "feedback": "Bundling can turn leftovers into a sales tool.",
            "explanation": "Bundling can turn leftovers into a sales tool.",
            "logText": "The Unsold Stickers: Bundle with a future product"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might a smaller profit be smart?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Holding out for the original price can be reasonable, but inventory has time risk."
  },
  {
    "id": "ctx-mosaic-license-practice-sessions",
    "title": "Practice Before the Test",
    "prompt": "A future license or permit test costs $32 each attempt. Extra practice costs time but improves odds.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Take the test now",
        "description": "fast attempt, randomized pass.",
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
                "type": "cash",
                "amount": -32
              }
            ],
            "feedback": "Fast attempts can work, but retakes cost money.",
            "explanation": "Fast attempts can work, but retakes cost money.",
            "logText": "Practice Before the Test: Take the test now"
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
            "logText": "Practice Before the Test: Take the test now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Practice first, test next week",
        "description": "delay, pass odds up.",
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
                "type": "cash",
                "amount": -32
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Preparation is a low-cash way to reduce retake risk.",
            "explanation": "Preparation is a low-cash way to reduce retake risk.",
            "logText": "Practice Before the Test: Practice first, test next week"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor for practice feedback",
        "description": "opportunity up, confidence up.",
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
                "type": "cash",
                "amount": -32
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
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Feedback can make practice more focused.",
            "explanation": "Feedback can make practice more focused.",
            "logText": "Practice Before the Test: Ask a mentor for practice feedback"
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
            "logText": "Practice Before the Test: Ask a mentor for practice feedback met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What would a retake cost?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Waiting can feel slower but reduce repeated fees."
  },
  {
    "id": "ctx-mosaic-life-route-capstone",
    "title": "The Route You Built",
    "prompt": "Your life-route summary shows $740 savings, $320 checking, $1,900 useful assets, $680 investments, and $1,150 debt. It also shows three support-circle moments and two recovery moments.",
    "topics": [
      "saving",
      "banking",
      "money-values",
      "investing"
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
        "label": "Calculate net worth and name one non-money strength",
        "description": "full reflection.",
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
            "feedback": "Assets + cash total $3,640; $3,640 − $1,150 = $2,490 net worth, but your planning and recovery are strengths too.",
            "explanation": "Assets + cash total $3,640; $3,640 − $1,150 = $2,490 net worth, but your planning and recovery are strengths too.",
            "logText": "The Route You Built: Calculate net worth and name one non-money strength"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Focus only on the money total",
        "description": "simple ending, misses life skills.",
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
            "feedback": "Money totals are useful, but they do not measure your value.",
            "explanation": "Money totals are useful, but they do not measure your value.",
            "logText": "The Route You Built: Focus only on the money total"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Thank one support role and set one next goal",
        "description": "relationship trust up, opportunity up.",
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
              }
            ],
            "feedback": "Support and next steps turn an ending into a route forward.",
            "explanation": "Support and next steps turn an ending into a route forward.",
            "logText": "The Route You Built: Thank one support role and set one next goal"
          }
        ]
      }
    ],
    "reflectionPrompt": "What strength helped most?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The capstone should celebrate reasoning, support, and recovery, not only wealth."
  },
  {
    "id": "ctx-mosaic-mentor-portfolio-update",
    "title": "Update the Portfolio",
    "prompt": "Your mentor helped you build a small portfolio of work samples. You can update it now or wait until an application appears.",
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
        "label": "Update it now",
        "description": "opportunity up, time used.",
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
            "feedback": "Updating before pressure makes applications easier.",
            "explanation": "Updating before pressure makes applications easier.",
            "logText": "Update the Portfolio: Update it now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until needed",
        "description": "time saved now, future rush risk.",
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
            "feedback": "Waiting is efficient if no opportunity appears soon.",
            "explanation": "Waiting is efficient if no opportunity appears soon.",
            "logText": "Update the Portfolio: Wait until needed"
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
            "logText": "Update the Portfolio: Wait until needed met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor for one improvement note",
        "description": "quality up, relationship trust.",
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
              }
            ],
            "feedback": "Specific feedback improves a career asset.",
            "explanation": "Specific feedback improves a career asset.",
            "logText": "Update the Portfolio: Ask mentor for one improvement note"
          }
        ]
      }
    ],
    "reflectionPrompt": "What sample showed growth?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Portfolio work has no immediate cash payoff but can protect future routes."
  },
  {
    "id": "ctx-mosaic-minimum-payment-map",
    "title": "The Minimum Payment Map",
    "prompt": "A future credit balance is $240. The minimum payment is $25, but paying $60 would reduce the balance faster.",
    "topics": [
      "credit",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Pay the $25 minimum",
        "description": "cash protected now, debt lasts longer.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -25
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Minimum keeps the account current, but interest can keep debt around.",
            "explanation": "Minimum keeps the account current, but interest can keep debt around.",
            "logText": "The Minimum Payment Map: Pay the $25 minimum"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $60 this month",
        "description": "debt drops faster, cash tighter.",
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
            "feedback": "Higher payment reduces future interest but uses current cash.",
            "explanation": "Higher payment reduces future interest but uses current cash.",
            "logText": "The Minimum Payment Map: Pay $60 this month"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Create a two-month payoff plan",
        "description": "debt plan improves, discipline up.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
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
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "A plan turns a balance into steps.",
            "explanation": "A plan turns a balance into steps.",
            "logText": "The Minimum Payment Map: Create a two-month payoff plan"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is minimum not the same as best?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying extra helps debt, but only if it does not create another missed bill."
  },
  {
    "id": "ctx-mosaic-move-in-utility-deposit",
    "title": "The Utility Deposit",
    "prompt": "A future apartment requires a $75 utility deposit before service starts. You also need $55 for groceries that week.",
    "topics": [
      "banking"
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
        "label": "Pay the deposit from savings",
        "description": "service starts, savings lower.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 75
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
            "feedback": "Deposits can be required before monthly bills even begin.",
            "explanation": "Deposits can be required before monthly bills even begin.",
            "logText": "The Utility Deposit: Pay the deposit from savings"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Delay move-in by one week",
        "description": "cash pressure down, opportunity delayed.",
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
            "feedback": "Changing timing can be a financial choice.",
            "explanation": "Changing timing can be a financial choice.",
            "logText": "The Utility Deposit: Delay move-in by one week"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use high-cost borrowing",
        "description": "service starts, debt rises.",
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
            "feedback": "Borrowing solved the start-up cost but added future pressure.",
            "explanation": "Borrowing solved the start-up cost but added future pressure.",
            "logText": "The Utility Deposit: Use high-cost borrowing"
          }
        ]
      }
    ],
    "reflectionPrompt": "What upfront cost surprised you?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Upfront costs can be harder than monthly costs because they arrive before routines settle."
  },
  {
    "id": "ctx-mosaic-net-worth-mosaic",
    "title": "The Net Worth Mosaic",
    "prompt": "Your future snapshot shows $420 cash, $1,100 useful assets, $600 savings, and $750 debt.",
    "topics": [
      "money-values",
      "saving",
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
        "label": "Calculate net worth",
        "description": "financial picture clearer.",
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
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Assets total $2,120. $2,120 − $750 debt = $1,370 net worth.",
            "explanation": "Assets total $2,120. $2,120 − $750 debt = $1,370 net worth.",
            "logText": "The Net Worth Mosaic: Calculate net worth"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Focus only on cash",
        "description": "simple view, asset/debt blind spots.",
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
            "feedback": "Cash matters, but it is not the whole picture.",
            "explanation": "Cash matters, but it is not the whole picture.",
            "logText": "The Net Worth Mosaic: Focus only on cash"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "List assets by usefulness and resale value",
        "description": "better planning.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Useful value and resale value can be different.",
            "explanation": "Useful value and resale value can be different.",
            "logText": "The Net Worth Mosaic: List assets by usefulness and resale value"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which part was not spendable cash?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Net worth is useful, but it does not equal cash or personal worth."
  },
  {
    "id": "ctx-mosaic-official-benefits-check",
    "title": "The Benefits Claim Check",
    "prompt": "A video claims one pathway “pays for everything automatically.” The game asks you to check an official source before trusting it.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Believe the video and plan around it",
        "description": "opportunity optimism, misinformation risk.",
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
            "feedback": "Big claims need strong sources.",
            "explanation": "Big claims need strong sources.",
            "logText": "The Benefits Claim Check: Believe the video and plan around it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Check official or school-provided source",
        "description": "safety up, plan more accurate.",
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
              }
            ],
            "feedback": "Official sources help separate real benefits from exaggeration.",
            "explanation": "Official sources help separate real benefits from exaggeration.",
            "logText": "The Benefits Claim Check: Check official or school-provided source"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to help compare sources",
        "description": "opportunity up, safety up.",
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
            "feedback": "A trusted guide can help read complicated benefit rules.",
            "explanation": "A trusted guide can help read complicated benefit rules.",
            "logText": "The Benefits Claim Check: Ask a mentor to help compare sources"
          }
        ]
      }
    ],
    "reflectionPrompt": "What word made the claim too broad?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Pathways can have strong benefits, but details matter."
  },
  {
    "id": "ctx-mosaic-overpayment-refund-trick",
    "title": "The Overpayment Trick",
    "prompt": "A buyer sends “too much” money for your item and asks you to send the extra back quickly. The payment still says pending.",
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
        "label": "Send the extra back now",
        "description": "scam risk high, cash loss possible.",
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
            "feedback": "Pending money is not the same as cleared money.",
            "explanation": "Pending money is not the same as cleared money.",
            "logText": "The Overpayment Trick: Send the extra back now"
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
            "logText": "The Overpayment Trick: Send the extra back now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until payment fully clears",
        "description": "safety up, buyer may pressure you.",
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
            "feedback": "Waiting protects you from fake-payment tricks.",
            "explanation": "Waiting protects you from fake-payment tricks.",
            "logText": "The Overpayment Trick: Wait until payment fully clears"
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
            "logText": "The Overpayment Trick: Wait until payment fully clears met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cancel the sale and use a safer method",
        "description": "sale lost, safety protected.",
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
              }
            ],
            "feedback": "Losing a risky sale can be a win.",
            "explanation": "Losing a risky sale can be a win.",
            "logText": "The Overpayment Trick: Cancel the sale and use a safer method"
          }
        ]
      }
    ],
    "reflectionPrompt": "What word should slow you down?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "A sale is only good if the payment is real and safe."
  },
  {
    "id": "ctx-mosaic-password-manager-choice",
    "title": "One Password, Many Doors",
    "prompt": "You reuse one password on multiple game accounts. A security lesson offers a password manager-style tool in fictional form.",
    "topics": [
      "scams"
    ],
    "ageRange": {
      "min": 13,
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
        "label": "Keep reusing the password",
        "description": "convenient, safety risk.",
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
            "feedback": "One stolen password can open many doors.",
            "explanation": "One stolen password can open many doors.",
            "logText": "One Password, Many Doors: Keep reusing the password"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use unique passwords with a manager",
        "description": "safety up, setup time.",
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
              }
            ],
            "feedback": "A system can make safer choices easier.",
            "explanation": "A system can make safer choices easier.",
            "logText": "One Password, Many Doors: Use unique passwords with a manager"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Change only money-related accounts first",
        "description": "partial safety improvement.",
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
                "amount": 4
              }
            ],
            "feedback": "Prioritizing high-risk accounts is a strong start.",
            "explanation": "Prioritizing high-risk accounts is a strong start.",
            "logText": "One Password, Many Doors: Change only money-related accounts first"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is reuse risky?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Security habits take setup time but reduce future risk."
  },
  {
    "id": "ctx-mosaic-payday-gap-bridge",
    "title": "Three Days Before Payday",
    "prompt": "A $42 bill is due three days before your next $96 paycheck. You have $30 in checking and $70 in savings.",
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
        "label": "Move $12 from savings now",
        "description": "bill paid, savings lower.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 12
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
            "feedback": "You used savings to solve timing, not overspending.",
            "explanation": "You used savings to solve timing, not overspending.",
            "logText": "Three Days Before Payday: Move $12 from savings now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask for a fee-free due-date change",
        "description": "possible success, randomized.",
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Asking early can sometimes change timing.",
            "explanation": "Asking early can sometimes change timing.",
            "logText": "Three Days Before Payday: Ask for a fee-free due-date change"
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
            "logText": "Three Days Before Payday: Ask for a fee-free due-date change met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay late",
        "description": "possible late fee, stress up.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "A small timing gap can create a bigger cost.",
            "explanation": "A small timing gap can create a bigger cost.",
            "logText": "Three Days Before Payday: Pay late"
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
            "logText": "Three Days Before Payday: Pay late met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How is this different from an emergency?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "The issue is timing, not always total income."
  },
  {
    "id": "ctx-mosaic-pet-food-autoship",
    "title": "Autoship for the Pet Food",
    "prompt": "Pet food costs $23 per bag. Autoship gives 10% off but keeps sending bags unless canceled or paused.",
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
        "label": "Use autoship with a calendar reminder",
        "description": "cost down, discipline needed.",
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
                "amount": -23
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "10% off $23 saves $2.30 per bag, but only if timing matches use.",
            "explanation": "10% off $23 saves $2.30 per bag, but only if timing matches use.",
            "logText": "Autoship for the Pet Food: Use autoship with a calendar reminder"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy one bag at a time",
        "description": "flexible, costs more per bag.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -23
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Flexibility can be worth paying for.",
            "explanation": "Flexibility can be worth paying for.",
            "logText": "Autoship for the Pet Food: Buy one bag at a time"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask caregiver to help estimate monthly use",
        "description": "pet support up, waste risk down.",
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
                "type": "cash",
                "amount": -23
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
            "feedback": "Estimating use prevents both shortages and waste.",
            "explanation": "Estimating use prevents both shortages and waste.",
            "logText": "Autoship for the Pet Food: Ask caregiver to help estimate monthly use"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
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
            "logText": "Autoship for the Pet Food: Ask caregiver to help estimate monthly use met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What reminder prevents overbuying?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Automatic discounts help only when the schedule fits real use."
  },
  {
    "id": "ctx-mosaic-phone-plan-data-cap",
    "title": "The Data Cap Warning",
    "prompt": "Your fictional phone plan has 5 GB of data. Extra data costs $8 per GB. You are on track to use 7 GB this month.",
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
        "label": "Keep using data normally",
        "description": "convenience, possible $16 overage.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -8
              }
            ],
            "feedback": "2 extra GB × $8 = $16.",
            "explanation": "2 extra GB × $8 = $16.",
            "logText": "The Data Cap Warning: Keep using data normally"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use Wi-Fi downloads and lower data use",
        "description": "cash protected, convenience lower.",
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
                "type": "cash",
                "amount": -8
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Changing habits can avoid fees.",
            "explanation": "Changing habits can avoid fees.",
            "logText": "The Data Cap Warning: Use Wi-Fi downloads and lower data use"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Change to a larger plan next month",
        "description": "predictable cost, maybe overpay if use drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -8
              }
            ],
            "feedback": "A larger plan can be cheaper if overages repeat.",
            "explanation": "A larger plan can be cheaper if overages repeat.",
            "logText": "The Data Cap Warning: Change to a larger plan next month"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the extra cost invisible?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying more for a bigger plan can save money only if overages are common."
  },
  {
    "id": "ctx-mosaic-phone-storage-cloud",
    "title": "Storage Full Again",
    "prompt": "Your phone storage is full. A cloud plan costs $2.99 per month. A one-time memory cleanup takes 45 minutes and may avoid the plan.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 13,
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
        "label": "Start the cloud plan",
        "description": "convenience up, recurring cost.",
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
            "feedback": "$2.99 × 12 = $35.88 per year.",
            "explanation": "$2.99 × 12 = $35.88 per year.",
            "logText": "Storage Full Again: Start the cloud plan"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Do the cleanup",
        "description": "time used, cost avoided.",
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
                "type": "cash",
                "amount": -3
              }
            ],
            "feedback": "Time can replace a subscription.",
            "explanation": "Time can replace a subscription.",
            "logText": "Storage Full Again: Do the cleanup"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor/family member to back up important files safely",
        "description": "safety up, support time.",
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
                "amount": -3
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
            "feedback": "Protecting important files matters before deleting.",
            "explanation": "Protecting important files matters before deleting.",
            "logText": "Storage Full Again: Ask a mentor/family member to back up important files safely"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made recurring cost worth it?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Convenience subscriptions can be worth it, but students should annualize the cost."
  },
  {
    "id": "ctx-mosaic-printer-ink-drain",
    "title": "The Cheap Printer Surprise",
    "prompt": "A printer costs $49, but ink costs $27 every 90 pages. A library print card costs $0.10 per page.",
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
        "label": "Buy the printer",
        "description": "convenience up, future ink costs.",
        "requirements": [
          {
            "type": "minCash",
            "value": 49
          }
        ],
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
            "feedback": "The printer is only the first cost.",
            "explanation": "The printer is only the first cost.",
            "logText": "The Cheap Printer Surprise: Buy the printer"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the print card for 120 pages",
        "description": "lower total for light use.",
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
            "feedback": "120 × $0.10 = $12, much cheaper if you print rarely.",
            "explanation": "120 × $0.10 = $12, much cheaper if you print rarely.",
            "logText": "The Cheap Printer Surprise: Use the print card for 120 pages"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Share printing with a caregiver/mentor plan",
        "description": "cost lower, planning needed.",
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
                "amount": -49
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
            "feedback": "Shared resources work when expectations are clear.",
            "explanation": "Shared resources work when expectations are clear.",
            "logText": "The Cheap Printer Surprise: Share printing with a caregiver/mentor plan"
          }
        ]
      }
    ],
    "reflectionPrompt": "What recurring cost came with ownership?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Ownership can be convenient and still lose on total cost."
  },
  {
    "id": "ctx-mosaic-public-wifi-bank-pause",
    "title": "Banking on Public Wi-Fi?",
    "prompt": "You are on public Wi-Fi and want to check a bank balance. The app offers a safer route: wait, use trusted connection, or check only non-sensitive info.",
    "topics": [
      "scams",
      "money-values"
    ],
    "ageRange": {
      "min": 13,
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
        "label": "Log in anyway",
        "description": "fast, safety risk.",
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
            "feedback": "Convenience can raise account risk.",
            "explanation": "Convenience can raise account risk.",
            "logText": "Banking on Public Wi-Fi?: Log in anyway"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait for a trusted connection",
        "description": "safety up, delay.",
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
              }
            ],
            "feedback": "Waiting can be a safety choice.",
            "explanation": "Waiting can be a safety choice.",
            "logText": "Banking on Public Wi-Fi?: Wait for a trusted connection"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use account alerts instead of logging in",
        "description": "balance awareness, lower risk.",
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
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "Alerts can answer simple questions without full login.",
            "explanation": "Alerts can answer simple questions without full login.",
            "logText": "Banking on Public Wi-Fi?: Use account alerts instead of logging in"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the connection risky?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The safest choice may be less convenient, but the delay is often small."
  },
  {
    "id": "ctx-mosaic-qr-code-table",
    "title": "The QR Code on the Table",
    "prompt": "A school-safe fundraiser uses a payment QR code. You notice a second sticker partly covering the original code.",
    "topics": [
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Scan and pay quickly",
        "description": "fast, scam risk randomized.",
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
            "feedback": "Fast payment can skip verification.",
            "explanation": "Fast payment can skip verification.",
            "logText": "The QR Code on the Table: Scan and pay quickly"
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
            "logText": "The QR Code on the Table: Scan and pay quickly met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask the organizer to confirm the code",
        "description": "safety up, small delay.",
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
            "feedback": "Checking the source protects the money.",
            "explanation": "Checking the source protects the money.",
            "logText": "The QR Code on the Table: Ask the organizer to confirm the code"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay with cash or official link",
        "description": "safer route, less convenient.",
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
            "feedback": "A safer route can take one extra step.",
            "explanation": "A safer route can take one extra step.",
            "logText": "The QR Code on the Table: Pay with cash or official link"
          }
        ]
      }
    ],
    "reflectionPrompt": "What clue did you miss?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Convenience is valuable, but payment destination matters."
  },
  {
    "id": "ctx-mosaic-quiet-workspace-choice",
    "title": "The Quiet Hour",
    "prompt": "You need one quiet hour to finish a scholarship-style practice essay in the game. Your schedule is packed.",
    "topics": [
      "career"
    ],
    "ageRange": {
      "min": 12,
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
        "label": "Use a school/library quiet block",
        "description": "opportunity up, schedule planning.",
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
              }
            ],
            "feedback": "A quiet space can be a financial resource when it supports future options.",
            "explanation": "A quiet space can be a financial resource when it supports future options.",
            "logText": "The Quiet Hour: Use a school/library quiet block"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask family/caregiver for a quiet agreement",
        "description": "support trust up, communication practice.",
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
            "feedback": "Clear asks can turn a need into a plan.",
            "explanation": "Clear asks can turn a need into a plan.",
            "logText": "The Quiet Hour: Ask family/caregiver for a quiet agreement"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Multitask while distracted",
        "description": "time saved, quality randomized.",
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
            "feedback": "Multitasking can work, but quality may drop.",
            "explanation": "Multitasking can work, but quality may drop.",
            "logText": "The Quiet Hour: Multitask while distracted"
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
            "logText": "The Quiet Hour: Multitask while distracted met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the space useful?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Money choices often depend on time and environment, not just dollars."
  },
  {
    "id": "ctx-mosaic-raise-script-practice",
    "title": "Practice the Raise Ask",
    "prompt": "You have worked reliably in a future job and want to ask for a small raise. A mentor suggests bringing evidence, not just hope.",
    "topics": [
      "career",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Ask without preparing",
        "description": "possible no, confidence risk.",
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
                "stat": "wellbeing",
                "amount": 3
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A request is stronger with evidence.",
            "explanation": "A request is stronger with evidence.",
            "logText": "Practice the Raise Ask: Ask without preparing"
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
            "logText": "Practice the Raise Ask: Ask without preparing met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Prepare a short evidence script",
        "description": "opportunity up, confidence up.",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "discipline",
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
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Clear examples make the ask professional.",
            "explanation": "Clear examples make the ask professional.",
            "logText": "Practice the Raise Ask: Prepare a short evidence script"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to roleplay first",
        "description": "confidence up, nerves down.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Practice can make a hard conversation calmer.",
            "explanation": "Practice can make a hard conversation calmer.",
            "logText": "Practice the Raise Ask: Ask mentor to roleplay first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What proof was missing?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Asking can feel risky, but preparation changes the quality of the risk."
  },
  {
    "id": "ctx-mosaic-rental-tool-late-fee",
    "title": "Return the Rental Tool",
    "prompt": "A tool library lends you a kit for free, but late returns cost $5 per day and reduce trust.",
    "topics": [
      "budgeting",
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
        "label": "Add the return date to your calendar",
        "description": "fee risk down.",
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
                "type": "cash",
                "amount": -5
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "A reminder protects both money and trust.",
            "explanation": "A reminder protects both money and trust.",
            "logText": "Return the Rental Tool: Add the return date to your calendar"
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
            "logText": "Return the Rental Tool: Add the return date to your calendar met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Rely on memory",
        "description": "no setup, randomized late risk.",
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
            "feedback": "Memory works sometimes, but fees make forgetting costly.",
            "explanation": "Memory works sometimes, but fees make forgetting costly.",
            "logText": "Return the Rental Tool: Rely on memory"
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
            "logText": "Return the Rental Tool: Rely on memory met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a friend to return it with you",
        "description": "support up, shared responsibility.",
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
            "feedback": "A buddy system can help if expectations are clear.",
            "explanation": "A buddy system can help if expectations are clear.",
            "logText": "Return the Rental Tool: Ask a friend to return it with you"
          }
        ]
      }
    ],
    "reflectionPrompt": "What day should the reminder happen?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Free borrowing still has responsibility and possible costs."
  },
  {
    "id": "ctx-mosaic-renter-small-claim",
    "title": "The Small Water Damage Claim",
    "prompt": "A small covered water event damages $220 of belongings. Your deductible is $200.",
    "topics": [
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
        "label": "File a claim",
        "description": "possible $20 reimbursement, paperwork.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -200
              }
            ],
            "feedback": "$220 − $200 = $20 before any other rules.",
            "explanation": "$220 − $200 = $20 before any other rules.",
            "logText": "The Small Water Damage Claim: File a claim"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Self-pay from emergency fund",
        "description": "fast recovery, savings lower.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 220
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -200
              }
            ],
            "feedback": "Savings can self-insure small losses.",
            "explanation": "Savings can self-insure small losses.",
            "logText": "The Small Water Damage Claim: Self-pay from emergency fund"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Improve storage to reduce repeat risk",
        "description": "safety up, small cost.",
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
                "amount": -200
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
            "feedback": "Prevention can matter more than claiming.",
            "explanation": "Prevention can matter more than claiming.",
            "logText": "The Small Water Damage Claim: Improve storage to reduce repeat risk"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was the claim worth the effort?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Having insurance does not mean every small event should become a claim."
  },
  {
    "id": "ctx-mosaic-repair-cafe-lamp",
    "title": "The Repair Café Choice",
    "prompt": "A useful desk lamp stops working. A new one costs $28. A community repair café might fix it for free, but there is no guarantee.",
    "topics": [
      "career",
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
        "label": "Buy a new lamp",
        "description": "quick replacement, cash down.",
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
                "amount": -28
              }
            ],
            "feedback": "Buying new solved the need fast.",
            "explanation": "Buying new solved the need fast.",
            "logText": "The Repair Café Choice: Buy a new lamp"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Try the repair café",
        "description": "randomized repair success, time cost.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -28
              }
            ],
            "feedback": "Repair routes can save money and reduce waste, but they are uncertain.",
            "explanation": "Repair routes can save money and reduce waste, but they are uncertain.",
            "logText": "The Repair Café Choice: Try the repair café"
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
            "logText": "The Repair Café Choice: Try the repair café met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow a lamp from a support person temporarily",
        "description": "cash protected, trust responsibility.",
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
                "amount": -28
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
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Borrowing is a short-term route, not a permanent fix.",
            "explanation": "Borrowing is a short-term route, not a permanent fix.",
            "logText": "The Repair Café Choice: Borrow a lamp from a support person temporarily"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did speed cost?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Repair is not always successful, but it can preserve both cash and assets."
  },
  {
    "id": "ctx-mosaic-return-window-weekend",
    "title": "The Return Window Closes Monday",
    "prompt": "You bought a $37 item that does not fit the need. The return window closes Monday, and you need the receipt or digital proof.",
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
        "label": "Return it today with proof",
        "description": "cash restored, time used.",
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
              }
            ],
            "feedback": "Proof turned a regret into a refund.",
            "explanation": "Proof turned a regret into a refund.",
            "logText": "The Return Window Closes Monday: Return it today with proof"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Try to return without proof",
        "description": "randomized store-credit or denial.",
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
            "feedback": "Without proof, the outcome is less predictable.",
            "explanation": "Without proof, the outcome is less predictable.",
            "logText": "The Return Window Closes Monday: Try to return without proof"
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
            "logText": "The Return Window Closes Monday: Try to return without proof met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it and find another use",
        "description": "no refund, possible usefulness.",
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
            "feedback": "Keeping can be reasonable if it still has value.",
            "explanation": "Keeping can be reasonable if it still has value.",
            "logText": "The Return Window Closes Monday: Keep it and find another use"
          }
        ]
      }
    ],
    "reflectionPrompt": "Where did you store the proof?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Returning saves money, but time, proof, and usefulness affect the choice."
  },
  {
    "id": "ctx-mosaic-roommate-wifi-agreement",
    "title": "The Wi-Fi Agreement",
    "prompt": "You and a roommate share a $46 monthly internet bill. The account is in your name, so missed payments affect you first.",
    "topics": [
      "scams",
      "banking"
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
        "label": "Split $23 each with a due-date reminder",
        "description": "simple, trust protected.",
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
              }
            ],
            "feedback": "Clear timing matters as much as the amount.",
            "explanation": "Clear timing matters as much as the amount.",
            "logText": "The Wi-Fi Agreement: Split $23 each with a due-date reminder"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay it yourself and ask later",
        "description": "bill paid, repayment risk.",
        "requirements": [
          {
            "type": "minCash",
            "value": 46
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
            "feedback": "Covering first can become a pattern.",
            "explanation": "Covering first can become a pattern.",
            "logText": "The Wi-Fi Agreement: Pay it yourself and ask later"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Put the agreement in a shared note",
        "description": "trust up, conflict risk down.",
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
              }
            ],
            "feedback": "A written agreement protects both people.",
            "explanation": "A written agreement protects both people.",
            "logText": "The Wi-Fi Agreement: Put the agreement in a shared note"
          }
        ]
      }
    ],
    "reflectionPrompt": "When should the roommate pay you?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying the bill is only part of the decision; responsibility and timing matter."
  },
  {
    "id": "ctx-mosaic-roundup-savings-switch",
    "title": "Round-Up Savings",
    "prompt": "A bank-style feature rounds each debit purchase to the next dollar and moves the difference to savings. You make about 20 small purchases a month.",
    "topics": [
      "banking"
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
        "label": "Turn on round-ups",
        "description": "savings grows slowly, checking lower.",
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
            "feedback": "If the average round-up is $0.50, 20 purchases save about $10/month.",
            "explanation": "If the average round-up is $0.50, 20 purchases save about $10/month.",
            "logText": "Round-Up Savings: Turn on round-ups"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Set a fixed $10 monthly transfer instead",
        "description": "predictable savings.",
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
              }
            ],
            "feedback": "Fixed transfers are easier to budget than variable round-ups.",
            "explanation": "Fixed transfers are easier to budget than variable round-ups.",
            "logText": "Round-Up Savings: Set a fixed $10 monthly transfer instead"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip automatic saving",
        "description": "checking flexible, savings depends on memory.",
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
            "feedback": "Manual saving needs a strong reminder.",
            "explanation": "Manual saving needs a strong reminder.",
            "logText": "Round-Up Savings: Skip automatic saving"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does small automatic saving work?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Automation helps habits but can surprise checking if balances are tight."
  },
  {
    "id": "ctx-mosaic-sales-tax-ledger",
    "title": "The Simplified Sales Tax Jar",
    "prompt": "In a simplified fictional setting, your craft sales collect 6% sales tax that must be set aside, not spent as profit.",
    "topics": [
      "taxes",
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
        "label": "Set aside tax after each sale",
        "description": "records strong, spending cash lower.",
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
              }
            ],
            "feedback": "On a $20 sale, 6% is $1.20 set aside.",
            "explanation": "On a $20 sale, 6% is $1.20 set aside.",
            "logText": "The Simplified Sales Tax Jar: Set aside tax after each sale"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Mix all money together",
        "description": "cash feels higher, future shortfall risk.",
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
            "feedback": "Mixed money is easy to overspend.",
            "explanation": "Mixed money is easy to overspend.",
            "logText": "The Simplified Sales Tax Jar: Mix all money together"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor for a simple ledger template",
        "description": "moneyKnowledge up, safety up.",
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
            "feedback": "A template makes the habit easier.",
            "explanation": "A template makes the habit easier.",
            "logText": "The Simplified Sales Tax Jar: Ask mentor for a simple ledger template"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is collected tax not profit?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Setting money aside reduces cash now but prevents future stress."
  },
  {
    "id": "ctx-mosaic-savings-bond-placeholder",
    "title": "The Locked Savings Placeholder",
    "prompt": "A fictional locked-savings certificate pays 4% simple interest for one year. You would put in $200 but cannot spend it during the year without a penalty.",
    "topics": [
      "banking"
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
        "label": "Lock the $200 for one year",
        "description": "earns $8 simple interest, liquidity down.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 200
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
            "feedback": "4% of $200 is $8 for the year in this simplified model.",
            "explanation": "4% of $200 is $8 for the year in this simplified model.",
            "logText": "The Locked Savings Placeholder: Lock the $200 for one year"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep the money in regular savings",
        "description": "liquidity up, lower interest.",
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
            "feedback": "Flexible money can be valuable even if it grows less.",
            "explanation": "Flexible money can be valuable even if it grows less.",
            "logText": "The Locked Savings Placeholder: Keep the money in regular savings"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split $100 locked, $100 liquid",
        "description": "balanced growth/access.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 200
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
            "feedback": "Splitting tools can protect two goals.",
            "explanation": "Splitting tools can protect two goals.",
            "logText": "The Locked Savings Placeholder: Split $100 locked, $100 liquid"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you give up for $8?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher interest can require giving up access."
  },
  {
    "id": "ctx-mosaic-school-store-consignment",
    "title": "Sell It Through the School Store",
    "prompt": "A school-safe store will sell student-made bookmarks. It keeps 20% of each sale to cover supplies and table space. You price each bookmark at $2.50.",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 13,
      "max": 15
    },
    "lifeStages": [
      "middle-school",
      "high-school"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Sell 12 through the store",
        "description": "revenue possible, fee deducted.",
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
            "feedback": "20% of $2.50 is $0.50, so you keep $2.00 each; 12 sold means $24.",
            "explanation": "20% of $2.50 is $0.50, so you keep $2.00 each; 12 sold means $24.",
            "logText": "Sell It Through the School Store: Sell 12 through the store"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": 12
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Sell It Through the School Store: Sell 12 through the store met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell directly to people you know",
        "description": "higher keep per sale, more time needed.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "No fee means more per item, but you do the work.",
            "explanation": "No fee means more per item, but you do the work.",
            "logText": "Sell It Through the School Store: Sell directly to people you know"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Lower the price to $2.00",
        "description": "higher demand chance, lower profit per item.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 20
              }
            ],
            "feedback": "A lower price can sell more, but each sale earns less.",
            "explanation": "A lower price can sell more, but each sale earns less.",
            "logText": "Sell It Through the School Store: Lower the price to $2.00"
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
            "logText": "Sell It Through the School Store: Lower the price to $2.00 met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did the fee change your real income?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Direct selling keeps more per item; consignment may reach more buyers with less effort."
  },
  {
    "id": "ctx-mosaic-shift-meal-discount",
    "title": "The Employee Meal Deal",
    "prompt": "A part-time job offers 40% off meals during shifts. A $9.50 meal becomes cheaper, but buying one every shift adds up.",
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
        "label": "Buy the discounted meal each shift",
        "description": "wellbeing up, cash leaks over time.",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "40% off $9.50 saves $3.80, but you still spend $5.70 each shift.",
            "explanation": "40% off $9.50 saves $3.80, but you still spend $5.70 each shift.",
            "logText": "The Employee Meal Deal: Buy the discounted meal each shift"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Set a one-meal-per-week cap",
        "description": "cash protected, enjoyment preserved.",
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
              }
            ],
            "feedback": "A cap keeps the treat without letting it become automatic.",
            "explanation": "A cap keeps the treat without letting it become automatic.",
            "logText": "The Employee Meal Deal: Set a one-meal-per-week cap"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Bring food and save the discount for long shifts",
        "description": "more savings, less convenience.",
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
            "feedback": "You used the discount when it helped most.",
            "explanation": "You used the discount when it helped most.",
            "logText": "The Employee Meal Deal: Bring food and save the discount for long shifts"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a discount the same as saving?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Discounts can improve wellbeing, but repeated discounted spending is still spending."
  },
  {
    "id": "ctx-mosaic-sponsored-budget-template",
    "title": "The Free Budget Template",
    "prompt": "A free online budget template looks helpful, but the page pushes a paid product in every section. The math may still be useful.",
    "topics": [
      "budgeting",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use it without checking",
        "description": "budget starts, source risk.",
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
            "feedback": "Helpful format does not make every recommendation neutral.",
            "explanation": "Helpful format does not make every recommendation neutral.",
            "logText": "The Free Budget Template: Use it without checking"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Compare it with an official or school source",
        "description": "safety up, better choices.",
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
              }
            ],
            "feedback": "A second source helps separate tool from sales pitch.",
            "explanation": "A second source helps separate tool from sales pitch.",
            "logText": "The Free Budget Template: Compare it with an official or school source"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Build a simple version yourself",
        "description": "more time, more control.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Building your own tool can reduce hidden influence.",
            "explanation": "Building your own tool can reduce hidden influence.",
            "logText": "The Free Budget Template: Build a simple version yourself"
          }
        ]
      }
    ],
    "reflectionPrompt": "Where did the page try to sell?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A sponsored tool can still teach, but it should not steer decisions unnoticed."
  },
  {
    "id": "ctx-mosaic-tablet-sale-dilemma",
    "title": "Sell the Tablet?",
    "prompt": "You can sell a tablet for $140 to cover a short-term cash gap. The tablet also helps with applications and schoolwork.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Sell the tablet",
        "description": "cash up, opportunity tool gone.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 140
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Liquid cash solved today but removed a useful asset.",
            "explanation": "Liquid cash solved today but removed a useful asset.",
            "logText": "Sell the Tablet?: Sell the tablet"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use savings and keep the tablet",
        "description": "savings down, asset protected.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 140
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Savings protected both cash need and opportunity.",
            "explanation": "Savings protected both cash need and opportunity.",
            "logText": "Sell the Tablet?: Use savings and keep the tablet"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow a device temporarily and delay sale",
        "description": "support trust, more time.",
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
                "amount": 140
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
            "feedback": "Time can prevent a rushed sale.",
            "explanation": "Time can prevent a rushed sale.",
            "logText": "Sell the Tablet?: Borrow a device temporarily and delay sale"
          }
        ]
      }
    ],
    "reflectionPrompt": "What future task used the tablet?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Selling assets can be reasonable, but useful assets have opportunity value too."
  },
  {
    "id": "ctx-mosaic-team-fund-steward",
    "title": "The Team Fund Steward",
    "prompt": "A club picks you to track a $72 snack fund. You do not keep student names; the game only tracks fictional totals and receipts.",
    "topics": [
      "investing",
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
        "label": "Keep a simple public total sheet",
        "description": "trust up, time cost.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Clear totals reduce rumors and confusion.",
            "explanation": "Clear totals reduce rumors and confusion.",
            "logText": "The Team Fund Steward: Keep a simple public total sheet"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep mental notes",
        "description": "faster, trust risk.",
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
            "feedback": "Mental notes can fail when people ask for details.",
            "explanation": "Mental notes can fail when people ask for details.",
            "logText": "The Team Fund Steward: Keep mental notes"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a teacher/mentor for the record format",
        "description": "safety up, confidence up.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Using an approved format protects the group.",
            "explanation": "Using an approved format protects the group.",
            "logText": "The Team Fund Steward: Ask a teacher/mentor for the record format"
          }
        ]
      }
    ],
    "reflectionPrompt": "What should everyone be able to see?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Recordkeeping takes time, but shared money needs trust."
  },
  {
    "id": "ctx-mosaic-time-horizon-buckets",
    "title": "Three Money Buckets",
    "prompt": "You have $300 for future goals: one goal in 2 months, one in 2 years, and one in 20 years.",
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
        "label": "Put all money in investments",
        "description": "growth chance, short-term risk.",
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
            "feedback": "Short-term money may not have time to recover from drops.",
            "explanation": "Short-term money may not have time to recover from drops.",
            "logText": "Three Money Buckets: Put all money in investments"
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
            "logText": "Three Money Buckets: Put all money in investments met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Put all money in savings",
        "description": "liquidity high, growth lower.",
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
            "feedback": "Savings protects short-term goals but may grow slowly.",
            "explanation": "Savings protects short-term goals but may grow slowly.",
            "logText": "Three Money Buckets: Put all money in savings"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split by time horizon",
        "description": "balanced plan.",
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
            "feedback": "Different goals can need different tools.",
            "explanation": "Different goals can need different tools.",
            "logText": "Three Money Buckets: Split by time horizon"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which goal needed safety?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Investing and saving are tools for different timelines."
  },
  {
    "id": "ctx-mosaic-trade-school-kit-fee",
    "title": "The Kit Fee Line Item",
    "prompt": "A training program advertises tuition of $1,200, but the kit fee is $275 and exam fee is $85.",
    "topics": [
      "life-after-high-school",
      "money-values",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Budget only for tuition",
        "description": "shortfall later.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -275
              }
            ],
            "feedback": "Tuition was not the whole cost.",
            "explanation": "Tuition was not the whole cost.",
            "logText": "The Kit Fee Line Item: Budget only for tuition"
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
            "logText": "The Kit Fee Line Item: Budget only for tuition met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Add all required costs first",
        "description": "realistic plan.",
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
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -275
              }
            ],
            "feedback": "$1,200 + $275 + $85 = $1,560 total required cost.",
            "explanation": "$1,200 + $275 + $85 = $1,560 total required cost.",
            "logText": "The Kit Fee Line Item: Add all required costs first"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about used kits or fee support",
        "description": "possible lower cost, opportunity up.",
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
                "type": "cash",
                "amount": -275
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
            "feedback": "Programs sometimes have resource routes if you ask early.",
            "explanation": "Programs sometimes have resource routes if you ask early.",
            "logText": "The Kit Fee Line Item: Ask about used kits or fee support"
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
            "logText": "The Kit Fee Line Item: Ask about used kits or fee support met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which line item did you miss?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "A program can be worth it and still need full-cost planning."
  },
  {
    "id": "ctx-mosaic-used-instrument-rent-buy",
    "title": "Rent the Instrument or Buy Used?",
    "prompt": "You want to join a music activity. Renting costs $16 per month. A used instrument costs $110 and might resell later for about $70.",
    "topics": [
      "budgeting"
    ],
    "ageRange": {
      "min": 12,
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
        "label": "Rent for six months",
        "description": "cash cost spread out, no ownership.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -16
              }
            ],
            "feedback": "$16 × 6 = $96, close to buying but easier month to month.",
            "explanation": "$16 × 6 = $96, close to buying but easier month to month.",
            "logText": "Rent the Instrument or Buy Used?: Rent for six months"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy used",
        "description": "asset gained, cash drops.",
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
                "type": "cash",
                "amount": -110
              }
            ],
            "feedback": "Buying costs more now, but resale may recover part later.",
            "explanation": "Buying costs more now, but resale may recover part later.",
            "logText": "Rent the Instrument or Buy Used?: Buy used"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family/caregiver about borrowing first",
        "description": "cost may drop, responsibility rises.",
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
                "amount": -16
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Borrowing can save money, but care and return matter.",
            "explanation": "Borrowing can save money, but care and return matter.",
            "logText": "Rent the Instrument or Buy Used?: Ask family/caregiver about borrowing first"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might renting still make sense?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Renting is flexible; buying can be cheaper only if you keep using it or resell it."
  },
  {
    "id": "ctx-mosaic-used-textbook-resale",
    "title": "Buy Used, Sell Later?",
    "prompt": "A future course book costs $72 new or $46 used. Used copies usually resell for about $28 if kept in good condition.",
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
        "label": "Buy used and protect condition",
        "description": "lower net cost, care needed.",
        "requirements": [
          {
            "type": "minCash",
            "value": 46
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -72
              }
            ],
            "feedback": "$46 − $28 resale = $18 estimated net cost.",
            "explanation": "$46 − $28 resale = $18 estimated net cost.",
            "logText": "Buy Used, Sell Later?: Buy used and protect condition"
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
            "logText": "Buy Used, Sell Later?: Buy used and protect condition met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy new",
        "description": "best condition, higher cash cost.",
        "requirements": [
          {
            "type": "minCash",
            "value": 72
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -72
              }
            ],
            "feedback": "New may resell better but ties up more cash.",
            "explanation": "New may resell better but ties up more cash.",
            "logText": "Buy Used, Sell Later?: Buy new"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow or use library reserve",
        "description": "cash saved, access limits.",
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
                "amount": -72
              }
            ],
            "feedback": "Borrowing reduces cost but may limit timing.",
            "explanation": "Borrowing reduces cost but may limit timing.",
            "logText": "Buy Used, Sell Later?: Borrow or use library reserve"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did condition affect value?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Cheapest upfront is not always cheapest after resale, but resale is not guaranteed."
  },
  {
    "id": "ctx-mosaic-utility-usage-challenge",
    "title": "The Power-Down Challenge",
    "prompt": "A future shared utility bill averages $82/month. You try a power-down routine that might reduce usage by 8%.",
    "topics": [
      "budgeting",
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
        "label": "Try the routine for one month",
        "description": "possible savings, effort.",
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
                "amount": -2
              }
            ],
            "feedback": "8% of $82 is $6.56 estimated savings.",
            "explanation": "8% of $82 is $6.56 estimated savings.",
            "logText": "The Power-Down Challenge: Try the routine for one month"
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
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Power-Down Challenge: Try the routine for one month met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore usage and pay the average",
        "description": "simple, no savings.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "Simple can be fine if the bill is manageable.",
            "explanation": "Simple can be fine if the bill is manageable.",
            "logText": "The Power-Down Challenge: Ignore usage and pay the average"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask roommate/family to join",
        "description": "higher savings odds, coordination needed.",
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
                "amount": -2
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
            "feedback": "Shared bills need shared habits.",
            "explanation": "Shared bills need shared habits.",
            "logText": "The Power-Down Challenge: Ask roommate/family to join"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was the effort worth the savings?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Small savings may or may not justify effort, especially when others share the bill."
  },
  {
    "id": "ctx-mosaic-utilization-laptop-repair",
    "title": "The Repair Balance",
    "prompt": "You have a $500 credit limit and a $90 balance. A needed device repair costs $160. Paying with credit would raise your balance.",
    "topics": [
      "credit"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Put repair on credit",
        "description": "asset restored, utilization rises to $250/$500 = 50%.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -160
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "The repair helped your device, but the balance used half the limit.",
            "explanation": "The repair helped your device, but the balance used half the limit.",
            "logText": "The Repair Balance: Put repair on credit"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use $100 savings and $60 credit",
        "description": "asset restored, utilization lower, savings down.",
        "requirements": [
          {
            "type": "minSavings",
            "value": 100
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -160
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Mixing sources reduced credit pressure.",
            "explanation": "Mixing sources reduced credit pressure.",
            "logText": "The Repair Balance: Use $100 savings and $60 credit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Delay repair and use a borrowed device",
        "description": "cash protected, convenience lower.",
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
                "amount": -160
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
            "feedback": "Borrowing can buy time, but it depends on trust and access.",
            "explanation": "Borrowing can buy time, but it depends on trust and access.",
            "logText": "The Repair Balance: Delay repair and use a borrowed device"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does percent of limit matter?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Credit can protect an asset, but the percent of the limit still matters."
  },
  {
    "id": "ctx-mosaic-withholding-refund-choice",
    "title": "The Big Refund Feeling",
    "prompt": "A simplified tax simulation shows you could withhold more and get a bigger refund, or withhold less and get more in each paycheck.",
    "topics": [
      "investing",
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
        "label": "Choose higher withholding",
        "description": "smaller paychecks, possible refund.",
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
            "feedback": "A refund can feel like a bonus, but it came from your earlier pay.",
            "explanation": "A refund can feel like a bonus, but it came from your earlier pay.",
            "logText": "The Big Refund Feeling: Choose higher withholding"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose balanced withholding",
        "description": "steadier cash flow.",
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
              }
            ],
            "feedback": "Balanced withholding aims for fewer surprises.",
            "explanation": "Balanced withholding aims for fewer surprises.",
            "logText": "The Big Refund Feeling: Choose balanced withholding"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose very low withholding",
        "description": "more cash now, possible amount owed later.",
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
            "feedback": "More now can mean stress later.",
            "explanation": "More now can mean stress later.",
            "logText": "The Big Refund Feeling: Choose very low withholding"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did paycheck timing change?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A refund is not magic money; it changes when you receive your own money."
  },
  {
    "id": "ctx-mosaic-work-study-schedule",
    "title": "Paid Hours, Class Hours",
    "prompt": "In a future program, you can work up to 8 hours per week at $13/hour. A mentor warns that too many hours can crowd out study time.",
    "topics": [
      "career",
      "money-values"
    ],
    "ageRange": {
      "min": 17,
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
        "label": "Work all 8 hours",
        "description": "up to $104/week gross, wellbeing risk.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "More hours raise income and time pressure.",
            "explanation": "More hours raise income and time pressure.",
            "logText": "Paid Hours, Class Hours: Work all 8 hours"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Work 5 hours and protect study blocks",
        "description": "$65/week gross, steadier schedule.",
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
              }
            ],
            "feedback": "You balanced income and energy.",
            "explanation": "You balanced income and energy.",
            "logText": "Paid Hours, Class Hours: Work 5 hours and protect study blocks"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip work-study at first",
        "description": "more time, less income.",
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
            "feedback": "Protecting time can be valid if another plan covers costs.",
            "explanation": "Protecting time can be valid if another plan covers costs.",
            "logText": "Paid Hours, Class Hours: Skip work-study at first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What non-money cost appears?",
    "sourceNote": "MoneyLife context batch MOSAIC-COMPASS-58; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The highest weekly pay can still be too costly in time."
  }
];
