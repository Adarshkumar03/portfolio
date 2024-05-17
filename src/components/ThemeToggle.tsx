import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext.tsx";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded"
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
