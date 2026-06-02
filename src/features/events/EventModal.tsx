import { scenarioEvents } from "../../data/scenarioPacks/middleSchoolCore";
import { ChoiceCard } from "../../components/ui/ChoiceCard";
import { Modal } from "../../components/ui/Modal";
import { TermSpotlight } from "../glossary/TermSpotlight";
import type { GameState, Topic } from "../../types/game";

const topicGlossaryTerms: Record<Topic, string[]> = {
  "money-values": ["opportunity-cost", "needs", "wants"],
  "consumer-skills": ["unit-price", "discount", "receipt", "fee"],
  budgeting: ["budget", "cash-flow", "income", "expense"],
  banking: ["checking", "savings-account", "fee", "overdraft"],
  credit: ["credit", "credit-score", "credit-card", "debt", "interest"],
  saving: ["saving", "emergency-fund", "compound-interest"],
  investing: ["investment", "diversification", "risk", "compound-interest"],
  insurance: ["insurance", "premium", "deductible", "risk"],
  scams: ["scam", "risk", "payment-app"],
  career: ["income", "net-income", "tax", "opportunity-cost"],
  "life-after-high-school": ["student-loan", "loan", "budget", "opportunity-cost"],
  taxes: ["tax", "gross-pay", "net-income"]
};

function glossaryTermsForTopics(topics: Topic[]): string[] {
  return Array.from(new Set(topics.flatMap((topic) => topicGlossaryTerms[topic] ?? []))).slice(0, 5);
}

export function EventModal({
  game,
  onResolve
}: {
  game: GameState;
  onResolve: (eventId: string, choiceId: string) => void;
}) {
  const event = scenarioEvents.find((candidate) => candidate.id === game.pendingEventId);
  if (!event) return null;

  return (
    <Modal title="New Event">
      <div className="event-modal">
        <div className="event-modal__topic">{event.topics[0].replace(/-/g, " ")}</div>
        <h3>{event.title}</h3>
        <p>{event.prompt}</p>
        <p className="reflection-cue"><strong>Reflect:</strong> {event.reflectionPrompt}</p>
        <TermSpotlight
          termIds={glossaryTermsForTopics(event.topics)}
          text={[
            event.title,
            event.prompt,
            event.reflectionPrompt,
            ...event.choices.flatMap((choice) => [
              choice.label,
              choice.description,
              ...choice.outcomes.flatMap((outcome) => [outcome.feedback, outcome.explanation, outcome.logText])
            ])
          ]}
        />
        <div className="choice-list">
          {event.choices.map((choice, index) => (
            <ChoiceCard
              key={choice.id}
              choice={choice}
              index={index}
              state={game}
              onChoose={() => onResolve(event.id, choice.id)}
            />
          ))}
        </div>
        <p className="tip">Tip: Every choice shapes your future. Some locked choices become available as your money habits grow.</p>
      </div>
    </Modal>
  );
}
