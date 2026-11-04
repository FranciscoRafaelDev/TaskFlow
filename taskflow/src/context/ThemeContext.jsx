import { createContext, useCallback, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useLocalStorage("taskflow-tema", "claro");

  const alternarTema = useCallback(() => {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
  }, [setTema]);

  const value = useMemo(() => ({ tema, alternarTema }), [tema, alternarTema]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={tema}>{children}</div>
    </ThemeContext.Provider>
  );
}
