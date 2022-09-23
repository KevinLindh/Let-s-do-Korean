const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  result: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  test: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Result", ResultSchema);