// Coding Task 04: Variables
// Spot the errors and fix them
const userName = "Brad";

function getUserNameLength(userName) {
  return userName.length;
}

console.log(getUserNameLength(userName) >= 4);

// isString function
let myVar;
const isString = function (myVar) {
  return typeof myVar == "string";
};
console.log(isString("Hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));
