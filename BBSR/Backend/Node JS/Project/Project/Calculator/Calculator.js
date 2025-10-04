const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  new Promise((resolve) => rl.question(query, resolve));
};
console.log("1) Addition (+)");
console.log("2) Subtraction (-)");
console.log("3) Multiplication (*)");
console.log("3) Multiplication (*)");
console.log("    5) Exit");

async function main() {
  const a = Number(await askQuestion("Enter a = "));
  const b = Number(await askQuestion("Enter b = "));
  const option = Number(await askQuestion("Enter option= "));

  rl.close();

  switch (option) {
    case 1:
      console.log(`Result: ${a} + ${b} = ${a + b}`);
      main();
      break;
    case 2:
      console.log(`Result: ${a} + ${b} = ${a - b}`);
      main();
      break;
    case 3:
      console.log(`Result: ${a} + ${b} = ${a * b}`);
      main();
      break;
    case 4:
      console.log(`Result: ${a} + ${b} = ${a / b}`);
      main();
      break;
    case 5:
      console.log("Exiting");
      rl.close();
      break;
    default:
      console.log("Invalid Option");
      main();
      break;
  }
}

main();
