import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { tema, alternarTema } = useTheme();
  const proximoTema = tema === "claro" ? "escuro" : "claro";

  return (
    <button className="theme-toggle" type="button" onClick={alternarTema}>
      <span aria-hidden="true">{tema === "claro" ? "☾" : "☀"}</span>
      <span>Ativar tema {proximoTema}</span>
    </button>
  );
}
