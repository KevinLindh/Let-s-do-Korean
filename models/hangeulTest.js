const mongoose = require("mongoose");

const HangeulTestSchema = new mongoose.Schema({
  hangeul: {
    type: Object,
  },
});

module.exports = mongoose.model("hangeul1", HangeulTestSchema);
