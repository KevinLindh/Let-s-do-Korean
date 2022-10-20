const Reviews = require("../models/Reviews")
const Results = require("../models/Result");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const review = await Reviews.find();
      const results = await Results.find({user: req.user.id})
      res.render("profile", { results, review, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const review = await Reviews.find();
      const results = await Results.find({user: req.user.id})
      res.render("sections", {results, review: review, user: req.user});
    } catch (err) {
      console.log(err);
    }
  }
};
