import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light"); // Varsayılan tema ayarı

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light"
        ? <FaSun size={25} /> 
        : <FaMoon size={25} />}
    </button>
  );
};

export default ThemeToggle;
