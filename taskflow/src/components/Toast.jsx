import { useEffect } from "react";

export function Toast({ mensagem, onFechar }) {
  useEffect(() => {
    if (!mensagem) return undefined;

    const timeout = setTimeout(() => {
      onFechar();
    }, 2600);

    return () => clearTimeout(timeout);
  }, [mensagem, onFechar]);

  if (!mensagem) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <span aria-hidden="true">✓</span> {mensagem}
    </div>
  );
}
