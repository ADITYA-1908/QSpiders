const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Wrap readline.question into a promise
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

async function getMarks() {
  const subjects = ["Maths", "Science", "EVS", "SST"];
  const marks = {};

  for (let subject of subjects) {
    let valid = false;
    while (!valid) {
      const input = await askQuestion(`Enter marks for ${subject} (out of 100): `);
      const value = parseFloat(input);

      if (!isNaN(value) && value >= 0 && value <= 100) {
        marks[subject] = value;
        valid = true;
      } else {
        console.log("⚠️ Invalid input. Please enter a number between 0 and 100.");
      }
    }
  }

  rl.close();
  return marks;
}

function calculateResult(marks) {
  const subjects = Object.keys(marks);
  const total = subjects.reduce((sum, subject) => sum + marks[subject], 0);
  const percentage = (total / (subjects.length * 100)) * 100;

  console.log("\n📊 Result Summary:");
  for (let subject of subjects) {
    console.log(`${subject}: ${marks[subject]}`);
  }
  console.log(`Total Marks: ${total}/400`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);

  const failed = subjects.some(subject => marks[subject] < 35);
  if (failed) {
    console.log("❌ Result: Fail (One or more subjects scored below 35)");
  } else {
    console.log("✅ Result: Pass");
  }
}

async function main() {
  const marks = await getMarks();
  calculateResult(marks);
}

main();
