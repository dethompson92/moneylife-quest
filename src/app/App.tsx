import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Banknote, BookOpen, Brain, CreditCard, LockKeyhole, PiggyBank, ShieldCheck, Sparkles, Trophy, WalletCards } from "lucide-react";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { MoneyChip } from "../components/ui/MoneyChip";
import { StatBar } from "../components/ui/StatBar";
import { CharacterHeader } from "../features/character/CharacterHeader";
import { SupportCirclePanel } from "../features/character/SupportCirclePanel";
import { TermSpotlight } from "../features/glossary/TermSpotlight";
import { ScoreGuidePanel } from "../features/stats/ScoreGuidePanel";
import { EventModal } from "../features/events/EventModal";
import { ActivitiesHub } from "../features/activities/ActivitiesHub";
import { BudgetScreen } from "../features/finance/BudgetScreen";
import { BankScreen } from "../features/finance/BankScreen";
import { CreditScreen } from "../features/finance/CreditScreen";
import { InvestScreen } from "../features/finance/InvestScreen";
import { ProtectScreen } from "../features/finance/ProtectScreen";
import { NetWorthScreen } from "../features/finance/NetWorthScreen";
import { HowToPlayModal } from "../features/help/HowToPlayModal";
import { GoalSelection } from "../features/goals/GoalSelection";
import { GoalsScreen } from "../features/goals/GoalsScreen";
import { SummaryScreen } from "../features/summary/SummaryScreen";
import { TeacherGuide } from "../features/teacher/TeacherGuide";
import { SettingsScreen } from "../features/settings/SettingsScreen";
import { IssueReporter } from "../features/reporting/IssueReporter";
import { avatarEmoji } from "../data/avatars";
import { allTopics, createNewGame } from "../features/game/gameActions";
import { resolveChoice } from "../features/events/eventEngine";
import { ageUp } from "../features/game/gameActions";
import { runActivity } from "../features/activities/activityDefinitions";
import { clearGame, loadGame, loadSettings, saveGame, saveSettings } from "../lib/storage";
import { parseClassParams } from "../lib/queryParams";
import { isTeacherUnlocked, lockTeacherMode, teacherPasswordAvailable, unlockTeacherMode, validateTeacherPassword } from "../lib/teacherAccess";
import type { GameMode, GameSettings, GameState, Budget } from "../types/game";
import type { Screen } from "./routes";

type SetupDraft = {
  nickname: string;
  avatarEmoji: string;
  mode: GameMode;
};

