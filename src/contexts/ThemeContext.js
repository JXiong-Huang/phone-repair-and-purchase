import React from "react";
import { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

function ThemeProvider({ startingTheme = "dark", children }) {
  const { theme, setTheme } = useTheme(startingTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeProvider };
