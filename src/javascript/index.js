let themes = document.querySelector(".theme");
let toggle = document.querySelector(".switch");
let cont = 0;

toggle.addEventListener("click", () => {
  cont++;
  if (cont == 1) {
    toggle.className = "switch-2";
    themes.className = "theme-two";
  } else if (cont == 2) {
    toggle.className = "switch-3";
    themes.className = "theme-three";
  } else {
    toggle.className = "switch";
    themes.className = "theme";
    cont = 0;
  }
});
