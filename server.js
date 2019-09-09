var express = require("express");
var app = express();

var PORT = process.env.PORT || 7000;

let obj = [
  { name: "Apple", color: "Red" },
  { name: "Blueberry", color: "Blue" },
  { name: "Banana", color: "Yellow" }
];

app.get("/api", function(req, res) {
  res.json(obj);
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});
