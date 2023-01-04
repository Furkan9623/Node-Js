const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("This is Home Page");
  } else if (req.url == "/product") {
    res.end("This is product page");
  } else if (req.url == "/about") {
    res.end("This is the About page");
  } else {
    res.end("404 Error Page");
  }
});
server.listen(8080, () => {
  console.log("listing to port 8080");
});
