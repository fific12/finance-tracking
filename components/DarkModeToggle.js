"use client";

import { Moon, Sun } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import Button from "./Button";

function DarkModeToggle({ defaultMode = "dark" }) {
  const { theme, toggleTheme } = useDarkMode(defaultMode);

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "dark" && <Sun className="w-4 h-4" />}
      {theme === "light" && <Moon className="w-4 h-4" />}
    </Button>
  );
}

export default DarkModeToggle;
