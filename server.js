var express = require("express");
var mongoose = require("mongoose");
var app = express();

var PORT = process.env.PORT || 7000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

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

app.post("/update", function(req, res) {
  console.log(req.body);
  db.Task.update(
    { _id: req.body.taskId },
    { $set: { completed: req.body.completionStatus } },
    { upsert: true },
    function(err) {
      res.send("Success");
    }
  );
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});
