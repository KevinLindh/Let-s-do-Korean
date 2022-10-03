const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  score: {
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

module.exports = mongoose.model("Results", ResultSchema);