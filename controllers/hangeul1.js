const HangeulTest = require("../models/Hangeul1");
const User = require("../models/User");
const Result = require("../models/Result");

module.exports = {
  getHangeulTest: async (req, res) => {
    try {
      const hangeul = await HangeulTest.find({ "section": req.params.section });
      res.render("hangeulTest", { hangeul: hangeul, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  getHangeulReview: async (req, res) => {
    try {
      const hangeul = await HangeulTest.find({ "section": req.params.section });
      console.log(hangeul[0].section)
      res.render("hangeulReview", {hangeul: hangeul, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createHangeulResult: async (req, res) => {
    try {
      console.log(req.body.test);
       await Result.create({
         test: req.body.test,
         score: req.body.score,
         user: req.user.id,
        });
      if(req.body.test >= req.user.stage){
      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          $inc: { stage: 1 },
        }
      );}
      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          $inc: { points: 50 },
        }
      );
      console.log("Result has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
