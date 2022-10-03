const express = require("express");
const router = express.Router();
const hangeulController = require("../controllers/hangeulTest");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const upload = require("../middleware/multer");

router.get("/:section", ensureAuth, hangeulController.getHangeulTest);
router.get("/test/:section", ensureAuth, hangeulController.getHangeulReview)
router.post("/result", upload.single("file"), hangeulController.createHangeulResult);

module.exports = router;