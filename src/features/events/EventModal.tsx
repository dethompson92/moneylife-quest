import { scenarioEvents } from "../../data/scenarioPacks/middleSchoolCore";
import { ChoiceCard } from "../../components/ui/ChoiceCard";
import { Modal } from "../../components/ui/Modal";
import type { GameState } from "../../types/game";

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
