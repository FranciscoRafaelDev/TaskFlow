import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const contexto = useContext(ThemeContext);
  if (contexto === undefined) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider.");
  }
  return contexto;
}
