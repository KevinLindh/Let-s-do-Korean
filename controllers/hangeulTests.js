const hangeulTest = require("../models/HangeulTest.js");
const User = require("../models/User");
const Reviews = require("../models/Reviews");
const Result = require("../models/Result");

module.exports = {
  // getPost: async (req, res) => {
  //   try {
  //     const post = await Post.findById(req.params.id);
  //     res.render("post.ejs", { post: post, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  getHangeulTest: async (req, res) => {
    try {
      const user = await User.find();
      const hangeul = await hangeulTest.find({ "section": req.params.section });
      res.render("hangeulTest.ejs", { hangeul: hangeul, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  getHangeulReview: async (req, res) => {
    try {
      const user = await User.find();
      const hangeul = await hangeulTest.find({ "section": req.params.section });
      console.log(hangeul[0].section)
      res.render("hangeulReview.ejs", {hangeul: hangeul, user: req.user });
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
