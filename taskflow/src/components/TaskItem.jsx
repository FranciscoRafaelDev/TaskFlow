import { useTasks } from "../hooks/useTasks";

export function TaskItem({ tarefa }) {
  const { alternar, remover } = useTasks();

  return (
    <li className={`task-item ${tarefa.concluida ? "is-complete" : ""}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => alternar(tarefa.id)}
          aria-label={`Marcar ${tarefa.texto} como ${tarefa.concluida ? "pendente" : "concluída"}`}
        />
        <span>{tarefa.texto}</span>
      </label>
      <button
        className="button-icon remove-button"
        type="button"
        onClick={() => remover(tarefa.id)}
        aria-label={`Remover tarefa: ${tarefa.texto}`}
        title="Remover tarefa"
      >
        ×
      </button>
    </li>
  );
}
