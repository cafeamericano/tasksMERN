var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  associatedList: {
    type: String,
  }
});

// Create model using defined schema
var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
