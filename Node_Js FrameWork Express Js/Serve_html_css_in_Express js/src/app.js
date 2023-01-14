const path = require("path");
const express = require("express");
// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname, "../public");
const app = express();
const port = 8584;
app.use(express.static(staticPath));
app.listen(port, () => {
  console.log(`Website running on port ${port}`);
});
