const fs = require("fs");
// fs.writeFile("README.md", "ADD SOME DATA", (err, data) => {
//   console.log("completed");
// });

// fs.appendFile("README.md", " \n Now I am streaming the data", (err, data) => {
//   console.log("data");
// });

const http = require("http");

// first way to read the data

// const server = http.createServer();
// server.on("request", (req, res) => {
//   fs.readFile("README.md", (err, data) => {
//     if (err) console.error(err);
//     res.end(data);
//     console.log(data);
//   });
// });
// server.listen(8080, () => {
//   console.log("lising 8080");
// });

// 2nd ways to read the data using readable stream
// Streaming : Real time changes like in streaming IPL MATCH
// "data","end","error" all are the event
const server = http.createServer();
server.on("request", (req, res) => {
  const rStream = fs.createReadStream("README.md");
  rStream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rStream.on("end", () => {
    res.end();
  });
  rStream.on("error", (err) => {
    console.log(error);
    // suppose i am change the README.md to READMES.md then its shot an eror
    res.end("PAGE NOT FOUND");
  });
});
server.listen("8080", () => {
  console.log("lising 8080 port");
});
