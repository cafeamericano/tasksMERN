var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

var PORT = process.env.PORT || 7000;

//Middleware
app.use(cors());
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

//Serve up the React application
app.use(express.static(path.resolve(__dirname, "build")));

//Pull JSON for tasks
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

//Add a new task
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

//Update a task
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

//Delete a task
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

//For any other path, serve up the index.html file
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

//Start server
app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});
