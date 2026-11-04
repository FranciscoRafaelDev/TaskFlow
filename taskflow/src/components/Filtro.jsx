const opcoes = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "pendentes", rotulo: "Pendentes" },
  { valor: "concluidas", rotulo: "Concluídas" },
];

export function Filtro({ filtro, onChange }) {
  return (
    <div className="filter-group" role="group" aria-label="Filtrar tarefas">
      {opcoes.map((opcao) => (
        <button
          key={opcao.valor}
          type="button"
          className={`filter-button ${filtro === opcao.valor ? "active" : ""}`}
          onClick={() => onChange(opcao.valor)}
          aria-pressed={filtro === opcao.valor}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  );
}
