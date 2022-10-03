const cloudinary = require("../middleware/cloudinary");
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
  },
  // getPost: async (req, res) => {
  //   try {
  //     const post = await Post.findById(req.params.id);
  //     res.render("post.ejs", { post: post, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // createPost: async (req, res) => {
  //   try {
  //     // Upload image to cloudinary
  //     const result = await cloudinary.uploader.upload(req.file.path);

  //     await Post.create({
  //       title: req.body.title,
  //       image: result.secure_url,
  //       cloudinaryId: result.public_id,
  //       caption: req.body.caption,
  //       likes: 0,
  //       user: req.user.id,
  //     });
  //     console.log("Post has been added!");
  //     res.redirect("/profile");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // likePost: async (req, res) => {
  //   try {
  //     await Post.findOneAndUpdate(
  //       { _id: req.params.id },
  //       {
  //         $inc: { likes: 1 },
  //       }
  //     );
  //     console.log("Likes +1");
  //     res.redirect(`/post/${req.params.id}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // deletePost: async (req, res) => {
  //   try {
  //     // Find post by id
  //     let post = await Post.findById({ _id: req.params.id });
  //     // Delete image from cloudinary
  //     await cloudinary.uploader.destroy(post.cloudinaryId);
  //     // Delete post from db
  //     await Post.remove({ _id: req.params.id });
  //     console.log("Deleted Post");
  //     res.redirect("/profile");
  //   } catch (err) {
  //     res.redirect("/profile");
  //   }
  // },
};
