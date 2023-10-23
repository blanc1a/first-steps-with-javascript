// Coding Task 03: First contact with functions
// Greet function
function welcomeMsg(name) {
  return "Welcome " + name;
}
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// Gross Price Function
function calcGrossPrice(netPrice, taxRate) {
  //  return netPrice * ((1 + taxRate) / 1);
  return Math.round(netPrice * (1 + taxRate) * 100) / 100;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// Add Positive Function
function addPositive(nmbr1, nmbr2) {
  return Math.abs(nmbr1) + Math.abs(nmbr2);
}
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
