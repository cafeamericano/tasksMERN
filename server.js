var express = require("express");
var mongoose = require("mongoose");
var app = express();

var PORT = process.env.PORT || 7000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import DB models
var db = require("./models");

//Connect to database
var dbURL = process.env.MONGODB_URI || "mongodb://localhost/tasksmern";
mongoose.connect(dbURL, {
  useNewUrlParser: true
});

app.get("/", function(req, res) {
  console.log('home route hit')
  res.send('hello world')
});

app.get("/usertasks", function(req, res) {
  db.Task.find({})
    .sort({ completed: 1 })
    .then(function(queryResult) {
      res.json(queryResult);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.post("/addtask", function(req, res) {
  console.log(req.body);
  db.Task.create({
    completed: false,
    taskName: req.body.taskName
  })
    .then(function(task) {
      console.log(task);
      res.send("Added task.");
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.put("/update", function(req, res) {
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

app.delete("/delete", function(req, res) {
  db.Task.remove({ _id: req.body.taskId })
    .then(function(task) {
      console.log(task);
      res.send("Deleted task.");
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});
