import { createContext, useCallback, useMemo, useReducer } from "react";
import { tasksReducer } from "../reducers/tasksReducer";
import { lerTarefasSalvas } from "../utils/storage";
import { usePersistencia } from "../hooks/usePersistencia";

export const TasksContext = createContext(undefined);

export function TasksProvider({ children }) {
  const [tarefas, dispatch] = useReducer(
    tasksReducer,
    [],
    lerTarefasSalvas
  );

  usePersistencia(tarefas, dispatch);

  const adicionar = useCallback((texto) => {
    dispatch({ type: "ADD", texto });
  }, []);

  const alternar = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  const remover = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const value = useMemo(
    () => ({ tarefas, adicionar, alternar, remover, dispatch }),
    [tarefas, adicionar, alternar, remover]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
