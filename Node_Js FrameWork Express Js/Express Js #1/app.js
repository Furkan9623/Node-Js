// install node_modules then run 
// command : npm i 

const express = require("express");
const app = express();

// Routing
// app.get(route,callback)

// server created using express
// home page
app.get("/", (req, res) => {
  res.send("Hello Express Js \n Welcome to the Express js");
});
// about page
app.get("/about", (req, res) => {
  res.send("This is About Page : contact me 8584009623");
});
// server listion
app.listen(8000, () => {
  console.log("completed");
});
