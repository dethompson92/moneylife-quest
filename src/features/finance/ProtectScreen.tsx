import { Button } from "../../components/ui/Button";
import type { GameState } from "../../types/game";

export function ProtectScreen({ game, onAction }: { game: GameState; onAction: (activityId: string) => void }) {
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Protect Yourself</h2>
        <p>Practice safer habits around accounts, passwords, scams, and insurance risk.</p>
      </div>
      <div className="detail-grid">
        <article><small>Safety</small><strong>{game.stats.trustSafety}/100</strong></article>
        <article><small>Wellbeing</small><strong>{game.stats.wellbeing}/100</strong></article>
        <article><small>Scam Loss Risk</small><strong>{game.stats.trustSafety >= 70 ? "Lower" : "Needs work"}</strong></article>
      </div>
      <Button onClick={() => onAction("protect-2fa")}>Enable Two-Step Login</Button>
    </section>
  );
}
