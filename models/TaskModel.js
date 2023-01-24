const mongoose = require("mongoose");
const schema = mongoose.Schema;

const TaskSchema = new schema({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", TaskSchema);
