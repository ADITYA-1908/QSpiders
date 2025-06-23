const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

async function main() {
  const userName = await askQuestion("Enter name: ");
  const age = await askQuestion("Enter age: ");
  console.log("Name:", userName);
  console.log("Age:", age);
  rl.close();
}

main();
