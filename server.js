var express = require("express");
var app = express();

var PORT = process.env.PORT || 7000;

let userLists = [
  { listName: "Household" },
  { listName: "Groceries" },
  { listName: "Bills" }
];

let userTasks = [
  { taskName: "Clean countertops", associatedList: "Household" },
  { taskName: "Wash clothes", associatedList: "Household" },
  { taskName: "Vacuum living room", associatedList: "Household" },
  { taskName: "Eggs", associatedList: "Groceries" },
  { taskName: "Milk", associatedList: "Groceries" },
  { taskName: "Electricity", associatedList: "Bills" },
  { taskName: "Apple Music", associatedList: "Bills" }
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
