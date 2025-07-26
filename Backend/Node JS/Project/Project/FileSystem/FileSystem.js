const fs = require("fs");
const path = require("path");
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

console.log("Choose any one option:");
console.log("1. Create a file");
console.log("2. Read a file");
console.log("3. Delete a file");
console.log("4. Rename a file");
console.log("5. Exit");

async function Filemanage() {
  const option = await askQuestion("Enter your option: ");
  switch (option) {
    case "1": {
      const filename = await askQuestion("Enter file name: ");
      const content = await askQuestion("Enter your content: ");
      fs.writeFile(path.join(__dirname, filename), content, (err) => {
        if (err) {
          console.log("Something went wrong while creating the file.");
          return;
        }
        console.log("File created successfully.");

        fs.readFile(path.join(__dirname, filename), (err, data) => {
          if (err) {
            console.log("Error reading the file.");
            return;
          }
          console.log("File Content:");
          console.log(data.toString());
        });
      });
      Filemanage();
      break;
    }

    case "2": {
      const filename = await askQuestion("Enter your file name: ");
      const filepath = path.join(__dirname, filename);
      if (fs.existsSync(filepath)) {
        console.log("Reading the file...");
        fs.readFile(filepath, (err, data) => {
          if (err) {
            console.log("Error reading the file.");
            return;
          }
          console.log("File Content:");
          console.log(data.toString());
        });
      } else {
        console.log("File not found 🚫");
      }
      Filemanage();
      break;
    }

    case "3": {
      const filename = await askQuestion("Which file do you want to delete? ");
      const filepath = path.join(__dirname, filename);
      if (fs.existsSync(filepath)) {
        fs.unlink(filepath, (err) => {
          if (err) {
            console.log("Something went wrong. The file was not deleted.");
          } else {
            console.log("File deleted successfully 😁");
          }
        });
      } else {
        console.log("File not found 🚫");
      }
      Filemanage();
      break;
    }

    case "4": {
      const oldName = await askQuestion("Enter the current file name: ");
      const newName = await askQuestion("Enter the new file name: ");
      const oldPath = path.join(__dirname, oldName);
      const newPath = path.join(__dirname, newName);

      if (fs.existsSync(oldPath)) {
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.log("Something went wrong while renaming the file.");
          } else {
            console.log("File renamed successfully 🎉");
          }
          Filemanage();
        });
      } else {
        console.log("File not found 🚫");
        Filemanage();
      }

      return;
    }

    case "5": {
      console.log("succesfully Exit");
      rl.close();
      break;
    }
    default:
      console.log("Invalid choice ❌");
      break;
  }
}

Filemanage();
