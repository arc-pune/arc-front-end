import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import {
  updateLocalStorageTheme,
  defaultTheme,
  themeEnum
} from "../utilities/themeChange";

const PaletteThemeChanger = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme ?? defaultTheme;
  });

  const toggleTheme = () => {
    let nextTheme = themeEnum.dark;

    if (theme === themeEnum.dark) {
      nextTheme = themeEnum.light;
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
          {theme === themeEnum.light ? (
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