export function App() {
  const classParams = useMemo(() => parseClassParams(), []);
  const [screen, setScreen] = useState<Screen>("home");
  const [game, setGame] = useState<GameState | null>(null);
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [settings, setSettings] = useState<GameSettings>(() => loadSettings());
  const [saveError, setSaveError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [teacherUnlocked, setTeacherUnlocked] = useState(() => isTeacherUnlocked());
  const [draft, setDraft] = useState<SetupDraft>({
    nickname: "",
    avatarEmoji: avatarEmoji[0],
    mode: classParams.mode ?? "quick-class"
  });
  const [selectedGoal, setSelectedGoal] = useState(classParams.goal ?? "emergency-fund-hero");

  useEffect(() => {
    const loaded = loadGame();
    if (loaded.ok) {
      setGame(loaded.value);
      if (loaded.value?.status === "ended") setScreen("summary");
    } else {
      setSaveError(loaded.error);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = settings.reducedMotion ? "reduced" : "standard";
    document.documentElement.dataset.contrast = settings.highContrast ? "high" : "standard";
    document.documentElement.dataset.textSize = settings.textSize;
    saveSettings(settings);
  }, [settings]);

  useEffect(() => {
    if (game) saveGame(game);
  }, [game]);

  useEffect(() => {
    if (game?.status === "ended") setScreen("summary");
  }, [game?.status]);

  function navigate(next: Screen) {
    setScreen(next);
  }

  function startNewGame() {
    const next = createNewGame({
      nickname: draft.nickname,
      avatarEmoji: draft.avatarEmoji,
      mode: draft.mode,
      seed: classParams.seed,
      goalId: selectedGoal,
      topicFilter: classParams.topics ?? allTopics
    });
    setGame(next);
    setScreen("dashboard");
    if (localStorage.getItem("moneylife.skipTutorial") !== "true") {
      setShowWalkthrough(true);
    }
  }

  function updateSettings(next: GameSettings) {
    setSettings(next);
    if (game) setGame({ ...game, settings: next });
  }

  function resetGame() {
    clearGame();
    setGame(null);
    setScreen("home");
    setSaveError(null);
  }

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setToast("Copied");
    } catch {
      setToast("Copy failed. Select the text manually.");
    }
    window.setTimeout(() => setToast(null), 1800);
  }

  function runBudgetPreset(preset: "balanced" | "save" | "fun") {
    if (!game) return;
    const budgets = {
      balanced: { needsPercent: 45, wantsPercent: 25, savingsPercent: 20, givingPercent: 5, debtPaymentPercent: 5 },
      save: { needsPercent: 42, wantsPercent: 13, savingsPercent: 35, givingPercent: 5, debtPaymentPercent: 5 },
      fun: { needsPercent: 40, wantsPercent: 38, savingsPercent: 12, givingPercent: 5, debtPaymentPercent: 5 }
    };
    setGame({
      ...game,
      finances: { ...game.finances, budget: budgets[preset] },
      log: [
        {
          id: `budget-${Date.now()}`,
          turn: game.turn,
          age: game.character.age,
          title: "Budget Updated",
          body: `You chose a ${preset} budget style.`,
          topic: "budgeting",
          createdAt: new Date().toISOString()
        },
        ...game.log
      ]
    });
  }

  function updateBudget(newBudget: Budget) {
    if (!game) return;
    setGame({
      ...game,
      finances: { ...game.finances, budget: newBudget },
      log: [
        {
          id: `budget-${Date.now()}`,
          turn: game.turn,
          age: game.character.age,
          title: "Budget Customized",
          body: `You set a custom budget allocation: Needs ${newBudget.needsPercent}%, Wants ${newBudget.wantsPercent}%, Savings ${newBudget.savingsPercent}%, Giving ${newBudget.givingPercent}%, Debt ${newBudget.debtPaymentPercent}%.`,
          topic: "budgeting",
          createdAt: new Date().toISOString()
        },
        ...game.log
      ]
    });
    setToast("Custom budget saved!");
    window.setTimeout(() => setToast(null), 1800);
  }

  function renderScreen() {
    if (screen === "home") {
      return (
        <HomeScreen
          hasSave={Boolean(game)}
          saveError={saveError}
          classMode={Boolean(classParams.seed || classParams.topicKey !== "all")}
          onStart={() => setScreen("setup")}
          onContinue={() => setScreen(game?.status === "ended" ? "summary" : "dashboard")}
          onTeacher={() => setScreen("teacher")}
          onPrivacy={() => setScreen("privacy")}
          onClearBadSave={resetGame}
          onWalkthrough={() => setShowWalkthrough(true)}
        />
      );
    }
    if (screen === "setup") {
      return <NewLifeSetup draft={draft} onDraft={setDraft} onNext={() => setScreen("goal-select")} />;
    }
    if (screen === "goal-select") {
      return <GoalSelection selectedGoal={selectedGoal} onSelect={setSelectedGoal} onStart={startNewGame} />;
    }
    if (screen === "teacher") {
      if (!teacherUnlocked) {
        return (
          <TeacherGate
            passwordAvailable={teacherPasswordAvailable()}
            onUnlock={async (password) => {
              if (!(await validateTeacherPassword(password))) return false;
              unlockTeacherMode();
              setTeacherUnlocked(true);
              return true;
            }}
          />
        );
      }
      return (
        <TeacherGuide
          onCopy={copyText}
          onLock={() => {
            lockTeacherMode();
            setTeacherUnlocked(false);
          }}
        />
      );
    }
    if (screen === "privacy") return <PrivacyScreen />;
    if (screen === "settings") return <SettingsScreen settings={settings} onSettings={updateSettings} onReset={resetGame} onWalkthrough={() => setShowWalkthrough(true)} />;
    if (!game) return <HomeScreen hasSave={false} saveError={null} classMode={false} onStart={() => setScreen("setup")} onContinue={() => undefined} onTeacher={() => setScreen("teacher")} onPrivacy={() => setScreen("privacy")} onClearBadSave={resetGame} onWalkthrough={() => setShowWalkthrough(true)} />;
    if (screen === "summary") return <SummaryScreen game={game} onCopy={copyText} onRestart={resetGame} />;
    if (screen === "activities") return <ActivitiesHub game={game} onRunActivity={(id) => setGame(runActivity(game, id))} onNavigate={setScreen} />;
    if (screen === "money") return <BudgetScreen game={game} onPreset={runBudgetPreset} onSaveCustomBudget={updateBudget} onNavigate={setScreen} />;
    if (screen === "bank") return <BankScreen game={game} onAction={(id) => setGame(runActivity(game, id))} />;
    if (screen === "credit") return <CreditScreen game={game} onAction={(id) => setGame(runActivity(game, id))} />;
    if (screen === "invest") return <InvestScreen game={game} onAction={(id) => setGame(runActivity(game, id))} />;
    if (screen === "protect") return <ProtectScreen game={game} onAction={(id) => setGame(runActivity(game, id))} />;
    if (screen === "networth") return <NetWorthScreen game={game} onNavigate={setScreen} />;
    if (screen === "goals") return <GoalsScreen game={game} />;
    return (
      <Dashboard
        game={game}
        onAgeUp={() => setGame(ageUp(game))}
        onResolve={(eventId, choiceId) => setGame(resolveChoice(game, eventId, choiceId))}
      />
    );
  }

  return (
    <AppShell screen={screen} game={game} onNavigate={navigate}>
      {renderScreen()}
      <IssueReporter game={game} onCopy={copyText} />
      {toast ? <div className="toast" role="status">{toast}</div> : null}
      {showWalkthrough && (
        <HowToPlayModal
          onClose={(dontShowAgain) => {
            if (dontShowAgain) {
              localStorage.setItem("moneylife.skipTutorial", "true");
            }
            setShowWalkthrough(false);
          }}
        />
      )}
    </AppShell>
  );
}

