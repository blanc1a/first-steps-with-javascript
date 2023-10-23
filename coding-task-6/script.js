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

// OR
function oddNumbersOnly(lower, upper) {
  let result = "";
  if (lower < 0 || lower < 0) {
    return "negative numbers not allowed";
  }
  for (let i = lower; i < upper; i++) {
    if (i % 2 !== 0) {
      if (i === lower) {
        result = result + i;
      } else {
        result = result + "," + i;
      }
    }
  }
  return result;
}
console.log(oddNumbersOnly(0, 4));
console.log(oddNumbersOnly(10, 33));
console.log(oddNumbersOnly(9, 12));
console.log(oddNumbersOnly(-1, 12));

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
