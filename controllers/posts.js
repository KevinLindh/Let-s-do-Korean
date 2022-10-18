const Reviews = require("../models/Reviews")
const hangeulTest = require("../models/HangeulTest");
const Results = require("../models/Result");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const review = await Reviews.find();
      const hangeul = await hangeulTest.find()
      console.log(req.user.id)
      const results = await Results.find({user: req.user.id})
      res.render("profile.ejs", { results, review, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const review = await Reviews.find();
      res.render("feed.ejs", {review: review, user: req.user});
    } catch (err) {
      console.log(err);
    }
  }
};
