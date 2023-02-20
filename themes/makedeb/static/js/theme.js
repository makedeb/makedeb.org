initialThemeLoad();

const toggleThemeBtn = document.getElementById("toggle-theme-button");
toggleThemeBtn?.addEventListener("click", function () {
  const body = document.body;
  if (body.className == "dark") {
    setBodyClass("");
    toggleThemeBtn?.classList.remove("active");
    changeBtnIcon("moon");
    localStorage.removeItem("theme");
  } else {
    toggleThemeBtn?.classList.add("active");
    changeBtnIcon("sun");
    localStorage.setItem("theme", "dark");
    setBodyClass("dark");
  }
});

/**
 * Makes nessesary changes for initial theme load
 */
function initialThemeLoad() {
  const toggleThemeBtn = document.getElementById("toggle-theme-button");
  const theme = localStorage.getItem("theme");
  if (theme == "dark") {
    setBodyClass("dark");
    changeBtnIcon("sun");
    toggleThemeBtn?.classList.add("active");
  } else changeBtnIcon("moon");
}

/**
 * Changes the body class
 * @param {string} className - class name to be set
 */
function setBodyClass(className) {
  const body = document.body;
  body.className = className;
}

/**
 * Changes theme toggle button's icon
 * @param {"sun" | "moon"} iconType - icon type to be displayed
 */
function changeBtnIcon(iconType) {
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  if (iconType == "sun") {
    moonIcon?.classList.remove("active-icon");
    sunIcon?.classList.add("active-icon");
  }
  if (iconType == "moon") {
    sunIcon?.classList.remove("active-icon");
    moonIcon?.classList.add("active-icon");
  }
}
