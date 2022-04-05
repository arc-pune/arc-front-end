import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import {
  updateLocalStorageTheme,
  defaultTheme
} from "../utilities/themeChange";

const PaletteThemeChanger = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme ?? defaultTheme;
  });

  const toggleTheme = () => {
    let nextTheme = "dark";

    if (theme === "dark") {
      nextTheme = "light";
      updateLocalStorageTheme(nextTheme);
      setTheme(nextTheme);
      return;
    }

    updateLocalStorageTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <>
      <div>
        <button
          className="focus:outline-none dark:text-gray-100 text-black"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <MoonIcon className="block h-6 w-6" aria-hidden />
          ) : (
            <SunIcon className="block h-6 w-6" aria-hidden />
          )}
        </button>
      </div>
    </>
  );
};

export default PaletteThemeChanger;
