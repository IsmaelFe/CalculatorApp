let toggle = document.querySelector(".switch");
let cont = 0;

toggle.addEventListener("click", () => {
  cont++;
  if (cont == 1) {
    toggle.className = "switch-2";
  } else if (cont == 2) {
    toggle.className = "switch-3";
  } else {
    toggle.className = "switch";
    cont = 0;
  }
});
