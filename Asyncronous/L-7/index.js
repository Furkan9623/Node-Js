const fs = require("fs");
// (1) Create file using asyncrounous
// fs.writeFile("README.md", "I am furkan", (error) => {
//   console.log("completed");
//   console.log(error); // gives the null
// });

// (2) Add more data in README.md file
// fs.appendFile("README.md", " We are adding more data ", (error) => {
//   console.log("completed");
// });

// (3) Read file,
// fs.readFile("README.md", (error, data) => {
//   console.log(data); // give buffer data
//   console.log(data.toString());
// });

// (4) Read file  ## utf-8 ==> convert buffer data to string
// fs.readFile("README.md", "utf-8", (err, data) => {
//   console.log(data);
// });

// (5) Rename file
// fs.rename("README.md", "RENAME.md", () => {
//   console.log("completed");
// });

// (6) Create new file
// fs.writeFile("NEXT.md", "Hello World", () => {
//   console.log("completed");
// });

// (7) Deleted file
// fs.unlink("NEXT.md", () => {
//   console.log("delted");
// });
