import type { PlayerStats } from "../types/game";

export type SkillScoreKey = Exclude<keyof PlayerStats, "creditScore">;

export type ScoreRange = {
  min: number;
  max: number;
  label: string;
  meaning: string;
};

export type SkillScoreGuide = {
  key: SkillScoreKey;
  label: string;
  studentName: string;
  ranges: ScoreRange[];
};

const standardRanges = {
  early: { min: 0, max: 20 },
  growing: { min: 21, max: 40 },
  steady: { min: 41, max: 60 },
  strong: { min: 61, max: 80 },
  expert: { min: 81, max: 100 }
};

export const skillScoreGuides: SkillScoreGuide[] = [
  {
    key: "moneyKnowledge",
    label: "Money Know-How",
    studentName: "financial vocabulary and decision skill",
    ranges: [
      { ...standardRanges.early, label: "Needs lots of support", meaning: "Money terms and tradeoffs are still unfamiliar, so choices may feel like guesses." },
      { ...standardRanges.growing, label: "Learning the basics", meaning: "You recognize some ideas, but fees, interest, taxes, and total costs can still surprise you." },
      { ...standardRanges.steady, label: "Practicing with confidence", meaning: "You can explain common terms and compare choices when the numbers are clear." },
      { ...standardRanges.strong, label: "Strong money thinker", meaning: "You usually notice hidden costs, compare options, and use math before deciding." },
      { ...standardRanges.expert, label: "Teacher-level explainer", meaning: "You can connect vocabulary, math, and consequences well enough to teach another player." }
    ]
  },
  {
    key: "wellbeing",
    label: "Wellbeing",
    studentName: "money stress and life balance",
    ranges: [
      { ...standardRanges.early, label: "Very stressed", meaning: "Money surprises feel overwhelming, and choices may reduce focus or confidence." },
      { ...standardRanges.growing, label: "Stretched thin", meaning: "You can keep going, but debt, deadlines, or low savings are adding pressure." },
      { ...standardRanges.steady, label: "Mostly steady", meaning: "You have some stress and some wins; one surprise can still shake the plan." },
      { ...standardRanges.strong, label: "Balanced and steady", meaning: "Your plan leaves room for needs, goals, and a little joy without constant pressure." },
      { ...standardRanges.expert, label: "Resilient balance", meaning: "You can handle tradeoffs, recover from setbacks, and keep money from controlling the whole story." }
    ]
  },
  {
    key: "trustSafety",
    label: "Safety",
    studentName: "scam awareness and protection habits",
    ranges: [
      { ...standardRanges.early, label: "High risk", meaning: "Suspicious links, passwords, or urgent payment requests are easy to miss." },
      { ...standardRanges.growing, label: "Vulnerable but learning", meaning: "You spot obvious scams, but pressure, fake messages, or payment apps can still trick you." },
      { ...standardRanges.steady, label: "Cautious", meaning: "You pause more often, check sources, and protect some accounts." },
      { ...standardRanges.strong, label: "Well protected", meaning: "You use safer contact paths, stronger logins, and careful sharing habits." },
      { ...standardRanges.expert, label: "Scam defender", meaning: "You can recognize patterns, warn others, and recover quickly when something looks wrong." }
    ]
  },
  {
    key: "discipline",
    label: "Discipline",
    studentName: "follow-through with plans and habits",
    ranges: [
      { ...standardRanges.early, label: "Impulse mode", meaning: "Spending, saving, and deadlines often happen without a plan." },
      { ...standardRanges.growing, label: "Inconsistent", meaning: "You make good plans sometimes, but social pressure or surprises can knock them off track." },
      { ...standardRanges.steady, label: "Building routines", meaning: "You are starting to use budgets, reminders, and savings habits regularly." },
      { ...standardRanges.strong, label: "Reliable planner", meaning: "You usually follow through, adjust when needed, and protect goals before wants." },
      { ...standardRanges.expert, label: "Automatic good habits", meaning: "Your systems do a lot of the work: alerts, saving first, checking balances, and planning ahead." }
    ]
  },
  {
    key: "opportunity",
    label: "Opportunity",
    studentName: "future options from school, work, and support",
    ranges: [
      { ...standardRanges.early, label: "Options feel narrow", meaning: "Few doors are ready right now, often because skills, information, support, or money are missing." },
      { ...standardRanges.growing, label: "Some doors opening", meaning: "You have a few options, but preparation, transportation, fees, or confidence may limit them." },
      { ...standardRanges.steady, label: "Building a pathway", meaning: "You are collecting skills, examples, advice, and plans that can lead to more choices." },
      { ...standardRanges.strong, label: "Strong future options", meaning: "You are prepared for applications, interviews, school choices, and lower-cost pathway decisions." },
      { ...standardRanges.expert, label: "Many paths available", meaning: "Your preparation, support circle, and money habits give you several realistic next steps." }
    ]
  }
];

export const creditScoreRanges: ScoreRange[] = [
  { min: 300, max: 579, label: "High risk", meaning: "Borrowing may be expensive or hard to qualify for. On-time payments and lower debt can help rebuild." },
  { min: 580, max: 669, label: "Needs attention", meaning: "Some lenders may approve credit, but rates and terms may not be great yet." },
  { min: 670, max: 739, label: "Building well", meaning: "Credit habits are becoming lender-friendly, especially with on-time payments and lower balances." },
  { min: 740, max: 799, label: "Strong", meaning: "Credit choices are usually helping future borrowing options and lower-cost offers." },
  { min: 800, max: 850, label: "Excellent", meaning: "A long pattern of careful credit use is supporting very strong borrowing options." }
];

export function getScoreRange(value: number, ranges: ScoreRange[]): ScoreRange {
  return ranges.find((range) => value >= range.min && value <= range.max) ?? ranges[ranges.length - 1];
}

export function getCreditScoreRange(score: number | null): ScoreRange | null {
  if (score === null) return null;
  return getScoreRange(score, creditScoreRanges);
}
