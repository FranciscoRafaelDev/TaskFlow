import { useDebugValue, useEffect, useState } from "react";

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave);
      return salvo !== null ? JSON.parse(salvo) : valorInicial;
    } catch (erro) {
      console.error(`Não foi possível ler a chave ${chave}:`, erro);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
      console.error(`Não foi possível salvar a chave ${chave}:`, erro);
    }
  }, [chave, valor]);

  useDebugValue(valor);
  return [valor, setValor];
}
