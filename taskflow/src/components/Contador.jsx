export function Contador({ pendentes, total }) {
  return (
    <p className="counter" aria-live="polite">
      <strong>{pendentes}</strong> {pendentes === 1 ? "tarefa pendente" : "tarefas pendentes"}
      <span> de {total} {total === 1 ? "tarefa" : "tarefas"}</span>
    </p>
  );
}
