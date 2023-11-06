// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.
let firstNumber = prompt("Please provide the first number");
let secondNumber = prompt("Please provide the second number");
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

alert("The SUM of both numbers is: " + firstNumber + secondNumber);
alert("The SUBTRACTION of both numbers is: " + (firstNumber - secondNumber));
alert("The MULTIPLICATION of both numbers is: " + firstNumber * secondNumber);
alert("The DIVISION of both numbers is: " + firstNumber / secondNumber);
