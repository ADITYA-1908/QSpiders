const sum = require("./Addition");
const sub = require("./Subtraction");
const mul = require("./Multiplication");
const div = require("./Division");

const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a = "));
let b = Number(prompt("Enter b = "));
let operation = prompt("Enter the operation: ");

switch (operation) {
  case "+":
    console.log(`Result: ${sum(a, b)}`);
    break;
  case "-":
    console.log(`Result: ${sub(a, b)}`);
    break;
  case "*":
    console.log(`Result: ${mul(a, b)}`);
    break;
  case "/":
    console.log(`Result: ${div(a, b)}`);
    break;
  default:
    console.log("Invalid operation");
    break;
}
