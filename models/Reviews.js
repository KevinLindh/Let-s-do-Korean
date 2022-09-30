const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
  sections: {
    type: Array,
  },
});

module.exports = mongoose.model("Reviews", ReviewsSchema);