export const defaultTheme = "light";
export const themeKey = "theme";

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

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (currentTheme === "light") {
    document.documentElement.classList.remove("dark");
  }
}
