const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const TODO_PATH = path.join(__dirname, "todo.json");

// Ensure the todo.json file exists
function ensureTodoFile() {
  if (!fs.existsSync(TODO_PATH)) {
    fs.writeFileSync(TODO_PATH, JSON.stringify([]));
    console.log("📝 Created new todo.json file.\n");
  }
}

// Read todos from the file
const fetchTodos = () => {
  try {
    const data = fs.readFileSync(TODO_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};
//show the Todo list

// Save todos to the file
const storeTodos = (todos) => {
  fs.writeFileSync(TODO_PATH, JSON.stringify(todos, null, 2));
};

async function todoManager() {
  console.log("\n<-----------------TODO LIST MANAGER----------------->");
  console.log("1. Add a Todo");
  console.log("2. View Todos");
  console.log("3. Delete a Todo by ID");
  console.log("4. Update a Todo by ID");
  console.log("5. Exit");

  const option = await askQuestion("Enter your option: ");
  let todos = fetchTodos();
  function showToo() {
    if (todos.length === 0) {
      console.log(" No todos found.");
    } else {
      console.log("Your Todos:");
      todos.map((item, index) => {
        console.log(`${index + 1}. [${item.id}] [${item.text}]`);
      });
    }
  }
  switch (option) {
    case "1": {
      const text = await askQuestion("Enter your todo: ");
      const data = {
        id: Date.now().toString(),
        text: text,
      };
      todos.push(data);
      storeTodos(todos);
      console.log("Todo added with ID:", data.id);
      break;
    }

    case "2": {
      showToo();
      break;
    }

    case "3": {
      showToo();
      const id = await askQuestion("Enter the ID of the todo to delete: ");
      const newTodos = todos.filter((todo) => todo.id !== id);
      if (newTodos.length === todos.length) {
        console.log("No todo found with that ID.");
      } else {
        storeTodos(newTodos);
        console.log("Todo deleted.");
      }
      break;
    }

    case "4": {
      showToo();
      const id = await askQuestion("Enter the ID of the todo to update: ");
      const index = todos.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        const newText = await askQuestion("Enter the new todo text: ");
        todos[index].text = newText;
        storeTodos(todos);
        console.log("Todo updated.");
      } else {
        console.log("No todo found with that ID.");
      }
      break;
    }

    case "5":
      console.log("Exiting Todo Manager.");
      rl.close();
      return;

    default:
      console.log("Invalid option. Try 1 to 5.");
  }

  todoManager();
}

ensureTodoFile();
todoManager();
