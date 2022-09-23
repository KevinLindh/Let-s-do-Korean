const express = require("express");
const router = express.Router();
const hangeulController = require("../controllers/hangeulTest");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, hangeulController.getHangeulTest);
router.get("/test", ensureAuth, hangeulController.getHangeulReview)
router.post("/result", ensureAuth, hangeulController.getHangeulResult);

module.exports = router;
