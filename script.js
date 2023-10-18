console.log("Hello World");

// Arithmetic Operators
console.log(1 + 1);
console.log(8 - 5);
console.log(9 * 9);
console.log(100 / 5);

// Comparison Operators
console.log(1 == 1);
console.log(2 != 1);
console.log(2 != 2);
console.log(1 >= 1);
console.log(3 > 3);
console.log(8 <= 8);

// Coding Task: Use operators & data types
// Write a string that logs out your first name
console.log("B" + "l" + "a" + "n" + "c" + "a");

// Spot the problem and solve them
console.log("Hallo");
console.log("That doesn't work");
console.log(50 + 2 >= 52);
console.log("333" === 333);
console.log(600 + 510 / 2);
console.log(2 + 2);

// Coding Task: First contact with functions
// Greet function
function welcomeMsg(name) {
  return "Welcome " + name;
}
console.log(welcomeMsg("Jane"));

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
