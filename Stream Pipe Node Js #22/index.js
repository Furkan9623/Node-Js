const fs = require("fs");
const { Http2ServerRequest } = require("http2");
// create server

// *** 1st easist way to reade stream data using Stream pipe
const http = require("http");
const server = http.createServer();
server
  .on("request", (req, res) => {
    const rStream = fs.createReadStream("README.md");
    rStream.pipe(res);
  })
  .listen(8080);

// *** second ways to reade stream data

// const http = require("http");
// const server = http.createServer();
// server
//   .on("request", (req, res) => {
//     const rStream = fs.createReadStream("README.md");
//     rStream.on("data", (chunk) => {
//       res.write(chunk);
//       res.end();
//     });
//   })
//   .listen(8080);
