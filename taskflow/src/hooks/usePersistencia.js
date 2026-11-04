import { useEffect } from "react";
import { salvarTarefas } from "../utils/storage";

const URL_TAREFAS = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export function usePersistencia(tarefas, dispatch) {
  // Efeito de inicialização: a API só é consultada uma vez, ao abrir o aplicativo.
  // A lista inicial é a capturada na montagem; por isso o array de dependências é vazio.
  useEffect(() => {
    if (tarefas.length > 0) return;

    const controller = new AbortController();

    async function carregarTarefasIniciais() {
      try {
        const resposta = await fetch(URL_TAREFAS, { signal: controller.signal });
        if (!resposta.ok) {
          throw new Error(`A API respondeu com status ${resposta.status}`);
        }

        const dados = await resposta.json();
        const tarefasIniciais = dados.map((item) => ({
          id: item.id,
          texto: item.title,
          concluida: item.completed,
        }));

        dispatch({ type: "SET", tarefas: tarefasIniciais });
      } catch (erro) {
        if (erro.name !== "AbortError") {
          console.error("Não foi possível carregar as tarefas iniciais:", erro);
        }
        // A falha da API não impede o uso do TaskFlow.
      }
    }

    carregarTarefasIniciais();
    return () => controller.abort();
    // A intenção é executar somente na montagem; veja a explicação acima.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    salvarTarefas(tarefas);
  }, [tarefas]);
}
