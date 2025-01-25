"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-white/[0.2] rounded-[100px] cursor-pointer"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      {isDarkMode ? (
        <Moon
          className="h-[1.2rem] w-[1.2rem] transition-transform cursor-pointer hover:bg-black-200/60"
          style={{ color: "#cfc61d" }}
        />
      ) : (
        <Sun
          className="h-[1.2rem] w-[1.2rem] transition-transform hover:bg-black-200/60"
          style={{ color: "black" }} // Black icon for light mode
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}