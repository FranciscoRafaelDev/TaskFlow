export function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const novaTarefa = {
        id: Date.now(),
        texto: action.texto,
        concluida: false,
      };
      return [...state, novaTarefa];
    }

    case "TOGGLE":
      return state.map((tarefa) =>
        tarefa.id === action.id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      );

    case "REMOVE":
      return state.filter((tarefa) => tarefa.id !== action.id);

    case "SET":
      return Array.isArray(action.tarefas) ? action.tarefas : [];

    default:
      return state;
  }
}
