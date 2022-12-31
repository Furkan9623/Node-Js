// challenge

// CRUD operation using node js (create,update,delete)
/* 
1 : create a folder named it furkan
2 : create a file in it named README.md and add data into it
3 : ADD more data into the file at the end of the existing data.
4 : Read the data without getting the buffer data at first
5 : Rename the file name to RENAME.md
6 : Now Delete both file and the folder;
*/

const fs = require("fs"); // core module fs = file system

// (1) create folder using node js
// fs.mkdirSync("furkan");

// (2) create file in furkan folder
// fs.writeFileSync("furkan/README.md", "My name is md furkan");

// (3) ADD more data into the README.md to the end
// fs.appendFileSync("furkan/README.md", " We are add more data using node js");

// (4) Read file
let read = fs.readFileSync("furkan/README.md");
console.log(read.toString());

