import { useMemo, useState } from "react";
import {
  Copy,
  BookOpen,
  Clock,
  MessageSquare,
  ExternalLink,
  Check,
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
import { goals } from "../goals/goalDefinitions";

type Tab = "planner" | "prompts" | "resources";

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
                          <strong>Goal Objectives:</strong>
                          <ul>
                            {selectedGoalDef.objectives.map((obj) => (
                              <li key={obj.id}>{obj.label}</li>
                            ))}
                          </ul>
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

