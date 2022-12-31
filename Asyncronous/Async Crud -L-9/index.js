//  CRUD operation using node js (create,update,delete)
/* 
1 : create a folder named it furkan
2 : create a file in it named README.md and add data into it
3 : ADD more data into the file at the end of the existing data.
4 : Read the data without getting the buffer data at first
5 : Rename the file name to RENAME.md
6 : Now Delete both file and the folder;
*/

const fs = require("fs");
// // (1) Create folder
// fs.mkdir("furkan", () => {
//   console.log("completed");
// });

// (2) create file name README.md
// fs.writeFile("./furkan/README.md", "I am created Readme file", (e) => {
//   console.log("completed");
// });

// (3) add more data
fs.appendFile("./furkan/README.md", " We are Add More data", (e) => {
  console.log("Completed");
});
