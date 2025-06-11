const http = require("http");
// console.log(http);
const server = http.createServer((req, res) => {
  res.write("<h1>Starting a server</h1>\n");
  res.write("Part 1 of the response\n");
  res.end("\nEnd");
});
// console.log(server);
server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
