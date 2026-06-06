import type { ScenarioEvent } from "../../../../types/game";

export const riverContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-river-app-permission-cost",
    "title": "What Does This App Want?",
    "prompt": "A free game asks for lots of permissions. A paid version ($3) asks for far fewer.",
    "topics": [
      "life-after-high-school"
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
        "label": "Use free, accept the permissions;",
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
            "feedback": "Use free, accept the permissions; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use free, accept the permissions; changes the route and creates a finance tradeoff to notice.",
            "logText": "What Does This App Want?: Use free, accept the permissions;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $3 for the leaner version;",
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
            "feedback": "Pay $3 for the leaner version; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $3 for the leaner version; changes the route and creates a finance tradeoff to notice.",
            "logText": "What Does This App Want?: Pay $3 for the leaner version;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Look for a free option with fewer permissions.",
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
            "feedback": "Look for a free option with fewer permissions. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Look for a free option with fewer permissions. changes the route and creates a finance tradeoff to notice.",
            "logText": "What Does This App Want?: Look for a free option with fewer permissions."
          }
        ]
      }
    ],
    "reflectionPrompt": "What might a 'free' app be asking for in return?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Free saves $3 but may cost access; paying buys a cleaner deal. (Kept general and fictional.)"
  },
  {
    "id": "ctx-river-apprentice-pay-progression",
    "title": "Low Now, More Later",
    "prompt": "An apprenticeship pays $14/hr now, rising to $18, then $24 over three years, with no schooling debt.",
    "topics": [
      "budgeting",
      "money-values",
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
        "label": "Map the 3-year pay path;",
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
            "feedback": "Map the 3-year pay path; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Map the 3-year pay path; changes the route and creates a finance tradeoff to notice.",
            "logText": "Low Now, More Later: Map the 3-year pay path;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Compare to a $16/hr job with no raises;",
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
            "feedback": "Compare to a $16/hr job with no raises; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare to a $16/hr job with no raises; changes the route and creates a finance tradeoff to notice.",
            "logText": "Low Now, More Later: Compare to a $16/hr job with no raises;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor how progression works",
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
            "feedback": "Ask a mentor how progression works changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor how progression works changes the route and creates a finance tradeoff to notice.",
            "logText": "Low Now, More Later: Ask a mentor how progression works"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why look at the whole path, not just the starting pay?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A lower start with raises can beat a flat higher start — depending on the timeline."
  },
  {
    "id": "ctx-river-asset-condition-resale",
    "title": "Worn or Mint?",
    "prompt": "You're selling two of the same item: one well-kept ($40), one scratched ($25). A buyer asks why the price differs.",
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
        "label": "Price by condition and explain it;",
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
            "feedback": "Price by condition and explain it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Price by condition and explain it; changes the route and creates a finance tradeoff to notice.",
            "logText": "Worn or Mint?: Price by condition and explain it;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Charge $40 for both and hope;",
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
            "feedback": "Charge $40 for both and hope; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Charge $40 for both and hope; changes the route and creates a finance tradeoff to notice.",
            "logText": "Worn or Mint?: Charge $40 for both and hope;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Average them both at $32.50.",
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
            "feedback": "Average them both at $32.50. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Average them both at $32.50. changes the route and creates a finance tradeoff to notice.",
            "logText": "Worn or Mint?: Average them both at $32.50."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does the same item sell for different prices?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Honest condition pricing sells faster and builds trust vs. overpricing the worn one."
  },
  {
    "id": "ctx-river-bank-vs-prepaid",
    "title": "Account or Prepaid Card?",
    "prompt": "A free checking account has no monthly fee but needs setup; a prepaid card is instant but charges $4/month and $2 per reload.",
    "topics": [
      "banking",
      "life-after-high-school",
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
        "label": "Open the free checking account;",
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
            "feedback": "Open the free checking account; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Open the free checking account; changes the route and creates a finance tradeoff to notice.",
            "logText": "Account or Prepaid Card?: Open the free checking account;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the prepaid card for convenience;",
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
            "feedback": "Use the prepaid card for convenience; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use the prepaid card for convenience; changes the route and creates a finance tradeoff to notice.",
            "logText": "Account or Prepaid Card?: Use the prepaid card for convenience;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare a year of fees first.",
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
            "feedback": "Compare a year of fees first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare a year of fees first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Account or Prepaid Card?: Compare a year of fees first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why compare a full year of fees, not just one month?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Prepaid is easy and needs no setup but costs more over time."
  },
  {
    "id": "ctx-river-bike-tube-upkeep",
    "title": "The $7 You Skipped",
    "prompt": "Your bike needs a $7 tune-up. Skipping it might be fine — or a small problem could grow.",
    "topics": [
      "budgeting"
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
        "label": "Do the $7 upkeep now;",
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
            "feedback": "Do the $7 upkeep now; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Do the $7 upkeep now; changes the route and creates a finance tradeoff to notice.",
            "logText": "The $7 You Skipped: Do the $7 upkeep now;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it and ride",
        "description": "→ randomized: fine / $30 repair later;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -7
              }
            ],
            "feedback": "Skip it and ride changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip it and ride changes the route and creates a finance tradeoff to notice.",
            "logText": "The $7 You Skipped: Skip it and ride"
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
            "logText": "The $7 You Skipped: Skip it and ride met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Learn to do it yourself for $4 in parts.",
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
            "feedback": "Learn to do it yourself for $4 in parts. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Learn to do it yourself for $4 in parts. changes the route and creates a finance tradeoff to notice.",
            "logText": "The $7 You Skipped: Learn to do it yourself for $4 in parts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is owning something more than the purchase price?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Skipping sometimes works out — proactive care just lowers the odds of a big hit."
  },
  {
    "id": "ctx-river-birthday-cash-split",
    "title": "Three Jars",
    "prompt": "You receive $63. You decide to use a save/spend/share split but want it to feel right for you.",
    "topics": [
      "budgeting",
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
        "label": "Even thirds ($21 each);",
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
            "feedback": "Even thirds ($21 each); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Even thirds ($21 each); changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Jars: Even thirds ($21 each);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save-heavy 60/30/10 ($37.80/$18.90/$6.30);",
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
            "feedback": "Save-heavy 60/30/10 ($37.80/$18.90/$6.30); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save-heavy 60/30/10 ($37.80/$18.90/$6.30); changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Jars: Save-heavy 60/30/10 ($37.80/$18.90/$6.30);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend-heavy 20/60/20.",
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
            "feedback": "Spend-heavy 20/60/20. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Spend-heavy 20/60/20. changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Jars: Spend-heavy 20/60/20."
          }
        ]
      }
    ],
    "reflectionPrompt": "What split matches what you care about right now?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Save-heavy builds funds; spend-heavy enjoys now — both are valid plans."
  },
  {
    "id": "ctx-river-bulk-vs-spoilage",
    "title": "Buy in Bulk?",
    "prompt": "A bulk pack is $0.20/unit (24 units); singles are $0.30/unit. But you'll only use about 10 before they expire.",
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
                "amount": 3
              }
            ],
            "feedback": "Bulk changes the route and creates a finance tradeoff to notice.",
            "explanation": "Bulk changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy in Bulk?: Bulk"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Singles",
        "description": "pay more per unit, waste none;",
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
            "feedback": "Singles changes the route and creates a finance tradeoff to notice.",
            "explanation": "Singles changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy in Bulk?: Singles"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split the bulk pack with a friend",
        "description": "*SC*.",
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
            "feedback": "Split the bulk pack with a friend changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split the bulk pack with a friend changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy in Bulk?: Split the bulk pack with a friend"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can the 'cheaper' bulk price actually cost more?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Bulk wins only if you'll use it; otherwise waste erases the savings."
  },
  {
    "id": "ctx-river-cash-only-budget",
    "title": "The Envelope Week",
    "prompt": "To control spending, you try putting $30 cash in an envelope for the week instead of tapping a card.",
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
        "label": "Stick to the $30 cash;",
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
            "feedback": "Stick to the $30 cash; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Stick to the $30 cash; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Envelope Week: Stick to the $30 cash;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Allow yourself a card \"just in case\";",
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
            "feedback": "Allow yourself a card \"just in case\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Allow yourself a card \"just in case\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Envelope Week: Allow yourself a card \"just in case\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split: $20 cash, $10 card for emergencies.",
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
            "feedback": "Split: $20 cash, $10 card for emergencies. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split: $20 cash, $10 card for emergencies. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Envelope Week: Split: $20 cash, $10 card for emergencies."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might cash feel more 'real' than tapping a card?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cash builds awareness but lacks card protections; a split balances both."
  },
  {
    "id": "ctx-river-community-grant-effort",
    "title": "Apply for the Mini-Grant",
    "prompt": "A community program offers small project grants ($0, $50, or $150). Applying takes 3 hours.",
    "topics": [
      "life-after-high-school",
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
        "label": "Apply, put in real effort",
        "description": "→ randomized payoff;",
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
            "feedback": "Apply, put in real effort changes the route and creates a finance tradeoff to notice.",
            "explanation": "Apply, put in real effort changes the route and creates a finance tradeoff to notice.",
            "logText": "Apply for the Mini-Grant: Apply, put in real effort"
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
            "logText": "Apply for the Mini-Grant: Apply, put in real effort met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, use the time to earn;",
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
            "feedback": "Skip, use the time to earn; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip, use the time to earn; changes the route and creates a finance tradeoff to notice.",
            "logText": "Apply for the Mini-Grant: Skip, use the time to earn;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Apply with a mentor's help",
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
            "feedback": "Apply with a mentor's help changes the route and creates a finance tradeoff to notice.",
            "explanation": "Apply with a mentor's help changes the route and creates a finance tradeoff to notice.",
            "logText": "Apply for the Mini-Grant: Apply with a mentor's help"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you decide if uncertain effort is worth it?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Applying risks unpaid time; a mentor's help raises your odds."
  },
  {
    "id": "ctx-river-compound-vs-simple",
    "title": "Two Accounts, Same Rate",
    "prompt": "Two accounts both pay 5% on $1,000, but one pays *simple* interest and one *compounds* yearly. After 3 years they differ.",
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
        "label": "Calculate both;",
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
            "feedback": "Calculate both; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Calculate both; changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Accounts, Same Rate: Calculate both;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume they're the same;",
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
            "feedback": "Assume they're the same; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Assume they're the same; changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Accounts, Same Rate: Assume they're the same;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick compound without checking.",
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
            "feedback": "Pick compound without checking. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pick compound without checking. changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Accounts, Same Rate: Pick compound without checking."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does compounding pull ahead more over long periods?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Over 3 years the gap is tiny; the lesson is what happens over 30."
  },
  {
    "id": "ctx-river-crowd-tip-creator",
    "title": "Tip the Free Creator?",
    "prompt": "A creator whose free tutorials helped you asks for optional tips. You're on a budget.",
    "topics": [
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
        "label": "Tip a small amount you can spare;",
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
            "feedback": "Tip a small amount you can spare; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Tip a small amount you can spare; changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip the Free Creator?: Tip a small amount you can spare;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Share their work instead of tipping;",
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
            "feedback": "Share their work instead of tipping; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Share their work instead of tipping; changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip the Free Creator?: Share their work instead of tipping;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip for now, plan to support later.",
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
            "feedback": "Skip for now, plan to support later. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip for now, plan to support later. changes the route and creates a finance tradeoff to notice.",
            "logText": "Tip the Free Creator?: Skip for now, plan to support later."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you value something that was free to you?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Tipping rewards what helped you; sharing costs nothing but still supports them."
  },
  {
    "id": "ctx-river-data-cap-stream",
    "title": "Stream or Save Data?",
    "prompt": "You have 2 GB of data left and 9 days. Streaming uses about 0.3 GB/hour.",
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
        "label": "Budget ~0.7 hr/day of streaming;",
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
            "feedback": "Budget ~0.7 hr/day of streaming; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget ~0.7 hr/day of streaming; changes the route and creates a finance tradeoff to notice.",
            "logText": "Stream or Save Data?: Budget ~0.7 hr/day of streaming;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Stream freely now, risk overage;",
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
            "feedback": "Stream freely now, risk overage; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Stream freely now, risk overage; changes the route and creates a finance tradeoff to notice.",
            "logText": "Stream or Save Data?: Stream freely now, risk overage;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use wifi only for streaming.",
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
            "feedback": "Use wifi only for streaming. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use wifi only for streaming. changes the route and creates a finance tradeoff to notice.",
            "logText": "Stream or Save Data?: Use wifi only for streaming."
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a data cap like a weekly money budget?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Pacing keeps you safe; wifi-only is free but limits where you watch."
  },
  {
    "id": "ctx-river-decision-tag-reflect",
    "title": "Why Did You Choose That?",
    "prompt": "After a spending choice, you can tag your reason instead of explaining out loud.",
    "topics": [
      "banking",
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
        "label": "Saved for later\";",
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
            "feedback": "Saved for later\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Saved for later\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Why Did You Choose That?: Saved for later\";"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Treated myself\";",
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
            "feedback": "Treated myself\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Treated myself\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Why Did You Choose That?: Treated myself\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Helped someone\";",
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
            "feedback": "Helped someone\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Helped someone\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Why Did You Choose That?: Helped someone\";"
          }
        ]
      },
      {
        "id": "choice-4",
        "label": "Played it safe.",
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
            "feedback": "Played it safe. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Played it safe. changes the route and creates a finance tradeoff to notice.",
            "logText": "Why Did You Choose That?: Played it safe."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which tag do you pick most — and what does that say?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "No wrong tag — this is about noticing patterns, not judging them."
  },
  {
    "id": "ctx-river-deposit-refundable",
    "title": "Will I Get It Back?",
    "prompt": "Renting equipment for a project needs a $75 refundable deposit, returned if you bring it back undamaged.",
    "topics": [
      "investing",
      "consumer-skills"
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
        "label": "Pay it, treat it as temporarily locked money;",
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
            "feedback": "Pay it, treat it as temporarily locked money; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay it, treat it as temporarily locked money; changes the route and creates a finance tradeoff to notice.",
            "logText": "Will I Get It Back?: Pay it, treat it as temporarily locked money;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Find a no-deposit option that costs more per use;",
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
            "feedback": "Find a no-deposit option that costs more per use; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Find a no-deposit option that costs more per use; changes the route and creates a finance tradeoff to notice.",
            "logText": "Will I Get It Back?: Find a no-deposit option that costs more per use;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow the gear from a mentor",
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
            "feedback": "Borrow the gear from a mentor changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow the gear from a mentor changes the route and creates a finance tradeoff to notice.",
            "logText": "Will I Get It Back?: Borrow the gear from a mentor"
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a refundable deposit different from a fee?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The deposit ties up cash temporarily; no-deposit options cost more but keep cash free."
  },
  {
    "id": "ctx-river-discount-stacking",
    "title": "Coupon Plus Sale",
    "prompt": "A $50 item is 20% off, and you have a coupon for 10% off the sale price.",
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
        "label": "Compute it step by step;",
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
            "feedback": "Compute it step by step; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compute it step by step; changes the route and creates a finance tradeoff to notice.",
            "logText": "Coupon Plus Sale: Compute it step by step;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume it's 30% off;",
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
            "feedback": "Assume it's 30% off; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Assume it's 30% off; changes the route and creates a finance tradeoff to notice.",
            "logText": "Coupon Plus Sale: Assume it's 30% off;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if the coupon applies before or after the sale.",
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
            "feedback": "Ask if the coupon applies before or after the sale. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask if the coupon applies before or after the sale. changes the route and creates a finance tradeoff to notice.",
            "logText": "Coupon Plus Sale: Ask if the coupon applies before or after the sale."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why don't stacked percents simply add up?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Order matters — assuming 30% would overestimate your savings by $1."
  },
  {
    "id": "ctx-river-donate-time-vs-money",
    "title": "Give Time or Cash?",
    "prompt": "A community program you value needs either a $25 donation or 4 hours of volunteering.",
    "topics": [
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
        "label": "Donate $25;",
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
            "feedback": "Donate $25; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Donate $25; changes the route and creates a finance tradeoff to notice.",
            "logText": "Give Time or Cash?: Donate $25;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Volunteer 4 hours;",
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
            "feedback": "Volunteer 4 hours; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Volunteer 4 hours; changes the route and creates a finance tradeoff to notice.",
            "logText": "Give Time or Cash?: Volunteer 4 hours;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do a smaller mix of both.",
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
            "feedback": "Do a smaller mix of both. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Do a smaller mix of both. changes the route and creates a finance tradeoff to notice.",
            "logText": "Give Time or Cash?: Do a smaller mix of both."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is your time more valuable to give than money?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cash helps immediately; volunteering gives more if money is tight but time is available."
  },
  {
    "id": "ctx-river-emergency-fund-target",
    "title": "How Big Should It Be?",
    "prompt": "Your essential monthly costs are about $300. Advice suggests 3 months saved, but that feels far off.",
    "topics": [
      "investing",
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
        "label": "Aim for 3 months ($900) over time;",
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
            "feedback": "Aim for 3 months ($900) over time; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Aim for 3 months ($900) over time; changes the route and creates a finance tradeoff to notice.",
            "logText": "How Big Should It Be?: Aim for 3 months ($900) over time;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Start with 1 month ($300) as a first milestone;",
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
            "feedback": "Start with 1 month ($300) as a first milestone; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Start with 1 month ($300) as a first milestone; changes the route and creates a finance tradeoff to notice.",
            "logText": "How Big Should It Be?: Start with 1 month ($300) as a first milestone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save a flat $50/month and reassess.",
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
            "feedback": "Save a flat $50/month and reassess. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save a flat $50/month and reassess. changes the route and creates a finance tradeoff to notice.",
            "logText": "How Big Should It Be?: Save a flat $50/month and reassess."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why size an emergency fund to *your* expenses, not a round number?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Aiming high is ideal but can feel discouraging; a one-month milestone builds momentum."
  },
  {
    "id": "ctx-river-emergency-partial-cover",
    "title": "The Fund Covers *Some*",
    "prompt": "A surprise $180 cost hits. Your emergency fund has $110.",
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
        "label": "Use the $110, cover the remaining $70 from this week's budget;",
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
            "feedback": "Use the $110, cover the remaining $70 from this week's budget; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use the $110, cover the remaining $70 from this week's budget; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fund Covers *Some*: Use the $110, cover the remaining $70 from this week's budget;"
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
            "logText": "The Fund Covers *Some*: Use the $110, cover the remaining $70 from this week's budget; met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the $110 and put $70 on BNPL;",
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
            "feedback": "Use the $110 and put $70 on BNPL; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use the $110 and put $70 on BNPL; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fund Covers *Some*: Use the $110 and put $70 on BNPL;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Delay the expense if possible.",
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
            "feedback": "Delay the expense if possible. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Delay the expense if possible. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fund Covers *Some*: Delay the expense if possible."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is a partly-full cushion still worth having?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Even a partial cushion shrinks the borrowing — covering the rest from budget avoids interest."
  },
  {
    "id": "ctx-river-flash-restock-fomo",
    "title": "Back in Stock — for an Hour",
    "prompt": "An item you've wanted (but at a price you found high) is \"back for one hour only\" — still at the high price.",
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
                "stat": "wellbeing",
                "amount": 2
              }
            ],
            "feedback": "Stick to your price limit, skip it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Stick to your price limit, skip it; changes the route and creates a finance tradeoff to notice.",
            "logText": "Back in Stock — for an Hour: Stick to your price limit, skip it;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now before it's gone;",
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
            "feedback": "Buy now before it's gone; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now before it's gone; changes the route and creates a finance tradeoff to notice.",
            "logText": "Back in Stock — for an Hour: Buy now before it's gone;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set an alert for a future price drop.",
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
            "feedback": "Set an alert for a future price drop. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set an alert for a future price drop. changes the route and creates a finance tradeoff to notice.",
            "logText": "Back in Stock — for an Hour: Set an alert for a future price drop."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did the timer change the value, or just the pressure?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "You might genuinely want it — pausing separates real want from manufactured urgency."
  },
  {
    "id": "ctx-river-free-shipping-filler",
    "title": "Just $6 More for Free Shipping",
    "prompt": "Your $24 order has $5 shipping, but adding $6 of stuff makes shipping free.",
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
        "label": "Pay the $5 shipping, buy only what you wanted;",
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
            "feedback": "Pay the $5 shipping, buy only what you wanted; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay the $5 shipping, buy only what you wanted; changes the route and creates a finance tradeoff to notice.",
            "logText": "Just $6 More for Free Shipping: Pay the $5 shipping, buy only what you wanted;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Add a $6 filler to \"save\" $5;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -24
              }
            ],
            "feedback": "Add a $6 filler to \"save\" $5; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Add a $6 filler to \"save\" $5; changes the route and creates a finance tradeoff to notice.",
            "logText": "Just $6 More for Free Shipping: Add a $6 filler to \"save\" $5;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add an item you actually needed anyway.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -24
              }
            ],
            "feedback": "Add an item you actually needed anyway. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Add an item you actually needed anyway. changes the route and creates a finance tradeoff to notice.",
            "logText": "Just $6 More for Free Shipping: Add an item you actually needed anyway."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is 'free shipping' free if you buy extra to get it?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A *needed* add-on makes it smart; a filler makes it a trap."
  },
  {
    "id": "ctx-river-gift-card-tracking",
    "title": "The Forgotten Balance",
    "prompt": "You have three gift cards: $12, $7, and an unknown one. You keep forgetting to use them.",
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
        "label": "Check and list all balances now;",
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
            "feedback": "Check and list all balances now; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Check and list all balances now; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Forgotten Balance: Check and list all balances now;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use them before they're misplaced;",
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
            "feedback": "Use them before they're misplaced; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use them before they're misplaced; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Forgotten Balance: Use them before they're misplaced;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Combine them toward one purchase.",
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
            "feedback": "Combine them toward one purchase. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Combine them toward one purchase. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Forgotten Balance: Combine them toward one purchase."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does forgotten money still count as money?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Spending them now uses the value; saving them risks losing or forgetting it."
  },
  {
    "id": "ctx-river-gift-vs-loan-friend",
    "title": "Is This a Gift or a Loan?",
    "prompt": "A friend asks for $20 for a project. You're not sure if you'll see it again.",
    "topics": [
      "credit"
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
        "label": "Give it as a gift, expect nothing;",
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
            "feedback": "Give it as a gift, expect nothing; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Give it as a gift, expect nothing; changes the route and creates a finance tradeoff to notice.",
            "logText": "Is This a Gift or a Loan?: Give it as a gift, expect nothing;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Lend it with a clear repay date;",
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
            "feedback": "Lend it with a clear repay date; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Lend it with a clear repay date; changes the route and creates a finance tradeoff to notice.",
            "logText": "Is This a Gift or a Loan?: Lend it with a clear repay date;"
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
            "logText": "Is This a Gift or a Loan?: Offer help instead of cash."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does an unclear 'loan' cause more trouble than a clear gift?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A gift risks the cash but not the friendship; a loan risks both if it's not repaid."
  },
  {
    "id": "ctx-river-gig-cancel-fee",
    "title": "The Late-Cancel Penalty",
    "prompt": "You booked a paid task slot but a late cancellation costs a $10 penalty. Something better came up.",
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
        "label": "Honor the commitment;",
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
            "feedback": "Honor the commitment; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Honor the commitment; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Late-Cancel Penalty: Honor the commitment;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Cancel and pay $10;",
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
            "feedback": "Cancel and pay $10; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cancel and pay $10; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Late-Cancel Penalty: Cancel and pay $10;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask to swap the slot with someone.",
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
            "feedback": "Ask to swap the slot with someone. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask to swap the slot with someone. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Late-Cancel Penalty: Ask to swap the slot with someone."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do penalties shape whether you keep a commitment?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The better opportunity may beat the $10 — or your reliability may be worth more."
  },
  {
    "id": "ctx-river-group-buy-leftover",
    "title": "Who Gets the Change?",
    "prompt": "Four friends pool $50 for snacks but spend $47. There's $3 left and a debate over it.",
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
        "label": "Return $0.75 to each (split evenly);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -47
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Return $0.75 to each (split evenly); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Return $0.75 to each (split evenly); changes the route and creates a finance tradeoff to notice.",
            "logText": "Who Gets the Change?: Return $0.75 to each (split evenly);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save it in a group jar for next time;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -47
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Save it in a group jar for next time; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save it in a group jar for next time; changes the route and creates a finance tradeoff to notice.",
            "logText": "Who Gets the Change?: Save it in a group jar for next time;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Give it to whoever organized.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -47
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Give it to whoever organized. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Give it to whoever organized. changes the route and creates a finance tradeoff to notice.",
            "logText": "Who Gets the Change?: Give it to whoever organized."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you handle leftover shared money fairly?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting is fair; a group jar is practical — both can be reasonable with agreement."
  },
  {
    "id": "ctx-river-inheritance-placeholder-fund",
    "title": "A Small Windfall",
    "prompt": "You receive an unexpected $500 (a gift from a relative). It's tempting to spend it fast.",
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
        "label": "Split: cushion / goal / a small treat;",
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
            "feedback": "Split: cushion / goal / a small treat; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split: cushion / goal / a small treat; changes the route and creates a finance tradeoff to notice.",
            "logText": "A Small Windfall: Split: cushion / goal / a small treat;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Invest most of it for the long term;",
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
            "feedback": "Invest most of it for the long term; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Invest most of it for the long term; changes the route and creates a finance tradeoff to notice.",
            "logText": "A Small Windfall: Invest most of it for the long term;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend it now.",
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
            "feedback": "Spend it now. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Spend it now. changes the route and creates a finance tradeoff to notice.",
            "logText": "A Small Windfall: Spend it now."
          }
        ]
      }
    ],
    "reflectionPrompt": "Does a windfall deserve a different plan than regular income?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting balances joy and growth; spending it all is valid if your bases are covered."
  },
  {
    "id": "ctx-river-insurance-deductible-pick",
    "title": "High or Low Deductible?",
    "prompt": "Renter insurance: Plan A is $15/month with a $250 deductible; Plan B is $10/month with a $600 deductible.",
    "topics": [
      "budgeting",
      "insurance",
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
        "label": "Plan A (pay more monthly, less if you claim);",
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
            "feedback": "Plan A (pay more monthly, less if you claim); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Plan A (pay more monthly, less if you claim); changes the route and creates a finance tradeoff to notice.",
            "logText": "High or Low Deductible?: Plan A (pay more monthly, less if you claim);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Plan B (pay less monthly, more if you claim);",
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
            "feedback": "Plan B (pay less monthly, more if you claim); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Plan B (pay less monthly, more if you claim); changes the route and creates a finance tradeoff to notice.",
            "logText": "High or Low Deductible?: Plan B (pay less monthly, more if you claim);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick based on your cushion size.",
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
            "feedback": "Pick based on your cushion size. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pick based on your cushion size. changes the route and creates a finance tradeoff to notice.",
            "logText": "High or Low Deductible?: Pick based on your cushion size."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does your savings cushion change which deductible fits?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Low deductible suits a thin cushion; high deductible saves monthly if you can absorb a big claim."
  },
  {
    "id": "ctx-river-internet-reliability-plan",
    "title": "Spotty Wifi Tradeoff",
    "prompt": "Your home wifi is unreliable. A more reliable plan costs $10 more/month; or you can rely on free library wifi for heavy tasks.",
    "topics": [
      "scams",
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
        "label": "Upgrade for $10/month;",
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
            "feedback": "Upgrade for $10/month; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Upgrade for $10/month; changes the route and creates a finance tradeoff to notice.",
            "logText": "Spotty Wifi Tradeoff: Upgrade for $10/month;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use free library wifi for big tasks;",
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
            "feedback": "Use free library wifi for big tasks; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use free library wifi for big tasks; changes the route and creates a finance tradeoff to notice.",
            "logText": "Spotty Wifi Tradeoff: Use free library wifi for big tasks;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep current plan, work around outages.",
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
            "feedback": "Keep current plan, work around outages. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep current plan, work around outages. changes the route and creates a finance tradeoff to notice.",
            "logText": "Spotty Wifi Tradeoff: Keep current plan, work around outages."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying for reliability worth it?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying buys convenience; the free route saves cash but costs travel time — models a context variable, not a personal flaw."
  },
  {
    "id": "ctx-river-late-fee-snowball",
    "title": "One Missed Payment",
    "prompt": "You miss a $40 payment; there's a $10 late fee, and missing again adds another.",
    "topics": [
      "banking",
      "consumer-skills",
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
        "label": "Pay $50 now, set autopay;",
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
            "feedback": "Pay $50 now, set autopay; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $50 now, set autopay; changes the route and creates a finance tradeoff to notice.",
            "logText": "One Missed Payment: Pay $50 now, set autopay;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait, risk a second $10 fee;",
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
            "feedback": "Wait, risk a second $10 fee; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait, risk a second $10 fee; changes the route and creates a finance tradeoff to notice.",
            "logText": "One Missed Payment: Wait, risk a second $10 fee;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay now, no autopay.",
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
            "feedback": "Pay now, no autopay. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay now, no autopay. changes the route and creates a finance tradeoff to notice.",
            "logText": "One Missed Payment: Pay now, no autopay."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does autopay protect you from fee snowballs?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Autopay prevents misses but needs a funded account; manual keeps control but risks forgetting."
  },
  {
    "id": "ctx-river-library-card-roi",
    "title": "The Free Card That Pays",
    "prompt": "A free library card gets you books, free wifi, and a maker space. A friend says \"libraries are boring.\" You have limited free afternoons.",
    "topics": [
      "money-values",
      "scams"
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
        "label": "Sign up, try the maker space",
        "description": "→ opportunity +, time spent;",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Sign up, try the maker space changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sign up, try the maker space changes the route and creates a finance tradeoff to notice.",
            "logText": "The Free Card That Pays: Sign up, try the maker space"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it;",
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
            "feedback": "Skip it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip it; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Free Card That Pays: Skip it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Sign up and bring the friend",
        "description": "*SC*.",
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
            "feedback": "Sign up and bring the friend changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sign up and bring the friend changes the route and creates a finance tradeoff to notice.",
            "logText": "The Free Card That Pays: Sign up and bring the friend"
          }
        ]
      }
    ],
    "reflectionPrompt": "What free thing near you could open a door?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The card is free, but your *time* using it isn't — both choices are reasonable."
  },
  {
    "id": "ctx-river-library-late-fee",
    "title": "The Forgotten Return",
    "prompt": "You forgot to return borrowed equipment; it's now $0.50/day late, 8 days over.",
    "topics": [
      "credit",
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
        "label": "Return now, pay $4.00;",
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
            "feedback": "Return now, pay $4.00; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Return now, pay $4.00; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Forgotten Return: Return now, pay $4.00;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it \"to get your money's worth\" (more fees);",
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
            "feedback": "Keep it \"to get your money's worth\" (more fees); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it \"to get your money's worth\" (more fees); changes the route and creates a finance tradeoff to notice.",
            "logText": "The Forgotten Return: Keep it \"to get your money's worth\" (more fees);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a return reminder system going forward.",
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
            "feedback": "Set a return reminder system going forward. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set a return reminder system going forward. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Forgotten Return: Set a return reminder system going forward."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do small daily fees become a big number?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying now stops the bleed; a reminder system prevents the next one."
  },
  {
    "id": "ctx-river-library-printing-fee",
    "title": "Free Until You Print",
    "prompt": "The library is free, but printing your 40-page project is $0.10/page.",
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
        "label": "Print all 40 pages ($4.00);",
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
            "feedback": "Print all 40 pages ($4.00); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Print all 40 pages ($4.00); changes the route and creates a finance tradeoff to notice.",
            "logText": "Free Until You Print: Print all 40 pages ($4.00);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Print only the 12 essential pages ($1.20);",
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
            "feedback": "Print only the 12 essential pages ($1.20); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Print only the 12 essential pages ($1.20); changes the route and creates a finance tradeoff to notice.",
            "logText": "Free Until You Print: Print only the 12 essential pages ($1.20);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Submit it digitally for free.",
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
            "feedback": "Submit it digitally for free. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Submit it digitally for free. changes the route and creates a finance tradeoff to notice.",
            "logText": "Free Until You Print: Submit it digitally for free."
          }
        ]
      }
    ],
    "reflectionPrompt": "What 'free' things have small costs hiding inside?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Digital is cheapest but not always accepted; printing essentials balances cost and need."
  },
  {
    "id": "ctx-river-loan-friend-co-buy",
    "title": "Co-Owning a Console",
    "prompt": "You and one friend split a $160 console, $80 each. Months later, your friend wants to sell their half.",
    "topics": [
      "credit",
      "money-values",
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
        "label": "Buy their half for $60 (used value), own it fully;",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Buy their half for $60 (used value), own it fully; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy their half for $60 (used value), own it fully; changes the route and creates a finance tradeoff to notice.",
            "logText": "Co-Owning a Console: Buy their half for $60 (used value), own it fully;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell the whole thing, split the proceeds;",
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
            "feedback": "Sell the whole thing, split the proceeds; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell the whole thing, split the proceeds; changes the route and creates a finance tradeoff to notice.",
            "logText": "Co-Owning a Console: Sell the whole thing, split the proceeds;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Agree on a rotation/return plan instead.",
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
            "feedback": "Agree on a rotation/return plan instead. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Agree on a rotation/return plan instead. changes the route and creates a finance tradeoff to notice.",
            "logText": "Co-Owning a Console: Agree on a rotation/return plan instead."
          }
        ]
      }
    ],
    "reflectionPrompt": "What should co-owners agree on *before* buying?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Buying them out gives full control but more cash out; selling is clean but ends the perk."
  },
  {
    "id": "ctx-river-maker-space-skill",
    "title": "Learn It for Free",
    "prompt": "A free community workshop teaches a skill you could later charge for. It costs 6 weekend hours.",
    "topics": [
      "career"
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
        "label": "Attend, build the skill",
        "description": "→ opportunity +, time spent;",
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
            "feedback": "Attend, build the skill changes the route and creates a finance tradeoff to notice.",
            "explanation": "Attend, build the skill changes the route and creates a finance tradeoff to notice.",
            "logText": "Learn It for Free: Attend, build the skill"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip, keep your weekends;",
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
            "feedback": "Skip, keep your weekends; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip, keep your weekends; changes the route and creates a finance tradeoff to notice.",
            "logText": "Learn It for Free: Skip, keep your weekends;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Attend with a friend and split practice time",
        "description": "*SC*.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Attend with a friend and split practice time changes the route and creates a finance tradeoff to notice.",
            "explanation": "Attend with a friend and split practice time changes the route and creates a finance tradeoff to notice.",
            "logText": "Learn It for Free: Attend with a friend and split practice time"
          }
        ]
      }
    ],
    "reflectionPrompt": "Can something you learn count as an asset?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Free skill-building costs time you can't get back — rest and fun matter too."
  },
  {
    "id": "ctx-river-meal-prep-vs-buy",
    "title": "Pack or Buy Lunch?",
    "prompt": "Buying lunch is $6/day; packing one is about $2/day. Over a 5-day week that adds up.",
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
        "label": "Pack all 5 days;",
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
            "feedback": "Pack all 5 days; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pack all 5 days; changes the route and creates a finance tradeoff to notice.",
            "logText": "Pack or Buy Lunch?: Pack all 5 days;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy all 5 days;",
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
            "feedback": "Buy all 5 days; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy all 5 days; changes the route and creates a finance tradeoff to notice.",
            "logText": "Pack or Buy Lunch?: Buy all 5 days;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pack 3, buy 2.",
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
            "feedback": "Pack 3, buy 2. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pack 3, buy 2. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pack or Buy Lunch?: Pack 3, buy 2."
          }
        ]
      }
    ],
    "reflectionPrompt": "How big is a small daily difference over a month?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Packing saves money but costs prep time; mixing balances cost and convenience."
  },
  {
    "id": "ctx-river-mentor-skill-trade",
    "title": "Skills for Skills",
    "prompt": "A mentor offers to teach you a paid skill if you help them with something you're already good at. No money changes hands.",
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
        "label": "Trade skills",
        "description": "both gain, no cash;",
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
            "feedback": "Trade skills changes the route and creates a finance tradeoff to notice.",
            "explanation": "Trade skills changes the route and creates a finance tradeoff to notice.",
            "logText": "Skills for Skills: Trade skills"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Offer to pay instead;",
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
            "feedback": "Offer to pay instead; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Offer to pay instead; changes the route and creates a finance tradeoff to notice.",
            "logText": "Skills for Skills: Offer to pay instead;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline, learn alone online.",
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
            "feedback": "Decline, learn alone online. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline, learn alone online. changes the route and creates a finance tradeoff to notice.",
            "logText": "Skills for Skills: Decline, learn alone online."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is trading time or skills better than paying?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Bartering saves cash but costs your time; paying is faster but spends money."
  },
  {
    "id": "ctx-river-micro-invest-roundup",
    "title": "Spare-Change Investing",
    "prompt": "A tool rounds up purchases to the nearest dollar and invests the change. About $0.50/purchase, ~40 purchases/month.",
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
        "label": "Turn it on",
        "description": "invests ~$20/month painlessly;",
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
            "feedback": "Turn it on changes the route and creates a finance tradeoff to notice.",
            "explanation": "Turn it on changes the route and creates a finance tradeoff to notice.",
            "logText": "Spare-Change Investing: Turn it on"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it, invest deliberately instead;",
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
            "feedback": "Skip it, invest deliberately instead; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip it, invest deliberately instead; changes the route and creates a finance tradeoff to notice.",
            "logText": "Spare-Change Investing: Skip it, invest deliberately instead;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn it on but cap it monthly.",
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
            "feedback": "Turn it on but cap it monthly. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Turn it on but cap it monthly. changes the route and creates a finance tradeoff to notice.",
            "logText": "Spare-Change Investing: Turn it on but cap it monthly."
          }
        ]
      }
    ],
    "reflectionPrompt": "Does making saving invisible help or hide it from you?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Painless saving builds funds quietly; deliberate saving keeps you more aware of the total."
  },
  {
    "id": "ctx-river-non-payer-friend",
    "title": "One Friend Fell Behind",
    "prompt": "Five of you pledged $12 each for a $60 group gift. One friend can't pay this week and feels embarrassed.",
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
        "label": "Cover their $12, quietly note it;",
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
            "feedback": "Cover their $12, quietly note it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cover their $12, quietly note it; changes the route and creates a finance tradeoff to notice.",
            "logText": "One Friend Fell Behind: Cover their $12, quietly note it;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Lower the gift to $48 so it's $9.60 each;",
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
            "feedback": "Lower the gift to $48 so it's $9.60 each; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Lower the gift to $48 so it's $9.60 each; changes the route and creates a finance tradeoff to notice.",
            "logText": "One Friend Fell Behind: Lower the gift to $48 so it's $9.60 each;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if they'd rather contribute time/effort instead",
        "description": "*SC*.",
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
            "feedback": "Ask if they'd rather contribute time/effort instead changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask if they'd rather contribute time/effort instead changes the route and creates a finance tradeoff to notice.",
            "logText": "One Friend Fell Behind: Ask if they'd rather contribute time/effort instead"
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you handle a shortfall without shaming anyone?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Covering is generous but can strain you; adjusting shares the cost kindly."
  },
  {
    "id": "ctx-river-odd-total-budget",
    "title": "The $47 Problem",
    "prompt": "You have exactly $47 for the week: a $19 need, a $13 maybe, and an $11 want all tempt you.",
    "topics": [
      "budgeting",
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
        "label": "Need only, save $28;",
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
            "feedback": "Need only, save $28; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Need only, save $28; changes the route and creates a finance tradeoff to notice.",
            "logText": "The $47 Problem: Need only, save $28;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Need + maybe = $32, save $15;",
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
            "feedback": "Need + maybe = $32, save $15; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Need + maybe = $32, save $15; changes the route and creates a finance tradeoff to notice.",
            "logText": "The $47 Problem: Need + maybe = $32, save $15;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "All three = $43, save $4.",
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
            "feedback": "All three = $43, save $4. changes the route and creates a finance tradeoff to notice.",
            "explanation": "All three = $43, save $4. changes the route and creates a finance tradeoff to notice.",
            "logText": "The $47 Problem: All three = $43, save $4."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did the odd number make you actually subtract instead of guess?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Spending more isn't wrong — it's a smaller cushion for a fuller week."
  },
  {
    "id": "ctx-river-official-looking-message",
    "title": "Looks Official",
    "prompt": "A message with a convincing logo says your account \"needs verification\" within 24 hours or it'll be locked.",
    "topics": [
      "budgeting"
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
        "label": "Don't click; check the real account directly",
        "description": "→ safe;",
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
            "feedback": "Don't click; check the real account directly changes the route and creates a finance tradeoff to notice.",
            "explanation": "Don't click; check the real account directly changes the route and creates a finance tradeoff to notice.",
            "logText": "Looks Official: Don't click; check the real account directly"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Click the link to \"fix it fast",
        "description": "→ randomized exposure;",
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
            "feedback": "Click the link to \"fix it fast changes the route and creates a finance tradeoff to notice.",
            "explanation": "Click the link to \"fix it fast changes the route and creates a finance tradeoff to notice.",
            "logText": "Looks Official: Click the link to \"fix it fast"
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
            "logText": "Looks Official: Click the link to \"fix it fast met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult to look first.",
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
            "feedback": "Ask a trusted adult to look first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a trusted adult to look first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Looks Official: Ask a trusted adult to look first."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which mattered more here — the logo or the urgency?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "New twist vs. typical phishing — the bait is *authority and a deadline*, not free money."
  },
  {
    "id": "ctx-river-overdraft-optin",
    "title": "Opt In to Overdraft?",
    "prompt": "Your bank asks if you want overdraft \"protection\" that lets purchases go through for a $35 fee, or to have them simply declined for free.",
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
                "amount": 3
              }
            ],
            "feedback": "Decline overdraft changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline overdraft changes the route and creates a finance tradeoff to notice.",
            "logText": "Opt In to Overdraft?: Decline overdraft"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Opt in for \"protection\";",
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
            "feedback": "Opt in for \"protection\"; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Opt in for \"protection\"; changes the route and creates a finance tradeoff to notice.",
            "logText": "Opt In to Overdraft?: Opt in for \"protection\";"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Opt in but set low-balance alerts.",
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
            "feedback": "Opt in but set low-balance alerts. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Opt in but set low-balance alerts. changes the route and creates a finance tradeoff to notice.",
            "logText": "Opt In to Overdraft?: Opt in but set low-balance alerts."
          }
        ]
      }
    ],
    "reflectionPrompt": "Is 'protection' that charges $35 really protecting you?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Opting out avoids fees but risks a declined card at checkout; alerts reduce both risks."
  },
  {
    "id": "ctx-river-pay-frequency-feel",
    "title": "Weekly or Monthly?",
    "prompt": "Same $1,200/month job, but you can be paid $300 weekly or $1,200 once a month.",
    "topics": [
      "consumer-skills",
      "money-values",
      "career",
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
        "label": "Weekly",
        "description": "smoother cash flow, easier to manage;",
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
            "feedback": "Weekly changes the route and creates a finance tradeoff to notice.",
            "explanation": "Weekly changes the route and creates a finance tradeoff to notice.",
            "logText": "Weekly or Monthly?: Weekly"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Monthly",
        "description": "one big deposit, needs planning;",
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
            "feedback": "Monthly changes the route and creates a finance tradeoff to notice.",
            "explanation": "Monthly changes the route and creates a finance tradeoff to notice.",
            "logText": "Weekly or Monthly?: Monthly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Whatever the bills' timing favors.",
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
            "feedback": "Whatever the bills' timing favors. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Whatever the bills' timing favors. changes the route and creates a finance tradeoff to notice.",
            "logText": "Weekly or Monthly?: Whatever the bills' timing favors."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does pay timing change how you'd budget?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Weekly is easier to manage; monthly can build discipline but risks early-month overspending."
  },
  {
    "id": "ctx-river-payday-before-bill",
    "title": "The Bill Came First",
    "prompt": "Your $60 phone bill is due on the 10th, but you're not paid until the 15th. You have $45 now.",
    "topics": [
      "budgeting",
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
        "label": "Move the due date to after payday;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 15
              }
            ],
            "feedback": "Move the due date to after payday; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Move the due date to after payday; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Bill Came First: Move the due date to after payday;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep a $20 buffer next month so this can't repeat;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 20
              }
            ],
            "feedback": "Keep a $20 buffer next month so this can't repeat; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep a $20 buffer next month so this can't repeat; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Bill Came First: Keep a $20 buffer next month so this can't repeat;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Risk a late fee.",
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
            "feedback": "Risk a late fee. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Risk a late fee. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Bill Came First: Risk a late fee."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a small buffer fix a timing gap for good?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Shifting the date is easy now; a buffer is more work but permanent."
  },
  {
    "id": "ctx-river-phone-financing-zero-percent",
    "title": "Zero Percent — Really Free?",
    "prompt": "A $600 phone is offered at \"0% interest, $25/month for 24 months.\" It truly has no interest — but locks you in for 2 years.",
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
        "label": "Pay $600 upfront if you can;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -600
              }
            ],
            "feedback": "Pay $600 upfront if you can; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $600 upfront if you can; changes the route and creates a finance tradeoff to notice.",
            "logText": "Zero Percent — Really Free?: Pay $600 upfront if you can;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take the 0% plan, commit to $25/month;",
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
            "feedback": "Take the 0% plan, commit to $25/month; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Take the 0% plan, commit to $25/month; changes the route and creates a finance tradeoff to notice.",
            "logText": "Zero Percent — Really Free?: Take the 0% plan, commit to $25/month;"
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Buy a cheaper phone outright. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy a cheaper phone outright. changes the route and creates a finance tradeoff to notice.",
            "logText": "Zero Percent — Really Free?: Buy a cheaper phone outright."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the real catch in a true 0% offer?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "0% is genuinely free money-wise, but the 2-year lock-in is the real cost."
  },
  {
    "id": "ctx-river-phone-overage",
    "title": "You Went Over",
    "prompt": "Your $25 phone plan has a data cap. This month you went over and got a $15 overage fee.",
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
    "baseWeight": 18,
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
                "amount": 3
              }
            ],
            "feedback": "Upsize to a $35 unlimited plan; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Upsize to a $35 unlimited plan; changes the route and creates a finance tradeoff to notice.",
            "logText": "You Went Over: Upsize to a $35 unlimited plan;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep the $25 plan and change usage habits;",
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
            "feedback": "Keep the $25 plan and change usage habits; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep the $25 plan and change usage habits; changes the route and creates a finance tradeoff to notice.",
            "logText": "You Went Over: Keep the $25 plan and change usage habits;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Add a one-time $5 booster only when needed.",
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
            "feedback": "Add a one-time $5 booster only when needed. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Add a one-time $5 booster only when needed. changes the route and creates a finance tradeoff to notice.",
            "logText": "You Went Over: Add a one-time $5 booster only when needed."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying more monthly actually cheaper?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Unlimited removes worry but wastes money if you rarely go over."
  },
  {
    "id": "ctx-river-phone-trade-in-timing",
    "title": "Trade In Before It Drops",
    "prompt": "Your phone's trade-in value is $120 now but typically falls ~$10/month as newer models release.",
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
        "label": "Trade in now at $120;",
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
            "feedback": "Trade in now at $120; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Trade in now at $120; changes the route and creates a finance tradeoff to notice.",
            "logText": "Trade In Before It Drops: Trade in now at $120;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait 3 months (≈$90) but keep using it;",
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
            "feedback": "Wait 3 months (≈$90) but keep using it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait 3 months (≈$90) but keep using it; changes the route and creates a finance tradeoff to notice.",
            "logText": "Trade In Before It Drops: Wait 3 months (≈$90) but keep using it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it as a backup, no trade-in.",
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
            "feedback": "Keep it as a backup, no trade-in. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it as a backup, no trade-in. changes the route and creates a finance tradeoff to notice.",
            "logText": "Trade In Before It Drops: Keep it as a backup, no trade-in."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can waiting to sell something cost you money?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Trading now captures more value; keeping it has its own backup-phone worth."
  },
  {
    "id": "ctx-river-price-history-sale",
    "title": "Is This Sale Real?",
    "prompt": "An item is \"on sale\" for $48. Its price chart shows it's usually $42, spiked to $55, now \"discounted\" to $48.",
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
    "baseWeight": 18,
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
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Wait changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait changes the route and creates a finance tradeoff to notice.",
            "logText": "Is This Sale Real?: Wait"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy",
        "description": "it says \"sale\";",
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
            "feedback": "Buy changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy changes the route and creates a finance tradeoff to notice.",
            "logText": "Is This Sale Real?: Buy"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a price alert for $42 or less.",
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
            "feedback": "Set a price alert for $42 or less. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set a price alert for $42 or less. changes the route and creates a finance tradeoff to notice.",
            "logText": "Is This Sale Real?: Set a price alert for $42 or less."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why read a price's history before trusting 'sale'?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting risks it selling out; buying now risks overpaying for a fake deal."
  },
  {
    "id": "ctx-river-proactive-vs-reactive-repair",
    "title": "Fix the Small Thing Now?",
    "prompt": "Your laptop's battery is weakening. A $50 fix now, or wait until it fails (possibly at a bad time).",
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
        "label": "Fix it now, on your schedule;",
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
            "feedback": "Fix it now, on your schedule; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Fix it now, on your schedule; changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix the Small Thing Now?: Fix it now, on your schedule;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait",
        "description": "→ randomized: lasts a while / dies before an important task;",
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
            "feedback": "Wait changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix the Small Thing Now?: Wait"
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
            "logText": "Fix the Small Thing Now?: Wait met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start a repair fund and watch it.",
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
            "feedback": "Start a repair fund and watch it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Start a repair fund and watch it. changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix the Small Thing Now?: Start a repair fund and watch it."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's the hidden cost of waiting until something fully breaks?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Waiting might stretch the part's life; it also risks failing when you most need it."
  },
  {
    "id": "ctx-river-referral-bonus-trap",
    "title": "Refer a Friend, Get $5",
    "prompt": "An app offers you $5 for each friend who joins and spends $20. A friend doesn't really want it.",
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
        "label": "Don't pressure them",
        "description": "pass;",
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
            "feedback": "Don't pressure them changes the route and creates a finance tradeoff to notice.",
            "explanation": "Don't pressure them changes the route and creates a finance tradeoff to notice.",
            "logText": "Refer a Friend, Get $5: Don't pressure them"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Tell them honestly and let them decide;",
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
            "feedback": "Tell them honestly and let them decide; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Tell them honestly and let them decide; changes the route and creates a finance tradeoff to notice.",
            "logText": "Refer a Friend, Get $5: Tell them honestly and let them decide;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Push them to join for your bonus.",
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
            "feedback": "Push them to join for your bonus. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Push them to join for your bonus. changes the route and creates a finance tradeoff to notice.",
            "logText": "Refer a Friend, Get $5: Push them to join for your bonus."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a reward tempt you to push something on someone?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The $5 is real, but so is your friend's $20 — being upfront respects both."
  },
  {
    "id": "ctx-river-repair-cafe-skill",
    "title": "Fix It Yourself Day",
    "prompt": "A free repair café teaches you to fix a torn backpack instead of buying a new $35 one.",
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
        "label": "Learn the fix, save $35;",
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
            "feedback": "Learn the fix, save $35; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Learn the fix, save $35; changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix It Yourself Day: Learn the fix, save $35;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Just buy a new one;",
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
            "feedback": "Just buy a new one; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Just buy a new one; changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix It Yourself Day: Just buy a new one;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Learn it and teach a friend",
        "description": "*SC*.",
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
            "feedback": "Learn it and teach a friend changes the route and creates a finance tradeoff to notice.",
            "explanation": "Learn it and teach a friend changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix It Yourself Day: Learn it and teach a friend"
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a skill keep paying off after you learn it?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Learning takes time; buying new is instant but spends money repeatedly."
  },
  {
    "id": "ctx-river-repair-or-upgrade-cushion",
    "title": "Fix Cheap or Save for Better?",
    "prompt": "Your $200 bike needs a $60 repair. A better bike is $320. You have $150 saved.",
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
        "label": "Repair for $60, keep saving;",
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
            "feedback": "Repair for $60, keep saving; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Repair for $60, keep saving; changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix Cheap or Save for Better?: Repair for $60, keep saving;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait, save for the $320 bike, ride carefully meanwhile;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -320
              }
            ],
            "feedback": "Wait, save for the $320 bike, ride carefully meanwhile; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait, save for the $320 bike, ride carefully meanwhile; changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix Cheap or Save for Better?: Wait, save for the $320 bike, ride carefully meanwhile;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Repair cheaply and start an upgrade fund.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -320
              }
            ],
            "feedback": "Repair cheaply and start an upgrade fund. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Repair cheaply and start an upgrade fund. changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix Cheap or Save for Better?: Repair cheaply and start an upgrade fund."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does fixing the old one make sense?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Repair is cheap and immediate; saving for better costs more but lasts longer."
  },
  {
    "id": "ctx-river-resell-hold-or-sell",
    "title": "Hold for More?",
    "prompt": "You bought a collectible for $30 to resell. It's worth $45 now, but a friend says \"wait, it'll hit $80.",
    "topics": [
      "banking",
      "money-values"
    ],
    "ageRange": {
      "min": 15,
      "max": 16
    },
    "lifeStages": [
      "high-school"
    ],
    "baseWeight": 18,
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
                "type": "cash",
                "amount": 15
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Sell now, lock $15 profit; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell now, lock $15 profit; changes the route and creates a finance tradeoff to notice.",
            "logText": "Hold for More?: Sell now, lock $15 profit;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Hold for more",
        "description": "→ randomized: rises / falls;",
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
            "feedback": "Hold for more changes the route and creates a finance tradeoff to notice.",
            "explanation": "Hold for more changes the route and creates a finance tradeoff to notice.",
            "logText": "Hold for More?: Hold for more"
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
            "logText": "Hold for More?: Hold for more met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Sell half.",
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
            "feedback": "Sell half. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell half. changes the route and creates a finance tradeoff to notice.",
            "logText": "Hold for More?: Sell half."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is a 'sure thing later' never actually sure?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Greed can win big or give back your profit — selling half splits the difference."
  },
  {
    "id": "ctx-river-restocking-fee",
    "title": "Returns Cost Money?",
    "prompt": "You want to return a $90 item, but there's a 15% restocking fee.",
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
        "label": "Return it, accept the fee;",
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
            "feedback": "Return it, accept the fee; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Return it, accept the fee; changes the route and creates a finance tradeoff to notice.",
            "logText": "Returns Cost Money?: Return it, accept the fee;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it and try to use it;",
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
            "feedback": "Keep it and try to use it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it and try to use it; changes the route and creates a finance tradeoff to notice.",
            "logText": "Returns Cost Money?: Keep it and try to use it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Resell it privately to avoid the fee.",
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
            "feedback": "Resell it privately to avoid the fee. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Resell it privately to avoid the fee. changes the route and creates a finance tradeoff to notice.",
            "logText": "Returns Cost Money?: Resell it privately to avoid the fee."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do some returns cost you money?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Eating the fee is simple; reselling avoids it but takes effort and isn't guaranteed."
  },
  {
    "id": "ctx-river-return-policy-unread",
    "title": "The Tag Says Final Sale",
    "prompt": "You buy a $35 hoodie online without reading the return policy. It arrives too small.",
    "topics": [
      "insurance"
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
        "label": "Check the policy now and act on it",
        "description": "→ randomized: full refund / store credit / final sale;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -35
              }
            ],
            "feedback": "Check the policy now and act on it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Check the policy now and act on it changes the route and creates a finance tradeoff to notice.",
            "logText": "The Tag Says Final Sale: Check the policy now and act on it"
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
            "logText": "The Tag Says Final Sale: Check the policy now and act on it met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep it and hope it stretches;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -35
              }
            ],
            "feedback": "Keep it and hope it stretches; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep it and hope it stretches; changes the route and creates a finance tradeoff to notice.",
            "logText": "The Tag Says Final Sale: Keep it and hope it stretches;"
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
            "logText": "The Tag Says Final Sale: Keep it and hope it stretches; met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Try to resell it.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -35
              }
            ],
            "feedback": "Try to resell it. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Try to resell it. changes the route and creates a finance tradeoff to notice.",
            "logText": "The Tag Says Final Sale: Try to resell it."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why check 'can I return this?' *before* buying?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Reselling can recover some cash but costs effort; keeping it avoids hassle."
  },
  {
    "id": "ctx-river-roommate-utility-split",
    "title": "Splitting the Bills",
    "prompt": "You and two roommates share $90 internet (even) and a power bill that varies. This month power is $120. *(Locked: hasRoommate.)*",
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
        "label": "Split both evenly (internet $30, power $40 each);",
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
            "feedback": "Split both evenly (internet $30, power $40 each); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split both evenly (internet $30, power $40 each); changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting the Bills: Split both evenly (internet $30, power $40 each);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split power by usage;",
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
            "feedback": "Split power by usage; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split power by usage; changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting the Bills: Split power by usage;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Rotate who pays which bill monthly.",
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
            "feedback": "Rotate who pays which bill monthly. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Rotate who pays which bill monthly. changes the route and creates a finance tradeoff to notice.",
            "logText": "Splitting the Bills: Rotate who pays which bill monthly."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which costs make sense to split evenly vs. by use?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Even splits are simple; usage-based feels fairer but is harder to track."
  },
  {
    "id": "ctx-river-savings-goal-deadline",
    "title": "Make the Deadline?",
    "prompt": "You need $90 in 6 weeks for a class trip. You can save $12/week comfortably.",
    "topics": [
      "saving",
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
        "label": "Save $12/week (= $72, short by $18);",
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
            "feedback": "Save $12/week (= $72, short by $18); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save $12/week (= $72, short by $18); changes the route and creates a finance tradeoff to notice.",
            "logText": "Make the Deadline?: Save $12/week (= $72, short by $18);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Boost to $15/week to make it;",
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
            "feedback": "Boost to $15/week to make it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Boost to $15/week to make it; changes the route and creates a finance tradeoff to notice.",
            "logText": "Make the Deadline?: Boost to $15/week to make it;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save $12 + earn an extra $18 once.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 18
              }
            ],
            "feedback": "Save $12 + earn an extra $18 once. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save $12 + earn an extra $18 once. changes the route and creates a finance tradeoff to notice.",
            "logText": "Make the Deadline?: Save $12 + earn an extra $18 once."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you find the weekly rate to hit a deadline?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Boosting weekly is steady; a one-time earning push keeps the weekly amount comfortable."
  },
  {
    "id": "ctx-river-season-pass-guilt",
    "title": "I Already Paid For It",
    "prompt": "You bought a $40 season pass to a weekend activity. Now a better free plan comes up the same day. Part of you says \"but I paid for the pass!",
    "topics": [
      "life-after-high-school"
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
        "label": "Go to the free thing, let the pass go this week;",
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
            "feedback": "Go to the free thing, let the pass go this week; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Go to the free thing, let the pass go this week; changes the route and creates a finance tradeoff to notice.",
            "logText": "I Already Paid For It: Go to the free thing, let the pass go this week;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the pass out of guilt;",
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
            "feedback": "Use the pass out of guilt; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use the pass out of guilt; changes the route and creates a finance tradeoff to notice.",
            "logText": "I Already Paid For It: Use the pass out of guilt;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decide by which you'd actually enjoy now.",
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
            "feedback": "Decide by which you'd actually enjoy now. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decide by which you'd actually enjoy now. changes the route and creates a finance tradeoff to notice.",
            "logText": "I Already Paid For It: Decide by which you'd actually enjoy now."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did 'I already paid' pull on you?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Both can be fine — the lesson is *not letting the past payment alone decide*."
  },
  {
    "id": "ctx-river-seasonal-price-timing",
    "title": "Buy Now or Off-Season?",
    "prompt": "Winter gear is $90 now (in-season) but historically drops to ~$55 off-season — though stock runs low.",
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
        "label": "Buy now at $90, guaranteed;",
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
            "feedback": "Buy now at $90, guaranteed; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy now at $90, guaranteed; changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy Now or Off-Season?: Buy now at $90, guaranteed;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait for ~$55, risk it selling out;",
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
            "feedback": "Wait for ~$55, risk it selling out; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Wait for ~$55, risk it selling out; changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy Now or Off-Season?: Wait for ~$55, risk it selling out;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy last year's model now at a discount.",
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
            "feedback": "Buy last year's model now at a discount. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy last year's model now at a discount. changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy Now or Off-Season?: Buy last year's model now at a discount."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you trade when you wait for a better price?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting saves money but risks missing out — buying now buys certainty."
  },
  {
    "id": "ctx-river-secondhand-vs-new",
    "title": "Used Saves, But...",
    "prompt": "A needed item is $50 new or $28 used (slightly worn, no returns).",
    "topics": [
      "money-values",
      "consumer-skills"
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
        "label": "Buy used, save $22;",
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
            "feedback": "Buy used, save $22; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy used, save $22; changes the route and creates a finance tradeoff to notice.",
            "logText": "Used Saves, But...: Buy used, save $22;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy new for the warranty and return option;",
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
            "feedback": "Buy new for the warranty and return option; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy new for the warranty and return option; changes the route and creates a finance tradeoff to notice.",
            "logText": "Used Saves, But...: Buy new for the warranty and return option;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Inspect the used one carefully first.",
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
            "feedback": "Inspect the used one carefully first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Inspect the used one carefully first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Used Saves, But...: Inspect the used one carefully first."
          }
        ]
      }
    ],
    "reflectionPrompt": "What do you give up when you buy used?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Used saves money but trades away protections — inspection lowers the risk."
  },
  {
    "id": "ctx-river-self-insure-jar",
    "title": "Skip the Warranty, Start a Jar",
    "prompt": "A $40 warranty is offered on a $200 device. You could instead put $40 in a \"self-insure jar\" for any future breakage.",
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
        "label": "Buy the warranty;",
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
            "feedback": "Buy the warranty; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the warranty; changes the route and creates a finance tradeoff to notice.",
            "logText": "Skip the Warranty, Start a Jar: Buy the warranty;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline, fund the jar",
        "description": "→ randomized later: jar covers it / falls short;",
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
            "feedback": "Decline, fund the jar changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline, fund the jar changes the route and creates a finance tradeoff to notice.",
            "logText": "Skip the Warranty, Start a Jar: Decline, fund the jar"
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
            "logText": "Skip the Warranty, Start a Jar: Decline, fund the jar met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline and skip the jar (risk it).",
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
            "feedback": "Decline and skip the jar (risk it). changes the route and creates a finance tradeoff to notice.",
            "explanation": "Decline and skip the jar (risk it). changes the route and creates a finance tradeoff to notice.",
            "logText": "Skip the Warranty, Start a Jar: Decline and skip the jar (risk it)."
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
            "logText": "Skip the Warranty, Start a Jar: Decline and skip the jar (risk it). met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a self-insure jar like and unlike insurance?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "The jar can come out ahead long-term but offers no help if it's empty when something breaks."
  },
  {
    "id": "ctx-river-shared-streaming-plan",
    "title": "Split the Family Plan",
    "prompt": "A $20/month streaming plan allows 4 profiles. Three friends want to split it with you. *(Locked: none.)*",
    "topics": [
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
        "label": "Split 4 ways = $5 each;",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Split 4 ways = $5 each; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split 4 ways = $5 each; changes the route and creates a finance tradeoff to notice.",
            "logText": "Split the Family Plan: Split 4 ways = $5 each;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "You pay, friends pay you back monthly (track it);",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "You pay, friends pay you back monthly (track it); changes the route and creates a finance tradeoff to notice.",
            "explanation": "You pay, friends pay you back monthly (track it); changes the route and creates a finance tradeoff to notice.",
            "logText": "Split the Family Plan: You pay, friends pay you back monthly (track it);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip, use free options.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Skip, use free options. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip, use free options. changes the route and creates a finance tradeoff to notice.",
            "logText": "Split the Family Plan: Skip, use free options."
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes a shared subscription work or fall apart?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Splitting saves money but needs reliable repayment; free options avoid the hassle entirely."
  },
  {
    "id": "ctx-river-skill-cert-payback",
    "title": "Will the Cert Pay Off?",
    "prompt": "An $80 certification could raise your gig pay by about $2/hour. You work ~10 hours/week.",
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
        "label": "Earn it",
        "description": "figure the payback;",
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
            "feedback": "Earn it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Earn it changes the route and creates a finance tradeoff to notice.",
            "logText": "Will the Cert Pay Off?: Earn it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it;",
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
            "feedback": "Skip it; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip it; changes the route and creates a finance tradeoff to notice.",
            "logText": "Will the Cert Pay Off?: Skip it;"
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
                "type": "cash",
                "amount": -80
              }
            ],
            "feedback": "Find a free version first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Find a free version first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Will the Cert Pay Off?: Find a free version first."
          }
        ]
      }
    ],
    "reflectionPrompt": "How do you know when a cost 'pays for itself'?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Worth it if you'll work enough hours to earn back the cost; otherwise skip or find free."
  },
  {
    "id": "ctx-river-split-deposit-auto",
    "title": "Pay Yourself First",
    "prompt": "You can auto-route 15% of each paycheck to savings before you ever see it. Right now you save \"whatever's left,\" which is usually $0.",
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
        "label": "Auto-route 15%;",
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
            "feedback": "Auto-route 15%; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Auto-route 15%; changes the route and creates a finance tradeoff to notice.",
            "logText": "Pay Yourself First: Auto-route 15%;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep saving manually;",
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
            "feedback": "Keep saving manually; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep saving manually; changes the route and creates a finance tradeoff to notice.",
            "logText": "Pay Yourself First: Keep saving manually;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start at 5% and raise it later.",
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
            "feedback": "Start at 5% and raise it later. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Start at 5% and raise it later. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pay Yourself First: Start at 5% and raise it later."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does automatic saving beat relying on willpower?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Auto-saving builds funds reliably; manual keeps flexibility if your income is unsteady."
  },
  {
    "id": "ctx-river-student-loan-size",
    "title": "How Much to Borrow?",
    "prompt": "You can borrow $4,000 (covers extras) or $2,500 (covers essentials, you work part-time for the rest).",
    "topics": [
      "credit",
      "money-values",
      "career"
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
        "label": "Borrow $4,000, more comfort now;",
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
            "feedback": "Borrow $4,000, more comfort now; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow $4,000, more comfort now; changes the route and creates a finance tradeoff to notice.",
            "logText": "How Much to Borrow?: Borrow $4,000, more comfort now;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow $2,500, work to fill the gap;",
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
            "feedback": "Borrow $2,500, work to fill the gap; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow $2,500, work to fill the gap; changes the route and creates a finance tradeoff to notice.",
            "logText": "How Much to Borrow?: Borrow $2,500, work to fill the gap;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow $2,500 and seek a small scholarship.",
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
            "feedback": "Borrow $2,500 and seek a small scholarship. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow $2,500 and seek a small scholarship. changes the route and creates a finance tradeoff to notice.",
            "logText": "How Much to Borrow?: Borrow $2,500 and seek a small scholarship."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why borrow less even when more is offered?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing more eases now but costs more later; borrowing less means working during school."
  },
  {
    "id": "ctx-river-subscription-pause",
    "title": "Pause Instead of Cancel",
    "prompt": "A $9/month service you like but won't use this summer offers a free 3-month pause.",
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
        "label": "Pause it",
        "description": "save $27, keep your settings;",
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
            "feedback": "Pause it changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pause it changes the route and creates a finance tradeoff to notice.",
            "logText": "Pause Instead of Cancel: Pause it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Cancel fully;",
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
            "feedback": "Cancel fully; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cancel fully; changes the route and creates a finance tradeoff to notice.",
            "logText": "Pause Instead of Cancel: Cancel fully;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep paying \"to not lose my place.",
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
            "feedback": "Keep paying \"to not lose my place. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep paying \"to not lose my place. changes the route and creates a finance tradeoff to notice.",
            "logText": "Pause Instead of Cancel: Keep paying \"to not lose my place."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might pausing beat both canceling and paying?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Pausing saves money now; canceling fully avoids forgetting to un-pause."
  },
  {
    "id": "ctx-river-tip-percent-mental",
    "title": "Quick Tip Math",
    "prompt": "A $36 bill needs a tip. You want to leave about 18%.",
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
        "label": "Find 10% ($3.60), add half again ($1.80) = $5.40;",
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
            "feedback": "Find 10% ($3.60), add half again ($1.80) = $5.40; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Find 10% ($3.60), add half again ($1.80) = $5.40; changes the route and creates a finance tradeoff to notice.",
            "logText": "Quick Tip Math: Find 10% ($3.60), add half again ($1.80) = $5.40;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Round to 20% = $7.20;",
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
            "feedback": "Round to 20% = $7.20; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Round to 20% = $7.20; changes the route and creates a finance tradeoff to notice.",
            "logText": "Quick Tip Math: Round to 20% = $7.20;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Estimate \"about $6.",
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
            "feedback": "Estimate \"about $6. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate \"about $6. changes the route and creates a finance tradeoff to notice.",
            "logText": "Quick Tip Math: Estimate \"about $6."
          }
        ]
      }
    ],
    "reflectionPrompt": "How does finding 10% first make percents easier?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "20% is simpler and more generous; the 10%-plus-half trick is more exact."
  },
  {
    "id": "ctx-river-tool-as-asset",
    "title": "Buy the Drill or Rent It?",
    "prompt": "A project needs a drill. Buying is $60 (yours to keep, occasional reuse); renting is $12/use.",
    "topics": [
      "budgeting",
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
        "label": "Buy",
        "description": "pays off after 5 uses;",
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
            "feedback": "Buy changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy the Drill or Rent It?: Buy"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Rent",
        "description": "cheaper if you'll use it once or twice;",
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
            "feedback": "Rent changes the route and creates a finance tradeoff to notice.",
            "explanation": "Rent changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy the Drill or Rent It?: Rent"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow from a neighbor first",
        "description": "*SC*.",
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
            "feedback": "Borrow from a neighbor first changes the route and creates a finance tradeoff to notice.",
            "explanation": "Borrow from a neighbor first changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy the Drill or Rent It?: Borrow from a neighbor first"
          }
        ]
      }
    ],
    "reflectionPrompt": "When does owning beat renting?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Owning saves long-term *if* you use it; otherwise it's clutter you paid for."
  },
  {
    "id": "ctx-river-total-cost-snapshot",
    "title": "Add Up the Whole Year",
    "prompt": "You list your recurring costs: $9 streaming, $25 phone, $5 app, $15 transit — all monthly. The total surprises you.",
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
        "label": "Annualize them all and review;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -9
              }
            ],
            "feedback": "Annualize them all and review; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Annualize them all and review; changes the route and creates a finance tradeoff to notice.",
            "logText": "Add Up the Whole Year: Annualize them all and review;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Estimate roughly;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -9
              }
            ],
            "feedback": "Estimate roughly; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Estimate roughly; changes the route and creates a finance tradeoff to notice.",
            "logText": "Add Up the Whole Year: Estimate roughly;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Walk through it with a mentor",
        "description": "*SC*.",
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
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Walk through it with a mentor changes the route and creates a finance tradeoff to notice.",
            "explanation": "Walk through it with a mentor changes the route and creates a finance tradeoff to notice.",
            "logText": "Add Up the Whole Year: Walk through it with a mentor"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which recurring cost would you cut first, and why?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Every subscription has value to *someone* — the point is seeing the yearly total, not cutting blindly."
  },
  {
    "id": "ctx-river-two-goal-split",
    "title": "Camera and Class Trip",
    "prompt": "You save $40/month. A $200 camera and a $120 class trip both matter; the trip is due in 4 months.",
    "topics": [
      "budgeting",
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
        "label": "All to the trip first ($120 in 3 months), then camera;",
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
            "feedback": "All to the trip first ($120 in 3 months), then camera; changes the route and creates a finance tradeoff to notice.",
            "explanation": "All to the trip first ($120 in 3 months), then camera; changes the route and creates a finance tradeoff to notice.",
            "logText": "Camera and Class Trip: All to the trip first ($120 in 3 months), then camera;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split 50/50 ($20 each) and risk missing the trip deadline;",
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
            "feedback": "Split 50/50 ($20 each) and risk missing the trip deadline; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split 50/50 ($20 each) and risk missing the trip deadline; changes the route and creates a finance tradeoff to notice.",
            "logText": "Camera and Class Trip: Split 50/50 ($20 each) and risk missing the trip deadline;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "70% trip / 30% camera.",
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
            "feedback": "70% trip / 30% camera. changes the route and creates a finance tradeoff to notice.",
            "explanation": "70% trip / 30% camera. changes the route and creates a finance tradeoff to notice.",
            "logText": "Camera and Class Trip: 70% trip / 30% camera."
          }
        ]
      }
    ],
    "reflectionPrompt": "When does a deadline decide your split?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Even splitting feels fair but can miss a hard deadline."
  },
  {
    "id": "ctx-river-unit-convert-cereal",
    "title": "Per Box or Per Ounce?",
    "prompt": "Cereal A: 12 oz for $3.00. Cereal B: 18 oz for $4.05. The bigger box *looks* pricier.",
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
        "label": "Compare per ounce ($0.25 vs. $0.225);",
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
            "feedback": "Compare per ounce ($0.25 vs. $0.225); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare per ounce ($0.25 vs. $0.225); changes the route and creates a finance tradeoff to notice.",
            "logText": "Per Box or Per Ounce?: Compare per ounce ($0.25 vs. $0.225);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the smaller box (lower sticker);",
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
            "feedback": "Buy the smaller box (lower sticker); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy the smaller box (lower sticker); changes the route and creates a finance tradeoff to notice.",
            "logText": "Per Box or Per Ounce?: Buy the smaller box (lower sticker);"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy whichever you'll finish before it goes stale.",
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
            "feedback": "Buy whichever you'll finish before it goes stale. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy whichever you'll finish before it goes stale. changes the route and creates a finance tradeoff to notice.",
            "logText": "Per Box or Per Ounce?: Buy whichever you'll finish before it goes stale."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why convert to the same unit before comparing?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The cheaper-per-ounce box wastes money if it goes stale before you finish it."
  },
  {
    "id": "ctx-river-verify-charity-ask",
    "title": "A Cause Texts You",
    "prompt": "A message asks for a quick donation to a cause, urging you to \"give now\" via a link.",
    "topics": [
      "scams",
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
        "label": "Don't use the link; look up the cause directly to give",
        "description": "→ safe;",
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
            "feedback": "Don't use the link; look up the cause directly to give changes the route and creates a finance tradeoff to notice.",
            "explanation": "Don't use the link; look up the cause directly to give changes the route and creates a finance tradeoff to notice.",
            "logText": "A Cause Texts You: Don't use the link; look up the cause directly to give"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Tap and donate fast",
        "description": "→ randomized risk;",
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
            "feedback": "Tap and donate fast changes the route and creates a finance tradeoff to notice.",
            "explanation": "Tap and donate fast changes the route and creates a finance tradeoff to notice.",
            "logText": "A Cause Texts You: Tap and donate fast"
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
            "logText": "A Cause Texts You: Tap and donate fast met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult to verify first.",
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
            "feedback": "Ask a trusted adult to verify first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a trusted adult to verify first. changes the route and creates a finance tradeoff to notice.",
            "logText": "A Cause Texts You: Ask a trusted adult to verify first."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can you give safely without falling for a fake ask?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Giving is good; verifying first ensures the money reaches the real cause."
  },
  {
    "id": "ctx-river-verify-job-offer",
    "title": "Too Easy a Job",
    "prompt": "A local \"job\" posts great pay for vague work and asks you to buy supplies upfront, promising reimbursement.",
    "topics": [
      "scams",
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
        "label": "Run the Source Verifier (who, verify, rush?)",
        "description": "→ flags it;",
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
            "feedback": "Run the Source Verifier (who, verify, rush?) changes the route and creates a finance tradeoff to notice.",
            "explanation": "Run the Source Verifier (who, verify, rush?) changes the route and creates a finance tradeoff to notice.",
            "logText": "Too Easy a Job: Run the Source Verifier (who, verify, rush?)"
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
            "logText": "Too Easy a Job: Run the Source Verifier (who, verify, rush?) met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay for supplies to \"get started",
        "description": "→ randomized loss;",
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
            "feedback": "Pay for supplies to \"get started changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay for supplies to \"get started changes the route and creates a finance tradeoff to notice.",
            "logText": "Too Easy a Job: Pay for supplies to \"get started"
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
            "logText": "Too Easy a Job: Pay for supplies to \"get started met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask to verify the employer independently first.",
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
            "feedback": "Ask to verify the employer independently first. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask to verify the employer independently first. changes the route and creates a finance tradeoff to notice.",
            "logText": "Too Easy a Job: Ask to verify the employer independently first."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the verifier catch that excitement missed?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Verifying costs a little time; skipping it can cost real money."
  },
  {
    "id": "ctx-river-wage-tip-average",
    "title": "What's a Normal Week?",
    "prompt": "Your tip income over 4 weeks was $80, $140, $60, $120. You need to budget around a typical week.",
    "topics": [
      "budgeting",
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
        "label": "Budget on the average ($100);",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 4
              }
            ],
            "feedback": "Budget on the average ($100); changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget on the average ($100); changes the route and creates a finance tradeoff to notice.",
            "logText": "What's a Normal Week?: Budget on the average ($100);"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget on the lowest ($60) to be safe;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 4
              }
            ],
            "feedback": "Budget on the lowest ($60) to be safe; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget on the lowest ($60) to be safe; changes the route and creates a finance tradeoff to notice.",
            "logText": "What's a Normal Week?: Budget on the lowest ($60) to be safe;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Budget on the highest ($140) and hope.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 4
              }
            ],
            "feedback": "Budget on the highest ($140) and hope. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Budget on the highest ($140) and hope. changes the route and creates a finance tradeoff to notice.",
            "logText": "What's a Normal Week?: Budget on the highest ($140) and hope."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why might budgeting on the *low* week be smarter than the average?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Budgeting low builds a buffer but feels strict; the average is realistic but risky in lean weeks."
  },
  {
    "id": "ctx-river-warranty-on-cheap-item",
    "title": "Warranty on a $15 Thing?",
    "prompt": "A $15 gadget offers a $6 warranty.",
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
        "label": "Skip it",
        "description": "replacement is only $15;",
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
            "logText": "Warranty on a $15 Thing?: Skip it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy it for peace of mind;",
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
            "feedback": "Buy it for peace of mind; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy it for peace of mind; changes the route and creates a finance tradeoff to notice.",
            "logText": "Warranty on a $15 Thing?: Buy it for peace of mind;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip it, put $6 toward a self-insure jar.",
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
            "feedback": "Skip it, put $6 toward a self-insure jar. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Skip it, put $6 toward a self-insure jar. changes the route and creates a finance tradeoff to notice.",
            "logText": "Warranty on a $15 Thing?: Skip it, put $6 toward a self-insure jar."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does warranty value depend on the item's price?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Warranties make more sense on expensive, fragile items than cheap, replaceable ones."
  },
  {
    "id": "ctx-river-withholding-choice",
    "title": "Bigger Check or Bigger Refund?",
    "prompt": "On a simple job form, you can have more tax held now (bigger refund later) or less held (bigger paychecks now).",
    "topics": [
      "investing"
    ],
    "ageRange": {
      "min": 16,
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
        "label": "More withheld",
        "description": "bigger refund, tighter checks;",
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
            "feedback": "More withheld changes the route and creates a finance tradeoff to notice.",
            "explanation": "More withheld changes the route and creates a finance tradeoff to notice.",
            "logText": "Bigger Check or Bigger Refund?: More withheld"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Less withheld",
        "description": "bigger checks, maybe owe a little;",
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
            "feedback": "Less withheld changes the route and creates a finance tradeoff to notice.",
            "explanation": "Less withheld changes the route and creates a finance tradeoff to notice.",
            "logText": "Bigger Check or Bigger Refund?: Less withheld"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Aim for the middle.",
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
            "feedback": "Aim for the middle. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Aim for the middle. changes the route and creates a finance tradeoff to notice.",
            "logText": "Bigger Check or Bigger Refund?: Aim for the middle."
          }
        ]
      }
    ],
    "reflectionPrompt": "Would you rather have money monthly or in one lump?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A refund feels great but means you lent money interest-free all year."
  },
  {
    "id": "ctx-river-worth-the-trip",
    "title": "Two Buses to Save $4",
    "prompt": "A store 45 minutes away (each way) sells your item $4 cheaper. The round trip is about 2 hours.",
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
        "label": "Make the trip;",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 4
              }
            ],
            "feedback": "Make the trip; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Make the trip; changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Buses to Save $4: Make the trip;"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy local, keep the 2 hours;",
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
            "feedback": "Buy local, keep the 2 hours; changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy local, keep the 2 hours; changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Buses to Save $4: Buy local, keep the 2 hours;"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Order it and wait, paying $1 shipping.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 4
              }
            ],
            "feedback": "Order it and wait, paying $1 shipping. changes the route and creates a finance tradeoff to notice.",
            "explanation": "Order it and wait, paying $1 shipping. changes the route and creates a finance tradeoff to notice.",
            "logText": "Two Buses to Save $4: Order it and wait, paying $1 shipping."
          }
        ]
      }
    ],
    "reflectionPrompt": "What's an hour of your time worth to you right now?",
    "sourceNote": "MoneyLife context batch RIVER-LANTERN-36; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Saving money is real; so is your time — neither answer is wrong."
  }
];
