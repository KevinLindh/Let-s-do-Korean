const hangeulTest = require("../models/hangeulTest");
const User = require("../models/User");
const Result = require("../models/Result")

module.exports = {
  getHangeulTest: async (req, res) => {
    try {
      const user = await User.find();
      const hangeul = await hangeulTest.find();
      res.render("hangeulTest.ejs", { hangeul: hangeul, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  getHangeulReview: async (req, res) => {
    try {
      console.log(req.user._id)
      const user = await User.find();
      const hangeul = await hangeulTest.find();
      res.render("hangeulReview.ejs", {hangeul: hangeul, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  postHangeulResult: async (req, res) => {
    try {
      await Result.create({
        test: req.body.test,
        score: req.body.score,
        user: req.user.id,
      });
      console.log("Result has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
