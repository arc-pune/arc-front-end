export function initTheme() {
  console.log("init theme");
  const themes = ["dark", "light", "neon"];
  localStorage.themes = JSON.stringify(themes);
  localStorage.theme = "light";
}

export function setTheme(theme) {
  console.log("init theme line 9");
  localStorage.theme = theme;
}
