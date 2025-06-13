const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Starting a server</h1>\n");
  res.write("Part 1 of the response\n");
  res.end("<br/>End");
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
