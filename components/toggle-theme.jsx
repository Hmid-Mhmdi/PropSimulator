import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("system");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  console.log(theme);

  return (
    <button
      className="p-2 mx-2 rounded-md hover:ring-2 hover:ring-gray-300"
      onClick={() => {
        console.log(theme);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
