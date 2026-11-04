import { TaskItem } from "./TaskItem";

export function TaskList({ tarefas }) {
  if (tarefas.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon" aria-hidden="true">✓</span>
        <strong>Nenhuma tarefa por aqui</strong>
        <p>Adicione uma tarefa ou altere o filtro para visualizar sua lista.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa) => (
        <TaskItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
