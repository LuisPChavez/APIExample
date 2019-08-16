const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.put("/test", async (req, res) => {
  console.log(req.body);
  res.send({ id: "newID", name: "mockData" });
});

app.listen(3000);
console.log("Express started on Port 3000");
