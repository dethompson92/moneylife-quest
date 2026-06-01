import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { ConfirmDialog } from "../../components/ui/ConfirmDialog";
import type { GameSettings } from "../../types/game";

export function SettingsScreen({
  settings,
  onSettings,
  onReset
}: {
  settings: GameSettings;
  onSettings: (settings: GameSettings) => void;
  onReset: () => void;
}) {
  const [confirming, setConfirming] = useState(false);
  return (
    <section className="screen-panel">
      <div className="section-heading">
        <h2>Settings</h2>
        <p>Accessibility and local save controls.</p>
      </div>
      <div className="settings-list">
        <label>
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(event) => onSettings({ ...settings, reducedMotion: event.target.checked })}
          />
          Reduced motion
        </label>
        <label>
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(event) => onSettings({ ...settings, highContrast: event.target.checked })}
          />
          High contrast
        </label>
        <label>
          Text size
          <select
            value={settings.textSize}
            onChange={(event) => onSettings({ ...settings, textSize: event.target.value as GameSettings["textSize"] })}
          >
            <option value="standard">Standard</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra large</option>
          </select>
        </label>
      </div>
      <Button variant="danger" onClick={() => setConfirming(true)}>Reset Saved Game</Button>
      {confirming ? (
        <ConfirmDialog
          title="Reset saved game?"
          body="This clears the current MoneyLife Quest save on this browser."
          confirmLabel="Reset Save"
          onCancel={() => setConfirming(false)}
          onConfirm={() => {
            setConfirming(false);
            onReset();
          }}
        />
      ) : null}
    </section>
  );
}
