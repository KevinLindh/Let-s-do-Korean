const mongoose = require("mongoose");

const HangeulTestSchema = new mongoose.Schema({
  test: {
    type: Object,
  },
  section: {
    type: String,
  }
});

module.exports = mongoose.model("hangeul1", HangeulTestSchema);
