"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true), [];
  });
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer hover:text-amber-600"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer hover:text-amber-600"
        />
      )}
    </>
  );
}
