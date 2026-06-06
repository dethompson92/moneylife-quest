import type { ScenarioEvent } from "../../../../types/game";

export const orbitContextScenarios: ScenarioEvent[] = [
  {
    "id": "ctx-orbit-account-nickname-budget",
    "title": "Name the Accounts",
    "prompt": "You can nickname fictional savings pockets: “Emergency,” “Trip,” “Tools,” or “Future Me.” You have $40 to divide.",
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
        "label": "$20 emergency, $10 goal, $10 fun. Req: none. Outcome/effects: Balanced pockets. Feedback: “Naming money can make its job clearer.” Reflect: “Which name protected the money?",
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
            "feedback": "$20 emergency, $10 goal, $10 fun. Req: none. Outcome/effects: Balanced pockets. Feedback: “Naming money can make its job clearer.” Reflect: “Which name protected the money? changes the route and creates a finance tradeoff to notice.",
            "explanation": "$20 emergency, $10 goal, $10 fun. Req: none. Outcome/effects: Balanced pockets. Feedback: “Naming money can make its job clearer.” Reflect: “Which name protected the money? changes the route and creates a finance tradeoff to notice.",
            "logText": "Name the Accounts: $20 emergency, $10 goal, $10 fun. Req: none. Outcome/effects: Balanced pockets. Feedback: “Naming money can make its job clearer.” Reflect: “Which name protected the money?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "$35 goal, $5 emergency. Req: none. Outcome/effects: Goal grows faster",
        "description": "cushion thinner.",
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
            "feedback": "Focused saving speeds one target.",
            "explanation": "Focused saving speeds one target.",
            "logText": "Name the Accounts: $35 goal, $5 emergency. Req: none. Outcome/effects: Goal grows faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep all $40 unnamed. Req: none. Outcome/effects: Flexible",
        "description": "easier to spend accidentally.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 40
              }
            ],
            "feedback": "Flexible money can solve anything, but may drift.",
            "explanation": "Flexible money can solve anything, but may drift.",
            "logText": "Name the Accounts: Keep all $40 unnamed. Req: none. Outcome/effects: Flexible"
          }
        ]
      }
    ],
    "reflectionPrompt": "What risk did focus create?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Naming money can help discipline, but too many pockets can feel rigid."
  },
  {
    "id": "ctx-orbit-aid-offer-color-sort",
    "title": "What Is Free, Earned, or Borrowed?",
    "prompt": "A fictional aid offer lists: $1,200 grant, $800 scholarship, $900 work-study, $2,000 loan, and $700 remaining gap.",
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
        "label": "Sort each line by type. Req: pathwayCollegeOrCareerSchool. Outcome/effects: Money knowledge rises",
        "description": "loan confusion drops.",
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
            "feedback": "Grant and scholarship are different from borrowed money.",
            "explanation": "Grant and scholarship are different from borrowed money.",
            "logText": "What Is Free, Earned, or Borrowed?: Sort each line by type. Req: pathwayCollegeOrCareerSchool. Outcome/effects: Money knowledge rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Accept everything without sorting. Req: none. Outcome/effects: Fast",
        "description": "future debt surprise risk.",
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
            "feedback": "Fast choices can hide borrowed money.",
            "explanation": "Fast choices can hide borrowed money.",
            "logText": "What Is Free, Earned, or Borrowed?: Accept everything without sorting. Req: none. Outcome/effects: Fast"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a counselor/mentor to review. Req: supportCircle.mentor. Outcome/effects: Opportunity and safety rise. Feedback: “Aid language is easier with support.” Reflect: “What did the helper clarify?",
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
            "feedback": "Ask a counselor/mentor to review. Req: supportCircle.mentor. Outcome/effects: Opportunity and safety rise. Feedback: “Aid language is easier with support.” Reflect: “What did the helper clarify? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a counselor/mentor to review. Req: supportCircle.mentor. Outcome/effects: Opportunity and safety rise. Feedback: “Aid language is easier with support.” Reflect: “What did the helper clarify? changes the route and creates a finance tradeoff to notice.",
            "logText": "What Is Free, Earned, or Borrowed?: Ask a counselor/mentor to review. Req: supportCircle.mentor. Outcome/effects: Opportunity and safety rise. Feedback: “Aid language is easier with support.” Reflect: “What did the helper clarify?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which line must be repaid?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Aid can lower cost, but only if the player understands what is free, earned, borrowed, or still missing."
  },
  {
    "id": "ctx-orbit-app-permissions-wallet",
    "title": "The Permission Pop-Up",
    "prompt": "A budgeting helper app asks for contacts, location, notifications, and wallet access. The game uses fictional apps only.",
    "topics": [
      "banking",
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
        "label": "Allow only what is needed. Req: none. Outcome/effects: Safety rises",
        "description": "app features still work.",
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
            "feedback": "Least-needed access lowers risk.",
            "explanation": "Least-needed access lowers risk.",
            "logText": "The Permission Pop-Up: Allow only what is needed. Req: none. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Allow all permissions. Req: none. Outcome/effects: Convenience rises",
        "description": "privacy risk rises.",
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
            "feedback": "Convenience can trade away more data than needed.",
            "explanation": "Convenience can trade away more data than needed.",
            "logText": "The Permission Pop-Up: Allow all permissions. Req: none. Outcome/effects: Convenience rises"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the app and use a manual note. Req: Discipline ≥ 40. Outcome/effects: Privacy protected",
        "description": "more effort.",
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
            "feedback": "Manual systems can be safer but require consistency.",
            "explanation": "Manual systems can be safer but require consistency.",
            "logText": "The Permission Pop-Up: Skip the app and use a manual note. Req: Discipline ≥ 40. Outcome/effects: Privacy protected"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which permission was actually necessary?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The best tool is one that helps without asking for unnecessary access."
  },
  {
    "id": "ctx-orbit-apprentice-tool-payment-plan",
    "title": "Tools for the Apprenticeship",
    "prompt": "An apprenticeship path requires a starter tool set. Buy used for $140 now, or new for $29/month for six months.",
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
        "label": "Buy used. Req: savings ≥ $140. Outcome/effects: No future payments",
        "description": "condition may be lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -140
              }
            ],
            "feedback": "Used costs less if it works well.",
            "explanation": "Used costs less if it works well.",
            "logText": "Tools for the Apprenticeship: Buy used. Req: savings ≥ $140. Outcome/effects: No future payments"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Payment plan for new tools. Req: pathwayApprenticeship. Outcome/effects: Lower upfront cost",
        "description": "total $174.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -174
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "$29 × 6 = $174, which is $34 more than used.",
            "explanation": "$29 × 6 = $174, which is $34 more than used.",
            "logText": "Tools for the Apprenticeship: Payment plan for new tools. Req: pathwayApprenticeship. Outcome/effects: Lower upfront cost"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask mentor/employer about a tool-lending program. Req: supportCircle.mentor or Opportunity ≥ 55. Outcome/effects: Potential cost drop",
        "description": "asking skill rises.",
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
                "amount": -140
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
            "feedback": "Some pathways have resources if you ask.",
            "explanation": "Some pathways have resources if you ask.",
            "logText": "Tools for the Apprenticeship: Ask mentor/employer about a tool-lending program. Req: supportCircle.mentor or Opportunity ≥ 55. Outcome/effects: Potential cost drop"
          }
        ]
      }
    ],
    "reflectionPrompt": "How would you check condition?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Upfront cash, total cost, tool condition, and pathway support all matter."
  },
  {
    "id": "ctx-orbit-auto-reload-transit",
    "title": "Auto-Reload or Manual?",
    "prompt": "Your transit card can auto-reload $20 whenever it falls below $5. That prevents being stranded but could surprise your checking balance.",
    "topics": [
      "banking"
    ],
    "ageRange": {
      "min": 13,
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
        "label": "Turn on auto-reload with alerts. Req: hasTransitCard. Outcome/effects: Transport safety rises",
        "description": "checking needs monitoring.",
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
            "feedback": "Automation works best with alerts.",
            "explanation": "Automation works best with alerts.",
            "logText": "Auto-Reload or Manual?: Turn on auto-reload with alerts. Req: hasTransitCard. Outcome/effects: Transport safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Reload manually every Sunday. Req: Discipline ≥ 40. Outcome/effects: More control",
        "description": "forgetting risk.",
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
            "feedback": "Manual systems depend on routine.",
            "explanation": "Manual systems depend on routine.",
            "logText": "Auto-Reload or Manual?: Reload manually every Sunday. Req: Discipline ≥ 40. Outcome/effects: More control"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep no reload plan. Req: none. Outcome/effects: Flexible cash",
        "description": "risk of short balance.",
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
            "feedback": "No system is simple until the card runs out.",
            "explanation": "No system is simple until the card runs out.",
            "logText": "Auto-Reload or Manual?: Keep no reload plan. Req: none. Outcome/effects: Flexible cash"
          }
        ]
      }
    ],
    "reflectionPrompt": "What alert would prevent surprise?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Automation can protect access or create surprise charges."
  },
  {
    "id": "ctx-orbit-bank-alert-threshold",
    "title": "The $25 Alert",
    "prompt": "Your checking account can text you when the balance drops below $25, $50, or $100. You usually spend about $18 at a time.",
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
        "label": "Set alert at $25. Req: hasChecking. Outcome/effects: Fewer alerts",
        "description": "less warning time.",
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
            "feedback": "One $18 purchase after a $25 alert could leave only $7.",
            "explanation": "One $18 purchase after a $25 alert could leave only $7.",
            "logText": "The $25 Alert: Set alert at $25. Req: hasChecking. Outcome/effects: Fewer alerts"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Set alert at $50. Req: hasChecking. Outcome/effects: Balanced warning level. Feedback: “$50 gives room for two small purchases before danger.” Reflect: “What balance helps you pause?",
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
            "feedback": "Set alert at $50. Req: hasChecking. Outcome/effects: Balanced warning level. Feedback: “$50 gives room for two small purchases before danger.” Reflect: “What balance helps you pause? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Set alert at $50. Req: hasChecking. Outcome/effects: Balanced warning level. Feedback: “$50 gives room for two small purchases before danger.” Reflect: “What balance helps you pause? changes the route and creates a finance tradeoff to notice.",
            "logText": "The $25 Alert: Set alert at $50. Req: hasChecking. Outcome/effects: Balanced warning level. Feedback: “$50 gives room for two small purchases before danger.” Reflect: “What balance helps you pause?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Set alert at $100. Req: hasChecking. Outcome/effects: More alerts",
        "description": "stronger cushion.",
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
              }
            ],
            "feedback": "More reminders can help or annoy you into ignoring them.",
            "explanation": "More reminders can help or annoy you into ignoring them.",
            "logText": "The $25 Alert: Set alert at $100. Req: hasChecking. Outcome/effects: More alerts"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is that enough warning?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Alerts only help if the threshold matches real spending."
  },
  {
    "id": "ctx-orbit-campus-book-bundle",
    "title": "The Book Bundle Choice",
    "prompt": "A career-school class offers a $118 book bundle. Buying used copies separately may cost $89, but one book might arrive late.",
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
        "label": "Buy the bundle. Req: cash ≥ $118. Outcome/effects: More cost",
        "description": "lower delay risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -29
              }
            ],
            "feedback": "You pay $29 more for reliability.",
            "explanation": "You pay $29 more for reliability.",
            "logText": "The Book Bundle Choice: Buy the bundle. Req: cash ≥ $118. Outcome/effects: More cost"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy used separately. Req: cash ≥ $89. Outcome/effects: Cash saved",
        "description": "timing risk.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -89
              }
            ],
            "feedback": "Used can be cheaper, but access timing matters.",
            "explanation": "Used can be cheaper, but access timing matters.",
            "logText": "The Book Bundle Choice: Buy used separately. Req: cash ≥ $89. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask whether the library has reserve copies. Req: Opportunity ≥ 50. Outcome/effects: Possible lower cost",
        "description": "time planning needed.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -89
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Shared resources can reduce cost when available.",
            "explanation": "Shared resources can reduce cost when available.",
            "logText": "The Book Bundle Choice: Ask whether the library has reserve copies. Req: Opportunity ≥ 50. Outcome/effects: Possible lower cost"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is certainty worth extra cost?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Cheap is not always best if delay harms performance."
  },
  {
    "id": "ctx-orbit-cash-envelope-digital",
    "title": "Three Digital Envelopes",
    "prompt": "You split $47 into three fictional envelopes: spend now, save soon, and give/help. You choose the percentages.",
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
        "label": "50/30/20 split. Req: none. Outcome/effects: $23.50 spend, $14.10 save, $9.40 give/help. Feedback: “A percentage split turns values into numbers.” Reflect: “Which category felt too high or low?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -14
              }
            ],
            "feedback": "50/30/20 split. Req: none. Outcome/effects: $23.50 spend, $14.10 save, $9.40 give/help. Feedback: “A percentage split turns values into numbers.” Reflect: “Which category felt too high or low? changes the route and creates a finance tradeoff to notice.",
            "explanation": "50/30/20 split. Req: none. Outcome/effects: $23.50 spend, $14.10 save, $9.40 give/help. Feedback: “A percentage split turns values into numbers.” Reflect: “Which category felt too high or low? changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Digital Envelopes: 50/30/20 split. Req: none. Outcome/effects: $23.50 spend, $14.10 save, $9.40 give/help. Feedback: “A percentage split turns values into numbers.” Reflect: “Which category felt too high or low?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save-heavy split: 30/60/10. Req: none. Outcome/effects: Future goal rises",
        "description": "current fun drops.",
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
            "feedback": "Saving more now can speed a goal but shrink flexibility.",
            "explanation": "Saving more now can speed a goal but shrink flexibility.",
            "logText": "Three Digital Envelopes: Save-heavy split: 30/60/10. Req: none. Outcome/effects: Future goal rises"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Flexible split you design. Req: Money Know-How ≥ 45. Outcome/effects: More ownership",
        "description": "more math.",
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
            "feedback": "Your rule should still add to 100%.",
            "explanation": "Your rule should still add to 100%.",
            "logText": "Three Digital Envelopes: Flexible split you design. Req: Money Know-How ≥ 45. Outcome/effects: More ownership"
          }
        ]
      }
    ],
    "reflectionPrompt": "What goal made saving worth it?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "No split is universal; a good split fits the situation."
  },
  {
    "id": "ctx-orbit-cashback-not-free",
    "title": "Cash Back Temptation",
    "prompt": "A card gives 2% cash back. You are considering a $75 purchase mostly because of the reward.",
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
        "label": "Skip the purchase. Req: none. Outcome/effects: Cash protected",
        "description": "reward missed.",
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
            "feedback": "2% of $75 is only $1.50.",
            "explanation": "2% of $75 is only $1.50.",
            "logText": "Cash Back Temptation: Skip the purchase. Req: none. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy only if it was already planned. Req: Discipline ≥ 45. Outcome/effects: Reward becomes a small bonus. Feedback: “Rewards work best when they do not create spending.” Reflect: “Was this planned before the reward?",
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
            "feedback": "Buy only if it was already planned. Req: Discipline ≥ 45. Outcome/effects: Reward becomes a small bonus. Feedback: “Rewards work best when they do not create spending.” Reflect: “Was this planned before the reward? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy only if it was already planned. Req: Discipline ≥ 45. Outcome/effects: Reward becomes a small bonus. Feedback: “Rewards work best when they do not create spending.” Reflect: “Was this planned before the reward? changes the route and creates a finance tradeoff to notice.",
            "logText": "Cash Back Temptation: Buy only if it was already planned. Req: Discipline ≥ 45. Outcome/effects: Reward becomes a small bonus. Feedback: “Rewards work best when they do not create spending.” Reflect: “Was this planned before the reward?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Buy for the reward. Req: none. Outcome/effects: Short-term excitement",
        "description": "money drops.",
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
            "feedback": "Cash back is not a discount big enough to justify an unwanted buy.",
            "explanation": "Cash back is not a discount big enough to justify an unwanted buy.",
            "logText": "Cash Back Temptation: Buy for the reward. Req: none. Outcome/effects: Short-term excitement"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was $1.50 enough reason to spend $75?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Rewards can be useful, but they are tiny compared with the full purchase."
  },
  {
    "id": "ctx-orbit-clinic-copay-choice",
    "title": "The Copay and the Bill",
    "prompt": "In a simplified adult scenario, a routine visit has a $25 copay. Delaying might avoid the cost now, but could create a bigger issue later. This is not medical advice; it is a cost-planning scenario.",
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
        "label": "Go now and pay $25. Req: cash ≥ $25. Outcome/effects: Cash down",
        "description": "risk of bigger later cost drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -25
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              }
            ],
            "feedback": "A copay is a known cost for a covered visit.",
            "explanation": "A copay is a known cost for a covered visit.",
            "logText": "The Copay and the Bill: Go now and pay $25. Req: cash ≥ $25. Outcome/effects: Cash down"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -25
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Copay and the Bill: Go now and pay $25. Req: cash ≥ $25. Outcome/effects: Cash down met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Delay until next month. Req: none. Outcome/effects: Cash protected now",
        "description": "randomized future cost.",
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
            "feedback": "Waiting helps cash flow but can add uncertainty.",
            "explanation": "Waiting helps cash flow but can add uncertainty.",
            "logText": "The Copay and the Bill: Delay until next month. Req: none. Outcome/effects: Cash protected now"
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
            "logText": "The Copay and the Bill: Delay until next month. Req: none. Outcome/effects: Cash protected now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use your health-cost pocket. Req: healthCostPocket ≥ $25. Outcome/effects: Planned fund works",
        "description": "needs rebuilding.",
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
              }
            ],
            "feedback": "A small pocket turns a bill into a planned withdrawal.",
            "explanation": "A small pocket turns a bill into a planned withdrawal.",
            "logText": "The Copay and the Bill: Use your health-cost pocket. Req: healthCostPocket ≥ $25. Outcome/effects: Planned fund works"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can a known cost be easier to plan for?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Health decisions should not be treated as simple money math, but money planning can reduce stress."
  },
  {
    "id": "ctx-orbit-cloud-storage-cleanout",
    "title": "Pay for Storage or Clean Up?",
    "prompt": "A fictional cloud account is full. Extra storage is $1.99/month, or you can spend an hour deleting duplicates.",
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
        "label": "Pay for storage. Req: cash flow can cover $1.99/month. Outcome/effects: Convenience rises",
        "description": "annual cost about $23.88.",
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
                "amount": -24
              }
            ],
            "feedback": "$1.99 × 12 = $23.88.",
            "explanation": "$1.99 × 12 = $23.88.",
            "logText": "Pay for Storage or Clean Up?: Pay for storage. Req: cash flow can cover $1.99/month. Outcome/effects: Convenience rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Clean it up manually. Req: timeAvailable ≥ 60 minutes. Outcome/effects: Cash saved",
        "description": "time spent.",
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
            "feedback": "You traded an hour for about $24/year.",
            "explanation": "You traded an hour for about $24/year.",
            "logText": "Pay for Storage or Clean Up?: Clean it up manually. Req: timeAvailable ≥ 60 minutes. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Back up only important files. Req: Discipline ≥ 45. Outcome/effects: Lower clutter",
        "description": "requires judgment.",
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
            "feedback": "Sorting by importance can shrink the problem.",
            "explanation": "Sorting by importance can shrink the problem.",
            "logText": "Pay for Storage or Clean Up?: Back up only important files. Req: Discipline ≥ 45. Outcome/effects: Lower clutter"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is the time saved worth the yearly cost?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying for convenience can be smart if the time saved is worth more to you."
  },
  {
    "id": "ctx-orbit-community-college-transfer-map",
    "title": "Two Years, Then Transfer?",
    "prompt": "A two-year start costs $4,200 per year. A direct four-year route costs $11,500 per year in the simplified model.",
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
        "label": "Start at community college with a transfer map. Req: Money Know-How ≥ 50. Outcome/effects: Cost drops",
        "description": "planning required.",
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
                "type": "stat",
                "stat": "moneyKnowledge",
                "amount": -2
              }
            ],
            "feedback": "Two years at $4,200 saves money only if credits transfer well.",
            "explanation": "Two years at $4,200 saves money only if credits transfer well.",
            "logText": "Two Years, Then Transfer?: Start at community college with a transfer map. Req: Money Know-How ≥ 50. Outcome/effects: Cost drops"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose direct four-year route. Req: none. Outcome/effects: Higher cost",
        "description": "simpler continuity.",
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
            "feedback": "Simplicity and campus fit can matter.",
            "explanation": "Simplicity and campus fit can matter.",
            "logText": "Two Years, Then Transfer?: Choose direct four-year route. Req: none. Outcome/effects: Higher cost"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Work first and revisit later. Req: none. Outcome/effects: Income first",
        "description": "degree delayed.",
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
            "feedback": "Delaying can be a plan when goals stay visible.",
            "explanation": "Delaying can be a plan when goals stay visible.",
            "logText": "Two Years, Then Transfer?: Work first and revisit later. Req: none. Outcome/effects: Income first"
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes the map important?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Lower-cost starts need careful transfer planning to avoid lost credits."
  },
  {
    "id": "ctx-orbit-community-gear-library",
    "title": "Borrow the Project Gear",
    "prompt": "A community gear library has a camera tripod you need for a school project. Buying one is $33; borrowing is free with a $10 late fee if returned late.",
    "topics": [
      "credit"
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
        "label": "Borrow and set two reminders. Req: communityProgramAccess. Outcome/effects: Cash saved",
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
            "feedback": "Borrowing gives access without ownership, but the due date matters.",
            "explanation": "Borrowing gives access without ownership, but the due date matters.",
            "logText": "Borrow the Project Gear: Borrow and set two reminders. Req: communityProgramAccess. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy a basic tripod. Req: cash ≥ $33. Outcome/effects: Asset gained",
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
            "feedback": "Owning gives flexibility but ties up money.",
            "explanation": "Owning gives flexibility but ties up money.",
            "logText": "Borrow the Project Gear: Buy a basic tripod. Req: cash ≥ $33. Outcome/effects: Asset gained"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Borrow with a friend as return partner. Req: supportCircle.friend. Outcome/effects: Support rises",
        "description": "shared responsibility added.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A buddy system can protect against late fees.",
            "explanation": "A buddy system can protect against late fees.",
            "logText": "Borrow the Project Gear: Borrow with a friend as return partner. Req: supportCircle.friend. Outcome/effects: Support rises"
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes borrowing responsible?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing can beat buying, but only if the rules fit your routine."
  },
  {
    "id": "ctx-orbit-debit-card-hold",
    "title": "The Hold That Shrinks Your Balance",
    "prompt": "A service places a temporary $40 hold on your debit card, even though the final charge should be $23. You have $58 in checking.",
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
        "label": "Wait until the hold clears before more spending. Req: hasChecking. Outcome/effects: Safety rises",
        "description": "spending delayed.",
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
            "feedback": "$58 − $40 leaves only $18 available during the hold.",
            "explanation": "$58 − $40 leaves only $18 available during the hold.",
            "logText": "The Hold That Shrinks Your Balance: Wait until the hold clears before more spending. Req: hasChecking. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend as if final cost is $23. Req: none. Outcome/effects: More flexibility",
        "description": "fee risk rises.",
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
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "The bank may count the hold before the final charge.",
            "explanation": "The bank may count the hold before the final charge.",
            "logText": "The Hold That Shrinks Your Balance: Spend as if final cost is $23. Req: none. Outcome/effects: More flexibility"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use a separate spending pocket for holds. Req: Money Know-How ≥ 50. Outcome/effects: Cash-flow skill rises. Feedback: “Separating hold money prevents accidental spending.” Reflect: “What system would help?",
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
            "feedback": "Use a separate spending pocket for holds. Req: Money Know-How ≥ 50. Outcome/effects: Cash-flow skill rises. Feedback: “Separating hold money prevents accidental spending.” Reflect: “What system would help? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Use a separate spending pocket for holds. Req: Money Know-How ≥ 50. Outcome/effects: Cash-flow skill rises. Feedback: “Separating hold money prevents accidental spending.” Reflect: “What system would help? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Hold That Shrinks Your Balance: Use a separate spending pocket for holds. Req: Money Know-How ≥ 50. Outcome/effects: Cash-flow skill rises. Feedback: “Separating hold money prevents accidental spending.” Reflect: “What system would help?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did available balance matter?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Temporary holds are not final spending, but they can still block cash."
  },
  {
    "id": "ctx-orbit-deepfake-boss-message",
    "title": "The Voice Message That Sounds Real",
    "prompt": "A voice message that sounds like your manager asks you to buy digital gift codes for a “work emergency.” It says not to call because they are in a meeting.",
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
        "label": "Verify through the official work contact. Req: none. Outcome/effects: Safety rises",
        "description": "scam blocked.",
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
            "feedback": "A real emergency can survive a verification call.",
            "explanation": "A real emergency can survive a verification call.",
            "logText": "The Voice Message That Sounds Real: Verify through the official work contact. Req: none. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Follow the message quickly. Req: none. Outcome/effects: Randomized loss risk",
        "description": "safety drops.",
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
            "feedback": "Urgency and secrecy are warning signs.",
            "explanation": "Urgency and secrecy are warning signs.",
            "logText": "The Voice Message That Sounds Real: Follow the message quickly. Req: none. Outcome/effects: Randomized loss risk"
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
            "logText": "The Voice Message That Sounds Real: Follow the message quickly. Req: none. Outcome/effects: Randomized loss risk met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a trusted adult or mentor before acting. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Getting help is a safety skill.” Reflect: “Why is asking not a weakness?",
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
            "feedback": "Ask a trusted adult or mentor before acting. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Getting help is a safety skill.” Reflect: “Why is asking not a weakness? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a trusted adult or mentor before acting. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Getting help is a safety skill.” Reflect: “Why is asking not a weakness? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Voice Message That Sounds Real: Ask a trusted adult or mentor before acting. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Getting help is a safety skill.” Reflect: “Why is asking not a weakness?"
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
            "logText": "The Voice Message That Sounds Real: Ask a trusted adult or mentor before acting. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and safety rise. Feedback: “Getting help is a safety skill.” Reflect: “Why is asking not a weakness? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What detail raised suspicion?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "The cost of checking is small compared with the risk of irreversible payment."
  },
  {
    "id": "ctx-orbit-digital-receipt-folder",
    "title": "The Receipt Folder",
    "prompt": "You can turn on a simple in-game receipt folder. It does not collect real receipts; it only stores fictional proof from game events.",
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
        "label": "Turn it on. Req: none. Outcome/effects: Future disputes/refunds easier",
        "description": "small organization habit gained.",
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
            "feedback": "Proof is easier to use when it is saved before you need it.",
            "explanation": "Proof is easier to use when it is saved before you need it.",
            "logText": "The Receipt Folder: Turn it on. Req: none. Outcome/effects: Future disputes/refunds easier"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it. Req: none. Outcome/effects: Cleaner interface",
        "description": "less help later.",
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
            "feedback": "Skipping tools is fine if you have another system.",
            "explanation": "Skipping tools is fine if you have another system.",
            "logText": "The Receipt Folder: Skip it. Req: none. Outcome/effects: Cleaner interface"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Turn it on only for purchases over $20. Req: Discipline ≥ 40. Outcome/effects: Less clutter",
        "description": "big purchases protected.",
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
            "feedback": "A rule can make organization easier.",
            "explanation": "A rule can make organization easier.",
            "logText": "The Receipt Folder: Turn it on only for purchases over $20. Req: Discipline ≥ 40. Outcome/effects: Less clutter"
          }
        ]
      }
    ],
    "reflectionPrompt": "What proof would you want later?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Tracking everything can feel cluttered; tracking nothing can leave you stuck."
  },
  {
    "id": "ctx-orbit-employer-match-choice",
    "title": "Free Match, Not Free Cash",
    "prompt": "A future employer offers to match retirement contributions up to 3% of pay. Your simplified monthly gross pay is $1,600.",
    "topics": [
      "money-values",
      "taxes"
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
        "label": "Contribute 3%. Req: hasSteadyIncome. Outcome/effects: $48/month saved",
        "description": "match added; take-home drops.",
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
            "feedback": "3% of $1,600 is $48.",
            "explanation": "3% of $1,600 is $48.",
            "logText": "Free Match, Not Free Cash: Contribute 3%. Req: hasSteadyIncome. Outcome/effects: $48/month saved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Start at 1%. Req: hasSteadyIncome. Outcome/effects: Smaller habit",
        "description": "less match.",
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
            "feedback": "Starting small can build consistency.",
            "explanation": "Starting small can build consistency.",
            "logText": "Free Match, Not Free Cash: Start at 1%. Req: hasSteadyIncome. Outcome/effects: Smaller habit"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Delay until emergency fund improves. Req: emergency fund below target. Outcome/effects: Cash safety first",
        "description": "investing delayed.",
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
              }
            ],
            "feedback": "A cushion can be the first financial shield.",
            "explanation": "A cushion can be the first financial shield.",
            "logText": "Free Match, Not Free Cash: Delay until emergency fund improves. Req: emergency fund below target. Outcome/effects: Cash safety first"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why is the match valuable?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Matching is powerful, but cash-flow safety still matters."
  },
  {
    "id": "ctx-orbit-energy-vampire-audit",
    "title": "The Plug-In Audit",
    "prompt": "A teacher says some plugged-in devices use a little energy even when idle. Your fictional household can save about $4 per month with a power strip habit.",
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
        "label": "Build the habit. Req: Discipline ≥ 35. Outcome/effects: Small monthly savings",
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
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "$4 × 12 = $48 per year.",
            "explanation": "$4 × 12 = $48 per year.",
            "logText": "The Plug-In Audit: Build the habit. Req: Discipline ≥ 35. Outcome/effects: Small monthly savings"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it. Req: none. Outcome/effects: Simpler routine",
        "description": "savings missed.",
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
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Skipping may be fine if the habit is too annoying.",
            "explanation": "Skipping may be fine if the habit is too annoying.",
            "logText": "The Plug-In Audit: Skip it. Req: none. Outcome/effects: Simpler routine"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Try it for one month, then decide. Req: none. Outcome/effects: Low commitment",
        "description": "future comparison.",
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
            "feedback": "A trial can test effort before making a rule.",
            "explanation": "A trial can test effort before making a rule.",
            "logText": "The Plug-In Audit: Try it for one month, then decide. Req: none. Outcome/effects: Low commitment"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why do small repeated savings matter?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Not every small saving deserves attention; the best habits are easy enough to keep."
  },
  {
    "id": "ctx-orbit-family-meal-budget-helper",
    "title": "Stretch the Meal Budget",
    "prompt": "A caregiver asks for help planning three low-cost dinners with $42. You are not asked for private family income; this is a fictional support event.",
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
        "label": "Plan $14 per dinner. Req: supportCircle.family. Outcome/effects: Equal planning",
        "description": "math clarity.",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "$42 ÷ 3 = $14 per dinner.",
            "explanation": "$42 ÷ 3 = $14 per dinner.",
            "logText": "Stretch the Meal Budget: Plan $14 per dinner. Req: supportCircle.family. Outcome/effects: Equal planning"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend $18 on one big dinner with leftovers. Req: Money Know-How ≥ 45. Outcome/effects: Possible efficiency",
        "description": "planning needed.",
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
            "feedback": "Leftovers can shift cost across days.",
            "explanation": "Leftovers can shift cost across days.",
            "logText": "Stretch the Meal Budget: Spend $18 on one big dinner with leftovers. Req: Money Know-How ≥ 45. Outcome/effects: Possible efficiency"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Suggest one community resource meal night. Req: communityProgramAccess. Outcome/effects: Cash pressure drops",
        "description": "schedule coordination.",
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
                "amount": -42
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Resources can be part of a plan without shame.",
            "explanation": "Resources can be part of a plan without shame.",
            "logText": "Stretch the Meal Budget: Suggest one community resource meal night. Req: communityProgramAccess. Outcome/effects: Cash pressure drops"
          }
        ]
      }
    ],
    "reflectionPrompt": "When does equal splitting help?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Helping with planning is not the same as revealing real household finances."
  },
  {
    "id": "ctx-orbit-fare-cap-week",
    "title": "Will You Hit the Fare Cap?",
    "prompt": "A transit card charges $2.75 per ride but caps weekly spending at $22. You expect 7 or 9 rides this week.",
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
        "label": "Pay per ride and track it. Req: none. Outcome/effects: 7 rides cost $19.25",
        "description": "9 rides hit the $22 cap.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -19
              }
            ],
            "feedback": "7 × $2.75 = $19.25, but 9 rides would be capped.",
            "explanation": "7 × $2.75 = $19.25, but 9 rides would be capped.",
            "logText": "Will You Hit the Fare Cap?: Pay per ride and track it. Req: none. Outcome/effects: 7 rides cost $19.25"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy a weekly pass for $24. Req: cash ≥ $24. Outcome/effects: Simple, but may cost more than the cap. Feedback: “Simple is useful, but this pass costs $2 more than the cap.” Reflect: “When is simplicity worth paying for?",
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
            "feedback": "Buy a weekly pass for $24. Req: cash ≥ $24. Outcome/effects: Simple, but may cost more than the cap. Feedback: “Simple is useful, but this pass costs $2 more than the cap.” Reflect: “When is simplicity worth paying for? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Buy a weekly pass for $24. Req: cash ≥ $24. Outcome/effects: Simple, but may cost more than the cap. Feedback: “Simple is useful, but this pass costs $2 more than the cap.” Reflect: “When is simplicity worth paying for? changes the route and creates a finance tradeoff to notice.",
            "logText": "Will You Hit the Fare Cap?: Buy a weekly pass for $24. Req: cash ≥ $24. Outcome/effects: Simple, but may cost more than the cap. Feedback: “Simple is useful, but this pass costs $2 more than the cap.” Reflect: “When is simplicity worth paying for?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to map rides before loading money. Req: supportCircle.mentor. Outcome/effects: Opportunity and money knowledge rise. Feedback: “Planning the route first helps you buy the right amount.” Reflect: “How did planning change the total?",
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
            "feedback": "Ask a mentor to map rides before loading money. Req: supportCircle.mentor. Outcome/effects: Opportunity and money knowledge rise. Feedback: “Planning the route first helps you buy the right amount.” Reflect: “How did planning change the total? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor to map rides before loading money. Req: supportCircle.mentor. Outcome/effects: Opportunity and money knowledge rise. Feedback: “Planning the route first helps you buy the right amount.” Reflect: “How did planning change the total? changes the route and creates a finance tradeoff to notice.",
            "logText": "Will You Hit the Fare Cap?: Ask a mentor to map rides before loading money. Req: supportCircle.mentor. Outcome/effects: Opportunity and money knowledge rise. Feedback: “Planning the route first helps you buy the right amount.” Reflect: “How did planning change the total?"
          }
        ]
      }
    ],
    "reflectionPrompt": "At what ride number does the cap help?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The cheapest plan depends on how many rides actually happen."
  },
  {
    "id": "ctx-orbit-fee-free-atm-map",
    "title": "The Out-of-Network Fee",
    "prompt": "The nearest ATM charges $3.50. A fee-free ATM is 12 minutes farther away. You need $20 cash.",
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
        "label": "Use the fee ATM. Req: hasChecking. Outcome/effects: Fast",
        "description": "$20 withdrawal costs $23.50 total.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -23
              }
            ],
            "feedback": "The fee is 17.5% of the cash you needed.",
            "explanation": "The fee is 17.5% of the cash you needed.",
            "logText": "The Out-of-Network Fee: Use the fee ATM. Req: hasChecking. Outcome/effects: Fast"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Walk to the fee-free ATM. Req: timeAvailable ≥ 15 minutes. Outcome/effects: Cash saved",
        "description": "time spent.",
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
            "feedback": "You traded 12 minutes for $3.50.",
            "explanation": "You traded 12 minutes for $3.50.",
            "logText": "The Out-of-Network Fee: Walk to the fee-free ATM. Req: timeAvailable ≥ 15 minutes. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use debit instead of cash. Req: merchant accepts debit. Outcome/effects: Avoids ATM",
        "description": "may reduce spending awareness.",
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
            "feedback": "Payment method can change both fees and habits.",
            "explanation": "Payment method can change both fees and habits.",
            "logText": "The Out-of-Network Fee: Use debit instead of cash. Req: merchant accepts debit. Outcome/effects: Avoids ATM"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was speed worth $3.50?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying a fee can be reasonable when safety, time, or access matters."
  },
  {
    "id": "ctx-orbit-final-values-map",
    "title": "What Your Money Choices Protected",
    "prompt": "The run ends with a values map. It shows which choices protected cash, safety, wellbeing, opportunity, support, or future flexibility.",
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
        "label": "Choose one habit to keep. Req: completed 5+ scenarios. Outcome/effects: Reflection badge",
        "description": "no moral ranking.",
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
                "amount": 5
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
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Habits matter more than one perfect choice.",
            "explanation": "Habits matter more than one perfect choice.",
            "logText": "What Your Money Choices Protected: Choose one habit to keep. Req: completed 5+ scenarios. Outcome/effects: Reflection badge"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose one recovery step. Req: any setback flag. Outcome/effects: Recovery path highlighted. Feedback: “A setback is not an ending",
        "description": "it is a route marker.”",
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
              }
            ],
            "feedback": "Choose one recovery step. Req: any setback flag. Outcome/effects: Recovery path highlighted. Feedback: “A setback is not an ending changes the route and creates a finance tradeoff to notice.",
            "explanation": "Choose one recovery step. Req: any setback flag. Outcome/effects: Recovery path highlighted. Feedback: “A setback is not an ending changes the route and creates a finance tradeoff to notice.",
            "logText": "What Your Money Choices Protected: Choose one recovery step. Req: any setback flag. Outcome/effects: Recovery path highlighted. Feedback: “A setback is not an ending"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Thank a support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people, not just numbers.” Reflect: “Who helped the route?",
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
              }
            ],
            "feedback": "Thank a support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people, not just numbers.” Reflect: “Who helped the route? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Thank a support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people, not just numbers.” Reflect: “Who helped the route? changes the route and creates a finance tradeoff to notice.",
            "logText": "What Your Money Choices Protected: Thank a support-circle role. Req: any support flag. Outcome/effects: Support awareness rises. Feedback: “Money choices often involve people, not just numbers.” Reflect: “Who helped the route?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Which habit helped most?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The capstone measures patterns, not worth as a person."
  },
  {
    "id": "ctx-orbit-friend-event-budget-cap",
    "title": "The Event Cap",
    "prompt": "Friends plan an outing. Your comfortable cap is $17, but the current plan may cost $28.",
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
        "label": "Say your cap and suggest a lower-cost version. Req: supportCircle.friend. Outcome/effects: Cash protected",
        "description": "boundary skill rises.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A number makes the boundary clear.",
            "explanation": "A number makes the boundary clear.",
            "logText": "The Event Cap: Say your cap and suggest a lower-cost version. Req: supportCircle.friend. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Go along with the $28 plan. Req: cash ≥ $28. Outcome/effects: Social ease",
        "description": "savings drops.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Fitting in can feel worth it, but it has a cost.",
            "explanation": "Fitting in can feel worth it, but it has a cost.",
            "logText": "The Event Cap: Go along with the $28 plan. Req: cash ≥ $28. Outcome/effects: Social ease"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip and suggest a free hangout later. Req: none. Outcome/effects: Cash saved",
        "description": "possible FOMO.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Skipping is easier when you offer another connection.",
            "explanation": "Skipping is easier when you offer another connection.",
            "logText": "The Event Cap: Skip and suggest a free hangout later. Req: none. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did you say it kindly?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Social spending is not wrong, but hidden pressure can break a budget."
  },
  {
    "id": "ctx-orbit-gift-card-balance-plan",
    "title": "The Almost-Empty Gift Card",
    "prompt": "A gift card has $6.43 left. The item you want is $8.99 before 7% tax.",
    "topics": [
      "taxes"
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
        "label": "Calculate before checkout. Req: none. Outcome/effects: Money knowledge rises",
        "description": "embarrassment risk drops.",
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
            "feedback": "$8.99 × 1.07 is about $9.62, so the card is short.",
            "explanation": "$8.99 × 1.07 is about $9.62, so the card is short.",
            "logText": "The Almost-Empty Gift Card: Calculate before checkout. Req: none. Outcome/effects: Money knowledge rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the card and pay the difference. Req: cash ≥ $3.19. Outcome/effects: Card cleared",
        "description": "cash drops.",
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
            "feedback": "Clearing a balance can be tidy, but you still spent cash.",
            "explanation": "Clearing a balance can be tidy, but you still spent cash.",
            "logText": "The Almost-Empty Gift Card: Use the card and pay the difference. Req: cash ≥ $3.19. Outcome/effects: Card cleared"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Save the card for a smaller need. Req: none. Outcome/effects: Spending delayed",
        "description": "balance remains.",
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
            "feedback": "Waiting protects cash if the purchase is not needed.",
            "explanation": "Waiting protects cash if the purchase is not needed.",
            "logText": "The Almost-Empty Gift Card: Save the card for a smaller need. Req: none. Outcome/effects: Spending delayed"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did estimating help?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Using leftover balance can be helpful or can nudge unnecessary spending."
  },
  {
    "id": "ctx-orbit-group-project-supply-fund",
    "title": "The Lab Poster Fund",
    "prompt": "A group project needs $18.75 of supplies. Five group members can split evenly or choose a different plan.",
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
        "label": "Split evenly: $3.75 each. Req: none. Outcome/effects: Simple and fair by person. Feedback: “$18.75 ÷ 5 = $3.75.” Reflect: “When is an equal split fair?",
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
            "feedback": "Split evenly: $3.75 each. Req: none. Outcome/effects: Simple and fair by person. Feedback: “$18.75 ÷ 5 = $3.75.” Reflect: “When is an equal split fair? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Split evenly: $3.75 each. Req: none. Outcome/effects: Simple and fair by person. Feedback: “$18.75 ÷ 5 = $3.75.” Reflect: “When is an equal split fair? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Lab Poster Fund: Split evenly: $3.75 each. Req: none. Outcome/effects: Simple and fair by person. Feedback: “$18.75 ÷ 5 = $3.75.” Reflect: “When is an equal split fair?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "One person buys, group repays with a record. Req: supportCircle.friend. Outcome/effects: Faster",
        "description": "repayment tracking needed.",
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
            "feedback": "Fronting money works better with names and amounts.",
            "explanation": "Fronting money works better with names and amounts.",
            "logText": "The Lab Poster Fund: One person buys, group repays with a record. Req: supportCircle.friend. Outcome/effects: Faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use class scrap materials and spend less. Req: Opportunity ≥ 45. Outcome/effects: Cost drops",
        "description": "design options limited.",
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
            "feedback": "Using available resources can change the budget.",
            "explanation": "Using available resources can change the budget.",
            "logText": "The Lab Poster Fund: Use class scrap materials and spend less. Req: Opportunity ≥ 45. Outcome/effects: Cost drops"
          }
        ]
      }
    ],
    "reflectionPrompt": "What would protect the buyer?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Equal, usage-based, and resource-saving plans can all be fair depending on the agreement."
  },
  {
    "id": "ctx-orbit-inflation-menu-reprice",
    "title": "The Menu Changed",
    "prompt": "Your small snack table used to sell an item for $2. Costs rose from $0.95 to $1.18 each.",
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
        "label": "Keep price at $2. Req: none. Outcome/effects: Customer-friendly",
        "description": "margin shrinks.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 2
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Profit drops from $1.05 to $0.82 per item.",
            "explanation": "Profit drops from $1.05 to $0.82 per item.",
            "logText": "The Menu Changed: Keep price at $2. Req: none. Outcome/effects: Customer-friendly"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Raise price to $2.25. Req: none. Outcome/effects: Margin improves",
        "description": "demand randomized.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 2
              }
            ],
            "feedback": "$2.25 − $1.18 = $1.07 per item.",
            "explanation": "$2.25 − $1.18 = $1.07 per item.",
            "logText": "The Menu Changed: Raise price to $2.25. Req: none. Outcome/effects: Margin improves"
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
            "logText": "The Menu Changed: Raise price to $2.25. Req: none. Outcome/effects: Margin improves met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Shrink waste instead of raising price. Req: Discipline ≥ 50. Outcome/effects: Efficiency improves",
        "description": "effort rises.",
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
            "feedback": "Reducing waste can protect profit without raising price.",
            "explanation": "Reducing waste can protect profit without raising price.",
            "logText": "The Menu Changed: Shrink waste instead of raising price. Req: Discipline ≥ 50. Outcome/effects: Efficiency improves"
          }
        ]
      }
    ],
    "reflectionPrompt": "How much margin did inflation remove?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Raising price, absorbing cost, and improving efficiency are all real business responses."
  },
  {
    "id": "ctx-orbit-insurance-deductible-savings-pocket",
    "title": "Can You Pay the Deductible?",
    "prompt": "A simplified insurance policy has a $250 deductible. You can set aside $20/month until you reach it.",
    "topics": [
      "saving",
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
        "label": "Start the deductible pocket. Req: cash flow can spare $20/month. Outcome/effects: Cash flow tighter",
        "description": "future claim readiness rises.",
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
            "feedback": "$250 ÷ $20 = 12.5 months, so about 13 months.",
            "explanation": "$250 ÷ $20 = 12.5 months, so about 13 months.",
            "logText": "Can You Pay the Deductible?: Start the deductible pocket. Req: cash flow can spare $20/month. Outcome/effects: Cash flow tighter"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose a lower deductible policy. Req: hasPolicyOptions. Outcome/effects: Premium higher",
        "description": "claim cash need lower.",
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
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Lower deductible often means higher premium.",
            "explanation": "Lower deductible often means higher premium.",
            "logText": "Can You Pay the Deductible?: Choose a lower deductible policy. Req: hasPolicyOptions. Outcome/effects: Premium higher"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and use general savings if needed. Req: savings ≥ $250. Outcome/effects: Flexible",
        "description": "less category discipline.",
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
                "amount": -20
              }
            ],
            "feedback": "General savings can work if you truly keep enough.",
            "explanation": "General savings can work if you truly keep enough.",
            "logText": "Can You Pay the Deductible?: Wait and use general savings if needed. Req: savings ≥ $250. Outcome/effects: Flexible"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why does coverage still need cash?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Insurance does not remove every cost; it changes which costs you must prepare for."
  },
  {
    "id": "ctx-orbit-internet-backup-plan",
    "title": "When the Connection Drops",
    "prompt": "You have an online assignment due. Your connection sometimes fails, so you compare backup options: bus to library $2.75 each way, ask mentor for hotspot, or risk waiting.",
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
        "label": "Travel to the library. Req: cash ≥ $5.50 or transit balance ≥ $5.50. Outcome/effects: Cost rises",
        "description": "deadline risk drops.",
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
            "feedback": "Two rides cost $5.50 total.",
            "explanation": "Two rides cost $5.50 total.",
            "logText": "When the Connection Drops: Travel to the library. Req: cash ≥ $5.50 or transit balance ≥ $5.50. Outcome/effects: Cost rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask a mentor about a hotspot. Req: supportCircle.mentor. Outcome/effects: Support and opportunity rise. Feedback: “Asking early gives people time to help.” Reflect: “How did timing affect support?",
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
            "feedback": "Ask a mentor about a hotspot. Req: supportCircle.mentor. Outcome/effects: Support and opportunity rise. Feedback: “Asking early gives people time to help.” Reflect: “How did timing affect support? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor about a hotspot. Req: supportCircle.mentor. Outcome/effects: Support and opportunity rise. Feedback: “Asking early gives people time to help.” Reflect: “How did timing affect support? changes the route and creates a finance tradeoff to notice.",
            "logText": "When the Connection Drops: Ask a mentor about a hotspot. Req: supportCircle.mentor. Outcome/effects: Support and opportunity rise. Feedback: “Asking early gives people time to help.” Reflect: “How did timing affect support?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Wait and hope the connection holds. Req: none. Outcome/effects: Cash saved",
        "description": "deadline risk rises.",
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
            "feedback": "Waiting costs nothing unless the risk happens.",
            "explanation": "Waiting costs nothing unless the risk happens.",
            "logText": "When the Connection Drops: Wait and hope the connection holds. Req: none. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is paying for backup worth it?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A backup can cost money or social effort, but it protects opportunity."
  },
  {
    "id": "ctx-orbit-inventory-markdown",
    "title": "The Unsold Stickers",
    "prompt": "You made 40 sticker packs for $0.80 each and planned to sell them for $2. Some are not selling.",
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
        "label": "Keep the $2 price. Req: none. Outcome/effects: Higher profit per sale",
        "description": "random slow sales.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 2
              }
            ],
            "feedback": "High margin only helps if items sell.",
            "explanation": "High margin only helps if items sell.",
            "logText": "The Unsold Stickers: Keep the $2 price. Req: none. Outcome/effects: Higher profit per sale"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": 2
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Unsold Stickers: Keep the $2 price. Req: none. Outcome/effects: Higher profit per sale met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Mark down to $1.50. Req: none. Outcome/effects: Faster sales possible",
        "description": "profit per pack drops.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 2
              }
            ],
            "feedback": "$1.50 − $0.80 = $0.70 profit per sold pack.",
            "explanation": "$1.50 − $0.80 = $0.70 profit per sold pack.",
            "logText": "The Unsold Stickers: Mark down to $1.50. Req: none. Outcome/effects: Faster sales possible"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Bundle 3 packs for $4. Req: Money Know-How ≥ 50. Outcome/effects: Moves inventory",
        "description": "math gets trickier.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 2
              }
            ],
            "feedback": "$4 ÷ 3 is about $1.33 each.",
            "explanation": "$4 ÷ 3 is about $1.33 each.",
            "logText": "The Unsold Stickers: Bundle 3 packs for $4. Req: Money Know-How ≥ 50. Outcome/effects: Moves inventory"
          }
        ]
      }
    ],
    "reflectionPrompt": "What does inventory sitting cost?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Profit per item and total profit are not the same."
  },
  {
    "id": "ctx-orbit-invoice-before-favor",
    "title": "Before You Help",
    "prompt": "A friend’s family asks you to design a simple flyer for $20. They say, “We’ll pay you later.",
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
        "label": "Write a simple agreement first. Req: none. Outcome/effects: Trust may feel formal",
        "description": "payment clarity rises.",
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
            "feedback": "Clear terms protect both sides.",
            "explanation": "Clear terms protect both sides.",
            "logText": "Before You Help: Write a simple agreement first. Req: none. Outcome/effects: Trust may feel formal"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Do it with no agreement. Req: supportCircle.friend. Outcome/effects: Faster and friendly",
        "description": "payment confusion risk.",
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
            "feedback": "Friendliness does not replace clarity.",
            "explanation": "Friendliness does not replace clarity.",
            "logText": "Before You Help: Do it with no agreement. Req: supportCircle.friend. Outcome/effects: Faster and friendly"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Offer it as a gift and expect no payment. Req: none. Outcome/effects: Wellbeing/support rises",
        "description": "cash not expected.",
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
            "feedback": "Calling it a gift prevents resentment.",
            "explanation": "Calling it a gift prevents resentment.",
            "logText": "Before You Help: Offer it as a gift and expect no payment. Req: none. Outcome/effects: Wellbeing/support rises"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why can a written note be kind?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The healthiest choice depends on whether the work is paid, gifted, or traded."
  },
  {
    "id": "ctx-orbit-lease-renewal-notice",
    "title": "Renew, Move, or Negotiate?",
    "prompt": "Rent would rise from $800 to $846. Moving might cost about $350 upfront but could save $40/month.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Renew at $846. Req: cash flow can cover new rent. Outcome/effects: Stability preserved",
        "description": "monthly cost rises.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -46
              }
            ],
            "feedback": "$46 more each month is $552 more per year.",
            "explanation": "$46 more each month is $552 more per year.",
            "logText": "Renew, Move, or Negotiate?: Renew at $846. Req: cash flow can cover new rent. Outcome/effects: Stability preserved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Move to the cheaper place. Req: savings ≥ $350. Outcome/effects: Upfront cash drops",
        "description": "monthly cost may fall.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -350
              }
            ],
            "feedback": "$350 ÷ $40 = about 9 months to break even.",
            "explanation": "$350 ÷ $40 = about 9 months to break even.",
            "logText": "Renew, Move, or Negotiate?: Move to the cheaper place. Req: savings ≥ $350. Outcome/effects: Upfront cash drops"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask about a smaller increase or longer lease. Req: Opportunity ≥ 55. Outcome/effects: Negotiation may help",
        "description": "not guaranteed.",
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
                "amount": -350
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "A polite ask sometimes creates options.",
            "explanation": "A polite ask sometimes creates options.",
            "logText": "Renew, Move, or Negotiate?: Ask about a smaller increase or longer lease. Req: Opportunity ≥ 55. Outcome/effects: Negotiation may help"
          }
        ]
      }
    ],
    "reflectionPrompt": "What is stability worth?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Moving can save money long-term but costs cash, time, and stress upfront."
  },
  {
    "id": "ctx-orbit-library-hotspot-deposit",
    "title": "The Borrowed Hotspot",
    "prompt": "A community program lends a portable hotspot for schoolwork. It is free to use, but a $15 refundable deposit is held until it comes back on time and undamaged. Your internet has been unreliable this month.",
    "topics": [
      "credit",
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
        "label": "Borrow it and set a return reminder. Req: communityProgramAccess. Outcome/effects: School access improves",
        "description": "$15 is temporarily not spendable.",
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
            "feedback": "Free access can still tie up cash until the deposit returns.",
            "explanation": "Free access can still tie up cash until the deposit returns.",
            "logText": "The Borrowed Hotspot: Borrow it and set a return reminder. Req: communityProgramAccess. Outcome/effects: School access improves"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask a caregiver or mentor to help track the due date. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Trust and safety rise",
        "description": "you practice asking for support.",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Support can turn a good resource into a reliable plan.",
            "explanation": "Support can turn a good resource into a reliable plan.",
            "logText": "The Borrowed Hotspot: Ask a caregiver or mentor to help track the due date. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Trust and safety rise"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip it and use public computers only. Req: none. Outcome/effects: Cash stays free",
        "description": "schedule flexibility drops.",
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
            "feedback": "Skipping the deposit protects cash, but access may be less convenient.",
            "explanation": "Skipping the deposit protects cash, but access may be less convenient.",
            "logText": "The Borrowed Hotspot: Skip it and use public computers only. Req: none. Outcome/effects: Cash stays free"
          }
        ]
      }
    ],
    "reflectionPrompt": "How is a refundable deposit different from a price?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Borrowing is not “free” if the deposit creates a cash squeeze, but it can protect school opportunity."
  },
  {
    "id": "ctx-orbit-loan-cosign-pressure",
    "title": "Please Co-Sign?",
    "prompt": "A friend asks future-you to co-sign a small loan. You care about the friend, but co-signing means you may owe the money if they do not pay.",
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
        "label": "Decline kindly and offer budgeting help. Req: none. Outcome/effects: Safety protected",
        "description": "relationship handled carefully.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "A kind no can still be support.",
            "explanation": "A kind no can still be support.",
            "logText": "Please Co-Sign?: Decline kindly and offer budgeting help. Req: none. Outcome/effects: Safety protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Co-sign after reviewing the payment plan. Req: age ≥ 18, Credit ≥ 700, trust ≥ 70. Outcome/effects: Friend helped",
        "description": "your credit risk rises.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Co-signing is a real obligation, not a character reference.",
            "explanation": "Co-signing is a real obligation, not a character reference.",
            "logText": "Please Co-Sign?: Co-sign after reviewing the payment plan. Req: age ≥ 18, Credit ≥ 700, trust ≥ 70. Outcome/effects: Friend helped"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to talk through it first. Req: supportCircle.mentor. Outcome/effects: Money knowledge and safety rise. Feedback: “Big relationship-money choices deserve outside perspective.” Reflect: “What question changed the choice?",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Ask a mentor to talk through it first. Req: supportCircle.mentor. Outcome/effects: Money knowledge and safety rise. Feedback: “Big relationship-money choices deserve outside perspective.” Reflect: “What question changed the choice? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor to talk through it first. Req: supportCircle.mentor. Outcome/effects: Money knowledge and safety rise. Feedback: “Big relationship-money choices deserve outside perspective.” Reflect: “What question changed the choice? changes the route and creates a finance tradeoff to notice.",
            "logText": "Please Co-Sign?: Ask a mentor to talk through it first. Req: supportCircle.mentor. Outcome/effects: Money knowledge and safety rise. Feedback: “Big relationship-money choices deserve outside perspective.” Reflect: “What question changed the choice?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What help did you offer instead?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Helping someone financially can be generous and risky at the same time."
  },
  {
    "id": "ctx-orbit-marketplace-return-window",
    "title": "The Return Window Is Closing",
    "prompt": "You bought a used calculator for $31, but a key sticks. The seller allows returns within 5 days if you kept the receipt.",
    "topics": [
      "investing",
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
        "label": "Return it now with the receipt. Req: proofItems.receipt. Outcome/effects: Cash likely restored",
        "description": "problem solved.",
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
            "feedback": "Proof turns a complaint into a clear request.",
            "explanation": "Proof turns a complaint into a clear request.",
            "logText": "The Return Window Is Closing: Return it now with the receipt. Req: proofItems.receipt. Outcome/effects: Cash likely restored"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Try to fix it yourself first. Req: none. Outcome/effects: Possible repair",
        "description": "return window may close.",
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
            "feedback": "Trying first might work, but time is part of the decision.",
            "explanation": "Trying first might work, but time is part of the decision.",
            "logText": "The Return Window Is Closing: Try to fix it yourself first. Req: none. Outcome/effects: Possible repair"
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
            "logText": "The Return Window Is Closing: Try to fix it yourself first. Req: none. Outcome/effects: Possible repair met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Resell it honestly as imperfect. Req: none. Outcome/effects: Some money recovered",
        "description": "reputation stays safe.",
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
                "amount": -2
              }
            ],
            "feedback": "Honesty protects trust, even if resale is lower.",
            "explanation": "Honesty protects trust, even if resale is lower.",
            "logText": "The Return Window Is Closing: Resell it honestly as imperfect. Req: none. Outcome/effects: Some money recovered"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the receipt make possible?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Repairing can save hassle, but a deadline can make quick action better."
  },
  {
    "id": "ctx-orbit-meal-kit-or-grocery",
    "title": "Three Dinners, Two Ways",
    "prompt": "A three-dinner kit costs $39. Buying ingredients yourself costs about $27, but takes an extra hour to plan and prep.",
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
        "label": "Choose the kit. Req: cash ≥ $39. Outcome/effects: Cash down more",
        "description": "time and stress down.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
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
            "feedback": "You paid $12 more to save time and planning.",
            "explanation": "You paid $12 more to save time and planning.",
            "logText": "Three Dinners, Two Ways: Choose the kit. Req: cash ≥ $39. Outcome/effects: Cash down more"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Shop ingredients yourself. Req: cash ≥ $27. Outcome/effects: Cash saved",
        "description": "time cost rises.",
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
                "amount": -39
              }
            ],
            "feedback": "$39 − $27 = $12 saved, but not free time.",
            "explanation": "$39 − $27 = $12 saved, but not free time.",
            "logText": "Three Dinners, Two Ways: Shop ingredients yourself. Req: cash ≥ $27. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Cook one meal and use leftovers. Req: Discipline ≥ 45. Outcome/effects: Cash and time both improve if the plan works. Feedback: “Planning leftovers stretches ingredients.” Reflect: “How can one choice help two meals?",
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
                "type": "stat",
                "stat": "discipline",
                "amount": 3
              }
            ],
            "feedback": "Cook one meal and use leftovers. Req: Discipline ≥ 45. Outcome/effects: Cash and time both improve if the plan works. Feedback: “Planning leftovers stretches ingredients.” Reflect: “How can one choice help two meals? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Cook one meal and use leftovers. Req: Discipline ≥ 45. Outcome/effects: Cash and time both improve if the plan works. Feedback: “Planning leftovers stretches ingredients.” Reflect: “How can one choice help two meals? changes the route and creates a finance tradeoff to notice.",
            "logText": "Three Dinners, Two Ways: Cook one meal and use leftovers. Req: Discipline ≥ 45. Outcome/effects: Cash and time both improve if the plan works. Feedback: “Planning leftovers stretches ingredients.” Reflect: “How can one choice help two meals?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What was your time worth here?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Convenience is not wasteful when time or energy is tight; it just has a price."
  },
  {
    "id": "ctx-orbit-mentor-mock-interview",
    "title": "Practice Before the Interview",
    "prompt": "A future internship interview is coming up. You can practice with a mentor or spend the evening earning $18 from a small task.",
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
        "label": "Do the mock interview. Req: supportCircle.mentor. Outcome/effects: Opportunity rises",
        "description": "cash opportunity missed.",
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
            "feedback": "Practice can be a non-cash investment.",
            "explanation": "Practice can be a non-cash investment.",
            "logText": "Practice Before the Interview: Do the mock interview. Req: supportCircle.mentor. Outcome/effects: Opportunity rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Earn the $18. Req: none. Outcome/effects: Cash rises",
        "description": "interview prep lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 18
              },
              {
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Short-term income has real value.",
            "explanation": "Short-term income has real value.",
            "logText": "Practice Before the Interview: Earn the $18. Req: none. Outcome/effects: Cash rises"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split time: shorter practice and smaller task. Req: Discipline ≥ 50. Outcome/effects: Balanced",
        "description": "less depth.",
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
            "feedback": "A partial plan can reduce extremes.",
            "explanation": "A partial plan can reduce extremes.",
            "logText": "Practice Before the Interview: Split time: shorter practice and smaller task. Req: Discipline ≥ 50. Outcome/effects: Balanced"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did practice improve?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Not every valuable investment is bought with money."
  },
  {
    "id": "ctx-orbit-mentor-tax-document-checklist",
    "title": "Where Did the Form Go?",
    "prompt": "A first job sends a tax form in the simplified game. You need it later to file.",
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
        "label": "Save it in your proof folder. Req: proofFolderEnabled. Outcome/effects: Future tax task easier. Feedback: “Future you benefits from present organization.” Reflect: “Where would you find it later?",
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
            "feedback": "Save it in your proof folder. Req: proofFolderEnabled. Outcome/effects: Future tax task easier. Feedback: “Future you benefits from present organization.” Reflect: “Where would you find it later? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Save it in your proof folder. Req: proofFolderEnabled. Outcome/effects: Future tax task easier. Feedback: “Future you benefits from present organization.” Reflect: “Where would you find it later? changes the route and creates a finance tradeoff to notice.",
            "logText": "Where Did the Form Go?: Save it in your proof folder. Req: proofFolderEnabled. Outcome/effects: Future tax task easier. Feedback: “Future you benefits from present organization.” Reflect: “Where would you find it later?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask mentor/caregiver what to keep. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and money knowledge rise. Feedback: “Adults often use checklists for important forms.” Reflect: “What rule did you learn?",
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
            "feedback": "Ask mentor/caregiver what to keep. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and money knowledge rise. Feedback: “Adults often use checklists for important forms.” Reflect: “What rule did you learn? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask mentor/caregiver what to keep. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and money knowledge rise. Feedback: “Adults often use checklists for important forms.” Reflect: “What rule did you learn? changes the route and creates a finance tradeoff to notice.",
            "logText": "Where Did the Form Go?: Ask mentor/caregiver what to keep. Req: supportCircle.mentor or supportCircle.family. Outcome/effects: Support and money knowledge rise. Feedback: “Adults often use checklists for important forms.” Reflect: “What rule did you learn?"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ignore it for now. Req: none. Outcome/effects: Less effort now",
        "description": "future scramble risk.",
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
            "feedback": "Important documents feel boring until the deadline.",
            "explanation": "Important documents feel boring until the deadline.",
            "logText": "Where Did the Form Go?: Ignore it for now. Req: none. Outcome/effects: Less effort now"
          }
        ]
      }
    ],
    "reflectionPrompt": "What reminder would help?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Organization is a low-drama skill with high future value."
  },
  {
    "id": "ctx-orbit-micro-cert-renewal-date",
    "title": "The Certification Clock",
    "prompt": "A short online certification costs $47 and could help with a future job, but it expires in two years unless renewed.",
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
        "label": "Earn it now. Req: cash ≥ $47 and Discipline ≥ 50. Outcome/effects: Opportunity rises",
        "description": "future renewal flag starts.",
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
                "stat": "discipline",
                "amount": 3
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "A credential can be an asset, but it may need upkeep.",
            "explanation": "A credential can be an asset, but it may need upkeep.",
            "logText": "The Certification Clock: Earn it now. Req: cash ≥ $47 and Discipline ≥ 50. Outcome/effects: Opportunity rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until closer to applying. Req: none. Outcome/effects: Cash protected",
        "description": "opportunity delayed.",
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
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Waiting can reduce expiration risk.",
            "explanation": "Waiting can reduce expiration risk.",
            "logText": "The Certification Clock: Wait until closer to applying. Req: none. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Find a free intro course first. Req: communityProgramAccess. Outcome/effects: Money knowledge rises",
        "description": "no credential yet.",
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
              }
            ],
            "feedback": "Testing interest before paying lowers risk.",
            "explanation": "Testing interest before paying lowers risk.",
            "logText": "The Certification Clock: Find a free intro course first. Req: communityProgramAccess. Outcome/effects: Money knowledge rises"
          }
        ]
      }
    ],
    "reflectionPrompt": "How long will this value last?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Credentials can open doors, but paying too early can waste time-limited value."
  },
  {
    "id": "ctx-orbit-military-benefit-briefing",
    "title": "Read the Benefit Briefing",
    "prompt": "In a neutral pathway-planning event, a military option includes training and benefits but also major commitments and rules. You need reliable information before comparing it with college, trade, or work-first routes.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Attend an official briefing and take notes. Req: none. Outcome/effects: Money knowledge rises",
        "description": "commitment understanding improves.",
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
            "feedback": "Big commitments need official details.",
            "explanation": "Big commitments need official details.",
            "logText": "Read the Benefit Briefing: Attend an official briefing and take notes. Req: none. Outcome/effects: Money knowledge rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Decide based on a friend’s story. Req: supportCircle.friend. Outcome/effects: Personal perspective gained",
        "description": "incomplete information risk.",
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
            "feedback": "Stories help, but one story is not the whole path.",
            "explanation": "Stories help, but one story is not the whole path.",
            "logText": "Read the Benefit Briefing: Decide based on a friend’s story. Req: supportCircle.friend. Outcome/effects: Personal perspective gained"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Compare with a mentor using a pathway chart. Req: supportCircle.mentor. Outcome/effects: Opportunity and source skill rise. Feedback: “Comparison works best when every path uses the same categories.” Reflect: “Which category mattered most?",
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
            "feedback": "Compare with a mentor using a pathway chart. Req: supportCircle.mentor. Outcome/effects: Opportunity and source skill rise. Feedback: “Comparison works best when every path uses the same categories.” Reflect: “Which category mattered most? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Compare with a mentor using a pathway chart. Req: supportCircle.mentor. Outcome/effects: Opportunity and source skill rise. Feedback: “Comparison works best when every path uses the same categories.” Reflect: “Which category mattered most? changes the route and creates a finance tradeoff to notice.",
            "logText": "Read the Benefit Briefing: Compare with a mentor using a pathway chart. Req: supportCircle.mentor. Outcome/effects: Opportunity and source skill rise. Feedback: “Comparison works best when every path uses the same categories.” Reflect: “Which category mattered most?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you learn that was not just money?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Pathways are not ranked; they differ in time, rules, benefits, risk, and fit."
  },
  {
    "id": "ctx-orbit-minimum-balance-calendar",
    "title": "The Balance That Waives the Fee",
    "prompt": "An account waives a $6 monthly fee if the balance stays at least $200 every day. You have $215 now, but a $24 charge is pending.",
    "topics": [
      "consumer-skills",
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
        "label": "Transfer $25 from savings before the charge clears. Req: hasChecking and savings ≥ $25. Outcome/effects: Fee avoided",
        "description": "savings dips.",
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
            "feedback": "$215 − $24 = $191, so the fee rule would fail.",
            "explanation": "$215 − $24 = $191, so the fee rule would fail.",
            "logText": "The Balance That Waives the Fee: Transfer $25 from savings before the charge clears. Req: hasChecking and savings ≥ $25. Outcome/effects: Fee avoided"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Do nothing. Req: hasChecking. Outcome/effects: Savings untouched",
        "description": "possible $6 fee.",
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
            "feedback": "The account looked safe before the pending charge.",
            "explanation": "The account looked safe before the pending charge.",
            "logText": "The Balance That Waives the Fee: Do nothing. Req: hasChecking. Outcome/effects: Savings untouched"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Switch to a no-minimum account. Req: Money Know-How ≥ 55. Outcome/effects: Less fee risk",
        "description": "maybe fewer features.",
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
            "feedback": "Account fit matters more than fancy features.",
            "explanation": "Account fit matters more than fancy features.",
            "logText": "The Balance That Waives the Fee: Switch to a no-minimum account. Req: Money Know-How ≥ 55. Outcome/effects: Less fee risk"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did pending charges matter?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Minimum-balance accounts can work, but only if cash timing is steady."
  },
  {
    "id": "ctx-orbit-overtime-or-study-night",
    "title": "Time-and-a-Half?",
    "prompt": "A job offers 3 extra hours at time-and-a-half. Your regular pay is $12/hour, but you also have a study night.",
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
        "label": "Take the overtime. Req: hasIncome. Outcome/effects: Gross pay rises by $54",
        "description": "wellbeing/study time may drop.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -54
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": 3
              }
            ],
            "feedback": "Time-and-a-half is $18/hour; 3 × $18 = $54.",
            "explanation": "Time-and-a-half is $18/hour; 3 × $18 = $54.",
            "logText": "Time-and-a-Half?: Take the overtime. Req: hasIncome. Outcome/effects: Gross pay rises by $54"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Protect study night. Req: none. Outcome/effects: Opportunity/study protected",
        "description": "cash missed.",
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
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "Saying no can protect long-term opportunity.",
            "explanation": "Saying no can protect long-term opportunity.",
            "logText": "Time-and-a-Half?: Protect study night. Req: none. Outcome/effects: Opportunity/study protected"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask family/mentor to help plan the week. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Better schedule",
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
                "type": "cash",
                "amount": -12
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
            "feedback": "Support can help you see the whole week.",
            "explanation": "Support can help you see the whole week.",
            "logText": "Time-and-a-Half?: Ask family/mentor to help plan the week. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Better schedule"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the extra pay cost?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Higher hourly pay is attractive, but time and energy are limited resources."
  },
  {
    "id": "ctx-orbit-paid-training-unpaid-course",
    "title": "Training That Pays or Costs",
    "prompt": "You compare paid training at $11/hour for 8 hours/week with a free unpaid course that could lead to higher pay later.",
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
        "label": "Choose paid training. Req: none. Outcome/effects: Income now",
        "description": "slower credential path.",
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
            "feedback": "Earning while learning helps cash flow.",
            "explanation": "Earning while learning helps cash flow.",
            "logText": "Training That Pays or Costs: Choose paid training. Req: none. Outcome/effects: Income now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose the unpaid course. Req: savings cushion ≥ $80. Outcome/effects: Opportunity may rise",
        "description": "short-term cash pressure.",
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
            "feedback": "A cushion can make unpaid learning possible.",
            "explanation": "A cushion can make unpaid learning possible.",
            "logText": "Training That Pays or Costs: Choose the unpaid course. Req: savings cushion ≥ $80. Outcome/effects: Opportunity may rise"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Combine a shorter course with fewer work hours. Req: Discipline ≥ 55. Outcome/effects: Balanced but busy. Feedback: “Hybrid plans trade speed for stability.” Reflect: “What schedule pressure appears?",
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
            "feedback": "Combine a shorter course with fewer work hours. Req: Discipline ≥ 55. Outcome/effects: Balanced but busy. Feedback: “Hybrid plans trade speed for stability.” Reflect: “What schedule pressure appears? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Combine a shorter course with fewer work hours. Req: Discipline ≥ 55. Outcome/effects: Balanced but busy. Feedback: “Hybrid plans trade speed for stability.” Reflect: “What schedule pressure appears? changes the route and creates a finance tradeoff to notice.",
            "logText": "Training That Pays or Costs: Combine a shorter course with fewer work hours. Req: Discipline ≥ 55. Outcome/effects: Balanced but busy. Feedback: “Hybrid plans trade speed for stability.” Reflect: “What schedule pressure appears?"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why did current income matter?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paid routes and unpaid routes can both be smart depending on cash, time, and goals."
  },
  {
    "id": "ctx-orbit-pay-frequency-puzzle",
    "title": "Same Pay, Different Timing",
    "prompt": "Job A pays $120 weekly. Job B pays $240 every two weeks. The total is the same, but your bills are weekly.",
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
        "label": "Choose weekly pay. Req: none. Outcome/effects: Timing matches bills",
        "description": "less money per check.",
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
            "feedback": "Weekly pay can make small bills easier to match.",
            "explanation": "Weekly pay can make small bills easier to match.",
            "logText": "Same Pay, Different Timing: Choose weekly pay. Req: none. Outcome/effects: Timing matches bills"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Choose biweekly pay and budget by week. Req: Discipline ≥ 45. Outcome/effects: Same income",
        "description": "requires splitting the check.",
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
            "feedback": "$240 ÷ 2 = $120 per week if you hold half.",
            "explanation": "$240 ÷ 2 = $120 per week if you hold half.",
            "logText": "Same Pay, Different Timing: Choose biweekly pay and budget by week. Req: Discipline ≥ 45. Outcome/effects: Same income"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose based on commute and schedule instead. Req: none. Outcome/effects: Whole-life comparison improves. Feedback: “Pay timing matters, but it is not the only factor.” Reflect: “What else belongs in a job choice?",
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
            "feedback": "Choose based on commute and schedule instead. Req: none. Outcome/effects: Whole-life comparison improves. Feedback: “Pay timing matters, but it is not the only factor.” Reflect: “What else belongs in a job choice? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Choose based on commute and schedule instead. Req: none. Outcome/effects: Whole-life comparison improves. Feedback: “Pay timing matters, but it is not the only factor.” Reflect: “What else belongs in a job choice? changes the route and creates a finance tradeoff to notice.",
            "logText": "Same Pay, Different Timing: Choose based on commute and schedule instead. Req: none. Outcome/effects: Whole-life comparison improves. Feedback: “Pay timing matters, but it is not the only factor.” Reflect: “What else belongs in a job choice?"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did timing matter?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Same total pay can feel different if bills land before the next check."
  },
  {
    "id": "ctx-orbit-paycheck-deduction-choice",
    "title": "Benefits or Take-Home?",
    "prompt": "Future-you can choose a benefit that costs $18 per paycheck. You are paid twice a month.",
    "topics": [
      "life-after-high-school"
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
        "label": "Choose the benefit. Req: hasSteadyIncome. Outcome/effects: Protection/support rises",
        "description": "take-home drops by $36/month.",
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
            "feedback": "$18 × 2 = $36 per month.",
            "explanation": "$18 × 2 = $36 per month.",
            "logText": "Benefits or Take-Home?: Choose the benefit. Req: hasSteadyIncome. Outcome/effects: Protection/support rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it for now. Req: none. Outcome/effects: Take-home higher",
        "description": "protection lower.",
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
            "feedback": "More take-home pay can help tight budgets.",
            "explanation": "More take-home pay can help tight budgets.",
            "logText": "Benefits or Take-Home?: Skip it for now. Req: none. Outcome/effects: Take-home higher"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose it after building a cushion. Req: emergency fund below target. Outcome/effects: Delayed protection",
        "description": "savings first.",
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
                "amount": -3
              }
            ],
            "feedback": "Sequencing choices can reduce stress.",
            "explanation": "Sequencing choices can reduce stress.",
            "logText": "Benefits or Take-Home?: Choose it after building a cushion. Req: emergency fund below target. Outcome/effects: Delayed protection"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did lower net pay buy?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "A lower paycheck is not automatically worse if the deduction buys useful protection."
  },
  {
    "id": "ctx-orbit-pet-sitting-calendar",
    "title": "Pet-Sitting Schedule Math",
    "prompt": "A neighbor offers $9 per visit to feed a pet. You can do 6 visits, but one conflicts with a family plan.",
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
        "label": "Accept all 6 and ask family to adjust. Req: supportCircle.family. Outcome/effects: Up to $54 gross",
        "description": "family trust may strain or improve.",
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
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Income choices can affect other people’s schedules.",
            "explanation": "Income choices can affect other people’s schedules.",
            "logText": "Pet-Sitting Schedule Math: Accept all 6 and ask family to adjust. Req: supportCircle.family. Outcome/effects: Up to $54 gross"
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
            "logText": "Pet-Sitting Schedule Math: Accept all 6 and ask family to adjust. Req: supportCircle.family. Outcome/effects: Up to $54 gross met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Accept 5 visits only. Req: none. Outcome/effects: $45 income",
        "description": "lower conflict.",
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
            "feedback": "You gave up $9 to protect a commitment.",
            "explanation": "You gave up $9 to protect a commitment.",
            "logText": "Pet-Sitting Schedule Math: Accept 5 visits only. Req: none. Outcome/effects: $45 income"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Share one visit with a trusted friend. Req: supportCircle.friend. Outcome/effects: Income split",
        "description": "reliability randomized.",
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
                "type": "relationship",
                "relationshipId": "pet",
                "closeness": 2,
                "support": 1
              }
            ],
            "feedback": "Delegating requires clear rules.",
            "explanation": "Delegating requires clear rules.",
            "logText": "Pet-Sitting Schedule Math: Share one visit with a trusted friend. Req: supportCircle.friend. Outcome/effects: Income split"
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
            "logText": "Pet-Sitting Schedule Math: Share one visit with a trusted friend. Req: supportCircle.friend. Outcome/effects: Income split met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Who else did the job affect?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "More income is not automatically better if it strains reliability or trust."
  },
  {
    "id": "ctx-orbit-portfolio-hosting-choice",
    "title": "Where Your Portfolio Lives",
    "prompt": "You want a simple online portfolio for future applications. A free option has a long address; a paid option is $3.75/month.",
    "topics": [
      "investing",
      "life-after-high-school",
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
        "label": "Use the free option. Req: none. Outcome/effects: Cash protected",
        "description": "less polished link.",
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
            "feedback": "Free works if it meets the goal.",
            "explanation": "Free works if it meets the goal.",
            "logText": "Where Your Portfolio Lives: Use the free option. Req: none. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay for the short link. Req: cash flow can cover $3.75/month. Outcome/effects: Professional feel",
        "description": "annual cost $45.",
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
            "feedback": "$3.75 × 12 = $45 per year.",
            "explanation": "$3.75 × 12 = $45 per year.",
            "logText": "Where Your Portfolio Lives: Pay for the short link. Req: cash flow can cover $3.75/month. Outcome/effects: Professional feel"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to review the free version first. Req: supportCircle.mentor. Outcome/effects: Opportunity rises without immediate cost. Feedback: “Feedback may improve value before spending.” Reflect: “What did review add?",
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
            "feedback": "Ask a mentor to review the free version first. Req: supportCircle.mentor. Outcome/effects: Opportunity rises without immediate cost. Feedback: “Feedback may improve value before spending.” Reflect: “What did review add? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor to review the free version first. Req: supportCircle.mentor. Outcome/effects: Opportunity rises without immediate cost. Feedback: “Feedback may improve value before spending.” Reflect: “What did review add? changes the route and creates a finance tradeoff to notice.",
            "logText": "Where Your Portfolio Lives: Ask a mentor to review the free version first. Req: supportCircle.mentor. Outcome/effects: Opportunity rises without immediate cost. Feedback: “Feedback may improve value before spending.” Reflect: “What did review add?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What matters more than polish?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Paying for presentation can be worthwhile, but only after the content is strong."
  },
  {
    "id": "ctx-orbit-qr-cashier-check",
    "title": "Scan Before You Send",
    "prompt": "At a fundraiser table, a QR code asks for $12. Two similar payment names appear, and the line behind you is moving fast.",
    "topics": [
      "investing",
      "banking",
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
        "label": "Confirm the name with the cashier before sending. Req: none. Outcome/effects: Safety rises",
        "description": "the line takes a few extra seconds.",
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
            "feedback": "A short pause can prevent money from going to the wrong place.",
            "explanation": "A short pause can prevent money from going to the wrong place.",
            "logText": "Scan Before You Send: Confirm the name with the cashier before sending. Req: none. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Send to the first matching name. Req: none. Outcome/effects: Fast",
        "description": "randomized wrong-recipient risk.",
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
            "feedback": "Speed helped the line, but it raised the chance of an error.",
            "explanation": "Speed helped the line, but it raised the chance of an error.",
            "logText": "Scan Before You Send: Send to the first matching name. Req: none. Outcome/effects: Fast"
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
            "logText": "Scan Before You Send: Send to the first matching name. Req: none. Outcome/effects: Fast met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Pay cash from your envelope instead. Req: cash ≥ $12. Outcome/effects: No digital risk",
        "description": "cash on hand drops.",
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
            "feedback": "Cash avoids app errors but gives you less digital proof.",
            "explanation": "Cash avoids app errors but gives you less digital proof.",
            "logText": "Scan Before You Send: Pay cash from your envelope instead. Req: cash ≥ $12. Outcome/effects: No digital risk"
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
            "logText": "Scan Before You Send: Pay cash from your envelope instead. Req: cash ≥ $12. Outcome/effects: No digital risk met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you verify?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Digital payment is convenient; the safer move is adding friction before sending."
  },
  {
    "id": "ctx-orbit-rainy-day-ride-fund",
    "title": "Backup Ride Money",
    "prompt": "Your main ride plan is usually free, but delays happen. You can keep a $14 backup ride fund.",
    "topics": [
      "investing"
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
        "label": "Keep the $14 backup fund. Req: savings ≥ $14. Outcome/effects: Less spendable cash",
        "description": "opportunity protected.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 14
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": 3
              }
            ],
            "feedback": "A small backup can prevent a missed event.",
            "explanation": "A small backup can prevent a missed event.",
            "logText": "Backup Ride Money: Keep the $14 backup fund. Req: savings ≥ $14. Outcome/effects: Less spendable cash"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Spend the $14 now. Req: none. Outcome/effects: More enjoyment",
        "description": "random transport risk later.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -14
              }
            ],
            "feedback": "Spending now is real value, but it removes protection.",
            "explanation": "Spending now is real value, but it removes protection.",
            "logText": "Backup Ride Money: Spend the $14 now. Req: none. Outcome/effects: More enjoyment"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -14
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Backup Ride Money: Spend the $14 now. Req: none. Outcome/effects: More enjoyment met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a caregiver/mentor to plan a backup route. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Backup plans do not always require cash.” Reflect: “What non-money support helped?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 14
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
            "feedback": "Ask a caregiver/mentor to plan a backup route. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Backup plans do not always require cash.” Reflect: “What non-money support helped? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a caregiver/mentor to plan a backup route. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Backup plans do not always require cash.” Reflect: “What non-money support helped? changes the route and creates a finance tradeoff to notice.",
            "logText": "Backup Ride Money: Ask a caregiver/mentor to plan a backup route. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Backup plans do not always require cash.” Reflect: “What non-money support helped?"
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
            "logText": "Backup Ride Money: Ask a caregiver/mentor to plan a backup route. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Backup plans do not always require cash.” Reflect: “What non-money support helped? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the fund protect besides money?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "A backup fund may sit unused, which can mean it worked."
  },
  {
    "id": "ctx-orbit-renter-deposit-photo-log",
    "title": "Move-Out Proof",
    "prompt": "At move-in, you can create a fictional condition log for the apartment. It takes time but may help recover the deposit later.",
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
        "label": "Make the condition log. Req: rentedApartment. Outcome/effects: Proof gained",
        "description": "time spent.",
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
            "feedback": "Proof before a problem is stronger than memory after.",
            "explanation": "Proof before a problem is stronger than memory after.",
            "logText": "Move-Out Proof: Make the condition log. Req: rentedApartment. Outcome/effects: Proof gained"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Skip it. Req: none. Outcome/effects: Faster move-in",
        "description": "randomized deposit dispute risk.",
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
            "feedback": "Skipping may be fine if nothing goes wrong.",
            "explanation": "Skipping may be fine if nothing goes wrong.",
            "logText": "Move-Out Proof: Skip it. Req: none. Outcome/effects: Faster move-in"
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
            "logText": "Move-Out Proof: Skip it. Req: none. Outcome/effects: Faster move-in met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask roommate to review the log together. Req: hasRoommate. Outcome/effects: Shared proof",
        "description": "relationship clarity.",
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
            "feedback": "Shared records protect shared money.",
            "explanation": "Shared records protect shared money.",
            "logText": "Move-Out Proof: Ask roommate to review the log together. Req: hasRoommate. Outcome/effects: Shared proof"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the log protect?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Documentation feels slow at the start and valuable at the end."
  },
  {
    "id": "ctx-orbit-renter-utility-deposit",
    "title": "Move-In Utility Deposit",
    "prompt": "A first apartment simulation requires a $93 utility deposit plus the first bill estimate. The deposit may return later if payments stay on time.",
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
        "label": "Pay it from savings. Req: savings ≥ $93. Outcome/effects: Move-in possible",
        "description": "liquidity drops.",
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
            "feedback": "A refundable deposit still reduces spendable cash now.",
            "explanation": "A refundable deposit still reduces spendable cash now.",
            "logText": "Move-In Utility Deposit: Pay it from savings. Req: savings ≥ $93. Outcome/effects: Move-in possible"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Delay move-in and save for six weeks. Req: none. Outcome/effects: Opportunity delayed",
        "description": "cash readiness improves.",
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
            "feedback": "Waiting can be a strategy, not a failure.",
            "explanation": "Waiting can be a strategy, not a failure.",
            "logText": "Move-In Utility Deposit: Delay move-in and save for six weeks. Req: none. Outcome/effects: Opportunity delayed"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Split move-in timing with roommate. Req: hasRoommate. Outcome/effects: Shared planning",
        "description": "relationship rules needed.",
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
            "feedback": "Shared bills need written agreements.",
            "explanation": "Shared bills need written agreements.",
            "logText": "Move-In Utility Deposit: Split move-in timing with roommate. Req: hasRoommate. Outcome/effects: Shared planning"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the deposit do to cash flow?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Being able to afford monthly rent is not the same as affording move-in."
  },
  {
    "id": "ctx-orbit-renters-room-inventory",
    "title": "What Would It Cost to Replace?",
    "prompt": "You list belongings in a rented room: laptop $420, clothes $260, bike $115, kitchen items $75. Replacement total matters for coverage planning.",
    "topics": [
      "budgeting",
      "money-values",
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
        "label": "Add the inventory. Req: rentedApartment. Outcome/effects: Money knowledge rises",
        "description": "insurance planning improves.",
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
            "feedback": "$420 + $260 + $115 + $75 = $870.",
            "explanation": "$420 + $260 + $115 + $75 = $870.",
            "logText": "What Would It Cost to Replace?: Add the inventory. Req: rentedApartment. Outcome/effects: Money knowledge rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Estimate without listing. Req: none. Outcome/effects: Faster",
        "description": "underestimation risk.",
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
            "feedback": "People often forget small categories.",
            "explanation": "People often forget small categories.",
            "logText": "What Would It Cost to Replace?: Estimate without listing. Req: none. Outcome/effects: Faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask roommate/mentor to review categories. Req: hasRoommate or supportCircle.mentor. Outcome/effects: More complete list",
        "description": "time spent.",
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
            "feedback": "A second view catches forgotten items.",
            "explanation": "A second view catches forgotten items.",
            "logText": "What Would It Cost to Replace?: Ask roommate/mentor to review categories. Req: hasRoommate or supportCircle.mentor. Outcome/effects: More complete list"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was the total higher than expected?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Replacement value is not the same as resale value or self-worth."
  },
  {
    "id": "ctx-orbit-repair-cafe-laptop",
    "title": "The Repair Café Slot",
    "prompt": "Your laptop hinge is loose. A repair café may help for a $7 parts donation, but the fix is not guaranteed. A shop repair costs $86.",
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
        "label": "Try the repair café. Req: communityProgramAccess. Outcome/effects: Low cost",
        "description": "randomized success.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -86
              }
            ],
            "feedback": "Community repair lowers cost but not uncertainty.",
            "explanation": "Community repair lowers cost but not uncertainty.",
            "logText": "The Repair Café Slot: Try the repair café. Req: communityProgramAccess. Outcome/effects: Low cost"
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
            "logText": "The Repair Café Slot: Try the repair café. Req: communityProgramAccess. Outcome/effects: Low cost met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay the shop. Req: cash ≥ $86. Outcome/effects: Higher cost",
        "description": "more reliable repair.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -86
              }
            ],
            "feedback": "Professional repair costs more but reduces uncertainty.",
            "explanation": "Professional repair costs more but reduces uncertainty.",
            "logText": "The Repair Café Slot: Pay the shop. Req: cash ≥ $86. Outcome/effects: Higher cost"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to help compare repair vs. replace. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “A second view can prevent a rushed replacement.” Reflect: “What information changed the choice?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -86
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
            "feedback": "Ask a mentor to help compare repair vs. replace. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “A second view can prevent a rushed replacement.” Reflect: “What information changed the choice? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor to help compare repair vs. replace. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “A second view can prevent a rushed replacement.” Reflect: “What information changed the choice? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Repair Café Slot: Ask a mentor to help compare repair vs. replace. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “A second view can prevent a rushed replacement.” Reflect: “What information changed the choice?"
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
                "type": "relationship",
                "relationshipId": "mentor",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "The Repair Café Slot: Ask a mentor to help compare repair vs. replace. Req: supportCircle.mentor. Outcome/effects: Money knowledge rises. Feedback: “A second view can prevent a rushed replacement.” Reflect: “What information changed the choice? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What risk did you accept?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Low-cost repair can be smart even when it is not guaranteed."
  },
  {
    "id": "ctx-orbit-return-shipping-restock",
    "title": "The Return That Costs Money",
    "prompt": "You bought a $28 item that does not fit. Returning it costs $5 shipping, and a restocking fee may be 10%.",
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
        "label": "Return it anyway. Req: none. Outcome/effects: Some money recovered",
        "description": "randomized restocking fee.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -10
              }
            ],
            "feedback": "A 10% fee on $28 is $2.80, plus $5 shipping.",
            "explanation": "A 10% fee on $28 is $2.80, plus $5 shipping.",
            "logText": "The Return That Costs Money: Return it anyway. Req: none. Outcome/effects: Some money recovered"
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
            "logText": "The Return That Costs Money: Return it anyway. Req: none. Outcome/effects: Some money recovered met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Resell it locally. Req: Safety ≥ 55. Outcome/effects: Possible higher recovery",
        "description": "more effort.",
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
            "feedback": "Resale can beat return math, but takes time and care.",
            "explanation": "Resale can beat return math, but takes time and care.",
            "logText": "The Return That Costs Money: Resell it locally. Req: Safety ≥ 55. Outcome/effects: Possible higher recovery"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it as a backup/gift. Req: none. Outcome/effects: No cash recovered",
        "description": "possible useful value.",
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
            "feedback": "Keeping may be reasonable if returning recovers too little.",
            "explanation": "Keeping may be reasonable if returning recovers too little.",
            "logText": "The Return That Costs Money: Keep it as a backup/gift. Req: none. Outcome/effects: No cash recovered"
          }
        ]
      }
    ],
    "reflectionPrompt": "How much would you really get back?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Returning is not automatically best if fees eat the refund."
  },
  {
    "id": "ctx-orbit-ride-share-surge-plan",
    "title": "The Price Jump Ride",
    "prompt": "A ride usually costs $11, but during a busy time it may jump by 40% to 80%. You need to get to a fictional appointment.",
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
        "label": "Leave earlier using transit for $3. Req: timeAvailable ≥ 35 minutes. Outcome/effects: Cash saved",
        "description": "time spent.",
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
            "feedback": "Planning earlier can beat price spikes.",
            "explanation": "Planning earlier can beat price spikes.",
            "logText": "The Price Jump Ride: Leave earlier using transit for $3. Req: timeAvailable ≥ 35 minutes. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait and hope the ride price drops. Req: none. Outcome/effects: Random cost",
        "description": "possible delay.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -11
              }
            ],
            "feedback": "Waiting can help or backfire.",
            "explanation": "Waiting can help or backfire.",
            "logText": "The Price Jump Ride: Wait and hope the ride price drops. Req: none. Outcome/effects: Random cost"
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
            "logText": "The Price Jump Ride: Wait and hope the ride price drops. Req: none. Outcome/effects: Random cost met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use the ride now. Req: cash ≥ $20. Outcome/effects: Faster",
        "description": "cash may drop sharply.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -11
              }
            ],
            "feedback": "An $11 ride with 80% surge is $19.80.",
            "explanation": "An $11 ride with 80% surge is $19.80.",
            "logText": "The Price Jump Ride: Use the ride now. Req: cash ≥ $20. Outcome/effects: Faster"
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
            "logText": "The Price Jump Ride: Use the ride now. Req: cash ≥ $20. Outcome/effects: Faster met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did time save?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Transportation decisions mix money, time, reliability, and stress."
  },
  {
    "id": "ctx-orbit-roommate-utility-split-by-use",
    "title": "The Utility Split Talk",
    "prompt": "A shared utility bill is $84. You were away one week; your roommate used extra heat for a project. You need a fair split.",
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
        "label": "Split 50/50: $42 each. Req: hasRoommate. Outcome/effects: Simple",
        "description": "may ignore different use.",
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
            "feedback": "Equal splits are easy to understand.",
            "explanation": "Equal splits are easy to understand.",
            "logText": "The Utility Split Talk: Split 50/50: $42 each. Req: hasRoommate. Outcome/effects: Simple"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Split by estimated use: $35/$49. Req: Money Know-How ≥ 55. Outcome/effects: More precise",
        "description": "requires agreement.",
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
            "feedback": "A proportional split can match use better.",
            "explanation": "A proportional split can match use better.",
            "logText": "The Utility Split Talk: Split by estimated use: $35/$49. Req: Money Know-How ≥ 55. Outcome/effects: More precise"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep 50/50 but agree on future rules. Req: supportCircle.friend or roommate trust ≥ 45. Outcome/effects: Relationship protected",
        "description": "future clarity improves.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 50
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
            "feedback": "Sometimes the best fix is a future rule.",
            "explanation": "Sometimes the best fix is a future rule.",
            "logText": "The Utility Split Talk: Keep 50/50 but agree on future rules. Req: supportCircle.friend or roommate trust ≥ 45. Outcome/effects: Relationship protected"
          }
        ]
      }
    ],
    "reflectionPrompt": "When is equal fair?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Fairness may mean equal, proportional, or future-focused depending on the relationship."
  },
  {
    "id": "ctx-orbit-scholarship-deadline-stack",
    "title": "Three Deadlines, One Weekend",
    "prompt": "Three small scholarships are due soon. Each takes about 90 minutes. You can apply to one, two, or all three.",
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
        "label": "Apply to all three. Req: timeAvailable ≥ 4.5 hrs. Outcome/effects: Odds of aid rise",
        "description": "wellbeing may dip.",
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
            "feedback": "More applications improve chances but use real time.",
            "explanation": "More applications improve chances but use real time.",
            "logText": "Three Deadlines, One Weekend: Apply to all three. Req: timeAvailable ≥ 4.5 hrs. Outcome/effects: Odds of aid rise"
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
            "logText": "Three Deadlines, One Weekend: Apply to all three. Req: timeAvailable ≥ 4.5 hrs. Outcome/effects: Odds of aid rise met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Apply to the best-fit one. Req: none. Outcome/effects: Focus rises",
        "description": "fewer chances.",
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
            "feedback": "Targeting can beat rushing.",
            "explanation": "Targeting can beat rushing.",
            "logText": "Three Deadlines, One Weekend: Apply to the best-fit one. Req: none. Outcome/effects: Focus rises"
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
            "logText": "Three Deadlines, One Weekend: Apply to the best-fit one. Req: none. Outcome/effects: Focus rises met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to review one application. Req: supportCircle.mentor. Outcome/effects: Quality improves",
        "description": "fewer submissions.",
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
            "feedback": "Feedback can improve one strong attempt.",
            "explanation": "Feedback can improve one strong attempt.",
            "logText": "Three Deadlines, One Weekend: Ask a mentor to review one application. Req: supportCircle.mentor. Outcome/effects: Quality improves"
          }
        ]
      }
    ],
    "reflectionPrompt": "Was the time cost sustainable?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Applying more is not always better if quality or wellbeing drops."
  },
  {
    "id": "ctx-orbit-school-club-treasurer",
    "title": "Club Snack Money",
    "prompt": "Your club collects $3 from each of 17 members for snacks. You volunteer to help track the money.",
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Make a simple record: 17 × $3 = $51. Req: none. Outcome/effects: Trust and money knowledge rise. Feedback: “A clear record protects everyone.” Reflect: “Why does public money need extra clarity?",
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
            "feedback": "Make a simple record: 17 × $3 = $51. Req: none. Outcome/effects: Trust and money knowledge rise. Feedback: “A clear record protects everyone.” Reflect: “Why does public money need extra clarity? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Make a simple record: 17 × $3 = $51. Req: none. Outcome/effects: Trust and money knowledge rise. Feedback: “A clear record protects everyone.” Reflect: “Why does public money need extra clarity? changes the route and creates a finance tradeoff to notice.",
            "logText": "Club Snack Money: Make a simple record: 17 × $3 = $51. Req: none. Outcome/effects: Trust and money knowledge rise. Feedback: “A clear record protects everyone.” Reflect: “Why does public money need extra clarity?"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Put cash in one envelope with no list. Req: none. Outcome/effects: Faster",
        "description": "confusion risk rises.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "The total may be right, but missing names can cause problems.",
            "explanation": "The total may be right, but missing names can cause problems.",
            "logText": "Club Snack Money: Put cash in one envelope with no list. Req: none. Outcome/effects: Faster"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the advisor to count it with you. Req: supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Two-person counting reduces mistakes.” Reflect: “How did support protect trust?",
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
            "feedback": "Ask the advisor to count it with you. Req: supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Two-person counting reduces mistakes.” Reflect: “How did support protect trust? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask the advisor to count it with you. Req: supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Two-person counting reduces mistakes.” Reflect: “How did support protect trust? changes the route and creates a finance tradeoff to notice.",
            "logText": "Club Snack Money: Ask the advisor to count it with you. Req: supportCircle.mentor. Outcome/effects: Support and safety rise. Feedback: “Two-person counting reduces mistakes.” Reflect: “How did support protect trust?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What proof would solve a disagreement?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Extra tracking takes time, but group money needs more proof than personal money."
  },
  {
    "id": "ctx-orbit-scooter-repair-or-sell",
    "title": "Fix, Sell, or Keep?",
    "prompt": "A used scooter you own could sell for $95 as-is or $145 if a $32 repair works.",
    "topics": [
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
    "baseWeight": 20,
    "choices": [
      {
        "id": "choice-1",
        "label": "Repair first. Req: cash ≥ $32. Outcome/effects: Possible higher resale",
        "description": "randomized repair success.",
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
            "feedback": "If it works, $145 − $32 = $113 net before other costs.",
            "explanation": "If it works, $145 − $32 = $113 net before other costs.",
            "logText": "Fix, Sell, or Keep?: Repair first. Req: cash ≥ $32. Outcome/effects: Possible higher resale"
          },
          {
            "id": "outcome-2",
            "probability": 0.28,
            "effects": [
              {
                "type": "cash",
                "amount": -32
              },
              {
                "type": "stat",
                "stat": "wellbeing",
                "amount": -3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Fix, Sell, or Keep?: Repair first. Req: cash ≥ $32. Outcome/effects: Possible higher resale met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Sell as-is. Req: none. Outcome/effects: Lower but certain cash. Feedback: “Certainty can beat a risky repair.” Reflect: “Why choose less money but less risk?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 95
              }
            ],
            "feedback": "Sell as-is. Req: none. Outcome/effects: Lower but certain cash. Feedback: “Certainty can beat a risky repair.” Reflect: “Why choose less money but less risk? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Sell as-is. Req: none. Outcome/effects: Lower but certain cash. Feedback: “Certainty can beat a risky repair.” Reflect: “Why choose less money but less risk? changes the route and creates a finance tradeoff to notice.",
            "logText": "Fix, Sell, or Keep?: Sell as-is. Req: none. Outcome/effects: Lower but certain cash. Feedback: “Certainty can beat a risky repair.” Reflect: “Why choose less money but less risk?"
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
            "logText": "Fix, Sell, or Keep?: Sell as-is. Req: none. Outcome/effects: Lower but certain cash. Feedback: “Certainty can beat a risky repair.” Reflect: “Why choose less money but less risk? met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Keep it for transportation. Req: needsTransport. Outcome/effects: Useful value remains",
        "description": "cash not recovered.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 95
              }
            ],
            "feedback": "Usefulness is value even when you do not sell.",
            "explanation": "Usefulness is value even when you do not sell.",
            "logText": "Fix, Sell, or Keep?: Keep it for transportation. Req: needsTransport. Outcome/effects: Useful value remains"
          }
        ]
      }
    ],
    "reflectionPrompt": "What made the repair worth trying?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Highest possible cash is not always the best risk-adjusted choice."
  },
  {
    "id": "ctx-orbit-secured-card-deposit",
    "title": "Credit With a Deposit",
    "prompt": "A simplified secured card requires a $200 deposit and has a $200 limit. You are considering using it to build credit slowly.",
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
        "label": "Open it and use under $40 monthly, paid in full. Req: age ≥ 18 and savings ≥ $200. Outcome/effects: Credit history may build",
        "description": "deposit locked.",
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
            "feedback": "$40 is 20% of a $200 limit.",
            "explanation": "$40 is 20% of a $200 limit.",
            "logText": "Credit With a Deposit: Open it and use under $40 monthly, paid in full. Req: age ≥ 18 and savings ≥ $200. Outcome/effects: Credit history may build"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait until savings are stronger. Req: none. Outcome/effects: Credit delayed",
        "description": "liquidity protected.",
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Building credit should not break cash safety.",
            "explanation": "Building credit should not break cash safety.",
            "logText": "Credit With a Deposit: Wait until savings are stronger. Req: none. Outcome/effects: Credit delayed"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use it for a $160 purchase. Req: age ≥ 18. Outcome/effects: High utilization",
        "description": "score pressure in simplified model.",
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
            "feedback": "$160 is 80% of the limit.",
            "explanation": "$160 is 80% of the limit.",
            "logText": "Credit With a Deposit: Use it for a $160 purchase. Req: age ≥ 18. Outcome/effects: High utilization"
          }
        ]
      }
    ],
    "reflectionPrompt": "Why keep use low?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Credit-building tools are useful only when they do not harm cash flow."
  },
  {
    "id": "ctx-orbit-shared-bike-lock",
    "title": "Protect the Shared Bike",
    "prompt": "You and a friend share a used bike worth about $120. A strong lock costs $24.",
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
        "label": "Buy the lock together: $12 each. Req: supportCircle.friend. Outcome/effects: Asset protection rises",
        "description": "cash down.",
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
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "$24 is 20% of the bike’s value.",
            "explanation": "$24 is 20% of the bike’s value.",
            "logText": "Protect the Shared Bike: Buy the lock together: $12 each. Req: supportCircle.friend. Outcome/effects: Asset protection rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use a cheap $7 lock. Req: cash ≥ $7. Outcome/effects: Lower cost",
        "description": "protection lower.",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Cheap protection can be enough or not, depending on risk.",
            "explanation": "Cheap protection can be enough or not, depending on risk.",
            "logText": "Protect the Shared Bike: Use a cheap $7 lock. Req: cash ≥ $7. Outcome/effects: Lower cost"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Avoid leaving the bike outside. Req: Discipline ≥ 40. Outcome/effects: No lock cost",
        "description": "convenience drops.",
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
                "amount": -24
              },
              {
                "type": "stat",
                "stat": "discipline",
                "amount": -2
              },
              {
                "type": "relationship",
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Behavior can reduce risk, too.",
            "explanation": "Behavior can reduce risk, too.",
            "logText": "Protect the Shared Bike: Avoid leaving the bike outside. Req: Discipline ≥ 40. Outcome/effects: No lock cost"
          }
        ]
      }
    ],
    "reflectionPrompt": "Is 20% protection too much or reasonable?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Protecting an asset costs money or convenience."
  },
  {
    "id": "ctx-orbit-shift-swap-kindness",
    "title": "Can You Cover My Shift?",
    "prompt": "A coworker asks you to cover a shift. It adds $42 before deductions, but you planned study time and rest.",
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
        "label": "Cover the shift. Req: none. Outcome/effects: Cash rises",
        "description": "wellbeing or school prep may drop.",
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
            "feedback": "Extra income has a time cost.",
            "explanation": "Extra income has a time cost.",
            "logText": "Can You Cover My Shift?: Cover the shift. Req: none. Outcome/effects: Cash rises"
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
            "logText": "Can You Cover My Shift?: Cover the shift. Req: none. Outcome/effects: Cash rises met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Say no kindly. Req: none. Outcome/effects: Time protected",
        "description": "relationship depends on tone.",
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
            "feedback": "A clear no can protect your schedule without being rude.",
            "explanation": "A clear no can protect your schedule without being rude.",
            "logText": "Can You Cover My Shift?: Say no kindly. Req: none. Outcome/effects: Time protected"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Trade shifts for a better day. Req: supportCircle.friend or workplace trust ≥ 50. Outcome/effects: Balanced outcome possible. Feedback: “Negotiation can create a third option.” Reflect: “How did changing timing help?",
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Trade shifts for a better day. Req: supportCircle.friend or workplace trust ≥ 50. Outcome/effects: Balanced outcome possible. Feedback: “Negotiation can create a third option.” Reflect: “How did changing timing help? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Trade shifts for a better day. Req: supportCircle.friend or workplace trust ≥ 50. Outcome/effects: Balanced outcome possible. Feedback: “Negotiation can create a third option.” Reflect: “How did changing timing help? changes the route and creates a finance tradeoff to notice.",
            "logText": "Can You Cover My Shift?: Trade shifts for a better day. Req: supportCircle.friend or workplace trust ≥ 50. Outcome/effects: Balanced outcome possible. Feedback: “Negotiation can create a third option.” Reflect: “How did changing timing help?"
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
                "relationshipId": "friend",
                "closeness": 2,
                "support": 2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Can You Cover My Shift?: Trade shifts for a better day. Req: supportCircle.friend or workplace trust ≥ 50. Outcome/effects: Balanced outcome possible. Feedback: “Negotiation can create a third option.” Reflect: “How did changing timing help? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the money replace?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Helping can build trust, but overcommitting can cost energy and performance."
  },
  {
    "id": "ctx-orbit-small-claim-vs-cash",
    "title": "Tiny Claim, Big Question",
    "prompt": "A covered item has $92 damage. Your deductible is $75, and filing might affect future premiums in the simplified game model.",
    "topics": [
      "insurance"
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
        "label": "File the claim. Req: hasPolicy. Outcome/effects: Pay $75",
        "description": "possible future premium change.",
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
            "feedback": "Insurance helps only after the deductible.",
            "explanation": "Insurance helps only after the deductible.",
            "logText": "Tiny Claim, Big Question: File the claim. Req: hasPolicy. Outcome/effects: Pay $75"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Pay $92 yourself. Req: cash ≥ $92. Outcome/effects: More cost now",
        "description": "policy history untouched.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -92
              }
            ],
            "feedback": "For small losses, self-paying can be cleaner.",
            "explanation": "For small losses, self-paying can be cleaner.",
            "logText": "Tiny Claim, Big Question: Pay $92 yourself. Req: cash ≥ $92. Outcome/effects: More cost now"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask the insurer questions before deciding. Req: Money Know-How ≥ 50. Outcome/effects: Safety and knowledge rise. Feedback: “Information can be worth more than guessing.” Reflect: “What question mattered most?",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -75
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
            "feedback": "Ask the insurer questions before deciding. Req: Money Know-How ≥ 50. Outcome/effects: Safety and knowledge rise. Feedback: “Information can be worth more than guessing.” Reflect: “What question mattered most? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask the insurer questions before deciding. Req: Money Know-How ≥ 50. Outcome/effects: Safety and knowledge rise. Feedback: “Information can be worth more than guessing.” Reflect: “What question mattered most? changes the route and creates a finance tradeoff to notice.",
            "logText": "Tiny Claim, Big Question: Ask the insurer questions before deciding. Req: Money Know-How ≥ 50. Outcome/effects: Safety and knowledge rise. Feedback: “Information can be worth more than guessing.” Reflect: “What question mattered most?"
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
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "Tiny Claim, Big Question: Ask the insurer questions before deciding. Req: Money Know-How ≥ 50. Outcome/effects: Safety and knowledge rise. Feedback: “Information can be worth more than guessing.” Reflect: “What question mattered most? met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "Was saving $17 worth a claim?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Insurance is for risk protection, but not every small loss should become a claim."
  },
  {
    "id": "ctx-orbit-source-screenshot-claim",
    "title": "The Viral Money Claim",
    "prompt": "A viral post says, “This one trick guarantees $500 a month.” It includes screenshots but no official source.",
    "topics": [
      "scams"
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
        "label": "Check an official or educational source before acting. Req: Money Know-How ≥ 45. Outcome/effects: Safety rises",
        "description": "scam risk drops.",
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
              }
            ],
            "feedback": "Screenshots are not proof of a trustworthy claim.",
            "explanation": "Screenshots are not proof of a trustworthy claim.",
            "logText": "The Viral Money Claim: Check an official or educational source before acting. Req: Money Know-How ≥ 45. Outcome/effects: Safety rises"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Follow the steps immediately. Req: none. Outcome/effects: Fast",
        "description": "safety drops.",
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
            "feedback": "Guaranteed money claims deserve extra checking.",
            "explanation": "Guaranteed money claims deserve extra checking.",
            "logText": "The Viral Money Claim: Follow the steps immediately. Req: none. Outcome/effects: Fast"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to evaluate the claim. Req: supportCircle.mentor. Outcome/effects: Support and source skill rise. Feedback: “A second reader can spot missing details.” Reflect: “What question did the mentor ask?",
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
            "feedback": "Ask a mentor to evaluate the claim. Req: supportCircle.mentor. Outcome/effects: Support and source skill rise. Feedback: “A second reader can spot missing details.” Reflect: “What question did the mentor ask? changes the route and creates a finance tradeoff to notice.",
            "explanation": "Ask a mentor to evaluate the claim. Req: supportCircle.mentor. Outcome/effects: Support and source skill rise. Feedback: “A second reader can spot missing details.” Reflect: “What question did the mentor ask? changes the route and creates a finance tradeoff to notice.",
            "logText": "The Viral Money Claim: Ask a mentor to evaluate the claim. Req: supportCircle.mentor. Outcome/effects: Support and source skill rise. Feedback: “A second reader can spot missing details.” Reflect: “What question did the mentor ask?"
          }
        ]
      }
    ],
    "reflectionPrompt": "What source did you trust?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Some online tips are useful, but big claims need stronger evidence."
  },
  {
    "id": "ctx-orbit-startup-refund-policy",
    "title": "Your Customers Want Returns",
    "prompt": "Your small approved shop sells $96 of items. You can offer no returns, 7-day returns, or returns with store credit.",
    "topics": [
      "investing",
      "consumer-skills",
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
        "label": "7-day cash returns. Req: managesInventory. Outcome/effects: Trust rises",
        "description": "random refund cash need.",
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
                "amount": 96
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": 3
              }
            ],
            "feedback": "A return policy can increase trust but requires reserve money.",
            "explanation": "A return policy can increase trust but requires reserve money.",
            "logText": "Your Customers Want Returns: 7-day cash returns. Req: managesInventory. Outcome/effects: Trust rises"
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
            "logText": "Your Customers Want Returns: 7-day cash returns. Req: managesInventory. Outcome/effects: Trust rises met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Store credit only. Req: none. Outcome/effects: Cash protected",
        "description": "some customers may hesitate.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": 96
              }
            ],
            "feedback": "Store credit lowers refund pressure but may feel less flexible.",
            "explanation": "Store credit lowers refund pressure but may feel less flexible.",
            "logText": "Your Customers Want Returns: Store credit only. Req: none. Outcome/effects: Cash protected"
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
            "logText": "Your Customers Want Returns: Store credit only. Req: none. Outcome/effects: Cash protected met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Final sale with clear notice. Req: none. Outcome/effects: Simple",
        "description": "customer trust may drop.",
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
                "amount": 96
              },
              {
                "type": "stat",
                "stat": "trustSafety",
                "amount": -2
              }
            ],
            "feedback": "Clear rules are better than surprise rules.",
            "explanation": "Clear rules are better than surprise rules.",
            "logText": "Your Customers Want Returns: Final sale with clear notice. Req: none. Outcome/effects: Simple"
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
            "logText": "Your Customers Want Returns: Final sale with clear notice. Req: none. Outcome/effects: Simple met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How much cash should you hold back?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Customer-friendly policies can increase trust but create cash-flow risk."
  },
  {
    "id": "ctx-orbit-student-loan-interest-while-school",
    "title": "Interest While You Learn",
    "prompt": "A simplified student loan option would add interest while you are in school. Borrowing $1,000 at 6% simple interest for one year adds about $60.",
    "topics": [
      "credit",
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
        "label": "Borrow the full $1,000. Req: pathwayCollegeOrCareerSchool. Outcome/effects: Gap covered",
        "description": "future repayment rises.",
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
            "feedback": "Borrowing solves today’s gap but creates tomorrow’s payment.",
            "explanation": "Borrowing solves today’s gap but creates tomorrow’s payment.",
            "logText": "Interest While You Learn: Borrow the full $1,000. Req: pathwayCollegeOrCareerSchool. Outcome/effects: Gap covered"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Borrow $500 and work for the rest. Req: Work availability ≥ 5 hrs/week. Outcome/effects: Lower debt",
        "description": "schedule pressure.",
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
            "feedback": "Half the borrowing means less interest, but more work time.",
            "explanation": "Half the borrowing means less interest, but more work time.",
            "logText": "Interest While You Learn: Borrow $500 and work for the rest. Req: Work availability ≥ 5 hrs/week. Outcome/effects: Lower debt"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Choose a lower-cost route. Req: Money Know-How ≥ 55. Outcome/effects: Gap drops",
        "description": "pathway may change.",
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
                "amount": -2
              },
              {
                "type": "stat",
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Changing the route can change the debt.",
            "explanation": "Changing the route can change the debt.",
            "logText": "Interest While You Learn: Choose a lower-cost route. Req: Money Know-How ≥ 55. Outcome/effects: Gap drops"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did the loan make possible?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Loans can expand access, but the repayment math must be visible."
  },
  {
    "id": "ctx-orbit-summer-heat-bill",
    "title": "The Hot Month Spike",
    "prompt": "Your fictional summer bill is usually $54. A heat wave may add 15% to 35%.",
    "topics": [
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Set aside $70 just in case. Req: cash flow can cover $70. Outcome/effects: Less spending now",
        "description": "bill stress drops.",
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
            "feedback": "$54 + 30% is about $70.20, so $70 is close.",
            "explanation": "$54 + 30% is about $70.20, so $70 is close.",
            "logText": "The Hot Month Spike: Set aside $70 just in case. Req: cash flow can cover $70. Outcome/effects: Less spending now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Wait for the bill before adjusting. Req: none. Outcome/effects: More cash now",
        "description": "randomized bill shock risk.",
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
            "feedback": "Waiting keeps money flexible but may crowd the next paycheck.",
            "explanation": "Waiting keeps money flexible but may crowd the next paycheck.",
            "logText": "The Hot Month Spike: Wait for the bill before adjusting. Req: none. Outcome/effects: More cash now"
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
            "logText": "The Hot Month Spike: Wait for the bill before adjusting. Req: none. Outcome/effects: More cash now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Change usage habits and set aside $10. Req: Discipline ≥ 40. Outcome/effects: Balanced plan",
        "description": "randomized savings.",
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
            "feedback": "Small behavior changes plus a mini-buffer reduce risk.",
            "explanation": "Small behavior changes plus a mini-buffer reduce risk.",
            "logText": "The Hot Month Spike: Change usage habits and set aside $10. Req: Discipline ≥ 40. Outcome/effects: Balanced plan"
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
            "logText": "The Hot Month Spike: Change usage habits and set aside $10. Req: Discipline ≥ 40. Outcome/effects: Balanced plan met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "How did estimating help?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Comfort, cost, and uncertainty all matter."
  },
  {
    "id": "ctx-orbit-tool-borrow-deposit",
    "title": "The Tool You Only Need Once",
    "prompt": "A repair project needs a $48 tool. A neighbor will lend one with a $15 deposit, but you must return it clean.",
    "topics": [
      "credit",
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
        "label": "Borrow it and clean it before return. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Cash saved",
        "description": "relationship trust can rise.",
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
                "amount": -48
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
            "feedback": "Borrowing protects cash when you need something once.",
            "explanation": "Borrowing protects cash when you need something once.",
            "logText": "The Tool You Only Need Once: Borrow it and clean it before return. Req: supportCircle.family or supportCircle.mentor. Outcome/effects: Cash saved"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the tool. Req: cash ≥ $48. Outcome/effects: Asset gained",
        "description": "cash drops.",
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
            "feedback": "Ownership helps if future projects are likely.",
            "explanation": "Ownership helps if future projects are likely.",
            "logText": "The Tool You Only Need Once: Buy the tool. Req: cash ≥ $48. Outcome/effects: Asset gained"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Skip the repair for now. Req: none. Outcome/effects: Cash protected",
        "description": "item may lose usefulness.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 0.72,
            "effects": [
              {
                "type": "cash",
                "amount": -48
              }
            ],
            "feedback": "Delaying can be smart, but some repairs get worse.",
            "explanation": "Delaying can be smart, but some repairs get worse.",
            "logText": "The Tool You Only Need Once: Skip the repair for now. Req: none. Outcome/effects: Cash protected"
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
            "logText": "The Tool You Only Need Once: Skip the repair for now. Req: none. Outcome/effects: Cash protected met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What makes borrowing fair?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Buying is not always better than access; borrowing depends on trust and care."
  },
  {
    "id": "ctx-orbit-trial-class-pack",
    "title": "Five Classes Before They Expire",
    "prompt": "A hobby center sells 5 class passes for $37, but they expire in 30 days. A single class is $9.",
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
        "label": "Buy the 5-pack. Req: cash ≥ $37. Outcome/effects: Cheaper only if used enough",
        "description": "schedule pressure.",
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
                "amount": -5
              }
            ],
            "feedback": "$37 ÷ 5 = $7.40 per class if you use all 5.",
            "explanation": "$37 ÷ 5 = $7.40 per class if you use all 5.",
            "logText": "Five Classes Before They Expire: Buy the 5-pack. Req: cash ≥ $37. Outcome/effects: Cheaper only if used enough"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy single classes. Req: cash ≥ $9. Outcome/effects: Higher per class",
        "description": "less commitment.",
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
            "feedback": "Paying more per use can reduce waste.",
            "explanation": "Paying more per use can reduce waste.",
            "logText": "Five Classes Before They Expire: Buy single classes. Req: cash ≥ $9. Outcome/effects: Higher per class"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a friend to plan classes with you. Req: supportCircle.friend. Outcome/effects: Follow-through may rise",
        "description": "social commitment added.",
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
                "amount": 5
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
            "feedback": "Support can help a plan actually happen.",
            "explanation": "Support can help a plan actually happen.",
            "logText": "Five Classes Before They Expire: Ask a friend to plan classes with you. Req: supportCircle.friend. Outcome/effects: Follow-through may rise"
          }
        ]
      }
    ],
    "reflectionPrompt": "Can your calendar support the deal?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Bulk deals are only deals if life lets you use them."
  },
  {
    "id": "ctx-orbit-tutoring-rate-boundary",
    "title": "What Should You Charge?",
    "prompt": "You tutor a younger student. The family offers $10/hour, but similar tutoring is $14/hour. You want to be fair and confident.",
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
        "label": "Accept $10/hour. Req: none. Outcome/effects: Opportunity starts easily",
        "description": "lower income.",
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
              }
            ],
            "feedback": "Lower rates can help you build experience.",
            "explanation": "Lower rates can help you build experience.",
            "logText": "What Should You Charge?: Accept $10/hour. Req: none. Outcome/effects: Opportunity starts easily"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Ask for $12/hour politely. Req: Confidence/Opportunity ≥ 45. Outcome/effects: Randomized response",
        "description": "income may rise.",
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
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "A respectful ask can be a skill.",
            "explanation": "A respectful ask can be a skill.",
            "logText": "What Should You Charge?: Ask for $12/hour politely. Req: Confidence/Opportunity ≥ 45. Outcome/effects: Randomized response"
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
                "stat": "opportunity",
                "amount": -2
              }
            ],
            "feedback": "Your plan changed the odds, but the result still had some uncertainty.",
            "explanation": "A strong decision can still meet luck; a risky decision can sometimes work. The game separates choice quality from outcome luck.",
            "logText": "What Should You Charge?: Ask for $12/hour politely. Req: Confidence/Opportunity ≥ 45. Outcome/effects: Randomized response met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask a mentor to role-play the conversation. Req: supportCircle.mentor. Outcome/effects: Confidence rises",
        "description": "decision delayed.",
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
              },
              {
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Practice can make negotiation kinder and clearer.",
            "explanation": "Practice can make negotiation kinder and clearer.",
            "logText": "What Should You Charge?: Ask a mentor to role-play the conversation. Req: supportCircle.mentor. Outcome/effects: Confidence rises"
          }
        ]
      }
    ],
    "reflectionPrompt": "What did you gain besides money?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Charging less can be generous or strategic; charging fairly can protect your time."
  },
  {
    "id": "ctx-orbit-used-ereader-access",
    "title": "Used E-Reader or App?",
    "prompt": "A used e-reader costs $38 and may resell for $24 later. A reading app is free but needs reliable internet.",
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
        "label": "Buy the used e-reader. Req: cash ≥ $38. Outcome/effects: Asset gained",
        "description": "cash drops; offline access improves.",
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
            "feedback": "Net cost might be $38 − $24 = $14 if resale works.",
            "explanation": "Net cost might be $38 − $24 = $14 if resale works.",
            "logText": "Used E-Reader or App?: Buy the used e-reader. Req: cash ≥ $38. Outcome/effects: Asset gained"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Use the free app. Req: internetReliability medium or high. Outcome/effects: Cash protected",
        "description": "access depends on internet.",
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
            "feedback": "Free can be best when access is reliable.",
            "explanation": "Free can be best when access is reliable.",
            "logText": "Used E-Reader or App?: Use the free app. Req: internetReliability medium or high. Outcome/effects: Cash protected"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Share a device schedule with family/caregiver. Req: supportCircle.family. Outcome/effects: Cash saved",
        "description": "planning required.",
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
                "type": "relationship",
                "relationshipId": "family",
                "closeness": 2,
                "support": 3
              }
            ],
            "feedback": "Shared access can work when schedules are clear.",
            "explanation": "Shared access can work when schedules are clear.",
            "logText": "Used E-Reader or App?: Share a device schedule with family/caregiver. Req: supportCircle.family. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "How does resale change the cost?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Owning helps access; free tools work best when the required support is reliable."
  },
  {
    "id": "ctx-orbit-utility-smoothing-plan",
    "title": "The Uneven Utility Bill",
    "prompt": "Your fictional apartment budget expects a $47 utility bill, but a hotter month could push it near $69. You can budget for the average or build a buffer.",
    "topics": [
      "budgeting",
      "saving"
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
        "label": "Budget exactly $47. Req: none. Outcome/effects: More cash available now",
        "description": "random heat spike may cause a shortfall.",
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
            "feedback": "Averages help, but a real bill can land above average.",
            "explanation": "Averages help, but a real bill can land above average.",
            "logText": "The Uneven Utility Bill: Budget exactly $47. Req: none. Outcome/effects: More cash available now"
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
            "logText": "The Uneven Utility Bill: Budget exactly $47. Req: none. Outcome/effects: More cash available now met an uncertain result."
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Budget $60 each month and roll extra forward. Req: cash flow can cover $60. Outcome/effects: Spending money drops",
        "description": "future bill shock is lower.",
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
            "feedback": "$60 − $47 = $13 buffer in a normal month.",
            "explanation": "$60 − $47 = $13 buffer in a normal month.",
            "logText": "The Uneven Utility Bill: Budget $60 each month and roll extra forward. Req: cash flow can cover $60. Outcome/effects: Spending money drops"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Use conservation habits first. Req: none. Outcome/effects: Bill may drop",
        "description": "comfort or convenience may dip.",
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
            "feedback": "Lower use can help, but weather still adds uncertainty.",
            "explanation": "Lower use can help, but weather still adds uncertainty.",
            "logText": "The Uneven Utility Bill: Use conservation habits first. Req: none. Outcome/effects: Bill may drop"
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
            "logText": "The Uneven Utility Bill: Use conservation habits first. Req: none. Outcome/effects: Bill may drop met an uncertain result."
          }
        ]
      }
    ],
    "reflectionPrompt": "What number would make you feel prepared?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": true,
    "tradeoffNote": "Budgeting the average is efficient; budgeting above the average protects against surprise."
  },
  {
    "id": "ctx-orbit-vehicle-co-op-membership",
    "title": "Car Access Without Owning",
    "prompt": "A fictional vehicle co-op costs $18/month plus $7 per trip. Owning a car has much higher fixed costs but more freedom.",
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
    "baseWeight": 18,
    "choices": [
      {
        "id": "choice-1",
        "label": "Use the co-op for rare trips. Req: needsTransport. Outcome/effects: Lower fixed cost",
        "description": "less flexibility.",
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
            "feedback": "Access can beat ownership when use is low.",
            "explanation": "Access can beat ownership when use is low.",
            "logText": "Car Access Without Owning: Use the co-op for rare trips. Req: needsTransport. Outcome/effects: Lower fixed cost"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Save toward owning later. Req: Discipline ≥ 45. Outcome/effects: Car fund grows",
        "description": "current access limited.",
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
            "feedback": "Saving keeps options open.",
            "explanation": "Saving keeps options open.",
            "logText": "Car Access Without Owning: Save toward owning later. Req: Discipline ≥ 45. Outcome/effects: Car fund grows"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Stick with transit and rides from support circle. Req: supportCircle.family or transit access. Outcome/effects: Cash saved",
        "description": "dependence/scheduling remains.",
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
            "feedback": "Low-cost transport can still cost time and coordination.",
            "explanation": "Low-cost transport can still cost time and coordination.",
            "logText": "Car Access Without Owning: Stick with transit and rides from support circle. Req: supportCircle.family or transit access. Outcome/effects: Cash saved"
          }
        ]
      }
    ],
    "reflectionPrompt": "How many trips would change the math?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Owning gives control, but access models can be cheaper for occasional use."
  },
  {
    "id": "ctx-orbit-work-shoes-cost-per-shift",
    "title": "Shoes for the Shift",
    "prompt": "A job requires plain black shoes. One pair is $29 and may last 20 shifts; another is $54 and may last 60 shifts.",
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
        "label": "Buy the $29 pair. Req: cash ≥ $29. Outcome/effects: Lower cost now",
        "description": "higher cost per shift.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": -29
              }
            ],
            "feedback": "$29 ÷ 20 = about $1.45 per shift.",
            "explanation": "$29 ÷ 20 = about $1.45 per shift.",
            "logText": "Shoes for the Shift: Buy the $29 pair. Req: cash ≥ $29. Outcome/effects: Lower cost now"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Buy the $54 pair. Req: cash ≥ $54. Outcome/effects: More cash now",
        "description": "lower cost per shift.",
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
            "feedback": "$54 ÷ 60 = $0.90 per shift.",
            "explanation": "$54 ÷ 60 = $0.90 per shift.",
            "logText": "Shoes for the Shift: Buy the $54 pair. Req: cash ≥ $54. Outcome/effects: More cash now"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Ask if the workplace has a discount or closet. Req: Opportunity ≥ 50. Outcome/effects: Possible lower cost",
        "description": "confidence rises.",
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
            "feedback": "Asking about resources can reduce job-start costs.",
            "explanation": "Asking about resources can reduce job-start costs.",
            "logText": "Shoes for the Shift: Ask if the workplace has a discount or closet. Req: Opportunity ≥ 50. Outcome/effects: Possible lower cost"
          }
        ]
      }
    ],
    "reflectionPrompt": "Did lower price mean lower cost?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "The cheaper pair may be best if cash is tight, even if the durable pair is better long-term."
  },
  {
    "id": "ctx-orbit-work-study-hours-balance",
    "title": "Work-Study Hours",
    "prompt": "A fictional aid offer includes work-study. You can earn up to $900 during the term, but only by working hours.",
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
        "label": "Schedule 6 hours/week. Req: decodedAidOffer. Outcome/effects: Earned aid grows",
        "description": "study time lower.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 900
              }
            ],
            "feedback": "6 hours × 10 weeks × $15 = $900.",
            "explanation": "6 hours × 10 weeks × $15 = $900.",
            "logText": "Work-Study Hours: Schedule 6 hours/week. Req: decodedAidOffer. Outcome/effects: Earned aid grows"
          }
        ]
      },
      {
        "id": "choice-2",
        "label": "Schedule 3 hours/week. Req: decodedAidOffer. Outcome/effects: Less money earned",
        "description": "more time protected.",
        "outcomes": [
          {
            "id": "outcome-1",
            "probability": 1,
            "effects": [
              {
                "type": "cash",
                "amount": 900
              }
            ],
            "feedback": "3 × 10 × $15 = $450.",
            "explanation": "3 × 10 × $15 = $450.",
            "logText": "Work-Study Hours: Schedule 3 hours/week. Req: decodedAidOffer. Outcome/effects: Less money earned"
          }
        ]
      },
      {
        "id": "choice-3",
        "label": "Decline work-study and reduce costs elsewhere. Req: Money Know-How ≥ 55. Outcome/effects: Schedule protected",
        "description": "gap remains.",
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
            "feedback": "Aid you earn is useful only if the hours fit.",
            "explanation": "Aid you earn is useful only if the hours fit.",
            "logText": "Work-Study Hours: Decline work-study and reduce costs elsewhere. Req: Money Know-How ≥ 55. Outcome/effects: Schedule protected"
          }
        ]
      }
    ],
    "reflectionPrompt": "How did hours become aid?",
    "sourceNote": "MoneyLife context batch ORBIT-HARBOR-47; original synthesized classroom scenario.",
    "randomized": false,
    "tradeoffNote": "Work-study is not automatic cash; it is an earning opportunity."
  }
];
