import type { ScenarioEvent } from "../../../../types/game";

export const tideContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-tide-ai-resume-privacy",
    "title": "AI Resume Help",
    "prompt": "A tool can help improve a resume, but it asks you to paste personal details. The game uses fictional data only, so you choose how to model safe use.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use fictional/sample details first",
        "description": "no lock; privacy +, quality practice; “Practice without personal data.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              },
              {
                "type": "flag",
                "key": "protectsCareerPrivacy",
                "value": true
              }
            ],
            "feedback": "Practice without personal data.",
            "explanation": "Practice without personal data.",
            "logText": "AI Resume Help: Use fictional/sample details first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask mentor for feedback instead",
        "description": "locked: mentor support; opportunity +; “Human feedback can catch tone.”",
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
              },
              {
                "type": "flag",
                "key": "protectsCareerPrivacy",
                "value": true
              }
            ],
            "feedback": "Human feedback can catch tone.",
            "explanation": "Human feedback can catch tone.",
            "logText": "AI Resume Help: Ask mentor for feedback instead"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Paste everything quickly",
        "description": "no lock; privacy risk; “Convenience can expose information.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              },
              {
                "type": "flag",
                "key": "protectsCareerPrivacy",
                "value": true
              }
            ],
            "feedback": "Convenience can expose information.",
            "explanation": "Convenience can expose information.",
            "logText": "AI Resume Help: Paste everything quickly"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you keep private?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "AI can help, but privacy and editing still matter."
  },
  {
    "id": "ctx-tide-aid-gap-sort",
    "title": "What Is Still Owed?",
    "prompt": "A fictional program costs $4,600. Aid offer: $1,200 grant, $800 scholarship, $900 work-study estimate, and $1,000 loan. You need to know the remaining gap and what must be repaid.",
    "topics": [
      "life-after-high-school",
      "career",
      "money-values",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Sort free/earned/borrowed first",
        "description": "no lock; money know-how +; “Grant + scholarship = $2,000; work-study is earned; loan is borrowed.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -4
              },
              {
                "type": "flag",
                "key": "decodesAidOffer",
                "value": true
              }
            ],
            "feedback": "Grant + scholarship = $2,000; work-study is earned; loan is borrowed.",
            "explanation": "Grant + scholarship = $2,000; work-study is earned; loan is borrowed.",
            "logText": "What Is Still Owed?: Sort free/earned/borrowed first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Treat all $3,900 as free",
        "description": "no lock; future debt surprise; “A loan is not the same as a grant.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -4
              },
              {
                "type": "flag",
                "key": "decodesAidOffer",
                "value": true
              }
            ],
            "feedback": "A loan is not the same as a grant.",
            "explanation": "A loan is not the same as a grant.",
            "logText": "What Is Still Owed?: Treat all $3,900 as free"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask aid office/mentor to explain",
        "description": "locked: source check skill; opportunity +; “Asking can prevent expensive confusion.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -4
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "decodesAidOffer",
                "value": true
              }
            ],
            "feedback": "Asking can prevent expensive confusion.",
            "explanation": "Asking can prevent expensive confusion.",
            "logText": "What Is Still Owed?: Ask aid office/mentor to explain"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which aid is debt?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "More aid lines can look comforting, but labels change the real cost."
  },
  {
    "id": "ctx-tide-apprentice-tool-stipend",
    "title": "The Tool Stipend",
    "prompt": "A training program offers a $120 tool stipend after you complete the first month. Buying basic tools now costs $95. Borrowing tools is possible but not guaranteed.",
    "topics": [
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
        "label": "Buy basic tools now",
        "description": "locked: savings ≥ $95; asset +, cash −$95; “You bridge the month yourself.”",
        "requirements": [
          {
            "type": "minSavings",
            "value": 95
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -95
              },
              {
                "type": "flag",
                "key": "toolStipendPlanned",
                "value": true
              }
            ],
            "feedback": "You bridge the month yourself.",
            "explanation": "You bridge the month yourself.",
            "logText": "The Tool Stipend: Buy basic tools now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow tools",
        "description": "no lock; randomized availability; cash saved, reliability risk; “Borrowing lowers cost but adds uncertainty.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -95
              },
              {
                "type": "flag",
                "key": "toolStipendPlanned",
                "value": true
              }
            ],
            "feedback": "Borrowing lowers cost but adds uncertainty.",
            "explanation": "Borrowing lowers cost but adds uncertainty.",
            "logText": "The Tool Stipend: Borrow tools"
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
            "logText": "The Tool Stipend: Borrow tools met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor/program for loaner tools",
        "description": "locked: mentor or program access; opportunity +; “Support can reduce upfront barriers.”",
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
                "amount": -95
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "toolStipendPlanned",
                "value": true
              }
            ],
            "feedback": "Support can reduce upfront barriers.",
            "explanation": "Support can reduce upfront barriers.",
            "logText": "The Tool Stipend: Ask mentor/program for loaner tools"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why was timing important?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Buying builds independence; borrowing protects cash but adds reliability risk."
  },
  {
    "id": "ctx-tide-authorized-user-offer",
    "title": "A Credit Shortcut?",
    "prompt": "A trusted adult in the fictional story offers to add you as an authorized user to help your credit history. Their payment habits could help or hurt.",
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
        "label": "Ask about balance and payment habits first",
        "description": "no lock; safety +; “Their habits affect your route.”",
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
                "type": "flag",
                "key": "evaluatesAuthorizedUser",
                "value": true
              }
            ],
            "feedback": "Their habits affect your route.",
            "explanation": "Their habits affect your route.",
            "logText": "A Credit Shortcut?: Ask about balance and payment habits first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Accept without asking",
        "description": "locked: credit profile active; randomized help/hurt; “Shortcuts depend on someone else’s behavior.”",
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "evaluatesAuthorizedUser",
                "value": true
              }
            ],
            "feedback": "Shortcuts depend on someone else’s behavior.",
            "explanation": "Shortcuts depend on someone else’s behavior.",
            "logText": "A Credit Shortcut?: Accept without asking"
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
            "logText": "A Credit Shortcut?: Accept without asking met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline and build independently",
        "description": "no lock; slower, control +; “Slow can be safer.”",
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
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "evaluatesAuthorizedUser",
                "value": true
              }
            ],
            "feedback": "Slow can be safer.",
            "explanation": "Slow can be safer.",
            "logText": "A Credit Shortcut?: Decline and build independently"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you need to know?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Support can help, but shared credit risk needs trust and information."
  },
  {
    "id": "ctx-tide-backup-code-card",
    "title": "Locked Out at the Worst Time",
    "prompt": "You turned on 2FA, but your phone battery dies before you need to log in. Backup codes would help, but only if you saved them earlier.",
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
        "label": "Use saved backup code",
        "description": "locked: `savedBackupCodes`; access restored; safety +; “Security works best with a recovery plan.”",
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
              },
              {
                "type": "flag",
                "key": "valuesRecoveryCodes",
                "value": true
              }
            ],
            "feedback": "Security works best with a recovery plan.",
            "explanation": "Security works best with a recovery plan.",
            "logText": "Locked Out at the Worst Time: Use saved backup code"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until phone charges",
        "description": "no lock; time lost, safety intact; “Waiting is annoying but safe.”",
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
                "type": "flag",
                "key": "valuesRecoveryCodes",
                "value": true
              }
            ],
            "feedback": "Waiting is annoying but safe.",
            "explanation": "Waiting is annoying but safe.",
            "logText": "Locked Out at the Worst Time: Wait until phone charges"
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
            "logText": "Locked Out at the Worst Time: Wait until phone charges met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Try a shortcut link from an email",
        "description": "no lock; randomized scam risk; “Shortcut pressure can be a trap.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              },
              {
                "type": "flag",
                "key": "valuesRecoveryCodes",
                "value": true
              }
            ],
            "feedback": "Shortcut pressure can be a trap.",
            "explanation": "Shortcut pressure can be a trap.",
            "logText": "Locked Out at the Worst Time: Try a shortcut link from an email"
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
            "logText": "Locked Out at the Worst Time: Try a shortcut link from an email met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why prepare for lockout?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Strong security needs a backup so it does not block you."
  },
  {
    "id": "ctx-tide-bank-temporary-lock",
    "title": "Lock the Card?",
    "prompt": "You cannot find your debit card. It may be in your backpack, or it may be lost. Your banking app has a temporary lock button.",
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
        "label": "Temporarily lock card, then search",
        "description": "no lock; safety +, small inconvenience; “Locking buys time.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "usesCardLock",
                "value": true
              }
            ],
            "feedback": "Locking buys time.",
            "explanation": "Locking buys time.",
            "logText": "Lock the Card?: Temporarily lock card, then search"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Search first, leave card active",
        "description": "no lock; convenience +, risk +; “Waiting may be fine, but risk stays open.”",
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
                "type": "flag",
                "key": "usesCardLock",
                "value": true
              }
            ],
            "feedback": "Waiting may be fine, but risk stays open.",
            "explanation": "Waiting may be fine, but risk stays open.",
            "logText": "Lock the Card?: Search first, leave card active"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Report permanently lost immediately",
        "description": "no lock; safety +, replacement delay; “Strong action if loss seems real.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "usesCardLock",
                "value": true
              }
            ],
            "feedback": "Strong action if loss seems real.",
            "explanation": "Strong action if loss seems real.",
            "logText": "Lock the Card?: Report permanently lost immediately"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is temporary useful?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A lock creates inconvenience but limits possible damage."
  },
  {
    "id": "ctx-tide-battery-care-choice",
    "title": "The Battery Habit",
    "prompt": "Your school laptop battery is weakening. A settings change and careful charging might stretch its life, but a replacement battery costs $74 later.",
    "topics": [
      "life-after-high-school",
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
        "label": "Change habits now",
        "description": "no lock; discipline +, random repair risk down; “Care can slow decline.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -74
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              },
              {
                "type": "flag",
                "key": "maintainsTechAsset",
                "value": true
              }
            ],
            "feedback": "Care can slow decline.",
            "explanation": "Care can slow decline.",
            "logText": "The Battery Habit: Change habits now"
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
            "logText": "The Battery Habit: Change habits now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it",
        "description": "no lock; time saved, random failure risk; “Skipping care may be fine, or not.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -74
              },
              {
                "type": "flag",
                "key": "maintainsTechAsset",
                "value": true
              }
            ],
            "feedback": "Skipping care may be fine, or not.",
            "explanation": "Skipping care may be fine, or not.",
            "logText": "The Battery Habit: Ignore it"
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
            "logText": "The Battery Habit: Ignore it met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Start a $10/month repair fund",
        "description": "locked: hasIncome; savings goal +; “$10 for 8 months covers most of $74.”",
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
                "type": "flag",
                "key": "maintainsTechAsset",
                "value": true
              }
            ],
            "feedback": "$10 for 8 months covers most of $74.",
            "explanation": "$10 for 8 months covers most of $74.",
            "logText": "The Battery Habit: Start a $10/month repair fund"
          }
        ]
      }
    ],
    "reflectionPrompt": "What habit protected value?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Maintenance costs attention; ignoring it saves effort but raises risk."
  },
  {
    "id": "ctx-tide-benefit-cliff-hours",
    "title": "More Hours, Less Support?",
    "prompt": "In a fictional program, working more than 12 hours/week reduces a transportation support pass. More hours pay more, but the lost support changes the math.",
    "topics": [
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
        "label": "Work 10 hours",
        "description": "no lock; lower income, keeps pass; “Support can be part of the budget.”",
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
            "feedback": "Support can be part of the budget.",
            "explanation": "Support can be part of the budget.",
            "logText": "More Hours, Less Support?: Work 10 hours"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Work 15 hours",
        "description": "no lock; more gross pay, pass lost; “More hours may still win, but calculate.”",
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
            "feedback": "More hours may still win, but calculate.",
            "explanation": "More hours may still win, but calculate.",
            "logText": "More Hours, Less Support?: Work 15 hours"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask program about gradual step-down",
        "description": "no lock; opportunity +; “Rules may have options.”",
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
            "feedback": "Rules may have options.",
            "explanation": "Rules may have options.",
            "logText": "More Hours, Less Support?: Ask program about gradual step-down"
          }
        ]
      }
    ],
    "reflectionPrompt": "What non-wage value mattered?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "More work can be good, but lost support may shrink the gain."
  },
  {
    "id": "ctx-tide-calendar-invite-trick",
    "title": "The Weird Calendar Invite",
    "prompt": "A calendar invite appears with a note that says you won a prize and must open a link. It looks like it came from a calendar, not a text. That makes it feel more official.",
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
        "label": "Delete/report without clicking",
        "description": "no lock; safety +; “A strange link can arrive in many formats.”",
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
                "type": "flag",
                "key": "calendarScamAware",
                "value": true
              }
            ],
            "feedback": "A strange link can arrive in many formats.",
            "explanation": "A strange link can arrive in many formats.",
            "logText": "The Weird Calendar Invite: Delete/report without clicking"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask mentor/caregiver to check",
        "description": "locked: support available; safety +, trust +; “A second set of eyes helps.”",
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
                "type": "flag",
                "key": "calendarScamAware",
                "value": true
              }
            ],
            "feedback": "A second set of eyes helps.",
            "explanation": "A second set of eyes helps.",
            "logText": "The Weird Calendar Invite: Ask mentor/caregiver to check"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Click to see the prize",
        "description": "no lock; randomized exposure risk; “Curiosity can be expensive.”",
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
                "type": "flag",
                "key": "calendarScamAware",
                "value": true
              }
            ],
            "feedback": "Curiosity can be expensive.",
            "explanation": "Curiosity can be expensive.",
            "logText": "The Weird Calendar Invite: Click to see the prize"
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
            "logText": "The Weird Calendar Invite: Click to see the prize met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What made it suspicious?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Curiosity is normal; the safer move is checking without clicking."
  },
  {
    "id": "ctx-tide-carshare-membership",
    "title": "Car-Share or Occasional Rides?",
    "prompt": "In a future adult scenario, a car-share membership is $19/month plus lower ride rates. Without membership, each ride costs more. You expect 3–7 rides per month.",
    "topics": [
      "money-values"
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
        "label": "Join membership",
        "description": "no lock; recurring cost, cheaper if frequent; “The more rides, the better it looks.”",
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
            "feedback": "The more rides, the better it looks.",
            "explanation": "The more rides, the better it looks.",
            "logText": "Car-Share or Occasional Rides?: Join membership"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay per ride",
        "description": "no lock; flexible, may cost more; “No membership means no monthly commitment.”",
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
            "feedback": "No membership means no monthly commitment.",
            "explanation": "No membership means no monthly commitment.",
            "logText": "Car-Share or Occasional Rides?: Pay per ride"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Track one month first",
        "description": "no lock; discipline +; “Real usage beats guessing.”",
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
                "amount": -2
              }
            ],
            "feedback": "Real usage beats guessing.",
            "explanation": "Real usage beats guessing.",
            "logText": "Car-Share or Occasional Rides?: Track one month first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What ride count breaks even?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Memberships reward frequent use but punish overestimation."
  },
  {
    "id": "ctx-tide-check-hold-timeline",
    "title": "The Held Deposit",
    "prompt": "You deposit a $96 check from a weekend job, but only $40 is available today. The rest unlocks in two days. A $58 bill is due tomorrow.",
    "topics": [
      "banking",
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
        "label": "Pay $40 now, ask to schedule the rest",
        "description": "no lock; partial payment; trust +, fee risk down; “Communication can protect you.”",
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
                "stat": "trustSafety",
                "amount": -2
              },
              {
                "type": "flag",
                "key": "understandsDepositHold",
                "value": true
              }
            ],
            "feedback": "Communication can protect you.",
            "explanation": "Communication can protect you.",
            "logText": "The Held Deposit: Pay $40 now, ask to schedule the rest"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the $58 assuming the check clears",
        "description": "no lock; risky; possible fee; “Deposited is not always available.”",
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
                "type": "flag",
                "key": "understandsDepositHold",
                "value": true
              }
            ],
            "feedback": "Deposited is not always available.",
            "explanation": "Deposited is not always available.",
            "logText": "The Held Deposit: Pay the $58 assuming the check clears"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use savings to cover the gap",
        "description": "locked: needs savings ≥ $18; avoids fee; savings −$18; “$58 − $40 = $18 gap.”",
        "requirements": [
          {
            "type": "minSavings",
            "value": 18
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": -18
              },
              {
                "type": "flag",
                "key": "understandsDepositHold",
                "value": true
              }
            ],
            "feedback": "$58 − $40 = $18 gap.",
            "explanation": "$58 − $40 = $18 gap.",
            "logText": "The Held Deposit: Use savings to cover the gap"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did timing change?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Using savings protects timing, but it reduces your cushion."
  },
  {
    "id": "ctx-tide-class-fee-waiver-fictional",
    "title": "Ask About Program Support",
    "prompt": "A future enrichment program has a $45 activity fee. The game uses fictional program-support variables, not real family income. You can pay, skip, or ask whether support exists.",
    "topics": [
      "consumer-skills",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay fee",
        "description": "locked: cash ≥ $45; opportunity +, cash −; “Paying is simple if affordable.”",
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "asksProgramSupport",
                "value": true
              }
            ],
            "feedback": "Paying is simple if affordable.",
            "explanation": "Paying is simple if affordable.",
            "logText": "Ask About Program Support: Pay fee"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip program",
        "description": "no lock; cash protected, opportunity missed; “Skipping can be reasonable.”",
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
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "asksProgramSupport",
                "value": true
              }
            ],
            "feedback": "Skipping can be reasonable.",
            "explanation": "Skipping can be reasonable.",
            "logText": "Ask About Program Support: Skip program"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about program support",
        "description": "no lock; support route possible; “Asking uses resources without sharing sensitive details.”",
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
                "type": "flag",
                "key": "asksProgramSupport",
                "value": true
              }
            ],
            "feedback": "Asking uses resources without sharing sensitive details.",
            "explanation": "Asking uses resources without sharing sensitive details.",
            "logText": "Ask About Program Support: Ask about program support"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did cash unlock?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Asking is not weakness; it is resource navigation."
  },
  {
    "id": "ctx-tide-community-repair-night",
    "title": "Repair Night",
    "prompt": "A community repair night might fix your backpack zipper for free, but there is no guarantee. A replacement backpack costs $39.",
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
        "label": "Try repair night",
        "description": "no lock; randomized repair success, cash saved; “Free help may work.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -39
              },
              {
                "type": "flag",
                "key": "usesRepairResource",
                "value": true
              }
            ],
            "feedback": "Free help may work.",
            "explanation": "Free help may work.",
            "logText": "Repair Night: Try repair night"
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
            "logText": "Repair Night: Try repair night met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Replace now for $39",
        "description": "locked: cash ≥ $39; certainty +, cash −; “Certainty costs money.”",
        "requirements": [
          {
            "type": "minCash",
            "value": 39
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
              },
              {
                "type": "flag",
                "key": "usesRepairResource",
                "value": true
              }
            ],
            "feedback": "Certainty costs money.",
            "explanation": "Certainty costs money.",
            "logText": "Repair Night: Replace now for $39"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask friend/caregiver to help sew temporary fix",
        "description": "locked: support available; useful life extended; “Support can create a bridge.”",
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
                "amount": -39
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
              },
              {
                "type": "flag",
                "key": "usesRepairResource",
                "value": true
              }
            ],
            "feedback": "Support can create a bridge.",
            "explanation": "Support can create a bridge.",
            "logText": "Repair Night: Ask friend/caregiver to help sew temporary fix"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you risk?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Free repair can fail; buying avoids uncertainty."
  },
  {
    "id": "ctx-tide-cosign-friend-boundary",
    "title": "Can You Co-Sign?",
    "prompt": "A friend asks you to co-sign a small loan. They are trustworthy, but co-signing means you may owe the full amount if they cannot pay.",
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
        "label": "Decline kindly, offer budget help",
        "description": "no lock; credit protected, relationship depends on wording; “Support does not have to be co-signing.”",
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
              },
              {
                "type": "flag",
                "key": "setsCosignBoundary",
                "value": true
              }
            ],
            "feedback": "Support does not have to be co-signing.",
            "explanation": "Support does not have to be co-signing.",
            "logText": "Can You Co-Sign?: Decline kindly, offer budget help"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Co-sign",
        "description": "locked: credit profile active; randomized repayment outcome; “Your credit is tied to their payments.”",
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
              },
              {
                "type": "flag",
                "key": "setsCosignBoundary",
                "value": true
              }
            ],
            "feedback": "Your credit is tied to their payments.",
            "explanation": "Your credit is tied to their payments.",
            "logText": "Can You Co-Sign?: Co-sign"
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
            "logText": "Can You Co-Sign?: Co-sign met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to role-play response",
        "description": "locked: mentor support; trust +, safety +; “Practice makes hard conversations kinder.”",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              },
              {
                "type": "flag",
                "key": "setsCosignBoundary",
                "value": true
              }
            ],
            "feedback": "Practice makes hard conversations kinder.",
            "explanation": "Practice makes hard conversations kinder.",
            "logText": "Can You Co-Sign?: Ask mentor to role-play response"
          }
        ]
      }
    ],
    "reflectionPrompt": "What boundary helped?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Helping a friend can be kind; co-signing is a serious financial promise."
  },
  {
    "id": "ctx-tide-credential-renewal",
    "title": "The Certificate Is Expiring",
    "prompt": "A certificate that helped you earn more expires soon. Renewal costs $42 and takes 3 hours. Letting it lapse closes one job route for now.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Renew now",
        "description": "locked: cash ≥ $42; opportunity protected; “Human capital sometimes needs upkeep.”",
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
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "flag",
                "key": "maintainsCredential",
                "value": true
              }
            ],
            "feedback": "Human capital sometimes needs upkeep.",
            "explanation": "Human capital sometimes needs upkeep.",
            "logText": "The Certificate Is Expiring: Renew now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Let it lapse, renew later",
        "description": "no lock; cash saved now, opportunity −; “Routes can close temporarily.”",
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
                "type": "flag",
                "key": "maintainsCredential",
                "value": true
              }
            ],
            "feedback": "Routes can close temporarily.",
            "explanation": "Routes can close temporarily.",
            "logText": "The Certificate Is Expiring: Let it lapse, renew later"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask program about fee waiver",
        "description": "no lock; possible support; “Asking can reveal options.”",
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
                "type": "flag",
                "key": "maintainsCredential",
                "value": true
              }
            ],
            "feedback": "Asking can reveal options.",
            "explanation": "Asking can reveal options.",
            "logText": "The Certificate Is Expiring: Ask program about fee waiver"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why maintain a credential?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Renewing protects opportunity; waiting protects cash today."
  },
  {
    "id": "ctx-tide-credit-builder-loan",
    "title": "Build Credit Without a Card",
    "prompt": "A small credit-builder loan holds $300 in a savings account while you make $25 monthly payments. It may help build history, but missed payments can hurt.",
    "topics": [
      "credit",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use it with autopay and cushion",
        "description": "locked: checking + buffer; credit + if paid; “Systems protect payment history.”",
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
                "type": "flag",
                "key": "usesCreditBuilderCarefully",
                "value": true
              }
            ],
            "feedback": "Systems protect payment history.",
            "explanation": "Systems protect payment history.",
            "logText": "Build Credit Without a Card: Use it with autopay and cushion"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use it without a cushion",
        "description": "no lock; randomized missed-payment risk; “A good tool can hurt if timing fails.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "usesCreditBuilderCarefully",
                "value": true
              }
            ],
            "feedback": "A good tool can hurt if timing fails.",
            "explanation": "A good tool can hurt if timing fails.",
            "logText": "Build Credit Without a Card: Use it without a cushion"
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
            "logText": "Build Credit Without a Card: Use it without a cushion met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait until income is steadier",
        "description": "no lock; credit delayed, safety +; “Waiting can be a strong choice.”",
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
                "type": "flag",
                "key": "usesCreditBuilderCarefully",
                "value": true
              }
            ],
            "feedback": "Waiting can be a strong choice.",
            "explanation": "Waiting can be a strong choice.",
            "logText": "Build Credit Without a Card: Wait until income is steadier"
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
            "logText": "Build Credit Without a Card: Wait until income is steadier met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why need a cushion?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Building credit is useful only if the payment plan is realistic."
  },
  {
    "id": "ctx-tide-credit-report-mismatch",
    "title": "The Address That Isn’t Yours",
    "prompt": "A simplified credit report shows an address you do not recognize. No money is missing, but errors can matter later.",
    "topics": [
      "credit",
      "money-values"
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
        "label": "Dispute the error",
        "description": "no lock; safety +, paperwork time; “Small errors deserve attention.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "checksCreditReportError",
                "value": true
              }
            ],
            "feedback": "Small errors deserve attention.",
            "explanation": "Small errors deserve attention.",
            "logText": "The Address That Isn’t Yours: Dispute the error"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it",
        "description": "no lock; time saved, future risk; “Errors can follow you.”",
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
                "type": "flag",
                "key": "checksCreditReportError",
                "value": true
              }
            ],
            "feedback": "Errors can follow you.",
            "explanation": "Errors can follow you.",
            "logText": "The Address That Isn’t Yours: Ignore it"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Freeze credit while checking",
        "description": "locked: safety ≥ 60; risk down; “A freeze blocks new credit openings.”",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "trustSafety",
            "value": 60
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
              },
              {
                "type": "flag",
                "key": "checksCreditReportError",
                "value": true
              }
            ],
            "feedback": "A freeze blocks new credit openings.",
            "explanation": "A freeze blocks new credit openings.",
            "logText": "The Address That Isn’t Yours: Freeze credit while checking"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why fix before borrowing?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fixing errors takes effort before the payoff is visible."
  },
  {
    "id": "ctx-tide-custom-order-cancel",
    "title": "The Canceled Custom Order",
    "prompt": "A friend asks you to make a custom item that costs $14 in materials and sells for $28. They might change their mind. You need a policy before buying supplies.",
    "topics": [
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Ask for a $7 deposit",
        "description": "no lock; reduces loss if canceled; cash +$7 now; “Half the material cost is protected.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 7
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              },
              {
                "type": "flag",
                "key": "setsCustomOrderTerms",
                "value": true
              }
            ],
            "feedback": "Half the material cost is protected.",
            "explanation": "Half the material cost is protected.",
            "logText": "The Canceled Custom Order: Ask for a $7 deposit"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy supplies first",
        "description": "no lock; friend may cancel; randomized loss/trust; “Generosity is kind, but inventory risk is real.”",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              },
              {
                "type": "flag",
                "key": "setsCustomOrderTerms",
                "value": true
              }
            ],
            "feedback": "Generosity is kind, but inventory risk is real.",
            "explanation": "Generosity is kind, but inventory risk is real.",
            "logText": "The Canceled Custom Order: Buy supplies first"
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
            "logText": "The Canceled Custom Order: Buy supplies first met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a simple written agreement",
        "description": "locked: money know-how ≥ 45; trust +, risk down; “Clear terms protect the friendship.”",
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
                "type": "cash",
                "amount": -14
              },
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": -2
              },
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
              },
              {
                "type": "flag",
                "key": "setsCustomOrderTerms",
                "value": true
              }
            ],
            "feedback": "Clear terms protect the friendship.",
            "explanation": "Clear terms protect the friendship.",
            "logText": "The Canceled Custom Order: Use a simple written agreement"
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
            "logText": "The Canceled Custom Order: Use a simple written agreement met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why ask before spending?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Deposits can feel awkward, but they make custom work safer."
  },
  {
    "id": "ctx-tide-customer-review-repair",
    "title": "The Review After a Mistake",
    "prompt": "You delivered an item one day late. The customer is disappointed. You can ignore it, apologize, or offer a small fix.",
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
        "label": "Apologize and explain new plan",
        "description": "no lock; trust repair +; “Clear communication can recover trust.”",
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
                "type": "flag",
                "key": "repairsCustomerTrust",
                "value": true
              }
            ],
            "feedback": "Clear communication can recover trust.",
            "explanation": "Clear communication can recover trust.",
            "logText": "The Review After a Mistake: Apologize and explain new plan"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Offer $4 discount next time",
        "description": "no lock; cash future −, trust +; “A small cost may protect reputation.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "repairsCustomerTrust",
                "value": true
              }
            ],
            "feedback": "A small cost may protect reputation.",
            "explanation": "A small cost may protect reputation.",
            "logText": "The Review After a Mistake: Offer $4 discount next time"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to review message",
        "description": "locked: mentor support; quality +; “Tone matters.”",
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
                "type": "flag",
                "key": "repairsCustomerTrust",
                "value": true
              }
            ],
            "feedback": "Ask mentor to review message changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor to review message changes the route and creates a finance tradeoff to notice.",
            "logText": "The Review After a Mistake: Ask mentor to review message"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the apology useful?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Repairing trust may cost time or money, but it protects opportunity."
  },
  {
    "id": "ctx-tide-debt-payoff-map",
    "title": "Extra $30: Which Debt?",
    "prompt": "You have two simplified debts: $90 at 5% and $180 at 18%. You have an extra $30 this month. One strategy saves the most interest; another feels motivating.",
    "topics": [
      "credit",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay extra on 18% debt",
        "description": "no lock; interest saved; “Higher rate usually costs more.”",
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
            "feedback": "Higher rate usually costs more.",
            "explanation": "Higher rate usually costs more.",
            "logText": "Extra $30: Which Debt?: Pay extra on 18% debt"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay off smaller $90 debt faster",
        "description": "no lock; motivation +; “Small wins can build discipline.”",
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
            "feedback": "Small wins can build discipline.",
            "explanation": "Small wins can build discipline.",
            "logText": "Extra $30: Which Debt?: Pay off smaller $90 debt faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split $15/$15",
        "description": "no lock; balanced; “Splitting is simple but slower.”",
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
            "feedback": "Splitting is simple but slower.",
            "explanation": "Splitting is simple but slower.",
            "logText": "Extra $30: Which Debt?: Split $15/$15"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did rate matter?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Mathematically efficient and emotionally motivating can differ."
  },
  {
    "id": "ctx-tide-digital-wallet-nickname",
    "title": "Same Name, Wrong Person",
    "prompt": "You need to send $18 to a friend for shared supplies. Two similar names appear. Your friend says “just send it fast.",
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
        "label": "Confirm username and amount",
        "description": "no lock; safety +; “Confirming avoids wrong recipient.”",
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
              },
              {
                "type": "flag",
                "key": "confirmsDigitalPayments",
                "value": true
              }
            ],
            "feedback": "Confirming avoids wrong recipient.",
            "explanation": "Confirming avoids wrong recipient.",
            "logText": "Same Name, Wrong Person: Confirm username and amount"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Send fast",
        "description": "no lock; randomized wrong-person risk; “Speed raised risk.”",
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
              },
              {
                "type": "flag",
                "key": "confirmsDigitalPayments",
                "value": true
              }
            ],
            "feedback": "Speed raised risk.",
            "explanation": "Speed raised risk.",
            "logText": "Same Name, Wrong Person: Send fast"
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
            "logText": "Same Name, Wrong Person: Send fast met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask friend to send request instead",
        "description": "no lock; slower, safer; “Letting the right person request reduces mismatch.”",
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
              },
              {
                "type": "flag",
                "key": "confirmsDigitalPayments",
                "value": true
              }
            ],
            "feedback": "Letting the right person request reduces mismatch.",
            "explanation": "Letting the right person request reduces mismatch.",
            "logText": "Same Name, Wrong Person: Ask friend to send request instead"
          }
        ]
      }
    ],
    "reflectionPrompt": "What three things did you check?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Fast payment helps the group, but confirmation protects money."
  },
  {
    "id": "ctx-tide-dividend-reinvest",
    "title": "Take Cash or Reinvest?",
    "prompt": "A simplified fund pays a $12 dividend. You can take it as cash or reinvest it. The amount is small now, but repeated choices matter.",
    "topics": [
      "investing",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Reinvest",
        "description": "no lock; investment +, cash unchanged; “Small amounts can join the growth engine.”",
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
            "feedback": "Small amounts can join the growth engine.",
            "explanation": "Small amounts can join the growth engine.",
            "logText": "Take Cash or Reinvest?: Reinvest"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take cash",
        "description": "no lock; cash +$12; “Cash is useful now.”",
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
            "feedback": "Cash is useful now.",
            "explanation": "Cash is useful now.",
            "logText": "Take Cash or Reinvest?: Take cash"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split $6/$6",
        "description": "no lock; balanced; “Half supports now, half later.”",
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
            "feedback": "Half supports now, half later.",
            "explanation": "Half supports now, half later.",
            "logText": "Take Cash or Reinvest?: Split $6/$6"
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
            "logText": "Take Cash or Reinvest?: Split $6/$6 met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why reinvest small money?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Reinvesting favors future growth; cash favors present flexibility."
  },
  {
    "id": "ctx-tide-donation-match-day",
    "title": "The Match Day",
    "prompt": "A community program has a match day: every $1 donated becomes $2, up to $25. You want to help, but you are saving for a goal.",
    "topics": [
      "money-values",
      "saving"
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
        "label": "Donate $10",
        "description": "no lock; impact $20, savings slower; “The match doubles impact.”",
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
            "feedback": "The match doubles impact.",
            "explanation": "The match doubles impact.",
            "logText": "The Match Day: Donate $10"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Volunteer instead",
        "description": "no lock; cash saved, time used; “Time can be a contribution.”",
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
            "feedback": "Time can be a contribution.",
            "explanation": "Time can be a contribution.",
            "logText": "The Match Day: Volunteer instead"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Donate $25 max",
        "description": "locked: cash ≥ $25; impact $50, cash −$25; “Maximum match creates bigger impact.”",
        "requirements": [
          {
            "type": "minCash",
            "value": 25
          }
        ],
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
            "feedback": "Maximum match creates bigger impact.",
            "explanation": "Maximum match creates bigger impact.",
            "logText": "The Match Day: Donate $25 max"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why give now?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Giving is valuable; so is protecting your own plan."
  },
  {
    "id": "ctx-tide-emergency-fund-or-fee",
    "title": "Pay the Fee or Use the Fund?",
    "prompt": "A $72 bill is due today. Paying late costs $9. Your emergency fund has $90, but using it feels frustrating.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use emergency fund, rebuild $9/week",
        "description": "locked: emergency fund ≥ $72; no fee; “A fund exists for timing shocks.”",
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
            "feedback": "A fund exists for timing shocks.",
            "explanation": "A fund exists for timing shocks.",
            "logText": "Pay the Fee or Use the Fund?: Use emergency fund, rebuild $9/week"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay late fee",
        "description": "no lock; fund untouched, cash −$9 later; “You paid to preserve the cushion.”",
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
            "feedback": "You paid to preserve the cushion.",
            "explanation": "You paid to preserve the cushion.",
            "logText": "Pay the Fee or Use the Fund?: Pay late fee"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask for one-time due-date move",
        "description": "no lock; possible fee avoided; “Asking may solve timing.”",
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
            "feedback": "Asking may solve timing.",
            "explanation": "Asking may solve timing.",
            "logText": "Pay the Fee or Use the Fund?: Ask for one-time due-date move"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was that worth $9?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Sometimes paying a small fee to preserve a cushion can be reasonable."
  },
  {
    "id": "ctx-tide-fake-refund-code",
    "title": "The Refund Code Message",
    "prompt": "A message says your refund is waiting and asks for a code sent to your phone. You did return something recently, so it feels possible.",
    "topics": [
      "investing",
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
        "label": "Check refund through original account/site",
        "description": "no lock; safety +; “Use the real route, not the message.”",
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
                "type": "flag",
                "key": "protectsVerificationCodes",
                "value": true
              }
            ],
            "feedback": "Use the real route, not the message.",
            "explanation": "Use the real route, not the message.",
            "logText": "The Refund Code Message: Check refund through original account/site"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Share the code",
        "description": "no lock; randomized account risk; “Codes can unlock accounts.”",
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
                "type": "flag",
                "key": "protectsVerificationCodes",
                "value": true
              }
            ],
            "feedback": "Codes can unlock accounts.",
            "explanation": "Codes can unlock accounts.",
            "logText": "The Refund Code Message: Share the code"
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
            "logText": "The Refund Code Message: Share the code met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask support/mentor to verify",
        "description": "locked: support available; safety +; “Help reduces pressure.”",
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
                "type": "flag",
                "key": "protectsVerificationCodes",
                "value": true
              }
            ],
            "feedback": "Help reduces pressure.",
            "explanation": "Help reduces pressure.",
            "logText": "The Refund Code Message: Ask support/mentor to verify"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why not share the code?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Recent real activity can make fake messages more convincing."
  },
  {
    "id": "ctx-tide-family-calendar-money",
    "title": "The Shared Calendar",
    "prompt": "You and your caregiver share transportation sometimes. A paid shift conflicts with a family appointment. A shared calendar could prevent surprises, but it takes coordination.",
    "topics": [
      "career",
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
        "label": "Add work and appointments to shared calendar",
        "description": "no lock; trust +, conflict down; “Coordination can be a money tool.”",
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
              },
              {
                "type": "flag",
                "key": "usesSharedPlanning",
                "value": true
              }
            ],
            "feedback": "Coordination can be a money tool.",
            "explanation": "Coordination can be a money tool.",
            "logText": "The Shared Calendar: Add work and appointments to shared calendar"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep your own notes only",
        "description": "no lock; independence +, conflict risk; “Private planning may miss shared needs.”",
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
                "type": "flag",
                "key": "usesSharedPlanning",
                "value": true
              }
            ],
            "feedback": "Private planning may miss shared needs.",
            "explanation": "Private planning may miss shared needs.",
            "logText": "The Shared Calendar: Keep your own notes only"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor for a weekly planning routine",
        "description": "locked: mentor support; discipline +; “A routine reduces repeated conflict.”",
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
              },
              {
                "type": "flag",
                "key": "usesSharedPlanning",
                "value": true
              }
            ],
            "feedback": "A routine reduces repeated conflict.",
            "explanation": "A routine reduces repeated conflict.",
            "logText": "The Shared Calendar: Ask mentor for a weekly planning routine"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did planning help?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Sharing plans can feel less independent but can protect opportunities."
  },
  {
    "id": "ctx-tide-fare-cap-math",
    "title": "When the Pass Caps Out",
    "prompt": "A transit card charges $2/ride but caps at $28 per month. A monthly pass is $32. Your ride count changes each month.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use fare cap card",
        "description": "no lock; best if rides reach cap; “14 rides reaches $28.”",
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
            "feedback": "14 rides reaches $28.",
            "explanation": "14 rides reaches $28.",
            "logText": "When the Pass Caps Out: Use fare cap card"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy $32 pass",
        "description": "no lock; certainty, slightly higher than cap; “Pass may still be simpler.”",
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
            "feedback": "Pass may still be simpler.",
            "explanation": "Pass may still be simpler.",
            "logText": "When the Pass Caps Out: Buy $32 pass"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Track rides for a month",
        "description": "no lock; data +; “Usage data beats guessing.”",
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
            "feedback": "Usage data beats guessing.",
            "explanation": "Usage data beats guessing.",
            "logText": "When the Pass Caps Out: Track rides for a month"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why compare cap to pass?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The lowest-cost option depends on real usage."
  },
  {
    "id": "ctx-tide-final-values-route",
    "title": "What Did Your Choices Protect?",
    "prompt": "Your run ends with a mix of wins, repairs, and unfinished goals. Instead of ranking yourself, the game asks what your choices protected most: safety, opportunity, relationships, wellbeing, or flexibility.",
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
        "label": "Name your strongest thread",
        "description": "no lock; reflection +; “Patterns are information, not grades.”",
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "flag",
                "key": "completedValuesReflection",
                "value": true
              }
            ],
            "feedback": "Patterns are information, not grades.",
            "explanation": "Patterns are information, not grades.",
            "logText": "What Did Your Choices Protect?: Name your strongest thread"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Name one route to repair next time",
        "description": "no lock; recovery +; “A next step keeps learning going.”",
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "flag",
                "key": "completedValuesReflection",
                "value": true
              }
            ],
            "feedback": "A next step keeps learning going.",
            "explanation": "A next step keeps learning going.",
            "logText": "What Did Your Choices Protect?: Name one route to repair next time"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare with a classmate’s fictional route",
        "description": "no lock; empathy +; “Different constraints create different smart choices.”",
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "flag",
                "key": "completedValuesReflection",
                "value": true
              }
            ],
            "feedback": "Different constraints create different smart choices.",
            "explanation": "Different constraints create different smart choices.",
            "logText": "What Did Your Choices Protect?: Compare with a classmate’s fictional route"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you protect often?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A lower score in one area can reflect a tradeoff, not failure."
  },
  {
    "id": "ctx-tide-friend-business-roles",
    "title": "Friends as Business Partners",
    "prompt": "You and a friend want to sell approved handmade keychains. You buy materials; they design. Before selling, you need roles and profit split.",
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
        "label": "Split profit 50/50",
        "description": "no lock; simple, possible resentment; “Simple is easy but may not match costs.”",
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
              },
              {
                "type": "flag",
                "key": "setsPartnerRoles",
                "value": true
              }
            ],
            "feedback": "Simple is easy but may not match costs.",
            "explanation": "Simple is easy but may not match costs.",
            "logText": "Friends as Business Partners: Split profit 50/50"
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
            "logText": "Friends as Business Partners: Split profit 50/50 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay back materials first, then split profit",
        "description": "no lock; cash protected; “Costs return before profit.”",
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
              },
              {
                "type": "flag",
                "key": "setsPartnerRoles",
                "value": true
              }
            ],
            "feedback": "Costs return before profit.",
            "explanation": "Costs return before profit.",
            "logText": "Friends as Business Partners: Pay back materials first, then split profit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Write roles and exit plan",
        "description": "locked: money know-how ≥ 50; trust +, risk down; “Clear roles prevent future conflict.”",
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
                "amount": -2
              },
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
              },
              {
                "type": "flag",
                "key": "setsPartnerRoles",
                "value": true
              }
            ],
            "feedback": "Clear roles prevent future conflict.",
            "explanation": "Clear roles prevent future conflict.",
            "logText": "Friends as Business Partners: Write roles and exit plan"
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
            "logText": "Friends as Business Partners: Write roles and exit plan met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did each person contribute?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Friendship helps teamwork, but clarity protects the friendship."
  },
  {
    "id": "ctx-tide-health-plan-network",
    "title": "In-Network or Out?",
    "prompt": "A future adult health plan lists two clinics. One is in-network with a $25 visit cost. One is out-of-network and could cost $95. The closer clinic is the expensive one.",
    "topics": [
      "career"
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
        "label": "Choose in-network, travel farther",
        "description": "no lock; cash −$25, time cost; “You saved $70 but spent time.”",
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
            "feedback": "You saved $70 but spent time.",
            "explanation": "You saved $70 but spent time.",
            "logText": "In-Network or Out?: Choose in-network, travel farther"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose closer out-of-network",
        "description": "no lock; cash −$95, time saved; “Convenience has a price.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -95
              }
            ],
            "feedback": "Convenience has a price.",
            "explanation": "Convenience has a price.",
            "logText": "In-Network or Out?: Choose closer out-of-network"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask insurer/mentor to confirm first",
        "description": "locked: safety ≥ 55 or mentor; money know-how +; “Checking prevents surprises.”",
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
                "type": "cash",
                "amount": -95
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Checking prevents surprises.",
            "explanation": "Checking prevents surprises.",
            "logText": "In-Network or Out?: Ask insurer/mentor to confirm first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did distance cost?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Lower cost may require more time and transportation."
  },
  {
    "id": "ctx-tide-installment-carrying-capacity",
    "title": "Can Your Budget Carry It?",
    "prompt": "A $156 needed item can be paid as $39 today or four payments of $39. The total is the same, but your next month already has tight bills.",
    "topics": [
      "banking",
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
        "label": "Pay full $156",
        "description": "locked: savings ≥ $156; no future payments, cushion drops; “You remove future obligation.”",
        "requirements": [
          {
            "type": "minSavings",
            "value": 156
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 39
              }
            ],
            "feedback": "You remove future obligation.",
            "explanation": "You remove future obligation.",
            "logText": "Can Your Budget Carry It?: Pay full $156"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Four payments",
        "description": "no lock; cash smoother now, future commitment; “$39 × 4 = $156.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 39
              }
            ],
            "feedback": "Four payments changes the route and creates a finance tradeoff to notice.",
            "explanation": "Four payments changes the route and creates a finance tradeoff to notice.",
            "logText": "Can Your Budget Carry It?: Four payments"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Delay purchase two weeks",
        "description": "no lock; need waits, cash builds; “Delay can reduce pressure.”",
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
            "feedback": "Delay can reduce pressure.",
            "explanation": "Delay can reduce pressure.",
            "logText": "Can Your Budget Carry It?: Delay purchase two weeks"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did full payment protect?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Same total cost can feel different across time."
  },
  {
    "id": "ctx-tide-interview-outfit-borrow",
    "title": "Borrow, Thrift, or Buy?",
    "prompt": "You need a neat outfit for an interview. Buying new is $74, thrifting is about $28, and borrowing is free if it fits. You want to look prepared without overspending.",
    "topics": [
      "credit",
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
        "label": "Borrow from support circle",
        "description": "locked: friend/family support; cash saved, trust +; “Support can replace spending.”",
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
            "feedback": "Support can replace spending.",
            "explanation": "Support can replace spending.",
            "logText": "Borrow, Thrift, or Buy?: Borrow from support circle"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Thrift for $28",
        "description": "no lock; cash −$28, asset +; “Lower cost, more effort.”",
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
            "feedback": "Lower cost, more effort.",
            "explanation": "Lower cost, more effort.",
            "logText": "Borrow, Thrift, or Buy?: Thrift for $28"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy new for $74",
        "description": "locked: cash ≥ $74; confidence +, cash −; “New buys certainty.”",
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
            "feedback": "New buys certainty.",
            "explanation": "New buys certainty.",
            "logText": "Borrow, Thrift, or Buy?: Buy new for $74"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made borrowing work?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing is cheapest, but fit and availability matter."
  },
  {
    "id": "ctx-tide-inventory-markdown",
    "title": "Markdown Before It Sits",
    "prompt": "You made 30 items at $2 cost each and planned to sell for $5. Only 12 sold. You can keep price, mark down, or bundle.",
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
        "label": "Keep price at $5",
        "description": "no lock; higher margin, slower sales; randomized demand; “Margin stays strong but cash is stuck.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 5
              },
              {
                "type": "flag",
                "key": "usesMarkdownStrategy",
                "value": true
              }
            ],
            "feedback": "Margin stays strong but cash is stuck.",
            "explanation": "Margin stays strong but cash is stuck.",
            "logText": "Markdown Before It Sits: Keep price at $5"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": 5
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Markdown Before It Sits: Keep price at $5 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Mark down to $3.50",
        "description": "no lock; lower margin, cash recovery; “$3.50 − $2 = $1.50 margin.”",
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
                "type": "flag",
                "key": "usesMarkdownStrategy",
                "value": true
              }
            ],
            "feedback": "$3.50 − $2 = $1.50 margin.",
            "explanation": "$3.50 − $2 = $1.50 margin.",
            "logText": "Markdown Before It Sits: Mark down to $3.50"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Bundle 3 for $10",
        "description": "no lock; moves units; “Bundle changes price per item.”",
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
                "type": "flag",
                "key": "usesMarkdownStrategy",
                "value": true
              }
            ],
            "feedback": "Bundle changes price per item.",
            "explanation": "Bundle changes price per item.",
            "logText": "Markdown Before It Sits: Bundle 3 for $10"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did unsold inventory cost?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Lower prices can reduce profit per item but free trapped cash."
  },
  {
    "id": "ctx-tide-invoice-due-date",
    "title": "The Late Invoice",
    "prompt": "You completed a small approved project for $54. You can send a clear invoice today or casually remind the client later. Payment timing affects your budget.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Send clear invoice today",
        "description": "no lock; cash arrives sooner; “Due dates help both sides.”",
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
                "type": "flag",
                "key": "usesInvoices",
                "value": true
              }
            ],
            "feedback": "Due dates help both sides.",
            "explanation": "Due dates help both sides.",
            "logText": "The Late Invoice: Send clear invoice today"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Casual reminder",
        "description": "no lock; relationship relaxed, payment slower; “Friendly can be unclear.”",
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
              },
              {
                "type": "flag",
                "key": "usesInvoices",
                "value": true
              }
            ],
            "feedback": "Friendly can be unclear.",
            "explanation": "Friendly can be unclear.",
            "logText": "The Late Invoice: Casual reminder"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use invoice template",
        "description": "locked: money know-how ≥ 45; professionalism +; “A template reduces confusion.”",
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
                "type": "flag",
                "key": "usesInvoices",
                "value": true
              }
            ],
            "feedback": "A template reduces confusion.",
            "explanation": "A template reduces confusion.",
            "logText": "The Late Invoice: Use invoice template"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why be specific?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Formality can feel awkward, but it protects payment timing."
  },
  {
    "id": "ctx-tide-laundry-autoload",
    "title": "The Auto-Reload Card",
    "prompt": "Your future apartment laundry card can auto-reload $20 when the balance falls below $3. Convenient, but it could reload right before rent. You do laundry about four times a month.",
    "topics": [
      "money-values",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Turn on auto-reload with alert",
        "description": "no lock; convenience +, surprise risk down; “Automation needs visibility.”",
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
            "feedback": "Automation needs visibility.",
            "explanation": "Automation needs visibility.",
            "logText": "The Auto-Reload Card: Turn on auto-reload with alert"
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
            "logText": "The Auto-Reload Card: Turn on auto-reload with alert met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Reload manually",
        "description": "no lock; control +, forgetting risk; “Manual control takes attention.”",
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
            "feedback": "Manual control takes attention.",
            "explanation": "Manual control takes attention.",
            "logText": "The Auto-Reload Card: Reload manually"
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
            "logText": "The Auto-Reload Card: Reload manually met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn on auto-reload without alerts",
        "description": "no lock; randomized cash-flow crunch; “Convenience can surprise you.”",
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
            "feedback": "Convenience can surprise you.",
            "explanation": "Convenience can surprise you.",
            "logText": "The Auto-Reload Card: Turn on auto-reload without alerts"
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
            "logText": "The Auto-Reload Card: Turn on auto-reload without alerts met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why pair auto with alerts?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Automation can help discipline or create surprises."
  },
  {
    "id": "ctx-tide-medical-bill-plan",
    "title": "The No-Interest Bill Plan",
    "prompt": "A future adult medical bill is $240. The office offers four no-interest payments of $60, or a 10% discount for paying all at once. You have $300 in emergency savings.",
    "topics": [
      "banking",
      "saving"
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
        "label": "Pay all now for 10% off",
        "description": "locked: savings ≥ $240; pay $216, cushion drops; “10% of $240 is $24 saved.”",
        "requirements": [
          {
            "type": "minSavings",
            "value": 240
          }
        ],
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
            "feedback": "10% of $240 is $24 saved.",
            "explanation": "10% of $240 is $24 saved.",
            "logText": "The No-Interest Bill Plan: Pay all now for 10% off"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use $60/month plan",
        "description": "no lock; cash flow smoother; “No interest makes spreading reasonable.”",
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
            "feedback": "No interest makes spreading reasonable.",
            "explanation": "No interest makes spreading reasonable.",
            "logText": "The No-Interest Bill Plan: Use $60/month plan"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask for written terms first",
        "description": "no lock; safety +; “No-interest should be clear in writing.”",
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
            "feedback": "No-interest should be clear in writing.",
            "explanation": "No-interest should be clear in writing.",
            "logText": "The No-Interest Bill Plan: Ask for written terms first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the discount cost?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying now saves money but weakens your cushion."
  },
  {
    "id": "ctx-tide-money-snapshot-not-worth",
    "title": "Money Snapshot, Not Self-Worth",
    "prompt": "The final screen shows assets, debts, cash, and net worth. It also shows repairs completed, support used, scams avoided, and choices explained. Money totals measure money, not your value as a person.",
    "topics": [
      "money-values",
      "credit",
      "scams"
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
        "label": "Calculate net worth",
        "description": "no lock; money know-how +; “Assets − debts = net worth.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              },
              {
                "type": "flag",
                "key": "completedMoneySnapshot",
                "value": true
              }
            ],
            "feedback": "Assets − debts = net worth.",
            "explanation": "Assets − debts = net worth.",
            "logText": "Money Snapshot, Not Self-Worth: Calculate net worth"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Review recovery wins",
        "description": "no lock; wellbeing +; “Repair is part of the story.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              },
              {
                "type": "flag",
                "key": "completedMoneySnapshot",
                "value": true
              }
            ],
            "feedback": "Repair is part of the story.",
            "explanation": "Repair is part of the story.",
            "logText": "Money Snapshot, Not Self-Worth: Review recovery wins"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pick one habit to carry forward",
        "description": "no lock; discipline +; “Small habits are future tools.”",
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
                "type": "flag",
                "key": "completedMoneySnapshot",
                "value": true
              }
            ],
            "feedback": "Small habits are future tools.",
            "explanation": "Small habits are future tools.",
            "logText": "Money Snapshot, Not Self-Worth: Pick one habit to carry forward"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does this number leave out?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Net worth is useful information, not a scoreboard for character."
  },
  {
    "id": "ctx-tide-net-pay-transport",
    "title": "The Job Farther Away",
    "prompt": "Job A pays $15/hour and costs $5/day to reach. Job B pays $14/hour and costs $1/day to reach. You work 4-hour shifts.",
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
        "label": "Choose Job A",
        "description": "no lock; $60 gross − $5 = $55 per shift; “Higher wage still wins by $3.”",
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
            "feedback": "Higher wage still wins by $3.",
            "explanation": "Higher wage still wins by $3.",
            "logText": "The Job Farther Away: Choose Job A"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose Job B",
        "description": "no lock; $56 gross − $1 = $55 per shift; better convenience; “Same net, closer route.”",
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
            "feedback": "Same net, closer route.",
            "explanation": "Same net, closer route.",
            "logText": "The Job Farther Away: Choose Job B"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about remote/admin shift",
        "description": "locked: opportunity ≥ 55; route may improve; “Questions can change options.”",
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
                "amount": -5
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Questions can change options.",
            "explanation": "Questions can change options.",
            "logText": "The Job Farther Away: Ask about remote/admin shift"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did commute subtract?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Equal net pay can make time and reliability decide."
  },
  {
    "id": "ctx-tide-open-textbook-route",
    "title": "The Free Textbook Option",
    "prompt": "A course lists a $78 textbook, but the teacher says an approved free open resource is acceptable. You want to make sure it is the right edition before skipping the book.",
    "topics": [
      "money-values",
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
        "label": "Confirm the free resource with teacher",
        "description": "no lock; savings +; “Checking makes free safer.”",
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
            "feedback": "Checking makes free safer.",
            "explanation": "Checking makes free safer.",
            "logText": "The Free Textbook Option: Confirm the free resource with teacher"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $78 book immediately",
        "description": "no lock; cash −$78, certainty +; “Certainty costs money.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -78
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Certainty costs money.",
            "explanation": "Certainty costs money.",
            "logText": "The Free Textbook Option: Buy the $78 book immediately"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use the free resource without checking",
        "description": "no lock; possible mismatch; “Free still needs fit.”",
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
            "feedback": "Free still needs fit.",
            "explanation": "Free still needs fit.",
            "logText": "The Free Textbook Option: Use the free resource without checking"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why verify before skipping?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Free is best only if it meets the requirement."
  },
  {
    "id": "ctx-tide-paid-training-choice",
    "title": "Lower Wage, Paid Training",
    "prompt": "Job A pays $15/hour with no training. Job B pays $13/hour but includes 20 paid training hours that may unlock a raise later. You can work 10 hours/week.",
    "topics": [
      "life-after-high-school",
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
        "label": "Choose Job A",
        "description": "no lock; more cash now; “$2/hour more × 10 hours = $20/week.”",
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
                "type": "flag",
                "key": "valuesPaidTraining",
                "value": true
              }
            ],
            "feedback": "$2/hour more × 10 hours = $20/week.",
            "explanation": "$2/hour more × 10 hours = $20/week.",
            "logText": "Lower Wage, Paid Training: Choose Job A"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose Job B",
        "description": "no lock; randomized raise later; opportunity +; “Training can be an investment.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              },
              {
                "type": "flag",
                "key": "valuesPaidTraining",
                "value": true
              }
            ],
            "feedback": "Training can be an investment.",
            "explanation": "Training can be an investment.",
            "logText": "Lower Wage, Paid Training: Choose Job B"
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
            "logText": "Lower Wage, Paid Training: Choose Job B met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about raise timeline",
        "description": "locked: confidence/opportunity ≥ 50; money know-how +; “Questions reduce uncertainty.”",
        "requirements": [
          {
            "type": "statAtLeast",
            "stat": "opportunity",
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
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              },
              {
                "type": "flag",
                "key": "valuesPaidTraining",
                "value": true
              }
            ],
            "feedback": "Questions reduce uncertainty.",
            "explanation": "Questions reduce uncertainty.",
            "logText": "Lower Wage, Paid Training: Ask about raise timeline"
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
            "logText": "Lower Wage, Paid Training: Ask about raise timeline met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why choose immediate pay?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Higher pay now can beat training; training can beat higher pay later."
  },
  {
    "id": "ctx-tide-parking-ticket-choice",
    "title": "Pay, Appeal, or Delay?",
    "prompt": "A future parking ticket is $38. You think it may be wrong because the sign was unclear. You can pay, appeal with evidence, or delay.",
    "topics": [
      "money-values"
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
        "label": "Pay now",
        "description": "no lock; cash −$38, stress down; “Simple and final.”",
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
                "amount": -3
              }
            ],
            "feedback": "Pay now changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay now changes the route and creates a finance tradeoff to notice.",
            "logText": "Pay, Appeal, or Delay?: Pay now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Appeal with photo/evidence token",
        "description": "locked: saved evidence; randomized result; “Evidence can change outcomes.”",
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
                "type": "cash",
                "amount": -38
              }
            ],
            "feedback": "Evidence can change outcomes.",
            "explanation": "Evidence can change outcomes.",
            "logText": "Pay, Appeal, or Delay?: Appeal with photo/evidence token"
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
            "logText": "Pay, Appeal, or Delay?: Appeal with photo/evidence token met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Delay",
        "description": "no lock; late fee risk; “Deadlines can add cost.”",
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
            "feedback": "Deadlines can add cost.",
            "explanation": "Deadlines can add cost.",
            "logText": "Pay, Appeal, or Delay?: Delay"
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
            "logText": "Pay, Appeal, or Delay?: Delay met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why pay even if unsure?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Appealing can save money but takes time and may fail."
  },
  {
    "id": "ctx-tide-pathway-benefit-card",
    "title": "Lower Pay, Better Fit?",
    "prompt": "A work-first job pays $16/hour. A training pathway pays $14/hour but includes a transit pass worth $40/month and certification support. You work 40 hours/month.",
    "topics": [
      "life-after-high-school",
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
        "label": "Take $16/hour job",
        "description": "no lock; $640 gross; “More cash now.”",
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
            "feedback": "Take $16/hour job changes the route and creates a finance tradeoff to notice.",
            "explanation": "Take $16/hour job changes the route and creates a finance tradeoff to notice.",
            "logText": "Lower Pay, Better Fit?: Take $16/hour job"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take $14/hour plus benefits",
        "description": "no lock; $560 gross + $40 transit + credential support; “Benefits can narrow the gap.”",
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
            "feedback": "Benefits can narrow the gap.",
            "explanation": "Benefits can narrow the gap.",
            "logText": "Lower Pay, Better Fit?: Take $14/hour plus benefits"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare one-year route",
        "description": "no lock; money know-how +; “Short-term and long-term can differ.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Short-term and long-term can differ.",
            "explanation": "Short-term and long-term can differ.",
            "logText": "Lower Pay, Better Fit?: Compare one-year route"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why choose wage?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher wage is not always the highest total value."
  },
  {
    "id": "ctx-tide-pending-snack-hold",
    "title": "The Purchase That Hasn’t Cleared",
    "prompt": "Your checking app shows $42, but a $17.80 purchase is still pending. You want to buy supplies for $27. The screen total is not the same as spendable money.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 15,
      "max": 16
    },
    "lifeStages": [
      "high-school"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Wait one day",
        "description": "no lock; avoids guessing; cash unchanged, discipline +2; “Pending money can still leave soon.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -27
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "tracksPendingBalance",
                "value": true
              }
            ],
            "feedback": "Pending money can still leave soon.",
            "explanation": "Pending money can still leave soon.",
            "logText": "The Purchase That Hasn’t Cleared: Wait one day"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now",
        "description": "no lock; may run short; checking risk +; “$42 − $17.80 − $27 = −$2.80.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -27
              },
              {
                "type": "flag",
                "key": "tracksPendingBalance",
                "value": true
              }
            ],
            "feedback": "$42 − $17.80 − $27 = −$2.80.",
            "explanation": "$42 − $17.80 − $27 = −$2.80.",
            "logText": "The Purchase That Hasn’t Cleared: Buy now"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Transfer $10 first",
        "description": "locked: needs savings ≥ $10; avoids shortfall; savings −$10, checking buffer +; “A small buffer changes the route.”",
        "requirements": [
          {
            "type": "minSavings",
            "value": 10
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "savings",
                "amount": -10
              },
              {
                "type": "flag",
                "key": "tracksPendingBalance",
                "value": true
              }
            ],
            "feedback": "A small buffer changes the route.",
            "explanation": "A small buffer changes the route.",
            "logText": "The Purchase That Hasn’t Cleared: Transfer $10 first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What number was truly available?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting is safer; transferring protects the purchase but uses savings."
  },
  {
    "id": "ctx-tide-pet-sitting-rate",
    "title": "Pricing Pet Sitting",
    "prompt": "A neighbor asks you to pet-sit. It takes 30 minutes twice a day for 4 days. You are deciding whether to charge $20 total, $8/day, or ask a mentor what is fair.",
    "topics": [
      "money-values",
      "career"
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
        "label": "Charge $20 total",
        "description": "no lock; easier yes, lower hourly value; “4 hours total means $5/hour.”",
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
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              },
              {
                "type": "flag",
                "key": "pricesPetCareWork",
                "value": true
              }
            ],
            "feedback": "4 hours total means $5/hour.",
            "explanation": "4 hours total means $5/hour.",
            "logText": "Pricing Pet Sitting: Charge $20 total"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Charge $8/day",
        "description": "no lock; $32 total, maybe accepted; “$8 × 4 = $32.”",
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
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              },
              {
                "type": "flag",
                "key": "pricesPetCareWork",
                "value": true
              }
            ],
            "feedback": "Charge $8/day changes the route and creates a finance tradeoff to notice.",
            "explanation": "Charge $8/day changes the route and creates a finance tradeoff to notice.",
            "logText": "Pricing Pet Sitting: Charge $8/day"
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
            "logText": "Pricing Pet Sitting: Charge $8/day met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to help price duties",
        "description": "locked: mentor support; randomized acceptance improves; “Clear duties support fair pricing.”",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              },
              {
                "type": "flag",
                "key": "pricesPetCareWork",
                "value": true
              }
            ],
            "feedback": "Clear duties support fair pricing.",
            "explanation": "Clear duties support fair pricing.",
            "logText": "Pricing Pet Sitting: Ask mentor to help price duties"
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
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Pricing Pet Sitting: Ask mentor to help price duties met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Did you price your time?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Lower price may get the job; fairer price respects your time."
  },
  {
    "id": "ctx-tide-pet-supply-advance",
    "title": "Who Pays for the Supplies?",
    "prompt": "During pet sitting, you need to buy $9.40 of approved supplies. You can pay now and ask for reimbursement, or contact the owner first.",
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
        "label": "Contact owner before buying",
        "description": "no lock; trust +, time cost; “Approval protects reimbursement.”",
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
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              },
              {
                "type": "flag",
                "key": "tracksReimbursements",
                "value": true
              }
            ],
            "feedback": "Approval protects reimbursement.",
            "explanation": "Approval protects reimbursement.",
            "logText": "Who Pays for the Supplies?: Contact owner before buying"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy and keep receipt",
        "description": "no lock; cash −$9.40, reimbursement likely; “A receipt supports the ask.”",
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
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              },
              {
                "type": "flag",
                "key": "tracksReimbursements",
                "value": true
              }
            ],
            "feedback": "A receipt supports the ask.",
            "explanation": "A receipt supports the ask.",
            "logText": "Who Pays for the Supplies?: Buy and keep receipt"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy without tracking",
        "description": "no lock; cash risk; “No record makes repayment awkward.”",
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
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              },
              {
                "type": "flag",
                "key": "tracksReimbursements",
                "value": true
              }
            ],
            "feedback": "No record makes repayment awkward.",
            "explanation": "No record makes repayment awkward.",
            "logText": "Who Pays for the Supplies?: Buy without tracking"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why ask first?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Acting fast helps the pet; approval protects your money."
  },
  {
    "id": "ctx-tide-policy-limit-gap",
    "title": "Covered, But Not Fully",
    "prompt": "A renter-style policy covers up to $1,000 for certain belongings after a $250 deductible. Your covered loss is estimated between $800 and $1,400.",
    "topics": [
      "insurance",
      "budgeting",
      "money-values"
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
        "label": "File claim",
        "description": "no lock; randomized claim amount; deductible paid, partial help; “Coverage has limits.”",
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
                "type": "flag",
                "key": "understandsPolicyLimit",
                "value": true
              }
            ],
            "feedback": "Coverage has limits.",
            "explanation": "Coverage has limits.",
            "logText": "Covered, But Not Fully: File claim"
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
            "logText": "Covered, But Not Fully: File claim met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use emergency fund for smaller loss",
        "description": "locked: emergency fund ≥ $800; avoids claim, savings drop; “Self-paying keeps policy quiet but uses cushion.”",
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
                "type": "flag",
                "key": "understandsPolicyLimit",
                "value": true
              }
            ],
            "feedback": "Self-paying keeps policy quiet but uses cushion.",
            "explanation": "Self-paying keeps policy quiet but uses cushion.",
            "logText": "Covered, But Not Fully: Use emergency fund for smaller loss"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Review higher-limit plan later",
        "description": "no lock; future premium +, risk down; “Higher protection costs more.”",
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
                "type": "flag",
                "key": "understandsPolicyLimit",
                "value": true
              }
            ],
            "feedback": "Higher protection costs more.",
            "explanation": "Higher protection costs more.",
            "logText": "Covered, But Not Fully: Review higher-limit plan later"
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
            "logText": "Covered, But Not Fully: Review higher-limit plan later met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did insurance not cover?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "More coverage costs more; lower coverage leaves more gap risk."
  },
  {
    "id": "ctx-tide-portfolio-rebalance-choice",
    "title": "The Portfolio Drift",
    "prompt": "Your simplified investment mix was 70% broad fund and 30% safer cash-like option. After growth, it drifted to 85/15. More growth feels exciting, but risk changed too.",
    "topics": [
      "investing",
      "money-values",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Rebalance to 70/30",
        "description": "locked: hasInvestments; risk back to plan; “Rebalancing follows your plan.”",
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
                "type": "flag",
                "key": "understandsRebalancing",
                "value": true
              }
            ],
            "feedback": "Rebalancing follows your plan.",
            "explanation": "Rebalancing follows your plan.",
            "logText": "The Portfolio Drift: Rebalance to 70/30"
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
            "logText": "The Portfolio Drift: Rebalance to 70/30 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep 85/15",
        "description": "no lock; higher risk, randomized outcome; “Winners can make your mix riskier.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 85
              },
              {
                "type": "flag",
                "key": "understandsRebalancing",
                "value": true
              }
            ],
            "feedback": "Winners can make your mix riskier.",
            "explanation": "Winners can make your mix riskier.",
            "logText": "The Portfolio Drift: Keep 85/15"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": 85
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Portfolio Drift: Keep 85/15 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor/source card to explain",
        "description": "locked: mentor or source skill; money know-how +; “Understanding before moving money helps.”",
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
              },
              {
                "type": "flag",
                "key": "understandsRebalancing",
                "value": true
              }
            ],
            "feedback": "Understanding before moving money helps.",
            "explanation": "Understanding before moving money helps.",
            "logText": "The Portfolio Drift: Ask mentor/source card to explain"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why not just keep what rose?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Keeping winners may grow more, but it can raise risk."
  },
  {
    "id": "ctx-tide-price-match-window",
    "title": "The Price Drops After You Buy",
    "prompt": "You bought a $64 item. Three days later, the same store lists it for $52. A price-match policy may refund the difference if you have proof.",
    "topics": [
      "money-values",
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
        "label": "Use receipt and request adjustment",
        "description": "locked: savedReceipt; cash +$12; “$64 − $52 = $12.”",
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
                "amount": 12
              }
            ],
            "feedback": "Use receipt and request adjustment changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use receipt and request adjustment changes the route and creates a finance tradeoff to notice.",
            "logText": "The Price Drops After You Buy: Use receipt and request adjustment"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it",
        "description": "no lock; time saved, cash unchanged; “Sometimes time is worth more than $12.”",
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
            "feedback": "Sometimes time is worth more than $12.",
            "explanation": "Sometimes time is worth more than $12.",
            "logText": "The Price Drops After You Buy: Ignore it"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask without receipt",
        "description": "no lock; randomized success; “Proof improves odds.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -64
              }
            ],
            "feedback": "Proof improves odds.",
            "explanation": "Proof improves odds.",
            "logText": "The Price Drops After You Buy: Ask without receipt"
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
            "logText": "The Price Drops After You Buy: Ask without receipt met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why save proof?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Chasing every price drop can waste time; some are worth it."
  },
  {
    "id": "ctx-tide-public-sale-plan",
    "title": "Selling Safely",
    "prompt": "You want to sell a used tablet worth about $110. A buyer asks to meet quickly in an unfamiliar place. Safety and money both matter.",
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
        "label": "Meet only in a public, supervised place",
        "description": "locked: family/caregiver or mentor support; safety +, sale slower; “A safe plan is part of the sale.”",
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
              },
              {
                "type": "flag",
                "key": "usesSafeResalePlan",
                "value": true
              }
            ],
            "feedback": "A safe plan is part of the sale.",
            "explanation": "A safe plan is part of the sale.",
            "logText": "Selling Safely: Meet only in a public, supervised place"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ship after verified payment clears",
        "description": "no lock; slower, safer; “Cleared payment matters.”",
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
                "type": "flag",
                "key": "usesSafeResalePlan",
                "value": true
              }
            ],
            "feedback": "Cleared payment matters.",
            "explanation": "Cleared payment matters.",
            "logText": "Selling Safely: Ship after verified payment clears"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Rush the meetup",
        "description": "no lock; safety risk +, chance of loss; “Speed increased risk.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "usesSafeResalePlan",
                "value": true
              }
            ],
            "feedback": "Speed increased risk.",
            "explanation": "Speed increased risk.",
            "logText": "Selling Safely: Rush the meetup"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the sale safer?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The fastest sale may not be the safest sale."
  },
  {
    "id": "ctx-tide-quote-lock-inflation",
    "title": "The Quote Expires",
    "prompt": "A repair quote is $133 but expires in 14 days. The shop says prices may rise 6% next month. You are still saving.",
    "topics": [
      "saving"
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
        "label": "Book before quote expires",
        "description": "locked: savings ≥ $133; price protected; “You avoid possible increase.”",
        "requirements": [
          {
            "type": "minSavings",
            "value": 133
          }
        ],
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -133
              },
              {
                "type": "flag",
                "key": "understandsQuoteExpiration",
                "value": true
              }
            ],
            "feedback": "You avoid possible increase.",
            "explanation": "You avoid possible increase.",
            "logText": "The Quote Expires: Book before quote expires"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait and risk higher quote",
        "description": "no lock; cash time +, possible cost +; “6% of $133 is about $7.98.”",
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
                "type": "flag",
                "key": "understandsQuoteExpiration",
                "value": true
              }
            ],
            "feedback": "6% of $133 is about $7.98.",
            "explanation": "6% of $133 is about $7.98.",
            "logText": "The Quote Expires: Wait and risk higher quote"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask for a partial deposit to lock price",
        "description": "no lock; cash partly locked; “A smaller deposit may protect price.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -133
              },
              {
                "type": "flag",
                "key": "understandsQuoteExpiration",
                "value": true
              }
            ],
            "feedback": "A smaller deposit may protect price.",
            "explanation": "A smaller deposit may protect price.",
            "logText": "The Quote Expires: Ask for a partial deposit to lock price"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did certainty cost?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting helps saving but can expose you to higher prices."
  },
  {
    "id": "ctx-tide-rain-cancel-refund",
    "title": "The Rain Cancellation",
    "prompt": "You prepaid $18 for an outdoor workshop. Rain may cancel it. The policy says full refund if the organizer cancels, no refund if you skip.",
    "topics": [
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
        "label": "Attend if held",
        "description": "no lock; value gained; “Your payment becomes the experience.”",
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
            "feedback": "Your payment becomes the experience.",
            "explanation": "Your payment becomes the experience.",
            "logText": "The Rain Cancellation: Attend if held"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip because weather looks bad",
        "description": "no lock; possible loss; “Choosing not to go may not trigger refund.”",
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
            "feedback": "Choosing not to go may not trigger refund.",
            "explanation": "Choosing not to go may not trigger refund.",
            "logText": "The Rain Cancellation: Skip because weather looks bad"
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
            "logText": "The Rain Cancellation: Skip because weather looks bad met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait for official cancellation notice",
        "description": "no lock; refund likely if canceled; “Official status matters.”",
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
            "feedback": "Official status matters.",
            "explanation": "Official status matters.",
            "logText": "The Rain Cancellation: Wait for official cancellation notice"
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
            "logText": "The Rain Cancellation: Wait for official cancellation notice met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the policy say?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Skipping protects comfort; waiting protects refund rights."
  },
  {
    "id": "ctx-tide-rainy-route-backup",
    "title": "The Backup Route",
    "prompt": "You need to arrive on time for a paid training. Your usual ride is free but sometimes late. A backup route costs $6.",
    "topics": [
      "life-after-high-school"
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
        "label": "Take the free usual route",
        "description": "no lock; saves cash, random lateness; “Free can still carry timing risk.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -6
              },
              {
                "type": "flag",
                "key": "hasBackupRoute",
                "value": true
              }
            ],
            "feedback": "Free can still carry timing risk.",
            "explanation": "Free can still carry timing risk.",
            "logText": "The Backup Route: Take the free usual route"
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
            "logText": "The Backup Route: Take the free usual route met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $6 for the backup route",
        "description": "no lock; cash −$6, opportunity protected; “You bought reliability.”",
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
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "flag",
                "key": "hasBackupRoute",
                "value": true
              }
            ],
            "feedback": "You bought reliability.",
            "explanation": "You bought reliability.",
            "logText": "The Backup Route: Pay $6 for the backup route"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a caregiver to help plan both routes",
        "description": "locked: family/caregiver support; trust +, risk down; “Support improves the plan, not magic.”",
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
              },
              {
                "type": "flag",
                "key": "hasBackupRoute",
                "value": true
              }
            ],
            "feedback": "Support improves the plan, not magic.",
            "explanation": "Support improves the plan, not magic.",
            "logText": "The Backup Route: Ask a caregiver to help plan both routes"
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
            "logText": "The Backup Route: Ask a caregiver to help plan both routes met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How much was on-time worth?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Paying for reliability can be smart when an opportunity is on the line."
  },
  {
    "id": "ctx-tide-refund-to-store-credit",
    "title": "Cash Back or Store Credit?",
    "prompt": "A store offers $30 cash refund or $36 store credit. You may not shop there again soon. The larger number is not automatically better.",
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
        "label": "Take $30 cash",
        "description": "no lock; liquid money +; “Cash works anywhere.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 36
              }
            ],
            "feedback": "Cash works anywhere.",
            "explanation": "Cash works anywhere.",
            "logText": "Cash Back or Store Credit?: Take $30 cash"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take $36 store credit",
        "description": "no lock; higher value, locked to store; “20% more, but less flexible.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 36
              }
            ],
            "feedback": "20% more, but less flexible.",
            "explanation": "20% more, but less flexible.",
            "logText": "Cash Back or Store Credit?: Take $36 store credit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if credit expires",
        "description": "no lock; money know-how +; “Expiration changes value.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 36
              }
            ],
            "feedback": "Expiration changes value.",
            "explanation": "Expiration changes value.",
            "logText": "Cash Back or Store Credit?: Ask if credit expires"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is cash flexible?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher value is not always better if it is hard to use."
  },
  {
    "id": "ctx-tide-renter-neighbor-damage",
    "title": "Who Pays for the Damage?",
    "prompt": "A visitor accidentally damages something in your future apartment. The cost might be $80 or $300. You are unsure whether insurance applies.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Check policy before paying",
        "description": "no lock; money know-how +; “Coverage depends on rules.”",
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
            "feedback": "Coverage depends on rules.",
            "explanation": "Coverage depends on rules.",
            "logText": "Who Pays for the Damage?: Check policy before paying"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay out of pocket quickly",
        "description": "locked: emergency fund ≥ $300; stress down, savings −; “Quick payment buys peace.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -80
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Quick payment buys peace.",
            "explanation": "Quick payment buys peace.",
            "logText": "Who Pays for the Damage?: Pay out of pocket quickly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "File claim immediately",
        "description": "no lock; randomized usefulness; “Claims may not fit small losses.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -80
              }
            ],
            "feedback": "Claims may not fit small losses.",
            "explanation": "Claims may not fit small losses.",
            "logText": "Who Pays for the Damage?: File claim immediately"
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
            "logText": "Who Pays for the Damage?: File claim immediately met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the policy answer?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "A fast fix may protect relationships; checking rules protects money."
  },
  {
    "id": "ctx-tide-repair-estimate-approval",
    "title": "Approve the Car Repair?",
    "prompt": "A future car repair estimate is $420, but the mechanic says an extra issue may appear after inspection. You need transportation for work.",
    "topics": [
      "money-values",
      "career"
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
        "label": "Approve repair with $100 buffer",
        "description": "locked: emergency fund ≥ $520; lower stress; “A buffer handles estimate changes.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -100
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "A buffer handles estimate changes.",
            "explanation": "A buffer handles estimate changes.",
            "logText": "Approve the Car Repair?: Approve repair with $100 buffer"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Approve only the known $420",
        "description": "no lock; randomized extra cost risk; “Estimates are not guarantees.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -420
              }
            ],
            "feedback": "Estimates are not guarantees.",
            "explanation": "Estimates are not guarantees.",
            "logText": "Approve the Car Repair?: Approve only the known $420"
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
            "logText": "Approve the Car Repair?: Approve only the known $420 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Get second estimate",
        "description": "no lock; time cost, possible savings; “Checking can save money but delays repair.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -420
              }
            ],
            "feedback": "Checking can save money but delays repair.",
            "explanation": "Checking can save money but delays repair.",
            "logText": "Approve the Car Repair?: Get second estimate"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why add a buffer?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Fast repair protects work access; second opinions protect cash."
  },
  {
    "id": "ctx-tide-roommate-supply-rotation",
    "title": "The Supply Rotation",
    "prompt": "Three roommates use shared supplies costing about $24/month. One person keeps buying everything and feels annoyed. You need a fair system.",
    "topics": [
      "money-values",
      "consumer-skills"
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
        "label": "Split monthly: $8 each",
        "description": "no lock; simple; “$24 ÷ 3 = $8.”",
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
            "feedback": "Split monthly: $8 each changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split monthly: $8 each changes the route and creates a finance tradeoff to notice.",
            "logText": "The Supply Rotation: Split monthly: $8 each"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Rotate who buys each month",
        "description": "no lock; less math, uneven months; “Rotation is easy but not exact.”",
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
            "feedback": "Rotation is easy but not exact.",
            "explanation": "Rotation is easy but not exact.",
            "logText": "The Supply Rotation: Rotate who buys each month"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Track actual use",
        "description": "locked: discipline ≥ 55; fairer, more work; “Precision costs attention.”",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Precision costs attention.",
            "explanation": "Precision costs attention.",
            "logText": "The Supply Rotation: Track actual use"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is simple helpful?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fairness can mean equal, rotating, or usage-based."
  },
  {
    "id": "ctx-tide-safety-gear-choice",
    "title": "Protect the Asset",
    "prompt": "You use a $220 tablet for school and small projects. A protective case costs $24. You are careful, but accidents happen.",
    "topics": [
      "life-after-high-school",
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
        "label": "Buy case",
        "description": "locked: cash ≥ $24; cash −, damage risk down; “Protection is not exciting, but it lowers risk.”",
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
                "amount": -24
              }
            ],
            "feedback": "Protection is not exciting, but it lowers risk.",
            "explanation": "Protection is not exciting, but it lowers risk.",
            "logText": "Protect the Asset: Buy case"
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
            "logText": "Protect the Asset: Buy case met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip case",
        "description": "no lock; cash saved, randomized damage risk; “Care helps, but luck still matters.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -24
              }
            ],
            "feedback": "Care helps, but luck still matters.",
            "explanation": "Care helps, but luck still matters.",
            "logText": "Protect the Asset: Skip case"
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
            "logText": "Protect the Asset: Skip case met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use cheaper sleeve for $9",
        "description": "no lock; partial protection; “Lower cost, lower protection.”",
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
            "feedback": "Lower cost, lower protection.",
            "explanation": "Lower cost, lower protection.",
            "logText": "Protect the Asset: Use cheaper sleeve for $9"
          }
        ]
      }
    ],
    "reflectionPrompt": "What asset did you protect?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Protection can feel like wasted money until damage happens."
  },
  {
    "id": "ctx-tide-scholarship-reuse-ethics",
    "title": "Reuse or Rewrite?",
    "prompt": "Two scholarship prompts are similar but not identical. You can reuse parts of an essay, but copying without adapting may miss the question. You have one evening.",
    "topics": [
      "life-after-high-school",
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
        "label": "Reuse structure, rewrite details",
        "description": "no lock; time saved, quality +; “Reusing your own ideas is fine when adapted.”",
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
                "type": "flag",
                "key": "adaptsScholarshipEssay",
                "value": true
              }
            ],
            "feedback": "Reusing your own ideas is fine when adapted.",
            "explanation": "Reusing your own ideas is fine when adapted.",
            "logText": "Reuse or Rewrite?: Reuse structure, rewrite details"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Submit the same essay unchanged",
        "description": "no lock; time saved, lower fit; “Fast is not always strong.”",
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
                "type": "flag",
                "key": "adaptsScholarshipEssay",
                "value": true
              }
            ],
            "feedback": "Fast is not always strong.",
            "explanation": "Fast is not always strong.",
            "logText": "Reuse or Rewrite?: Submit the same essay unchanged"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor for feedback",
        "description": "locked: mentor support; opportunity +; “Feedback improves clarity.”",
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
              },
              {
                "type": "flag",
                "key": "adaptsScholarshipEssay",
                "value": true
              }
            ],
            "feedback": "Feedback improves clarity.",
            "explanation": "Feedback improves clarity.",
            "logText": "Reuse or Rewrite?: Ask mentor for feedback"
          }
        ]
      }
    ],
    "reflectionPrompt": "What needed changing?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Reuse saves time; adapting protects quality and originality."
  },
  {
    "id": "ctx-tide-service-fee-total",
    "title": "The Fee Stack",
    "prompt": "A $32 event ticket has an 8% service fee plus a $3 processing fee. The advertised price is not the final price. You have $38.",
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
        "label": "Calculate before buying",
        "description": "no lock; money know-how +; “8% of $32 is $2.56; total is $37.56.”",
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
            "feedback": "8% of $32 is $2.56; total is $37.56.",
            "explanation": "8% of $32 is $2.56; total is $37.56.",
            "logText": "The Fee Stack: Calculate before buying"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Click buy without checking",
        "description": "no lock; cash almost gone; “You stayed under $38, but barely.”",
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
            "feedback": "You stayed under $38, but barely.",
            "explanation": "You stayed under $38, but barely.",
            "logText": "The Fee Stack: Click buy without checking"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip and find a free event",
        "description": "no lock; cash saved, wellbeing depends on values; “Saving is useful, but fun matters too.”",
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
            "feedback": "Saving is useful, but fun matters too.",
            "explanation": "Saving is useful, but fun matters too.",
            "logText": "The Fee Stack: Skip and find a free event"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which fee surprised you?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The event may be worth it; the key is seeing the full price."
  },
  {
    "id": "ctx-tide-shift-swap-reference",
    "title": "The Shift You Can’t Make",
    "prompt": "You cannot make a shift because of a school event. A mentor once told you that reliability is partly about communication, not perfection. Your choice affects future references.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Message early and offer two swap options",
        "description": "no lock; trust +, opportunity +; “Early communication gives people time.”",
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
                "type": "flag",
                "key": "strongReferencePossible",
                "value": true
              }
            ],
            "feedback": "Early communication gives people time.",
            "explanation": "Early communication gives people time.",
            "logText": "The Shift You Can’t Make: Message early and offer two swap options"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until the last minute",
        "description": "no lock; stress +, opportunity −; “A real issue became harder because timing shrank.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
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
              },
              {
                "type": "flag",
                "key": "strongReferencePossible",
                "value": true
              }
            ],
            "feedback": "A real issue became harder because timing shrank.",
            "explanation": "A real issue became harder because timing shrank.",
            "logText": "The Shift You Can’t Make: Wait until the last minute"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to help script the message",
        "description": "locked: mentor available; trust +, money know-how +; “Support can improve the wording.”",
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
                "type": "flag",
                "key": "strongReferencePossible",
                "value": true
              }
            ],
            "feedback": "Support can improve the wording.",
            "explanation": "Support can improve the wording.",
            "logText": "The Shift You Can’t Make: Ask mentor to help script the message"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did planning protect trust?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Asking for help takes time, but it can protect future opportunities."
  },
  {
    "id": "ctx-tide-side-hustle-tax-calendar",
    "title": "Set Aside by Date",
    "prompt": "Your approved side work earns $420 profit over a season. A mentor suggests setting aside a simplified 20% for taxes and marking a deadline.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Set aside 20% now",
        "description": "no lock; savings locked for tax; “20% of $420 is $84.”",
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
                "type": "flag",
                "key": "usesTaxCalendar",
                "value": true
              }
            ],
            "feedback": "20% of $420 is $84.",
            "explanation": "20% of $420 is $84.",
            "logText": "Set Aside by Date: Set aside 20% now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend now, plan to save later",
        "description": "no lock; cash flexible, future stress; “Later saving needs discipline.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
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
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "usesTaxCalendar",
                "value": true
              }
            ],
            "feedback": "Later saving needs discipline.",
            "explanation": "Later saving needs discipline.",
            "logText": "Set Aside by Date: Spend now, plan to save later"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use tax calendar reminder",
        "description": "locked: discipline ≥ 45; deadline risk down; “Dates make obligations visible.”",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              },
              {
                "type": "flag",
                "key": "usesTaxCalendar",
                "value": true
              }
            ],
            "feedback": "Dates make obligations visible.",
            "explanation": "Dates make obligations visible.",
            "logText": "Set Aside by Date: Use tax calendar reminder"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why separate tax money?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Set-aside reduces spending money but prevents later scramble."
  },
  {
    "id": "ctx-tide-skills-portfolio-hosting",
    "title": "Free Portfolio or Paid Hosting?",
    "prompt": "A free portfolio site includes ads and limited storage. A paid student-safe option is $5/month. Your portfolio may help with internships or gigs.",
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
        "label": "Use free option",
        "description": "no lock; cash saved, less polish; “Free may be enough.”",
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
                "type": "flag",
                "key": "testsPortfolioValue",
                "value": true
              }
            ],
            "feedback": "Free may be enough.",
            "explanation": "Free may be enough.",
            "logText": "Free Portfolio or Paid Hosting?: Use free option"
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
            "logText": "Free Portfolio or Paid Hosting?: Use free option met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $5/month for 3 months",
        "description": "locked: income or savings ≥ $15; opportunity +; “$5 × 3 = $15 experiment.”",
        "requirements": [
          {
            "type": "minSavings",
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
                "amount": 15
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              },
              {
                "type": "flag",
                "key": "testsPortfolioValue",
                "value": true
              }
            ],
            "feedback": "$5 × 3 = $15 experiment.",
            "explanation": "$5 × 3 = $15 experiment.",
            "logText": "Free Portfolio or Paid Hosting?: Pay $5/month for 3 months"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to review free version first",
        "description": "locked: mentor support; randomized opportunity odds improve; “Feedback before spending.”",
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
                "type": "flag",
                "key": "testsPortfolioValue",
                "value": true
              }
            ],
            "feedback": "Feedback before spending.",
            "explanation": "Feedback before spending.",
            "logText": "Free Portfolio or Paid Hosting?: Ask mentor to review free version first"
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
            "logText": "Free Portfolio or Paid Hosting?: Ask mentor to review free version first met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did free cost?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Paid polish can help, but testing free first may be wiser."
  },
  {
    "id": "ctx-tide-source-ladder-aid",
    "title": "Which Aid Advice?",
    "prompt": "Three sources explain aid: an official page, a school counselor, and an anonymous post claiming “loans are always better.” You need a source ladder.",
    "topics": [
      "scams",
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
        "label": "Trust official + counselor first",
        "description": "no lock; safety +; “Known sources beat anonymous claims.”",
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
                "type": "flag",
                "key": "usesSourceLadder",
                "value": true
              }
            ],
            "feedback": "Known sources beat anonymous claims.",
            "explanation": "Known sources beat anonymous claims.",
            "logText": "Which Aid Advice?: Trust official + counselor first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Follow anonymous post",
        "description": "no lock; risk +; “Confidence is not evidence.”",
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
                "type": "flag",
                "key": "usesSourceLadder",
                "value": true
              }
            ],
            "feedback": "Confidence is not evidence.",
            "explanation": "Confidence is not evidence.",
            "logText": "Which Aid Advice?: Follow anonymous post"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare all three, list agreements",
        "description": "locked: source check skill; money know-how +; “Triangulation finds common facts.”",
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
                "type": "flag",
                "key": "usesSourceLadder",
                "value": true
              }
            ],
            "feedback": "Triangulation finds common facts.",
            "explanation": "Triangulation finds common facts.",
            "logText": "Which Aid Advice?: Compare all three, list agreements"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which source was strongest?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fast advice can be tempting, but source quality changes risk."
  },
  {
    "id": "ctx-tide-source-sponsored-tip",
    "title": "The Sponsored Money Tip",
    "prompt": "A video explains a money app and says “sponsored.” It is not automatically false, but it is not neutral either. You need to judge the claim.",
    "topics": [
      "scams",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Compare with official/source card",
        "description": "no lock; source savvy +; “Sponsored means check incentives.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              },
              {
                "type": "flag",
                "key": "checksSponsoredClaims",
                "value": true
              }
            ],
            "feedback": "Sponsored means check incentives.",
            "explanation": "Sponsored means check incentives.",
            "logText": "The Sponsored Money Tip: Compare with official/source card"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Follow the tip immediately",
        "description": "no lock; randomized outcome; “Fast trust can be risky.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "checksSponsoredClaims",
                "value": true
              }
            ],
            "feedback": "Fast trust can be risky.",
            "explanation": "Fast trust can be risky.",
            "logText": "The Sponsored Money Tip: Follow the tip immediately"
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
            "logText": "The Sponsored Money Tip: Follow the tip immediately met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor what sponsored means",
        "description": "locked: mentor support; money know-how +; “Understanding incentives helps.”",
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
              },
              {
                "type": "flag",
                "key": "checksSponsoredClaims",
                "value": true
              }
            ],
            "feedback": "Understanding incentives helps.",
            "explanation": "Understanding incentives helps.",
            "logText": "The Sponsored Money Tip: Ask mentor what sponsored means"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the sponsor want?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Sponsored content can be useful, but it needs extra checking."
  },
  {
    "id": "ctx-tide-store-card-discount",
    "title": "15% Off Today",
    "prompt": "A store offers 15% off a $140 purchase if you open a store credit account. You can pay cash today or open the account and risk carrying a balance.",
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
        "label": "Pay cash, skip account",
        "description": "no lock; no discount, no debt risk; “Simple can be strong.”",
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
            "feedback": "Simple can be strong.",
            "explanation": "Simple can be strong.",
            "logText": "15% Off Today: Pay cash, skip account"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Open only if paying full immediately",
        "description": "locked: cash ≥ $119; saves $21, credit complexity +; “$140 × 15% = $21.”",
        "requirements": [
          {
            "type": "minCash",
            "value": 119
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
            "feedback": "Open only if paying full immediately changes the route and creates a finance tradeoff to notice.",
            "explanation": "Open only if paying full immediately changes the route and creates a finance tradeoff to notice.",
            "logText": "15% Off Today: Open only if paying full immediately"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Open and pay later",
        "description": "no lock; discount now, interest risk; “A discount can disappear if interest grows.”",
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
            "feedback": "A discount can disappear if interest grows.",
            "explanation": "A discount can disappear if interest grows.",
            "logText": "15% Off Today: Open and pay later"
          }
        ]
      }
    ],
    "reflectionPrompt": "What risk did you avoid?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Discounts are useful only if repayment stays controlled."
  },
  {
    "id": "ctx-tide-subscription-class-tool",
    "title": "Monthly Tool for One Project",
    "prompt": "A digital tool costs $11/month or $4 for a one-week pass. Your project lasts two weeks, but you may use the tool later.",
    "topics": [
      "consumer-skills",
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
        "label": "Buy two weekly passes",
        "description": "no lock; $8 total, no renewal; “Short need, short access.”",
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
            "feedback": "Short need, short access.",
            "explanation": "Short need, short access.",
            "logText": "Monthly Tool for One Project: Buy two weekly passes"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy monthly",
        "description": "no lock; $11, more flexibility; “Extra $3 buys more time.”",
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
            "feedback": "Extra $3 buys more time.",
            "explanation": "Extra $3 buys more time.",
            "logText": "Monthly Tool for One Project: Buy monthly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use free school alternative",
        "description": "no lock; cash saved, fewer features; “Free can be enough.”",
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
            "feedback": "Free can be enough.",
            "explanation": "Free can be enough.",
            "logText": "Monthly Tool for One Project: Use free school alternative"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why match time to need?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Monthly is not bad if extra time has value."
  },
  {
    "id": "ctx-tide-summer-stipend-delay",
    "title": "The Stipend Arrives Late",
    "prompt": "A summer program offers a $300 stipend, but payment may arrive 2–4 weeks after the program starts. You need transportation money before then.",
    "topics": [
      "money-values",
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
        "label": "Build a $60 transit buffer first",
        "description": "locked: savings ≥ $60; opportunity protected; “A buffer bridges delayed pay.”",
        "requirements": [
          {
            "type": "minSavings",
            "value": 60
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
                "type": "flag",
                "key": "plansForDelayedStipend",
                "value": true
              }
            ],
            "feedback": "A buffer bridges delayed pay.",
            "explanation": "A buffer bridges delayed pay.",
            "logText": "The Stipend Arrives Late: Build a $60 transit buffer first"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Start without buffer",
        "description": "no lock; randomized cash crunch; “Promised money is not spendable yet.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 2
              },
              {
                "type": "flag",
                "key": "plansForDelayedStipend",
                "value": true
              }
            ],
            "feedback": "Promised money is not spendable yet.",
            "explanation": "Promised money is not spendable yet.",
            "logText": "The Stipend Arrives Late: Start without buffer"
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
            "logText": "The Stipend Arrives Late: Start without buffer met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask program about emergency transit help",
        "description": "no lock; possible support; “Programs may have resources if you ask.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 4
              },
              {
                "type": "flag",
                "key": "plansForDelayedStipend",
                "value": true
              }
            ],
            "feedback": "Programs may have resources if you ask.",
            "explanation": "Programs may have resources if you ask.",
            "logText": "The Stipend Arrives Late: Ask program about emergency transit help"
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
            "logText": "The Stipend Arrives Late: Ask program about emergency transit help met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why plan before payment?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Starting faster may work, but delayed pay can strain cash."
  },
  {
    "id": "ctx-tide-template-license-choice",
    "title": "Can You Sell That Design?",
    "prompt": "You find a design template for a side-hustle product. One version is free for personal use only; a commercial license costs $18. You plan to sell items using it.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Buy the $18 commercial license",
        "description": "locked: cash ≥ $18; legal/safety +, cash −$18; “Rights matter when selling.”",
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
              },
              {
                "type": "flag",
                "key": "respectsCommercialLicense",
                "value": true
              }
            ],
            "feedback": "Rights matter when selling.",
            "explanation": "Rights matter when selling.",
            "logText": "Can You Sell That Design?: Buy the $18 commercial license"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use only your own design",
        "description": "no lock; time cost, no license cost; opportunity +; “Original work avoids permission risk.”",
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
                "type": "flag",
                "key": "respectsCommercialLicense",
                "value": true
              }
            ],
            "feedback": "Original work avoids permission risk.",
            "explanation": "Original work avoids permission risk.",
            "logText": "Can You Sell That Design?: Use only your own design"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use the free personal template anyway",
        "description": "no lock; risk +; “Free personal use does not mean sellable.”",
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
                "type": "flag",
                "key": "respectsCommercialLicense",
                "value": true
              }
            ],
            "feedback": "Free personal use does not mean sellable.",
            "explanation": "Free personal use does not mean sellable.",
            "logText": "Can You Sell That Design?: Use the free personal template anyway"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does use type matter?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying for rights costs cash; making your own costs time."
  },
  {
    "id": "ctx-tide-tire-pressure-savings",
    "title": "Small Maintenance, Real Savings",
    "prompt": "A future vehicle costs about $48/month in fuel. Keeping tires properly inflated may save around 5% in this simplified model, but it takes attention.",
    "topics": [
      "saving",
      "money-values"
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
        "label": "Check monthly",
        "description": "no lock; discipline +, small savings; “5% of $48 is $2.40/month.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -48
              }
            ],
            "feedback": "5% of $48 is $2.40/month.",
            "explanation": "5% of $48 is $2.40/month.",
            "logText": "Small Maintenance, Real Savings: Check monthly"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it",
        "description": "no lock; time saved, possible repair/fuel cost; “Convenience has a quiet cost.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -48
              }
            ],
            "feedback": "Convenience has a quiet cost.",
            "explanation": "Convenience has a quiet cost.",
            "logText": "Small Maintenance, Real Savings: Ignore it"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to teach the check",
        "description": "locked: mentor support; skill +; “Skill lowers future dependence.”",
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
                "amount": -48
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Skill lowers future dependence.",
            "explanation": "Skill lowers future dependence.",
            "logText": "Small Maintenance, Real Savings: Ask mentor to teach the check"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do small savings matter?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The savings are small, but habits can compound."
  },
  {
    "id": "ctx-tide-tool-library-membership",
    "title": "Borrowing Tools by Membership",
    "prompt": "A tool library membership is $36/year. Renting the same tools separately would cost $8 per project. You expect 3–6 projects.",
    "topics": [
      "credit",
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
        "label": "Join for $36",
        "description": "locked: cash ≥ $36; worth it at 5+ projects; “$36 ÷ $8 = 4.5 projects.”",
        "requirements": [
          {
            "type": "minCash",
            "value": 36
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
            "feedback": "$36 ÷ $8 = 4.5 projects.",
            "explanation": "$36 ÷ $8 = 4.5 projects.",
            "logText": "Borrowing Tools by Membership: Join for $36"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Rent per project",
        "description": "no lock; flexible, may cost more; “Good if you use it only 3 times.”",
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
            "feedback": "Good if you use it only 3 times.",
            "explanation": "Good if you use it only 3 times.",
            "logText": "Borrowing Tools by Membership: Rent per project"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Share membership with friend if allowed",
        "description": "locked: friend support + policy allows; lower cost, rule-check needed; “Rules matter.”",
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
                "amount": -8
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Share membership with friend if allowed changes the route and creates a finance tradeoff to notice.",
            "explanation": "Share membership with friend if allowed changes the route and creates a finance tradeoff to notice.",
            "logText": "Borrowing Tools by Membership: Share membership with friend if allowed"
          }
        ]
      }
    ],
    "reflectionPrompt": "How many uses break even?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Ownership is not always needed; access can be enough."
  },
  {
    "id": "ctx-tide-uniform-deposit-return",
    "title": "The Uniform Deposit",
    "prompt": "A job requires a $35 uniform deposit. It is returned if the uniform comes back clean and undamaged. You can also buy your own approved shirt for $22, but that money is not returned.",
    "topics": [
      "banking",
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
        "label": "Pay deposit and track return rules",
        "description": "no lock; cash locked, possible return; “Deposit is not the same as a fee.”",
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
                "type": "flag",
                "key": "tracksDepositRules",
                "value": true
              }
            ],
            "feedback": "Deposit is not the same as a fee.",
            "explanation": "Deposit is not the same as a fee.",
            "logText": "The Uniform Deposit: Pay deposit and track return rules"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $22 shirt",
        "description": "no lock; lower upfront, no refund; “$22 is gone, but simpler.”",
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
                "type": "flag",
                "key": "tracksDepositRules",
                "value": true
              }
            ],
            "feedback": "$22 is gone, but simpler.",
            "explanation": "$22 is gone, but simpler.",
            "logText": "The Uniform Deposit: Buy the $22 shirt"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask manager to write return rules",
        "description": "locked: discipline ≥ 45; safety +; “Clear rules prevent conflict.”",
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
                "amount": -35
              },
              {
                "type": "flag",
                "key": "tracksDepositRules",
                "value": true
              }
            ],
            "feedback": "Clear rules prevent conflict.",
            "explanation": "Clear rules prevent conflict.",
            "logText": "The Uniform Deposit: Ask manager to write return rules"
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes money returnable?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A deposit may cost more today but can return later."
  },
  {
    "id": "ctx-tide-useful-shoes-repair",
    "title": "Repair the Shoes or Replace Them?",
    "prompt": "Your everyday shoes need a $16 repair. New ones cost $58. The old ones are not worth much to sell, but they are still useful if repaired.",
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
        "label": "Repair for $16",
        "description": "no lock; cash −$16, useful asset restored; “You saved $42 compared with new.”",
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
            "feedback": "You saved $42 compared with new.",
            "explanation": "You saved $42 compared with new.",
            "logText": "Repair the Shoes or Replace Them?: Repair for $16"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Replace for $58",
        "description": "locked: cash/savings ≥ $58; cash −$58, wellbeing +; “New may last longer.”",
        "requirements": [
          {
            "type": "minSavings",
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
              }
            ],
            "feedback": "New may last longer.",
            "explanation": "New may last longer.",
            "logText": "Repair the Shoes or Replace Them?: Replace for $58"
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
            "logText": "Repair the Shoes or Replace Them?: Replace for $58 met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and risk worse damage",
        "description": "no lock; randomized later cost; “Waiting keeps cash now but may raise cost.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -58
              }
            ],
            "feedback": "Waiting keeps cash now but may raise cost.",
            "explanation": "Waiting keeps cash now but may raise cost.",
            "logText": "Repair the Shoes or Replace Them?: Wait and risk worse damage"
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
            "logText": "Repair the Shoes or Replace Them?: Wait and risk worse damage met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How can usefulness differ from resale?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Repair is cheaper now; replacement may last longer."
  },
  {
    "id": "ctx-tide-useful-vs-resale-capstone",
    "title": "Useful Value Is Not Cash",
    "prompt": "Your asset shelf shows a laptop useful for school/work, resale value $180, and replacement value $650. Your net worth uses resale value, but usefulness is higher.",
    "topics": [
      "life-after-high-school",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Keep and maintain it",
        "description": "no lock; usefulness protected; “Useful value can exceed resale.”",
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
            "feedback": "Useful value can exceed resale.",
            "explanation": "Useful value can exceed resale.",
            "logText": "Useful Value Is Not Cash: Keep and maintain it"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell for $180",
        "description": "no lock; cash +, opportunity risk; “Cash rises, useful tool disappears.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 180
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Cash rises, useful tool disappears.",
            "explanation": "Cash rises, useful tool disappears.",
            "logText": "Useful Value Is Not Cash: Sell for $180"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save toward replacement",
        "description": "no lock; future route protected; “Replacement planning avoids crisis.”",
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
            "feedback": "Replacement planning avoids crisis.",
            "explanation": "Replacement planning avoids crisis.",
            "logText": "Useful Value Is Not Cash: Save toward replacement"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why not sell it?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Selling raises cash but may lower opportunity."
  },
  {
    "id": "ctx-tide-utility-start-deposit",
    "title": "Starting Service",
    "prompt": "Starting a utility account requires either a $75 refundable deposit or a $9/month no-deposit plan for 12 months. You expect to stay one year.",
    "topics": [
      "investing",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay $75 deposit",
        "description": "locked: savings ≥ $75; cash locked, maybe returned; “Refundable if rules met.”",
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
                "type": "cash",
                "amount": -75
              }
            ],
            "feedback": "Refundable if rules met.",
            "explanation": "Refundable if rules met.",
            "logText": "Starting Service: Pay $75 deposit"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $9/month",
        "description": "no lock; $108 over year, no big upfront; “$9 × 12 = $108.”",
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
            "feedback": "Pay $9/month changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay $9/month changes the route and creates a finance tradeoff to notice.",
            "logText": "Starting Service: Pay $9/month"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask whether on-time payments return deposit early",
        "description": "no lock; knowledge +; “Rules can change the math.”",
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
            "feedback": "Rules can change the math.",
            "explanation": "Rules can change the math.",
            "logText": "Starting Service: Ask whether on-time payments return deposit early"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is locked money different?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Lower total cost can be harder if upfront cash is tight."
  },
  {
    "id": "ctx-tide-work-study-schedule",
    "title": "Earned Aid Takes Hours",
    "prompt": "A fictional work-study award could let you earn up to $900, but you must work hours to receive it. Your class schedule is already full.",
    "topics": [
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Work 6 hours/week",
        "description": "no lock; income +, wellbeing − if overloaded; “$12 × 6 × 12 weeks = $864.”",
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
            "feedback": "$12 × 6 × 12 weeks = $864.",
            "explanation": "$12 × 6 × 12 weeks = $864.",
            "logText": "Earned Aid Takes Hours: Work 6 hours/week"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Work 3 hours/week",
        "description": "no lock; less income, more balance; “Half the hours means about half the earnings.”",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 900
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Half the hours means about half the earnings.",
            "explanation": "Half the hours means about half the earnings.",
            "logText": "Earned Aid Takes Hours: Work 3 hours/week"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask advisor for a better shift",
        "description": "locked: mentor/advisor support; opportunity +; “Schedule fit can change the value.”",
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
                "amount": 900
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
            "feedback": "Schedule fit can change the value.",
            "explanation": "Schedule fit can change the value.",
            "logText": "Earned Aid Takes Hours: Ask advisor for a better shift"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did hours cost?",
    "sourceNote": "MoneyLife context batch TIDE-LOOM-64; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Earning more can cost sleep, study time, or wellbeing."
  }
];
