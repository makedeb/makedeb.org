initialThemeLoad();

const toggleThemeBtn = document.getElementById("toggle-theme-button");
toggleThemeBtn.addEventListener("click", function () {
  const body = document.body;
  if (body.className == "dark") {
    document.body.className = "light";
    toggleThemeBtn.classList.remove("active");
    setImages("dark");
    localStorage.removeItem("theme");
  } else {
    toggleThemeBtn.classList.add("active");
    document.body.className = "dark";
    setImages("light");
    localStorage.setItem("theme", "dark");
  }
});

/**
 * Makes nessesary changes for initial theme load
 */
function initialThemeLoad() {
  const toggleThemeBtn = document.getElementById("toggle-theme-button");
  const theme = localStorage.getItem("theme");
  if (theme == "dark") {
    document.body.className = "dark";
    setImages("light");
    toggleThemeBtn.classList.add("active");
  } else {
    setImages("dark");
  }
}

/**
 * Set the images on the page to the specified theme type.
 * @param {"light" | "dark"} imageType - image set to be displayed
 */
function setImages(imageType) {
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const autheliaLogo = document.querySelector(
    ".groups-using-makedeb .authelia img"
  );
  const prismLauncherLogo = document.querySelector(
    ".groups-using-makedeb .prism-launcher img"
  );

  console.log(new URL("wow", autheliaLogo.src));

  if (imageType == "light") {
    moonIcon.classList.remove("active-icon");
    sunIcon.classList.add("active-icon");
    autheliaLogo.src = new URL("authelia-logo-light.svg", autheliaLogo.src);
    prismLauncherLogo.src = new URL(
      "prismlauncher-logo-light.svg",
      autheliaLogo.src
    );
  }

  if (imageType == "dark") {
    sunIcon.classList.remove("active-icon");
    moonIcon.classList.add("active-icon");
    autheliaLogo.src = new URL("authelia-logo-dark.svg", autheliaLogo.src);
    prismLauncherLogo.src = new URL(
      "prismlauncher-logo-dark.svg",
      autheliaLogo.src
    );
  }
}
