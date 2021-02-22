const express = require("express");
const db = require("../database-mysql");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/transactions", (req, res) => {
  //TODO - your code here!
  /*
    1. get all data from the server
  */
  //res.send('hello');
  db.getAllTransactions((err, data) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(data);
  })
});

app.patch("/api/transactions", (req, res) => {
  //console.log(req.body);
  db.getCategory(req.body.data, (err, data) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(data);
  })
})

app.post("/api/categories", (req, res) => {
  console.log(req.body);
  db.postCategory(req.body, (err, data) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(data);
  })
})

app.get("/api/categories", (req, res) => {
  db.getCategories((err, data) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(data);
  })
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
