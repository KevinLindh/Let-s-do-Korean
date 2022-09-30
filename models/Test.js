const mongoose = require("mongoose");

const TestTestSchema = new mongoose.Schema({
  _id: { type: Object},
  hangeul: {
    type: Object,
  },
});

module.exports = mongoose.model("second", TestTestSchema);
