import { useMemo, useState } from "react";
import { Copy } from "lucide-react";
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

export function TeacherGuide({ onCopy, onLock }: { onCopy: (text: string) => void; onLock: () => void }) {
  const [seed, setSeed] = useState("period-3-moneylife");
  const [topic, setTopic] = useState("all");
  const [goal, setGoal] = useState("emergency-fund-hero");
  const link = useMemo(() => buildClassLink({ mode: "quick", topic, seed, goal }), [goal, seed, topic]);

  return (
    <section className="screen-panel teacher-guide">
      <div className="section-heading section-heading--split">
        <div>
          <h2>Teacher Guide</h2>
          <p>Run MoneyLife Quest from one public link, with local-only student progress.</p>
        </div>
        <Button variant="secondary" onClick={onLock}>Lock Teacher Mode</Button>
      </div>
      <div className="guide-grid">
        <article>
          <h3>15 minutes</h3>
          <p>Students play 4-5 turns, copy one decision, and discuss the tradeoff.</p>
        </article>
        <article>
          <h3>30 minutes</h3>
          <p>Students complete quick mode, submit a summary, and compare different choices.</p>
        </article>
        <article>
          <h3>45 minutes</h3>
          <p>Add a replay with a new goal and a short written reflection.</p>
        </article>
      </div>
      <div className="link-builder">
        <label>
          Class seed
          <input value={seed} onChange={(event) => setSeed(event.target.value)} />
        </label>
        <label>
          Topic
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            {topicOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Goal
          <select value={goal} onChange={(event) => setGoal(event.target.value)}>
            {goals.map((goalOption) => (
              <option key={goalOption.id} value={goalOption.id}>{goalOption.title}</option>
            ))}
          </select>
        </label>
        <output>{link}</output>
        <Button icon={<Copy aria-hidden="true" />} onClick={() => onCopy(link)}>Copy Class Link</Button>
      </div>
      <div className="teacher-notes">
        <h3>Curriculum Fit</h3>
        {curriculumResearchNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
        <h3>Topic Filters</h3>
        <p>Use the class link builder to focus play on budgeting, credit, saving, investing, protection, career, consumer skills, or all topics. A seed gives everyone the same starting event flow while choices still create different outcomes.</p>
        <h3>Discussion Questions</h3>
        <p>What made one choice safer, cheaper, or more flexible than another?</p>
        <p>When did a short-term benefit create a long-term cost?</p>
        <p>Which habit would help outside the game?</p>
        <p>What did the final summary say was the biggest win or hardest tradeoff?</p>
        <h3>Research and Bell Ringers</h3>
        <div className="resource-list">
          {coreResourceLinks.map((resource) => (
            <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer">
              <strong>{resource.title}</strong>
              <small>{resource.topic} · {resource.classroomUse}</small>
            </a>
          ))}
        </div>
        <details className="resource-details">
          <summary>Question of the Day discussion sparks</summary>
          <div className="resource-list">
            {questionSparkLinks.map((resource) => (
              <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer">
                <strong>{resource.title}</strong>
                <small>{resource.topic} · {resource.classroomUse}</small>
              </a>
            ))}
            {additionalQuestionSparkUrls.map((url) => (
              <a key={url} href={url} target="_blank" rel="noreferrer">
                <strong>{formatQuestionUrl(url)}</strong>
                <small>Additional QOD prompt · Use as a current-events discussion extension.</small>
              </a>
            ))}
          </div>
        </details>
        <details className="resource-details">
          <summary>Banzai topic extensions and teacher references</summary>
          <p>These links are for teacher context and optional follow-up. MoneyLife Quest uses original scenarios and is not affiliated with Banzai.</p>
          <div className="resource-list">
            {banzaiResourceLinks.map((resource) => (
              <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer">
                <strong>{resource.title}</strong>
                <small>{resource.topic} · {resource.classroomUse}</small>
              </a>
            ))}
          </div>
        </details>
        <details className="resource-details">
          <summary>Banzai interactive activities to compare after play</summary>
          <div className="resource-list">
            {banzaiInteractiveLinks.map((resource) => (
              <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer">
                <strong>{resource.title}</strong>
                <small>{resource.topic} · {resource.classroomUse}</small>
              </a>
            ))}
          </div>
        </details>
        <details className="resource-details">
          <summary>Full source index and teacher-provided context</summary>
          <p>These links are included for teacher planning and attribution. The student game uses original scenarios and does not copy protected lessons, worksheets, slides, answer keys, game scripts, or artwork.</p>
          {sourceCategories.map((category) => (
            <div className="source-category" key={category.id}>
              <h4>{category.title}</h4>
              <p>{category.note}</p>
              <div className="resource-list">
                {category.links.map((resource, index) => (
                  resource.url.startsWith("http") ? (
                    <a key={`${category.id}-${index}-${resource.url}`} href={resource.url} target="_blank" rel="noreferrer">
                      <strong>{resource.title}</strong>
                      <small>{resource.topic} · {resource.classroomUse}</small>
                    </a>
                  ) : (
                    <div className="resource-list__item" key={`${category.id}-${index}-${resource.url}`}>
                      <strong>{resource.title}</strong>
                      <small>{resource.topic} · {resource.classroomUse}</small>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </details>
        <h3>Privacy and Attribution</h3>
        <p>Students do not log in and should use nicknames, not real full names. Saves stay in the browser. Scenario content is original and inspired by common personal finance curriculum topics, public current-event question formats, Banzai topic patterns, and teacher-provided project context; MoneyLife Quest is not affiliated with BitLife, NGPF, Banzai, or Napkin Finance.</p>
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
