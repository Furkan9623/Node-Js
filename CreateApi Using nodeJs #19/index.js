const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is our HOme page");
  } else if (req.url === "/user") {
    fs.readFile("./user.json", "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  } else {
    res.end("<h1>Error 404</h1>");
  }
});
server.listen(3002, () => {
  console.log("lising port 3002");
});
