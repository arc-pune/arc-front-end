export function  initTheme() {
  const themes = ["dark", "light", "neon"];
  localStorage.themes = JSON.stringify(themes);
  localStorage.theme = "light";
}

export function setTheme(theme) {
  localStorage.theme = theme;
  updateTheme();
}
export function updateTheme() {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