function HomeScreen({
  hasSave,
  saveError,
  classMode,
  onStart,
  onContinue,
  onTeacher,
  onPrivacy,
  onClearBadSave,
  onWalkthrough
}: {
  hasSave: boolean;
  saveError: string | null;
  classMode: boolean;
  onStart: () => void;
  onContinue: () => void;
  onTeacher: () => void;
  onPrivacy: () => void;
  onClearBadSave: () => void;
  onWalkthrough: () => void;
}) {
  return (
    <section className="home-screen">
      <div className="home-screen__copy">
        <WalletCards aria-hidden="true" className="home-screen__logo" />
        <h1>MoneyLife Quest</h1>
        <p>Personal Finance Simulator</p>
        {classMode ? <strong className="class-mode">Class seed link active</strong> : null}
        <div className="button-column">
          <Button onClick={onStart} icon={<Sparkles aria-hidden="true" />}>Start New Life</Button>
          <Button variant="secondary" onClick={onContinue} disabled={!hasSave}>Continue Saved Life</Button>
          <Button variant="secondary" onClick={onWalkthrough} icon={<BookOpen aria-hidden="true" />}>How to Play</Button>
          <Button variant="ghost" onClick={onTeacher} icon={<LockKeyhole aria-hidden="true" />}>Teacher Tools</Button>
          <Button variant="ghost" onClick={onPrivacy}>Privacy</Button>
        </div>
        {saveError ? (
          <div className="error-box">
            <strong>Saved game needs reset</strong>
            <p>{saveError}</p>
            <Button variant="danger" onClick={onClearBadSave}>Clear Broken Save</Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function TeacherGate({ passwordAvailable, onUnlock }: { passwordAvailable: boolean; onUnlock: (password: string) => Promise<boolean> }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsChecking(true);
    try {
      const ok = await onUnlock(password);
      setError(ok ? null : "That password did not unlock teacher tools.");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <section className="screen-panel teacher-gate">
      <div className="section-heading">
        <LockKeyhole aria-hidden="true" className="teacher-gate__icon" />
        <h2>Teacher Tools Locked</h2>
        <p>Teacher guide, source links, and class link tools are hidden from the student view.</p>
      </div>
      <form onSubmit={submit}>
        <label>
          Teacher password
          <input
            type="password"
            value={password}
            disabled={!passwordAvailable}
            autoComplete="off"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {!passwordAvailable ? (
          <p className="form-error" role="alert">Teacher password hash is not configured for this deployment yet.</p>
        ) : error ? (
          <p className="form-error" role="alert">{error}</p>
        ) : null}
        <Button type="submit" disabled={!passwordAvailable || isChecking}>{isChecking ? "Checking..." : "Unlock Teacher Tools"}</Button>
      </form>
      <p className="teacher-gate__note">Teacher tools use a one-way deployment hash. Do not place private answer keys, rosters, grades, or sensitive student information in a public static build.</p>
    </section>
  );
}

function NewLifeSetup({
  draft,
  onDraft,
  onNext
}: {
  draft: SetupDraft;
  onDraft: (draft: SetupDraft) => void;
  onNext: () => void;
}) {
  return (
    <section className="screen-panel setup-screen">
      <div className="section-heading">
        <h2>New Life Setup</h2>
        <p>Use a nickname or leave it blank for a random fictional name.</p>
      </div>
      <label>
        Nickname
        <input
          value={draft.nickname}
          maxLength={18}
          placeholder="Nickname only"
          onChange={(event) => onDraft({ ...draft, nickname: event.target.value })}
        />
        <small>Do not enter a real full name, email, school ID, address, or phone number.</small>
      </label>
      <fieldset>
        <legend>Avatar</legend>
        <div className="avatar-picker">
          {avatarEmoji.map((avatar) => (
            <button className={draft.avatarEmoji === avatar ? "is-selected" : ""} key={avatar} type="button" onClick={() => onDraft({ ...draft, avatarEmoji: avatar })}>
              {avatar}
            </button>
          ))}
        </div>
      </fieldset>
      <label>
        Mode
        <select value={draft.mode} onChange={(event) => onDraft({ ...draft, mode: event.target.value as GameMode })}>
          <option value="quick-class">Quick class mode</option>
          <option value="topic-practice">Topic practice</option>
          <option value="full-sandbox">Full sandbox</option>
        </select>
      </label>
      <Button onClick={onNext} icon={<ArrowRight aria-hidden="true" />}>Choose Goal</Button>
    </section>
  );
}

function Dashboard({
  game,
  onAgeUp,
  onResolve
}: {
  game: GameState;
  onAgeUp: () => void;
  onResolve: (eventId: string, choiceId: string) => void;
}) {
  return (
    <div className="dashboard">
      <CharacterHeader game={game} />
      <section className="money-chip-grid" aria-label="Financial summary">
        <MoneyChip label="Cash" value={game.finances.cash + game.finances.checking} tone="teal" icon={<Banknote />} />
        <MoneyChip label="Savings" value={game.finances.savings} tone="teal" icon={<PiggyBank />} />
        <MoneyChip label="Debt" value={game.finances.debtTotal} tone="coral" icon={<CreditCard />} />
        <MoneyChip label="Credit" value={game.stats.creditScore ? `${game.stats.creditScore}` : "No history"} tone="navy" icon={<ShieldCheck />} />
      </section>
      <div className="dashboard-grid">
        <aside className="stats-panel">
          <h2>Life Skills</h2>
          <StatBar label="Money Know-How" value={game.stats.moneyKnowledge} icon="💡" />
          <StatBar label="Wellbeing" value={game.stats.wellbeing} icon="♥" />
          <StatBar label="Safety" value={game.stats.trustSafety} icon="🛡" />
          <StatBar label="Discipline" value={game.stats.discipline} icon="◎" />
          <StatBar label="Opportunity" value={game.stats.opportunity} icon="↗" />
          <ScoreGuidePanel stats={game.stats} />
          <div className="streak-card">
            <Trophy aria-hidden="true" />
            <span><strong>Badges: {game.achievements.length}</strong><small>Keep making smart choices.</small></span>
          </div>
          <TermSpotlight termIds={["budget", "saving", "debt", "credit-score", "net-worth", "emergency-fund"]} maxTerms={4} />
          <SupportCirclePanel game={game} />
        </aside>
        <section className="life-log">
          <h2>Your Life</h2>
          <Button
            className={`age-up-button${game.status === "event-pending" ? " age-up-button--pending" : ""}`}
            onClick={onAgeUp}
            disabled={game.status !== "active"}
          >
            {game.status === "event-pending" ? "Choose an Event Option" : game.status === "ended" ? "Summary Ready" : "Age Up"}
          </Button>
          <div className="log-list" aria-live="polite">
            {game.pendingFeedback ? (
              <article className="feedback-card">
                <Brain aria-hidden="true" />
                <span>
                  <strong>What I learned</strong>
                  {game.pendingFeedback}
                  {game.pendingEffectSummary?.length ? (
                    <span className="effect-reveal-list" aria-label="Revealed choice effects">
                      {game.pendingEffectSummary.slice(0, 6).map((effect) => (
                        <small key={effect}>{effect}</small>
                      ))}
                    </span>
                  ) : null}
                </span>
              </article>
            ) : null}
            {game.log.map((entry) => (
              <article className="log-entry" key={entry.id}>
                <span className="log-entry__icon" aria-hidden="true">{topicIcon(entry.topic)}</span>
                <div>
                  <strong>Age {entry.age}: {entry.title}</strong>
                  <p>{entry.body}</p>
                  {entry.effects?.length ? <small>{entry.effects.slice(0, 3).join(" · ")}</small> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      {game.pendingEventId ? <EventModal game={game} onResolve={onResolve} /> : null}
    </div>
  );
}

function PrivacyScreen() {
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Privacy</h2>
        <p>Plain-English privacy for classroom use.</p>
      </div>
      <div className="teacher-notes">
        <p>MoneyLife Quest does not ask for full names, emails, phone numbers, school IDs, addresses, or locations.</p>
        <p>It also does not ask for or store ethnicity, race, sex, gender identity, income background, disability status, religion, immigration status, or other real demographic identifiers.</p>
        <p>Progress is saved only in this browser using localStorage. It is not sent to a server.</p>
        <p>Issue reports are created locally and are not sent automatically. A teacher can copy, download, or open a prefilled report link intentionally.</p>
        <p>MoneyLife Quest has no ads, no analytics, no in-app purchases, and no external data APIs.</p>
        <p>The investing section is an educational simulation and is not financial advice.</p>
      </div>
    </section>
  );
}

function topicIcon(topic?: string): string {
  if (topic === "credit") return "💳";
  if (topic === "saving" || topic === "banking") return "🐷";
  if (topic === "investing") return "📈";
  if (topic === "scams" || topic === "insurance") return "🛡";
  if (topic === "career" || topic === "life-after-high-school") return "🎓";
  if (topic === "budgeting" || topic === "taxes") return "📋";
  return "💡";
}
