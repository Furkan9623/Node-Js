const express = require("express");
const app = express();
const port = 8584;
app.get("/", (req, res) => {
  // data send in html format
  res.send("<h1>Data send in Html format</h1>");
});
// for error handling

// data send in json format to the user first way for one data
app.get("/about", (req, res) => {
  res.send({
    id: 1,
    name: "furkan",
  });
});
// data send in json format to the user multiple data at time first way
app.get("/contact", (req, res) => {
  res.send([
    {
      id: 2,
      name: "faizan",
      qualification: undefined,
    },
    {
      id: 3,
      name: "Afsar",
    },
    {
      id: 4,
      name: "Usuf",
    },
  ]);
});

// second way to send data to the user in json format
app.get("/data", (req, res) => {
  res.json([
    {
      id: 6,
      name: "furkan",
    },
    {
      id: 7,
      name: "furkan",
    },
    {
      id: 8,
      name: "furkan",
    },
  ]);
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});
app.listen(port, () => {
  console.log(`listing to the port ${port}`);
});
