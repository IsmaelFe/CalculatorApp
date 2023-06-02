let themes = document.querySelector(".theme");
let toggle = document.querySelector(".switch");
let cont = 0;

let input = document.querySelector(".input-result");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let del = document.querySelector(".del-button");
let reset = document.querySelector(".reset-button");
let result = document.querySelector(".result-button");
let plus = document.querySelector(".plus");
let less = document.querySelector(".less");
let division = document.querySelector(".division");
let multiplication = document.querySelector(".multiplication");
let spot = document.querySelector(".spot");

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

function agregar(text) {
  value = text.target.innerText;
  input.value += value;
}

one.addEventListener("click", (e) => {
  agregar(e);
});
two.addEventListener("click", (e) => {
  agregar(e);
});
three.addEventListener("click", (e) => {
  agregar(e);
});
four.addEventListener("click", (e) => {
  agregar(e);
});
five.addEventListener("click", (e) => {
  agregar(e);
});
six.addEventListener("click", (e) => {
  agregar(e);
});
seven.addEventListener("click", (e) => {
  agregar(e);
});
eight.addEventListener("click", (e) => {
  agregar(e);
});
nine.addEventListener("click", (e) => {
  agregar(e);
});
zero.addEventListener("click", (e) => {
  agregar(e);
});
plus.addEventListener("click", (e) => {
  agregar(e);
});
less.addEventListener("click", (e) => {
  agregar(e);
});
spot.addEventListener("click", (e) => {
  agregar(e);
});
division.addEventListener("click", (e) => {
  agregar(e);
});
multiplication.addEventListener("click", (e) => {
  agregar(e);
});
reset.addEventListener("click", () => {
  input.value = null;
});
del.addEventListener("click", () => {
  let valor = input.value;
  let nuevoValor = valor.slice(0, -1);
  input.value = nuevoValor;
});

result.addEventListener("click", () => {
  let valor = input.value;
  operaciones(valor);
});

function operaciones(value) {
  let newValue = value;
  let expresionSig = /\+|\-|\x|\//g;
  let expresionNum = /[0-9]*\.?[0-9]+/g;
  let sigArray = newValue.match(expresionSig);
  let numArray = newValue.match(expresionNum).map((number) => {
    return parseFloat(number);
  });
  console.log(numArray);
  console.log(sigArray);

  const operadores = [
    {
      operador: "/",
      fn: function (a, b) {
        return a / b;
      },
    },
    {
      operador: "x",
      fn: function (a, b) {
        return a * b;
      },
    },
    {
      operador: "+",
      fn: function (a, b) {
        return a + b;
      },
    },
    {
      operador: "-",
      fn: function (a, b) {
        return a - b;
      },
    },
  ];

  for (let i = 0; i < operadores.length; i++) {
    while (sigArray.indexOf(operadores[i].operador !== -1)) {
      let indice = sigArray.indexOf(operadores[i].operador);
      let resultado = operadores[i].fn(numArray[indice], numArray[indice + 1]);

      numArray.splice(indice, 2, resultado);
      sigArray.splice(indice, 1);
    }
  }
}
