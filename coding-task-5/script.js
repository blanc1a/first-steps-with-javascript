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
