var express = require("express");
var app = express();

var PORT = process.env.PORT || 7000;

let userLists = [
  { listName: "Household" },
  { listName: "Groceries" },
  { listName: "Bills" }
];

let userTasks = [
  {
    taskName: "Clean countertops",
    associatedList: "Household",
    completed: false
  },
  { taskName: "Wash clothes", associatedList: "Household", completed: false },
  {
    taskName: "Vacuum living room",
    associatedList: "Household",
    completed: false
  },
  { taskName: "Eggs", associatedList: "Groceries", completed: false },
  { taskName: "Milk", associatedList: "Groceries", completed: true },
  { taskName: "Electricity", associatedList: "Bills", completed: false },
  { taskName: "Apple Music", associatedList: "Bills", completed: false }
];

app.get("/userlists", function(req, res) {
  res.json(userLists);
});

app.get("/usertasks", function(req, res) {
  res.json(userTasks);
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});
