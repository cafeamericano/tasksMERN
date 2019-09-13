var express = require("express");
var mongoose = require("mongoose");
var app = express();

var PORT = process.env.PORT || 7000;

//Import DB models
var db = require("./models");

//Connect to database
var dbURL = process.env.MONGODB_URI || "mongodb://localhost/tasksmern";
mongoose.connect(dbURL, {
  useNewUrlParser: true
});

let userLists = [
  { listName: "Household" },
  { listName: "Groceries" },
  { listName: "Bills" }
];

app.get("/userlists", function(req, res) {
  res.json(userLists);
});

app.get("/usertasks", function(req, res) {
  db.Task.find({})
    .then(function(queryResult) {
      res.json(queryResult);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.put("/update", function(req, res) {
  db.Task.find(
    { _id: req.body.id },
    { $set: { completed: req.body.completionStatus } }
  )
    .then(function() {
      res.send("Task updated.");
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});
