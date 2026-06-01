export type GameMode = "quick-class" | "full-sandbox" | "topic-practice";

export type Topic =
  | "money-values"
  | "consumer-skills"
  | "budgeting"
  | "banking"
  | "credit"
  | "saving"
  | "investing"
  | "insurance"
  | "scams"
  | "career"
  | "life-after-high-school"
  | "taxes";

export type LifeStage =
  | "middle-school"
  | "high-school"
  | "postsecondary"
  | "early-career"
  | "adult";

export type PlayerStats = {
  wellbeing: number;
  moneyKnowledge: number;
  discipline: number;
  trustSafety: number;
  opportunity: number;
  creditScore: number | null;
};

export type Budget = {
  needsPercent: number;
  wantsPercent: number;
  savingsPercent: number;
  givingPercent: number;
  debtPaymentPercent: number;
};

export type Account = {
  id: string;
  type: "checking" | "savings";
  name: string;
  hasAlerts: boolean;
  monthlyFee: number;
};

export type Debt = {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
};

export type Asset = {
  id: string;
  name: string;
  value: number;
};

export type InvestmentHolding = {
  id: string;
  name: string;
  value: number;
  risk: "low" | "medium" | "high";
  diversified: boolean;
};

export type FinanceProfile = {
  cash: number;
  checking: number;
  savings: number;
  investments: number;
  debtTotal: number;
  annualIncome: number;
  annualTaxes: number;
  budget: Budget;
  accounts: Account[];
  debts: Debt[];
  assets: Asset[];
  portfolio: InvestmentHolding[];
};

export type Character = {
  id: string;
  displayName: string;
  avatarEmoji: string;
  age: number;
  lifeStage: LifeStage;
  background: {
    allowanceAnnual: number;
    familySupportLevel: 0 | 1 | 2 | 3;
    startingMoneyKnowledge: number;
  };
};

export type Requirement =
  | { type: "minAge"; value: number }
  | { type: "maxAge"; value: number }
  | { type: "minCash"; value: number }
  | { type: "minSavings"; value: number }
  | { type: "minInvestments"; value: number }
  | { type: "maxDebt"; value: number }
  | { type: "hasCredit"; value?: boolean }
  | { type: "flagEquals"; key: string; value: boolean | string | number }
  | { type: "statAtLeast"; stat: keyof PlayerStats; value: number };

export type Effect =
  | { type: "cash"; amount: number }
  | { type: "checking"; amount: number }
  | { type: "savings"; amount: number }
  | { type: "investments"; amount: number }
  | { type: "debt"; amount: number }
  | { type: "income"; amount: number }
  | { type: "taxes"; amount: number }
  | { type: "stat"; stat: keyof PlayerStats; amount: number }
  | { type: "creditScore"; amount: number }
  | { type: "flag"; key: string; value: boolean | string | number }
  | { type: "achievement"; achievementId: string };

export type Outcome = {
  id: string;
  probability: number;
  effects: Effect[];
  feedback: string;
  explanation: string;
  logText: string;
};

export type Choice = {
  id: string;
  label: string;
  description?: string;
  requirements?: Requirement[];
  outcomes: Outcome[];
};

export type ScenarioEvent = {
  id: string;
  title: string;
  prompt: string;
  topics: Topic[];
  ageRange: { min: number; max: number };
  lifeStages?: LifeStage[];
  baseWeight: number;
  requirements?: Requirement[];
  choices: Choice[];
  reflectionPrompt: string;
  sourceNote?: string;
};

export type LogEntry = {
  id: string;
  turn: number;
  age: number;
  title: string;
  body: string;
  topic?: Topic;
  effects?: string[];
  createdAt: string;
};

export type GoalObjective = {
  id: string;
  label: string;
  complete: boolean;
};

export type GoalDefinition = {
  id: string;
  title: string;
  description: string;
  relatedTopics: Topic[];
  objectives: Omit<GoalObjective, "complete">[];
  completionMessage: string;
};

export type AchievementDefinition = {
  id: string;
  title: string;
  description: string;
};

export type GameSettings = {
  reducedMotion: boolean;
  highContrast: boolean;
  textSize: "standard" | "large" | "extra-large";
};

export type GameState = {
  version: number;
  id: string;
  status: "active" | "event-pending" | "ended";
  mode: GameMode;
  seed?: string;
  rngState: number;
  turn: number;
  character: Character;
  activeGoalId: string;
  activeTopicFilter: Topic[];
  stats: PlayerStats;
  finances: FinanceProfile;
  flags: Record<string, boolean | string | number>;
  pendingEventId?: string;
  pendingFeedback?: string;
  pendingEffectSummary?: string[];
  completedEventIds: string[];
  log: LogEntry[];
  achievements: string[];
  goalObjectives: GoalObjective[];
  endingReason?: string;
  settings: GameSettings;
  createdAt: string;
  updatedAt: string;
};

export type NewGameOptions = {
  nickname?: string;
  avatarEmoji?: string;
  mode?: GameMode;
  seed?: string;
  goalId?: string;
  topicFilter?: Topic[];
};

export type StorageResult<T> =
  | { ok: true; value: T | null }
  | { ok: false; error: string };
