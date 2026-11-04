import { useEffect, useRef, useState } from "react";
import { useTasks } from "../hooks/useTasks";

export function TaskForm({ onAdicionada }) {
  const [texto, setTexto] = useState("");
  const inputRef = useRef(null);
  const { adicionar } = useTasks();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function enviar(evento) {
    evento.preventDefault();
    const textoLimpo = texto.trim();
    if (!textoLimpo) {
      inputRef.current?.focus();
      return;
    }

    adicionar(textoLimpo);
    setTexto("");
    onAdicionada?.();
    inputRef.current?.focus();
  }

  return (
    <form className="task-form" onSubmit={enviar}>
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="O que você precisa fazer?"
        aria-label="Descrição da nova tarefa"
        maxLength={120}
      />
      <button className="button button-primary" type="submit">
        <span aria-hidden="true">＋</span> Adicionar
      </button>
    </form>
  );
}
