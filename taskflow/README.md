# TaskFlow — solução da Aula 11

Projeto React com Context API e Hooks, desenvolvido de acordo com a atividade em PDF.

## Executar

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite no terminal.

## Compilar

```bash
npm run build
```

## Conteúdo

- `src/components`: interface, formulário, filtros, contador, Toast e componente de teste do reducer.
- `src/context`: Providers globais de tarefas e tema.
- `src/hooks`: hooks de acesso aos contextos, armazenamento e persistência/API.
- `src/reducers`: reducer das tarefas.
- `src/utils`: leitura e gravação no localStorage.
- `RESPOSTAS_DA_ATIVIDADE.md`: explicações e respostas às perguntas conceituais do PDF.

A API usada para as cinco tarefas iniciais é JSONPlaceholder. Caso a conexão falhe, o sistema continua utilizável com tarefas cadastradas manualmente.
