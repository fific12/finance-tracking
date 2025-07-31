"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const useDarkMode = (defaultTheme = "dark") => {
  const [cookies, setCookie] = useCookies(["theme"]);
  const [theme, setTheme] = useState(defaultTheme);

  // Sync state with cookie on first load
  useEffect(() => {
    const currentTheme = cookies.theme || defaultTheme;

    setTheme(currentTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(currentTheme);
  }, [cookies.theme, defaultTheme]);

  const setAndSaveTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setCookie("theme", newTheme, { path: "/" });
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setAndSaveTheme(newTheme);
  };

  return { theme, toggleTheme };
};

export default useDarkMode;
