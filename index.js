const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let data = require("./fakeData");
data = data.data;

app.get("/getUserById", (request, response) => {
  console.log(request.query);
  let { id } = request.query;
  let userReturned = data.find(user => {
    return user.id == id;
  });
  response.send({ userReturned });
});

app.put("/addUser", async (req, res) => {
  console.log(req.body);
  let { id } = req.body;
  /*
    Adds user to database
   */

  res.send({ id: id, status: "Added User Successfully" });
});

app.listen(3000);
console.log("Express started on Port 3000");
