import { useCallback, useMemo, useState } from "react";
import { Contador } from "./components/Contador";
import { Filtro } from "./components/Filtro";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ThemeToggle } from "./components/ThemeToggle";
import { Toast } from "./components/Toast";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tarefas } = useTasks();
  const [filtro, setFiltro] = useState("todas");
  const [mensagem, setMensagem] = useState("");

  const tarefasFiltradas = useMemo(() => {
    switch (filtro) {
      case "pendentes":
        return tarefas.filter((tarefa) => !tarefa.concluida);
      case "concluidas":
        return tarefas.filter((tarefa) => tarefa.concluida);
      default:
        return tarefas;
    }
  }, [tarefas, filtro]);

  const quantidadePendentes = useMemo(
    () => tarefas.filter((tarefa) => !tarefa.concluida).length,
    [tarefas]
  );

  const fecharMensagem = useCallback(() => {
    setMensagem("");
  }, []);

  const avisarAdicionada = useCallback(() => {
    setMensagem("Tarefa adicionada!");
  }, []);

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">T</div>
          <div>
            <p className="eyebrow">ORGANIZE SEU DIA</p>
            <h1>TaskFlow<span>.</span></h1>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <section className="welcome">
        <p className="eyebrow">SEU ESPAÇO DE PRODUTIVIDADE</p>
        <h2>Um passo de cada vez.</h2>
        <p>Organize suas tarefas e acompanhe seu progresso.</p>
      </section>

      <section className="task-panel" aria-label="Gerenciador de tarefas">
        <div className="panel-heading">
          <div>
            <h2>Minhas tarefas</h2>
            <Contador pendentes={quantidadePendentes} total={tarefas.length} />
          </div>
          <span className="task-total" aria-label={`${tarefas.length} tarefas no total`}>
            {String(tarefas.length).padStart(2, "0")}
          </span>
        </div>

        <TaskForm onAdicionada={avisarAdicionada} />

        <div className="list-toolbar">
          <span className="section-label">LISTA DE ATIVIDADES</span>
          <Filtro filtro={filtro} onChange={setFiltro} />
        </div>

        <TaskList tarefas={tarefasFiltradas} />
      </section>

      <footer className="app-footer">
        <span>TaskFlow</span>
        <span>Feito para manter o foco.</span>
      </footer>

      <Toast mensagem={mensagem} onFechar={fecharMensagem} />
    </main>
  );
}
