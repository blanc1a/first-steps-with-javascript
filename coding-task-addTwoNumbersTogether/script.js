// Ziel: Nutzer gibt 2 Zahlen in die input-felder ein und drückt calc button
// => ergebnis soll ausgerechnet und dargestellt werden
// Reset-Button soll input-felder und ergebnis leeren

const nmbrOneElement = document.querySelector("#input-a");
const nmbrTwoElement = document.querySelector("#input-b");
const btnCalc = document.querySelector("#btn-calc");
const btnReset = document.querySelector("#btn-reset");
const resultElement = document.querySelector("#result");

btnCalc.addEventListener("click", function () {
  //   console.log(nmbrOne.value, nmbrTwo.value);
  //addieren der beiden zahlen und als result ausgeben
  let result = 0;
  result = Number(nmbrOneElement.value) + Number(nmbrTwoElement.value);
  resultElement.innerText = result;
  //   console.log(resultElement);
});

btnReset.addEventListener("click", function () {
  nmbrOneElement.value = "";
  nmbrTwoElement.value = "";
  resultElement.innerText = "";
});

function getResult() {
  return result;
}
