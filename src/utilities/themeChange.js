import { createEnum } from "./createEnum";

export const themeKey = "theme";

export const themeEnum = createEnum(["dark", "light"]);
export const defaultTheme = themeEnum.light;

export function initTheme() {
  const currentTheme = localStorage.getItem(themeKey) ?? defaultTheme;
  localStorage.setItem(themeKey, currentTheme);
  updateDocumentTheme();
}

export function updateLocalStorageTheme(theme) {
  localStorage.setItem(themeKey, theme);
  updateDocumentTheme();
}

export function updateDocumentTheme() {
  const currentTheme = localStorage.getItem(themeKey);

  if (currentTheme === themeEnum.dark) {
    document.documentElement.classList.add(themeEnum.dark);
  } else {
    document.documentElement.classList.remove(themeEnum.dark);
  }
}
