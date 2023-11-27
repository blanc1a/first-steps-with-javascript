// Coding Task 01
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

// Coding Task 02: Use operators & data types
// Write a string that logs out your first name
console.log("B" + "l" + "a" + "n" + "c" + "a");

// Spot the problem and solve them
console.log("Hallo");
console.log("That doesn't work");
console.log(50 + 2 >= 52);
console.log("333" === 333);
console.log(600 + 510 / 2);
console.log(2 + 2);

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

// Coding Task 05: If & Switch Statements
// Spot the errors and fix them
const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);

//oddEven function
function oddEven(nmbr) {
  if (nmbr % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));

//oldYoung function
function oldYoung(secondNmbr) {
  if (!Number.isInteger(secondNmbr) === true || secondNmbr < 0) {
    console.error("Invalid Parameter");
  }

  if (secondNmbr < 16) {
    return "children";
  } else if (secondNmbr < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));
console.log(oldYoung("3"));

// Coding Task 6 - using loops
// oddNumbers function
let firstNmbr;
let secondNmbr;
function oddNumbers(firstNmbr, secondNmbr) {
  if (firstNmbr < 0 || secondNmbr < 0) {
    return "negative numbers not allowed";
  }
  von = Math.min(firstNmbr, secondNmbr); //math.min() gibt den kleinsten wert der input parameter zurück
  bis = Math.max(firstNmbr, secondNmbr); //math.max() gibt den größten wert der input parameter zurück
  let strng = ""; //deklaration eines strings
  for (let i = von; i <= bis; i++) {
    if (i % 2 == 1) {
      strng = strng + i.toString() + ","; //variable wird befüllt mit den ungeraden zahlen als string (toString()) und einem komma zum trennen der string-zahlen
    }
  }
  if (strng.length > 0) {
    strng = strng.substring(0, strng.length - 1); //substring() returned einen teil des gegebenen string => strng enthält alle string-zahlen und entsprechende kommata und -1 nimmt den letzten character (ein komma) weg
  }
  return strng;
}
console.log(oddNumbers(0, 4));
console.log(oddNumbers(10, 33));
console.log(oddNumbers(9, 12));
console.log(oddNumbers(-1, 12));

// charCount function
function charCount(str, char) {
  let count = 0;
  if (char.length > 1) {
    return "not allowed";
  }
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      count++;
    }
  }
  return count;
}
console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

console.log(charCount("Resümee", "ee"));
// result should be: 3
