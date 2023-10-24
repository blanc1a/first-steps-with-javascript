// Coding Task 6: Arrays
// removeItem function
const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

function removeItem(arr, nmbr) {
  const outputArray = structuredClone(arr);
  outputArray.splice(nmbr - 1, 1); //non-zero-based index
  return outputArray;
}
console.log(removeItem(animals, 1));
console.log(animals);

// sumOfCharacters function
const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];

function sumOfCharacters(mixedArr) {
  let count = 0;
  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === "string") {
      count = count + mixedArr[i].length;
    }
  }
  return count;
}

console.log(sumOfCharacters(arr1));
// result should be: 17

console.log(sumOfCharacters(arr2));
// result should be: 55
