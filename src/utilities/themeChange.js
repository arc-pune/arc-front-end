const defaultTheme = "light";

export function initTheme() {
  const currentTheme = localStorage.getItem("theme");

  if (!currentTheme) {
    localStorage.setItem("theme", defaultTheme);
  }

  updateTheme();
}

export function setTheme(theme) {
  localStorage.setItem("theme", theme);
  updateTheme();
}
export function updateTheme() {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (currentTheme === "light") {
    document.documentElement.classList.remove("dark");
  }
}
