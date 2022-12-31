let fs = require("fs"); // core module "fs"

// (1) create new file
// fs.writeFileSync("README.md", "Welcome to Indial");
// when README.md already present the data over write becoz of syncronous function
// fs.writeFileSync("README.md", "Change the data");

// (2) add data in READEME.md
// fs.appendFileSync("README.md", " : How are You");

//(3) read file (README.md)
// const read = fs.readFileSync("README.md");
// console.log(read); // its gives buffer data
// console.log(read.toString());

//(4) reaname file name
// fs.renameSync("README.md", "RENAME.md");
