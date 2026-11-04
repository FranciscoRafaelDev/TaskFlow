const CHAVE_TAREFAS = "taskflow-tarefas";

export function lerTarefasSalvas() {
  try {
    const conteudo = localStorage.getItem(CHAVE_TAREFAS);
    if (!conteudo) return [];

    const tarefas = JSON.parse(conteudo);
    return Array.isArray(tarefas) ? tarefas : [];
  } catch (erro) {
    console.error("Não foi possível recuperar as tarefas salvas:", erro);
    return [];
  }
}

export function salvarTarefas(tarefas) {
  try {
    localStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas));
  } catch (erro) {
    console.error("Não foi possível salvar as tarefas:", erro);
  }
}
