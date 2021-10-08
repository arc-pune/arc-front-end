export function initTheme() {
  const themes = ["dark", "light", "neon"];
  localStorage.themes = JSON.stringify(themes);
  localStorage.theme = "light";
}

export function setTheme(theme) {
  localStorage.theme = theme;
}
