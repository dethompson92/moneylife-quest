import { Button } from "./Button";
import { Modal } from "./Modal";

export function ConfirmDialog({
  title,
  body,
  confirmLabel,
  onCancel,
  onConfirm
}: {
  title: string;
  body: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Modal title={title} onClose={onCancel}>
      <p>{body}</p>
      <div className="button-row">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}
