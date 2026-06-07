import { useMemo, useState } from "react";
import {
  Copy,
  BookOpen,
  Bug,
  Clock,
  MessageSquare,
  ExternalLink,
  Check,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Info,
  ShieldCheck,
  PiggyBank,
  CreditCard,
  Sparkles,
  Lock,
  Search
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import {
  additionalQuestionSparkUrls,
  banzaiInteractiveLinks,
  banzaiResourceLinks,
  coreResourceLinks,
  curriculumResearchNotes,
  questionSparkLinks
} from "../../data/teacherResources";
import { sourceCategories } from "../../data/sourceIndex";
import { buildClassLink, topicOptions } from "../../lib/queryParams";
import { clearDebugReports, deleteDebugReport, loadDebugReports } from "../../lib/storage";
import type { IssueReport } from "../../types/reporting";
import { formatIssue, getDebugReportEndpoint, labelForType } from "../reporting/reportingUtils";
import { goals } from "../goals/goalDefinitions";
import { decodeReflectionCode } from "../summary/summaryGenerator";
import { formatMoney } from "../../lib/formatMoney";

type Tab = "planner" | "prompts" | "resources" | "decoder" | "debug";

const discussionQuestions = [
  { id: "q1", text: "What made one choice safer, cheaper, or more flexible than another?" },
  { id: "q2", text: "When did a short-term benefit create a long-term cost?" },
  { id: "q3", text: "Which habit would help outside the game?" },
  { id: "q4", text: "What did the final summary say was the biggest win or hardest tradeoff?" }
];

export function TeacherGuide({ onCopy, onLock }: { onCopy: (text: string) => void; onLock: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("planner");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedProvider, setSelectedProvider] = useState("all");
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const [inputCode, setInputCode] = useState("");
  const [decodeError, setDecodeError] = useState<string | null>(null);
  const [decodedList, setDecodedList] = useState<Array<{ nickname: string; netWorth: number; objectives: number; badges: number; credit: number | null }>>([]);
  const [debugReports, setDebugReports] = useState<IssueReport[]>(() => loadDebugReports());
  const [copiedDebugId, setCopiedDebugId] = useState<string | null>(null);
  const isDebugInboxConnected = Boolean(getDebugReportEndpoint());

  const [seed, setSeed] = useState("period-3-moneylife");
  const [topic, setTopic] = useState("all");
  const [goal, setGoal] = useState("emergency-fund-hero");
  const link = useMemo(() => buildClassLink({ mode: "quick", topic, seed, goal }), [goal, seed, topic]);

  const selectedGoalDef = useMemo(() => {
    return goals.find((g) => g.id === goal);
  }, [goal]);

  const selectedTopicDesc = useMemo(() => {
    switch (topic) {
      case "consumer":
        return "Focuses student decisions on consumer skills, advertising, budgeting, and money values.";
      case "budgeting":
        return "Emphasizes budgeting calculations, take-home net pay vs gross pay, and paycheck taxes.";
      case "credit":
        return "Highlights types of credit, interest rates, credit score recovery, and loan costs.";
      case "saving":
        return "Prioritizes building emergency savings, bank accounts, and compound interest.";
      case "investing":
        return "Concentrates on stock market risk, dollar-cost averaging, and long-term asset growth.";
      case "protection":
        return "Centers on auto/renters/health insurance premium vs deductible tradeoffs and cyber scams.";
      case "career":
        return "Outlines career pathways, training costs, job benefits, and salary options.";
      default:
        return "Includes a randomized selection of scenarios across all 9 standard units.";
    }
  }, [topic]);

  const allResources = useMemo(() => {
    const list: any[] = [];
    const seenUrls = new Set<string>();

    sourceCategories.forEach((cat) => {
      cat.links.forEach((link) => {
        const key = `${link.title}-${link.url}`;
        if (seenUrls.has(key)) return;
        seenUrls.add(key);

        let provider = "Other";
        if (link.url.includes("ngpf.org")) {
          provider = "NGPF";
        } else if (link.url.includes("banzai.org")) {
          provider = "Banzai";
        } else if (link.url.startsWith("local:") || link.url.includes("exemplar") || link.url.endsWith(".pdf")) {
          provider = "Local Files";
        } else if (link.url.includes("docs.google.com")) {
          provider = "Google Docs";
        } else if (
          link.url.includes(".gov") ||
          link.url.includes("consumerfinance.gov") ||
          link.url.includes("fdic.gov") ||
          link.url.includes("ftc.gov") ||
          link.url.includes("investor.gov") ||
          link.url.includes("studentaid.gov") ||
          link.url.includes("irs.gov")
        ) {
          provider = "Govt/Public";
        }

        list.push({
          ...link,
          categoryTitle: cat.title,
          categoryId: cat.id,
          provider
        });
      });
    });

    return list;
  }, []);

  const matchesSelectedTopic = (resourceTopic: string, filter: string): boolean => {
    if (filter === "all") return true;
    const t = resourceTopic.toLowerCase();
    
    if (filter === "consumer") {
      return t.includes("consumer") || t.includes("values") || t.includes("shop") || t.includes("spending");
    }
    if (filter === "budgeting") {
      return t.includes("budget") || t.includes("tax") || t.includes("paycheck") || t.includes("income");
    }
    if (filter === "credit") {
      return t.includes("credit") || t.includes("loan") || t.includes("debt") || t.includes("borrow");
    }
    if (filter === "saving") {
      return t.includes("sav") || t.includes("bank");
    }
    if (filter === "investing") {
      return t.includes("invest") || t.includes("market") || t.includes("stock") || t.includes("grow");
    }
    if (filter === "protection") {
      return t.includes("scam") || t.includes("insur") || t.includes("protect") || t.includes("cyber") || t.includes("security") || t.includes("fraud");
    }
    if (filter === "career") {
      return t.includes("career") || t.includes("college") || t.includes("job") || t.includes("path") || t.includes("salary") || t.includes("entrepreneur");
    }
    
    return t.includes(filter);
  };

  const filteredResources = useMemo(() => {
    return allResources.filter((item) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.classroomUse.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTopic = matchesSelectedTopic(item.topic, selectedTopic);

      const matchesProvider =
        selectedProvider === "all" ||
        item.provider.toLowerCase() === selectedProvider.toLowerCase();

      return matchesSearch && matchesTopic && matchesProvider;
    });
  }, [allResources, searchTerm, selectedTopic, selectedProvider]);

  const allQods = useMemo(() => {
    const list = [...questionSparkLinks];
    additionalQuestionSparkUrls.forEach((url) => {
      const title = formatQuestionUrl(url);
      if (!list.some((q) => q.url === url)) {
        list.push({
          title,
          topic: "Bell Ringers",
          url,
          classroomUse: "Optional current-events extension for teacher discussion."
        });
      }
    });
    return list;
  }, []);

  const filteredQods = useMemo(() => {
    return allQods.filter((item) => {
      return (
        searchTerm.trim() === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.classroomUse.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [allQods, searchTerm]);

  const getResourceIcon = (provider: string, topic: string) => {
    const p = provider.toLowerCase();
    const t = topic.toLowerCase();
    
    if (p === "local files") return <FileText size={20} className="res-icon res-icon--file" />;
    if (p === "google docs") return <FileText size={20} className="res-icon res-icon--doc" />;
    if (t.includes("scam") || t.includes("insur") || t.includes("protect")) return <ShieldCheck size={20} className="res-icon res-icon--protect" />;
    if (t.includes("invest") || t.includes("stock")) return <Globe size={20} className="res-icon res-icon--invest" />; // simplified fallback
    if (t.includes("budget") || t.includes("tax")) return <FileText size={20} className="res-icon res-icon--budget" />; // simplified fallback
    if (t.includes("sav") || t.includes("bank")) return <PiggyBank size={20} className="res-icon res-icon--save" />;
    if (t.includes("credit") || t.includes("debt") || t.includes("loan")) return <CreditCard size={20} className="res-icon res-icon--credit" />;
    if (t.includes("career") || t.includes("college") || t.includes("job")) return <GraduationCap size={20} className="res-icon res-icon--career" />;
    
    return <Globe size={20} className="res-icon res-icon--link" />;
  };

  const handleCopyLink = () => {
    onCopy(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyPrompt = (id: string, text: string) => {
    onCopy(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const refreshDebugReports = () => {
    setDebugReports(loadDebugReports());
  };

  const handleCopyDebugReport = (report: IssueReport) => {
    onCopy(formatIssue(report));
    setCopiedDebugId(report.id);
    setTimeout(() => setCopiedDebugId(null), 2000);
  };

  const handleDownloadDebugReports = () => {
    const text =
      debugReports.length > 0
        ? debugReports.map((report) => formatIssue(report)).join("\n\n---\n\n")
        : "No MoneyLife Quest debug reports saved on this browser.";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `moneylife-debug-log-${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="screen-panel teacher-dashboard">
      <div className="section-heading section-heading--split">
        <div>
          <h2>Teacher Dashboard</h2>
          <p>Configure play sessions, view lesson guides, and browse curriculum references.</p>
        </div>
        <Button variant="secondary" onClick={onLock} icon={<Lock size={16} aria-hidden="true" />}>
          Lock Teacher Mode
        </Button>
      </div>

      <div className="teacher-tabs">
        <button
          className={`tab-btn ${activeTab === "planner" ? "is-active" : ""}`}
          onClick={() => {
            setActiveTab("planner");
            setSearchTerm("");
          }}
        >
          <Clock size={18} aria-hidden="true" />
          <span>Planner & Setup</span>
        </button>
        <button
          className={`tab-btn ${activeTab === "prompts" ? "is-active" : ""}`}
          onClick={() => {
            setActiveTab("prompts");
            setSearchTerm("");
          }}
        >
          <MessageSquare size={18} aria-hidden="true" />
          <span>Discussion Prompts</span>
        </button>
        <button
          className={`tab-btn ${activeTab === "resources" ? "is-active" : ""}`}
          onClick={() => {
            setActiveTab("resources");
            setSearchTerm("");
          }}
        >
          <BookOpen size={18} aria-hidden="true" />
          <span>Resource Directory</span>
        </button>
        <button
          className={`tab-btn ${activeTab === "decoder" ? "is-active" : ""}`}
          onClick={() => {
            setActiveTab("decoder");
            setSearchTerm("");
            setDecodeError(null);
          }}
        >
          <Search size={18} aria-hidden="true" />
          <span>Code Decoder</span>
        </button>
        <button
          className={`tab-btn ${activeTab === "debug" ? "is-active" : ""}`}
          onClick={() => {
            setActiveTab("debug");
            setSearchTerm("");
            refreshDebugReports();
          }}
        >
          <Bug size={18} aria-hidden="true" />
          <span>Debug Log</span>
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "planner" && (
          <div className="planner-view">
            <div className="dashboard-grid-two-col">
              <div className="left-column">
                <div className="dashboard-card link-builder-card">
                  <div className="card-header">
                    <Sparkles size={20} className="header-icon" aria-hidden="true" />
                    <h3>Class Link Builder</h3>
                  </div>
                  <p className="card-subtitle">Generate a custom quick-start link that configures the simulator variables for your students.</p>
                  
                  <div className="builder-fields">
                    <div className="field-group">
                      <label htmlFor="seed-input">Class Seed (Period / Group)</label>
                      <input
                        id="seed-input"
                        value={seed}
                        placeholder="e.g. period-3-moneylife"
                        onChange={(event) => setSeed(event.target.value)}
                      />
                      <small>Saves matching state. Students starting with the same seed see the same events.</small>
                    </div>

                    <div className="field-row">
                      <div className="field-group">
                        <label htmlFor="topic-select">Topic Focus</label>
                        <select
                          id="topic-select"
                          value={topic}
                          onChange={(event) => setTopic(event.target.value)}
                        >
                          {topicOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div className="field-group">
                        <label htmlFor="goal-select">Student Goal</label>
                        <select
                          id="goal-select"
                          value={goal}
                          onChange={(event) => setGoal(event.target.value)}
                        >
                          {goals.map((goalOption) => (
                            <option key={goalOption.id} value={goalOption.id}>{goalOption.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="helper-preview-box">
                      <div className="helper-item">
                        <strong>Topic: </strong>
                        <span>{selectedTopicDesc}</span>
                      </div>
                      {selectedGoalDef && (
                        <div className="helper-item">
                          <strong>{selectedGoalDef.openEnded ? "Play Style:" : "Goal Objectives:"}</strong>
                          {selectedGoalDef.openEnded ? (
                            <p>Open Life gives students no preset win condition; they play toward a custom personal goal and reflect on the outcomes.</p>
                          ) : (
                            <ul>
                              {selectedGoalDef.objectives.map((obj) => (
                                <li key={obj.id}>{obj.label}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="output-link-box">
                      <output aria-label="Generated class link">{link}</output>
                      <Button
                        icon={copiedLink ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                        variant={copiedLink ? "secondary" : "primary"}
                        onClick={handleCopyLink}
                      >
                        {copiedLink ? "Copied!" : "Copy Class Link"}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card curriculum-fit-card">
                  <div className="card-header">
                    <GraduationCap size={20} className="header-icon" aria-hidden="true" />
                    <h3>Curriculum Fit Notes</h3>
                  </div>
                  <div className="curriculum-notes-list">
                    {curriculumResearchNotes.map((note, idx) => (
                      <p key={idx} className="curriculum-note-item">{note}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="right-column">
                <div className="dashboard-card timing-card">
                  <div className="card-header">
                    <Clock size={20} className="header-icon" aria-hidden="true" />
                    <h3>Lesson Timing Options</h3>
                  </div>
                  <p className="card-subtitle">Structure class periods around simulator gameplay and follow-up activities.</p>

                  <div className="timing-timeline">
                    <div className="timing-step">
                      <div className="timing-badge bg-teal">15m</div>
                      <div className="timing-content">
                        <h4>Quick Discussion Hook</h4>
                        <p>Students play 4-5 turns, copy one major decision to clipboard, and discuss the tradeoffs as a class.</p>
                      </div>
                    </div>
                    <div className="timing-step">
                      <div className="timing-badge bg-navy">30m</div>
                      <div className="timing-content">
                        <h4>Standard Game Session</h4>
                        <p>Students complete Quick Mode, submit their final life summary reflection, and compare decision outcomes.</p>
                      </div>
                    </div>
                    <div className="timing-step">
                      <div className="timing-badge bg-purple">45m</div>
                      <div className="timing-content">
                        <h4>Deep Reflection Replay</h4>
                        <p>Students complete a play session, then restart with a new goal and draft a short comparison paragraph.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card info-card">
                  <div className="card-header">
                    <Info size={20} className="header-icon" aria-hidden="true" />
                    <h3>Privacy & Attribution</h3>
                  </div>
                  <p>Students do not log in and should use nicknames. Game progress saves locally in their browser. MoneyLife Quest scenario content is original and inspired by common middle school finance structures (NGPF & Banzai topic patterns); the game is not affiliated with BitLife, NGPF, Banzai, or Napkin Finance.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "prompts" && (
          <div className="prompts-view">
            <div className="dashboard-card intro-card-flat">
              <h3>Reflective Prompts & Bell Ringers</h3>
              <p>Discussion prompts are an excellent way to connect simulated choices to real-world habits. Click a card to instantly copy the prompt text.</p>
            </div>

            <div className="prompts-grid-section">
              <div className="core-prompts-column">
                <h3>Core Discussion Questions</h3>
                <div className="prompts-list">
                  {discussionQuestions.map((q) => (
                    <button
                      key={q.id}
                      className="prompt-copy-card"
                      onClick={() => handleCopyPrompt(q.id, q.text)}
                    >
                      <span className="prompt-text">{q.text}</span>
                      <span className="copy-action-tag">
                        {copiedPromptId === q.id ? (
                          <>
                            <Check size={14} aria-hidden="true" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} aria-hidden="true" /> Copy Prompt
                          </>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="qod-column">
                <div className="qod-header-bar">
                  <h3>Question of the Day Sparks ({filteredQods.length})</h3>
                  <div className="qod-search-wrapper">
                    <Search size={16} aria-hidden="true" />
                    <input
                      type="text"
                      placeholder="Search 50+ bell ringers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="qod-scroll-container">
                  {filteredQods.map((q, idx) => (
                    <div key={`${q.url}-${idx}`} className="qod-row">
                      <div className="qod-body">
                        <strong>{q.title}</strong>
                        <small>{q.topic} · {q.classroomUse}</small>
                      </div>
                      <div className="qod-actions">
                        <a href={q.url} target="_blank" rel="noreferrer" className="btn-icon-link" aria-label={`Open link for ${q.title}`}>
                          <ExternalLink size={16} />
                        </a>
                        <button
                          className="btn-icon-copy"
                          aria-label={`Copy link for ${q.title}`}
                          onClick={() => handleCopyPrompt(`qod-${idx}`, q.url)}
                        >
                          {copiedPromptId === `qod-${idx}` ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  ))}
                  {filteredQods.length === 0 && (
                    <div className="empty-search-state">
                      No Question of the Day prompts match your search query.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="resources-view">
            <div className="resource-filter-controls">
              <div className="search-filter-row">
                <div className="search-input-wrapper">
                  <Search size={18} aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search 120+ references, guides, and lessons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-pill-scrollable-group">
                <span className="filter-label">Topic:</span>
                <button
                  className={`pill-btn ${selectedTopic === "all" ? "is-active" : ""}`}
                  onClick={() => setSelectedTopic("all")}
                >
                  All Topics
                </button>
                {topicOptions.map((opt) => (
                  <button
                    key={opt}
                    className={`pill-btn capitalize ${selectedTopic === opt ? "is-active" : ""}`}
                    onClick={() => setSelectedTopic(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="filter-pill-scrollable-group">
                <span className="filter-label">Source:</span>
                <button
                  className={`pill-btn ${selectedProvider === "all" ? "is-active" : ""}`}
                  onClick={() => setSelectedProvider("all")}
                >
                  All Sources
                </button>
                {["NGPF", "Banzai", "Govt/Public", "Local Files", "Google Docs"].map((prov) => (
                  <button
                    key={prov}
                    className={`pill-btn ${selectedProvider === prov ? "is-active" : ""}`}
                    onClick={() => setSelectedProvider(prov)}
                  >
                    {prov}
                  </button>
                ))}
              </div>
            </div>

            <div className="resource-results-count">
              Found {filteredResources.length} matching resources
            </div>

            <div className="resource-grid-display">
              {filteredResources.map((res, index) => {
                const isExternal = res.url.startsWith("http");
                return (
                  <div key={`${res.url}-${index}`} className="modern-resource-card">
                    <div className="card-top">
                      <div className="icon-wrapper">
                        {getResourceIcon(res.provider, res.topic)}
                      </div>
                      <div className="tag-badges">
                        <span className={`badge-tag provider-${res.provider.toLowerCase().replace(/\s|\//g, "-")}`}>
                          {res.provider}
                        </span>
                        <span className="badge-tag topic-badge">
                          {res.topic}
                        </span>
                      </div>
                    </div>
                    <div className="card-body-content">
                      <h4>{res.title}</h4>
                      <p>{res.classroomUse}</p>
                      <small className="cat-trail">{res.categoryTitle}</small>
                    </div>
                    <div className="card-footer-actions">
                      {isExternal ? (
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="resource-card-action-btn visit-btn"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          <span>Open Resource</span>
                        </a>
                      ) : (
                        <div className="resource-card-action-btn local-file-label">
                          <Lock size={14} aria-hidden="true" />
                          <span>Local File Only</span>
                        </div>
                      )}
                      
                      {isExternal && (
                        <button
                          className="resource-card-action-btn copy-btn"
                          aria-label={`Copy link for ${res.title}`}
                          onClick={() => handleCopyPrompt(`res-${index}`, res.url)}
                        >
                          {copiedPromptId === `res-${index}` ? (
                            <>
                              <Check size={14} aria-hidden="true" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} aria-hidden="true" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
              {filteredResources.length === 0 && (
                <div className="empty-results-box">
                  <h3>No resources found</h3>
                  <p>Try resetting filters or adjusting search terms.</p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedTopic("all");
                      setSelectedProvider("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "decoder" && (
          <div className="decoder-view" style={{ display: "grid", gap: "24px" }}>
            <div className="dashboard-card" style={{ padding: "20px" }}>
              <h3 style={{ margin: "0 0 8px 0", color: "var(--navy)" }}>Student Code Decoder</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                Students copy their <strong>Reflection Code</strong> from the completion screen (e.g. <code>MLQ-DEV-14CO-ACR</code>) and share it with you.
                Pasting it here extracts their score metrics locally. This helps you build a live classroom leaderboard without student accounts or database setup.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
              {/* Paste Form & Stats Summary */}
              <div style={{ display: "grid", gap: "20px" }}>
                <div className="dashboard-card" style={{ padding: "20px" }}>
                  <h4 style={{ margin: "0 0 12px 0", color: "var(--navy)" }}>Enter Code</h4>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="text"
                      placeholder="e.g. MLQ-DEV-14CO-ACR"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      style={{ flex: 1, padding: "8px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: "0.95rem" }}
                    />
                    <Button
                      onClick={() => {
                        const res = decodeReflectionCode(inputCode);
                        if (!res.ok) {
                          setDecodeError(res.error || "Failed to decode");
                          return;
                        }
                        const exists = decodedList.some(
                          (s) =>
                            s.nickname === res.data.nickname &&
                            s.netWorth === res.data.netWorth &&
                            s.objectives === res.data.objectives &&
                            s.badges === res.data.badges &&
                            s.credit === res.data.credit
                        );
                        if (!exists) {
                          setDecodedList((prev) => [res.data, ...prev]);
                        }
                        setInputCode("");
                        setDecodeError(null);
                      }}
                    >
                      Decode & Add
                    </Button>
                  </div>
                  {decodeError && (
                    <div style={{ marginTop: "10px", color: "var(--coral)", fontSize: "0.85rem", fontWeight: "bold" }}>
                      ⚠️ {decodeError}
                    </div>
                  )}
                </div>

                {/* Aggregated averages */}
                {decodedList.length > 0 && (
                  <div className="dashboard-card" style={{ padding: "20px", display: "grid", gap: "12px" }}>
                    <h4 style={{ margin: 0, color: "var(--navy)" }}>Class Summary Averages</h4>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", textAlign: "center", marginTop: "5px" }}>
                      <div style={{ padding: "10px", background: "rgba(0,0,0,0.02)", borderRadius: "var(--radius)" }}>
                        <small style={{ color: "var(--muted)", display: "block" }}>Students</small>
                        <strong style={{ fontSize: "1.2rem", color: "var(--navy)" }}>{decodedList.length}</strong>
                      </div>
                      <div style={{ padding: "10px", background: "rgba(0,0,0,0.02)", borderRadius: "var(--radius)" }}>
                        <small style={{ color: "var(--muted)", display: "block" }}>Avg Net Worth</small>
                        <strong style={{ fontSize: "1.2rem", color: "var(--teal-dark)" }}>
                          {formatMoney(Math.round(decodedList.reduce((sum, s) => sum + s.netWorth, 0) / decodedList.length))}
                        </strong>
                      </div>
                      <div style={{ padding: "10px", background: "rgba(0,0,0,0.02)", borderRadius: "var(--radius)" }}>
                        <small style={{ color: "var(--muted)", display: "block" }}>Avg Badges</small>
                        <strong style={{ fontSize: "1.2rem", color: "var(--navy)" }}>
                          {(decodedList.reduce((sum, s) => sum + s.badges, 0) / decodedList.length).toFixed(1)}
                        </strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Roster list */}
              <div className="dashboard-card" style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h4 style={{ margin: 0, color: "var(--navy)" }}>Class Roster ({decodedList.length})</h4>
                  {decodedList.length > 0 && (
                    <button
                      onClick={() => setDecodedList([])}
                      style={{ background: "none", border: "none", color: "var(--coral)", cursor: "pointer", fontSize: "0.82rem", fontWeight: "bold" }}
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {decodedList.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "30px 10px", color: "var(--muted)", fontSize: "0.9rem" }}>
                    No student codes decoded yet. Paste a completed game code to start tracking performance metrics.
                  </div>
                ) : (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid var(--line)", textAlign: "left" }}>
                          <th style={{ padding: "8px 4px", color: "var(--muted)" }}>Student</th>
                          <th style={{ padding: "8px 4px", color: "var(--muted)" }}>Net Worth</th>
                          <th style={{ padding: "8px 4px", color: "var(--muted)" }}>Goals Met</th>
                          <th style={{ padding: "8px 4px", color: "var(--muted)" }}>Badges</th>
                          <th style={{ padding: "8px 4px", color: "var(--muted)" }}>Credit</th>
                          <th style={{ padding: "8px 4px", width: "30px" }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {decodedList.map((item, idx) => (
                          <tr key={idx} style={{ borderBottom: "1px solid rgba(0,0,0,0.03)" }}>
                            <td style={{ padding: "10px 4px", fontWeight: "bold", color: "var(--navy)" }}>{item.nickname}</td>
                            <td style={{ padding: "10px 4px", color: "var(--teal-dark)", fontWeight: "bold" }}>{formatMoney(item.netWorth)}</td>
                            <td style={{ padding: "10px 4px" }}>{item.objectives}</td>
                            <td style={{ padding: "10px 4px" }}>{item.badges}</td>
                            <td style={{ padding: "10px 4px" }}>{item.credit ?? "No history"}</td>
                            <td style={{ padding: "10px 4px", textAlign: "right" }}>
                              <button
                                onClick={() => setDecodedList((prev) => prev.filter((_, i) => i !== idx))}
                                style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1rem" }}
                                aria-label="Delete student"
                              >
                                &times;
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "debug" && (
          <div className="debug-log-view">
            <div className="dashboard-card debug-log-card">
              <div className="debug-log-header">
                <div>
                  <h3>Saved Debug Reports</h3>
                  <p>Reports submitted from the bottom-right button are saved on this browser. To collect reports from student devices automatically, configure the debug inbox endpoint and have students tap Submit Issue.</p>
                </div>
                <div className="debug-log-actions">
                  <Button variant="secondary" onClick={refreshDebugReports}>Refresh</Button>
                  <Button variant="secondary" icon={<Download size={16} aria-hidden="true" />} onClick={handleDownloadDebugReports}>
                    Download Log
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      clearDebugReports();
                      setDebugReports([]);
                    }}
                    disabled={debugReports.length === 0}
                  >
                    Clear Log
                  </Button>
                </div>
              </div>

              <div className="debug-log-summary">
                <strong>{debugReports.length}</strong>
                <span>{debugReports.length === 1 ? "saved report" : "saved reports"}</span>
              </div>
              <p className="debug-inbox-status">
                Central teacher inbox: <strong>{isDebugInboxConnected ? "Connected" : "Not connected"}</strong>
                {isDebugInboxConnected
                  ? ". New reports are saved locally and sent to the configured inbox."
                  : ". New reports are saved only on the device where they are submitted until an inbox endpoint is configured."}
              </p>
            </div>

            {debugReports.length === 0 ? (
              <div className="dashboard-card debug-empty-state">
                <Bug size={28} aria-hidden="true" />
                <h3>No reports saved on this browser yet.</h3>
                <p>Use the Bug or issue button to save a test report in this browser, or configure the deployment debug inbox endpoint so student reports can reach you outside their own devices.</p>
              </div>
            ) : (
              <div className="debug-report-list">
                {debugReports.map((report) => (
                  <article className="debug-report-card" key={report.id}>
                    <div className="debug-report-card__body">
                      <div className="debug-report-meta">
                        <span>{labelForType(report.issueType)}</span>
                        <span>{new Date(report.createdAt).toLocaleString()}</span>
                        <span>{debugStatusLabel(report)}</span>
                      </div>
                      <h3>{report.description.trim() || "No description provided"}</h3>
                      {report.steps.trim() ? <p><strong>Steps:</strong> {report.steps.trim()}</p> : null}
                      {report.contact.trim() ? <p><strong>Optional contact:</strong> {report.contact.trim()}</p> : null}
                      {report.diagnostics ? (
                        <details className="debug-diagnostics">
                          <summary>Safe diagnostics</summary>
                          <pre>{JSON.stringify(report.diagnostics, null, 2)}</pre>
                        </details>
                      ) : null}
                    </div>
                    <div className="debug-report-actions">
                      <Button variant="secondary" icon={<Copy size={16} aria-hidden="true" />} onClick={() => handleCopyDebugReport(report)}>
                        {copiedDebugId === report.id ? "Copied!" : "Copy"}
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          setDebugReports(deleteDebugReport(report.id));
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function formatQuestionUrl(url: string): string {
  const slug = url
    .replace(/\/$/, "")
    .split("/")
    .pop()
    ?.replace(/^question-of-the-day-/, "")
    .replace(/^qod-/, "")
    .replace(/^chart-/, "")
    .replace(/-/g, " ");
  if (!slug) return "Question of the Day";
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

function debugStatusLabel(report: IssueReport): string {
  if (report.status === "sent-remote") return "Sent to inbox";
  if (report.status === "remote-failed") return "Send failed";
  return "Local only";
}
