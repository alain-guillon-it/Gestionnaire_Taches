const mongoose = require("mongoose");

const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

const schema = mongoose.Schema;

const TaskSchema = new schema(
  {
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
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model(COLLECTION_NAME, TaskSchema);
