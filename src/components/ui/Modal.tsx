import type { ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({
  title,
  children,
  onClose,
  closeLabel = "Close"
}: {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  closeLabel?: string;
}) {
  return (
    <div className="modal-backdrop" role="presentation">
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal__header">
          <h2 id="modal-title">{title}</h2>
          {onClose ? (
            <button className="icon-button" type="button" onClick={onClose} aria-label={closeLabel}>
              <X aria-hidden="true" />
            </button>
          ) : null}
        </div>
        {children}
      </section>
    </div>
  );
}
