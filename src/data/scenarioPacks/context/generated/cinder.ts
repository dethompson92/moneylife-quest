import type { ScenarioEvent } from "../../../../types/game";

export const cinderContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-cinder-actual-cash-value",
    "title": "Replacement or Actual Cash?",
    "prompt": "A simplified renter policy offers lower premium for actual cash value or higher premium for replacement coverage. Your $400 laptop may be valued lower after wear.",
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
        "label": "Choose lower premium, actual cash value. Req: hasPolicyOptions. Outcome/effects: Monthly cost lower",
        "description": "claim payout may be lower.",
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
            "feedback": "Depreciation can reduce the amount.",
            "explanation": "Depreciation can reduce the amount.",
            "logText": "Replacement or Actual Cash?: Choose lower premium, actual cash value. Req: hasPolicyOptions. Outcome/effects: Monthly cost lower"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose replacement-style coverage. Req: cash flow can cover higher premium. Outcome/effects: Better claim recovery",
        "description": "monthly cost higher.",
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
            "feedback": "Higher protection usually costs more.",
            "explanation": "Higher protection usually costs more.",
            "logText": "Replacement or Actual Cash?: Choose replacement-style coverage. Req: cash flow can cover higher premium. Outcome/effects: Better claim recovery"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Build a replacement pocket instead. Req: savings habit ≥ 40. Outcome/effects: Self-protection grows",
        "description": "coverage lower.",
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
            "feedback": "Savings can carry some risks, but not all.",
            "explanation": "Savings can carry some risks, but not all.",
            "logText": "Replacement or Actual Cash?: Build a replacement pocket instead. Req: savings habit ≥ 40. Outcome/effects: Self-protection grows"
          }
        ]
      }
    ],
    "reflectionPrompt": "What risk did cheaper premium keep?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cheaper coverage can fit tight budgets but may leave a gap after a loss."
  },
  {
    "id": "ctx-cinder-ai-tool-citation-check",
    "title": "The AI Tool Said So",
    "prompt": "A fictional AI helper suggests a money fact for your project. You need to decide whether to use it as-is, verify it, or ask for help.",
    "topics": [
      "life-after-high-school",
      "scams",
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Verify with an official or teacher-approved source. Req: Money Know-How ≥ 45. Outcome/effects: Safety and quality rise. Feedback: “Helpful output still needs checking.” Reflect: “What source confirmed it?",
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
            "feedback": "Verify with an official or teacher-approved source. Req: Money Know-How ≥ 45. Outcome/effects: Safety and quality rise. Feedback: “Helpful output still needs checking.” Reflect: “What source confirmed it? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Verify with an official or teacher-approved source. Req: Money Know-How ≥ 45. Outcome/effects: Safety and quality rise. Feedback: “Helpful output still needs checking.” Reflect: “What source confirmed it? changes the route and creates a finance tradeoff to notice.",
            "logText": "The AI Tool Said So: Verify with an official or teacher-approved source. Req: Money Know-How ≥ 45. Outcome/effects: Safety and quality rise. Feedback: “Helpful output still needs checking.” Reflect: “What source confirmed it?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use it without checking. Req: none. Outcome/effects: Fast",
        "description": "accuracy risk.",
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
            "feedback": "Fast information can still be wrong.",
            "explanation": "Fast information can still be wrong.",
            "logText": "The AI Tool Said So: Use it without checking. Req: none. Outcome/effects: Fast"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask teacher/mentor what source counts. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Source skill rises. Feedback: “Knowing what counts as evidence is part of learning.” Reflect: “What standard did you use?",
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
            "feedback": "Ask teacher/mentor what source counts. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Source skill rises. Feedback: “Knowing what counts as evidence is part of learning.” Reflect: “What standard did you use? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask teacher/mentor what source counts. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Source skill rises. Feedback: “Knowing what counts as evidence is part of learning.” Reflect: “What standard did you use? changes the route and creates a finance tradeoff to notice.",
            "logText": "The AI Tool Said So: Ask teacher/mentor what source counts. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Source skill rises. Feedback: “Knowing what counts as evidence is part of learning.” Reflect: “What standard did you use?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made you trust it?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "AI can help brainstorm, but source-checking protects accuracy and originality."
  },
  {
    "id": "ctx-cinder-aid-help-night",
    "title": "Aid Help Night Without Private Details",
    "prompt": "A school hosts a fictional aid-info night. The game does not ask for real family income or personal details; it only teaches categories.",
    "topics": [
      "budgeting",
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
        "label": "Attend and learn categories. Req: none. Outcome/effects: Money knowledge rises. Feedback: “Understanding types of aid helps without entering private data.” Reflect: “Which type must be repaid?",
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
            "feedback": "Attend and learn categories. Req: none. Outcome/effects: Money knowledge rises. Feedback: “Understanding types of aid helps without entering private data.” Reflect: “Which type must be repaid? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Attend and learn categories. Req: none. Outcome/effects: Money knowledge rises. Feedback: “Understanding types of aid helps without entering private data.” Reflect: “Which type must be repaid? changes the route and creates a finance tradeoff to notice.",
            "logText": "Aid Help Night Without Private Details: Attend and learn categories. Req: none. Outcome/effects: Money knowledge rises. Feedback: “Understanding types of aid helps without entering private data.” Reflect: “Which type must be repaid?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip and read a short guide later. Req: Discipline ≥ 35. Outcome/effects: Flexible timing",
        "description": "less chance to ask questions.",
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
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Self-study works if you actually do it.",
            "explanation": "Self-study works if you actually do it.",
            "logText": "Aid Help Night Without Private Details: Skip and read a short guide later. Req: Discipline ≥ 35. Outcome/effects: Flexible timing"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Bring a caregiver/mentor. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and planning rise. Feedback: “Shared understanding can reduce confusion.” Reflect: “What did support clarify?",
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
            "feedback": "Bring a caregiver/mentor. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and planning rise. Feedback: “Shared understanding can reduce confusion.” Reflect: “What did support clarify? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Bring a caregiver/mentor. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and planning rise. Feedback: “Shared understanding can reduce confusion.” Reflect: “What did support clarify? changes the route and creates a finance tradeoff to notice.",
            "logText": "Aid Help Night Without Private Details: Bring a caregiver/mentor. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and planning rise. Feedback: “Shared understanding can reduce confusion.” Reflect: “What did support clarify?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What question remains?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Learning aid concepts is valuable, but the game must never ask students to enter sensitive real information."
  },
  {
    "id": "ctx-cinder-apprentice-tool-grant",
    "title": "Grant, Loan, or Used Tools?",
    "prompt": "A starter tool kit costs $133. A small workforce grant might cover $80 if you apply by the deadline.",
    "topics": [
      "budgeting",
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
        "label": "Apply for the grant. Req: deadlineRadarOn. Outcome/effects: Cost may drop",
        "description": "paperwork time.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -133
              }
            ],
            "feedback": "Aid often has rules and deadlines.",
            "explanation": "Aid often has rules and deadlines.",
            "logText": "Grant, Loan, or Used Tools?: Apply for the grant. Req: deadlineRadarOn. Outcome/effects: Cost may drop"
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
            "logText": "Grant, Loan, or Used Tools?: Apply for the grant. Req: deadlineRadarOn. Outcome/effects: Cost may drop met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow or buy used tools. Req: supportCircle.mentor or communityProgramAccess ≥ medium. Outcome/effects: Lower cost",
        "description": "condition varies.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Used tools can work if condition is checked.",
            "explanation": "Used tools can work if condition is checked.",
            "logText": "Grant, Loan, or Used Tools?: Borrow or buy used tools. Req: supportCircle.mentor or communityProgramAccess ≥ medium. Outcome/effects: Lower cost"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Take a small loan for the kit. Req: Money Know-How ≥ 50. Outcome/effects: Tools gained",
        "description": "debt added.",
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
                "amount": -133
              }
            ],
            "feedback": "Borrowing can start a pathway but creates repayment.",
            "explanation": "Borrowing can start a pathway but creates repayment.",
            "logText": "Grant, Loan, or Used Tools?: Take a small loan for the kit. Req: Money Know-How ≥ 50. Outcome/effects: Tools gained"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the application worth it?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Access to tools can open opportunity, but the funding route changes risk."
  },
  {
    "id": "ctx-cinder-authorized-user-invite",
    "title": "Added to an Account?",
    "prompt": "A caregiver offers to add future-you as an authorized user on a well-managed account in the simplified model. You would not control the whole account.",
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
        "label": "Accept after discussing rules. Req: supportCircle.family and trust ≥ 65. Outcome/effects: Credit learning may improve",
        "description": "relationship responsibility rises.",
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
            "feedback": "Shared credit requires clear rules.",
            "explanation": "Shared credit requires clear rules.",
            "logText": "Added to an Account?: Accept after discussing rules. Req: supportCircle.family and trust ≥ 65. Outcome/effects: Credit learning may improve"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decline for now. Req: none. Outcome/effects: Credit growth slower",
        "description": "independence preserved.",
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
            "feedback": "Saying no can be responsible.",
            "explanation": "Saying no can be responsible.",
            "logText": "Added to an Account?: Decline for now. Req: none. Outcome/effects: Credit growth slower"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to explain risks. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Understanding the role matters before joining.” Reflect: “What risk surprised you?",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Ask mentor to explain risks. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Understanding the role matters before joining.” Reflect: “What risk surprised you? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor to explain risks. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Understanding the role matters before joining.” Reflect: “What risk surprised you? changes the route and creates a finance tradeoff to notice.",
            "logText": "Added to an Account?: Ask mentor to explain risks. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Understanding the role matters before joining.” Reflect: “What risk surprised you?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What rule protects both people?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Credit support can help, but relationship clarity matters."
  },
  {
    "id": "ctx-cinder-backpack-warranty-choice",
    "title": "Warranty or Repair Fund?",
    "prompt": "A sturdy backpack costs $47. A one-year warranty adds $8, but basic repairs usually cost about $6–$12.",
    "topics": [
      "investing",
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
        "label": "Buy the warranty. Req: cash ≥ $55. Outcome/effects: More protection",
        "description": "cash drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -47
              }
            ],
            "feedback": "$47 + $8 = $55 upfront.",
            "explanation": "$47 + $8 = $55 upfront.",
            "logText": "Warranty or Repair Fund?: Buy the warranty. Req: cash ≥ $55. Outcome/effects: More protection"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip warranty and save $8. Req: none. Outcome/effects: More cash now",
        "description": "repair risk stays yours.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -47
              }
            ],
            "feedback": "Saving the $8 is like self-insuring a small risk.",
            "explanation": "Saving the $8 is like self-insuring a small risk.",
            "logText": "Warranty or Repair Fund?: Skip warranty and save $8. Req: none. Outcome/effects: More cash now"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask caregiver/mentor how long similar backpacks lasted. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Experience can improve an estimate.” Reflect: “What information changed the choice?",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Ask caregiver/mentor how long similar backpacks lasted. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Experience can improve an estimate.” Reflect: “What information changed the choice? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask caregiver/mentor how long similar backpacks lasted. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Experience can improve an estimate.” Reflect: “What information changed the choice? changes the route and creates a finance tradeoff to notice.",
            "logText": "Warranty or Repair Fund?: Ask caregiver/mentor how long similar backpacks lasted. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “Experience can improve an estimate.” Reflect: “What information changed the choice?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What problem are you paying to avoid?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A warranty is not automatically wasteful or wise; it depends on risk and cash cushion."
  },
  {
    "id": "ctx-cinder-bank-transfer-delay",
    "title": "The Transfer Takes Two Days",
    "prompt": "Money in savings can move to checking, but it may take two days. A $27 payment is due tomorrow.",
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
        "label": "Transfer now and call about timing. Req: savings ≥ $27. Outcome/effects: Payment planning improves. Feedback: “Starting early gives more options.” Reflect: “What did the call clarify?",
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
            "feedback": "Transfer now and call about timing. Req: savings ≥ $27. Outcome/effects: Payment planning improves. Feedback: “Starting early gives more options.” Reflect: “What did the call clarify? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Transfer now and call about timing. Req: savings ≥ $27. Outcome/effects: Payment planning improves. Feedback: “Starting early gives more options.” Reflect: “What did the call clarify? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Transfer Takes Two Days: Transfer now and call about timing. Req: savings ≥ $27. Outcome/effects: Payment planning improves. Feedback: “Starting early gives more options.” Reflect: “What did the call clarify?"
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Transfer Takes Two Days: Transfer now and call about timing. Req: savings ≥ $27. Outcome/effects: Payment planning improves. Feedback: “Starting early gives more options.” Reflect: “What did the call clarify? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Assume transfer is instant. Req: none. Outcome/effects: Randomized late-risk event. Feedback: “Not all transfers are immediate.” Reflect: “What assumption failed?",
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
            "feedback": "Assume transfer is instant. Req: none. Outcome/effects: Randomized late-risk event. Feedback: “Not all transfers are immediate.” Reflect: “What assumption failed? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Assume transfer is instant. Req: none. Outcome/effects: Randomized late-risk event. Feedback: “Not all transfers are immediate.” Reflect: “What assumption failed? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Transfer Takes Two Days: Assume transfer is instant. Req: none. Outcome/effects: Randomized late-risk event. Feedback: “Not all transfers are immediate.” Reflect: “What assumption failed?"
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
            "logText": "The Transfer Takes Two Days: Assume transfer is instant. Req: none. Outcome/effects: Randomized late-risk event. Feedback: “Not all transfers are immediate.” Reflect: “What assumption failed? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay from checking and rebuild savings later. Req: checking ≥ $27. Outcome/effects: Payment safe",
        "description": "checking lower.",
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
            "feedback": "Liquidity matters when due dates are close.",
            "explanation": "Liquidity matters when due dates are close.",
            "logText": "The Transfer Takes Two Days: Pay from checking and rebuild savings later. Req: checking ≥ $27. Outcome/effects: Payment safe"
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
            "logText": "The Transfer Takes Two Days: Pay from checking and rebuild savings later. Req: checking ≥ $27. Outcome/effects: Payment safe met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which account was spendable?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Savings may be yours, but timing affects whether it solves today’s problem."
  },
  {
    "id": "ctx-cinder-calendar-app-upsell",
    "title": "The Organizer Upgrade",
    "prompt": "A fictional organizer app is free with basic reminders. The upgrade is $2.83/month and adds color labels and automatic templates.",
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
        "label": "Use the free version. Req: none. Outcome/effects: Cash protected",
        "description": "fewer features.",
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
            "feedback": "Free works if the basic tool solves the problem.",
            "explanation": "Free works if the basic tool solves the problem.",
            "logText": "The Organizer Upgrade: Use the free version. Req: none. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay for one year. Req: cash flow can cover recurring cost. Outcome/effects: Better organization",
        "description": "annual cost $33.96.",
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
            "feedback": "$2.83 × 12 = $33.96.",
            "explanation": "$2.83 × 12 = $33.96.",
            "logText": "The Organizer Upgrade: Pay for one year. Req: cash flow can cover recurring cost. Outcome/effects: Better organization"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use paper or school planner. Req: Discipline ≥ 30. Outcome/effects: No app cost",
        "description": "more manual effort.",
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
            "feedback": "A low-tech system can be strong if used consistently.",
            "explanation": "A low-tech system can be strong if used consistently.",
            "logText": "The Organizer Upgrade: Use paper or school planner. Req: Discipline ≥ 30. Outcome/effects: No app cost"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which feature did you actually need?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying for organization can help, but only if the features change behavior."
  },
  {
    "id": "ctx-cinder-cancel-confirmation-save",
    "title": "Did It Actually Cancel?",
    "prompt": "You cancel a paid feature, but the app says to save the confirmation screen. You can close quickly or store the fictional record token.",
    "topics": [
      "life-after-high-school",
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Save confirmation token. Req: none. Outcome/effects: Future dispute easier. Feedback: “Cancellation proof matters if another charge appears.” Reflect: “What did the confirmation prove?",
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
            "feedback": "Save confirmation token. Req: none. Outcome/effects: Future dispute easier. Feedback: “Cancellation proof matters if another charge appears.” Reflect: “What did the confirmation prove? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save confirmation token. Req: none. Outcome/effects: Future dispute easier. Feedback: “Cancellation proof matters if another charge appears.” Reflect: “What did the confirmation prove? changes the route and creates a finance tradeoff to notice.",
            "logText": "Did It Actually Cancel?: Save confirmation token. Req: none. Outcome/effects: Future dispute easier. Feedback: “Cancellation proof matters if another charge appears.” Reflect: “What did the confirmation prove?"
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
            "logText": "Did It Actually Cancel?: Save confirmation token. Req: none. Outcome/effects: Future dispute easier. Feedback: “Cancellation proof matters if another charge appears.” Reflect: “What did the confirmation prove? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Close without saving. Req: none. Outcome/effects: Faster",
        "description": "randomized dispute difficulty.",
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
            "feedback": "Fast now can become slow later.",
            "explanation": "Fast now can become slow later.",
            "logText": "Did It Actually Cancel?: Close without saving. Req: none. Outcome/effects: Faster"
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
            "logText": "Did It Actually Cancel?: Close without saving. Req: none. Outcome/effects: Faster met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Check next statement for the charge. Req: Discipline ≥ 40. Outcome/effects: Monitoring improves. Feedback: “Canceling and checking are two separate steps.” Reflect: “What would you look for?",
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
            "feedback": "Check next statement for the charge. Req: Discipline ≥ 40. Outcome/effects: Monitoring improves. Feedback: “Canceling and checking are two separate steps.” Reflect: “What would you look for? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Check next statement for the charge. Req: Discipline ≥ 40. Outcome/effects: Monitoring improves. Feedback: “Canceling and checking are two separate steps.” Reflect: “What would you look for? changes the route and creates a finance tradeoff to notice.",
            "logText": "Did It Actually Cancel?: Check next statement for the charge. Req: Discipline ≥ 40. Outcome/effects: Monitoring improves. Feedback: “Canceling and checking are two separate steps.” Reflect: “What would you look for?"
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
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Did It Actually Cancel?: Check next statement for the charge. Req: Discipline ≥ 40. Outcome/effects: Monitoring improves. Feedback: “Canceling and checking are two separate steps.” Reflect: “What would you look for? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What might you need later?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Proof-saving is boring until it becomes useful."
  },
  {
    "id": "ctx-cinder-cash-tip-records",
    "title": "The Tip Envelope Record",
    "prompt": "You earned $37 in cash tips this week in the simplified model. You can spend it, record it, or split it into categories.",
    "topics": [
      "money-values",
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
        "label": "Record it before spending. Req: none. Outcome/effects: Money knowledge rises",
        "description": "tax-time confusion drops.",
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
            "feedback": "Records help when income is not on a card.",
            "explanation": "Records help when income is not on a card.",
            "logText": "The Tip Envelope Record: Record it before spending. Req: none. Outcome/effects: Money knowledge rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split 20% into a tax/records pocket. Req: Money Know-How ≥ 45. Outcome/effects: $7.40 set aside",
        "description": "cash to spend drops.",
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
            "feedback": "20% of $37 is $7.40.",
            "explanation": "20% of $37 is $7.40.",
            "logText": "The Tip Envelope Record: Split 20% into a tax/records pocket. Req: Money Know-How ≥ 45. Outcome/effects: $7.40 set aside"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend it as bonus money. Req: none. Outcome/effects: Wellbeing may rise",
        "description": "future record gap.",
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
              }
            ],
            "feedback": "Cash feels flexible, but it still counts in a plan.",
            "explanation": "Cash feels flexible, but it still counts in a plan.",
            "logText": "The Tip Envelope Record: Spend it as bonus money. Req: none. Outcome/effects: Wellbeing may rise"
          }
        ]
      }
    ],
    "reflectionPrompt": "What would future-you need to know?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Spending cash is tempting because it feels separate, but records make it less mysterious later."
  },
  {
    "id": "ctx-cinder-cashback-at-register",
    "title": "Cash Back With a Catch",
    "prompt": "You need $20 cash. A store offers cash back with a $2 purchase, while an ATM nearby charges $3.25.",
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
        "label": "Buy a planned $2 item and get cash back. Req: plannedNeedAvailable. Outcome/effects: Total extra cost $2",
        "description": "item useful.",
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
            "feedback": "The purchase is only smart if you needed it.",
            "explanation": "The purchase is only smart if you needed it.",
            "logText": "Cash Back With a Catch: Buy a planned $2 item and get cash back. Req: plannedNeedAvailable. Outcome/effects: Total extra cost $2"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the ATM. Req: checking ≥ $23.25. Outcome/effects: Faster",
        "description": "fee paid.",
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
                "amount": -20
              }
            ],
            "feedback": "$20 cash costs $23.25 total.",
            "explanation": "$20 cash costs $23.25 total.",
            "logText": "Cash Back With a Catch: Use the ATM. Req: checking ≥ $23.25. Outcome/effects: Faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait until fee-free access. Req: timeAvailable later. Outcome/effects: Cash delayed",
        "description": "fee avoided.",
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
            "feedback": "Waiting saves money when time allows.",
            "explanation": "Waiting saves money when time allows.",
            "logText": "Cash Back With a Catch: Wait until fee-free access. Req: timeAvailable later. Outcome/effects: Cash delayed"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was it planned?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Avoiding one fee by buying something unnecessary may not save money."
  },
  {
    "id": "ctx-cinder-credit-freeze-unfreeze",
    "title": "Frozen at the Wrong Time?",
    "prompt": "You froze your credit in a safety lesson. Now a fictional apartment application needs a credit check.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Temporarily unfreeze before applying. Req: locked unless hasCreditFreeze. Outcome/effects: Application works",
        "description": "safety routine stays controlled.",
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
            "feedback": "A freeze can be lifted when needed.",
            "explanation": "A freeze can be lifted when needed.",
            "logText": "Frozen at the Wrong Time?: Temporarily unfreeze before applying. Req: locked unless hasCreditFreeze. Outcome/effects: Application works"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave frozen and apply anyway. Req: none. Outcome/effects: Safety stays high",
        "description": "application delay risk.",
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
            "feedback": "Protection can create friction.",
            "explanation": "Protection can create friction.",
            "logText": "Frozen at the Wrong Time?: Leave frozen and apply anyway. Req: none. Outcome/effects: Safety stays high"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the application office what they need. Req: Money Know-How ≥ 45. Outcome/effects: Information improves. Feedback: “Rules are easier when you ask before acting.” Reflect: “What did you learn?",
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
            "feedback": "Ask the application office what they need. Req: Money Know-How ≥ 45. Outcome/effects: Information improves. Feedback: “Rules are easier when you ask before acting.” Reflect: “What did you learn? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask the application office what they need. Req: Money Know-How ≥ 45. Outcome/effects: Information improves. Feedback: “Rules are easier when you ask before acting.” Reflect: “What did you learn? changes the route and creates a finance tradeoff to notice.",
            "logText": "Frozen at the Wrong Time?: Ask the application office what they need. Req: Money Know-How ≥ 45. Outcome/effects: Information improves. Feedback: “Rules are easier when you ask before acting.” Reflect: “What did you learn?"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did timing matter?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Strong protection can be good, but it must be managed around applications."
  },
  {
    "id": "ctx-cinder-credit-report-error",
    "title": "That Account Is Not Mine",
    "prompt": "A simplified credit report shows an account you do not recognize. It may be a mix-up, not a scam.",
    "topics": [
      "credit",
      "scams"
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Dispute with saved records. Req: locked unless recordTokens.identityCheckSaved. Outcome/effects: Correction chance rises",
        "description": "safety improves.",
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Clear records make correction easier.",
            "explanation": "Clear records make correction easier.",
            "logText": "That Account Is Not Mine: Dispute with saved records. Req: locked unless recordTokens.identityCheckSaved. Outcome/effects: Correction chance rises"
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
            "logText": "That Account Is Not Mine: Dispute with saved records. Req: locked unless recordTokens.identityCheckSaved. Outcome/effects: Correction chance rises met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore because the score still looks okay. Req: none. Outcome/effects: Faster now",
        "description": "future application risk.",
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
            "feedback": "Errors can matter later even if they seem small.",
            "explanation": "Errors can matter later even if they seem small.",
            "logText": "That Account Is Not Mine: Ignore because the score still looks okay. Req: none. Outcome/effects: Faster now"
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
            "logText": "That Account Is Not Mine: Ignore because the score still looks okay. Req: none. Outcome/effects: Faster now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult/mentor to review steps. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Confidence and safety rise. Feedback: “Credit reports can be confusing",
        "description": "help is normal.”",
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
            "feedback": "Ask a trusted adult/mentor to review steps. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Confidence and safety rise. Feedback: “Credit reports can be confusing changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a trusted adult/mentor to review steps. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Confidence and safety rise. Feedback: “Credit reports can be confusing changes the route and creates a finance tradeoff to notice.",
            "logText": "That Account Is Not Mine: Ask a trusted adult/mentor to review steps. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Confidence and safety rise. Feedback: “Credit reports can be confusing"
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "That Account Is Not Mine: Ask a trusted adult/mentor to review steps. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Confidence and safety rise. Feedback: “Credit reports can be confusing met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What proof helped?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Fixing errors takes time, but waiting can make future choices harder."
  },
  {
    "id": "ctx-cinder-data-cap-countdown",
    "title": "83% Used",
    "prompt": "Your fictional shared data plan is 83% used with 5 days left. Going over the cap costs $12, but turning on low-data mode makes videos and maps slower.",
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
        "label": "Turn on low-data mode. Req: none. Outcome/effects: Overage risk drops",
        "description": "convenience drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -83
              }
            ],
            "feedback": "83% used means only 17% remains.",
            "explanation": "83% used means only 17% remains.",
            "logText": "83% Used: Turn on low-data mode. Req: none. Outcome/effects: Overage risk drops"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep normal use. Req: none. Outcome/effects: Convenience stays high",
        "description": "fee risk rises.",
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
            "feedback": "A cap is a limit, not a suggestion.",
            "explanation": "A cap is a limit, not a suggestion.",
            "logText": "83% Used: Keep normal use. Req: none. Outcome/effects: Convenience stays high"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a 90% alert. Req: locked unless Discipline ≥ 35. Outcome/effects: Future cap choices improve. Feedback: “An alert turns a memory task into a system.” Reflect: “What reminder would actually help?",
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
            "feedback": "Set a 90% alert. Req: locked unless Discipline ≥ 35. Outcome/effects: Future cap choices improve. Feedback: “An alert turns a memory task into a system.” Reflect: “What reminder would actually help? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set a 90% alert. Req: locked unless Discipline ≥ 35. Outcome/effects: Future cap choices improve. Feedback: “An alert turns a memory task into a system.” Reflect: “What reminder would actually help? changes the route and creates a finance tradeoff to notice.",
            "logText": "83% Used: Set a 90% alert. Req: locked unless Discipline ≥ 35. Outcome/effects: Future cap choices improve. Feedback: “An alert turns a memory task into a system.” Reflect: “What reminder would actually help?"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is slower service worth avoiding a fee?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Low-data mode saves money risk but costs comfort and convenience."
  },
  {
    "id": "ctx-cinder-dividend-reinvest-toggle",
    "title": "Take Cash or Reinvest?",
    "prompt": "A simplified investment pays $4 in dividends. You can take the cash or reinvest it.",
    "topics": [
      "investing"
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Reinvest. Req: hasInvestments. Outcome/effects: Investment grows",
        "description": "cash not spendable.",
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
            "feedback": "Reinvesting keeps money working.",
            "explanation": "Reinvesting keeps money working.",
            "logText": "Take Cash or Reinvest?: Reinvest. Req: hasInvestments. Outcome/effects: Investment grows"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take cash. Req: none. Outcome/effects: Cash rises",
        "description": "investment growth lower.",
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
            "feedback": "Cash can solve today’s need.",
            "explanation": "Cash can solve today’s need.",
            "logText": "Take Cash or Reinvest?: Take cash. Req: none. Outcome/effects: Cash rises"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split $2/$2. Req: Money Know-How ≥ 45. Outcome/effects: Balance between liquidity and growth. Feedback: “Splitting can serve two goals.” Reflect: “Which goal mattered more?",
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
            "feedback": "Split $2/$2. Req: Money Know-How ≥ 45. Outcome/effects: Balance between liquidity and growth. Feedback: “Splitting can serve two goals.” Reflect: “Which goal mattered more? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split $2/$2. Req: Money Know-How ≥ 45. Outcome/effects: Balance between liquidity and growth. Feedback: “Splitting can serve two goals.” Reflect: “Which goal mattered more? changes the route and creates a finance tradeoff to notice.",
            "logText": "Take Cash or Reinvest?: Split $2/$2. Req: Money Know-How ≥ 45. Outcome/effects: Balance between liquidity and growth. Feedback: “Splitting can serve two goals.” Reflect: “Which goal mattered more?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why give up cash now?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Reinvestment helps long-term growth, but cash may matter today."
  },
  {
    "id": "ctx-cinder-emergency-supplies-kit",
    "title": "Useful but Not Spendable",
    "prompt": "A basic emergency supplies kit costs $34. It does not increase cash, but it may reduce stress during a future disruption.",
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
        "label": "Buy the kit. Req: cash ≥ $34. Outcome/effects: Preparedness rises",
        "description": "cash drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -34
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Some assets protect wellbeing instead of resale value.",
            "explanation": "Some assets protect wellbeing instead of resale value.",
            "logText": "Useful but Not Spendable: Buy the kit. Req: cash ≥ $34. Outcome/effects: Preparedness rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Build it over four weeks. Req: Discipline ≥ 35. Outcome/effects: Cash impact spread out. Feedback: “$34 ÷ 4 = $8.50/week.” Reflect: “How did spreading cost help?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -34
              },
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
            "feedback": "Build it over four weeks. Req: Discipline ≥ 35. Outcome/effects: Cash impact spread out. Feedback: “$34 ÷ 4 = $8.50/week.” Reflect: “How did spreading cost help? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Build it over four weeks. Req: Discipline ≥ 35. Outcome/effects: Cash impact spread out. Feedback: “$34 ÷ 4 = $8.50/week.” Reflect: “How did spreading cost help? changes the route and creates a finance tradeoff to notice.",
            "logText": "Useful but Not Spendable: Build it over four weeks. Req: Discipline ≥ 35. Outcome/effects: Cash impact spread out. Feedback: “$34 ÷ 4 = $8.50/week.” Reflect: “How did spreading cost help?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip for now. Req: none. Outcome/effects: Cash protected",
        "description": "preparedness lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -34
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
              }
            ],
            "feedback": "Skipping can be reasonable if cash is tight.",
            "explanation": "Skipping can be reasonable if cash is tight.",
            "logText": "Useful but Not Spendable: Skip for now. Req: none. Outcome/effects: Cash protected"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the kit protect?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Preparedness can be valuable even when it does not make money."
  },
  {
    "id": "ctx-cinder-equipment-swap-condition",
    "title": "The Equipment Swap",
    "prompt": "A friend offers to swap sports gear for a week. Your item is in better condition, but their item would help with practice.",
    "topics": [
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
        "label": "Swap with a written condition note. Req: supportCircle.friend. Outcome/effects: Practice improves",
        "description": "trust protected.",
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
            "feedback": "A condition note reduces confusion later.",
            "explanation": "A condition note reduces confusion later.",
            "logText": "The Equipment Swap: Swap with a written condition note. Req: supportCircle.friend. Outcome/effects: Practice improves"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Swap with no note. Req: none. Outcome/effects: Fast",
        "description": "randomized disagreement risk.",
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
            "feedback": "Trust matters, but memory can be fuzzy.",
            "explanation": "Trust matters, but memory can be fuzzy.",
            "logText": "The Equipment Swap: Swap with no note. Req: none. Outcome/effects: Fast"
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
            "logText": "The Equipment Swap: Swap with no note. Req: none. Outcome/effects: Fast met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Do not swap. Req: none. Outcome/effects: Asset protected",
        "description": "practice opportunity lower.",
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
            "feedback": "Keeping control can be reasonable.",
            "explanation": "Keeping control can be reasonable.",
            "logText": "The Equipment Swap: Do not swap. Req: none. Outcome/effects: Asset protected"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can a note protect a friendship?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Sharing can create access, but clear rules protect both people."
  },
  {
    "id": "ctx-cinder-family-streaming-boundary",
    "title": "One Shared Bill",
    "prompt": "A fictional shared entertainment bill is getting crowded with add-ons. A caregiver asks everyone to choose what to keep.",
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
        "label": "Vote to keep one shared service. Req: supportCircle.family. Outcome/effects: Cost drops",
        "description": "some wants cut.",
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
            "feedback": "Shared budgets require compromise.",
            "explanation": "Shared budgets require compromise.",
            "logText": "One Shared Bill: Vote to keep one shared service. Req: supportCircle.family. Outcome/effects: Cost drops"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Keep all add-ons and split cost. Req: cash flow can cover share. Outcome/effects: More entertainment",
        "description": "recurring cost stays.",
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
            "feedback": "A small monthly share repeats.",
            "explanation": "A small monthly share repeats.",
            "logText": "One Shared Bill: Keep all add-ons and split cost. Req: cash flow can cover share. Outcome/effects: More entertainment"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Rotate add-ons monthly. Req: Discipline ≥ 40. Outcome/effects: Variety stays",
        "description": "tracking needed.",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Rotation is a system, not a one-time choice.",
            "explanation": "Rotation is a system, not a one-time choice.",
            "logText": "One Shared Bill: Rotate add-ons monthly. Req: Discipline ≥ 40. Outcome/effects: Variety stays"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the group protect?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Shared wants are valid, but recurring costs need shared rules."
  },
  {
    "id": "ctx-cinder-fan-club-impostor",
    "title": "The Fake Fan Club Invite",
    "prompt": "A message says a fan club selected you for early access if you pay a $6 “processing fee.” The group name is close to the real one but not exact.",
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
        "label": "Search the official site first. Req: none. Outcome/effects: Safety rises",
        "description": "possible fake caught.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Close names are a warning sign.",
            "explanation": "Close names are a warning sign.",
            "logText": "The Fake Fan Club Invite: Search the official site first. Req: none. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the small fee. Req: cash ≥ $6. Outcome/effects: Randomized loss/data risk. Feedback: “Small fees are often used to lower your guard.” Reflect: “Why did $6 feel safe?",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Pay the small fee. Req: cash ≥ $6. Outcome/effects: Randomized loss/data risk. Feedback: “Small fees are often used to lower your guard.” Reflect: “Why did $6 feel safe? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Pay the small fee. Req: cash ≥ $6. Outcome/effects: Randomized loss/data risk. Feedback: “Small fees are often used to lower your guard.” Reflect: “Why did $6 feel safe? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fake Fan Club Invite: Pay the small fee. Req: cash ≥ $6. Outcome/effects: Randomized loss/data risk. Feedback: “Small fees are often used to lower your guard.” Reflect: “Why did $6 feel safe?"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -6
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Fake Fan Club Invite: Pay the small fee. Req: cash ≥ $6. Outcome/effects: Randomized loss/data risk. Feedback: “Small fees are often used to lower your guard.” Reflect: “Why did $6 feel safe? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ignore it. Req: none. Outcome/effects: No risk",
        "description": "possible real offer missed.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Ignoring suspicious offers can be reasonable.",
            "explanation": "Ignoring suspicious offers can be reasonable.",
            "logText": "The Fake Fan Club Invite: Ignore it. Req: none. Outcome/effects: No risk"
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
            "logText": "The Fake Fan Club Invite: Ignore it. Req: none. Outcome/effects: No risk met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What proved it was real or fake?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Some offers are real, but the safest action is verifying before paying."
  },
  {
    "id": "ctx-cinder-final-periscope-reflection",
    "title": "Look Around the Corner",
    "prompt": "The run ends with a Periscope Report. It shows one choice that protected cash, one that protected trust, one that protected safety, and one that protected future options.",
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
        "label": "Choose one habit to keep. Req: completed 10+ choices. Outcome/effects: Reflection badge",
        "description": "future route named.",
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
                "amount": 10
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
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "A habit is a tool you can reuse.",
            "explanation": "A habit is a tool you can reuse.",
            "logText": "Look Around the Corner: Choose one habit to keep. Req: completed 10+ choices. Outcome/effects: Reflection badge"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose one mistake you repaired. Req: any setback flag. Outcome/effects: Recovery badge",
        "description": "shame reduced.",
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
            "feedback": "Repair is part of financial skill.",
            "explanation": "Repair is part of financial skill.",
            "logText": "Look Around the Corner: Choose one mistake you repaired. Req: any setback flag. Outcome/effects: Recovery badge"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Thank one support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people.” Reflect: “Who helped the route?",
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
            "feedback": "Thank one support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people.” Reflect: “Who helped the route? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Thank one support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people.” Reflect: “Who helped the route? changes the route and creates a finance tradeoff to notice.",
            "logText": "Look Around the Corner: Thank one support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people.” Reflect: “Who helped the route?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which habit helped most?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The final report values learning and repair, not only money totals."
  },
  {
    "id": "ctx-cinder-friend-plan-b-cost",
    "title": "Plan B Costs $19 More",
    "prompt": "Your friends’ low-cost plan is full, so the backup plan costs $19 more. You like the group, but you had a spending cap.",
    "topics": [
      "money-values",
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
        "label": "Say your cap and suggest a different time. Req: none. Outcome/effects: Cash protected",
        "description": "social courage rises.",
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
                "amount": -19
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A clear cap gives people a real number.",
            "explanation": "A clear cap gives people a real number.",
            "logText": "Plan B Costs $19 More: Say your cap and suggest a different time. Req: none. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the extra $19. Req: cash ≥ extra cost. Outcome/effects: Social time now",
        "description": "savings lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
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
            "feedback": "The extra cost is the price of staying with this plan.",
            "explanation": "The extra cost is the price of staying with this plan.",
            "logText": "Plan B Costs $19 More: Pay the extra $19. Req: cash ≥ extra cost. Outcome/effects: Social time now"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a friend to help brainstorm a cheaper backup. Req: supportCircle.friend. Outcome/effects: Friendship support and problem-solving rise. Feedback: “A friend can help make the budget normal, not awkward.” Reflect: “What made the cheaper plan work?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
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
            "feedback": "Ask a friend to help brainstorm a cheaper backup. Req: supportCircle.friend. Outcome/effects: Friendship support and problem-solving rise. Feedback: “A friend can help make the budget normal, not awkward.” Reflect: “What made the cheaper plan work? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a friend to help brainstorm a cheaper backup. Req: supportCircle.friend. Outcome/effects: Friendship support and problem-solving rise. Feedback: “A friend can help make the budget normal, not awkward.” Reflect: “What made the cheaper plan work? changes the route and creates a finance tradeoff to notice.",
            "logText": "Plan B Costs $19 More: Ask a friend to help brainstorm a cheaper backup. Req: supportCircle.friend. Outcome/effects: Friendship support and problem-solving rise. Feedback: “A friend can help make the budget normal, not awkward.” Reflect: “What made the cheaper plan work?"
          }
        ]
      }
    ],
    "reflectionPrompt": "How can a boundary still be friendly?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Social connection matters; the skill is naming the money limit before it becomes pressure."
  },
  {
    "id": "ctx-cinder-fund-fee-difference",
    "title": "The Fee That Looks Tiny",
    "prompt": "Two diversified funds look similar. One charges 0.10% yearly; the other charges 1.00% yearly in a simplified model.",
    "topics": [
      "investing",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Choose lower fee after checking fit. Req: Money Know-How ≥ 50. Outcome/effects: More money may stay invested. Feedback: “Tiny percentages can matter over years.” Reflect: “What else besides fee matters?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": -2
              }
            ],
            "feedback": "Choose lower fee after checking fit. Req: Money Know-How ≥ 50. Outcome/effects: More money may stay invested. Feedback: “Tiny percentages can matter over years.” Reflect: “What else besides fee matters? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Choose lower fee after checking fit. Req: Money Know-How ≥ 50. Outcome/effects: More money may stay invested. Feedback: “Tiny percentages can matter over years.” Reflect: “What else besides fee matters? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fee That Looks Tiny: Choose lower fee after checking fit. Req: Money Know-How ≥ 50. Outcome/effects: More money may stay invested. Feedback: “Tiny percentages can matter over years.” Reflect: “What else besides fee matters?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose higher-fee fund because ad looks polished. Req: none. Outcome/effects: Confidence from marketing",
        "description": "long-term cost higher.",
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
                "amount": 4
              }
            ],
            "feedback": "Marketing polish is not the same as value.",
            "explanation": "Marketing polish is not the same as value.",
            "logText": "The Fee That Looks Tiny: Choose higher-fee fund because ad looks polished. Req: none. Outcome/effects: Confidence from marketing"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to compare fund basics. Req: supportCircle.mentor. Outcome/effects: Investing knowledge rises. Feedback: “A second reader can slow down hype.” Reflect: “What did you compare?",
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
            "feedback": "Ask mentor to compare fund basics. Req: supportCircle.mentor. Outcome/effects: Investing knowledge rises. Feedback: “A second reader can slow down hype.” Reflect: “What did you compare? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor to compare fund basics. Req: supportCircle.mentor. Outcome/effects: Investing knowledge rises. Feedback: “A second reader can slow down hype.” Reflect: “What did you compare? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fee That Looks Tiny: Ask mentor to compare fund basics. Req: supportCircle.mentor. Outcome/effects: Investing knowledge rises. Feedback: “A second reader can slow down hype.” Reflect: “What did you compare?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What source would you trust?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Low fees help, but fees are not the only feature."
  },
  {
    "id": "ctx-cinder-gift-card-market",
    "title": "Trade the Gift Card?",
    "prompt": "You have a $25 gift card to a place you rarely use. A safe exchange option may give $19 cash.",
    "topics": [
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
        "label": "Keep the card. Req: none. Outcome/effects: Full $25 value remains",
        "description": "use uncertain.",
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
            "feedback": "Stored value is strongest when you will use it.",
            "explanation": "Stored value is strongest when you will use it.",
            "logText": "Trade the Gift Card?: Keep the card. Req: none. Outcome/effects: Full $25 value remains"
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
            "logText": "Trade the Gift Card?: Keep the card. Req: none. Outcome/effects: Full $25 value remains met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Trade for $19 cash. Req: Safety ≥ 50. Outcome/effects: Liquidity rises",
        "description": "$6 value lost.",
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
            "feedback": "$25 − $19 = $6 cost for flexibility.",
            "explanation": "$25 − $19 = $6 cost for flexibility.",
            "logText": "Trade the Gift Card?: Trade for $19 cash. Req: Safety ≥ 50. Outcome/effects: Liquidity rises"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use it for a planned gift or supply. Req: plannedNeedAvailable. Outcome/effects: Full value used",
        "description": "timing needed.",
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
            "feedback": "Planning can turn trapped value into useful value.",
            "explanation": "Planning can turn trapped value into useful value.",
            "logText": "Trade the Gift Card?: Use it for a planned gift or supply. Req: plannedNeedAvailable. Outcome/effects: Full value used"
          }
        ]
      }
    ],
    "reflectionPrompt": "Will this card solve a future need?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Trading value for cash can be rational when the original value would go unused."
  },
  {
    "id": "ctx-cinder-handmade-pricing-error",
    "title": "Revenue Is Not Profit",
    "prompt": "You sell handmade bookmarks for $3 each. Materials cost $0.85 each, and table fee is $9. You expect to sell 12.",
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
        "label": "Keep price at $3. Req: none. Outcome/effects: Accessible price",
        "description": "profit depends on sales.",
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
            "feedback": "Revenue $36; material $10.20; fee $9; profit $16.80.",
            "explanation": "Revenue $36; material $10.20; fee $9; profit $16.80.",
            "logText": "Revenue Is Not Profit: Keep price at $3. Req: none. Outcome/effects: Accessible price"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Raise price to $3.50. Req: none. Outcome/effects: Higher profit per sale",
        "description": "demand risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -1
              }
            ],
            "feedback": "Small price changes matter across many items.",
            "explanation": "Small price changes matter across many items.",
            "logText": "Revenue Is Not Profit: Raise price to $3.50. Req: none. Outcome/effects: Higher profit per sale"
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
            "logText": "Revenue Is Not Profit: Raise price to $3.50. Req: none. Outcome/effects: Higher profit per sale met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Share table fee with another seller. Req: supportCircle.friend. Outcome/effects: Cost drops",
        "description": "coordination needed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -1
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Splitting fixed costs can improve profit.",
            "explanation": "Splitting fixed costs can improve profit.",
            "logText": "Revenue Is Not Profit: Share table fee with another seller. Req: supportCircle.friend. Outcome/effects: Cost drops"
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
            "logText": "Revenue Is Not Profit: Share table fee with another seller. Req: supportCircle.friend. Outcome/effects: Cost drops met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Which cost was easy to forget?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Pricing balances access, demand, and profit."
  },
  {
    "id": "ctx-cinder-high-deductible-choice",
    "title": "Low Premium, Big Deductible",
    "prompt": "One policy costs $18/month with a $500 deductible. Another costs $29/month with a $250 deductible.",
    "topics": [
      "insurance"
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
        "label": "Choose lower premium. Req: savings ≥ $500. Outcome/effects: Monthly cash improves",
        "description": "big claim cash needed.",
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
            "feedback": "Lower premium works better if you can carry the deductible.",
            "explanation": "Lower premium works better if you can carry the deductible.",
            "logText": "Low Premium, Big Deductible: Choose lower premium. Req: savings ≥ $500. Outcome/effects: Monthly cash improves"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose lower deductible. Req: cash flow can cover $29/month. Outcome/effects: Monthly cost higher",
        "description": "claim cash need lower.",
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
            "feedback": "$29 − $18 = $11 more each month.",
            "explanation": "$29 − $18 = $11 more each month.",
            "logText": "Low Premium, Big Deductible: Choose lower deductible. Req: cash flow can cover $29/month. Outcome/effects: Monthly cost higher"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Delay and build deductible pocket first. Req: none. Outcome/effects: Preparedness rises",
        "description": "coverage delayed.",
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
                "amount": -2
              }
            ],
            "feedback": "Sequencing can reduce stress.",
            "explanation": "Sequencing can reduce stress.",
            "logText": "Low Premium, Big Deductible: Delay and build deductible pocket first. Req: none. Outcome/effects: Preparedness rises"
          }
        ]
      }
    ],
    "reflectionPrompt": "Could you pay $500?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Low monthly cost can be risky if the deductible is too high for your savings."
  },
  {
    "id": "ctx-cinder-hoodie-preorder-minimum",
    "title": "The Preorder Minimum",
    "prompt": "A club hoodie order needs at least 12 buyers. Ten people are ready now, and each hoodie would be $18 if the order happens.",
    "topics": [
      "budgeting",
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
        "label": "Wait for 12 confirmed buyers. Req: none. Outcome/effects: Lower risk",
        "description": "order delayed.",
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
            "feedback": "10 × $18 = $180 collected, but the order needs 12 buyers.",
            "explanation": "10 × $18 = $180 collected, but the order needs 12 buyers.",
            "logText": "The Preorder Minimum: Wait for 12 confirmed buyers. Req: none. Outcome/effects: Lower risk"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Let two people promise to pay later. Req: supportCircle.friend. Outcome/effects: Order moves faster",
        "description": "collection risk rises.",
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
            "feedback": "Promises help, but records protect the group.",
            "explanation": "Promises help, but records protect the group.",
            "logText": "The Preorder Minimum: Let two people promise to pay later. Req: supportCircle.friend. Outcome/effects: Order moves faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose a smaller design with no minimum. Req: none. Outcome/effects: Less risk",
        "description": "design quality may drop.",
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
            "feedback": "A lower-risk option may have fewer features.",
            "explanation": "A lower-risk option may have fewer features.",
            "logText": "The Preorder Minimum: Choose a smaller design with no minimum. Req: none. Outcome/effects: Less risk"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does confirmed mean?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting protects money, but it can reduce excitement and momentum."
  },
  {
    "id": "ctx-cinder-index-name-confusion",
    "title": "Index in the Name?",
    "prompt": "A fund name includes the word “index-like,” but the fee and holdings do not match a simple index fund.",
    "topics": [
      "investing"
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Check holdings and fee. Req: Money Know-How ≥ 55. Outcome/effects: Source skill rises",
        "description": "bad assumption avoided.",
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
            "feedback": "Names can suggest more than they prove.",
            "explanation": "Names can suggest more than they prove.",
            "logText": "Index in the Name?: Check holdings and fee. Req: Money Know-How ≥ 55. Outcome/effects: Source skill rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose it based on name. Req: none. Outcome/effects: Fast",
        "description": "mismatch risk.",
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
            "feedback": "A label is not the full explanation.",
            "explanation": "A label is not the full explanation.",
            "logText": "Index in the Name?: Choose it based on name. Req: none. Outcome/effects: Fast"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use an official investor education source. Req: Source skill ≥ 40. Outcome/effects: Investing literacy rises. Feedback: “Reliable sources help decode jargon.” Reflect: “What term did you check?",
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
            "feedback": "Use an official investor education source. Req: Source skill ≥ 40. Outcome/effects: Investing literacy rises. Feedback: “Reliable sources help decode jargon.” Reflect: “What term did you check? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use an official investor education source. Req: Source skill ≥ 40. Outcome/effects: Investing literacy rises. Feedback: “Reliable sources help decode jargon.” Reflect: “What term did you check? changes the route and creates a finance tradeoff to notice.",
            "logText": "Index in the Name?: Use an official investor education source. Req: Source skill ≥ 40. Outcome/effects: Investing literacy rises. Feedback: “Reliable sources help decode jargon.” Reflect: “What term did you check?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What detail mattered?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Simple names can hide important details."
  },
  {
    "id": "ctx-cinder-inflation-swap-plan",
    "title": "Same Budget, Different Basket",
    "prompt": "A weekly snack budget is $8. Prices rose, so your usual basket now costs $9.20.",
    "topics": [
      "budgeting",
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Add $1.20 to budget. Req: cash flow can cover. Outcome/effects: Same basket",
        "description": "less money elsewhere.",
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
            "feedback": "$9.20 − $8 = $1.20 gap.",
            "explanation": "$9.20 − $8 = $1.20 gap.",
            "logText": "Same Budget, Different Basket: Add $1.20 to budget. Req: cash flow can cover. Outcome/effects: Same basket"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Swap one item. Req: none. Outcome/effects: Budget stays",
        "description": "preference changes.",
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
              }
            ],
            "feedback": "Substitution keeps total stable.",
            "explanation": "Substitution keeps total stable.",
            "logText": "Same Budget, Different Basket: Swap one item. Req: none. Outcome/effects: Budget stays"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy less often. Req: Discipline ≥ 35. Outcome/effects: Spending drops",
        "description": "enjoyment timing changes.",
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
            "feedback": "Frequency is another budget lever.",
            "explanation": "Frequency is another budget lever.",
            "logText": "Same Budget, Different Basket: Buy less often. Req: Discipline ≥ 35. Outcome/effects: Spending drops"
          }
        ]
      }
    ],
    "reflectionPrompt": "Where does the extra come from?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Inflation responses can be earn more, spend more, swap, or buy less often."
  },
  {
    "id": "ctx-cinder-inventory-storage-problem",
    "title": "Where Do Unsold Items Go?",
    "prompt": "You have 23 unsold items from a small project. Keeping them costs no money but uses space; marking down may recover cash.",
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
        "label": "Store for next event. Req: storageAccess ≥ medium. Outcome/effects: Inventory preserved",
        "description": "space used.",
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
            "feedback": "Inventory has value but is not cash.",
            "explanation": "Inventory has value but is not cash.",
            "logText": "Where Do Unsold Items Go?: Store for next event. Req: storageAccess ≥ medium. Outcome/effects: Inventory preserved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Mark down by 25%. Req: none. Outcome/effects: Faster cash recovery",
        "description": "lower margin.",
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
            "feedback": "25% off a $4 item is $1 off.",
            "explanation": "25% off a $4 item is $1 off.",
            "logText": "Where Do Unsold Items Go?: Mark down by 25%. Req: none. Outcome/effects: Faster cash recovery"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Bundle with future items. Req: Money Know-How ≥ 45. Outcome/effects: Inventory moves creatively",
        "description": "planning needed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": -2
              }
            ],
            "feedback": "Bundling changes perceived value.",
            "explanation": "Bundling changes perceived value.",
            "logText": "Where Do Unsold Items Go?: Bundle with future items. Req: Money Know-How ≥ 45. Outcome/effects: Inventory moves creatively"
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes storage worth it?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Unsold items can be assets or clutter depending on storage and demand."
  },
  {
    "id": "ctx-cinder-late-fee-amnesty-day",
    "title": "Fee Amnesty Day",
    "prompt": "A community library announces one fee-amnesty day for overdue items. Returning late items then clears the fictional fee, but you need to find the item.",
    "topics": [
      "consumer-skills",
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
        "label": "Search and return it on amnesty day. Req: none. Outcome/effects: Fee cleared",
        "description": "discipline rises.",
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
            "feedback": "Recovery opportunities still require action.",
            "explanation": "Recovery opportunities still require action.",
            "logText": "Fee Amnesty Day: Search and return it on amnesty day. Req: none. Outcome/effects: Fee cleared"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the fee now. Req: cash ≥ fee. Outcome/effects: Problem solved immediately",
        "description": "cash drops.",
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
            "feedback": "Paying is simple if the amount is manageable.",
            "explanation": "Paying is simple if the amount is manageable.",
            "logText": "Fee Amnesty Day: Pay the fee now. Req: cash ≥ fee. Outcome/effects: Problem solved immediately"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family/caregiver to help look. Req: supportCircle.family. Outcome/effects: Support rises",
        "description": "time cost shared.",
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
            "feedback": "Help can reduce stress without changing the rule.",
            "explanation": "Help can reduce stress without changing the rule.",
            "logText": "Fee Amnesty Day: Ask family/caregiver to help look. Req: supportCircle.family. Outcome/effects: Support rises"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made recovery possible?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying, searching, and asking for help are all reasonable depending on time and stress."
  },
  {
    "id": "ctx-cinder-locker-key-replacement",
    "title": "The Missing Key Fee",
    "prompt": "A school-safe fictional locker key has a $9 replacement fee. You think it might be in your backpack, but you are not sure.",
    "topics": [
      "life-after-high-school",
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
        "label": "Search before paying. Req: none. Outcome/effects: Fee may be avoided",
        "description": "time spent.",
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
            "feedback": "Searching is a low-cost first step.",
            "explanation": "Searching is a low-cost first step.",
            "logText": "The Missing Key Fee: Search before paying. Req: none. Outcome/effects: Fee may be avoided"
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
            "logText": "The Missing Key Fee: Search before paying. Req: none. Outcome/effects: Fee may be avoided met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay replacement fee now. Req: cash ≥ $9. Outcome/effects: Problem solved",
        "description": "cash drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -9
              }
            ],
            "feedback": "Paying can be reasonable when time matters.",
            "explanation": "Paying can be reasonable when time matters.",
            "logText": "The Missing Key Fee: Pay replacement fee now. Req: cash ≥ $9. Outcome/effects: Problem solved"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -9
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Missing Key Fee: Pay replacement fee now. Req: cash ≥ $9. Outcome/effects: Problem solved met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask caregiver/friend to help retrace steps. Req: supportCircle.family or supportCircle.friend. Outcome/effects: Support rises",
        "description": "randomized find chance improves.",
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
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Another memory can help retrace a route.",
            "explanation": "Another memory can help retrace a route.",
            "logText": "The Missing Key Fee: Ask caregiver/friend to help retrace steps. Req: supportCircle.family or supportCircle.friend. Outcome/effects: Support rises"
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
            "logText": "The Missing Key Fee: Ask caregiver/friend to help retrace steps. Req: supportCircle.family or supportCircle.friend. Outcome/effects: Support rises met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "When is time worth spending to avoid a fee?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Paying quickly is not wrong; searching first may save money if time allows."
  },
  {
    "id": "ctx-cinder-lost-phone-2fa-plan",
    "title": "Two-Factor Backup",
    "prompt": "Your fictional phone is lost for a day. Some accounts use text codes, so access becomes harder.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Set up backup codes before trouble. Req: Safety ≥ 45. Outcome/effects: Future recovery easier. Feedback: “A backup made before the problem is powerful.” Reflect: “Where would you store codes safely?",
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
            "feedback": "Set up backup codes before trouble. Req: Safety ≥ 45. Outcome/effects: Future recovery easier. Feedback: “A backup made before the problem is powerful.” Reflect: “Where would you store codes safely? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set up backup codes before trouble. Req: Safety ≥ 45. Outcome/effects: Future recovery easier. Feedback: “A backup made before the problem is powerful.” Reflect: “Where would you store codes safely? changes the route and creates a finance tradeoff to notice.",
            "logText": "Two-Factor Backup: Set up backup codes before trouble. Req: Safety ≥ 45. Outcome/effects: Future recovery easier. Feedback: “A backup made before the problem is powerful.” Reflect: “Where would you store codes safely?"
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
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Two-Factor Backup: Set up backup codes before trouble. Req: Safety ≥ 45. Outcome/effects: Future recovery easier. Feedback: “A backup made before the problem is powerful.” Reflect: “Where would you store codes safely? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Do nothing until a problem happens. Req: none. Outcome/effects: Less effort now",
        "description": "randomized lockout risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Recovery is harder during stress.",
            "explanation": "Recovery is harder during stress.",
            "logText": "Two-Factor Backup: Do nothing until a problem happens. Req: none. Outcome/effects: Less effort now"
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
            "logText": "Two-Factor Backup: Do nothing until a problem happens. Req: none. Outcome/effects: Less effort now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask caregiver/mentor about recovery options. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Account safety can be a shared planning conversation.” Reflect: “What option felt safest?",
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
            "feedback": "Ask caregiver/mentor about recovery options. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Account safety can be a shared planning conversation.” Reflect: “What option felt safest? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask caregiver/mentor about recovery options. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Account safety can be a shared planning conversation.” Reflect: “What option felt safest? changes the route and creates a finance tradeoff to notice.",
            "logText": "Two-Factor Backup: Ask caregiver/mentor about recovery options. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Account safety can be a shared planning conversation.” Reflect: “What option felt safest?"
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Two-Factor Backup: Ask caregiver/mentor about recovery options. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Account safety can be a shared planning conversation.” Reflect: “What option felt safest? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What would you wish you had?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Setup takes time before it feels useful."
  },
  {
    "id": "ctx-cinder-maintenance-log-wins",
    "title": "The Repair Log",
    "prompt": "Your used laptop works, but the battery is aging. You can keep a maintenance log before a possible resale or repair.",
    "topics": [
      "career",
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
        "label": "Keep the log. Req: none. Outcome/effects: Resale/repair clarity improves. Feedback: “Maintenance records can support value.” Reflect: “What would a buyer or repair person want to know?",
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
            "feedback": "Keep the log. Req: none. Outcome/effects: Resale/repair clarity improves. Feedback: “Maintenance records can support value.” Reflect: “What would a buyer or repair person want to know? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Keep the log. Req: none. Outcome/effects: Resale/repair clarity improves. Feedback: “Maintenance records can support value.” Reflect: “What would a buyer or repair person want to know? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Repair Log: Keep the log. Req: none. Outcome/effects: Resale/repair clarity improves. Feedback: “Maintenance records can support value.” Reflect: “What would a buyer or repair person want to know?"
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
            "logText": "The Repair Log: Keep the log. Req: none. Outcome/effects: Resale/repair clarity improves. Feedback: “Maintenance records can support value.” Reflect: “What would a buyer or repair person want to know? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip the log. Req: none. Outcome/effects: Less effort",
        "description": "randomized confusion later.",
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
              }
            ],
            "feedback": "Skipping records saves time until a question appears.",
            "explanation": "Skipping records saves time until a question appears.",
            "logText": "The Repair Log: Skip the log. Req: none. Outcome/effects: Less effort"
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
            "logText": "The Repair Log: Skip the log. Req: none. Outcome/effects: Less effort met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to check repair vs. replace timing. Req: supportCircle.mentor. Outcome/effects: Better planning",
        "description": "opportunity rises.",
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
            "feedback": "A second opinion can slow down an expensive replacement.",
            "explanation": "A second opinion can slow down an expensive replacement.",
            "logText": "The Repair Log: Ask mentor to check repair vs. replace timing. Req: supportCircle.mentor. Outcome/effects: Better planning"
          }
        ]
      }
    ],
    "reflectionPrompt": "What might you forget?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Records take effort, but they can protect value later."
  },
  {
    "id": "ctx-cinder-marketplace-meetup-safe",
    "title": "The Safe Exchange Plan",
    "prompt": "You are selling a used item for $42. The buyer asks to meet quickly in an unfamiliar place and pay later.",
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
        "label": "Use a public, trusted exchange plan. Req: Safety ≥ 50. Outcome/effects: Safety rises",
        "description": "scheduling slower.",
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
            "feedback": "A safer plan may add friction.",
            "explanation": "A safer plan may add friction.",
            "logText": "The Safe Exchange Plan: Use a public, trusted exchange plan. Req: Safety ≥ 50. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Accept pay-later. Req: none. Outcome/effects: Fast sale",
        "description": "randomized nonpayment risk.",
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
              }
            ],
            "feedback": "Pay-later turns a sale into a loan.",
            "explanation": "Pay-later turns a sale into a loan.",
            "logText": "The Safe Exchange Plan: Accept pay-later. Req: none. Outcome/effects: Fast sale"
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
            "logText": "The Safe Exchange Plan: Accept pay-later. Req: none. Outcome/effects: Fast sale met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask friend/caregiver to help plan. Req: supportCircle.friend or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Support can improve safety without taking over.” Reflect: “What rule did you set?",
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
            "feedback": "Ask friend/caregiver to help plan. Req: supportCircle.friend or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Support can improve safety without taking over.” Reflect: “What rule did you set? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask friend/caregiver to help plan. Req: supportCircle.friend or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Support can improve safety without taking over.” Reflect: “What rule did you set? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Safe Exchange Plan: Ask friend/caregiver to help plan. Req: supportCircle.friend or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Support can improve safety without taking over.” Reflect: “What rule did you set?"
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Safe Exchange Plan: Ask friend/caregiver to help plan. Req: supportCircle.friend or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Support can improve safety without taking over.” Reflect: “What rule did you set? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the exchange safer?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Faster sales can carry more risk; safe friction is useful."
  },
  {
    "id": "ctx-cinder-mentor-tool-catalog",
    "title": "Which Tool First?",
    "prompt": "You want to build a starter kit for a future pathway. A mentor suggests buying the tool you will use weekly before the tool you might use someday.",
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
        "label": "Buy weekly-use tool. Req: cash ≥ tool cost and supportCircle.mentor. Outcome/effects: Useful asset gained",
        "description": "cash drops.",
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
            "feedback": "Use frequency changes value.",
            "explanation": "Use frequency changes value.",
            "logText": "Which Tool First?: Buy weekly-use tool. Req: cash ≥ tool cost and supportCircle.mentor. Outcome/effects: Useful asset gained"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy impressive but rare-use tool. Req: cash ≥ tool cost. Outcome/effects: Excitement rises",
        "description": "useful value uncertain.",
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
            "feedback": "Impressive does not always mean useful.",
            "explanation": "Impressive does not always mean useful.",
            "logText": "Which Tool First?: Buy impressive but rare-use tool. Req: cash ≥ tool cost. Outcome/effects: Excitement rises"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow first to test need. Req: communityProgramAccess ≥ medium. Outcome/effects: Cash protected",
        "description": "access rules apply.",
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
            "feedback": "Testing need before buying lowers risk.",
            "explanation": "Testing need before buying lowers risk.",
            "logText": "Which Tool First?: Borrow first to test need. Req: communityProgramAccess ≥ medium. Outcome/effects: Cash protected"
          }
        ]
      }
    ],
    "reflectionPrompt": "How often will you use it?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The best tool is not always the coolest tool."
  },
  {
    "id": "ctx-cinder-minimum-payment-drag",
    "title": "The Balance That Hangs Around",
    "prompt": "A $120 balance has a $15 minimum payment. Paying only the minimum keeps more cash now but may add interest in the simplified model.",
    "topics": [
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Pay $15 minimum. Req: cash ≥ $15. Outcome/effects: Cash preserved",
        "description": "debt lasts longer.",
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
            "feedback": "Minimum means allowed, not cheapest.",
            "explanation": "Minimum means allowed, not cheapest.",
            "logText": "The Balance That Hangs Around: Pay $15 minimum. Req: cash ≥ $15. Outcome/effects: Cash preserved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $60. Req: cash ≥ $60. Outcome/effects: Balance drops faster",
        "description": "cash tighter.",
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
            "feedback": "$120 − $60 = $60 remaining before interest.",
            "explanation": "$120 − $60 = $60 remaining before interest.",
            "logText": "The Balance That Hangs Around: Pay $60. Req: cash ≥ $60. Outcome/effects: Balance drops faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use savings to pay in full. Req: savings ≥ $120. Outcome/effects: Debt gone",
        "description": "savings lower.",
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
            "feedback": "Paying in full avoids carrying the balance, but lowers cushion.",
            "explanation": "Paying in full avoids carrying the balance, but lowers cushion.",
            "logText": "The Balance That Hangs Around: Use savings to pay in full. Req: savings ≥ $120. Outcome/effects: Debt gone"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you protect today?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying more reduces debt, but cash cushion still matters."
  },
  {
    "id": "ctx-cinder-mobile-deposit-hold",
    "title": "The Check Is Deposited, But Held",
    "prompt": "You mobile-deposit a $64 check, but only $24 is available today. The rest may clear later.",
    "topics": [
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Spend only the available $24. Req: none. Outcome/effects: Fee risk drops",
        "description": "spending limited.",
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
            "feedback": "Deposited does not always mean available.",
            "explanation": "Deposited does not always mean available.",
            "logText": "The Check Is Deposited, But Held: Spend only the available $24. Req: none. Outcome/effects: Fee risk drops"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -24
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Check Is Deposited, But Held: Spend only the available $24. Req: none. Outcome/effects: Fee risk drops met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend as if $64 is available. Req: none. Outcome/effects: More flexibility",
        "description": "randomized overdraft risk.",
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
            "feedback": "A hold can block money temporarily.",
            "explanation": "A hold can block money temporarily.",
            "logText": "The Check Is Deposited, But Held: Spend as if $64 is available. Req: none. Outcome/effects: More flexibility"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -64
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Check Is Deposited, But Held: Spend as if $64 is available. Req: none. Outcome/effects: More flexibility met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set a deposit-clear reminder. Req: Discipline ≥ 35. Outcome/effects: Timing skill rises. Feedback: “A reminder protects future cash flow.” Reflect: “When should you check again?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -64
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Set a deposit-clear reminder. Req: Discipline ≥ 35. Outcome/effects: Timing skill rises. Feedback: “A reminder protects future cash flow.” Reflect: “When should you check again? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set a deposit-clear reminder. Req: Discipline ≥ 35. Outcome/effects: Timing skill rises. Feedback: “A reminder protects future cash flow.” Reflect: “When should you check again? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Check Is Deposited, But Held: Set a deposit-clear reminder. Req: Discipline ≥ 35. Outcome/effects: Timing skill rises. Feedback: “A reminder protects future cash flow.” Reflect: “When should you check again?"
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
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Check Is Deposited, But Held: Set a deposit-clear reminder. Req: Discipline ≥ 35. Outcome/effects: Timing skill rises. Feedback: “A reminder protects future cash flow.” Reflect: “When should you check again? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What number mattered?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "The safest plan uses what is available, not what is expected."
  },
  {
    "id": "ctx-cinder-moving-box-borrow",
    "title": "Boxes: Buy, Borrow, or Hunt?",
    "prompt": "Buying moving boxes costs $43. Borrowing reusable bins is free but requires a $20 refundable hold and return by Monday.",
    "topics": [
      "credit",
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
        "label": "Buy boxes. Req: cash ≥ $43. Outcome/effects: Simple",
        "description": "cash drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -43
              }
            ],
            "feedback": "Buying avoids return rules.",
            "explanation": "Buying avoids return rules.",
            "logText": "Boxes: Buy, Borrow, or Hunt?: Buy boxes. Req: cash ≥ $43. Outcome/effects: Simple"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow bins. Req: cash ≥ $20 hold. Outcome/effects: Less total cost if returned",
        "description": "deadline added.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -43
              }
            ],
            "feedback": "Refundable money still leaves your wallet for a while.",
            "explanation": "Refundable money still leaves your wallet for a while.",
            "logText": "Boxes: Buy, Borrow, or Hunt?: Borrow bins. Req: cash ≥ $20 hold. Outcome/effects: Less total cost if returned"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask friends/family for spare boxes. Req: supportCircle.friend or supportCircle.family. Outcome/effects: Cash saved",
        "description": "coordination effort.",
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
                "amount": -43
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
            "feedback": "Support can replace spending with planning.",
            "explanation": "Support can replace spending with planning.",
            "logText": "Boxes: Buy, Borrow, or Hunt?: Ask friends/family for spare boxes. Req: supportCircle.friend or supportCircle.family. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did simplicity cost?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing can save money, but deadlines and coordination matter."
  },
  {
    "id": "ctx-cinder-no-fee-account-switch",
    "title": "The Account With Fewer Surprises",
    "prompt": "Your fictional checking account charges $5/month unless you meet a balance rule. Another account has no monthly fee but fewer ATM options.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Keep current account and monitor balance. Req: hasChecking. Outcome/effects: Features stay",
        "description": "discipline needed.",
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
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "A fee waiver only helps if you can meet the rule.",
            "explanation": "A fee waiver only helps if you can meet the rule.",
            "logText": "The Account With Fewer Surprises: Keep current account and monitor balance. Req: hasChecking. Outcome/effects: Features stay"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Switch to no-monthly-fee account. Req: Money Know-How ≥ 45. Outcome/effects: Fee risk drops",
        "description": "ATM convenience drops.",
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
                "stat": "wellbeing",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Fewer features can still be a better fit.",
            "explanation": "Fewer features can still be a better fit.",
            "logText": "The Account With Fewer Surprises: Switch to no-monthly-fee account. Req: Money Know-How ≥ 45. Outcome/effects: Fee risk drops"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask caregiver/mentor to compare terms. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Knowledge and support rise. Feedback: “Account terms are easier with a second reader.” Reflect: “What fee did you notice?",
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
            "feedback": "Ask caregiver/mentor to compare terms. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Knowledge and support rise. Feedback: “Account terms are easier with a second reader.” Reflect: “What fee did you notice? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask caregiver/mentor to compare terms. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Knowledge and support rise. Feedback: “Account terms are easier with a second reader.” Reflect: “What fee did you notice? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Account With Fewer Surprises: Ask caregiver/mentor to compare terms. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Knowledge and support rise. Feedback: “Account terms are easier with a second reader.” Reflect: “What fee did you notice?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Can your habits carry this account?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The best account is the one that fits actual behavior, not the one with the most features."
  },
  {
    "id": "ctx-cinder-paper-check-timing",
    "title": "The Check You Can’t Use Yet",
    "prompt": "A fictional small job pays by paper check. You need supplies today, but the check may not clear in time.",
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
        "label": "Deposit and wait before buying. Req: none. Outcome/effects: Fee risk drops",
        "description": "supply purchase delayed.",
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
            "feedback": "Waiting protects against spending money not available yet.",
            "explanation": "Waiting protects against spending money not available yet.",
            "logText": "The Check You Can’t Use Yet: Deposit and wait before buying. Req: none. Outcome/effects: Fee risk drops"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy supplies now expecting the check. Req: checking cushion ≥ supply cost. Outcome/effects: Work continues",
        "description": "cushion used.",
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
            "feedback": "A cushion can bridge timing gaps.",
            "explanation": "A cushion can bridge timing gaps.",
            "logText": "The Check You Can’t Use Yet: Buy supplies now expecting the check. Req: checking cushion ≥ supply cost. Outcome/effects: Work continues"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask payer about direct deposit next time. Req: Money Know-How ≥ 45. Outcome/effects: Future timing improves. Feedback: “Payment method affects cash flow.” Reflect: “What would change next time?",
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
            "feedback": "Ask payer about direct deposit next time. Req: Money Know-How ≥ 45. Outcome/effects: Future timing improves. Feedback: “Payment method affects cash flow.” Reflect: “What would change next time? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask payer about direct deposit next time. Req: Money Know-How ≥ 45. Outcome/effects: Future timing improves. Feedback: “Payment method affects cash flow.” Reflect: “What would change next time? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Check You Can’t Use Yet: Ask payer about direct deposit next time. Req: Money Know-How ≥ 45. Outcome/effects: Future timing improves. Feedback: “Payment method affects cash flow.” Reflect: “What would change next time?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did delay protect?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Expected income is not the same as usable money."
  },
  {
    "id": "ctx-cinder-paystub-missing-hour",
    "title": "One Hour Short",
    "prompt": "Your pay stub shows 7 hours, but your schedule says you worked 8. At $11.50/hour, one missing hour matters.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Politely ask with your schedule record. Req: locked unless recordTokens.scheduleSaved. Outcome/effects: Possible correction",
        "description": "confidence rises.",
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
                "amount": -7
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "A clear record makes the question easier.",
            "explanation": "A clear record makes the question easier.",
            "logText": "One Hour Short: Politely ask with your schedule record. Req: locked unless recordTokens.scheduleSaved. Outcome/effects: Possible correction"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ignore it because it feels awkward. Req: none. Outcome/effects: No conflict",
        "description": "possible lost pay.",
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
            "feedback": "Avoiding awkwardness can have a money cost.",
            "explanation": "Avoiding awkwardness can have a money cost.",
            "logText": "One Hour Short: Ignore it because it feels awkward. Req: none. Outcome/effects: No conflict"
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
            "logText": "One Hour Short: Ignore it because it feels awkward. Req: none. Outcome/effects: No conflict met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to practice the message. Req: supportCircle.mentor. Outcome/effects: Opportunity and confidence rise. Feedback: “Practice can turn a complaint into a calm question.” Reflect: “What wording sounded respectful?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -7
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
            "feedback": "Ask a mentor to practice the message. Req: supportCircle.mentor. Outcome/effects: Opportunity and confidence rise. Feedback: “Practice can turn a complaint into a calm question.” Reflect: “What wording sounded respectful? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor to practice the message. Req: supportCircle.mentor. Outcome/effects: Opportunity and confidence rise. Feedback: “Practice can turn a complaint into a calm question.” Reflect: “What wording sounded respectful? changes the route and creates a finance tradeoff to notice.",
            "logText": "One Hour Short: Ask a mentor to practice the message. Req: supportCircle.mentor. Outcome/effects: Opportunity and confidence rise. Feedback: “Practice can turn a complaint into a calm question.” Reflect: “What wording sounded respectful?"
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "One Hour Short: Ask a mentor to practice the message. Req: supportCircle.mentor. Outcome/effects: Opportunity and confidence rise. Feedback: “Practice can turn a complaint into a calm question.” Reflect: “What wording sounded respectful? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did proof change the conversation?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Speaking up can feel uncomfortable, but polite correction is a workplace skill."
  },
  {
    "id": "ctx-cinder-pet-license-renewal",
    "title": "Renewal Reminder",
    "prompt": "A fictional pet registration renewal costs $11. Renewing late adds a $5 fee.",
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
        "label": "Renew now. Req: cash ≥ $11. Outcome/effects: Deadline handled",
        "description": "cash drops.",
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
                "amount": -11
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Paying on time avoids the late fee.",
            "explanation": "Paying on time avoids the late fee.",
            "logText": "Renewal Reminder: Renew now. Req: cash ≥ $11. Outcome/effects: Deadline handled"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Set reminder and pay next week. Req: Discipline ≥ 35. Outcome/effects: Cash held briefly",
        "description": "deadline risk managed.",
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
                "amount": -11
              },
              {
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "A reminder can make waiting safer.",
            "explanation": "A reminder can make waiting safer.",
            "logText": "Renewal Reminder: Set reminder and pay next week. Req: Discipline ≥ 35. Outcome/effects: Cash held briefly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask caregiver to add it to shared calendar. Req: supportCircle.family. Outcome/effects: Support and responsibility rise. Feedback: “Shared responsibility can protect the pet budget.” Reflect: “Who else depends on this plan?",
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
            "feedback": "Ask caregiver to add it to shared calendar. Req: supportCircle.family. Outcome/effects: Support and responsibility rise. Feedback: “Shared responsibility can protect the pet budget.” Reflect: “Who else depends on this plan? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask caregiver to add it to shared calendar. Req: supportCircle.family. Outcome/effects: Support and responsibility rise. Feedback: “Shared responsibility can protect the pet budget.” Reflect: “Who else depends on this plan? changes the route and creates a finance tradeoff to notice.",
            "logText": "Renewal Reminder: Ask caregiver to add it to shared calendar. Req: supportCircle.family. Outcome/effects: Support and responsibility rise. Feedback: “Shared responsibility can protect the pet budget.” Reflect: “Who else depends on this plan?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What reminder helped?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Waiting can be fine with a system; forgetting makes the cost bigger."
  },
  {
    "id": "ctx-cinder-phone-insurance-cap",
    "title": "The Payout Limit",
    "prompt": "Phone protection costs $6/month and has a $50 deductible, but the payout limit is $180. Your used phone is worth about $210.",
    "topics": [
      "insurance",
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
        "label": "Keep the plan. Req: cash flow can cover $6/month. Outcome/effects: Some protection",
        "description": "not full replacement.",
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
            "feedback": "A limit means coverage may not pay everything.",
            "explanation": "A limit means coverage may not pay everything.",
            "logText": "The Payout Limit: Keep the plan. Req: cash flow can cover $6/month. Outcome/effects: Some protection"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Cancel and save $6/month. Req: Discipline ≥ 35. Outcome/effects: Savings pocket grows",
        "description": "risk stays with you.",
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
                "amount": -6
              }
            ],
            "feedback": "$6 × 10 months = $60 saved.",
            "explanation": "$6 × 10 months = $60 saved.",
            "logText": "The Payout Limit: Cancel and save $6/month. Req: Discipline ≥ 35. Outcome/effects: Savings pocket grows"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare repair shops first. Req: Money Know-How ≥ 45. Outcome/effects: Better repair plan",
        "description": "choice delayed.",
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
                "stat": "moneyKnowledge",
                "amount": -2
              }
            ],
            "feedback": "Repair cost can change the insurance decision.",
            "explanation": "Repair cost can change the insurance decision.",
            "logText": "The Payout Limit: Compare repair shops first. Req: Money Know-How ≥ 45. Outcome/effects: Better repair plan"
          }
        ]
      }
    ],
    "reflectionPrompt": "What gap remains?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Insurance can help but may not cover the full value."
  },
  {
    "id": "ctx-cinder-practice-interview-fare",
    "title": "Practice Costs Bus Fare",
    "prompt": "A mentor offers mock interview practice across town. Transit costs $2.90 each way, and you have a small budget.",
    "topics": [
      "career",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Go in person. Req: cash or transit balance ≥ $5.80. Outcome/effects: Opportunity rises",
        "description": "cash drops.",
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
            "feedback": "$2.90 × 2 = $5.80 round trip.",
            "explanation": "$2.90 × 2 = $5.80 round trip.",
            "logText": "Practice Costs Bus Fare: Go in person. Req: cash or transit balance ≥ $5.80. Outcome/effects: Opportunity rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask for a video practice. Req: internetReliability ≥ medium. Outcome/effects: Cash saved",
        "description": "practice may feel less real.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A lower-cost format can still build skill.",
            "explanation": "A lower-cost format can still build skill.",
            "logText": "Practice Costs Bus Fare: Ask for a video practice. Req: internetReliability ≥ medium. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip practice and prepare alone. Req: none. Outcome/effects: Cash saved",
        "description": "feedback lower.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Solo prep helps, but feedback adds perspective.",
            "explanation": "Solo prep helps, but feedback adds perspective.",
            "logText": "Practice Costs Bus Fare: Skip practice and prepare alone. Req: none. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the fare buy?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Spending money to practice can be an investment, but only if the budget can carry it."
  },
  {
    "id": "ctx-cinder-public-wifi-purchase",
    "title": "Buy Now on Public Wi-Fi?",
    "prompt": "You are about to enter payment info while using public Wi-Fi. The item might sell out, but the connection is not trusted.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Wait for a secure connection. Req: none. Outcome/effects: Safety rises",
        "description": "item availability risk.",
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
            "feedback": "Waiting can protect account information.",
            "explanation": "Waiting can protect account information.",
            "logText": "Buy Now on Public Wi-Fi?: Wait for a secure connection. Req: none. Outcome/effects: Safety rises"
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
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Buy Now on Public Wi-Fi?: Wait for a secure connection. Req: none. Outcome/effects: Safety rises met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy now anyway. Req: cash ≥ item cost. Outcome/effects: Convenience",
        "description": "randomized account-risk event.",
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
            "feedback": "Convenience can raise digital risk.",
            "explanation": "Convenience can raise digital risk.",
            "logText": "Buy Now on Public Wi-Fi?: Buy now anyway. Req: cash ≥ item cost. Outcome/effects: Convenience"
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
            "logText": "Buy Now on Public Wi-Fi?: Buy now anyway. Req: cash ≥ item cost. Outcome/effects: Convenience met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult/mentor for safest option. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Safety and support rise. Feedback: “Getting help can slow down a rushed decision.” Reflect: “What option did they suggest?",
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
            "feedback": "Ask a trusted adult/mentor for safest option. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Safety and support rise. Feedback: “Getting help can slow down a rushed decision.” Reflect: “What option did they suggest? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a trusted adult/mentor for safest option. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Safety and support rise. Feedback: “Getting help can slow down a rushed decision.” Reflect: “What option did they suggest? changes the route and creates a finance tradeoff to notice.",
            "logText": "Buy Now on Public Wi-Fi?: Ask a trusted adult/mentor for safest option. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Safety and support rise. Feedback: “Getting help can slow down a rushed decision.” Reflect: “What option did they suggest?"
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Buy Now on Public Wi-Fi?: Ask a trusted adult/mentor for safest option. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Safety and support rise. Feedback: “Getting help can slow down a rushed decision.” Reflect: “What option did they suggest? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you trade for safety?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Waiting may lose convenience, but payment safety is often worth the pause."
  },
  {
    "id": "ctx-cinder-ransomware-backup-drill",
    "title": "The Backup Drill",
    "prompt": "A school-safe cyber-safety event asks whether your important project files are backed up. The game uses fictional files only.",
    "topics": [
      "life-after-high-school"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Keep a backup copy. Req: none. Outcome/effects: Digital asset protected",
        "description": "small time cost.",
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
            "feedback": "Backups protect work, not just devices.",
            "explanation": "Backups protect work, not just devices.",
            "logText": "The Backup Drill: Keep a backup copy. Req: none. Outcome/effects: Digital asset protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save only on one device. Req: none. Outcome/effects: Simpler",
        "description": "randomized loss risk.",
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
            "feedback": "One copy is fragile.",
            "explanation": "One copy is fragile.",
            "logText": "The Backup Drill: Save only on one device. Req: none. Outcome/effects: Simpler"
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
            "logText": "The Backup Drill: Save only on one device. Req: none. Outcome/effects: Simpler met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor/teacher about safe backup habits. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Safety knowledge rises. Feedback: “Reliable backup habits are learned.” Reflect: “What system would you use?",
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
            "feedback": "Ask mentor/teacher about safe backup habits. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Safety knowledge rises. Feedback: “Reliable backup habits are learned.” Reflect: “What system would you use? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor/teacher about safe backup habits. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Safety knowledge rises. Feedback: “Reliable backup habits are learned.” Reflect: “What system would you use? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Backup Drill: Ask mentor/teacher about safe backup habits. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Safety knowledge rises. Feedback: “Reliable backup habits are learned.” Reflect: “What system would you use?"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -2
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Backup Drill: Ask mentor/teacher about safe backup habits. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Safety knowledge rises. Feedback: “Reliable backup habits are learned.” Reflect: “What system would you use? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What file would be hardest to replace?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Backups cost time and organization, but they protect work value."
  },
  {
    "id": "ctx-cinder-rebalance-reminder",
    "title": "Your Mix Drifted",
    "prompt": "In the simplified investing model, one part of your portfolio grew faster, so your risk mix changed.",
    "topics": [
      "investing",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Rebalance to original plan. Req: hasInvestments and Money Know-How ≥ 50. Outcome/effects: Risk returns to plan",
        "description": "effort needed.",
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
            "feedback": "Rebalancing means checking whether the mix still fits.",
            "explanation": "Rebalancing means checking whether the mix still fits.",
            "logText": "Your Mix Drifted: Rebalance to original plan. Req: hasInvestments and Money Know-How ≥ 50. Outcome/effects: Risk returns to plan"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Leave it alone. Req: none. Outcome/effects: Simpler",
        "description": "risk may be higher.",
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
            "feedback": "Doing nothing is also a choice.",
            "explanation": "Doing nothing is also a choice.",
            "logText": "Your Mix Drifted: Leave it alone. Req: none. Outcome/effects: Simpler"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Review goals before changing. Req: Discipline ≥ 45. Outcome/effects: Better fit",
        "description": "slower action.",
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
            "feedback": "The right mix depends on goal and time.",
            "explanation": "The right mix depends on goal and time.",
            "logText": "Your Mix Drifted: Review goals before changing. Req: Discipline ≥ 45. Outcome/effects: Better fit"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why not just keep the winner?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Letting winners run feels exciting, but it can change risk."
  },
  {
    "id": "ctx-cinder-recommendation-deadline",
    "title": "The Reference Needs Time",
    "prompt": "A program application needs a recommendation. The mentor asks for at least one week, but the deadline is close.",
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
        "label": "Ask early with details. Req: locked unless deadlineRadarOn. Outcome/effects: Stronger recommendation",
        "description": "opportunity rises.",
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
            "feedback": "Support works better with time.",
            "explanation": "Support works better with time.",
            "logText": "The Reference Needs Time: Ask early with details. Req: locked unless deadlineRadarOn. Outcome/effects: Stronger recommendation"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask the night before. Req: none. Outcome/effects: Possible rushed recommendation",
        "description": "relationship stress.",
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
                "amount": -3
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Last-minute support can strain trust.",
            "explanation": "Last-minute support can strain trust.",
            "logText": "The Reference Needs Time: Ask the night before. Req: none. Outcome/effects: Possible rushed recommendation"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose a program with a later deadline. Req: none. Outcome/effects: Opportunity delayed",
        "description": "quality improves.",
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
            "feedback": "A later route can be a smarter route.",
            "explanation": "A later route can be a smarter route.",
            "logText": "The Reference Needs Time: Choose a program with a later deadline. Req: none. Outcome/effects: Opportunity delayed"
          }
        ]
      }
    ],
    "reflectionPrompt": "What details helped the mentor?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fast applications are not always best if they weaken support quality."
  },
  {
    "id": "ctx-cinder-recovery-email-copycat",
    "title": "The Fake Recovery Email",
    "prompt": "After a password reset, an email says, “Confirm your recovery code now.” It looks official, but the sender address has extra letters.",
    "topics": [
      "scams",
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Open the real account site separately. Req: none. Outcome/effects: Safety rises",
        "description": "scam avoided.",
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
            "feedback": "Going through a known route is safer than clicking.",
            "explanation": "Going through a known route is safer than clicking.",
            "logText": "The Fake Recovery Email: Open the real account site separately. Req: none. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Click the email link. Req: none. Outcome/effects: Randomized account-risk event. Feedback: “A recovery message can be fake even when timing feels real.” Reflect: “Why did timing make it believable?",
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
            "feedback": "Click the email link. Req: none. Outcome/effects: Randomized account-risk event. Feedback: “A recovery message can be fake even when timing feels real.” Reflect: “Why did timing make it believable? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Click the email link. Req: none. Outcome/effects: Randomized account-risk event. Feedback: “A recovery message can be fake even when timing feels real.” Reflect: “Why did timing make it believable? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fake Recovery Email: Click the email link. Req: none. Outcome/effects: Randomized account-risk event. Feedback: “A recovery message can be fake even when timing feels real.” Reflect: “Why did timing make it believable?"
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
            "logText": "The Fake Recovery Email: Click the email link. Req: none. Outcome/effects: Randomized account-risk event. Feedback: “A recovery message can be fake even when timing feels real.” Reflect: “Why did timing make it believable? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor/caregiver to check sender details. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “A second reader can spot small differences.” Reflect: “What did they notice?",
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
            "feedback": "Ask mentor/caregiver to check sender details. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “A second reader can spot small differences.” Reflect: “What did they notice? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor/caregiver to check sender details. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “A second reader can spot small differences.” Reflect: “What did they notice? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fake Recovery Email: Ask mentor/caregiver to check sender details. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “A second reader can spot small differences.” Reflect: “What did they notice?"
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
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Fake Recovery Email: Ask mentor/caregiver to check sender details. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “A second reader can spot small differences.” Reflect: “What did they notice? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What detail made you pause?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Clicking is faster, but a safe route protects accounts."
  },
  {
    "id": "ctx-cinder-refund-method-choice",
    "title": "Cash Refund or Store Credit Bonus?",
    "prompt": "A store offers a $28 cash refund or $32 store credit. You do not need anything else right now.",
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
        "label": "Take $28 cash. Req: none. Outcome/effects: Liquidity rises",
        "description": "bonus missed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 32
              }
            ],
            "feedback": "Cash can be used anywhere.",
            "explanation": "Cash can be used anywhere.",
            "logText": "Cash Refund or Store Credit Bonus?: Take $28 cash. Req: none. Outcome/effects: Liquidity rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Take $32 store credit. Req: none. Outcome/effects: Higher amount",
        "description": "locked to one store.",
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
            "feedback": "$4 extra is useful only if you will use it well.",
            "explanation": "$4 extra is useful only if you will use it well.",
            "logText": "Cash Refund or Store Credit Bonus?: Take $32 store credit. Req: none. Outcome/effects: Higher amount"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait one day before deciding. Req: none. Outcome/effects: Decision pressure drops",
        "description": "refund delayed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 32
              }
            ],
            "feedback": "A pause can prevent bonus-chasing.",
            "explanation": "A pause can prevent bonus-chasing.",
            "logText": "Cash Refund or Store Credit Bonus?: Wait one day before deciding. Req: none. Outcome/effects: Decision pressure drops"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is flexibility valuable?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "More dollars is not always more useful value."
  },
  {
    "id": "ctx-cinder-rental-application-stack",
    "title": "Three Application Fees?",
    "prompt": "Three fictional rentals each charge a $28 application fee. Applying to all three raises chances but costs $84.",
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
        "label": "Apply to the best-fit one first. Req: Money Know-How ≥ 45. Outcome/effects: Cash protected",
        "description": "slower search.",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "One fee is $28; three fees are $84.",
            "explanation": "One fee is $28; three fees are $84.",
            "logText": "Three Application Fees?: Apply to the best-fit one first. Req: Money Know-How ≥ 45. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Apply to all three. Req: savings ≥ $84. Outcome/effects: More chances",
        "description": "cash drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -84
              }
            ],
            "feedback": "More applications can improve odds but drain move-in money.",
            "explanation": "More applications can improve odds but drain move-in money.",
            "logText": "Three Application Fees?: Apply to all three. Req: savings ≥ $84. Outcome/effects: More chances"
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
            "logText": "Three Application Fees?: Apply to all three. Req: savings ≥ $84. Outcome/effects: More chances met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and improve documents. Req: none. Outcome/effects: Delay",
        "description": "application quality rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -84
              }
            ],
            "feedback": "Waiting can be preparation, not failure.",
            "explanation": "Waiting can be preparation, not failure.",
            "logText": "Three Application Fees?: Wait and improve documents. Req: none. Outcome/effects: Delay"
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
            "logText": "Three Application Fees?: Wait and improve documents. Req: none. Outcome/effects: Delay met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why target first?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Applying broadly may help, but upfront fees can weaken the budget."
  },
  {
    "id": "ctx-cinder-repair-estimate-before-fix",
    "title": "Estimate Before Repair",
    "prompt": "A tablet repair might cost $38–$92. A replacement used tablet costs about $120.",
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
        "label": "Get an estimate first. Req: none. Outcome/effects: Better information",
        "description": "repair delayed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -38
              }
            ],
            "feedback": "A range shows uncertainty before spending.",
            "explanation": "A range shows uncertainty before spending.",
            "logText": "Estimate Before Repair: Get an estimate first. Req: none. Outcome/effects: Better information"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Approve repair without estimate. Req: cash ≥ $92. Outcome/effects: Faster",
        "description": "randomized high-cost risk.",
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
            "feedback": "Speed can trade away price control.",
            "explanation": "Speed can trade away price control.",
            "logText": "Estimate Before Repair: Approve repair without estimate. Req: cash ≥ $92. Outcome/effects: Faster"
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
            "logText": "Estimate Before Repair: Approve repair without estimate. Req: cash ≥ $92. Outcome/effects: Faster met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Replace instead. Req: cash ≥ $120. Outcome/effects: Certainty and newer item",
        "description": "more cash used.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -38
              }
            ],
            "feedback": "Replacement can be simpler but may cost more.",
            "explanation": "Replacement can be simpler but may cost more.",
            "logText": "Estimate Before Repair: Replace instead. Req: cash ≥ $120. Outcome/effects: Certainty and newer item"
          }
        ]
      }
    ],
    "reflectionPrompt": "What estimate would make repair worth it?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Repair saves resources when cost is low, but replacement may be reasonable when repair risk is high."
  },
  {
    "id": "ctx-cinder-resume-print-or-pdf",
    "title": "Print, PDF, or Both?",
    "prompt": "A career fair accepts digital resumes, but printed copies can help. Printing costs $0.17 per page, and you might need 12 copies.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Print 12 copies. Req: cash ≥ $2.04. Outcome/effects: Preparedness rises",
        "description": "small cash cost.",
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
            "feedback": "12 × $0.17 = $2.04.",
            "explanation": "12 × $0.17 = $2.04.",
            "logText": "Print, PDF, or Both?: Print 12 copies. Req: cash ≥ $2.04. Outcome/effects: Preparedness rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use PDF only. Req: deviceReliability ≥ medium. Outcome/effects: Cash saved",
        "description": "tech dependency rises.",
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
            "feedback": "Digital is efficient if access works.",
            "explanation": "Digital is efficient if access works.",
            "logText": "Print, PDF, or Both?: Use PDF only. Req: deviceReliability ≥ medium. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Print 5 copies and bring PDF. Req: none. Outcome/effects: Balanced plan. Feedback: “Hybrid plans protect against two kinds of problems.” Reflect: “Why not choose just one format?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 0
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Print 5 copies and bring PDF. Req: none. Outcome/effects: Balanced plan. Feedback: “Hybrid plans protect against two kinds of problems.” Reflect: “Why not choose just one format? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Print 5 copies and bring PDF. Req: none. Outcome/effects: Balanced plan. Feedback: “Hybrid plans protect against two kinds of problems.” Reflect: “Why not choose just one format? changes the route and creates a finance tradeoff to notice.",
            "logText": "Print, PDF, or Both?: Print 5 copies and bring PDF. Req: none. Outcome/effects: Balanced plan. Feedback: “Hybrid plans protect against two kinds of problems.” Reflect: “Why not choose just one format?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did paper copies add?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Redundancy can be useful, but it costs money and effort."
  },
  {
    "id": "ctx-cinder-return-label-timer",
    "title": "The Label Expires Friday",
    "prompt": "You have a return label for an item that cost $31. The label expires Friday, and return shipping will subtract $4.75 from the refund.",
    "topics": [
      "consumer-skills",
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
        "label": "Ship it today. Req: none. Outcome/effects: Refund likely",
        "description": "time spent now.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -31
              }
            ],
            "feedback": "$31 − $4.75 = $26.25 recovered.",
            "explanation": "$31 − $4.75 = $26.25 recovered.",
            "logText": "The Label Expires Friday: Ship it today. Req: none. Outcome/effects: Refund likely"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until Friday. Req: none. Outcome/effects: Time saved now",
        "description": "randomized missed-deadline risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -31
              }
            ],
            "feedback": "A deadline makes waiting risky.",
            "explanation": "A deadline makes waiting risky.",
            "logText": "The Label Expires Friday: Wait until Friday. Req: none. Outcome/effects: Time saved now"
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
            "logText": "The Label Expires Friday: Wait until Friday. Req: none. Outcome/effects: Time saved now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it and use it another way. Req: none. Outcome/effects: No cash recovered",
        "description": "useful value may remain.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -31
              }
            ],
            "feedback": "Not every return is worth the cost.",
            "explanation": "Not every return is worth the cost.",
            "logText": "The Label Expires Friday: Keep it and use it another way. Req: none. Outcome/effects: No cash recovered"
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
            "logText": "The Label Expires Friday: Keep it and use it another way. Req: none. Outcome/effects: No cash recovered met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Was recovering $26.25 worth the errand?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Recovering money takes time, and sometimes the refund after fees is smaller than expected."
  },
  {
    "id": "ctx-cinder-ride-reimbursement-rule",
    "title": "Paying Back Rides",
    "prompt": "A friend’s caregiver gives you rides to practice twice a week. You want to contribute fairly without making it awkward.",
    "topics": [
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Offer $8/week for gas. Req: cash flow can cover. Outcome/effects: Trust rises",
        "description": "budget tightens.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Two rides means $4 per ride.",
            "explanation": "Two rides means $4 per ride.",
            "logText": "Paying Back Rides: Offer $8/week for gas. Req: cash flow can cover. Outcome/effects: Trust rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Offer help in another way. Req: supportCircle.friend. Outcome/effects: Cash saved",
        "description": "reciprocity shown.",
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
            "feedback": "Value is not always money.",
            "explanation": "Value is not always money.",
            "logText": "Paying Back Rides: Offer help in another way. Req: supportCircle.friend. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Say thanks but do not discuss cost. Req: none. Outcome/effects: Simple",
        "description": "possible unspoken tension.",
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
            "feedback": "Gratitude helps, but clarity may help more.",
            "explanation": "Gratitude helps, but clarity may help more.",
            "logText": "Paying Back Rides: Say thanks but do not discuss cost. Req: none. Outcome/effects: Simple"
          }
        ]
      }
    ],
    "reflectionPrompt": "What amount felt fair?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying is not the only way to contribute, but silence can create confusion."
  },
  {
    "id": "ctx-cinder-rule-72-reverse",
    "title": "What Rate Doubles in 12 Years?",
    "prompt": "Instead of asking how long money takes to double, you ask what rate would roughly double money in 12 years.",
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
        "label": "Use 72 ÷ 12. Req: none. Outcome/effects: Money knowledge rises. Feedback: “72 ÷ 12 = 6, so about 6%.” Reflect: “How did reversing the question help?",
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
            "feedback": "Use 72 ÷ 12. Req: none. Outcome/effects: Money knowledge rises. Feedback: “72 ÷ 12 = 6, so about 6%.” Reflect: “How did reversing the question help? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use 72 ÷ 12. Req: none. Outcome/effects: Money knowledge rises. Feedback: “72 ÷ 12 = 6, so about 6%.” Reflect: “How did reversing the question help? changes the route and creates a finance tradeoff to notice.",
            "logText": "What Rate Doubles in 12 Years?: Use 72 ÷ 12. Req: none. Outcome/effects: Money knowledge rises. Feedback: “72 ÷ 12 = 6, so about 6%.” Reflect: “How did reversing the question help?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Guess 12%. Req: none. Outcome/effects: Shows overestimate. Feedback: “Guessing can be far off with growth math.” Reflect: “What made 12% tempting?",
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
            "feedback": "Guess 12%. Req: none. Outcome/effects: Shows overestimate. Feedback: “Guessing can be far off with growth math.” Reflect: “What made 12% tempting? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Guess 12%. Req: none. Outcome/effects: Shows overestimate. Feedback: “Guessing can be far off with growth math.” Reflect: “What made 12% tempting? changes the route and creates a finance tradeoff to notice.",
            "logText": "What Rate Doubles in 12 Years?: Guess 12%. Req: none. Outcome/effects: Shows overestimate. Feedback: “Guessing can be far off with growth math.” Reflect: “What made 12% tempting?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to compare risk of rates. Req: supportCircle.mentor. Outcome/effects: Risk thinking improves. Feedback: “Higher expected rates often come with higher risk.” Reflect: “What risk came with the rate?",
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
            "feedback": "Ask mentor to compare risk of rates. Req: supportCircle.mentor. Outcome/effects: Risk thinking improves. Feedback: “Higher expected rates often come with higher risk.” Reflect: “What risk came with the rate? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor to compare risk of rates. Req: supportCircle.mentor. Outcome/effects: Risk thinking improves. Feedback: “Higher expected rates often come with higher risk.” Reflect: “What risk came with the rate? changes the route and creates a finance tradeoff to notice.",
            "logText": "What Rate Doubles in 12 Years?: Ask mentor to compare risk of rates. Req: supportCircle.mentor. Outcome/effects: Risk thinking improves. Feedback: “Higher expected rates often come with higher risk.” Reflect: “What risk came with the rate?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What future option, cost, or habit changed in \"What Rate Doubles in 12 Years?\"?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The math estimate is simple; finding a safe rate is not guaranteed."
  },
  {
    "id": "ctx-cinder-savings-interest-bump",
    "title": "Move to Higher Interest?",
    "prompt": "Savings Account A pays 1% yearly; Account B pays 3% yearly but requires keeping at least $100. You have $120 saved.",
    "topics": [
      "saving",
      "money-values"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Move to Account B. Req: savings ≥ $100. Outcome/effects: More interest",
        "description": "minimum rule added.",
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
            "feedback": "3% of $120 is $3.60/year in a simplified model.",
            "explanation": "3% of $120 is $3.60/year in a simplified model.",
            "logText": "Move to Higher Interest?: Move to Account B. Req: savings ≥ $100. Outcome/effects: More interest"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Stay with Account A. Req: none. Outcome/effects: Simpler",
        "description": "lower interest.",
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
            "feedback": "Simplicity can matter if rules are hard to meet.",
            "explanation": "Simplicity can matter if rules are hard to meet.",
            "logText": "Move to Higher Interest?: Stay with Account A. Req: none. Outcome/effects: Simpler"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split savings. Req: Money Know-How ≥ 45. Outcome/effects: Some interest, some flexibility. Feedback: “Splitting protects liquidity.” Reflect: “Why keep some money flexible?",
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
            "feedback": "Split savings. Req: Money Know-How ≥ 45. Outcome/effects: Some interest, some flexibility. Feedback: “Splitting protects liquidity.” Reflect: “Why keep some money flexible? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split savings. Req: Money Know-How ≥ 45. Outcome/effects: Some interest, some flexibility. Feedback: “Splitting protects liquidity.” Reflect: “Why keep some money flexible? changes the route and creates a finance tradeoff to notice.",
            "logText": "Move to Higher Interest?: Split savings. Req: Money Know-How ≥ 45. Outcome/effects: Some interest, some flexibility. Feedback: “Splitting protects liquidity.” Reflect: “Why keep some money flexible?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Can you keep the minimum?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher interest is useful only if the account rules fit."
  },
  {
    "id": "ctx-cinder-scholarship-thankyou-note",
    "title": "The Thank-You Note",
    "prompt": "A local scholarship committee asks for a short thank-you note after awarding aid. It is not required for the money, but it may build professional trust.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Send a thoughtful note. Req: none. Outcome/effects: Opportunity and trust rise. Feedback: “Gratitude can be a professional skill.” Reflect: “What did the note communicate?",
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
            "feedback": "Send a thoughtful note. Req: none. Outcome/effects: Opportunity and trust rise. Feedback: “Gratitude can be a professional skill.” Reflect: “What did the note communicate? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Send a thoughtful note. Req: none. Outcome/effects: Opportunity and trust rise. Feedback: “Gratitude can be a professional skill.” Reflect: “What did the note communicate? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Thank-You Note: Send a thoughtful note. Req: none. Outcome/effects: Opportunity and trust rise. Feedback: “Gratitude can be a professional skill.” Reflect: “What did the note communicate?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it because the award is already final. Req: none. Outcome/effects: Time saved",
        "description": "relationship opportunity missed.",
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
            "feedback": "Skipping may not cost money, but it may miss connection.",
            "explanation": "Skipping may not cost money, but it may miss connection.",
            "logText": "The Thank-You Note: Skip it because the award is already final. Req: none. Outcome/effects: Time saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor to review tone. Req: supportCircle.mentor. Outcome/effects: Writing confidence rises. Feedback: “A mentor can help make it clear and sincere.” Reflect: “What wording improved?",
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
              }
            ],
            "feedback": "Ask mentor to review tone. Req: supportCircle.mentor. Outcome/effects: Writing confidence rises. Feedback: “A mentor can help make it clear and sincere.” Reflect: “What wording improved? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor to review tone. Req: supportCircle.mentor. Outcome/effects: Writing confidence rises. Feedback: “A mentor can help make it clear and sincere.” Reflect: “What wording improved? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Thank-You Note: Ask mentor to review tone. Req: supportCircle.mentor. Outcome/effects: Writing confidence rises. Feedback: “A mentor can help make it clear and sincere.” Reflect: “What wording improved?"
          }
        ]
      }
    ],
    "reflectionPrompt": "When does follow-up matter?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Follow-up may not change today’s cash, but it can strengthen future options."
  },
  {
    "id": "ctx-cinder-service-fee-checkout",
    "title": "The Fee Appears at Checkout",
    "prompt": "A ticket-like activity costs $22, but checkout adds a 12% service fee and $2 processing fee.",
    "topics": [
      "consumer-skills"
    ],
    "ageRange": {
      "min": 14,
      "max": 18
    },
    "lifeStages": [
      "middle-school",
      "high-school",
      "postsecondary",
      "early-career",
      "adult"
    ],
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Calculate before paying. Req: none. Outcome/effects: Money knowledge rises. Feedback: “12% of $22 is $2.64",
        "description": "total is $26.64.”",
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
                "stat": "moneyKnowledge",
                "amount": 3
              }
            ],
            "feedback": "Calculate before paying. Req: none. Outcome/effects: Money knowledge rises. Feedback: “12% of $22 is $2.64 changes the route and creates a finance tradeoff to notice.",
            "explanation": "Calculate before paying. Req: none. Outcome/effects: Money knowledge rises. Feedback: “12% of $22 is $2.64 changes the route and creates a finance tradeoff to notice.",
            "logText": "The Fee Appears at Checkout: Calculate before paying. Req: none. Outcome/effects: Money knowledge rises. Feedback: “12% of $22 is $2.64"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay because you already chose it. Req: cash ≥ $26.64. Outcome/effects: Experience gained",
        "description": "cash drops.",
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
            "feedback": "Choosing before seeing fees can create pressure.",
            "explanation": "Choosing before seeing fees can create pressure.",
            "logText": "The Fee Appears at Checkout: Pay because you already chose it. Req: cash ≥ $26.64. Outcome/effects: Experience gained"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Find a no-fee alternative. Req: Opportunity ≥ 40. Outcome/effects: Cash saved",
        "description": "activity may differ.",
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
            "feedback": "A cheaper alternative may not be identical.",
            "explanation": "A cheaper alternative may not be identical.",
            "logText": "The Fee Appears at Checkout: Find a no-fee alternative. Req: Opportunity ≥ 40. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which fee surprised you?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying fees can be okay if the total still fits the value."
  },
  {
    "id": "ctx-cinder-shared-subscription-boundary",
    "title": "The Shared Login Rule",
    "prompt": "A friend suggests sharing a paid account in a way that may break the service rules. The cost would be lower, but the rule is unclear.",
    "topics": [
      "life-after-high-school",
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
        "label": "Read the sharing rule. Req: none. Outcome/effects: Safety and trust rise. Feedback: “Terms can change whether a shortcut is okay.” Reflect: “What did the rule allow?",
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
            "feedback": "Read the sharing rule. Req: none. Outcome/effects: Safety and trust rise. Feedback: “Terms can change whether a shortcut is okay.” Reflect: “What did the rule allow? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Read the sharing rule. Req: none. Outcome/effects: Safety and trust rise. Feedback: “Terms can change whether a shortcut is okay.” Reflect: “What did the rule allow? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Shared Login Rule: Read the sharing rule. Req: none. Outcome/effects: Safety and trust rise. Feedback: “Terms can change whether a shortcut is okay.” Reflect: “What did the rule allow?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Share anyway. Req: supportCircle.friend. Outcome/effects: Cost lower",
        "description": "account risk rises.",
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
            "feedback": "Saving money by breaking rules can create bigger problems.",
            "explanation": "Saving money by breaking rules can create bigger problems.",
            "logText": "The Shared Login Rule: Share anyway. Req: supportCircle.friend. Outcome/effects: Cost lower"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose a free legal option. Req: none. Outcome/effects: Cash saved",
        "description": "fewer features.",
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
            "feedback": "Lower features can be the fair trade.",
            "explanation": "Lower features can be the fair trade.",
            "logText": "The Shared Login Rule: Choose a free legal option. Req: none. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "What was the hidden risk?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Saving money should not depend on breaking rules."
  },
  {
    "id": "ctx-cinder-side-hustle-tax-pocket",
    "title": "Set Aside Before Spending",
    "prompt": "Your approved side project earns $92 profit. A mentor suggests setting aside 15% for future tax/fees in the simplified model.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Set aside 15%. Req: none. Outcome/effects: $13.80 saved",
        "description": "spending cash lower.",
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
            "feedback": "15% of $92 is $13.80.",
            "explanation": "15% of $92 is $13.80.",
            "logText": "Set Aside Before Spending: Set aside 15%. Req: none. Outcome/effects: $13.80 saved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Set aside $20. Req: Discipline ≥ 45. Outcome/effects: More cautious",
        "description": "less spending now.",
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
            "feedback": "A round-up can simplify planning.",
            "explanation": "A round-up can simplify planning.",
            "logText": "Set Aside Before Spending: Set aside $20. Req: Discipline ≥ 45. Outcome/effects: More cautious"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Spend all profit. Req: none. Outcome/effects: Enjoyment/cash now",
        "description": "future scramble risk.",
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
            "feedback": "Profit still needs a job.",
            "explanation": "Profit still needs a job.",
            "logText": "Set Aside Before Spending: Spend all profit. Req: none. Outcome/effects: Enjoyment/cash now"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the pocket protect?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Keeping every dollar feels good now, but set-asides reduce later stress."
  },
  {
    "id": "ctx-cinder-skill-refresh-badge",
    "title": "The Skill Update",
    "prompt": "A digital design tool changes. Your older skill badge still helps, but a $23 refresher could make your portfolio stronger.",
    "topics": [
      "career",
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
        "label": "Take the refresher. Req: cash ≥ $23 and Discipline ≥ 45. Outcome/effects: Opportunity rises",
        "description": "cash drops.",
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
            "feedback": "Skills can be assets that need updates.",
            "explanation": "Skills can be assets that need updates.",
            "logText": "The Skill Update: Take the refresher. Req: cash ≥ $23 and Discipline ≥ 45. Outcome/effects: Opportunity rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until a project requires it. Req: none. Outcome/effects: Cash protected",
        "description": "possible future catch-up.",
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
            "feedback": "Waiting can be smart if timing is uncertain.",
            "explanation": "Waiting can be smart if timing is uncertain.",
            "logText": "The Skill Update: Wait until a project requires it. Req: none. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor which skill matters most. Req: supportCircle.mentor. Outcome/effects: Better targeting",
        "description": "support rises.",
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Good advice can prevent paying for the wrong upgrade.",
            "explanation": "Good advice can prevent paying for the wrong upgrade.",
            "logText": "The Skill Update: Ask mentor which skill matters most. Req: supportCircle.mentor. Outcome/effects: Better targeting"
          }
        ]
      }
    ],
    "reflectionPrompt": "What future option did this protect?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Updating skills early helps opportunity, but paying too early can waste money."
  },
  {
    "id": "ctx-cinder-split-paycheck-rule",
    "title": "The 70/20/10 Paycheck Split",
    "prompt": "Your fictional net paycheck is $83. You want a simple split: spend, save, and transport.",
    "topics": [
      "budgeting",
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
        "label": "Use 70/20/10. Req: none. Outcome/effects: Spend $58.10, save $16.60, transport $8.30. Feedback: “The parts add back to $83.” Reflect: “Which category felt too small?",
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
            "feedback": "Use 70/20/10. Req: none. Outcome/effects: Spend $58.10, save $16.60, transport $8.30. Feedback: “The parts add back to $83.” Reflect: “Which category felt too small? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use 70/20/10. Req: none. Outcome/effects: Spend $58.10, save $16.60, transport $8.30. Feedback: “The parts add back to $83.” Reflect: “Which category felt too small? changes the route and creates a finance tradeoff to notice.",
            "logText": "The 70/20/10 Paycheck Split: Use 70/20/10. Req: none. Outcome/effects: Spend $58.10, save $16.60, transport $8.30. Feedback: “The parts add back to $83.” Reflect: “Which category felt too small?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save-first: 50/40/10. Req: Discipline ≥ 40. Outcome/effects: Savings rises faster",
        "description": "spending tighter.",
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
            "feedback": "40% of $83 is $33.20.",
            "explanation": "40% of $83 is $33.20.",
            "logText": "The 70/20/10 Paycheck Split: Save-first: 50/40/10. Req: Discipline ≥ 40. Outcome/effects: Savings rises faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose custom split. Req: Money Know-How ≥ 50. Outcome/effects: More control",
        "description": "must total 100%.",
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
            "feedback": "A custom rule needs a math check.",
            "explanation": "A custom rule needs a math check.",
            "logText": "The 70/20/10 Paycheck Split: Choose custom split. Req: Money Know-How ≥ 50. Outcome/effects: More control"
          }
        ]
      }
    ],
    "reflectionPrompt": "What goal made that worth it?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A strict split helps habits, but real weeks may require flexibility."
  },
  {
    "id": "ctx-cinder-tip-jar-slow-shift",
    "title": "The Slow Shift",
    "prompt": "Your shift usually brings about $18 in tips, but tonight could be slow. You are planning transportation money for tomorrow.",
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
        "label": "Budget using the low estimate: $8. Req: none. Outcome/effects: Safer plan",
        "description": "less spending tonight.",
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
            "feedback": "A low estimate protects tomorrow’s ride.",
            "explanation": "A low estimate protects tomorrow’s ride.",
            "logText": "The Slow Shift: Budget using the low estimate: $8. Req: none. Outcome/effects: Safer plan"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget using the usual $18. Req: none. Outcome/effects: More flexible",
        "description": "randomized shortfall risk.",
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
            "feedback": "Usual is not guaranteed with variable income.",
            "explanation": "Usual is not guaranteed with variable income.",
            "logText": "The Slow Shift: Budget using the usual $18. Req: none. Outcome/effects: More flexible"
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
            "logText": "The Slow Shift: Budget using the usual $18. Req: none. Outcome/effects: More flexible met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask manager/coworker about typical slow nights. Req: workplace trust ≥ 40. Outcome/effects: Forecast improves. Feedback: “Better information can beat guessing.” Reflect: “What pattern did you learn?",
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
            "feedback": "Ask manager/coworker about typical slow nights. Req: workplace trust ≥ 40. Outcome/effects: Forecast improves. Feedback: “Better information can beat guessing.” Reflect: “What pattern did you learn? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask manager/coworker about typical slow nights. Req: workplace trust ≥ 40. Outcome/effects: Forecast improves. Feedback: “Better information can beat guessing.” Reflect: “What pattern did you learn? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Slow Shift: Ask manager/coworker about typical slow nights. Req: workplace trust ≥ 40. Outcome/effects: Forecast improves. Feedback: “Better information can beat guessing.” Reflect: “What pattern did you learn?"
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
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Slow Shift: Ask manager/coworker about typical slow nights. Req: workplace trust ≥ 40. Outcome/effects: Forecast improves. Feedback: “Better information can beat guessing.” Reflect: “What pattern did you learn? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why budget from a lower number?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Budgeting low can feel limiting, but it reduces surprise."
  },
  {
    "id": "ctx-cinder-training-location-cost",
    "title": "The Training Is Across Town",
    "prompt": "A free training workshop could improve your job chances, but getting there costs $3.25 each way for four sessions.",
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
        "label": "Attend all sessions. Req: cash or transit balance ≥ $26. Outcome/effects: Opportunity rises",
        "description": "transport cost appears.",
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
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "$3.25 × 2 × 4 = $26.",
            "explanation": "$3.25 × 2 × 4 = $26.",
            "logText": "The Training Is Across Town: Attend all sessions. Req: cash or transit balance ≥ $26. Outcome/effects: Opportunity rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Attend two sessions and use online materials. Req: internetReliability ≥ medium. Outcome/effects: Lower cost",
        "description": "less practice.",
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
                "amount": -3
              }
            ],
            "feedback": "A blended route cuts cost but may reduce support.",
            "explanation": "A blended route cuts cost but may reduce support.",
            "logText": "The Training Is Across Town: Attend two sessions and use online materials. Req: internetReliability ≥ medium. Outcome/effects: Lower cost"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor about a closer option. Req: supportCircle.mentor. Outcome/effects: Possible better fit",
        "description": "opportunity preserved.",
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
            "feedback": "Resource-finding is a financial skill.",
            "explanation": "Resource-finding is a financial skill.",
            "logText": "The Training Is Across Town: Ask mentor about a closer option. Req: supportCircle.mentor. Outcome/effects: Possible better fit"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why was free training not totally free?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Free opportunities can still have time and travel costs."
  },
  {
    "id": "ctx-cinder-uniform-rental-fee",
    "title": "The Uniform Rental",
    "prompt": "A job pays $12/hour for 9 hours/week, but a uniform rental costs $7 each paycheck. Pay is every two weeks.",
    "topics": [
      "budgeting",
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
        "label": "Accept and budget for rental. Req: none. Outcome/effects: Income starts",
        "description": "net pay lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -7
              }
            ],
            "feedback": "Gross for two weeks is 18 × $12 = $216 before deductions and fees.",
            "explanation": "Gross for two weeks is 18 × $12 = $216 before deductions and fees.",
            "logText": "The Uniform Rental: Accept and budget for rental. Req: none. Outcome/effects: Income starts"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask if buying used uniform is allowed. Req: Opportunity ≥ 45. Outcome/effects: Possible lower long-term cost. Feedback: “Asking can reveal cheaper routes.” Reflect: “What question saved money?",
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
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Ask if buying used uniform is allowed. Req: Opportunity ≥ 45. Outcome/effects: Possible lower long-term cost. Feedback: “Asking can reveal cheaper routes.” Reflect: “What question saved money? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask if buying used uniform is allowed. Req: Opportunity ≥ 45. Outcome/effects: Possible lower long-term cost. Feedback: “Asking can reveal cheaper routes.” Reflect: “What question saved money? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Uniform Rental: Ask if buying used uniform is allowed. Req: Opportunity ≥ 45. Outcome/effects: Possible lower long-term cost. Feedback: “Asking can reveal cheaper routes.” Reflect: “What question saved money?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose a different job with no uniform fee. Req: alternativeJobAvailable. Outcome/effects: Fee avoided",
        "description": "other tradeoffs appear.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -7
              }
            ],
            "feedback": "No-fee jobs may have different hours or commute.",
            "explanation": "No-fee jobs may have different hours or commute.",
            "logText": "The Uniform Rental: Choose a different job with no uniform fee. Req: alternativeJobAvailable. Outcome/effects: Fee avoided"
          }
        ]
      }
    ],
    "reflectionPrompt": "What job cost surprised you?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A job’s hourly wage is only part of the comparison."
  },
  {
    "id": "ctx-cinder-utility-overlap-week",
    "title": "The Overlap Week",
    "prompt": "Future-you moves on the 24th. Two service accounts overlap for one week, adding an extra $17 charge.",
    "topics": [
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Budget for the overlap. Req: cash flow can cover +$17. Outcome/effects: Stress drops",
        "description": "cash tighter.",
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
            "feedback": "Dates can create costs even when monthly bills look fine.",
            "explanation": "Dates can create costs even when monthly bills look fine.",
            "logText": "The Overlap Week: Budget for the overlap. Req: cash flow can cover +$17. Outcome/effects: Stress drops"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Cancel old service early. Req: internetBackupAvailable. Outcome/effects: Cost avoided",
        "description": "access gap risk.",
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
            "feedback": "Saving money may create an access problem.",
            "explanation": "Saving money may create an access problem.",
            "logText": "The Overlap Week: Cancel old service early. Req: internetBackupAvailable. Outcome/effects: Cost avoided"
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
            "logText": "The Overlap Week: Cancel old service early. Req: internetBackupAvailable. Outcome/effects: Cost avoided met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Call and ask about prorating. Req: Money Know-How ≥ 45. Outcome/effects: Possible reduced charge. Feedback: “Asking before the bill posts gives more options.” Reflect: “What did you ask?",
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
            "feedback": "Call and ask about prorating. Req: Money Know-How ≥ 45. Outcome/effects: Possible reduced charge. Feedback: “Asking before the bill posts gives more options.” Reflect: “What did you ask? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Call and ask about prorating. Req: Money Know-How ≥ 45. Outcome/effects: Possible reduced charge. Feedback: “Asking before the bill posts gives more options.” Reflect: “What did you ask? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Overlap Week: Call and ask about prorating. Req: Money Know-How ≥ 45. Outcome/effects: Possible reduced charge. Feedback: “Asking before the bill posts gives more options.” Reflect: “What did you ask?"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Overlap Week: Call and ask about prorating. Req: Money Know-How ≥ 45. Outcome/effects: Possible reduced charge. Feedback: “Asking before the bill posts gives more options.” Reflect: “What did you ask? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did the calendar matter?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Calendar details can be small but important."
  },
  {
    "id": "ctx-cinder-workstudy-location-choice",
    "title": "The Work-Study Job Is Farther",
    "prompt": "A fictional work-study job pays $14/hour for 5 hours/week, but travel adds $6/week and 80 minutes.",
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
        "label": "Take the work-study job. Req: aidOfferIncludesWorkStudy. Outcome/effects: Earned aid grows",
        "description": "travel cost/time.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -70
              }
            ],
            "feedback": "Gross weekly pay is $70 before costs.",
            "explanation": "Gross weekly pay is $70 before costs.",
            "logText": "The Work-Study Job Is Farther: Take the work-study job. Req: aidOfferIncludesWorkStudy. Outcome/effects: Earned aid grows"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose closer non-work-study job. Req: nearbyJobAvailable. Outcome/effects: Less travel",
        "description": "aid benefit unused.",
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
            "feedback": "Closer can be better even with different pay.",
            "explanation": "Closer can be better even with different pay.",
            "logText": "The Work-Study Job Is Farther: Choose closer non-work-study job. Req: nearbyJobAvailable. Outcome/effects: Less travel"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask aid office/mentor about alternatives. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Options improve. Feedback: “Asking can reveal jobs you did not see.” Reflect: “What changed after asking?",
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
            "feedback": "Ask aid office/mentor about alternatives. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Options improve. Feedback: “Asking can reveal jobs you did not see.” Reflect: “What changed after asking? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask aid office/mentor about alternatives. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Options improve. Feedback: “Asking can reveal jobs you did not see.” Reflect: “What changed after asking? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Work-Study Job Is Farther: Ask aid office/mentor about alternatives. Req: supportCircle.mentor or schoolResourceAccess ≥ medium. Outcome/effects: Options improve. Feedback: “Asking can reveal jobs you did not see.” Reflect: “What changed after asking?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did travel subtract?",
    "sourceNote": "MoneyLife context batch CINDER-PERISCOPE-83; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Earned aid is useful only if the schedule and travel work."
  }
];
