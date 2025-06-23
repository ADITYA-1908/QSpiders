const { name, age, sum } = require("./Topics/ImportExport/fileA");
const { degree, x, y } = require("./Topics/ImportExport/fileB");
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Starting a server</h1>\n");
  res.write(
    `My name is ${name} having age ${age} completed my  Degree ${degree()}\n`
  );
  res.write(`<br/>Sum of x and y: ${sum(x, y)}\n`);
  res.end("<br/>End");
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
