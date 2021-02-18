const express = require("express");
const db = require("../database-mysql");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/transactions", (req, res) => {
  //TODO - your code here!
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
