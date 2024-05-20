import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext.tsx";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
    >
      {theme === "light" ? <MdDarkMode size={25}/> :<MdLightMode size={25}/>}
    </button>
  );
};

export default ThemeToggle;
