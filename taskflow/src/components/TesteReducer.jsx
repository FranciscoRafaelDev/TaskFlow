import { useReducer } from "react";
import { tasksReducer } from "../reducers/tasksReducer";

// Componente auxiliar solicitado na atividade para testar as actions do reducer.
export default function TesteReducer() {
  const [tarefas, dispatch] = useReducer(tasksReducer, []);

  return (
    <section>
      <h2>Teste do reducer</h2>
      <button onClick={() => dispatch({ type: "ADD", texto: "Testar reducer" })}>
        Adicionar
      </button>
      <button
        onClick={() => tarefas[0] && dispatch({ type: "TOGGLE", id: tarefas[0].id })}
        disabled={!tarefas.length}
      >
        Alternar primeira
      </button>
      <button
        onClick={() => tarefas[0] && dispatch({ type: "REMOVE", id: tarefas[0].id })}
        disabled={!tarefas.length}
      >
        Remover primeira
      </button>
      <button onClick={() => dispatch({ type: "SET", tarefas: [] })}>
        Limpar com SET
      </button>
      <pre>{JSON.stringify(tarefas, null, 2)}</pre>
    </section>
  );
}
