// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });
// server.listen(8080, "127.0.0.1", () => {
//   console.log("listing to the port no 8080");
// });

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});
server.listen(8000, () => {
  console.log("listen to port 8000");
});
