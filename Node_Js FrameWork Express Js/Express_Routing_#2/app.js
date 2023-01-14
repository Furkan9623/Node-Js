const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello Java");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page", 200);
});

app.get("/temp", (req, res) => {
  res.status(200).send("Temperature is 20 Degree");
});
// when invalid route then show this
app.get("*", (req, res) => {
  res.send("Page Not Found", 404);
});
app.listen(port, () => {
  console.log(`listing to the port ${port}`);
});
