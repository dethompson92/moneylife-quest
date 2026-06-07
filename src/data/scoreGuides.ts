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
  studentLabel: string;
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
    studentLabel: "financial vocabulary and decision skill",
    ranges: [
      { ...standardRanges.early, label: "Collecting basics", meaning: "Money words, totals, and tradeoffs are still new. Every definition and small comparison helps." },
      { ...standardRanges.growing, label: "Recognizing choices", meaning: "You recognize common choices and are starting to compare prices, fees, risks, and timing." },
      { ...standardRanges.steady, label: "Explaining tradeoffs", meaning: "You can explain everyday tradeoffs and ask useful questions before deciding." },
      { ...standardRanges.strong, label: "Planning ahead", meaning: "You plan ahead, check totals, and notice hidden costs before they shrink your options." },
      { ...standardRanges.expert, label: "Systems thinker", meaning: "You think in systems and can coach a peer through a money choice using vocabulary and math." }
    ]
  },
  {
    key: "wellbeing",
    label: "Wellbeing",
    studentLabel: "money stress and life balance",
    ranges: [
      { ...standardRanges.early, label: "Stretched thin", meaning: "Money pressure is high. Rest, support, and recovery routes matter more than trying to be perfect." },
      { ...standardRanges.growing, label: "Pressure building", meaning: "Some pressure is building. Small repairs, reminders, or help from the support circle can steady the run." },
      { ...standardRanges.steady, label: "Workable balance", meaning: "You have a workable balance with normal ups and downs. One surprise can still matter." },
      { ...standardRanges.strong, label: "Steady enough", meaning: "Your plan is steady enough to handle most surprises without losing the whole route." },
      { ...standardRanges.expert, label: "Strong and supported", meaning: "You are strong, supported, and ready for new challenges while still protecting balance." }
    ]
  },
  {
    key: "trustSafety",
    label: "Safety",
    studentLabel: "scam awareness and protection habits",
    ranges: [
      { ...standardRanges.early, label: "Open risk", meaning: "Lots of risk is open. Start with pause-and-verify habits before sending money or sharing information." },
      { ...standardRanges.growing, label: "Gaps remain", meaning: "Some safety habits exist, but pressure, unknown links, and payment shortcuts can still create gaps." },
      { ...standardRanges.steady, label: "Usually checks", meaning: "You usually check sources, recipients, and warnings before risky money moves." },
      { ...standardRanges.strong, label: "Strong habits", meaning: "Alerts, confirmation, verification, and records are becoming strong habits." },
      { ...standardRanges.expert, label: "Hard to rush", meaning: "You are very hard to rush or trick because you pause, verify, document, report, and recover." }
    ]
  },
  {
    key: "discipline",
    label: "Discipline",
    studentLabel: "follow-through with plans and habits",
    ranges: [
      { ...standardRanges.early, label: "Needs systems", meaning: "Plans are hard to keep right now. Use reminders, alerts, and small routines instead of shame." },
      { ...standardRanges.growing, label: "Some follow-through", meaning: "You follow through sometimes, especially when reminders or clear deadlines are in place." },
      { ...standardRanges.steady, label: "Normal routines", meaning: "Most routines work when life is normal, but surprises can still knock the plan sideways." },
      { ...standardRanges.strong, label: "Reliable routines", meaning: "Reliable routines protect goals, due dates, balances, and future choices." },
      { ...standardRanges.expert, label: "Habits compound", meaning: "Strong habits quietly compound because systems do some of the work before stress arrives." }
    ]
  },
  {
    key: "opportunity",
    label: "Opportunity",
    studentLabel: "future options from school, work, and support",
    ranges: [
      { ...standardRanges.early, label: "Few routes open", meaning: "Few routes are open now, but skills, support, records, and planning can change that." },
      { ...standardRanges.growing, label: "Options forming", meaning: "A few options are forming, though timing, cost, confidence, or preparation may still limit them." },
      { ...standardRanges.steady, label: "Several paths", meaning: "Several realistic paths are available through skills, school choices, support, and planning." },
      { ...standardRanges.strong, label: "Strong routes", meaning: "Strong routes are available because reliability, skills, support, and money habits are working together." },
      { ...standardRanges.expert, label: "Many doors open", meaning: "Many doors are open; you have choices and can compare them instead of grabbing the only route." }
    ]
  }
];

export const creditScoreRanges: ScoreRange[] = [
  { min: 300, max: 579, label: "Starting or rebuilding", meaning: "Steady habits matter. On-time payments, lower balances, and checking reports can rebuild options." },
  { min: 580, max: 669, label: "Fair range", meaning: "Progress is possible with on-time payments, low balances, and careful borrowing choices." },
  { min: 670, max: 739, label: "Good", meaning: "Many borrowing routes may be easier, especially when balances stay low and payments are on time." },
  { min: 740, max: 799, label: "Very strong", meaning: "Favorable terms are more likely, though credit is still only one part of money health." },
  { min: 800, max: 850, label: "Excellent", meaning: "A long pattern of careful credit habits is visible, but credit is still not a measure of self-worth." }
];

export function getScoreRange(value: number, ranges: ScoreRange[]): ScoreRange {
  return ranges.find((range) => value >= range.min && value <= range.max) ?? ranges[ranges.length - 1];
}

export function getCreditScoreRange(score: number | null): ScoreRange | null {
  if (score === null) return null;
  return getScoreRange(score, creditScoreRanges);
}
