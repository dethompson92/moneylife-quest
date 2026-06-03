import { useState } from "react";
import { BookOpen, Trophy, ShieldAlert, Sliders, Info, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { highlightGlossaryTerms } from "../glossary/GlossaryTooltip";

type Slide = {
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
};

export function HowToPlayModal({
  onClose
}: {
  onClose: (dontShowAgain: boolean) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const slides: Slide[] = [
    {
      title: "Welcome to MoneyLife Quest!",
      icon: <BookOpen size={44} className="text-teal" />,
      content: (
        <div style={{ display: "grid", gap: "12px" }}>
          <p>
            {highlightGlossaryTerms("Welcome, student! In this game, you will step into a fictional simulator, making major financial and life decisions as you age from 12 to 22+.")}
          </p>
          <p>
            {highlightGlossaryTerms("Every choice you make shapes your financial profile, relationships, and ultimate success. There are no simple right answers; instead, you will learn to manage real-life tradeoffs!")}
          </p>
        </div>
      )
    },
    {
      title: "Your Life Skills & Stats",
      icon: <Info size={44} className="text-navy" />,
      content: (
        <div style={{ display: "grid", gap: "10px" }}>
          <p>{highlightGlossaryTerms("You have four primary skills to balance:")}</p>
          <ul style={{ paddingLeft: "20px", display: "grid", gap: "6px", margin: 0 }}>
            <li>💡 {highlightGlossaryTerms("Money Know-How: Your literacy. Higher scores unlock smarter financial opportunities.")}</li>
            <li>♥ {highlightGlossaryTerms("Wellbeing: Happiness. Stressful spending or crushing debt will lower this. Keep it high!")}</li>
            <li>🛡 {highlightGlossaryTerms("Safety: Scam defense. Protects your cash and identity from digital scams.")}</li>
            <li>◎ {highlightGlossaryTerms("Discipline: Consistency. Helps you stick to savings habits and make thoughtful decisions.")}</li>
          </ul>
        </div>
      )
    },
    {
      title: "How to Win & Lose",
      icon: <Trophy size={44} className="text-purple" />,
      content: (
        <div style={{ display: "grid", gap: "12px" }}>
          <div>
            <strong className="text-teal-dark">🏆 How to Win:</strong>
            <p style={{ margin: "4px 0 0 0" }}>
              {highlightGlossaryTerms("At start, you choose a Life Goal, like build a $500 emergency buffer, save for college, or invest. Achieve 100% of your Goal Objectives by the final year to win!")}
            </p>
          </div>
          <div>
            <strong style={{ color: "var(--coral)" }}>⚠️ How to Lose:</strong>
            <p style={{ margin: "4px 0 0 0" }}>
              {highlightGlossaryTerms("The game ends early if your Wellbeing hits 0, or if you run out of cash and get buried under mounting credit card and loan debt.")}
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Key In-Game Features",
      icon: <Sliders size={44} className="text-teal" />,
      content: (
        <div style={{ display: "grid", gap: "10px" }}>
          <p>{highlightGlossaryTerms("Use these specialized helpers inside the app:")}</p>
          <ul style={{ paddingLeft: "20px", display: "grid", gap: "6px", margin: 0 }}>
            <li>📊 {highlightGlossaryTerms("Interactive Budget Plan: Adjust ranges for Needs, Wants, and Savings. You must allocate exactly 100% of your earnings to lock in.")}</li>
            <li>🏷 {highlightGlossaryTerms("Reversibility Tags: Event choices flag if a cost is Easy to Undo, Hard to Undo like a Subscription, or Can't Undo like Debt or a Contract.")}</li>
            <li>🧮 {highlightGlossaryTerms("Math breakout: Click Show Math Helper during percent questions to see conversion calculations step by step.")}</li>
          </ul>
        </div>
      )
    },
    {
      title: "Privacy & Classroom Settings",
      icon: <ShieldAlert size={44} className="text-navy" />,
      content: (
        <div style={{ display: "grid", gap: "12px" }}>
          <p>
            {highlightGlossaryTerms("School-Safe Privacy: The app never asks for real names, emails, or personal identifiers. Choose a fun fictional nickname!")}
          </p>
          <p>
            {highlightGlossaryTerms("Local Auto-Save: Your progress is saved only in this browser using local storage. You can resume or restart at any time.")}
          </p>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      onClose(dontShowAgain);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const active = slides[currentSlide];

  return (
    <div className="modal-backdrop" role="presentation" style={{ zIndex: 100 }}>
      <section 
        className="modal walkthrough-modal" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="walkthrough-title"
        style={{
          maxWidth: "480px",
          borderRadius: "var(--radius)",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--line)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          padding: "24px",
          display: "grid",
          gap: "20px"
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 id="walkthrough-title" style={{ fontSize: "1.15rem", color: "var(--muted)", margin: 0, fontWeight: "normal" }}>
            How to Play Guide ({currentSlide + 1}/{slides.length})
          </h2>
          <button 
            type="button" 
            onClick={() => onClose(dontShowAgain)} 
            aria-label="Skip walkthrough"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Slide Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", minHeight: "220px", justifyContent: "center", gap: "15px" }}>
          <div style={{ animation: "pulse 2s infinite" }}>{active.icon}</div>
          <h3 style={{ fontSize: "1.4rem", color: "var(--navy)", margin: 0 }}>{active.title}</h3>
          <div style={{ fontSize: "0.95rem", color: "var(--navy)", textAlign: "left", width: "100%", lineHeight: 1.5 }}>
            {active.content}
          </div>
        </div>

        {/* Footer controls */}
        <div style={{ display: "grid", gap: "15px", borderTop: "1px solid var(--line)", paddingTop: "15px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--muted)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                style={{ accentColor: "var(--teal)" }}
              />
              <span>Don't show this on game start</span>
            </label>
            {currentSlide < slides.length - 1 && (
              <button 
                type="button" 
                onClick={() => onClose(dontShowAgain)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.88rem", color: "var(--muted)" }}
              >
                Skip
              </button>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
            <Button
              variant="secondary"
              disabled={currentSlide === 0}
              onClick={handleBack}
              icon={<ChevronLeft size={16} />}
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              icon={currentSlide === slides.length - 1 ? undefined : <ChevronRight size={16} />}
            >
              {currentSlide === slides.length - 1 ? "Start Play!" : "Next"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
